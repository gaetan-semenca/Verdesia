/* ══════════════════════════════════════════════════════════════
   VERDÉSIA — Lectura del huerto · lógica del módulo

   ⚠ SYNCED FROM Brote/app.js — do not edit here in isolation.
   Sans logique de contribution catalogue. Le bridge SEMENCA_BRIDGE
   n'est PAS appelé — Verdésia est un outil d'observation, pas un
   collecteur de données utilisateur.

   ─── TEST MODE — Vision E2E ────────────────────────────────
   Pour tester le flow complet (photo → GPT-4o-mini → Lectura →
   reconstruction → Mi jardín) :

     Ouvrir : verdesia_brote.html?test=vision

   Cela active un petit panneau debug en bas à droite affichant :
     - Modèle utilisé (gpt-4o-mini)
     - Latence de l'appel API
     - Nombre de plantas detectadas
     - Nombre de garden_map_suggestions
     - Nombre de plantas dropped (pas matchées au catalogue)

   Procédure E2E :
     1. Ouvrir verdesia_brote.html?test=vision
     2. Uploader une photo claire d'un huerto
     3. Vérifier la lecture + le panel debug
     4. Cliquer "Preparar mapa del jardín"
     5. Vérifier la preview de reconstrucción
     6. Valider "Actualizar mi jardín"
     7. Aller sur verdesia_jardin.html — vérifier les plantas placées

   Le panel ne s'affiche JAMAIS en mode normal. UI reste calme.
   ══════════════════════════════════════════════════════════════ */

(() => {
  /* Note: les anciens IDs #r-plant / #r-health / #r-water / #r-light /
     #r-issues / #r-todo / #r-confidence / #r-warning ne sont plus
     utilisés. Le bloc #result est désormais peuplé dynamiquement (une
     "Lectura general" + une carte par plante), ce qui supporte le cas
     multi-plantes du nouveau schéma. Les HTML existants gardent ces
     éléments inertes — innerHTML='' du bloc #result les efface au
     premier rendu. */
  const els = {
    cameraInput:  document.getElementById('camera-input'),
    uploadInput:  document.getElementById('upload-input'),
    analyzeBtn:   document.getElementById('analyze-btn'),
    preview:      document.getElementById('preview'),
    status:       document.getElementById('status'),
    result:       document.getElementById('result'),
    contribution: document.getElementById('contribution'),
  };

  let currentImageDataUrl = null;

  /* ───── Test mode (vision E2E) ─────
     Détecté via ?test=vision dans l'URL OU localStorage flag OU
     window.VERDESIA_TEST_MODE. Reste désactivé en mode normal. */
  const _testMode = (() => {
    try {
      if (window.VERDESIA_TEST_MODE === true) return true;
      const qs = new URLSearchParams(location.search);
      if (qs.get('test') === 'vision') return true;
      if (localStorage.getItem('verdesia_test_mode') === '1') return true;
    } catch {}
    return false;
  })();
  let _testPanel = null;
  function _ensureTestPanel() {
    if (!_testMode || _testPanel) return _testPanel;
    _testPanel = document.createElement('div');
    _testPanel.className = 'qa-vision-panel';
    _testPanel.setAttribute('role', 'status');
    _testPanel.setAttribute('aria-live', 'polite');
    _testPanel.innerHTML = `
      <div class="qa-vp-head">Vision test · gpt-4o-mini</div>
      <dl class="qa-vp-body">
        <dt>Latencia</dt>           <dd id="qa-vp-latency">—</dd>
        <dt>Plantas detectadas</dt> <dd id="qa-vp-detected">—</dd>
        <dt>Mapa sugerencias</dt>   <dd id="qa-vp-map">—</dd>
        <dt>No mapeadas</dt>        <dd id="qa-vp-nomatch">—</dd>
        <dt>Sin espacio</dt>        <dd id="qa-vp-nospace">—</dd>
      </dl>
    `;
    document.body.appendChild(_testPanel);
    return _testPanel;
  }
  function _updateTestPanel(patch) {
    if (!_testMode) return;
    _ensureTestPanel();
    Object.entries(patch || {}).forEach(([k, v]) => {
      const el = document.getElementById('qa-vp-' + k);
      if (el) el.textContent = (v == null ? '—' : String(v));
    });
  }
  // Initialiser le panneau au boot — montre 'pendiente' jusqu'à la 1ère analyse
  if (_testMode) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', _ensureTestPanel, { once: true });
    } else {
      _ensureTestPanel();
    }
  }

  /* ───── File handling ───── */

  const onFileChosen = async (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      showError('Ese archivo no parece una imagen.');
      return;
    }
    clearStatus();
    hideResult();
    try {
      // Compression jardin : 1400px / qualité 0.72 — équilibre net entre
      // perception (l'IA voit assez), latence upload (mobile 3G/4G) et
      // coût tokens image OpenAI. Le canvas re-encode dépouille EXIF
      // automatiquement (zero metadata leak).
      console.time('verdesia:compress');
      const compressed = await compressGardenImage(file);
      console.timeEnd('verdesia:compress');
      currentImageDataUrl = compressed;
      renderPreview(compressed);
      els.analyzeBtn.disabled = false;
    } catch (err) {
      console.error(err);
      showError('No se pudo leer la imagen.');
    }
  };

  els.cameraInput.addEventListener('change', (e) => onFileChosen(e.target.files[0]));
  els.uploadInput.addEventListener('change', (e) => onFileChosen(e.target.files[0]));

  /* ───── Compression
     Resize so longest edge ≤ maxEdge, encode JPEG at quality.
     Re-encoding via canvas implicitly strips EXIF metadata. */

  const compressImage = (file, maxEdge, quality) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('read-failed'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('decode-failed'));
      img.onload = () => {
        const { width, height } = img;
        const scale = Math.min(1, maxEdge / Math.max(width, height));
        const w = Math.round(width * scale);
        const h = Math.round(height * scale);
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });

  /* Helper public : compression dédiée pour les lectures de jardin.
     1400px / 0.72 — voir commentaires onFileChosen. Exposé sur window
     pour pouvoir être réutilisé ailleurs (e.g. observaciones). */
  const compressGardenImage = (file) => compressImage(file, 1400, 0.72);
  window.compressGardenImage = compressGardenImage;

  /* ───── Preview ───── */

  const renderPreview = (dataUrl) => {
    els.preview.innerHTML = '';
    const img = document.createElement('img');
    img.src = dataUrl;
    img.alt = 'Vista previa de la planta';
    els.preview.appendChild(img);
  };

  /* ───── Status ───── */

  const showLoading = (msg) => {
    els.status.hidden = false;
    els.status.classList.remove('is-error');
    els.status.textContent = msg;
  };

  const showError = (msg) => {
    els.status.hidden = false;
    els.status.classList.add('is-error');
    els.status.textContent = msg;
  };

  const clearStatus = () => {
    els.status.hidden = true;
    els.status.classList.remove('is-error');
    els.status.textContent = '';
  };

  /* ═════ Contemplative overlay ═════════════════════════════════
     Pendant l'attente (compression + upload + OpenAI), on remplace
     la sensation de freeze par une séquence lente de 4 lignes
     contemplatives. Le ton reste botánico — pas de spinner ni
     de loader SaaS. Le overlay est injecté à la demande et retiré
     proprement à la fin (success, error, timeout, abort). */

  let _veilTimer = null;
  let _veilStep = 0;
  const VEIL_LINES_ANALYZE = [
    'Verdésia observa lentamente tu huerto…',
    'Buscando formas, luz y densidad…',
    'Reconociendo plantas visibles…',
    'Preparando una lectura tranquila…',
  ];
  const VEIL_LINES_RECONSTRUCT = [
    'Leyendo la distribución general…',
    'Ubicando plantas visibles…',
    'Preparando una vista editable…',
    'Casi listo…',
  ];

  function _ensureVeilStyles() {
    if (document.getElementById('verdesia-veil-styles')) return;
    const s = document.createElement('style');
    s.id = 'verdesia-veil-styles';
    s.textContent = `
      .v-veil {
        position: fixed; inset: 0; z-index: 1500;
        display: flex; align-items: center; justify-content: center;
        background: rgba(253, 250, 242, .92);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        opacity: 0; transition: opacity .4s ease;
      }
      .v-veil.is-on { opacity: 1; }
      .v-veil-inner {
        max-width: 360px; padding: 0 28px; text-align: center;
        font-family: 'Playfair Display', Georgia, serif;
        font-style: italic; font-size: 18px; line-height: 1.55;
        color: #3B5838;
      }
      .v-veil-title {
        font-size: 15px; color: #4A3626; margin-bottom: 14px;
        font-style: normal; font-family: 'Inter', system-ui, sans-serif;
      }
      .v-veil-title:empty { display: none; }
      .v-veil-line {
        display: block; min-height: 1.55em;
        opacity: 0; transform: translateY(6px);
        transition: opacity .5s ease, transform .5s ease;
      }
      .v-veil-line.is-shown { opacity: 1; transform: none; }
      .v-veil-sub {
        font-size: 13px; color: #7A6248; margin-top: 12px;
        font-style: normal; font-family: 'Inter', system-ui, sans-serif;
        line-height: 1.5; opacity: .85;
      }
      .v-veil-sub:empty { display: none; }
      .v-veil-dot {
        display: inline-block; width: 5px; height: 5px;
        margin: 14px 4px 0; border-radius: 50%;
        background: #78A07C; opacity: .3;
        animation: vVeilDot 1.4s ease-in-out infinite;
      }
      .v-veil-dot:nth-child(2) { animation-delay: .2s; }
      .v-veil-dot:nth-child(3) { animation-delay: .4s; }
      @keyframes vVeilDot { 0%,100% { opacity:.3; transform: translateY(0); } 50% { opacity:.9; transform: translateY(-3px); } }
      @media (prefers-reduced-motion: reduce) {
        .v-veil { transition: none; }
        .v-veil-line { transition: none; }
        .v-veil-dot { animation: none; opacity: .6; }
      }
    `;
    document.head.appendChild(s);
  }

  /* _showVeil(opts?)
     opts.lines      — séquence de lignes (default = analyse photo)
     opts.intervalMs — délai entre lignes (default 1500)
     opts.title      — petite ligne au-dessus de la séquence (optionnelle)
     opts.subtitle   — petite ligne sous la séquence (optionnelle, rassurante)
     Backward-compat : _showVeil() sans args utilise la séquence d'analyse. */
  function _showVeil(opts) {
    opts = opts || {};
    const lines = (Array.isArray(opts.lines) && opts.lines.length) ? opts.lines : VEIL_LINES_ANALYZE;
    const intervalMs = Math.max(300, Number(opts.intervalMs) || 1500);
    const title = opts.title || '';
    const subtitle = opts.subtitle || '';

    _ensureVeilStyles();
    let veil = document.getElementById('v-veil');
    if (!veil) {
      veil = document.createElement('div');
      veil.id = 'v-veil';
      veil.className = 'v-veil';
      veil.setAttribute('role', 'status');
      veil.setAttribute('aria-live', 'polite');
      veil.innerHTML = `
        <div class="v-veil-inner">
          <div class="v-veil-title" id="v-veil-title"></div>
          <span class="v-veil-line" id="v-veil-line"></span>
          <div>
            <span class="v-veil-dot"></span>
            <span class="v-veil-dot"></span>
            <span class="v-veil-dot"></span>
          </div>
          <div class="v-veil-sub" id="v-veil-sub"></div>
        </div>
      `;
      document.body.appendChild(veil);
    }
    document.getElementById('v-veil-title').textContent = title;
    document.getElementById('v-veil-sub').textContent = subtitle;

    void veil.offsetWidth; // force reflow before fade in
    veil.classList.add('is-on');

    // Reset interval si appel successif
    if (_veilTimer) { clearInterval(_veilTimer); _veilTimer = null; }

    _veilStep = 0;
    _setVeilLine(lines[0]);
    _veilTimer = setInterval(() => {
      _veilStep++;
      if (_veilStep >= lines.length) {
        clearInterval(_veilTimer); _veilTimer = null;
        return;
      }
      _setVeilLine(lines[_veilStep]);
    }, intervalMs);
  }

  function _setVeilLine(txt) {
    const el = document.getElementById('v-veil-line');
    if (!el) return;
    el.classList.remove('is-shown');
    setTimeout(() => {
      el.textContent = txt;
      requestAnimationFrame(() => el.classList.add('is-shown'));
    }, 220);
  }

  function _hideVeil() {
    if (_veilTimer) { clearInterval(_veilTimer); _veilTimer = null; }
    const veil = document.getElementById('v-veil');
    if (!veil) return;
    veil.classList.remove('is-on');
    setTimeout(() => { if (veil && veil.parentNode) veil.parentNode.removeChild(veil); }, 420);
  }

  /* ───── Analyze ───── */

  els.analyzeBtn.addEventListener('click', async () => {
    if (!currentImageDataUrl) return;

    // Freemium gating: vérifie le compteur mensuel de lectures.
    // Si dépassé, on n'appelle pas l'API et on affiche un message calme
    // avec un lien doux vers Verdésia Plus.
    if (window.VerdesiaPlan && typeof window.VerdesiaPlan.canUseReading === 'function'
        && !window.VerdesiaPlan.canUseReading()) {
      hideResult();
      clearStatus();
      renderLimitReachedCard();
      return;
    }

    hideResult();
    clearStatus();          // veil prend la place
    _showVeil();             // overlay contemplatif immédiat
    els.analyzeBtn.disabled = true;

    // Reset test panel pour la nouvelle analyse
    if (_testMode) {
      _updateTestPanel({ latency:'pidiendo…', detected:'—', map:'—', nomatch:'—', nospace:'—' });
    }
    console.time('verdesia:diagnose-total');
    const _t0 = performance.now();

    // Timeout sécurité : 20s côté frontend. AbortController coupe le fetch
    // proprement (pas de freeze infini si Vercel ou OpenAI traîne).
    const controller = new AbortController();
    const TIMEOUT_MS = 20000;
    let _timedOut = false;
    const timeoutId = setTimeout(() => {
      _timedOut = true;
      controller.abort();
    }, TIMEOUT_MS);

    try {
      const endpoint = (typeof window.BROTE_API_URL === 'string' && window.BROTE_API_URL) || '/api/diagnose';
      console.time('verdesia:diagnose-network');
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: currentImageDataUrl, fast: true }),
        signal: controller.signal,
      });
      console.timeEnd('verdesia:diagnose-network');

      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(text || `HTTP ${res.status}`);
      }

      console.time('verdesia:diagnose-parse');
      const data = await res.json();
      console.timeEnd('verdesia:diagnose-parse');

      clearTimeout(timeoutId);
      const _latency = Math.round(performance.now() - _t0);

      console.time('verdesia:diagnose-render');
      _hideVeil();
      renderResult(data);
      console.timeEnd('verdesia:diagnose-render');
      console.timeEnd('verdesia:diagnose-total');
      console.log('[verdesia] diagnose end · total', _latency, 'ms');

      clearStatus();
      // Comptabilise la lecture après succès uniquement (jamais sur erreur).
      if (window.VerdesiaPlan && typeof window.VerdesiaPlan.recordReading === 'function') {
        try { window.VerdesiaPlan.recordReading(); } catch {}
      }
      // Test panel : remplir les compteurs basés sur la réponse normalisée.
      if (_testMode) {
        const detected = Array.isArray(data.detected_plants) ? data.detected_plants.length : 0;
        const map = Array.isArray(data.garden_map_suggestions) ? data.garden_map_suggestions.length : 0;
        _updateTestPanel({ latency: _latency + 'ms', detected, map, nomatch:'—', nospace:'—' });
      }
    } catch (err) {
      clearTimeout(timeoutId);
      _hideVeil();
      console.timeEnd('verdesia:diagnose-total');
      const _latency = Math.round(performance.now() - _t0);
      console.warn('[verdesia] diagnose failed · total', _latency, 'ms ·', _timedOut ? 'timeout' : err && err.name || err);
      if (_testMode) _updateTestPanel({ latency: _latency + 'ms (' + (_timedOut ? 'timeout' : 'error') + ')' });

      if (_timedOut) {
        showError('La lectura tomó demasiado tiempo. Intenta nuevamente con una foto más simple o más cercana.');
      } else {
        showError('No fue posible completar el análisis. Intenta de nuevo en un momento.');
      }
    } finally {
      els.analyzeBtn.disabled = false;
    }
  });

  /* ═════════════════════════════════════════════════════════════════
     "LECTURA DEL HUERTO" — rendu d'observation jardin (v3 du schéma).

     Le serveur garantit la forme {scene_type, global_reading,
     detected_plants[], garden_improvements, next_week_focus, gentle_note}
     et a déjà absorbé les schémas antérieurs (v1 single-plant, v2 multi-plant).
     Le client défend une seconde fois via ensureNewShape() pour tolérer
     toute régression côté serveur.

     Aucune logique de contribution catalogue. Aucun appel à SEMENCA_BRIDGE.
     Aucun JSON jamais affiché.
     ═════════════════════════════════════════════════════════════════ */

  /* ─── Étiquettes humaines ─── */

  const HEALTH_LABEL = {
    excellent: 'Conjunto excelente',
    good:      'Conjunto sano',
    mixed:     'Conjunto desigual',
    stressed:  'Señales de estrés',
    poor:      'Lectura preocupante',
  };

  const SCENE_LABEL = {
    garden:     'Vista de huerto',
    raised_bed: 'Bancal elevado',
    containers: 'Macetas',
    mixed:      'Espacio mixto',
    unclear:    'Lectura difícil',
  };

  const POSITION_LABEL = {
    left:       'A la izquierda',
    center:     'En el centro',
    right:      'A la derecha',
    foreground: 'En primer plano',
    background: 'Al fondo',
  };

  const CONFIDENCE_LABEL = {
    low:    'Indicios discretos',
    medium: 'Indicios visibles',
    high:   'Lectura clara',
  };

  const STRESS_LABEL = {
    low:    'Estrés bajo',
    medium: 'Estrés moderado',
    high:   'Estrés notable',
  };

  /* ─── Adaptateur défensif côté client ───
     Le serveur normalise déjà, mais on retombe sur nos pieds si la
     forme reçue est partielle ou d'une version antérieure. */

  const ensureNewShape = (raw) => {
    if (!raw || typeof raw !== 'object') return null;
    // Native v3
    if (Array.isArray(raw.detected_plants) && raw.global_reading) return raw;
    // v2 fallback {plants[], garden_overview}
    if (Array.isArray(raw.plants)) {
      const go = raw.garden_overview || {};
      return {
        scene_type: raw.scene_type || 'mixed',
        global_reading: {
          summary:           go.summary || '',
          overall_health:    go.general_health || 'mixed',
          main_strengths:    [],
          main_concerns:     Array.isArray(go.main_observations) ? go.main_observations : [],
          priority_actions:  Array.isArray(go.priority_actions) ? go.priority_actions : [],
          environment_observations: { light:'', water:'', density:'', soil_visibility:'', growth_balance:'' },
        },
        detected_plants: raw.plants.map(p => ({
          name:        p.plant_probable || '',
          confidence:  p.confidence || 'low',
          position:    p.visible_position && p.visible_position !== 'unclear' ? p.visible_position : 'foreground',
          growth_stage: {
            stage:               (p.maturity_stage && p.maturity_stage.label) || '',
            description:         (p.maturity_stage && p.maturity_stage.description) || '',
            next_expected_stage: (p.maturity_stage && p.maturity_stage.next_stage) || '',
          },
          health: {
            status:            p.health_status || '',
            stress_level:      'low',
            possible_problems: Array.isArray(p.possible_issues) ? p.possible_issues : [],
          },
          water_analysis:      p.water_diagnosis || '',
          light_analysis:      p.light_diagnosis || '',
          spacing_analysis:    p.soil_or_pot_observations || '',
          disease_risks:       [],
          recommended_actions: Array.isArray(p.what_to_do_now) ? p.what_to_do_now : [],
          what_to_monitor:     Array.isArray(p.what_to_watch_next) ? p.what_to_watch_next : [],
        })),
        garden_improvements: Array.isArray(raw.global_advice) ? raw.global_advice : [],
        next_week_focus:     [],
        gentle_note:         raw.gentle_warning || '',
      };
    }
    // v1 fallback {plant_probable}
    if (raw.plant_probable) {
      return {
        scene_type: 'unclear',
        global_reading: {
          summary: '', overall_health: 'mixed',
          main_strengths: [], main_concerns: [], priority_actions: [],
          environment_observations: { light:'', water:'', density:'', soil_visibility:'', growth_balance:'' },
        },
        detected_plants: [{
          name:        raw.plant_probable,
          confidence:  raw.confidence || 'low',
          position:    'foreground',
          growth_stage: { stage:'', description:'', next_expected_stage:'' },
          health: {
            status:            raw.health_status || '',
            stress_level:      'low',
            possible_problems: Array.isArray(raw.possible_issues) ? raw.possible_issues : [],
          },
          water_analysis:      raw.water_diagnosis || '',
          light_analysis:      raw.light_diagnosis || '',
          spacing_analysis:    '',
          disease_risks:       [],
          recommended_actions: Array.isArray(raw.what_to_do_now) ? raw.what_to_do_now : [],
          what_to_monitor:     [],
        }],
        garden_improvements: [],
        next_week_focus:     [],
        gentle_note:         raw.gentle_warning || '',
      };
    }
    return null;
  };

  /* ─── DOM builders ─── */

  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls)           n.className = cls;
    if (text != null)  n.textContent = text;
    return n;
  };
  const buildList = (items, cls) => {
    const ul = el('ul', cls || 'do-list');
    for (const s of items) ul.appendChild(el('li', null, String(s).trim()));
    return ul;
  };

  /* ─── 1. Card "Lectura general" (hero) ─── */

  const buildHeroCard = (data) => {
    const g = data.global_reading || {};
    const hasContent = (g.summary && g.summary.trim()) || g.overall_health
                     || (g.environment_observations && Object.values(g.environment_observations).some(v => v && v.trim()));
    if (!hasContent && (!data.detected_plants || !data.detected_plants.length)) return null;

    const card = el('article', 'result-card lectura-general');
    card.appendChild(el('h2', 'result-card-eyebrow', 'Lectura general'));

    if (g.summary) card.appendChild(el('p', 'lectura-summary', g.summary));

    const meta = el('div', 'lectura-meta');
    meta.appendChild(el('span', `health-badge health-badge--${g.overall_health || 'mixed'}`,
                        HEALTH_LABEL[g.overall_health] || HEALTH_LABEL.mixed));
    if (data.scene_type && SCENE_LABEL[data.scene_type]) {
      meta.appendChild(el('span', 'lectura-count', SCENE_LABEL[data.scene_type]));
    }
    card.appendChild(meta);

    // Environment observations grid (light / water / density / soil / growth)
    const eo = g.environment_observations || {};
    const envRows = [
      ['Luz',           eo.light],
      ['Agua',          eo.water],
      ['Densidad',      eo.density],
      ['Suelo visible', eo.soil_visibility],
      ['Crecimiento',   eo.growth_balance],
    ].filter(([, v]) => v && String(v).trim());
    if (envRows.length) {
      const dl = el('dl', 'env-grid');
      for (const [k, v] of envRows) {
        dl.appendChild(el('dt', null, k));
        dl.appendChild(el('dd', null, v));
      }
      card.appendChild(dl);
    }
    return card;
  };

  /* ─── 2. Card "Observaciones principales" (strengths + concerns) ─── */

  const buildObservationsCard = (data) => {
    const g = data.global_reading || {};
    const strengths = Array.isArray(g.main_strengths) ? g.main_strengths : [];
    const concerns  = Array.isArray(g.main_concerns)  ? g.main_concerns  : [];
    if (!strengths.length && !concerns.length) return null;

    const card = el('article', 'result-card observations-card');
    card.appendChild(el('h2', 'result-card-eyebrow', 'Observaciones principales'));

    if (strengths.length) {
      card.appendChild(el('h3', 'subsection subsection--good', 'Fortalezas'));
      card.appendChild(buildList(strengths, 'do-list do-list--good'));
    }
    if (concerns.length) {
      card.appendChild(el('h3', 'subsection subsection--concern', 'Puntos de atención'));
      card.appendChild(buildList(concerns, 'do-list do-list--concern'));
    }
    return card;
  };

  /* ─── 3. Card par plante détectée ─── */

  const buildPlantCard = (p, index) => {
    const card = el('article', 'result-card plant-card');
    const header = el('header', 'plant-card-header');
    const title = el('h2', 'plant-card-title');
    title.appendChild(el('span', 'plant-card-num', `Planta ${index + 1}`));
    title.appendChild(el('span', 'plant-card-name', p.name || 'Planta no identificada'));
    header.appendChild(title);

    const tags = el('div', 'plant-card-tags');
    tags.appendChild(el('span', `tag tag--conf tag--conf-${p.confidence}`, CONFIDENCE_LABEL[p.confidence] || ''));
    const pos = POSITION_LABEL[p.position];
    if (pos) tags.appendChild(el('span', 'tag tag--pos', pos));
    if (p.health && p.health.stress_level && p.health.stress_level !== 'low') {
      tags.appendChild(el('span', `tag tag--stress tag--stress-${p.health.stress_level}`,
                          STRESS_LABEL[p.health.stress_level] || ''));
    }
    header.appendChild(tags);
    card.appendChild(header);

    // Estado / health
    if (p.health && p.health.status) {
      const block = el('div', 'plant-block');
      block.appendChild(el('h3', 'subsection', 'Estado'));
      block.appendChild(el('p', null, p.health.status));
      card.appendChild(block);
    }

    // Etapa de crecimiento
    const gs = p.growth_stage || {};
    if (gs.stage || gs.description || gs.next_expected_stage) {
      const block = el('div', 'plant-block plant-block--maturity');
      block.appendChild(el('h3', 'subsection', 'Etapa de crecimiento'));
      if (gs.stage)               block.appendChild(el('p', 'maturity-label', gs.stage));
      if (gs.description)         block.appendChild(el('p', 'maturity-desc', gs.description));
      if (gs.next_expected_stage) block.appendChild(el('p', 'maturity-next', `Próxima etapa: ${gs.next_expected_stage}`));
      card.appendChild(block);
    }

    // Grille observations compactes (agua / luz / espaciamiento)
    const obsRows = [
      ['Agua',          p.water_analysis],
      ['Luz',           p.light_analysis],
      ['Espaciamiento', p.spacing_analysis],
    ].filter(([, v]) => v && String(v).trim());
    if (obsRows.length) {
      const dl = el('dl', 'plant-obs-grid');
      for (const [k, v] of obsRows) {
        dl.appendChild(el('dt', null, k));
        dl.appendChild(el('dd', null, v));
      }
      card.appendChild(dl);
    }

    // Possibles problèmes
    if (p.health && Array.isArray(p.health.possible_problems) && p.health.possible_problems.length) {
      const block = el('div', 'plant-block');
      block.appendChild(el('h3', 'subsection', 'Posibles problemas'));
      block.appendChild(buildList(p.health.possible_problems));
      card.appendChild(block);
    }
    // Risques fongiques / pestes
    if (Array.isArray(p.disease_risks) && p.disease_risks.length) {
      const block = el('div', 'plant-block');
      block.appendChild(el('h3', 'subsection', 'Riesgos a vigilar'));
      block.appendChild(buildList(p.disease_risks));
      card.appendChild(block);
    }
    // Acciones recomendadas
    if (Array.isArray(p.recommended_actions) && p.recommended_actions.length) {
      const block = el('div', 'plant-block');
      block.appendChild(el('h3', 'subsection', 'Acciones recomendadas'));
      block.appendChild(buildList(p.recommended_actions, 'do-list do-list--now'));
      card.appendChild(block);
    }
    // Qué monitorear
    if (Array.isArray(p.what_to_monitor) && p.what_to_monitor.length) {
      const block = el('div', 'plant-block');
      block.appendChild(el('h3', 'subsection', 'Qué observar'));
      block.appendChild(buildList(p.what_to_monitor));
      card.appendChild(block);
    }
    return card;
  };

  /* ─── 4-5. Cards globales (qué hacer / qué vigilar) ─── */

  const buildPriorityCard = (data) => {
    const g = data.global_reading || {};
    const merged = [
      ...(Array.isArray(g.priority_actions)     ? g.priority_actions     : []),
      ...(Array.isArray(data.garden_improvements) ? data.garden_improvements : []),
    ].slice(0, 5);
    if (!merged.length) return null;
    const card = el('article', 'result-card result-card--actions');
    card.appendChild(el('h2', 'result-card-eyebrow', 'Qué hacer ahora'));
    card.appendChild(buildList(merged, 'do-list do-list--now'));
    return card;
  };

  const buildMonitorCard = (data) => {
    const items = Array.isArray(data.next_week_focus) ? data.next_week_focus : [];
    if (!items.length) return null;
    const card = el('article', 'result-card result-card--monitor');
    card.appendChild(el('h2', 'result-card-eyebrow', 'Qué vigilar esta semana'));
    card.appendChild(buildList(items));
    return card;
  };

  /* ─── 6. Footer note ─── */

  const buildGentleNoteCard = (data) => {
    const w = (data.gentle_note || '').trim();
    const card = el('article', 'result-card result-card--meta');
    card.appendChild(el('h2', 'result-card-eyebrow', 'Consideración'));
    card.appendChild(el('p', 'warning', w
      || 'Una observación aproximada. Tu propia experiencia con el jardín sigue siendo esencial.'));
    return card;
  };

  /* ─── Entry point ─── */

  const buildEmptyCard = () => {
    const card = el('article', 'result-card');
    card.appendChild(el('h2', 'result-card-eyebrow', 'Sin lectura clara'));
    card.appendChild(el('p', null,
      'La imagen no permite una lectura clara. Intenta una foto con mejor luz y un encuadre que muestre varias plantas.'));
    return card;
  };

  /* Carte affichée quand la limite roulante de lectures est atteinte.
     Ton calme et éditorial : eyebrow → titre serif → ligne italique →
     ligne plus douce sur Plus → CTA. Pas de rouge, pas d'alerte.
     Le wording évite "quota", "limite", "scan" : on parle du rythme du
     jardin, pas d'une restriction technique. */
  const renderLimitReachedCard = () => {
    els.result.innerHTML = '';
    const card = el('article', 'result-card result-card--limit');
    card.appendChild(el('h2', 'result-card-eyebrow', 'Pausa estacional'));
    const headline = el('p', 'limit-headline');
    headline.innerHTML = 'Tu jardín queda <em>contigo</em> hasta el próximo mes.';
    card.appendChild(headline);
    card.appendChild(el('p', 'limit-line',
      'El huerto cambia lentamente. Verdésia intenta acompañar esos ritmos.'));
    card.appendChild(el('p', 'limit-line',
      'Verdésia Plus permite observar el jardín con más continuidad.'));
    const link = document.createElement('a');
    link.href = 'verdesia_plus.html';
    link.className = 'plus-soft-cta';
    link.textContent = 'Descubrir Verdésia Plus →';
    card.appendChild(link);
    els.result.appendChild(card);
    els.result.hidden = false;
    els.result.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const renderResult = (rawData) => {
    const data = ensureNewShape(rawData);
    els.result.innerHTML = '';

    if (!data) {
      els.result.appendChild(buildEmptyCard());
      els.result.hidden = false;
      return;
    }

    const hero = buildHeroCard(data);
    if (hero) els.result.appendChild(hero);

    const obs = buildObservationsCard(data);
    if (obs) els.result.appendChild(obs);

    const plants = Array.isArray(data.detected_plants) ? data.detected_plants : [];
    if (plants.length === 0 && !hero && !obs) {
      els.result.appendChild(buildEmptyCard());
    } else if (plants.length > 0) {
      const headerText = plants.length > 1 ? 'Plantas observadas' : 'Planta observada';
      els.result.appendChild(el('h2', 'plants-section-header', headerText));
      plants.forEach((p, i) => els.result.appendChild(buildPlantCard(p, i)));
    }

    const actions = buildPriorityCard(data);
    if (actions) els.result.appendChild(actions);

    const monitor = buildMonitorCard(data);
    if (monitor) els.result.appendChild(monitor);

    els.result.appendChild(buildGentleNoteCard(data));

    // Tarjeta "Guardar esta observación" — al final del flujo, después de
    // la nota gentil. Sólo si hay un módulo Observaciones cargado y si la
    // lectura no está vacía (al menos un hallazgo o una acción).
    const saveCard = buildSaveObservationCard(data);
    if (saveCard) els.result.appendChild(saveCard);

    // Tarjeta "Preparar mapa del jardín" — invitación a la reconstrucción
    // aproximada. Sólo si hay plantas detectadas y la escena es legible.
    const reconCard = buildReconstructionCard(data);
    if (reconCard) els.result.appendChild(reconCard);

    els.result.hidden = false;
    els.result.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  /* ─── Reconstrucción aproximada del huerto ───────────────────
     Tarjeta calma al final del flujo. Genera un brouillon (draft) en
     sessionStorage y navega a la página de previsualización. El draft
     es desechable — jamás toca Mi jardín sin validación explícita. */

  // Memoriza el id de la última observación guardada en esta sesión de
  // lectura — para vincular la reconstrucción a su origen.
  let _lastSavedObservationId = null;

  const buildReconstructionCard = (data) => {
    if (!window.VerdesiaReconstruction) return null;
    const plants = (data && Array.isArray(data.detected_plants)) ? data.detected_plants : [];
    if (plants.length === 0) return null;
    if (data && data.scene_type === 'unclear') return null;

    const card = el('article', 'result-card result-card--reconstruct');
    card.appendChild(el('h2', 'result-card-eyebrow', 'Mapa del huerto'));
    const headline = el('p', 'reconstruct-headline');
    headline.innerHTML = '¿Quieres preparar el <em>mapa</em> de tu jardín?';
    card.appendChild(headline);
    card.appendChild(el('p', 'reconstruct-line',
      'Verdésia puede sugerir una distribución aproximada a partir de esta lectura. Podrás revisarla y corregirla antes de actualizar tu jardín.'));

    const btn = document.createElement('button');
    btn.className = 'reconstruct-btn';
    btn.type = 'button';
    btn.textContent = 'Preparar mapa del jardín';
    card.appendChild(btn);

    /* Flow async « préparation du mapa » — modal in-page (pas de nav).
       Le user reste sur la page de lectura. Après la séquence overlay
       de préparation, une modal élégante apparaît avec :
        - Titre rassurant : « Verdésia preparó una propuesta para tu jardín »
        - Jusqu'à 4 cartes plantes (nom · confiance · zone)
        - CTA principal : « Agregar a mi jardín » → applyDraftToGarden + redirect jardin
        - CTA secondaire : « Revisar manualmente » → ouvre verdesia_reconstruccion.html
       Pour les cas où aucune planta n'est fiable, une variante fallback
       affiche : « Verdésia no encontró suficientes plantas claras »
       avec « Intentar otra foto » et « Agregar manualmente ». */
    btn.addEventListener('click', async () => {
      if (btn.disabled) return;
      btn.disabled = true;
      btn.setAttribute('aria-busy', 'true');
      btn.textContent = 'Preparando mapa…';

      _showVeil({
        title: 'Verdésia está preparando una propuesta para tu jardín…',
        subtitle: 'No necesita ser perfecta: podrás ajustarla más adelante.',
        lines: VEIL_LINES_RECONSTRUCT,
        intervalMs: 700,
      });

      await new Promise(requestAnimationFrame);
      await new Promise(r => setTimeout(r, 50));

      const MIN_VEIL_MS = 2400;
      const minDelay = new Promise(r => setTimeout(r, MIN_VEIL_MS));

      let draft = null;
      const work = (async () => {
        try {
          console.time('verdesia:reconstruction-prepare');
          draft = window.VerdesiaReconstruction.generate(data, {
            sourceObservationId: _lastSavedObservationId,
          });
          if (_testMode) {
            const nomatch = (draft && Number.isInteger(draft.droppedNoMatch))
              ? draft.droppedNoMatch : (draft && draft.droppedCount) || 0;
            const nospace = (draft && Number.isInteger(draft.droppedNoSpace))
              ? draft.droppedNoSpace : 0;
            _updateTestPanel({ nomatch, nospace });
          }
          // setDraft persiste en sessionStorage — utile si l'utilisateur
          // choisit ensuite « Revisar manualmente » (cette page lit le draft).
          window.VerdesiaReconstruction.setDraft(draft);
          console.timeEnd('verdesia:reconstruction-prepare');
          return { ok: true };
        } catch (e) {
          console.warn('[reconstruction] generation failed:', e);
          return { ok: false, error: e };
        }
      })();

      const [workResult] = await Promise.all([work, minDelay]);

      if (!workResult.ok) {
        _hideVeil();
        btn.disabled = false;
        btn.removeAttribute('aria-busy');
        btn.textContent = 'Preparar mapa del jardín';
        showError('No fue posible preparar el mapa. Intenta de nuevo en un momento.');
        return;
      }

      // Petit délai pour laisser « Casi listo » respirer avant la modal.
      await new Promise(r => setTimeout(r, 200));
      _hideVeil();

      // Yield pour laisser le veil fade-out finir avant d'ouvrir la modal.
      await new Promise(r => setTimeout(r, 220));

      _openGardenProposalModal(draft, btn);
    });

    return card;
  };

  /* ═════════════════════════════════════════════════════════════════
     GARDEN PROPOSAL MODAL — flow principal de "Preparar mapa"
     remplace la navigation vers verdesia_reconstruccion.html.
     L'utilisateur voit jusqu'à 4 cartes plantes, peut ajouter en un
     clic, ou choisir le mode manuel pour ouvrir la page éditable. */

  function _ensureProposalStyles() {
    if (document.getElementById('verdesia-proposal-styles')) return;
    const s = document.createElement('style');
    s.id = 'verdesia-proposal-styles';
    s.textContent = `
      .gp-backdrop {
        position: fixed; inset: 0; z-index: 1600;
        background: rgba(42, 30, 18, .42);
        display: flex; align-items: flex-end; justify-content: center;
        opacity: 0; transition: opacity .32s ease;
      }
      .gp-backdrop.is-on { opacity: 1; }
      @media (min-width: 640px) {
        .gp-backdrop { align-items: center; }
      }
      .gp-modal {
        background: #FDFAF2; color: #2A1E12;
        max-width: 520px; width: 100%;
        border-radius: 18px 18px 0 0;
        padding: 28px 24px 22px;
        box-shadow: 0 -10px 40px rgba(42,30,18,.18);
        transform: translateY(20px); opacity: 0;
        transition: transform .35s cubic-bezier(.16,1,.3,1), opacity .25s ease;
        max-height: 92vh; overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }
      @media (min-width: 640px) {
        .gp-modal { border-radius: 18px; transform: translateY(12px) scale(.98); }
      }
      .gp-backdrop.is-on .gp-modal { transform: none; opacity: 1; }
      .gp-eyebrow {
        font-family: 'DM Mono', monospace; font-size: 10px;
        color: #78A07C; letter-spacing: 1.8px; text-transform: uppercase;
        margin-bottom: 10px;
      }
      .gp-title {
        font-family: 'Playfair Display', Georgia, serif;
        font-size: 22px; line-height: 1.3; color: #2A1E12;
        margin-bottom: 8px;
      }
      .gp-title em { color: #3B5838; font-style: italic; }
      .gp-sub {
        font-size: 14.5px; color: #4A3626; line-height: 1.55;
        margin-bottom: 22px;
      }
      .gp-section-title {
        font-family: 'DM Mono', monospace; font-size: 10px;
        color: #7A6248; letter-spacing: 1.5px; text-transform: uppercase;
        margin: 14px 0 10px;
      }
      .gp-plants {
        display: flex; flex-direction: column; gap: 10px;
        margin-bottom: 20px;
      }
      .gp-plant {
        display: flex; align-items: center; gap: 14px;
        background: #F4EFE5; border-radius: 12px;
        padding: 12px 14px;
      }
      .gp-plant-em {
        font-size: 28px; line-height: 1; flex-shrink: 0;
      }
      .gp-plant-photo {
        width: 44px; height: 44px; border-radius: 10px; object-fit: cover;
        flex-shrink: 0;
      }
      .gp-plant-body { flex: 1; min-width: 0; }
      .gp-plant-name {
        font-family: 'Playfair Display', Georgia, serif;
        font-size: 16.5px; color: #2A1E12; line-height: 1.25;
      }
      .gp-plant-meta {
        font-size: 12.5px; color: #7A6248; margin-top: 2px;
        line-height: 1.4;
      }
      .gp-plant-meta .gp-dot {
        display: inline-block; width: 4px; height: 4px;
        border-radius: 50%; background: #78A07C;
        margin: 0 7px; vertical-align: middle; opacity: .6;
      }
      .gp-overflow {
        font-size: 13px; color: #7A6248; font-style: italic;
        text-align: center; padding: 6px 0 4px;
      }
      .gp-actions {
        display: flex; flex-direction: column; gap: 10px;
        margin-top: 8px;
      }
      .gp-btn-primary {
        background: #3B5838; color: #FDFAF2;
        border: none; border-radius: 12px;
        padding: 14px 22px; font-size: 15.5px;
        font-family: 'Inter', system-ui, sans-serif; font-weight: 500;
        cursor: pointer; transition: background .18s, opacity .18s;
        min-height: 48px;
      }
      .gp-btn-primary:hover { background: #4D7050; }
      .gp-btn-primary:disabled { opacity: .7; cursor: progress; }
      .gp-btn-primary[aria-busy="true"] { opacity: .7; cursor: progress; }
      .gp-btn-secondary {
        background: transparent; color: #3B5838;
        border: none; padding: 10px;
        font-family: 'Inter', system-ui, sans-serif; font-size: 14px;
        cursor: pointer; text-decoration: underline; text-underline-offset: 3px;
        text-decoration-color: rgba(59,88,56,.35);
        transition: text-decoration-color .18s;
      }
      .gp-btn-secondary:hover { text-decoration-color: rgba(59,88,56,.9); }
      .gp-success {
        text-align: center; padding: 14px 0;
        font-family: 'Playfair Display', Georgia, serif;
        font-style: italic; font-size: 17px; color: #3B5838;
      }
      @media (prefers-reduced-motion: reduce) {
        .gp-backdrop, .gp-modal { transition: none; }
      }
    `;
    document.head.appendChild(s);
  }

  function _openGardenProposalModal(draft, triggerBtn) {
    _ensureProposalStyles();

    const suggestions = (draft && Array.isArray(draft.suggestions)) ? draft.suggestions : [];
    const total = suggestions.length;
    const SHOW_MAX = 4;
    const shown = suggestions.slice(0, SHOW_MAX);
    const overflow = Math.max(0, total - SHOW_MAX);

    const backdrop = document.createElement('div');
    backdrop.className = 'gp-backdrop';
    const modal = document.createElement('div');
    modal.className = 'gp-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'gp-title');

    // Variante fallback : aucune planta fiable détectée.
    if (total === 0) {
      modal.innerHTML = `
        <div class="gp-eyebrow">Mapa del huerto</div>
        <h2 class="gp-title" id="gp-title">Verdésia no encontró suficientes plantas claras</h2>
        <p class="gp-sub">Puedes intentar con una foto más cercana o agregar plantas manualmente.</p>
        <div class="gp-actions">
          <button type="button" class="gp-btn-primary" id="gp-retry">Intentar otra foto</button>
          <button type="button" class="gp-btn-secondary" id="gp-manual">Agregar manualmente</button>
        </div>
      `;
    } else {
      const plantsHtml = shown.map(s => {
        const conf = s.confidence === 'high' ? 'Lectura clara'
                   : s.confidence === 'medium' ? 'Indicios visibles'
                   : 'Indicios discretos';
        const zone = _zoneToSpanish(s.sceneZone || 'center');
        const stage = (s.growthStage || '').toLowerCase();
        const stageLabel = stage ? ` <span class="gp-dot"></span> ${_escapeHtml(stage)}` : '';
        const photo = s.plantPhoto
          ? `<img class="gp-plant-photo" src="${_escapeAttr(s.plantPhoto)}" alt="" loading="lazy" decoding="async"
                  onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'gp-plant-em',textContent:'${_escapeAttr(s.plantEmoji || '🌱')}'}))">`
          : `<div class="gp-plant-em">${_escapeHtml(s.plantEmoji || '🌱')}</div>`;
        return `
          <div class="gp-plant">
            ${photo}
            <div class="gp-plant-body">
              <div class="gp-plant-name">${_escapeHtml(s.plantName)}</div>
              <div class="gp-plant-meta">${conf} <span class="gp-dot"></span> ${zone}${stageLabel}</div>
            </div>
          </div>
        `;
      }).join('');

      const overflowHtml = overflow > 0
        ? `<p class="gp-overflow">+ ${overflow} ${overflow === 1 ? 'planta más' : 'plantas más'}</p>`
        : '';

      modal.innerHTML = `
        <div class="gp-eyebrow">Mapa del huerto</div>
        <h2 class="gp-title" id="gp-title">Verdésia preparó una propuesta para tu <em>jardín</em></h2>
        <p class="gp-sub">Encontró algunas plantas probables. No hace falta que sea perfecto para empezar.</p>
        <div class="gp-section-title">Plantas propuestas</div>
        <div class="gp-plants">${plantsHtml}</div>
        ${overflowHtml}
        <div class="gp-actions">
          <button type="button" class="gp-btn-primary" id="gp-add">Agregar a mi jardín</button>
          <button type="button" class="gp-btn-secondary" id="gp-manual">Revisar manualmente</button>
        </div>
      `;
    }

    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);

    // Fade in
    void backdrop.offsetWidth;
    backdrop.classList.add('is-on');

    // Focus management
    const firstBtn = modal.querySelector('.gp-btn-primary');
    if (firstBtn) setTimeout(() => firstBtn.focus(), 380);

    function _closeModal(cb) {
      backdrop.classList.remove('is-on');
      setTimeout(() => {
        if (backdrop.parentNode) backdrop.parentNode.removeChild(backdrop);
        if (cb) cb();
      }, 280);
    }

    function _restoreTriggerBtn() {
      if (triggerBtn) {
        triggerBtn.disabled = false;
        triggerBtn.removeAttribute('aria-busy');
        triggerBtn.textContent = 'Preparar mapa del jardín';
      }
    }

    // Escape pour fermer (variante non-bloquante)
    function onKey(ev) {
      if (ev.key === 'Escape') {
        document.removeEventListener('keydown', onKey);
        _closeModal(_restoreTriggerBtn);
      }
    }
    document.addEventListener('keydown', onKey);

    // Fallback handlers
    const retryBtn = modal.querySelector('#gp-retry');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        document.removeEventListener('keydown', onKey);
        _closeModal(_restoreTriggerBtn);
        // L'utilisateur reste sur la page — il peut reprendre une photo
        // depuis le composer encore en haut de la page.
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
    const manualBtn = modal.querySelector('#gp-manual');
    if (manualBtn) {
      manualBtn.addEventListener('click', () => {
        document.removeEventListener('keydown', onKey);
        // On laisse le draft en sessionStorage — la page reconstruction le lit.
        location.assign('verdesia_reconstruccion.html');
      });
    }

    // CTA principal — appliquer le draft directement.
    const addBtn = modal.querySelector('#gp-add');
    if (addBtn) {
      addBtn.addEventListener('click', async () => {
        if (addBtn.disabled) return;
        addBtn.disabled = true;
        addBtn.setAttribute('aria-busy', 'true');
        addBtn.textContent = 'Agregando…';

        // Yield → laisser le bouton se repeindre avant le batch write.
        await new Promise(requestAnimationFrame);
        await new Promise(r => setTimeout(r, 50));

        console.time('verdesia:apply-draft');
        const result = (window.VerdesiaReconstruction && window.VerdesiaReconstruction.applyDraftToGarden)
          ? window.VerdesiaReconstruction.applyDraftToGarden(draft)
          : { added: 0, error: 'API missing' };
        console.timeEnd('verdesia:apply-draft');

        if (!result || !result.added) {
          addBtn.disabled = false;
          addBtn.removeAttribute('aria-busy');
          addBtn.textContent = 'Agregar a mi jardín';
          // Toast d'erreur léger (réutilise status si dispo)
          showError('No fue posible actualizar el jardín. Intenta de nuevo.');
          return;
        }

        // Confirmation douce in-modal, puis redirect.
        const actions = modal.querySelector('.gp-actions');
        if (actions) {
          actions.innerHTML = `
            <div class="gp-success" aria-live="polite">
              Tu jardín fue actualizado con ${result.added}
              ${result.added === 1 ? 'planta' : 'plantas'}.
            </div>
            <button type="button" class="gp-btn-primary" id="gp-go">Ver mi jardín</button>
          `;
          const goBtn = modal.querySelector('#gp-go');
          if (goBtn) goBtn.addEventListener('click', () => {
            location.assign('verdesia_jardin.html');
          });
        }
        document.removeEventListener('keydown', onKey);
        // Auto-redirect après 900ms si l'utilisateur ne clique pas.
        setTimeout(() => { location.assign('verdesia_jardin.html'); }, 900);
      });
    }
  }

  /* helpers locaux pour la modal */
  function _zoneToSpanish(zone) {
    const map = {
      left: 'izquierda', center: 'centro', right: 'derecha',
      foreground: 'primer plano', background: 'al fondo',
      top_left: 'arriba izquierda', top_center: 'arriba', top_right: 'arriba derecha',
      middle_left: 'izquierda', middle_right: 'derecha',
      bottom_left: 'abajo izquierda', bottom_center: 'abajo', bottom_right: 'abajo derecha',
    };
    return map[zone] || 'visible';
  }
  function _escapeHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function _escapeAttr(s) {
    return _escapeHtml(s);
  }

  /* ─── Guardar esta observación ──────────────────────────────
     Tarjeta calma al final de la lectura. Convierte los datos de la
     lectura actual en una entrada de memoria del huerto. Inmutable —
     el usuario sólo elige guardar o ignorar. */

  const buildSaveObservationCard = (data) => {
    if (!window.VerdesiaObservations || typeof window.VerdesiaObservations.save !== 'function') return null;

    const global = (data && data.global_reading) || {};
    const summary = (global.summary || '').trim();
    const concerns  = Array.isArray(global.main_concerns)   ? global.main_concerns   : [];
    const strengths = Array.isArray(global.main_strengths)  ? global.main_strengths  : [];
    const actions   = Array.isArray(global.priority_actions)? global.priority_actions: [];

    // Si no hay nada substantivo, no ofrecer el guardado.
    if (!summary && concerns.length === 0 && strengths.length === 0 && actions.length === 0) {
      return null;
    }

    const card = el('article', 'result-card result-card--save');
    card.appendChild(el('h2', 'result-card-eyebrow', 'Memoria del huerto'));
    card.appendChild(el('p', 'save-line',
      'Guarda esta lectura para volver a verla más adelante — un testimonio de cómo estaba tu jardín hoy.'));

    const btn = document.createElement('button');
    btn.className = 'save-obs-btn';
    btn.type = 'button';
    btn.textContent = 'Guardar esta observación';
    card.appendChild(btn);

    const status = el('p', 'save-status');
    status.hidden = true;
    card.appendChild(status);

    btn.addEventListener('click', async () => {
      btn.disabled = true;
      btn.textContent = 'Guardando…';

      const profile = (() => {
        try { return JSON.parse(localStorage.getItem('verdesia_user_profile')) || {}; }
        catch { return {}; }
      })();

      const seasonKey = (window.SemencaGarden && window.SemencaGarden.getCurrentSeason)
        ? window.SemencaGarden.getCurrentSeason()
        : '';

      // Mezcla concerns + strengths para "lo importante" (max 3, prioridad concerns).
      const findings = concerns.concat(strengths).slice(0, 3);

      const obs = {
        createdAt:         new Date().toISOString(),
        image:             currentImageDataUrl || null,
        summary,
        globalHealth:      global.overall_health || 'unclear',
        importantFindings: findings,
        nextActions:       actions.slice(0, 3),
        season:            seasonKey,
        region:            profile.region || '',
        sceneType:         data.scene_type || '',
      };

      // Détecter si c'est la PREMIÈRE observation pour cet utilisateur —
      // on enrichit alors le message de confirmation avec un renfort
      // émotionnel calme : "Tu jardín comenzó a construir su memoria."
      // Ce moment psychologique est important : l'utilisateur comprend
      // que l'observation n'est pas un fichier mort, c'est le début d'une
      // continuité. On le dit une seule fois — au save initial.
      const wasFirst = window.VerdesiaObservations.count() === 0;
      const saved = await window.VerdesiaObservations.save(obs);

      if (saved) {
        // Memoriza el id para que la reconstrucción pueda vincularse.
        _lastSavedObservationId = saved.id;
        btn.hidden = true;
        status.hidden = false;
        const baseLine = wasFirst
          ? 'Tu jardín comenzó a construir su memoria.'
          : 'Observación guardada en tu memoria del huerto.';
        status.innerHTML = baseLine + ' ' +
                           '<a class="plus-soft-cta" href="verdesia_observaciones.html">Ver memoria →</a>';
      } else {
        btn.disabled = false;
        btn.textContent = 'Guardar esta observación';
        status.hidden = false;
        status.textContent = 'No fue posible guardar la observación. Intenta de nuevo en un momento.';
        status.style.color = 'var(--rust)';
      }
    });

    return card;
  };

  const hideResult = () => {
    els.result.hidden = true;
    els.result.innerHTML = '';
    if (els.contribution) {
      // Legacy slot: kept in HTML for backward compat, never populated.
      els.contribution.hidden = true;
      els.contribution.innerHTML = '';
    }
  };

})();
