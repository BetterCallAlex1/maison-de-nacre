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

// ────────────────────────────────────────────────────────────────────────────────
// S1 — Maître d'œuvre construction maison (service générique, 140/mo, KD 17)
// ────────────────────────────────────────────────────────────────────────────────

const S1: Service = {
  slug: "maitre-doeuvre-construction-maison",
  title: "Maître d'œuvre construction maison | Maison de Nacre",
  metaDescription:
    "Maître d'œuvre pour construire votre maison dans le Calvados : conception sur-mesure, artisans coordonnés, chantier piloté. Honoraires 12 %, de A à Z.",
  h1: "Maître d'œuvre pour construire votre maison",
  primaryKeyword: "maître d'œuvre construction maison",
  searchVolume: 140,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "Vous voulez faire construire une maison qui vous ressemble, sans gérer seul les plans, les artisans et le chantier ? C'est exactement notre métier. En tant que maître d'œuvre, nous concevons votre projet, coordonnons les corps de métier et pilotons la construction de bout en bout, pour vous livrer une maison sur-mesure dans les meilleures conditions.",
  sections: [
    {
      h2: "Le maître d'œuvre, votre chef d'orchestre",
      html: `<p>Le maître d'œuvre est l'intermédiaire qui transforme votre idée en maison terminée. Il conçoit les plans (seul ou avec un architecte), chiffre le coût réel de chaque corps de métier, consulte et met en concurrence les artisans, puis suit le chantier semaine après semaine : qualité, planning, paiements, imprévus. Vous restez décideur et maître d'ouvrage ; il gère l'opérationnel et défend vos intérêts face aux entreprises. Pour bien comprendre ce métier face aux autres modèles, voir notre comparatif <a href="/guides/maitre-doeuvre-ou-constructeur" class="text-primary underline">maître d'œuvre ou constructeur</a>.</p>`,
    },
    {
      h2: "Notre accompagnement, de A à Z",
      html: `<p>Nous prenons en charge l'intégralité du parcours :</p>
<ol class="list-decimal pl-6 space-y-2">
<li><strong>Conception sur-mesure</strong> avec un architecte, pensée pour votre terrain, votre mode de vie et votre budget, en RE2020.</li>
<li><strong>Montage du permis de construire</strong> et suivi de l'instruction.</li>
<li><strong>Consultation des artisans</strong>, mise en concurrence et présentation de devis transparents.</li>
<li><strong>Coordination et suivi du chantier</strong>, de la première pierre aux finitions.</li>
<li><strong>Réception et remise des clés</strong>, avec levée des éventuelles réserves.</li>
</ol>
<p class="mt-4">Pour visualiser l'ensemble du parcours, voir notre guide <a href="/guides/etapes-construction-maison" class="text-primary underline">les étapes d'une construction</a>.</p>`,
    },
    {
      h2: "Pourquoi choisir un maître d'œuvre",
      html: `<p>Trois raisons principales. D'abord, le <strong>sur-mesure</strong> : votre maison part d'une page blanche, sans modèle imposé ni catalogue. Ensuite, la <strong>transparence</strong> : vous voyez les devis réels de chaque artisan, et notre rémunération est affichée, sans marge cachée sur les travaux. Enfin, la <strong>sérénité</strong> : un interlocuteur unique pilote tout, et vous évite de courir après les entreprises et les administrations. Vous gardez le contrôle des décisions, sans le poids de la gestion.</p>`,
    },
    {
      h2: "Le coût d'un maître d'œuvre",
      html: `<p>Notre rémunération est claire : <strong>12 % du coût de construction, tout compris, sans marge sur les matériaux ou la main-d'œuvre</strong>. À projet équivalent, des honoraires affichés pèsent généralement moins lourd qu'une marge globale opaque. Pour situer le budget complet d'un projet, voir notre guide <a href="/guides/prix-maison-neuve-calvados" class="text-primary underline">prix d'une maison neuve dans le Calvados</a>.</p>`,
    },
    {
      h2: "Dans quelle région nous intervenons",
      html: `<p>Nous accompagnons les projets de construction dans le Calvados et toute la région de Caen, du littoral de la Côte de Nacre à l'arrière-pays. Cette connaissance fine du territoire, des communes et des contraintes locales fait partie de notre valeur ajoutée. Retrouvez les communes où nous intervenons sur notre page <a href="/construire-dans-le-calvados" class="text-primary underline">faire construire dans le Calvados</a>.</p>`,
    },
    {
      h2: "Quand faire appel à un maître d'œuvre",
      html: `<p>Le maître d'œuvre est particulièrement pertinent dans plusieurs situations. Si vous avez un <strong>terrain libre</strong> (hors lotissement à modèle imposé) et que vous voulez une maison vraiment sur-mesure, c'est la voie naturelle. Si vous tenez à <strong>comprendre où va chaque euro</strong> plutôt que de payer un prix global opaque, sa transparence fait la différence. Si vous souhaitez <strong>choisir vos artisans</strong> et vos matériaux sans catalogue fermé, il vous en laisse la liberté. Et si vous n'avez ni le temps ni l'envie de coordonner vous-même architecte, entreprises et administrations, il vous décharge de toute la gestion tout en vous laissant la décision. À l'inverse, pour un budget très serré sur un modèle standard, d'autres formules peuvent convenir : nous le disons franchement dans notre <a href="/guides/maitre-doeuvre-ou-constructeur" class="text-primary underline">comparatif des modèles</a>.</p>`,
    },
    {
      h2: "Pourquoi Maison de Nacre",
      html: `<p>Notre engagement tient en trois mots : sur-mesure, transparence, accompagnement. Un projet unique qui vous ressemble, des comptes clairs du premier devis à la facture finale, et un interlocuteur présent à chaque étape. Que vous soyez primo-accédant, famille en quête d'espace ou porteur d'un projet de résidence secondaire, nous adaptons notre accompagnement à votre situation et à votre budget.</p>`,
    },
    {
      h2: "Parlons de votre projet",
      html: `<p>Vous avez un projet de construction et vous cherchez un maître d'œuvre de confiance ? Confiez-nous votre maison. Première estimation gratuite et sans engagement.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Demander mon estimation gratuite</a></p>`,
    },
  ],
  faq: [
    {
      question: "Que fait un maître d'œuvre pour la construction d'une maison ?",
      answer:
        "Il conçoit les plans, consulte et coordonne les artisans, pilote le chantier et vous accompagne jusqu'à la remise des clés. Vous décidez, il gère l'opérationnel.",
    },
    {
      question: "Combien coûte un maître d'œuvre ?",
      answer:
        "Généralement autour de 10 à 12 % du coût de construction. Chez Maison de Nacre, c'est 12 % tout compris, sans marge cachée sur les travaux.",
    },
    {
      question: "Quelle différence avec un constructeur ?",
      answer:
        "Le maître d'œuvre assemble pour vous une équipe sur-mesure et facture des honoraires affichés. Le constructeur vous vend une maison avec une marge intégrée et des modèles plus standardisés. Notre comparatif détaille tout cela.",
    },
    {
      question: "Peut-on choisir ses artisans avec un maître d'œuvre ?",
      answer:
        "Oui. Nous mettons les artisans en concurrence et vous choisissez ensemble, sans partenaires imposés.",
    },
    {
      question: "Le maître d'œuvre s'occupe-t-il du permis de construire ?",
      answer:
        "Oui. Nous montons le dossier de permis et suivons son instruction, dans le cadre de notre accompagnement complet.",
    },
  ],
  relatedGuideSlugs: ["maitre-doeuvre-ou-constructeur", "etapes-construction-maison", "prix-maison-neuve-calvados"],
};

// ────────────────────────────────────────────────────────────────────────────────
// S4 — Construire une maison RE2020 (service, 110/mo, KD 13)
// ────────────────────────────────────────────────────────────────────────────────

const S4: Service = {
  slug: "maison-re2020",
  title: "Construire une maison RE2020 | Maison de Nacre",
  metaDescription:
    "Construire une maison neuve RE2020 dans le Calvados : confort, basse consommation, conception bioclimatique. Maître d'œuvre, de la conception aux clés.",
  h1: "Construire une maison RE2020 dans le Calvados",
  primaryKeyword: "maison RE2020",
  searchVolume: 110,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "Toutes les maisons neuves doivent aujourd'hui respecter la RE2020, la réglementation environnementale en vigueur. Mais entre cocher la case réglementaire et concevoir une maison réellement performante et agréable à vivre, il y a un monde. Notre rôle de maître d'œuvre : intégrer la RE2020 dès la première esquisse, pour une maison sobre, confortable et durable, dans la région de Caen et tout le Calvados.",
  sections: [
    {
      h2: "La RE2020 en bref",
      html: `<p>La RE2020 est la norme qui encadre la performance énergétique et environnementale des constructions neuves. Elle vise trois objectifs : réduire la consommation d'énergie, limiter l'empreinte carbone des matériaux et de l'usage, et garantir le confort, notamment en été face aux fortes chaleurs. Concrètement, elle impose une isolation renforcée, une bonne étanchéité à l'air, des énergies décarbonées et une conception pensée pour le climat. Pour le détail technique de la norme, voir notre guide <a href="/guides/re2020" class="text-primary underline">la RE2020 expliquée simplement</a>.</p>`,
    },
    {
      h2: "Ce que la RE2020 change pour votre maison",
      html: `<p>Une maison RE2020 bien conçue repose sur plusieurs piliers. La <strong>conception bioclimatique</strong> d'abord : l'orientation, les ouvertures et les protections solaires sont pensées pour capter la chaleur l'hiver et s'en protéger l'été. L'<strong>isolation et l'étanchéité</strong> ensuite, nettement renforcées, pour limiter les déperditions. Le <strong>chauffage décarboné</strong>, le plus souvent une pompe à chaleur, qui remplace les énergies fossiles. Et des <strong>matériaux à plus faible empreinte carbone</strong>, choisis pour leur impact sur tout le cycle de vie. Ces exigences se travaillent dès le plan, pas après coup.</p>`,
    },
    {
      h2: "Les avantages d'une maison RE2020",
      html: `<p>Au-delà de l'obligation, une maison RE2020 apporte des bénéfices concrets. Le premier est le <strong>confort</strong> : une maison bien isolée et bien orientée reste tempérée en hiver comme en été, sans surchauffe estivale. Le deuxième est l'<strong>économie</strong> : des factures d'énergie nettement réduites par rapport à une maison ancienne, qui compensent à l'usage le surcoût de construction. Le troisième est la <strong>valeur</strong> : une maison performante et bien classée au DPE se revend mieux. Le dernier est l'<strong>empreinte réduite</strong> : moins d'énergie consommée et des matériaux plus vertueux.</p>`,
    },
    {
      h2: "Le surcoût RE2020 et son retour sur investissement",
      html: `<p>Soyons transparents : la RE2020 ajoute de l'ordre de 5 à 10 % au coût de construction par rapport aux anciennes normes, du fait de l'isolation, de l'étanchéité et des équipements. Mais ce surcoût se rattrape à l'usage, par des factures d'énergie bien plus basses, et par une maison plus confortable et mieux valorisée. C'est un investissement, pas une dépense perdue. Pour situer ce surcoût dans le budget global, voir notre guide <a href="/guides/prix-maison-neuve-calvados" class="text-primary underline">prix d'une maison neuve dans le Calvados</a>.</p>`,
    },
    {
      h2: "Le confort d'été, la vraie nouveauté de la RE2020",
      html: `<p>C'est l'apport le plus concret de la norme, et celui dont on parle le moins. Là où les réglementations précédentes se concentraient sur le chauffage en hiver, la RE2020 introduit une exigence de confort en été, mesurée en degrés-heures d'inconfort. Autrement dit, votre maison doit rester vivable pendant les épisodes de chaleur, sans recourir systématiquement à la climatisation. Avec des étés de plus en plus chauds, y compris en Normandie, c'est un vrai gain de qualité de vie.</p>
<p class="mt-4">Ce confort d'été se gagne à la conception, pas avec un climatiseur ajouté après coup. Il repose sur l'orientation de la maison, des protections solaires bien placées (débords de toit, brise-soleil, volets), une inertie suffisante pour amortir les pics de chaleur, et une ventilation pensée pour rafraîchir la nuit. Ce sont exactement les arbitrages que nous intégrons dès les premiers plans, en tenant compte de votre terrain et de son exposition. Une maison bien conçue de ce point de vue reste agréable en pleine canicule, sans surcoût de fonctionnement.</p>`,
    },
    {
      h2: "Notre approche : la RE2020 intégrée dès la conception",
      html: `<p>C'est là que se joue la différence entre une maison qui respecte tout juste la norme et une maison réellement performante. En tant que maître d'œuvre, nous intégrons les exigences RE2020 dès la conception avec l'architecte : implantation sur le terrain, orientation, dimensionnement des ouvertures, choix de l'isolation et des équipements. Plutôt que de subir la réglementation, nous nous en servons pour dessiner une maison cohérente, confortable et économe, adaptée à votre terrain et à votre mode de vie.</p>`,
    },
    {
      h2: "RE2020 et sur-mesure clé en main",
      html: `<p>Performance ne rime pas avec maison standardisée. Notre offre conjugue la RE2020, le sur-mesure et le clé en main : une maison conçue sur-mesure avec un architecte, conforme et performante, et gérée de bout en bout jusqu'à la remise des clés. Vous bénéficiez d'une construction durable sans renoncer à la liberté de plan ni à la simplicité d'un interlocuteur unique. Découvrez notre <a href="/services/maison-cle-en-main" class="text-primary underline">accompagnement clé en main</a>.</p>`,
    },
    {
      h2: "Parlons de votre projet RE2020",
      html: `<p>Vous voulez une maison neuve performante, confortable et qui vous ressemble ? Confiez-nous votre projet. Première estimation gratuite et sans engagement.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Demander mon estimation gratuite</a></p>`,
    },
  ],
  faq: [
    {
      question: "Toutes les maisons neuves doivent-elles être RE2020 ?",
      answer:
        "Oui. La RE2020 s'applique à toutes les constructions neuves de maison individuelle. La question n'est donc pas de la respecter ou non, mais de bien la concevoir.",
    },
    {
      question: "Quel est le surcoût d'une maison RE2020 ?",
      answer:
        "De l'ordre de 5 à 10 % du coût de construction, compensé à l'usage par des factures d'énergie nettement plus basses.",
    },
    {
      question: "Quel chauffage pour une maison RE2020 ?",
      answer:
        "Le plus souvent une pompe à chaleur, qui combine performance et énergie décarbonée. Le choix se fait selon la maison et le terrain.",
    },
    {
      question: "Une maison RE2020 est-elle plus confortable ?",
      answer:
        "Oui, c'est l'un de ses objectifs : isolation renforcée et conception bioclimatique apportent un confort stable en hiver comme en été, sans surchauffe estivale.",
    },
    {
      question: "Peut-on personnaliser une maison RE2020 ?",
      answer:
        "Totalement. La RE2020 encadre la performance, pas le style. Avec un maître d'œuvre, votre maison reste 100 % sur-mesure.",
    },
  ],
  relatedGuideSlugs: ["prix-maison-neuve-calvados", "maitre-doeuvre-ou-constructeur", "etapes-construction-maison"],
};

export const SERVICES: Service[] = [S2, S1, S4];

export const SERVICES_BY_SLUG: Record<string, Service> = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s]),
);

export function getService(slug: string): Service | undefined {
  return SERVICES_BY_SLUG[slug];
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}
