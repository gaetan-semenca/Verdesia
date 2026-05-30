# Verdésia

> Un cuaderno botánico tranquilo para huertos y patios chilenos.

Verdésia es una PWA mobile-first que acompaña al jardinero chileno
a lo largo del año: ficha de plantas, calendario de siembra estacional,
mapa del huerto, lectura visual asistida por IA, y memoria de observaciones.

No es un SaaS. No tiene dashboards. No gamifica. No empuja a hacer más.
Se siente como una libreta de jardín — calmada, botánica, humana.

---

## Stack

- HTML + CSS + JavaScript vanilla
- Sin framework, sin build step, sin bundler
- Service Worker + manifest (PWA installable)
- Función serverless en Vercel (`Brote/api/diagnose.js`) — OpenAI Vision
- localStorage para el jardín del usuario (sin login, sin servidor de datos)

## Páginas principales

| Archivo | Rol |
|---|---|
| `verdesia_landing.html` | Inicio público |
| `verdesia_intro.html` | Onboarding regional (primer visita) |
| `verdesia_today.html` | Hoy en tu jardín — consejo estacional |
| `verdesia_jardin.html` | Mi jardín — grid 15×15 + plantas vivas |
| `verdesia_explorer.html` | Catálogo de plantas (filtros, fichas) |
| `verdesia_plante.html` | Ficha de una planta (siembra, cuidados, recolección) |
| `verdesia_brote.html` | Lectura del huerto — foto → diagnóstico IA |
| `verdesia_reconstruccion.html` | Reconstrucción del jardín a partir de la lectura |
| `verdesia_observaciones.html` | Memoria del huerto — observaciones guardadas |
| `verdesia_plus.html` | Página Premium (12 lecturas / 30 días rodantes) |

## Flow producto

1. **Discover** — Catálogo de 206 plantas (catalogadas regionalmente).
2. **Plant** — Añadir plantas a `Mi jardín` desde el catálogo o desde la lectura IA.
3. **Read** — Sacar una foto del huerto → GPT-4o-mini → lectura calmada + sugerencias.
4. **Reconstruct** — Una sola foto puede poblar el grid del jardín automáticamente.
5. **Observe** — Guardar momentos (notas + foto) en la memoria del huerto.

## Variables de entorno

Definidas en `Brote/.env` (gitignored, **nunca** committer) :

```
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4o-mini  # opcional, default = gpt-4o-mini
```

Para producción: definir las mismas variables en **Vercel Dashboard → Environment Variables**.

## Seguridad

La clave `OPENAI_API_KEY` **nunca** debe aparecer en el frontend, en el
service worker, en el manifest, en un README, en `.claude/`, ni en
ningún archivo committeado. Vive únicamente en :

1. `Brote/.env` — local, gitignored
2. **Vercel Dashboard → Environment Variables** — producción

Arquitectura :

- **Frontend** (`Semance V22/`) llama exclusivamente `/api/diagnose` —
  mismo origen, sin headers de autenticación.
- **Backend** (`Brote/api/diagnose.js`) es la única ruta que lee
  `process.env.OPENAI_API_KEY` y llama `api.openai.com`.
- El cliente nunca ve la clave (DevTools, network tab, source map : nada).

Auto-check antes de cualquier commit :

```bash
# 1. Ninguna clave hardcodeada (debe devolver solo .env y .env.example)
grep -R "sk-" . --exclude-dir={node_modules,.git,photos}

# 2. Ningún llamado directo a OpenAI desde el frontend
grep -R "api.openai.com" "Semance V22/"   # → debe devolver 0 líneas

# 3. .env nunca aparece en git
git status --porcelain | grep -E "\.env(\b|$)" | grep -v "\.env\.example"
# → debe devolver 0 líneas
```

Rotación de clave : revoke en `platform.openai.com` → nueva clave →
actualizar `Brote/.env` local **y** Vercel Dashboard → redeploy.

## Correr localmente

```bash
# 1. Instalar Vercel CLI (una sola vez)
npm i -g vercel

# 2. Configurar la clave OpenAI
cp Brote/.env.example Brote/.env
# editar Brote/.env con tu clave real

# 3. Levantar el entorno (estáticos + función serverless)
cd Brote && vercel dev
```

La función `Brote/api/diagnose.js` se expone en `http://localhost:3000/api/diagnose`.
Las páginas Verdésia (en `Semance V22/`) pueden servirse aparte con cualquier
servidor estático (Live Server, `python -m http.server`, etc.) — la app
detecta automáticamente la URL de la API.

## Despliegue Vercel

- **Verdésia (PWA principal)** : repositorio Git → Vercel → preset *Other*.
  Sin build step. Estáticos servidos tal cual.
- **Brote (función serverless)** : proyecto Vercel separado, mismo repo.
  Variable `OPENAI_API_KEY` en environment → `api/diagnose.js` expuesto
  automáticamente.

## Service Worker

`sw.js` precachea el shell estático (HTML + JS + manifest + icons) y sirve
las fotos en cache-first (claves estables, no se purgan en cada bump de
versión). El bump de `SW_VERSION` invalida el shell y los runtime caches,
nunca las fotos.

Versión actual : `v34-html-rename-2026-05-30`

## Compatibilidad legacy

Las antiguas rutas `semenca_*.html` fueron **eliminadas** tras la
migración completa a `verdesia_*.html`. Los bookmarks anteriores y las
PWA instaladas con el `start_url` antiguo devolverán 404 — se acepta
ese coste de transición.

Las claves de localStorage internas siguen llamándose `semenca_garden`
y `semenca_settings`, y los identificadores JS globales conservan el
namespace `Semenca*` / `SEMENCA_*`. Es una decisión deliberada :
renombrarlos romperia los datos de los usuarios existentes sin ningún
beneficio visible. Se documenta aquí para que sea explícito, no un olvido.

## Estructura del proyecto

```
Semance V22/                  ← PWA Verdésia (root)
├─ README.md                  ← este archivo
├─ CONTEXT.md                 ← filosofía producto
├─ manifest.json
├─ sw.js
├─ verdesia_*.html            ← 10 páginas principales
├─ *.js                       ← módulos runtime (vanilla)
├─ verdesia_intro.css
├─ icons/                     ← favicons + PWA icons
├─ photos/                    ← fotos del catálogo (~95 archivos)
├─ data/                      ← dormante (legacy)
└─ _dev/                      ← docs editoriales internas (gitignored)

../Brote/                     ← módulo standalone sibling
├─ index.html / app.js / style.css   ← UI mínima de diagnóstico
├─ api/diagnose.js                   ← función Vercel (OpenAI Vision)
├─ .env / .env.example
└─ vercel.json
```

## Filosofía

Ver `CONTEXT.md`.
