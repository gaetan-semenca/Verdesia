/* ══════════════════════════════════════════════════════════════
   SEMENÇA — Lógica de jardín compartida

   Capa de comportamiento por encima de plants.js y storage.js.
   Toda página consulta y modifica el jardín por aquí.
   ══════════════════════════════════════════════════════════════ */

(function() {

  const Storage  = window.SemencaStorage;
  const PLANTS   = window.SEMENCA_PLANTS   || [];
  const NOTES    = window.SEMENCA_NOTE_TYPES || {};

  /* ─── Plantas ─── */
  function getPlant(id) {
    return PLANTS.find(p => p.id === id) || null;
  }

  function getAllPlants() {
    return PLANTS.slice();
  }

  function getPlantsByCategory(cat) {
    return PLANTS.filter(p => p.category === cat);
  }

  /**
   * Resuelve una referencia (id) a una planta del catálogo completo
   * o a una planta externa (sin ficha). Devuelve { id, emoji, name, linkable }.
   * Devuelve null si no se encuentra en ningún lado.
   */
  function resolveCompanion(id) {
    const full = getPlant(id);
    if (full) return { id, emoji: full.emoji, name: full.name, linkable: true };
    const ext = (window.SEMENCA_EXTERNAL_PLANTS || {})[id];
    if (ext) return { id, emoji: ext.emoji, name: ext.name, linkable: false };
    return null;
  }

  /* ─── Hemisferio sur — estaciones ─── */
  // 'summer' | 'autumn' | 'winter' | 'spring'
  function getSeason(monthIndex) {
    if ([11, 0, 1].includes(monthIndex)) return 'summer';
    if ([2, 3, 4].includes(monthIndex))  return 'autumn';
    if ([5, 6, 7].includes(monthIndex))  return 'winter';
    return 'spring';
  }

  function getCurrentSeason() {
    return getSeason(new Date().getMonth());
  }

  /* ─── Tiempo y crecimiento ─── */
  function daysSince(dateStr) {
    if (!dateStr) return 0;
    const ms = new Date() - new Date(dateStr);
    return Math.max(0, Math.floor(ms / 86400000));
  }

  function totalStageDays(plant) {
    return (plant.stages || []).reduce((a, s) => a + (s.days || 0), 0);
  }

  function getStageIndex(plant, days) {
    let cum = 0;
    const stages = plant.stages || [];
    for (let i = 0; i < stages.length; i++) {
      cum += stages[i].days || 0;
      if (days < cum) return i;
    }
    return Math.max(0, stages.length - 1);
  }

  function getStageProgress(plant, days) {
    const total = totalStageDays(plant);
    if (!total) return 0;
    return Math.min(100, (days / total) * 100);
  }

  function getCurrentStage(plant, days) {
    return plant.stages[getStageIndex(plant, days)] || null;
  }

  /* ─── Helpers internos: fecha local, instanceId, resolución de referencia ───
     - localDateISO: YYYY-MM-DD en zona horaria LOCAL del navegador.
       Evita el bug UTC (Chile UTC-3/-4): a las 22:00 hora Chile,
       new Date().toISOString() devolvería el día siguiente.
     - generateInstanceId: identificador único por instancia plantada,
       persiste a través de re-renderizados.
     - resolveRef: acepta un instanceId (string) o un índice (number),
       permitiendo back-compat con llamadas existentes basadas en índice. */
  function localDateISO(d) {
    const date = d instanceof Date ? d : new Date();
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  function generateInstanceId(plantId) {
    const id = String(plantId || 'plant');
    return `${id}_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
  }

  /* Migración silenciosa: cualquier entrada del jardín previa a esta versión
     no tiene instanceId. La asignamos la primera vez que se accede. */
  function ensureInstanceIds(garden) {
    let changed = false;
    garden.forEach(entry => {
      if (!entry.instanceId) {
        entry.instanceId = generateInstanceId(entry.plantId);
        changed = true;
      }
    });
    if (changed) Storage.saveGarden(garden);
    return garden;
  }

  function resolveRef(garden, ref) {
    if (typeof ref === 'number') return ref;
    if (typeof ref === 'string') return garden.findIndex(e => e.instanceId === ref);
    return -1;
  }

  /* ─── Mutaciones del jardín ───
     addPlant(plantId, sowDate?) — la zona se toma automáticamente del
     onboarding del usuario (Storage.getZone), evitando pedirla cada vez.
     sowDate es opcional; por defecto hoy en hora LOCAL.
     Retorna el objeto entry recién creado (con instanceId) para que la UI
     pueda referenciarlo en sus atributos data-*.
     Nota: la notificación global `semenca:gardenchange` la emite
     storage.js tras cada saveGarden — no re-disparamos aquí para
     evitar double-render. */
  function addPlant(plantId, sowDate) {
    const garden = ensureInstanceIds(Storage.loadGarden());
    const entry = {
      instanceId: generateInstanceId(plantId),
      plantId,
      sowDate:    sowDate || localDateISO(),
      zone:       Storage.getZone() || 'Santiago',
      addedAt:    new Date().toISOString(),
      notes:      [],
    };
    garden.push(entry);
    Storage.saveGarden(garden);
    return entry;
  }

  /* Las mutaciones siguientes aceptan `ref` como instanceId (string)
     o índice (number) — mantiene compatibilidad con llamadas legacy. */
  function removePlant(ref) {
    const garden = ensureInstanceIds(Storage.loadGarden());
    const index = resolveRef(garden, ref);
    if (index < 0 || index >= garden.length) return garden;
    garden.splice(index, 1);
    Storage.saveGarden(garden);
    return garden;
  }

  function updatePlantEntry(ref, patch) {
    const garden = ensureInstanceIds(Storage.loadGarden());
    const index = resolveRef(garden, ref);
    if (index < 0 || index >= garden.length) return garden;
    garden[index] = Object.assign({}, garden[index], patch || {});
    Storage.saveGarden(garden);
    return garden;
  }

  function archivePlant(ref) {
    return updatePlantEntry(ref, { archived: true, archivedAt: new Date().toISOString() });
  }

  function unarchivePlant(ref) {
    return updatePlantEntry(ref, { archived: false, archivedAt: null });
  }

  function addNote(ref, text, type) {
    const garden = ensureInstanceIds(Storage.loadGarden());
    const index = resolveRef(garden, ref);
    if (index < 0 || index >= garden.length) return garden;
    if (!text || !text.trim()) return garden;
    if (!garden[index].notes) garden[index].notes = [];

    const now  = new Date();
    const lang = Storage.getLang();
    const note = {
      text:       text.trim(),
      type:       type || 'obs',
      createdAt:  now.toISOString(),
      date:       formatDateTime(now, lang),
    };
    garden[index].notes.unshift(note);
    Storage.saveGarden(garden);
    return garden;
  }

  function removeNote(plantRef, noteIndex) {
    const garden = ensureInstanceIds(Storage.loadGarden());
    const plantIndex = resolveRef(garden, plantRef);
    const entry = garden[plantIndex];
    if (!entry || !entry.notes) return garden;
    entry.notes.splice(noteIndex, 1);
    Storage.saveGarden(garden);
    return garden;
  }

  /* ─── Fechas ─── */
  const MONTHS_ES = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
  const MONTHS_FR = ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'];
  const MONTHS_FULL_ES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  const MONTHS_FULL_FR = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
  const DAYS_ES = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
  const DAYS_FR = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];

  function months(lang)  { return lang === 'fr' ? MONTHS_FR : MONTHS_ES; }
  function days(lang)    { return lang === 'fr' ? DAYS_FR : DAYS_ES; }

  function formatDate(dateStr, lang) {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    const m = months(lang || 'es');
    return `${d.getDate()} ${m[d.getMonth()]} ${d.getFullYear()}`;
  }

  function formatDateTime(d, lang) {
    const m = months(lang || 'es');
    const hh = d.getHours();
    const mm = String(d.getMinutes()).padStart(2, '0');
    return `${d.getDate()} ${m[d.getMonth()]} ${d.getFullYear()}, ${hh}:${mm}`;
  }

  function formatToday(lang) {
    const now = new Date();
    const dn  = days(lang || 'es')[now.getDay()];
    const m   = months(lang || 'es');
    return `${dn}, ${now.getDate()} ${m[now.getMonth()]} ${now.getFullYear()}`;
  }

  /**
   * Etiqueta de estación + año para una fecha dada.
   * Hemisferio sur. Diciembre se agrupa con el siguiente año (verano).
   * Ej.: 2025-12-15 → "Verano 2026", 2026-03-10 → "Otoño 2026"
   */
  function seasonLabel(dateInput, lang) {
    const d = dateInput instanceof Date ? dateInput : new Date(dateInput);
    if (isNaN(d.getTime())) return '';
    const m = d.getMonth();
    let y = d.getFullYear();
    const season = getSeason(m);
    if (season === 'summer' && m === 11) y = y + 1; // Dec cuenta para el verano del año siguiente
    const names = lang === 'fr'
      ? { spring:'Printemps', summer:'Été', autumn:'Automne', winter:'Hiver' }
      : { spring:'Primavera', summer:'Verano', autumn:'Otoño', winter:'Invierno' };
    return `${names[season]} ${y}`;
  }

  /* ─── Recolección de notas para feed global ─── */
  function getAllNotesEnriched(lang) {
    const garden = Storage.loadGarden();
    const list = [];
    garden.forEach((entry, idx) => {
      const plant = getPlant(entry.plantId);
      if (!plant) return;
      (entry.notes || []).forEach((note, ni) => {
        list.push({
          ...note,
          plantId:    entry.plantId,
          plantName:  plant.name[lang] || plant.name.es,
          plantEmoji: plant.emoji,
          plantIndex: idx,
          noteIndex:  ni,
        });
      });
    });
    // Most recent first (notes already unshifted, but sort by createdAt as ground truth)
    list.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    return list;
  }

  /* ─── Plantas adecuadas para sembrar ahora ─── */
  function getSowableNow() {
    const month = new Date().getMonth();
    return PLANTS.filter(p => (p.sowM || [])[month] === 1);
  }

  function getHarvestableNow() {
    const month = new Date().getMonth();
    return PLANTS.filter(p => (p.harvM || [])[month] === 1);
  }

  /* ─── Resumen del jardín para hoy ─── */
  function getGardenSnapshot(lang) {
    const garden = Storage.loadGarden();
    return garden.map((entry, idx) => {
      const plant = getPlant(entry.plantId);
      if (!plant) return null;
      const days     = daysSince(entry.sowDate);
      const stageIdx = getStageIndex(plant, days);
      const stage    = plant.stages[stageIdx];
      return {
        index:     idx,
        plantId:   entry.plantId,
        plant,
        zone:      entry.zone,
        sowDate:   entry.sowDate,
        days,
        stageIdx,
        stage,
        progress:  getStageProgress(plant, days),
        notes:     entry.notes || [],
        advice:    (plant.advice?.[stageIdx]?.[lang]) || (plant.advice?.[stageIdx]?.es) || [],
      };
    }).filter(Boolean);
  }

  /* ─── Export ─── */
  window.SemencaGarden = {
    // Plant catalog access
    getPlant,
    getAllPlants,
    getPlantsByCategory,
    resolveCompanion,

    // Season
    getSeason,
    getCurrentSeason,

    // Time / stages
    daysSince,
    totalStageDays,
    getStageIndex,
    getStageProgress,
    getCurrentStage,

    // Migration — asegura instanceId en entradas heredadas.
    // Idempotente: las entradas modernas pasan sin tocarse.
    ensureInstanceIds,

    // Garden mutations
    addPlant,
    removePlant,
    updatePlantEntry,
    archivePlant,
    unarchivePlant,
    addNote,
    removeNote,

    // Memory helpers
    seasonLabel,

    // Dates
    months,
    days,
    formatDate,
    formatDateTime,
    formatToday,
    localDateISO,
    MONTHS_ES, MONTHS_FR,

    // Aggregates
    getAllNotesEnriched,
    getSowableNow,
    getHarvestableNow,
    getGardenSnapshot,
  };

})();
