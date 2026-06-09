## Plan d'intégration G17 — Viabilisation terrain

### 1. `src/data/guides.ts`
Ajouter l'objet `G17` à la suite de `G12`, puis l'ajouter à l'export `GUIDES`.

Champs :
- `slug`: `"viabilisation-terrain"`
- `title`: `"Viabilisation terrain : coûts et étapes | Maison de Nacre"` (56 c.)
- `metaDescription`: 153 c. (fournie dans le contenu)
- `h1`: `"Viabilisation d'un terrain : étapes, coûts et délais"`
- `primaryKeyword`: `"viabilisation terrain"`
- `searchVolume`: 1900
- 10 sections H2 : définition, vérification avant achat, raccordements, coûts (tableau), étapes, délais, lien permis, lotissement vs isolé, taxe d'aménagement, CTA
- `faq`: 5 Q/R
- `relatedGuideSlugs`: `["prix-maison-neuve-calvados", "choisir-terrain-constructible"]` (le second pointera vers une page 404 assumée pour l'instant)
- Liens internes dans le corps : G11 (existe), G28 `/guides/permis-de-construire-maison` (404 assumé), G16 `/guides/choisir-terrain-constructible` (404 assumé)
- CTA `[Faire le point sur mon terrain]` → `/#contact`
- Tableau coûts formaté avec les classes Tailwind utilisées dans G11/G12

### 2. `public/sitemap.xml`
Ajouter `/guides/viabilisation-terrain` (priority 0.8, monthly).

### Hors scope
- Pas de nouveau composant, pas de changement de routing/prerender (le slug est déjà couvert par la route dynamique `/guides/$slug` et la liste `prerender-routes.ts` se base sur `GUIDES`, donc l'ajout suffit).
- Les 404 vers G28/G16 restent assumés jusqu'à leur rédaction.
- Aucun emploi du mot « constructeur » (déjà respecté dans le contenu fourni).

### Suite proposée
Après validation, j'enchaîne le cluster « déroulé du projet » : G23 (pilier), puis G24, puis G29.
