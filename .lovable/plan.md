# Plan G12 — Prix construction maison au m²

Intégration du contenu fourni (1 470 mots, 0 em-dash, chiffres alignés sur G11) au même format que G11/G6.

## 1. `src/data/guides.ts`

Ajouter `const G12: Guide` après G6, et l'inclure dans l'export du tableau de guides.

- **slug** : `prix-construction-maison-m2`
- **title** (56 c.) : `Prix de construction d'une maison au m² | Maison de Nacre`
- **metaDescription** (149 c.) : `Combien coûte la construction d'une maison au m² en 2026 ? Fourchettes par standing, ce que comprend le prix, écart entrée et haut de gamme.`
- **h1** : `Prix de construction d'une maison au m² : le vrai coût en 2026`
- **primaryKeyword** : `prix construction maison au m²`
- **searchVolume** : `1900`
- **publishedAt / updatedAt** : `2026-06-09`
- **intro** : paragraphe d'accroche du doc (« Combien coûte une maison… »)
- **sections** (8 H2) :
  1. Quel est le prix de construction au m² en 2026 ? (tableau 3 lignes par standing)
  2. Construction seule ou clé en main : ne pas confondre (lien interne G6)
  3. Ce que comprend (et ne comprend pas) le prix au m²
  4. Ce qui fait varier le prix au m²
  5. Plain-pied ou étage : quel impact sur le m² ?
  6. L'effet de la surface : pourquoi les petites maisons coûtent plus cher au m² (lien G13 — 404 assumé)
  7. Du prix au m² au budget de votre maison (tableau 3×3 surfaces×standing, lien G_budget — 404 assumé)
  8. Et dans le Calvados ? (lien interne G11)
  9. Comment lire un prix au m² dans un devis (lien G5 — 404 assumé)
- **faq** : 5 Q/R (prix 2026, terrain inclus, petite maison, plain-pied, surcoût RE2020)
- **CTA final** : « Estimez votre projet » avec bouton `[Demander mon estimation gratuite]` → `/#contact`
- **relatedGuideSlugs** : `["prix-maison-neuve-calvados", "maitre-doeuvre-ou-constructeur"]`

**Correction collatérale** : dans G11 (section "Prix de construction au m²"), corriger le lien interne `/guides/prix-construction-maison-au-m2` → `/guides/prix-construction-maison-m2` pour pointer vers G12.

Tableaux et listes formatés en HTML avec les mêmes classes Tailwind que G11/G6 (`overflow-x-auto`, `w-full text-sm`, `border-t`, etc.).

## 2. `public/sitemap.xml`

Ajouter l'entrée :
```xml
<url>
  <loc>https://maison-de-nacre.fr/guides/prix-construction-maison-m2</loc>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

## Hors scope

- Pas de nouveau composant (réutilise `GuideArticle.tsx`).
- Pas de modif du prerender (couvert par `prerender-routes.ts` qui lit `guides.ts`).
- Liens vers G13 / G5 / G_budget laissés en 404 assumé (s'activeront à la publication).
