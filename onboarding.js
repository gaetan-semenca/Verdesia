/* ══════════════════════════════════════════════════════════════
   VERDÉSIA — Onboarding legacy (filet de sécurité)

   Le vrai onboarding utilisateur se fait dans verdesia_intro.html
   (profil + région). Ce module reste actif comme garde-fou : si
   la zone chilienne n'a pas pu être déterminée (cas rare), la
   modale legacy de sélection de région peut encore se déclencher
   au boot via SemencaOnboarding.bootstrap().

   Uso :
     // bootstrap automático en páginas de app
     SemencaOnboarding.bootstrap();

   La fonction openSettings() et son bouton d'engrenage ont été
   retirés — l'utilisateur édite désormais son profil et sa région
   via le widget du profil (→ verdesia_intro.html?edit=1).

   Dépendances :
     i18n.js, storage.js, plants.js (SEMENCA_ZONES)
   ══════════════════════════════════════════════════════════════ */

(function() {

  const I18n    = window.SemencaI18n;
  const Storage = window.SemencaStorage;
  const ZONES   = window.SEMENCA_ZONES || [];

  let _modalEl  = null;
  let _stylesInjected = false;

  /* ─── Estilos inyectados una sola vez ─────────────── */
  function injectStyles() {
    if (_stylesInjected) return;
    _stylesInjected = true;
    const css = `
.sob-back {
  position: fixed; inset: 0; z-index: 9500;
  background: rgba(42,30,18,.48);
  backdrop-filter: blur(8px);
  display: flex; align-items: center; justify-content: center;
  padding: 24px;
  opacity: 0; transition: opacity .25s cubic-bezier(.16,1,.3,1);
}
.sob-back.open { opacity: 1; }

.sob-modal {
  position: relative;
  background: var(--white, #FDFAF2);
  color: var(--soil, #2A1E12);
  border-radius: 16px;
  padding: 38px 36px 32px;
  width: 100%; max-width: 460px;
  box-shadow: 0 24px 64px rgba(42,30,18,.22);
  font-family: var(--font-b, 'DM Sans', sans-serif);
  transform: translateY(14px) scale(.985);
  transition: transform .35s cubic-bezier(.16,1,.3,1);
}
.sob-back.open .sob-modal { transform: none; }

.sob-eyebrow {
  font-family: var(--font-m, 'DM Mono', monospace);
  font-size: 9.5px; letter-spacing: 2px; text-transform: uppercase;
  color: var(--sage, #78A07C);
  margin-bottom: 14px;
  display: flex; align-items: center; gap: 8px;
}
.sob-eyebrow::before {
  content: ''; width: 18px; height: 1px; background: var(--sage, #78A07C);
}

.sob-title {
  font-family: var(--font-d, 'Playfair Display', Georgia, serif);
  font-size: 28px; line-height: 1.15; letter-spacing: -.4px;
  color: var(--soil, #2A1E12);
  margin-bottom: 10px;
}
.sob-title em { color: var(--moss, #3B5838); font-style: italic; }

.sob-sub {
  font-size: 14px; font-weight: 300; line-height: 1.7;
  color: var(--bark-lt, #7A6248);
  margin-bottom: 24px; max-width: 380px;
}

/* Selector de idioma — dos tarjetas grandes */
.sob-lang-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 10px;
  margin-bottom: 8px;
}
.sob-lang-btn {
  padding: 18px 14px; border-radius: 12px;
  background: var(--cream, #F4EFE5); border: 1px solid rgba(42,30,18,.08);
  cursor: pointer; transition: border-color .18s, background .18s, transform .12s;
  font-family: var(--font-b, 'DM Sans', sans-serif);
  text-align: center; color: var(--soil, #2A1E12);
}
.sob-lang-btn:hover { border-color: var(--sage, #78A07C); transform: translateY(-2px); }
.sob-lang-btn.on    { border-color: var(--moss, #3B5838); background: var(--white, #FDFAF2); box-shadow: 0 0 0 2px rgba(59,88,56,.12); }
.sob-lang-flag { font-size: 26px; line-height: 1; margin-bottom: 8px; }
.sob-lang-name { font-size: 14.5px; font-weight: 500; }

/* Selector de región — sola lista */
.sob-field-label {
  font-family: var(--font-m, 'DM Mono', monospace);
  font-size: 9px; letter-spacing: 1.5px; text-transform: uppercase;
  color: var(--sage, #78A07C);
  margin-bottom: 8px; display: block;
}
.sob-select {
  width: 100%; padding: 13px 14px; min-height: 48px;
  background: var(--cream, #F4EFE5);
  border: 1px solid rgba(42,30,18,.1); border-radius: 10px;
  font-family: var(--font-b, 'DM Sans', sans-serif);
  font-size: 15px; color: var(--soil, #2A1E12);
  outline: none; transition: border-color .18s, box-shadow .18s;
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1.5l5 5 5-5' stroke='%23A9C8AD' stroke-width='1.5' fill='none' stroke-linecap='round'/></svg>");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 38px;
}
.sob-select:focus { border-color: var(--sage, #78A07C); box-shadow: 0 0 0 3px rgba(120,160,124,.18); }

.sob-field { margin-bottom: 22px; }

/* Botones */
.sob-actions { display: flex; gap: 10px; margin-top: 18px; flex-wrap: wrap; }
.sob-btn {
  padding: 13px 22px; border-radius: 100px;
  font-family: var(--font-b, 'DM Sans', sans-serif);
  font-size: 14px; font-weight: 500;
  border: none; cursor: pointer; transition: background .18s, transform .12s;
  min-height: 46px;
}
.sob-btn-primary {
  background: var(--moss, #3B5838); color: var(--white, #FDFAF2);
}
.sob-btn-primary:hover { background: var(--soil, #2A1E12); transform: translateY(-1px); }
.sob-btn-primary:disabled { opacity: .45; cursor: not-allowed; transform: none; background: var(--moss, #3B5838); }
.sob-btn-secondary {
  background: transparent; color: var(--bark-lt, #7A6248);
  border: 1px solid rgba(42,30,18,.12);
}
.sob-btn-secondary:hover { background: var(--cream, #F4EFE5); color: var(--soil, #2A1E12); }

/* Progreso (paso X de N) */
.sob-progress {
  font-family: var(--font-m, 'DM Mono', monospace);
  font-size: 9px; letter-spacing: 1.5px; text-transform: uppercase;
  color: var(--sage-lt, #A9C8AD);
  margin-top: 22px; text-align: center;
}

/* Cerrar (esquina) */
.sob-close {
  position: absolute; top: 14px; right: 14px;
  background: transparent; border: none; cursor: pointer;
  width: 32px; height: 32px; border-radius: 50%;
  color: var(--bark-lt, #7A6248); font-size: 20px;
  display: flex; align-items: center; justify-content: center;
  transition: background .15s, color .15s;
}
.sob-close:hover { background: var(--cream, #F4EFE5); color: var(--soil, #2A1E12); }

@media (max-width: 480px) {
  .sob-modal { padding: 32px 22px 24px; }
  .sob-title { font-size: 24px; }
  .sob-sub   { font-size: 13.5px; }
}

`;
    const style = document.createElement('style');
    style.id = 'semenca-onboarding-styles';
    style.textContent = css;
    document.head.appendChild(style);
  }

  /* ─── Construir el HTML del modal según el modo ─── */
  /*  UI ahora solo en español. La selección de idioma queda oculta
      pero i18n.js sigue intacto por si más adelante se reactiva.   */
  function renderHtml(mode, state) {
    const isFirstUse = (mode === 'first-use');

    if (isFirstUse) {
      // Primer uso: pedimos solo la región (idioma se fija en 'es' al bootstrap)
      return `
        <div class="sob-eyebrow">Verdésia</div>
        <h2 class="sob-title">${I18n.t('onboarding.regionTitle')}</h2>
        <p class="sob-sub">${I18n.t('onboarding.regionSub')}</p>
        <div class="sob-field">
          <label class="sob-field-label" for="sobZone">${I18n.t('settings.regionLabel')}</label>
          <select class="sob-select" id="sobZone">
            <option value="" disabled ${!state.zone?'selected':''}>${I18n.t('onboarding.regionPlaceholder')}</option>
            ${ZONES.map(z => `<option value="${z.name}"${state.zone===z.name?' selected':''}>${z.name}</option>`).join('')}
          </select>
        </div>
        <div class="sob-actions">
          <button class="sob-btn sob-btn-primary" id="sobContinue" ${!state.zone?'disabled':''}>${I18n.t('onboarding.continueLbl')}</button>
        </div>
      `;
    }

    // SETTINGS mode — sólo región + cerrar
    return `
      <button class="sob-close" id="sobClose" aria-label="${I18n.t('actions.close')}">×</button>
      <div class="sob-eyebrow">Verdésia</div>
      <h2 class="sob-title">${I18n.t('settings.title')}</h2>
      <p class="sob-sub">${I18n.t('settings.sub')}</p>

      <div class="sob-field">
        <label class="sob-field-label" for="sobZone">${I18n.t('settings.regionLabel')}</label>
        <select class="sob-select" id="sobZone">
          <option value="" disabled ${!state.zone?'selected':''}>${I18n.t('onboarding.regionPlaceholder')}</option>
          ${ZONES.map(z => `<option value="${z.name}"${state.zone===z.name?' selected':''}>${z.name}</option>`).join('')}
        </select>
      </div>

      <div class="sob-actions">
        <button class="sob-btn sob-btn-primary" id="sobContinue">${I18n.t('settings.save')}</button>
        <button class="sob-btn sob-btn-secondary" id="sobCloseBtn">${I18n.t('settings.close')}</button>
      </div>
    `;
  }

  /* ─── Render del modal ─── */
  function rebuild(mode, state) {
    if (!_modalEl) return;
    _modalEl.querySelector('.sob-modal').innerHTML = renderHtml(mode, state);
    bindEvents(mode, state);
  }

  /* ─── Eventos del modal ─── */
  function bindEvents(mode, state) {
    const root = _modalEl;
    // (Selector de idioma desactivado — UI sólo en español)

    // Selector de zona
    const zoneSel = root.querySelector('#sobZone');
    if (zoneSel) {
      zoneSel.addEventListener('change', () => {
        state.zone = zoneSel.value;
        const cont = root.querySelector('#sobContinue');
        if (cont) cont.disabled = !state.zone;
      });
    }

    // Continuar / Guardar
    // Storage.setZone dispara semenca:zonechange automáticamente si la
    // zona cambia — no replicamos aquí para evitar double-dispatch.
    const cont = root.querySelector('#sobContinue');
    if (cont) {
      cont.addEventListener('click', () => {
        if (!state.zone) return;
        Storage.setZone(state.zone);
        close();
      });
    }

    // Cerrar (solo en settings)
    const closeBtn = root.querySelector('#sobClose');
    if (closeBtn) closeBtn.addEventListener('click', close);
    const closeBtn2 = root.querySelector('#sobCloseBtn');
    if (closeBtn2) closeBtn2.addEventListener('click', close);
  }

  function close() {
    if (!_modalEl) return;
    _modalEl.classList.remove('open');
    const el = _modalEl;
    setTimeout(() => { if (el && el.parentNode) el.parentNode.removeChild(el); }, 250);
    _modalEl = null;
  }

  function show(mode) {
    injectStyles();
    if (_modalEl) close();

    const state = {
      lang: 'es',
      zone: Storage.getZone && Storage.hasZone() ? Storage.getZone() : '',
    };

    _modalEl = document.createElement('div');
    _modalEl.className = 'sob-back';
    _modalEl.innerHTML = '<div class="sob-modal" role="dialog" aria-modal="true"></div>';
    document.body.appendChild(_modalEl);
    rebuild(mode, state);
    // Forzar reflow para que la transición funcione
    void _modalEl.offsetWidth;
    _modalEl.classList.add('open');
  }

  function bootstrap() {
    // UI sólo en español. Fijamos el idioma de forma transparente y sólo
    // pedimos región en el onboarding.
    if (Storage.getLang && Storage.getLang() !== 'es') {
      Storage.setLang('es');
    } else if (!Storage.hasLang()) {
      Storage.setLang('es');
    }
    if (!Storage.hasZone()) {
      show('first-use');
    }
  }

  window.SemencaOnboarding = { bootstrap, show };

  // Inyectar estilos al cargar el script para que la modal legacy esté
  // disponible si bootstrap() la déclenche.
  if (typeof document !== 'undefined' && document.head) {
    injectStyles();
  } else if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', injectStyles, { once: true });
  }

})();
