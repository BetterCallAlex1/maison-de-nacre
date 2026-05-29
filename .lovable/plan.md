
## Périmètre

Un seul fichier touché : `src/components/landing/HowItWorks.tsx`. Modification du tableau `steps` uniquement (lignes 1 à 22), aucun changement de structure, de classes ou de JSX.

## Diff

```ts
const steps = [
  {
    n: "01",
    title: "On cadre votre projet",
    body: "Nous écoutons votre projet, votre terrain, votre budget et vos contraintes. Nous validons ensemble la faisabilité.",
  },
  {
    n: "02",
    title: "On dessine la maison avec l'architecte",
    body: "Nous travaillons les plans avec un architecte partenaire jusqu'à un projet qui vous correspond.",
  },
  {
    n: "03",
    title: "On négocie les devis des artisans",
    body: "Nous consultons et négocions les devis auprès de nos artisans partenaires, et vous restituons une offre claire.",
  },
  {
    n: "04",
    title: "On pilote le chantier jusqu'aux clés",
    body: "Nous coordonnons les artisans, suivons le chantier et vous remettons les clés d'une maison finie.",
  },
];
```

## Changements précis

- step 01 : titre remplacé. Body inchangé.
- step 02 : titre remplacé. Body : "vraiment" retiré en fin de phrase.
- step 03 : titre remplacé. Body inchangé.
- step 04 : titre remplacé. Body : "chaque semaine" retiré.

## Vérification

Aucun caractère `—` (U+2014) dans le diff. Ponctuation utilisée : virgule, point, apostrophe.
