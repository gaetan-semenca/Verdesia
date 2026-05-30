/* ══════════════════════════════════════════════════════════════
   VERDÉSIA — Service Worker

   Minimal, calm, maintainable. Three caches:
     - SHELL   : precache of the static app shell (HTML + JS + manifest + icons)
     - PHOTOS  : cache-first store for photos/ (rich and many — never refetch)
     - RUNTIME : stale-while-revalidate fallback for anything else under scope

   Versioning: bump SW_VERSION whenever shell assets change. Old caches are
   pruned on activate.

   Update flow: a new SW takes control immediately (skipWaiting + clients.claim).
   Pages re-fetch their HTML from network-first, so users always get fresh shell
   on next navigation while keeping previously visited content available offline.

   Naming note: cache namespaces use the `verdesia-*` prefix. Any older
   `semenca-*` caches (from versions before the rename sprint) are pruned
   on activate by the keep-set logic.
   ══════════════════════════════════════════════════════════════ */

const SW_VERSION = 'v37-recon-feedback-2026-05-30';
const SHELL_CACHE   = `verdesia-shell-${SW_VERSION}`;
const RUNTIME_CACHE = `verdesia-runtime-${SW_VERSION}`;
// Las fotos son inmutables (mismo nombre = misma imagen, nunca cambian
// in-place). Usamos una clave estable para NO purgar ~17 MB de fotos
// cada vez que actualizamos el shell. Si alguna foto se reemplaza por
// otra con el mismo nombre, basta con bumpear esta clave a 'v2'.
const PHOTOS_CACHE = 'verdesia-photos-stable';

const SHELL_ASSETS = [
  './',
  './verdesia_landing.html',
  './verdesia_today.html',
  './verdesia_explorer.html',
  './verdesia_plante.html',
  './verdesia_jardin.html',
  './verdesia_brote.html',
  './verdesia_observaciones.html',
  './verdesia_reconstruccion.html',
  './plants.js',
  './garden.js',
  './storage.js',
  './regions.js',
  './i18n.js',
  './onboarding.js',
  './brote_app.js',
  './verdesia_intro.html',
  './verdesia_intro.css',
  './verdesia_intro.js',
  './verdesia_profile.js',
  './verdesia_region_config.js',
  './verdesia_plan.js',
  './verdesia_plus.html',
  './observations.js',
  './garden_reconstruction.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png',
  './icons/icon-180-apple.png',
  './icons/favicon-32.png',
];

/* ─── install: precache shell ──────────────────────────────── */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE)
      .then((cache) => cache.addAll(SHELL_ASSETS))
      .then(() => self.skipWaiting())
  );
});

/* ─── activate: prune old caches, take control ─────────────── */
self.addEventListener('activate', (event) => {
  const keep = new Set([SHELL_CACHE, PHOTOS_CACHE, RUNTIME_CACHE]);
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(names.map((n) => keep.has(n) ? null : caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

/* ─── fetch: route by request type ─────────────────────────── */
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Only handle same-origin requests
  if (url.origin !== self.location.origin) return;

  // Photos: cache-first (forever, until SW version bumps)
  if (url.pathname.includes('/photos/')) {
    event.respondWith(cacheFirst(req, PHOTOS_CACHE));
    return;
  }

  // HTML navigations: network-first (always try fresh shell), fallback to cache
  if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(networkFirst(req, SHELL_CACHE));
    return;
  }

  // Everything else (JS, manifest, icons): stale-while-revalidate
  event.respondWith(staleWhileRevalidate(req, RUNTIME_CACHE));
});

/* ─── strategies ────────────────────────────────────────────── */

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response && response.ok) cache.put(request, response.clone());
    return response;
  } catch (err) {
    // Offline and not cached — let the browser show its broken-image state
    // (the explorer/plant page renderer falls back to emoji on image error).
    return Response.error();
  }
}

async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const response = await fetch(request);
    if (response && response.ok) cache.put(request, response.clone());
    return response;
  } catch (err) {
    const cached = await cache.match(request);
    if (cached) return cached;
    // Last-ditch fallback: serve the landing page from cache
    const landing = await cache.match('./verdesia_landing.html');
    if (landing) return landing;
    return Response.error();
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const fetchPromise = fetch(request)
    .then((response) => {
      if (response && response.ok) cache.put(request, response.clone());
      return response;
    })
    .catch(() => cached); // offline + no cache → returns undefined
  return cached || fetchPromise;
}
