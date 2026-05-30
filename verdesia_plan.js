/* ══════════════════════════════════════════════════════════════
   VERDÉSIA — Plan & feature gating

   Architecture freemium côté client. Aucun backend, aucun Stripe.
   Le tier est lu/écrit dans verdesia_user_profile.subscription, et
   l'historique de lectures dans verdesia_user_profile.usage.

   Tiers :
     free     ("Semilla")        — jardin 4×4, 3 lecturas / 30 días, ~30 plantas
     premium  ("Verdésia Plus")  — jardin 15×15, 12 lecturas / 30 días, catálogo

   ─── Rolling 30 days ───────────────────────────────────────────
   Le compteur est ROULANT — il regarde les 30 derniers jours, pas
   le mois calendaire. Si un utilisateur fait sa 1ère lecture le 1 mai,
   celle-ci sort de la fenêtre le 31 mai (un slot se libère). C'est
   plus doux : pas d'effet "1er du mois je reçois 3 nouvelles lectures",
   l'utilisateur récupère progressivement ses droits au fil du temps.

   Stockage :
     profile.usage.lecturaHistory: ISO timestamps[] — historique brut.
                                   Pruned à chaque appel (filter > 30j).

   Backward compat :
     profile.usage.monthlyGardenReadings + .usageMonth (legacy) sont
     préservés en lecture. À la première lecture du nouveau système,
     lecturaHistory démarre vide (reset gracieux — l'utilisateur ne
     perd rien, gagne potentiellement quelques lecturas).

   Aucun usage-facing message d'upsell agressif. Les limites sont
   présentées comme des cadres calmes, jamais comme des restrictions
   punitives. La simulation premium se fait via VerdesiaPlan.setTier().

   Évènements émis :
     verdesia:planchange  — changement de tier
     verdesia:usagechange — après recordReading() / pruning
   ══════════════════════════════════════════════════════════════ */

(function () {

  const PROFILE_KEY = 'verdesia_user_profile';

  /* ─── Configuration des plans ─────────────────────────────── */

  /* `monthlyReadings` est conservé comme nom de champ pour ne pas casser
     les callers historiques. Sa sémantique est désormais : "nombre maximal
     de lectures dans une fenêtre roulante de 30 jours". */
  const PLANS = {
    free: {
      id: 'free',
      label: 'Semilla',
      tagline: 'Perfecto para comenzar un pequeño jardín.',
      gardenCols: 4,
      gardenRows: 4,
      monthlyReadings: 3,
      catalogueAccess: 'limited',
    },
    premium: {
      id: 'premium',
      label: 'Verdésia Plus',
      tagline: 'Un seguimiento más profundo de tu jardín.',
      gardenCols: 15,
      gardenRows: 15,
      monthlyReadings: 12,
      catalogueAccess: 'full',
      priceEur: 5,
    },
  };

  /* Fenêtre roulante en millisecondes — 30 jours. Constante exposée
     pour usage debug si nécessaire. */
  const ROLLING_WINDOW_MS = 30 * 24 * 60 * 60 * 1000;

  /* ─── Catalogue limité — sous-ensemble curé pour le tier free ───
     ~15 % des ~200 plantes (≈ 30). Choix : basiques chiliennes
     d'usage quotidien — légumes, herbes courantes, fruitiers
     d'entrée de gamme. La liste évolue avec la curation manuelle. */

  const ESSENTIAL_PLANT_IDS = [
    'tomate', 'tomate_limache', 'lechuga', 'cilantro', 'albahaca', 'aji_verde',
    'cebolla', 'ajo', 'zanahoria', 'zapallo', 'frutilla', 'perejil',
    'acelga', 'espinaca', 'rabanito', 'haba', 'arveja', 'poroto_verde',
    'romero', 'menta', 'oregano', 'tomillo', 'cebollin', 'kale',
    'rucula', 'pepino', 'pimenton', 'choclo', 'papa', 'remolacha',
  ];
  const ESSENTIAL_SET = new Set(ESSENTIAL_PLANT_IDS);

  /* ─── Profile read/write (silencieux) ─────────────────────── */

  function readProfile() {
    try {
      const raw = localStorage.getItem(PROFILE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  }
  function writeProfile(p) {
    try { localStorage.setItem(PROFILE_KEY, JSON.stringify(p)); return true; }
    catch (err) { console.warn('[verdesia-plan] profile write failed:', err); return false; }
  }

  function _currentMonth() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
  }

  /* Filtre les timestamps tombés en dehors de la fenêtre roulante. */
  function _pruneRolling(history) {
    if (!Array.isArray(history)) return [];
    const cutoff = Date.now() - ROLLING_WINDOW_MS;
    return history.filter(iso => {
      if (typeof iso !== 'string') return false;
      const t = new Date(iso).getTime();
      return Number.isFinite(t) && t > cutoff;
    });
  }

  /* Normalise le profil pour qu'il ait toujours subscription + usage.
     - lecturaHistory : array d'ISO timestamps des lectures, source de
       vérité du nouveau système roulant.
     - monthlyGardenReadings + usageMonth : champs legacy conservés en
       lecture pour rétrocompat, mais le système ne s'en sert plus pour
       la décision. La migration est un reset doux : à la 1ère lecture
       du nouveau système, l'historique est vide. */
  function _ensureShape(p) {
    p = p || {};
    if (!p.subscription || typeof p.subscription !== 'object') {
      p.subscription = { tier: 'free', startedAt: null, expiresAt: null };
    } else if (!['free', 'premium'].includes(p.subscription.tier)) {
      p.subscription.tier = 'free';
    }
    if (!p.usage || typeof p.usage !== 'object') {
      p.usage = {};
    }
    if (!Array.isArray(p.usage.lecturaHistory)) {
      p.usage.lecturaHistory = [];
    }
    // Prune in place — garde l'historique léger.
    p.usage.lecturaHistory = _pruneRolling(p.usage.lecturaHistory);
    // Préserve les champs legacy si présents (lecture seule, non utilisés).
    if (typeof p.usage.monthlyGardenReadings !== 'number') p.usage.monthlyGardenReadings = 0;
    if (typeof p.usage.usageMonth !== 'string')           p.usage.usageMonth = _currentMonth();
    return p;
  }

  /* ─── API publique ───────────────────────────────────────── */

  function getTier() {
    const p = readProfile();
    if (!p) return 'free';
    return _ensureShape(p).subscription.tier;
  }
  function getPlan()   { return PLANS[getTier()] || PLANS.free; }
  function getLimits() { return getPlan(); }

  function setTier(tier) {
    if (!PLANS[tier]) return false;
    const p = _ensureShape(readProfile() || {});
    const previous = p.subscription.tier;
    p.subscription.tier = tier;
    if (tier === 'premium' && previous !== 'premium') {
      p.subscription.startedAt = new Date().toISOString();
      p.subscription.expiresAt = null; // simulation — pas d'expiry réel
    }
    if (tier === 'free') {
      p.subscription.startedAt = null;
      p.subscription.expiresAt = null;
    }
    p.updatedAt = new Date().toISOString();
    writeProfile(p);
    try { window.dispatchEvent(new CustomEvent('verdesia:planchange', { detail: { tier } })); } catch {}
    return true;
  }

  function getUsage() { return _ensureShape(readProfile() || {}).usage; }

  /* Nombre de lectures actives dans la fenêtre roulante. */
  function _activeCount() {
    return _pruneRolling(getUsage().lecturaHistory).length;
  }

  function readingsLeft() {
    return Math.max(0, getPlan().monthlyReadings - _activeCount());
  }
  function canUseReading() { return readingsLeft() > 0; }

  /* Enregistre une nouvelle lecture. Push l'ISO courant dans l'historique,
     prune les anciens, sauvegarde, émet l'event. Retourne le compteur actif. */
  function recordReading() {
    const p = _ensureShape(readProfile() || {});
    p.usage.lecturaHistory.push(new Date().toISOString());
    p.usage.lecturaHistory = _pruneRolling(p.usage.lecturaHistory);
    p.updatedAt = new Date().toISOString();
    writeProfile(p);
    try { window.dispatchEvent(new CustomEvent('verdesia:usagechange', { detail: { left: readingsLeft() } })); } catch {}
    return p.usage.lecturaHistory.length;
  }

  function isPlantUnlocked(plantOrId) {
    if (getTier() === 'premium') return true;
    const id = typeof plantOrId === 'string' ? plantOrId : (plantOrId && plantOrId.id);
    return id ? ESSENTIAL_SET.has(id) : false;
  }

  function getEssentialPlantIds() { return Array.from(ESSENTIAL_SET); }

  /* ─── Export ─── */
  window.VERDESIA_PLAN = PLANS;
  window.VerdesiaPlan = {
    getTier, getPlan, getLimits, setTier,
    getUsage, canUseReading, readingsLeft, recordReading,
    isPlantUnlocked, getEssentialPlantIds,
  };

})();
