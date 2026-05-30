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
- Prudencia siempre. Mejor pocas sugerencias seguras que muchas inciertas.

FAST MODE (when the user message mentions MODO RÁPIDO):
- Return compact but complete JSON.
- Never write long prose. Short sentences only.
- detected_plants: max 4 (PREFER REPRESENTATIVE BIODIVERSITY).
- garden_map_suggestions: max 4 (same biodiversity rule).
- Every OTHER array (main_strengths, main_concerns, priority_actions,
  garden_improvements, next_week_focus, recommended_actions): max 2 items.
- Each text field max 120 characters.

BIODIVERSITY RULE FOR FAST MODE:
- Prefer representative biodiversity over exhaustive detection.
- Avoid returning multiple visually similar plants. If several plants
  look similar, group them under ONE representative entry and use the
  remaining slots for distinct families, forms, colors, garden roles.
- BAD: lettuce, red lettuce, green lettuce, small lettuce.
- GOOD: lettuce, cabbage, herb, flower.

- Do not include extra commentary outside the JSON.
- ALWAYS finish the JSON completely — close every brace and bracket.
- If you must shorten content, drop optional fields (set to "" or [])
  rather than leaving the JSON unclosed.

DEEP MODE (when the user message mentions MODO PROFUNDO):
This is an extended ecosystem reading. The user has explicitly asked
for a deeper botanical reading of the same garden image.

- detected_plants: up to 8 (NEVER more, even if you see more plants).
- garden_map_suggestions: up to 8 (same rule).
- Prefer REPRESENTATIVE BIODIVERSITY over exhaustive identification.
  Do not return many visually similar plants. If several plants look
  similar, GROUP THEM under ONE representative entry and mention
  "varias plantas similares cercanas" in its description.
  BAD: lettuce, red lettuce, green lettuce, small lettuce, butter lettuce.
  GOOD: lettuce (varias variedades cercanas), cabbage, kale, beet,
        herbs, flower, root vegetable.
- Prioritize DISTINCT plant families, forms, colors, and garden roles.
- main_strengths, main_concerns, priority_actions, garden_improvements,
  next_week_focus: up to 3 items each.
- recommended_actions per plant: up to 3.
- Each text field can be up to 200 characters (concise prose, no walls).

ADDITIONALLY, in DEEP MODE include the following EXTRA top-level fields:

  "garden_structure": {
    "row_organization": string,        // ¿se ve en hileras, bloques, mezclado?
    "companion_planting": string[],    // observed associations (max 4)
    "density_patterns": string,        // overcrowded? spaced? mixed?
    "visual_balance": string,          // calm reading of composition
    "biodiversity_score": "low" | "medium" | "high",
    "vertical_layering": string,       // ground, mid, vertical?
    "soil_exposure": string            // covered, exposed, mulched?
  },
  "ecosystem_reading": {
    "pollinator_friendliness": string,
    "diversity_observation": string,
    "monoculture_risk": string,
    "overcrowding": string,
    "moisture_balance": string,
    "airflow": string
  },
  "seasonal_observations": {
    "maturity_distribution": string,   // mixed stages? mostly mature?
    "succession_planting": string,     // signs of staggered sowing?
    "seasonal_balance": string         // single season or layered?
  }

In DEEP MODE:
- Always include these three extra objects (use "" or [] for unknown values,
  never omit the keys).
- Tone stays calm, botanical, prudent — no marketing, no medical jargon.
- Still close the JSON completely.`;

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

    /* Trois modes de lecture :
       - "deep" (explicit) : Lectura botánica completa — riche, biodiversité,
                             ajoute garden_structure + ecosystem_reading +
                             seasonal_observations. Tokens 3000, ~15-25s.
       - "fast" (défaut)   : lecture rapide, 2 plantes, 1100 tokens, ~3-8s.
       - body.fast === false (compat outil interne) : lecture longue mais
                                                      schéma v3 standard. */
    const deepMode = body && body.mode === 'deep';
    const fastMode = !deepMode && (body && body.fast !== false); // default true

    const userText = deepMode
      ? 'Observa este huerto con calma y entrega una LECTURA BOTÁNICA COMPLETA en el JSON pedido. '
        + 'MODO PROFUNDO: máximo 8 plantas en detected_plants, máximo 8 garden_map_suggestions. '
        + 'PRIORIZA LA BIODIVERSIDAD REPRESENTATIVA: si ves varias plantas similares (ej: 5 lechugas), '
        + 'AGRUPA bajo UNA entrada representativa con la nota "varias plantas similares cercanas" y dedica '
        + 'las demás entradas a la diversidad real (col, kale, betarraga, hierbas, flores, raíces). '
        + 'Prefiere familias y formas distintas en lugar de variantes de la misma planta. '
        + 'Incluye OBLIGATORIAMENTE los campos extra: garden_structure, ecosystem_reading, '
        + 'seasonal_observations (con todos sus sub-campos, vacíos si no se observan). '
        + 'Cada texto máximo 200 caracteres. Listas máximo 3 items. '
        + 'Tono calmo, botánico, prudente. Cierra siempre el JSON completamente.'
      : fastMode
        ? 'Observa este huerto con calma y entrega la lectura en el JSON pedido. '
          + 'MODO RÁPIDO: máximo 4 plantas representativas en detected_plants, máximo 4 garden_map_suggestions. '
          + 'PRIORIZA LA BIODIVERSIDAD: si ves varias plantas similares (ej: 4 lechugas), '
          + 'AGRUPA bajo UNA entrada y usa las demás para variedad real (col, hierbas, flores, raíces). '
          + 'Prefiere familias, formas y colores distintos en lugar de variantes de la misma planta. '
          + 'Máximo 2 elementos en las demás listas (main_strengths, main_concerns, priority_actions, '
          + 'garden_improvements, next_week_focus, recommended_actions). '
          + 'Cada campo de texto máximo 120 caracteres. Frases cortas. '
          + 'Cierra siempre el JSON completamente — termina todas las llaves y corchetes. '
          + 'No identifiques sin necesidad — describe lo que ves.'
        : 'Observa este huerto con calma y entrega la lectura en el JSON pedido. No identifiques sin necesidad — describe lo que ves.';

    const payload = {
      model: MODEL,
      response_format: { type: 'json_object' },
      temperature: 0.2,
      // max_tokens : compromis entre latence et complétude du JSON.
      //   - fast :    1300 (jusqu'à 4 plantes représentatives, marge +20%
      //                    contre la troncature, latence quasi-identique)
      //   - full :    1600 (lectures longues v3 standard)
      //   - deep :    2200 (jusqu'à 8 plantes + 3 sections riches extras
      //                    avec textes courts — version Hobby-safe).
      max_tokens: deepMode ? 2200 : (fastMode ? 1300 : 1600),
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        {
          role: 'user',
          content: [
            { type: 'text', text: userText },
            // Vision detail unifié à 'low' — l'image client est déjà
            // compressée à 1400px max, OpenAI extrait l'essentiel.
            // 'high' coûtait ~+50% latence pour ~+5% précision sur
            // notre cas d'usage (plantes basse-résolution).
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

    // safeJsonParse :
    // - tente JSON.parse standard
    // - logue les 1200 premiers chars de la string brute en cas d'échec
    //   (assez pour diagnostiquer la troncature sans exploser les logs)
    // - jamais log : clé API, headers, image base64, body utilisateur
    // - jamais réparation auto (risque de masquer un vrai bug serveur)
    let parsed;
    try {
      parsed = safeJsonParse(content);
    } catch (parseErr) {
      // finish_reason peut aider à diagnostiquer (length = troncature)
      const finishReason = completion?.choices?.[0]?.finish_reason || 'unknown';
      console.error('[diagnose] JSON parse failed · finish_reason=' + finishReason);
      return res.status(502).json({
        error: 'INVALID_MODEL_JSON',
        message: 'La lectura llegó incompleta. Intenta nuevamente con una foto más simple.',
      });
    }

    // Trim APRÈS parse (l'objet, jamais la string brute).
    const sanitized = sanitize(parsed);
    if (deepMode) {
      // Deep mode : aucun trim agressif. On ajoute en revanche les
      // sections enrichies (garden_structure / ecosystem_reading /
      // seasonal_observations) qui sortent du schéma v3 standard.
      const enriched = enrichDeep(sanitized, parsed);
      return res.status(200).json(enriched);
    }
    return res.status(200).json(fastMode ? trimFastMode(sanitized) : sanitized);
  } catch (err) {
    console.error('diagnose handler error:', err);
    return res.status(500).json({ error: 'Error inesperado en el servidor.' });
  }
};

/* safeJsonParse — wrapper avec log borné. Jamais de réparation. */
function safeJsonParse(raw) {
  try {
    return JSON.parse(raw);
  } catch (err) {
    const preview = typeof raw === 'string' ? raw.slice(0, 1200) : String(raw).slice(0, 1200);
    console.error('Failed to parse model JSON · first 1200 chars:\n' + preview);
    throw err;
  }
}

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

/* DEEP MODE enricher — applique le sanitize v3 standard puis attache
   les trois sections extras (garden_structure, ecosystem_reading,
   seasonal_observations) en validant chaque sous-champ.
   `raw` est l'objet sorti de JSON.parse (avant sanitize) — on lit
   les sections extras directement depuis lui pour rester défensif. */
const enrichDeep = (sanitized, raw) => {
  if (!sanitized || typeof sanitized !== 'object') return sanitized;
  const gs = obj(raw && raw.garden_structure);
  const er = obj(raw && raw.ecosystem_reading);
  const so = obj(raw && raw.seasonal_observations);
  // Caps serveur garantis même si le modèle a ignoré la consigne.
  // Cohérent avec le prompt (8 / 8 / 3) et l'UX mobile-first.
  const gr = sanitized.global_reading || {};
  const trim3 = (a) => Array.isArray(a) ? a.slice(0, 3) : a;
  return {
    ...sanitized,
    global_reading: {
      ...gr,
      main_strengths:   trim3(gr.main_strengths),
      main_concerns:    trim3(gr.main_concerns),
      priority_actions: trim3(gr.priority_actions),
    },
    detected_plants: Array.isArray(sanitized.detected_plants)
      ? sanitized.detected_plants.slice(0, 8)
      : [],
    garden_map_suggestions: Array.isArray(sanitized.garden_map_suggestions)
      ? sanitized.garden_map_suggestions.slice(0, 8)
      : [],
    garden_improvements: trim3(sanitized.garden_improvements),
    next_week_focus:     trim3(sanitized.next_week_focus),
    garden_structure: {
      row_organization:    str(gs.row_organization),
      companion_planting:  arr(gs.companion_planting).slice(0, 3),
      density_patterns:    str(gs.density_patterns),
      visual_balance:      str(gs.visual_balance),
      biodiversity_score:  oneOf(gs.biodiversity_score, ['low','medium','high'], 'medium'),
      vertical_layering:   str(gs.vertical_layering),
      soil_exposure:       str(gs.soil_exposure),
    },
    ecosystem_reading: {
      pollinator_friendliness: str(er.pollinator_friendliness),
      diversity_observation:   str(er.diversity_observation),
      monoculture_risk:        str(er.monoculture_risk),
      overcrowding:            str(er.overcrowding),
      moisture_balance:        str(er.moisture_balance),
      airflow:                 str(er.airflow),
    },
    seasonal_observations: {
      maturity_distribution: str(so.maturity_distribution),
      succession_planting:   str(so.succession_planting),
      seasonal_balance:      str(so.seasonal_balance),
    },
    _mode: 'deep', // marker discret pour le client
  };
};

/* FAST MODE post-trim — applique des limites strictes au payload
   pour garantir une réponse compacte même si le modèle a ignoré la
   consigne. La forme reste identique : seules les longueurs changent.

   2026-05-30 update : detected_plants + garden_map_suggestions bumpés
   à 4 (vs 2) pour donner une sensation de "Verdésia comprend le jardin".
   Les autres listes restent à 2 items max pour ne pas grossir le payload. */
const trimFastMode = (data) => {
  if (!data || typeof data !== 'object') return data;
  const MAX_PLANTS = 4;
  const MAX_LIST = 2;
  const trimArr = (a) => Array.isArray(a) ? a.slice(0, MAX_LIST) : a;
  const gr = data.global_reading || {};
  return {
    ...data,
    global_reading: {
      ...gr,
      main_strengths: trimArr(gr.main_strengths),
      main_concerns: trimArr(gr.main_concerns),
      priority_actions: trimArr(gr.priority_actions),
    },
    detected_plants: Array.isArray(data.detected_plants)
      ? data.detected_plants.slice(0, MAX_PLANTS).map(p => ({
          ...p,
          health: p.health ? {
            ...p.health,
            possible_problems: trimArr(p.health.possible_problems),
          } : p.health,
          disease_risks: trimArr(p.disease_risks),
          recommended_actions: trimArr(p.recommended_actions),
          what_to_monitor: trimArr(p.what_to_monitor),
        }))
      : data.detected_plants,
    garden_improvements: trimArr(data.garden_improvements),
    next_week_focus: trimArr(data.next_week_focus),
    // garden_map_suggestions : capé à MAX_PLANTS (=4) en fast mode pour
    // rester aligné avec le nombre de plantas détectées. La reconstruction
    // pose les plantes dans la grille → trop de suggestions ferait de la
    // reconstruction "magique" un bruit. 4 distinctes valent mieux que 12 floues.
    garden_map_suggestions: Array.isArray(data.garden_map_suggestions)
      ? data.garden_map_suggestions.slice(0, MAX_PLANTS)
      : data.garden_map_suggestions,
  };
};

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
