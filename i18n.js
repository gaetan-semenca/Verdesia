/* ══════════════════════════════════════════════════════════════
   SEMENÇA — Sistema centralizado de i18n
   ══════════════════════════════════════════════════════════════

   Uso:
     SemencaI18n.t('nav.today')                  → "Hoy" / "Aujourd'hui"
     SemencaI18n.t('garden.daysSince', {days:12})
     SemencaI18n.getLang()                       → 'es' | 'fr'
     SemencaI18n.setLang('fr')                   → guarda + aplica + notifica
     SemencaI18n.getLocalized(plant.name)        → "Tomate"
     SemencaI18n.applyTranslations(root?)        → reemplaza textos en DOM
     SemencaI18n.onChange(callback)              → suscribirse a cambios

   Atributos en HTML:
     <h1 data-i18n="today.title"></h1>
     <button data-i18n="actions.save"></button>
     <input data-i18n-placeholder="forms.search">
     <button data-i18n-aria-label="actions.close">×</button>

   Añadir un idioma nuevo:
     SEMENCA_I18N.pt = { ... }
     SemencaI18n.LANGS = ['es','fr','pt']

   ══════════════════════════════════════════════════════════════ */

window.SEMENCA_I18N = {

  /* ═══════════════════════════════════════
     ES — Castellano (defecto)
  ═══════════════════════════════════════ */
  es: {
    nav: {
      home:    'Inicio',
      today:   'Hoy',
      garden:  'Mi jardín',
      plants:  'Plantas',
      back:    'Volver',
      backToPlants: 'Volver a Plantas',
    },

    actions: {
      add:           'Añadir',
      addPlant:      'Añadir planta',
      addToGarden:   'Añadir al jardín',
      inGarden:      'En tu jardín ✓',
      save:          'Guardar',
      cancel:        'Cancelar',
      continue:      'Continuar',
      close:         'Cerrar',
      search:        'Buscar',
      clear:         'Limpiar',
      archive:       'Archivar',
      restore:       'Restaurar',
      removeAria:    'Eliminar',
      explorePlants: 'Explorar plantas',
      enterGarden:   'Entrar a mi jardín',
      viewSheet:     'Ver ficha',
      viewFullSheet: 'Ver ficha completa',
      seeAll:        'Ver todo',
      settings:      'Ajustes',
      changeLang:    'Cambiar idioma',
      changeRegion:  'Cambiar región',
    },

    onboarding: {
      welcomeBilingual:   'Bienvenido a Verdésia · Bienvenue à Verdésia',
      chooseLangBilingual:'Choisissez votre langue · Elige tu idioma',
      langEs:             'Español',
      langFr:             'Français',
      regionTitle:        '¿Dónde está tu jardín?',
      regionSub:          'Verdésia adapta las temporadas y consejos según tu región de Chile.',
      regionPlaceholder:  'Elige una región',
      continueLbl:        'Continuar',
      progressStep:       'Paso {step} de {total}',
    },

    settings: {
      title:        'Ajustes',
      sub:          'Cambia el idioma o tu región cuando quieras. Todo se guarda en tu navegador.',
      langLabel:    'Idioma',
      regionLabel:  'Región',
      save:         'Guardar',
      close:        'Cerrar',
    },

    common: {
      day:        'día',
      days:       'días',
      dayShort:   'Día {n}',
      noteEmpty:  'Aún no hay observaciones. Anota lo primero que notes.',
      none:       '—',
      season: { spring:'Primavera', summer:'Verano', autumn:'Otoño', winter:'Invierno' },
      seasonMonths: { spring:'Sep · Oct · Nov', summer:'Dic · Ene · Feb', autumn:'Mar · Abr · May', winter:'Jun · Jul · Ago' },
      seasonGreetingPrefix: 'Buenos días',
      seasonGreetingMap: { spring:'es primavera', summer:'es verano', autumn:'es otoño', winter:'es invierno' },
      seasonAdjective: { spring:'austral', summer:'austral', autumn:'austral', winter:'austral' },
      noteTypeLabels: { obs:'Observación', sow:'Siembra', harv:'Cosecha', prob:'Problema', tip:'Consejo', photo:'Foto' },
      categoryLabels: { hortaliza:'Hortaliza', hierba:'Hierba', flor:'Flor', fruta:'Fruta', arbol:'Árbol' },
      categoryPlural: { hortaliza:'Hortalizas', hierba:'Hierbas', flor:'Flores', fruta:'Frutas', arbol:'Árboles' },
    },

    /* ────────────── PÁGINA: today ────────────── */
    today: {
      title:       'Hoy en tu jardín',
      heroDateLocation: '{date} · {region}, Chile',
      heroGreetingPrefix: 'Buenos días —',
      flGarden:     'Mi jardín esta semana',
      flSeason:     'Esta temporada en {region}',
      flNow:        'Qué sembrar ahora en {region}',
      flNotes:      'Mis últimas observaciones',
      flCal:        'Calendario de siembras',
      flLinks:      'Accesos rápidos',
      flToday:      'Para hoy',
      thisWeek:     'Esta semana:',
      gardenEmptyTitle: 'Tu jardín está vacío',
      gardenEmptySub:   'Añade tu primera planta y Verdésia te acompañará en cada etapa de su crecimiento.',
      gardenEmptyCta:   'Empezar mi jardín →',
      legSow:       'Siembra',
      legPlant:     'Trasplante',
      legHarv:      'Cosecha',
      hcLabel:      'Patrimonio semillero',
      hcTitle:      'Guardar semillas es transmitir vida',
      hcText:       'Cada semilla guardada es un gesto de continuidad. En Chile, miles de variedades locales sobreviven gracias a los jardineros que las preservan.',
      hcLink:       'Ver guía de recolección →',
      viewFullSheet:'Ver ficha completa →',
      notesEmpty:   'Tus observaciones de jardín aparecerán aquí.',

      seasonalSpringEyebrow: 'Primavera austral · Sep–Nov',
      seasonalSpringTitle:   'El jardín despierta',
      seasonalSpringBody:    'Las temperaturas suben, el suelo se calienta. Es el momento de preparar los semilleros de tomate, pimiento y albahaca bajo cubierta. Las plantas de invierno — lechugas, zanahorias — aún pueden cosecharse.',
      seasonalSpringContext: 'El suelo se calienta en {region}. <strong>Es el momento de tus primeros semis de tomate y albahaca bajo cubierta.</strong> Las heladas de agosto ya pasaron.',
      seasonalSummerEyebrow: 'Verano austral · Dic–Feb',
      seasonalSummerTitle:   'La plena temporada productiva',
      seasonalSummerBody:    'El huerto está en plena producción. Tomates, zapallos y pimientos llegan a la madurez. Es la temporada de recolectar semillas y hacer las primeras conservas.',
      seasonalSummerContext: 'Los tomates y zapallos están en su pico. <strong>Cosecha cada día y comienza a recolectar tus primeras semillas.</strong> El calor es fuerte — riega temprano en la mañana.',
      seasonalAutumnEyebrow: 'Otoño austral · Mar–May',
      seasonalAutumnTitle:   'Tiempo de cosecha y preparación',
      seasonalAutumnBody:    'Las últimas cosechas de verano, la preparación del suelo para el invierno. Plantar ajos y cebollas, sembrar los vegetales de invierno — lechuga, zanahorias, espinacas. Recolectar y secar semillas.',
      seasonalAutumnContext: 'Las noches se enfrían en {region}. <strong>Planta el ajo y las cebollas ahora</strong>, y siembra los vegetales de invierno bajo cubierta.',
      seasonalWinterEyebrow: 'Invierno austral · Jun–Ago',
      seasonalWinterTitle:   'Paciencia y preparación',
      seasonalWinterBody:    'El suelo descansa. Lechugas, espinacas y zanahorias resisten el frío suave de {region}. Un buen momento para preparar el compost, planificar las siembras de primavera y consultar las fichas de plantas.',
      seasonalWinterContext: 'Las noches son frescas pero el suelo de {region} sigue vivo. <strong>Lechugas y espinacas crecen bien.</strong> Prepara tus semillas para septiembre.',

      knowledgeSpringLabel: 'Consejo del momento',
      knowledgeSpringTitle: 'Acelerar la germinación',
      knowledgeSpringText:  'En septiembre, las temperaturas nocturnas en {region} siguen siendo frescas. Coloca los semilleros sobre una superficie cálida o bajo un techo de plástico. El tomate necesita mínimo 22°C para germinar.',
      knowledgeSummerLabel: 'Consejo del momento',
      knowledgeSummerTitle: 'Recolectar semillas',
      knowledgeSummerText:  'El verano austral es la temporada ideal para recolectar semillas de tomate y pimiento. Elegir los frutos más hermosos de las plantas más vigorosas, dejar sobremadurar ligeramente.',
      knowledgeAutumnLabel: 'Consejo del momento',
      knowledgeAutumnTitle: 'Preparar el suelo para el invierno',
      knowledgeAutumnText:  'En marzo–abril, enmendar el suelo agotado por el verano: compost maduro y cuerno molido. Sembrar abonos verdes (mostaza, avena) para proteger el suelo durante el invierno austral.',
      knowledgeWinterLabel: 'Consejo del momento',
      knowledgeWinterTitle: 'Preparar el compost',
      knowledgeWinterText:  'El invierno austral es la temporada del compost. Alternar capas húmedas (residuos de cocina) y secas (hojas, cartón). Un compost bien llevado estará listo para las siembras de primavera.',

      remSeasonSpringText: '<em>Primavera austral.</em> El suelo se calienta — buenas semanas para almácigos de tomate, ají y albahaca bajo cubierta.',
      remSeasonSpringSub:  'Las heladas suelen pasar a fines de agosto en {region}.',
      remSeasonSummerText: '<em>Verano en pleno.</em> Riega temprano en la mañana o al atardecer — evita la pérdida por evaporación.',
      remSeasonSummerSub:  'Aplica acolchado para conservar humedad del suelo.',
      remSeasonAutumnText: '<em>Otoño.</em> Es momento de plantar ajos, cebollas, y sembrar hortalizas de invierno.',
      remSeasonAutumnSub:  'Recolecta semillas de las plantas que terminan su ciclo.',
      remSeasonWinterText: '<em>Invierno suave.</em> El jardín descansa — prepara compost y planifica la primavera.',
      remSeasonWinterSub:  'Lechuga, acelga y espinaca crecen aún con frío suave.',
      remStageTransition:  'Tu <em>{plant}</em> entra en {stage} esta semana.',
      remStageSub:         '{emoji} {plant} · día {days}',
      remHarvest:          'Buen momento para cosechar tu <em>{plant}</em>.',
      remHarvestSub:       'Cosechar regularmente estimula la producción.',
      remSeeds:            'Momento de recolectar semillas de tu <em>{plant}</em>.',
      remSeedsSub:         'Variedades autopolinizantes mantienen el linaje.',

      sowSpring1:'Almácigo bajo cubierta', sowSpring2:'Siembra superficial', sowSpring3:'Almácigo cálido', sowSpring4:'Almácigo o directo', sowSpring5:'Directo a tierra', sowSpring6:'Directo o almácigo',
      sowSummer1:'Directo, suelo cálido', sowSummer2:'Bajo media sombra', sowSummer3:'Directo a tierra', sowSummer4:'Directo a tierra',
      sowAutumn1:'Siembra otoñal', sowAutumn2:'Siembra otoñal', sowAutumn3:'Directo a tierra', sowAutumn4:'Directo, suelo profundo', sowAutumn5:'Plantar estolones', sowAutumn6:'Directo a tierra',
      sowWinter1:'Con protección', sowWinter2:'Crece bien al frío', sowWinter3:'Crece todo el invierno', sowWinter4:'Planificar primavera',

      qlMyGarden:    'Mi jardín',
      qlMyGardenSub: 'Gestionar mis plantas',
      qlPlantSheet:  'Ficha de planta',
      qlSeedGuide:   'Guía de semillas',
      qlSeedGuideSub:'Cómo recolectar y conservar',
    },

    /* ────────────── PÁGINA: garden (jardin) ────────────── */
    garden: {
      sbLabel:        'Mis plantas',
      sbEmptyTxt:     'Tu jardín está vacío. Añade tu primera planta.',
      addBtnTxt:      'Añadir una planta',
      welcomeTitle:   'Tu jardín empieza aquí',
      welcomeSub:     'Añade una planta, indica cuándo la sembraste, y Verdésia te acompañará en cada etapa de su crecimiento.',
      welcomeCta:     'Añadir mi primera planta',
      addPanelTitle:  '¿Qué quieres cultivar?',
      addPanelSub:    'Elige una planta del catálogo. La añadiremos a tu jardín con su calendario personalizado.',
      modalTitle:     '¿Cuándo sembraste?',
      modalSub:       'Indica la fecha aproximada de siembra o trasplante. Verdésia calculará la etapa actual y te avisará de lo que necesita tu planta.',
      modalDateLabel: 'Fecha de siembra',
      modalZoneLabel: 'Tu zona (Chile)',
      modalConfirm:   'Añadir al jardín',
      modalCancel:    'Cancelar',
      todaySub:       'Aquí está lo que está pasando en tu jardín esta semana.',
      nowLabel:       'Esta semana · Acción recomendada',
      nowTitlePre:    'Tu planta está en ',
      nsHead:         'Mis observaciones',
      noteSubmitBtn:  'Guardar',
      notePlaceholder:'Anota lo que observas hoy…',
      spaceLabel:     'Espacio',
      spaceUnit:      'cm entre plantas',
      waterLabel:     'Riego',
      sunLabel:       'Luz',
      heightLabel:    'Altura',
      sowLabel:       'Siembra',
      harvLabel:      'Cosecha',
      alreadyAdded:   'Ya está en tu jardín',
      pickerPh:       'Buscar una planta…',
      scSub:          '{region} · Chile',
      archivedTxt:    'Esta planta cerró su temporada. Las notas se conservan como memoria.',
      pastSeasons:    'Temporadas pasadas',
      sectionDiv:     '',
      archive:        'Archivar',
      restore:        'Restaurar',
      viewSheet:      'Ver ficha',
      toastAddedPrefix:    'añadida al jardín 🌱',
      toastAddedPrefixFem: 'añadido al jardín 🌱',
      toastRemovedPrefix:  'eliminada',
      toastNote:           'Nota guardada',
      toastArchived:       'Temporada archivada — las notas se conservan 🗄',
      toastRestored:       'Planta restaurada',
    },

    /* ────────────── PÁGINA: explorer ────────────── */
    explorer: {
      heroEyebrow:    'Catálogo',
      heroTitle:      'El catálogo del <em>huerto chileno</em>',
      heroSub:        'Hortalizas, hierbas, frutas y árboles que cultivar y conservar. Cada ficha contiene su calendario, sus etapas, sus problemas frecuentes y cómo recolectar sus semillas.',
      heroCount:      '{n} plantas en el catálogo',
      resultAll:      '{n} plantas',
      resultSome:     '{n} de {total} plantas',
      searchPh:       'Buscar — tomate, romero, frutilla…',
      filterAll:        'Todas',
      filterHortaliza:  'Hortalizas',
      filterHierba:     'Hierbas',
      filterFlor:       'Flores',
      filterArbolFruta: 'Árboles y frutales',
      filterHeritage:   'Patrimoniales',
      sowingLabel:    'Siembra',
      harvestLabel:   'Cosecha',
      heritageLabel:  'Patrimonial',
      emptyTitle:     'Nada por aquí todavía',
      emptyTitleQuery:'No encontramos «{q}»',
      emptySub:       'Prueba otra palabra o cambia de filtro — el catálogo crece poco a poco.',
      emptyReset:     'Ver todas las plantas',
    },

    /* ────────────── PÁGINA: plante ────────────── */
    plante: {
      btnInGarden:       'En tu jardín ✓',
      sb_sow:            'Hora de sembrar',
      sb_plant:          'Hora de trasplantar',
      sb_harv:           'En cosecha',
      sb_seeds:          'Recoger semillas',
      sb_resting:        'Cultivo en curso',
      vl1:'Altura', vs1:'planta adulta',
      vl2:'Ciclo',  vs2:'siembra → cosecha',
      vl3:'Espacio', vs3:'entre plantas',
      vl4:'Riego',  vs4:'',
      hdsZoneLbl:'Climas Chile', hdsSun:'Luz solar', hdsHarvLbl:'Cosecha',
      scrollCueTxt:'Ver ficha completa',
      calEyebrow:'Calendario estacional',
      calTitle:'Cuándo plantar en <em>Chile</em>',
      rowSow:'Siembra', rowPlant:'Trasplante', rowHarv:'Cosecha', rowSeeds:'Recolección de semillas',
      legSow:'Siembra', legPlant:'Trasplante', legHarv:'Cosecha', legSeeds:'Semillas',
      stagesEyebrow:'Desarrollo de la planta', stagesTitle:'Etapas de <em>crecimiento</em>',
      companionsEyebrow:'Cultivo asociado', companionsTitle:'Plantas <em>compañeras</em>',
      cgGood:'Le va bien con', cgBad:'Evitar cerca de',
      compGoodWhy:'Buena asociación en el huerto chileno.',
      compBadWhy:'Evitar plantar cerca.',
      compBadgeGood:'Bueno', compBadgeBad:'Evitar',
      compNoSheet:'Sin ficha aún',
      nutriEyebrow:'Usos y beneficios', nutriTitle:'En la cocina <em>y el cuerpo</em>',
      intro_use_culinary:'Uso culinario',
      intro_use_nutri:'Aporte nutricional',
      intro_use_medic:'Uso medicinal',
      seedsEyebrow:'Patrimonio vivo', seedsTitle:'Recolección de <em>semillas</em>',
      seedLifeLbl:'Duración de las semillas en condiciones óptimas',
      seedDefaultIntro: 'Conservar y compartir las semillas de tu {plant} es un gesto de continuidad para los jardines chilenos.',
      seed_when:'Cuándo recolectar', seed_how:'Cómo extraer', seed_drying:'Secado', seed_storage:'Conservación', seed_notes:'Notas',
      problemsEyebrow:'Problemas frecuentes', problemsTitle:'Reconocer y <em>remediar</em>',
      communityEyebrow:'Mi diario', communityTitle:'Mis observaciones <em>de esta planta</em>',
      formTitle:'Anotar una observación',
      formSub:'Lo que ves hoy en tu jardín se conserva aquí. Una semilla guardada, una flor que aparece, un riego ajustado — todo cuenta.',
      formLabelType:'Tipo', formLabelNote:'Tu observación',
      formNotePh:'Anota lo que observas hoy…',
      formSubmit:'Guardar en mi jardín →',
      notesEmpty:'Aún no hay observaciones para esta planta. Cuando empieces a anotar, tus notas vivirán aquí.',
      notInGardenYet:"Aún no has añadido esta planta a tu jardín.",
      heritageBadge:'Variedad patrimonial',
      defaultZoneLabel:'Chile central',
      toastAdded:'Planta añadida a tu jardín 🌱',
      toastInGarden:'Ya está en tu jardín',
      toastNote:'Nota guardada',
      heroBackTxt:'Volver a Plantas',
      btnSaveLbl:'Añadir al jardín',
    },

    /* ────────────── PÁGINA: landing ────────────── */
    landing: {
      navCta:'Entrar a mi jardín',
      heroEyebrow:'Jardín · {region} · Chile',
      heroTitle:'Sabe qué<br>plantar <em>hoy.</em>',
      heroDesc:'Verdésia es un compañero de jardín para Chile. Te dice qué sembrar esta semana, sigue el crecimiento de tus plantas, y conserva el conocimiento de tus semillas, saison tras saison.',
      heroCta1:'Entrar a mi jardín', heroCta2:'Explorar plantas',
      tl1:'Lo que necesita tu jardín ahora mismo', tl2:'Calendario para el hemisferio Sur', tl3:'Semillas, cultivo, memoria',
      fc1tag:'🌸 Primavera · {region}', fc1now:'Esta semana',
      fc1name:'Tomate', fc1stage:'Crecimiento vegetativo · Día 38',
      fc1action:'<strong>Ahora:</strong> Tutorar y eliminar brotes axilares. Regar en la base.',
      fc1s1:'Germinación', fc1s2:'Cosecha',
      fc2name:'Frutilla', fc2stage:'Floración · Día 72',
      fc2action:'<strong>Esta semana:</strong> Polinización en curso. Colocar paja debajo de los frutos.',
      fc2s1:'Instalación', fc2s2:'Cosecha',
      fc3tag:'📝 Observación', fc3name:'Albahaca',
      fc3note:'«Flores apareciendo, pinzar hoy antes de que abran. Aroma intenso.»',
      pillarsEyebrow:'Cómo funciona',
      pillarsTitle:'Tres cosas simples,<br>hechas <em>bien.</em>',
      p1title:'Lo que hacer hoy', p1desc:'Verdésia sabe la temporada en Chile, tu zona, y el estado de cada planta. Cada mañana te dice exactamente qué necesita tu jardín esta semana.', p1link:'Ver hoy →',
      p2title:'Conocer tus plantas', p2desc:'Fichas botánicas completas: cuándo sembrar, etapas de crecimiento, asociaciones, nutrición, y cómo recolectar las semillas. Información útil, no genérica.', p2link:'Ver fichas →',
      p3title:'Recordar tu jardín', p3desc:'Anota lo que observas, sigue el progreso de cada planta, conserva la memoria de tus cultivos saison tras saison. Tu jardín, documentado.', p3link:'Mi jardín →',
      mockDate:'Martes, Sep 2025 · {region}, Chile',
      mockTitle:'Buenos días —<br><em>es primavera</em>',
      mc1name:'Tomate', mc1stage:'Crecimiento · Día 38',
      mc1action:'Tutorar y eliminar brotes axilares. Regar en la base, nunca sobre el follaje.',
      mc2name:'Albahaca', mc2stage:'Crecimiento · Día 22',
      mc2action:'Pinzar los ápices antes de que florezcan. Cortar las flores para prolongar la producción.',
      msbName:'Primavera austral', msbSub:'Sep · Oct · Nov · {region}',
      todayEyebrow:'Página de inicio',
      todayTitle:'Tu jardín,<br>cada <em>mañana.</em>',
      todayBody:'Abre Verdésia y en 30 segundos sabes qué está pasando en tu jardín esta semana. Sin notificaciones. Sin ruido. Solo lo que importa.',
      tf1t:'Temporada en tiempo real', tf1d:'El calendario del hemisferio Sur, siempre correcto para Santiago.',
      tf2t:'Estado de cada planta', tf2d:'Qué etapa, cuántos días, y qué hacer exactamente esta semana.',
      tf3t:'Qué sembrar ahora', tf3d:'Las plantas indicadas para tu zona y tu temporada, actualizadas automáticamente.',
      plantsEyebrow:'Fichas de plantas',
      plantsTitle:'Conocimiento botánico<br>para <em>jardineros reales.</em>',
      plantsBody:'Cada ficha contiene todo lo que necesitas saber sobre una planta — desde la siembra hasta la recolección de semillas. Información específica para Chile, no genérica.',
      pil1t:'Cuándo plantar en Chile', pil1d:'Calendarios para el hemisferio Sur, con zonas climáticas — de Santiago a Valdivia.',
      pil2t:'Etapas de crecimiento', pil2d:'Desde la germinación hasta la cosecha, con qué hacer en cada etapa.',
      pil3t:'Plantas compañeras', pil3d:'Qué plantar junto, qué evitar, y por qué — explicado simplemente.',
      pil4t:'Nutrición', pil4d:'Los beneficios reales de lo que cultivas — vitaminas, minerales, usos medicinales.',
      pil5t:'Recolección de semillas', pil5d:'Guía paso a paso para guardar, secar y conservar las semillas de cada planta.',
      plantsBtnTxt:'Ver ficha del tomate →',
      pcpName:'Tomate', pcpSow:'Siembra Ago–Oct', pcpHarv:'Cosecha Dic–Mar', pcpCalLabel:'Calendario · Hemisferio Sur', pcpLink:'Ver ficha completa →',
      seedsEyebrow:'Patrimonio semillero',
      seedsTitle:'Guardar semillas<br>es <em>transmitir vida.</em>',
      seedsBody:'Cada semilla guardada es un gesto de continuidad. En Chile, miles de variedades locales — tomate limache, zapallo panare, ají cacho de cabra — sobreviven gracias a los jardineros que las preservan temporada tras temporada.',
      seedsLink:'Ver guía de recolección →',
      ss1t:'Elegir el fruto más hermoso', ss1d:'Del plant más vigoroso, dejar sobremadurar ligeramente hasta que ceda al tacto.',
      ss2t:'Fermentación 2–4 días', ss2d:'Pulpa y semillas en agua a 22°C. Remueve cada día. Elimina el gel inhibidor de germinación.',
      ss3t:'Lavar y seleccionar', ss3d:'Las semillas viables se hunden. Eliminar las que flotan — no germinarán.',
      ss4t:'Secar 10–14 días', ss4d:'En plato de cerámica, a la sombra, a menos de 35°C. Nunca bajo sol directo.',
      ss5t:'Guardar y etiquetar', ss5d:'Sobre kraft + frasco hermético + sílica gel. Variedad, fecha, zona. Duración: 4–6 años.',
      chileEyebrow:'Hecho para Chile',
      chileTitle:'Tu clima, tu estación,<br>tu <em>jardín real.</em>',
      cc1title:'Santiago y alrededores', cc1desc:'Clima mediterráneo con veranos secos y calurosos. Ideal para tomates, zapallos, pimientos y frutillas. Primavera templada, sin heladas fuertes desde octubre.',
      cc2title:'Valdivia, Los Lagos', cc2desc:'Abundantes lluvias, inviernos más fríos. Temporadas cortas pero productivas. Hierbas, lechugas y frutos del bosque se adaptan naturalmente.',
      cc3title:'Coquimbo, Atacama', cc3desc:'Poca lluvia, calor intenso. Cultivos adaptados a la sequía: ajíes, tomates, cactáceas comestibles. Riego controlado esencial.',
      ctaEyebrow:'Empieza hoy',
      ctaTitle:'Tu jardín<br>empieza <em>aquí.</em>',
      ctaSub:'Verdésia es gratuito, sin registros, sin complicaciones. Entra, añade tu primera planta, y empieza a cultivar con más conciencia.',
      ctaBtn1Txt:'Entrar a mi jardín', ctaBtn2Txt:'Explorar plantas →',
      ctaNote:'Sin registro · Sin pago · Solo jardinería',
      ftTagline:'Compañero de jardín para Chile. Cultiva con consciencia, saison tras saison.',
      ftCol1:'Producto', ftCol2:'Aprender', ftCol3:'Chile',
      ftl1:'Hoy en mi jardín', ftl2:'Mi jardín', ftl3:'Fichas de plantas',
      ftl4:'Calendario de siembras', ftl5:'Recolectar semillas', ftl6:'Plantas compañeras',
      ftl7:'Zona Central · Csb', ftl8:'Sur Húmedo · Cfb', ftl9:'Norte Semiárido',
      ftRights:'Todos los derechos reservados',
      tv1:'Hoy',
    },
  },

  /* ═══════════════════════════════════════
     FR — Français
  ═══════════════════════════════════════ */
  fr: {
    nav: {
      home:    'Accueil',
      today:   "Aujourd'hui",
      garden:  'Mon jardin',
      plants:  'Plantes',
      back:    'Retour',
      backToPlants: 'Retour aux Plantes',
    },

    actions: {
      add:           'Ajouter',
      addPlant:      'Ajouter une plante',
      addToGarden:   'Ajouter au jardin',
      inGarden:      'Dans ton jardin ✓',
      save:          'Enregistrer',
      cancel:        'Annuler',
      continue:      'Continuer',
      close:         'Fermer',
      search:        'Chercher',
      clear:         'Effacer',
      archive:       'Archiver',
      restore:       'Restaurer',
      removeAria:    'Supprimer',
      explorePlants: 'Explorer les plantes',
      enterGarden:   'Accéder à mon jardin',
      viewSheet:     'Voir la fiche',
      viewFullSheet: 'Voir la fiche complète',
      seeAll:        'Voir tout',
      settings:      'Paramètres',
      changeLang:    'Changer la langue',
      changeRegion:  'Changer la région',
    },

    onboarding: {
      welcomeBilingual:   'Bienvenue à Verdésia · Bienvenido a Verdésia',
      chooseLangBilingual:'Choisissez votre langue · Elige tu idioma',
      langEs:             'Español',
      langFr:             'Français',
      regionTitle:        'Où se trouve ton jardin ?',
      regionSub:          'Verdésia adapte les saisons et les conseils selon ta région du Chili.',
      regionPlaceholder:  'Choisis une région',
      continueLbl:        'Continuer',
      progressStep:       'Étape {step} sur {total}',
    },

    settings: {
      title:        'Paramètres',
      sub:          'Change la langue ou ta région quand tu veux. Tout est sauvegardé dans ton navigateur.',
      langLabel:    'Langue',
      regionLabel:  'Région',
      save:         'Enregistrer',
      close:        'Fermer',
    },

    common: {
      day:        'jour',
      days:       'jours',
      dayShort:   'J. {n}',
      noteEmpty:  "Pas encore d'observations. Note la première chose que tu remarques.",
      none:       '—',
      season: { spring:'Printemps', summer:'Été', autumn:'Automne', winter:'Hiver' },
      seasonMonths: { spring:'Sep · Oct · Nov', summer:'Déc · Jan · Fév', autumn:'Mar · Avr · Mai', winter:'Jun · Jul · Aoû' },
      seasonGreetingPrefix: 'Bonjour',
      seasonGreetingMap: { spring:"c'est le printemps", summer:"c'est l'été", autumn:"c'est l'automne", winter:"c'est l'hiver" },
      seasonAdjective: { spring:'austral', summer:'austral', autumn:'austral', winter:'austral' },
      noteTypeLabels: { obs:'Observation', sow:'Semis', harv:'Récolte', prob:'Problème', tip:'Conseil', photo:'Photo' },
      categoryLabels: { hortaliza:'Légume', hierba:'Herbe', flor:'Fleur', fruta:'Fruit', arbol:'Arbre' },
      categoryPlural: { hortaliza:'Légumes', hierba:'Herbes', flor:'Fleurs', fruta:'Fruits', arbol:'Arbres' },
    },

    today: {
      title:       'Aujourd’hui dans ton jardin',
      heroDateLocation: '{date} · {region}, Chili',
      heroGreetingPrefix: 'Bonjour —',
      flGarden:     'Mon jardin cette semaine',
      flSeason:     'Cette saison à {region}',
      flNow:        'Que semer maintenant à {region}',
      flNotes:      'Mes dernières observations',
      flCal:        'Calendrier de semis',
      flLinks:      'Accès rapides',
      flToday:      "Pour aujourd'hui",
      thisWeek:     'Cette semaine :',
      gardenEmptyTitle: 'Ton jardin est vide',
      gardenEmptySub:   "Ajoute ta première plante et Verdésia t'accompagnera à chaque étape de sa croissance.",
      gardenEmptyCta:   'Commencer mon jardin →',
      legSow:       'Semis',
      legPlant:     'Plantation',
      legHarv:      'Récolte',
      hcLabel:      'Patrimoine semencier',
      hcTitle:      "Garder des semences, c'est transmettre",
      hcText:       'Chaque semence conservée est un geste de continuité. Au Chili, des milliers de variétés locales survivent grâce aux jardiniers qui les préservent.',
      hcLink:       'Voir le guide de collecte →',
      viewFullSheet:'Voir la fiche complète →',
      notesEmpty:   'Tes observations de jardin apparaîtront ici.',

      seasonalSpringEyebrow: 'Printemps austral · Sep–Nov',
      seasonalSpringTitle:   'Le jardin se réveille',
      seasonalSpringBody:    "Les températures montent, le sol se réchauffe. C'est le moment de préparer les semis de tomate, poivron et basilic sous abri. Les légumes d'hiver — laitue, carottes — sont encore en cours de récolte.",
      seasonalSpringContext: "Le sol se réchauffe à {region}. <strong>C'est le moment de tes premiers semis de tomate et basilic sous abri.</strong> Les gelées d'août sont derrière toi.",
      seasonalSummerEyebrow: 'Été austral · Déc–Fév',
      seasonalSummerTitle:   'La pleine saison productive',
      seasonalSummerBody:    "Le potager est en pleine production. Tomates, courges et poivrons arrivent à maturité. C'est la saison de la collecte des semences et des premières conserves.",
      seasonalSummerContext: 'Les tomates et courgettes sont au pic. <strong>Récoltez chaque jour et commencez à collecter vos premières semences.</strong> La chaleur est forte — arrosez tôt le matin.',
      seasonalAutumnEyebrow: 'Automne austral · Mar–Mai',
      seasonalAutumnTitle:   'Temps de récolte et préparation',
      seasonalAutumnBody:    "Les dernières récoltes d'été, la préparation du sol pour l'hiver. Planter ails et oignons, semer les légumes d'hiver — laitue, carottes, épinards. Collecter et sécher les semences.",
      seasonalAutumnContext: "Les nuits fraîchissent à {region}. <strong>Plantez l'ail et les oignons maintenant</strong>, et semez les légumes d'hiver sous abri.",
      seasonalWinterEyebrow: 'Hiver austral · Jun–Aoû',
      seasonalWinterTitle:   'Patience et préparation',
      seasonalWinterBody:    "Le sol se repose. Laitue, épinards et carottes résistent au froid doux de {region}. Un bon moment pour préparer le compost, planifier les semis du printemps et consulter les fiches plantes.",
      seasonalWinterContext: 'Les nuits sont fraîches mais le sol de {region} reste vivant. <strong>Laitue et épinards poussent bien.</strong> Préparez vos semences pour septembre.',

      knowledgeSpringLabel: 'Conseil du moment',
      knowledgeSpringTitle: 'Accélérer la germination',
      knowledgeSpringText:  "En septembre, les températures nocturnes de {region} restent fraîches. Placer les semis sur une surface chaude (dessus du réfrigérateur) ou sous cloche. La tomate a besoin de 22°C minimum pour germer.",
      knowledgeSummerLabel: 'Conseil du moment',
      knowledgeSummerTitle: 'Collecter les semences',
      knowledgeSummerText:  "L'été austral est la saison idéale pour collecter les semences de tomate et de poivron. Choisir les plus beaux fruits sur les plants les plus vigoureux, laisser légèrement sur-mûrir.",
      knowledgeAutumnLabel: 'Conseil du moment',
      knowledgeAutumnTitle: "Préparer le sol pour l'hiver",
      knowledgeAutumnText:  'En mars–avril, amender le sol épuisé par l’été : compost mûr et corne broyée. Semer les engrais verts (moutarde, avoine) pour protéger le sol pendant l’hiver austral.',
      knowledgeWinterLabel: 'Conseil du moment',
      knowledgeWinterTitle: 'Préparer le compost',
      knowledgeWinterText:  "L'hiver austral est la saison du compost. Alterner couches humides (déchets de cuisine) et sèches (feuilles, carton). Un compost bien conduit sera prêt pour les semis du printemps.",

      remSeasonSpringText: "<em>Printemps austral.</em> Le sol se réchauffe — bon moment pour semis de tomate, piment et basilic sous abri.",
      remSeasonSpringSub:  "Les gelées se terminent fin août à {region}.",
      remSeasonSummerText: "<em>Plein été.</em> Arrose tôt le matin ou au crépuscule pour limiter l'évaporation.",
      remSeasonSummerSub:  "Pailler pour conserver l'humidité du sol.",
      remSeasonAutumnText: "<em>Automne.</em> C'est le moment de planter ails, oignons, et semer les légumes d'hiver.",
      remSeasonAutumnSub:  "Récolter les semences des plantes en fin de cycle.",
      remSeasonWinterText: "<em>Hiver doux.</em> Le jardin se repose — prépare le compost, planifie le printemps.",
      remSeasonWinterSub:  "Laitue, blette et épinard poussent encore au frais.",
      remStageTransition:  'Ton <em>{plant}</em> entre en {stage} cette semaine.',
      remStageSub:         '{emoji} {plant} · jour {days}',
      remHarvest:          'Bon moment pour récolter ton <em>{plant}</em>.',
      remHarvestSub:       'Récolter régulièrement stimule la production.',
      remSeeds:            'Moment de récolter les semences de ton <em>{plant}</em>.',
      remSeedsSub:         'Variétés autogames conservent la lignée.',

      sowSpring1:'Semis sous abri', sowSpring2:'Semis en surface', sowSpring3:'Semis au chaud', sowSpring4:'Semis ou direct', sowSpring5:'Semis direct', sowSpring6:'Direct ou semis',
      sowSummer1:'Semis direct sol chaud', sowSummer2:'Sous ombrage', sowSummer3:'Semis direct', sowSummer4:'Semis direct',
      sowAutumn1:'Semis automnal', sowAutumn2:'Semis automnal', sowAutumn3:'Semis direct', sowAutumn4:'Semis direct', sowAutumn5:'Planter stolons', sowAutumn6:'Semis direct',
      sowWinter1:'Avec protection', sowWinter2:'Tolère le froid', sowWinter3:"Tout l'hiver", sowWinter4:'Préparer printemps',

      qlMyGarden:    'Mon jardin',
      qlMyGardenSub: 'Gérer mes plantes',
      qlPlantSheet:  'Fiche plante',
      qlSeedGuide:   'Guide des semences',
      qlSeedGuideSub:'Comment récolter et conserver',
    },

    garden: {
      sbLabel:        'Mes plantes',
      sbEmptyTxt:     'Ton jardin est vide. Ajoute ta première plante.',
      addBtnTxt:      'Ajouter une plante',
      welcomeTitle:   'Ton jardin commence ici',
      welcomeSub:     "Ajoute une plante, indique quand tu l'as semée, et Verdésia t'accompagnera à chaque étape de sa croissance.",
      welcomeCta:     'Ajouter ma première plante',
      addPanelTitle:  'Que veux-tu cultiver ?',
      addPanelSub:    "Choisis une plante dans le catalogue. Nous l'ajoutons à ton jardin avec son calendrier personnalisé.",
      modalTitle:     'Quand as-tu semé ?',
      modalSub:       "Indique la date approximative de semis ou de transplant. Verdésia calculera l'étape actuelle et te guidera.",
      modalDateLabel: 'Date de semis',
      modalZoneLabel: 'Ta zone (Chili)',
      modalConfirm:   'Ajouter au jardin',
      modalCancel:    'Annuler',
      todaySub:       'Voici ce qui se passe dans ton jardin cette semaine.',
      nowLabel:       'Cette semaine · Action recommandée',
      nowTitlePre:    'Ta plante est en ',
      nsHead:         'Mes observations',
      noteSubmitBtn:  'Enregistrer',
      notePlaceholder:"Note ce que tu observes aujourd'hui…",
      spaceLabel:     'Espacement',
      spaceUnit:      'cm entre plants',
      waterLabel:     'Arrosage',
      sunLabel:       'Lumière',
      heightLabel:    'Hauteur',
      sowLabel:       'Semis',
      harvLabel:      'Récolte',
      alreadyAdded:   'Déjà dans ton jardin',
      pickerPh:       'Rechercher une plante…',
      scSub:          '{region} · Chili',
      archivedTxt:    'Cette plante a clos sa saison. Les notes restent comme mémoire.',
      pastSeasons:    'Saisons passées',
      sectionDiv:     '',
      archive:        'Archiver',
      restore:        'Restaurer',
      viewSheet:      'Voir fiche',
      toastAddedPrefix:    'ajoutée au jardin 🌱',
      toastAddedPrefixFem: 'ajouté au jardin 🌱',
      toastRemovedPrefix:  'supprimée',
      toastNote:           'Note enregistrée',
      toastArchived:       'Saison archivée — les notes restent 🗄',
      toastRestored:       'Plante restaurée',
    },

    explorer: {
      heroEyebrow:    'Catalogue',
      heroTitle:      'Le catalogue du <em>jardin chilien</em>',
      heroSub:        'Légumes, herbes, fruits et arbres à cultiver et conserver. Chaque fiche contient son calendrier, ses étapes, ses problèmes fréquents et comment récolter ses semences.',
      heroCount:      '{n} plantes au catalogue',
      resultAll:      '{n} plantes',
      resultSome:     '{n} sur {total} plantes',
      searchPh:       'Chercher — tomate, romarin, fraise…',
      filterAll:        'Toutes',
      filterHortaliza:  'Légumes',
      filterHierba:     'Herbes',
      filterFlor:       'Fleurs',
      filterArbolFruta: 'Arbres et fruits',
      filterHeritage:   'Patrimoniales',
      sowingLabel:    'Semis',
      harvestLabel:   'Récolte',
      heritageLabel:  'Patrimoniale',
      emptyTitle:     'Rien ici pour le moment',
      emptyTitleQuery:'Aucun résultat pour «{q}»',
      emptySub:       'Essaye un autre mot ou change de filtre — le catalogue grandit peu à peu.',
      emptyReset:     'Voir toutes les plantes',
    },

    plante: {
      btnInGarden:'Dans ton jardin ✓',
      sb_sow:'Moment de semer', sb_plant:'Moment de transplanter', sb_harv:'En récolte', sb_seeds:'Récolter semences', sb_resting:'Culture en cours',
      vl1:'Hauteur', vs1:'plante adulte',
      vl2:'Cycle',   vs2:'semis → récolte',
      vl3:'Espacement', vs3:'entre plants',
      vl4:'Arrosage', vs4:'',
      hdsZoneLbl:'Climats Chili', hdsSun:'Lumière', hdsHarvLbl:'Récolte',
      scrollCueTxt:'Voir la fiche complète',
      calEyebrow:'Calendrier saisonnier',
      calTitle:'Quand planter au <em>Chili</em>',
      rowSow:'Semis', rowPlant:'Transplant', rowHarv:'Récolte', rowSeeds:'Récolte de semences',
      legSow:'Semis', legPlant:'Transplant', legHarv:'Récolte', legSeeds:'Semences',
      stagesEyebrow:'Développement de la plante', stagesTitle:'Étapes de <em>croissance</em>',
      companionsEyebrow:'Culture associée', companionsTitle:'Plantes <em>compagnes</em>',
      cgGood:'Se marie bien avec', cgBad:'Éviter à côté de',
      compGoodWhy:'Bonne association au jardin chilien.',
      compBadWhy:'Éviter à proximité.',
      compBadgeGood:'Bon', compBadgeBad:'Éviter',
      compNoSheet:'Pas encore de fiche',
      nutriEyebrow:'Usages et bienfaits', nutriTitle:'En cuisine <em>et au corps</em>',
      intro_use_culinary:'Usage culinaire',
      intro_use_nutri:'Apport nutritionnel',
      intro_use_medic:'Usage médicinal',
      seedsEyebrow:'Patrimoine vivant', seedsTitle:'Récolte des <em>semences</em>',
      seedLifeLbl:'Durée de vie des semences en conditions optimales',
      seedDefaultIntro: 'Conserver et partager les semences de ton {plant} est un geste de continuité pour les jardins chiliens.',
      seed_when:'Quand récolter', seed_how:'Comment extraire', seed_drying:'Séchage', seed_storage:'Conservation', seed_notes:'Notes',
      problemsEyebrow:'Problèmes fréquents', problemsTitle:'Reconnaître et <em>remédier</em>',
      communityEyebrow:'Mon journal', communityTitle:'Mes observations <em>sur cette plante</em>',
      formTitle:'Noter une observation',
      formSub:"Ce que tu vois aujourd'hui dans ton jardin se conserve ici. Une graine gardée, une fleur qui paraît, un arrosage ajusté — tout compte.",
      formLabelType:'Type', formLabelNote:'Ton observation',
      formNotePh:"Note ce que tu observes aujourd'hui…",
      formSubmit:'Enregistrer dans mon jardin →',
      notesEmpty:"Pas encore d'observations pour cette plante. Quand tu commenceras à noter, tes notes vivront ici.",
      notInGardenYet:"Tu n'as pas encore ajouté cette plante à ton jardin.",
      heritageBadge:'Variété patrimoniale',
      defaultZoneLabel:'Chili central',
      toastAdded:'Plante ajoutée à ton jardin 🌱',
      toastInGarden:'Déjà dans ton jardin',
      toastNote:'Note enregistrée',
      heroBackTxt:'Retour aux Plantes',
      btnSaveLbl:'Ajouter au jardin',
    },

    landing: {
      navCta:'Accéder à mon jardin',
      heroEyebrow:'Jardin · {region} · Chili',
      heroTitle:'Savoir quoi<br>planter <em>aujourd\'hui.</em>',
      heroDesc:'Verdésia est un compagnon de jardin pour le Chili. Il te dit quoi semer cette semaine, suit la croissance de tes plantes, et préserve le savoir de tes semences, saison après saison.',
      heroCta1:'Accéder à mon jardin', heroCta2:'Explorer les plantes',
      tl1:'Ce que ton jardin a besoin maintenant', tl2:"Calendrier pour l'hémisphère Sud", tl3:'Semences, culture, mémoire',
      fc1tag:'🌸 Printemps · {region}', fc1now:'Cette semaine',
      fc1name:'Tomate', fc1stage:'Croissance végétative · J.38',
      fc1action:'<strong>Maintenant :</strong> Tuteurer et éboutonner les gourmands. Arroser au pied.',
      fc1s1:'Germination', fc1s2:'Récolte',
      fc2name:'Fraise', fc2stage:'Floraison · J.72',
      fc2action:'<strong>Cette semaine :</strong> Pollinisation en cours. Mettre la paille sous les fruits.',
      fc2s1:'Installation', fc2s2:'Récolte',
      fc3tag:'📝 Observation', fc3name:'Basilic',
      fc3note:'«Fleurs apparaissent, pincer aujourd\'hui avant qu\'elles s\'ouvrent. Arôme intense.»',
      pillarsEyebrow:'Comment ça marche',
      pillarsTitle:'Trois choses simples,<br>bien <em>faites.</em>',
      p1title:'Quoi faire aujourd\'hui', p1desc:"Verdésia connaît la saison au Chili, ta zone, et l'état de chaque plante. Chaque matin il te dit exactement ce que ton jardin a besoin cette semaine.", p1link:'Voir aujourd\'hui →',
      p2title:'Connaître tes plantes', p2desc:'Fiches botaniques complètes : quand semer, étapes de croissance, associations, nutrition, comment collecter les semences. Infos utiles, pas génériques.', p2link:'Voir les fiches →',
      p3title:'Se souvenir de son jardin', p3desc:'Note ce que tu observes, suis la progression de chaque plante, conserve la mémoire de tes cultures saison après saison. Ton jardin, documenté.', p3link:'Mon jardin →',
      mockDate:'Mardi, Sep 2025 · {region}, Chili',
      mockTitle:'Bonjour —<br><em>c\'est le printemps</em>',
      mc1name:'Tomate', mc1stage:'Croissance · J.38',
      mc1action:'Tuteurer et éboutonner les gourmands. Arroser au pied, jamais sur le feuillage.',
      mc2name:'Basilic', mc2stage:'Croissance · J.22',
      mc2action:'Pincer les sommets avant la floraison. Couper les fleurs pour prolonger la production.',
      msbName:'Printemps austral', msbSub:'Sep · Oct · Nov · {region}',
      todayEyebrow:'Page d\'accueil',
      todayTitle:'Ton jardin,<br>chaque <em>matin.</em>',
      todayBody:'Ouvre Verdésia et en 30 secondes tu sais ce qui se passe dans ton jardin cette semaine. Pas de notifications. Pas de bruit. Juste ce qui compte.',
      tf1t:'Saison en temps réel', tf1d:"Le calendrier de l'hémisphère Sud, toujours juste pour Santiago.",
      tf2t:'État de chaque plante', tf2d:'Quelle étape, combien de jours, et quoi faire exactement cette semaine.',
      tf3t:'Quoi semer maintenant', tf3d:'Les plantes indiquées pour ta zone et ta saison, mises à jour automatiquement.',
      plantsEyebrow:'Fiches de plantes',
      plantsTitle:'Savoir botanique<br>pour de <em>vrais jardiniers.</em>',
      plantsBody:'Chaque fiche contient tout ce que tu dois savoir sur une plante — du semis à la collecte des semences. Informations spécifiques au Chili, pas génériques.',
      pil1t:'Quand planter au Chili', pil1d:"Calendriers pour l'hémisphère Sud, avec les zones climatiques — de Santiago à Valdivia.",
      pil2t:'Étapes de croissance', pil2d:'De la germination à la récolte, avec quoi faire à chaque étape.',
      pil3t:'Plantes compagnes', pil3d:'Quoi planter ensemble, quoi éviter, et pourquoi — expliqué simplement.',
      pil4t:'Nutrition', pil4d:'Les vrais bénéfices de ce que tu cultives — vitamines, minéraux, usages médicinaux.',
      pil5t:'Collecte des semences', pil5d:'Guide pas à pas pour garder, sécher et conserver les semences de chaque plante.',
      plantsBtnTxt:'Voir la fiche tomate →',
      pcpName:'Tomate', pcpSow:'Semis Aoû–Oct', pcpHarv:'Récolte Déc–Mars', pcpCalLabel:'Calendrier · Hémisphère Sud', pcpLink:'Voir la fiche complète →',
      seedsEyebrow:'Patrimoine semencier',
      seedsTitle:'Garder des semences,<br>c\'est <em>transmettre.</em>',
      seedsBody:'Chaque semence conservée est un geste de continuité. Au Chili, des milliers de variétés locales — tomate limache, zapallo panare, ají cacho de cabra — survivent grâce aux jardiniers qui les préservent.',
      seedsLink:'Voir le guide de collecte →',
      ss1t:'Choisir le plus beau fruit', ss1d:'Du plant le plus vigoureux, laisser légèrement sur-mûrir jusqu\'à ce qu\'il cède sous les doigts.',
      ss2t:'Fermentation 2–4 jours', ss2d:"Pulpe et graines dans l'eau à 22°C. Remuer chaque jour. Élimine le gel inhibiteur de germination.",
      ss3t:'Rincer et trier', ss3d:'Les graines viables coulent. Éliminer celles qui flottent — elles ne germeront pas.',
      ss4t:'Sécher 10–14 jours', ss4d:"Sur assiette en céramique, à l'abri, à moins de 35°C. Jamais en plein soleil.",
      ss5t:'Stocker et étiqueter', ss5d:'Enveloppe kraft + bocal hermétique + silica gel. Variété, date, zone. Durée : 4–6 ans.',
      chileEyebrow:'Fait pour le Chili',
      chileTitle:'Ton climat, ta saison,<br>ton <em>vrai jardin.</em>',
      cc1title:'Santiago et alentours', cc1desc:'Climat méditerranéen avec étés secs et chauds. Idéal pour tomates, courges, poivrons et fraises. Printemps doux, sans gelées fortes dès octobre.',
      cc2title:'Valdivia, Los Lagos', cc2desc:"Pluies abondantes, hivers plus froids. Saisons courtes mais productives. Herbes, laitues et fruits forestiers s'y adaptent naturellement.",
      cc3title:'Coquimbo, Atacama', cc3desc:'Peu de pluies, chaleur intense. Cultures adaptées à la sécheresse : piments, tomates, cactacées comestibles. Irrigation contrôlée essentielle.',
      ctaEyebrow:'Commence aujourd\'hui',
      ctaTitle:'Ton jardin<br>commence <em>ici.</em>',
      ctaSub:'Verdésia est gratuit, sans inscription, sans complications. Entre, ajoute ta première plante, et commence à cultiver avec plus de conscience.',
      ctaBtn1Txt:'Accéder à mon jardin', ctaBtn2Txt:'Explorer les plantes →',
      ctaNote:'Sans inscription · Sans paiement · Juste du jardinage',
      ftTagline:'Compagnon de jardin pour le Chili. Cultive avec conscience, saison après saison.',
      ftCol1:'Produit', ftCol2:'Apprendre', ftCol3:'Chili',
      ftl1:'Aujourd\'hui dans mon jardin', ftl2:'Mon jardin', ftl3:'Fiches de plantes',
      ftl4:'Calendrier de semis', ftl5:'Collecter ses semences', ftl6:'Plantes compagnes',
      ftl7:'Zone Centrale · Csb', ftl8:'Sud Humide · Cfb', ftl9:'Nord Semi-aride',
      ftRights:'Tous droits réservés',
      tv1:'Aujourd\'hui',
    },
  },
};

/* ════════════════════════════════════════════════════════════════
   HELPERS
   ════════════════════════════════════════════════════════════════ */

(function() {

  const FALLBACK_LANG = 'es';
  const _listeners = [];

  function _lookup(lang, key) {
    if (!key) return null;
    const tree = window.SEMENCA_I18N[lang];
    if (!tree) return null;
    const parts = String(key).split('.');
    let cur = tree;
    for (let i = 0; i < parts.length; i++) {
      if (cur == null || typeof cur !== 'object') return null;
      cur = cur[parts[i]];
    }
    return (cur == null) ? null : cur;
  }

  function _interp(str, params) {
    if (typeof str !== 'string' || !params) return str;
    return str.replace(/\{(\w+)\}/g, (m, k) =>
      (params[k] == null ? m : String(params[k]))
    );
  }

  function getLang() {
    // Devuelve idioma guardado, o fallback (visualmente Spanish hasta que el usuario elija)
    if (window.SemencaStorage && typeof window.SemencaStorage.getLang === 'function') {
      return window.SemencaStorage.getLang() || FALLBACK_LANG;
    }
    return FALLBACK_LANG;
  }

  function setLang(lang) {
    if (!window.SEMENCA_I18N[lang]) {
      console.warn('Verdésia: lang desconocido', lang);
      return;
    }
    if (window.SemencaStorage && typeof window.SemencaStorage.setLang === 'function') {
      window.SemencaStorage.setLang(lang);
    }
    applyTranslations();
    _listeners.forEach(fn => { try { fn(lang); } catch (e) { console.error(e); } });
  }

  /* Reads the user's region label from the unified config (façade
     over verdesia_user_profile.region). Falls back to 'Santiago' if
     the config isn't loaded on this page — keeps t() always returning
     a usable string. */
  function _resolveUserRegionLabel() {
    try {
      const cfg = window.VERDESIA_REGION_CONFIG;
      if (cfg && typeof cfg.getUserRegion === 'function') {
        const reg = cfg.getUserRegion();
        if (reg && (reg.displayLabel || reg.label)) return reg.displayLabel || reg.label;
      }
    } catch (_) { /* silent */ }
    return 'Santiago';
  }

  function t(key, params) {
    const lang = getLang();
    let value = _lookup(lang, key);
    if (value == null) value = _lookup(FALLBACK_LANG, key);
    if (value == null) return key;
    if (typeof value === 'string') {
      // Auto-inject {region} from the user profile if the string asks for it.
      // Caller-provided params still win (explicit > automatic).
      if (value.indexOf('{region}') !== -1) {
        const auto = { region: _resolveUserRegionLabel() };
        params = params ? Object.assign(auto, params) : auto;
      }
      return _interp(value, params);
    }
    return value; // objetos/arrays — el caller los procesa
  }

  /**
   * Devuelve el valor localizado de un campo { es, fr, ... }.
   * Si recibe un string lo devuelve tal cual. Si null → ''.
   */
  function getLocalized(obj, fallbackLang) {
    if (obj == null) return '';
    if (typeof obj === 'string') return obj;
    const lang = getLang();
    const fb = fallbackLang || FALLBACK_LANG;
    return obj[lang] || obj[fb] || obj.es || obj.fr || obj.en || '';
  }

  /**
   * Aplica traducciones a todos los nodos con atributos data-i18n* dentro
   * de root (por defecto, todo el documento).
   *   data-i18n              → textContent
   *   data-i18n-html         → innerHTML (para títulos con <em>/<br>)
   *   data-i18n-placeholder  → placeholder
   *   data-i18n-aria-label   → aria-label
   *   data-i18n-title        → title (tooltip)
   *   data-i18n-value        → value (inputs)
   */
  function applyTranslations(root) {
    root = root || document;

    function each(sel, apply) {
      const els = root.querySelectorAll(sel);
      for (let i = 0; i < els.length; i++) apply(els[i]);
    }

    each('[data-i18n]',             el => { el.textContent = t(el.dataset.i18n); });
    each('[data-i18n-html]',        el => { el.innerHTML  = t(el.dataset.i18nHtml); });
    each('[data-i18n-placeholder]', el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    each('[data-i18n-aria-label]',  el => { el.setAttribute('aria-label', t(el.dataset.i18nAriaLabel)); });
    each('[data-i18n-title]',       el => { el.title = t(el.dataset.i18nTitle); });
    each('[data-i18n-value]',       el => { el.value = t(el.dataset.i18nValue); });

    document.documentElement.lang = getLang();
  }

  function onChange(fn) {
    if (typeof fn === 'function') _listeners.push(fn);
  }

  /**
   * Devuelve directamente el subárbol de un namespace en el idioma actual.
   * Útil para pages que iteran muchas claves de su propio namespace.
   *   const T = SemencaI18n.ns('today');  → T.flGarden, T.flSeason…
   */
  function ns(namespace) {
    const lang = getLang();
    return (window.SEMENCA_I18N[lang] && window.SEMENCA_I18N[lang][namespace]) || {};
  }

  window.SemencaI18n = {
    LANGS:       ['es', 'fr'],
    LANG_LABELS: { es: 'Español', fr: 'Français' },
    FALLBACK_LANG,
    t,
    getLang,
    setLang,
    getLocalized,
    applyTranslations,
    onChange,
    ns,
  };

})();
