## Objectif

Garantir que le site puisse, à tout moment, être déployé en **hébergement 100 % statique** (Netlify, Vercel, Cloudflare Pages, OVH, S3…) sans dépendre du Worker Lovable Cloud. Concrètement : chaque page (`/`, `/guides/*`, futures `/communes/*`, `/services/*`) doit exister sous forme de **fichier `.html` autonome** dans `dist/`, avec son contenu visible, ses meta, et son JSON-LD déjà écrits dans la source HTML.

Aujourd'hui ce n'est pas le cas : le template tourne en SSR sur Cloudflare Workers via nitro. Cette mission consiste à **ajouter le prerender sans casser l'existant**.

## Périmètre

**Inclus :**
- Configuration prerender TanStack Start / nitro dans `vite.config.ts`.
- Génération automatique de la liste des routes à figer depuis `src/data/guides.ts` (et plus tard `communes.ts`, `services.ts`).
- Migration du formulaire de contact vers un service tiers (Formspree pressenti) pour qu'il marche sans Worker.
- Vérification que le HTML produit contient bien titre, meta, contenu visible et JSON-LD **avant** hydratation JS.
- Brief G6 (maître d'œuvre ou constructeur, KD 7) livré dans la foulée.

**Exclus de ce plan (traités séparément) :**
- Migration effective vers un autre hébergeur (tu restes sur Lovable tant que tu veux).
- Création des `communes.ts` et des routes `/communes/$slug` (autre tâche déjà planifiée).
- Rédaction du contenu G11 lui-même (toi).

## Étapes

### 1. Créer `src/data/guides.ts` + route `/guides/$slug`
Store typé (slug, title, metaDescription, h1, sections H2/H3, faq, relatedSlugs, publishedAt). G11 inséré comme premier guide. Route dynamique `src/routes/guides.$slug.tsx` avec `head()` (title, meta, og, canonical, JSON-LD Article + FAQPage) et `loader` qui lit l'objet en mémoire — **pas d'appel réseau, pas de `createServerFn`, pas de Supabase**. Composant `GuideArticle` rend Header + breadcrumb + H1 + sections + FAQ accordéon + CTA + Footer.

### 2. Activer le prerender nitro
Dans `vite.config.ts`, ajouter une config nitro qui :
- Active `prerender` au build.
- Reçoit une liste de routes générée depuis `guides.ts` (+ `/`, plus tard `/communes/*`, `/services/*`, `/sitemap.xml`).
- Active `crawlLinks: true` pour suivre les liens internes (filet de sécurité).
- Garde la cible Cloudflare Workers pour Lovable (les `.html` figés sont servis tels quels par le Worker, qui agit alors comme un simple serveur de fichiers).

Création d'un helper `src/lib/prerender-routes.ts` qui exporte la liste consolidée, importé par `vite.config.ts`.

### 3. Vérifier que rien dans les pages prerendues n'a besoin du runtime
Audit des routes statiques :
- `/`, `/guides/*` : aucun `createServerFn`, aucun loader async qui touche la BDD.
- Le formulaire de contact (`/#contact`) actuel poste vers `/api/public/send-lead` (Worker). On le **garde fonctionnel** sur Lovable, mais on prépare la bascule (étape 4).

Le JSON-LD est injecté via `head().scripts` — déjà rendu côté serveur, donc présent dans le HTML prérendu. Vérification post-build : `grep '"@type":"FAQPage"' dist/guides/prix-maison-neuve-calvados.html`.

### 4. Migrer le formulaire de contact vers Formspree
- Tu crées un compte Formspree (gratuit, 50 envois/mois) et tu me donnes l'ID de formulaire.
- Le composant contact poste désormais vers `https://formspree.io/f/{ID}` au lieu de `/api/public/send-lead`.
- L'endpoint `/api/public/send-lead` est conservé en backup tant que tu es sur Lovable, mais le site ne **dépend** plus de lui.
- Résultat : le formulaire marche en hébergement statique.

### 5. Vérifier le build
- `bun run build` (lancé automatiquement).
- Inspection manuelle de `dist/` : présence de `dist/guides/prix-maison-neuve-calvados/index.html` (ou équivalent), `dist/index.html`, `dist/sitemap.xml`.
- `curl` (en local) sur le HTML brut → vérifier que `<h1>`, `<meta name="description">`, `<script type="application/ld+json">` sont **présents avant** le bundle JS.
- Test crawl désactivé JS (curl + grep) pour simuler un crawler Google bête.

### 6. Livrer le brief G6
Format identique à G11 (slug, mot-clé principal `maitre d'œuvre ou constructeur` 170/mo KD 7, secondaires, plan H1/H2/H3, title ≤60, meta ≤155, longueur 1 600–1 900 mots, anti-cannibalisation vs G7 et S1, CTA).

## Risques et points d'attention

1. **Le prerender nitro lit `<a href>` pour crawler.** Tous nos liens internes doivent passer par `<Link to>` typé TanStack — déjà la règle du template, mais à re-vérifier sur G11 avant d'étendre.
2. **Le sitemap actuel** : `public/sitemap.xml` est statique. À mettre à jour à la main à chaque ajout de guide/commune, OU à transformer en route serveur prerendue. Décision reportée à l'étape communes.ts.
3. **Image OG** : si G11 a une image hero, elle doit être un asset import (`import hero from '@/assets/...'`) pour être incluse dans le build statique. URL absolue dans `og:image`.
4. **Pas de régression sur la home actuelle** : la home contient déjà des formulaires et des assets ; on prerender uniquement, on ne change pas son contenu.

## Section technique (pour mémoire)

```text
vite.config.ts
  └─ tanstackStart: {
       server: { entry: "server" },
       prerender: {
         enabled: true,
         crawlLinks: true,
         routes: () => import("./src/lib/prerender-routes").then(m => m.getPrerenderRoutes())
       }
     }

src/lib/prerender-routes.ts
  └─ getPrerenderRoutes(): string[]
       ├─ "/"
       ├─ guides.map(g => `/guides/${g.slug}`)
       ├─ communes.map(c => `/${c.slug}`)        // futur
       └─ services.map(s => `/services/${s.slug}`) // futur

dist/ après build:
  ├─ index.html                                       (home prerendue)
  ├─ guides/prix-maison-neuve-calvados/index.html     (G11 prerendue, JSON-LD inclus)
  ├─ sitemap.xml
  ├─ _worker.js                                       (sert les .html, devient inutile en statique)
  └─ assets/...
```

L'option `crawlLinks: true` est une sécurité : si une route est oubliée dans la liste explicite mais qu'un `<Link to>` y pointe depuis une page déjà figée, nitro la prerender aussi.

## Réponse directe à ta question initiale

**Aujourd'hui : NON**, les pages ne sont pas prérendues en HTML statique. Le template Lovable est SSR sur Cloudflare Worker par défaut.

**Après ce plan : OUI**, garanti — chaque page sera un `.html` autonome avec contenu + JSON-LD dans la source, déployable sur n'importe quel hébergeur statique. Le seul morceau qui restait dépendant du Worker (le formulaire de contact) sera basculé sur Formspree.

Tu peux donc continuer à publier sur Lovable, et le jour où tu coupes l'abonnement, tu télécharges `dist/` et tu le poses où tu veux.