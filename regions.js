/* ══════════════════════════════════════════════════════════════
   SEMENÇA — Perfil regional de Chile

   Pequeña capa estática que traduce la región elegida por el
   usuario en variaciones editoriales:

     - texto de contexto del hero según región × estación
     - sugerencias de "qué sembrar ahora" según clima regional
     - indicación de idoneidad de una planta en la región
     - nota corta para la ficha de planta

   No es un motor climático ni meteorológico — sólo lecturas
   contextuales calmas, pensadas para que la app no se sienta
   igual en Coquimbo, Santiago, la Araucanía o Magallanes.

   Dependencias: storage.js, plants.js (SEMENCA_ZONES).
   ══════════════════════════════════════════════════════════════ */

(function() {

  const Storage = window.SemencaStorage;

  /* ─── Normalización de nombre de región ──────────────────────
     SemencaStorage.getZone() devuelve el nombre tal cual lo eligió
     el usuario (ej: "Santiago (RM)", "La Araucanía"). Las plantas
     usan formas cortas en `zones` (ej: "RM", "Araucanía"). Esta
     tabla unifica ambos formatos en un id canónico. */

  const STORAGE_TO_ID = {
    'Arica y Parinacota': 'arica',
    'Arica':              'arica',
    'Tarapacá':           'tarapaca',
    'Antofagasta':        'antofagasta',
    'Atacama':            'atacama',
    'Coquimbo':           'coquimbo',
    'Valparaíso':         'valparaiso',
    'Santiago (RM)':      'rm',
    'Santiago':           'rm',
    'RM':                 'rm',
    "O'Higgins":          'ohiggins',
    'Maule':              'maule',
    'Ñuble':              'nuble',
    'Biobío':             'biobio',
    'La Araucanía':       'araucania',
    'Araucanía':          'araucania',
    'Los Ríos':           'losrios',
    'Los Lagos':          'loslagos',
    'Aysén':              'aysen',
    'Magallanes':         'magallanes',
    // Marcador para usuarios fuera de Chile (verdesia_intro). El contenido
    // agronómico de regions.js no aplica, así que servimos el mediterráneo
    // central como fallback editorial — calmo y honesto.
    'Internacional':      'rm',
  };

  // Forma corta usada en plant.zones (para hacer match)
  const ID_TO_PLANT_KEY = {
    arica:'Arica', tarapaca:'Tarapacá', antofagasta:'Antofagasta', atacama:'Atacama',
    coquimbo:'Coquimbo', valparaiso:'Valparaíso', rm:'RM', ohiggins:"O'Higgins",
    maule:'Maule', nuble:'Ñuble', biobio:'Biobío', araucania:'Araucanía',
    losrios:'Los Ríos', loslagos:'Los Lagos', aysen:'Aysén', magallanes:'Magallanes',
  };

  // Nombre corto bonito para mostrar inline en frases
  const ID_TO_DISPLAY = {
    arica:'Arica y Parinacota', tarapaca:'Tarapacá', antofagasta:'Antofagasta', atacama:'Atacama',
    coquimbo:'Coquimbo', valparaiso:'Valparaíso', rm:'Santiago', ohiggins:"O'Higgins",
    maule:'el Maule', nuble:'Ñuble', biobio:'Biobío', araucania:'la Araucanía',
    losrios:'Los Ríos', loslagos:'Los Lagos', aysen:'Aysén', magallanes:'Magallanes',
  };

  // Agrupación climática editorial (suficiente para variar el tono)
  const ID_TO_GROUP = {
    arica:'desert', tarapaca:'desert', antofagasta:'desert', atacama:'desert',
    coquimbo:'semiarid',
    valparaiso:'mediterranean', rm:'mediterranean', ohiggins:'mediterranean',
    maule:'mediterranean', nuble:'mediterranean',
    biobio:'temperate',
    araucania:'temperate_rainy', losrios:'temperate_rainy', loslagos:'temperate_rainy',
    aysen:'cold_patagonia', magallanes:'cold_patagonia',
  };

  // Vecinos directos (norte/sur) para clasificar plantas como marginales
  // si la región del usuario no está en plant.zones pero una vecina sí lo está.
  const NEIGHBORS = {
    arica:['tarapaca'], tarapaca:['arica','antofagasta'],
    antofagasta:['tarapaca','atacama'], atacama:['antofagasta','coquimbo'],
    coquimbo:['atacama','valparaiso'], valparaiso:['coquimbo','rm'],
    rm:['valparaiso','ohiggins'], ohiggins:['rm','maule'],
    maule:['ohiggins','nuble'], nuble:['maule','biobio'],
    biobio:['nuble','araucania'], araucania:['biobio','losrios'],
    losrios:['araucania','loslagos'], loslagos:['losrios','aysen'],
    aysen:['loslagos','magallanes'], magallanes:['aysen'],
  };

  /* ─── Helpers de identidad regional ──────────────────────── */

  function getCurrentZoneId() {
    // Source de vérité primaire : verdesia_user_profile.region (via la
    // façade VERDESIA_REGION_CONFIG). Si la façade n'est pas chargée
    // sur cette page, on retombe sur SemencaStorage.zone, miroir
    // maintenu par setUserRegion() à l'onboarding. Garde-fou final : 'rm'.
    try {
      const cfg = window.VERDESIA_REGION_CONFIG;
      if (cfg && typeof cfg.getUserRegionId === 'function') {
        const id = cfg.getUserRegionId();
        if (id && ID_TO_GROUP[id]) return id;
      }
    } catch (_) { /* silent */ }
    const stored = (Storage && Storage.getZone && Storage.getZone()) || 'Santiago';
    return STORAGE_TO_ID[stored] || 'rm';
  }

  function getCurrentZoneDisplay() {
    return ID_TO_DISPLAY[getCurrentZoneId()] || 'Santiago';
  }

  function getCurrentGroup() {
    return ID_TO_GROUP[getCurrentZoneId()] || 'mediterranean';
  }

  /* ─── Texto de contexto editorial: estación × grupo climático ─
     Frases breves, calmas, ancladas al territorio. Devuelve el
     html del párrafo principal del hero de today. Si una entrada
     no existe, el caller debe caer al texto genérico. */

  const HERO_CONTEXT = {
    mediterranean: {
      spring: 'El suelo se calienta en {region}. <strong>Tus primeros semis de tomate y albahaca prosperan bajo cubierta.</strong> Las heladas de agosto ya pasaron en la mayoría del valle central.',
      summer: 'Cosecha diaria en {region} — tomates, zapallos y pimientos en su pico. <strong>Riega temprano y comienza a recolectar semillas</strong> de los frutos más bellos.',
      autumn: 'Las noches se enfrían en {region}. <strong>Planta ya el ajo y las cebollas</strong>, y siembra los cultivos de invierno — lechugas, espinacas, habas.',
      winter: 'Las noches son frescas pero el suelo sigue vivo en {region}. <strong>Lechugas y espinacas crecen lentas.</strong> Es momento de podar frutales y planear septiembre.',
    },
    semiarid: {
      spring: 'La camanchaca alivia las mañanas en {region}. <strong>Es buen momento para sembrar tomate, ají y zapallo</strong> — pero conviene ya pensar en sombra para diciembre.',
      summer: 'El sol castiga en {region}. <strong>Acolchado grueso al pie y riego al amanecer son esenciales.</strong> Las plantas que se adaptan, fructifican generosas.',
      autumn: 'Las temperaturas bajan suaves en {region}. <strong>Buen momento para olivos, almendros e higueras</strong> — y para descansar el huerto del verano largo.',
      winter: 'Inviernos suaves y luminosos en {region}. <strong>Cítricos cuajan, hortalizas de hoja prosperan</strong> sin estrés térmico. Casi todo el año es cultivable acá.',
    },
    temperate_rainy: {
      spring: 'Las heladas se retiran lento en {region}. <strong>Sembrar bajo cubierta hasta mediados de octubre.</strong> Las nochecillas frescas aún piden paciencia con los cultivos de calor.',
      summer: 'Verano corto pero generoso en {region}. <strong>Es ahora cuando los berries dan, las hortensias florecen y la huerta corre.</strong> Riego sólo si la lluvia falla.',
      autumn: 'El otoño llega con lluvia en {region}. <strong>Cuidar el drenaje, evitar pisar tierra saturada.</strong> Las hojas que caen se vuelven mantillo del próximo año.',
      winter: 'Lluvia y frío en {region}. <strong>Pocos cultivos activos: kale, acelga, ajo invernando.</strong> Buen momento para podar frutales caducos y preparar compost.',
    },
    cold_patagonia: {
      spring: 'Cualquier siembra al aire libre todavía es riesgo en {region}. <strong>Almácigos protegidos, ventanas al norte</strong>, y esperar a noviembre para trasplantar.',
      summer: 'La temporada productiva en {region} es ahora — semanas contadas. <strong>Cosecha lo que puedas y cierra ciclo antes de marzo.</strong> Aprovecha la luz larga.',
      autumn: 'Cierra ciclo en {region}. <strong>Las primeras heladas llegan en abril o antes.</strong> Recoge lo que queda y cubre el suelo con paja gruesa.',
      winter: 'Tiempo de descanso en {region}. <strong>Nieve cubre el suelo, los árboles duermen.</strong> Es el momento de planificar el huerto del próximo verano.',
    },
    desert: {
      spring: 'El sol ya quema fuerte en {region}. <strong>Cualquier almácigo necesita sombrilla.</strong> Riego al amanecer y al atardecer — nunca al mediodía.',
      summer: 'Calor extremo en {region}. <strong>Sólo riego, sombra y paciencia.</strong> Los cultivos avanzados resisten; los nuevos almácigos se postergan al otoño.',
      autumn: 'Llega el alivio térmico a {region}. <strong>Es el mejor momento del año</strong> para iniciar trabajos en el huerto y plantar perennes (frutales, aromáticas).',
      winter: 'Inviernos templados en {region}. <strong>Casi todo se puede sembrar</strong> — hortalizas de hoja, cebollas, ajos, raíces. Aprovecha la temporada amable.',
    },
    temperate: {
      spring: 'La transición a la primavera es lenta en {region}. <strong>Sembrar bajo cubierta hasta fines de septiembre</strong>, trasplantar al aire libre desde mediados de octubre.',
      summer: 'Verano agradable en {region}, sin extremos. <strong>Cosecha sostenida de tomates, zapallos y pimientos.</strong> Riego regular pero moderado.',
      autumn: 'El otoño se asienta en {region} con lluvias intermitentes. <strong>Planta ajo, cebolla y cultivos de invierno.</strong> Cuida el drenaje del huerto.',
      winter: 'Inviernos fríos pero cultivables en {region}. <strong>Hortalizas de hoja, ajo invernando, frutales podando.</strong> Tiempo de planificar la próxima temporada.',
    },
  };

  function regionalContext(seasonKey) {
    const group = getCurrentGroup();
    const tpl = (HERO_CONTEXT[group] && HERO_CONTEXT[group][seasonKey]) || '';
    if (!tpl) return null;
    return tpl.replace(/\{region\}/g, getCurrentZoneDisplay());
  }

  /* ─── Listas de siembra regionales ──────────────────────────
     Cada combinación (group × season) puede ofrecer una lista
     adaptada. Si no hay override, el caller usa SOW_NOW global. */

  const item = (id, label) => ({ id, label });

  const SOW_REGIONAL = {
    semiarid: {
      spring: [ item('tomate','Siembra Sep–Oct, sombra parcial'), item('aji_verde','Siembra Sep–Oct'), item('zapallo','Siembra Oct–Nov'), item('cilantro','Siembra escalonada'), item('albahaca','Siembra Sep–Oct'), item('frutilla','Trasplante Sep') ],
      summer: [ item('lechuga','Bajo sombrilla, Dic–Ene'), item('acelga','Siembra Dic'), item('poroto_verde','Siembra Dic'), item('cilantro','Variedades resistentes') ],
      autumn: [ item('ajo','Plantar Mar–Abr'), item('cebolla','Almácigo Mar'), item('haba','Siembra Abr–May'), item('arveja','Siembra Abr'), item('cilantro','Siembra Mar–May'), item('espinaca','Siembra Abr') ],
      winter: [ item('lechuga','Crece bien al aire libre'), item('espinaca','Siembra Jun–Jul'), item('cilantro','Siembra todo el invierno'), item('rabanito','Siembra Jun–Ago'), item('haba','Aún se puede plantar'), item('ajo','Última opción de plantación') ],
    },
    temperate_rainy: {
      spring: [ item('frutilla','Trasplante Sep–Oct'), item('arandano','Plantar Sep'), item('lechuga','Siembra Sep–Nov'), item('rabanito','Siembra escalonada'), item('kale','Siembra Sep–Oct'), item('cilantro','Siembra Sep–Nov') ],
      summer: [ item('lechuga','Siembra Dic–Ene'), item('acelga','Siembra Dic'), item('rabanito','Siembra Dic–Feb'), item('frambuesa','Cosecha en pleno'), item('rucula','Siembra Dic') ],
      autumn: [ item('ajo','Plantar Mar–Abr'), item('kale','Siembra Mar–Abr'), item('espinaca','Siembra Mar–May'), item('lechuga','Bajo cubierta'), item('haba','Siembra Abr'), item('perejil','Siembra Mar') ],
      winter: [ item('kale','Resiste el frío'), item('acelga','Bajo cubierta'), item('ajo','Brotando'), item('espinaca','Resiste heladas suaves') ],
    },
    cold_patagonia: {
      spring: [ item('lechuga','Bajo cubierta, Sep–Oct'), item('rabanito','Bajo cubierta'), item('cilantro','Bajo cubierta'), item('espinaca','Bajo cubierta'), item('frutilla','Trasplante Oct') ],
      summer: [ item('lechuga','Al aire libre Dic–Ene'), item('rabanito','Siembra Dic–Ene'), item('acelga','Siembra Dic'), item('arveja','Siembra Dic') ],
      autumn: [ item('ajo','Plantar Mar — única ventana'), item('haba','Si el otoño es suave') ],
      winter: [ item('lechuga','Sólo invernadero'), item('rabanito','Sólo invernadero') ],
    },
    desert: {
      spring: [ item('tomate','Con sombrilla'), item('aji_verde','Resiste calor'), item('sandia','Siembra Sep'), item('melon','Siembra Sep'), item('albahaca','Siembra Sep') ],
      summer: [ item('aji_verde','Pleno crecimiento'), item('cilantro','Bajo malla sombra'), item('rabanito','Bajo malla sombra') ],
      autumn: [ item('lechuga','Excelente ventana, Mar–May'), item('cilantro','Siembra Mar–May'), item('rabanito','Siembra Abr'), item('espinaca','Siembra Abr'), item('ajo','Plantar Abr–May'), item('cebolla','Almácigo Mar') ],
      winter: [ item('lechuga','Crece todo el invierno'), item('cilantro','Siembra continua'), item('rabanito','Siembra Jun–Ago'), item('espinaca','Siembra Jun'), item('haba','Siembra Jun–Jul'), item('arveja','Siembra Jun') ],
    },
  };

  function regionalSowList(seasonKey) {
    const group = getCurrentGroup();
    const list = SOW_REGIONAL[group] && SOW_REGIONAL[group][seasonKey];
    return list || null;
  }

  /* ─── Idoneidad de una planta para la región ──────────────── */

  function plantSuitability(plant) {
    if (!plant || !Array.isArray(plant.zones) || plant.zones.length === 0) return null;
    const zoneId = getCurrentZoneId();
    const key = ID_TO_PLANT_KEY[zoneId];
    if (!key) return null;
    if (plant.zones.includes(key)) return 'good';
    const neighbors = NEIGHBORS[zoneId] || [];
    for (const nb of neighbors) {
      const nbKey = ID_TO_PLANT_KEY[nb];
      if (nbKey && plant.zones.includes(nbKey)) return 'marginal';
    }
    return 'difficult';
  }

  function plantRegionalNote(plant) {
    const s = plantSuitability(plant);
    if (s == null) return '';
    const r = getCurrentZoneDisplay();
    if (s === 'good')      return `Excelente para ${r}.`;
    if (s === 'marginal')  return `Marginal en ${r} — puede prosperar con resguardo (invernadero, muro al norte).`;
    if (s === 'difficult') return `Difícil al aire libre en ${r}.`;
    return '';
  }

  /* ─── Export ─── */
  window.SemencaRegions = {
    getCurrentZoneId,
    getCurrentZoneDisplay,
    getCurrentGroup,
    regionalContext,
    regionalSowList,
    plantSuitability,
    plantRegionalNote,
  };

})();
