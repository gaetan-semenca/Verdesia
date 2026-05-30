/* ══════════════════════════════════════════════════════════════
   VERDÉSIA — Observaciones (memoria del huerto)

   Capa fina sobre localStorage para guardar las "Lecturas del huerto"
   que el usuario decide memorizar. Cada observación es inmutable :
   no se edita, sólo se crea o se elimina. La memoria es un testigo,
   no un borrador.

   ─── Persistencia ────────────────────────────────────────────
   Clave : verdesia_observations
   Forma : array de objetos (más reciente al final del flujo de save,
           pero list() retorna en orden cronológico inverso para la UI).

   ─── Modelo de una observación ───────────────────────────────
   {
     id:                "obs_<timestamp>",
     createdAt:         ISO string,
     image:             data URL comprimida (JPEG) ó null,
     summary:           string,
     globalHealth:      'excellent'|'good'|'mixed'|'stressed'|'poor'|'unclear',
     importantFindings: [string],   // máx 3
     nextActions:       [string],   // máx 3
     season:            'summer'|'autumn'|'winter'|'spring', // hemisferio sur
     region:            id de región chilena,
     sceneType:         string,
   }

   ─── Freemium ────────────────────────────────────────────────
   Free (Semilla)        : 3 últimas observaciones (rolling)
   Premium (Verdésia Plus) : sin límite

   El cap rolling se aplica en cada save() — la observación más antigua
   sale silenciosamente. Sin pop-up, sin advertencia agresiva. Cuando un
   usuario premium baja a free, se conservan SOLO las 3 más recientes
   en el próximo save() (no en el momento del downgrade, para no perder
   datos sin razón).

   ─── Compresión de imagen ────────────────────────────────────
   Las data URLs originales del módulo Lectura pueden pesar 1–3 MB.
   Comprimimos a 800px lado mayor, JPEG 0.7 → ~80–150 KB por foto.
   Sin compresión, el quota localStorage (5 MB) saturaría a los 3-4 saves.

   ─── Eventos ─────────────────────────────────────────────────
   verdesia:observationschange — disparado tras save() o remove().
                                 detail.count contiene el total actual.
   ══════════════════════════════════════════════════════════════ */

(function () {

  const KEY = 'verdesia_observations';
  const MAX_FREE = 3;
  const IMAGE_MAX_DIM = 800;
  const IMAGE_QUALITY = 0.7;

  /* ─── Helpers internos ────────────────────────────────────── */

  function _read() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return [];
      const arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr : [];
    } catch (e) {
      console.warn('[observations] read failed:', e);
      return [];
    }
  }

  function _write(arr) {
    try {
      localStorage.setItem(KEY, JSON.stringify(arr || []));
      return true;
    } catch (e) {
      console.warn('[observations] write failed (quota?):', e);
      return false;
    }
  }

  function _emit(detail) {
    try {
      window.dispatchEvent(new CustomEvent('verdesia:observationschange', {
        detail: detail || {},
      }));
    } catch (e) { /* silencioso */ }
  }

  /* Comprime una data URL a JPEG escalado. Devuelve una promesa con la
     nueva data URL — o null si la entrada no es una imagen válida.
     No depende de OffscreenCanvas (soporte iOS aún irregular). */
  function _compressImage(dataUrl) {
    return new Promise((resolve) => {
      if (!dataUrl || typeof dataUrl !== 'string' || !dataUrl.startsWith('data:image/')) {
        resolve(null);
        return;
      }
      const img = new Image();
      img.onload = () => {
        try {
          const ratio = Math.min(1, IMAGE_MAX_DIM / Math.max(img.width, img.height));
          const w = Math.round(img.width * ratio);
          const h = Math.round(img.height * ratio);
          const canvas = document.createElement('canvas');
          canvas.width = w; canvas.height = h;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL('image/jpeg', IMAGE_QUALITY));
        } catch (e) {
          console.warn('[observations] compress failed:', e);
          resolve(null);
        }
      };
      img.onerror = () => resolve(null);
      img.src = dataUrl;
    });
  }

  /* Aplica el cap de tier free — conserva las MAX_FREE más recientes.
     Premium no toca el array. */
  function _applyRollingLimit(arr) {
    const tier = (window.VerdesiaPlan && window.VerdesiaPlan.getTier && window.VerdesiaPlan.getTier()) || 'free';
    if (tier === 'premium') return arr;
    if (arr.length <= MAX_FREE) return arr;
    // Conservar las MAX_FREE más recientes (por createdAt descendente).
    const sorted = arr.slice().sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
    return sorted.slice(0, MAX_FREE);
  }

  /* ─── API pública ─────────────────────────────────────────── */

  /* Devuelve las observaciones en orden cronológico inverso (más recientes
     arriba). La forma persistida no garantiza un orden — ordenamos al leer
     para evitar bugs si el caller introduce un save fuera de orden. */
  function list() {
    return _read().sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
  }

  function count() { return _read().length; }

  function get(id) {
    return _read().find(o => o.id === id) || null;
  }

  /* Guarda una nueva observación. Comprime la imagen, aplica el cap free,
     persiste, emite evento. Devuelve una promesa con la observación final
     (con imagen comprimida) o null si la persistencia falla.

     El caller construye el objeto sin la compresión — esta función se
     encarga de ello. Esto permite mostrar la imagen original mientras
     la compresión corre en background. */
  async function save(obs) {
    if (!obs || typeof obs !== 'object') return null;

    const compressed = obs.image ? await _compressImage(obs.image) : null;

    const finalObs = {
      id:                obs.id || ('obs_' + Date.now()),
      createdAt:         obs.createdAt || new Date().toISOString(),
      image:             compressed,
      summary:           (obs.summary || '').toString().trim(),
      globalHealth:      obs.globalHealth || 'unclear',
      importantFindings: Array.isArray(obs.importantFindings) ? obs.importantFindings.slice(0, 3) : [],
      nextActions:       Array.isArray(obs.nextActions) ? obs.nextActions.slice(0, 3) : [],
      season:            obs.season || '',
      region:            obs.region || '',
      sceneType:         obs.sceneType || '',
    };

    const current = _read();
    current.push(finalObs);
    const capped = _applyRollingLimit(current);

    if (!_write(capped)) {
      // Quota probable — reintenta sin imagen. Mejor perder la foto que
      // perder la observación entera.
      finalObs.image = null;
      const retry = _read();
      retry.push(finalObs);
      const cappedRetry = _applyRollingLimit(retry);
      if (!_write(cappedRetry)) return null;
    }

    _emit({ count: _read().length, id: finalObs.id });
    return finalObs;
  }

  function remove(id) {
    if (!id) return false;
    const current = _read();
    const next = current.filter(o => o.id !== id);
    if (next.length === current.length) return false;
    if (!_write(next)) return false;
    _emit({ count: next.length, removed: id });
    return true;
  }

  function clear() {
    _write([]);
    _emit({ count: 0, cleared: true });
  }

  /* ─── Export ─── */
  window.VerdesiaObservations = {
    list, get, count, save, remove, clear,
    MAX_FREE,
  };

})();
