/* ══════════════════════════════════════════════════════════════
   SEMENÇA — Catálogo unificado de plantas para Chile

   Fuente única de verdad. Toda la app lee desde aquí.
   Hemisferio sur · meses 0=Ene..11=Dic

   ─── POLÍTICA DE IDIOMA (Chile-first, Spanish-first) ────────────
   El español es el idioma canónico del catálogo. Para plantas
   nuevas, los campos profundos (advice, climate, problems, seeds,
   uses) sólo necesitan `{ es: '…' }`. El francés es opcional y
   complementario — el renderer cae con elegancia al español si un
   valor `fr` no existe (vía SemencaI18n.getLocalized).

   Campos donde el francés sigue siendo deseable:
     - name.fr       (nombre de planta — buena UX si está)
     - sow.fr, harv.fr (cortos, fáciles de traducir)

   Plantas ya existentes mantienen sus traducciones francesas:
   no las borres durante actualizaciones puntuales.
   ══════════════════════════════════════════════════════════════ */

window.SEMENCA_PLANTS = [

  /* ───────────────────────────────────────────────── HORTALIZAS DE FRUTO */

  {
    id: 'tomate',
    category: 'hortaliza',
    rarity: 'comun',
    emoji: '🍅',
    photo: 'photos/tomate.jpg',
    name: { es:'Tomate', fr:'Tomate' },
    latin: 'Solanum lycopersicum',
    family: { es:'Solanáceas', fr:'Solanacées' },
    varieties: { es:'Limache, Poncho Negro, Cherry, Roma, Corazón de Buey' },

    water: { es:'Regular', fr:'Régulier' },
    water_note: { es:'8–10 L por planta por semana en verano. Riego al pie, no sobre el follaje.' },
    sun:   { es:'Pleno sol', fr:'Plein soleil' },
    sun_hours: 7,
    spacing_cm: 60,
    height: { es:'1,2–1,8 m', fr:'1,2–1,8 m' },

    sow:  { es:'Ago–Oct (almácigo bajo cubierta)', fr:'Août–Oct (sous abri)' },
    plant:{ es:'Oct–Nov (a tierra firme)' },
    harv: { es:'Dic–Mar', fr:'Déc–Mar' },
    sowM:   [0,0,0,0,0,0,0,1,1,1,0,0],
    plantM: [0,0,0,0,0,0,0,0,0,1,1,0],
    harvM:  [1,1,1,0,0,0,0,0,0,0,0,1],
    growth_days: 110,

    stages: [
      { id:'germ',    name:{es:'Germinación',fr:'Germination'},   icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:10 },
      { id:'plant',   name:{es:'Plántula',fr:'Plantule'},          icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:25 },
      { id:'growth',  name:{es:'Crecimiento',fr:'Croissance'},     icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)',   days:30 },
      { id:'flower',  name:{es:'Floración',fr:'Floraison'},        icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:15 },
      { id:'fruit',   name:{es:'Cosecha',fr:'Récolte'},            icon:'🍅', color:'#FBE9E7', bg:'rgba(181,90,40,.12)',  days:30 },
    ],

    advice: {
      0: { es:['Almácigo a 22–26°C. Germina en 7–10 días.','Sustrato húmedo pero nunca encharcado.','No requiere luz hasta emergencia del cotiledón.'] },
      1: { es:['Trasplantar a maceta individual al tener 4 hojas verdaderas.','14–16 h de luz al día (ventana norte o luz blanca).','Endurecer 5–7 días antes de pasar a la tierra.'] },
      2: { es:['Tutorar desde temprano — bambú, tomatera o malla.','Eliminar brotes axilares (chupones) en variedades indeterminadas.','Riego al pie cada 2–3 días; acolchar para conservar humedad.'] },
      3: { es:['Sacudir suavemente las flores en la mañana para ayudar la polinización.','Aplicar purín de consuelda o ceniza de madera para favorecer el cuajado.','Evitar exceso de nitrógeno — favorece hoja, no fruto.'] },
      4: { es:['Cosechar cuando el color es uniforme y cede levemente al apretarlo.','Reducir riego en últimas semanas para concentrar sabor.','Recolectar semillas de los mejores frutos para el próximo año.'] },
    },

    companions: ['albahaca','tagete','cebollin','perejil'],
    avoid:      ['papa','hinojo'],

    climate: { es:'Mediterráneo (Coquimbo a Biobío). Sensible a heladas — esperar fin de agosto en Santiago. En el sur (Los Lagos) cultivar bajo invernadero.' },
    zones: ['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía'],

    uses: {
      culinary:    { es:'Base del pebre, ensalada chilena, salsas, conservas.' },
      nutritional: { es:'Buen aporte de licopeno, vitamina C y potasio.' },
      medicinal:   { es:'Antioxidante por licopeno. Las hojas son tóxicas — no consumir.' },
    },

    problems: [
      { es:'Pulgones — rociar con agua jabonosa o purín de ortiga.' },
      { es:'Tizón tardío (mildiu) por humedad nocturna — ventilar, no mojar follaje, retirar hojas afectadas.' },
      { es:'Rajado de frutos por riego irregular — mantener humedad constante con acolchado.' },
      { es:'Polilla del tomate (Tuta absoluta) — trampas con feromona, eliminar hojas minadas.' },
    ],

    seeds: {
      when:    { es:'Fin de verano (Feb–Mar), de frutos bien maduros de la planta más sana.' },
      how:     { es:'Extraer pulpa con semillas en un frasco. Dejar fermentar 2–3 días con agua hasta formar nata. Lavar varias veces, escurrir.' },
      drying:  { es:'Secar sobre papel a la sombra, en lugar ventilado, durante una semana.' },
      storage: { es:'Sobre de papel rotulado con nombre y año. Lugar seco, oscuro, fresco. Viabilidad 4–6 años.' },
      notes:   { es:'Variedades antiguas (Limache, Poncho Negro) son autopolinizantes — fieles a la planta madre. Híbridos F1 no se reproducen iguales.' },
    },
  },

  {
    id: 'tomate_limache',
    category: 'hortaliza',
    rarity: 'patrimonial',
    emoji: '🍅',
    name: { es:'Tomate Limache', fr:'Tomate de Limache' },
    latin: 'Solanum lycopersicum var. Limachino',
    family: { es:'Solanáceas' },
    heritage: true,

    water: { es:'Regular' },
    water_note: { es:'8 L por planta por semana. Riego profundo al pie.' },
    sun:   { es:'Pleno sol' },
    sun_hours: 8,
    spacing_cm: 70,
    height: { es:'1,5–2 m' },

    sow:  { es:'Ago–Sep (almácigo)' },
    plant:{ es:'Oct (a tierra firme, después de heladas)' },
    harv: { es:'Ene–Mar' },
    sowM:   [0,0,0,0,0,0,0,1,1,0,0,0],
    plantM: [0,0,0,0,0,0,0,0,0,1,0,0],
    harvM:  [1,1,1,0,0,0,0,0,0,0,0,0],
    growth_days: 130,

    stages: [
      { id:'germ',   name:{es:'Germinación'},  icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:12 },
      { id:'plant',  name:{es:'Plántula'},      icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:28 },
      { id:'growth', name:{es:'Crecimiento'},   icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)',   days:40 },
      { id:'flower', name:{es:'Floración'},     icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:18 },
      { id:'fruit',  name:{es:'Cosecha'},       icon:'🍅', color:'#FBE9E7', bg:'rgba(181,90,40,.12)',  days:32 },
    ],

    advice: {
      0: { es:['Almácigo en agosto, en bandeja cubierta. 22–25°C.','Variedad histórica del valle de Limache, ciclo más largo que tomates híbridos.'] },
      1: { es:['Trasplantar a maceta individual con 4 hojas. Endurecer antes de salir.'] },
      2: { es:['Plantar a fondo: enterrar hasta las primeras hojas para que enraíce más.','Tutorar con caña fuerte — la planta llega a 2 m.'] },
      3: { es:['Variedad muy productiva — eliminar chupones para canalizar energía al fruto.','Aplicar humus de lombriz o compost maduro cada 3 semanas.'] },
      4: { es:['Frutos grandes, costillados, sabor intenso y carnoso.','Recolectar semillas — patrimonio agrícola chileno por preservar.'] },
    },

    companions: ['albahaca','tagete','cebollin'],
    avoid:      ['papa','hinojo'],

    climate: { es:'Originaria del valle de Limache (Región de Valparaíso). Ideal en clima mediterráneo seco. Sensible a humedad excesiva.' },
    zones: ['Coquimbo','Valparaíso','RM','O\'Higgins','Maule'],

    uses: {
      culinary:    { es:'Tradicional para salsas, conservas y ensalada chilena. Pulpa carnosa, ideal en pebre.' },
      nutritional: { es:'Alto contenido de licopeno, vitamina C y minerales.' },
      medicinal:   { es:'Antioxidante natural.' },
    },

    problems: [
      { es:'Más sensible al tizón que híbridos modernos — no mojar follaje.' },
      { es:'Ciclo largo: planear desde agosto para cosechar en febrero.' },
    ],

    seeds: {
      when:    { es:'De los frutos más bellos en plena maduración (Feb–Mar).' },
      how:     { es:'Fermentación clásica: pulpa + agua, 3 días, lavar, escurrir.' },
      drying:  { es:'Sombra ventilada, una semana sobre papel.' },
      storage: { es:'Sobre rotulado. Variedad fija — guardar año a año conserva el linaje.' },
      notes:   { es:'Variedad patrimonial chilena. Compartir semillas mantiene viva la diversidad local.' },
    },
  },

  {
    id: 'aji_verde',
    category: 'hortaliza',
    rarity: 'comun',
    emoji: '🌶️',
    photo: 'photos/aji_verde.jpg',
    name: { es:'Ají verde', fr:'Piment vert' },
    latin: 'Capsicum annuum',
    family: { es:'Solanáceas' },

    water: { es:'Moderado' },
    water_note: { es:'5–6 L por planta por semana. Menos riego = más picor.' },
    sun:   { es:'Pleno sol' },
    sun_hours: 7,
    spacing_cm: 50,
    height: { es:'60–90 cm' },

    sow:  { es:'Ago–Sep (almácigo)' },
    plant:{ es:'Oct–Nov' },
    harv: { es:'Ene–Abr' },
    sowM:   [0,0,0,0,0,0,0,1,1,0,0,0],
    plantM: [0,0,0,0,0,0,0,0,0,1,1,0],
    harvM:  [1,1,1,1,0,0,0,0,0,0,0,0],
    growth_days: 130,

    stages: [
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:14 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:35 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)',   days:40 },
      { id:'flower', name:{es:'Floración'},    icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:15 },
      { id:'fruit',  name:{es:'Cosecha'},      icon:'🌶️', color:'#FBE9E7', bg:'rgba(181,90,40,.12)',  days:26 },
    ],

    advice: {
      0: { es:['Germinación lenta — 10 a 14 días a 25°C.','Mantener humedad constante en almácigo cubierto.'] },
      1: { es:['Trasplantar cuando tenga 5–6 hojas.','Sensible al frío — no plantar fuera antes de octubre.'] },
      2: { es:['Sol pleno y suelo bien drenado.','Acolchar para conservar calor del suelo.'] },
      3: { es:['Las flores blancas indican el inicio de la cosecha en 4–6 semanas.','No pulverizar agua sobre las flores.'] },
      4: { es:['Cosechar verde para ají suave o rojo para más picor y dulzor.','Cosechar regularmente estimula nueva producción.'] },
    },

    companions: ['albahaca','zanahoria','cebollin'],
    avoid:      ['hinojo'],

    climate: { es:'Mediterráneo (RM, Valparaíso, O\'Higgins). En el sur necesita invernadero.' },
    zones: ['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble'],

    uses: {
      culinary:    { es:'Pebre, salsas, conservas en aceite, ají chileno.' },
      nutritional: { es:'Muy rico en vitamina C (más que la naranja), vitamina A y capsaicina.' },
      medicinal:   { es:'Tradicionalmente usado para abrir el apetito y dar calor en invierno.' },
    },

    problems: [
      { es:'Pulgones bajo las hojas — agua jabonosa.' },
      { es:'Caída de flores por exceso de calor (>32°C) — sombrear ligeramente al mediodía.' },
      { es:'Pudrición apical por falta de calcio — añadir cáscara de huevo molida al suelo.' },
    ],

    seeds: {
      when:    { es:'De frutos completamente rojos y maduros (Mar–Abr).' },
      how:     { es:'Cortar el ají, extraer semillas con cuchara o dedos enguantados.' },
      drying:  { es:'Secar sobre papel a la sombra 7–10 días.' },
      storage: { es:'Sobre de papel. Viabilidad 3–4 años.' },
      notes:   { es:'Los ajíes cruzan fácilmente entre variedades — aislar si se quiere mantener pureza.' },
    },
  },

  {
    id: 'aji_cacho_cabra',
    category: 'hortaliza',
    rarity: 'patrimonial',
    emoji: '🌶️',
    name: { es:'Ají cacho de cabra', fr:'Piment cacho de cabra' },
    latin: 'Capsicum annuum var. Cacho de Cabra',
    family: { es:'Solanáceas' },
    heritage: true,

    water: { es:'Moderado' },
    water_note: { es:'5 L por semana. Soporta sequía moderada.' },
    sun:   { es:'Pleno sol' },
    sun_hours: 8,
    spacing_cm: 60,
    height: { es:'70 cm – 1 m' },

    sow:  { es:'Ago–Sep (almácigo)' },
    plant:{ es:'Oct–Nov' },
    harv: { es:'Feb–Abr (rojo maduro)' },
    sowM:   [0,0,0,0,0,0,0,1,1,0,0,0],
    plantM: [0,0,0,0,0,0,0,0,0,1,1,0],
    harvM:  [1,1,0,1,0,0,0,0,0,0,0,0],
    growth_days: 150,

    stages: [
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:15 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:40 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)',   days:45 },
      { id:'flower', name:{es:'Floración'},    icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:20 },
      { id:'fruit',  name:{es:'Cosecha roja'}, icon:'🌶️', color:'#FBE9E7', bg:'rgba(181,90,40,.12)',  days:30 },
    ],

    advice: {
      0: { es:['Variedad tradicional chilena, ciclo largo (~150 días).','Almácigo agosto para asegurar cosecha en otoño.'] },
      1: { es:['Endurecer bien antes de pasar a tierra.','Suelo bien drenado, rico en materia orgánica.'] },
      2: { es:['Acolchado para conservar calor.','Riego moderado: sequía moderada concentra el sabor.'] },
      3: { es:['Flores blancas pequeñas — cuajado abundante.'] },
      4: { es:['Cosechar maduro y rojo — base del merkén ahumado.','Secar enteros al sol o ahumar suavemente con espino.'] },
    },

    companions: ['albahaca','cebollin'],
    avoid:      ['hinojo'],

    climate: { es:'Originario del norte chico y zona central. Ideal RM, Coquimbo, Valparaíso. Soporta veranos cálidos y secos.' },
    zones: ['Atacama','Coquimbo','Valparaíso','RM','O\'Higgins','Maule'],

    uses: {
      culinary:    { es:'Base del merkén (ají seco y ahumado mapuche). También para ají chileno fresco.' },
      nutritional: { es:'Alto en capsaicina, vitamina C y antioxidantes.' },
      medicinal:   { es:'Tradición mapuche del merkén: condimenta y abre el apetito.' },
    },

    problems: [
      { es:'Ciclo muy largo: si se siembra tarde no alcanza a madurar antes del frío.' },
      { es:'Caída de flores en olas de calor — sombrear con malla 30%.' },
    ],

    seeds: {
      when:    { es:'De los ajíes más rojos y grandes en plena madurez.' },
      how:     { es:'Cortar, extraer semillas con guantes, evitar tocarse los ojos.' },
      drying:  { es:'Secar 7–10 días a la sombra.' },
      storage: { es:'Sobre rotulado. Variedad pura — guardar las mejores para conservar el linaje mapuche.' },
      notes:   { es:'Patrimonio agrícola chileno. Compartir semillas preserva la variedad.' },
    },
  },

  /* ───────────────────────────────────────────────── HIERBAS */

  {
    id: 'cilantro',
    category: 'hierba',
    rarity: 'comun',
    emoji: '🌿',
    photo: 'photos/cilantro.jpg',
    name: { es:'Cilantro', fr:'Coriandre' },
    latin: 'Coriandrum sativum',
    family: { es:'Apiáceas' },

    water: { es:'Regular' },
    water_note: { es:'Riego suave cada 2 días. Evitar encharcado.' },
    sun:   { es:'Sol o semisombra' },
    sun_hours: 5,
    spacing_cm: 15,
    height: { es:'30–60 cm' },

    sow:  { es:'Mar–May y Ago–Oct (directo a tierra)' },
    harv: { es:'40–60 días post-siembra' },
    sowM:   [0,0,1,1,1,0,0,1,1,1,0,0],
    plantM: [0,0,0,0,0,0,0,0,0,0,0,0],
    harvM:  [0,0,0,1,1,1,0,0,0,1,1,1],
    growth_days: 55,

    stages: [
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:10 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)',   days:30 },
      { id:'harv',   name:{es:'Cosecha'},      icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:15 },
    ],

    advice: {
      0: { es:['Sembrar directo a tierra — no le gusta el trasplante.','Frotar las semillas (mericarpios) entre las manos antes de sembrar para separarlas.'] },
      1: { es:['Aclarar a 10–15 cm entre plantas.','Sembrar cada 3 semanas para tener cosecha continua.','Sombrear en verano para retrasar la floración.'] },
      2: { es:['Cosechar hojas exteriores cuando la planta tiene 15 cm.','Cuando florece, se vuelve coriandro — dejar para semilla.'] },
    },

    companions: ['tomate','aji_verde','espinaca'],
    avoid:      ['hinojo'],

    climate: { es:'Crece bien en todo Chile. Prefiere otoño/invierno suave o primavera fresca. En verano se va rápido a semilla.' },
    zones: ['Todas las zonas'],

    uses: {
      culinary:    { es:'Pebre, ensaladas, sopas. Las semillas (coriandro) en repostería y curry.' },
      nutritional: { es:'Vitamina K, vitamina C, hierro, antioxidantes.' },
      medicinal:   { es:'Digestivo, antiinflamatorio. Infusión de semillas calma gases.' },
    },

    problems: [
      { es:'Floración prematura (bolting) por calor — sembrar en estación fresca.' },
      { es:'Pulgones en hojas — agua jabonosa o purín de ortiga.' },
    ],

    seeds: {
      when:    { es:'Cuando los frutos esféricos están secos en la planta (color pajizo).' },
      how:     { es:'Cortar la rama entera, dejar madurar bajo techo, golpear sobre tela para soltar semillas.' },
      drying:  { es:'Ya están secas — terminar de secar 3 días al sol.' },
      storage: { es:'Frasco hermético. Viabilidad 3–4 años. Usar también como especia.' },
    },
  },

  {
    id: 'albahaca',
    category: 'hierba',
    rarity: 'comun',
    emoji: '🌿',
    photo: 'photos/albahaca.jpg',
    name: { es:'Albahaca', fr:'Basilic' },
    latin: 'Ocimum basilicum',
    family: { es:'Lamiáceas' },

    water: { es:'Moderado' },
    water_note: { es:'Suelo siempre ligeramente húmedo. No mojar las hojas.' },
    sun:   { es:'Pleno sol' },
    sun_hours: 6,
    spacing_cm: 25,
    height: { es:'30–60 cm' },

    sow:  { es:'Sep–Nov (almácigo o directo)' },
    plant:{ es:'Oct–Dic' },
    harv: { es:'Nov–Abr' },
    sowM:   [0,0,0,0,0,0,0,0,1,1,1,0],
    plantM: [0,0,0,0,0,0,0,0,0,1,1,1],
    harvM:  [1,1,1,1,0,0,0,0,0,0,1,1],
    growth_days: 75,

    stages: [
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:7 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:20 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)',   days:30 },
      { id:'harv',   name:{es:'Cosecha'},      icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.12)',   days:18 },
    ],

    advice: {
      0: { es:['Sembrar en superficie — la luz favorece la germinación.','20–25°C constantes para una buena nascencia.'] },
      1: { es:['Aclarar a 10 cm. Sensible al mal de vivero — ventilar.','Trasplantar cuando tenga 4 hojas verdaderas.'] },
      2: { es:['Pinzar los ápices regularmente para que ramifique.','Cortar todas las flores apenas aparezcan — prolonga la producción.'] },
      3: { es:['Cosechar las ramas enteras, no hoja por hoja.','La cosecha de la mañana tiene más aroma.'] },
    },

    companions: ['tomate','aji_verde','perejil'],
    avoid:      ['ruda'],

    climate: { es:'Necesita calor — primavera y verano en todo Chile central. En el sur cultivar en macetas para entrar al interior si baja la temperatura.' },
    zones: ['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía'],

    uses: {
      culinary:    { es:'Pesto, ensaladas, salsas de tomate, infusiones.' },
      nutritional: { es:'Vitamina K, manganeso, antioxidantes.' },
      medicinal:   { es:'Digestiva. Aceite esencial relajante.' },
    },

    problems: [
      { es:'Mal del vivero por exceso de humedad — sustrato bien drenado.' },
      { es:'Babosas en plantas jóvenes — trampa de cerveza o ceniza alrededor.' },
      { es:'Floración temprana — pinzar a tiempo.' },
    ],

    seeds: {
      when:    { es:'Dejar florecer una planta a fin de verano. Recolectar cuando las espigas están secas.' },
      how:     { es:'Cortar espigas, dejar secar bajo techo, frotar para soltar semillas negras.' },
      drying:  { es:'Tres días al sol después de extraer.' },
      storage: { es:'Sobre rotulado. Viabilidad 4–5 años.' },
    },
  },

  {
    id: 'perejil',
    category: 'hierba',
    rarity: 'comun',
    emoji: '🌿',
    photo: 'photos/perejil.jpg',
    name: { es:'Perejil', fr:'Persil' },
    latin: 'Petroselinum crispum',
    family: { es:'Apiáceas' },

    water: { es:'Regular' },
    sun:   { es:'Sol o semisombra' },
    sun_hours: 5,
    spacing_cm: 20,
    height: { es:'25–40 cm' },

    sow:  { es:'Ago–Nov y Feb–Abr (directo)' },
    harv: { es:'70 días post-siembra · todo el año' },
    sowM:   [0,1,1,1,0,0,0,1,1,1,1,0],
    plantM: [0,0,0,0,0,0,0,0,0,0,0,0],
    harvM:  [1,1,1,1,1,1,1,1,1,1,1,1],
    growth_days: 80,

    stages: [
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:21 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:30 },
      { id:'harv',   name:{es:'Cosecha continua'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:30 },
    ],

    advice: {
      0: { es:['Germinación lenta — hasta 3 semanas. Remojar semillas 24h antes ayuda.','Mantener sustrato húmedo todo el tiempo.'] },
      1: { es:['Aclarar a 15–20 cm.','Aporte de compost al mes.'] },
      2: { es:['Cosechar hojas exteriores desde el segundo mes.','Cortar al ras estimula nuevo crecimiento.','En el segundo año florece y muere — dejar para semilla.'] },
    },

    companions: ['tomate','zanahoria','cebollin'],
    avoid:      ['lechuga'],

    climate: { es:'Muy resistente, crece todo el año en zonas con clima suave. En el sur protege de heladas fuertes.' },
    zones: ['Todas las zonas'],

    uses: {
      culinary:    { es:'Esencial en cocina chilena: papas, sopas, pebre, salsas, picadas en casi todo.' },
      nutritional: { es:'Hoja generosa en vitamina K, hierro y ácido fólico.' },
      medicinal:   { es:'Diurético natural, depurativo. Infusión para mal aliento.' },
    },

    problems: [
      { es:'Germinación errática — paciencia, regar todos los días.' },
      { es:'Floración al 2° año — es normal, recolectar semillas y resembrar.' },
    ],

    seeds: {
      when:    { es:'Al final del segundo año, cuando las umbelas están secas.' },
      how:     { es:'Cortar umbelas, secar bajo techo, golpear sobre tela.' },
      drying:  { es:'Una semana en sombra ventilada.' },
      storage: { es:'Sobre rotulado. Viabilidad 2–3 años.' },
    },
  },

  {
    id: 'menta',
    category: 'hierba',
    rarity: 'comun',
    emoji: '🍃',
    photo: 'photos/menta.jpg',
    name: { es:'Menta', fr:'Menthe' },
    latin: 'Mentha spicata',
    family: { es:'Lamiáceas' },

    water: { es:'Alto' },
    water_note: { es:'Suelo siempre húmedo. Le encanta la humedad.' },
    sun:   { es:'Semisombra' },
    sun_hours: 4,
    spacing_cm: 30,
    height: { es:'30–60 cm' },

    sow:  { es:'Sep–Nov (por división o esqueje)' },
    harv: { es:'Casi todo el año' },
    sowM:   [0,0,0,0,0,0,0,0,1,1,1,0],
    plantM: [0,0,1,1,0,0,0,0,1,1,1,0],
    harvM:  [1,1,1,1,1,0,0,0,0,1,1,1],
    growth_days: 60,

    stages: [
      { id:'plant',  name:{es:'Instalación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:15 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🍃', color:'#DCEDD3', bg:'rgba(59,88,56,.10)',   days:25 },
      { id:'harv',   name:{es:'Cosecha continua'}, icon:'🍃', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:20 },
    ],

    advice: {
      0: { es:['Multiplicar por esqueje o división de mata — más fácil que semilla.','Plantar SIEMPRE en maceta — sus rizomas son invasivos.'] },
      1: { es:['Aporte de agua frecuente.','Cortar regularmente estimula el rebrote.'] },
      2: { es:['Cosechar las ramas tiernas en la mañana.','Cortar las flores cuando aparezcan para mantener el sabor.','Dividir la mata cada 2–3 años para rejuvenecer.'] },
    },

    companions: ['lechuga','repollo','tomate'],
    avoid:      ['perejil'],

    climate: { es:'Tolera muy bien las zonas húmedas (Los Lagos, Araucanía). En el norte necesita riego frecuente y semisombra.' },
    zones: ['Todas las zonas'],

    uses: {
      culinary:    { es:'Tés, mojito, cordero, salsas, repostería.' },
      nutritional: { es:'Vitamina A, manganeso.' },
      medicinal:   { es:'Digestiva, calma náuseas. Infusión clásica después de comer.' },
    },

    problems: [
      { es:'Invasiva — siempre en maceta o área contenida.' },
      { es:'Oxido (manchas anaranjadas en hojas) — retirar hojas afectadas, ventilar.' },
    ],

    seeds: {
      when:    { es:'Raramente se cultiva por semilla — preferible esqueje o división.' },
      how:     { es:'Cortar una rama de 10 cm, sumergir en agua hasta que enraíce (10–14 días).' },
      drying:  { es:'Las hojas se secan boca abajo, en ramos, lugar oscuro y ventilado.' },
      storage: { es:'Hojas secas en frasco hermético para infusión.' },
    },
  },

  {
    id: 'romero',
    category: 'hierba',
    rarity: 'comun',
    emoji: '🌿',
    photo: 'photos/romero.jpg',
    name: { es:'Romero', fr:'Romarin' },
    latin: 'Salvia rosmarinus',
    family: { es:'Lamiáceas' },

    water: { es:'Bajo' },
    water_note: { es:'Soporta sequía. Riego cada 7–10 días una vez establecido.' },
    sun:   { es:'Pleno sol' },
    sun_hours: 7,
    spacing_cm: 80,
    height: { es:'1–1,5 m' },

    sow:  { es:'Sep–Nov (por esqueje preferentemente)' },
    harv: { es:'Todo el año' },
    sowM:   [0,0,0,0,0,0,0,0,1,1,1,0],
    plantM: [0,0,1,1,0,0,0,0,1,1,1,0],
    harvM:  [1,1,1,1,1,1,1,1,1,1,1,1],
    growth_days: 365,

    stages: [
      { id:'plant',  name:{es:'Instalación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:60 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)',   days:120 },
      { id:'mature', name:{es:'Arbusto adulto'},icon:'🌳', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:185 },
    ],

    advice: {
      0: { es:['Multiplicación por esqueje — cortar rama de 15 cm, quitar hojas inferiores, enterrar en sustrato arenoso.','Suelo bien drenado — odia el exceso de agua.'] },
      1: { es:['Podar ligeramente para forzar ramificación.','Casi no necesita riego después de los primeros meses.'] },
      2: { es:['Cosechar ramas todo el año.','Podar después de la floración (Oct–Nov) para mantener la forma.','Perenne — vive 15–20 años.'] },
    },

    companions: ['lavanda','tomillo','salvia'],
    avoid:      [],

    climate: { es:'Ideal para clima mediterráneo (RM, Valparaíso, O\'Higgins). Resiste sequía y heladas suaves. En sur muy lluvioso necesita suelo muy drenado.' },
    zones: ['Todas las zonas excepto Magallanes'],

    uses: {
      culinary:    { es:'Asados, papas al horno, marinadas, pan.' },
      nutritional: { es:'Rico en antioxidantes y compuestos aromáticos.' },
      medicinal:   { es:'Infusión tradicional para acompañar el estudio. Su aceite esencial se usa también en preparados para el cabello.' },
    },

    problems: [
      { es:'Pudrición de raíz por exceso de agua — drenaje, drenaje, drenaje.' },
      { es:'Cochinilla blanca — limpiar con algodón y alcohol.' },
    ],

    seeds: {
      when:    { es:'Raramente por semilla — germinación errática.' },
      how:     { es:'Preferible esqueje en primavera o acodo de rama baja.' },
      drying:  { es:'Ramos colgados boca abajo, lugar oscuro, 2 semanas.' },
      storage: { es:'Hojas secas en frasco hermético.' },
    },
  },

  {
    id: 'lavanda',
    category: 'flor',
    rarity: 'tradicional',
    emoji: '💜',
    photo: 'photos/lavanda.jpg',
    name: { es:'Lavanda', fr:'Lavande' },
    latin: 'Lavandula angustifolia',
    family: { es:'Lamiáceas' },

    water: { es:'Bajo' },
    sun:   { es:'Pleno sol' },
    sun_hours: 8,
    spacing_cm: 60,
    height: { es:'50–80 cm' },

    sow:  { es:'Sep–Nov (por esqueje o plantines)' },
    harv: { es:'Dic–Feb (flor)' },
    sowM:   [0,0,0,0,0,0,0,0,1,1,1,0],
    plantM: [0,0,1,1,0,0,0,0,1,1,1,0],
    harvM:  [1,1,0,0,0,0,0,0,0,0,0,1],
    growth_days: 365,

    stages: [
      { id:'plant',  name:{es:'Instalación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:60 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)',   days:180 },
      { id:'flower', name:{es:'Floración'},    icon:'💜', color:'#F0E6F2', bg:'rgba(140,90,160,.10)', days:125 },
    ],

    advice: {
      0: { es:['Suelo arenoso, alcalino, muy drenado.','Pleno sol — al menos 6 horas directas.'] },
      1: { es:['Casi sin riego después del primer mes.','Podar suavemente para formar.'] },
      2: { es:['Cosechar las espigas cuando aún están en botón (antes de abrir totalmente) — más aroma.','Podar después de la floración para que dure 10+ años.'] },
    },

    companions: ['romero','tomillo','rosa'],
    avoid:      [],

    climate: { es:'Mediterráneo seco — RM, Valparaíso, O\'Higgins. En sur húmedo cultivar en alto o cantero drenado.' },
    zones: ['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble'],

    uses: {
      culinary:    { es:'Repostería (galletas), miel, sirope.' },
      nutritional: { es:'No es alimento principal — uso aromático.' },
      medicinal:   { es:'Relajante, ansiolítica suave. Aceite esencial para sueño y picaduras.' },
    },

    problems: [
      { es:'Exceso de agua causa pudrición — el peor enemigo.' },
      { es:'Suelo demasiado ácido — añadir cal si es necesario.' },
    ],

    seeds: {
      when:    { es:'Cuando las espigas están secas en la planta (fin verano).' },
      how:     { es:'Frotar espigas secas sobre tela para soltar semillas.' },
      drying:  { es:'Ramos secos colgados boca abajo, lugar oscuro.' },
      storage: { es:'En frasco para infusión, almohadillas o bolsitas perfumadas.' },
    },
  },

  {
    id: 'manzanilla',
    category: 'hierba',
    rarity: 'tradicional',
    emoji: '🌼',
    photo: 'photos/manzanilla.jpg',
    name: { es:'Manzanilla', fr:'Camomille' },
    latin: 'Matricaria chamomilla',
    family: { es:'Asteráceas' },

    water: { es:'Moderado' },
    sun:   { es:'Sol o semisombra' },
    sun_hours: 5,
    spacing_cm: 20,
    height: { es:'30–50 cm' },

    sow:  { es:'Ago–Oct (directo o almácigo)' },
    harv: { es:'Nov–Feb (flor)' },
    sowM:   [0,0,0,0,0,0,0,1,1,1,0,0],
    plantM: [0,0,0,0,0,0,0,0,0,1,1,0],
    harvM:  [1,1,0,0,0,0,0,0,0,0,1,1],
    growth_days: 80,

    stages: [
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:10 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)',   days:30 },
      { id:'flower', name:{es:'Floración'},    icon:'🌼', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:40 },
    ],

    advice: {
      0: { es:['Sembrar en superficie — semilla pequeña, la luz favorece germinación.','Mantener humedad sin encharcar.'] },
      1: { es:['Aclarar a 15–20 cm.','Suelo ligero, bien drenado.'] },
      2: { es:['Cosechar las flores en plena apertura, en la mañana.','Resiembra espontánea año a año.'] },
    },

    companions: ['cebolla','repollo','tomate'],
    avoid:      [],

    climate: { es:'Adaptable. Crece bien en zona central y sur. Soporta heladas suaves.' },
    zones: ['Todas las zonas'],

    uses: {
      culinary:    { es:'Infusión clásica para after-comida o antes de dormir.' },
      nutritional: { es:'Sin gran aporte nutricional — uso medicinal.' },
      medicinal:   { es:'Infusión clásica para calmar el cuerpo y ayudar la digestión. También en compresa tibia para ojos cansados.' },
    },

    problems: [
      { es:'Casi sin plagas — planta resistente.' },
      { es:'Mildiu en condiciones muy húmedas — ventilar.' },
    ],

    seeds: {
      when:    { es:'Cuando las cabezuelas están secas en la planta.' },
      how:     { es:'Cortar cabezuelas, dejar secar, frotar entre los dedos para liberar semilla.' },
      drying:  { es:'Una semana al sol.' },
      storage: { es:'Sobre rotulado. Viabilidad 3 años. Suele auto-sembrarse.' },
    },
  },

  /* ───────────────────────────────────────────────── HORTALIZAS DE HOJA Y RAÍZ */

  {
    id: 'lechuga',
    category: 'hortaliza',
    rarity: 'comun',
    emoji: '🥬',
    photo: 'photos/lechuga.jpg',
    name: { es:'Lechuga', fr:'Laitue' },
    latin: 'Lactuca sativa',
    family: { es:'Asteráceas' },

    water: { es:'Regular' },
    sun:   { es:'Sol o semisombra' },
    sun_hours: 5,
    spacing_cm: 30,
    height: { es:'15–30 cm' },

    sow:  { es:'Mar–May y Ago–Oct' },
    harv: { es:'60 días post-siembra' },
    sowM:   [0,1,1,1,1,0,0,1,1,1,1,0],
    plantM: [0,0,1,1,1,1,0,0,0,1,1,1],
    harvM:  [1,1,1,1,1,1,1,1,0,0,1,1],
    growth_days: 60,

    stages: [
      { id:'germ',    name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:7 },
      { id:'rosette', name:{es:'Roseta'},       icon:'🥬', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:30 },
      { id:'head',    name:{es:'Cogollo'},      icon:'🥬', color:'#DCEDD3', bg:'rgba(59,88,56,.10)',   days:23 },
    ],

    advice: {
      0: { es:['Germina rápido — 4 a 7 días.','Sembrar superficial, no enterrar mucho.'] },
      1: { es:['Aclarar a 25–30 cm.','En días calurosos (>25°C) sombrear ligeramente o regar a media tarde.'] },
      2: { es:['Cosechar al amanecer — más turgente.','Cortar al ras del suelo o por hojas exteriores (cosecha continua).','Antes de que suba a flor — pierde sabor y amarga.'] },
    },

    companions: ['zanahoria','rabanito','frutilla','cebollin'],
    avoid:      ['perejil','apio'],

    climate: { es:'Ideal en otoño/invierno y primavera fresca. Verano: cultivar bajo media sombra o variedades resistentes (Hoja de Roble, Marina).' },
    zones: ['Todas las zonas'],

    uses: {
      culinary:    { es:'Ensaladas, sándwiches, wraps.' },
      nutritional: { es:'Vitamina K, A, folato. Baja en calorías.' },
      medicinal:   { es:'Suavemente sedante (lactucarium). Hidratante.' },
    },

    problems: [
      { es:'Babosas en plantas jóvenes — ceniza, cáscara de huevo o trampa cervecera.' },
      { es:'Subida a flor (bolting) por calor — sombrear y regar a media tarde.' },
    ],

    seeds: {
      when:    { es:'Dejar una planta florecer al fin de su ciclo. Las flores producen vilanos como diente de león.' },
      how:     { es:'Cortar el tallo floral cuando los vilanos empiezan a abrirse. Colgar boca abajo en bolsa de papel.' },
      drying:  { es:'Una semana en sombra ventilada.' },
      storage: { es:'Sobre rotulado. Viabilidad 4–5 años.' },
    },
  },

  {
    id: 'acelga',
    category: 'hortaliza',
    rarity: 'comun',
    emoji: '🌿',
    photo: 'photos/acelga.jpg',
    name: { es:'Acelga', fr:'Blette' },
    latin: 'Beta vulgaris var. cicla',
    family: { es:'Amarantáceas' },

    water: { es:'Regular' },
    sun:   { es:'Sol o semisombra' },
    sun_hours: 5,
    spacing_cm: 35,
    height: { es:'40–60 cm' },

    sow:  { es:'Mar–May y Ago–Oct (directo)' },
    harv: { es:'60 días, cosecha continua durante meses' },
    sowM:   [0,1,1,1,1,0,0,1,1,1,1,0],
    plantM: [0,0,0,0,0,0,0,0,0,0,0,0],
    harvM:  [1,1,1,1,1,1,1,1,1,1,1,1],
    growth_days: 60,

    stages: [
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:10 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:25 },
      { id:'harv',   name:{es:'Cosecha continua'},icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:25 },
    ],

    advice: {
      0: { es:['Remojar las semillas (que en realidad son glomérulos con varias plantas) 12h antes para acelerar germinación.','Sembrar directo, 1 cm de profundidad.'] },
      1: { es:['Aclarar dejando una planta cada 30 cm.','Riego regular evita que las hojas se vuelvan duras.'] },
      2: { es:['Cosechar las hojas exteriores cuando tengan 20 cm.','La planta seguirá produciendo durante muchos meses.','Aporte de compost cada 2 meses.'] },
    },

    companions: ['cebolla','poroto','lechuga'],
    avoid:      ['betarraga'],

    climate: { es:'Muy rústica. Crece todo el año en clima templado. Resiste heladas suaves.' },
    zones: ['Todas las zonas'],

    uses: {
      culinary:    { es:'Tortillas, empanadas, sopas, salteados. Tallos también comestibles.' },
      nutritional: { es:'Hoja generosa en hierro y calcio. Buen complemento en cocidos y guisos.' },
      medicinal:   { es:'Depurativa, laxante suave.' },
    },

    problems: [
      { es:'Minador de hojas (galería blanca) — retirar hojas afectadas.' },
      { es:'Pulgones — agua jabonosa.' },
    ],

    seeds: {
      when:    { es:'Al 2° año, cuando las espigas están secas (es bianual).' },
      how:     { es:'Cortar espigas, secar, frotar para soltar glomérulos.' },
      drying:  { es:'Una semana al sol.' },
      storage: { es:'Sobre rotulado. Viabilidad 4 años.' },
    },
  },

  {
    id: 'betarraga',
    category: 'hortaliza',
    rarity: 'comun',
    emoji: '🟣',
    photo: 'photos/betarraga.jpg',
    name: { es:'Betarraga', fr:'Betterave' },
    latin: 'Beta vulgaris',
    family: { es:'Amarantáceas' },

    water: { es:'Regular' },
    sun:   { es:'Pleno sol' },
    sun_hours: 6,
    spacing_cm: 10,
    height: { es:'30 cm' },

    sow:  { es:'Ago–Nov y Feb–Mar (directo)' },
    harv: { es:'70–90 días post-siembra' },
    sowM:   [0,1,1,0,0,0,0,1,1,1,1,0],
    plantM: [0,0,0,0,0,0,0,0,0,0,0,0],
    harvM:  [1,1,1,1,1,0,0,0,0,0,1,1],
    growth_days: 80,

    stages: [
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:12 },
      { id:'leaf',   name:{es:'Crecimiento foliar'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:30 },
      { id:'root',   name:{es:'Engrosamiento'}, icon:'🟣', color:'#F0E6F2', bg:'rgba(140,90,160,.10)', days:38 },
    ],

    advice: {
      0: { es:['Remojar semillas 12h antes ayuda la germinación.','Sembrar directo, suelo profundo y mullido.'] },
      1: { es:['Aclarar a 8–10 cm — sin esto las raíces no engordan.','Las hojas tiernas también son comestibles (mejor que la acelga).'] },
      2: { es:['Cosechar cuando la raíz emerge ligeramente — 5–8 cm de diámetro.','No dejar demasiado tiempo o se vuelve leñosa.'] },
    },

    companions: ['lechuga','cebolla','repollo'],
    avoid:      ['acelga','poroto'],

    climate: { es:'Adaptable. Prefiere fresco. En verano sembrar variedades de crecimiento rápido.' },
    zones: ['Todas las zonas'],

    uses: {
      culinary:    { es:'Ensaladas (cocida), jugos, conservas en vinagre. Hojas como acelga.' },
      nutritional: { es:'Raíz dulce con buen aporte de folato y hierro.' },
      medicinal:   { es:'Aporta nitratos vegetales que favorecen la circulación. Uso tradicional como depurativa.' },
    },

    problems: [
      { es:'Raíz pequeña por no aclarar a tiempo.' },
      { es:'Pulgones en hojas — agua jabonosa.' },
    ],

    seeds: {
      when:    { es:'Al 2° año (bianual). Espigas secas en planta.' },
      how:     { es:'Cortar espigas, frotar sobre tela.' },
      drying:  { es:'Una semana al sol.' },
      storage: { es:'Sobre rotulado. Viabilidad 4 años.' },
    },
  },

  {
    id: 'zanahoria',
    category: 'hortaliza',
    rarity: 'comun',
    emoji: '🥕',
    photo: 'photos/zanahoria.jpg',
    name: { es:'Zanahoria', fr:'Carotte' },
    latin: 'Daucus carota',
    family: { es:'Apiáceas' },

    water: { es:'Moderado' },
    sun:   { es:'Pleno sol' },
    sun_hours: 6,
    spacing_cm: 6,
    height: { es:'30 cm aéreo' },

    sow:  { es:'Ago–Nov y Feb–Abr (directo)' },
    harv: { es:'90–120 días post-siembra' },
    sowM:   [0,1,1,1,0,0,0,1,1,1,1,0],
    plantM: [0,0,0,0,0,0,0,0,0,0,0,0],
    harvM:  [1,1,1,1,1,1,1,0,0,0,0,1],
    growth_days: 100,

    stages: [
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:18 },
      { id:'leaf',   name:{es:'Crecimiento foliar'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:35 },
      { id:'root',   name:{es:'Engrosamiento de raíz'}, icon:'🥕', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:47 },
    ],

    advice: {
      0: { es:['Germinación lenta — 10 a 20 días.','Sembrar muy superficial. Mantener húmedo todo el tiempo.','Acolchar ligeramente para evitar costra.'] },
      1: { es:['Aclarar a 5–8 cm — fundamental para que engorde.','No mover ni golpear — la raíz se bifurca con cualquier obstáculo.'] },
      2: { es:['Suelo profundo y suelto (sin piedras, sin compost fresco).','Verificar grosor empujando ligeramente la tierra alrededor del cuello.','Cosechar cuando el cuello sobresale del suelo.'] },
    },

    companions: ['cebolla','puerro','lechuga'],
    avoid:      ['eneldo'],

    climate: { es:'Crece bien en zona central y sur. En verano riego frecuente y media sombra.' },
    zones: ['Todas las zonas'],

    uses: {
      culinary:    { es:'Cruda en ensalada, cocida en cazuela, jugos, postres (queque de zanahoria).' },
      nutritional: { es:'Betacaroteno (vitamina A), fibra, potasio.' },
      medicinal:   { es:'Buena para la vista. Antioxidante.' },
    },

    problems: [
      { es:'Mosca de la zanahoria — asociar con cebolla aleja la plaga.' },
      { es:'Raíces bifurcadas o cortas — suelo compactado o con piedras.' },
    ],

    seeds: {
      when:    { es:'Al 2° año (bianual). Umbelas secas en planta (fin de verano).' },
      how:     { es:'Cortar umbelas, secar bajo techo, frotar sobre tela.' },
      drying:  { es:'Una semana al sol.' },
      storage: { es:'Sobre rotulado. Viabilidad 3 años.' },
    },
  },

  /* ───────────────────────────────────────────────── ZAPALLOS Y LEGUMINOSAS */

  {
    id: 'zapallo_italiano',
    category: 'hortaliza',
    rarity: 'comun',
    emoji: '🥒',
    photo: 'photos/zapallo_italiano.jpg',
    name: { es:'Zapallo italiano (Zucchini)', fr:'Courgette' },
    latin: 'Cucurbita pepo',
    family: { es:'Cucurbitáceas' },

    water: { es:'Alto' },
    water_note: { es:'10–15 L por planta por semana en verano. Riego al pie.' },
    sun:   { es:'Pleno sol' },
    sun_hours: 7,
    spacing_cm: 80,
    height: { es:'50 cm (arbustivo)' },

    sow:  { es:'Sep–Nov (almácigo o directo)' },
    plant:{ es:'Oct–Dic' },
    harv: { es:'Dic–Mar' },
    sowM:   [0,0,0,0,0,0,0,0,1,1,1,0],
    plantM: [0,0,0,0,0,0,0,0,0,1,1,1],
    harvM:  [1,1,1,0,0,0,0,0,0,0,0,1],
    growth_days: 75,

    stages: [
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:7 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:18 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)',   days:20 },
      { id:'fruit',  name:{es:'Cosecha'},      icon:'🥒', color:'#FBE9E7', bg:'rgba(181,90,40,.12)',  days:30 },
    ],

    advice: {
      0: { es:['Germina rápido — 5 a 7 días a 22°C.','Sembrar 2 semillas por hoyo, dejar la más fuerte.'] },
      1: { es:['Trasplantar con cuidado — odia que le toquen las raíces.'] },
      2: { es:['Espacio: cada planta ocupa 1 m² fácilmente.','Acolchado generoso, riego abundante al pie.'] },
      3: { es:['Cosechar joven (15–20 cm) — más sabroso y estimula nueva producción.','Una planta produce zapallos cada 2–3 días en plena temporada.','Flores también comestibles (rellenas, en tortilla).'] },
    },

    companions: ['poroto','maiz','tagete'],
    avoid:      ['papa'],

    climate: { es:'Crece bien en zona central y sur con verano cálido. Necesita calor.' },
    zones: ['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía'],

    uses: {
      culinary:    { es:'Tortilla, rellenos, sopas, parrilla, queque salado. Flores rellenas.' },
      nutritional: { es:'Vitamina C, manganeso, potasio. Bajo en calorías.' },
      medicinal:   { es:'Diurético, suave para la digestión.' },
    },

    problems: [
      { es:'Oidio (polvo blanco en hojas) — leche diluida 1:10 cada semana, ventilar.' },
      { es:'Frutos podridos en la flor — falta polinización, ayudar a mano con pincel.' },
    ],

    seeds: {
      when:    { es:'Dejar madurar 1–2 zapallos hasta que estén grandes y duros, fin de verano.' },
      how:     { es:'Cortar, extraer semillas, lavar bien quitando toda la pulpa.' },
      drying:  { es:'Dos semanas sobre papel a la sombra.' },
      storage: { es:'Sobre rotulado. Viabilidad 4–6 años.' },
      notes:   { es:'Cuidado con cruzamientos entre cucurbitáceas — pueden producir frutos amargos al año siguiente.' },
    },
  },

  {
    id: 'zapallo',
    category: 'hortaliza',
    rarity: 'tradicional',
    emoji: '🎃',
    name: { es:'Zapallo', fr:'Courge' },
    latin: 'Cucurbita maxima',
    family: { es:'Cucurbitáceas' },

    water: { es:'Moderado' },
    sun:   { es:'Pleno sol' },
    sun_hours: 7,
    spacing_cm: 120,
    height: { es:'Rastrero 2–4 m' },

    sow:  { es:'Oct–Nov (almácigo o directo)' },
    harv: { es:'Mar–May (otoño)' },
    sowM:   [0,0,0,0,0,0,0,0,0,1,1,0],
    plantM: [0,0,0,0,0,0,0,0,0,0,1,1],
    harvM:  [0,0,1,1,1,0,0,0,0,0,0,0],
    growth_days: 140,

    stages: [
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:7 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:25 },
      { id:'vine',   name:{es:'Crecimiento de guía'},icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:45 },
      { id:'fruit',  name:{es:'Engorde de fruto'},icon:'🎃', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:63 },
    ],

    advice: {
      0: { es:['Germina rápido. Sembrar de costado para evitar pudrición.','Mucho espacio: una planta puede tomar 6 m².'] },
      1: { es:['Trasplantar joven con todo el cepellón intacto.'] },
      2: { es:['Dejar las guías correr libremente o guiar sobre espaldera fuerte.','Riego abundante hasta el cuajado, luego reducir.','Acolchar con paja para que el fruto no toque la tierra.'] },
      3: { es:['Cosechar cuando la piel está dura (no se raya con la uña) y el pedúnculo seco.','Dejar curar al sol una semana antes de almacenar.','Se conserva 4–6 meses en lugar seco y fresco.'] },
    },

    companions: ['maiz','poroto','tagete'],
    avoid:      ['papa'],

    climate: { es:'Verano largo y cálido. RM, O\'Higgins, Maule, Ñuble. En el sur ciclo más corto, cosechar antes de las lluvias.' },
    zones: ['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío'],

    uses: {
      culinary:    { es:'Sopas (crema de zapallo), pastel de zapallo, sopaipillas, kuchen.' },
      nutritional: { es:'Betacaroteno, fibra, potasio, vitamina C.' },
      medicinal:   { es:'Semillas antiparasitarias. Pulpa para piel sensible.' },
    },

    problems: [
      { es:'Oidio en otoño — corte de aire, leche diluida.' },
      { es:'Cucurbitáceas se cruzan — aislar variedades para semilla pura.' },
    ],

    seeds: {
      when:    { es:'De los frutos completamente maduros y curados.' },
      how:     { es:'Extraer, lavar, secar.' },
      drying:  { es:'Dos semanas a la sombra ventilada.' },
      storage: { es:'Sobre rotulado. Viabilidad 5–6 años. Semillas tostadas también comestibles.' },
    },
  },

  {
    id: 'poroto_verde',
    category: 'hortaliza',
    rarity: 'comun',
    emoji: '🫛',
    photo: 'photos/poroto_verde.jpg',
    name: { es:'Poroto verde', fr:'Haricot vert' },
    latin: 'Phaseolus vulgaris',
    family: { es:'Fabáceas' },

    water: { es:'Moderado' },
    sun:   { es:'Pleno sol' },
    sun_hours: 6,
    spacing_cm: 15,
    height: { es:'40 cm (mata) o 2 m (guía)' },

    sow:  { es:'Oct–Dic (directo, suelo cálido)' },
    harv: { es:'Ene–Mar' },
    sowM:   [0,0,0,0,0,0,0,0,0,1,1,1],
    plantM: [0,0,0,0,0,0,0,0,0,0,0,0],
    harvM:  [1,1,1,0,0,0,0,0,0,0,0,1],
    growth_days: 70,

    stages: [
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:8 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:20 },
      { id:'flower', name:{es:'Floración'},    icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:15 },
      { id:'pod',    name:{es:'Vainas'},       icon:'🫛', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:27 },
    ],

    advice: {
      0: { es:['Esperar suelo cálido (>15°C) — pudre con frío.','Sembrar directo, 3 cm de profundidad.'] },
      1: { es:['Aclarar a 15 cm. Variedades de guía requieren tutor de 2 m.','Riego regular pero no excesivo.'] },
      2: { es:['Polinización por insectos — no mojar las flores.','Aporte de cal al suelo si es muy ácido.'] },
      3: { es:['Cosechar joven (10–15 cm), antes que se note el grano.','Cosechar cada 2 días estimula la producción.','Dejar algunas vainas para semilla.'] },
    },

    companions: ['maiz','zapallo','zanahoria','lechuga'],
    avoid:      ['cebolla','ajo'],

    climate: { es:'Verano cálido. Zona central y sur (Maule, Biobío, Araucanía).' },
    zones: ['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía'],

    uses: {
      culinary:    { es:'Cazuela, ensalada de porotos verdes, salteados, conserva.' },
      nutritional: { es:'Aporta fibra, vitamina K y algo de proteína vegetal.' },
      medicinal:   { es:'Fija nitrógeno al suelo (mejora la tierra).' },
    },

    problems: [
      { es:'Babosas al inicio — proteger.' },
      { es:'Roya (manchas anaranjadas) — retirar hojas, evitar mojar follaje.' },
    ],

    seeds: {
      when:    { es:'Dejar vainas madurar y secar en la planta.' },
      how:     { es:'Cosechar vainas secas, descascarillar.' },
      drying:  { es:'Tres días al sol.' },
      storage: { es:'Frasco hermético. Congelar 48h elimina huevos de gorgojo. Viabilidad 3 años.' },
    },
  },

  {
    id: 'cebollin',
    category: 'hortaliza',
    rarity: 'comun',
    emoji: '🌱',
    photo: 'photos/cebollin.jpg',
    name: { es:'Cebollín', fr:'Ciboule' },
    latin: 'Allium fistulosum',
    family: { es:'Amarilidáceas' },

    water: { es:'Regular' },
    sun:   { es:'Pleno sol' },
    sun_hours: 6,
    spacing_cm: 10,
    height: { es:'30–40 cm' },

    sow:  { es:'Ago–Nov y Feb–Abr (almácigo o directo)' },
    harv: { es:'70 días, cosecha continua' },
    sowM:   [0,1,1,1,0,0,0,1,1,1,1,0],
    plantM: [0,0,0,1,1,0,0,0,0,1,1,1],
    harvM:  [1,1,1,1,1,1,1,1,1,1,1,1],
    growth_days: 70,

    stages: [
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:14 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:35 },
      { id:'harv',   name:{es:'Cosecha continua'}, icon:'🌱', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:21 },
    ],

    advice: {
      0: { es:['Sembrar superficial, mantener humedad.','Germinación lenta — 10 a 14 días.'] },
      1: { es:['Trasplantar en grupos de 4–5 cebollines cada 10 cm.','Mantener libre de malezas.'] },
      2: { es:['Cortar las hojas desde arriba, dejando 5 cm — vuelve a brotar.','Multiplicar dividiendo la mata cada 2 años.'] },
    },

    companions: ['zanahoria','lechuga','tomate','frutilla'],
    avoid:      ['poroto','arveja'],

    climate: { es:'Muy rústico. Crece todo el año en clima templado. Resiste heladas.' },
    zones: ['Todas las zonas'],

    uses: {
      culinary:    { es:'Pebre, sopas, tortillas, ensaladas, marraqueta con palta y cebollín.' },
      nutritional: { es:'Vitamina K, C, manganeso. Compuestos sulfurados beneficiosos.' },
      medicinal:   { es:'Pertenece a la familia del ajo y comparte sus virtudes tradicionales.' },
    },

    problems: [
      { es:'Casi sin plagas — repele incluso pulgones de otras plantas.' },
      { es:'Si florece, el bulbo se debilita — cortar la flor.' },
    ],

    seeds: {
      when:    { es:'Al 2° año, cuando las cabezuelas están secas.' },
      how:     { es:'Cortar cabezuelas, frotar sobre tela.' },
      drying:  { es:'Una semana al sol.' },
      storage: { es:'Sobre rotulado. Viabilidad 2 años (corta).' },
    },
  },

  /* ───────────────────────────────────────────────── FRUTAS Y ÁRBOLES */

  {
    id: 'frutilla',
    category: 'fruta',
    rarity: 'comun',
    emoji: '🍓',
    photo: 'photos/frutilla.jpg',
    name: { es:'Frutilla', fr:'Fraise' },
    latin: 'Fragaria × ananassa',
    family: { es:'Rosáceas' },

    water: { es:'Regular' },
    sun:   { es:'Pleno sol' },
    sun_hours: 6,
    spacing_cm: 30,
    height: { es:'15–25 cm' },

    sow:  { es:'Feb–Abr (plantar estolones)' },
    harv: { es:'Oct–Ene' },
    sowM:   [0,1,1,1,0,0,0,0,0,0,0,0],
    plantM: [0,1,1,1,0,0,0,0,0,0,0,0],
    harvM:  [1,1,0,0,0,0,0,0,0,1,1,1],
    growth_days: 240,

    stages: [
      { id:'plant',  name:{es:'Instalación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:20 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)',   days:90 },
      { id:'flower', name:{es:'Floración'},    icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:30 },
      { id:'fruit',  name:{es:'Cosecha'},      icon:'🍓', color:'#FBE9E7', bg:'rgba(181,90,40,.12)',  days:100 },
    ],

    advice: {
      0: { es:['Plantar el cuello al ras del suelo — ni enterrado ni expuesto.','Suelo rico en materia orgánica, ligeramente ácido.'] },
      1: { es:['Acolchar con paja para mantener humedad y proteger fruto.','Eliminar estolones (guías) si se quiere fruto, conservar para multiplicar.'] },
      2: { es:['Las flores blancas indican cosecha en 4–6 semanas.','Necesita polinización por insectos — no usar pesticidas.'] },
      3: { es:['Cosechar maduras, con pedúnculo, en la mañana.','Renovar plantas cada 3 años — pierden productividad.','Multiplicar por estolones a fin de verano.'] },
    },

    companions: ['lechuga','espinaca','cebollin','borraja'],
    avoid:      ['repollo','tomate'],

    climate: { es:'Frutillar tradicional en Chile (San Pedro, Talca, Ñuble). Necesita fresco invernal para fructificar bien.' },
    zones: ['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía','Los Lagos'],

    uses: {
      culinary:    { es:'Fresca, mermelada, kuchen, helados, jugos.' },
      nutritional: { es:'Vitamina C, manganeso, folato, antioxidantes.' },
      medicinal:   { es:'Apreciada por su frescura y su aporte de vitamina C.' },
    },

    problems: [
      { es:'Babosas comen frutos — paja como acolchado los disuade.' },
      { es:'Hongos en fruto (Botrytis) — ventilar, no mojar follaje.' },
      { es:'Pájaros — malla o cintas brillantes.' },
    ],

    seeds: {
      when:    { es:'Se multiplica casi siempre por estolones — más fácil y fiel.' },
      how:     { es:'Anclar el estolón al suelo o en macetita hasta que enraíce (3 semanas), luego cortar.' },
      drying:  { es:'No aplica.' },
      storage: { es:'Conservar plantas hijas en macetas durante el invierno para plantar en otoño siguiente.' },
    },
  },

  {
    id: 'limon',
    category: 'arbol',
    rarity: 'comun',
    emoji: '🍋',
    photo: 'photos/limon.jpg',
    name: { es:'Limón', fr:'Citron' },
    latin: 'Citrus × limon',
    family: { es:'Rutáceas' },

    water: { es:'Moderado' },
    water_note: { es:'Riego profundo cada 5–7 días en verano, menos en invierno.' },
    sun:   { es:'Pleno sol' },
    sun_hours: 6,
    spacing_cm: 400,
    height: { es:'3–5 m' },

    sow:  { es:'Sep–Nov (plantación de árbol joven)' },
    harv: { es:'May–Oct (principal), algo todo el año' },
    sowM:   [0,0,0,0,0,0,0,0,1,1,1,0],
    plantM: [0,0,0,0,0,0,0,0,1,1,1,0],
    harvM:  [0,0,0,0,1,1,1,1,1,1,0,0],
    growth_days: 1095,

    stages: [
      { id:'plant',  name:{es:'Plantación'},  icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:90 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:730 },
      { id:'fruit',  name:{es:'Producción'},  icon:'🍋', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:275 },
    ],

    advice: {
      0: { es:['Plantar en hoyo grande (60×60 cm) con compost en el fondo.','Proteger del viento los primeros años.','Riego abundante el primer mes.'] },
      1: { es:['Aporte de compost al pie 2 veces al año (primavera y otoño).','Riego profundo pero espaciado.','Mulch para conservar humedad y evitar malezas.','Primer fruto al 2°–3° año.'] },
      2: { es:['Cosechar a medida — el fruto se conserva mejor en el árbol.','Podar después de cosecha (Sept) para airear la copa.','Producción plena después de 5 años.','Un árbol adulto produce 100+ kg al año.'] },
    },

    companions: ['lavanda','romero','calendula'],
    avoid:      [],

    climate: { es:'Mediterráneo (Coquimbo, Valparaíso, RM, O\'Higgins). En el sur cultivar variedad rustica o en invernadero. Sensible a heladas fuertes (<-3°C).' },
    zones: ['Coquimbo','Valparaíso','RM','O\'Higgins','Maule'],

    uses: {
      culinary:    { es:'Pisco sour, ceviche, marinadas, postres, conservas (mermelada de cáscara).' },
      nutritional: { es:'Muy alto en vitamina C, ácido cítrico, flavonoides.' },
      medicinal:   { es:'Jugo y cáscara muy aromáticos. Tradicionalmente presentes en infusiones para resfríos.' },
    },

    problems: [
      { es:'Cochinilla blanca y algodonosa — limpiar con algodón y alcohol, aceite de neem.' },
      { es:'Clorosis (hojas amarillas) por falta de hierro — sulfato de hierro o té de compost.' },
      { es:'Heladas — proteger tronco con tela, cubrir la copa con malla en noches frías.' },
    ],

    seeds: {
      when:    { es:'De fruto maduro, semillas grandes.' },
      how:     { es:'Sembrar inmediatamente — no se conservan bien secas.' },
      drying:  { es:'No secar — sembrar fresco.' },
      storage: { es:'Mejor multiplicar por injerto sobre patrón resistente para conservar variedad.' },
      notes:   { es:'Árbol de semilla puede tardar 7–10 años en fructificar y no ser igual al padre. Mejor comprar plantín injertado.' },
    },
  },

  /* ───────────────────────────────────────────────── HORTALIZAS DE BULBO */

  {
    id: 'ajo',
    category: 'hortaliza',
    rarity: 'comun',
    emoji: '🧄',
    photo: 'photos/ajo.jpg',
    name: { es:'Ajo', fr:'Ail' },
    latin: 'Allium sativum',
    family: { es:'Amarilidáceas' },

    water: { es:'Bajo' },
    water_note: { es:'Riego escaso. Mantener seco las últimas 3 semanas antes de cosechar.' },
    sun:   { es:'Pleno sol' },
    sun_hours: 6,
    spacing_cm: 15,
    height: { es:'30–60 cm' },

    sow:  { es:'Abr–Jun (plantar dientes en suelo frío)' },
    harv: { es:'Nov–Dic' },
    sowM:   [0,0,0,1,1,1,0,0,0,0,0,0],
    plantM: [0,0,0,1,1,1,0,0,0,0,0,0],
    harvM:  [0,0,0,0,0,0,0,0,0,0,1,1],
    growth_days: 220,

    stages: [
      { id:'plant',  name:{es:'Plantación'},  icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:30 },
      { id:'growth', name:{es:'Desarrollo foliar'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:130 },
      { id:'bulb',   name:{es:'Engorde de bulbo'},  icon:'🧄', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:60 },
    ],

    advice: {
      0: { es:['Plantar diente a diente, punta hacia arriba, 3 cm bajo tierra.','Suelo bien drenado, sin estiércol fresco — pudre el bulbo.'] },
      1: { es:['Riego mínimo durante el invierno.','Mantener libre de malezas — compite por nutrientes.','Necesita frío invernal para formar bulbos bien divididos.'] },
      2: { es:['Suspender riego cuando las hojas amarillean.','Cosechar cuando 2/3 de las hojas se han secado.','Curar al sol con sombra parcial 2 semanas antes de guardar.'] },
    },

    companions: ['tomate','frutilla','zanahoria','lechuga','betarraga'],
    avoid:      ['poroto','arveja','haba'],

    climate: { es:'Necesita inviernos fríos. Bien adaptado en zona central y sur: RM, O\'Higgins, Maule, Biobío. En el norte usar variedades de invierno suave.' },
    zones: ['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía'],

    uses: {
      culinary:    { es:'Base de la cocina chilena: pebre, marinadas, asados, sofritos, aliño.' },
      nutritional: { es:'Compuestos sulfurados (alicina), vitamina C, manganeso, selenio.' },
      medicinal:   { es:'Tradicionalmente usado por sus propiedades antibacterianas y para la circulación.' },
    },

    problems: [
      { es:'Pudrición de bulbo por exceso de agua — drenaje esencial.' },
      { es:'Roya (manchas naranja en hojas) — rotar cultivos cada 3 años y no mojar follaje.' },
      { es:'Bulbos pequeños por plantación tardía — plantar antes del solsticio de invierno.' },
    ],

    seeds: {
      when:    { es:'No se reproduce por semilla en cultivo. Guardar los bulbos más grandes y sanos.' },
      how:     { es:'Separar los dientes externos del bulbo madre — plantarlos como nueva siembra el próximo año.' },
      drying:  { es:'Curar al aire con sombra parcial durante 2 semanas tras la cosecha.' },
      storage: { es:'Trenza colgada o malla en lugar seco y ventilado. Viabilidad 6–8 meses.' },
      notes:   { es:'En Chiloé sobreviven variedades antiguas — patrimonio campesino por preservar.' },
    },
  },

  {
    id: 'cebolla',
    category: 'hortaliza',
    rarity: 'comun',
    emoji: '🧅',
    photo: 'photos/cebolla.jpg',
    name: { es:'Cebolla', fr:'Oignon' },
    latin: 'Allium cepa',
    family: { es:'Amarilidáceas' },

    water: { es:'Moderado' },
    sun:   { es:'Pleno sol' },
    sun_hours: 7,
    spacing_cm: 12,
    height: { es:'40–60 cm' },

    sow:  { es:'Mar–May (almácigo otoñal) y Ago–Sep (siembra primaveral)' },
    plant:{ es:'May–Jun y Oct–Nov' },
    harv: { es:'Ene–Mar y Nov–Dic' },
    sowM:   [0,0,1,1,1,0,0,1,1,0,0,0],
    plantM: [0,0,0,0,1,1,0,0,0,1,1,0],
    harvM:  [1,1,1,0,0,0,0,0,0,0,1,1],
    growth_days: 160,

    stages: [
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:14 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:50 },
      { id:'bulb',   name:{es:'Engorde de bulbo'}, icon:'🧅', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:96 },
    ],

    advice: {
      0: { es:['Sembrar superficial en bandeja. Germina lento, 12–14 días.','Mantener almácigo húmedo y a media sombra.'] },
      1: { es:['Trasplantar cuando tenga grosor de lápiz, 4–5 hojas.','Plantar enterrando solo la raíz — no tapar el cuello.'] },
      2: { es:['Reducir riego cuando comienzan a doblarse las hojas.','Cosechar cuando 50% de las hojas se han caído.','Curar al sol unos días antes de guardar.'] },
    },

    companions: ['zanahoria','lechuga','frutilla','betarraga','manzanilla'],
    avoid:      ['poroto','arveja','haba'],

    climate: { es:'Resiste fríos suaves. Variedades de día corto para zona central, de día largo para el sur.' },
    zones: ['Todas las zonas excepto Magallanes'],

    uses: {
      culinary:    { es:'Base de casi toda preparación chilena: ensalada chilena, pebre, sofritos, conservas.' },
      nutritional: { es:'Aporta quercetina, vitamina C y compuestos sulfurados.' },
      medicinal:   { es:'Tradicionalmente usada para descongestionar vías respiratorias.' },
    },

    problems: [
      { es:'Trips (puntos plateados en hojas) — riego al pie, no por aspersión.' },
      { es:'Bulbos pequeños por densidad excesiva — respetar 12 cm entre plantas.' },
      { es:'Pudrición blanca por suelo muy húmedo — drenaje.' },
    ],

    seeds: {
      when:    { es:'Al 2° año, cuando los bulbos florecen y las semillas (negras) están secas en las umbelas.' },
      how:     { es:'Cortar umbelas maduras, dejar secar bajo techo, frotar para soltar.' },
      drying:  { es:'Una semana al sol.' },
      storage: { es:'Sobre rotulado. Viabilidad 2 años (corta, renovar a menudo).' },
    },
  },

  {
    id: 'puerro',
    category: 'hortaliza',
    rarity: 'tradicional',
    emoji: '🌱',
    name: { es:'Puerro', fr:'Poireau' },
    latin: 'Allium ampeloprasum var. porrum',
    family: { es:'Amarilidáceas' },

    water: { es:'Regular' },
    sun:   { es:'Pleno sol' },
    sun_hours: 6,
    spacing_cm: 15,
    height: { es:'40–80 cm' },

    sow:  { es:'Feb–Abr (almácigo) y Ago–Oct' },
    plant:{ es:'May–Jul y Nov' },
    harv: { es:'Jun–Sep y Dic–Feb' },
    sowM:   [0,1,1,1,0,0,0,1,1,1,0,0],
    plantM: [0,0,0,0,1,1,1,0,0,0,1,0],
    harvM:  [1,1,1,0,0,1,1,1,1,0,0,1],
    growth_days: 150,

    stages: [
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:14 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:50 },
      { id:'growth', name:{es:'Engrosamiento del tallo'}, icon:'🌱', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:86 },
    ],

    advice: {
      0: { es:['Germinación lenta. Sembrar en bandeja con sustrato fino.','Almácigo en invierno tarda más, 18–20 días.'] },
      1: { es:['Trasplantar con grosor de lápiz. Acortar raíces a 2 cm.','Plantar en zanjas de 15 cm para luego ir tapando — favorece el blanqueado.'] },
      2: { es:['Aporcar (tapar con tierra) 2–3 veces durante el crecimiento.','Cosechar cuando el tallo blanco mide 15–25 cm.'] },
    },

    companions: ['zanahoria','tomate','apio','frutilla'],
    avoid:      ['poroto','arveja','haba'],

    climate: { es:'Muy rústico, resiste fríos del sur. Crece bien en RM, Maule, Biobío, Los Lagos.' },
    zones: ['Todas las zonas'],

    uses: {
      culinary:    { es:'Cazuelas, sopas, quiches, tortilla de papas. La parte blanca es la más tierna.' },
      nutritional: { es:'Vitamina K, manganeso, vitamina B6, fibra prebiótica.' },
      medicinal:   { es:'Suavemente diurético, similar al ajo en propiedades antibacterianas.' },
    },

    problems: [
      { es:'Mosca del puerro — asociar con zanahoria ayuda a confundir la plaga.' },
      { es:'Tallos delgados por poco aporque — apilar tierra cada 3 semanas.' },
    ],

    seeds: {
      when:    { es:'Al 2° año (bianual). Cabezuelas grandes con semillas negras.' },
      how:     { es:'Cortar cabezuelas secas, frotar sobre tela.' },
      drying:  { es:'Una semana al sol.' },
      storage: { es:'Sobre rotulado. Viabilidad 2–3 años.' },
    },
  },

  /* ───────────────────────────────────────────────── HORTALIZAS DE FRUTO (continuación) */

  {
    id: 'pepino',
    category: 'hortaliza',
    rarity: 'comun',
    emoji: '🥒',
    photo: 'photos/pepino.jpg',
    name: { es:'Pepino', fr:'Concombre' },
    latin: 'Cucumis sativus',
    family: { es:'Cucurbitáceas' },

    water: { es:'Alto' },
    water_note: { es:'Suelo siempre húmedo en verano. Riego al pie, nunca sobre el follaje.' },
    sun:   { es:'Pleno sol' },
    sun_hours: 7,
    spacing_cm: 60,
    height: { es:'Rastrero o trepador 1,5–2 m' },

    sow:  { es:'Sep–Nov (almácigo o directo)' },
    plant:{ es:'Oct–Dic' },
    harv: { es:'Dic–Mar' },
    sowM:   [0,0,0,0,0,0,0,0,1,1,1,0],
    plantM: [0,0,0,0,0,0,0,0,0,1,1,1],
    harvM:  [1,1,1,0,0,0,0,0,0,0,0,1],
    growth_days: 75,

    stages: [
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:7 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:18 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)',   days:25 },
      { id:'fruit',  name:{es:'Cosecha'},      icon:'🥒', color:'#FBE9E7', bg:'rgba(181,90,40,.12)',  days:25 },
    ],

    advice: {
      0: { es:['Germina rápido — 5 a 7 días a 22°C.','Sembrar 2 semillas por hoyo y conservar la más fuerte.'] },
      1: { es:['Trasplantar joven, con cuidado de las raíces.','Acolchar para conservar humedad del suelo.'] },
      2: { es:['Tutorar en espaldera o malla — frutos más rectos y aireados.','Riego abundante y regular evita el amargor.'] },
      3: { es:['Cosechar jóvenes (15–20 cm) — más tiernos y sin semillas duras.','Cosechar cada 2 días estimula nueva producción.'] },
    },

    companions: ['maiz','poroto','lechuga','rabanito'],
    avoid:      ['papa','tomate'],

    climate: { es:'Necesita calor estable. Zona central y central-sur. En el sur cultivar en invernadero.' },
    zones: ['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío'],

    uses: {
      culinary:    { es:'Ensaladas frescas, encurtidos en vinagre, jugos refrescantes, gazpacho.' },
      nutritional: { es:'95% agua. Vitamina K, potasio, antioxidantes suaves.' },
      medicinal:   { es:'Muy hidratante. Rodajas frías calman ojos cansados y piel irritada.' },
    },

    problems: [
      { es:'Oidio (polvo blanco en hojas) — ventilar, no mojar follaje, leche diluida 1:10 cada semana.' },
      { es:'Amargor en frutos por riego irregular o estrés hídrico — mantener humedad constante.' },
      { es:'Caída de flores por exceso de calor — sombrear parcialmente al mediodía.' },
    ],

    seeds: {
      when:    { es:'Dejar madurar un fruto en la planta hasta que se ponga amarillo y blando (Feb–Mar).' },
      how:     { es:'Cortar, extraer semillas, lavar bien removiendo la pulpa.' },
      drying:  { es:'Secar sobre papel a la sombra, una semana.' },
      storage: { es:'Sobre rotulado. Viabilidad 5–6 años.' },
      notes:   { es:'Cucurbitáceas se cruzan entre sí — aislar variedades si quieres semilla pura.' },
    },
  },

  {
    id: 'melon',
    category: 'fruta',
    rarity: 'tradicional',
    emoji: '🍈',
    name: { es:'Melón', fr:'Melon' },
    latin: 'Cucumis melo',
    family: { es:'Cucurbitáceas' },

    water: { es:'Moderado' },
    water_note: { es:'Riego abundante hasta el cuajado, luego reducir para concentrar dulzor.' },
    sun:   { es:'Pleno sol' },
    sun_hours: 8,
    spacing_cm: 100,
    height: { es:'Rastrero 2–3 m' },

    sow:  { es:'Sep–Nov (almácigo cálido)' },
    plant:{ es:'Oct–Dic' },
    harv: { es:'Feb–Mar' },
    sowM:   [0,0,0,0,0,0,0,0,1,1,1,0],
    plantM: [0,0,0,0,0,0,0,0,0,1,1,1],
    harvM:  [0,1,1,0,0,0,0,0,0,0,0,0],
    growth_days: 110,

    stages: [
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:10 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:25 },
      { id:'vine',   name:{es:'Crecimiento de guía'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:35 },
      { id:'fruit',  name:{es:'Engorde de fruto'}, icon:'🍈', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:40 },
    ],

    advice: {
      0: { es:['Germina a 22–25°C. No tolera frío.','Almácigo en septiembre para asegurar madurez antes de otoño.'] },
      1: { es:['Trasplantar con todo el cepellón intacto.','Endurecer 5 días antes de pasar a tierra firme.'] },
      2: { es:['Dejar correr las guías. Acolchar con paja para que el fruto no toque la tierra.','Pinchar la punta principal después del 4° fruto para canalizar energía.'] },
      3: { es:['Reducir riego en las últimas 2 semanas — concentra el dulzor.','Cosechar cuando el pedúnculo se desprende solo y huele dulce.'] },
    },

    companions: ['maiz','poroto','rabanito'],
    avoid:      ['papa','pepino'],

    climate: { es:'Veranos largos y cálidos. Mejor en RM, O\'Higgins, Maule (Tunche, Petorca tradicionalmente meloneros).' },
    zones: ['Coquimbo','Valparaíso','RM','O\'Higgins','Maule'],

    uses: {
      culinary:    { es:'Fresco, en macedonia, jugos, postres. Cáscara confitada en algunas tradiciones.' },
      nutritional: { es:'Vitamina A, C, potasio. Muy hidratante (90% agua).' },
      medicinal:   { es:'Refrescante natural — ideal en olas de calor.' },
    },

    problems: [
      { es:'Oidio en otoño — ventilar, leche diluida.' },
      { es:'Frutos insípidos por riego excesivo al final — reducir antes de cosechar.' },
      { es:'Pulgones bajo las hojas — purín de ortiga o agua jabonosa.' },
    ],

    seeds: {
      when:    { es:'De un fruto bien maduro y dulce, en plena temporada.' },
      how:     { es:'Cortar, extraer semillas con la pulpa, lavar bien.' },
      drying:  { es:'Secar sobre papel a la sombra, una semana.' },
      storage: { es:'Sobre rotulado. Viabilidad 5–6 años.' },
    },
  },

  {
    id: 'sandia',
    category: 'fruta',
    rarity: 'tradicional',
    emoji: '🍉',
    photo: 'photos/sandia.jpg',
    name: { es:'Sandía', fr:'Pastèque' },
    latin: 'Citrullus lanatus',
    family: { es:'Cucurbitáceas' },

    water: { es:'Moderado' },
    sun:   { es:'Pleno sol' },
    sun_hours: 8,
    spacing_cm: 120,
    height: { es:'Rastrero 3–5 m' },

    sow:  { es:'Sep–Nov (almácigo cálido)' },
    plant:{ es:'Oct–Dic' },
    harv: { es:'Feb–Abr' },
    sowM:   [0,0,0,0,0,0,0,0,1,1,1,0],
    plantM: [0,0,0,0,0,0,0,0,0,1,1,1],
    harvM:  [0,1,1,1,0,0,0,0,0,0,0,0],
    growth_days: 120,

    stages: [
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:10 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:25 },
      { id:'vine',   name:{es:'Crecimiento de guía'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:40 },
      { id:'fruit',  name:{es:'Engorde de fruto'}, icon:'🍉', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:45 },
    ],

    advice: {
      0: { es:['Germina a 25°C. Sembrar en septiembre para asegurar cosecha en febrero.','Mucho espacio: una planta ocupa 4–6 m².'] },
      1: { es:['Trasplantar con cuidado — odia ser molestada.','Endurecer antes de plantar.'] },
      2: { es:['Acolchar con paja para mantener el fruto seco y limpio.','Limitar a 2–3 frutos por planta para que crezcan grandes.'] },
      3: { es:['Cosechar cuando el zarcillo más cercano al fruto se seca.','El sonido hueco al golpear también indica madurez.'] },
    },

    companions: ['maiz','poroto','rabanito'],
    avoid:      ['papa'],

    climate: { es:'Veranos calurosos y largos. Ideal en zona central (Paine, Pomaire, Maule). En sur ciclo demasiado corto.' },
    zones: ['Coquimbo','Valparaíso','RM','O\'Higgins','Maule'],

    uses: {
      culinary:    { es:'Fresca en rebanadas, jugos, agua de sandía, ensaladas con menta.' },
      nutritional: { es:'92% agua. Licopeno, vitamina C, potasio.' },
      medicinal:   { es:'Hidratante, diurético natural. Tradicional en verano para refrescar.' },
    },

    problems: [
      { es:'Oidio — ventilar, leche diluida.' },
      { es:'Frutos pequeños por exceso de frutos por planta — eliminar los más débiles.' },
      { es:'Falta de polinización — sembrar flores cerca (caléndula, borraja).' },
    ],

    seeds: {
      when:    { es:'De un fruto maduro y dulce, semillas oscuras y llenas.' },
      how:     { es:'Extraer, lavar bien, separar las semillas planas y vacías (no germinan).' },
      drying:  { es:'Secar a la sombra una semana.' },
      storage: { es:'Sobre rotulado. Viabilidad 4–5 años.' },
    },
  },

  /* ───────────────────────────────────────────────── HIERBAS (continuación) */

  {
    id: 'oregano',
    category: 'hierba',
    rarity: 'comun',
    emoji: '🌿',
    photo: 'photos/oregano.jpg',
    name: { es:'Orégano', fr:'Origan' },
    latin: 'Origanum vulgare',
    family: { es:'Lamiáceas' },

    water: { es:'Bajo' },
    sun:   { es:'Pleno sol' },
    sun_hours: 7,
    spacing_cm: 30,
    height: { es:'30–60 cm' },

    sow:  { es:'Sep–Nov (esqueje preferentemente)' },
    plant:{ es:'Oct–Dic' },
    harv: { es:'Todo el año (más sabor en floración, Dic–Feb)' },
    sowM:   [0,0,0,0,0,0,0,0,1,1,1,0],
    plantM: [0,0,0,0,0,0,0,0,0,1,1,1],
    harvM:  [1,1,1,1,1,1,1,1,1,1,1,1],
    growth_days: 365,

    stages: [
      { id:'plant',  name:{es:'Instalación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:30 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)',   days:120 },
      { id:'harv',   name:{es:'Mata adulta'},   icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:215 },
    ],

    advice: {
      0: { es:['Multiplicación por esqueje o división — más rápido que semilla.','Suelo bien drenado, sin riego excesivo.'] },
      1: { es:['Pinchar las puntas para que ramifique.','Casi sin riego una vez establecida.'] },
      2: { es:['Cosechar las ramas en floración — máximo aroma.','Podar después de la flor para mantener la forma.','Perenne — vive 5–7 años.'] },
    },

    companions: ['tomate','pepino','repollo'],
    avoid:      [],

    climate: { es:'Mediterráneo (RM, Valparaíso, O\'Higgins). Soporta sequía y heladas suaves.' },
    zones: ['Todas las zonas excepto Magallanes'],

    uses: {
      culinary:    { es:'Pizzas, salsas de tomate, marinadas, asados, ensalada de tomate.' },
      nutritional: { es:'Hojas muy aromáticas, ricas en carvacrol y timol.' },
      medicinal:   { es:'Infusión digestiva tradicional. Hojas secas guardan su aroma muchos meses.' },
    },

    problems: [
      { es:'Pudrición por exceso de agua — drenaje, drenaje, drenaje.' },
      { es:'Pierde aroma en sombra — pleno sol obligatorio.' },
    ],

    seeds: {
      when:    { es:'En verano, cuando las espigas florales están secas.' },
      how:     { es:'Cortar espigas, secar bajo techo, frotar sobre tela.' },
      drying:  { es:'Ramos colgados boca abajo, lugar oscuro y ventilado, 2 semanas.' },
      storage: { es:'Hojas secas en frasco hermético. Viabilidad 3–4 años.' },
    },
  },

  {
    id: 'tomillo',
    category: 'hierba',
    rarity: 'tradicional',
    emoji: '🌿',
    photo: 'photos/tomillo.jpg',
    name: { es:'Tomillo', fr:'Thym' },
    latin: 'Thymus vulgaris',
    family: { es:'Lamiáceas' },

    water: { es:'Bajo' },
    sun:   { es:'Pleno sol' },
    sun_hours: 7,
    spacing_cm: 30,
    height: { es:'20–40 cm' },

    sow:  { es:'Sep–Nov (esqueje preferentemente)' },
    plant:{ es:'Sep–Dic' },
    harv: { es:'Todo el año' },
    sowM:   [0,0,0,0,0,0,0,0,1,1,1,0],
    plantM: [0,0,0,0,0,0,0,0,1,1,1,1],
    harvM:  [1,1,1,1,1,1,1,1,1,1,1,1],
    growth_days: 365,

    stages: [
      { id:'plant',  name:{es:'Instalación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:30 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)',   days:120 },
      { id:'mature', name:{es:'Mata adulta'},   icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:215 },
    ],

    advice: {
      0: { es:['Esqueje en primavera — cortar rama de 8 cm, enterrar la mitad en arena.','Suelo arenoso, calcáreo, muy drenado.'] },
      1: { es:['Casi sin riego. Pinchar puntas para densificar la mata.','Pleno sol obligatorio.'] },
      2: { es:['Cosechar ramas todo el año — más aroma en floración.','Renovar la mata cada 4 años (envejece y se vuelve leñosa).'] },
    },

    companions: ['repollo','brocoli','romero','lavanda'],
    avoid:      [],

    climate: { es:'Mediterráneo seco. RM, Valparaíso, O\'Higgins. En sur lluvioso necesita cantero alto y drenado.' },
    zones: ['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble'],

    uses: {
      culinary:    { es:'Asados, marinadas, sopas, papas al horno, conservas.' },
      nutritional: { es:'Vitamina C, A, hierro, manganeso. Aceites esenciales aromáticos.' },
      medicinal:   { es:'Infusión para tos y resfrío — uso tradicional muy difundido en Chile.' },
    },

    problems: [
      { es:'Pudrición de raíz por exceso de agua.' },
      { es:'Mata leñosa que ya no rebrota — renovar por esqueje.' },
    ],

    seeds: {
      when:    { es:'Raramente se cultiva por semilla — esqueje es mucho más fiable.' },
      how:     { es:'Si se siembra: semillas muy pequeñas, no cubrir.' },
      drying:  { es:'Ramos colgados boca abajo, lugar oscuro, 2 semanas.' },
      storage: { es:'Hojas secas en frasco hermético.' },
    },
  },

  {
    id: 'salvia',
    category: 'hierba',
    rarity: 'tradicional',
    emoji: '🌿',
    photo: 'photos/salvia.jpg',
    name: { es:'Salvia', fr:'Sauge' },
    latin: 'Salvia officinalis',
    family: { es:'Lamiáceas' },

    water: { es:'Bajo' },
    sun:   { es:'Pleno sol' },
    sun_hours: 7,
    spacing_cm: 50,
    height: { es:'40–70 cm' },

    sow:  { es:'Sep–Nov (esqueje preferentemente)' },
    plant:{ es:'Sep–Dic' },
    harv: { es:'Todo el año' },
    sowM:   [0,0,0,0,0,0,0,0,1,1,1,0],
    plantM: [0,0,0,0,0,0,0,0,1,1,1,1],
    harvM:  [1,1,1,1,1,1,1,1,1,1,1,1],
    growth_days: 365,

    stages: [
      { id:'plant',  name:{es:'Instalación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:40 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)',   days:150 },
      { id:'mature', name:{es:'Mata adulta'},   icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:175 },
    ],

    advice: {
      0: { es:['Esqueje en primavera, en sustrato arenoso.','Suelo bien drenado — odia el exceso de agua.'] },
      1: { es:['Riego escaso. Pinchar para densificar.','Pleno sol para concentrar aceites esenciales.'] },
      2: { es:['Cosechar hojas tiernas todo el año.','Podar después de la flor (Nov–Dic) para mantener compacta.','Renovar por esqueje cada 4–5 años.'] },
    },

    companions: ['tomate','repollo','romero','zanahoria'],
    avoid:      ['pepino'],

    climate: { es:'Mediterráneo. Resiste sequía y heladas. RM, Valparaíso, sur necesita drenaje.' },
    zones: ['Todas las zonas excepto Magallanes'],

    uses: {
      culinary:    { es:'Asados de cerdo, mantequilla aromatizada, pasta, infusiones.' },
      nutritional: { es:'Vitamina K, hierro, calcio. Aceites esenciales.' },
      medicinal:   { es:'Infusión tradicional para gargantas irritadas y digestión.' },
    },

    problems: [
      { es:'Pudrición por exceso de agua.' },
      { es:'Hojas amarillas por suelo pobre — añadir compost suave en primavera.' },
    ],

    seeds: {
      when:    { es:'En verano, cuando las espigas están secas.' },
      how:     { es:'Cortar espigas, secar, frotar.' },
      drying:  { es:'Ramos colgados boca abajo, lugar oscuro, 2 semanas.' },
      storage: { es:'Sobre rotulado. Viabilidad 3 años.' },
    },
  },

  /* ───────────────────────────────────────────────── HORTALIZAS DE HOJA Y RAÍZ (continuación) */

  {
    id: 'espinaca',
    category: 'hortaliza',
    rarity: 'comun',
    emoji: '🥬',
    photo: 'photos/espinaca.jpg',
    name: { es:'Espinaca', fr:'Épinard' },
    latin: 'Spinacia oleracea',
    family: { es:'Amarantáceas' },

    water: { es:'Regular' },
    sun:   { es:'Sol o semisombra' },
    sun_hours: 5,
    spacing_cm: 15,
    height: { es:'20–30 cm' },

    sow:  { es:'Mar–May y Ago–Sep (directo)' },
    harv: { es:'45–60 días post-siembra' },
    sowM:   [0,0,1,1,1,0,0,1,1,0,0,0],
    plantM: [0,0,0,0,0,0,0,0,0,0,0,0],
    harvM:  [1,1,0,1,1,1,1,1,0,0,1,1],
    growth_days: 55,

    stages: [
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:10 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:25 },
      { id:'harv',   name:{es:'Cosecha de hojas'}, icon:'🥬', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:20 },
    ],

    advice: {
      0: { es:['Sembrar directo, 1 cm de profundidad.','Prefiere fresco — evitar siembras en pleno verano.'] },
      1: { es:['Aclarar a 10–15 cm entre plantas.','Aporte de compost al mes.'] },
      2: { es:['Cosechar hojas exteriores cuando midan 10 cm.','Subir a flor con calor — cosechar todo antes y resembrar en otoño.'] },
    },

    companions: ['frutilla','rabanito','zanahoria','apio'],
    avoid:      ['betarraga'],

    climate: { es:'Prefiere otoño-invierno-primavera. Todo Chile excepto verano de zona norte.' },
    zones: ['Todas las zonas'],

    uses: {
      culinary:    { es:'Ensaladas, tortillas, lasaña, empanadas, sopas cremosas.' },
      nutritional: { es:'Hoja verde nutritiva, conocida por su aporte de hierro y ácido fólico.' },
      medicinal:   { es:'Aporte tradicional de hierro vegetal. La vitamina C en la misma comida ayuda su absorción.' },
    },

    problems: [
      { es:'Subida a flor (bolting) con calor — sembrar en estación fresca.' },
      { es:'Mildiu en clima húmedo — ventilar, no mojar follaje.' },
    ],

    seeds: {
      when:    { es:'Dejar una planta subir a flor. Las semillas (con espinas) maduran en 2 meses.' },
      how:     { es:'Cortar planta entera, dejar secar bajo techo, golpear sobre tela.' },
      drying:  { es:'Una semana al sol.' },
      storage: { es:'Sobre rotulado. Viabilidad 3–4 años.' },
    },
  },

  {
    id: 'rucula',
    category: 'hortaliza',
    rarity: 'tradicional',
    emoji: '🥬',
    name: { es:'Rúcula', fr:'Roquette' },
    latin: 'Eruca sativa',
    family: { es:'Brasicáceas' },

    water: { es:'Regular' },
    sun:   { es:'Sol o semisombra' },
    sun_hours: 5,
    spacing_cm: 15,
    height: { es:'20–40 cm' },

    sow:  { es:'Mar–May y Ago–Oct (directo)' },
    harv: { es:'40 días post-siembra' },
    sowM:   [0,0,1,1,1,0,0,1,1,1,0,0],
    plantM: [0,0,0,0,0,0,0,0,0,0,0,0],
    harvM:  [1,1,0,1,1,1,1,1,0,1,1,1],
    growth_days: 45,

    stages: [
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:5 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:20 },
      { id:'harv',   name:{es:'Cosecha'},      icon:'🥬', color:'#DCEDD3', bg:'rgba(59,88,56,.10)',   days:20 },
    ],

    advice: {
      0: { es:['Germina rápido, 3–5 días. Sembrar directo al voleo.','Mejor en estación fresca — sube a flor rápido con calor.'] },
      1: { es:['Aclarar a 10 cm si las plantas están muy juntas.','Riego regular para evitar amargor.'] },
      2: { es:['Cosechar hojas tiernas desde los 25 días — más suaves.','Resembrar cada 3 semanas para tener cosecha continua.'] },
    },

    companions: ['lechuga','frutilla','zanahoria','apio'],
    avoid:      [],

    climate: { es:'Crece todo el año en clima templado. Mejor sabor en estación fresca.' },
    zones: ['Todas las zonas'],

    uses: {
      culinary:    { es:'Ensaladas, pizzas, pesto picante, sándwiches.' },
      nutritional: { es:'Hoja picante con buen aporte de vitamina C, hierro y calcio.' },
      medicinal:   { es:'Digestiva, depurativa. Compuestos picantes (glucosinolatos).' },
    },

    problems: [
      { es:'Pulgones en hojas — agua jabonosa, lavar bien antes de comer.' },
      { es:'Hojas amargas por calor o sequía — cosechar antes de la floración.' },
    ],

    seeds: {
      when:    { es:'Dejar una planta florecer y producir vainas. Cuando estén secas, recolectar.' },
      how:     { es:'Cortar vainas secas, abrir y separar semillas.' },
      drying:  { es:'Una semana al sol.' },
      storage: { es:'Sobre rotulado. Viabilidad 4 años. Se auto-siembra fácilmente.' },
    },
  },

  {
    id: 'apio',
    category: 'hortaliza',
    rarity: 'comun',
    emoji: '🌿',
    photo: 'photos/apio.jpg',
    name: { es:'Apio', fr:'Céleri' },
    latin: 'Apium graveolens',
    family: { es:'Apiáceas' },

    water: { es:'Alto' },
    water_note: { es:'Suelo siempre húmedo. Es una planta de origen palustre.' },
    sun:   { es:'Sol o semisombra' },
    sun_hours: 5,
    spacing_cm: 25,
    height: { es:'40–60 cm' },

    sow:  { es:'Ago–Oct (almácigo)' },
    plant:{ es:'Oct–Nov' },
    harv: { es:'Feb–May' },
    sowM:   [0,0,0,0,0,0,0,1,1,1,0,0],
    plantM: [0,0,0,0,0,0,0,0,0,1,1,0],
    harvM:  [0,1,1,1,1,0,0,0,0,0,0,0],
    growth_days: 150,

    stages: [
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:20 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:55 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)',   days:75 },
    ],

    advice: {
      0: { es:['Germinación muy lenta — hasta 3 semanas. No cubrir la semilla.','Sustrato siempre húmedo.'] },
      1: { es:['Trasplantar con 5–6 hojas, en suelo rico y bien regado.','Aporte de compost cada 4 semanas.'] },
      2: { es:['Aporcar (tapar parcialmente con tierra) blanquea los tallos.','Cosechar tallos exteriores conforme se necesite, o la mata entera al cuarto mes.'] },
    },

    companions: ['repollo','tomate','puerro','brocoli'],
    avoid:      ['perejil','papa'],

    climate: { es:'Prefiere clima templado húmedo. Bien adaptado a Maule, Biobío, Araucanía, Los Lagos.' },
    zones: ['Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],

    uses: {
      culinary:    { es:'Cazuelas, caldos, ensaladas, jugos verdes, mirepoix.' },
      nutritional: { es:'Vitamina K, folato, potasio. Bajo en calorías.' },
      medicinal:   { es:'Diurético natural. Tradicionalmente para presión arterial.' },
    },

    problems: [
      { es:'Tallos huecos por falta de riego — humedad constante esencial.' },
      { es:'Hojas amargas en suelo pobre — añadir compost.' },
      { es:'Babosas — proteger con ceniza alrededor.' },
    ],

    seeds: {
      when:    { es:'Al 2° año (bianual). Umbelas con semillas marrones diminutas.' },
      how:     { es:'Cortar umbelas secas, frotar sobre tela fina.' },
      drying:  { es:'Una semana al sol.' },
      storage: { es:'Sobre rotulado. Viabilidad 5 años.' },
    },
  },

  {
    id: 'rabanito',
    category: 'hortaliza',
    rarity: 'comun',
    emoji: '🌱',
    photo: 'photos/rabanito.jpg',
    name: { es:'Rabanito', fr:'Radis' },
    latin: 'Raphanus sativus',
    family: { es:'Brasicáceas' },

    water: { es:'Regular' },
    sun:   { es:'Sol o semisombra' },
    sun_hours: 5,
    spacing_cm: 5,
    height: { es:'15–25 cm' },

    sow:  { es:'Mar–May y Ago–Nov (directo, escalonado)' },
    harv: { es:'25–35 días post-siembra' },
    sowM:   [0,0,1,1,1,0,0,1,1,1,1,0],
    plantM: [0,0,0,0,0,0,0,0,0,0,0,0],
    harvM:  [1,1,1,1,1,1,0,0,1,1,1,1],
    growth_days: 30,

    stages: [
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:5 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:10 },
      { id:'root',   name:{es:'Engrosamiento'}, icon:'🌱', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:15 },
    ],

    advice: {
      0: { es:['Germina en 3–5 días. Sembrar directo, 1 cm de profundidad.','Resembrar cada 2 semanas — cosecha continua.'] },
      1: { es:['Aclarar a 5 cm si las plantas están muy juntas.','Riego regular evita que se vuelvan picantes y duros.'] },
      2: { es:['Cosechar cuando la raíz mide 2 cm — más tierna y suave.','No dejar mucho tiempo: se vuelven leñosos y huecos.'] },
    },

    companions: ['lechuga','zanahoria','espinaca','pepino'],
    avoid:      [],

    climate: { es:'Crece bien en todo Chile, en cualquier estación excepto pleno verano.' },
    zones: ['Todas las zonas'],

    uses: {
      culinary:    { es:'Ensaladas, encurtidos, sándwiches, decoración. Hojas también comestibles.' },
      nutritional: { es:'Vitamina C, folato, potasio. Bajo en calorías.' },
      medicinal:   { es:'Suavemente digestivo. Estimula apetito.' },
    },

    problems: [
      { es:'Pulguilla (hojas con perforaciones) — malla anti-insectos, ajo cercano.' },
      { es:'Raíces leñosas o picantes — sembrar en estación fresca, riego regular.' },
    ],

    seeds: {
      when:    { es:'Dejar una planta subir a flor y producir vainas. Cuando estén secas, recolectar.' },
      how:     { es:'Abrir vainas, extraer semillas redondas color marrón.' },
      drying:  { es:'Tres días al sol.' },
      storage: { es:'Sobre rotulado. Viabilidad 4–5 años.' },
    },
  },

  /* ───────────────────────────────────────────────── CRUCÍFERAS */

  {
    id: 'repollo',
    category: 'hortaliza',
    rarity: 'comun',
    emoji: '🥬',
    name: { es:'Repollo', fr:'Chou' },
    latin: 'Brassica oleracea var. capitata',
    family: { es:'Brasicáceas' },
    varieties: { es:'Repollo liso, repollo crespo, repollo morado' },

    water: { es:'Regular' },
    sun:   { es:'Pleno sol' },
    sun_hours: 6,
    spacing_cm: 45,
    height: { es:'30–40 cm' },

    sow:  { es:'Ene–Mar (almácigo) y Jul–Sep' },
    plant:{ es:'Mar–Abr y Sep–Oct' },
    harv: { es:'Jun–Sep y Dic–Ene' },
    sowM:   [1,1,1,0,0,0,1,1,1,0,0,0],
    plantM: [0,0,1,1,0,0,0,0,1,1,0,0],
    harvM:  [1,1,0,0,0,1,1,1,1,0,0,1],
    growth_days: 110,

    stages: [
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:7 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:35 },
      { id:'growth', name:{es:'Formación de hojas'}, icon:'🥬', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:38 },
      { id:'head',   name:{es:'Formación de cabeza'}, icon:'🥬', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:30 },
    ],

    advice: {
      0: { es:['Germina rápido en almácigo cubierto.','Mantener a media sombra los primeros días.'] },
      1: { es:['Trasplantar con 4–6 hojas verdaderas.','Aporte de compost al trasplantar.'] },
      2: { es:['Aporte semanal de purín de ortiga para hojas vigorosas.','Acolchar para conservar humedad y reducir malezas.'] },
      3: { es:['Cosechar cuando la cabeza está firme al apretarla.','No esperar demasiado o se raja.'] },
    },

    companions: ['cebolla','apio','manzanilla','tomillo','salvia'],
    avoid:      ['frutilla','tomate'],

    climate: { es:'Resiste fríos. Bien adaptado en Maule, Biobío, Araucanía. En el sur (Chiloé) variedades patrimoniales bien conservadas.' },
    zones: ['Todas las zonas excepto desértico'],

    uses: {
      culinary:    { es:'Ensalada chilena de repollo, chucrut, rollitos, sopas, cazuela.' },
      nutritional: { es:'Vitamina C, K, fibra, glucosinolatos. Muy nutritivo.' },
      medicinal:   { es:'Tradicional para gastritis (hoja cruda machacada). Antioxidante.' },
    },

    problems: [
      { es:'Mariposa de la col (gusanos verdes en hojas) — malla, plantas aromáticas cerca, recogida manual.' },
      { es:'Hernia de la col (deformación de raíces) — rotar cada 4 años, suelo no ácido.' },
      { es:'Pulgones — agua jabonosa.' },
    ],

    seeds: {
      when:    { es:'Al 2° año (bianual). Vainas largas con semillas redondas oscuras.' },
      how:     { es:'Cortar vainas secas, abrir, separar semillas.' },
      drying:  { es:'Una semana al sol.' },
      storage: { es:'Sobre rotulado. Viabilidad 4–5 años. Cuidado con cruces entre brasicáceas.' },
    },
  },

  {
    id: 'brocoli',
    category: 'hortaliza',
    rarity: 'comun',
    emoji: '🥦',
    photo: 'photos/brocoli.jpg',
    name: { es:'Brócoli', fr:'Brocoli' },
    latin: 'Brassica oleracea var. italica',
    family: { es:'Brasicáceas' },

    water: { es:'Regular' },
    sun:   { es:'Pleno sol' },
    sun_hours: 6,
    spacing_cm: 50,
    height: { es:'50–70 cm' },

    sow:  { es:'Ene–Feb (almácigo de verano para cosecha otoñal)' },
    plant:{ es:'Mar–Abr' },
    harv: { es:'Jul–Sep' },
    sowM:   [1,1,0,0,0,0,0,0,0,0,0,0],
    plantM: [0,0,1,1,0,0,0,0,0,0,0,0],
    harvM:  [0,0,0,0,0,0,1,1,1,0,0,0],
    growth_days: 100,

    stages: [
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:7 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:30 },
      { id:'growth', name:{es:'Desarrollo'},   icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)',   days:40 },
      { id:'head',   name:{es:'Formación de cabeza'}, icon:'🥦', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:23 },
    ],

    advice: {
      0: { es:['Sembrar en bandeja con sustrato suelto.','Proteger del calor extremo del verano.'] },
      1: { es:['Trasplantar con 4–5 hojas verdaderas, suelo rico.','Riego regular, acolchado para retener humedad.'] },
      2: { es:['Aporte de compost o purín cada 3 semanas.','Vigilar mariposas blancas — recoger orugas a mano.'] },
      3: { es:['Cosechar cuando los floretes están bien apretados y antes de que se abran las flores amarillas.','Después de la cabeza central salen retoños laterales — segunda cosecha.'] },
    },

    companions: ['cebolla','apio','manzanilla','tomillo'],
    avoid:      ['frutilla','tomate'],

    climate: { es:'Prefiere fresco. Ideal otoño-invierno en zona central. En sur ciclo más largo pero exitoso.' },
    zones: ['Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],

    uses: {
      culinary:    { es:'Al vapor, en cremas, salteados, tortillas, gratinados.' },
      nutritional: { es:'Buena fuente de vitamina C, folato y fibra.' },
      medicinal:   { es:'Crucífero — propiedades antioxidantes y antiinflamatorias reconocidas.' },
    },

    problems: [
      { es:'Mariposa de la col (orugas verdes) — malla anti-insectos.' },
      { es:'Cabeza pequeña por falta de riego o compost — alimentación regular.' },
      { es:'Floración prematura (amarilla) por calor — cosechar de inmediato.' },
    ],

    seeds: {
      when:    { es:'Bianual. Dejar una planta florecer y producir vainas alargadas.' },
      how:     { es:'Cortar vainas secas, abrir y separar semillas redondas.' },
      drying:  { es:'Una semana al sol.' },
      storage: { es:'Sobre rotulado. Viabilidad 4 años. Cuidado con cruces entre brasicáceas.' },
    },
  },

  {
    id: 'coliflor',
    category: 'hortaliza',
    rarity: 'comun',
    emoji: '🥦',
    photo: 'photos/coliflor.jpg',
    name: { es:'Coliflor', fr:'Chou-fleur' },
    latin: 'Brassica oleracea var. botrytis',
    family: { es:'Brasicáceas' },

    water: { es:'Regular' },
    sun:   { es:'Pleno sol' },
    sun_hours: 6,
    spacing_cm: 50,
    height: { es:'40–60 cm' },

    sow:  { es:'Ene–Feb (almácigo)' },
    plant:{ es:'Mar–Abr' },
    harv: { es:'Jul–Sep' },
    sowM:   [1,1,0,0,0,0,0,0,0,0,0,0],
    plantM: [0,0,1,1,0,0,0,0,0,0,0,0],
    harvM:  [0,0,0,0,0,0,1,1,1,0,0,0],
    growth_days: 120,

    stages: [
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:7 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:35 },
      { id:'growth', name:{es:'Desarrollo'},   icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)',   days:50 },
      { id:'head',   name:{es:'Formación de cabeza'}, icon:'🥦', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:28 },
    ],

    advice: {
      0: { es:['Almácigo con sustrato suelto, semilla fina.','Proteger de calor extremo.'] },
      1: { es:['Trasplantar con 5 hojas. Suelo profundo, rico, bien drenado.','Aporte de compost al trasplantar.'] },
      2: { es:['Riego regular sin encharcar.','Cuando aparece la cabeza, doblar 2 hojas exteriores para protegerla del sol y mantenerla blanca.'] },
      3: { es:['Cosechar cuando la cabeza está firme y compacta.','No demorar — si se "afloja" se separan los floretes.'] },
    },

    companions: ['cebolla','apio','manzanilla','tomillo'],
    avoid:      ['frutilla','tomate'],

    climate: { es:'Prefiere fresco. Maule, Biobío, Araucanía son excelentes. En zona norte solo en otoño-invierno.' },
    zones: ['Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],

    uses: {
      culinary:    { es:'Al vapor, en cremas, gratinada, en arroz tipo "coliarroz".' },
      nutritional: { es:'Liviana y nutritiva. Buen aporte de vitamina C y folato.' },
      medicinal:   { es:'Crucífero rico en antioxidantes (indoles, sulforafano).' },
    },

    problems: [
      { es:'Cabezas grumosas o amarillentas por exceso de sol — atar hojas para protegerla.' },
      { es:'Mariposa de la col — malla, recogida manual.' },
      { es:'Hernia de la col (deformación de raíces) — rotar cada 4 años, no plantar tras otras brasicáceas.' },
    ],

    seeds: {
      when:    { es:'Bianual, raramente se conserva — más fácil comprar plantines.' },
      how:     { es:'Si florece, vainas alargadas con semillas redondas.' },
      drying:  { es:'Una semana al sol.' },
      storage: { es:'Sobre rotulado. Viabilidad 4 años.' },
    },
  },

  /* ───────────────────────────────────────────────── LEGUMINOSAS */

  {
    id: 'haba',
    category: 'hortaliza',
    rarity: 'tradicional',
    emoji: '🫘',
    name: { es:'Haba', fr:'Fève' },
    latin: 'Vicia faba',
    family: { es:'Fabáceas' },

    water: { es:'Moderado' },
    sun:   { es:'Pleno sol' },
    sun_hours: 6,
    spacing_cm: 20,
    height: { es:'80 cm – 1,5 m' },

    sow:  { es:'Abr–Jun (siembra otoño-invierno)' },
    harv: { es:'Oct–Dic' },
    sowM:   [0,0,0,1,1,1,0,0,0,0,0,0],
    plantM: [0,0,0,0,0,0,0,0,0,0,0,0],
    harvM:  [0,0,0,0,0,0,0,0,0,1,1,1],
    growth_days: 180,

    stages: [
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:10 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:50 },
      { id:'flower', name:{es:'Floración'},    icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:30 },
      { id:'pod',    name:{es:'Formación de vainas'}, icon:'🫘', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:90 },
    ],

    advice: {
      0: { es:['Sembrar directo, 4 cm de profundidad.','Soporta heladas suaves — clásica de invierno chileno.'] },
      1: { es:['Tutorar con cañas o malla — la mata crece alta y se desploma con viento.','Aporte de compost al inicio.'] },
      2: { es:['Pinchar los brotes terminales al iniciar floración — favorece cuajado y aleja pulgones.','Polinización por abejas.'] },
      3: { es:['Cosechar vainas tiernas para "habas verdes", o esperar madurez total para semilla seca.','Las primeras cosechas son las más tiernas.'] },
    },

    companions: ['zanahoria','lechuga','apio','espinaca'],
    avoid:      ['ajo','cebolla','puerro'],

    climate: { es:'Cultivo tradicional chileno de invierno. Crece muy bien en RM, O\'Higgins, Maule, Biobío.' },
    zones: ['Todas las zonas excepto desértico'],

    uses: {
      culinary:    { es:'Sopa de habas, habas con tocino, hummus de habas, ensaladas. Cocina tradicional chilena.' },
      nutritional: { es:'Excelente fuente de proteína vegetal y hierro. Tradicional en la primavera chilena.' },
      medicinal:   { es:'Mejora la tierra fijando nitrógeno (cultivo abono verde).' },
    },

    problems: [
      { es:'Pulgones negros en las puntas — pinchar las puntas elimina la mayoría.' },
      { es:'Roya (manchas anaranjadas) — ventilación y rotación.' },
      { es:'Helada fuerte daña las plantas jóvenes — cubrir si baja de -3°C.' },
    ],

    seeds: {
      when:    { es:'Dejar madurar y secar las últimas vainas en la planta.' },
      how:     { es:'Cosechar vainas secas y abrirlas — las semillas grandes son fáciles de extraer.' },
      drying:  { es:'Tres días al sol después de extraer.' },
      storage: { es:'Frasco hermético en lugar fresco. Congelar 48h previene gorgojo. Viabilidad 5 años.' },
    },
  },

  {
    id: 'arveja',
    category: 'hortaliza',
    rarity: 'tradicional',
    emoji: '🫛',
    photo: 'photos/arveja.jpg',
    name: { es:'Arveja', fr:'Petit pois' },
    latin: 'Pisum sativum',
    family: { es:'Fabáceas' },

    water: { es:'Moderado' },
    sun:   { es:'Pleno sol' },
    sun_hours: 6,
    spacing_cm: 8,
    height: { es:'50 cm (enana) hasta 1,8 m (trepadora)' },

    sow:  { es:'May–Jul (siembra invierno)' },
    harv: { es:'Oct–Dic' },
    sowM:   [0,0,0,0,1,1,1,0,0,0,0,0],
    plantM: [0,0,0,0,0,0,0,0,0,0,0,0],
    harvM:  [0,0,0,0,0,0,0,0,0,1,1,1],
    growth_days: 90,

    stages: [
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:8 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:30 },
      { id:'flower', name:{es:'Floración'},    icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:20 },
      { id:'pod',    name:{es:'Vainas'},       icon:'🫛', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:32 },
    ],

    advice: {
      0: { es:['Sembrar directo, 3 cm de profundidad. Mejor en suelo fresco.','Inocular con bacterias fijadoras de nitrógeno mejora la cosecha.'] },
      1: { es:['Variedades trepadoras: tutor de malla o cañas, 1,5 m.','Riego regular sin encharcar.'] },
      2: { es:['Polinización por insectos — favorecer flores compañeras.','No mojar las flores con riego.'] },
      3: { es:['Cosechar vainas bien llenas pero aún verdes y tiernas.','Cosechar cada 2–3 días estimula nueva producción.'] },
    },

    companions: ['zanahoria','lechuga','repollo','rabanito'],
    avoid:      ['ajo','cebolla','puerro'],

    climate: { es:'Cultivo tradicional chileno de invierno-primavera. Resiste heladas suaves.' },
    zones: ['Todas las zonas excepto desértico'],

    uses: {
      culinary:    { es:'Cazuela, charquicán, ensaladas, sopas, salteados.' },
      nutritional: { es:'Buena fuente de proteína vegetal y fibra. Vainas tiernas, ricas en folato.' },
      medicinal:   { es:'Mejora la tierra fijando nitrógeno (cultivo de cobertura).' },
    },

    problems: [
      { es:'Oidio en clima húmedo cálido — variedades resistentes, ventilación.' },
      { es:'Pulgones — pinchar las puntas, agua jabonosa.' },
      { es:'Vainas vacías por calor excesivo o sequía durante floración.' },
    ],

    seeds: {
      when:    { es:'Dejar madurar y secar las últimas vainas en la planta.' },
      how:     { es:'Abrir vainas secas, extraer semillas redondas.' },
      drying:  { es:'Tres días al sol.' },
      storage: { es:'Frasco hermético. Congelar 48h previene gorgojo. Viabilidad 3–4 años.' },
    },
  },

  /* ───────────────────────────────────────────────── TUBÉRCULOS */

  {
    id: 'papa',
    category: 'hortaliza',
    rarity: 'comun',
    emoji: '🥔',
    photo: 'photos/papa.jpg',
    name: { es:'Papa', fr:'Pomme de terre' },
    latin: 'Solanum tuberosum',
    family: { es:'Solanáceas' },
    heritage: true,
    varieties: { es:'Variedades chilotas: Michuñe, Bruja, Cabrita, Mariposa (más de 200 variedades nativas)' },

    water: { es:'Moderado' },
    water_note: { es:'Suelo fresco, no encharcado. Reducir antes de cosecha.' },
    sun:   { es:'Pleno sol' },
    sun_hours: 6,
    spacing_cm: 35,
    height: { es:'40–80 cm' },

    sow:  { es:'Ago–Oct (plantar tubérculos brotados)' },
    plant:{ es:'Sep–Nov' },
    harv: { es:'Dic–Mar' },
    sowM:   [0,0,0,0,0,0,0,1,1,1,0,0],
    plantM: [0,0,0,0,0,0,0,0,1,1,1,0],
    harvM:  [1,1,1,0,0,0,0,0,0,0,0,1],
    growth_days: 110,

    stages: [
      { id:'plant',  name:{es:'Brotación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:15 },
      { id:'growth', name:{es:'Desarrollo foliar'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:35 },
      { id:'flower', name:{es:'Floración'}, icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:25 },
      { id:'tuber',  name:{es:'Engorde de tubérculos'}, icon:'🥔', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:35 },
    ],

    advice: {
      0: { es:['Usar tubérculos brotados (papa-semilla), enterrar 10 cm.','Suelo profundo, mullido, ligeramente ácido.'] },
      1: { es:['Aporcar (tapar con tierra) cuando la planta alcance 20 cm — favorece más tubérculos.','Repetir aporque cada 3 semanas.'] },
      2: { es:['Riego regular durante floración — etapa crítica.','No mojar follaje (tizón).'] },
      3: { es:['Suspender riego cuando el follaje amarillea.','Cosechar tras 2 semanas de seguir secándose.','Curar al aire en sombra antes de guardar.'] },
    },

    companions: ['maiz','poroto','repollo','rabanito'],
    avoid:      ['tomate','pepino','sandia','melon','zapallo'],

    climate: { es:'Origen chileno (Chiloé es centro de diversidad mundial). Crece en todo Chile, especialmente Maule, Biobío, Araucanía, Los Lagos.' },
    zones: ['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],

    uses: {
      culinary:    { es:'Pilar de la cocina chilena: papas mayo, milcao, chapaleles, cazuela, puré, fritas.' },
      nutritional: { es:'Carbohidrato complejo, vitamina C, B6, potasio. Energía estable.' },
      medicinal:   { es:'Almidón calmante para piel irritada (rodajas frescas).' },
    },

    problems: [
      { es:'Tizón tardío (Phytophthora) — el peor enemigo. Ventilar, no mojar follaje, eliminar plantas afectadas.' },
      { es:'Polilla de la papa — rotar cultivo, aporcar bien.' },
      { es:'Tubérculos verdes por exposición al sol — aporcar para cubrirlos.' },
    ],

    seeds: {
      when:    { es:'Se multiplica por tubérculo (papa-semilla). Las flores producen frutos verdes tóxicos no útiles para reproducción casera.' },
      how:     { es:'Guardar las papas más sanas y medianas. Brotarlas en lugar oscuro fresco 4–6 semanas antes de plantar.' },
      drying:  { es:'No aplica — conservar las papas-semilla en arena fresca.' },
      storage: { es:'Lugar oscuro, fresco, ventilado. Variedades patrimoniales se conservan tradicionalmente en Chiloé.' },
      notes:   { es:'Chile es el origen genético de la papa. Conservar variedades nativas es preservar un patrimonio mundial.' },
    },
  },

  /* ───────────────────────────────────────────────── FLORES (continuación) */

  {
    id: 'calendula',
    category: 'flor',
    rarity: 'tradicional',
    emoji: '🌼',
    photo: 'photos/calendula.jpg',
    name: { es:'Caléndula', fr:'Souci' },
    latin: 'Calendula officinalis',
    family: { es:'Asteráceas' },

    water: { es:'Moderado' },
    sun:   { es:'Pleno sol' },
    sun_hours: 6,
    spacing_cm: 25,
    height: { es:'30–60 cm' },

    sow:  { es:'Mar–Abr y Sep–Oct (directo o almácigo)' },
    plant:{ es:'Abr–May y Oct–Nov' },
    harv: { es:'Jul–Dic (flores en sucesión continua)' },
    sowM:   [0,0,1,1,0,0,0,0,1,1,0,0],
    plantM: [0,0,0,1,1,0,0,0,0,1,1,0],
    harvM:  [1,1,1,0,0,0,1,1,1,1,1,1],
    growth_days: 70,

    stages: [
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:8 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:22 },
      { id:'flower', name:{es:'Floración continua'}, icon:'🌼', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:40 },
    ],

    advice: {
      0: { es:['Sembrar directo o en bandeja. Germina rápido (7–10 días).','Muy rústica — crece en suelos pobres.'] },
      1: { es:['Aclarar a 25 cm. Tolera trasplante bien.','Casi sin requerimientos especiales.'] },
      2: { es:['Cosechar flores frescas cada 2 días para prolongar la floración.','Atrae abejas, mariposas y sírfidos — ideal cerca del huerto.','Auto-semilla: aparecen nuevas plantas año tras año.'] },
    },

    companions: ['tomate','lechuga','brocoli','frutilla','sandia'],
    avoid:      [],

    climate: { es:'Muy rústica. Crece en todo Chile excepto desérticos extremos.' },
    zones: ['Todas las zonas excepto Atacama y Arica'],

    uses: {
      culinary:    { es:'Pétalos en ensaladas, infusiones, arroz amarillo (sustituto del azafrán).' },
      nutritional: { es:'Pétalos ricos en flavonoides y carotenoides.' },
      medicinal:   { es:'Uso tradicional para piel irritada, quemaduras leves, heridas pequeñas (crema o infusión externa).' },
    },

    problems: [
      { es:'Pulgones — auto-resistente la mayoría del tiempo.' },
      { es:'Oidio en clima muy húmedo — ventilar.' },
    ],

    seeds: {
      when:    { es:'Las flores producen semillas curvas en cuanto se secan, en pocas semanas.' },
      how:     { es:'Recolectar cabezuelas secas, separar las semillas grandes y curvas.' },
      drying:  { es:'Tres días al sol después de extraer.' },
      storage: { es:'Sobre rotulado. Viabilidad 3–4 años. Generosa en semillas, fácil de compartir.' },
    },
  },

  /* ═══════════════════════════════════════════════════════════
     PLANTAS NUEVAS — añadidas en sprint de expansión
     Ordenadas por "commonness" en la huerta chilena:
       comun  →  tradicional  →  patrimonial  →  raro
     ═══════════════════════════════════════════════════════════ */

  /* ─── COMUN ─── plantas que casi todo el mundo conoce o cultiva */

  {
    id:'choclo', category:'hortaliza', rarity:'comun', emoji:'🌽',
    photo: 'photos/choclo.jpg',
    name:{es:'Choclo', fr:'Maïs'}, latin:'Zea mays', family:{es:'Poáceas'},
    water:{es:'Alto'}, sun:{es:'Pleno sol'}, sun_hours:8, spacing_cm:30, height:{es:'1,5–2,5 m'},
    sow:{es:'Sep–Nov (directo a tierra cálida)'}, harv:{es:'Feb–Abr'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[0,1,1,1,0,0,0,0,0,0,0,0],
    growth_days:120,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:8 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)',   days:60 },
      { id:'flower', name:{es:'Polinización'}, icon:'🌾', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:22 },
      { id:'fruit',  name:{es:'Mazorca'},      icon:'🌽', color:'#FBE9E7', bg:'rgba(181,90,40,.12)',  days:30 },
    ],
    advice:{
      0:{es:['Sembrar en bloques cuadrados (no en filas largas) para mejor polinización.','Suelo cálido, abonado con compost.']},
      1:{es:['Aporcar al pie cuando alcance 40 cm para fortalecer la mata.','Riego abundante, especialmente en floración.']},
      2:{es:['Las barbas marrones indican que cuajaron los granos.','No mojar las flores con riego — perjudica la polinización.']},
      3:{es:['Cosechar cuando los granos sueltan leche al apretarlos.','Mejor sabor recién cosechado, los azúcares se transforman rápido.']},
    },
    companions:['poroto_verde','poroto_granado','zapallo','sandia','melon'],
    avoid:['tomate'],
    climate:{es:'Verano cálido. Tradicional en RM, O\'Higgins, Maule. El "humita" y la "pastel de choclo" son cocina chilena pura.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía'],
    uses:{
      culinary:{es:'Humitas, pastel de choclo, cazuela, choclo cocido con mantequilla.'},
      nutritional:{es:'Energético, con fibra y vitamina B.'},
      medicinal:{es:'Las barbas se usan en infusiones tradicionales como diurético suave.'},
    },
    problems:[
      {es:'Gusano del choclo (Heliothis) — revisar mazorcas, recogida manual.'},
      {es:'Mazorcas con huecos por mala polinización — sembrar en bloques.'},
    ],
    seeds:{
      when:{es:'Dejar madurar y secar algunas mazorcas en la planta hasta marzo-abril.'},
      how:{es:'Desgranar la mazorca seca, conservar los granos del centro (los mejores).'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Frasco hermético. Congelar 48h previene gorgojo. Viabilidad 3–4 años.'},
      notes:{es:'Variedades chilenas tradicionales: maíz lluteño, maíz culli (morado), maíz harinero del sur.'},
    },
  },

  {
    id:'berenjena', category:'hortaliza', rarity:'comun', emoji:'🍆',
    name:{es:'Berenjena', fr:'Aubergine'}, latin:'Solanum melongena', family:{es:'Solanáceas'},
    water:{es:'Regular'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:60, height:{es:'80 cm – 1 m'},
    sow:{es:'Ago–Sep (almácigo cálido)'}, plant:{es:'Oct–Nov'}, harv:{es:'Ene–Abr'},
    sowM:[0,0,0,0,0,0,0,1,1,0,0,0], plantM:[0,0,0,0,0,0,0,0,0,1,1,0], harvM:[1,1,1,1,0,0,0,0,0,0,0,0],
    growth_days:130,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:14 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:36 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)',   days:40 },
      { id:'fruit',  name:{es:'Cosecha'},      icon:'🍆', color:'#FBE9E7', bg:'rgba(181,90,40,.12)',  days:40 },
    ],
    advice:{
      0:{es:['Germinación lenta, 12–14 días a 22–25°C.','Almácigo bajo cubierta — sensible al frío.']},
      1:{es:['Trasplantar con 5 hojas, después de las heladas.','Acolchar para mantener el suelo cálido.']},
      2:{es:['Tutorar — las ramas se quiebran con frutos pesados.','Riego regular, suelo bien drenado.']},
      3:{es:['Cosechar firmes y brillantes, antes que aparezcan semillas duras.','Cosechar con tijeras — el pedúnculo es duro.']},
    },
    companions:['tomate','pimenton','poroto_verde','albahaca'],
    avoid:['hinojo'],
    climate:{es:'Necesita calor estable. Bien adaptada en zona central. En el sur conviene invernadero.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble'],
    uses:{
      culinary:{es:'Asada, rellena, en guisos, conservas en aceite, tortilla.'},
      nutritional:{es:'Fibra, antioxidantes en la piel morada. Baja en calorías.'},
      medicinal:{es:'Tradicionalmente apreciada por su efecto suave en la digestión.'},
    },
    problems:[
      {es:'Pulgones bajo hojas — agua jabonosa.'},
      {es:'Frutos amargos por sequía — riego regular.'},
    ],
    seeds:{
      when:{es:'De un fruto muy maduro, casi amarillento, fin de verano.'},
      how:{es:'Cortar, extraer semillas, lavar y separar la pulpa.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 4–5 años.'},
    },
  },

  {
    id:'pimenton', category:'hortaliza', rarity:'comun', emoji:'🫑',
    name:{es:'Pimentón / Pimiento', fr:'Poivron'}, latin:'Capsicum annuum', family:{es:'Solanáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:50, height:{es:'60–90 cm'},
    sow:{es:'Ago–Sep (almácigo)'}, plant:{es:'Oct–Nov'}, harv:{es:'Ene–Abr'},
    sowM:[0,0,0,0,0,0,0,1,1,0,0,0], plantM:[0,0,0,0,0,0,0,0,0,1,1,0], harvM:[1,1,1,1,0,0,0,0,0,0,0,0],
    growth_days:130,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:14 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:36 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)',   days:40 },
      { id:'fruit',  name:{es:'Cosecha'},      icon:'🫑', color:'#FBE9E7', bg:'rgba(181,90,40,.12)',  days:40 },
    ],
    advice:{
      0:{es:['Almácigo cálido, 22–25°C.','Endurecer antes de trasplantar.']},
      1:{es:['Trasplantar después de las últimas heladas.','Suelo rico, bien drenado.']},
      2:{es:['Tutorar — frutos pesados pueden quebrar ramas.','Cosechar verde para más rendimiento, rojo para más dulzor.']},
      3:{es:['Cosechar con tijeras, dejando un trozo de pedúnculo.','Cada cosecha estimula nuevos frutos.']},
    },
    companions:['tomate','albahaca','zanahoria','cebollin'],
    avoid:['hinojo'],
    climate:{es:'Necesita calor. Zona central y norte chico. En sur sólo bajo invernadero.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule'],
    uses:{
      culinary:{es:'Ensaladas, rellenos, conservas, sofritos, asados al horno.'},
      nutritional:{es:'Muy rico en vitamina C — más que el limón en el pimiento rojo maduro.'},
      medicinal:{es:'Tradicionalmente apreciado por su aporte de vitamina C en invierno.'},
    },
    problems:[
      {es:'Pudrición apical (mancha negra en la punta) — riego regular, aporte de calcio.'},
      {es:'Caída de flores por calor extremo — sombrear al mediodía.'},
    ],
    seeds:{
      when:{es:'De frutos completamente rojos y maduros (Mar–Abr).'},
      how:{es:'Cortar, extraer semillas con cuchara o dedos.'},
      drying:{es:'Secar sobre papel 7–10 días.'},
      storage:{es:'Sobre rotulado. Viabilidad 3–4 años.'},
    },
  },

  {
    id:'kale', category:'hortaliza', rarity:'comun', emoji:'🥬',
    photo: 'photos/kale.jpg',
    name:{es:'Kale / Col rizada', fr:'Chou kale'}, latin:'Brassica oleracea var. acephala', family:{es:'Brasicáceas'},
    water:{es:'Regular'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:40, height:{es:'50–90 cm'},
    sow:{es:'Ene–Mar y Jul–Sep (almácigo)'}, plant:{es:'Mar–Abr y Sep–Oct'}, harv:{es:'Jun–Oct y Dic–Feb'},
    sowM:[1,1,1,0,0,0,1,1,1,0,0,0], plantM:[0,0,1,1,0,0,0,0,1,1,0,0], harvM:[1,1,0,0,0,1,1,1,1,1,0,1],
    growth_days:90,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:7 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:30 },
      { id:'harv',   name:{es:'Cosecha continua'}, icon:'🥬', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:53 },
    ],
    advice:{
      0:{es:['Germina rápido. Almácigo o directo.','Resiste fríos suaves muy bien.']},
      1:{es:['Trasplantar con 4–5 hojas, suelo rico.','Aporte de compost al trasplantar.']},
      2:{es:['Cosechar hojas exteriores conforme se necesitan — sigue produciendo meses.','El frío mejora su sabor (las heladas suaves lo endulzan).']},
    },
    companions:['cebolla','manzanilla','apio','tomillo'],
    avoid:['frutilla','tomate'],
    climate:{es:'Muy rústico. Crece todo el año en clima templado. Resistente a heladas suaves.'},
    zones:['Todas las zonas excepto desértico'],
    uses:{
      culinary:{es:'Ensaladas, salteados, sopas, batidos verdes, chips de kale al horno.'},
      nutritional:{es:'Hoja muy nutritiva, generosa en vitamina K y calcio.'},
      medicinal:{es:'Tradicionalmente apreciado en invierno por su densidad nutricional.'},
    },
    problems:[
      {es:'Mariposa de la col (orugas verdes) — malla, recogida manual.'},
      {es:'Pulgones en hojas — agua jabonosa, lavar antes de comer.'},
    ],
    seeds:{
      when:{es:'Al 2° año, cuando las vainas alargadas están secas.'},
      how:{es:'Cortar vainas, abrir, separar semillas redondas.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 4 años.'},
    },
  },

  {
    id:'cebolla_morada', category:'hortaliza', rarity:'comun', emoji:'🧅',
    name:{es:'Cebolla morada', fr:'Oignon rouge'}, latin:'Allium cepa var.', family:{es:'Amarilidáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:12, height:{es:'40–60 cm'},
    sow:{es:'Mar–May (almácigo otoñal)'}, plant:{es:'May–Jun'}, harv:{es:'Ene–Mar'},
    sowM:[0,0,1,1,1,0,0,0,0,0,0,0], plantM:[0,0,0,0,1,1,0,0,0,0,0,0], harvM:[1,1,1,0,0,0,0,0,0,0,0,1],
    growth_days:160,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:14 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:50 },
      { id:'bulb',   name:{es:'Engorde de bulbo'}, icon:'🧅', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:96 },
    ],
    advice:{
      0:{es:['Sembrar superficial en bandeja. Germina lento.','Mantener almácigo húmedo a media sombra.']},
      1:{es:['Trasplantar con grosor de lápiz, 4–5 hojas.','Plantar sin enterrar el cuello.']},
      2:{es:['Reducir riego cuando las hojas se doblan.','Cosechar cuando 50% del follaje se ha caído.']},
    },
    companions:['zanahoria','lechuga','frutilla','betarraga'],
    avoid:['poroto','arveja','haba'],
    climate:{es:'Bien adaptada en zona central. Su color morado intensifica en suelos ricos en azufre.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío'],
    uses:{
      culinary:{es:'Ensalada chilena, ceviche, encurtidos, pebre con cilantro.'},
      nutritional:{es:'Quercetina (más concentrada en variedades moradas) y vitamina C.'},
      medicinal:{es:'Mismas virtudes tradicionales que la cebolla común.'},
    },
    problems:[
      {es:'Trips (puntos plateados) — riego al pie, no por aspersión.'},
      {es:'Pudrición blanca por humedad excesiva — drenaje.'},
    ],
    seeds:{
      when:{es:'Al 2° año, semillas negras en umbelas secas.'},
      how:{es:'Cortar umbelas, secar bajo techo, frotar.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 2 años (corta).'},
    },
  },

  {
    id:'zapallo_butternut', category:'hortaliza', rarity:'comun', emoji:'🎃',
    name:{es:'Zapallo butternut', fr:'Courge butternut'}, latin:'Cucurbita moschata', family:{es:'Cucurbitáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:100, height:{es:'Rastrero 2–3 m'},
    sow:{es:'Sep–Nov (almácigo o directo)'}, plant:{es:'Oct–Dic'}, harv:{es:'Mar–May'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,0,1,1,1], harvM:[0,0,1,1,1,0,0,0,0,0,0,0],
    growth_days:130,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:7 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:25 },
      { id:'vine',   name:{es:'Guía y floración'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:40 },
      { id:'fruit',  name:{es:'Engorde de fruto'}, icon:'🎃', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:58 },
    ],
    advice:{
      0:{es:['Germina a 22°C. Sembrar 2 semillas por hoyo.','Necesita mucho espacio para sus guías.']},
      1:{es:['Trasplantar joven, cuidando el cepellón.','Acolchar para conservar humedad.']},
      2:{es:['Limitar a 3–4 frutos por planta para que crezcan grandes.','Riego abundante hasta el cuajado.']},
      3:{es:['Cosechar con la piel dura, pedúnculo seco.','Curar al sol una semana antes de almacenar.']},
    },
    companions:['maiz','poroto_verde','tagete'],
    avoid:['papa'],
    climate:{es:'Verano cálido. Bien en RM, O\'Higgins, Maule. Se conserva muchos meses.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío'],
    uses:{
      culinary:{es:'Sopas, cremas, pasteles, asado al horno, ñoquis.'},
      nutritional:{es:'Pulpa dulce con betacaroteno y fibra.'},
      medicinal:{es:'Las semillas tienen virtudes tradicionales como antiparasitarias suaves.'},
    },
    problems:[
      {es:'Oidio en otoño húmedo — leche diluida 1:10, ventilación.'},
      {es:'Frutos podridos por contacto con el suelo — acolchar con paja.'},
    ],
    seeds:{
      when:{es:'De un fruto bien maduro y curado, varias semanas tras cosechar.'},
      how:{es:'Extraer semillas, lavar la pulpa, separar.'},
      drying:{es:'Dos semanas a la sombra.'},
      storage:{es:'Sobre rotulado. Viabilidad 5–6 años.'},
      notes:{es:'Cucurbitáceas se cruzan — aislar variedades para semilla pura.'},
    },
  },

  {
    id:'tomate_cherry', category:'hortaliza', rarity:'comun', emoji:'🍅',
    name:{es:'Tomate cherry', fr:'Tomate cerise'}, latin:'Solanum lycopersicum var. cerasiforme', family:{es:'Solanáceas'},
    water:{es:'Regular'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:50, height:{es:'1,2–2 m'},
    sow:{es:'Ago–Oct (almácigo)'}, plant:{es:'Oct–Nov'}, harv:{es:'Dic–Abr'},
    sowM:[0,0,0,0,0,0,0,1,1,1,0,0], plantM:[0,0,0,0,0,0,0,0,0,1,1,0], harvM:[1,1,1,1,0,0,0,0,0,0,0,1],
    growth_days:100,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:10 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:25 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)',   days:30 },
      { id:'fruit',  name:{es:'Cosecha continua'}, icon:'🍅', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:35 },
    ],
    advice:{
      0:{es:['Igual cuidado que el tomate común.','Variedades muy productivas, ideales para maceta o balcón.']},
      1:{es:['Trasplantar enterrando hasta las primeras hojas.','Tutorar pronto — las matas pueden ser muy largas.']},
      2:{es:['Algunas variedades no requieren eliminar chupones.','Riego regular al pie.']},
      3:{es:['Cosechar racimos enteros cuando todos los frutos están maduros.','Excelentes en ensaladas, salsas rústicas o snacks.']},
    },
    companions:['albahaca','tagete','cebollin','perejil'],
    avoid:['papa','hinojo'],
    climate:{es:'Muy adaptable, incluso a macetas en balcón. Resiste mejor que el tomate grande.'},
    zones:['Todas las zonas excepto desértico extremo'],
    uses:{
      culinary:{es:'Ensaladas, brochetas, salsa rápida, secados al sol.'},
      nutritional:{es:'Buen aporte de licopeno y vitamina C, concentrados por su tamaño.'},
      medicinal:{es:'Mismas virtudes que el tomate común.'},
    },
    problems:[
      {es:'Rajado de frutos por riego irregular — humedad constante.'},
      {es:'Mismas plagas que el tomate común.'},
    ],
    seeds:{
      when:{es:'Recolectar de los frutos más bellos al final del verano.'},
      how:{es:'Fermentación clásica en agua 2–3 días, lavar y secar.'},
      drying:{es:'Una semana sobre papel a la sombra.'},
      storage:{es:'Sobre rotulado. Viabilidad 4–6 años.'},
    },
  },

  {
    id:'damasco', category:'arbol', rarity:'comun', emoji:'🍑',
    photo: 'photos/damasco.jpg',
    name:{es:'Damasco', fr:'Abricot'}, latin:'Prunus armeniaca', family:{es:'Rosáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:8, spacing_cm:500, height:{es:'4–6 m'},
    sow:{es:'Jun–Ago (plantar árbol joven, raíz desnuda)'}, plant:{es:'Jun–Ago'}, harv:{es:'Nov–Ene'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[1,0,0,0,0,0,0,0,0,0,1,1],
    growth_days:1095,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:90 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:730 },
      { id:'fruit',  name:{es:'Producción'}, icon:'🍑', color:'#FBE9E7', bg:'rgba(181,90,40,.12)',  days:275 },
    ],
    advice:{
      0:{es:['Plantar en invierno con raíz desnuda. Hoyo grande con compost.','Florece muy temprano (Ago), sensible a heladas tardías.']},
      1:{es:['Podar levemente en invierno para airear la copa.','Primeros frutos al 3°–4° año.']},
      2:{es:['Cosechar firmes pero perfumados.','Producción concentrada en pocas semanas — ideal para mermelada.']},
    },
    companions:['lavanda','romero','calendula'],
    avoid:[],
    climate:{es:'Tradicional en valles centrales: RM, O\'Higgins, Maule. Necesita inviernos frescos.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble'],
    uses:{
      culinary:{es:'Fresco, mermelada, deshidratado (orejones), pasteles, conservas.'},
      nutritional:{es:'Carotenoides y fibra. Orejones concentran azúcares y minerales.'},
      medicinal:{es:'Los orejones son tradicionalmente apreciados en invierno.'},
    },
    problems:[
      {es:'Heladas en floración (Ago) — protección con malla en años fríos.'},
      {es:'Cloca / monilia — eliminar frutos dañados, podar para airear.'},
    ],
    seeds:{
      when:{es:'Multiplicación por semilla difícil de mantener variedad.'},
      how:{es:'Mejor injertar sobre patrón rústico (ciruelo silvestre o damasco).'},
      drying:{es:'No aplica.'},
      storage:{es:'Comprar plantines injertados de variedades probadas.'},
    },
  },

  {
    id:'durazno', category:'arbol', rarity:'comun', emoji:'🍑',
    photo: 'photos/durazno.jpg',
    name:{es:'Durazno', fr:'Pêche'}, latin:'Prunus persica', family:{es:'Rosáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:8, spacing_cm:500, height:{es:'3–5 m'},
    sow:{es:'Jun–Ago (plantar árbol joven)'}, plant:{es:'Jun–Ago'}, harv:{es:'Dic–Mar'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[1,1,1,0,0,0,0,0,0,0,0,1],
    growth_days:1095,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:90 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:730 },
      { id:'fruit',  name:{es:'Producción'}, icon:'🍑', color:'#FBE9E7', bg:'rgba(181,90,40,.12)',  days:275 },
    ],
    advice:{
      0:{es:['Plantar en invierno, suelo profundo y bien drenado.','Florece en agosto — proteger en años con heladas tardías.']},
      1:{es:['Podar fuerte en invierno — el durazno fructifica en madera del año anterior.','Primeros frutos al 3° año.']},
      2:{es:['Aclarar frutos jóvenes para mejor tamaño.','Cosechar firmes pero aromáticos.']},
    },
    companions:['lavanda','romero','calendula','ajo'],
    avoid:[],
    climate:{es:'Muy bien en RM, O\'Higgins, Maule. Necesita invierno fresco para fructificar.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío'],
    uses:{
      culinary:{es:'Fresco, mermelada, conservas en almíbar, kuchen, mote con huesillos.'},
      nutritional:{es:'Vitamina C, betacaroteno, fibra.'},
      medicinal:{es:'El mote con huesillos es la bebida refrescante tradicional del verano chileno.'},
    },
    problems:[
      {es:'Cloca del durazno (hojas abolladas) — tratar en invierno con caldo bordelés.'},
      {es:'Pulgones — agua jabonosa.'},
      {es:'Conchuela parda — limpiar con cepillo o aceite mineral.'},
    ],
    seeds:{
      when:{es:'Por semilla pierde variedad. Mejor injertar.'},
      how:{es:'Multiplicar por injerto sobre patrón rústico.'},
      drying:{es:'No aplica.'},
      storage:{es:'Plantines injertados son el camino más seguro.'},
    },
  },

  {
    id:'ciruelo', category:'arbol', rarity:'comun', emoji:'🍑',
    photo: 'photos/ciruelo.jpg',
    name:{es:'Ciruelo', fr:'Prunier'}, latin:'Prunus domestica', family:{es:'Rosáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:500, height:{es:'4–6 m'},
    sow:{es:'Jun–Ago'}, plant:{es:'Jun–Ago'}, harv:{es:'Dic–Mar'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[1,1,1,0,0,0,0,0,0,0,0,1],
    growth_days:1095,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:90 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:730 },
      { id:'fruit',  name:{es:'Producción'}, icon:'🍑', color:'#FBE9E7', bg:'rgba(181,90,40,.12)',  days:275 },
    ],
    advice:{
      0:{es:['Plantar en invierno. Tolera suelos variados.','Resistente y de baja exigencia.']},
      1:{es:['Podar para airear la copa.','Algunas variedades necesitan polinizador cercano.']},
      2:{es:['Cosechar maduros con la "pruina" (capa cerosa blanca) intacta.','Producción abundante en buen año.']},
    },
    companions:['lavanda','calendula'],
    avoid:[],
    climate:{es:'Muy común en todo Chile central y sur. Resistente y productivo.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Fresco, mermelada, ciruelas pasas (deshidratadas), kuchen, conservas.'},
      nutritional:{es:'Fibra, antioxidantes. Las pasas son laxantes naturales suaves.'},
      medicinal:{es:'Las ciruelas pasas son tradicionales para regular el tránsito.'},
    },
    problems:[
      {es:'Pulgones en brotes nuevos — agua jabonosa.'},
      {es:'Monilia — eliminar frutos podridos del árbol y del suelo.'},
    ],
    seeds:{
      when:{es:'Multiplicación por injerto preferida.'},
      how:{es:'Comprar plantines de variedades adaptadas a tu zona.'},
      drying:{es:'No aplica.'},
      storage:{es:'Los carozos pueden germinar pero no mantienen la variedad.'},
    },
  },

  {
    id:'naranjo', category:'arbol', rarity:'comun', emoji:'🍊',
    photo: 'photos/naranjo.jpg',
    name:{es:'Naranjo', fr:'Oranger'}, latin:'Citrus sinensis', family:{es:'Rutáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:500, height:{es:'4–6 m'},
    sow:{es:'Sep–Nov (plantación)'}, plant:{es:'Sep–Nov'}, harv:{es:'May–Sep'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,1,1,1,0], harvM:[0,0,0,0,1,1,1,1,1,0,0,0],
    growth_days:1095,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:90 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:730 },
      { id:'fruit',  name:{es:'Producción'}, icon:'🍊', color:'#FBE9E7', bg:'rgba(200,160,58,.15)', days:275 },
    ],
    advice:{
      0:{es:['Plantar en primavera, lugar soleado y resguardado de viento.','Sensible a heladas fuertes — proteger en sur.']},
      1:{es:['Aporte de compost al pie 2 veces al año.','Riego profundo y espaciado, mucho mulch.']},
      2:{es:['El fruto se conserva mejor en el árbol.','Cosecha escalonada de mayo a septiembre.']},
    },
    companions:['lavanda','romero','calendula'],
    avoid:[],
    climate:{es:'Mediterráneo cálido (RM, O\'Higgins, Maule). Petorca, Quillota históricamente cítricos.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule'],
    uses:{
      culinary:{es:'Jugo, postres, mermelada de cáscara, naranjas confitadas, ensaladas.'},
      nutritional:{es:'Muy rico en vitamina C. Buen aliado en invierno.'},
      medicinal:{es:'Infusión de cáscara y flor (azahar) es tradicionalmente relajante.'},
    },
    problems:[
      {es:'Clorosis (hojas amarillas) por falta de hierro — sulfato de hierro o té de compost.'},
      {es:'Cochinilla algodonosa — limpiar con algodón y alcohol, aceite mineral.'},
    ],
    seeds:{
      when:{es:'Multiplicar por injerto, no por semilla (tarda 7+ años y no mantiene variedad).'},
      how:{es:'Comprar plantín injertado sobre patrón resistente.'},
      drying:{es:'No aplica.'},
      storage:{es:'Plantines comerciales son lo más seguro.'},
    },
  },

  {
    id:'palto', category:'arbol', rarity:'comun', emoji:'🥑',
    photo: 'photos/palto.jpg',
    name:{es:'Palto', fr:'Avocatier'}, latin:'Persea americana', family:{es:'Lauráceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:600, height:{es:'5–10 m'},
    sow:{es:'Sep–Nov (plantar plantín)'}, plant:{es:'Sep–Nov'}, harv:{es:'Variable según variedad'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,1,1,1,0], harvM:[1,1,1,1,1,1,1,1,1,1,1,1],
    growth_days:1460,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:90 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1095 },
      { id:'fruit',  name:{es:'Producción'}, icon:'🥑', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',  days:275 },
    ],
    advice:{
      0:{es:['Necesita suelo muy drenado — odia encharcamiento.','Proteger del viento, sensible a heladas fuertes.']},
      1:{es:['Riego profundo, mulch abundante.','Primer fruto al 4°–5° año en plantines injertados.']},
      2:{es:['La fruta madura tras la cosecha — recolectar cuando el rabo se desprende.','Cosecha escalonada — un árbol puede producir muchos meses.']},
    },
    companions:['lavanda','calendula'],
    avoid:[],
    climate:{es:'Petorca, Quillota, La Cruz son zonas paltícolas históricas. RM y zona central. Necesita mucha agua, controvertido en zonas secas.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule'],
    uses:{
      culinary:{es:'Palta machacada con limón, en sándwich, ensaladas, guacamole chileno.'},
      nutritional:{es:'Grasa vegetal saludable, potasio, vitamina E.'},
      medicinal:{es:'Aceite de palta tradicionalmente para piel y cabello.'},
    },
    problems:[
      {es:'Heladas dañan flores y fruta joven — proteger.'},
      {es:'Mucha demanda hídrica — controvertido en zonas con escasez.'},
    ],
    seeds:{
      when:{es:'El cuesco puede germinar pero el árbol tarda 7–10 años y no fructifica fiel.'},
      how:{es:'Comprar plantín injertado de variedad probada (Hass es la más común).'},
      drying:{es:'No aplica.'},
      storage:{es:'Plantines comerciales son el camino práctico.'},
    },
  },

  {
    id:'manzano', category:'arbol', rarity:'comun', emoji:'🍎',
    photo: 'photos/manzano.jpg',
    name:{es:'Manzano', fr:'Pommier'}, latin:'Malus domestica', family:{es:'Rosáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:500, height:{es:'4–7 m'},
    sow:{es:'Jun–Ago (plantación)'}, plant:{es:'Jun–Ago'}, harv:{es:'Feb–May'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[0,1,1,1,1,0,0,0,0,0,0,0],
    growth_days:1460,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:90 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1095 },
      { id:'fruit',  name:{es:'Producción'}, icon:'🍎', color:'#FBE9E7', bg:'rgba(181,90,40,.12)',  days:275 },
    ],
    advice:{
      0:{es:['Plantar en invierno con raíz desnuda. Suelo profundo y fresco.','Necesita inviernos fríos para fructificar bien.']},
      1:{es:['Podar en invierno para mantener forma y airear.','Necesita polinizador cercano (otro manzano).']},
      2:{es:['Aclarar frutos jóvenes — uno por ramillete para mejor tamaño.','Cosecha escalonada según variedad.']},
    },
    companions:['ajo','manzanilla','lavanda'],
    avoid:[],
    climate:{es:'Muy bien en zona central y sur: Maule, Ñuble, Biobío, Araucanía. Curicó y Linares son cuna del manzano chileno.'},
    zones:['Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Fresca, kuchen, chicha de manzana, sidra, conservas, deshidratadas.'},
      nutritional:{es:'Fibra (pectina), vitamina C. La cáscara es la parte más nutritiva.'},
      medicinal:{es:'Tradicionalmente recomendada como digestiva. La chicha de manzana es bebida histórica.'},
    },
    problems:[
      {es:'Pulgón verde — agua jabonosa, fomentar mariquitas.'},
      {es:'Sarna del manzano — variedades resistentes, eliminar hojas caídas.'},
      {es:'Carpocapsa — trampas con feromona en verano.'},
    ],
    seeds:{
      when:{es:'Multiplicación por injerto. Las pepitas no mantienen variedad.'},
      how:{es:'Plantín injertado de variedades adaptadas (Fuji, Gala, Granny Smith).'},
      drying:{es:'No aplica.'},
      storage:{es:'Existen variedades patrimoniales chilenas en peligro — vale rescatarlas.'},
    },
  },

  {
    id:'peral', category:'arbol', rarity:'comun', emoji:'🍐',
    photo: 'photos/peral.jpg',
    name:{es:'Peral', fr:'Poirier'}, latin:'Pyrus communis', family:{es:'Rosáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:500, height:{es:'4–6 m'},
    sow:{es:'Jun–Ago'}, plant:{es:'Jun–Ago'}, harv:{es:'Ene–Abr'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[1,1,1,1,0,0,0,0,0,0,0,0],
    growth_days:1460,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:90 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1095 },
      { id:'fruit',  name:{es:'Producción'}, icon:'🍐', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',  days:275 },
    ],
    advice:{
      0:{es:['Plantar en invierno, suelo profundo.','Necesita polinizador cercano.']},
      1:{es:['Podar para mantener forma.','Primer fruto al 4°–5° año.']},
      2:{es:['Cosechar firmes — maduran tras cosecha.','Conservar en frío prolonga la temporada.']},
    },
    companions:['manzanilla','lavanda'],
    avoid:[],
    climate:{es:'Zonas similares al manzano: Maule, Ñuble, Biobío. Buen complemento de huerto familiar.'},
    zones:['Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía'],
    uses:{
      culinary:{es:'Fresca, mermelada, peras en almíbar, kuchen, tartas.'},
      nutritional:{es:'Fibra suave, vitamina C. Fácil de digerir.'},
      medicinal:{es:'Tradicionalmente apreciada como fruta digestiva.'},
    },
    problems:[
      {es:'Roña del peral — variedades resistentes, eliminar hojas caídas.'},
      {es:'Hormigas y pulgones — manejar a tiempo.'},
    ],
    seeds:{
      when:{es:'Multiplicación por injerto.'},
      how:{es:'Plantín comercial es lo más práctico.'},
      drying:{es:'No aplica.'},
      storage:{es:'Comprar plantines injertados.'},
    },
  },

  {
    id:'cerezo', category:'arbol', rarity:'comun', emoji:'🍒',
    photo: 'photos/cerezo.jpg',
    name:{es:'Cerezo', fr:'Cerisier'}, latin:'Prunus avium', family:{es:'Rosáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:500, height:{es:'5–8 m'},
    sow:{es:'Jun–Ago'}, plant:{es:'Jun–Ago'}, harv:{es:'Nov–Ene'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[1,0,0,0,0,0,0,0,0,0,1,1],
    growth_days:1460,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:90 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1095 },
      { id:'fruit',  name:{es:'Producción'}, icon:'🍒', color:'#FBE9E7', bg:'rgba(181,90,40,.12)',  days:275 },
    ],
    advice:{
      0:{es:['Plantar en invierno, suelo bien drenado.','Florece muy temprano — sensible a heladas tardías.']},
      1:{es:['Podar levemente — el cerezo no requiere poda fuerte.','Necesita polinizador cercano para muchas variedades.']},
      2:{es:['Cosechar maduras, los pájaros aman las cerezas — proteger con malla.','Temporada corta e intensa, mediados de noviembre a enero.']},
    },
    companions:['lavanda','calendula'],
    avoid:[],
    climate:{es:'Maule, Ñuble, Biobío son las zonas históricamente cereceras de Chile. Curicó destaca.'},
    zones:['Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía'],
    uses:{
      culinary:{es:'Fresca, mermelada, conservas en almíbar, kuchen.'},
      nutritional:{es:'Antioxidantes (antocianinas), vitamina C, potasio.'},
      medicinal:{es:'Tradicionalmente apreciada por su frescura en pleno verano.'},
    },
    problems:[
      {es:'Pájaros — malla protectora indispensable.'},
      {es:'Rajado de fruta por lluvia tardía — variedades resistentes.'},
      {es:'Mosca de la fruta — trampas en verano.'},
    ],
    seeds:{
      when:{es:'Multiplicación por injerto.'},
      how:{es:'Plantines de variedades probadas: Bing, Lapins, Sweetheart.'},
      drying:{es:'No aplica.'},
      storage:{es:'Plantines comerciales son lo seguro.'},
    },
  },

  {
    id:'frambuesa', category:'fruta', rarity:'comun', emoji:'🍓',
    photo: 'photos/frambuesa.jpg',
    name:{es:'Frambuesa', fr:'Framboise'}, latin:'Rubus idaeus', family:{es:'Rosáceas'},
    water:{es:'Regular'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:60, height:{es:'1,5–2 m'},
    sow:{es:'Jun–Ago (plantar cañas)'}, plant:{es:'Jun–Ago'}, harv:{es:'Dic–Mar'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[1,1,1,0,0,0,0,0,0,0,0,1],
    growth_days:365,
    stages:[
      { id:'plant',  name:{es:'Instalación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:90 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:180 },
      { id:'fruit',  name:{es:'Cosecha'},      icon:'🍓', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:95 },
    ],
    advice:{
      0:{es:['Plantar cañas en invierno. Suelo ligeramente ácido, rico en materia orgánica.','Tutorar — las cañas necesitan apoyo.']},
      1:{es:['Podar las cañas viejas tras la cosecha (han producido).','Las cañas nuevas darán fruta al año siguiente.']},
      2:{es:['Cosechar cada 2–3 días en plena temporada.','Producción muy generosa en suelo bien preparado.']},
    },
    companions:['ajo','tomillo'],
    avoid:[],
    climate:{es:'Cuna chilena: Maule, Ñuble, Biobío, Araucanía. Chile es gran productor mundial.'},
    zones:['Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Fresca, mermelada, kuchen, helados, vinagre aromatizado.'},
      nutritional:{es:'Antioxidantes (antocianinas), vitamina C, fibra.'},
      medicinal:{es:'Las hojas en infusión son tradicionalmente apreciadas como digestivo.'},
    },
    problems:[
      {es:'Hongos en fruta (Botrytis) — ventilación, no mojar fruta.'},
      {es:'Pájaros — malla.'},
    ],
    seeds:{
      when:{es:'Multiplicación por hijuelos (brotes de raíz) o estacas.'},
      how:{es:'Separar hijuelos en invierno, plantar en otro sitio.'},
      drying:{es:'No aplica.'},
      storage:{es:'Las plantas se renuevan solas — manejar el crecimiento.'},
    },
  },

  {
    id:'arandano', category:'fruta', rarity:'comun', emoji:'🫐',
    photo: 'photos/arandano.jpg',
    name:{es:'Arándano', fr:'Myrtille'}, latin:'Vaccinium corymbosum', family:{es:'Ericáceas'},
    water:{es:'Regular'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:120, height:{es:'1–2 m'},
    sow:{es:'Jun–Ago (plantar arbusto)'}, plant:{es:'Jun–Ago'}, harv:{es:'Nov–Feb'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[1,1,0,0,0,0,0,0,0,0,1,1],
    growth_days:730,
    stages:[
      { id:'plant',  name:{es:'Instalación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:180 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:365 },
      { id:'fruit',  name:{es:'Producción'},  icon:'🫐', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:185 },
    ],
    advice:{
      0:{es:['Necesita suelo ÁCIDO (pH 4,5–5,5). Añadir turba o azufre.','Riego con agua de lluvia o ablandada — agua dura sube el pH.']},
      1:{es:['Mulch grueso (corteza de pino) mantiene acidez y humedad.','Aporte ligero de fertilizante para acidófilas.']},
      2:{es:['Cosecha escalonada en plena temporada.','Plantas productivas durante muchos años con buen manejo.']},
    },
    companions:['frutilla'],
    avoid:[],
    climate:{es:'Cuna chilena: Maule, Ñuble, Biobío, Araucanía, Los Ríos, Los Lagos. Suelo ácido natural ahí.'},
    zones:['Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Fresco, mermelada, kuchen, salsa para carnes, jugos.'},
      nutritional:{es:'Antioxidantes notables (antocianinas), vitamina C, fibra.'},
      medicinal:{es:'Apreciado por su frescor y como fruta antioxidante en la dieta diaria.'},
    },
    problems:[
      {es:'Hojas amarillas por suelo alcalino — ajustar pH.'},
      {es:'Pájaros — malla esencial.'},
    ],
    seeds:{
      when:{es:'Multiplicación por estacas leñosas en invierno o plantines.'},
      how:{es:'Comprar plantines de variedades adaptadas (Brigitta, Duke, Legacy).'},
      drying:{es:'No aplica.'},
      storage:{es:'Plantas crecen lento — paciencia los primeros 3 años.'},
    },
  },

  {
    id:'nogal', category:'arbol', rarity:'comun', emoji:'🌰',
    photo: 'photos/nogal.jpg',
    name:{es:'Nogal', fr:'Noyer'}, latin:'Juglans regia', family:{es:'Juglandáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:8, spacing_cm:800, height:{es:'10–20 m'},
    sow:{es:'Jun–Ago (plantar plantín)'}, plant:{es:'Jun–Ago'}, harv:{es:'Mar–Abr'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[0,0,1,1,0,0,0,0,0,0,0,0],
    growth_days:1825,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:180 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1460 },
      { id:'fruit',  name:{es:'Producción'}, icon:'🌰', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:185 },
    ],
    advice:{
      0:{es:['Necesita MUCHO espacio — no es para huertos pequeños.','Suelo profundo, soleado, sin viento fuerte.']},
      1:{es:['Crece lento los primeros años, luego rápido.','Primeros frutos al 5°–7° año.']},
      2:{es:['Cosechar cuando los frutos caen solos al suelo (Mar–Abr).','Curar al sol unos días antes de guardar.']},
    },
    companions:[],
    avoid:['tomate','papa'],
    climate:{es:'Tradicional en valles centrales: RM, O\'Higgins, Maule. Bien adaptado, longevo (>50 años).'},
    zones:['Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío'],
    uses:{
      culinary:{es:'Crudas, en kuchen, ensaladas, pesto, dulces, harina de nuez.'},
      nutritional:{es:'Excelente fuente de omega-3 vegetal y proteína.'},
      medicinal:{es:'Las hojas en infusión son tradicionalmente apreciadas como tónico digestivo.'},
    },
    problems:[
      {es:'El árbol produce juglona — pocas plantas crecen bien debajo.'},
      {es:'Cosecha alterna (años de mucha y poca producción) — natural.'},
    ],
    seeds:{
      when:{es:'Por semilla tarda muchos años. Mejor injertar.'},
      how:{es:'Plantines injertados producen antes y mantienen variedad.'},
      drying:{es:'Las nueces se curan al sol con cáscara durante una semana.'},
      storage:{es:'Nueces con cáscara: lugar seco y fresco. Sin cáscara: refrigerador.'},
    },
  },

  {
    id:'higuera', category:'arbol', rarity:'comun', emoji:'🍃',
    photo: 'photos/higuera.jpg',
    name:{es:'Higuera', fr:'Figuier'}, latin:'Ficus carica', family:{es:'Moráceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:8, spacing_cm:400, height:{es:'3–6 m'},
    sow:{es:'Jun–Ago (plantar estaca enraizada)'}, plant:{es:'Jun–Ago'}, harv:{es:'Ene–Abr'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[1,1,1,1,0,0,0,0,0,0,0,0],
    growth_days:730,
    stages:[
      { id:'plant',  name:{es:'Instalación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:180 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:365 },
      { id:'fruit',  name:{es:'Producción'}, icon:'🍃', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:185 },
    ],
    advice:{
      0:{es:['Multiplicación por estaca muy fácil — cortar rama de 30 cm en invierno y plantar.','Resistente a sequía una vez establecida.']},
      1:{es:['Casi sin riego en zona central tras los primeros 2 años.','Primeros higos al 2°–3° año.']},
      2:{es:['Cosechar maduros, blandos al tacto — los higos no maduran tras cosecha.','Producción doble en algunas zonas: brevas en primavera, higos en verano.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Mediterráneo. Muy común en huertos familiares del centro: RM, Valparaíso, O\'Higgins, Maule.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío'],
    uses:{
      culinary:{es:'Frescos, mermelada, conservas, higos secos, kuchen, con queso.'},
      nutritional:{es:'Fibra, calcio, potasio. Los higos secos concentran azúcares y minerales.'},
      medicinal:{es:'Las hojas y el látex tienen usos tradicionales — manipular con cuidado, irritante.'},
    },
    problems:[
      {es:'Hormigas y avispas en frutos maduros — cosechar a tiempo.'},
      {es:'Pájaros — malla si vale la pena.'},
    ],
    seeds:{
      when:{es:'Multiplicación por estaca leñosa, muy fiable.'},
      how:{es:'Cortar rama de 30 cm en julio, enterrar 2/3 en sustrato.'},
      drying:{es:'No aplica para semillas.'},
      storage:{es:'Los higos se secan al sol o deshidratador para conservar todo el año.'},
    },
  },

  {
    id:'mora', category:'fruta', rarity:'comun', emoji:'🫐',
    photo: 'photos/mora.jpg',
    name:{es:'Mora', fr:'Mûre'}, latin:'Rubus ulmifolius', family:{es:'Rosáceas'},
    water:{es:'Bajo'}, sun:{es:'Sol o semisombra'}, sun_hours:6, spacing_cm:150, height:{es:'2–3 m'},
    sow:{es:'Jun–Ago (esqueje o hijuelo)'}, plant:{es:'Jun–Ago'}, harv:{es:'Dic–Mar'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[1,1,1,0,0,0,0,0,0,0,0,1],
    growth_days:365,
    stages:[
      { id:'plant',  name:{es:'Instalación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:90 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:180 },
      { id:'fruit',  name:{es:'Cosecha'},      icon:'🫐', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:95 },
    ],
    advice:{
      0:{es:['Muy rústica — crece donde sea.','En jardines, variedades sin espinas son más manejables.']},
      1:{es:['Podar las cañas viejas tras cosecha.','Contener el crecimiento — puede volverse invasiva.']},
      2:{es:['Cosechar maduras, casi negras.','En Chile, recolectar moras silvestres en verano es tradición familiar.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Todo Chile templado y húmedo. En el sur las moras silvestres son abundantes.'},
    zones:['Todas las zonas excepto desértico'],
    uses:{
      culinary:{es:'Frescas, mermelada (la clásica chilena), kuchen, helados, vinagre.'},
      nutritional:{es:'Antioxidantes (antocianinas), vitamina C, fibra.'},
      medicinal:{es:'Las hojas en infusión son tradicionalmente apreciadas como digestivas.'},
    },
    problems:[
      {es:'Puede volverse invasiva — controlar.'},
      {es:'Espinas — variedades sin espinas son más prácticas en jardín.'},
    ],
    seeds:{
      when:{es:'Multiplicación por hijuelo o esqueje.'},
      how:{es:'Separar hijuelos en invierno, plantar.'},
      drying:{es:'No aplica para semillas.'},
      storage:{es:'Las moras se congelan muy bien para mermelada futura.'},
    },
  },

  {
    id:'girasol', category:'flor', rarity:'comun', emoji:'🌻',
    photo: 'photos/girasol.jpg',
    name:{es:'Girasol / Maravilla', fr:'Tournesol'}, latin:'Helianthus annuus', family:{es:'Asteráceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:8, spacing_cm:40, height:{es:'1,5–3 m'},
    sow:{es:'Sep–Nov (directo)'}, harv:{es:'Feb–Abr (semillas)'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[0,1,1,1,0,0,0,0,0,0,0,0],
    growth_days:100,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:10 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:60 },
      { id:'flower', name:{es:'Floración y semilla'}, icon:'🌻', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:30 },
    ],
    advice:{
      0:{es:['Sembrar directo en suelo cálido.','Variedades pequeñas (60 cm) o gigantes (3 m).']},
      1:{es:['Tutorar variedades altas en zonas ventosas.','Riego regular, especialmente en floración.']},
      2:{es:['Cosechar cuando la cabeza se inclina y los pétalos caen.','Las semillas son alimento humano y para pájaros.']},
    },
    companions:['poroto_verde','choclo','sandia'],
    avoid:['papa'],
    climate:{es:'Todo Chile mediterráneo. Atrae abejas y polinizadores — bueno cerca del huerto.'},
    zones:['Todas las zonas excepto desértico extremo'],
    uses:{
      culinary:{es:'Semillas crudas o tostadas, aceite de girasol, brotes en ensaladas.'},
      nutritional:{es:'Semillas ricas en vitamina E y grasas saludables.'},
      medicinal:{es:'Tradicionalmente apreciada como flor solar — su belleza alegra la huerta.'},
    },
    problems:[
      {es:'Pájaros comen las semillas — proteger las cabezas con tela.'},
      {es:'Tallos quebrados por viento — tutorar o variedades enanas.'},
    ],
    seeds:{
      when:{es:'Cosechar cuando la parte de atrás de la cabeza se vuelve marrón.'},
      how:{es:'Cortar la cabeza, frotar para separar las semillas.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Frasco hermético. Viabilidad 4–6 años. Generosa: una cabeza da cientos.'},
    },
  },

  {
    id:'amapola', category:'flor', rarity:'comun', emoji:'🌺',
    photo: 'photos/amapola.jpg',
    name:{es:'Amapola', fr:'Coquelicot'}, latin:'Papaver rhoeas', family:{es:'Papaveráceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:20, height:{es:'40–80 cm'},
    sow:{es:'Mar–May (siembra otoñal directa)'}, harv:{es:'Sep–Dic (flores)'},
    sowM:[0,0,1,1,1,0,0,0,0,0,0,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[0,0,0,0,0,0,0,0,1,1,1,1],
    growth_days:120,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:14 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:70 },
      { id:'flower', name:{es:'Floración'},    icon:'🌺', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:36 },
    ],
    advice:{
      0:{es:['Sembrar al voleo en otoño. No trasplantar — raíz pivotante.','Se auto-siembra año tras año.']},
      1:{es:['Riego escaso una vez establecida.','Apreciada por las abejas y polinizadores.']},
      2:{es:['Flores muy efímeras (1–2 días) pero abundantes en sucesión.','Tradicional flor de los campos chilenos en primavera.']},
    },
    companions:['lavanda','calendula','cosmos'],
    avoid:[],
    climate:{es:'Muy rústica. Florece en campos abiertos de la zona central en primavera.'},
    zones:['Todas las zonas excepto desértico extremo'],
    uses:{
      culinary:{es:'Pétalos comestibles, decoración de ensaladas y postres.'},
      nutritional:{es:'Las semillas (pequeñas, negras) son comestibles, usadas en panadería.'},
      medicinal:{es:'Tradicionalmente usada en infusiones suaves para conciliar el sueño.'},
    },
    problems:[
      {es:'Crece donde quiere — no resiste trasplante.'},
    ],
    seeds:{
      when:{es:'Las cápsulas marrones liberan semillas pequeñas al madurar.'},
      how:{es:'Cortar cápsulas secas, abrir, recolectar semillas.'},
      drying:{es:'Las cápsulas ya están secas — usar directo.'},
      storage:{es:'Sobre rotulado. Viabilidad 4 años. Se auto-siembra muy fácilmente.'},
    },
  },

  /* ─── TRADICIONAL ─── conocidas y queridas en huertas chilenas */

  {
    id:'alcachofa', category:'hortaliza', rarity:'tradicional', emoji:'🌿',
    name:{es:'Alcachofa', fr:'Artichaut'}, latin:'Cynara scolymus', family:{es:'Asteráceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:100, height:{es:'1–1,5 m'},
    sow:{es:'Sep–Nov (semilla) o plantar hijuelos en otoño'}, plant:{es:'Abr–Jun'}, harv:{es:'Sep–Dic'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,1,1,1,0,0,0,0,0,0], harvM:[0,0,0,0,0,0,0,0,1,1,1,1],
    growth_days:365,
    stages:[
      { id:'plant',  name:{es:'Instalación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:60 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:200 },
      { id:'fruit',  name:{es:'Cosecha'},      icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:105 },
    ],
    advice:{
      0:{es:['Multiplicación más fácil por hijuelos (brotes laterales) que por semilla.','Suelo rico y profundo, bien drenado.']},
      1:{es:['Riego regular en primavera. Mulch generoso.','Planta perenne — produce varios años con buen cuidado.']},
      2:{es:['Cosechar las cabezas firmes, antes que las brácteas se abran.','La cabeza central es la primera y la más grande.']},
    },
    companions:['haba','arveja'],
    avoid:[],
    climate:{es:'Tradicional en valles centrales: RM, O\'Higgins, Maule. Curacaví y Til Til son zonas clásicas.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío'],
    uses:{
      culinary:{es:'Al vapor, en tortillas, ensaladas, conservas en aceite. Las hojas en sopa.'},
      nutritional:{es:'Fibra (cinarina), favorece la digestión.'},
      medicinal:{es:'Las hojas en infusión son tradicionalmente apreciadas como digestivas hepáticas.'},
    },
    problems:[
      {es:'Pulgones en brotes nuevos — agua jabonosa.'},
      {es:'En verano calor extremo, regar más.'},
    ],
    seeds:{
      when:{es:'Si florece y se seca, recolectar semillas de la cabeza vieja.'},
      how:{es:'Pero lo más fiable es separar hijuelos en otoño.'},
      drying:{es:'No aplica para hijuelos.'},
      storage:{es:'Conservar hijuelos jóvenes en macetas hasta primavera.'},
    },
  },

  {
    id:'esparrago', category:'hortaliza', rarity:'tradicional', emoji:'🌱',
    name:{es:'Espárrago', fr:'Asperge'}, latin:'Asparagus officinalis', family:{es:'Asparagáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:40, height:{es:'1–1,5 m'},
    sow:{es:'Jul–Sep (plantar coronas)'}, plant:{es:'Jul–Sep'}, harv:{es:'Sep–Nov (a partir del 3° año)'},
    sowM:[0,0,0,0,0,0,1,1,1,0,0,0], plantM:[0,0,0,0,0,0,1,1,1,0,0,0], harvM:[0,0,0,0,0,0,0,0,1,1,1,0],
    growth_days:1095,
    stages:[
      { id:'plant',  name:{es:'Instalación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:180 },
      { id:'growth', name:{es:'Establecimiento (2 años)'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:730 },
      { id:'harv',   name:{es:'Cosecha anual'}, icon:'🌱', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:185 },
    ],
    advice:{
      0:{es:['Plantar coronas en zanjas profundas con compost.','Paciencia: las primeras cosechas son al 3° año.']},
      1:{es:['NO cosechar el primer ni segundo año — dejar que la planta se establezca.','Dejar el follaje crecer en verano para alimentar la raíz.']},
      2:{es:['Cosechar turiones (brotes) jóvenes cuando alcancen 15–20 cm.','Plantación productiva 15+ años.']},
    },
    companions:['tomate','perejil','tagete'],
    avoid:['ajo','cebolla','puerro'],
    climate:{es:'Bien adaptado en zona central. Cultivo de paciencia — el huerto familiar a largo plazo.'},
    zones:['Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío'],
    uses:{
      culinary:{es:'Al vapor, en cremas, tortillas, gratinados, fritos.'},
      nutritional:{es:'Folato y fibra. Diurético suave.'},
      medicinal:{es:'Apreciado tradicionalmente como purificante en primavera.'},
    },
    problems:[
      {es:'Plantación de paciencia — los primeros años parecen no rendir.'},
      {es:'Mantener libre de malezas — competencia directa.'},
    ],
    seeds:{
      when:{es:'Por semilla tarda 4 años. Mejor coronas.'},
      how:{es:'Comprar coronas en vivero, plantar en invierno.'},
      drying:{es:'No aplica.'},
      storage:{es:'Las coronas se manejan en sustrato fresco hasta plantar.'},
    },
  },

  {
    id:'poroto_granado', category:'hortaliza', rarity:'tradicional', emoji:'🫘',
    name:{es:'Poroto granado', fr:'Haricot granado'}, latin:'Phaseolus vulgaris', family:{es:'Fabáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:20, height:{es:'50 cm (mata) o 2 m (trepador)'},
    sow:{es:'Oct–Nov (directo)'}, harv:{es:'Feb–Abr (grano fresco)'},
    sowM:[0,0,0,0,0,0,0,0,0,1,1,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[0,1,1,1,0,0,0,0,0,0,0,0],
    growth_days:100,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:8 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:22 },
      { id:'flower', name:{es:'Floración'},    icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:25 },
      { id:'pod',    name:{es:'Vainas con grano'}, icon:'🫘', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:45 },
    ],
    advice:{
      0:{es:['Sembrar en suelo cálido (>15°C).','Variedades clásicas: tórtola, coscorrón, manteca.']},
      1:{es:['Tutorar variedades trepadoras con cañas o malla.','Cosecha tradicional para "porotos granados con mazamorra".']},
      2:{es:['Cosechar cuando las vainas están bien llenas pero aún verdes.','El grano fresco tiene sabor cremoso, distinto al seco.']},
    },
    companions:['choclo','zapallo','sandia'],
    avoid:['ajo','cebolla','puerro'],
    climate:{es:'Pilar de la huerta chilena de verano. Histórica trilogía: porotos + choclo + zapallo.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía'],
    uses:{
      culinary:{es:'Porotos granados con mazamorra y zapallo — plato emblema de la cocina chilena.'},
      nutritional:{es:'Excelente proteína vegetal y fibra. Combinado con choclo, proteína completa.'},
      medicinal:{es:'Mejora la tierra fijando nitrógeno.'},
    },
    problems:[
      {es:'Roya (manchas anaranjadas) — rotar cultivos.'},
      {es:'Pulgones — pinchar puntas.'},
    ],
    seeds:{
      when:{es:'Dejar vainas secarse completamente en la planta.'},
      how:{es:'Desgranar vainas secas, conservar granos sanos.'},
      drying:{es:'Tres días al sol.'},
      storage:{es:'Frasco hermético. Congelar 48h previene gorgojo. Viabilidad 3–4 años.'},
      notes:{es:'Variedades patrimoniales chilenas — vale rescatarlas.'},
    },
  },

  {
    id:'nabo', category:'hortaliza', rarity:'tradicional', emoji:'⚪',
    name:{es:'Nabo', fr:'Navet'}, latin:'Brassica rapa', family:{es:'Brasicáceas'},
    water:{es:'Regular'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:15, height:{es:'30 cm'},
    sow:{es:'Mar–May y Ago–Oct (directo)'}, harv:{es:'60 días post-siembra'},
    sowM:[0,0,1,1,1,0,0,1,1,1,0,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[1,1,1,1,1,1,1,0,0,1,1,1],
    growth_days:60,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:7 },
      { id:'leaf',   name:{es:'Crecimiento foliar'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:25 },
      { id:'root',   name:{es:'Engrosamiento de raíz'}, icon:'⚪', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:28 },
    ],
    advice:{
      0:{es:['Sembrar directo, 1 cm de profundidad.','Crece bien en estación fresca.']},
      1:{es:['Aclarar a 12–15 cm entre plantas.','Las hojas también son comestibles (similares a la espinaca).']},
      2:{es:['Cosechar cuando la raíz mide 6–10 cm de diámetro.','No esperar mucho — se vuelve fibroso.']},
    },
    companions:['arveja','lechuga'],
    avoid:[],
    climate:{es:'Bien en clima templado. Tradicional en cazuelas del sur de Chile.'},
    zones:['Todas las zonas'],
    uses:{
      culinary:{es:'Cazuela, sopas, salteados, encurtidos. Hojas como acelga.'},
      nutritional:{es:'Liviano, buen aporte de vitamina C y fibra.'},
      medicinal:{es:'Tradicionalmente apreciado en sopas reconstituyentes.'},
    },
    problems:[
      {es:'Pulguilla en hojas — malla, plantas aromáticas cerca.'},
      {es:'Raíces deformadas en suelo compacto — labrar profundo.'},
    ],
    seeds:{
      when:{es:'Al 2° año (bianual). Vainas alargadas secas.'},
      how:{es:'Cortar vainas, abrir, separar semillas redondas.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 4 años.'},
    },
  },

  {
    id:'camote', category:'hortaliza', rarity:'tradicional', emoji:'🍠',
    name:{es:'Camote / Batata', fr:'Patate douce'}, latin:'Ipomoea batatas', family:{es:'Convolvuláceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:40, height:{es:'Rastrero 1–2 m'},
    sow:{es:'Sep–Nov (plantar esquejes enraizados)'}, plant:{es:'Oct–Dic'}, harv:{es:'Mar–May'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,0,1,1,1], harvM:[0,0,1,1,1,0,0,0,0,0,0,0],
    growth_days:140,
    stages:[
      { id:'plant',  name:{es:'Establecimiento'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:30 },
      { id:'growth', name:{es:'Crecimiento de guías'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:70 },
      { id:'tuber',  name:{es:'Engorde de tubérculos'}, icon:'🍠', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:40 },
    ],
    advice:{
      0:{es:['Plantar esquejes con raíz cuando la tierra esté cálida.','Suelo suelto, arenoso, bien drenado.']},
      1:{es:['Dejar correr las guías o guiar a un lado.','Aporcar levemente para que se formen más tubérculos.']},
      2:{es:['Cosechar antes de las primeras heladas.','Curar al sol unos días antes de almacenar.']},
    },
    companions:['poroto_verde','calendula'],
    avoid:['papa'],
    climate:{es:'Necesita calor. Mejor en valles cálidos: norte chico y RM, O\'Higgins.'},
    zones:['Atacama','Coquimbo','Valparaíso','RM','O\'Higgins','Maule'],
    uses:{
      culinary:{es:'Asado al horno, puré dulce, sopas, frituras, postres.'},
      nutritional:{es:'Rico en betacaroteno, fibra, energía estable.'},
      medicinal:{es:'Las hojas son comestibles y muy nutritivas.'},
    },
    problems:[
      {es:'Pudrición en suelo húmedo — drenaje esencial.'},
      {es:'Sensible a heladas — proteger en otoño.'},
    ],
    seeds:{
      when:{es:'Multiplicación por esquejes de planta sana.'},
      how:{es:'Brotar un tubérculo en agua, separar los brotes con raíces.'},
      drying:{es:'No aplica.'},
      storage:{es:'Tubérculos curados se conservan varios meses en lugar fresco.'},
    },
  },

  {
    id:'bok_choy', category:'hortaliza', rarity:'tradicional', emoji:'🥬',
    name:{es:'Bok choy / Pak choi', fr:'Bok choy'}, latin:'Brassica rapa subsp. chinensis', family:{es:'Brasicáceas'},
    water:{es:'Regular'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:25, height:{es:'25–35 cm'},
    sow:{es:'Mar–May y Ago–Oct (directo o almácigo)'}, harv:{es:'50 días post-siembra'},
    sowM:[0,0,1,1,1,0,0,1,1,1,0,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[1,1,0,1,1,1,1,0,0,1,1,1],
    growth_days:55,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:5 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:25 },
      { id:'harv',   name:{es:'Cosecha'},      icon:'🥬', color:'#DCEDD3', bg:'rgba(59,88,56,.10)',   days:25 },
    ],
    advice:{
      0:{es:['Sembrar en estación fresca — sube a flor rápido con calor.','Suelo húmedo y rico.']},
      1:{es:['Aclarar a 25 cm.','Aporte de compost al mes.']},
      2:{es:['Cosechar planta entera o por hojas exteriores.','Hojas suaves, tallos crujientes.']},
    },
    companions:['cebolla','apio','manzanilla'],
    avoid:['frutilla'],
    climate:{es:'Mejor en estación fresca. Adoptado en huertas chilenas modernas.'},
    zones:['Todas las zonas excepto desértico extremo'],
    uses:{
      culinary:{es:'Salteados al wok, sopas, ensaladas, guisos chinos.'},
      nutritional:{es:'Vitamina C, calcio, hierro. Bajo en calorías.'},
      medicinal:{es:'Hoja crucífera con virtudes generales de la familia.'},
    },
    problems:[
      {es:'Pulguilla en hojas — malla.'},
      {es:'Subida a flor con calor — cosechar antes.'},
    ],
    seeds:{
      when:{es:'Dejar planta florecer al fin del ciclo. Vainas largas secas.'},
      how:{es:'Cortar vainas, separar semillas.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 4 años.'},
    },
  },

  {
    id:'escarola', category:'hortaliza', rarity:'tradicional', emoji:'🥬',
    name:{es:'Escarola', fr:'Scarole'}, latin:'Cichorium endivia', family:{es:'Asteráceas'},
    water:{es:'Regular'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:30, height:{es:'25 cm'},
    sow:{es:'Feb–Abr y Ago–Sep (almácigo o directo)'}, harv:{es:'80 días post-siembra'},
    sowM:[0,1,1,1,0,0,0,1,1,0,0,0], plantM:[0,0,0,1,1,0,0,0,1,1,0,0], harvM:[1,1,0,0,0,1,1,1,0,0,1,1],
    growth_days:80,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:8 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:32 },
      { id:'head',   name:{es:'Formación de roseta'}, icon:'🥬', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:40 },
    ],
    advice:{
      0:{es:['Sembrar superficial, mantener húmedo.','Más sabrosa en clima fresco.']},
      1:{es:['Trasplantar a 30 cm.','Algunos prefieren atar las hojas para blanquearla.']},
      2:{es:['Cosechar antes de que suba a flor.','Sabor ligeramente amargo, ideal en ensaladas mixtas.']},
    },
    companions:['rabanito','zanahoria','frutilla'],
    avoid:[],
    climate:{es:'Adaptable. Crece bien en otoño-invierno-primavera en zona central.'},
    zones:['Todas las zonas'],
    uses:{
      culinary:{es:'Ensaladas, contornos, guisos suaves.'},
      nutritional:{es:'Folato y vitamina A. Sabor amargo característico.'},
      medicinal:{es:'Tradicionalmente apreciada como aperitivo digestivo (amargor abre el apetito).'},
    },
    problems:[
      {es:'Babosas en plantas jóvenes — ceniza.'},
      {es:'Subida a flor con calor.'},
    ],
    seeds:{
      when:{es:'Dejar una planta florecer.'},
      how:{es:'Recolectar cabezuelas con vilanos cuando se abren.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 4 años.'},
    },
  },

  {
    id:'berro', category:'hortaliza', rarity:'tradicional', emoji:'🌿',
    name:{es:'Berro', fr:'Cresson'}, latin:'Nasturtium officinale', family:{es:'Brasicáceas'},
    water:{es:'Alto'}, sun:{es:'Semisombra'}, sun_hours:4, spacing_cm:15, height:{es:'20–40 cm'},
    sow:{es:'Mar–Oct (esqueje en agua)'}, harv:{es:'45 días post-siembra'},
    sowM:[0,0,1,1,1,1,1,1,1,1,0,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[1,1,1,1,1,1,1,1,1,1,1,1],
    growth_days:45,
    stages:[
      { id:'plant',  name:{es:'Enraizamiento'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:10 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:20 },
      { id:'harv',   name:{es:'Cosecha continua'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:15 },
    ],
    advice:{
      0:{es:['Originalmente acuático, necesita MUCHA humedad.','Cultivo fácil en maceta con plato siempre con agua.']},
      1:{es:['Cortar ramas frecuentemente estimula rebrote.','Cosechar antes de la floración para mejor sabor.']},
      2:{es:['Hojas pequeñas tienen el sabor más picante.','Tradicional en sopa de berro chilena.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Crece bien donde hay agua constante. En el sur, los berros silvestres son abundantes.'},
    zones:['Todas las zonas con agua suficiente'],
    uses:{
      culinary:{es:'Ensalada de berros con limón, sopa de berros, sándwich, jugos verdes.'},
      nutritional:{es:'Hoja densa en vitamina C, K, hierro y calcio.'},
      medicinal:{es:'Tradicionalmente recomendado como tónico depurativo de primavera.'},
    },
    problems:[
      {es:'Caracoles y babosas — control manual o cerveza.'},
      {es:'Si crece silvestre cerca de aguas no seguras: hervir antes de comer (parásitos).'},
    ],
    seeds:{
      when:{es:'Se multiplica más fácil por esqueje en agua.'},
      how:{es:'Cortar rama de 10 cm, poner en vaso de agua, raíces en una semana.'},
      drying:{es:'No aplica.'},
      storage:{es:'Mantener una mata pequeña en maceta para esquejes continuos.'},
    },
  },

  {
    id:'mostaza_hoja', category:'hortaliza', rarity:'tradicional', emoji:'🌿',
    name:{es:'Mostaza hoja', fr:'Moutarde'}, latin:'Brassica juncea', family:{es:'Brasicáceas'},
    water:{es:'Regular'}, sun:{es:'Pleno sol'}, sun_hours:5, spacing_cm:20, height:{es:'40 cm'},
    sow:{es:'Mar–May y Ago–Oct (directo)'}, harv:{es:'40 días post-siembra'},
    sowM:[0,0,1,1,1,0,0,1,1,1,0,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[1,1,0,1,1,1,1,0,0,1,1,1],
    growth_days:50,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:5 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:25 },
      { id:'harv',   name:{es:'Cosecha'},      icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:20 },
    ],
    advice:{
      0:{es:['Germina rápido, 3–5 días.','Sembrar al voleo en cantero.']},
      1:{es:['Cosechar hojas tiernas — más suaves.','Subida a flor rápida con calor — cosechar todo y resembrar.']},
      2:{es:['Si florece, las semillas se usan como mostaza condimento.','También sirve como abono verde para mejorar el suelo.']},
    },
    companions:['lechuga','espinaca'],
    avoid:[],
    climate:{es:'Crece todo el año en clima templado.'},
    zones:['Todas las zonas'],
    uses:{
      culinary:{es:'Hojas tiernas en ensaladas, salteados. Semillas para condimento.'},
      nutritional:{es:'Hoja picante con buen aporte de vitamina C y calcio.'},
      medicinal:{es:'Tradicionalmente apreciada como aperitivo en pequeñas cantidades.'},
    },
    problems:[
      {es:'Pulguilla — malla.'},
      {es:'Subida a flor con calor — sembrar en estación fresca.'},
    ],
    seeds:{
      when:{es:'Dejar planta florecer, vainas alargadas se secan.'},
      how:{es:'Cortar vainas secas, abrir, recolectar.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 4 años.'},
    },
  },

  {
    id:'topinambur', category:'hortaliza', rarity:'tradicional', emoji:'🌻',
    name:{es:'Topinambur', fr:'Topinambour'}, latin:'Helianthus tuberosus', family:{es:'Asteráceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:50, height:{es:'2–3 m'},
    sow:{es:'Ago–Oct (plantar tubérculo)'}, plant:{es:'Ago–Oct'}, harv:{es:'May–Ago'},
    sowM:[0,0,0,0,0,0,0,1,1,1,0,0], plantM:[0,0,0,0,0,0,0,1,1,1,0,0], harvM:[0,0,0,0,1,1,1,1,0,0,0,0],
    growth_days:240,
    stages:[
      { id:'plant',  name:{es:'Brotación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:30 },
      { id:'growth', name:{es:'Crecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:120 },
      { id:'tuber',  name:{es:'Engorde de tubérculos'}, icon:'🌻', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:90 },
    ],
    advice:{
      0:{es:['Plantar tubérculos brotados, 10 cm de profundidad.','Muy rústico — crece en suelos pobres.']},
      1:{es:['Casi no necesita riego.','Cuidado: una vez plantado es difícil de erradicar.']},
      2:{es:['Cosechar tras las primeras heladas — mejor sabor.','Dejar siempre algunos tubérculos en tierra: vuelven el año siguiente.']},
    },
    companions:[],
    avoid:['papa'],
    climate:{es:'Crece en todo Chile. Muy resistente, casi invasivo.'},
    zones:['Todas las zonas excepto desértico'],
    uses:{
      culinary:{es:'Cocido, en puré, sopas, gratinado, salteado. Sabor entre alcachofa y papa.'},
      nutritional:{es:'Inulina (fibra prebiótica), hierro, potasio.'},
      medicinal:{es:'Tradicionalmente apreciado como alimento que favorece la flora intestinal.'},
    },
    problems:[
      {es:'Puede volverse invasivo — plantarlo en un rincón controlado.'},
      {es:'Inulina puede causar molestias digestivas en personas sensibles.'},
    ],
    seeds:{
      when:{es:'Multiplicación por tubérculo (se reproduce solo).'},
      how:{es:'Cualquier trozo de tubérculo con un brote sirve.'},
      drying:{es:'No aplica.'},
      storage:{es:'Lo más práctico: dejar tubérculos en tierra hasta usarlos.'},
    },
  },

  {
    id:'cardo', category:'hortaliza', rarity:'tradicional', emoji:'🌿',
    name:{es:'Cardo', fr:'Cardon'}, latin:'Cynara cardunculus', family:{es:'Asteráceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:80, height:{es:'1,5–2 m'},
    sow:{es:'Sep–Nov (almácigo o directo)'}, plant:{es:'Oct–Dic'}, harv:{es:'Abr–Jul'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,0,1,1,1], harvM:[0,0,0,1,1,1,1,0,0,0,0,0],
    growth_days:200,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:14 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:60 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)',   days:126 },
    ],
    advice:{
      0:{es:['Pariente cercano de la alcachofa.','Sembrar después de las heladas.']},
      1:{es:['Plantar bien espaciado — se hace muy grande.','Tradicional pero menos cultivado hoy.']},
      2:{es:['Atar las hojas con cordel y cubrirlas con paja para blanquear los tallos (3 semanas antes).','Cosechar los tallos blanqueados — la parte comestible.']},
    },
    companions:['haba'],
    avoid:[],
    climate:{es:'Mediterráneo. Tradicional en huertas familiares antiguas de zona central.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule'],
    uses:{
      culinary:{es:'Tallos blanqueados en gratinados, tortillas, guisos. Sabor entre alcachofa y apio.'},
      nutritional:{es:'Fibra (cinarina), bajo en calorías.'},
      medicinal:{es:'Mismas virtudes tradicionales que la alcachofa.'},
    },
    problems:[
      {es:'Pulgones en hojas — agua jabonosa.'},
      {es:'Necesita espacio y blanqueo — labor intensiva pero gratificante.'},
    ],
    seeds:{
      when:{es:'Si florece, recolectar semillas de cabezuelas secas.'},
      how:{es:'Frotar cabezuelas sobre tela.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 5 años.'},
    },
  },

  {
    id:'olivo', category:'arbol', rarity:'tradicional', emoji:'🫒',
    photo: 'photos/olivo.jpg',
    name:{es:'Olivo', fr:'Olivier'}, latin:'Olea europaea', family:{es:'Oleáceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:8, spacing_cm:500, height:{es:'3–8 m'},
    sow:{es:'Sep–Nov (plantar)'}, plant:{es:'Sep–Nov'}, harv:{es:'Mar–Jun'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,1,1,1,0], harvM:[0,0,1,1,1,1,0,0,0,0,0,0],
    growth_days:1825,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:180 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1460 },
      { id:'fruit',  name:{es:'Producción'}, icon:'🫒', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',  days:185 },
    ],
    advice:{
      0:{es:['Muy rústico — soporta sequía, calor y suelos pobres.','Plantar en primavera.']},
      1:{es:['Casi sin riego una vez establecido.','Primeros frutos al 5°–7° año.']},
      2:{es:['Cosechar aceitunas verdes para encurtir, negras para aceite.','Vive cientos de años — árbol generacional.']},
    },
    companions:['lavanda','romero'],
    avoid:[],
    climate:{es:'Mediterráneo seco. Olivares tradicionales en Azapa, Huasco, O\'Higgins. Aceite de oliva chileno reconocido.'},
    zones:['Arica','Tarapacá','Atacama','Coquimbo','Valparaíso','RM','O\'Higgins','Maule'],
    uses:{
      culinary:{es:'Aceitunas encurtidas, aceite de oliva extra virgen, hojas en infusión.'},
      nutritional:{es:'Grasa saludable (monoinsaturada), antioxidantes (polifenoles).'},
      medicinal:{es:'Las hojas en infusión son tradicionalmente apreciadas como tónico.'},
    },
    problems:[
      {es:'Conchuela negra (escama) — limpiar con aceite mineral.'},
      {es:'Mosca del olivo — trampas con feromona.'},
    ],
    seeds:{
      when:{es:'Multiplicación por estaca semileñosa o plantín injertado.'},
      how:{es:'Plantines de variedades probadas (Arbequina, Frantoio, Picual).'},
      drying:{es:'Las aceitunas se procesan en salmuera o se prensan.'},
      storage:{es:'Aceite en envase oscuro, lugar fresco.'},
    },
  },

  {
    id:'membrillo', category:'arbol', rarity:'tradicional', emoji:'🟡',
    photo: 'photos/membrillo.jpg',
    name:{es:'Membrillo', fr:'Cognassier'}, latin:'Cydonia oblonga', family:{es:'Rosáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:400, height:{es:'3–5 m'},
    sow:{es:'Jun–Ago'}, plant:{es:'Jun–Ago'}, harv:{es:'Abr–May'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[0,0,0,1,1,0,0,0,0,0,0,0],
    growth_days:1095,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:90 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:730 },
      { id:'fruit',  name:{es:'Producción'}, icon:'🟡', color:'#FFF8E6', bg:'rgba(200,160,58,.15)',  days:275 },
    ],
    advice:{
      0:{es:['Tradicionalísimo del huerto chileno antiguo.','Plantar en invierno.']},
      1:{es:['Bajo mantenimiento, larga vida.','Primer fruto al 3°–4° año.']},
      2:{es:['Cosechar bien amarillos y aromáticos.','Crudo es áspero — siempre cocido o en dulce de membrillo.']},
    },
    companions:['lavanda'],
    avoid:[],
    climate:{es:'Muy tradicional en valles centrales: RM, O\'Higgins, Maule. El dulce de membrillo es clásico.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío'],
    uses:{
      culinary:{es:'Dulce de membrillo, jaleas, mermeladas, asado al horno con carnes.'},
      nutritional:{es:'Pectina abundante (cuaja sin agregar), fibra, vitamina C.'},
      medicinal:{es:'Tradicionalmente apreciado por su efecto astringente suave en la digestión.'},
    },
    problems:[
      {es:'Hojas con manchas (entomosporiosis) — variedades resistentes.'},
      {es:'Frutos golpeados se pudren rápido — manejar con cuidado.'},
    ],
    seeds:{
      when:{es:'Multiplicación por estaca o injerto.'},
      how:{es:'Plantines comerciales son lo más práctico.'},
      drying:{es:'No aplica.'},
      storage:{es:'Los frutos curados se conservan un mes en lugar fresco.'},
    },
  },

  {
    id:'granado', category:'arbol', rarity:'tradicional', emoji:'🌳',
    photo: 'photos/granado.jpg',
    name:{es:'Granado', fr:'Grenadier'}, latin:'Punica granatum', family:{es:'Litráceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:8, spacing_cm:400, height:{es:'3–5 m'},
    sow:{es:'Jun–Ago'}, plant:{es:'Jun–Ago'}, harv:{es:'Mar–May'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[0,0,1,1,1,0,0,0,0,0,0,0],
    growth_days:1095,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:90 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:730 },
      { id:'fruit',  name:{es:'Producción'}, icon:'🌳', color:'#FBE9E7', bg:'rgba(181,90,40,.12)',  days:275 },
    ],
    advice:{
      0:{es:['Plantar en primavera o invierno.','Muy rústico — soporta sequía y calor.']},
      1:{es:['Casi sin riego una vez establecido.','Hermosa floración roja en primavera.']},
      2:{es:['Cosechar cuando la cáscara se raja levemente.','Granos rojos brillantes — comer frescos o en jugo.']},
    },
    companions:['lavanda'],
    avoid:[],
    climate:{es:'Mediterráneo seco. Norte chico, valles centrales. Símbolo de la abundancia.'},
    zones:['Atacama','Coquimbo','Valparaíso','RM','O\'Higgins','Maule'],
    uses:{
      culinary:{es:'Granos frescos, jugo de granada, postres, ensaladas, decoración.'},
      nutritional:{es:'Antioxidantes notables (punicalaginas), vitamina C.'},
      medicinal:{es:'Tradicionalmente apreciado por su frescor y como tónico.'},
    },
    problems:[
      {es:'Rajado de fruta por exceso de agua tardía — manejar riego.'},
      {es:'Hormigas en flores y frutos — bandas pegajosas en el tronco.'},
    ],
    seeds:{
      when:{es:'Multiplicación por estaca leñosa muy fiable.'},
      how:{es:'Cortar rama de 30 cm en invierno, plantar.'},
      drying:{es:'No aplica para semillas.'},
      storage:{es:'Frutos enteros se conservan un mes a temperatura ambiente.'},
    },
  },

  {
    id:'almendro', category:'arbol', rarity:'tradicional', emoji:'🌳',
    photo: 'photos/almendro.jpg',
    name:{es:'Almendro', fr:'Amandier'}, latin:'Prunus dulcis', family:{es:'Rosáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:8, spacing_cm:600, height:{es:'4–8 m'},
    sow:{es:'Jun–Ago'}, plant:{es:'Jun–Ago'}, harv:{es:'Feb–Abr'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[0,1,1,1,0,0,0,0,0,0,0,0],
    growth_days:1460,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:90 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1095 },
      { id:'fruit',  name:{es:'Producción'}, icon:'🌳', color:'#FBE9E7', bg:'rgba(181,90,40,.12)',  days:275 },
    ],
    advice:{
      0:{es:['Plantar en invierno. Suelo bien drenado.','Floración muy temprana (julio-agosto) — espectacular flores rosadas.']},
      1:{es:['Primeros frutos al 3°–4° año.','Necesita polinizador cercano para muchas variedades.']},
      2:{es:['Cosechar cuando la cáscara externa se abre.','Curar al sol unos días antes de guardar.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Mediterráneo seco. Tradicional en RM, O\'Higgins, Maule. Floración temprana es señal de fin de invierno.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule'],
    uses:{
      culinary:{es:'Almendras crudas, tostadas, en repostería (alfajores, turrones), leche de almendras.'},
      nutritional:{es:'Excelente proteína, grasas saludables, vitamina E, magnesio.'},
      medicinal:{es:'Aceite de almendras tradicional para piel.'},
    },
    problems:[
      {es:'Heladas en floración — pérdida total en años malos.'},
      {es:'Monilia y cloca como otros prunus.'},
    ],
    seeds:{
      when:{es:'Multiplicación por injerto sobre patrón resistente.'},
      how:{es:'Plantines comerciales son lo seguro.'},
      drying:{es:'Almendras con cáscara: secar al sol, conservar muchos meses.'},
      storage:{es:'Almendras peladas en frasco hermético, refrigerador para larga conservación.'},
    },
  },

  {
    id:'nispero', category:'arbol', rarity:'tradicional', emoji:'🍊',
    photo: 'photos/nispero.jpg',
    name:{es:'Níspero', fr:'Néflier du Japon'}, latin:'Eriobotrya japonica', family:{es:'Rosáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:400, height:{es:'3–6 m'},
    sow:{es:'Sep–Nov'}, plant:{es:'Sep–Nov'}, harv:{es:'Oct–Dic'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,1,1,1,0], harvM:[0,0,0,0,0,0,0,0,0,1,1,1],
    growth_days:1095,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:90 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:730 },
      { id:'fruit',  name:{es:'Producción'}, icon:'🍊', color:'#FBE9E7', bg:'rgba(181,90,40,.12)',  days:275 },
    ],
    advice:{
      0:{es:['Plantar en primavera, ubicación soleada y resguardada.','Florece en otoño — sensible a heladas fuertes.']},
      1:{es:['Casi sin mantenimiento.','Primeros frutos al 4° año.']},
      2:{es:['Cosechar bien anaranjados y aromáticos.','Primera fruta de primavera, muy esperada.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Mediterráneo. Bien en RM, Valparaíso, O\'Higgins. Árbol común en patios del centro.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule'],
    uses:{
      culinary:{es:'Fresco, mermelada, conservas, kuchen.'},
      nutritional:{es:'Vitamina A, potasio, fibra.'},
      medicinal:{es:'Tradicionalmente apreciado por su frescor en primavera.'},
    },
    problems:[
      {es:'Heladas en floración (otoño) dañan los frutos jóvenes.'},
      {es:'Pájaros — proteger con malla si vale la pena.'},
    ],
    seeds:{
      when:{es:'Por semilla (cuesco) crecen árboles vigorosos, frutos al 5° año.'},
      how:{es:'Sembrar cuesco fresco en maceta — germinan bien.'},
      drying:{es:'No aplica.'},
      storage:{es:'Frutos no se conservan — comer frescos.'},
    },
  },

  {
    id:'chirimoya', category:'arbol', rarity:'tradicional', emoji:'🟢',
    photo: 'photos/chirimoya.jpg',
    name:{es:'Chirimoya', fr:'Chérimole'}, latin:'Annona cherimola', family:{es:'Anonáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:500, height:{es:'5–8 m'},
    sow:{es:'Oct–Dic'}, plant:{es:'Oct–Dic'}, harv:{es:'Mar–Jun'},
    sowM:[0,0,0,0,0,0,0,0,0,1,1,1], plantM:[0,0,0,0,0,0,0,0,0,1,1,1], harvM:[0,0,1,1,1,1,0,0,0,0,0,0],
    growth_days:1460,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:90 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1095 },
      { id:'fruit',  name:{es:'Producción'}, icon:'🟢', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',  days:275 },
    ],
    advice:{
      0:{es:['Originaria de zonas templadas-subtropicales.','Sensible a heladas — proteger en sur.']},
      1:{es:['Polinización a menudo manual para mejor cuajado (con pincel).','Primeros frutos al 3°–4° año.']},
      2:{es:['Cosechar firmes — maduran tras cosecha.','Lista cuando cede suavemente al apretarla.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Norte chico (La Serena, Coquimbo) y valles cálidos del centro. Quillota es tradicional.'},
    zones:['Coquimbo','Valparaíso','RM'],
    uses:{
      culinary:{es:'Fresca, jugos, helados, ensaladas de fruta, mousses.'},
      nutritional:{es:'Vitamina C, B6, fibra.'},
      medicinal:{es:'Pulpa muy digestiva, apreciada en alimentación de niños.'},
    },
    problems:[
      {es:'Cuajado bajo sin polinización manual — usar pincel suave.'},
      {es:'Heladas dañan severamente — solo zonas templadas.'},
    ],
    seeds:{
      when:{es:'Por semilla los plantines crecen lentos.'},
      how:{es:'Plantines injertados producen antes.'},
      drying:{es:'No aplica.'},
      storage:{es:'Frutos maduros se conservan pocos días.'},
    },
  },

  {
    id:'quinoa', category:'hortaliza', rarity:'tradicional', emoji:'🌾',
    name:{es:'Quinoa', fr:'Quinoa'}, latin:'Chenopodium quinoa', family:{es:'Amarantáceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:30, height:{es:'1–2 m'},
    sow:{es:'Ago–Oct (directo)'}, harv:{es:'Feb–Abr'},
    sowM:[0,0,0,0,0,0,0,1,1,1,0,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[0,1,1,1,0,0,0,0,0,0,0,0],
    growth_days:140,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:7 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:70 },
      { id:'flower', name:{es:'Floración'},    icon:'🌾', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:33 },
      { id:'grain',  name:{es:'Maduración del grano'}, icon:'🌾', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:30 },
    ],
    advice:{
      0:{es:['Originaria de los Andes — bien adaptada al clima chileno.','Suelo bien drenado, no necesita gran fertilidad.']},
      1:{es:['Resistente a sequía.','Crecimiento rápido tras la germinación.']},
      2:{es:['Cosechar cuando las espigas se vuelven doradas.','Enjuagar bien el grano antes de cocinar (saponinas amargas).']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Patrimonio andino. Norte chico de Chile (Atacama, Coquimbo) tradición quechua/aymara, hoy revaluada.'},
    zones:['Arica','Tarapacá','Antofagasta','Atacama','Coquimbo','Valparaíso','RM'],
    uses:{
      culinary:{es:'Como arroz, en ensaladas, sopas, postres. Hojas tiernas también comestibles.'},
      nutritional:{es:'Proteína vegetal completa (todos los aminoácidos esenciales). Hierro.'},
      medicinal:{es:'Alimento andino milenario, apreciado por su densidad nutricional.'},
    },
    problems:[
      {es:'Sembrar tarde puede dar floración con calor extremo — adelantar.'},
      {es:'Saponinas amargas en la cáscara — siempre lavar antes de cocinar.'},
    ],
    seeds:{
      when:{es:'Cosechar las espigas cuando los granos están bien duros.'},
      how:{es:'Cortar espigas, secar, frotar para separar.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Frasco hermético en lugar seco. Viabilidad 5+ años.'},
    },
  },

  {
    id:'amaranto', category:'hortaliza', rarity:'tradicional', emoji:'🌾',
    name:{es:'Amaranto', fr:'Amarante'}, latin:'Amaranthus cruentus', family:{es:'Amarantáceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:30, height:{es:'1–2 m'},
    sow:{es:'Sep–Nov (directo)'}, harv:{es:'Feb–Abr (semillas) · hojas todo el ciclo'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[0,1,1,1,0,0,0,0,0,0,0,0],
    growth_days:120,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:7 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:60 },
      { id:'flower', name:{es:'Espigas florales'}, icon:'🌾', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:53 },
    ],
    advice:{
      0:{es:['Originario de América. Muy adaptable, casi maleza en buenas condiciones.','Suelo bien drenado.']},
      1:{es:['Resistente a calor y sequía.','Hojas jóvenes comestibles como espinaca.']},
      2:{es:['Cosechar las espigas cuando se vuelven secas y rojizas/amarillas.','Espigas decorativas — también valen como flor seca.']},
    },
    companions:['choclo','poroto_verde'],
    avoid:[],
    climate:{es:'Crece en todo Chile templado-cálido. Patrimonio andino y mesoamericano.'},
    zones:['Todas las zonas excepto extremos'],
    uses:{
      culinary:{es:'Granos hervidos como arroz, harina para pan, hojas en ensalada.'},
      nutritional:{es:'Proteína vegetal con buen perfil de aminoácidos, hierro.'},
      medicinal:{es:'Alimento ancestral de los pueblos americanos.'},
    },
    problems:[
      {es:'Puede auto-sembrarse y volverse espontáneo — controlar.'},
    ],
    seeds:{
      when:{es:'Cuando las espigas se secan y las semillas caen al frotar.'},
      how:{es:'Cortar espigas, frotar sobre tela fina.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Frasco hermético. Viabilidad 5 años.'},
    },
  },

  {
    id:'chia', category:'hierba', rarity:'tradicional', emoji:'🌿',
    name:{es:'Chía', fr:'Chia'}, latin:'Salvia hispanica', family:{es:'Lamiáceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:30, height:{es:'1–1,5 m'},
    sow:{es:'Sep–Nov (directo)'}, harv:{es:'Mar–May'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[0,0,1,1,1,0,0,0,0,0,0,0],
    growth_days:160,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:7 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:90 },
      { id:'flower', name:{es:'Floración y semilla'}, icon:'🌿', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:63 },
    ],
    advice:{
      0:{es:['Pariente de la salvia común. Originaria de Mesoamérica.','Suelo bien drenado, soporta sequía.']},
      1:{es:['Crecimiento rápido y altura considerable.','Flores azul-lila atraen polinizadores.']},
      2:{es:['Cosechar cuando las espigas se secan y las semillas caen al frotar.','Semillas diminutas, marrón claro o oscuro.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Bien adaptada en zona central. Cultivo recuperado como superalimento.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule'],
    uses:{
      culinary:{es:'Pudines, agua de chía, mezclada con leche o jugo, panadería.'},
      nutritional:{es:'Omega-3 vegetal, fibra, proteína. Forma gel al hidratarse.'},
      medicinal:{es:'Tradicionalmente apreciada por su efecto saciante y sus omega-3.'},
    },
    problems:[
      {es:'Tallos quebradizos en zonas ventosas — proteger.'},
    ],
    seeds:{
      when:{es:'Cuando las espigas se secan completamente.'},
      how:{es:'Frotar espigas sobre tela fina.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Frasco hermético en lugar seco. Viabilidad 4 años.'},
    },
  },

  {
    id:'linaza', category:'hortaliza', rarity:'tradicional', emoji:'🌾',
    name:{es:'Lino / Linaza', fr:'Lin'}, latin:'Linum usitatissimum', family:{es:'Lináceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:10, height:{es:'60–120 cm'},
    sow:{es:'Ago–Oct (directo)'}, harv:{es:'Ene–Feb (semilla)'},
    sowM:[0,0,0,0,0,0,0,1,1,1,0,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[1,1,0,0,0,0,0,0,0,0,0,0],
    growth_days:110,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:7 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:60 },
      { id:'seed',   name:{es:'Floración y semilla'}, icon:'🌾', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:43 },
    ],
    advice:{
      0:{es:['Sembrar al voleo en suelo suelto.','Flores azules muy delicadas.']},
      1:{es:['Crece rápido y bonito en cantero.','Bajo mantenimiento.']},
      2:{es:['Cosechar cuando las cápsulas están secas y crepitan.','Semillas marrones o doradas según variedad.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Bien adaptado en zona central y sur. Tradicional para fibra y semilla.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío'],
    uses:{
      culinary:{es:'Semillas en panadería, agua de linaza (mucílago), molidas en yogur.'},
      nutritional:{es:'Omega-3 vegetal, fibra soluble. Mucílago calmante.'},
      medicinal:{es:'Agua de linaza tradicionalmente apreciada como digestiva.'},
    },
    problems:[
      {es:'Hierbas competidoras — sembrar denso para cubrir el suelo.'},
    ],
    seeds:{
      when:{es:'Cuando las cápsulas están totalmente secas.'},
      how:{es:'Cortar plantas, abrir cápsulas sobre tela.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Frasco hermético. Viabilidad 3 años (omega-3 se oxidan).'},
    },
  },

  {
    id:'eneldo', category:'hierba', rarity:'tradicional', emoji:'🌿',
    photo: 'photos/eneldo.jpg',
    name:{es:'Eneldo', fr:'Aneth'}, latin:'Anethum graveolens', family:{es:'Apiáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:25, height:{es:'60–100 cm'},
    sow:{es:'Ago–Nov (directo)'}, harv:{es:'Hojas todo el ciclo · semillas Feb–Mar'},
    sowM:[0,0,0,0,0,0,0,1,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[1,1,1,0,0,0,0,0,0,1,1,1],
    growth_days:90,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:10 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:50 },
      { id:'seed',   name:{es:'Floración y semilla'}, icon:'🌿', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:30 },
    ],
    advice:{
      0:{es:['Sembrar directo — no le gusta el trasplante.','Crece rápido.']},
      1:{es:['Cosechar hojas frecuentemente para retrasar floración.','Tradicional con pescados, encurtidos, salsas.']},
      2:{es:['Las semillas también son aromáticas (panes, encurtidos).','Atrae polinizadores y depredadores de pulgones.']},
    },
    companions:['repollo','pepino'],
    avoid:['zanahoria'],
    climate:{es:'Adaptable. Mejor en estación fresca, sube a flor con calor.'},
    zones:['Todas las zonas'],
    uses:{
      culinary:{es:'Pescados, ensaladas, encurtidos (pickles), salsas tipo tzatziki.'},
      nutritional:{es:'Aporta aceites esenciales aromáticos.'},
      medicinal:{es:'Infusión tradicional para cólicos suaves.'},
    },
    problems:[
      {es:'Floración rápida con calor — sembrar en estación fresca.'},
    ],
    seeds:{
      when:{es:'Cuando las umbelas están secas.'},
      how:{es:'Cortar umbelas, secar bajo techo, golpear sobre tela.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Frasco hermético. Viabilidad 3 años. Se auto-siembra fácilmente.'},
    },
  },

  {
    id:'hinojo', category:'hierba', rarity:'tradicional', emoji:'🌿',
    name:{es:'Hinojo', fr:'Fenouil'}, latin:'Foeniculum vulgare', family:{es:'Apiáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:30, height:{es:'1–2 m'},
    sow:{es:'Ago–Oct (directo o almácigo)'}, harv:{es:'Hojas todo el ciclo · bulbo otoño'},
    sowM:[0,0,0,0,0,0,0,1,1,1,0,0], plantM:[0,0,0,0,0,0,0,0,0,1,1,0], harvM:[1,1,1,1,1,0,0,0,0,0,1,1],
    growth_days:120,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:12 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:60 },
      { id:'bulb',   name:{es:'Formación de bulbo'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:48 },
    ],
    advice:{
      0:{es:['Variedad bulbosa para comer el bulbo blanco, variedad común para semilla y hojas.','Suelo profundo, no compacto.']},
      1:{es:['Aporcar bulbos para mantenerlos blancos.','Hojas plumosas muy aromáticas.']},
      2:{es:['Cosechar bulbos firmes, antes de subir a flor.','Semillas para anises naturales.']},
    },
    companions:[],
    avoid:['tomate','poroto_verde','arveja','haba'],
    climate:{es:'Mediterráneo. Bien en zona central. A menudo crece silvestre en bordes de caminos.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío'],
    uses:{
      culinary:{es:'Bulbo en ensaladas, asado, sopas. Hojas en pescados. Semillas en panes, infusiones, licores.'},
      nutritional:{es:'Fibra, vitamina C, potasio.'},
      medicinal:{es:'Infusión digestiva tradicional, especialmente para gases.'},
    },
    problems:[
      {es:'Es alelopático — inhibe muchas plantas vecinas. Plantar separado.'},
    ],
    seeds:{
      when:{es:'Cuando las umbelas están secas y las semillas crujen al frotar.'},
      how:{es:'Cortar umbelas, secar, frotar sobre tela.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Frasco hermético. Viabilidad 3 años.'},
    },
  },

  {
    id:'estragon', category:'hierba', rarity:'tradicional', emoji:'🌿',
    name:{es:'Estragón', fr:'Estragon'}, latin:'Artemisia dracunculus', family:{es:'Asteráceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:40, height:{es:'60–90 cm'},
    sow:{es:'Sep–Nov (esqueje preferentemente)'}, plant:{es:'Sep–Nov'}, harv:{es:'Nov–Abr'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,1,1,1,0], harvM:[1,1,1,1,0,0,0,0,0,0,1,1],
    growth_days:365,
    stages:[
      { id:'plant',  name:{es:'Instalación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:60 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:120 },
      { id:'harv',   name:{es:'Cosecha continua'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:185 },
    ],
    advice:{
      0:{es:['La variedad francesa (la culinaria) se multiplica solo por esqueje.','La de semilla es la variedad rusa, menos aromática.']},
      1:{es:['Suelo bien drenado.','Perenne — vuelve cada año si no se hiela.']},
      2:{es:['Cosechar ramas tiernas todo el verano.','Conservar en vinagre o congelado.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Mediterráneo. Sensible a heladas fuertes en el sur.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble'],
    uses:{
      culinary:{es:'Vinagre de estragón, salsa bearnesa, pollo, pescado, mostazas aromáticas.'},
      nutritional:{es:'Aceites esenciales aromáticos.'},
      medicinal:{es:'Tradicionalmente apreciado como aperitivo digestivo.'},
    },
    problems:[
      {es:'Pudrición por exceso de agua.'},
    ],
    seeds:{
      when:{es:'La variedad culinaria no produce semilla viable — multiplicar por esqueje.'},
      how:{es:'Cortar rama de 10 cm, enraizar en agua o sustrato húmedo.'},
      drying:{es:'No aplica.'},
      storage:{es:'Hojas secas pierden mucho aroma — preferir fresco o congelado.'},
    },
  },

  {
    id:'mejorana', category:'hierba', rarity:'tradicional', emoji:'🌿',
    name:{es:'Mejorana', fr:'Marjolaine'}, latin:'Origanum majorana', family:{es:'Lamiáceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:25, height:{es:'30–50 cm'},
    sow:{es:'Sep–Nov (almácigo o esqueje)'}, plant:{es:'Oct–Dic'}, harv:{es:'Todo el año'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,0,1,1,1], harvM:[1,1,1,1,1,1,1,1,1,1,1,1],
    growth_days:90,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:14 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:50 },
      { id:'harv',   name:{es:'Cosecha continua'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:26 },
    ],
    advice:{
      0:{es:['Pariente cercano del orégano, sabor más dulce y delicado.','Semilla muy pequeña — sembrar superficial.']},
      1:{es:['Pinchar puntas para densificar.','Pleno sol concentra aromas.']},
      2:{es:['Cosechar todo el año, máximo en floración.','Hojas secas conservan bien el aroma.']},
    },
    companions:['repollo','tomate'],
    avoid:[],
    climate:{es:'Mediterráneo. Bien en RM, Valparaíso, O\'Higgins.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble'],
    uses:{
      culinary:{es:'Salsas de tomate suaves, pasta, asados delicados, infusiones.'},
      nutritional:{es:'Aceites esenciales aromáticos.'},
      medicinal:{es:'Infusión digestiva y relajante tradicional.'},
    },
    problems:[
      {es:'Pudrición por exceso de agua.'},
    ],
    seeds:{
      when:{es:'En verano cuando las espigas se secan.'},
      how:{es:'Cortar espigas, frotar sobre tela fina.'},
      drying:{es:'Ramos colgados boca abajo, 2 semanas.'},
      storage:{es:'Frasco hermético. Viabilidad 3 años.'},
    },
  },

  {
    id:'toronjil', category:'hierba', rarity:'tradicional', emoji:'🍃',
    photo: 'photos/toronjil.jpg',
    name:{es:'Toronjil / Melisa', fr:'Mélisse'}, latin:'Melissa officinalis', family:{es:'Lamiáceas'},
    water:{es:'Regular'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:40, height:{es:'40–80 cm'},
    sow:{es:'Sep–Nov (almácigo o esqueje)'}, plant:{es:'Oct–Dic'}, harv:{es:'Nov–Abr'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,0,1,1,1], harvM:[1,1,1,1,0,0,0,0,0,0,1,1],
    growth_days:120,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:14 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🍃', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:60 },
      { id:'harv',   name:{es:'Cosecha continua'}, icon:'🍃', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:46 },
    ],
    advice:{
      0:{es:['Olor a limón inconfundible al rozar las hojas.','Suelo húmedo, semisombra ideal.']},
      1:{es:['Crecimiento rústico, casi maleza en buenas condiciones.','Atrae mucho a las abejas.']},
      2:{es:['Cosechar antes de la floración para máximo aroma.','Se vuelve perenne con el tiempo.']},
    },
    companions:['tomate'],
    avoid:[],
    climate:{es:'Muy bien en todo Chile templado-húmedo.'},
    zones:['Todas las zonas'],
    uses:{
      culinary:{es:'Infusión cítrica relajante, postres, ensaladas, agua aromatizada.'},
      nutritional:{es:'Aceites esenciales suaves.'},
      medicinal:{es:'Infusión clásica para calmar nervios y conciliar el sueño.'},
    },
    problems:[
      {es:'Puede volverse invasiva — contener en maceta.'},
    ],
    seeds:{
      when:{es:'Multiplicación más fácil por esqueje o división.'},
      how:{es:'Cortar rama con raíz, plantar en otro sitio.'},
      drying:{es:'Ramos colgados boca abajo.'},
      storage:{es:'Hojas secas en frasco para infusión.'},
    },
  },

  {
    id:'hierba_luisa', category:'hierba', rarity:'tradicional', emoji:'🌿',
    name:{es:'Hierba luisa', fr:'Verveine citronnée'}, latin:'Aloysia citrodora', family:{es:'Verbenáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:60, height:{es:'1–2 m'},
    sow:{es:'Sep–Nov (esqueje)'}, plant:{es:'Oct–Dic'}, harv:{es:'Nov–Abr'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,0,1,1,1], harvM:[1,1,1,1,0,0,0,0,0,0,1,1],
    growth_days:180,
    stages:[
      { id:'plant',  name:{es:'Instalación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:60 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:60 },
      { id:'harv',   name:{es:'Cosecha continua'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:60 },
    ],
    advice:{
      0:{es:['Aroma a limón muy intenso al rozar las hojas.','Multiplicar por esqueje en primavera.']},
      1:{es:['Sensible a heladas fuertes — proteger en sur.','Pierde las hojas en invierno (caducifolia).']},
      2:{es:['Cosechar ramas en plena vegetación.','Infusión tradicional muy aromática.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Mediterráneo. Bien en zona central. En sur necesita lugar resguardado.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío'],
    uses:{
      culinary:{es:'Infusión clásica chilena después de comer, postres, helados.'},
      nutritional:{es:'Aceites esenciales aromáticos.'},
      medicinal:{es:'Infusión digestiva y relajante muy querida en Chile.'},
    },
    problems:[
      {es:'Sensible a heladas — proteger primer invierno.'},
    ],
    seeds:{
      when:{es:'Multiplicación por esqueje en primavera.'},
      how:{es:'Cortar rama de 15 cm, enraizar en sustrato húmedo.'},
      drying:{es:'Ramos colgados boca abajo, lugar oscuro.'},
      storage:{es:'Hojas secas en frasco hermético — conservan aroma muchos meses.'},
    },
  },

  {
    id:'ruda', category:'hierba', rarity:'tradicional', emoji:'🌿',
    name:{es:'Ruda', fr:'Rue officinale'}, latin:'Ruta graveolens', family:{es:'Rutáceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:50, height:{es:'50–80 cm'},
    sow:{es:'Sep–Nov (almácigo o esqueje)'}, plant:{es:'Oct–Dic'}, harv:{es:'Hojas todo el año'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,0,1,1,1], harvM:[1,1,1,1,1,1,1,1,1,1,1,1],
    growth_days:365,
    stages:[
      { id:'plant',  name:{es:'Instalación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:60 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:120 },
      { id:'mature', name:{es:'Mata adulta'},   icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:185 },
    ],
    advice:{
      0:{es:['Olor fuerte característico.','Suelo bien drenado, sol pleno.']},
      1:{es:['Resistente, casi sin cuidados.','Manipular con guantes — puede causar dermatitis en pieles sensibles bajo sol.']},
      2:{es:['Cosechar hojas todo el año.','Perenne — vive muchos años.']},
    },
    companions:['frutilla'],
    avoid:['albahaca'],
    climate:{es:'Muy rústica. Crece en huertos familiares antiguos de todo Chile.'},
    zones:['Todas las zonas excepto desértico extremo'],
    uses:{
      culinary:{es:'Hojas en cantidades muy pequeñas en aguardientes y vinagres.'},
      nutritional:{es:'No es alimento — uso aromático y medicinal solamente.'},
      medicinal:{es:'Planta tradicional chilena, muy presente en la cultura popular. Usar con prudencia.'},
    },
    problems:[
      {es:'En contacto con piel + sol puede causar quemaduras (fototoxicidad).'},
    ],
    seeds:{
      when:{es:'Cuando las cápsulas están secas.'},
      how:{es:'Cortar tallos secos, recolectar semillas pequeñas oscuras.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 3 años.'},
    },
  },

  {
    id:'ajenjo', category:'hierba', rarity:'tradicional', emoji:'🌿',
    name:{es:'Ajenjo', fr:'Absinthe'}, latin:'Artemisia absinthium', family:{es:'Asteráceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:60, height:{es:'60–120 cm'},
    sow:{es:'Sep–Nov (esqueje o almácigo)'}, plant:{es:'Sep–Dic'}, harv:{es:'Todo el año'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,1,1,1,1], harvM:[1,1,1,1,1,1,1,1,1,1,1,1],
    growth_days:365,
    stages:[
      { id:'plant',  name:{es:'Instalación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:60 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:120 },
      { id:'mature', name:{es:'Mata adulta'},   icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:185 },
    ],
    advice:{
      0:{es:['Hojas plateadas muy aromáticas y muy amargas.','Suelo pobre y bien drenado.']},
      1:{es:['Pleno sol acentúa el color plata.','Tradicional repelente de insectos en huerto.']},
      2:{es:['Cosechar hojas en plena vegetación.','No plantar junto a hortalizas comestibles — inhibe el crecimiento.']},
    },
    companions:[],
    avoid:['frutilla','salvia'],
    climate:{es:'Muy rústica. Tradicional en huertas antiguas como repelente.'},
    zones:['Todas las zonas excepto desértico extremo'],
    uses:{
      culinary:{es:'Uso muy limitado — base del absinthe y de algunos vermut.'},
      nutritional:{es:'No es alimento.'},
      medicinal:{es:'Tradicionalmente usada como aperitivo amargo y tónico, en muy pequeñas cantidades.'},
    },
    problems:[
      {es:'Es alelopática — inhibe muchas plantas vecinas.'},
    ],
    seeds:{
      when:{es:'Cuando las cabezuelas están secas.'},
      how:{es:'Frotar sobre tela fina, semillas diminutas.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 3 años.'},
    },
  },

  {
    id:'tagete', category:'flor', rarity:'tradicional', emoji:'🌼',
    photo: 'photos/tagete.jpg',
    name:{es:'Tagete', fr:"Œillet d'Inde"}, latin:'Tagetes patula', family:{es:'Asteráceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:25, height:{es:'20–50 cm'},
    sow:{es:'Sep–Oct (almácigo)'}, plant:{es:'Oct–Dic'}, harv:{es:'Nov–Mar (flores continuas)'},
    sowM:[0,0,0,0,0,0,0,0,1,1,0,0], plantM:[0,0,0,0,0,0,0,0,0,1,1,1], harvM:[1,1,1,0,0,0,0,0,0,0,1,1],
    growth_days:90,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:7 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:25 },
      { id:'flower', name:{es:'Floración continua'}, icon:'🌼', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:58 },
    ],
    advice:{
      0:{es:['Germina rápido. Sembrar en bandeja o directo.','Aliado clásico del huerto — repele nemátodos.']},
      1:{es:['Plantar entre tomates, ajíes y cucurbitáceas — protección natural.','Riego escaso.']},
      2:{es:['Quitar flores marchitas estimula nueva floración.','Auto-siembra fácilmente para el año siguiente.']},
    },
    companions:['tomate','aji_verde','zapallo','poroto_verde'],
    avoid:[],
    climate:{es:'Adaptable. Tradicional en huertas chilenas como protección.'},
    zones:['Todas las zonas excepto desértico extremo'],
    uses:{
      culinary:{es:'Pétalos comestibles en pequeña cantidad para decorar.'},
      nutritional:{es:'No es alimento principal.'},
      medicinal:{es:'Tradicionalmente usado como repelente natural en el huerto.'},
    },
    problems:[
      {es:'Bababosas en plantas jóvenes — proteger.'},
    ],
    seeds:{
      when:{es:'Cuando las cabezuelas están secas en la planta.'},
      how:{es:'Cortar cabezuelas, separar las semillas alargadas negras.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 3 años.'},
    },
  },

  {
    id:'borraja', category:'flor', rarity:'tradicional', emoji:'💙',
    photo: 'photos/borraja.jpg',
    name:{es:'Borraja', fr:'Bourrache'}, latin:'Borago officinalis', family:{es:'Boragináceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:40, height:{es:'40–80 cm'},
    sow:{es:'Ago–Nov (directo)'}, harv:{es:'Hojas todo el ciclo · flores azules todo el verano'},
    sowM:[0,0,0,0,0,0,0,1,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[1,1,1,1,1,0,0,0,0,1,1,1],
    growth_days:90,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:10 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:40 },
      { id:'flower', name:{es:'Floración continua'}, icon:'💙', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:40 },
    ],
    advice:{
      0:{es:['Sembrar directo — no le gusta el trasplante.','Crece muy rápido y rústica.']},
      1:{es:['Flores azul intenso muy queridas por las abejas.','Hojas con pelos — usar guantes para cosechar.']},
      2:{es:['Auto-siembra muy abundante — aparece año tras año.','Tradicional asociada con frutilla.']},
    },
    companions:['frutilla','tomate'],
    avoid:[],
    climate:{es:'Adaptable. Crece en todo Chile templado.'},
    zones:['Todas las zonas excepto extremos'],
    uses:{
      culinary:{es:'Flores comestibles en ensaladas y postres. Hojas jóvenes en sopas (sabor a pepino).'},
      nutritional:{es:'Aporta sabor fresco a las preparaciones.'},
      medicinal:{es:'Tradicionalmente apreciada como suavemente diurética.'},
    },
    problems:[
      {es:'Puede volverse abundante por auto-siembra — controlar.'},
      {es:'Babosas en plantas jóvenes.'},
    ],
    seeds:{
      when:{es:'Las semillas grandes caen al madurar.'},
      how:{es:'Recoger las semillas alrededor de la planta.'},
      drying:{es:'Tres días al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 3 años.'},
    },
  },

  {
    id:'cosmos', category:'flor', rarity:'tradicional', emoji:'🌸',
    photo: 'photos/cosmos.jpg',
    name:{es:'Cosmos', fr:'Cosmos'}, latin:'Cosmos bipinnatus', family:{es:'Asteráceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:30, height:{es:'60–150 cm'},
    sow:{es:'Sep–Nov (almácigo o directo)'}, plant:{es:'Oct–Dic'}, harv:{es:'Dic–Mar (flores)'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,0,1,1,1], harvM:[1,1,1,0,0,0,0,0,0,0,0,1],
    growth_days:90,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:7 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:50 },
      { id:'flower', name:{es:'Floración continua'}, icon:'🌸', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:33 },
    ],
    advice:{
      0:{es:['Muy fácil. Sembrar al voleo o en cantero.','Soporta suelos pobres y sequía.']},
      1:{es:['Hojas plumosas, flores rosas/blancas/púrpuras.','Atrae mariposas y polinizadores.']},
      2:{es:['Cortar flores frecuentemente prolonga la floración.','Auto-siembra abundante.']},
    },
    companions:['tomate','calendula','tagete'],
    avoid:[],
    climate:{es:'Adaptable. Crece en todo Chile templado-cálido.'},
    zones:['Todas las zonas excepto desértico extremo'],
    uses:{
      culinary:{es:'No es alimento principal — uso ornamental.'},
      nutritional:{es:'Aporta belleza al jardín y atrae polinizadores.'},
      medicinal:{es:'Atrae mariquitas y depredadores naturales de plagas.'},
    },
    problems:[
      {es:'Tallos delgados pueden quebrarse con viento — sembrar agrupado.'},
    ],
    seeds:{
      when:{es:'Cuando las cabezuelas se secan.'},
      how:{es:'Recolectar las semillas alargadas oscuras.'},
      drying:{es:'Tres días al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 3–4 años.'},
    },
  },

  {
    id:'capuchina', category:'flor', rarity:'tradicional', emoji:'🌼',
    photo: 'photos/capuchina.jpg',
    name:{es:'Capuchina', fr:'Capucine'}, latin:'Tropaeolum majus', family:{es:'Tropaeoláceas'},
    water:{es:'Moderado'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:30, height:{es:'30 cm (mata) o trepadora 2 m'},
    sow:{es:'Sep–Nov (directo)'}, harv:{es:'Nov–Abr (flores y hojas)'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[1,1,1,1,0,0,0,0,0,0,1,1],
    growth_days:80,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:10 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:30 },
      { id:'flower', name:{es:'Floración continua'}, icon:'🌼', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:40 },
    ],
    advice:{
      0:{es:['Semillas grandes — fácil de manipular.','Suelo pobre da más flores; suelo rico da más hojas.']},
      1:{es:['Variedades trepadoras necesitan tutor.','Atrae pulgones — protege otras plantas.']},
      2:{es:['Flores naranjas o amarillas comestibles, picantes.','Cortar flores frecuentemente prolonga floración.']},
    },
    companions:['tomate','repollo'],
    avoid:[],
    climate:{es:'Crece en todo Chile templado. Muy presente en huertas tradicionales.'},
    zones:['Todas las zonas excepto desértico extremo'],
    uses:{
      culinary:{es:'Flores y hojas en ensaladas (sabor picante a berro). Botones encurtidos como alcaparras.'},
      nutritional:{es:'Vitamina C en hojas y flores.'},
      medicinal:{es:'Tradicionalmente apreciada por sus compuestos sulfurados.'},
    },
    problems:[
      {es:'Pulgones — los atrae a propósito (planta sacrificial).'},
    ],
    seeds:{
      when:{es:'Las semillas grandes caen al madurar.'},
      how:{es:'Recolectar bajo la planta o de las flores marchitas.'},
      drying:{es:'Tres días al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 4 años.'},
    },
  },

  {
    id:'pensamiento', category:'flor', rarity:'tradicional', emoji:'💜',
    name:{es:'Pensamiento', fr:'Pensée'}, latin:'Viola tricolor', family:{es:'Violáceas'},
    water:{es:'Regular'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:15, height:{es:'15–25 cm'},
    sow:{es:'Feb–Abr (almácigo otoñal)'}, plant:{es:'Abr–Jun'}, harv:{es:'Ago–Nov (flores)'},
    sowM:[0,1,1,1,0,0,0,0,0,0,0,0], plantM:[0,0,0,1,1,1,0,0,0,0,0,0], harvM:[0,0,0,0,0,0,0,1,1,1,1,0],
    growth_days:120,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:14 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',   days:40 },
      { id:'flower', name:{es:'Floración'},    icon:'💜', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:66 },
    ],
    advice:{
      0:{es:['Sembrar en otoño para floración invernal-primaveral.','Suelo fresco y bien drenado.']},
      1:{es:['Trasplantar a maceta o cantero en otoño.','Resiste fríos y heladas suaves.']},
      2:{es:['Quitar flores marchitas estimula nueva floración.','Floración generosa hasta el calor del verano.']},
    },
    companions:['lechuga','frutilla'],
    avoid:[],
    climate:{es:'Bien en clima fresco. Flor de invierno-primavera en zona central.'},
    zones:['Todas las zonas excepto desértico extremo'],
    uses:{
      culinary:{es:'Flores comestibles para decorar ensaladas y postres.'},
      nutritional:{es:'No es alimento principal.'},
      medicinal:{es:'Tradicionalmente apreciada en tisanas suaves para piel.'},
    },
    problems:[
      {es:'Floración decae con calor — esperan al otoño siguiente.'},
    ],
    seeds:{
      when:{es:'Cuando las cápsulas se abren y muestran semillas.'},
      how:{es:'Recolectar antes que se dispersen solas.'},
      drying:{es:'Tres días al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 2–3 años.'},
    },
  },

  {
    id:'aliso', category:'flor', rarity:'tradicional', emoji:'🌼',
    photo: 'photos/aliso.jpg',
    name:{es:'Aliso de mar', fr:'Alysse'}, latin:'Lobularia maritima', family:{es:'Brasicáceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:20, height:{es:'10–20 cm'},
    sow:{es:'Sep–Nov (almácigo o directo)'}, harv:{es:'Oct–Abr (flores continuas)'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[1,1,1,1,0,0,0,0,0,1,1,1],
    growth_days:75,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:7 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:28 },
      { id:'flower', name:{es:'Floración continua'}, icon:'🌼', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:40 },
    ],
    advice:{
      0:{es:['Sembrar al voleo en bordes y rincones.','Muy fácil y rústica.']},
      1:{es:['Forma tapices florales blancos, rosados o púrpuras.','Aroma a miel atrae polinizadores.']},
      2:{es:['Auto-siembra muy abundante.','Perfecta como borde de huerto — atrae depredadores de plagas.']},
    },
    companions:['lechuga','tomate','frutilla'],
    avoid:[],
    climate:{es:'Adaptable. Crece muy bien en zona central.'},
    zones:['Todas las zonas excepto desértico extremo'],
    uses:{
      culinary:{es:'No es alimento principal — pétalos comestibles en decoración.'},
      nutritional:{es:'No es alimento.'},
      medicinal:{es:'Atrae sírfidos y avispas parasitarias — control natural de pulgones.'},
    },
    problems:[
      {es:'Casi sin problemas.'},
    ],
    seeds:{
      when:{es:'Las cápsulas pequeñas se secan en pocas semanas.'},
      how:{es:'Sacudir tallos secos sobre tela.'},
      drying:{es:'Ya están secas.'},
      storage:{es:'Sobre rotulado. Viabilidad 4 años. Auto-siembra hace innecesario guardar mucho.'},
    },
  },

  /* ─── PATRIMONIAL ─── plantas con peso cultural chileno (nativas, andinas, mapuches) */

  {
    id:'maqui', category:'fruta', rarity:'patrimonial', emoji:'🟣',
    photo: 'photos/maqui.jpg',
    name:{es:'Maqui', fr:'Maqui'}, latin:'Aristotelia chilensis', family:{es:'Eleocarpáceas'},
    water:{es:'Moderado'}, sun:{es:'Sol o semisombra'}, sun_hours:6, spacing_cm:300, height:{es:'3–5 m'},
    sow:{es:'Jun–Ago (plantar arbusto)'}, plant:{es:'Jun–Ago'}, harv:{es:'Dic–Feb'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[1,1,0,0,0,0,0,0,0,0,0,1],
    growth_days:1095,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:180 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:730 },
      { id:'fruit',  name:{es:'Producción'}, icon:'🟣', color:'#FBE9E7', bg:'rgba(140,90,160,.10)',  days:185 },
    ],
    advice:{
      0:{es:['Árbol nativo del centro-sur de Chile. Sagrado para los mapuches.','Crece en bordes de bosque, suelos ácidos.']},
      1:{es:['Resistente y de bajo mantenimiento.','Primeros frutos al 3°–4° año.']},
      2:{es:['Cosechar las bayas negro-violáceas en plena madurez.','La fruta más antioxidante conocida — patrimonio nutricional chileno.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Centro-sur de Chile (Maule a Los Lagos). Crece silvestre en muchas zonas. Sagrado en cultura mapuche.'},
    zones:['Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Bayas frescas, mermelada, jugos, vino de maqui (tradicional mapuche).'},
      nutritional:{es:'Bayas con notable concentración de antocianinas.'},
      medicinal:{es:'Tradicional mapuche: hojas e infusión usadas como tónico ancestral.'},
    },
    problems:[
      {es:'Pájaros aman las bayas — proteger o cosechar pronto.'},
    ],
    seeds:{
      when:{es:'Multiplicación por estaca o por plantines.'},
      how:{es:'Las semillas requieren estratificación fría — más fiable comprar plantines.'},
      drying:{es:'Las bayas se secan al sol para conservar.'},
      storage:{es:'Bayas secas en frasco hermético.'},
    },
  },

  {
    id:'murta', category:'fruta', rarity:'patrimonial', emoji:'🟣',
    photo: 'photos/murta.jpg',
    name:{es:'Murta', fr:'Murta'}, latin:'Ugni molinae', family:{es:'Mirtáceas'},
    water:{es:'Moderado'}, sun:{es:'Sol o semisombra'}, sun_hours:6, spacing_cm:150, height:{es:'1,5–2,5 m'},
    sow:{es:'Jun–Ago (plantar arbusto)'}, plant:{es:'Jun–Ago'}, harv:{es:'Mar–May'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[0,0,1,1,1,0,0,0,0,0,0,0],
    growth_days:1095,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:180 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:730 },
      { id:'fruit',  name:{es:'Producción'}, icon:'🟣', color:'#FBE9E7', bg:'rgba(140,90,160,.10)',  days:185 },
    ],
    advice:{
      0:{es:['Arbusto nativo del sur de Chile. Patrimonio de Chiloé y la Araucanía.','Suelo ácido, húmedo pero drenado.']},
      1:{es:['Crecimiento lento, vida muy larga.','Hermosas flores blancas-rosadas en primavera.']},
      2:{es:['Bayas pequeñas rojo-púrpura, muy aromáticas.','Se conserva tradicionalmente en aguardiente (murta con membrillo).']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Bosque valdiviano: Maule a Los Lagos. Patrimonio del sur de Chile.'},
    zones:['Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Mermelada de murta, kuchen, murta con membrillo en aguardiente.'},
      nutritional:{es:'Aromática y delicada — patrimonio gastronómico chilote.'},
      medicinal:{es:'Tradición chilota: infusión de hojas para resfríos.'},
    },
    problems:[
      {es:'Crecimiento lento — paciencia los primeros años.'},
    ],
    seeds:{
      when:{es:'Multiplicación por estaca o plantín preferible.'},
      how:{es:'Plantines en viveros especializados del sur.'},
      drying:{es:'Las bayas se secan o se conservan en almíbar.'},
      storage:{es:'Murta seca en frasco hermético, aguanta meses.'},
    },
  },

  {
    id:'nalca', category:'hortaliza', rarity:'patrimonial', emoji:'🌿',
    photo: 'photos/nalca.jpg',
    name:{es:'Nalca / Pangue', fr:'Nalca'}, latin:'Gunnera tinctoria', family:{es:'Gunneráceas'},
    water:{es:'Alto'}, sun:{es:'Semisombra'}, sun_hours:4, spacing_cm:300, height:{es:'1,5–2 m'},
    sow:{es:'Sep–Nov (planta perenne)'}, harv:{es:'Sep–Dic (peciolos jóvenes)'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,1,1,1,0], harvM:[0,0,0,0,0,0,0,0,1,1,1,1],
    growth_days:730,
    stages:[
      { id:'plant',  name:{es:'Instalación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:180 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:365 },
      { id:'harv',   name:{es:'Cosecha anual'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:185 },
    ],
    advice:{
      0:{es:['Planta nativa del sur de Chile. Hojas enormes (hasta 2 m).','Necesita mucha humedad y semisombra.']},
      1:{es:['Crece en bordes de río y bosques húmedos.','Perenne — vuelve cada primavera.']},
      2:{es:['Cosechar los peciolos (tallos) jóvenes en primavera.','Patrimonio mapuche-huilliche del sur.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Sur de Chile: Biobío a Los Lagos. Necesita mucha agua y humedad.'},
    zones:['Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Peciolos pelados, comidos crudos con sal o cocidos como verdura. Sabor ácido refrescante.'},
      nutritional:{es:'Vitamina C, sabor cítrico natural.'},
      medicinal:{es:'Patrimonio alimentario del sur de Chile.'},
    },
    problems:[
      {es:'Sólo crece bien en zonas muy húmedas — no es para zona central seca.'},
      {es:'Considerada invasiva en algunos países — controlar bien.'},
    ],
    seeds:{
      when:{es:'Por semilla muy lento. Mejor división de rizomas.'},
      how:{es:'Separar trozos de raíz con yema en primavera.'},
      drying:{es:'No aplica.'},
      storage:{es:'Los peciolos no se conservan — comer frescos.'},
    },
  },

  {
    id:'cochayuyo', category:'hortaliza', rarity:'patrimonial', emoji:'🌊',
    name:{es:'Cochayuyo', fr:'Cochayuyo'}, latin:'Durvillaea antarctica', family:{es:'Durvillaeáceas (alga)'},
    water:{es:'(alga marina — se recolecta, no se cultiva)'}, sun:{es:'(intermareal)'}, sun_hours:0, spacing_cm:0, height:{es:'Hasta 15 m de largo'},
    sow:{es:'No se cultiva — se recolecta en costa rocosa'}, harv:{es:'Todo el año, ideal verano'},
    sowM:[0,0,0,0,0,0,0,0,0,0,0,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[1,1,1,1,1,1,1,1,1,1,1,1],
    growth_days:365,
    stages:[
      { id:'harv',   name:{es:'Recolección en costa'}, icon:'🌊', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:365 },
    ],
    advice:{
      0:{es:['Alga gigante de las costas rocosas chilenas.','Se recolecta directamente en marejada baja — no se cultiva.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Costa chilena de Valparaíso al sur. Patrimonio alimentario tradicional, mapuche-lafkenche.'},
    zones:['Valparaíso','O\'Higgins','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Charquicán de cochayuyo, guiso, ensalada, sopa. Plato tradicional chileno.'},
      nutritional:{es:'Excelente fuente de yodo, calcio, hierro, fibra marina.'},
      medicinal:{es:'Patrimonio alimentario por su densidad mineral y sabor único.'},
    },
    problems:[
      {es:'Recolectar sólo en marejadas — no arrancar las algas vivas.'},
      {es:'Asegurarse de que la costa esté libre de contaminación.'},
    ],
    seeds:{
      when:{es:'No aplica — se recolecta el alga adulta.'},
      how:{es:'Se compra seco en mercados locales o se recolecta directo.'},
      drying:{es:'Se seca naturalmente al sol y viento.'},
      storage:{es:'Seco en bolsa de papel o frasco hermético — conserva muchos meses.'},
    },
  },

  {
    id:'boldo', category:'hierba', rarity:'patrimonial', emoji:'🍃',
    photo: 'photos/boldo.jpg',
    name:{es:'Boldo', fr:'Boldo'}, latin:'Peumus boldus', family:{es:'Monimiáceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:400, height:{es:'5–15 m'},
    sow:{es:'Jun–Ago (plantar plantín)'}, plant:{es:'Jun–Ago'}, harv:{es:'Hojas todo el año'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[1,1,1,1,1,1,1,1,1,1,1,1],
    growth_days:1825,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:180 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1095 },
      { id:'mature', name:{es:'Árbol adulto'}, icon:'🍃', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:550 },
    ],
    advice:{
      0:{es:['Árbol nativo del bosque esclerófilo de Chile central.','Crece silvestre en cerros y quebradas.']},
      1:{es:['Muy resistente a sequía una vez establecido.','Crecimiento lento, vida muy larga.']},
      2:{es:['Cosechar hojas todo el año — más aroma en verano.','Patrimonio medicinal chileno por excelencia.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Endémico de Chile central. RM, Valparaíso, O\'Higgins, Maule. Crece silvestre, también plantable.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío'],
    uses:{
      culinary:{es:'Hojas en infusión — té de boldo, presente en casi todas las casas chilenas.'},
      nutritional:{es:'Aceites esenciales aromáticos.'},
      medicinal:{es:'Infusión digestiva clásica chilena, especialmente tras comidas pesadas.'},
    },
    problems:[
      {es:'Crecimiento muy lento — paciencia o respetar los silvestres.'},
    ],
    seeds:{
      when:{es:'Multiplicación difícil por semilla. Plantines de vivero.'},
      how:{es:'Comprar plantines o respetar los silvestres en cerros.'},
      drying:{es:'Hojas secas al aire conservan el aroma muchos meses.'},
      storage:{es:'Hojas secas en frasco hermético.'},
    },
  },

  {
    id:'matico', category:'hierba', rarity:'patrimonial', emoji:'🍃',
    name:{es:'Matico', fr:'Matico'}, latin:'Buddleja globosa', family:{es:'Escrofulariáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:200, height:{es:'2–4 m'},
    sow:{es:'Sep–Nov (esqueje)'}, plant:{es:'Sep–Nov'}, harv:{es:'Hojas todo el año · flores Nov–Ene'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,1,1,1,0], harvM:[1,1,1,1,1,1,1,1,1,1,1,1],
    growth_days:365,
    stages:[
      { id:'plant',  name:{es:'Instalación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:90 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:180 },
      { id:'mature', name:{es:'Arbusto adulto'}, icon:'🍃', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:95 },
    ],
    advice:{
      0:{es:['Arbusto nativo del centro-sur de Chile.','Multiplicar por esqueje en primavera.']},
      1:{es:['Flores naranjas en bola, muy características.','Atrae colibríes y abejas.']},
      2:{es:['Cosechar hojas todo el año para uso medicinal.','Planta sagrada en la tradición mapuche.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Centro-sur de Chile. RM al sur. Patrimonio mapuche.'},
    zones:['Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'No es alimento — uso medicinal tradicional.'},
      nutritional:{es:'Sin uso alimentario.'},
      medicinal:{es:'Tradición mapuche y popular chilena: emplasto de hojas para heridas, infusión para malestar gástrico.'},
    },
    problems:[
      {es:'Muy resistente, casi sin problemas.'},
    ],
    seeds:{
      when:{es:'Multiplicación por esqueje en primavera, muy fiable.'},
      how:{es:'Cortar rama de 15 cm, enraizar en sustrato húmedo.'},
      drying:{es:'Hojas secas al aire.'},
      storage:{es:'Hojas secas en frasco hermético.'},
    },
  },

  {
    id:'avellano_chileno', category:'arbol', rarity:'patrimonial', emoji:'🌰',
    photo: 'photos/avellano_chileno.jpg',
    name:{es:'Avellano chileno', fr:'Noisetier du Chili'}, latin:'Gevuina avellana', family:{es:'Proteáceas'},
    water:{es:'Moderado'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:500, height:{es:'5–15 m'},
    sow:{es:'Jun–Ago (plantar plantín)'}, plant:{es:'Jun–Ago'}, harv:{es:'Feb–Abr'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[0,1,1,1,0,0,0,0,0,0,0,0],
    growth_days:2190,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:180 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1825 },
      { id:'fruit',  name:{es:'Producción'}, icon:'🌰', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',  days:185 },
    ],
    advice:{
      0:{es:['Árbol nativo del bosque valdiviano.','Suelo ácido, húmedo, bien drenado.']},
      1:{es:['Crecimiento lento, frutos al 6°–8° año.','Hermosas hojas brillantes todo el año.']},
      2:{es:['Cosechar las "avellanas" rojas cuando caen al suelo.','Patrimonio gastronómico del sur de Chile.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Sur de Chile: Maule a Los Lagos. Bosque valdiviano. Patrimonio nativo.'},
    zones:['Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Tostadas y peladas como aperitivo. Harina de avellana para postres.'},
      nutritional:{es:'Fuente notable de aceites saludables y proteína vegetal.'},
      medicinal:{es:'Patrimonio mapuche — alimento tradicional de los pueblos del sur.'},
    },
    problems:[
      {es:'Crecimiento lento — necesita paciencia.'},
    ],
    seeds:{
      when:{es:'Las avellanas frescas pueden germinar tras estratificación fría.'},
      how:{es:'Más práctico comprar plantines en viveros nativos del sur.'},
      drying:{es:'Las avellanas se tuestan o se conservan secas.'},
      storage:{es:'Frasco hermético en lugar fresco.'},
    },
  },

  {
    id:'canelo', category:'arbol', rarity:'patrimonial', emoji:'🌳',
    photo: 'photos/canelo.jpg',
    name:{es:'Canelo', fr:'Cannelle de Magellan'}, latin:'Drimys winteri', family:{es:'Winteráceas'},
    water:{es:'Moderado'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:400, height:{es:'10–20 m'},
    sow:{es:'Jun–Ago (plantar plantín)'}, plant:{es:'Jun–Ago'}, harv:{es:'(árbol sagrado — uso ceremonial)'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[1,1,1,1,1,1,1,1,1,1,1,1],
    growth_days:2190,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:180 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1825 },
      { id:'mature', name:{es:'Árbol adulto'}, icon:'🌳', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:185 },
    ],
    advice:{
      0:{es:['Árbol sagrado del pueblo mapuche — el "foye".','Suelo húmedo, ácido, ambiente templado-húmedo.']},
      1:{es:['Crecimiento lento, longevo.','Hermosa floración blanca en primavera.']},
      2:{es:['Plantarlo es un gesto de respeto a la cultura mapuche.','Centro de ceremonias en la machi mapuche.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Sur de Chile: bosque valdiviano y bosques húmedos. Sagrado en cultura mapuche.'},
    zones:['Biobío','Araucanía','Los Ríos','Los Lagos','Aysén'],
    uses:{
      culinary:{es:'Corteza y hojas usadas tradicionalmente con respeto, en cantidades pequeñas.'},
      nutritional:{es:'No es alimento — árbol ceremonial y medicinal.'},
      medicinal:{es:'Tradición medicinal mapuche profunda — se usa con respeto cultural.'},
    },
    problems:[
      {es:'No tolera sequía ni calor intenso — solo zonas húmedas templadas.'},
    ],
    seeds:{
      when:{es:'Plantines de vivero especializado del sur.'},
      how:{es:'Por semilla muy lento. Plantines más prácticos.'},
      drying:{es:'No aplica.'},
      storage:{es:'Plantar y respetar — árbol generacional.'},
    },
  },

  {
    id:'oca', category:'hortaliza', rarity:'patrimonial', emoji:'🌱',
    name:{es:'Oca', fr:'Oca'}, latin:'Oxalis tuberosa', family:{es:'Oxalidáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:30, height:{es:'20–40 cm'},
    sow:{es:'Sep–Oct (plantar tubérculos)'}, plant:{es:'Sep–Oct'}, harv:{es:'Abr–May'},
    sowM:[0,0,0,0,0,0,0,0,1,1,0,0], plantM:[0,0,0,0,0,0,0,0,1,1,0,0], harvM:[0,0,0,1,1,0,0,0,0,0,0,0],
    growth_days:200,
    stages:[
      { id:'plant',  name:{es:'Brotación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:30 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:100 },
      { id:'tuber',  name:{es:'Engorde de tubérculos'}, icon:'🌱', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:70 },
    ],
    advice:{
      0:{es:['Tubérculo andino — patrimonio del altiplano y la cordillera.','Plantar tubérculos brotados.']},
      1:{es:['Aporcar como la papa.','Tubérculos amarillos, rosados o rojos según variedad.']},
      2:{es:['Cosechar tras las primeras heladas.','Algunos prefieren asolear unos días para reducir oxalatos y endulzar.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Andina. Bien adaptada en zonas frescas: Maule, Biobío, Araucanía. Norte alto: Atacama altiplánica.'},
    zones:['Atacama','Coquimbo','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Asada, en sopas, puré, salteada. Sabor ligeramente ácido (oxalatos).'},
      nutritional:{es:'Carbohidratos, vitamina C, fibra.'},
      medicinal:{es:'Patrimonio andino — alimento ancestral de los pueblos cordilleranos.'},
    },
    problems:[
      {es:'Sensible a heladas tardías cuando emerge.'},
      {es:'Oxalatos elevados en cruda — siempre cocinar o asolear primero.'},
    ],
    seeds:{
      when:{es:'Multiplicación por tubérculo, igual que la papa.'},
      how:{es:'Conservar tubérculos sanos para plantar al año siguiente.'},
      drying:{es:'No aplica para semillas.'},
      storage:{es:'Tubérculos en lugar fresco, oscuro y ventilado.'},
    },
  },

  {
    id:'pinon_pehuen', category:'arbol', rarity:'patrimonial', emoji:'🌰',
    name:{es:'Piñón (Pehuén)', fr:'Pignon araucaria'}, latin:'Araucaria araucana', family:{es:'Araucariáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:1000, height:{es:'30–50 m (árbol enorme)'},
    sow:{es:'Sep–Nov (plantar plantín)'}, plant:{es:'Sep–Nov'}, harv:{es:'Abr–May (piñones)'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,1,1,1,0], harvM:[0,0,0,1,1,0,0,0,0,0,0,0],
    growth_days:3650,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:365 },
      { id:'growth', name:{es:'Establecimiento (décadas)'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:3100 },
      { id:'fruit',  name:{es:'Producción de piñones'}, icon:'🌰', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',  days:185 },
    ],
    advice:{
      0:{es:['Árbol sagrado del pueblo pehuenche/mapuche.','Crece en la cordillera de la Araucanía y Biobío.']},
      1:{es:['Muy lento — produce piñones después de 30+ años.','Bajo amenaza — está protegido por ley.']},
      2:{es:['Recolectar piñones caídos respetando los bosques nativos.','Patrimonio alimentario sagrado del pueblo pehuenche.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Cordillera de Biobío y Araucanía. Bosque andino-patagónico. Patrimonio sagrado del pueblo pehuenche.'},
    zones:['Biobío','Araucanía'],
    uses:{
      culinary:{es:'Piñones tostados, cocidos, hervidos. Harina para pan tradicional. Patrimonio gastronómico ancestral.'},
      nutritional:{es:'Excelente fuente de carbohidratos y proteína vegetal. Base alimentaria pehuenche.'},
      medicinal:{es:'Patrimonio vital del pueblo pehuenche — su nombre "Pehuén" significa "araucaria".'},
    },
    problems:[
      {es:'Especie en peligro — sólo recolectar piñones caídos, respetar los árboles vivos.'},
    ],
    seeds:{
      when:{es:'Por semilla difícil. Plantines de vivero certificado.'},
      how:{es:'Comprar plantines en viveros especializados.'},
      drying:{es:'Los piñones se secan al sol o se asan.'},
      storage:{es:'Piñones secos en lugar fresco — varios meses.'},
    },
  },

  {
    id:'lucuma', category:'fruta', rarity:'patrimonial', emoji:'🟡',
    photo: 'photos/lucuma.jpg',
    name:{es:'Lúcuma', fr:'Lucuma'}, latin:'Pouteria lucuma', family:{es:'Sapotáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:500, height:{es:'5–10 m'},
    sow:{es:'Sep–Nov (plantar plantín)'}, plant:{es:'Sep–Nov'}, harv:{es:'Mar–Jun'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,1,1,1,0], harvM:[0,0,1,1,1,1,0,0,0,0,0,0],
    growth_days:1825,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:180 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1460 },
      { id:'fruit',  name:{es:'Producción'}, icon:'🟡', color:'#FFF8E6', bg:'rgba(200,160,58,.15)',  days:185 },
    ],
    advice:{
      0:{es:['Originaria de los Andes (Perú, norte de Chile).','Crece en valles cálidos del norte chico.']},
      1:{es:['Sensible a heladas — sólo zonas templadas.','Primeros frutos al 4°–6° año.']},
      2:{es:['Cosechar firmes — maduran tras cosecha.','Pulpa harinosa, dulce, color amarillo intenso.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Norte chico de Chile (Coquimbo, Atacama) y valles cálidos del centro.'},
    zones:['Atacama','Coquimbo','Valparaíso','RM'],
    uses:{
      culinary:{es:'Helado de lúcuma (clásico), batidos, postres, pulpa fresca, harina de lúcuma.'},
      nutritional:{es:'Carbohidratos, fibra, vitaminas del grupo B.'},
      medicinal:{es:'Patrimonio andino — alimento ancestral apreciado por su dulzura natural.'},
    },
    problems:[
      {es:'Sensible a heladas — proteger en años fríos.'},
    ],
    seeds:{
      when:{es:'Por semilla los plantines crecen vigorosos.'},
      how:{es:'Sembrar pepita fresca en maceta — germina bien.'},
      drying:{es:'La pulpa se deshidrata para hacer harina de lúcuma.'},
      storage:{es:'Frutos maduros se conservan días, harina meses.'},
    },
  },

  {
    id:'paico', category:'hierba', rarity:'patrimonial', emoji:'🌿',
    name:{es:'Paico', fr:'Paico'}, latin:'Dysphania ambrosioides', family:{es:'Amarantáceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:40, height:{es:'60–100 cm'},
    sow:{es:'Sep–Nov (directo)'}, harv:{es:'Hojas todo el ciclo'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[1,1,1,1,0,0,0,0,0,1,1,1],
    growth_days:120,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:10 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:60 },
      { id:'harv',   name:{es:'Cosecha continua'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:50 },
    ],
    advice:{
      0:{es:['Originario de América. Aroma muy característico.','Suelo cualquiera, soporta sequía.']},
      1:{es:['Cosechar hojas según necesidad.','Auto-siembra: aparece año tras año.']},
      2:{es:['Tradicional en cocina y medicina popular de toda Sudamérica.','Usar en pequeñas cantidades — sabor muy fuerte.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Adaptable a todo Chile templado. Tradicional en huertas familiares antiguas.'},
    zones:['Todas las zonas excepto desértico extremo'],
    uses:{
      culinary:{es:'Pequeñas cantidades en frijoles, sopas, guisos — ayuda la digestión de legumbres.'},
      nutritional:{es:'Aromático intenso.'},
      medicinal:{es:'Patrimonio popular: infusión tradicional para digestión y parásitos.'},
    },
    problems:[
      {es:'Puede volverse espontáneo por auto-siembra.'},
    ],
    seeds:{
      when:{es:'Cuando las espigas con semillas se secan.'},
      how:{es:'Sacudir tallos secos sobre tela.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 4 años.'},
    },
  },

  {
    id:'chanar', category:'arbol', rarity:'patrimonial', emoji:'🌳',
    name:{es:'Chañar', fr:'Chañar'}, latin:'Geoffroea decorticans', family:{es:'Fabáceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:8, spacing_cm:500, height:{es:'3–8 m'},
    sow:{es:'Sep–Nov (plantar plantín)'}, plant:{es:'Sep–Nov'}, harv:{es:'Dic–Feb'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,1,1,1,0], harvM:[1,1,0,0,0,0,0,0,0,0,0,1],
    growth_days:1825,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:180 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1460 },
      { id:'fruit',  name:{es:'Producción'}, icon:'🌳', color:'#FBE9E7', bg:'rgba(181,90,40,.12)',  days:185 },
    ],
    advice:{
      0:{es:['Árbol del norte chico chileno. Muy resistente a sequía.','Corteza característica que se desprende en placas.']},
      1:{es:['Crece en suelos pobres, áridos.','Hermosa floración amarilla en primavera.']},
      2:{es:['Cosechar los frutos amarillos cuando están maduros.','Patrimonio del norte chico.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Norte chico chileno: Atacama, Coquimbo. Zona semiárida, valles transversales.'},
    zones:['Atacama','Coquimbo','Valparaíso'],
    uses:{
      culinary:{es:'Frutos en arrope (jarabe), harina de chañar para panes y postres.'},
      nutritional:{es:'Frutos dulces, ricos en azúcares.'},
      medicinal:{es:'Patrimonio del norte chico — alimento tradicional de los pueblos diaguitas.'},
    },
    problems:[
      {es:'Crecimiento lento — paciencia.'},
    ],
    seeds:{
      when:{es:'Las semillas germinan tras escarificación.'},
      how:{es:'Plantines en viveros del norte chico.'},
      drying:{es:'Los frutos se secan al sol para harina.'},
      storage:{es:'Frutos secos o arrope en frasco hermético.'},
    },
  },

  /* ─── RARO ─── menos comunes, especiales o de circulación restringida */

  {
    id:'luma', category:'arbol', rarity:'raro', emoji:'🌳',
    name:{es:'Luma', fr:'Luma'}, latin:'Amomyrtus luma', family:{es:'Mirtáceas'},
    water:{es:'Moderado'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:400, height:{es:'10–20 m'},
    sow:{es:'Jun–Ago (plantar plantín)'}, plant:{es:'Jun–Ago'}, harv:{es:'Mar–May'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[0,0,1,1,1,0,0,0,0,0,0,0],
    growth_days:2190,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:180 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1825 },
      { id:'fruit',  name:{es:'Producción'}, icon:'🌳', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',  days:185 },
    ],
    advice:{
      0:{es:['Árbol nativo del bosque valdiviano.','Madera muy dura, tradicionalmente usada para mangos y carbón.']},
      1:{es:['Crecimiento lento.','Hermosas flores blancas en verano.']},
      2:{es:['Frutos pequeños comestibles, sabor similar a la murta.','Madera preciada — pero plantar para conservar especie.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Bosque valdiviano: Maule a Los Lagos.'},
    zones:['Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Frutos para mermelada, similares a la murta.'},
      nutritional:{es:'Frutos pequeños y aromáticos.'},
      medicinal:{es:'Hojas en infusión tradicional para resfríos.'},
    },
    problems:[
      {es:'Crecimiento lento — paciencia.'},
    ],
    seeds:{
      when:{es:'Multiplicación por plantín de vivero nativo.'},
      how:{es:'Buscar en viveros especializados del sur.'},
      drying:{es:'Frutos secos al sol.'},
      storage:{es:'Plantar y respetar.'},
    },
  },

  {
    id:'arrayan_chileno', category:'arbol', rarity:'raro', emoji:'🌳',
    name:{es:'Arrayán chileno', fr:'Arrayán'}, latin:'Luma apiculata', family:{es:'Mirtáceas'},
    water:{es:'Moderado'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:400, height:{es:'5–15 m'},
    sow:{es:'Jun–Ago (plantar plantín)'}, plant:{es:'Jun–Ago'}, harv:{es:'Mar–May'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[0,0,1,1,1,0,0,0,0,0,0,0],
    growth_days:2190,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:180 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1825 },
      { id:'fruit',  name:{es:'Producción'}, icon:'🌳', color:'#E8F5E9', bg:'rgba(59,88,56,.12)',  days:185 },
    ],
    advice:{
      0:{es:['Árbol nativo de extraordinario tronco anaranjado.','El bosque de Arrayanes en Villarrica es Reserva Nacional.']},
      1:{es:['Crece en zonas húmedas, suelo ácido.','Crecimiento lento, longevo.']},
      2:{es:['Frutos pequeños comestibles, parientes de la murta.','Belleza ornamental excepcional.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Sur de Chile: bosque valdiviano. Patrimonio del sur.'},
    zones:['Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Frutos pequeños para mermelada artesanal.'},
      nutritional:{es:'Frutos aromáticos.'},
      medicinal:{es:'Tradicionalmente apreciado por sus hojas aromáticas.'},
    },
    problems:[
      {es:'Crecimiento muy lento — generacional.'},
    ],
    seeds:{
      when:{es:'Plantines de vivero nativo.'},
      how:{es:'Comprar en viveros especializados.'},
      drying:{es:'No aplica.'},
      storage:{es:'Árbol para plantar y heredar.'},
    },
  },

  {
    id:'peumo', category:'arbol', rarity:'raro', emoji:'🌳',
    photo: 'photos/peumo.jpg',
    name:{es:'Peumo', fr:'Peumo'}, latin:'Cryptocarya alba', family:{es:'Lauráceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:500, height:{es:'10–20 m'},
    sow:{es:'Jun–Ago (plantar plantín)'}, plant:{es:'Jun–Ago'}, harv:{es:'Feb–Abr (frutos rojos)'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[0,1,1,1,0,0,0,0,0,0,0,0],
    growth_days:2190,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:180 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1825 },
      { id:'fruit',  name:{es:'Producción'}, icon:'🌳', color:'#FBE9E7', bg:'rgba(181,90,40,.12)',  days:185 },
    ],
    advice:{
      0:{es:['Árbol del bosque esclerófilo chileno.','Muy resistente a sequía, vida larga.']},
      1:{es:['Crece silvestre en cerros de zona central.','Frutos rojos brillantes en verano.']},
      2:{es:['Los pájaros aman los frutos — observar la fauna que atrae.','Respetar los silvestres en cerros — patrimonio del bosque chileno.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Bosque esclerófilo chileno: Coquimbo a Biobío. Endémico de Chile y Argentina.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío'],
    uses:{
      culinary:{es:'Frutos comestibles tradicionalmente recolectados — sabor suave.'},
      nutritional:{es:'Frutos del bosque chileno.'},
      medicinal:{es:'Tradicionalmente apreciado en cultura popular del campo.'},
    },
    problems:[
      {es:'Especie nativa en retroceso — plantar contribuye a la conservación.'},
    ],
    seeds:{
      when:{es:'Plantines de viveros nativos.'},
      how:{es:'Buscar en viveros especializados en flora chilena.'},
      drying:{es:'No aplica.'},
      storage:{es:'Árbol generacional, plantar y respetar.'},
    },
  },

  {
    id:'yacon', category:'hortaliza', rarity:'raro', emoji:'🟤',
    name:{es:'Yacón', fr:'Yacon'}, latin:'Smallanthus sonchifolius', family:{es:'Asteráceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:80, height:{es:'1,5–2,5 m'},
    sow:{es:'Sep–Nov (plantar rizoma con brote)'}, plant:{es:'Sep–Nov'}, harv:{es:'May–Jun'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,1,1,1,0], harvM:[0,0,0,0,1,1,0,0,0,0,0,0],
    growth_days:240,
    stages:[
      { id:'plant',  name:{es:'Brotación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:30 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:120 },
      { id:'tuber',  name:{es:'Engorde de tubérculos'}, icon:'🟤', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:90 },
    ],
    advice:{
      0:{es:['Tubérculo andino — sabor dulce con fructanos (no azúcar común).','Plantar rizomas brotados.']},
      1:{es:['Mata grande, hojas tropicales muy decorativas.','Cosechar tras las primeras heladas.']},
      2:{es:['Asolear unos días después de cosechar concentra el dulzor.','Patrimonio andino con resurgir reciente.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Bien adaptado en zona central. Patrimonio andino, recientemente apreciado por su perfil dulce.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule'],
    uses:{
      culinary:{es:'Crudo en ensaladas (crujiente y dulce), en jugos, deshidratado.'},
      nutritional:{es:'Fructanos (oligofructosa) — dulzor que no eleva la glicemia bruscamente.'},
      medicinal:{es:'Apreciado por su perfil dulce singular.'},
    },
    problems:[
      {es:'Sensible a heladas durante el crecimiento.'},
    ],
    seeds:{
      when:{es:'Multiplicación por rizomas.'},
      how:{es:'Separar rizomas brotados al final del invierno.'},
      drying:{es:'No aplica.'},
      storage:{es:'Rizomas en sustrato húmedo hasta plantar.'},
    },
  },

  {
    id:'ajedrea', category:'hierba', rarity:'raro', emoji:'🌿',
    name:{es:'Ajedrea', fr:'Sarriette'}, latin:'Satureja hortensis', family:{es:'Lamiáceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:25, height:{es:'30–50 cm'},
    sow:{es:'Sep–Nov (directo)'}, harv:{es:'Hojas todo el verano'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[1,1,1,1,0,0,0,0,0,0,1,1],
    growth_days:90,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:14 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:50 },
      { id:'harv',   name:{es:'Cosecha continua'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:26 },
    ],
    advice:{
      0:{es:['Pariente del tomillo, sabor entre tomillo y orégano.','Suelo bien drenado, sol pleno.']},
      1:{es:['Pinchar puntas para densificar.','Casi sin requerimientos especiales.']},
      2:{es:['Cosechar ramas antes de la floración para máximo aroma.','Tradicionalmente acompaña los frijoles — facilita digestión.']},
    },
    companions:['poroto_verde','haba'],
    avoid:[],
    climate:{es:'Mediterráneo. Bien en zona central. Poco difundida en huertas chilenas, recuperable.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule'],
    uses:{
      culinary:{es:'Frijoles, lentejas, asados, marinadas, vinagres aromatizados.'},
      nutritional:{es:'Aceites esenciales aromáticos.'},
      medicinal:{es:'Infusión digestiva tradicional europea.'},
    },
    problems:[
      {es:'Pudrición por exceso de agua.'},
    ],
    seeds:{
      when:{es:'Cuando las espigas pequeñas se secan.'},
      how:{es:'Frotar espigas sobre tela fina.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 3 años.'},
    },
  },

  {
    id:'malva', category:'hierba', rarity:'raro', emoji:'🌸',
    name:{es:'Malva', fr:'Mauve'}, latin:'Malva sylvestris', family:{es:'Malváceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:40, height:{es:'50–120 cm'},
    sow:{es:'Sep–Nov (directo)'}, harv:{es:'Hojas y flores en plena vegetación'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[1,1,1,1,0,0,0,0,0,1,1,1],
    growth_days:100,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:10 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:50 },
      { id:'flower', name:{es:'Floración'},    icon:'🌸', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:40 },
    ],
    advice:{
      0:{es:['Crece silvestre en bordes de campo y caminos.','Muy rústica, sin requerimientos.']},
      1:{es:['Hermosas flores rosadas con venas más oscuras.','Auto-siembra fácilmente.']},
      2:{es:['Cosechar hojas y flores en plena vegetación.','Mucílago calmante (parecido al malvavisco).']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Crece en todo Chile templado. A menudo silvestre.'},
    zones:['Todas las zonas excepto desértico extremo'],
    uses:{
      culinary:{es:'Hojas jóvenes en ensaladas o cocidas. Flores comestibles.'},
      nutritional:{es:'Hoja con mucílago, vitamina A y C.'},
      medicinal:{es:'Infusión tradicional para garganta irritada y digestión suave.'},
    },
    problems:[
      {es:'Casi sin problemas.'},
    ],
    seeds:{
      when:{es:'Las cápsulas redondas (panecillos) se secan al madurar.'},
      how:{es:'Recolectar las cápsulas, separar las semillas.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 4 años.'},
    },
  },

  {
    id:'ortiga', category:'hierba', rarity:'raro', emoji:'🌿',
    name:{es:'Ortiga', fr:'Ortie'}, latin:'Urtica dioica', family:{es:'Urticáceas'},
    water:{es:'Moderado'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:40, height:{es:'60–150 cm'},
    sow:{es:'Sep–Oct (siembra o esqueje)'}, harv:{es:'Hojas todo el ciclo'},
    sowM:[0,0,0,0,0,0,0,0,1,1,0,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[1,1,1,1,1,1,1,1,1,1,1,1],
    growth_days:120,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:14 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:60 },
      { id:'mature', name:{es:'Mata adulta'},   icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:46 },
    ],
    advice:{
      0:{es:['Crece silvestre en bordes ricos en nitrógeno.','Pelos urticantes — usar guantes para cosechar.']},
      1:{es:['Aliada del huerto: el purín de ortiga es fertilizante y repelente natural.','Cuidado: invasiva si no se controla.']},
      2:{es:['Cosechar hojas jóvenes para sopas y purines.','Al cocinarla pierde el efecto urticante.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Todo Chile templado-húmedo. Silvestre en muchas zonas.'},
    zones:['Todas las zonas excepto desértico extremo'],
    uses:{
      culinary:{es:'Sopa de ortiga, salteados (cocinada — sin picazón), pesto verde.'},
      nutritional:{es:'Hoja muy nutritiva: hierro, calcio, proteína vegetal.'},
      medicinal:{es:'Purín de ortiga: el "compost líquido" del huerto.'},
    },
    problems:[
      {es:'Pelos urticantes — siempre con guantes y manga larga.'},
      {es:'Puede invadir — contener en un rincón.'},
    ],
    seeds:{
      when:{es:'Cuando las pequeñas semillas verdes maduran.'},
      how:{es:'Cortar tallos secos, frotar sobre tela.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 3 años.'},
    },
  },

  {
    id:'llanten', category:'hierba', rarity:'raro', emoji:'🌿',
    name:{es:'Llantén', fr:'Plantain'}, latin:'Plantago major', family:{es:'Plantagináceas'},
    water:{es:'Bajo'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:20, height:{es:'15–30 cm'},
    sow:{es:'Sep–Nov (directo o trasplantar silvestres)'}, harv:{es:'Hojas todo el ciclo'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[1,1,1,1,1,1,1,1,1,1,1,1],
    growth_days:60,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:10 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:35 },
      { id:'harv',   name:{es:'Cosecha continua'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:15 },
    ],
    advice:{
      0:{es:['Crece silvestre en césped y bordes.','Resistente, casi indestructible.']},
      1:{es:['Hojas grandes en roseta, espigas florales verticales.','Perenne — vuelve año tras año.']},
      2:{es:['Cosechar hojas jóvenes, tiernas, en cualquier momento.','Patrimonio popular: el "curita" del jardín — emplasto para picaduras.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Crece en todo Chile, hasta en césped. A menudo considerado maleza, valoroso como hierba medicinal.'},
    zones:['Todas las zonas'],
    uses:{
      culinary:{es:'Hojas jóvenes en ensaladas o cocidas como espinaca.'},
      nutritional:{es:'Hoja silvestre nutritiva.'},
      medicinal:{es:'Hoja machacada se aplica tradicionalmente sobre picaduras de insectos y pequeñas heridas.'},
    },
    problems:[
      {es:'Puede invadir el césped — manejar.'},
    ],
    seeds:{
      when:{es:'Espigas marrones con semillas pegajosas al madurar.'},
      how:{es:'Cortar espigas secas, recolectar semillas.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 4 años. Se auto-siembra muy bien.'},
    },
  },

  {
    id:'mil_hojas', category:'hierba', rarity:'raro', emoji:'🌼',
    name:{es:'Milenrama / Mil hojas', fr:'Achillée millefeuille'}, latin:'Achillea millefolium', family:{es:'Asteráceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:30, height:{es:'40–80 cm'},
    sow:{es:'Sep–Nov (directo o división)'}, plant:{es:'Sep–Nov'}, harv:{es:'Nov–Mar (flores)'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,0,1,1,0], harvM:[1,1,1,0,0,0,0,0,0,0,1,1],
    growth_days:120,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:14 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:60 },
      { id:'flower', name:{es:'Floración'},    icon:'🌼', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:46 },
    ],
    advice:{
      0:{es:['Crece silvestre en zonas templadas.','Hojas finamente divididas — origen del nombre.']},
      1:{es:['Resistente a sequía.','Atrae polinizadores y enemigos naturales de plagas.']},
      2:{es:['Cosechar flores en plena apertura para secar.','Patrimonio medicinal europeo difundido en huertas chilenas antiguas.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Adaptable. Tradicional en huertas familiares chilenas como aliada del huerto.'},
    zones:['Todas las zonas excepto desértico extremo'],
    uses:{
      culinary:{es:'Pequeñas cantidades en sopas, infusiones.'},
      nutritional:{es:'Aceites esenciales aromáticos.'},
      medicinal:{es:'Infusión tradicional apreciada por sus efectos suaves.'},
    },
    problems:[
      {es:'Puede invadir si las condiciones le gustan.'},
    ],
    seeds:{
      when:{es:'Cuando las cabezuelas se secan.'},
      how:{es:'Cortar cabezuelas, frotar sobre tela.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 4 años.'},
    },
  },

  {
    id:'aromo', category:'arbol', rarity:'raro', emoji:'💛',
    name:{es:'Aromo', fr:'Mimosa'}, latin:'Acacia dealbata', family:{es:'Fabáceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:500, height:{es:'8–20 m'},
    sow:{es:'Sep–Nov (plantar plantín)'}, plant:{es:'Sep–Nov'}, harv:{es:'(árbol — flor aromática)'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,1,1,1,0], harvM:[0,0,0,0,0,0,0,1,1,0,0,0],
    growth_days:1095,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:180 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:730 },
      { id:'flower', name:{es:'Floración anual'}, icon:'💛', color:'#FFF8E6', bg:'rgba(200,160,58,.15)',  days:185 },
    ],
    advice:{
      0:{es:['Crecimiento muy rápido.','Florece amarillo intenso en fin de invierno — espectacular.']},
      1:{es:['ATENCIÓN: especie invasiva. Considerar antes de plantar.','En Chile se ha naturalizado, especialmente en zona central.']},
      2:{es:['Hermosas flores aromáticas en julio-agosto.','Si planta: respetar bosques nativos y controlar dispersión de semillas.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Adaptable. En Chile central está naturalizada — usar con conciencia ambiental.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío'],
    uses:{
      culinary:{es:'Flores comestibles en pequeña cantidad para decoración.'},
      nutritional:{es:'Uso ornamental principalmente.'},
      medicinal:{es:'Patrimonio popular: anuncia el fin del invierno.'},
    },
    problems:[
      {es:'INVASIVA — considerar especies nativas (boldo, peumo, quillay) como alternativa.'},
    ],
    seeds:{
      when:{es:'Vainas marrones con semillas duras tras la floración.'},
      how:{es:'No multiplicar — preferible no propagar especies invasoras.'},
      drying:{es:'No aplica.'},
      storage:{es:'Mejor reemplazar por especies nativas en plantaciones futuras.'},
    },
  },

  /* ─── EXPANSIÓN NATIVA CHILENA ─── flora endémica y patrimonial */

  {
    id:'copihue', category:'flor', rarity:'patrimonial', emoji:'🌺',
    photo: 'photos/copihue.jpg',
    name:{es:'Copihue', fr:'Copihue'}, latin:'Lapageria rosea', family:{es:'Filesiáceas'},
    water:{es:'Moderado'}, sun:{es:'Semisombra'}, sun_hours:4, spacing_cm:200, height:{es:'enredadera, 3–5 m'},
    sow:{es:'Jun–Ago (plantar)'}, plant:{es:'Jun–Ago'}, harv:{es:'Mar–May (flor)'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[0,0,1,1,1,0,0,0,0,0,0,0],
    growth_days:1095,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:200 },
      { id:'growth', name:{es:'Enredadera joven'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:730 },
      { id:'flower', name:{es:'Floración'}, icon:'🌺', color:'#FBE9E7', bg:'rgba(181,90,40,.12)',  days:165 },
    ],
    advice:{
      0:{es:['Flor nacional de Chile. Trepadora de bosque nativo.','Suelo ácido, húmedo, con materia orgánica. Bajo árboles o pérgola.']},
      1:{es:['Crecimiento lento — los primeros años parece dormido.','Sombra suave y aire húmedo. No tolera viento seco.']},
      2:{es:['Flores grandes acampanadas rojas (a veces rosadas o blancas).','La planta puede vivir décadas y florece más con la edad.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Bosque valdiviano: Maule a Los Lagos. Necesita humedad y semisombra.'},
    zones:['Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Las flores son comestibles — pétalos en ensaladas, pero no es uso común.'},
      medicinal:{es:'Tradición sureña: infusión de raíz como diurético suave.'},
    },
    problems:[
      {es:'Cochinillas en hojas — limpiar con paño húmedo.'},
      {es:'No florece los primeros años — esperar 3–5 temporadas.'},
    ],
    seeds:{
      when:{es:'Cápsulas verdes que viran a amarillo en otoño.'},
      how:{es:'Extraer las semillas negras de la pulpa. Germinación lenta — meses.'},
      drying:{es:'Secar suavemente a la sombra.'},
      storage:{es:'Sobre rotulado, lugar fresco. Mejor sembrar fresco.'},
    },
  },

  {
    id:'calafate', category:'fruta', rarity:'patrimonial', emoji:'🟣',
    name:{es:'Calafate', fr:'Calafate'}, latin:'Berberis microphylla', family:{es:'Berberidáceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:200, height:{es:'1,5–3 m'},
    sow:{es:'Jun–Ago (plantar arbusto)'}, plant:{es:'Jun–Ago'}, harv:{es:'Feb–Abr'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[0,1,1,1,0,0,0,0,0,0,0,0],
    growth_days:1095,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:200 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:730 },
      { id:'fruit',  name:{es:'Producción'}, icon:'🟣', color:'#FBE9E7', bg:'rgba(140,90,160,.10)', days:165 },
    ],
    advice:{
      0:{es:['Arbusto espinoso de la Patagonia. "El que come calafate vuelve" dice la copla.','Resistente al frío, viento y suelos pobres.']},
      1:{es:['Crecimiento moderado. Hojas pequeñas verdes y espinas tripartitas.','Flores amarillas en primavera atraen abejas nativas.']},
      2:{es:['Bayas azul-negras del tamaño de un arándano, agridulces.','Cosecha breve a fines del verano patagónico.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Patagonia: Aysén, Magallanes y zonas frías del sur. Resiste heladas fuertes.'},
    zones:['Biobío','Araucanía','Los Ríos','Los Lagos','Aysén','Magallanes'],
    uses:{
      culinary:{es:'Mermelada de calafate, licor, postres patagónicos.'},
      nutritional:{es:'Bayas ricas en antocianinas, sabor intenso.'},
      medicinal:{es:'Tradición tehuelche: infusión de raíz como tónico.'},
    },
    problems:[
      {es:'Espinas — usar guantes al cosechar.'},
      {es:'Crecimiento lento al inicio.'},
    ],
    seeds:{
      when:{es:'Bayas maduras de febrero a abril.'},
      how:{es:'Extraer semillas de la pulpa, lavar, secar. Estratificación fría 60 días.'},
      drying:{es:'A la sombra, lugar ventilado.'},
      storage:{es:'Sobre rotulado, refrigerado. Viabilidad 2 años.'},
    },
  },

  {
    id:'arrayan', category:'arbol', rarity:'patrimonial', emoji:'🌳',
    photo: 'photos/arrayan.jpg',
    name:{es:'Arrayán', fr:'Arrayán'}, latin:'Luma apiculata', family:{es:'Mirtáceas'},
    water:{es:'Moderado'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:400, height:{es:'8–15 m'},
    sow:{es:'Jun–Ago (plantar)'}, plant:{es:'Jun–Ago'}, harv:{es:'Mar–May (flor); fruta dic–feb'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[1,1,1,0,0,0,0,0,0,0,0,1],
    growth_days:1825,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:365 },
      { id:'growth', name:{es:'Crecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1095 },
      { id:'flower', name:{es:'Floración y fruto'}, icon:'🌳', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:365 },
    ],
    advice:{
      0:{es:['Árbol nativo de tronco canela suave. Tarda en establecerse.','Suelo húmedo y fresco. Buen drenaje, sombra parcial.']},
      1:{es:['Crece lento, vive siglos. La corteza se renueva en parches.','Hojas pequeñas y aromáticas al frotar.']},
      2:{es:['Pequeñas flores blancas atraen abejas en otoño.','Frutos negros comestibles en verano siguiente.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Bosque valdiviano y cordillera de la costa. Centro-sur de Chile. Humedad ambiente alta.'},
    zones:['Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Frutos negros pequeños, dulces — mermelada artesanal.'},
      medicinal:{es:'Tradición mapuche: hojas en infusión para resfríos.'},
    },
    problems:[
      {es:'Sensible a heladas fuertes los primeros años.'},
      {es:'Crecimiento muy lento — paciencia.'},
    ],
    seeds:{
      when:{es:'Frutos maduros en verano.'},
      how:{es:'Extraer semillas pequeñas de la pulpa, lavar.'},
      drying:{es:'Secado breve a la sombra.'},
      storage:{es:'Mejor sembrar fresco. Plantines en vivero son más fiables.'},
    },
  },

  {
    id:'quillay', category:'arbol', rarity:'patrimonial', emoji:'🌳',
    name:{es:'Quillay', fr:'Quillay'}, latin:'Quillaja saponaria', family:{es:'Quillajáceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:8, spacing_cm:600, height:{es:'10–20 m'},
    sow:{es:'May–Jul (plantar)'}, plant:{es:'May–Jul'}, harv:{es:'No aplica (árbol perenne)'},
    sowM:[0,0,0,0,1,1,1,0,0,0,0,0], plantM:[0,0,0,0,1,1,1,0,0,0,0,0], harvM:[0,0,0,0,0,0,0,0,0,0,0,0],
    growth_days:1825,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:365 },
      { id:'growth', name:{es:'Crecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1095 },
      { id:'mature', name:{es:'Árbol adulto'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:365 },
    ],
    advice:{
      0:{es:['Árbol endémico de la zona mediterránea de Chile. Símbolo del bosque esclerófilo.','Soporta sequía, suelos pobres y pedregosos. Crece lento.']},
      1:{es:['Hojas duras y brillantes, perennes.','Flores blancas pequeñas en primavera.']},
      2:{es:['Corteza con saponinas — usada tradicionalmente como jabón natural.','Árbol de larga vida (más de 100 años posible).']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Mediterráneo de Chile central: Coquimbo a Biobío. Tolera mucha sequía.'},
    zones:['Coquimbo','Valparaíso','RM',"O'Higgins",'Maule','Ñuble','Biobío'],
    uses:{
      medicinal:{es:'Corteza con saponinas — uso tradicional como detergente vegetal y expectorante suave.'},
    },
    problems:[
      {es:'No replantar en suelos saturados — necesita drenaje.'},
      {es:'Crecimiento lento — útil más como árbol patrimonial que productivo.'},
    ],
    seeds:{
      when:{es:'Cápsulas en forma de estrella se abren en verano.'},
      how:{es:'Recolectar antes de que se dispersen. Semillas aladas.'},
      drying:{es:'A la sombra, lugar ventilado.'},
      storage:{es:'Sobre rotulado. Viabilidad 2–3 años. Estratificación breve antes de sembrar.'},
    },
  },

  {
    id:'espino', category:'arbol', rarity:'patrimonial', emoji:'🌳',
    name:{es:'Espino', fr:'Espino'}, latin:'Vachellia caven', family:{es:'Fabáceas'},
    water:{es:'Muy bajo'}, sun:{es:'Pleno sol'}, sun_hours:9, spacing_cm:400, height:{es:'3–6 m'},
    sow:{es:'May–Jul (plantar)'}, plant:{es:'May–Jul'}, harv:{es:'Sep–Nov (flor)'},
    sowM:[0,0,0,0,1,1,1,0,0,0,0,0], plantM:[0,0,0,0,1,1,1,0,0,0,0,0], harvM:[0,0,0,0,0,0,0,0,1,1,1,0],
    growth_days:1095,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:200 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:730 },
      { id:'flower', name:{es:'Floración amarilla'}, icon:'🌼', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:165 },
    ],
    advice:{
      0:{es:['Árbol espinoso de la zona central seca. Símbolo del secano interior.','Resiste sequía extrema. Suelo pedregoso, pleno sol.']},
      1:{es:['Hojas bipinnadas, delgadas. Espinas blancas largas.','Fija nitrógeno — mejora la tierra a su alrededor.']},
      2:{es:['Pequeñas flores amarillas perfumadas a fines del invierno y primavera.','Vainas oscuras curvadas con semillas duras.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Secano interior de Chile central: Coquimbo a Maule. Resiste sequía, calor y heladas suaves.'},
    zones:['Coquimbo','Valparaíso','RM',"O'Higgins",'Maule'],
    uses:{
      medicinal:{es:'Tradición campesina: flores y vainas en infusión para tos.'},
    },
    problems:[
      {es:'Espinas largas — usar guantes y manga larga.'},
      {es:'Puede crecer en exceso en suelos buenos — controlar.'},
    ],
    seeds:{
      when:{es:'Vainas maduras en verano (ene–feb).'},
      how:{es:'Extraer semillas duras. Escarificación con agua caliente antes de sembrar.'},
      drying:{es:'A la sombra.'},
      storage:{es:'Sobre rotulado, viabilidad 4–5 años.'},
    },
  },

  {
    id:'chilco', category:'flor', rarity:'patrimonial', emoji:'🌺',
    name:{es:'Chilco', fr:'Chilco'}, latin:'Fuchsia magellanica', family:{es:'Onagráceas'},
    water:{es:'Regular'}, sun:{es:'Semisombra'}, sun_hours:4, spacing_cm:150, height:{es:'1,5–3 m'},
    sow:{es:'Jun–Ago (plantar)'}, plant:{es:'Jun–Ago'}, harv:{es:'Nov–Mar (flor)'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[1,1,1,0,0,0,0,0,0,0,1,1],
    growth_days:730,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:120 },
      { id:'growth', name:{es:'Crecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:365 },
      { id:'flower', name:{es:'Floración'}, icon:'🌺', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:245 },
    ],
    advice:{
      0:{es:['Arbusto nativo del sur de Chile. Crece silvestre en bordes de ríos y bosques.','Suelo húmedo pero drenado. Semisombra fresca.']},
      1:{es:['Crecimiento rápido. Flores rojo-violetas colgantes característica de los huertos del sur.','Atrae picaflores chilenos.']},
      2:{es:['Florece de primavera a otoño en el sur.','En invierno se desnuda y rebrota en primavera.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Sur de Chile: Biobío a Magallanes. Tolera frío, prefiere humedad ambiente.'},
    zones:['Biobío','Araucanía','Los Ríos','Los Lagos','Aysén','Magallanes'],
    uses:{
      culinary:{es:'Frutos pequeños comestibles, dulces — uso muy local.'},
      medicinal:{es:'Tradición mapuche: hojas y flores en infusión.'},
    },
    problems:[
      {es:'Pulgones en brotes tiernos — agua jabonosa.'},
      {es:'En zonas muy calurosas pierde vigor — preferir el sur.'},
    ],
    seeds:{
      when:{es:'Frutos maduros violáceos en verano.'},
      how:{es:'Multiplicación más fácil por estaca.'},
      drying:{es:'No aplica para estacas.'},
      storage:{es:'Estacas en agua o sustrato húmedo.'},
    },
  },

  {
    id:'ulmo', category:'arbol', rarity:'patrimonial', emoji:'🌳',
    photo: 'photos/ulmo.jpg',
    name:{es:'Ulmo', fr:'Ulmo'}, latin:'Eucryphia cordifolia', family:{es:'Cunoniáceas'},
    water:{es:'Regular'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:500, height:{es:'15–25 m'},
    sow:{es:'Jun–Ago (plantar)'}, plant:{es:'Jun–Ago'}, harv:{es:'Ene–Mar (flor)'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[1,1,1,0,0,0,0,0,0,0,0,0],
    growth_days:1825,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:365 },
      { id:'growth', name:{es:'Crecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1095 },
      { id:'flower', name:{es:'Floración blanca'}, icon:'🌳', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:365 },
    ],
    advice:{
      0:{es:['Árbol del bosque valdiviano. Famoso por su miel monofloral.','Suelo profundo y fresco. Mucha humedad ambiente.']},
      1:{es:['Hojas oscuras coriáceas, brillantes.','Crecimiento lento al principio, luego se acelera.']},
      2:{es:['Flores blancas grandes en pleno verano — perfumadas, plenas de abejas.','La miel de ulmo es patrimonio del sur de Chile.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Bosque valdiviano: Araucanía a Los Lagos. Necesita humedad y temperaturas moderadas.'},
    zones:['Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Las flores son fuente de la miel de ulmo — sabor único, ámbar.'},
    },
    problems:[
      {es:'No tolera sequía prolongada — descartar para zona central seca.'},
    ],
    seeds:{
      when:{es:'Cápsulas que se abren a fines de verano.'},
      how:{es:'Semillas aladas pequeñas. Estratificación fría.'},
      drying:{es:'A la sombra, lugar fresco.'},
      storage:{es:'Sobre rotulado, refrigerado. Viabilidad 2 años.'},
    },
  },

  {
    id:'palma_chilena', category:'arbol', rarity:'patrimonial', emoji:'🌴',
    photo: 'photos/palma_chilena.jpg',
    name:{es:'Palma chilena', fr:'Palmier du Chili'}, latin:'Jubaea chilensis', family:{es:'Arecáceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:8, spacing_cm:800, height:{es:'15–25 m'},
    sow:{es:'May–Jul (plantar plantines)'}, plant:{es:'May–Jul'}, harv:{es:'Mar–May (coquitos)'},
    sowM:[0,0,0,0,1,1,1,0,0,0,0,0], plantM:[0,0,0,0,1,1,1,0,0,0,0,0], harvM:[0,0,1,1,1,0,0,0,0,0,0,0],
    growth_days:3650,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:730 },
      { id:'growth', name:{es:'Crecimiento juvenil'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1825 },
      { id:'mature', name:{es:'Palma adulta'}, icon:'🌴', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1095 },
    ],
    advice:{
      0:{es:['Palma endémica de Chile, en peligro. Crece muy lentamente — décadas para llegar al tronco visible.','Suelo profundo, drenado, pleno sol.']},
      1:{es:['Resiste sequía, calor moderado y heladas leves.','Tronco grueso característico tras 30–40 años.']},
      2:{es:['Produce coquitos (frutos pequeños similares al coco) en racimos.','Cosecha y consumo muy regulados — especie protegida.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Endémica de la zona central de Chile: Valparaíso y Coquimbo. Mediterránea.'},
    zones:['Coquimbo','Valparaíso','RM'],
    uses:{
      culinary:{es:'Coquitos consumidos enteros o como dulce. Antiguamente miel de palma.'},
    },
    problems:[
      {es:'Crecimiento extremadamente lento — paciencia generacional.'},
      {es:'Especie protegida — no extraer de la naturaleza, solo viveros autorizados.'},
    ],
    seeds:{
      when:{es:'Coquitos maduros entre marzo y mayo.'},
      how:{es:'Extraer la semilla del coquito. Germinación puede tomar 1–2 años.'},
      drying:{es:'No secar; sembrar fresco en sustrato húmedo.'},
      storage:{es:'Conservación corta — mejor sembrar pronto.'},
    },
  },

  /* ─── FLORES — jardines del sur de Chile y Araucanía */

  {
    id:'notro', category:'arbol', rarity:'patrimonial', emoji:'🌺',
    name:{es:'Notro / Ciruelillo', fr:'Notro'}, latin:'Embothrium coccineum', family:{es:'Proteáceas'},
    water:{es:'Moderado'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:300, height:{es:'5–10 m'},
    sow:{es:'May–Jul (plantar)'}, plant:{es:'May–Jul'}, harv:{es:'Oct–Dic (flor)'},
    sowM:[0,0,0,0,1,1,1,0,0,0,0,0], plantM:[0,0,0,0,1,1,1,0,0,0,0,0], harvM:[0,0,0,0,0,0,0,0,0,1,1,1],
    growth_days:1825,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:365 },
      { id:'growth', name:{es:'Crecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1095 },
      { id:'flower', name:{es:'Floración roja'}, icon:'🌺', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:365 },
    ],
    advice:{
      0:{es:['Árbol nativo del sur. Conocido como "árbol del fuego" por sus flores rojo intenso.','Suelo ácido y húmedo. Tolera frío y vientos.']},
      1:{es:['Crecimiento moderado. Forma natural cónica o irregular.','Hojas lanceoladas y perennes.']},
      2:{es:['Flores tubulares rojo escarlata en primavera — atrae picaflores.','Iluminan los bosques del sur entre octubre y diciembre.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Bosque andino y valdiviano: Maule a Magallanes. Resiste frío, viento y suelos ácidos.'},
    zones:['Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos','Aysén','Magallanes'],
    uses:{
      medicinal:{es:'Tradición mapuche: hojas e infusión para problemas digestivos.'},
    },
    problems:[
      {es:'Crecimiento lento al inicio.'},
      {es:'No tolera trasplantes — sembrar donde quedará.'},
    ],
    seeds:{
      when:{es:'Cápsulas leñosas se abren a fin de verano.'},
      how:{es:'Semillas aladas pequeñas. Sembrar fresco en sustrato ácido.'},
      drying:{es:'A la sombra.'},
      storage:{es:'Sobre rotulado. Viabilidad 1–2 años.'},
    },
  },

  {
    id:'hortensia', category:'flor', rarity:'tradicional', emoji:'🌸',
    photo: 'photos/hortensia.jpg',
    name:{es:'Hortensia', fr:'Hortensia'}, latin:'Hydrangea macrophylla', family:{es:'Hidrangeáceas'},
    water:{es:'Regular'}, sun:{es:'Semisombra'}, sun_hours:4, spacing_cm:150, height:{es:'1–2 m'},
    sow:{es:'May–Ago (plantar)'}, plant:{es:'May–Ago'}, harv:{es:'Dic–Mar (flor)'},
    sowM:[0,0,0,0,1,1,1,1,0,0,0,0], plantM:[0,0,0,0,1,1,1,1,0,0,0,0], harvM:[1,1,1,0,0,0,0,0,0,0,0,1],
    growth_days:730,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:180 },
      { id:'growth', name:{es:'Crecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:300 },
      { id:'flower', name:{es:'Floración'}, icon:'🌸', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:250 },
    ],
    advice:{
      0:{es:['Arbusto clásico de los jardines del sur de Chile.','Suelo ácido para flores azules, alcalino para rosadas. Semisombra y humedad ambiente alta.']},
      1:{es:['Riego abundante en verano. Acolchado para conservar humedad.','Podar tras la floración, dejando los brotes nuevos.']},
      2:{es:['Floración generosa de fines de primavera a comienzos de otoño.','Las flores secas se conservan en ramos.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Sur de Chile: Biobío a Los Lagos. Necesita humedad ambiente alta.'},
    zones:['Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{},
    problems:[
      {es:'Hojas amarillas — clorosis por suelo alcalino. Aplicar sulfato de aluminio o turba.'},
      {es:'Marchita al pleno sol — preferir semisombra.'},
    ],
    seeds:{
      when:{es:'Multiplicación por esqueje en otoño.'},
      how:{es:'Cortar tallo joven 15 cm, plantar en sustrato húmedo.'},
      drying:{es:'No aplica para esquejes.'},
      storage:{es:'Mantener esquejes en lugar fresco y sombreado.'},
    },
  },

  {
    id:'lupino', category:'flor', rarity:'tradicional', emoji:'🌸',
    photo: 'photos/lupino.jpg',
    name:{es:'Lupino', fr:'Lupin'}, latin:'Lupinus polyphyllus', family:{es:'Fabáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:50, height:{es:'1–1,5 m'},
    sow:{es:'Mar–May'}, plant:{es:'Abr–Jun'}, harv:{es:'Nov–Ene (flor)'},
    sowM:[0,0,1,1,1,0,0,0,0,0,0,0], plantM:[0,0,0,1,1,1,0,0,0,0,0,0], harvM:[1,0,0,0,0,0,0,0,0,0,1,1],
    growth_days:240,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:15 },
      { id:'growth', name:{es:'Crecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:120 },
      { id:'flower', name:{es:'Floración'}, icon:'🌸', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:105 },
    ],
    advice:{
      0:{es:['Naturalizado en gran parte del sur de Chile — define los paisajes de la Araucanía.','Suelo neutro a ácido, pleno sol. Fija nitrógeno y mejora la tierra.']},
      1:{es:['Hojas palmadas características.','Tallo recto que sube rápidamente en primavera.']},
      2:{es:['Espigas verticales azules, púrpuras, blancas o rosadas.','Atrae abejas y abejorros.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Sur de Chile: muy bien naturalizado de Biobío a Magallanes. Tolera frío y suelos pobres.'},
    zones:['Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos','Aysén'],
    uses:{},
    problems:[
      {es:'Las semillas crudas son tóxicas para personas y animales.'},
      {es:'Puede comportarse invasivo — controlar en zonas naturales.'},
    ],
    seeds:{
      when:{es:'Vainas peludas que oscurecen al final del verano.'},
      how:{es:'Cosechar antes de que se abran. Escarificación leve.'},
      drying:{es:'A la sombra, lugar ventilado.'},
      storage:{es:'Sobre rotulado. Viabilidad 4–5 años. Auto-siembra frecuente.'},
    },
  },

  {
    id:'dedalera', category:'flor', rarity:'tradicional', emoji:'🌸',
    photo: 'photos/dedalera.jpg',
    name:{es:'Dedalera / Digital', fr:'Digitale'}, latin:'Digitalis purpurea', family:{es:'Plantagináceas'},
    water:{es:'Regular'}, sun:{es:'Semisombra'}, sun_hours:4, spacing_cm:40, height:{es:'1–1,5 m'},
    sow:{es:'Feb–Abr (almácigo)'}, plant:{es:'Abr–Jun'}, harv:{es:'Nov–Ene (flor)'},
    sowM:[0,1,1,1,0,0,0,0,0,0,0,0], plantM:[0,0,0,1,1,1,0,0,0,0,0,0], harvM:[1,0,0,0,0,0,0,0,0,0,1,1],
    growth_days:365,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:21 },
      { id:'rosette',name:{es:'Roseta'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:240 },
      { id:'flower', name:{es:'Espiga floral'}, icon:'🌸', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:104 },
    ],
    advice:{
      0:{es:['Bienal — el primer año hace roseta, el segundo florece.','Naturalizada en bordes de bosque del sur de Chile.']},
      1:{es:['Suelo húmedo y rico en materia orgánica. Semisombra fresca.','Auto-siembra muy fácil donde se encuentre cómoda.']},
      2:{es:['Espigas verticales con flores tubulares moteadas.','Floración de fines de primavera a verano.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Centro-sur de Chile: tolera humedad y semisombra. Naturalizada en Araucanía.'},
    zones:['Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      medicinal:{es:'IMPORTANTE: toda la planta es muy tóxica. Uso medicinal sólo bajo supervisión farmacéutica (cardiotónicos).'},
    },
    problems:[
      {es:'Toda la planta es tóxica — no tocar sin cuidado, no consumir.'},
      {es:'Caracoles aman las rosetas tiernas en invierno.'},
    ],
    seeds:{
      when:{es:'Cápsulas pequeñas se secan a fin de verano.'},
      how:{es:'Sacudir tallos secos sobre tela. Semillas muy pequeñas.'},
      drying:{es:'Ya están secas.'},
      storage:{es:'Sobre rotulado. Viabilidad 3–4 años.'},
    },
  },

  {
    id:'cala', category:'flor', rarity:'tradicional', emoji:'🌼',
    photo: 'photos/cala.jpg',
    name:{es:'Cala', fr:'Calla'}, latin:'Zantedeschia aethiopica', family:{es:'Aráceas'},
    water:{es:'Regular alto'}, sun:{es:'Semisombra'}, sun_hours:4, spacing_cm:50, height:{es:'60–90 cm'},
    sow:{es:'Abr–Jul (rizomas)'}, plant:{es:'Abr–Jul'}, harv:{es:'Oct–Ene (flor)'},
    sowM:[0,0,0,1,1,1,1,0,0,0,0,0], plantM:[0,0,0,1,1,1,1,0,0,0,0,0], harvM:[1,0,0,0,0,0,0,0,0,1,1,1],
    growth_days:240,
    stages:[
      { id:'plant',  name:{es:'Plantación de rizomas'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:60 },
      { id:'growth', name:{es:'Crecimiento foliar'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:90 },
      { id:'flower', name:{es:'Floración'}, icon:'🌼', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:90 },
    ],
    advice:{
      0:{es:['Planta clásica de los jardines chilenos, especialmente cerca del agua.','Suelo húmedo y rico. Crece bien en bordes de estanque.']},
      1:{es:['Hojas grandes en forma de flecha. Persistentes en climas suaves.','Multiplicación fácil por división de rizomas.']},
      2:{es:['Espata blanca curvada con espádice amarillo — la flor clásica de la Pascua.','Resiste años en el mismo lugar sin atención.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Toda zona húmeda de Chile, desde Coquimbo a Los Lagos. Bien naturalizada en el centro-sur.'},
    zones:['Coquimbo','Valparaíso','RM',"O'Higgins",'Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{},
    problems:[
      {es:'Hojas y rizomas son tóxicos si se ingieren — mantener lejos de animales.'},
      {es:'En invierno frío puede perder hojas — rebrota en primavera.'},
    ],
    seeds:{
      when:{es:'Multiplicación por división de rizomas en otoño.'},
      how:{es:'Desenterrar el rizoma con cuidado, separar yemas, replantar.'},
      drying:{es:'No aplica.'},
      storage:{es:'Rizomas en lugar fresco y sombreado mientras se trasplantan.'},
    },
  },

  {
    id:'azucena', category:'flor', rarity:'tradicional', emoji:'🌼',
    name:{es:'Azucena', fr:'Lis blanc'}, latin:'Lilium candidum', family:{es:'Liliáceas'},
    water:{es:'Moderado'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:30, height:{es:'1–1,5 m'},
    sow:{es:'Mar–May (bulbos)'}, plant:{es:'Mar–May'}, harv:{es:'Nov–Ene (flor)'},
    sowM:[0,0,1,1,1,0,0,0,0,0,0,0], plantM:[0,0,1,1,1,0,0,0,0,0,0,0], harvM:[1,0,0,0,0,0,0,0,0,0,1,1],
    growth_days:240,
    stages:[
      { id:'plant',  name:{es:'Plantación de bulbo'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:60 },
      { id:'growth', name:{es:'Crecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:90 },
      { id:'flower', name:{es:'Floración perfumada'}, icon:'🌼', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:90 },
    ],
    advice:{
      0:{es:['Bulbo clásico de los huertos antiguos.','Suelo bien drenado, sol moderado. Plantar superficialmente.']},
      1:{es:['Roseta basal verde durante el invierno.','Vástago floral sube rápido en primavera.']},
      2:{es:['Flores blancas grandes y muy perfumadas a fin de primavera.','Se puede dejar el bulbo en su lugar por años.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Toda zona templada de Chile. Resiste heladas.'},
    zones:['Coquimbo','Valparaíso','RM',"O'Higgins",'Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{},
    problems:[
      {es:'Pulgones en brotes tiernos — agua jabonosa.'},
      {es:'No mover el bulbo cada año — prefiere estabilidad.'},
    ],
    seeds:{
      when:{es:'Multiplicación por bulbillos en otoño.'},
      how:{es:'Separar bulbillos pequeños del bulbo principal, replantar.'},
      drying:{es:'No aplica.'},
      storage:{es:'Bulbos en lugar fresco y seco si se desentierran.'},
    },
  },

  {
    id:'camelia', category:'flor', rarity:'tradicional', emoji:'🌸',
    photo: 'photos/camelia.jpg',
    name:{es:'Camelia', fr:'Camélia'}, latin:'Camellia japonica', family:{es:'Teáceas'},
    water:{es:'Regular'}, sun:{es:'Semisombra'}, sun_hours:4, spacing_cm:200, height:{es:'2–4 m'},
    sow:{es:'May–Ago (plantar arbusto)'}, plant:{es:'May–Ago'}, harv:{es:'Jul–Oct (flor)'},
    sowM:[0,0,0,0,1,1,1,1,0,0,0,0], plantM:[0,0,0,0,1,1,1,1,0,0,0,0], harvM:[0,0,0,0,0,0,1,1,1,1,0,0],
    growth_days:1095,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:200 },
      { id:'growth', name:{es:'Crecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:730 },
      { id:'flower', name:{es:'Floración invernal'}, icon:'🌸', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:165 },
    ],
    advice:{
      0:{es:['Arbusto clásico de los jardines antiguos del centro y sur de Chile.','Suelo ácido y rico, semisombra fresca, humedad ambiente.']},
      1:{es:['Hojas perennes lustrosas de un verde profundo.','Crecimiento lento — vive décadas en el mismo lugar.']},
      2:{es:['Flores blancas, rosadas o rojas en pleno invierno, cuando el jardín duerme.','Una de las pocas flores hermosas de julio y agosto.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Centro-sur de Chile: Valparaíso a Los Lagos. Necesita humedad ambiente.'},
    zones:['Valparaíso','RM',"O'Higgins",'Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{},
    problems:[
      {es:'Hojas amarillas — clorosis por suelo alcalino. Aplicar sustrato ácido.'},
      {es:'Botones caen sin abrir — riego irregular o suelo seco.'},
    ],
    seeds:{
      when:{es:'Multiplicación por esqueje en otoño-invierno.'},
      how:{es:'Cortar tallo semi-leñoso 10 cm, plantar en sustrato ácido húmedo.'},
      drying:{es:'No aplica para esquejes.'},
      storage:{es:'Esquejes en sustrato húmedo bajo plástico.'},
    },
  },

  {
    id:'malvon', category:'flor', rarity:'comun', emoji:'🌺',
    photo: 'photos/malvon.jpg',
    name:{es:'Malvón / Geranio', fr:'Géranium'}, latin:'Pelargonium', family:{es:'Geraniáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:30, height:{es:'40–80 cm'},
    sow:{es:'Sep–Nov (esquejes)'}, plant:{es:'Sep–Nov'}, harv:{es:'Oct–Abr (flor)'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,1,1,1,0], harvM:[1,1,1,1,0,0,0,0,0,1,1,1],
    growth_days:180,
    stages:[
      { id:'plant',  name:{es:'Plantación de esqueje'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:30 },
      { id:'growth', name:{es:'Crecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:60 },
      { id:'flower', name:{es:'Floración prolongada'}, icon:'🌺', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:90 },
    ],
    advice:{
      0:{es:['Flor de balcón clásica chilena. Se multiplica fácilmente por esqueje.','Tolera sequía moderada. Suelo bien drenado.']},
      1:{es:['Riego al pie cuando el sustrato está seco al tacto.','Eliminar flores marchitas para prolongar la floración.']},
      2:{es:['Florece de primavera a otoño en colores intensos.','Aguanta inviernos suaves al exterior.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Toda zona templada de Chile. Resiste sequía y heladas suaves.'},
    zones:['Coquimbo','Valparaíso','RM',"O'Higgins",'Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{},
    problems:[
      {es:'Hojas amarillas — exceso de riego.'},
      {es:'Mosca blanca en plantas resguardadas — ventilación y agua jabonosa.'},
    ],
    seeds:{
      when:{es:'Multiplicación por esqueje en primavera.'},
      how:{es:'Cortar tallo de 10 cm, dejar secar la base 1 día, plantar.'},
      drying:{es:'Sólo secado superficial del corte.'},
      storage:{es:'Esquejes en sustrato apenas húmedo.'},
    },
  },

  /* ─── FLORES DE INVIERNO Y SUR — jardines húmedos chilenos */

  {
    id:'peonia', category:'flor', rarity:'tradicional', emoji:'🌸',
    photo: 'photos/peonia.jpg',
    name:{es:'Peonía', fr:'Pivoine'}, latin:'Paeonia lactiflora', family:{es:'Paeoniáceas'},
    water:{es:'Regular'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:80, height:{es:'70–100 cm'},
    sow:{es:'May–Jul (raíces)'}, plant:{es:'May–Jul'}, harv:{es:'Oct–Dic (flor)'},
    sowM:[0,0,0,0,1,1,1,0,0,0,0,0], plantM:[0,0,0,0,1,1,1,0,0,0,0,0], harvM:[0,0,0,0,0,0,0,0,0,1,1,1],
    growth_days:730,
    stages:[
      { id:'plant',  name:{es:'Plantación de raíz'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:180 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:430 },
      { id:'flower', name:{es:'Floración generosa'}, icon:'🌸', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:120 },
    ],
    advice:{
      0:{es:['Necesita inviernos fríos para florecer — ideal del Maule al sur.','Suelo profundo, rico, bien drenado. Plantar con yemas a 3 cm de profundidad.']},
      1:{es:['No mover la planta — odia el trasplante. Vive décadas en su lugar.','Primeros años sin flores: paciencia.']},
      2:{es:['Flores grandes, fragantes, en primavera tardía.','Tutorar tallos para que no se quiebren con lluvia.']},
    },
    companions:[], avoid:[],
    climate:{es:'Centro-sur de Chile: Maule a Los Lagos. Necesita inviernos fríos.'},
    zones:['Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{},
    problems:[
      {es:'Botritis en climas muy húmedos — ventilar y evitar mojar follaje.'},
      {es:'No florece en zonas demasiado cálidas.'},
    ],
    seeds:{
      when:{es:'Multiplicación por división de raíces tuberosas en otoño.'},
      how:{es:'Cortar raíces en secciones con yemas, replantar.'},
      drying:{es:'No aplica.'},
      storage:{es:'Replantar fresco en sustrato húmedo.'},
    },
  },

  {
    id:'jazmin_del_pais', category:'flor', rarity:'tradicional', emoji:'🌼',
    photo: 'photos/jazmin_del_pais.jpg',
    name:{es:'Jazmín del país', fr:'Jasmin officinal'}, latin:'Jasminum officinale', family:{es:'Oleáceas'},
    water:{es:'Regular'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:200, height:{es:'trepadora, 4–8 m'},
    sow:{es:'May–Ago (plantar)'}, plant:{es:'May–Ago'}, harv:{es:'Oct–Abr (flor)'},
    sowM:[0,0,0,0,1,1,1,1,0,0,0,0], plantM:[0,0,0,0,1,1,1,1,0,0,0,0], harvM:[1,1,1,1,0,0,0,0,0,1,1,1],
    growth_days:730,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:180 },
      { id:'growth', name:{es:'Trepando'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:365 },
      { id:'flower', name:{es:'Floración perfumada'}, icon:'🌼', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:185 },
    ],
    advice:{
      0:{es:['Trepadora clásica de los jardines chilenos. Su perfume marca las noches de verano.','Soporte o pérgola necesario. Suelo bien drenado.']},
      1:{es:['Crecimiento rápido una vez establecida.','Podar a fines de invierno para mantener forma.']},
      2:{es:['Pequeñas flores blancas en estrella, muy perfumadas.','Florece a lo largo del verano y otoño.']},
    },
    companions:[], avoid:[],
    climate:{es:'Centro y sur de Chile. Tolera frío suave.'},
    zones:['Coquimbo','Valparaíso','RM',"O'Higgins",'Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Las flores secas aromatizan el té de jazmín.'},
    },
    problems:[
      {es:'Pulgones en brotes tiernos — agua jabonosa.'},
      {es:'Puede invadir si no se controla — podar regularmente.'},
    ],
    seeds:{
      when:{es:'Multiplicación por esqueje a fines de verano.'},
      how:{es:'Cortar 15 cm de tallo semi-leñoso, plantar en sustrato.'},
      drying:{es:'No aplica para esquejes.'},
      storage:{es:'Mantener esqueje en lugar fresco, regado.'},
    },
  },

  {
    id:'reina_luisa', category:'hierba', rarity:'tradicional', emoji:'🌿',
    photo: 'photos/reina_luisa.jpg',
    name:{es:'Reina Luisa / Cedrón', fr:'Verveine citronnée'}, latin:'Aloysia citrodora', family:{es:'Verbenáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:120, height:{es:'1,5–3 m'},
    sow:{es:'May–Ago (plantar)'}, plant:{es:'May–Ago'}, harv:{es:'Oct–Abr (hoja)'},
    sowM:[0,0,0,0,1,1,1,1,0,0,0,0], plantM:[0,0,0,0,1,1,1,1,0,0,0,0], harvM:[1,1,1,1,0,0,0,0,0,1,1,1],
    growth_days:365,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:120 },
      { id:'growth', name:{es:'Crecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:120 },
      { id:'leaf',   name:{es:'Cosecha de hojas'}, icon:'🍃', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:125 },
    ],
    advice:{
      0:{es:['Arbusto clásico del huerto chileno. Aroma intenso a limón al frotar las hojas.','Suelo bien drenado, pleno sol. Tolera sequía moderada.']},
      1:{es:['En invierno pierde casi toda la hoja — rebrota en primavera.','Podar fuerte a fines de invierno.']},
      2:{es:['Cosechar hojas cuando estén bien desarrolladas, sin flores.','Secar a la sombra para conservar todo el año.']},
    },
    companions:[], avoid:[],
    climate:{es:'Centro y sur de Chile. Sensible a heladas fuertes.'},
    zones:['Coquimbo','Valparaíso','RM',"O'Higgins",'Maule','Ñuble','Biobío','Araucanía'],
    uses:{
      culinary:{es:'Infusión clásica para después de las comidas. Aromatiza postres.'},
      medicinal:{es:'Tradición chilena: digestiva, calmante, aromática.'},
    },
    problems:[
      {es:'Heladas fuertes lo dañan — proteger en invierno frío.'},
    ],
    seeds:{
      when:{es:'Multiplicación por esqueje en primavera.'},
      how:{es:'Cortar 15 cm de tallo semi-leñoso, plantar.'},
      drying:{es:'Hojas cosechadas: secar a la sombra, en manojo colgado.'},
      storage:{es:'Hojas secas en frasco hermético. Duran un año.'},
    },
  },

  {
    id:'iris', category:'flor', rarity:'tradicional', emoji:'💜',
    photo: 'photos/iris.jpg',
    name:{es:'Iris', fr:'Iris'}, latin:'Iris germanica', family:{es:'Iridáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:30, height:{es:'60–90 cm'},
    sow:{es:'Mar–May (rizomas)'}, plant:{es:'Mar–May'}, harv:{es:'Oct–Dic (flor)'},
    sowM:[0,0,1,1,1,0,0,0,0,0,0,0], plantM:[0,0,1,1,1,0,0,0,0,0,0,0], harvM:[0,0,0,0,0,0,0,0,0,1,1,1],
    growth_days:365,
    stages:[
      { id:'plant',  name:{es:'Plantación rizoma'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:90 },
      { id:'growth', name:{es:'Crecimiento foliar'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:185 },
      { id:'flower', name:{es:'Floración'}, icon:'💜', color:'#FBE9E7', bg:'rgba(140,90,160,.10)', days:90 },
    ],
    advice:{
      0:{es:['Flor de jardín clásica de los huertos antiguos.','Plantar el rizoma a flor de tierra, no enterrar.']},
      1:{es:['Suelo bien drenado, pleno sol.','Hojas en abanico verde-azulado, persistentes.']},
      2:{es:['Flores grandes con barba en violeta, blanco o amarillo.','Dividir las matas cada 3–4 años.']},
    },
    companions:[], avoid:[],
    climate:{es:'Toda zona templada de Chile. Resiste heladas.'},
    zones:['Coquimbo','Valparaíso','RM',"O'Higgins",'Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{},
    problems:[
      {es:'Pudrición del rizoma si se entierra demasiado o se riega en exceso.'},
    ],
    seeds:{
      when:{es:'Multiplicación por división de rizomas en otoño.'},
      how:{es:'Separar rizomas con cuchillo limpio, dejar secar el corte 1 día.'},
      drying:{es:'Secado superficial del corte.'},
      storage:{es:'Replantar pronto en sustrato bien drenado.'},
    },
  },

  {
    id:'narciso', category:'flor', rarity:'tradicional', emoji:'🌼',
    photo: 'photos/narciso.jpg',
    name:{es:'Narciso', fr:'Narcisse'}, latin:'Narcissus pseudonarcissus', family:{es:'Amarilidáceas'},
    water:{es:'Moderado'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:15, height:{es:'30–40 cm'},
    sow:{es:'Mar–May (bulbos)'}, plant:{es:'Mar–May'}, harv:{es:'Ago–Oct (flor)'},
    sowM:[0,0,1,1,1,0,0,0,0,0,0,0], plantM:[0,0,1,1,1,0,0,0,0,0,0,0], harvM:[0,0,0,0,0,0,0,1,1,1,0,0],
    growth_days:180,
    stages:[
      { id:'plant',  name:{es:'Plantación bulbo'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:90 },
      { id:'growth', name:{es:'Brote y hoja'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:60 },
      { id:'flower', name:{es:'Floración invernal'}, icon:'🌼', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:30 },
    ],
    advice:{
      0:{es:['Bulbo clásico — uno de los primeros en florecer al fin del invierno.','Plantar a 10 cm de profundidad. Suelo bien drenado.']},
      1:{es:['Dejar las hojas secarse naturalmente tras la floración.','Se naturaliza fácilmente en céspedes y bordes.']},
      2:{es:['Flores amarillas o blancas con corona central.','Anuncia el fin del invierno en los huertos chilenos.']},
    },
    companions:[], avoid:[],
    climate:{es:'Toda zona templada de Chile. Necesita inviernos fríos.'},
    zones:['Valparaíso','RM',"O'Higgins",'Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{},
    problems:[
      {es:'Bulbo tóxico si se ingiere — mantener lejos de animales.'},
    ],
    seeds:{
      when:{es:'Multiplicación por bulbillos en otoño.'},
      how:{es:'Separar bulbillos pequeños del bulbo principal.'},
      drying:{es:'Sólo secado breve si se desentierran.'},
      storage:{es:'Mejor dejar los bulbos en tierra. Si se sacan: lugar fresco y seco.'},
    },
  },

  {
    id:'violeta', category:'flor', rarity:'tradicional', emoji:'💜',
    photo: 'photos/violeta.jpg',
    name:{es:'Violeta', fr:'Violette'}, latin:'Viola odorata', family:{es:'Violáceas'},
    water:{es:'Regular'}, sun:{es:'Semisombra'}, sun_hours:3, spacing_cm:20, height:{es:'10–15 cm'},
    sow:{es:'Mar–May'}, plant:{es:'Abr–Jun'}, harv:{es:'Jul–Oct (flor)'},
    sowM:[0,0,1,1,1,0,0,0,0,0,0,0], plantM:[0,0,0,1,1,1,0,0,0,0,0,0], harvM:[0,0,0,0,0,0,1,1,1,1,0,0],
    growth_days:240,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:21 },
      { id:'growth', name:{es:'Crecimiento bajo'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:120 },
      { id:'flower', name:{es:'Floración invernal'}, icon:'💜', color:'#FBE9E7', bg:'rgba(140,90,160,.10)', days:99 },
    ],
    advice:{
      0:{es:['Flor sencilla y antigua de los jardines chilenos.','Suelo húmedo, semisombra fresca, bajo árboles.']},
      1:{es:['Se naturaliza fácilmente — forma alfombras bajas.','Hojas en forma de corazón.']},
      2:{es:['Pequeñas flores violetas perfumadas, a flor de tierra.','Florece en invierno y comienzos de primavera.']},
    },
    companions:[], avoid:[],
    climate:{es:'Centro y sur de Chile. Prefiere humedad y sombra suave.'},
    zones:['Valparaíso','RM',"O'Higgins",'Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Pétalos comestibles para decorar postres. Almíbar de violeta tradicional.'},
    },
    problems:[
      {es:'Caracoles aman las hojas tiernas.'},
    ],
    seeds:{
      when:{es:'Auto-siembra y multiplicación por estolones.'},
      how:{es:'Separar plantitas hijas y replantar.'},
      drying:{es:'No aplica.'},
      storage:{es:'Replantar fresco.'},
    },
  },

  {
    id:'boca_de_dragon', category:'flor', rarity:'tradicional', emoji:'🌺',
    photo: 'photos/boca_de_dragon.jpg',
    name:{es:'Boca de dragón / Conejito', fr:'Muflier'}, latin:'Antirrhinum majus', family:{es:'Plantagináceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:25, height:{es:'40–80 cm'},
    sow:{es:'Feb–Abr (almácigo)'}, plant:{es:'Abr–Jun'}, harv:{es:'Sep–Ene (flor)'},
    sowM:[0,1,1,1,0,0,0,0,0,0,0,0], plantM:[0,0,0,1,1,1,0,0,0,0,0,0], harvM:[1,0,0,0,0,0,0,0,1,1,1,1],
    growth_days:180,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:21 },
      { id:'growth', name:{es:'Crecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:60 },
      { id:'flower', name:{es:'Espigas florales'}, icon:'🌺', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:99 },
    ],
    advice:{
      0:{es:['Anual común de los jardines chilenos. Las flores se abren como pequeñas bocas.','Suelo bien drenado, pleno sol.']},
      1:{es:['Despuntar para favorecer ramificación.','Florece intensamente con riego regular.']},
      2:{es:['Espigas verticales en muchos colores. Florece de primavera a verano.','Eliminar flores marchitas prolonga la floración.']},
    },
    companions:[], avoid:[],
    climate:{es:'Toda zona templada de Chile.'},
    zones:['Coquimbo','Valparaíso','RM',"O'Higgins",'Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{},
    problems:[
      {es:'Roya en hojas — ventilar, evitar mojar follaje.'},
    ],
    seeds:{
      when:{es:'Cápsulas marrones se forman tras la floración.'},
      how:{es:'Sacudir cápsulas secas sobre tela. Semillas muy pequeñas.'},
      drying:{es:'Ya están secas.'},
      storage:{es:'Sobre rotulado. Viabilidad 3–4 años. Auto-siembra frecuente.'},
    },
  },

  {
    id:'aleli', category:'flor', rarity:'tradicional', emoji:'🌸',
    photo: 'photos/aleli.jpg',
    name:{es:'Alelí', fr:'Giroflée'}, latin:'Matthiola incana', family:{es:'Brasicáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:30, height:{es:'40–70 cm'},
    sow:{es:'Feb–Abr (almácigo)'}, plant:{es:'Abr–Jun'}, harv:{es:'Jul–Oct (flor)'},
    sowM:[0,1,1,1,0,0,0,0,0,0,0,0], plantM:[0,0,0,1,1,1,0,0,0,0,0,0], harvM:[0,0,0,0,0,0,1,1,1,1,0,0],
    growth_days:240,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:21 },
      { id:'growth', name:{es:'Crecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:90 },
      { id:'flower', name:{es:'Floración perfumada'}, icon:'🌸', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:129 },
    ],
    advice:{
      0:{es:['Anual o bienal clásica de jardines chilenos. Su perfume marca el invierno.','Suelo bien drenado, pleno sol moderado.']},
      1:{es:['Crecimiento erguido. Hojas grises afelpadas.','Necesita frescura para una floración generosa.']},
      2:{es:['Espigas con flores moradas, blancas, rosadas o crema.','Floración a fines de invierno y comienzos de primavera.']},
    },
    companions:[], avoid:[],
    climate:{es:'Centro y sur de Chile. Prefiere inviernos suaves.'},
    zones:['Valparaíso','RM',"O'Higgins",'Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{},
    problems:[
      {es:'Pulgones en brotes tiernos — agua jabonosa.'},
    ],
    seeds:{
      when:{es:'Silicuas alargadas que se secan en verano.'},
      how:{es:'Abrir silicuas secas, separar semillas.'},
      drying:{es:'A la sombra.'},
      storage:{es:'Sobre rotulado. Viabilidad 3–4 años.'},
    },
  },

  {
    id:'amapola_california', category:'flor', rarity:'tradicional', emoji:'🌼',
    photo: 'photos/amapola_california.jpg',
    name:{es:'Amapola de California', fr:'Pavot de Californie'}, latin:'Eschscholzia californica', family:{es:'Papaveráceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:20, height:{es:'25–40 cm'},
    sow:{es:'Feb–May'}, plant:{es:'Abr–Jun'}, harv:{es:'Oct–Feb (flor)'},
    sowM:[0,1,1,1,1,0,0,0,0,0,0,0], plantM:[0,0,0,1,1,1,0,0,0,0,0,0], harvM:[1,1,0,0,0,0,0,0,0,1,1,1],
    growth_days:180,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:14 },
      { id:'growth', name:{es:'Roseta foliar'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:60 },
      { id:'flower', name:{es:'Floración prolongada'}, icon:'🌼', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:106 },
    ],
    advice:{
      0:{es:['Naturalizada en muchas zonas de Chile. Florece donde otras no llegan.','Suelo pobre, drenado, pleno sol. Resiste sequía.']},
      1:{es:['Hojas finamente divididas, glaucas.','Auto-siembra abundante donde se encuentre cómoda.']},
      2:{es:['Flores anaranjadas brillantes que cierran al atardecer y con lluvia.','Floración larga, de primavera a otoño.']},
    },
    companions:[], avoid:[],
    climate:{es:'Centro y norte de Chile. Tolera sequía y suelos pobres.'},
    zones:['Atacama','Coquimbo','Valparaíso','RM',"O'Higgins",'Maule','Ñuble','Biobío'],
    uses:{},
    problems:[
      {es:'Auto-siembra agresiva — puede expandirse más de lo deseado.'},
    ],
    seeds:{
      when:{es:'Cápsulas alargadas que se abren con sonido seco.'},
      how:{es:'Cosechar antes de que se abran. Semillas muy pequeñas.'},
      drying:{es:'A la sombra.'},
      storage:{es:'Sobre rotulado. Viabilidad 3–5 años.'},
    },
  },

  {
    id:'fucsia', category:'flor', rarity:'tradicional', emoji:'🌺',
    photo: 'photos/fucsia.jpg',
    name:{es:'Fucsia', fr:'Fuchsia'}, latin:'Fuchsia hybrida', family:{es:'Onagráceas'},
    water:{es:'Regular'}, sun:{es:'Semisombra'}, sun_hours:4, spacing_cm:50, height:{es:'50–150 cm'},
    sow:{es:'Jun–Ago (plantar)'}, plant:{es:'Jun–Ago'}, harv:{es:'Oct–Mar (flor)'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[1,1,1,0,0,0,0,0,0,1,1,1],
    growth_days:365,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:90 },
      { id:'growth', name:{es:'Crecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:120 },
      { id:'flower', name:{es:'Floración prolongada'}, icon:'🌺', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:155 },
    ],
    advice:{
      0:{es:['Variedades ornamentales del chilco — colores intensos y formas dobles.','Semisombra fresca, suelo húmedo pero drenado.']},
      1:{es:['Despuntar para favorecer ramificación.','Picaflores adoran las flores pendulares.']},
      2:{es:['Flores rojo-violetas o bicolores colgantes.','Florece de primavera a otoño.']},
    },
    companions:[], avoid:[],
    climate:{es:'Centro y sur de Chile. Prefiere humedad ambiente y temperaturas suaves.'},
    zones:['Valparaíso','RM',"O'Higgins",'Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{},
    problems:[
      {es:'Mosca blanca en plantas resguardadas.'},
      {es:'Marchita al pleno sol caliente — preferir semisombra.'},
    ],
    seeds:{
      when:{es:'Multiplicación por esqueje en primavera u otoño.'},
      how:{es:'Cortar 10 cm de tallo, plantar en sustrato húmedo.'},
      drying:{es:'No aplica.'},
      storage:{es:'Esquejes en sustrato apenas húmedo.'},
    },
  },

  {
    id:'begonia', category:'flor', rarity:'tradicional', emoji:'🌸',
    photo: 'photos/begonia.jpg',
    name:{es:'Begonia', fr:'Bégonia'}, latin:'Begonia', family:{es:'Begoniáceas'},
    water:{es:'Regular'}, sun:{es:'Semisombra'}, sun_hours:4, spacing_cm:30, height:{es:'25–50 cm'},
    sow:{es:'Jul–Sep (tubérculos)'}, plant:{es:'Sep–Nov'}, harv:{es:'Nov–Abr (flor)'},
    sowM:[0,0,0,0,0,0,1,1,1,0,0,0], plantM:[0,0,0,0,0,0,0,0,1,1,1,0], harvM:[1,1,1,1,0,0,0,0,0,0,1,1],
    growth_days:240,
    stages:[
      { id:'plant',  name:{es:'Plantación tubérculo'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:60 },
      { id:'growth', name:{es:'Crecimiento foliar'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:60 },
      { id:'flower', name:{es:'Floración'}, icon:'🌸', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:120 },
    ],
    advice:{
      0:{es:['Flor de semisombra clásica de jardines y patios.','Suelo rico, drenado, mucha materia orgánica.']},
      1:{es:['No mojar las flores ni hojas — riego al pie.','Hojas decorativas, a veces más vistosas que las flores.']},
      2:{es:['Floración generosa en verano y otoño.','Resguardar del sol fuerte.']},
    },
    companions:[], avoid:[],
    climate:{es:'Centro y sur de Chile. No resiste heladas — guardar tubérculos en invierno.'},
    zones:['Valparaíso','RM',"O'Higgins",'Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{},
    problems:[
      {es:'Oídio en climas húmedos — ventilar.'},
      {es:'Tubérculo se pudre con exceso de agua.'},
    ],
    seeds:{
      when:{es:'Multiplicación por tubérculo o esqueje de hoja.'},
      how:{es:'Dividir tubérculos a fines de invierno.'},
      drying:{es:'Secar tubérculos al final de la temporada antes de guardar.'},
      storage:{es:'Tubérculos en lugar fresco y seco durante el invierno.'},
    },
  },

  {
    id:'anemona', category:'flor', rarity:'tradicional', emoji:'🌸',
    photo: 'photos/anemona.jpg',
    name:{es:'Anémona', fr:'Anémone'}, latin:'Anemone coronaria', family:{es:'Ranunculáceas'},
    water:{es:'Moderado'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:15, height:{es:'25–40 cm'},
    sow:{es:'Mar–May (tubérculos)'}, plant:{es:'Mar–May'}, harv:{es:'Ago–Nov (flor)'},
    sowM:[0,0,1,1,1,0,0,0,0,0,0,0], plantM:[0,0,1,1,1,0,0,0,0,0,0,0], harvM:[0,0,0,0,0,0,0,1,1,1,1,0],
    growth_days:180,
    stages:[
      { id:'plant',  name:{es:'Plantación tubérculo'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:60 },
      { id:'growth', name:{es:'Crecimiento foliar'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:60 },
      { id:'flower', name:{es:'Floración'}, icon:'🌸', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:60 },
    ],
    advice:{
      0:{es:['Tubérculo pequeño que se planta en otoño y florece a fines de invierno.','Remojar tubérculos en agua durante 4 horas antes de plantar.']},
      1:{es:['Suelo bien drenado, sol moderado.','Hojas finamente divididas.']},
      2:{es:['Flores grandes en rojo, morado, azul o blanco — centro oscuro contrastante.','Florece desde fin de invierno hasta primavera.']},
    },
    companions:[], avoid:[],
    climate:{es:'Centro y sur de Chile. Prefiere inviernos suaves.'},
    zones:['Valparaíso','RM',"O'Higgins",'Maule','Ñuble','Biobío','Araucanía'],
    uses:{},
    problems:[
      {es:'Tubérculo es tóxico si se ingiere.'},
      {es:'No tolera suelos encharcados.'},
    ],
    seeds:{
      when:{es:'Multiplicación por tubérculo en otoño.'},
      how:{es:'Plantar tubérculos a 5 cm de profundidad.'},
      drying:{es:'Secar tubérculos al final del ciclo.'},
      storage:{es:'Tubérculos secos en lugar fresco hasta el otoño siguiente.'},
    },
  },

  {
    id:'ciclamen', category:'flor', rarity:'tradicional', emoji:'🌸',
    photo: 'photos/ciclamen.jpg',
    name:{es:'Ciclamen', fr:'Cyclamen'}, latin:'Cyclamen persicum', family:{es:'Primuláceas'},
    water:{es:'Moderado'}, sun:{es:'Semisombra'}, sun_hours:3, spacing_cm:20, height:{es:'15–30 cm'},
    sow:{es:'Mar–May (tubérculos o macetas)'}, plant:{es:'Mar–May'}, harv:{es:'May–Sep (flor)'},
    sowM:[0,0,1,1,1,0,0,0,0,0,0,0], plantM:[0,0,1,1,1,0,0,0,0,0,0,0], harvM:[0,0,0,0,1,1,1,1,1,0,0,0],
    growth_days:240,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:60 },
      { id:'growth', name:{es:'Hojas marmóreas'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:60 },
      { id:'flower', name:{es:'Floración invernal'}, icon:'🌸', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:120 },
    ],
    advice:{
      0:{es:['Flor de otoño-invierno clásica de los jardines y balcones chilenos.','Tubérculo a flor de tierra. Suelo bien drenado.']},
      1:{es:['Hojas con patrón marmóreo plateado, decorativas en sí mismas.','No mojar el tubérculo al regar.']},
      2:{es:['Flores con pétalos curvados hacia arriba — blanco, rosa, fucsia o rojo.','Tras la floración, descanso estival.']},
    },
    companions:[], avoid:[],
    climate:{es:'Centro y sur de Chile. Prefiere inviernos frescos.'},
    zones:['Valparaíso','RM',"O'Higgins",'Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{},
    problems:[
      {es:'Tubérculo se pudre con riego excesivo.'},
      {es:'Calor de verano provoca dormancia — reducir riego.'},
    ],
    seeds:{
      when:{es:'Cápsulas espiraladas tras la floración. Auto-siembra en condiciones óptimas.'},
      how:{es:'Sembrar semillas frescas en sustrato fresco.'},
      drying:{es:'No secar — sembrar fresco.'},
      storage:{es:'Tubérculos en macetas, en lugar fresco y sombreado en verano.'},
    },
  },

  {
    id:'helleboro', category:'flor', rarity:'tradicional', emoji:'🌸',
    photo: 'photos/helleboro.jpg',
    name:{es:'Helléboro / Rosa de invierno', fr:"Rose de Noël"}, latin:'Helleborus orientalis', family:{es:'Ranunculáceas'},
    water:{es:'Regular'}, sun:{es:'Semisombra'}, sun_hours:3, spacing_cm:50, height:{es:'30–50 cm'},
    sow:{es:'Mar–May (plantar)'}, plant:{es:'Mar–May'}, harv:{es:'Jun–Sep (flor)'},
    sowM:[0,0,1,1,1,0,0,0,0,0,0,0], plantM:[0,0,1,1,1,0,0,0,0,0,0,0], harvM:[0,0,0,0,0,1,1,1,1,0,0,0],
    growth_days:730,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:200 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:400 },
      { id:'flower', name:{es:'Floración invernal'}, icon:'🌸', color:'#FBE9E7', bg:'rgba(140,90,160,.10)', days:130 },
    ],
    advice:{
      0:{es:['"Rosa de invierno" — florece cuando el jardín duerme.','Suelo rico y fresco, bajo árboles caducos. No mover una vez establecido.']},
      1:{es:['Hojas coriáceas persistentes. Vive décadas en el mismo lugar.','Primeros años sin flores — paciencia.']},
      2:{es:['Flores colgantes en tonos crema, rosa, púrpura o casi negro.','Floración prolongada de pleno invierno a comienzos de primavera.']},
    },
    companions:[], avoid:[],
    climate:{es:'Centro-sur de Chile. Necesita humedad y frío invernal.'},
    zones:['RM','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      medicinal:{es:'IMPORTANTE: toda la planta es muy tóxica. No usar como remedio casero.'},
    },
    problems:[
      {es:'Toda la planta es tóxica — manipular con guantes.'},
      {es:'Crecimiento lento — paciencia los primeros años.'},
    ],
    seeds:{
      when:{es:'Multiplicación por división de matas en otoño.'},
      how:{es:'Separar matas con cuidado, replantar pronto.'},
      drying:{es:'No aplica.'},
      storage:{es:'Replantar fresco.'},
    },
  },

  {
    id:'hortensia_trepadora', category:'flor', rarity:'tradicional', emoji:'🌸',
    name:{es:'Hortensia trepadora', fr:'Hortensia grimpant'}, latin:'Hydrangea petiolaris', family:{es:'Hidrangeáceas'},
    water:{es:'Regular'}, sun:{es:'Semisombra'}, sun_hours:4, spacing_cm:200, height:{es:'trepadora, 5–15 m'},
    sow:{es:'May–Ago (plantar)'}, plant:{es:'May–Ago'}, harv:{es:'Dic–Feb (flor)'},
    sowM:[0,0,0,0,1,1,1,1,0,0,0,0], plantM:[0,0,0,0,1,1,1,1,0,0,0,0], harvM:[1,1,0,0,0,0,0,0,0,0,0,1],
    growth_days:1095,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:365 },
      { id:'growth', name:{es:'Trepando'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:600 },
      { id:'flower', name:{es:'Floración'}, icon:'🌸', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:130 },
    ],
    advice:{
      0:{es:['Trepadora vigorosa, ideal para muros y árboles altos.','Suelo rico y fresco, semisombra. Soporta paciencia los primeros años.']},
      1:{es:['Se adhiere a superficies por raíces aéreas. No necesita tutor.','Crece lento al inicio, luego se acelera.']},
      2:{es:['Inflorescencias blancas planas en verano.','Resiste mejor el frío que la hortensia común.']},
    },
    companions:[], avoid:[],
    climate:{es:'Sur de Chile: Biobío a Los Lagos. Prefiere humedad ambiente alta.'},
    zones:['Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{},
    problems:[
      {es:'Crecimiento muy lento al inicio — paciencia.'},
      {es:'Las raíces aéreas pueden dañar muros frágiles.'},
    ],
    seeds:{
      when:{es:'Multiplicación por esqueje semi-leñoso en otoño.'},
      how:{es:'Cortar 15 cm de tallo, plantar en sustrato húmedo.'},
      drying:{es:'No aplica.'},
      storage:{es:'Esquejes bajo plástico hasta enraizar.'},
    },
  },

  /* ───────────────────────────────────────────────── HOJAS AMARGAS Y CHICORIAS */

  {
    id:'endivia', category:'hortaliza', rarity:'tradicional', emoji:'🥬',
    name:{es:'Endivia', fr:'Endive'}, latin:'Cichorium intybus var. foliosum', family:{es:'Asteráceas'},
    water:{es:'Regular'}, sun:{es:'Pleno sol (raíz) / oscuridad (forzado)'}, sun_hours:6, spacing_cm:25, height:{es:'15–20 cm (cogollo blanqueado)'},
    sow:{es:'Oct–Dic (almácigo o directo)'}, plant:{es:'Nov–Ene'}, harv:{es:'Jul–Sep (tras forzado en oscuridad)'},
    sowM:[0,0,0,0,0,0,0,0,0,1,1,1], plantM:[1,0,0,0,0,0,0,0,0,0,1,1], harvM:[0,0,0,0,0,1,1,1,1,0,0,0],
    growth_days:200,
    stages:[
      { id:'germ',   name:{es:'Germinación'},      icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:10 },
      { id:'leaf',   name:{es:'Crecimiento foliar'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:90 },
      { id:'root',   name:{es:'Engrosamiento de raíz'}, icon:'🌰', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:60 },
      { id:'force',  name:{es:'Forzado en oscuridad'}, icon:'🥬', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:25 },
    ],
    advice:{
      0:{es:['Sembrar en primavera tardía; el primer año se forma la raíz.','Suelo profundo, fresco, sin piedras.']},
      1:{es:['Otoño: arrancar la raíz, recortar hojas a 3 cm.','Conservar raíces enteras en arena húmeda en lugar fresco.']},
      2:{es:['Forzar 3 semanas en oscuridad total a 12–15°C: nace el "cogollo" blanco y amargo.','En la Araucanía aprovechar bodegas y galpones para el forzado invernal.']},
    },
    companions:['zanahoria','puerro'],
    avoid:['lechuga'],
    climate:{es:'Crece bien en clima templado a frío. La Araucanía y Los Lagos son ideales para el ciclo de raíz y forzado invernal.'},
    zones:['RM','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Cogollos crudos en ensalada, gratinados con jamón y bechamel, salteados con mantequilla.'},
      nutritional:{es:'Fibra, folato e inulina prebiótica. Sabor amargo característico.'},
      medicinal:{es:'Tradicional aperitivo y digestivo por su amargor.'},
    },
    problems:[
      {es:'Subida prematura a flor si se siembra muy temprano — esperar primavera tardía.'},
      {es:'Babosas en hojas jóvenes — ceniza alrededor del cantero.'},
      {es:'Forzado expuesto a luz produce cogollos verdes y muy amargos — cubrir totalmente.'},
    ],
    seeds:{
      when:{es:'Dejar florecer una planta el segundo año (Nov–Dic).'},
      how:{es:'Recolectar las cabezuelas secas, separar las semillas.'},
      drying:{es:'Una semana al sol y luego sombra ventilada.'},
      storage:{es:'Sobre rotulado. Viabilidad 4–5 años.'},
    },
  },

  {
    id:'radicchio', category:'hortaliza', rarity:'tradicional', emoji:'🥬',
    name:{es:'Radicchio / Achicoria roja', fr:'Radicchio'}, latin:'Cichorium intybus var. foliosum', family:{es:'Asteráceas'},
    water:{es:'Regular'}, sun:{es:'Pleno sol'}, sun_hours:5, spacing_cm:30, height:{es:'25–35 cm'},
    sow:{es:'Ene–Mar (almácigo) y Ago–Sep'}, plant:{es:'Feb–Abr y Sep–Oct'}, harv:{es:'Abr–Jul (cabezas otoñales coloridas)'},
    sowM:[1,1,1,0,0,0,0,1,1,0,0,0], plantM:[0,1,1,1,0,0,0,0,1,1,0,0], harvM:[0,0,0,1,1,1,1,0,0,0,0,0],
    growth_days:90,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:8 },
      { id:'leaf',   name:{es:'Hojas verdes'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:50 },
      { id:'head',   name:{es:'Coloración y cabeza'}, icon:'🥬', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:32 },
    ],
    advice:{
      0:{es:['Sembrar en almácigo para mejor control inicial.','El color rojo intenso aparece con los primeros fríos otoñales.']},
      1:{es:['Trasplantar a 30 cm. Suelo fresco y bien drenado.','Riego constante pero sin encharcar.']},
      2:{es:['Cosechar cuando la cabeza está cerrada y firme.','Variedades clásicas: Chioggia (esférico rojo), Treviso (alargado), Castelfranco (moteado).']},
    },
    companions:['zanahoria','hinojo','rabanito'],
    avoid:[],
    climate:{es:'Necesita contraste térmico día/noche para colorear. La Araucanía y el Maule otoñal son perfectos.'},
    zones:['Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Risotto al radicchio, ensaladas otoñales, asado a la parrilla con aceite de oliva.'},
      nutritional:{es:'Antocianinas, vitamina K, intibina (compuesto amargo digestivo).'},
      medicinal:{es:'Aperitivo, depurativo hepático en uso tradicional italiano.'},
    },
    problems:[
      {es:'Si no colorea, falta frío — sembrar más tarde para cosecha en pleno otoño.'},
      {es:'Babosas en plántulas — ceniza o trampas de cerveza.'},
    ],
    seeds:{
      when:{es:'Dejar florecer plantas el segundo año.'},
      how:{es:'Cosechar cabezuelas con vilanos secos.'},
      drying:{es:'Una semana en sombra ventilada.'},
      storage:{es:'Sobre rotulado. Viabilidad 4 años. Polinización cruzada con otras achicorias — aislar variedades.'},
    },
  },

  {
    id:'achicoria', category:'hortaliza', rarity:'tradicional', emoji:'🌿',
    name:{es:'Achicoria común', fr:'Chicorée sauvage'}, latin:'Cichorium intybus', family:{es:'Asteráceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:30, height:{es:'80–150 cm'},
    sow:{es:'Sep–Dic (directo)'}, harv:{es:'Ene–Abr (hojas) y May–Ago (raíz)'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,1], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[1,1,1,1,1,1,1,1,0,0,0,0],
    growth_days:120,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:10 },
      { id:'leaf',   name:{es:'Roseta de hojas'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:60 },
      { id:'root',   name:{es:'Raíz pivotante'}, icon:'🌰', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:50 },
    ],
    advice:{
      0:{es:['Rústica y resistente, naturalizada en muchos campos chilenos.','Sembrar directo en cantero soleado.']},
      1:{es:['Cosechar hojas tiernas para ensalada en primavera-verano.','La raíz se arranca en otoño-invierno.']},
      2:{es:['Raíz tostada y molida = sustituto del café usado en tiempos antiguos.','Las flores azules atraen abejas — dejar algunas plantas florecer.']},
    },
    companions:['zanahoria','perejil'],
    avoid:[],
    climate:{es:'Muy rústica, crece en todo Chile salvo desierto extremo.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Hojas tiernas en ensalada amarga. Raíz tostada como sucedáneo de café.'},
      nutritional:{es:'Inulina (fibra prebiótica), hierro, vitamina A.'},
      medicinal:{es:'Tradicional tónico hepático y digestivo.'},
    },
    problems:[
      {es:'Si se establece, puede comportarse como mala hierba — controlar la floración.'},
      {es:'Hojas viejas muy amargas — cosechar joven.'},
    ],
    seeds:{
      when:{es:'Verano del segundo año, vainas secas.'},
      how:{es:'Sacudir las inflorescencias sobre un paño.'},
      drying:{es:'Sombra ventilada una semana.'},
      storage:{es:'Sobre rotulado. Viabilidad 5–6 años.'},
    },
  },

  {
    id:'mizuna', category:'hortaliza', rarity:'tradicional', emoji:'🌿',
    name:{es:'Mizuna', fr:'Mizuna'}, latin:'Brassica rapa var. nipposinica', family:{es:'Brasicáceas'},
    water:{es:'Regular'}, sun:{es:'Sol o semisombra'}, sun_hours:4, spacing_cm:20, height:{es:'25–35 cm'},
    sow:{es:'Mar–May y Ago–Oct (directo o almácigo)'}, harv:{es:'40 días post-siembra'},
    sowM:[0,0,1,1,1,0,0,1,1,1,0,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[1,1,0,1,1,1,1,0,0,1,1,1],
    growth_days:45,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:5 },
      { id:'growth', name:{es:'Crecimiento'},  icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:25 },
      { id:'harv',   name:{es:'Cosecha continua'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:15 },
    ],
    advice:{
      0:{es:['Hoja japonesa de sabor suave y ligeramente picante.','Crece bien en estación fresca; sube a flor con calor.']},
      1:{es:['Cortar hojas exteriores: la planta rebrota varias veces.','Sembrar cada 3 semanas para cosecha escalonada.']},
      2:{es:['Ideal en mezclas de hojas tiernas tipo "mesclun".','En invierno cubrir con malla anti-helada en la Araucanía.']},
    },
    companions:['rabanito','cebollin'],
    avoid:[],
    climate:{es:'Mejor en estación fresca. Cultivo de transición ideal en zona centro-sur.'},
    zones:['Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Ensaladas mixtas, salteados rápidos al wok, sopas miso.'},
      nutritional:{es:'Vitaminas A, C y K, calcio. Bajo en calorías.'},
      medicinal:{es:'Crucífera con propiedades antioxidantes de la familia.'},
    },
    problems:[
      {es:'Pulguilla en hojas — malla fina o ceniza.'},
      {es:'Subida a flor con calor — cosechar antes de los 50 días.'},
    ],
    seeds:{
      when:{es:'Dejar planta florecer al fin de ciclo, vainas largas se secan.'},
      how:{es:'Cortar vainas y separar semillas.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 4 años.'},
    },
  },

  {
    id:'tatsoi', category:'hortaliza', rarity:'tradicional', emoji:'🥬',
    name:{es:'Tatsoi', fr:'Tatsoi'}, latin:'Brassica rapa subsp. narinosa', family:{es:'Brasicáceas'},
    water:{es:'Regular'}, sun:{es:'Sol o semisombra'}, sun_hours:4, spacing_cm:20, height:{es:'15–25 cm'},
    sow:{es:'Mar–May y Ago–Oct (directo o almácigo)'}, harv:{es:'45 días post-siembra'},
    sowM:[0,0,1,1,1,0,0,1,1,1,0,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[1,1,0,1,1,1,1,0,0,1,1,1],
    growth_days:50,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:5 },
      { id:'plant',  name:{es:'Roseta plana'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:25 },
      { id:'harv',   name:{es:'Cosecha'},      icon:'🥬', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:20 },
    ],
    advice:{
      0:{es:['Forma una roseta plana, casi pegada al suelo.','Muy resistente al frío — soporta heladas suaves de la Araucanía.']},
      1:{es:['Cosechar planta entera o por hojas exteriores.','Sabor suave a mostaza dulce, sin amargor.']},
      2:{es:['Hojas y tallos crujientes muy apreciados en cocina asiática.','Cosechar joven para textura más tierna.']},
    },
    companions:['rabanito','cebolla'],
    avoid:[],
    climate:{es:'Estación fresca. Muy adaptado al sur de Chile por su tolerancia al frío.'},
    zones:['Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Salteados, sopas asiáticas, ensaladas tibias, baby leaves en mezclas.'},
      nutritional:{es:'Vitaminas A, C, K, calcio, hierro.'},
      medicinal:{es:'Antioxidantes propios de la familia de las coles.'},
    },
    problems:[
      {es:'Babosas pueden esconderse bajo la roseta — revisar tras la lluvia.'},
      {es:'Subida a flor con calor — cultivo de otoño y primavera.'},
    ],
    seeds:{
      when:{es:'Dejar planta florecer, vainas se secan.'},
      how:{es:'Cortar vainas y desgranar.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 4 años.'},
    },
  },

  {
    id:'grelos', category:'hortaliza', rarity:'tradicional', emoji:'🌿',
    name:{es:'Grelos', fr:'Grelos'}, latin:'Brassica rapa subsp. rapa', family:{es:'Brasicáceas'},
    water:{es:'Regular'}, sun:{es:'Pleno sol'}, sun_hours:5, spacing_cm:20, height:{es:'40–60 cm'},
    sow:{es:'Feb–Abr (directo o almácigo)'}, harv:{es:'Jun–Sep (brotes florales y hojas)'},
    sowM:[0,1,1,1,0,0,0,0,0,0,0,0], plantM:[0,0,0,1,1,0,0,0,0,0,0,0], harvM:[0,0,0,0,0,1,1,1,1,0,0,0],
    growth_days:90,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:7 },
      { id:'leaf',   name:{es:'Hojas y tallo'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:45 },
      { id:'bud',    name:{es:'Brotes florales'}, icon:'🌸', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:38 },
    ],
    advice:{
      0:{es:['Tradición gallega: se cosecha el brote floral antes de abrir.','Siembra otoñal para cosecha invernal y de primer frío.']},
      1:{es:['Aclarar a 20 cm.','Aporte de compost a mitad de ciclo.']},
      2:{es:['Cortar el brote central con 10 cm de tallo cuando los botones aún están cerrados.','Tras el corte central rebrotan brotes laterales.']},
    },
    companions:['lechuga','arveja'],
    avoid:[],
    climate:{es:'Idóneo en clima templado húmedo: la Araucanía y Los Lagos imitan el clima gallego de origen.'},
    zones:['Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Caldo gallego, lacón con grelos, salteados con ajo y aceite de oliva.'},
      nutritional:{es:'Vitamina C, calcio, folato. Sabor levemente amargo invernal.'},
      medicinal:{es:'Crucífera con propiedades depurativas.'},
    },
    problems:[
      {es:'Pulguilla y oruga de la col — malla anti-insecto.'},
      {es:'Si se deja florecer del todo, los brotes se vuelven duros.'},
    ],
    seeds:{
      when:{es:'Dejar florecer al final, vainas se secan a fines de primavera.'},
      how:{es:'Cortar vainas secas, desgranar.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 4 años.'},
    },
  },

  /* ───────────────────────────────────────────────── BRÁSICAS DE INVIERNO */

  {
    id:'col_de_bruselas', category:'hortaliza', rarity:'tradicional', emoji:'🥬',
    name:{es:'Col de Bruselas', fr:'Chou de Bruxelles'}, latin:'Brassica oleracea var. gemmifera', family:{es:'Brasicáceas'},
    water:{es:'Regular'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:60, height:{es:'70–90 cm'},
    sow:{es:'Dic–Feb (almácigo)'}, plant:{es:'Ene–Mar'}, harv:{es:'May–Ago (mejor tras heladas)'},
    sowM:[1,1,0,0,0,0,0,0,0,0,0,1], plantM:[1,1,1,0,0,0,0,0,0,0,0,0], harvM:[0,0,0,0,1,1,1,1,0,0,0,0],
    growth_days:180,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:8 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:40 },
      { id:'growth', name:{es:'Crecimiento del tallo'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:80 },
      { id:'sprout', name:{es:'Formación de coles'}, icon:'🥬', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:52 },
    ],
    advice:{
      0:{es:['Siembra de fin de verano para cosecha en pleno invierno.','Necesita ciclo largo: paciencia.']},
      1:{es:['Trasplantar a 60 cm en suelo profundo y firme.','Tutorar si el viento es fuerte — el tallo se vuelca cargado.']},
      2:{es:['Las pequeñas coles brotan en las axilas a lo largo del tallo, de abajo hacia arriba.','Despuntar la copa cuando la primera col alcanza 2 cm — concentra energía en los brotes.']},
      3:{es:['Cosechar de abajo hacia arriba, cuando son firmes y del tamaño de una nuez.','El sabor mejora tras la primera helada — más dulces.']},
    },
    companions:['betarraga','apio','manzanilla'],
    avoid:['frutilla','tomate'],
    climate:{es:'Cultivo emblemático del sur de Chile. La Araucanía y Los Lagos son ideales — el frío es aliado.'},
    zones:['RM','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Salteadas con tocino, asadas al horno, gratinadas, en sopas invernales.'},
      nutritional:{es:'Vitamina C muy alta, fibra, glucosinolatos.'},
      medicinal:{es:'Antioxidante y desintoxicante, propio de las crucíferas.'},
    },
    problems:[
      {es:'Mariposa de la col (oruga verde) — malla o Bacillus thuringiensis.'},
      {es:'Tallo se vuelca por viento — tutorar.'},
      {es:'Pulgones en cogollos — purín de ortiga al follaje.'},
    ],
    seeds:{
      when:{es:'Bienal: dejar una planta florecer el segundo año.'},
      how:{es:'Vainas secas en verano, desgranar.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 5 años. Polinización cruzada con otras coles.'},
    },
  },

  {
    id:'romanesco', category:'hortaliza', rarity:'tradicional', emoji:'🥦',
    name:{es:'Romanesco', fr:'Chou romanesco'}, latin:'Brassica oleracea var. botrytis', family:{es:'Brasicáceas'},
    water:{es:'Regular'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:60, height:{es:'60–80 cm'},
    sow:{es:'Dic–Mar (almácigo)'}, plant:{es:'Feb–Abr'}, harv:{es:'May–Ago'},
    sowM:[1,1,1,0,0,0,0,0,0,0,0,1], plantM:[0,1,1,1,0,0,0,0,0,0,0,0], harvM:[0,0,0,0,1,1,1,1,0,0,0,0],
    growth_days:110,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:8 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:35 },
      { id:'growth', name:{es:'Crecimiento foliar'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:40 },
      { id:'head',   name:{es:'Formación de pella fractal'}, icon:'🥦', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:27 },
    ],
    advice:{
      0:{es:['Prima del brócoli y la coliflor, con pellas geométricas verde chartreuse.','Necesita suelo rico y constante humedad.']},
      1:{es:['Trasplantar a 60 cm en suelo profundo con compost.','Mantener riego regular — sin sequía.']},
      2:{es:['Cosechar cuando los conos fractales son firmes y bien formados.','Si florece se vuelve granuloso — cosechar a tiempo.']},
    },
    companions:['betarraga','apio','eneldo'],
    avoid:['frutilla','tomate'],
    climate:{es:'Templado fresco. La Araucanía da las mejores cabezas en otoño-invierno.'},
    zones:['RM','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Al vapor con mantequilla, gratinado, tempura, en ensaladas tibias. Belleza visual en el plato.'},
      nutritional:{es:'Vitaminas C y K, fibra, antioxidantes.'},
      medicinal:{es:'Crucífera con virtudes generales antioxidantes.'},
    },
    problems:[
      {es:'Oruga de la col — Bacillus thuringiensis o malla.'},
      {es:'Pella suelta y desordenada por calor o falta de agua — riego constante.'},
    ],
    seeds:{
      when:{es:'Bienal. Dejar florecer el segundo año.'},
      how:{es:'Vainas secas en primavera tardía.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 5 años. Polinización cruzada con coliflor y brócoli.'},
    },
  },

  {
    id:'rutabaga', category:'hortaliza', rarity:'tradicional', emoji:'🟡',
    name:{es:'Rutabaga / Colinabo', fr:'Rutabaga'}, latin:'Brassica napus var. napobrassica', family:{es:'Brasicáceas'},
    water:{es:'Regular'}, sun:{es:'Pleno sol'}, sun_hours:5, spacing_cm:25, height:{es:'30–40 cm'},
    sow:{es:'Dic–Feb (directo)'}, harv:{es:'May–Ago (mejor tras heladas)'},
    sowM:[1,1,0,0,0,0,0,0,0,0,0,1], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[0,0,0,0,1,1,1,1,0,0,0,0],
    growth_days:100,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:7 },
      { id:'leaf',   name:{es:'Crecimiento foliar'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:40 },
      { id:'root',   name:{es:'Engrosamiento de raíz'}, icon:'🟡', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:53 },
    ],
    advice:{
      0:{es:['Cruce entre nabo y col — raíz amarilla muy resistente al frío.','Sembrar directo, 1 cm de profundidad.']},
      1:{es:['Aclarar a 25 cm.','Suelo profundo, suelto, sin terrones.']},
      2:{es:['Cosechar cuando la raíz mide 10–15 cm de diámetro.','Las heladas concentran azúcares — más dulce en pleno invierno.']},
    },
    companions:['arveja','lechuga'],
    avoid:[],
    climate:{es:'Cultivo nórdico que prospera en el sur de Chile. Ideal en la Araucanía y Los Lagos.'},
    zones:['Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos','Aysén'],
    uses:{
      culinary:{es:'Puré con mantequilla, sopas, gratinados, cazuelas. Carne firme tipo papa-nabo.'},
      nutritional:{es:'Vitamina C, fibra, potasio.'},
      medicinal:{es:'Tradicional alimento invernal para fortalecer en climas fríos.'},
    },
    problems:[
      {es:'Pulguilla en hojas jóvenes — malla.'},
      {es:'Raíces fibrosas si se cosecha muy tarde — no esperar más allá de la cosecha óptima.'},
    ],
    seeds:{
      when:{es:'Bienal: dejar florecer el segundo año.'},
      how:{es:'Vainas secas, desgranar.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 4 años.'},
    },
  },

  /* ───────────────────────────────────────────────── RAÍCES OLVIDADAS */

  {
    id:'chirivia', category:'hortaliza', rarity:'tradicional', emoji:'⚪',
    name:{es:'Chirivía', fr:'Panais'}, latin:'Pastinaca sativa', family:{es:'Apiáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:15, height:{es:'40–80 cm'},
    sow:{es:'Sep–Nov (directo)'}, harv:{es:'Mar–Jul (mejor tras heladas)'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[0,0,1,1,1,1,1,0,0,0,0,0],
    growth_days:150,
    stages:[
      { id:'germ',   name:{es:'Germinación lenta'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:21 },
      { id:'leaf',   name:{es:'Hojas grandes'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:60 },
      { id:'root',   name:{es:'Raíz pivotante'}, icon:'⚪', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:69 },
    ],
    advice:{
      0:{es:['Semilla con poca viabilidad — usar siempre semillas del año.','Germinación lenta (15–21 días) — paciencia.']},
      1:{es:['Suelo profundo, suelto, sin piedras (la raíz crece recta).','Aclarar a 12–15 cm entre plantas.']},
      2:{es:['Las heladas convierten almidón en azúcar — más dulce en pleno invierno.','Cosechar a medida que se necesita; resiste el suelo congelado.']},
    },
    companions:['rabanito','lechuga'],
    avoid:['zanahoria'],
    climate:{es:'Cultivo de raíz frío-resistente. Excelente en la Araucanía y Los Lagos para cosecha invernal.'},
    zones:['Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Puré, asadas al horno con miel, sopas cremosas, cazuelas. Sabor dulce a nuez.'},
      nutritional:{es:'Fibra, potasio, folato, vitamina C.'},
      medicinal:{es:'Tradicional alimento reconstituyente en invierno.'},
    },
    problems:[
      {es:'Hojas pueden causar dermatitis al sol (psoraleno) — manipular con manga larga.'},
      {es:'Mosca de la zanahoria — rotar cultivos, malla.'},
      {es:'Raíces bifurcadas en suelo pedregoso — preparar bien la cama.'},
    ],
    seeds:{
      when:{es:'Bienal: dejar florecer el segundo año, flores amarillas en umbela.'},
      how:{es:'Cosechar las semillas planas y aladas cuando se secan.'},
      drying:{es:'Sombra ventilada.'},
      storage:{es:'Sobre rotulado. Viabilidad SOLO 1 año — renovar cada temporada.'},
    },
  },

  {
    id:'salsifi', category:'hortaliza', rarity:'raro', emoji:'🌿',
    name:{es:'Salsifí / Barba de cabra', fr:'Salsifis'}, latin:'Tragopogon porrifolius', family:{es:'Asteráceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:6, spacing_cm:15, height:{es:'60–120 cm'},
    sow:{es:'Sep–Nov (directo)'}, harv:{es:'Abr–Ago (raíz)'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[0,0,0,1,1,1,1,1,0,0,0,0],
    growth_days:160,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:14 },
      { id:'leaf',   name:{es:'Hojas largas tipo puerro'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:70 },
      { id:'root',   name:{es:'Raíz pivotante larga'}, icon:'🌰', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:76 },
    ],
    advice:{
      0:{es:['Hortaliza tradicional europea, casi olvidada — vale la pena reintroducir.','Suelo profundo y suelto, sin piedras: la raíz puede medir 30 cm.']},
      1:{es:['Aclarar a 10–15 cm.','Riego regular para evitar raíces leñosas.']},
      2:{es:['Cosechar a partir del cuarto mes, tras las primeras heladas.','Pelar bajo agua — la savia mancha y oxida rápido.']},
    },
    companions:['zanahoria','puerro'],
    avoid:[],
    climate:{es:'Crece bien en clima templado, sin extremos de calor. Excelente en Araucanía y Los Ríos.'},
    zones:['Valparaíso','RM','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Hervida con mantequilla, en gratinados, sopas cremosas. Sabor delicado, ligeramente a ostra.'},
      nutritional:{es:'Inulina (fibra prebiótica), hierro, calcio, vitamina C.'},
      medicinal:{es:'Raíz suave y digestiva, recomendada en convalecencias.'},
    },
    problems:[
      {es:'Raíces bifurcadas si el suelo tiene piedras o terrones.'},
      {es:'Subida a flor el segundo año hace la raíz incomible — cosechar el primer año.'},
    ],
    seeds:{
      when:{es:'Dejar una planta florecer el segundo año (flores moradas).'},
      how:{es:'Cosechar las cabezuelas con vilanos antes que el viento las disperse.'},
      drying:{es:'Sombra ventilada.'},
      storage:{es:'Sobre rotulado. Viabilidad 2 años — renovar a menudo.'},
    },
  },

  /* ───────────────────────────────────────────────── FRUTOS DE VERANO */

  {
    id:'okra', category:'hortaliza', rarity:'raro', emoji:'🌿',
    name:{es:'Okra / Quingombó', fr:'Gombo'}, latin:'Abelmoschus esculentus', family:{es:'Malváceas'},
    water:{es:'Regular'}, sun:{es:'Pleno sol'}, sun_hours:8, spacing_cm:40, height:{es:'1–1,5 m'},
    sow:{es:'Sep–Oct (almácigo cálido)'}, plant:{es:'Nov (a tierra firme)'}, harv:{es:'Ene–Abr'},
    sowM:[0,0,0,0,0,0,0,0,1,1,0,0], plantM:[0,0,0,0,0,0,0,0,0,0,1,0], harvM:[1,1,1,1,0,0,0,0,0,0,0,0],
    growth_days:110,
    stages:[
      { id:'germ',   name:{es:'Germinación (cálida)'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:10 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:30 },
      { id:'flower', name:{es:'Floración'},    icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:25 },
      { id:'fruit',  name:{es:'Cápsulas comestibles'}, icon:'🌿', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:45 },
    ],
    advice:{
      0:{es:['Necesita calor: germinación sobre 22°C. Almácigo bajo cubierta.','Remojar semillas 24 h antes de sembrar.']},
      1:{es:['Trasplantar sólo cuando hayan pasado las heladas (no antes de Nov).','En el sur de Chile cultivar bajo invernadero o no cultivar.']},
      2:{es:['Cosechar cápsulas tiernas de 5–8 cm — más grandes se vuelven fibrosas.','Cosecha cada 2–3 días — la planta produce todo el verano si se cosecha seguido.']},
    },
    companions:['albahaca','pimenton'],
    avoid:[],
    climate:{es:'Cultivo cálido. Sólo viable en Coquimbo, Valparaíso y RM al aire libre. Más al sur sólo bajo invernadero.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins'],
    uses:{
      culinary:{es:'Guisos espesos (gumbo), salteados, fritos, encurtidos. La mucílago espesa salsas y caldos.'},
      nutritional:{es:'Fibra soluble, vitaminas C y K, folato, magnesio.'},
      medicinal:{es:'Mucílago suaviza las mucosas digestivas — tradicional para acidez.'},
    },
    problems:[
      {es:'Frío detiene el crecimiento por completo — esperar el verano firme.'},
      {es:'Pulgones en brotes tiernos — agua jabonosa.'},
      {es:'Cápsulas viejas son leñosas e incomibles — no dejar que pasen.'},
    ],
    seeds:{
      when:{es:'Dejar 2–3 cápsulas secarse en la planta al fin del ciclo.'},
      how:{es:'Abrir cápsulas secas, separar las semillas redondas.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Sobre rotulado en lugar seco. Viabilidad 4–5 años.'},
    },
  },

  /* ───────────────────────────────────────────────── PENCAS Y TALLOS */

  {
    id:'penca', category:'hortaliza', rarity:'tradicional', emoji:'🥬',
    name:{es:'Penca / Acelga de penca blanca', fr:'Bette à carde blanche'}, latin:'Beta vulgaris var. cicla', family:{es:'Amarantáceas'},
    water:{es:'Regular'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:35, height:{es:'50–70 cm'},
    sow:{es:'Feb–Abr y Ago–Oct (almácigo o directo)'}, harv:{es:'70 días post-siembra'},
    sowM:[0,1,1,1,0,0,0,1,1,1,0,0], plantM:[0,0,0,1,1,0,0,0,1,1,1,0], harvM:[1,1,0,1,1,1,1,1,0,1,1,1],
    growth_days:75,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:8 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:25 },
      { id:'harv',   name:{es:'Cosecha continua de pencas'}, icon:'🥬', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:42 },
    ],
    advice:{
      0:{es:['Variedad de acelga seleccionada por su penca blanca ancha y carnosa.','Sustrato profundo y rico en materia orgánica.']},
      1:{es:['Aclarar a 35 cm — la planta crece grande.','Riego constante para pencas tiernas, sin sequías.']},
      2:{es:['Cosechar las pencas exteriores cuando midan 30–40 cm.','La hoja verde sirve como acelga; la penca blanca cocida, como un vegetal aparte.']},
    },
    companions:['cebolla','zanahoria','rabanito'],
    avoid:['poroto_verde'],
    climate:{es:'Cultivo continuo en clima templado. Muy resistente al frío suave.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Pencas hervidas con bechamel o aceite y limón, gratinadas, en tortillas, en empanadas tradicionales.'},
      nutritional:{es:'Fibra, calcio, potasio, vitamina K.'},
      medicinal:{es:'Suave y digestiva, recomendada para dietas ligeras.'},
    },
    problems:[
      {es:'Cercospora (manchas en hojas) — retirar hojas afectadas, ventilar.'},
      {es:'Caracoles atacan hojas tiernas — trampas de cerveza.'},
    ],
    seeds:{
      when:{es:'Bienal: deja florecer el segundo año.'},
      how:{es:'Espigas con glomérulos secos.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 5 años.'},
    },
  },

  {
    id:'cardo_comestible', category:'hortaliza', rarity:'raro', emoji:'🌿',
    name:{es:'Cardo comestible blanqueado', fr:'Cardon comestible'}, latin:'Cynara cardunculus var. altilis', family:{es:'Asteráceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:80, height:{es:'1,5–2 m'},
    sow:{es:'Ago–Oct (almácigo)'}, plant:{es:'Sep–Nov'}, harv:{es:'Mar–Jul (tras blanqueo)'},
    sowM:[0,0,0,0,0,0,0,1,1,1,0,0], plantM:[0,0,0,0,0,0,0,0,1,1,1,0], harvM:[0,0,1,1,1,1,1,0,0,0,0,0],
    growth_days:210,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:15 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:40 },
      { id:'growth', name:{es:'Crecimiento vigoroso'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:120 },
      { id:'blanch', name:{es:'Blanqueo de pencas'}, icon:'🥬', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:35 },
    ],
    advice:{
      0:{es:['Pariente cultivado del cardo silvestre, seleccionado para pencas tiernas.','Distinto del cardo decorativo: aquí se come el tallo, no la flor.']},
      1:{es:['Plantar muy espaciado: la mata mide casi 2 m de diámetro adulta.','Suelo profundo, riegos moderados.']},
      2:{es:['Tres semanas antes de cosechar: atar las hojas con cordel y cubrir con cartón o paja para blanquear las pencas.','La oscuridad elimina amargor y enternece los tallos.']},
      3:{es:['Cosechar la mata entera tras el blanqueo, separar pencas.','Pelar y cocer 30–40 min en agua con limón para evitar oxidación.']},
    },
    companions:['arveja','haba'],
    avoid:[],
    climate:{es:'Mediterráneo a templado. Excelente en Maule, Ñuble y Biobío. La Araucanía exige protección invernal.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía'],
    uses:{
      culinary:{es:'Tradicional en cocina mediterránea: pencas con bechamel, gratinadas, en tortilla, salteadas con almendras.'},
      nutritional:{es:'Inulina, fibra, potasio, hierro.'},
      medicinal:{es:'Cinarina del cardo — tónico hepático y digestivo tradicional.'},
    },
    problems:[
      {es:'Espinas en hojas — manipular con guantes gruesos.'},
      {es:'Si no se blanquea queda muy amargo.'},
      {es:'Pulgones en cogollos jóvenes — agua jabonosa.'},
    ],
    seeds:{
      when:{es:'Deja florecer una mata al fin de su ciclo — vilanos en verano.'},
      how:{es:'Recolectar cabezuelas secas.'},
      drying:{es:'Sombra ventilada una semana.'},
      storage:{es:'Sobre rotulado. Viabilidad 5–6 años.'},
    },
  },

  /* ───────────────────────────────────────────────── HOJAS DIVERSAS */

  {
    id:'berro_de_tierra', category:'hortaliza', rarity:'tradicional', emoji:'🌿',
    name:{es:'Berro de tierra / Mastuerzo', fr:'Cresson de terre'}, latin:'Barbarea verna', family:{es:'Brasicáceas'},
    water:{es:'Regular'}, sun:{es:'Semisombra'}, sun_hours:4, spacing_cm:15, height:{es:'20–30 cm'},
    sow:{es:'Feb–May y Ago–Oct (directo)'}, harv:{es:'50 días post-siembra'},
    sowM:[0,1,1,1,1,0,0,1,1,1,0,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[1,1,0,1,1,1,1,1,0,1,1,1],
    growth_days:55,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:7 },
      { id:'growth', name:{es:'Roseta de hojas'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:30 },
      { id:'harv',   name:{es:'Cosecha continua'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:18 },
    ],
    advice:{
      0:{es:['No necesita acuario como el berro de agua — basta suelo fresco y sombra parcial.','Sembrar al voleo en cantero húmedo.']},
      1:{es:['Aclarar a 15 cm.','Cortar hojas exteriores conforme se necesitan: rebrota varias veces.']},
      2:{es:['Sabor picante similar al berro de agua, ideal en ensaladas y sándwiches.','Resiste heladas suaves — excelente cultivo invernal en la Araucanía.']},
    },
    companions:['lechuga','rabanito'],
    avoid:[],
    climate:{es:'Estación fresca. Muy adaptado al centro y sur de Chile.'},
    zones:['Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Ensaladas, sándwiches, pestos verdes, sopas frías.'},
      nutritional:{es:'Vitamina C alta, hierro, calcio.'},
      medicinal:{es:'Tradicional tónico depurativo y diurético en primavera.'},
    },
    problems:[
      {es:'Pulguilla en hojas — malla.'},
      {es:'Sube a flor con calor de verano — cultivo de otoño-invierno-primavera.'},
    ],
    seeds:{
      when:{es:'Dejar florecer al fin del ciclo, vainas largas se secan.'},
      how:{es:'Cortar vainas, separar semillas.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 4 años.'},
    },
  },

  {
    id:'mostaza_morada', category:'hortaliza', rarity:'tradicional', emoji:'🌿',
    name:{es:'Mostaza morada', fr:'Moutarde rouge'}, latin:'Brassica juncea var. rugosa', family:{es:'Brasicáceas'},
    water:{es:'Regular'}, sun:{es:'Pleno sol'}, sun_hours:5, spacing_cm:20, height:{es:'30–40 cm'},
    sow:{es:'Mar–May y Ago–Oct (directo)'}, harv:{es:'40 días post-siembra'},
    sowM:[0,0,1,1,1,0,0,1,1,1,0,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[1,1,0,1,1,1,1,0,0,1,1,1],
    growth_days:50,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:5 },
      { id:'growth', name:{es:'Hojas rojo-violáceas'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:25 },
      { id:'harv',   name:{es:'Cosecha'},      icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:20 },
    ],
    advice:{
      0:{es:['Hojas onduladas en tonos rojo, púrpura y verde. Belleza visual en el cantero.','Germina rápido — siembras escalonadas cada 3 semanas.']},
      1:{es:['Cosechar hojas exteriores jóvenes: más suaves y coloridas.','El frío intensifica el color púrpura.']},
      2:{es:['Sabor picante a mostaza, ideal en ensaladas tibias y sándwiches.','Se vuelve menos picante al cocerse.']},
    },
    companions:['lechuga','espinaca','rucula'],
    avoid:[],
    climate:{es:'Estación fresca en todo Chile. Color intenso en la Araucanía con sus contrastes de temperatura.'},
    zones:['Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Ensaladas mesclun, salteados al wok, decoración de platos.'},
      nutritional:{es:'Vitaminas A, C, K, antocianinas, glucosinolatos.'},
      medicinal:{es:'Crucífera picante, tradicional aperitivo y digestivo.'},
    },
    problems:[
      {es:'Pulguilla en hojas — malla fina.'},
      {es:'Subida a flor con calor — cosechar antes de los 50 días.'},
    ],
    seeds:{
      when:{es:'Dejar planta florecer, vainas largas se secan.'},
      how:{es:'Cortar y desgranar vainas.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 4 años.'},
    },
  },

  {
    id:'acelga_amarilla', category:'hortaliza', rarity:'tradicional', emoji:'🌿',
    name:{es:'Acelga amarilla', fr:'Bette à carde jaune'}, latin:'Beta vulgaris subsp. vulgaris', family:{es:'Amarantáceas'},
    water:{es:'Regular'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:30, height:{es:'40–60 cm'},
    sow:{es:'Feb–Abr y Ago–Nov (almácigo o directo)'}, harv:{es:'60 días post-siembra'},
    sowM:[0,1,1,1,0,0,0,1,1,1,1,0], plantM:[0,0,0,1,1,0,0,0,1,1,1,0], harvM:[1,1,0,1,1,1,1,1,0,1,1,1],
    growth_days:65,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:8 },
      { id:'plant',  name:{es:'Plántula'},     icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:25 },
      { id:'harv',   name:{es:'Cosecha continua'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:32 },
    ],
    advice:{
      0:{es:['Variedad de acelga con penca amarilla luminosa — alegra el huerto invernal.','Siembras escalonadas para cosecha continua todo el año.']},
      1:{es:['Aclarar a 30 cm.','Riego regular: penca tierna y hoja brillante.']},
      2:{es:['Cosechar las hojas exteriores; el cogollo central sigue produciendo meses.','Color amarillo se mantiene tras cocción suave.']},
    },
    companions:['cebolla','zanahoria','rabanito'],
    avoid:['poroto_verde'],
    climate:{es:'Cultivo continuo en clima templado. Resiste bien el frío de la Araucanía.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Salteada, en tortillas, empanadas, sopas, hojas tiernas crudas en ensalada.'},
      nutritional:{es:'Vitaminas A, K, magnesio, hierro, fibra.'},
      medicinal:{es:'Hoja suave y digestiva, recomendada en dietas ligeras.'},
    },
    problems:[
      {es:'Cercospora (manchas en hojas) — retirar afectadas, no mojar follaje.'},
      {es:'Babosas en plántulas — ceniza.'},
    ],
    seeds:{
      when:{es:'Bienal: dejar florecer el segundo año.'},
      how:{es:'Espigas con glomérulos secos.'},
      drying:{es:'Una semana al sol.'},
      storage:{es:'Sobre rotulado. Viabilidad 5 años.'},
    },
  },

  /* ───────────────────────────────────────────────── LEGUMINOSAS DE GRANO */

  {
    id:'poroto_pallar', category:'hortaliza', rarity:'tradicional', emoji:'🫘',
    name:{es:'Poroto pallar', fr:'Haricot de Lima'}, latin:'Phaseolus lunatus', family:{es:'Fabáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:30, height:{es:'2–3 m (trepador)'},
    sow:{es:'Oct–Nov (directo, tierra cálida)'}, harv:{es:'Feb–Abr (grano fresco o seco)'},
    sowM:[0,0,0,0,0,0,0,0,0,1,1,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[0,1,1,1,0,0,0,0,0,0,0,0],
    growth_days:110,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:10 },
      { id:'plant',  name:{es:'Plántula trepadora'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:30 },
      { id:'flower', name:{es:'Floración'},    icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:25 },
      { id:'pod',    name:{es:'Vainas planas anchas'}, icon:'🫘', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:45 },
    ],
    advice:{
      0:{es:['Grano grande, plano y blanco. Sensible al frío — esperar tierra cálida (>18°C).','Cultivo histórico andino, llegó a Chile desde Perú.']},
      1:{es:['Tutorar con cañas altas o sobre cerco — trepador vigoroso.','No regar las semillas recién sembradas — pueden pudrirse.']},
      2:{es:['Cosechar vainas planas cuando los granos abultan claramente.','Para grano seco: dejar la vaina secar completamente en la planta.']},
    },
    companions:['choclo','zapallo'],
    avoid:['ajo','cebolla','puerro'],
    climate:{es:'Necesita calor estival. Mejor en Coquimbo a Maule. En la Araucanía sólo en sectores soleados protegidos.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío'],
    uses:{
      culinary:{es:'Pallares con mariscos, guisos cremosos, ensaladas tibias, sopas espesas.'},
      nutritional:{es:'Proteína vegetal alta, hierro, magnesio, fibra.'},
      medicinal:{es:'Fija nitrógeno: mejora la tierra para los cultivos siguientes.'},
    },
    problems:[
      {es:'Semilla cruda contiene cianuro — siempre cocinar bien antes de comer.'},
      {es:'Sensible a frío y heladas — no apurar la siembra.'},
      {es:'Mosca blanca y pulgones — purín de ortiga.'},
    ],
    seeds:{
      when:{es:'Dejar vainas secarse en la planta al fin del ciclo.'},
      how:{es:'Desgranar vainas secas, descartar granos arrugados.'},
      drying:{es:'Tres días al sol.'},
      storage:{es:'Frasco hermético. Congelar 48 h previene gorgojo. Viabilidad 3–4 años.'},
      notes:{es:'Variedades tradicionales del norte chico — vale conservar el linaje.'},
    },
  },

  {
    id:'lenteja', category:'hortaliza', rarity:'tradicional', emoji:'🫘',
    name:{es:'Lenteja', fr:'Lentille'}, latin:'Lens culinaris', family:{es:'Fabáceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:5, height:{es:'30–50 cm'},
    sow:{es:'Jun–Sep (directo, al voleo)'}, harv:{es:'Dic–Feb (grano seco)'},
    sowM:[0,0,0,0,0,1,1,1,1,0,0,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[1,1,0,0,0,0,0,0,0,0,0,1],
    growth_days:110,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:10 },
      { id:'plant',  name:{es:'Mata baja'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:40 },
      { id:'flower', name:{es:'Flores pequeñas'}, icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:25 },
      { id:'pod',    name:{es:'Vainas con grano'}, icon:'🫘', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:35 },
    ],
    advice:{
      0:{es:['Cultivo tradicional secano del Maule y Ñuble — vale conservar.','Sembrar al voleo o en surcos densos, no necesita aclareo.']},
      1:{es:['Muy poco exigente en agua y suelo — prospera donde otros no.','No abonar con nitrógeno — la planta lo fija sola.']},
      2:{es:['Cosechar la mata entera cuando se torna amarilla y las vainas crujen.','Trillar al sol sobre lona, separar granos del rastrojo.']},
    },
    companions:['avena','cebada'],
    avoid:['ajo','cebolla'],
    climate:{es:'Cultivo de secano mediterráneo. Histórico en Cauquenes, Itata y Ñuble.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío'],
    uses:{
      culinary:{es:'Guiso de lentejas, sopas, ensaladas tibias con cebolla y comino. Patrimonio del invierno chileno.'},
      nutritional:{es:'Proteína vegetal alta, hierro, folato, fibra. Combinada con cereal: proteína completa.'},
      medicinal:{es:'Alimento básico tradicional en convalecencia y para reponer fuerzas.'},
    },
    problems:[
      {es:'Gorgojo en grano almacenado — congelar 48 h tras la cosecha previene.'},
      {es:'Roya en años muy húmedos — rotar cultivos.'},
      {es:'Exceso de riego pudre raíces — secano funciona mejor.'},
    ],
    seeds:{
      when:{es:'Selección directa del propio cultivo cosechado, descartando los más pequeños.'},
      how:{es:'Tras trilla y limpieza, separar los granos más grandes y sanos.'},
      drying:{es:'Una semana al sol tras la cosecha.'},
      storage:{es:'Frasco hermético en lugar seco. Congelar 48 h. Viabilidad 4 años.'},
      notes:{es:'Las variedades pardina, castellana o lenteja chica del Maule merecen conservarse.'},
    },
  },

  {
    id:'garbanzo', category:'hortaliza', rarity:'tradicional', emoji:'🫘',
    name:{es:'Garbanzo', fr:'Pois chiche'}, latin:'Cicer arietinum', family:{es:'Fabáceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:8, spacing_cm:10, height:{es:'40–60 cm'},
    sow:{es:'Ago–Oct (directo)'}, harv:{es:'Ene–Mar (grano seco)'},
    sowM:[0,0,0,0,0,0,0,1,1,1,0,0], plantM:[0,0,0,0,0,0,0,0,0,0,0,0], harvM:[1,1,1,0,0,0,0,0,0,0,0,0],
    growth_days:150,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:10 },
      { id:'plant',  name:{es:'Mata frondosa'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:55 },
      { id:'flower', name:{es:'Floración blanca o violeta'}, icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:35 },
      { id:'pod',    name:{es:'Vainas con 1–2 granos'}, icon:'🫘', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:50 },
    ],
    advice:{
      0:{es:['Sembrar a fin de invierno o principio de primavera, en surcos espaciados 40 cm.','No abonar con nitrógeno — fija el suyo.']},
      1:{es:['Tolera sequía y suelos pobres pedregosos.','No mojar el follaje — favorece rabia (hongo) y mancha foliar.']},
      2:{es:['Cosechar cuando la mata amarillea y las vainas crujen al apretarlas.','Arrancar mata entera, secar bajo techo ventilado, luego trillar.']},
    },
    companions:['avena','cebada'],
    avoid:['ajo','cebolla'],
    climate:{es:'Secano mediterráneo. Tradicional en el valle del Aconcagua, Casablanca, Curicó y Cauquenes.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío'],
    uses:{
      culinary:{es:'Hummus, charquicán de garbanzos, garbanzos con espinaca, ensaladas, cocido patrimonial.'},
      nutritional:{es:'Proteína vegetal alta, hierro, folato, fibra. Base de muchas dietas mediterráneas.'},
      medicinal:{es:'Alimento básico nutritivo y de larga conservación.'},
    },
    problems:[
      {es:'Rabia del garbanzo (Ascochyta) en años húmedos — variedades resistentes, rotación.'},
      {es:'Gorgojo en almacén — congelar 48 h tras cosecha.'},
      {es:'Heladas tardías queman los brotes jóvenes — sembrar tras la última helada.'},
    ],
    seeds:{
      when:{es:'Reservar parte de la propia cosecha al trillar.'},
      how:{es:'Seleccionar granos grandes, sanos, sin manchas.'},
      drying:{es:'Una semana al sol tras la cosecha.'},
      storage:{es:'Frasco hermético en lugar seco. Congelar 48 h previene gorgojo. Viabilidad 4–5 años.'},
      notes:{es:'Variedades chilenas tradicionales: Sutil, Toltén. Merecen conservación local.'},
    },
  },

  /* ───────────────────────────────────────────────── ÁRBOLES FRUTALES MEDITERRÁNEOS Y SUBTROPICALES */

  {
    id:'caqui', category:'arbol', rarity:'tradicional', emoji:'🟠',
    name:{es:'Caqui / Persimón', fr:'Kaki'}, latin:'Diospyros kaki', family:{es:'Ebenáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:500, height:{es:'4–8 m'},
    sow:{es:'Jun–Ago (plantar a raíz desnuda)'}, plant:{es:'Jun–Ago'}, harv:{es:'Abr–Jun'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[0,0,0,1,1,1,0,0,0,0,0,0],
    growth_days:1460,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:240 },
      { id:'growth', name:{es:'Joven a producir'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1095 },
      { id:'flower', name:{es:'Floración'}, icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:35 },
      { id:'fruit',  name:{es:'Fructificación tardía'}, icon:'🟠', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:90 },
    ],
    advice:{
      0:{es:['Plantar en patio soleado, suelo profundo y bien drenado.','Primeros frutos al 4°–5° año en injertos; más en franco.']},
      1:{es:['Riego de apoyo en verano joven; adulto resiste sequía moderada.','Poda de formación en invierno, suave.']},
      2:{es:['Flores discretas en primavera, sin necesidad de polinizador en variedades partenocárpicas (Rojo Brillante, Triumph).']},
      3:{es:['Las hojas caen en otoño y los frutos colgantes anaranjados quedan iluminando el árbol pelado — imagen clásica del patio rural chileno.','Cosechar firmes y madurar en cajón con manzana, o esperar que se ablanden en la rama (tipo "rocoto blando").']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Crece de Coquimbo a la Araucanía. Tolera frío invernal moderado. Mejor con verano cálido y otoño largo.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía'],
    uses:{
      culinary:{es:'Comerlo maduro a cuchara, en mermeladas, deshidratado en lonjas, en kuchen de fin de otoño.'},
      nutritional:{es:'Vitamina A, C, fibra y antioxidantes. Fruta dulce e hidratante.'},
      medicinal:{es:'Tradicional remedio digestivo cuando bien maduro.'},
    },
    problems:[
      {es:'Frutos verdes son astringentes — esperar madurez completa.'},
      {es:'Heladas tardías en floración dañan cosecha — proteger en años fríos.'},
      {es:'Aves persiguen los frutos maduros en abril — mallar la copa o cosechar pronto.'},
    ],
    seeds:{
      when:{es:'Reproducción habitual por injerto sobre franco de caqui.'},
      how:{es:'Las semillas dan árboles vigorosos pero de fruto incierto.'},
      drying:{es:'Limpiar pulpa y secar a la sombra.'},
      storage:{es:'Estratificación fría 2–3 meses para germinar.'},
    },
  },

  {
    id:'feijoa', category:'arbol', rarity:'tradicional', emoji:'🟢',
    name:{es:'Feijoa / Guayabo del país', fr:'Feijoa'}, latin:'Acca sellowiana', family:{es:'Mirtáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol o semisombra'}, sun_hours:6, spacing_cm:400, height:{es:'3–5 m'},
    sow:{es:'May–Ago (plantar arbusto)'}, plant:{es:'May–Ago'}, harv:{es:'Abr–May'},
    sowM:[0,0,0,0,1,1,1,1,0,0,0,0], plantM:[0,0,0,0,1,1,1,1,0,0,0,0], harvM:[0,0,0,1,1,0,0,0,0,0,0,0],
    growth_days:1095,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:240 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:730 },
      { id:'flower', name:{es:'Floración roja y blanca'}, icon:'🌺', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:45 },
      { id:'fruit',  name:{es:'Fructificación'}, icon:'🟢', color:'#FBE9E7', bg:'rgba(59,88,56,.10)', days:80 },
    ],
    advice:{
      0:{es:['Arbusto rústico, vive décadas en patios chilenos sin grandes cuidados.','Suelo bien drenado, tolera leve acidez.']},
      1:{es:['Las flores tienen pétalos blanco-rosados comestibles y dulces (frescas en ensaladas de verano).','Riego de apoyo durante el cuajado en primavera.']},
      2:{es:['Frutos verdes oblongos que caen al madurar — se recogen del suelo cada mañana.','Pulpa cremosa, gelatinosa, perfume entre piña y guayaba.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Excelente de Valparaíso a Los Lagos. Soporta heladas suaves. Muy presente en patios del sur.'},
    zones:['Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Comer fresca a cuchara, mermeladas, jugos, kuchen del sur, helados artesanales.'},
      nutritional:{es:'Vitamina C, fibra, yodo natural, antioxidantes.'},
      medicinal:{es:'Tradicional digestivo y depurativo suave.'},
    },
    problems:[
      {es:'Si está sola, fructifica poco — plantar dos para polinización cruzada.'},
      {es:'Las heladas fuertes queman flores — proteger en Los Lagos.'},
    ],
    seeds:{
      when:{es:'Multiplicación por estaca semi-leñosa en otoño o por semilla.'},
      how:{es:'Semillas frescas de fruto bien maduro, lavar pulpa, sembrar de inmediato.'},
      drying:{es:'No conviene secar largo — pierde viabilidad.'},
      storage:{es:'Plantines en vivero hasta 50 cm antes de tierra firme.'},
    },
  },

  {
    id:'pitanga', category:'arbol', rarity:'tradicional', emoji:'🔴',
    name:{es:'Pitanga / Cereza de Surinam', fr:'Pitanga'}, latin:'Eugenia uniflora', family:{es:'Mirtáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:300, height:{es:'2–4 m'},
    sow:{es:'Jun–Sep (plantar arbusto)'}, plant:{es:'Jun–Sep'}, harv:{es:'Nov–Ene'},
    sowM:[0,0,0,0,0,1,1,1,1,0,0,0], plantM:[0,0,0,0,0,1,1,1,1,0,0,0], harvM:[1,0,0,0,0,0,0,0,0,0,1,1],
    growth_days:1095,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:240 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:730 },
      { id:'flower', name:{es:'Floración blanca'}, icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:35 },
      { id:'fruit',  name:{es:'Bayas surcadas rojo intenso'}, icon:'🔴', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:90 },
    ],
    advice:{
      0:{es:['Arbusto frutal sudamericano, adaptado a patios mediterráneos chilenos.','Hojas pequeñas brillantes que enrojecen al brotar — bonito todo el año.']},
      1:{es:['Tolera poda fuerte, se puede mantener como seto comestible.','Riego de apoyo en verano seco.']},
      2:{es:['Bayas rojas surcadas tipo calabacita en miniatura.','Sabor agridulce, perfumado, con un dejo resinoso característico.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Cálido a templado: Coquimbo a Biobío. Tolera heladas leves cuando está adulto.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío'],
    uses:{
      culinary:{es:'Fresca, en mermelada, licor casero, helado artesanal.'},
      nutritional:{es:'Vitamina C alta, antioxidantes, aceites esenciales.'},
      medicinal:{es:'Hojas en infusión, uso tradicional digestivo en países de origen.'},
    },
    problems:[
      {es:'Aves muy aficionadas — proteger con malla.'},
      {es:'Heladas fuertes (-3 °C) dañan los brotes — proteger en su primer invierno.'},
    ],
    seeds:{
      when:{es:'Semilla fresca del fruto bien maduro.'},
      how:{es:'Lavar pulpa, sembrar inmediatamente. Germinación en 30–50 días.'},
      drying:{es:'No secar — semilla recalcitrante pierde poder germinativo rápido.'},
      storage:{es:'Plantines en maceta hasta el invierno siguiente.'},
    },
  },

  {
    id:'jaboticaba', category:'arbol', rarity:'raro', emoji:'🟣',
    name:{es:'Jaboticaba', fr:'Jaboticaba'}, latin:'Plinia cauliflora', family:{es:'Mirtáceas'},
    water:{es:'Regular'}, sun:{es:'Pleno sol o semisombra'}, sun_hours:6, spacing_cm:500, height:{es:'4–8 m'},
    sow:{es:'Jun–Sep (plantar joven)'}, plant:{es:'Jun–Sep'}, harv:{es:'Oct–Dic (y rebrote)'},
    sowM:[0,0,0,0,0,1,1,1,1,0,0,0], plantM:[0,0,0,0,0,1,1,1,1,0,0,0], harvM:[0,0,0,0,0,0,0,0,0,1,1,1],
    growth_days:2555,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:365 },
      { id:'growth', name:{es:'Crecimiento muy lento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:2000 },
      { id:'flower', name:{es:'Floración cauliflora'}, icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:30 },
      { id:'fruit',  name:{es:'Bayas pegadas al tronco'}, icon:'🟣', color:'#FBE9E7', bg:'rgba(140,90,160,.10)', days:60 },
    ],
    advice:{
      0:{es:['Árbol singular: las flores y frutos brotan directamente sobre el tronco y las ramas viejas.','Crecimiento muy lento — primeros frutos al 6°–10° año.']},
      1:{es:['Suelo profundo, fresco, ligeramente ácido. Mulch grueso para mantener humedad.','En la zona central conviene protegerlo de viento seco.']},
      2:{es:['Bayas negro-violáceas tipo uva, dulces con cáscara levemente amarga.','Verlas brotar adheridas al tronco es una escena que conmueve — vale la paciencia.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Subtropical: Coquimbo a Biobío en patios protegidos. No prospera con heladas fuertes prolongadas.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío'],
    uses:{
      culinary:{es:'Fresca del árbol al instante, mermelada, vino casero, jugos.'},
      nutritional:{es:'Antioxidantes, vitamina C, fibra.'},
      medicinal:{es:'Tradición brasileña: infusión de cáscara para problemas digestivos.'},
    },
    problems:[
      {es:'Lentitud extrema — sólo para quien planta pensando en años.'},
      {es:'Heladas fuertes la dañan — proteger los primeros inviernos.'},
      {es:'Fruta de vida muy corta tras cosecha: comer pronto o procesar.'},
    ],
    seeds:{
      when:{es:'Semilla fresca de fruto bien maduro.'},
      how:{es:'Lavar pulpa, sembrar de inmediato en sustrato húmedo y cálido.'},
      drying:{es:'No secar — semilla recalcitrante.'},
      storage:{es:'Almácigo bajo cubierta; trasplantar al año siguiente.'},
    },
  },

  {
    id:'guinda_acida', category:'arbol', rarity:'tradicional', emoji:'🔴',
    name:{es:'Guinda ácida', fr:'Griotte / Cerise acide'}, latin:'Prunus cerasus', family:{es:'Rosáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:500, height:{es:'4–6 m'},
    sow:{es:'Jun–Ago (plantar a raíz desnuda)'}, plant:{es:'Jun–Ago'}, harv:{es:'Nov–Ene'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[1,0,0,0,0,0,0,0,0,0,1,1],
    growth_days:1095,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:240 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:730 },
      { id:'flower', name:{es:'Floración blanca'}, icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:25 },
      { id:'fruit',  name:{es:'Cosecha en racimo'}, icon:'🔴', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:80 },
    ],
    advice:{
      0:{es:['Más pequeña y rústica que la cereza dulce, perfecta para huertos familiares del sur.','Se planta a raíz desnuda en pleno invierno, antes de la brotación.']},
      1:{es:['Autofértil — basta un solo árbol para tener cosecha.','Soporta heladas invernales fuertes; necesita horas de frío.']},
      2:{es:['Frutos rojo intenso, jugosos y muy ácidos, ideales para conservas, kuchen y guindado.','Cosechar cuando ceden al tacto, antes de que las aves den el aviso.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Centro-sur de Chile, desde el Maule a Los Lagos. Necesita inviernos fríos para fructificar bien.'},
    zones:['Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Mermelada, guindado, kuchen alemán del sur, salsas para carnes, conservas en almíbar.'},
      nutritional:{es:'Antocianinas, vitamina C, melatonina natural.'},
      medicinal:{es:'Tradicional para conciliar el sueño y aliviar dolores articulares.'},
    },
    problems:[
      {es:'Monilia (podredumbre de fruto) en años húmedos — retirar frutas afectadas.'},
      {es:'Aves persiguen los racimos — mallar antes de cosechar.'},
      {es:'Goma en heridas — podar limpio en invierno seco.'},
    ],
    seeds:{
      when:{es:'Multiplicación habitual por injerto sobre franco o pie clonal.'},
      how:{es:'Semilla por carozo: estratificar 90 días en frío húmedo.'},
      drying:{es:'Lavar pulpa, secar el carozo a la sombra.'},
      storage:{es:'Sobre rotulado en lugar fresco; sembrar al invierno siguiente.'},
    },
  },

  {
    id:'acerola', category:'arbol', rarity:'raro', emoji:'🔴',
    name:{es:'Acerola / Cereza de Barbados', fr:'Acérola'}, latin:'Malpighia emarginata', family:{es:'Malpigiáceas'},
    water:{es:'Regular'}, sun:{es:'Pleno sol'}, sun_hours:8, spacing_cm:300, height:{es:'2–4 m'},
    sow:{es:'Sep–Nov (plantar arbusto)'}, plant:{es:'Sep–Nov'}, harv:{es:'Ene–Abr (varias cosechas)'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,1,1,1,0], harvM:[1,1,1,1,0,0,0,0,0,0,0,0],
    growth_days:730,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:180 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:365 },
      { id:'flower', name:{es:'Flores rosadas'}, icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:20 },
      { id:'fruit',  name:{es:'Cosechas sucesivas'}, icon:'🔴', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:165 },
    ],
    advice:{
      0:{es:['Arbusto subtropical: en Chile sólo prospera en el norte y centro cálido, o protegido.','En la zona central conviene plantar contra muro orientado al norte para acumular calor.']},
      1:{es:['Florece y fructifica varias veces al año cuando el clima lo permite.','Suelo bien drenado, riego regular pero sin encharcar.']},
      2:{es:['Frutos rojos brillantes pequeños, ácidos, con la mayor concentración natural conocida de vitamina C.','Cosechar al color rojo intenso, comer o procesar el mismo día.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Cálido sin heladas. En Chile: Arica a RM en patio soleado. Muy difícil del Maule al sur.'},
    zones:['Arica','Tarapacá','Antofagasta','Atacama','Coquimbo','Valparaíso','RM'],
    uses:{
      culinary:{es:'Jugo natural, pulpa congelada, mermelada, helados ácidos.'},
      nutritional:{es:'Vitamina C extraordinariamente alta (hasta 50 veces la naranja).'},
      medicinal:{es:'Tradicional refuerzo inmunitario y antifatiga.'},
    },
    problems:[
      {es:'Heladas la matan — no plantar al sur del Maule sin invernadero.'},
      {es:'Fruto de vida muy corta — comer o procesar rápido.'},
    ],
    seeds:{
      when:{es:'Reproducción habitual por estaca semi-leñosa con hormona enraizante.'},
      how:{es:'Semilla fresca, pero germinación irregular y árbol más lento.'},
      drying:{es:'Lavar pulpa y sembrar de inmediato.'},
      storage:{es:'Plantines en vivero hasta 40 cm antes de tierra firme.'},
    },
  },

  {
    id:'tamarillo', category:'arbol', rarity:'tradicional', emoji:'🟠',
    name:{es:'Tamarillo / Tomate de árbol', fr:'Tamarillo'}, latin:'Solanum betaceum', family:{es:'Solanáceas'},
    water:{es:'Regular'}, sun:{es:'Pleno sol o semisombra'}, sun_hours:6, spacing_cm:300, height:{es:'2–4 m'},
    sow:{es:'Ago–Oct (almácigo)'}, plant:{es:'Oct–Nov (a tierra firme)'}, harv:{es:'Abr–Ago (otoño-invierno)'},
    sowM:[0,0,0,0,0,0,0,1,1,1,0,0], plantM:[0,0,0,0,0,0,0,0,0,1,1,0], harvM:[0,0,0,1,1,1,1,1,0,0,0,0],
    growth_days:540,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:20 },
      { id:'plant',  name:{es:'Plántula'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:90 },
      { id:'growth', name:{es:'Arbolito juvenil'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:300 },
      { id:'flower', name:{es:'Floración rosa'}, icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:30 },
      { id:'fruit',  name:{es:'Fructificación'}, icon:'🟠', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:100 },
    ],
    advice:{
      0:{es:['Arbolito rápido andino, vive 5–7 años productivos.','Brota desde semilla y a los 18 meses ya da fruto.']},
      1:{es:['Tronco quebradizo — tutorar en lugares con viento.','Riego regular, agradece mulch grueso al pie.']},
      2:{es:['Frutos ovalados color naranja o púrpura, brillantes y agridulces.','Cosechar cuando ceden al tacto — la cáscara se pela como un tomate escaldado.']},
    },
    companions:[],
    avoid:['papa','tomate'],
    climate:{es:'Templado sin heladas fuertes. Mejor de Coquimbo a Biobío en patio protegido.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío'],
    uses:{
      culinary:{es:'Mermelada espesa, jugos, salsas agridulces, postres con leche condensada — tradición andina.'},
      nutritional:{es:'Vitamina A, C, hierro, fibra.'},
      medicinal:{es:'Tradicional digestivo y depurativo suave.'},
    },
    problems:[
      {es:'Heladas fuertes lo matan — proteger en invierno.'},
      {es:'Pulgones en brotes tiernos — agua jabonosa.'},
      {es:'Vida útil corta: renovar plantines cada 5–6 años.'},
    ],
    seeds:{
      when:{es:'De frutos bien maduros al final del otoño.'},
      how:{es:'Extraer semillas con pulpa, fermentar 2–3 días, lavar, secar.'},
      drying:{es:'Una semana a la sombra ventilada.'},
      storage:{es:'Sobre rotulado en lugar fresco. Viabilidad 3 años.'},
    },
  },

  /* ───────────────────────────────────────────────── BAYAS, ENREDADERAS Y FRUTAS DE CHACRA */

  {
    id:'maracuya', category:'fruta', rarity:'tradicional', emoji:'🟡',
    name:{es:'Maracuyá / Fruta de la pasión', fr:'Fruit de la passion'}, latin:'Passiflora edulis', family:{es:'Pasifloráceas'},
    water:{es:'Regular'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:300, height:{es:'enredadera 4–8 m'},
    sow:{es:'Ago–Oct (almácigo)'}, plant:{es:'Oct–Nov (a tierra firme)'}, harv:{es:'Feb–May'},
    sowM:[0,0,0,0,0,0,0,1,1,1,0,0], plantM:[0,0,0,0,0,0,0,0,0,1,1,0], harvM:[0,1,1,1,1,0,0,0,0,0,0,0],
    growth_days:365,
    stages:[
      { id:'germ',   name:{es:'Germinación lenta'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:25 },
      { id:'plant',  name:{es:'Plántula'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:70 },
      { id:'growth', name:{es:'Enredadera trepando'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:150 },
      { id:'flower', name:{es:'Flor de la pasión'}, icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:30 },
      { id:'fruit',  name:{es:'Frutos colgantes'}, icon:'🟡', color:'#FBE9E7', bg:'rgba(200,160,58,.10)', days:90 },
    ],
    advice:{
      0:{es:['Enredadera vigorosa — necesita una pérgola, malla o cerco firme donde trepar.','Remojar semilla 24 h antes de sembrar para acelerar germinación.']},
      1:{es:['Riego regular en floración y cuajado; sin charcos.','La flor es una pequeña maravilla geométrica con corona de filamentos — atrae abejorros.']},
      2:{es:['Cosechar los frutos cuando caen solos al suelo — están en su punto exacto.','La pulpa amarilla aromática se come a cuchara o se cuela para jugo.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Templado sin heladas fuertes. Coquimbo a Biobío en muro soleado. Más al sur, sólo bajo invernadero.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío'],
    uses:{
      culinary:{es:'Jugo natural, mousse, salsa para postres, cócteles, mermelada.'},
      nutritional:{es:'Vitamina C, A, fibra, antioxidantes y compuestos sedantes suaves.'},
      medicinal:{es:'Infusión de hojas: tradicional como tranquilizante natural.'},
    },
    problems:[
      {es:'Heladas la queman — cubrir base con mulch y proteger.'},
      {es:'Cuajado pobre si faltan polinizadores — favorecer abejorros, evitar pesticidas.'},
      {es:'Mosca de la fruta — trampas con atrayente.'},
    ],
    seeds:{
      when:{es:'De frutos bien arrugados, fin de verano y otoño.'},
      how:{es:'Lavar pulpa, secar semillas, conservar el invierno y sembrar en primavera.'},
      drying:{es:'Sombra ventilada una semana.'},
      storage:{es:'Sobre rotulado. Viabilidad 2–3 años.'},
    },
  },

  {
    id:'physalis', category:'fruta', rarity:'tradicional', emoji:'🟡',
    name:{es:'Physalis / Uchuva / Capulí', fr:'Physalis'}, latin:'Physalis peruviana', family:{es:'Solanáceas'},
    water:{es:'Moderado'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:80, height:{es:'80–120 cm'},
    sow:{es:'Ago–Oct (almácigo)'}, plant:{es:'Oct–Nov'}, harv:{es:'Feb–May'},
    sowM:[0,0,0,0,0,0,0,1,1,1,0,0], plantM:[0,0,0,0,0,0,0,0,0,1,1,0], harvM:[0,1,1,1,1,0,0,0,0,0,0,0],
    growth_days:180,
    stages:[
      { id:'germ',   name:{es:'Germinación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:14 },
      { id:'plant',  name:{es:'Plántula'}, icon:'🌿', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:35 },
      { id:'growth', name:{es:'Mata frondosa'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:50 },
      { id:'flower', name:{es:'Flor amarilla manchada'}, icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:25 },
      { id:'fruit',  name:{es:'Bayas en farolillo'}, icon:'🟡', color:'#FBE9E7', bg:'rgba(200,160,58,.10)', days:56 },
    ],
    advice:{
      0:{es:['Pariente del tomate, originaria de los Andes — rústica y agradecida.','Almácigo en cajón cubierto, trasplante tras la última helada.']},
      1:{es:['Mata extendida — tutorar con cañas o dejar caer sobre paja.','Cada fruto crece envuelto en su propio farolillo de cáliz papeleo.']},
      2:{es:['Cosechar cuando el farolillo está seco y dorado y el fruto cae al menor toque.','Bayas naranja-doradas, agridulces, con perfume tropical.']},
    },
    companions:['albahaca','tagete'],
    avoid:['papa'],
    climate:{es:'Templado cálido. Coquimbo a Biobío al aire libre. En la Araucanía, ciclo corto o invernadero.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía'],
    uses:{
      culinary:{es:'Comer fresca, mermelada, salsas agridulces para carnes, bañada en chocolate.'},
      nutritional:{es:'Vitamina A, C, fósforo, hierro, fibra.'},
      medicinal:{es:'Tradición andina: hojas e infusión para regular azúcar y como diurético.'},
    },
    problems:[
      {es:'Babosas en plántulas — ceniza al pie.'},
      {es:'Frutos verdes contienen alcaloides — comer sólo bien maduros y dorados.'},
      {es:'Una vez en el huerto, se autoresiembra fácilmente al año siguiente.'},
    ],
    seeds:{
      when:{es:'De los frutos más maduros caídos al suelo.'},
      how:{es:'Aplastar, lavar pulpa, secar las semillas pequeñas.'},
      drying:{es:'Una semana al sol suave.'},
      storage:{es:'Sobre rotulado. Viabilidad 5 años.'},
    },
  },

  /* ───────────────────────────────────────────────── RIBES Y BAYAS DE INVIERNO */

  {
    id:'grosella', category:'fruta', rarity:'tradicional', emoji:'🔴',
    name:{es:'Grosella roja', fr:'Groseille rouge'}, latin:'Ribes rubrum', family:{es:'Grosulariáceas'},
    water:{es:'Regular'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:150, height:{es:'1–1,5 m'},
    sow:{es:'May–Ago (plantar arbusto)'}, plant:{es:'May–Ago'}, harv:{es:'Dic–Feb'},
    sowM:[0,0,0,0,1,1,1,1,0,0,0,0], plantM:[0,0,0,0,1,1,1,1,0,0,0,0], harvM:[1,1,0,0,0,0,0,0,0,0,0,1],
    growth_days:730,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:180 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:365 },
      { id:'flower', name:{es:'Florecitas verdes'}, icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:25 },
      { id:'fruit',  name:{es:'Racimos translúcidos'}, icon:'🔴', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:160 },
    ],
    advice:{
      0:{es:['Arbusto pequeño rústico, vive 15–20 años.','Plantar en invierno desnudo, suelo profundo y fresco.']},
      1:{es:['Aporte de compost cada otoño.','Renovar 1/3 de las ramas viejas cada invierno — concentra fruta en madera joven.']},
      2:{es:['Bayas rojas brillantes, traslúcidas y ácidas, en racimos colgantes.','Cosechar el racimo entero con tijera para no estropear los frutos.']},
    },
    companions:['arandano','frambuesa'],
    avoid:[],
    climate:{es:'Clima templado a frío. Excelente en Maule, Ñuble, Biobío, Araucanía y Los Lagos.'},
    zones:['RM','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos','Aysén'],
    uses:{
      culinary:{es:'Mermelada ácida, jaleas, salsa para carnes, kuchen del sur, jugos.'},
      nutritional:{es:'Vitamina C, pectina natural, antioxidantes.'},
      medicinal:{es:'Tradicional tónico digestivo por su acidez.'},
    },
    problems:[
      {es:'Aves muy aficionadas — proteger con malla cuando empiezan a colorear.'},
      {es:'Oídio (polvo blanco en hojas) en años húmedos — ventilar el arbusto con poda.'},
    ],
    seeds:{
      when:{es:'Multiplicación habitual por estaca leñosa en otoño-invierno.'},
      how:{es:'Cortar ramas de 25 cm, plantar 2/3 enterrados en suelo arenoso.'},
      drying:{es:'No aplica para esquejes.'},
      storage:{es:'Esquejes enraízan en una temporada y producen al 2°–3° año.'},
    },
  },

  {
    id:'grosella_negra', category:'fruta', rarity:'tradicional', emoji:'🟣',
    name:{es:'Grosella negra / Cassis', fr:'Cassis'}, latin:'Ribes nigrum', family:{es:'Grosulariáceas'},
    water:{es:'Regular'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:150, height:{es:'1–1,8 m'},
    sow:{es:'May–Ago (plantar arbusto)'}, plant:{es:'May–Ago'}, harv:{es:'Dic–Feb'},
    sowM:[0,0,0,0,1,1,1,1,0,0,0,0], plantM:[0,0,0,0,1,1,1,1,0,0,0,0], harvM:[1,1,0,0,0,0,0,0,0,0,0,1],
    growth_days:730,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:180 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:365 },
      { id:'flower', name:{es:'Flores en racimo'}, icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:25 },
      { id:'fruit',  name:{es:'Bayas negro-violáceas'}, icon:'🟣', color:'#FBE9E7', bg:'rgba(140,90,160,.10)', days:160 },
    ],
    advice:{
      0:{es:['Hojas y yemas con aroma intenso a cassis al frotarlas.','Plantar en invierno desnudo, suelo profundo, fresco y rico.']},
      1:{es:['Aporte anual de compost. Mulch grueso para mantener raíces frescas.','Renovar 1/3 de ramas viejas cada año.']},
      2:{es:['Bayas pequeñas, casi negras, perfumadas y muy aromáticas.','Cosechar el racimo entero cuando la mayoría de bayas están maduras.']},
    },
    companions:['frambuesa','arandano'],
    avoid:[],
    climate:{es:'Clima templado húmedo y frío. Sobresaliente en la Araucanía, Los Ríos y Los Lagos.'},
    zones:['Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos','Aysén'],
    uses:{
      culinary:{es:'Mermelada intensa, licor de cassis, jaleas, salsas para carnes de caza, kuchen.'},
      nutritional:{es:'Vitamina C muy alta (mayor que la naranja), antocianinas, hierro.'},
      medicinal:{es:'Hojas en infusión: tradicional tónico antiinflamatorio y diurético.'},
    },
    problems:[
      {es:'Aves devoran los racimos maduros — malla protectora.'},
      {es:'Oídio en años cálido-húmedos — podar para ventilar.'},
    ],
    seeds:{
      when:{es:'Multiplicación habitual por estaca leñosa en otoño.'},
      how:{es:'Esquejes de 25 cm en suelo arenoso, 2/3 enterrados.'},
      drying:{es:'No aplica.'},
      storage:{es:'Esquejes enraízan en una temporada; producen al 2°–3° año.'},
    },
  },

  {
    id:'zarzaparrilla', category:'fruta', rarity:'patrimonial', emoji:'🔴',
    name:{es:'Zarzaparrilla patagónica', fr:'Groseillier de Patagonie'}, latin:'Ribes magellanicum', family:{es:'Grosulariáceas'},
    water:{es:'Regular'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:200, height:{es:'1,5–2,5 m'},
    sow:{es:'May–Ago (plantar arbusto)'}, plant:{es:'May–Ago'}, harv:{es:'Ene–Mar'},
    sowM:[0,0,0,0,1,1,1,1,0,0,0,0], plantM:[0,0,0,0,1,1,1,1,0,0,0,0], harvM:[1,1,1,0,0,0,0,0,0,0,0,0],
    growth_days:1095,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:240 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:730 },
      { id:'fruit',  name:{es:'Bayas rojas colgantes'}, icon:'🔴', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:125 },
    ],
    advice:{
      0:{es:['Arbusto nativo del sur de Chile y Patagonia. Crece silvestre en bordes de bosque.','Suelo fresco, ligeramente ácido, semisombra de árboles caducos.']},
      1:{es:['Resistente al frío, soporta heladas fuertes.','Crece silvestre — basta plantarlo y dejarlo establecerse.']},
      2:{es:['Bayas rojas pequeñas, agridulces, comestibles en fresco o conserva.','Patrimonio del bosque valdiviano — vale conservar y propagar.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Sur de Chile: Biobío a Magallanes. Adaptada al bosque templado lluvioso.'},
    zones:['Biobío','Araucanía','Los Ríos','Los Lagos','Aysén','Magallanes'],
    uses:{
      culinary:{es:'Mermeladas y jaleas patagónicas, conserva en aguardiente, comer fresca.'},
      nutritional:{es:'Vitamina C, antocianinas, pectina natural.'},
      medicinal:{es:'Tradición mapuche-tehuelche: planta refrescante y tónica.'},
    },
    problems:[
      {es:'Aves comparten con humanos — cosechar regularmente.'},
      {es:'Poco disponible en viveros — propagar por estaca de mata silvestre.'},
    ],
    seeds:{
      when:{es:'Estaca leñosa en otoño, o semilla con estratificación fría.'},
      how:{es:'Esquejes de 20 cm en sustrato arenoso, conservar húmedo.'},
      drying:{es:'No aplica para esquejes.'},
      storage:{es:'Plantines a vivero protegido el primer invierno.'},
    },
  },

  {
    id:'cranberry_chileno', category:'fruta', rarity:'patrimonial', emoji:'🔴',
    name:{es:'Chaura / Cranberry chileno', fr:'Gaulthérie'}, latin:'Gaultheria mucronata', family:{es:'Ericáceas'},
    water:{es:'Regular'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:120, height:{es:'40–100 cm'},
    sow:{es:'May–Ago (plantar arbusto)'}, plant:{es:'May–Ago'}, harv:{es:'Mar–Jun'},
    sowM:[0,0,0,0,1,1,1,1,0,0,0,0], plantM:[0,0,0,0,1,1,1,1,0,0,0,0], harvM:[0,0,1,1,1,1,0,0,0,0,0,0],
    growth_days:1095,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:240 },
      { id:'growth', name:{es:'Establecimiento lento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:730 },
      { id:'fruit',  name:{es:'Bayas rojo intenso o blancas'}, icon:'🔴', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:125 },
    ],
    advice:{
      0:{es:['Arbusto bajo nativo del sur de Chile, conocido en mapudungun como "chaura".','Suelo ácido, drenado, con turba o tierra de hoja. Imita su ambiente del bosque sur.']},
      1:{es:['Resiste heladas fuertes y la nieve — perfecto para Aysén y Magallanes.','Crecimiento lento — paciencia los primeros años.']},
      2:{es:['Bayas redondas brillantes, rojo intenso, rosadas o blancas según la mata.','Sabor ácido y dulce, tipo cranberry — patrimonio austral.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Sur lluvioso y frío: Araucanía a Magallanes. Endémica del bosque andino patagónico.'},
    zones:['Araucanía','Los Ríos','Los Lagos','Aysén','Magallanes'],
    uses:{
      culinary:{es:'Mermelada ácida, salsa para carnes de caza, conservas, jugos.'},
      nutritional:{es:'Antioxidantes, vitamina C, taninos.'},
      medicinal:{es:'Tradicional mapuche-huilliche: hojas refrescantes y bayas tónicas.'},
    },
    problems:[
      {es:'Suelo calcáreo la marchita — exige acidez.'},
      {es:'Poco disponible en viveros — propagar por estaca o por semilla local.'},
    ],
    seeds:{
      when:{es:'Multiplicación por esqueje semi-leñoso en otoño o por semilla estratificada.'},
      how:{es:'Esquejes de 15 cm en sustrato ácido y húmedo bajo cubierta.'},
      drying:{es:'No aplica para esquejes.'},
      storage:{es:'Plantines en macetas hasta el segundo año.'},
    },
  },

  /* ───────────────────────────────────────────────── TUNAS DEL NORTE Y CENTRO */

  {
    id:'tuna', category:'fruta', rarity:'tradicional', emoji:'🟢',
    name:{es:'Tuna verde', fr:'Figue de Barbarie verte'}, latin:'Opuntia ficus-indica', family:{es:'Cactáceas'},
    water:{es:'Muy bajo'}, sun:{es:'Pleno sol'}, sun_hours:9, spacing_cm:300, height:{es:'2–4 m'},
    sow:{es:'Sep–Dic (plantar pala)'}, plant:{es:'Sep–Dic'}, harv:{es:'Feb–Abr'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,1], plantM:[0,0,0,0,0,0,0,0,1,1,1,1], harvM:[0,1,1,1,0,0,0,0,0,0,0,0],
    growth_days:730,
    stages:[
      { id:'plant',  name:{es:'Plantación de pala'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:120 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌵', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:450 },
      { id:'flower', name:{es:'Flores amarillas'}, icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:35 },
      { id:'fruit',  name:{es:'Frutos espinosos verdes'}, icon:'🟢', color:'#FBE9E7', bg:'rgba(59,88,56,.10)', days:125 },
    ],
    advice:{
      0:{es:['Cactus icónico de los valles transversales y secanos del norte chico.','Plantar una pala (raqueta) sana, secarla 5–7 días, enterrar 1/3 en suelo arenoso.']},
      1:{es:['Casi no necesita riego — sobrevive con la humedad de la camanchaca.','Cuidado con las gloquídeas (espinitas finas) — usar guantes y pinzas para cosechar.']},
      2:{es:['Variedad de fruto verde, dulce y refrescante. Cosechar maduro, antes de que los pájaros lo descubran.','Patrimonio del paisaje del norte: Ovalle, Combarbalá, Petorca.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Cálido y seco. Resiste sequía extrema. Norte chico y secano costero central.'},
    zones:['Arica','Tarapacá','Antofagasta','Atacama','Coquimbo','Valparaíso','RM','O\'Higgins'],
    uses:{
      culinary:{es:'Fresca refrigerada, jugo, mermelada, dulce de tuna, vinagre tradicional.'},
      nutritional:{es:'Fibra, vitamina C, mucílagos, antioxidantes.'},
      medicinal:{es:'Tradicional: jugo para acidez, palas asadas como cataplasma.'},
    },
    problems:[
      {es:'Cochinilla del carmín — limpiar con cepillo y aceite.'},
      {es:'Gloquídeas se clavan al manipular — guantes gruesos.'},
      {es:'Heladas muy fuertes la dañan — sólo zonas templadas a cálidas.'},
    ],
    seeds:{
      when:{es:'Multiplicación habitual por pala desprendida y curada.'},
      how:{es:'Dejar secar la pala una semana al sol antes de plantar.'},
      drying:{es:'Imprescindible — sino se pudre al enterrarla.'},
      storage:{es:'Las palas viven secas varias semanas antes de plantar.'},
    },
  },

  {
    id:'tuna_roja', category:'fruta', rarity:'tradicional', emoji:'🔴',
    name:{es:'Tuna roja', fr:'Figue de Barbarie rouge'}, latin:'Opuntia ficus-indica', family:{es:'Cactáceas'},
    water:{es:'Muy bajo'}, sun:{es:'Pleno sol'}, sun_hours:9, spacing_cm:300, height:{es:'2–4 m'},
    sow:{es:'Sep–Dic (plantar pala)'}, plant:{es:'Sep–Dic'}, harv:{es:'Feb–Abr'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,1], plantM:[0,0,0,0,0,0,0,0,1,1,1,1], harvM:[0,1,1,1,0,0,0,0,0,0,0,0],
    growth_days:730,
    stages:[
      { id:'plant',  name:{es:'Plantación de pala'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:120 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌵', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:450 },
      { id:'flower', name:{es:'Flores naranja-rojizas'}, icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:35 },
      { id:'fruit',  name:{es:'Frutos rojo púrpura'}, icon:'🔴', color:'#FBE9E7', bg:'rgba(140,90,160,.10)', days:125 },
    ],
    advice:{
      0:{es:['Variedad de fruto rojo intenso, dulce y muy aromática.','Mismo cultivo que la tuna verde — sólo cambia el color y el matiz de sabor.']},
      1:{es:['Manchará todo lo que toque al cortarla — usar tabla aparte.','Excelente en sorbetes y postres por su color natural.']},
      2:{es:['Cosechar bien maduro, color uniforme rojo púrpura.','Patrimonio del norte chico y zona central seca.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Idéntico a la tuna verde. Norte chico y secano central.'},
    zones:['Arica','Tarapacá','Antofagasta','Atacama','Coquimbo','Valparaíso','RM','O\'Higgins'],
    uses:{
      culinary:{es:'Fresca refrigerada, jugo intenso de color, sorbetes, mermelada, dulce.'},
      nutritional:{es:'Betalaínas (pigmento rojo) con potencia antioxidante, vitamina C, fibra.'},
      medicinal:{es:'Tradicional refrescante en verano.'},
    },
    problems:[
      {es:'Cochinilla del carmín — limpiar con cepillo y aceite.'},
      {es:'Mancha intensa — manipular con cuidado.'},
      {es:'Gloquídeas en piel — guantes obligatorios.'},
    ],
    seeds:{
      when:{es:'Multiplicación por pala curada.'},
      how:{es:'Secar la pala una semana al sol, plantar 1/3 enterrada en suelo arenoso.'},
      drying:{es:'Imprescindible.'},
      storage:{es:'Las palas viven secas varias semanas antes de plantar.'},
    },
  },

  {
    id:'tuna_blanca', category:'fruta', rarity:'tradicional', emoji:'⚪',
    name:{es:'Tuna blanca', fr:'Figue de Barbarie blanche'}, latin:'Opuntia ficus-indica', family:{es:'Cactáceas'},
    water:{es:'Muy bajo'}, sun:{es:'Pleno sol'}, sun_hours:9, spacing_cm:300, height:{es:'2–4 m'},
    sow:{es:'Sep–Dic (plantar pala)'}, plant:{es:'Sep–Dic'}, harv:{es:'Feb–Abr'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,1], plantM:[0,0,0,0,0,0,0,0,1,1,1,1], harvM:[0,1,1,1,0,0,0,0,0,0,0,0],
    growth_days:730,
    stages:[
      { id:'plant',  name:{es:'Plantación de pala'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:120 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌵', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:450 },
      { id:'flower', name:{es:'Flores amarillo-pálido'}, icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:35 },
      { id:'fruit',  name:{es:'Frutos blanco-amarillentos'}, icon:'⚪', color:'#FBE9E7', bg:'rgba(59,88,56,.10)', days:125 },
    ],
    advice:{
      0:{es:['Variedad de pulpa pálida, muy dulce y delicada en sabor.','La más apreciada para consumo fresco en el norte chico.']},
      1:{es:['Mismo cuidado que las otras tunas — sol pleno, suelo arenoso, casi sin riego.','Cosechar joven antes de que los pájaros lleguen — pierden rápido humedad.']},
      2:{es:['Patrimonio del valle del Limarí y Choapa — tradicional fruta de verano caluroso.','Refrescada con limón es bocado clásico de patio rural.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Cálido y seco. Norte chico y zona central seca.'},
    zones:['Arica','Tarapacá','Antofagasta','Atacama','Coquimbo','Valparaíso','RM','O\'Higgins'],
    uses:{
      culinary:{es:'Fresca refrigerada, jugo, sorbete, mermelada blanca delicada.'},
      nutritional:{es:'Fibra, vitamina C, antioxidantes suaves.'},
      medicinal:{es:'Tradicional refrescante de verano.'},
    },
    problems:[
      {es:'Cochinilla del carmín — cepillado y aceite.'},
      {es:'Gloquídeas — guantes al cosechar.'},
      {es:'Pájaros prefieren las maduras — cosechar a tiempo.'},
    ],
    seeds:{
      when:{es:'Multiplicación por pala curada.'},
      how:{es:'Secar la pala 5–7 días al sol antes de plantar.'},
      drying:{es:'Imprescindible.'},
      storage:{es:'Palas secas se conservan semanas antes de plantar.'},
    },
  },

  /* ───────────────────────────────────────────────── BAYAS NATIVAS RARAS */

  {
    id:'maqui_amarillo', category:'fruta', rarity:'raro', emoji:'🟡',
    name:{es:'Maqui amarillo', fr:'Maqui jaune'}, latin:'Aristotelia chilensis (forma amarilla)', family:{es:'Eleocarpáceas'},
    water:{es:'Moderado'}, sun:{es:'Sol o semisombra'}, sun_hours:6, spacing_cm:300, height:{es:'3–5 m'},
    sow:{es:'Jun–Ago (plantar arbusto)'}, plant:{es:'Jun–Ago'}, harv:{es:'Dic–Feb'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[1,1,0,0,0,0,0,0,0,0,0,1],
    growth_days:1095,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:180 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:730 },
      { id:'fruit',  name:{es:'Bayas amarillo-dorado'}, icon:'🟡', color:'#FBE9E7', bg:'rgba(200,160,58,.12)', days:185 },
    ],
    advice:{
      0:{es:['Forma rara del maqui chileno con fruto amarillo en lugar de morado.','Cultivo igual al maqui común — borde de bosque, suelo ácido y fresco.']},
      1:{es:['Resistente y de bajo mantenimiento, primeros frutos al 3°–4° año.','Vale conservar — material genético poco frecuente en el bosque valdiviano.']},
      2:{es:['Bayas pequeñas amarillas, dulces y aromáticas, distintas en boca al maqui clásico.','Patrimonio raro que merece propagación local.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Centro-sur de Chile, mismo rango que el maqui común. Mejor en Araucanía y Los Ríos.'},
    zones:['Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Mermelada delicada, jugos, conservas, fresca de árbol.'},
      nutritional:{es:'Antioxidantes propios del género, perfil aromático distinto al maqui clásico.'},
      medicinal:{es:'Tradicional tónico mapuche, igual al maqui común.'},
    },
    problems:[
      {es:'Aves aman las bayas — proteger o cosechar pronto.'},
      {es:'Material muy escaso — buscar viveros nativos especializados o propagación local.'},
    ],
    seeds:{
      when:{es:'Multiplicación por estaca o plantín, mejor de matas amarillas comprobadas.'},
      how:{es:'Las semillas no garantizan fruto amarillo — preferir esquejes.'},
      drying:{es:'No aplica para esquejes.'},
      storage:{es:'Plantines en vivero protegido el primer año.'},
    },
  },

  /* ───────────────────────────────────────────────── ÁRBOLES NATIVOS DEL BOSQUE ESCLERÓFILO Y VALDIVIANO */

  {
    id:'maiten', category:'arbol', rarity:'patrimonial', emoji:'🌳',
    name:{es:'Maitén', fr:'Maytenus'}, latin:'Maytenus boaria', family:{es:'Celastráceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol o semisombra'}, sun_hours:6, spacing_cm:800, height:{es:'8–15 m'},
    sow:{es:'May–Ago (plantar joven)'}, plant:{es:'May–Ago'}, harv:{es:'Flor: Sep–Nov'},
    sowM:[0,0,0,0,1,1,1,1,0,0,0,0], plantM:[0,0,0,0,1,1,1,1,0,0,0,0], harvM:[0,0,0,0,0,0,0,0,1,1,1,0],
    growth_days:1825,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:365 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1095 },
      { id:'adult',  name:{es:'Árbol adulto'}, icon:'🌳', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:365 },
    ],
    advice:{
      0:{es:['Árbol nativo siempreverde, característico de los esteros y valles del centro de Chile.','Copa redondeada, ramas colgantes que rozan el suelo — imagen clásica del campo chileno.']},
      1:{es:['Suelo profundo y fresco. Tolera sequía adulta, pero crece mejor cerca de cursos de agua.','Sombra muy apreciada por los animales en verano — refugio tradicional del ganado.']},
      2:{es:['Crecimiento lento al inicio; luego vive más de un siglo.','Hojas pequeñas brillantes, todo el año verdes — pone calma en el paisaje.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Centro de Chile: Coquimbo a Biobío. Tolera frío suave y sequía estival cuando está establecido.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía'],
    uses:{
      culinary:{es:'No comestible directamente. Las hojas son forraje suplementario para animales en sequía.'},
      nutritional:{es:'Sin uso humano directo.'},
      medicinal:{es:'Tradicional mapuche y campesina: infusión de hojas para malestares digestivos.'},
    },
    problems:[
      {es:'Raíces extensas — no plantar cerca de muros o cañerías.'},
      {es:'Crecimiento lento — pensar décadas, no estaciones.'},
    ],
    seeds:{
      when:{es:'Semillas de frutitos rojos abiertos en otoño-invierno.'},
      how:{es:'Estratificar 60 días en frío húmedo antes de sembrar.'},
      drying:{es:'Limpiar pulpa, secar a la sombra.'},
      storage:{es:'Sobre rotulado en lugar fresco. Viabilidad 1–2 años.'},
    },
  },

  {
    id:'litre', category:'arbol', rarity:'patrimonial', emoji:'🌳',
    name:{es:'Litre', fr:'Litre'}, latin:'Lithraea caustica', family:{es:'Anacardiáceas'},
    water:{es:'Muy bajo'}, sun:{es:'Pleno sol'}, sun_hours:8, spacing_cm:600, height:{es:'3–8 m'},
    sow:{es:'May–Ago (plantar joven)'}, plant:{es:'May–Ago'}, harv:{es:'Flor: Oct–Dic'},
    sowM:[0,0,0,0,1,1,1,1,0,0,0,0], plantM:[0,0,0,0,1,1,1,1,0,0,0,0], harvM:[0,0,0,0,0,0,0,0,0,1,1,1],
    growth_days:1825,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:365 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1095 },
      { id:'adult',  name:{es:'Árbol adulto resinoso'}, icon:'🌳', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:365 },
    ],
    advice:{
      0:{es:['Pilar del bosque esclerófilo del centro de Chile, junto al peumo y el quillay.','Hojas coriáceas brillantes adaptadas al verano seco — vive sin riego.']},
      1:{es:['No tocar ni dormir bajo su copa: provoca alergia cutánea ("dar el litre") en muchas personas.','Mejor mantenerlo en zonas alejadas del paso o ropa fina.']},
      2:{es:['Pequeñas flores blanco-verdosas en racimos colgantes, muy melíferas — abejas la aman.','Madera dura, tradicional en mangos de herramientas y leña fina.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Centro de Chile: Coquimbo a Biobío. Resistente a sequía y suelos pedregosos.'},
    zones:['Coquimbo','Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío'],
    uses:{
      culinary:{es:'Miel de litre — una de las más apreciadas de Chile.'},
      nutritional:{es:'Sin uso alimentario directo.'},
      medicinal:{es:'Tradicionalmente respetado y evitado por su efecto urticante. No usar como remedio casero.'},
    },
    problems:[
      {es:'Dermatitis severa al contacto con savia o aceites volátiles — sensibilidad individual.'},
      {es:'No plantar cerca de áreas de descanso, juegos o ropa tendida.'},
    ],
    seeds:{
      when:{es:'Frutos pequeños verdes-violáceos en verano-otoño.'},
      how:{es:'Lavar pulpa y estratificar en frío húmedo 90 días.'},
      drying:{es:'A la sombra ventilada.'},
      storage:{es:'Sobre rotulado. Viabilidad 1–2 años.'},
    },
  },

  {
    id:'coigue', category:'arbol', rarity:'patrimonial', emoji:'🌳',
    name:{es:'Coigüe', fr:'Coihue'}, latin:'Nothofagus dombeyi', family:{es:'Notofagáceas'},
    water:{es:'Alto'}, sun:{es:'Sol o semisombra (joven)'}, sun_hours:7, spacing_cm:1000, height:{es:'25–45 m'},
    sow:{es:'May–Ago (plantar joven)'}, plant:{es:'May–Ago'}, harv:{es:'Flor: Oct–Dic'},
    sowM:[0,0,0,0,1,1,1,1,0,0,0,0], plantM:[0,0,0,0,1,1,1,1,0,0,0,0], harvM:[0,0,0,0,0,0,0,0,0,1,1,1],
    growth_days:3650,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:730 },
      { id:'growth', name:{es:'Joven en sotobosque'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:2190 },
      { id:'adult',  name:{es:'Dosel del bosque'}, icon:'🌳', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:730 },
    ],
    advice:{
      0:{es:['Árbol emblema del bosque valdiviano y andino-patagónico.','Dosel siempreverde, hojas pequeñas dentadas — calma visual incluso en pleno invierno.']},
      1:{es:['Necesita humedad ambiente alta y suelo profundo. No prospera en clima seco.','Crecimiento lento al inicio; longevo, supera con facilidad 500 años.']},
      2:{es:['Acompaña al ulmo, tineo y arrayán en bosques mixtos.','Pieza central del paisaje de la Araucanía y Los Lagos — sombra húmeda y aire limpio.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Templado lluvioso. Biobío a Aysén. No prospera en clima seco ni en patios pequeños.'},
    zones:['Biobío','Araucanía','Los Ríos','Los Lagos','Aysén'],
    uses:{
      culinary:{es:'Sin uso alimentario directo.'},
      nutritional:{es:'Sin uso nutricional.'},
      medicinal:{es:'Tradicional mapuche: corteza en infusión para fiebres y dolores reumáticos.'},
    },
    problems:[
      {es:'Tamaño adulto enorme — sólo para grandes terrenos o restauración de bosque.'},
      {es:'Sensible a sequía e incendios — vulnerable en zonas de transición.'},
    ],
    seeds:{
      when:{es:'Pequeños nuececillas con ala, maduran en otoño.'},
      how:{es:'Estratificar en frío húmedo 60 días antes de sembrar.'},
      drying:{es:'Limpiar al viento, secar a la sombra.'},
      storage:{es:'Sobre rotulado en lugar fresco. Viabilidad 1 año.'},
    },
  },

  {
    id:'lenga', category:'arbol', rarity:'patrimonial', emoji:'🍂',
    name:{es:'Lenga', fr:'Hêtre de Patagonie'}, latin:'Nothofagus pumilio', family:{es:'Notofagáceas'},
    water:{es:'Regular'}, sun:{es:'Pleno sol'}, sun_hours:8, spacing_cm:800, height:{es:'15–30 m'},
    sow:{es:'May–Ago (plantar joven)'}, plant:{es:'May–Ago'}, harv:{es:'Flor: Nov–Dic'},
    sowM:[0,0,0,0,1,1,1,1,0,0,0,0], plantM:[0,0,0,0,1,1,1,1,0,0,0,0], harvM:[0,0,0,0,0,0,0,0,0,0,1,1],
    growth_days:3650,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:730 },
      { id:'growth', name:{es:'Joven'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:2190 },
      { id:'adult',  name:{es:'Bosque adulto'}, icon:'🍂', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:730 },
    ],
    advice:{
      0:{es:['Árbol caduco emblemático de los Andes patagónicos.','Hojas pequeñas dentadas que pasan del verde tierno al rojo y dorado en otoño — espectáculo de los bosques de Aysén y Magallanes.']},
      1:{es:['Crece bien en altura, donde otros árboles ya no llegan.','Soporta heladas extremas y vientos fuertes — pieza dura del paisaje austral.']},
      2:{es:['Bosques de lenga forman estaciones marcadas: verano corto verde, otoño encendido, invierno desnudo bajo la nieve.','Madera muy apreciada para muebles tradicionales del sur.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Frío de montaña. Araucanía a Magallanes, en altura y latitud sur.'},
    zones:['Araucanía','Los Ríos','Los Lagos','Aysén','Magallanes'],
    uses:{
      culinary:{es:'Sin uso alimentario directo.'},
      nutritional:{es:'Sin uso nutricional.'},
      medicinal:{es:'Tradicional mapuche-tehuelche: corteza en infusión para resfríos y fiebres.'},
    },
    problems:[
      {es:'Sólo prospera en altura o latitudes frías — no apto para zona central.'},
      {es:'Crecimiento lento — paisaje para varias generaciones.'},
    ],
    seeds:{
      when:{es:'Pequeñas nueces aladas, maduran en otoño.'},
      how:{es:'Estratificar 90 días en frío húmedo.'},
      drying:{es:'A la sombra ventilada.'},
      storage:{es:'Sobre rotulado fresco. Viabilidad 1 año.'},
    },
  },

  {
    id:'tineo', category:'arbol', rarity:'patrimonial', emoji:'🌳',
    name:{es:'Tineo / Tenío', fr:'Tineo'}, latin:'Weinmannia trichosperma', family:{es:'Cunoniáceas'},
    water:{es:'Alto'}, sun:{es:'Sol o semisombra'}, sun_hours:6, spacing_cm:600, height:{es:'15–25 m'},
    sow:{es:'May–Ago (plantar joven)'}, plant:{es:'May–Ago'}, harv:{es:'Flor: Nov–Ene'},
    sowM:[0,0,0,0,1,1,1,1,0,0,0,0], plantM:[0,0,0,0,1,1,1,1,0,0,0,0], harvM:[1,0,0,0,0,0,0,0,0,0,1,1],
    growth_days:2920,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:730 },
      { id:'growth', name:{es:'Joven en sotobosque'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1825 },
      { id:'flower', name:{es:'Floración blanca abundante'}, icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:365 },
    ],
    advice:{
      0:{es:['Árbol del bosque valdiviano, hojas pinnadas finísimas que dan aire de helecho a la copa.','Crece junto al coigüe, ulmo y luma en los bosques de Los Ríos y Los Lagos.']},
      1:{es:['Plantar en suelos profundos, ácidos, con humedad constante.','Soporta semisombra cuando es joven; busca luz al crecer.']},
      2:{es:['Floración blanca en racimos plumosos — atrae abejas y abejorros nativos.','Madera tradicional para mueble fino del sur de Chile.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Templado lluvioso del sur. Biobío a Los Lagos. Sensible a sequía.'},
    zones:['Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Sin uso alimentario directo.'},
      nutritional:{es:'Sin uso nutricional.'},
      medicinal:{es:'Tradicional mapuche: corteza astringente, infusión usada en heridas y diarrea.'},
    },
    problems:[
      {es:'No tolera sequía prolongada — no plantar en zona seca.'},
      {es:'Crecimiento moderado; necesita protección los primeros años.'},
    ],
    seeds:{
      when:{es:'Pequeñas cápsulas con semillas plumosas en verano-otoño.'},
      how:{es:'Sembrar fresco en sustrato ácido, mantener húmedo.'},
      drying:{es:'A la sombra muy ventilada.'},
      storage:{es:'Plantines en maceta hasta el segundo año.'},
    },
  },

  {
    id:'pitao', category:'arbol', rarity:'raro', emoji:'🌳',
    name:{es:'Pitao / Pitavia', fr:'Pitao'}, latin:'Pitavia punctata', family:{es:'Rutáceas'},
    water:{es:'Alto'}, sun:{es:'Semisombra'}, sun_hours:5, spacing_cm:500, height:{es:'8–15 m'},
    sow:{es:'May–Ago (plantar joven)'}, plant:{es:'May–Ago'}, harv:{es:'Flor: Oct–Dic'},
    sowM:[0,0,0,0,1,1,1,1,0,0,0,0], plantM:[0,0,0,0,1,1,1,1,0,0,0,0], harvM:[0,0,0,0,0,0,0,0,0,1,1,1],
    growth_days:2555,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:730 },
      { id:'growth', name:{es:'Joven en sotobosque'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1460 },
      { id:'adult',  name:{es:'Árbol aromático'}, icon:'🌳', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:365 },
    ],
    advice:{
      0:{es:['Árbol endémico de Chile, sólo presente en la Cordillera de la Costa entre el Maule y Biobío.','En peligro de extinción — cada planta cultivada cuenta para conservar la especie.']},
      1:{es:['Hojas con puntos translúcidos y aroma cítrico al frotarlas — recuerdan a las rutáceas (familia del limón).','Vive en quebradas húmedas y umbrosas — recrear ambiente fresco al plantar.']},
      2:{es:['Crecimiento lento; merece paciencia y protección los primeros años.','Pieza viva del bosque costero chileno — vale plantarlo donde se pueda.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Bosque costero húmedo del Maule y Biobío. Sensible a sequía e incendios.'},
    zones:['Maule','Ñuble','Biobío'],
    uses:{
      culinary:{es:'Sin uso alimentario.'},
      nutritional:{es:'Sin uso nutricional.'},
      medicinal:{es:'Conocimiento muy escaso — preferir respetar y conservar antes que usar.'},
    },
    problems:[
      {es:'Especie en peligro — semillas y plantines muy difíciles de obtener.'},
      {es:'No tolera sol directo intenso ni sequía — recrear quebrada umbrosa.'},
    ],
    seeds:{
      when:{es:'Pequeñas cápsulas en verano-otoño, casi nunca disponibles en comercio.'},
      how:{es:'Buscar a través de viveros nativos o proyectos de conservación.'},
      drying:{es:'A la sombra ventilada.'},
      storage:{es:'Sembrar fresco — viabilidad muy corta.'},
    },
  },

  {
    id:'arrayan_rojo', category:'arbol', rarity:'patrimonial', emoji:'🌳',
    name:{es:'Arrayán rojo / Chequén', fr:'Chequén'}, latin:'Luma chequen', family:{es:'Mirtáceas'},
    water:{es:'Regular'}, sun:{es:'Sol o semisombra'}, sun_hours:6, spacing_cm:400, height:{es:'4–10 m'},
    sow:{es:'May–Ago (plantar joven)'}, plant:{es:'May–Ago'}, harv:{es:'Flor: Dic–Feb / Fruto: Mar–May'},
    sowM:[0,0,0,0,1,1,1,1,0,0,0,0], plantM:[0,0,0,0,1,1,1,1,0,0,0,0], harvM:[1,1,1,1,1,0,0,0,0,0,0,1],
    growth_days:2190,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:365 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1460 },
      { id:'fruit',  name:{es:'Bayas oscuras comestibles'}, icon:'🟣', color:'#FBE9E7', bg:'rgba(140,90,160,.10)', days:365 },
    ],
    advice:{
      0:{es:['Pariente del arrayán y de la luma, con corteza rojiza más discreta.','Hojas pequeñas brillantes, muy aromáticas al frotarse.']},
      1:{es:['Crece bien junto a esteros y suelos frescos.','Florece en verano con pequeñas flores blancas, muy melíferas.']},
      2:{es:['Frutos morados pequeños, comestibles, agridulces — uso tradicional rural en mermeladas.','Patrimonio del bosque costero y de las quebradas centrales.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Centro-sur de Chile: Valparaíso a Los Lagos. Más rústico que el arrayán austral.'},
    zones:['Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Mermelada, jugos y conservas tradicionales de bayas chequen.'},
      nutritional:{es:'Antioxidantes y aceites esenciales aromáticos.'},
      medicinal:{es:'Tradicional mapuche y campesina: infusión de hojas digestiva y aromática.'},
    },
    problems:[
      {es:'Crecimiento lento al inicio — paciencia.'},
      {es:'Aves comparten las bayas — cosechar pronto.'},
    ],
    seeds:{
      when:{es:'Bayas maduras en otoño.'},
      how:{es:'Lavar pulpa, sembrar fresco en sustrato ácido.'},
      drying:{es:'Sombra ventilada.'},
      storage:{es:'Plantines en vivero hasta tener 50 cm.'},
    },
  },

  /* ───────────────────────────────────────────────── ARBUSTOS, BAMBÚS Y AROMÁTICAS NATIVAS */

  {
    id:'quila', category:'hortaliza', rarity:'patrimonial', emoji:'🎋',
    name:{es:'Quila', fr:'Quila'}, latin:'Chusquea quila', family:{es:'Poáceas'},
    water:{es:'Alto'}, sun:{es:'Semisombra'}, sun_hours:4, spacing_cm:300, height:{es:'4–8 m (caña trepadora)'},
    sow:{es:'May–Ago (plantar rizoma)'}, plant:{es:'May–Ago'}, harv:{es:'Brotes: Sep–Nov'},
    sowM:[0,0,0,0,1,1,1,1,0,0,0,0], plantM:[0,0,0,0,1,1,1,1,0,0,0,0], harvM:[0,0,0,0,0,0,0,0,1,1,1,0],
    growth_days:1095,
    stages:[
      { id:'plant',  name:{es:'Plantación de rizoma'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:240 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:730 },
      { id:'shoot',  name:{es:'Brotes nuevos'}, icon:'🎋', color:'#E8F5E9', bg:'rgba(59,88,56,.12)', days:125 },
    ],
    advice:{
      0:{es:['Bambú nativo de los bosques templados chilenos — alma verde del sotobosque valdiviano.','Forma matorrales densos en los claros, casi impenetrables.']},
      1:{es:['Crece bien en suelos húmedos y semisombra de bosque.','Necesita espacio: extiende rizomas con el tiempo y puede invadir.']},
      2:{es:['Brotes tiernos (quillinies) comestibles cocidos — tradicional alimento mapuche en primavera.','Cañas largas y flexibles, usadas por siglos para tejidos, cestería y construcción tradicional.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Templado lluvioso. Biobío a Aysén. Crece bajo árboles caducos y siempreverdes.'},
    zones:['Biobío','Araucanía','Los Ríos','Los Lagos','Aysén'],
    uses:{
      culinary:{es:'Brotes hervidos como espárrago silvestre — receta tradicional mapuche del sur.'},
      nutritional:{es:'Fibra, sales minerales, agua.'},
      medicinal:{es:'Cañas y hojas usadas tradicionalmente como diuréticas en infusión.'},
    },
    problems:[
      {es:'Puede volverse invasiva — controlar perímetro con barrera de rizomas.'},
      {es:'Florece masivamente cada 60–70 años y luego muere — fenómeno notable del sur.'},
    ],
    seeds:{
      when:{es:'Multiplicación habitual por división de rizoma en otoño.'},
      how:{es:'Separar trozo de rizoma con dos cañas vivas, plantar de inmediato.'},
      drying:{es:'No aplica.'},
      storage:{es:'No conviene secar el rizoma — replantar fresco.'},
    },
  },

  {
    id:'michay', category:'fruta', rarity:'patrimonial', emoji:'🟣',
    name:{es:'Michay', fr:'Michay'}, latin:'Berberis darwinii', family:{es:'Berberidáceas'},
    water:{es:'Moderado'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:200, height:{es:'1,5–3 m'},
    sow:{es:'May–Ago (plantar arbusto)'}, plant:{es:'May–Ago'}, harv:{es:'Ene–Mar (bayas)'},
    sowM:[0,0,0,0,1,1,1,1,0,0,0,0], plantM:[0,0,0,0,1,1,1,1,0,0,0,0], harvM:[1,1,1,0,0,0,0,0,0,0,0,0],
    growth_days:1095,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:240 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:730 },
      { id:'flower', name:{es:'Flores doradas y bayas azuladas'}, icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:125 },
    ],
    advice:{
      0:{es:['Arbusto nativo espinoso del sur de Chile. Hojas pequeñas, brillantes, coriáceas.','Flores naranja-doradas abundantes en primavera, perfumadas, melíferas.']},
      1:{es:['Forma seto natural, casi impenetrable — pájaros lo usan como refugio.','Adaptado a clima fresco y suelos pobres del bosque sur.']},
      2:{es:['Bayas azul-violáceas con polvillo plateado, comestibles, ácidas.','Cosechar maduras en pleno verano — usar guantes por las espinas.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Bosque y matorral del sur de Chile. Maule a Aysén, también en Patagonia.'},
    zones:['Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos','Aysén','Magallanes'],
    uses:{
      culinary:{es:'Mermelada, conservas, jugos, licor casero. Bayas ácidas tradicionales del campo sureño.'},
      nutritional:{es:'Vitamina C, antocianinas, pectina natural.'},
      medicinal:{es:'Tradicional mapuche: raíz amarilla en infusión como tónico hepático.'},
    },
    problems:[
      {es:'Espinas finas y duras — usar guantes para podar o cosechar.'},
      {es:'En algunos países es invasor — evitar dispersar semillas fuera de su rango natural.'},
    ],
    seeds:{
      when:{es:'Bayas maduras en pleno verano.'},
      how:{es:'Lavar pulpa, estratificar en frío 60 días antes de sembrar.'},
      drying:{es:'A la sombra ventilada.'},
      storage:{es:'Sobre rotulado fresco. Viabilidad 2–3 años.'},
    },
  },

  {
    id:'calafate_patagonico', category:'fruta', rarity:'patrimonial', emoji:'🟣',
    name:{es:'Calafate patagónico', fr:'Calafate de Patagonie'}, latin:'Berberis microphylla', family:{es:'Berberidáceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:7, spacing_cm:200, height:{es:'1–2 m'},
    sow:{es:'May–Ago (plantar arbusto)'}, plant:{es:'May–Ago'}, harv:{es:'Feb–Abr'},
    sowM:[0,0,0,0,1,1,1,1,0,0,0,0], plantM:[0,0,0,0,1,1,1,1,0,0,0,0], harvM:[0,1,1,1,0,0,0,0,0,0,0,0],
    growth_days:1095,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:240 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:730 },
      { id:'fruit',  name:{es:'Bayas violetas oscuras'}, icon:'🟣', color:'#FBE9E7', bg:'rgba(140,90,160,.10)', days:125 },
    ],
    advice:{
      0:{es:['Arbusto bajo, espinoso, característico de la estepa patagónica chilena y argentina.','Hojas pequeñas duras adaptadas al viento y la sequía australes.']},
      1:{es:['Aguanta vientos fuertes, suelos pobres y heladas extremas — paisaje de Aysén y Magallanes.','Florece amarillo en primavera y carga bayas violetas en verano.']},
      2:{es:['"Quien come calafate, vuelve" — dice la tradición patagónica.','Bayas dulces y aromáticas, mejor cosecha en marzo tras los primeros días frescos.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Estepa y precordillera patagónica. Aysén y Magallanes principalmente.'},
    zones:['Araucanía','Los Lagos','Aysén','Magallanes'],
    uses:{
      culinary:{es:'Mermelada, jaleas, licor de calafate, helados artesanales del sur austral.'},
      nutritional:{es:'Antocianinas, vitamina C, pectina.'},
      medicinal:{es:'Tradicional tehuelche y mapuche-huilliche: hojas y bayas como tónico digestivo.'},
    },
    problems:[
      {es:'Espinas en grupos de tres — guantes obligatorios.'},
      {es:'Crece lento los primeros años — paciencia paisajística.'},
    ],
    seeds:{
      when:{es:'Bayas bien maduras al final del verano.'},
      how:{es:'Lavar pulpa, estratificar en frío húmedo 60 días.'},
      drying:{es:'A la sombra ventilada.'},
      storage:{es:'Sobre rotulado fresco. Viabilidad 2 años.'},
    },
  },

  {
    id:'michai_rojo', category:'flor', rarity:'raro', emoji:'🌺',
    name:{es:'Michay rojo / Berberis rojo', fr:'Michay rouge'}, latin:'Berberis ilicifolia', family:{es:'Berberidáceas'},
    water:{es:'Regular'}, sun:{es:'Semisombra'}, sun_hours:4, spacing_cm:200, height:{es:'1–2 m'},
    sow:{es:'May–Ago (plantar arbusto)'}, plant:{es:'May–Ago'}, harv:{es:'Flor: Oct–Dic / Baya: Feb–Abr'},
    sowM:[0,0,0,0,1,1,1,1,0,0,0,0], plantM:[0,0,0,0,1,1,1,1,0,0,0,0], harvM:[0,1,1,1,0,0,0,0,0,1,1,1],
    growth_days:1095,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:240 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:730 },
      { id:'flower', name:{es:'Flores rojizas / bayas oscuras'}, icon:'🌺', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:125 },
    ],
    advice:{
      0:{es:['Variedad de berberis sureña, con hojas duras tipo acebo y flores anaranjado-rojizas.','Endémico del bosque húmedo de la Región de Los Lagos y Aysén.']},
      1:{es:['Crece bien en semisombra de árboles caducos, suelo fresco y orgánico.','Muy ornamental por su contraste entre hojas brillantes y flores intensas.']},
      2:{es:['Bayas comestibles ácidas — tradición tehuelche-huilliche.','Material poco disponible en comercio — vale propagarlo localmente.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Sur de Chile lluvioso. Los Ríos a Magallanes, principalmente en bosques nublados.'},
    zones:['Los Ríos','Los Lagos','Aysén','Magallanes'],
    uses:{
      culinary:{es:'Bayas usadas tradicionalmente en conservas familiares del sur.'},
      nutritional:{es:'Antocianinas, vitamina C.'},
      medicinal:{es:'Tradicional huilliche-tehuelche: raíz amarilla como tónico amargo.'},
    },
    problems:[
      {es:'Espinas duras — guantes para podar.'},
      {es:'Material muy escaso fuera de la región — preferir vivero nativo local.'},
    ],
    seeds:{
      when:{es:'Bayas maduras a fines de verano.'},
      how:{es:'Lavar y estratificar 60 días en frío.'},
      drying:{es:'Sombra ventilada.'},
      storage:{es:'Sobre rotulado. Viabilidad 2 años.'},
    },
  },

  {
    id:'paramela', category:'hierba', rarity:'patrimonial', emoji:'💛',
    name:{es:'Paramela', fr:'Paramela'}, latin:'Adesmia emarginata', family:{es:'Fabáceas'},
    water:{es:'Bajo'}, sun:{es:'Pleno sol'}, sun_hours:8, spacing_cm:150, height:{es:'0,3–1 m'},
    sow:{es:'Sep–Nov (plantar arbusto)'}, plant:{es:'Sep–Nov'}, harv:{es:'Hojas: Nov–Mar'},
    sowM:[0,0,0,0,0,0,0,0,1,1,1,0], plantM:[0,0,0,0,0,0,0,0,1,1,1,0], harvM:[1,1,1,0,0,0,0,0,0,0,1,1],
    growth_days:730,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:180 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:425 },
      { id:'flower', name:{es:'Flores amarillas resinosas'}, icon:'💛', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:125 },
    ],
    advice:{
      0:{es:['Arbusto bajo de la precordillera y estepa patagónica chilena.','Toda la planta exhala una fuerte resina aromática al sol — perfume característico del campo austral.']},
      1:{es:['Requiere pleno sol, suelo pedregoso y muy buen drenaje.','Casi no necesita riego — sobrevive donde otras plantas no.']},
      2:{es:['Flores amarillas pequeñas en racimo, ofrenda de la primavera del sur.','Hojas en infusión: bebida medicinal tradicional de pastores y baqueanos.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Precordillera y estepa de la Patagonia chilena. Aysén y Magallanes.'},
    zones:['Araucanía','Los Lagos','Aysén','Magallanes'],
    uses:{
      culinary:{es:'Infusión aromática tipo "té patagónico".'},
      nutritional:{es:'Aceites esenciales, taninos.'},
      medicinal:{es:'Tradicional patagónica: digestiva, expectorante y aromática en infusión.'},
    },
    problems:[
      {es:'No tolera suelos pesados ni encharcados — exige drenaje.'},
      {es:'Material muy escaso en viveros — preferir propagación local.'},
    ],
    seeds:{
      when:{es:'Pequeñas vainas secas en pleno verano.'},
      how:{es:'Escarificar con lija y remojar 24 h antes de sembrar.'},
      drying:{es:'Sol suave una semana.'},
      storage:{es:'Sobre rotulado fresco. Viabilidad 3 años.'},
    },
  },

  {
    id:'canelo_patagonico', category:'arbol', rarity:'patrimonial', emoji:'🌿',
    name:{es:'Canelo enano / Canelo patagónico', fr:'Canelo de Patagonie'}, latin:'Drimys andina', family:{es:'Winteráceas'},
    water:{es:'Regular'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:200, height:{es:'1–3 m'},
    sow:{es:'May–Ago (plantar arbusto)'}, plant:{es:'May–Ago'}, harv:{es:'Flor: Nov–Ene'},
    sowM:[0,0,0,0,1,1,1,1,0,0,0,0], plantM:[0,0,0,0,1,1,1,1,0,0,0,0], harvM:[1,0,0,0,0,0,0,0,0,0,1,1],
    growth_days:2190,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:365 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1460 },
      { id:'flower', name:{es:'Floración blanca'}, icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:365 },
    ],
    advice:{
      0:{es:['Versión enana del canelo, propia de la cordillera austral y precordillera patagónica.','Hojas coriáceas claras por el envés, muy aromáticas al frotarse.']},
      1:{es:['Crece en bordes de bosque y matorral, tolera frío y nieve.','Crece lento — mata adulta a los 8–10 años, vive décadas.']},
      2:{es:['Pequeñas flores blancas en racimo, perfumadas a fines de primavera.','Mantiene la sacralidad del canelo en cultura mapuche-pehuenche: "foye" — árbol mediador en ceremonias.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Andes del sur y Patagonia chilena. Tolera frío extremo.'},
    zones:['Araucanía','Los Ríos','Los Lagos','Aysén','Magallanes'],
    uses:{
      culinary:{es:'Hojas frescas en pequeña cantidad como condimento aromático, con cuidado.'},
      nutritional:{es:'Aceites esenciales picantes.'},
      medicinal:{es:'Tradicional mapuche-pehuenche: corteza astringente, hojas en infusión digestiva.'},
    },
    problems:[
      {es:'Crecimiento lento — paciencia.'},
      {es:'No tolera sequía prolongada — riego de apoyo en primavera-verano.'},
    ],
    seeds:{
      when:{es:'Pequeñas cápsulas con semillas brillantes a fines de verano.'},
      how:{es:'Sembrar fresco en sustrato ácido y húmedo.'},
      drying:{es:'A la sombra ventilada.'},
      storage:{es:'Plantines en vivero protegido el primer invierno.'},
    },
  },

  {
    id:'corcolen', category:'arbol', rarity:'patrimonial', emoji:'💛',
    name:{es:'Corcolén', fr:'Corcolén'}, latin:'Azara integrifolia', family:{es:'Salicáceas'},
    water:{es:'Moderado'}, sun:{es:'Sol o semisombra'}, sun_hours:6, spacing_cm:300, height:{es:'3–6 m'},
    sow:{es:'May–Ago (plantar joven)'}, plant:{es:'May–Ago'}, harv:{es:'Flor: Ago–Oct'},
    sowM:[0,0,0,0,1,1,1,1,0,0,0,0], plantM:[0,0,0,0,1,1,1,1,0,0,0,0], harvM:[0,0,0,0,0,0,0,1,1,1,0,0],
    growth_days:1460,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:240 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:1095 },
      { id:'flower', name:{es:'Floración dorada perfumada'}, icon:'💛', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:125 },
    ],
    advice:{
      0:{es:['Arbusto o pequeño árbol siempreverde, frecuente en quebradas del centro y sur de Chile.','Hojas brillantes con una pequeña hoja anexa en la base — detalle típico del género.']},
      1:{es:['Florece a fines de invierno y primavera, con racimos amarillos diminutos extraordinariamente perfumados.','Su aroma dulzón a vainilla recuerda a quien conoce el campo chileno en agosto.']},
      2:{es:['Crece bien junto a corrientes de agua, en quebradas y orillas de bosque.','Pieza discreta pero memorable del paisaje chileno — vale plantarla por su olor.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Centro-sur de Chile: Valparaíso a Los Lagos. Tolera humedad y semisombra.'},
    zones:['Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Sin uso alimentario directo. Flores aromáticas para infusiones locales.'},
      nutritional:{es:'Aceites esenciales.'},
      medicinal:{es:'Tradicional rural: corteza en infusión para resfríos y dolores menores.'},
    },
    problems:[
      {es:'Difícil de encontrar en viveros — preferir propagación por estaca.'},
      {es:'Crecimiento moderado — primeros años necesitan protección.'},
    ],
    seeds:{
      when:{es:'Pequeñas bayas oscuras en pleno verano.'},
      how:{es:'Lavar pulpa, sembrar fresco o estratificar 30 días en frío.'},
      drying:{es:'A la sombra ventilada.'},
      storage:{es:'Sobre rotulado fresco. Viabilidad 2 años.'},
    },
  },

  /* ───────────────────────────────────────────────── HIERBAS, BAYAS Y RAREZAS DE BORDE DE BOSQUE */

  {
    id:'vinagrillo', category:'hierba', rarity:'patrimonial', emoji:'🌿',
    name:{es:'Vinagrillo', fr:'Oxalide'}, latin:'Oxalis rosea', family:{es:'Oxalidáceas'},
    water:{es:'Moderado'}, sun:{es:'Sol o semisombra'}, sun_hours:5, spacing_cm:15, height:{es:'15–30 cm'},
    sow:{es:'Mar–May y Ago–Oct (plantar bulbillos)'}, plant:{es:'Mar–May y Ago–Oct'}, harv:{es:'Sep–Dic (hojas y flores)'},
    sowM:[0,0,1,1,1,0,0,1,1,1,0,0], plantM:[0,0,1,1,1,0,0,1,1,1,0,0], harvM:[1,0,0,0,0,0,0,0,1,1,1,1],
    growth_days:90,
    stages:[
      { id:'plant',  name:{es:'Brotación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:20 },
      { id:'growth', name:{es:'Mata de hojas trifoliadas'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:40 },
      { id:'flower', name:{es:'Flores rosadas o blancas'}, icon:'🌸', color:'#FFF3E0', bg:'rgba(200,160,58,.12)', days:30 },
    ],
    advice:{
      0:{es:['Pequeña planta nativa de hojas trifoliadas — recuerda al trébol pero con sabor ácido al masticar.','Florece en pradera y borde de camino, abundante en primavera del centro y sur de Chile.']},
      1:{es:['Plantar bulbillos en otoño o primavera, suelo fresco con compost ligero.','Una vez instalada se autoresiembra — alfombra de hojas tiernas y flores rosadas.']},
      2:{es:['Hojas y flores comestibles en pequeña cantidad — refrescantes en ensalada por su acidez.','Tradicional juego infantil chileno: chupar el tallo ácido por su gusto avinagrado.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Centro y sur de Chile. Crece silvestre en pradera y borde de camino.'},
    zones:['Valparaíso','RM','O\'Higgins','Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Hojas y flores en ensaladas frescas, refrescos rurales, decoración de platos.'},
      nutritional:{es:'Vitamina C, ácido oxálico (consumir con moderación).'},
      medicinal:{es:'Tradicional infusión refrescante en verano. No abusar — el ácido oxálico es irritante.'},
    },
    problems:[
      {es:'Consumo en grandes cantidades irrita el sistema digestivo — sólo en pequeña dosis.'},
      {es:'Se confunde con otras oxalis ornamentales — identificar bien antes de cosechar.'},
    ],
    seeds:{
      when:{es:'Pequeños bulbillos que se forman bajo la mata.'},
      how:{es:'Separar bulbillos en otoño y replantar.'},
      drying:{es:'No aplica.'},
      storage:{es:'Plantar fresco; los bulbillos no se conservan secos.'},
    },
  },

  {
    id:'maqui_blanco', category:'fruta', rarity:'raro', emoji:'⚪',
    name:{es:'Maqui blanco', fr:'Maqui blanc'}, latin:'Aristotelia chilensis (forma blanca)', family:{es:'Eleocarpáceas'},
    water:{es:'Moderado'}, sun:{es:'Sol o semisombra'}, sun_hours:6, spacing_cm:300, height:{es:'3–5 m'},
    sow:{es:'Jun–Ago (plantar arbusto)'}, plant:{es:'Jun–Ago'}, harv:{es:'Dic–Feb'},
    sowM:[0,0,0,0,0,1,1,1,0,0,0,0], plantM:[0,0,0,0,0,1,1,1,0,0,0,0], harvM:[1,1,0,0,0,0,0,0,0,0,0,1],
    growth_days:1095,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:180 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌳', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:730 },
      { id:'fruit',  name:{es:'Bayas blanco-translúcidas'}, icon:'⚪', color:'#FBE9E7', bg:'rgba(59,88,56,.10)', days:185 },
    ],
    advice:{
      0:{es:['Forma muy rara del maqui chileno, con frutos blancos en lugar de violetas.','Misma planta, misma rusticidad, sólo cambia el color y matiz aromático del fruto.']},
      1:{es:['Cultivar como el maqui común — borde de bosque, suelo ácido y fresco.','Material genético muy escaso — vale conservar y propagar localmente.']},
      2:{es:['Bayas blanco-translúcidas, dulces y delicadas, distintas en boca al maqui clásico.','Patrimonio raro del bosque valdiviano — buscar a través de viveros nativos.']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Centro-sur de Chile, mismo rango que el maqui común. Mejor en Araucanía y Los Ríos.'},
    zones:['Maule','Ñuble','Biobío','Araucanía','Los Ríos','Los Lagos'],
    uses:{
      culinary:{es:'Mermelada blanca delicada, jugos, conservas, fresca de árbol.'},
      nutritional:{es:'Antioxidantes propios del género, perfil aromático distinto.'},
      medicinal:{es:'Tradicional tónico mapuche, igual al maqui común.'},
    },
    problems:[
      {es:'Material extremadamente escaso — preferir esqueje de ejemplar comprobado.'},
      {es:'Aves aman cualquier fruto — proteger o cosechar pronto.'},
    ],
    seeds:{
      when:{es:'Multiplicación por esqueje de mata blanca comprobada.'},
      how:{es:'Semillas no garantizan color blanco — preferir reproducción vegetativa.'},
      drying:{es:'No aplica para esquejes.'},
      storage:{es:'Plantines en vivero protegido el primer año.'},
    },
  },

  {
    id:'chilco_rojo', category:'flor', rarity:'patrimonial', emoji:'🌺',
    name:{es:'Chilco rojo', fr:'Fuchsia rouge'}, latin:'Fuchsia magellanica var. macrostema', family:{es:'Onagráceas'},
    water:{es:'Alto'}, sun:{es:'Semisombra'}, sun_hours:4, spacing_cm:150, height:{es:'1–3 m'},
    sow:{es:'May–Ago (plantar arbusto)'}, plant:{es:'May–Ago'}, harv:{es:'Flor: Nov–Abr'},
    sowM:[0,0,0,0,1,1,1,1,0,0,0,0], plantM:[0,0,0,0,1,1,1,1,0,0,0,0], harvM:[1,1,1,1,0,0,0,0,0,0,1,1],
    growth_days:730,
    stages:[
      { id:'plant',  name:{es:'Plantación'}, icon:'🌱', color:'#FFF8E6', bg:'rgba(200,160,58,.15)', days:180 },
      { id:'growth', name:{es:'Establecimiento'}, icon:'🌿', color:'#DCEDD3', bg:'rgba(59,88,56,.10)', days:425 },
      { id:'flower', name:{es:'Floración roja prolongada'}, icon:'🌺', color:'#FBE9E7', bg:'rgba(181,90,40,.12)', days:125 },
    ],
    advice:{
      0:{es:['Variedad nativa del chilco común, con flores intensamente rojas y largas.','Forma matorrales en orillas de esteros y bosques húmedos del sur de Chile.']},
      1:{es:['Pedir suelo fresco, ácido y mucha humedad ambiente.','Polinizado por picaflores — su pico encaja exactamente en la flor pendiente.']},
      2:{es:['Florece de noviembre a abril, con tubos rojos suspendidos como pequeños faroles.','Las pequeñas bayas oscuras son comestibles, dulces, conocidas como "chauquitos".']},
    },
    companions:[],
    avoid:[],
    climate:{es:'Sur lluvioso de Chile: Biobío a Magallanes. Necesita humedad ambiente y suelo fresco.'},
    zones:['Biobío','Araucanía','Los Ríos','Los Lagos','Aysén','Magallanes'],
    uses:{
      culinary:{es:'Frutos pequeños comestibles, dulces, tradición campesina del sur.'},
      nutritional:{es:'Pequeño aporte de antocianinas y azúcares simples.'},
      medicinal:{es:'Tradicional mapuche-huilliche: hojas e infusión como febrífugo suave.'},
    },
    problems:[
      {es:'No tolera sequía prolongada ni viento seco — buscar lugar fresco protegido.'},
      {es:'Heladas fuertes la hacen perder hojas, pero rebrota desde la base en primavera.'},
    ],
    seeds:{
      when:{es:'Multiplicación habitual por esqueje semi-leñoso en otoño.'},
      how:{es:'Esquejes de 15 cm en sustrato ácido húmedo bajo cubierta.'},
      drying:{es:'No aplica para esquejes.'},
      storage:{es:'Plantines en vivero protegido el primer invierno.'},
    },
  },

];

/* ════════════════════════════════════════════════════════════════
   CATEGORÍAS — usadas para filtros y agrupación
   ════════════════════════════════════════════════════════════════ */

window.SEMENCA_CATEGORIES = {
  hortaliza: { es:'Hortalizas',   fr:'Légumes',     emoji:'🥬' },
  hierba:    { es:'Hierbas',      fr:'Herbes',       emoji:'🌿' },
  fruta:     { es:'Frutas',       fr:'Fruits',       emoji:'🍓' },
  flor:      { es:'Flores',       fr:'Fleurs',       emoji:'🌼' },
  arbol:     { es:'Árboles',      fr:'Arbres',       emoji:'🌳' },
};

/* ════════════════════════════════════════════════════════════════
   TIPOS DE NOTAS — usadas en el diario del jardín
   ════════════════════════════════════════════════════════════════ */

window.SEMENCA_NOTE_TYPES = {
  obs:  { es:'Observación', fr:'Observation', color:'#78A07C' },
  sow:  { es:'Siembra',     fr:'Semis',        color:'#C8A03A' },
  harv: { es:'Cosecha',     fr:'Récolte',      color:'#B55A28' },
  prob: { es:'Problema',    fr:'Problème',     color:'#B55A28' },
  tip:  { es:'Consejo',     fr:'Conseil',      color:'#3B5838' },
  photo:{ es:'Foto',        fr:'Photo',        color:'#4D7050' },
};

/* ════════════════════════════════════════════════════════════════
   PLANTAS EXTERNAS — referenciadas como compañeras/incompatibles
   pero aún sin ficha completa. Se muestran con nombre+emoji
   (no son clicables). Útil para preservar el saber tradicional.
   ════════════════════════════════════════════════════════════════ */

window.SEMENCA_EXTERNAL_PLANTS = {
  hinojo:    { emoji:'🌾', name:{es:'Hinojo',        fr:'Fenouil'} },
  ruda:      { emoji:'🌿', name:{es:'Ruda',          fr:'Rue'} },
  rosa:      { emoji:'🌹', name:{es:'Rosa',          fr:'Rose'} },
  poroto:    { emoji:'🫘', name:{es:'Poroto',        fr:'Haricot'} },
  eneldo:    { emoji:'🌿', name:{es:'Eneldo',        fr:'Aneth'} },
  maiz:      { emoji:'🌽', name:{es:'Maíz',          fr:'Maïs'} },
  tagete:    { emoji:'🌼', name:{es:'Tagete',        fr:"Œillet d'Inde"} },
  borraja:   { emoji:'💙', name:{es:'Borraja',       fr:'Bourrache'} },
};

/* ════════════════════════════════════════════════════════════════
   ZONAS DE CHILE — para selección y compatibilidad
   ════════════════════════════════════════════════════════════════ */

window.SEMENCA_ZONES = [
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
