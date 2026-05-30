/* ══════════════════════════════════════════════════════════════
   VERDÉSIA — Módulo de perfil global

   Carga única en todas las páginas de app. Funciones:
     1. Si no hay perfil en localStorage → redirige a verdesia_intro.html
        (excepto si ya estamos allí, o si ?dev=1 en la URL).
     2. Si hay perfil → monta un pequeño widget en `.nav-r` con
        avatar + nombre + saludo personalizado según la página.
     3. Click sobre el widget → /verdesia_intro.html?edit=1

   Sigue el patrón calmo del resto de la app:
     - estilos inyectados una vez (no archivo CSS aparte)
     - sin framework, sin dependencias
     - no rompe si SemencaStorage / SEMENCA_PLANTS no existen
     - silencioso si localStorage no está disponible
   ══════════════════════════════════════════════════════════════ */

(() => {

  const PROFILE_KEY = 'verdesia_user_profile';
  const INTRO_PAGE  = 'verdesia_intro.html';

  /* ─── 0. Dev guard ────────────────────────────────────────────
     Si la URL contiene ?dev=1 o estamos en file://, no hacemos
     redirect ni montaje agresivo — útil para depurar páginas
     individuales sin pasar por el onboarding. */
  const params = new URLSearchParams(location.search);
  const isDev  = params.get('dev') === '1' || location.protocol === 'file:';

  /* ─── 1. Read profile ─────────────────────────────────────── */

  const safeReadProfile = () => {
    try {
      const raw = localStorage.getItem(PROFILE_KEY);
      if (!raw) return null;
      const p = JSON.parse(raw);
      return (p && typeof p === 'object' && p.name) ? p : null;
    } catch { return null; }
  };

  const profile = safeReadProfile();

  /* ─── 2. Redirect if absent ──────────────────────────────── */

  const currentFile = (location.pathname.split('/').pop() || '').toLowerCase();
  const onIntroPage = currentFile === INTRO_PAGE.toLowerCase();

  if (!profile && !onIntroPage && !isDev) {
    // Soft redirect — preserve any current page so the user can come
    // back if they cancel intro. Keeping it simple for the MVP: just go.
    window.location.replace(INTRO_PAGE);
    return;
  }

  if (!profile) return; // dev mode or on intro page → nothing to render

  /* ─── 3. Page-specific greeting ─────────────────────────── */

  const firstName = (profile.name || '').trim().split(/\s+/)[0] || profile.name;

  const greetings = {
    'verdesia_landing.html':       `${firstName}, tu jardín te espera.`,
    'verdesia_today.html':         `${firstName}, veamos qué necesita tu jardín hoy.`,
    'verdesia_jardin.html':        `${firstName}, aquí crece tu memoria viva.`,
    'verdesia_explorer.html':      `${firstName}, explora el catálogo vegetal.`,
    'verdesia_plante.html':        `${firstName}, una ficha para tu memoria.`,
    'verdesia_brote.html':         `${firstName}, observemos tu huerto con calma.`,
  };
  const greeting = greetings[currentFile] || `Hola, ${firstName}.`;

  /* ─── 4. Inject styles once ───────────────────────────────── */

  const STYLE_ID = 'verdesia-profile-styles';
  if (!document.getElementById(STYLE_ID)) {
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .vd-profile {
        display: inline-flex; align-items: center; gap: 10px;
        padding: 4px 12px 4px 4px;
        background: transparent;
        border: 1px solid transparent;
        border-radius: 100px;
        cursor: pointer;
        font-family: inherit;
        color: var(--soil, #2A1E12);
        text-decoration: none;
        transition: background .18s, border-color .18s;
        max-width: 320px;
      }
      .vd-profile:hover {
        background: rgba(42,30,18,.04);
        border-color: rgba(42,30,18,.08);
      }
      .vd-profile-avatar {
        width: 28px; height: 28px;
        border-radius: 50%;
        background: var(--moss, #3B5838);
        color: var(--white, #FDFAF2);
        display: flex; align-items: center; justify-content: center;
        font-family: var(--font-d, 'Playfair Display', serif);
        font-size: 13.5px;
        line-height: 1;
        text-transform: uppercase;
        overflow: hidden;
        flex-shrink: 0;
        box-shadow: 0 1px 2px rgba(42,30,18,.18);
      }
      .vd-profile-avatar img {
        width: 100%; height: 100%;
        object-fit: cover;
        display: block;
      }
      .vd-profile-text {
        display: flex; flex-direction: column;
        line-height: 1.1;
        min-width: 0;
      }
      .vd-profile-name {
        font-family: var(--font-b, 'Inter', sans-serif);
        font-size: 12.5px;
        font-weight: 500;
        color: var(--soil, #2A1E12);
        white-space: nowrap;
        overflow: hidden; text-overflow: ellipsis;
      }
      .vd-profile-greet {
        font-family: var(--font-d, 'Playfair Display', serif);
        font-style: italic;
        font-size: 11px;
        color: var(--sage, #78A07C);
        margin-top: 2px;
        white-space: nowrap;
        overflow: hidden; text-overflow: ellipsis;
        max-width: 220px;
      }
      @media (max-width: 720px) {
        .vd-profile { padding: 4px; gap: 8px; }
        .vd-profile-greet { display: none; }
        .vd-profile-name { font-size: 12px; max-width: 90px; }
      }

      /* Enlace discreto a Verdésia Plus — visible sólo para tier free.
         Estilo mono, sage, sin botón gritón, vive al lado del widget. */
      .vd-plus-link {
        font-family: var(--font-m, 'DM Mono', monospace);
        font-size: 9.5px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        color: var(--moss, #3B5838);
        text-decoration: none;
        padding: 4px 10px;
        border-radius: 100px;
        border: 1px solid rgba(59,88,56,.22);
        transition: background .18s, color .18s, border-color .18s;
        white-space: nowrap;
      }
      .vd-plus-link:hover {
        background: var(--moss, #3B5838);
        color: var(--white, #FDFAF2);
        border-color: var(--moss, #3B5838);
      }
      @media (max-width: 720px) {
        .vd-plus-link { font-size: 9px; padding: 3px 8px; letter-spacing: 1.2px; }
      }
      @media (max-width: 380px) {
        .vd-plus-link { display: none; }
      }
    `;
    document.head.appendChild(style);
  }

  /* ─── 5. Build + mount widget ─────────────────────────────── */

  const mount = () => {
    // Most app pages use `.nav-r`; the landing page uses `.nav-right`.
    const navR = document.querySelector('.nav-r, .nav-right');
    if (!navR || document.querySelector('.vd-profile')) return;

    const a = document.createElement('a');
    a.className = 'vd-profile';
    a.href = INTRO_PAGE + '?edit=1';
    a.setAttribute('aria-label', `Editar perfil de ${firstName}`);
    a.title = 'Editar perfil';

    // Avatar — photo or initial
    const av = document.createElement('span');
    av.className = 'vd-profile-avatar';
    if (profile.photo && typeof profile.photo === 'string' && profile.photo.startsWith('data:image/')) {
      const img = document.createElement('img');
      img.src = profile.photo;
      img.alt = '';
      av.appendChild(img);
    } else {
      av.textContent = (firstName[0] || '·').toUpperCase();
    }

    // Text — name + greeting
    const txt = document.createElement('span');
    txt.className = 'vd-profile-text';
    const nm = document.createElement('span');
    nm.className = 'vd-profile-name';
    nm.textContent = firstName;
    const gr = document.createElement('span');
    gr.className = 'vd-profile-greet';
    gr.textContent = greeting;
    txt.appendChild(nm);
    txt.appendChild(gr);

    a.appendChild(av);
    a.appendChild(txt);

    // Prepend so the cog stays on the far right.
    navR.insertBefore(a, navR.firstChild);

    // Enlace Verdésia Plus — sólo para tier free. Si VerdesiaPlan no
    // está cargado en esta página, asumimos free (más prudente que
    // ocultar). Si el usuario ya es premium, no mostramos nada.
    const tier = (window.VerdesiaPlan && window.VerdesiaPlan.getTier && window.VerdesiaPlan.getTier()) || 'free';
    if (tier !== 'premium') {
      const plus = document.createElement('a');
      plus.className = 'vd-plus-link';
      plus.href = 'verdesia_plus.html';
      plus.textContent = 'Verdésia Plus';
      plus.setAttribute('aria-label', 'Descubrir Verdésia Plus');
      // Se inserta después del widget perfil, antes de cualquier otro
      // elemento eventual de .nav-r (cog ya retirado pero defensivo).
      a.insertAdjacentElement('afterend', plus);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount, { once: true });
  } else {
    mount();
  }

})();
