
## Périmètre

3 fichiers touchés, aucun autre changement :

- `src/components/landing/Hero.tsx` (refonte)
- `src/components/landing/ReviewsMarquee.tsx` (1 H2)
- `src/components/landing/HowItWorks.tsx` (1 H2)

Règle absolue respectée : zéro caractère `—` (U+2014) dans le diff. J'utilise virgules, points ou retours à la ligne.

---

## 1. `src/components/landing/Hero.tsx` (refonte complète du contenu interne)

Le `const points` passe de 3 phrases longues à 3 micro-réassurances :

```ts
const points = [
  "Architecte inclus",
  "Devis négociés",
  "Norme RE2020",
];
```

Le JSX de la colonne de gauche devient :

```tsx
<div className="animate-fade-up">
  <h1 className="font-display text-4xl font-semibold leading-tight text-deep text-balance md:text-5xl lg:text-6xl">
    Faites construire la maison qui vous ressemble.
  </h1>
  <p className="mt-6 max-w-xl text-lg text-muted-foreground">
    Un seul interlocuteur, de la conception à la remise des clés.
  </p>

  <div className="mt-8">
    <a
      href="#contact"
      className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent/90"
    >
      Démarrer mon projet
    </a>
  </div>

  <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
    {points.map((p) => (
      <li key={p} className="flex items-center gap-2 text-sm text-foreground">
        <Check className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
        <span>{p}</span>
      </li>
    ))}
  </ul>
</div>
```

Changements précis :
- badge `<span>` supprimé
- H1 et sous-titre remplacés (sous-titre raccourci, le bloc descriptif long est retiré puisqu'il faisait doublon avec le H1/sous-titre court)
- second bouton "Découvrir notre méthode" supprimé, wrapper `flex flex-wrap gap-3` remplacé par un simple wrapper du CTA principal
- liste verticale remplacée par flex horizontal (gap 24px = `sm:gap-6`) en desktop, empilée en mobile (`flex-col`), icône `Check` h-4 w-4 en `text-primary`, texte `text-sm text-foreground`
- la colonne image à droite (heroImg + glow `bg-gradient-hero`) reste strictement identique
- imports inchangés (`Check` de lucide-react et `heroImg` toujours utilisés)

## 2. `src/components/landing/ReviewsMarquee.tsx` (1 ligne)

Remplacer le `<h2>` actuel :

```tsx
<h2 className="mt-3 text-center font-display text-3xl font-semibold text-deep md:text-4xl">
  Ils ont fait construire avec nous, près de Caen.
</h2>
```

Le suptitre "Ils nous ont fait confiance" et le reste de la section sont conservés tels quels.

## 3. `src/components/landing/HowItWorks.tsx` (1 ligne)

Remplacer le `<h2>` actuel :

```tsx
<h2 className="mt-3 font-display text-3xl font-semibold text-deep md:text-4xl text-balance">
  Comment se passe la construction de votre maison neuve.
</h2>
```

Le suptitre "Notre méthode" et le paragraphe descriptif restent inchangés.

---

## Vérification anti tiret cadratin

Tous les nouveaux textes saisis : H1, sous-titre, 3 micro-réassurances, 2 H2. Aucun `—`. Seuls signes de ponctuation utilisés : virgule, point, deux-points (et apostrophe typographique d'origine du fichier laissée intacte hors zones modifiées).

Confirme-moi pour que je passe en build.
