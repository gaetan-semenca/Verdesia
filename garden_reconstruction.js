/* ══════════════════════════════════════════════════════════════
   VERDÉSIA — Garden Reconstruction (mapa aproximado del huerto)

   Toma una Lectura del huerto (schema v3, detected_plants[]) y
   propone una distribución aproximada en la grilla — para que el
   usuario revise y valide ANTES de actualizar Mi jardín.

   ─── Filosofía ───────────────────────────────────────────────
   "Verdésia propone. El jardinero decide."

   La reconstrucción es :
     • aproximada por diseño (jamás un GIS preciso)
     • temporal (vive en sessionStorage, no en el localStorage del
       jardín)
     • editable (remove / reposition antes de validar)
     • descartable sin consecuencia

   El brouillon (draft) NUNCA toca `semenca_garden`. Sólo la
   acción explícita "Actualizar mi jardín" persiste los cambios
   vía la API estándar de Garden.

   ─── Persistencia ────────────────────────────────────────────
   sessionStorage key : verdesia_garden_draft
   Forma : { generatedAt, sourceObservationId, suggestions: [...] }
   Live en `window.VERDESIA_GARDEN_DRAFT` (objeto vivo) y se
   sincroniza con sessionStorage en save().

   ─── Modelo de una sugerencia ────────────────────────────────
   {
     id:            "sug_<n>",
     plantId:       "tomate",                    // id catálogo
     plantName:     "Tomate",                    // legible
     suggestedX:    0..VISIBLE_COLS-1,
     suggestedY:    0..VISIBLE_ROWS-1,
     confidence:    'low' | 'medium' | 'high',
     growthStage:   'floracion' | 'maduracion' | ...,
     sceneZone:     'left' | 'center' | ...     // 5 zonas v3
   }

   ─── Eventos ─────────────────────────────────────────────────
   verdesia:draftchange — disparado tras setDraft / updateDraft /
                          discardDraft. detail.count = sugerencias.
   ══════════════════════════════════════════════════════════════ */

(function () {

  const DRAFT_KEY = 'verdesia_garden_draft';

  /* ─── Resolver semantique ────────────────────────────────────
     El esquema v3 entrega 5 zonas planas (left/center/right/
     foreground/background). Las mapeamos a 9 celdas-ancla en la
     grilla visible — luego aplicamos jitter para colisiones. */

  function _zoneAnchor(zone, cols, rows) {
    // Anclas relativas (0..1) por zona — multiplicadas por las
    // dimensiones de la grilla visible al uso.
    const map = {
      left:        [0.20, 0.50],
      center:      [0.50, 0.50],
      right:       [0.80, 0.50],
      foreground:  [0.50, 0.80],
      background:  [0.50, 0.20],
      // Las 9 ancho-altura por si el servidor emite eventualmente
      // el sistema enriquecido (additivo, defensivo).
      top_left:      [0.20, 0.20],
      top_center:    [0.50, 0.20],
      top_right:     [0.80, 0.20],
      middle_left:   [0.20, 0.50],
      middle_right:  [0.80, 0.50],
      bottom_left:   [0.20, 0.80],
      bottom_center: [0.50, 0.80],
      bottom_right:  [0.80, 0.80],
    };
    const anchor = map[zone] || map.center;
    return {
      x: Math.min(cols - 1, Math.max(0, Math.round(anchor[0] * (cols - 1)))),
      y: Math.min(rows - 1, Math.max(0, Math.round(anchor[1] * (rows - 1)))),
    };
  }

  /* Jitter determinista — desplaza la celda en espiral hasta
     encontrar una libre. Sin colisiones aleatorias entre runs
     (mismo input → misma salida). */
  function _findFreeNear(x, y, used, cols, rows) {
    if (!used.has(`${x},${y}`)) return { x, y };
    // Espiral cuadrada hasta cubrir toda la grilla.
    const maxR = Math.max(cols, rows);
    for (let r = 1; r <= maxR; r++) {
      // Recorre el perímetro del cuadrado de radio r.
      for (let dx = -r; dx <= r; dx++) {
        for (let dy = -r; dy <= r; dy++) {
          if (Math.abs(dx) !== r && Math.abs(dy) !== r) continue;
          const nx = x + dx, ny = y + dy;
          if (nx < 0 || nx >= cols || ny < 0 || ny >= rows) continue;
          if (!used.has(`${nx},${ny}`)) return { x: nx, y: ny };
        }
      }
    }
    return null; // grilla llena
  }

  /* ─── Plant lookup ───────────────────────────────────────────
     Match aproximado del nombre detectado por la IA contra el
     catálogo curado. El IA puede devolver "Tomate cherry" mientras
     el catálogo tiene "tomate" — usamos normalización ES + token
     overlap. Si no hay match razonable, dropeamos silenciosamente. */

  function _normalize(s) {
    return String(s || '')
      .toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '') // strip acentos
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function _lookupPlant(detectedName) {
    const catalogue = window.SEMENCA_PLANTS || [];
    if (!catalogue.length) return null;
    const target = _normalize(detectedName);
    if (!target) return null;

    // 1. Exact match sobre id o name.es normalizado.
    for (const p of catalogue) {
      const ids = [p.id, p.name && p.name.es].map(_normalize);
      if (ids.includes(target)) return p;
    }
    // 2. El nombre detectado CONTIENE el id/name (o viceversa).
    for (const p of catalogue) {
      const idN = _normalize(p.id);
      const nameN = _normalize(p.name && p.name.es);
      if (!idN && !nameN) continue;
      if (idN && (target.includes(idN) || idN.includes(target))) return p;
      if (nameN && (target.includes(nameN) || nameN.includes(target))) return p;
    }
    // 3. Overlap de tokens — al menos un token significativo en común.
    const targetTokens = new Set(target.split(' ').filter(t => t.length >= 3));
    let bestMatch = null;
    let bestScore = 0;
    for (const p of catalogue) {
      const nameN = _normalize(p.name && p.name.es);
      if (!nameN) continue;
      const candTokens = nameN.split(' ').filter(t => t.length >= 3);
      let overlap = 0;
      for (const t of candTokens) if (targetTokens.has(t)) overlap++;
      if (overlap > bestScore) { bestScore = overlap; bestMatch = p; }
    }
    return bestScore > 0 ? bestMatch : null;
  }

  /* ─── Generator ──────────────────────────────────────────────
     Convierte un payload de Lectura v3 en un draft de reconstrucción.
     Caps a la grilla visible del plan actual (4×4 free, 15×15 premium). */

  function generate(data, opts) {
    opts = opts || {};
    if (!data || !Array.isArray(data.detected_plants)) {
      return _emptyDraft({ sourceObservationId: opts.sourceObservationId });
    }

    // Tier → dimensiones visibles
    const plan = (window.VerdesiaPlan && window.VerdesiaPlan.getPlan && window.VerdesiaPlan.getPlan())
                 || { gardenCols: 4, gardenRows: 4 };
    const cols = Math.max(1, plan.gardenCols | 0);
    const rows = Math.max(1, plan.gardenRows | 0);
    const visibleCells = cols * rows;

    // Si el servidor emitió el campo enriquecido garden_map_suggestions[],
    // preferimos sus datos — el match catálogo y el cap siguen siendo cliente.
    const native = Array.isArray(data.garden_map_suggestions) ? data.garden_map_suggestions : null;
    const source = native
      ? native.map(s => ({
          name:         s.plant_name || '',
          plantHint:    s.plant_id_suggestion || '',
          zone:         (s.approximate_position && s.approximate_position.zone) || 'center',
          confidence:   s.confidence || 'low',
          growthStage:  (s.growth_stage && s.growth_stage.stage) || '',
        }))
      : data.detected_plants.map(p => ({
          name:         p.name || '',
          plantHint:    '',
          zone:         p.position || 'center',
          confidence:   p.confidence || 'low',
          growthStage:  (p.growth_stage && p.growth_stage.stage) || '',
        }));

    const used = new Set();
    const suggestions = [];
    // Compteurs séparés pour le debug test mode :
    //   droppedNoMatch : la planta n'existe pas dans le catalogue curé
    //   droppedNoSpace : la grille visible est pleine ou tous voisins occupés
    // droppedCount reste exposé en somme pour rétrocompat avec l'UI existante.
    let droppedNoMatch = 0;
    let droppedNoSpace = 0;

    for (let i = 0; i < source.length; i++) {
      if (suggestions.length >= visibleCells) { droppedNoSpace++; continue; }
      const item = source[i];

      // Lookup catálogo — preferir hint del servidor si existe.
      const plant = (item.plantHint && (window.SEMENCA_PLANTS || []).find(p => p.id === item.plantHint))
                 || _lookupPlant(item.name);
      if (!plant) { droppedNoMatch++; continue; }

      const anchor = _zoneAnchor(item.zone, cols, rows);
      const free = _findFreeNear(anchor.x, anchor.y, used, cols, rows);
      if (!free) { droppedNoSpace++; continue; }
      used.add(`${free.x},${free.y}`);

      suggestions.push({
        id:           'sug_' + Date.now() + '_' + i,
        plantId:      plant.id,
        plantName:    (plant.name && plant.name.es) || plant.id,
        plantEmoji:   plant.emoji || '🌱',
        plantPhoto:   plant.photo || null,
        suggestedX:   free.x,
        suggestedY:   free.y,
        confidence:   ['low','medium','high'].includes(item.confidence) ? item.confidence : 'low',
        growthStage:  item.growthStage || '',
        sceneZone:    item.zone || 'center',
      });
    }

    return {
      generatedAt:        new Date().toISOString(),
      sourceObservationId: opts.sourceObservationId || null,
      visibleCols:        cols,
      visibleRows:        rows,
      sourceCount:        source.length,
      droppedCount:       droppedNoMatch + droppedNoSpace, // somme (rétrocompat UI)
      droppedNoMatch,     // plantes hors catálogo curé
      droppedNoSpace,     // grille pleine ou voisinage saturé
      suggestions,
    };
  }

  function _emptyDraft(extra) {
    const plan = (window.VerdesiaPlan && window.VerdesiaPlan.getPlan && window.VerdesiaPlan.getPlan())
                 || { gardenCols: 4, gardenRows: 4 };
    return Object.assign({
      generatedAt:         new Date().toISOString(),
      sourceObservationId: null,
      visibleCols:         plan.gardenCols,
      visibleRows:         plan.gardenRows,
      droppedNoMatch:      0,
      droppedNoSpace:      0,
      sourceCount:         0,
      droppedCount:        0,
      suggestions:         [],
    }, extra || {});
  }

  /* ─── Persistencia sesión ────────────────────────────────────
     sessionStorage sobrevive a la navegación (de brote a la preview)
     pero muere al cerrar la pestaña — alineado con la filosofía
     "temporal y descartable" del draft. */

  function _emit(detail) {
    try { window.dispatchEvent(new CustomEvent('verdesia:draftchange', { detail: detail || {} })); }
    catch {}
  }

  function setDraft(draft) {
    window.VERDESIA_GARDEN_DRAFT = draft;
    try { sessionStorage.setItem(DRAFT_KEY, JSON.stringify(draft)); }
    catch (e) { console.warn('[reconstruction] sessionStorage write failed:', e); }
    _emit({ count: draft && draft.suggestions ? draft.suggestions.length : 0 });
  }

  function loadDraft() {
    if (window.VERDESIA_GARDEN_DRAFT && window.VERDESIA_GARDEN_DRAFT.suggestions) {
      return window.VERDESIA_GARDEN_DRAFT;
    }
    try {
      const raw = sessionStorage.getItem(DRAFT_KEY);
      if (!raw) return null;
      const d = JSON.parse(raw);
      if (!d || !Array.isArray(d.suggestions)) return null;
      window.VERDESIA_GARDEN_DRAFT = d;
      return d;
    } catch (e) {
      console.warn('[reconstruction] sessionStorage read failed:', e);
      return null;
    }
  }

  function discardDraft() {
    window.VERDESIA_GARDEN_DRAFT = null;
    try { sessionStorage.removeItem(DRAFT_KEY); } catch {}
    _emit({ count: 0, discarded: true });
  }

  /* Operaciones sobre el draft activo — todas pasan por setDraft()
     para mantener la sincronización sessionStorage + evento. */

  function removeSuggestion(id) {
    const draft = loadDraft();
    if (!draft) return false;
    const before = draft.suggestions.length;
    draft.suggestions = draft.suggestions.filter(s => s.id !== id);
    if (draft.suggestions.length === before) return false;
    setDraft(draft);
    return true;
  }

  function moveSuggestion(id, x, y) {
    const draft = loadDraft();
    if (!draft) return false;
    const sug = draft.suggestions.find(s => s.id === id);
    if (!sug) return false;
    // Si la cabin destino está ocupada, swap.
    const other = draft.suggestions.find(s => s.suggestedX === x && s.suggestedY === y && s.id !== id);
    if (other) {
      other.suggestedX = sug.suggestedX;
      other.suggestedY = sug.suggestedY;
    }
    sug.suggestedX = x;
    sug.suggestedY = y;
    setDraft(draft);
    return true;
  }

  /* ─── Estimation de la sowDate à partir de l'étape détectée ─
     Quand l'IA renvoie growth_stage="floración", on cherche
     l'étape correspondante dans plant.stages et on dérive une
     sowDate rétroactive — la planta apparaît dans Mi jardín
     directement dans la bonne étape, plutôt que toujours en
     "Germinación" avec today comme sowDate.

     Stratégie :
       1. Match exact normalisé (sans accents) du stage detecté
          contre plant.stages[].name.es
       2. Fallback fuzzy avec alias sémantiques (vegetativo →
          Crecimiento ou Plántula, vainas → Fructificación, etc.)
       3. Si trouvé : sowDate = today - (cumDays + stageDays/2)
          → la planta tombe au MILIEU de l'étape détectée
       4. Si pas trouvé : retourne null, la sowDate par défaut
          (today) est utilisée → fallback gracieux. */

  /* Alias sémantiques entre étapes que renvoie l'IA et étapes du catalogue.
     Le catalogue varie selon les plantes (tomate=germ/plant/growth/flower/fruit,
     lechuga=germ/roseta/cogollo, ajo=germ/foliar/bulbo/curado, etc).
     L'IA renvoie en général des termes plus génériques (vegetativo, floración,
     fructificación, cosecha). Cette table fait le pont. */
  const _STAGE_ALIASES = {
    germinacion:    ['germinacion','germ','semilla','germinando','semillero','almacigo'],
    plantula:       ['plantula','plant','semillero','plantulas','jovenes','joven'],
    vegetativo:     ['plantula','crecimiento','desarrollo','vegetativo','vegetativa',
                     'desarrollo foliar','crecimiento foliar','foliar','hojas','follaje',
                     'roseta','macolla','tallos','vegetacion','tres hojas','cuatro hojas'],
    crecimiento:    ['crecimiento','desarrollo','plantula','desarrollo foliar'],
    foliar:         ['foliar','hojas','follaje','roseta','vegetativo'],
    roseta:         ['roseta','vegetativo','foliar'],
    macolla:        ['macolla','vegetativo','tallos'],
    floracion:      ['floracion','floracin','flor','flores','en flor','floraje','prefloracion'],
    fructificacion: ['fructificacion','fruta','frutos','fructifica','cuajado',
                     'formacion de vainas','vainas','engrosamiento','engorde','engrose',
                     'formacion de frutos','formacion','desarrollo de frutos','bulbo','bulbificacion'],
    vainas:         ['fructificacion','vainas','formacion de vainas'],
    bulbo:          ['bulbo','bulbificacion','engrosamiento','fructificacion'],
    cogollo:        ['cogollo','formacion de cogollo','madurez','cosecha','cosecha continua'],
    cosecha:        ['cosecha','recoleccion','cosechado','madurez','maduracion','engrose',
                     'listo','recolectar','cogollo','curado','final de ciclo',
                     'cosecha continua','cosecha gradual'],
    maduracion:     ['maduracion','cosecha','madurez','cogollo'],
    senescencia:    ['senescencia','final','fin de ciclo','agotamiento','fin de cosecha'],
    curado:         ['curado','secado','cosecha'],
  };

  function _norm(s) {
    return String(s || '')
      .toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function _estimateSowDateForStage(plant, targetStageName) {
    if (!plant || !Array.isArray(plant.stages) || !plant.stages.length) return null;
    const target = _norm(targetStageName);
    if (!target) return null;

    // 1. Match direct sur name.es / name.fr / id
    let foundIdx = -1;
    for (let i = 0; i < plant.stages.length; i++) {
      const st = plant.stages[i];
      const candidates = [
        st.id,
        st.name && st.name.es,
        st.name && st.name.fr,
      ].map(_norm).filter(Boolean);
      if (candidates.includes(target)) { foundIdx = i; break; }
      if (candidates.some(c => c.includes(target) || target.includes(c))) { foundIdx = i; break; }
    }

    // 2. Match via alias sémantiques (vegetativo → crecimiento, etc.)
    if (foundIdx === -1) {
      // Trouver l'alias group dont le target fait partie
      let group = null;
      for (const [key, vals] of Object.entries(_STAGE_ALIASES)) {
        if (vals.some(v => target === v || target.includes(v) || v.includes(target))) { group = vals; break; }
      }
      if (group) {
        for (let i = 0; i < plant.stages.length; i++) {
          const st = plant.stages[i];
          const nameN = _norm((st.name && (st.name.es || st.name.fr)) || st.id || '');
          if (group.some(v => nameN === v || nameN.includes(v) || v.includes(nameN))) {
            foundIdx = i; break;
          }
        }
      }
    }

    // 3. Fallback positionnel — si toujours pas matché, on devine la
    //    position relative selon des mots-clés généraux. Cela couvre
    //    le cas où une planta a des stages atypiques (ex: lechuga avec
    //    roseta/cogollo, ajo avec foliar/bulbo) et que l'IA renvoie
    //    un terme générique non répertorié. Mieux qu'un fallback à today.
    if (foundIdx === -1 && plant.stages.length > 0) {
      const n = plant.stages.length;
      // Mots-clés qui suggèrent une position dans le cycle :
      const earlyHints = ['germ','semilla','semillero','plantul','joven','almacigo','siembra'];
      const midHints   = ['vegetat','crec','foliar','hoja','desarrollo','planta','roseta','macolla','tallo'];
      const lateMidHints = ['flor','prefloracion'];
      const lateHints  = ['fruct','fruto','vaina','bulb','cogollo','engros','engorde'];
      const finalHints = ['cosech','madurez','madura','recolecc','curado','final','senescenc'];
      if (earlyHints.some(k => target.includes(k)))      foundIdx = 0;
      else if (midHints.some(k => target.includes(k)))   foundIdx = Math.min(1, n - 1);
      else if (lateMidHints.some(k => target.includes(k))) foundIdx = Math.min(Math.floor(n * 0.6), n - 1);
      else if (lateHints.some(k => target.includes(k)))  foundIdx = Math.max(0, n - 2);
      else if (finalHints.some(k => target.includes(k))) foundIdx = n - 1;
    }

    if (foundIdx === -1) return null;

    // 3. Cumulative days jusqu'au milieu de l'étape détectée
    let cumBefore = 0;
    for (let i = 0; i < foundIdx; i++) {
      cumBefore += Math.max(0, plant.stages[i].days || 0);
    }
    const stageDays = Math.max(1, plant.stages[foundIdx].days || 14);
    const targetDays = cumBefore + Math.floor(stageDays / 2);

    // 4. sowDate = today - targetDays
    const sow = new Date();
    sow.setDate(sow.getDate() - targetDays);
    const y = sow.getFullYear();
    const m = String(sow.getMonth() + 1).padStart(2, '0');
    const d = String(sow.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  /* ─── Validate to Mi jardín ──────────────────────────────────
     Convierte cada sugerencia en una entrada real del jardín.
     Usa la API estándar de Garden — sin tocar el storage directamente.

     Si la suggestion porte une `growthStage` détectée par l'IA,
     on calcule une sowDate rétroactive pour que la planta apparaisse
     dans la bonne étape. Sinon, fallback sur today. */

  function validateDraft() {
    const tValidate0 = performance.now();
    const draft = loadDraft();
    if (!draft || !draft.suggestions || !draft.suggestions.length) return { added: 0 };
    const Garden = window.SemencaGarden;
    const Storage = window.SemencaStorage;
    if (!Garden || !Storage) return { added: 0, error: 'Garden API missing' };

    const today = new Date();
    const y = today.getFullYear();
    const m = String(today.getMonth() + 1).padStart(2, '0');
    const d = String(today.getDate()).padStart(2, '0');
    const todaySowDate = `${y}-${m}-${d}`;

    // STORAGE_COLS canónico (15) — el gridPos se calcula sobre la grilla
    // de almacenamiento, no sobre la visible. verdesia_jardin.html sólo
    // muestra la zona visible pero el almacenamiento es siempre 15×15.
    const STORAGE_COLS = 15;

    /* Batch write — on construit le jardin entièrement en mémoire,
       puis on persiste en UN SEUL saveGarden(). Avant : 2 × N writes
       localStorage + 2 × N events gardenchange (chacun déclenche un
       re-render complet de la grille 15×15 dans verdesia_jardin.html).
       Pour N=16 c'est 32 re-renders cascadés — la cause principale
       du freeze sévère. Maintenant : 1 write, 1 event, 1 render. */
    const garden = Storage.loadGarden();
    const zone = Storage.getZone() || 'Santiago';
    let added = 0;
    for (const sug of draft.suggestions) {
      try {
        const plant = (window.SEMENCA_PLANTS || []).find(p => p.id === sug.plantId);
        const sowDate = _estimateSowDateForStage(plant, sug.growthStage) || todaySowDate;
        const instanceId = `${sug.plantId}__${Date.now().toString(36)}_${Math.floor(Math.random() * 1e6).toString(36)}__${added}`;
        const gridPos = sug.suggestedY * STORAGE_COLS + sug.suggestedX;
        garden.push({
          instanceId,
          plantId: sug.plantId,
          sowDate,
          zone,
          addedAt: new Date().toISOString(),
          notes: [],
          gridPos,
        });
        added++;
      } catch (e) {
        console.warn('[reconstruction] add failed for', sug.plantId, e);
      }
    }
    // UN SEUL write — déclenche UN SEUL gardenchange.
    Storage.saveGarden(garden);
    const tValidate1 = performance.now();
    console.log('[verdesia:reconstruction] validateDraft', added, 'plants in', Math.round(tValidate1 - tValidate0), 'ms');

    // Vincular con observación de origen (campo aditivo, sin breaking).
    if (draft.sourceObservationId && window.VerdesiaObservations) {
      try {
        const obs = window.VerdesiaObservations.get(draft.sourceObservationId);
        if (obs) {
          // No hay API de update aún — escribimos directamente la clave;
          // es aditivo, la observación sigue siendo válida.
          const list = JSON.parse(localStorage.getItem('verdesia_observations') || '[]');
          const idx = list.findIndex(o => o.id === draft.sourceObservationId);
          if (idx >= 0) {
            list[idx].linkedReconstructionAt = new Date().toISOString();
            localStorage.setItem('verdesia_observations', JSON.stringify(list));
          }
        }
      } catch {}
    }

    discardDraft();
    return { added };
  }

  /* ─── Export ─── */
  window.VerdesiaReconstruction = {
    generate,
    setDraft,
    loadDraft,
    discardDraft,
    removeSuggestion,
    moveSuggestion,
    validateDraft,
  };

})();
