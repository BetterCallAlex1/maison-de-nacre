// Pages SERVICE (intention transactionnelle). Même shape que Guide pour réutiliser
// le composant d'article et le pipeline prerender.

import type { Guide } from "./guides";

export type Service = Guide;

// ────────────────────────────────────────────────────────────────────────────────
// S2 — Maison neuve clé en main (service, 260/mo, KD 19)
// ────────────────────────────────────────────────────────────────────────────────

const S2: Service = {
  slug: "maison-cle-en-main",
  title: "Maison neuve clé en main dans le Calvados | Maison de Nacre",
  metaDescription:
    "Votre maison neuve clé en main dans le Calvados : sur-mesure, RE2020, gérée de A à Z par un maître d'œuvre. De la conception aux clés, honoraires 12%.",
  h1: "Votre maison neuve clé en main dans le Calvados",
  primaryKeyword: "maison clé en main",
  searchVolume: 260,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "Faire construire devrait être un plaisir, pas une source de stress. Avec notre offre clé en main, vous confiez l'intégralité de votre projet à un interlocuteur unique : de la conception avec l'architecte à la remise des clés, nous gérons tout. Vous prenez les décisions, nous nous occupons du reste. Dans la région de Caen et tout le Calvados.",
  sections: [
    {
      h2: "Qu'est-ce qu'une maison clé en main ?",
      html: `<p>Une maison clé en main, c'est une maison neuve que vous n'avez plus qu'à habiter le jour de la livraison. Tout a été conçu, coordonné et réalisé pour vous : les plans, les démarches, le choix des artisans, le suivi du chantier et les finitions. Vous n'avez ni à jongler entre plusieurs entreprises, ni à courir après les devis, ni à arbitrer seul les imprévus de chantier. Le projet vous est livré terminé, prêt à vivre.</p>`,
    },
    {
      h2: "Ce que comprend notre offre clé en main",
      html: `<p>Nous prenons en charge l'ensemble du parcours, en quatre temps :</p>
<ol class="list-decimal pl-6 space-y-2">
<li><strong>La conception avec l'architecte.</strong> Nous dessinons votre maison sur-mesure, pensée pour votre terrain, votre mode de vie et votre budget, dans le respect de la RE2020.</li>
<li><strong>Les devis des artisans partenaires.</strong> Nous consultons et mettons en concurrence les corps de métier, et nous vous présentons des devis clairs, sans marge cachée.</li>
<li><strong>La gestion complète du chantier.</strong> Nous coordonnons les artisans, suivons l'avancement semaine après semaine et veillons à la qualité et aux délais.</li>
<li><strong>La remise des clés.</strong> Nous vous accompagnons jusqu'à la réception, la levée des éventuelles réserves, et la remise de votre maison terminée.</li>
</ol>`,
    },
    {
      h2: "Les avantages du clé en main",
      html: `<p>Confier son projet en clé en main, c'est d'abord <strong>un seul interlocuteur</strong> pour tout le projet, au lieu de coordonner soi-même architecte, artisans et administrations. C'est aussi <strong>zéro gestion au quotidien</strong> : vous gardez la main sur les décisions, mais le pilotage opérationnel ne pèse pas sur vous. C'est enfin <strong>un budget maîtrisé et transparent</strong> : vous voyez les devis réels de chaque artisan, et notre rémunération est claire, sans surprise en cours de route. La sérénité, en somme, sans renoncer au contrôle.</p>`,
    },
    {
      h2: "Clé en main ne veut pas dire standardisé",
      html: `<p>C'est notre différence. Chez certains acteurs, « clé en main » rime avec modèle de catalogue et options limitées. Chez nous, le clé en main est <strong>100 % sur-mesure</strong> : votre maison part d'une page blanche, dessinée avec un architecte, avec des artisans que vous choisissez et des matériaux libres. Vous bénéficiez de la simplicité du clé en main et de la liberté du sur-mesure, sans compromis. Pour comprendre en quoi notre modèle se distingue, voir notre comparatif <a href="/guides/maitre-doeuvre-ou-constructeur" class="text-primary underline">maître d'œuvre ou constructeur</a>.</p>`,
    },
    {
      h2: "Le prix d'une maison clé en main",
      html: `<p>Une maison neuve sur-mesure, clé en main et conforme à la RE2020 revient à environ 2 800 €/m² livré, hors terrain, honoraires inclus. Notre rémunération est limpide : <strong>12 % du coût de construction, tout compris, sans marge sur les matériaux ou la main-d'œuvre</strong>. Vous savez exactement où va chaque euro. Pour le détail des budgets selon la surface et le secteur, voir notre guide <a href="/guides/prix-maison-neuve-calvados" class="text-primary underline">prix d'une maison neuve dans le Calvados</a>.</p>`,
    },
    {
      h2: "Notre méthode, du premier rendez-vous aux clés",
      html: `<p>Tout commence par un échange sur votre projet, vos envies et votre budget. Nous étudions ensuite la faisabilité, y compris du terrain si vous en avez un, puis nous lançons la conception. Une fois les plans validés et le permis déposé, nous consultons les artisans, vous présentons les devis, et le chantier démarre sous notre coordination. Vous êtes tenu informé à chaque étape, et nous vous accompagnons jusqu'à la remise des clés. Pour visualiser l'ensemble du parcours, voir notre guide <a href="/guides/etapes-construction-maison" class="text-primary underline">les étapes d'une construction</a>.</p>`,
    },
    {
      h2: "Pourquoi Maison de Nacre",
      html: `<p>Nous sommes un accompagnement en maîtrise d'œuvre ancré dans la région de Caen, qui connaît le marché, les communes et les contraintes locales du Calvados. Notre engagement : un projet unique qui vous ressemble, des comptes transparents, et un interlocuteur qui défend vos intérêts du premier plan à la dernière clé. Que vous soyez primo-accédant, famille en quête d'espace ou en projet de résidence secondaire, nous adaptons notre accompagnement à votre situation. Découvrez les communes où nous intervenons sur notre page <a href="/construire-dans-le-calvados" class="text-primary underline">faire construire dans le Calvados</a>.</p>`,
    },
    {
      h2: "Parlons de votre projet",
      html: `<p>Vous rêvez d'une maison neuve sans le stress de la gestion ? Confiez-nous votre projet clé en main. Première estimation gratuite et sans engagement.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Demander mon estimation gratuite</a></p>`,
    },
  ],
  faq: [
    {
      question: "Qu'est-ce qu'une maison clé en main ?",
      answer:
        "Une maison neuve entièrement conçue, coordonnée et réalisée pour vous, livrée prête à habiter. Vous prenez les décisions, le professionnel gère la conception, les artisans, le chantier et la remise des clés.",
    },
    {
      question: "Une maison clé en main est-elle plus chère ?",
      answer:
        "Pas nécessairement. Avec un maître d'œuvre, vous payez des honoraires affichés (12 % chez Maison de Nacre) et les devis réels des artisans, sans marge cachée. À prestation équivalente, c'est souvent plus avantageux qu'un prix global opaque.",
    },
    {
      question: "Peut-on personnaliser une maison clé en main ?",
      answer:
        "Oui, totalement chez nous. Notre clé en main est sur-mesure : plans dessinés avec un architecte, artisans et matériaux choisis avec vous, sans catalogue imposé.",
    },
    {
      question: "Faut-il déjà avoir un terrain ?",
      answer:
        "Non. Nous pouvons vous accompagner dans la recherche et la vérification d'un terrain dans le Calvados, puis enchaîner sur la conception.",
    },
    {
      question: "Quelles garanties avec une maison neuve clé en main ?",
      answer:
        "Vous bénéficiez de la garantie décennale, de la garantie de parfait achèvement, de la garantie biennale et de l'assurance dommage-ouvrage, comme pour toute construction neuve.",
    },
  ],
  relatedGuideSlugs: ["prix-maison-neuve-calvados", "maitre-doeuvre-ou-constructeur", "etapes-construction-maison"],
};

export const SERVICES: Service[] = [S2];

export const SERVICES_BY_SLUG: Record<string, Service> = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s]),
);

export function getService(slug: string): Service | undefined {
  return SERVICES_BY_SLUG[slug];
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}
