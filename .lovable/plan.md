## Intégration G6 — Maître d'œuvre ou constructeur

### Fichiers modifiés

**1. `src/data/guides.ts`** — ajouter l'objet `G6` puis l'inscrire dans `GUIDES`.
- `slug: "maitre-doeuvre-ou-constructeur"`
- `title` (54 c.) : `Maître d'œuvre ou constructeur : que choisir | Maison de Nacre`
- `metaDescription` (152 c.) : meta fournie
- `h1` : `Maître d'œuvre ou constructeur : le vrai comparatif`
- `primaryKeyword: "maître d'œuvre ou constructeur"`, `searchVolume: 170`
- `publishedAt` / `updatedAt: "2026-06-09"`
- `intro` : 1er paragraphe du markdown
- `sections` (8 H2) : Les deux modèles / Qu'est-ce qu'un maître d'œuvre / Comparatif 8 critères (tableau HTML) / Côté prix / Côté garanties / Côté liberté / Cas où le constructeur reste pertinent / Comment choisir / Le modèle Maison de Nacre — contenu converti md→HTML (`<p>`, `<strong>`, `<ol>`, `<table>` réutilisant les classes Tailwind de G11, liens internes vers `/guides/prix-maison-neuve-calvados`, `/guides/construire-ou-acheter-maison`, `/services/maitre-d-oeuvre-construction-maison`)
- `faq` : 5 questions/réponses
- `relatedGuideSlugs: ["prix-maison-neuve-calvados", "construire-ou-acheter-maison"]`

**2. `public/sitemap.xml`** — ajouter l'URL `/guides/maitre-doeuvre-ou-constructeur` (priority 0.8, monthly).

### Non inclus

- Le prerender se met à jour automatiquement (la liste lit `getAllGuideSlugs()`).
- Pas de nouveaux composants : `GuideArticle` rend tout via `dangerouslySetInnerHTML`, le tableau passe sans modification.
- Liens 404 vers G7 / S1 assumés (créés plus tard).
- G12 (prix construction maison au m²) : **pas d'action côté code maintenant**. Tu rédiges en parallèle, on intègre quand tu colles le contenu — même format qu'ici.

### Vérification post-build

- `bun run build` puis `grep "Maître d'œuvre ou constructeur" dist/guides/maitre-doeuvre-ou-constructeur/index.html` pour confirmer SSG.
- Vérifier que les 2 blocs JSON-LD (Article + FAQPage) sont présents dans le HTML statique.
