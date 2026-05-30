/* ══════════════════════════════════════════════════════════════
   VERDÉSIA — Configuration régionale (façade unifiée)

   Source de vérité unique pour la sélection régionale de
   l'utilisateur. NE DUPLIQUE PAS la donnée — réutilise:

     plants.js  → window.SEMENCA_ZONES           (16 régions chiliennes)
     storage.js → SemencaStorage.getZone/setZone (persistance canonique)
     regions.js → SemencaRegions.*               (lecture climat × saison)

   Verdésia est une app CHILE-FIRST (cf. CONTEXT.md). L'onboarding
   ne propose que les 16 régions chiliennes officielles.

   Helpers exposés :
     • setUserRegion(id) — écrit à la fois `verdesia_user_profile.region`
       ET `SemencaStorage.zone` au format attendu par regions.js.
       Garantit l'alignement Hoy / Mi jardín / Plantas / Diagnóstico foto.
     • getUserRegionId() — lit le profil avec migration silencieuse
       des anciennes valeurs internationales (intl_belgium, "Bélgica", etc.)
       vers Metropolitana (rm) comme fallback honnête.

   ─── Compatibilité historique ─────────────────────────────────
   Les anciens profils peuvent contenir des valeurs étrangères :
     intl_belgium / intl_spain / intl_other
     "Bélgica" / "España" / "Otro" / "Chile central" / "Sur de Chile" / "Patagonia"
   resolveRegionId() les reconnaît et les mappe vers une région
   chilienne canonique. Auto-réparation du profil au chargement.

   Si SEMENCA_ZONES n'est pas chargé, fallback minimal pour ne
   pas casser l'intro.
   ══════════════════════════════════════════════════════════════ */

(function () {

  const PROFILE_KEY = 'verdesia_user_profile';

  /* ─── Lecture sûre de SEMENCA_ZONES ───
     Si plants.js est chargé, on lit la liste canonique. Sinon
     (ex : landing, qui n'embarque pas plants.js pour rester légère)
     on tombe sur un miroir embarqué des 16 régions chiliennes.
     ⚠ MIROIR — à garder synchronisé avec plants.js → SEMENCA_ZONES
     en cas de modification de la liste officielle. */
  const FALLBACK_CHILEAN = [
    { id:'arica',       name:'Arica y Parinacota', climate:'desértico' },
    { id:'tarapaca',    name:'Tarapacá',           climate:'desértico' },
    { id:'antofagasta', name:'Antofagasta',        climate:'desértico' },
    { id:'atacama',     name:'Atacama',            climate:'desértico' },
    { id:'coquimbo',    name:'Coquimbo',           climate:'semiárido' },
    { id:'valparaiso',  name:'Valparaíso',         climate:'mediterráneo' },
    { id:'rm',          name:'Santiago (RM)',      climate:'mediterráneo' },
    { id:'ohiggins',    name:"O'Higgins",          climate:'mediterráneo' },
    { id:'maule',       name:'Maule',              climate:'mediterráneo' },
    { id:'nuble',       name:'Ñuble',              climate:'mediterráneo' },
    { id:'biobio',      name:'Biobío',             climate:'templado' },
    { id:'araucania',   name:'La Araucanía',       climate:'templado lluvioso' },
    { id:'losrios',     name:'Los Ríos',           climate:'templado lluvioso' },
    { id:'loslagos',    name:'Los Lagos',          climate:'templado lluvioso' },
    { id:'aysen',       name:'Aysén',              climate:'frío' },
    { id:'magallanes',  name:'Magallanes',         climate:'frío' },
  ];
  const CHILEAN = (Array.isArray(window.SEMENCA_ZONES) && window.SEMENCA_ZONES.length)
    ? window.SEMENCA_ZONES
    : FALLBACK_CHILEAN;

  /* ─── Étiquette courte pour usage INLINE dans des phrases
         ("Jardín · Santiago · Chile", "Heladas en el Maule…").
         Miroir de regions.js → ID_TO_DISPLAY, mais utilisable
         partout (landing comprise, sans regions.js). */
  const ID_TO_DISPLAY_LABEL = {
    arica:'Arica y Parinacota', tarapaca:'Tarapacá', antofagasta:'Antofagasta',
    atacama:'Atacama', coquimbo:'Coquimbo', valparaiso:'Valparaíso',
    rm:'Santiago', ohiggins:"O'Higgins", maule:'el Maule', nuble:'Ñuble',
    biobio:'Biobío', araucania:'la Araucanía', losrios:'Los Ríos',
    loslagos:'Los Lagos', aysen:'Aysén', magallanes:'Magallanes',
  };

  /* ─── Groupe climatique éditorial (miroir de regions.js) ─── */
  const ID_TO_GROUP = {
    arica:'desert', tarapaca:'desert', antofagasta:'desert', atacama:'desert',
    coquimbo:'semiarid',
    valparaiso:'mediterranean', rm:'mediterranean', ohiggins:'mediterranean',
    maule:'mediterranean', nuble:'mediterranean',
    biobio:'temperate',
    araucania:'temperate_rainy', losrios:'temperate_rainy', loslagos:'temperate_rainy',
    aysen:'cold_patagonia', magallanes:'cold_patagonia',
  };

  /* ─── Saisons hémisphère sud (calque de garden.js getSeason) ─── */
  // months are 0-indexed; spring = Sep..Nov, summer = Dec..Feb, etc.
  const SOUTHERN_SEASONS = {
    spring: [8, 9, 10],
    summer: [11, 0, 1],
    autumn: [2, 3, 4],
    winter: [5, 6, 7],
  };
  // Northern: simple inversion — exposé pour les régions intl
  const NORTHERN_SEASONS = {
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10],
    winter: [11, 0, 1],
  };

  /* ─── Notes climatiques courtes pour l'UI intro ─── */
  const CLIMATE_NOTES = {
    desert:           'Desértico — sol intenso, riego cuidadoso.',
    semiarid:         'Semiárido — temporadas largas, sombra estival.',
    mediterranean:    'Mediterráneo — clima clásico chileno central.',
    temperate:        'Templado — transición entre central y sur.',
    temperate_rainy:  'Templado lluvioso — verano corto, suelo húmedo.',
    cold_patagonia:   'Frío patagónico — ventana corta, almácigos protegidos.',
    intl:             'Fuera de Chile — el calendario seguirá el ciclo chileno.',
  };

  /* ─── Construction des régions chiliennes (depuis SEMENCA_ZONES) ─── */
  const chileanRegions = CHILEAN.map(z => {
    const group = ID_TO_GROUP[z.id] || 'mediterranean';
    return {
      id:           z.id,                                // ex: 'rm'
      label:        z.name,                              // ex: 'Santiago (RM)' — pour le picker
      displayLabel: ID_TO_DISPLAY_LABEL[z.id] || z.name, // ex: 'Santiago' — pour usage inline
      storageName:  z.name,                              // ce que regions.js attend dans SemencaStorage.zone
      hemisphere:   'S',
      climate:      z.climate || group,
      climateGroup: group,
      seasons:      SOUTHERN_SEASONS,
      climateNotes: CLIMATE_NOTES[group] || '',
      country:      'CL',
    };
  });

  /* ─── Régions internationales ───
     Volontairement vide : Verdésia est une app pour le Chili et son
     onboarding ne propose que des régions chiliennes. Les ids
     historiques (intl_belgium, intl_spain, intl_other) sont mappés
     vers 'rm' via LEGACY_LABEL_TO_ID pour les anciens profils. */
  const intlRegions = [];

  const ALL_REGIONS = [...chileanRegions, ...intlRegions];
  const BY_ID = Object.fromEntries(ALL_REGIONS.map(r => [r.id, r]));

  /* ─── Migration douce des anciens libellés et ids ────────────
     L'intro précédente sauvegardait des chaînes ou des ids hors
     périmètre Chili. Tous les anciens marqueurs internationaux
     fallback désormais vers Metropolitana (rm), région par défaut
     centrale et neutre. Les sous-régions vagues sont mappées vers
     la région chilienne canonique la plus proche. */
  const LEGACY_LABEL_TO_ID = {
    // Anciens libellés coarse (intro V1)
    'chile central': 'rm',
    'sur de chile':  'biobio',
    'patagonia':     'aysen',
    // Anciens libellés internationaux → fallback Metropolitana
    'bélgica':       'rm',
    'belgica':       'rm',
    'españa':        'rm',
    'espana':        'rm',
    'otro':          'rm',
    'otro / fuera de chile': 'rm',
    // Anciens ids internationaux → fallback Metropolitana
    'intl_belgium':  'rm',
    'intl_spain':    'rm',
    'intl_other':    'rm',
    // Marqueur SemencaStorage international historique
    'internacional': 'rm',
  };

  /* DEFAULT_FALLBACK garde l'app debout face à toute valeur
     inattendue. Choix : Metropolitana — région centrale, climat
     méditerranéen, ni trop nord ni trop sud. */
  const DEFAULT_FALLBACK = 'rm';

  function resolveRegionId(raw) {
    if (!raw || typeof raw !== 'string') return DEFAULT_FALLBACK;
    if (BY_ID[raw]) return raw;
    const legacy = LEGACY_LABEL_TO_ID[raw.toLowerCase().trim()];
    if (legacy) return legacy;
    // Match by label (e.g. "Santiago (RM)" → 'rm')
    const m = ALL_REGIONS.find(r => r.label === raw);
    return m ? m.id : DEFAULT_FALLBACK;
  }

  /* ─── Lecture / écriture du profil utilisateur ─── */

  function readProfile() {
    try {
      const raw = localStorage.getItem(PROFILE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  }

  function writeProfile(next) {
    try {
      localStorage.setItem(PROFILE_KEY, JSON.stringify(next));
      return true;
    } catch (err) {
      console.warn('[verdesia-config] profile write failed:', err);
      return false;
    }
  }

  function getUserRegionId() {
    const p = readProfile();
    const fromProfile = p && resolveRegionId(p.region);
    if (fromProfile) return fromProfile;
    // Fallback: read from SemencaStorage (in case profile was lost but zone survived)
    try {
      const z = window.SemencaStorage && window.SemencaStorage.getZone && window.SemencaStorage.getZone();
      if (z) {
        const found = chileanRegions.find(r => r.storageName === z || r.label === z);
        if (found) return found.id;
        if (z === 'Internacional') return 'intl_other';
      }
    } catch {}
    return null;
  }

  function getUserRegion() {
    const id = getUserRegionId();
    return id ? BY_ID[id] : null;
  }

  function getRegionById(id) {
    return BY_ID[id] || null;
  }

  /* ─── Écriture canonique ─────────────────────────────────────
     Met à jour À LA FOIS :
       • verdesia_user_profile.region (id canonique)
       • SemencaStorage.zone           (storageName attendu par regions.js)
     Garantit l'alignement de toutes les pages app. */
  function setUserRegion(id) {
    const reg = BY_ID[id];
    if (!reg) {
      console.warn('[verdesia-config] unknown region id:', id);
      return false;
    }
    // 1) Profil
    const profile = readProfile() || {};
    profile.region = id;
    profile.updatedAt = new Date().toISOString();
    if (!profile.createdAt) profile.createdAt = profile.updatedAt;
    writeProfile(profile);

    // 2) Storage canonique (silencieux si SemencaStorage absent)
    try {
      if (window.SemencaStorage && typeof window.SemencaStorage.setZone === 'function') {
        window.SemencaStorage.setZone(reg.storageName);
      }
    } catch (err) {
      console.warn('[verdesia-config] setZone failed:', err);
    }
    return true;
  }

  /* ─── Auto-réparation silencieuse d'un profil hérité ──────────
     Si on détecte une valeur internationale historique dans
     `verdesia_user_profile.region`, on la remplace par l'id
     chilien résolu. Idem pour `SemencaStorage.zone` si la valeur
     stockée est "Internacional". Ces écritures sont silencieuses
     et idempotentes — exécutées une seule fois au chargement. */
  (function migrateLegacyProfile() {
    const p = readProfile();
    if (!p || typeof p.region !== 'string') return;
    const resolved = resolveRegionId(p.region);
    // Réécrit seulement si la valeur stockée n'est pas déjà un id valide
    if (!BY_ID[p.region] && resolved && resolved !== p.region) {
      p.region = resolved;
      p.updatedAt = new Date().toISOString();
      writeProfile(p);
      // Sync SemencaStorage avec le storageName attendu par regions.js
      try {
        const reg = BY_ID[resolved];
        if (reg && window.SemencaStorage && typeof window.SemencaStorage.setZone === 'function') {
          window.SemencaStorage.setZone(reg.storageName);
        }
      } catch { /* silencieux */ }
    }
  })();

  /* ─── Export ─── */
  window.VERDESIA_REGION_CONFIG = {
    regions:         ALL_REGIONS,
    chileanRegions,
    intlRegions,
    getRegionById,
    getUserRegionId,
    getUserRegion,
    setUserRegion,
    resolveRegionId,
  };

})();
