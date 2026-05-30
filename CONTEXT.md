# VERDÉSIA

Calm Chilean gardening companion.
Focused on plant knowledge, seasonal cultivation and garden memory.

# PRODUCT PHILOSOPHY

* not a SaaS
* not productivity software
* not gamified
* not monetization-first

The app should feel:

* botanical
* calm
* human
* seasonal
* useful
* contemporary
* rooted in Chilean gardening culture

# TARGET

* Chile only
* Spanish only (visible UI)
* mobile-first
* balconies
* patios
* small home gardens

# LANGUAGE STRATEGY

Verdésia is Chile-first, Spanish-only on the visible surface.

* Visible UI: Spanish only. No language switcher is shown on any
  page. New users land directly in Spanish.
* Regional onboarding: required. On first visit to an app page
  (today / jardin / explorer / plante) the user is asked for their
  Chilean region — language is set silently to `es`. Landing page
  does not trigger onboarding.
* French translations may remain in code but are dormant: `i18n.js`
  still ships ES + FR strings, `name.fr` on existing plants is kept,
  `SemencaI18n.getLocalized()` still falls back through the chain.
  Nothing French is rendered to users today; the machinery survives
  in case the language is reactivated later.
* Future plant catalog content: Spanish only on the deep fields
  (advice, climate, problems, seeds, uses). A short `name.fr` is
  optional but never required. Do not author new French body copy.
* Chilean climate, southern-hemisphere seasonality, and the regional
  zone selector remain central to the product identity.

# VISUAL DIRECTION

Keep:

* botanical editorial aesthetic
* earthy palette
* restrained UI
* typography-driven layouts
* calm interactions

Avoid:

* startup gradients
* flashy animations
* dashboard aesthetics
* productivity UI

# TECH STACK

* HTML
* CSS
* vanilla JavaScript
* no framework
* no backend
* no build tools

# CORE FILES

* plants.js
* garden.js
* storage.js
* i18n.js
* onboarding.js

# MAIN PAGES

* verdesia_landing.html
* verdesia_today.html
* verdesia_jardin.html
* verdesia_explorer.html
* verdesia_plante.html

# CURRENT PRODUCT LOOP

1. Discover plants
2. Add plants to garden
3. Follow seasonal growth
4. Receive contextual guidance
5. Save notes and observations
6. Build garden memory

# CURRENT PRIORITIES

* navigation coherence
* mobile polish
* richer plant catalog
* bilingual consistency
* PWA installability
* realistic gardening atmosphere
* real photography
* human observations

# IMPORTANT RULES

Do not redesign the app unless explicitly requested.

Prefer:

* incremental improvements
* stability
* usability
* consistency

The MVP should feel:
like a living Chilean gardening notebook.
