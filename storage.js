/* ══════════════════════════════════════════════════════════════
   SEMENÇA — Capa de persistencia unificada

   Toda escritura/lectura de localStorage pasa por aquí.
   Una sola fuente, un solo formato.

   ─── REACTIVIDAD GLOBAL ──────────────────────────────────────
   Esta capa es el ÚNICO punto fiable que notifica al resto de la
   app cuando el estado cambia. Cualquier write dispara un evento
   en window:

     semenca:gardenchange   → tras saveGarden()
     semenca:zonechange     → tras saveSettings({zone}) si la zona cambia
     semenca:settingschange → tras cualquier saveSettings()

   Las páginas se suscriben a estos eventos para re-renderizar sin
   recarga manual. Patrón publish/subscribe puro, sin framework.
   ══════════════════════════════════════════════════════════════ */

(function() {

  const KEY_GARDEN   = 'semenca_garden';
  const KEY_SETTINGS = 'semenca_settings';

  /* ─── Helper de dispatch defensivo ─── */
  function emit(name, detail) {
    try {
      window.dispatchEvent(new CustomEvent(name, { detail: detail || {} }));
    } catch (e) { /* silencioso */ }
  }

  /* ─── Jardín ─── */
  function loadGarden() {
    try {
      const raw = localStorage.getItem(KEY_GARDEN);
      if (!raw) return [];
      const data = JSON.parse(raw);
      return Array.isArray(data) ? data : [];
    } catch (e) {
      console.warn('Verdésia: garden read failed', e);
      return [];
    }
  }

  function saveGarden(garden) {
    try {
      localStorage.setItem(KEY_GARDEN, JSON.stringify(garden || []));
      // Notifica a todas las páginas suscritas. Detalle mínimo;
      // las páginas releen el estado completo desde storage al recibir
      // el evento (más simple y a prueba de desincronización).
      emit('semenca:gardenchange', { type: 'garden:save', size: (garden || []).length });
    } catch (e) {
      console.warn('Verdésia: garden save failed', e);
    }
  }

  /* ─── Ajustes (idioma, zona por defecto) ─── */
  function loadSettings() {
    try {
      const raw = localStorage.getItem(KEY_SETTINGS);
      if (!raw) return {};
      return JSON.parse(raw) || {};
    } catch (e) {
      return {};
    }
  }

  function saveSettings(patch) {
    const current = loadSettings();
    const next = Object.assign({}, current, patch || {});
    try {
      localStorage.setItem(KEY_SETTINGS, JSON.stringify(next));
    } catch (e) {
      console.warn('Verdésia: settings save failed', e);
      return current;
    }
    // Eventos finos: zona y settings genéricos.
    // Sólo notificamos zonechange si la zona realmente cambió.
    if ('zone' in (patch || {}) && patch.zone !== current.zone) {
      emit('semenca:zonechange', { zone: next.zone });
    }
    emit('semenca:settingschange', { patch: patch || {}, settings: next });
    return next;
  }

  /* ─── Idioma ───
     getLang devuelve siempre algo utilizable (fallback 'es') para que el
     render no rompa antes de que el usuario elija. hasLang permite al
     onboarding distinguir "elegido" de "todavía no se eligió". */
  function getLang()  { return loadSettings().lang || 'es'; }
  function hasLang()  { return !!loadSettings().lang; }
  function setLang(l) { saveSettings({ lang: l }); }

  /* ─── Zona (región de Chile) ───
     getZone devuelve 'Santiago' como fallback visual, pero hasZone es
     la verdad: si false, el onboarding debe pedirla. */
  function getZone()  { return loadSettings().zone || 'Santiago'; }
  function hasZone()  { return !!loadSettings().zone; }
  function setZone(z) { saveSettings({ zone: z }); }

  /* ─── Export ─── */
  window.SemencaStorage = {
    loadGarden,
    saveGarden,
    loadSettings,
    saveSettings,
    getLang, hasLang, setLang,
    getZone, hasZone, setZone,
  };

})();
