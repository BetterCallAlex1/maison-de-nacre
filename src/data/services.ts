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

// ────────────────────────────────────────────────────────────────────────────────
// G18 — Maison d'architecte (service hybride, 2 400/mo, KD 32)
// ────────────────────────────────────────────────────────────────────────────────

const SArchi: Service = {
  slug: "maison-architecte",
  title: "Maison d'architecte sur-mesure | Maison de Nacre",
  metaDescription:
    "Une maison d'architecte sur-mesure dans le Calvados : conception unique, RE2020, clé en main avec un maître d'œuvre. Avantages, prix et déroulé du projet.",
  h1: "Maison d'architecte sur-mesure dans le Calvados",
  primaryKeyword: "maison d'architecte",
  searchVolume: 2400,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "Une maison d'architecte, c'est une maison pensée pour vous et pour votre terrain, et non un modèle reproduit à l'identique. Loin du cliché de la maison de luxe inaccessible, c'est avant tout une maison conçue sur-mesure, optimisée et personnelle. Voici ce qui la distingue, ce qu'elle coûte vraiment, et comment nous la rendons accessible en clé en main dans la région de Caen.",
  sections: [
    {
      h2: "Qu'est-ce qu'une maison d'architecte ?",
      html: `<p>Une maison d'architecte est une maison dont la conception est confiée à un architecte, qui la dessine spécifiquement pour vos besoins, votre mode de vie et votre parcelle. Tout part d'une page blanche : l'implantation sur le terrain, l'orientation, les volumes, la lumière, la circulation entre les pièces. Rien n'est imposé par un catalogue. Le résultat est une maison unique, qui exploite au mieux les atouts et les contraintes de votre terrain, plutôt qu'un plan standard posé sans tenir compte du lieu.</p>`,
    },
    {
      h2: "Les avantages d'une maison d'architecte",
      html: `<p>Choisir une maison d'architecte apporte plusieurs bénéfices concrets. Le premier est l'<strong>unicité</strong> : votre maison vous ressemble et ne ressemble à aucune autre. Le deuxième est l'<strong>optimisation du terrain</strong> : l'architecte tire parti de la pente, de l'orientation et des vues, là où un modèle standard les ignore. Le troisième est la <strong>qualité de vie</strong> : lumière naturelle, volumes justes, circulations fluides, espaces pensés pour votre quotidien. Le quatrième est la <strong>performance</strong> : la conception bioclimatique et la RE2020 sont intégrées dès le départ, pour le confort et les économies d'énergie. Le dernier est la <strong>valeur</strong> : une maison singulière, bien conçue et performante, se distingue à la revente.</p>`,
    },
    {
      h2: "Maison d'architecte ou maison de catalogue ?",
      html: `<p>La différence est fondamentale. Une maison de catalogue est un modèle préexistant, décliné en quelques variantes, conçu pour être reproductible et donc rentable pour celui qui le vend. Une maison d'architecte est dessinée sur-mesure, sans modèle imposé. La première a l'avantage de la rapidité et d'un prix d'appel parfois bas ; la seconde a l'avantage de l'adaptation parfaite à votre terrain et à vos envies. Si vous avez un terrain avec du caractère, une vue, une pente, ou simplement une idée précise de la maison que vous voulez, le sur-mesure d'architecte prend tout son sens.</p>`,
    },
    {
      h2: "Combien coûte une maison d'architecte ?",
      html: `<p>C'est là que les idées reçues ont la vie dure. Une maison d'architecte n'est pas forcément plus chère à construire qu'une autre : le coût des travaux dépend de la surface, des finitions et de la complexité, pas du fait qu'un architecte ait dessiné les plans. Ce qui s'ajoute, c'est la rémunération de la conception, en pourcentage du coût des travaux. Et cet investissement se rentabilise souvent : un plan optimisé évite les mètres carrés inutiles, exploite mieux le terrain et limite les surcoûts techniques. Pour situer l'ensemble du budget, voir notre guide <a href="/guides/prix-maison-neuve-calvados" class="text-primary underline">prix d'une maison neuve dans le Calvados</a>, et pour le coût de l'accompagnement, notre guide <a href="/guides/cout-maitre-doeuvre" class="text-primary underline">combien coûte un maître d'œuvre</a>.</p>`,
    },
    {
      h2: "Architecte et maître d'œuvre : le duo gagnant",
      html: `<p>Faire dessiner sa maison par un architecte est une chose ; la faire construire en est une autre. C'est là qu'intervient le maître d'œuvre : il prolonge le travail de conception en consultant les artisans, en coordonnant le chantier et en suivant la réalisation jusqu'à la remise des clés. Chez Maison de Nacre, nous réunissons les deux : la conception sur-mesure avec un architecte, et le pilotage complet du projet en maîtrise d'œuvre. Vous bénéficiez d'une maison d'architecte sans avoir à coordonner vous-même conception et chantier. Pour comprendre ce métier, voir notre comparatif <a href="/guides/maitre-doeuvre-ou-constructeur" class="text-primary underline">maître d'œuvre ou constructeur</a>.</p>`,
    },
    {
      h2: "Le déroulé d'un projet de maison d'architecte",
      html: `<p>Le projet commence par un échange approfondi sur vos besoins, vos goûts et votre budget. L'architecte propose ensuite une esquisse, affinée avec vous jusqu'aux plans définitifs. Vient le dépôt du permis de construire, puis la consultation des artisans et la signature des devis. Le chantier démarre alors sous notre coordination, jusqu'à la réception et la remise des clés. À chaque étape, vous décidez, et nous gérons l'opérationnel. Le parcours complet est détaillé dans notre guide <a href="/guides/etapes-construction-maison" class="text-primary underline">les étapes d'une construction</a>.</p>`,
    },
    {
      h2: "Maison d'architecte : trois idées reçues à dépasser",
      html: `<p>La maison d'architecte traîne quelques préjugés qui méritent d'être corrigés. Premier mythe : « c'est réservé aux maisons de luxe ». Faux. L'architecte conçoit aussi bien des maisons familiales au budget mesuré ; ce qui compte, c'est la qualité de la conception, pas le niveau de gamme. Deuxième mythe : « c'est forcément plus cher ». Le coût des travaux ne dépend pas de l'auteur des plans, et un plan optimisé fait souvent économiser sur la surface et la technique ce qu'il coûte en conception. Troisième mythe : « c'est plus long et plus compliqué ». Avec un maître d'œuvre qui pilote conception et chantier, le parcours est au contraire plus fluide, car tout est coordonné par un seul interlocuteur.</p>
<p class="mt-4">En réalité, la vraie question n'est pas le prix mais l'adéquation : une maison d'architecte se justifie dès que vous voulez exploiter un terrain particulier, obtenir une maison qui vous ressemble, ou éviter les compromis d'un modèle standard. Pour beaucoup de familles, c'est le meilleur rapport entre l'investissement et la maison obtenue.</p>`,
    },
    {
      h2: "Notre offre : une maison d'architecte clé en main",
      html: `<p>Nous rendons la maison d'architecte simple et accessible : conception sur-mesure avec un architecte, gestion complète du projet en maîtrise d'œuvre, et livraison clé en main, le tout pour des honoraires clairs de 12 % du coût de construction. Vous obtenez une maison unique, performante et conforme à la RE2020, sans le stress de la coordination. Découvrez notre <a href="/services/maison-cle-en-main" class="text-primary underline">accompagnement clé en main</a>.</p>`,
    },
    {
      h2: "Donnez vie à votre maison d'architecte",
      html: `<p>Vous rêvez d'une maison unique, pensée pour vous et votre terrain ? Parlons-en. Maison de Nacre conçoit et réalise votre maison d'architecte clé en main. Première estimation gratuite et sans engagement.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Demander mon estimation gratuite</a></p>`,
    },
  ],
  faq: [
    {
      question: "Une maison d'architecte est-elle plus chère ?",
      answer:
        "Pas forcément à construire : le coût des travaux dépend de la surface et des finitions, pas de l'auteur des plans. S'ajoute la rémunération de la conception, souvent rentabilisée par un plan optimisé qui évite les surcoûts.",
    },
    {
      question: "Quelle différence entre une maison d'architecte et une maison de catalogue ?",
      answer:
        "La maison d'architecte est dessinée sur-mesure pour vous et votre terrain. La maison de catalogue est un modèle préexistant, décliné en quelques variantes.",
    },
    {
      question: "Faut-il obligatoirement un architecte pour construire ?",
      answer:
        "Le recours à un architecte est obligatoire au-delà d'un certain seuil de surface. En dessous, il reste fortement recommandé pour une maison sur-mesure et bien conçue.",
    },
    {
      question: "Peut-on avoir une maison d'architecte clé en main ?",
      answer:
        "Oui. Avec un maître d'œuvre, vous combinez la conception sur-mesure d'un architecte et la gestion complète du chantier jusqu'à la remise des clés.",
    },
    {
      question: "Une maison d'architecte respecte-t-elle la RE2020 ?",
      answer:
        "Oui, comme toute construction neuve, et même mieux : la conception bioclimatique de l'architecte sert directement la performance exigée par la RE2020.",
    },
  ],
  relatedGuideSlugs: ["prix-maison-neuve-calvados", "maitre-doeuvre-ou-constructeur", "cout-maitre-doeuvre"],
};

const S3: Service = {
  slug: "maison-plain-pied",
  title: "Maison de plain-pied sur-mesure | Maison de Nacre",
  metaDescription:
    "Construire une maison de plain-pied sur-mesure dans le Calvados : avantages, prix, conception, plain-pied ou étage. Avec un maître d'œuvre, clé en main.",
  h1: "Construire une maison de plain-pied sur-mesure",
  primaryKeyword: "maison plain pied",
  searchVolume: 5400,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "La maison de plain-pied séduit de plus en plus de familles et de futurs retraités, pour son confort, son accessibilité et sa simplicité de vie. Mais un bon plain-pied se conçoit avec soin, pour tirer parti du terrain et éviter ses quelques pièges. Voici tout ce qu'il faut savoir, et comment nous concevons votre maison de plain-pied sur-mesure dans la région de Caen.",
  sections: [
    {
      h2: "Qu'est-ce qu'une maison de plain-pied ?",
      html: `<p>Une maison de plain-pied est une maison de plein-pied, c'est-à-dire entièrement de plain-pied sur un seul niveau, sans étage ni escalier. Toutes les pièces, du séjour aux chambres, sont au même niveau, accessibles directement depuis le rez-de-chaussée. C'est un mode d'habitat simple et fluide, qui plaît par son confort au quotidien.</p>`,
    },
    {
      h2: "Les avantages d'une maison de plain-pied",
      html: `<p>Le plain-pied réunit plusieurs atouts. L'<strong>accessibilité</strong> d'abord : pas d'escalier, donc une maison adaptée à tous les âges, aux jeunes enfants comme aux personnes à mobilité réduite, et idéale pour vieillir chez soi. La <strong>sécurité</strong> ensuite : l'absence d'escalier réduit les risques de chute. La <strong>simplicité de vie</strong> : tout est au même niveau, sans monter ni descendre. Un <strong>entretien facilité</strong> : façade et toiture accessibles plus simplement. Et une <strong>convivialité</strong> naturelle, avec des espaces de vie ouverts et de plain-pied sur le jardin.</p>`,
    },
    {
      h2: "Les points d'attention d'un plain-pied",
      html: `<p>Le plain-pied a aussi ses contraintes, qu'il vaut mieux connaître. Il demande une <strong>emprise au sol plus grande</strong> pour une surface habitable donnée, donc un <strong>terrain plus vaste</strong>, ce qui pèse là où le foncier est cher. Il coûte généralement un peu plus cher au mètre carré qu'une maison à étage, car il mobilise plus de fondations et de toiture. Enfin, l'agencement doit être pensé pour préserver l'intimité des chambres, puisque tout est sur le même niveau. Ces points se gèrent très bien à la conception, à condition de les anticiper.</p>`,
    },
    {
      h2: "Maison de plain-pied ou maison à étage ?",
      html: `<p>Le choix dépend de votre terrain et de votre mode de vie. Le plain-pied privilégie le confort, l'accessibilité et la vie de plain-pied sur le jardin, mais consomme du terrain. La maison à étage économise le foncier en empilant la surface, et coûte un peu moins cher au mètre carré, mais impose un escalier. Sur un grand terrain, le plain-pied prend tout son sens ; sur une parcelle réduite ou chère, l'étage peut s'imposer. Notre guide <a href="/guides/prix-construction-maison-m2" class="text-primary underline">prix de construction au m²</a> détaille l'impact sur le coût.</p>`,
    },
    {
      h2: "Le prix d'une maison de plain-pied",
      html: `<p>À surface égale, une maison de plain-pied revient en général un peu plus cher au mètre carré qu'une maison à étage, du fait des fondations et de la toiture plus étendues. L'écart reste mesuré et dépend surtout du niveau de finition. Comme pour toute maison neuve, comptez de l'ordre de 2 800 €/m² livré pour un projet clé en main sur-mesure et RE2020, hors terrain. Notre guide <a href="/guides/prix-maison-neuve-calvados" class="text-primary underline">prix d'une maison neuve dans le Calvados</a> donne les repères complets.</p>`,
    },
    {
      h2: "Bien concevoir une maison de plain-pied",
      html: `<p>C'est là que se joue la réussite du projet. Un plain-pied bien conçu sépare clairement les espaces de jour (séjour, cuisine) et de nuit (chambres), pour préserver le calme et l'intimité. Il soigne l'apport de lumière naturelle, parfois plus délicat sans étage, par de grandes ouvertures et une bonne orientation. Et il intègre la conception bioclimatique de la RE2020 dès le départ, pour le confort été comme hiver. Un plan d'architecte fait toute la différence sur ces points. Voir notre page <a href="/services/maison-architecte" class="text-primary underline">maison d'architecte</a>.</p>`,
    },
    {
      h2: "Les formes et styles de maison de plain-pied",
      html: `<p>Le plain-pied se décline en de nombreuses formes, chacune avec ses atouts. La maison <strong>en longueur</strong> (rectangulaire) est la plus simple et la plus économique à construire, idéale sur un terrain tout en longueur. La maison <strong>en L</strong> crée un angle qui abrite une terrasse et structure le jardin, tout en séparant naturellement espaces de jour et de nuit. La maison <strong>en U</strong> enveloppe une cour ou une terrasse centrale, pour une intimité maximale et une belle luminosité. Côté style, le plain-pied s'accommode aussi bien d'une architecture <strong>traditionnelle</strong> normande (toit en pente, matériaux régionaux) que d'un parti pris <strong>contemporain</strong> (toit plat ou monopente, lignes épurées, grandes baies).</p>
<p class="mt-4">Le choix de la forme se fait en fonction du terrain, de l'orientation et de vos envies. C'est tout l'intérêt du sur-mesure : plutôt que de partir d'un modèle figé, on dessine la forme qui exploite le mieux votre parcelle et votre vue, pour une maison à la fois belle et fonctionnelle.</p>`,
    },
    {
      h2: "Pour qui la maison de plain-pied ?",
      html: `<p>Le plain-pied convient particulièrement aux familles qui veulent une vie fluide et un lien direct avec le jardin, aux personnes qui anticipent l'avenir et souhaitent une maison où vieillir confortablement, et à toute personne sensible à l'accessibilité et à la sécurité. C'est un choix de confort durable, qui traverse les âges de la vie.</p>`,
    },
    {
      h2: "Notre offre : un plain-pied sur-mesure et clé en main",
      html: `<p>Nous concevons et réalisons votre maison de plain-pied sur-mesure, pensée pour votre terrain et votre mode de vie, conforme à la RE2020 et livrée clé en main. De la conception avec l'architecte au pilotage du chantier, vous bénéficiez d'un interlocuteur unique et d'honoraires clairs de 12 % du coût de construction. Découvrez notre <a href="/services/maison-cle-en-main" class="text-primary underline">accompagnement clé en main</a>.</p>`,
    },
    {
      h2: "Concevons votre maison de plain-pied",
      html: `<p>Vous rêvez d'une maison de plain-pied qui vous ressemble ? Parlons de votre projet. Maison de Nacre la conçoit sur-mesure et la réalise clé en main, dans la région de Caen. Estimation gratuite et sans engagement.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Demander mon estimation gratuite</a></p>`,
    },
  ],
  faq: [
    {
      question: "Quels sont les avantages d'une maison de plain-pied ?",
      answer:
        "Accessibilité sans escalier, confort de vie sur un seul niveau, sécurité, entretien facilité et lien direct avec le jardin. C'est aussi une maison où vieillir sereinement.",
    },
    {
      question: "Une maison de plain-pied est-elle plus chère ?",
      answer:
        "Légèrement plus chère au mètre carré qu'une maison à étage, car elle demande plus de fondations et de toiture, et un terrain plus grand. L'écart dépend des finitions.",
    },
    {
      question: "Quelle surface de terrain pour un plain-pied ?",
      answer:
        "Plus grande qu'à étage à surface habitable égale, puisque toute la maison occupe le rez-de-chaussée. C'est un critère à intégrer dès le choix du terrain.",
    },
    {
      question: "Plain-pied ou étage : que choisir ?",
      answer:
        "Le plain-pied pour le confort et l'accessibilité, sur un terrain assez grand. L'étage pour économiser le foncier sur une parcelle réduite ou chère.",
    },
    {
      question: "Une maison de plain-pied respecte-t-elle la RE2020 ?",
      answer:
        "Oui, comme toute construction neuve. Une bonne conception bioclimatique permet même d'optimiser lumière et confort sur un seul niveau.",
    },
  ],
  relatedGuideSlugs: ["prix-construction-maison-m2", "prix-maison-neuve-calvados", "maitre-doeuvre-ou-constructeur"],
};

const S6: Service = {
  slug: "maison-contemporaine",
  title: "Maison contemporaine sur-mesure | Maison de Nacre",
  metaDescription:
    "Construire une maison contemporaine sur-mesure dans le Calvados : lignes épurées, grandes baies, RE2020. Avec un architecte et un maître d'œuvre, clé en main.",
  h1: "Construire une maison contemporaine sur-mesure",
  primaryKeyword: "maison contemporaine",
  searchVolume: 5400,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "La maison contemporaine séduit par ses lignes épurées, sa lumière et sa modernité. Mais une belle maison contemporaine ne s'improvise pas : elle se dessine sur-mesure, pour marier esthétique, confort et performance. Voici ce qui la caractérise, et comment nous concevons votre maison contemporaine dans la région de Caen.",
  sections: [
    {
      h2: "Qu'est-ce qu'une maison contemporaine ?",
      html: `<p>Une maison contemporaine est une maison au style actuel, qui rompt avec les codes de la maison traditionnelle. Elle se reconnaît à ses lignes épurées, ses volumes géométriques, son toit souvent plat ou monopente, ses grandes ouvertures vitrées et son jeu de matériaux. C'est une architecture qui privilégie la lumière, l'espace et la sobriété, au service d'un mode de vie moderne et ouvert sur l'extérieur.</p>`,
    },
    {
      h2: "Les caractéristiques d'une maison contemporaine",
      html: `<p>Plusieurs éléments signent le style contemporain. Les <strong>lignes épurées</strong> et les volumes simples, sans ornement superflu. Le <strong>toit plat ou monopente</strong>, qui remplace la toiture traditionnelle à deux pentes. Les <strong>grandes baies vitrées</strong>, qui font entrer la lumière et ouvrent la maison sur le jardin. Le <strong>jeu de matériaux</strong> (enduit, bois, métal, béton) et de couleurs sobres. Et souvent des <strong>espaces de vie ouverts</strong>, avec une cuisine intégrée au séjour. Chaque maison contemporaine reste unique, dessinée selon les envies et le terrain.</p>`,
    },
    {
      h2: "Les avantages d'une maison contemporaine",
      html: `<p>Au-delà de l'esthétique, le contemporain apporte des bénéfices concrets. La <strong>lumière naturelle</strong> abondante, grâce aux grandes ouvertures, pour des espaces de vie agréables. La <strong>modernité</strong> et la valeur d'une architecture actuelle, qui se distingue. La <strong>personnalisation</strong> poussée, puisque le style contemporain se prête particulièrement au sur-mesure. Et une bonne <strong>synergie avec la performance</strong> énergétique, à condition de bien concevoir les apports solaires.</p>`,
    },
    {
      h2: "Maison contemporaine et RE2020",
      html: `<p>Les grandes baies vitrées sont l'atout et le défi du contemporain. Bien orientées et bien protégées, elles captent la lumière et la chaleur l'hiver, un vrai plus pour la RE2020. Mais sans protections solaires adaptées, elles peuvent provoquer une surchauffe l'été. Tout se joue à la conception : orientation, dimensionnement des vitrages, débords et brise-soleil, inertie. Une maison contemporaine bien pensée est à la fois lumineuse et performante. Notre guide <a href="/guides/re2020" class="text-primary underline">la RE2020 expliquée</a> détaille ces principes.</p>`,
    },
    {
      h2: "Le prix d'une maison contemporaine",
      html: `<p>Le style contemporain ne renchérit pas fondamentalement la construction : le coût dépend surtout de la surface, des finitions et de la complexité des volumes. Certains partis pris (toit plat, grandes baies, matériaux nobles) peuvent ajouter au budget, d'autres l'optimisent par leur simplicité. Comme pour toute maison neuve sur-mesure clé en main, comptez de l'ordre de 2 800 €/m² livré, hors terrain. Notre guide <a href="/guides/prix-construction-maison-m2" class="text-primary underline">prix de construction au m²</a> donne les repères.</p>`,
    },
    {
      h2: "Toit plat ou toit monopente ?",
      html: `<p>C'est l'une des signatures du contemporain. Le <strong>toit plat</strong> offre des lignes très épurées et permet, selon les cas, une toiture-terrasse ou une végétalisation. Le <strong>toit monopente</strong> (une seule pente) garde une esthétique moderne tout en facilitant l'écoulement des eaux et l'intégration de panneaux solaires. Le choix dépend du style recherché, des contraintes du plan local d'urbanisme et de la performance visée. Un architecte vous oriente vers la solution la plus cohérente.</p>`,
    },
    {
      h2: "Bien concevoir une maison contemporaine",
      html: `<p>La réussite d'une maison contemporaine tient à la qualité de sa conception. Les volumes, les ouvertures, les matériaux et les détails doivent s'harmoniser, tout en intégrant la performance énergétique et les contraintes locales. C'est typiquement un projet où le regard d'un architecte fait la différence, pour une maison à la fois belle, fonctionnelle et durable. Voir notre page <a href="/services/maison-architecte" class="text-primary underline">maison d'architecte</a>.</p>`,
    },
    {
      h2: "Maison contemporaine ou traditionnelle : que choisir ?",
      html: `<p>Le choix entre contemporain et traditionnel est avant tout une question de goût et de cadre. La maison <strong>contemporaine</strong> mise sur la lumière, les volumes ouverts et une esthétique actuelle ; elle se distingue et vieillit bien quand elle est soignée. La maison <strong>traditionnelle</strong> normande, avec sa toiture à deux pentes et ses matériaux régionaux, s'intègre naturellement dans certains villages et rassure par son caractère intemporel. Au-delà du style, le plan local d'urbanisme a son mot à dire : certaines communes encadrent l'aspect des constructions (pente de toit, matériaux, couleurs), ce qui peut orienter le choix.</p>
<p>Dans les deux cas, la qualité de conception prime sur le style : une maison bien pensée, lumineuse et performante, sera réussie qu'elle soit contemporaine ou traditionnelle. Le sur-mesure permet justement de trouver le bon équilibre entre vos envies, votre terrain et les règles locales, plutôt que de choisir entre deux modèles figés.</p>`,
    },
    {
      h2: "Notre offre : une maison contemporaine clé en main",
      html: `<p>Nous concevons et réalisons votre maison contemporaine sur-mesure, dessinée avec un architecte, conforme à la RE2020 et livrée clé en main. De la première esquisse au suivi du chantier, vous bénéficiez d'un interlocuteur unique et d'honoraires clairs de 12 % du coût de construction. Découvrez notre <a href="/services/maison-cle-en-main" class="text-primary underline">accompagnement clé en main</a>.</p>`,
    },
    {
      h2: "Concevons votre maison contemporaine",
      html: `<p>Vous rêvez d'une maison contemporaine lumineuse et unique ? Parlons de votre projet. Maison de Nacre la conçoit sur-mesure et la réalise clé en main, dans la région de Caen. Estimation gratuite et sans engagement.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Demander mon estimation gratuite</a></p>`,
    },
  ],
  faq: [
    {
      question: "Qu'est-ce qu'une maison contemporaine ?",
      answer:
        "Une maison au style actuel, aux lignes épurées, avec un toit plat ou monopente, de grandes baies vitrées et des volumes géométriques, qui privilégie la lumière et l'espace.",
    },
    {
      question: "Une maison contemporaine est-elle plus chère ?",
      answer:
        "Pas fondamentalement : le coût dépend surtout de la surface et des finitions. Certains partis pris (toit plat, grandes baies) peuvent ajouter au budget, d'autres l'optimisent.",
    },
    {
      question: "Toit plat ou toit monopente pour une maison contemporaine ?",
      answer:
        "Le toit plat offre des lignes très épurées, le monopente facilite l'écoulement des eaux et l'intégration solaire. Le choix dépend du style et des règles d'urbanisme.",
    },
    {
      question: "Une maison contemporaine respecte-t-elle la RE2020 ?",
      answer:
        "Oui, comme toute construction neuve. Ses grandes baies sont un atout pour la lumière, à condition de bien gérer les protections solaires pour le confort d'été.",
    },
    {
      question: "Peut-on personnaliser une maison contemporaine ?",
      answer:
        "Totalement. Le style contemporain se prête particulièrement au sur-mesure, dessiné avec un architecte selon vos envies et votre terrain.",
    },
  ],
  relatedGuideSlugs: ["re2020", "prix-construction-maison-m2"],
};

export const SERVICES: Service[] = [S6, S2, S1, S4, SArchi, S3];

export const SERVICES_BY_SLUG: Record<string, Service> = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s]),
);

export function getService(slug: string): Service | undefined {
  return SERVICES_BY_SLUG[slug];
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}
