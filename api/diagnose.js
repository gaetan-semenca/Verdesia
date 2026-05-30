/* Verdésia — /api/diagnose
   Vercel serverless function. Accepts a JPEG/PNG image (base64 data URL
   or raw base64) and returns a structured plant diagnosis as JSON.

   ⚠ MIRRORED FROM Brote/api/diagnose.js — keep both copies in sync.
   This copy lives at the Verdésia deploy root (Semance V22/) so Vercel
   detects it as `/api/diagnose`. The Brote/ sibling keeps its own copy
   for independent standalone deploys. */

const SYSTEM_PROMPT = `Eres un jardinero experimentado y observador. Analizas una
fotografía de un huerto, parcela, macetero o balcón, y entregas una LECTURA
TRANQUILA del estado general — no un escáner médico. Tu rol es ayudar al
jardinero a observar mejor su propio espacio, no diagnosticar con autoridad.

Tono:
- Calmo, prudente, humano.
- Probabilístico, nunca afirmativo en exceso.
- Si la visibilidad es pobre, dilo abiertamente.
- "Posibles signos de…" en lugar de diagnóstico definitivo.
- Sin marketing, sin emojis, sin jerga técnica, sin lenguaje AI.

Lo que puedes intentar observar (sólo si visible o probable):
- exceso o falta de riego
- exceso de sol directo, o luz insuficiente
- densidad excesiva entre plantas
- ventilación pobre
- signos de deficiencia nutricional
- signos de estrés general
- riesgos fúngicos probables
- etapas de madurez de cada planta
- crecimiento desigual
- poda débil o necesaria
- limitaciones de maceta o contenedor
- mal espaciamiento
- riesgo de espigado (bolting)
- momento de cosecha
- posible presión de plagas
- humedad excesiva

Tipo de escena:
- "garden"      — vista de huerto o parcela
- "raised_bed"  — bancal elevado
- "containers"  — macetas, jardineras
- "mixed"       — combinación de los anteriores
- "unclear"     — la foto no permite una lectura fiable

Estructura de respuesta — JSON EXCLUSIVAMENTE, sin texto fuera, sin bloques de código:
{
  "scene_type": "garden" | "raised_bed" | "containers" | "mixed" | "unclear",

  "global_reading": {
    "summary": string,
    "overall_health": "excellent" | "good" | "mixed" | "stressed" | "poor",
    "main_strengths": string[],
    "main_concerns": string[],
    "priority_actions": string[],
    "environment_observations": {
      "light": string,
      "water": string,
      "density": string,
      "soil_visibility": string,
      "growth_balance": string
    }
  },

  "detected_plants": [
    {
      "name": string,
      "confidence": "low" | "medium" | "high",
      "position": "left" | "center" | "right" | "foreground" | "background",
      "growth_stage": {
        "stage": string,
        "description": string,
        "next_expected_stage": string
      },
      "health": {
        "status": string,
        "stress_level": "low" | "medium" | "high",
        "possible_problems": string[]
      },
      "water_analysis": string,
      "light_analysis": string,
      "spacing_analysis": string,
      "disease_risks": string[],
      "recommended_actions": string[],
      "what_to_monitor": string[]
    }
  ],

  "garden_map_suggestions": [
    {
      "plant_name": string,
      "plant_id_suggestion": string,
      "approximate_position": {
        "zone": "top_left" | "top_center" | "top_right" |
                "middle_left" | "center" | "middle_right" |
                "bottom_left" | "bottom_center" | "bottom_right",
        "x_hint": number,
        "y_hint": number
      },
      "growth_stage": {
        "stage": string,
        "confidence": "low" | "medium" | "high"
      },
      "density": "clustered" | "isolated" | "dense",
      "confidence": "low" | "medium" | "high"
    }
  ],

  "garden_improvements": string[],
  "next_week_focus": string[],
  "gentle_note": string
}

Reglas:
- detected_plants puede ser una lista corta si pocas plantas son distinguibles.
- Si la imagen es poco clara: scene_type="unclear", global_reading.summary explica por qué,
  detected_plants puede quedar vacío.
- Cada string debe ser breve y útil — entre 1 frase y 2 frases máximo por valor.
- main_strengths y main_concerns: máximo 3 elementos cada uno.
- priority_actions, garden_improvements, next_week_focus: máximo 5 elementos.
- recommended_actions por planta: máximo 3 elementos.
- No recomiendes pesticidas químicos específicos.
- Prefiere: observación, ajuste de riego, sombra parcial, poda suave, mejor espaciamiento,
  revisión del sustrato, mejor aireación.

Reglas garden_map_suggestions — RECONSTRUCCIÓN APROXIMADA DEL HUERTO:
- Es una propuesta de distribución espacial aproximada para que el usuario
  reconstruya su mapa de jardín. NO ES PRECISIÓN GIS.
- Sólo incluir plantas que reconoces con confianza razonable.
- Si una planta aparece en detected_plants pero no la identificas con seguridad,
  NO la incluyas en garden_map_suggestions.
- Mismo plant_name que en detected_plants, en singular minúscula español
  (ej: "tomate", "lechuga", "albahaca", "cilantro"). plant_id_suggestion: usa
  el mismo string normalizado en snake_case sin tildes.
- zone: las 9 zonas son tu unidad principal. x_hint/y_hint son indicativos
  (0=izquierda/arriba, 1=derecha/abajo) — útiles si zone no captura un detalle.
- Máximo 16 suggestions para un huerto compacto, 30 para uno amplio.
- Si la misma planta aparece varias veces (ej: 3 tomates en hilera), genera
  3 entradas diferentes con zonas distintas.
- density: "clustered" si plantas amontonadas, "dense" si saturé l'espace,
  "isolated" si separée — ne pas inventer, omettre si pas clair.
- Si scene_type="unclear" o detected_plants está vacío,
  garden_map_suggestions también debe quedar vacío.
- Prudencia siempre. Mejor pocas sugerencias seguras que muchas inciertas.`;

const MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';

module.exports = async (req, res) => {
  // CORS — permits the integrated Verdésia deploy (or any other origin) to call
  // this endpoint. The body is unprivileged user image data; no auth, no cookies.
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.statusCode = 204; return res.end(); }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: 'OPENAI_API_KEY no configurada en el servidor.' });
  }

  try {
    const body = await readJson(req);
    const raw = body && body.image;
    if (!raw || typeof raw !== 'string') {
      return res.status(400).json({ error: 'Falta el campo "image" (base64 o data URL).' });
    }

    const imageUrl = normalizeImage(raw);
    if (!imageUrl) {
      return res.status(400).json({ error: 'Imagen inválida.' });
    }

    const payload = {
      model: MODEL,
      response_format: { type: 'json_object' },
      temperature: 0.2,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        {
          role: 'user',
          content: [
            { type: 'text', text: 'Observa este huerto con calma y entrega la lectura en el JSON pedido. No identifiques sin necesidad — describe lo que ves.' },
            { type: 'image_url', image_url: { url: imageUrl, detail: 'low' } },
          ],
        },
      ],
    };

    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    if (!openaiRes.ok) {
      const errText = await openaiRes.text().catch(() => '');
      console.error('OpenAI error:', openaiRes.status, errText);
      return res.status(502).json({ error: 'El servicio de análisis no respondió correctamente.' });
    }

    const completion = await openaiRes.json();
    const content = completion?.choices?.[0]?.message?.content;
    if (!content) {
      return res.status(502).json({ error: 'Respuesta vacía del modelo.' });
    }

    let parsed;
    try {
      parsed = JSON.parse(content);
    } catch {
      console.error('Failed to parse model JSON:', content);
      return res.status(502).json({ error: 'El modelo no devolvió JSON válido.' });
    }

    return res.status(200).json(sanitize(parsed));
  } catch (err) {
    console.error('diagnose handler error:', err);
    return res.status(500).json({ error: 'Error inesperado en el servidor.' });
  }
};

/* ───── helpers ───── */

const readJson = (req) => new Promise((resolve, reject) => {
  if (req.body && typeof req.body === 'object') return resolve(req.body);
  let data = '';
  req.setEncoding('utf8');
  req.on('data', (chunk) => { data += chunk; });
  req.on('end', () => {
    if (!data) return resolve({});
    try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
  });
  req.on('error', reject);
});

const normalizeImage = (raw) => {
  const trimmed = raw.trim();
  if (trimmed.startsWith('data:image/')) return trimmed;
  if (/^[A-Za-z0-9+/=\s]+$/.test(trimmed)) {
    return `data:image/jpeg;base64,${trimmed.replace(/\s+/g, '')}`;
  }
  return null;
};

/* ───── Sanitisation ─────
   Garantit la forme attendue côté client. Tolère 3 générations de schéma :
   • v3 (actuel) — {scene_type, global_reading, detected_plants, …}
   • v2 (mid)    — {scene_type, garden_overview, plants, …} → wrappé
   • v1 (orig.)  — {plant_probable, …}                      → wrappé
*/

const str = (v) => (typeof v === 'string' ? v.trim() : '');
const arr = (v) => (Array.isArray(v) ? v.filter((s) => typeof s === 'string' && s.trim()).map((s) => s.trim()) : []);
const oneOf = (v, allowed, fb) => (allowed.includes(v) ? v : fb);
const obj  = (v) => (v && typeof v === 'object' && !Array.isArray(v)) ? v : {};

/* Each garden_map_suggestion — proposition de reconstruction approximative.
   Le client (garden_reconstruction.js) tolère ce champ absent et retombe
   sur detected_plants pour synthétiser. Ici on valide/normalize la forme. */
const ZONES_9 = [
  'top_left','top_center','top_right',
  'middle_left','center','middle_right',
  'bottom_left','bottom_center','bottom_right',
];
const num01 = (v) => {
  const n = typeof v === 'number' ? v : parseFloat(v);
  if (!isFinite(n)) return 0.5;
  return Math.max(0, Math.min(1, n));
};
const sanitizeMapSuggestion = (s) => {
  if (!s || typeof s !== 'object') return null;
  const pos = obj(s.approximate_position);
  const gs  = obj(s.growth_stage);
  const name = str(s.plant_name);
  if (!name) return null;
  return {
    plant_name:          name,
    plant_id_suggestion: str(s.plant_id_suggestion),
    approximate_position: {
      zone:   oneOf(pos.zone, ZONES_9, 'center'),
      x_hint: num01(pos.x_hint),
      y_hint: num01(pos.y_hint),
    },
    growth_stage: {
      stage:      str(gs.stage),
      confidence: oneOf(gs.confidence, ['low','medium','high'], 'low'),
    },
    density:    oneOf(s.density, ['clustered','isolated','dense'], 'isolated'),
    confidence: oneOf(s.confidence, ['low','medium','high'], 'low'),
  };
};

/* Each detected plant in the new schema. */
const sanitizeDetectedPlant = (p) => {
  if (!p || typeof p !== 'object') return null;
  const gs = obj(p.growth_stage);
  const h  = obj(p.health);
  return {
    name:               str(p.name),
    confidence:         oneOf(p.confidence, ['low','medium','high'], 'low'),
    position:           oneOf(p.position, ['left','center','right','foreground','background'], 'foreground'),
    growth_stage: {
      stage:               str(gs.stage),
      description:         str(gs.description),
      next_expected_stage: str(gs.next_expected_stage),
    },
    health: {
      status:              str(h.status),
      stress_level:        oneOf(h.stress_level, ['low','medium','high'], 'low'),
      possible_problems:   arr(h.possible_problems),
    },
    water_analysis:      str(p.water_analysis),
    light_analysis:      str(p.light_analysis),
    spacing_analysis:    str(p.spacing_analysis),
    disease_risks:       arr(p.disease_risks),
    recommended_actions: arr(p.recommended_actions),
    what_to_monitor:     arr(p.what_to_monitor),
  };
};

/* v2 mid-era plant → new detected_plant shape */
const adaptV2Plant = (p) => {
  if (!p || typeof p !== 'object') return null;
  const m = obj(p.maturity_stage);
  return sanitizeDetectedPlant({
    name:        p.plant_probable,
    confidence:  p.confidence,
    position:    p.visible_position && p.visible_position !== 'unclear' ? p.visible_position : 'foreground',
    growth_stage: {
      stage:               m.label,
      description:         m.description,
      next_expected_stage: m.next_stage,
    },
    health: {
      status:            p.health_status,
      stress_level:      'low',
      possible_problems: p.possible_issues,
    },
    water_analysis:      p.water_diagnosis,
    light_analysis:      p.light_diagnosis,
    spacing_analysis:    p.soil_or_pot_observations,
    disease_risks:       [],
    recommended_actions: p.what_to_do_now,
    what_to_monitor:     p.what_to_watch_next,
  });
};

/* v1 single-plant → new envelope with one detected_plant */
const adaptV1 = (raw) => ({
  scene_type: 'unclear',
  global_reading: {
    summary: '', overall_health: 'mixed',
    main_strengths: [], main_concerns: [], priority_actions: [],
    environment_observations: { light:'', water:'', density:'', soil_visibility:'', growth_balance:'' },
  },
  detected_plants: raw.plant_probable ? [sanitizeDetectedPlant({
    name:        raw.plant_probable,
    confidence:  raw.confidence,
    position:    'foreground',
    growth_stage: { stage:'', description:'', next_expected_stage:'' },
    health: {
      status:            raw.health_status,
      stress_level:      'low',
      possible_problems: raw.possible_issues,
    },
    water_analysis:      raw.water_diagnosis,
    light_analysis:      raw.light_diagnosis,
    spacing_analysis:    '',
    disease_risks:       [],
    recommended_actions: raw.what_to_do_now,
    what_to_monitor:     [],
  })] : [],
  garden_map_suggestions: [],
  garden_improvements: [],
  next_week_focus: [],
  gentle_note: str(raw.gentle_warning),
});

const sanitize = (raw) => {
  if (!raw || typeof raw !== 'object') return adaptV1({}); // empty but valid envelope

  // v1 detection: single plant_probable at top level
  if ('plant_probable' in raw && !Array.isArray(raw.plants) && !Array.isArray(raw.detected_plants)) {
    return adaptV1(raw);
  }

  // v2 detection: has plants[] but not detected_plants[]
  if (Array.isArray(raw.plants) && !Array.isArray(raw.detected_plants)) {
    const go = obj(raw.garden_overview);
    return {
      scene_type: oneOf(raw.scene_type, ['garden','raised_bed','containers','mixed','unclear'], 'mixed'),
      global_reading: {
        summary:           str(go.summary),
        overall_health:    oneOf(go.general_health, ['excellent','good','mixed','stressed','poor'], 'mixed'),
        main_strengths:    [],
        main_concerns:     arr(go.main_observations),
        priority_actions:  arr(go.priority_actions),
        environment_observations: { light:'', water:'', density:'', soil_visibility:'', growth_balance:'' },
      },
      detected_plants:    raw.plants.map(adaptV2Plant).filter(Boolean),
      garden_map_suggestions: [],  // v2 ne connaissait pas — toujours vide
      garden_improvements: arr(raw.global_advice),
      next_week_focus:    [],
      gentle_note:        str(raw.gentle_warning),
    };
  }

  // v3 native — sanitize each section
  const gr  = obj(raw.global_reading);
  const eo  = obj(gr.environment_observations);
  const plants = Array.isArray(raw.detected_plants) ? raw.detected_plants : [];
  // garden_map_suggestions — optionnel, le client a un fallback dérivé
  // de detected_plants. Si présent, on valide chaque entrée. Si absent
  // ou malformé, on retourne un array vide (le client gérera).
  const mapSuggestionsRaw = Array.isArray(raw.garden_map_suggestions)
    ? raw.garden_map_suggestions : [];
  return {
    scene_type: oneOf(raw.scene_type, ['garden','raised_bed','containers','mixed','unclear'],
                      plants.length ? 'mixed' : 'unclear'),
    global_reading: {
      summary:           str(gr.summary),
      overall_health:    oneOf(gr.overall_health, ['excellent','good','mixed','stressed','poor'], 'mixed'),
      main_strengths:    arr(gr.main_strengths),
      main_concerns:     arr(gr.main_concerns),
      priority_actions:  arr(gr.priority_actions),
      environment_observations: {
        light:           str(eo.light),
        water:           str(eo.water),
        density:         str(eo.density),
        soil_visibility: str(eo.soil_visibility),
        growth_balance:  str(eo.growth_balance),
      },
    },
    detected_plants:        plants.map(sanitizeDetectedPlant).filter(Boolean),
    garden_map_suggestions: mapSuggestionsRaw.map(sanitizeMapSuggestion).filter(Boolean),
    garden_improvements:    arr(raw.garden_improvements),
    next_week_focus:        arr(raw.next_week_focus),
    gentle_note:            str(raw.gentle_note),
  };
};
