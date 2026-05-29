## Diff à appliquer

### 1. `src/routes/__root.tsx`
Dans `head().meta`, raccourcir 6 valeurs (title, description, og:title, og:description, twitter:title, twitter:description) :

```diff
- { title: "Construction maison neuve près de Caen | Accompagnement clé en main | Maison de Nacre" },
- { name: "description", content: "Faire construire votre maison neuve dans la région de Caen, sans rien gérer. Maison de Nacre pilote votre projet de la conception à la remise des clés : architecte, artisans partenaires, chantier. Calvados (14)." },
+ { title: "Construction maison neuve près de Caen | Maison de Nacre" },
+ { name: "description", content: "Faire construire votre maison neuve clé en main près de Caen. Un seul interlocuteur, de la conception à la remise des clés. Calvados (14)." },
...
- { property: "og:title", content: "Construction maison neuve près de Caen | Maison de Nacre" },
- { property: "og:description", content: "Faire construire votre maison neuve dans la région de Caen, sans rien gérer. Un seul interlocuteur, de la conception à la remise des clés." },
+ { property: "og:title", content: "Construction maison neuve près de Caen | Maison de Nacre" },
+ { property: "og:description", content: "Faire construire votre maison neuve clé en main près de Caen. Un seul interlocuteur, de la conception à la remise des clés." },
...
- { name: "twitter:title", content: "Construction maison neuve près de Caen | Maison de Nacre" },
- { name: "twitter:description", content: "Un seul interlocuteur, de la conception à la remise des clés. Région de Caen." },
+ { name: "twitter:title", content: "Construction maison neuve près de Caen | Maison de Nacre" },
+ { name: "twitter:description", content: "Faire construire votre maison neuve clé en main près de Caen. Un seul interlocuteur, de la conception à la remise des clés." },
```

(og:title et twitter:title sont déjà à la bonne valeur, conservés tels quels.)

Reste du fichier inchangé (canonical, hreflang, JSON-LD LocalBusiness, NotFoundComponent, ErrorComponent).

### 2. `src/routes/index.tsx`
Retirer entièrement le bloc `head: () => ({...})` de la Route. Garder uniquement `component: Landing` et l'import `createFileRoute`. `SITE_URL` devient inutilisée : la supprimer aussi.

```diff
- const SITE_URL = "https://maisondenacre.fr";
-
  export const Route = createFileRoute("/")({
-   head: () => ({
-     meta: [ ...tout le bloc page-level... ],
-   }),
    component: Landing,
  });
```

Le composant `Landing` et ses imports restent intacts.

### 3. `public/robots.txt`
Remplacer intégralement :

```
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://maisondenacre.fr/sitemap.xml
```

### 4. `public/llms.txt` (création)
Nouveau fichier avec le contenu fourni (titre H1 Maison de Nacre, blockquote de description, sections Service / Zone d'intervention / Caractéristiques / Contact). Aucun tiret cadratin, uniquement des tirets simples pour les listes.

## Garanties
- Aucun caractère `—` (U+2014) dans le diff.
- Aucun autre fichier touché.
- Pas de build lancé avant validation.
