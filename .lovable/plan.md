
## Objectif

Ajouter une nouvelle section "Nos dernières réalisations" sur la landing page, intercalée entre `ReviewsMarquee` et `HowItWorks`, dans le style exact du reste du site.

## Fichiers

1. **Créer `src/components/landing/Realisations.tsx`**
   - Composant client (hook `useState` pour le "voir plus").
   - Structure d'en-tête identique à `HowItWorks` :
     - `<section id="realisations" className="py-20 lg:py-28">`
     - `container mx-auto max-w-6xl px-4`
     - Label : `NOS DERNIÈRES RÉALISATIONS` (même classes que HowItWorks)
     - h2 : "Nos projets, près de chez vous" (font-display, text-deep)
     - Sous-titre : "Découvrez quelques-unes des maisons individuelles que nous avons accompagnées de la conception à la remise des clés."
   - Tableau `projects` de 4 placeholders : `{ id, image, commune: "Commune", surface: "000 m²" }`.
   - Images placeholder : utiliser `https://images.unsplash.com/...` (maisons neuves) ou un simple `https://placehold.co/800x900/EEE/333?text=Projet+N`. Je pars sur Unsplash pour un rendu réaliste, l'utilisateur remplacera ensuite.
   - Grille : `grid gap-6 sm:grid-cols-2 lg:grid-cols-3`.
   - État `showAll` ; affiche `projects.slice(0, showAll ? projects.length : 3)`.
   - Bouton "Voir plus de réalisations" centré sous la grille, visible uniquement si `projects.length > 3 && !showAll`. Style cohérent : variante secondaire/outline pour ne pas dupliquer le CTA accent. J'utilise les classes Tailwind directes (bordure border-border, fond bg-card, hover bg-secondary) pour rester aligné avec les autres boutons sobres du site.
   - Carte (non cliquable) :
     - `relative overflow-hidden rounded-2xl border border-border shadow-sm aspect-[4/5]` (portrait léger, hauteur alignée via aspect-ratio).
     - `<img>` avec `className="absolute inset-0 h-full w-full object-cover"`, `alt="Maison neuve réalisée à {commune}"`, `loading="lazy"`.
     - Bande basse : `absolute inset-x-0 bottom-0 p-4 flex justify-between items-center backdrop-blur-md bg-black/30`.
     - Pillules : `rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-medium text-white` (gauche = commune, droite = surface).
   - Pas d'effet hover sur les cartes.

2. **Modifier `src/routes/index.tsx`**
   - Importer `Realisations` et l'insérer entre `<ReviewsMarquee />` et `<HowItWorks />`.

3. **Mettre à jour `public/sitemap.xml`** : pas nécessaire (ancre interne sur la page d'accueil).

## Détails techniques

- Tokens design système uniquement (`text-deep`, `text-primary`, `bg-card`, `border-border`, `text-muted-foreground`, `font-display`).
- Responsive : 1 col mobile, 2 col `sm:`, 3 col `lg:`.
- Accessibilité : `<section aria-labelledby="realisations-title">` avec `id` sur le h2, `alt` descriptifs, bouton avec `aria-expanded`.
- Pas de tiret cadratin dans le code.
