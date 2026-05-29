## Plan de correction confirmé (avec les 3 précisions)

### Confirmation 1 — Hiérarchie sémantique du 404
- `<p>` label discret au-dessus : `Erreur 404`
- `<h1>` principal : `Page introuvable`
- `<p>` description : `Cette page n'existe pas ou a été déplacée.`
- `<Link to="/">` : `Retour à l'accueil`

Le `<h1>` sémantique est bien `Page introuvable`. `Erreur 404` est un simple label visuel en `<p>`.

### Confirmation 2 — Les 5 URLs swappées dans `src/routes/__root.tsx`

| # | Emplacement | Avant | Après |
|---|---|---|---|
| 1 | `meta` `property: "og:url"` (ligne 89) | `https://maisondenacre.fr/` | `https://maison-de-nacre.fr/` |
| 2 | `links` `rel: "canonical"` (ligne 98) | `https://maisondenacre.fr/` | `https://maison-de-nacre.fr/` |
| 3 | `links` `rel: "alternate" hreflang: "fr-FR"` (ligne 99) | `https://maisondenacre.fr/` | `https://maison-de-nacre.fr/` |
| 4 | `links` `rel: "alternate" hreflang: "x-default"` (ligne 100) | `https://maisondenacre.fr/` | `https://maison-de-nacre.fr/` |
| 5 | JSON-LD LocalBusiness, champ `url` (ligne 110) | `https://maisondenacre.fr/` | `https://maison-de-nacre.fr/` |

Total : 5 swaps dans `__root.tsx`. Plus 1 dans `public/sitemap.xml`, 1 dans `public/robots.txt`, et N dans `public/llms.txt` (remplacement intégral).

### Confirmation 3 — Aucun effet de bord sur les autres meta

Les entrées suivantes restent strictement intactes dans `head()` de `__root.tsx` :

Meta préservées :
- `charSet: "utf-8"`
- `name: "viewport"`
- `name: "author"`
- `name: "language"` (`fr-FR`)
- `httpEquiv: "content-language"` (`fr-FR`)
- `name: "geo.region"` (`FR-14`)
- `name: "geo.placename"` (`Caen, Calvados, France`)
- `name: "geo.position"` (`49.1829;-0.3707`)
- `name: "ICBM"` (`49.1829, -0.3707`)
- `property: "og:type"` (`website`)
- `property: "og:locale"` (`fr_FR`)
- `property: "og:site_name"` (`Maison de Nacre`)
- `name: "twitter:card"` (`summary_large_image`)
- `property: "og:image"` (URL R2 inchangée)
- `name: "twitter:image"` (URL R2 inchangée)

JSON-LD LocalBusiness, tous champs préservés, seul `email` est ajouté :
- `@context`, `@type`, `name`, `description`, `url` (URL swappée seulement), `telephone`
- `email` (NOUVEAU, après `telephone`)
- `address` (PostalAddress, 5 champs intacts)
- `geo` (GeoCoordinates, 2 champs intacts)
- `areaServed` (10 villes intactes)

Modifications meta limitées à : `title`, `description`, `og:title`, `og:description`, `twitter:title`, `twitter:description` (raccourcissement des contenus uniquement, structure identique).

### Diff complet

#### `src/routes/__root.tsx`

```diff
+import heroImg from "@/assets/hero-maison.webp";

 function NotFoundComponent() {
   return (
     <div className="flex min-h-screen items-center justify-center bg-background px-4">
       <div className="max-w-md text-center">
-        <h1 className="text-7xl font-bold text-foreground">404</h1>
-        <h2 className="mt-4 text-xl font-semibold text-foreground">Page introuvable</h2>
-        <p className="mt-2 text-sm text-muted-foreground">
+        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Erreur 404</p>
+        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">Page introuvable</h1>
+        <p className="mt-3 text-sm text-muted-foreground">
           Cette page n'existe pas ou a été déplacée.
         </p>
         <div className="mt-6">
           <Link to="/" className="...">Retour à l'accueil</Link>
         </div>
       </div>
     </div>
   );
 }

 // meta:
-{ title: "Construction maison neuve près de Caen | Accompagnement clé en main | Maison de Nacre" },
-{ name: "description", content: "Faire construire votre maison neuve dans la région de Caen, sans rien gérer. Maison de Nacre pilote votre projet de la conception à la remise des clés : architecte, artisans partenaires, chantier. Calvados (14)." },
+{ title: "Construction maison neuve près de Caen | Maison de Nacre" },
+{ name: "description", content: "Faire construire votre maison neuve clé en main près de Caen. Un seul interlocuteur, de la conception à la remise des clés. Calvados (14)." },
 // (geo.*, ICBM, author, language inchangés)
-{ property: "og:title", content: "Construction maison neuve près de Caen | Accompagnement clé en main | Maison de Nacre" },
-{ property: "og:description", content: "Faire construire votre maison neuve dans la région de Caen, sans rien gérer. Maison de Nacre pilote votre projet de la conception à la remise des clés : architecte, artisans partenaires, chantier. Calvados (14)." },
+{ property: "og:title", content: "Construction maison neuve près de Caen | Maison de Nacre" },
+{ property: "og:description", content: "Faire construire votre maison neuve clé en main près de Caen. Un seul interlocuteur, de la conception à la remise des clés. Calvados (14)." },
 // og:type, og:locale, og:site_name inchangés
-{ property: "og:url", content: "https://maisondenacre.fr/" },
-{ name: "twitter:card", content: "summary_large_image" },
-{ name: "twitter:title", content: "Construction maison neuve près de Caen | Accompagnement clé en main | Maison de Nacre" },
-{ name: "twitter:description", content: "Faire construire votre maison neuve dans la région de Caen, sans rien gérer. Maison de Nacre pilote votre projet de la conception à la remise des clés : architecte, artisans partenaires, chantier. Calvados (14)." },
+{ property: "og:url", content: "https://maison-de-nacre.fr/" },
+{ name: "twitter:card", content: "summary_large_image" },
+{ name: "twitter:title", content: "Construction maison neuve près de Caen | Maison de Nacre" },
+{ name: "twitter:description", content: "Faire construire votre maison neuve clé en main près de Caen. Un seul interlocuteur, de la conception à la remise des clés. Calvados (14)." },
 // og:image, twitter:image inchangés

 // links:
 { rel: "stylesheet", href: appCss },
-{ rel: "canonical", href: "https://maisondenacre.fr/" },
-{ rel: "alternate", hreflang: "fr-FR", href: "https://maisondenacre.fr/" },
-{ rel: "alternate", hreflang: "x-default", href: "https://maisondenacre.fr/" },
+{ rel: "canonical", href: "https://maison-de-nacre.fr/" },
+{ rel: "alternate", hreflang: "fr-FR", href: "https://maison-de-nacre.fr/" },
+{ rel: "alternate", hreflang: "x-default", href: "https://maison-de-nacre.fr/" },
+{ rel: "preload", as: "image", href: heroImg, fetchpriority: "high" },

 // JSON-LD LocalBusiness:
-"url": "https://maisondenacre.fr/",
+"url": "https://maison-de-nacre.fr/",
 "telephone": "+33669260817",
+"email": "alexandre.duran@maison-de-nacre.fr",
 // address, geo, areaServed inchangés
```

#### `src/components/landing/Hero.tsx`

```diff
-import heroImg from "@/assets/hero-maison.jpg";
+import heroImg from "@/assets/hero-maison.webp";

 <img
   src={heroImg}
   alt="..."
   width={1536}
   height={1024}
+  fetchPriority="high"
+  loading="eager"
+  decoding="async"
   className="..."
 />
```

#### `src/components/landing/Footer.tsx`

```diff
-<p className="mt-1">Email : <a href="mailto:[À COMPLÉTER]" ...>[À COMPLÉTER]</a></p>
+<p className="mt-1">Email : <a href="mailto:alexandre.duran@maison-de-nacre.fr" ...>alexandre.duran@maison-de-nacre.fr</a></p>
```

#### `public/sitemap.xml`

```diff
-<loc>https://maisondenacre.fr/</loc>
+<loc>https://maison-de-nacre.fr/</loc>
```

#### `public/robots.txt`

```diff
-Sitemap: https://maisondenacre.fr/sitemap.xml
+Sitemap: https://maison-de-nacre.fr/sitemap.xml
```

#### `public/llms.txt` (remplacement intégral)

Nouveau contenu fourni par l'utilisateur, avec section `## Pages clés` (5 ancres), email pro ajouté, domaine `maison-de-nacre.fr` partout.

#### `src/assets/`

- `hero-maison.jpg` (251 Ko) converti en `hero-maison.webp` (Q80) via `cwebp`. Le `.jpg` est supprimé.

### Fichiers non touchés (confirmé)
Header, HowItWorks, WhyUs, ReviewsMarquee, Faq, LeadForm, index.tsx (pas de `head()` résiduel à supprimer).

### Règle absolue
Diff exempt de tiret cadratin `—`.
