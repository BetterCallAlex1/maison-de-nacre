## Périmètre

Un seul fichier touché : `src/components/landing/WhyUs.tsx`. Modification de l'import lucide-react, du tableau `pillars`, et du H2. Aucun changement de structure, classes, ou JSX.

## Diff

**Ligne 1 — import lucide-react :**

```ts
import { Sparkles, HeartHandshake, ShieldCheck } from "lucide-react";
```

**Lignes 3 à 20 — const pillars :**

```ts
const pillars = [
  {
    icon: Sparkles,
    title: "Du sur-mesure, à votre image",
    body: "Chaque mètre carré pensé pour votre terrain, votre vie, votre budget. Pas de modèle catalogue.",
  },
  {
    icon: HeartHandshake,
    title: "Le savoir-faire d'une famille",
    body: "Quinze ans à construire en Normandie. Notre nom sur chaque chantier, notre exigence avec.",
  },
  {
    icon: ShieldCheck,
    title: "Zéro charge mentale",
    body: "Vous prenez les décisions importantes. On gère le reste : architecte, artisans, administratif, chantier.",
  },
];
```

**H2 (dans le JSX) :**

```tsx
<h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl text-balance">
  Pourquoi construire avec nous.
</h2>
```

## Vérification

Aucun caractère `—` (U+2014) dans le diff. Ponctuation utilisée : virgule, point, deux-points, apostrophe.
