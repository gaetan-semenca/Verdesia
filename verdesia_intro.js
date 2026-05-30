/* ══════════════════════════════════════════════════════════════
   VERDÉSIA — Intro / onboarding logic

   - Secuencia visual de 10 s en loop (4 paneles × 2.5 s, fade lento)
   - Captura nombre / región / foto (opcional)
     (el email se pedirá más adelante, cuando exista un sistema
     servidor capaz de aprovecharlo — evitamos pedirlo prematuramente)
   - Validación suave
   - Compresión de foto antes de guardar (data URL)
   - Guarda perfil en localStorage bajo `verdesia_user_profile`
   - Mapea región a zona chilena para silenciar el viejo modal de
     `SemencaOnboarding` (cuando es posible)
   - Soporta modo edición vía ?edit=1 (precarga campos)
   - Redirige a la landing tras submit
   ══════════════════════════════════════════════════════════════ */

(() => {

  const PROFILE_KEY = 'verdesia_user_profile';
  const REDIRECT_AFTER = 'verdesia_landing.html';
  const VISUAL_INTERVAL_MS = 2500;
  const VISUAL_PANEL_COUNT = 4;

  /* ─── 1. Visual sequence ─────────────────────────────────────── */

  const panels = document.querySelectorAll('.seq-panel');
  const dots   = document.querySelectorAll('.seq-dots span');
  let current  = 0;

  const setPanel = (i) => {
    panels.forEach((p, k) => p.classList.toggle('on', k === i));
    dots.forEach((d, k)   => d.classList.toggle('on', k === i));
  };
  setPanel(0);

  if (panels.length > 1) {
    setInterval(() => {
      current = (current + 1) % VISUAL_PANEL_COUNT;
      setPanel(current);
    }, VISUAL_INTERVAL_MS);
  }

  /* ─── 2. Form elements ───────────────────────────────────────── */

  const els = {
    form:        document.getElementById('introForm'),
    name:        document.getElementById('fName'),
    region:      document.getElementById('fRegion'),
    photoInput:  document.getElementById('fPhoto'),
    photoImg:    document.getElementById('fPhotoImg'),
    photoEmpty:  document.getElementById('fPhotoEmpty'),
    photoPrev:   document.getElementById('fPhotoPreview'),
    photoClear:  document.getElementById('fPhotoClear'),
    error:       document.getElementById('fError'),
    submit:      document.getElementById('fSubmit'),
  };

  let currentPhotoDataUrl = null;

  /* ─── 2bis. Build region <select> from VERDESIA_REGION_CONFIG ──
     Source de vérité unique : regiones chilenas (SEMENCA_ZONES) +
     entradas internacionales. Si el config no está disponible, el
     <select> queda vacío salvo el placeholder — el usuario verá un
     mensaje claro y nada se corrompe. */
  (function populateRegionSelect() {
    const cfg = window.VERDESIA_REGION_CONFIG;
    if (!cfg || !Array.isArray(cfg.regions) || !cfg.regions.length) return;

    const buildGroup = (label, regions) => {
      const og = document.createElement('optgroup');
      og.label = label;
      for (const r of regions) {
        const opt = document.createElement('option');
        opt.value = r.id;
        opt.textContent = r.label;
        og.appendChild(opt);
      }
      return og;
    };

    if (cfg.chileanRegions && cfg.chileanRegions.length) {
      els.region.appendChild(buildGroup('Chile', cfg.chileanRegions));
    }
    if (cfg.intlRegions && cfg.intlRegions.length) {
      els.region.appendChild(buildGroup('Internacional', cfg.intlRegions));
    }
  })();

  /* ─── 3. Photo handling (declared before prefill — TDZ-safe) ── */

  const showPhoto = (dataUrl) => {
    els.photoImg.src = dataUrl;
    els.photoImg.hidden = false;
    els.photoEmpty.hidden = true;
    els.photoPrev.classList.add('has-image');
    els.photoClear.hidden = false;
  };

  const clearPhoto = () => {
    currentPhotoDataUrl = null;
    els.photoImg.removeAttribute('src');
    els.photoImg.hidden = true;
    els.photoEmpty.hidden = false;
    els.photoPrev.classList.remove('has-image');
    els.photoClear.hidden = true;
    els.photoInput.value = '';
  };

  /* ─── 4. Edit mode · prefill ─────────────────────────────────── */

  const params = new URLSearchParams(location.search);
  const isEdit = params.get('edit') === '1';

  const safeRead = () => {
    try {
      const raw = localStorage.getItem(PROFILE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  };

  if (isEdit) {
    const existing = safeRead();
    if (existing) {
      els.name.value   = existing.name  || '';
      // Resolve region: new ids ('rm','intl_belgium'…) or legacy labels
      // ('Chile central','Bélgica'…) both supported via the config façade.
      const cfg = window.VERDESIA_REGION_CONFIG;
      const resolvedId = cfg && cfg.resolveRegionId
        ? cfg.resolveRegionId(existing.region)
        : null;
      els.region.value = resolvedId || existing.region || '';
      if (existing.photo && typeof existing.photo === 'string') {
        currentPhotoDataUrl = existing.photo;
        showPhoto(existing.photo);
      }
      els.submit.textContent = 'Guardar cambios';
    }
  }

  // Compress: square-crop the center, resize to maxEdge, JPEG quality 0.82
  const compressPhoto = (file, maxEdge = 400, quality = 0.82) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('read-failed'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('decode-failed'));
      img.onload = () => {
        const side = Math.min(img.width, img.height);
        const sx = (img.width  - side) / 2;
        const sy = (img.height - side) / 2;
        const target = Math.min(maxEdge, side);
        const canvas = document.createElement('canvas');
        canvas.width = target; canvas.height = target;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, sx, sy, side, side, 0, 0, target, target);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });

  els.photoInput.addEventListener('change', async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      showError('Ese archivo no parece una imagen.');
      return;
    }
    try {
      const dataUrl = await compressPhoto(file, 400, 0.82);
      currentPhotoDataUrl = dataUrl;
      showPhoto(dataUrl);
      hideError();
    } catch (err) {
      console.warn('[verdesia-intro] photo compress failed:', err);
      showError('No se pudo leer la imagen.');
    }
  });

  els.photoClear.addEventListener('click', clearPhoto);

  /* ─── 5. Validation + submit ─────────────────────────────────── */

  const showError = (msg) => {
    els.error.textContent = msg;
    els.error.hidden = false;
  };
  const hideError = () => {
    els.error.hidden = true;
    els.error.textContent = '';
  };

  const isEmailish = (s) =>
    typeof s === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s.trim());

  els.form.addEventListener('submit', (e) => {
    e.preventDefault();
    hideError();

    const name     = (els.name.value   || '').trim();
    const regionId = (els.region.value || '').trim();

    if (!name)              return showError('Indícanos cómo te llamas.');
    if (!regionId)          return showError('Elige tu región.');

    const cfg = window.VERDESIA_REGION_CONFIG;
    const reg = cfg && cfg.getRegionById ? cfg.getRegionById(regionId) : null;
    if (!reg) return showError('Región no reconocida. Intenta de nuevo.');

    const existing = safeRead();
    const now = new Date().toISOString();

    // Build the profile object first so we keep the same payload contract.
    // L'email reste accepté en lecture pour les profils existants — on ne
    // l'écrase pas. Il n'est plus demandé à l'intro (UX simplification :
    // friction prématurée sans backend qui en bénéficie). Il pourra
    // revenir plus tard via un canal dédié (ex : email saisonnier opt-in).
    const profile = {
      name,
      email: (existing && existing.email) || '',
      region: reg.id,                     // canonical id (matches VERDESIA_REGION_CONFIG)
      photo: currentPhotoDataUrl,
      createdAt: (existing && existing.createdAt) || now,
      updatedAt: now,
    };

    let saved = false;
    try {
      localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
      saved = true;
    } catch (err) {
      console.warn('[verdesia-intro] localStorage write failed:', err);
    }

    // Canonical zone — same call regions.js + onboarding.js + all app pages
    // already read from. This is the single point of alignment.
    try {
      if (window.SemencaStorage && typeof window.SemencaStorage.setZone === 'function') {
        window.SemencaStorage.setZone(reg.storageName);
      }
    } catch (err) { /* silencioso — el perfil sigue siendo válido */ }

    if (!saved) {
      showError('No se pudo guardar tu perfil en este navegador. Intenta de nuevo.');
      return;
    }

    // Soft redirect — tiny delay so the button state can settle.
    els.submit.disabled = true;
    els.submit.textContent = isEdit ? 'Guardado' : 'Entrando…';
    setTimeout(() => { window.location.href = REDIRECT_AFTER; }, 220);
  });

})();
