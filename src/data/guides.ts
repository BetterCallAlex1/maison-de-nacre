// Store de guides éditoriaux. Volontairement plat / typé / sans React :
// importable depuis vite.config.ts pour générer la liste prerender.

export type GuideSection = {
  /** Titre H2. */
  h2: string;
  /** Contenu rendu en HTML brut (paragraphes <p>, tableaux, listes). */
  html: string;
};

export type GuideFaqItem = {
  question: string;
  /** Réponse en HTML. */
  answer: string;
};

export type Guide = {
  slug: string;
  /** <title> — max 60 c. */
  title: string;
  /** <meta name="description"> — max 160 c. */
  metaDescription: string;
  /** H1 visible. */
  h1: string;
  /** Mot-clé principal visé (info interne). */
  primaryKeyword: string;
  /** Volume Semrush (info interne). */
  searchVolume: number | null;
  /** Intro affichée sous le H1. */
  intro: string;
  sections: GuideSection[];
  faq: GuideFaqItem[];
  /** ISO date. */
  publishedAt: string;
  updatedAt: string;
  relatedGuideSlugs?: string[];
  relatedCommuneSlugs?: string[];
};

// ────────────────────────────────────────────────────────────────────────────────
// G11 — Prix maison neuve Calvados (hub local, DVF)
// ────────────────────────────────────────────────────────────────────────────────

const G11: Guide = {
  slug: "prix-maison-neuve-calvados",
  title: "Prix maison neuve Calvados 2026 : budget réel | Maison de Nacre",
  metaDescription:
    "Prix d'une maison neuve dans le Calvados : terrain + construction par zone, données DVF 2025, fourchettes 90 / 120 / 150 m². Budget réel, sans estimation gonflée.",
  h1: "Prix d'une maison neuve dans le Calvados : le vrai budget en 2026",
  primaryKeyword: "prix maison neuve Calvados",
  searchVolume: 0,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "Le prix d'une maison neuve dans le Calvados se construit sur trois lignes : le terrain, la construction, et les frais annexes (raccordements, taxes, honoraires de maîtrise d'œuvre). Cet article s'appuie sur la base DVF (Demandes de valeurs foncières) des ventes 2024-2025 pour donner des fourchettes réelles par zone, et non des moyennes nationales qui ne veulent rien dire sur le terrain. Vous y trouverez le budget total pour trois projets types — 90, 120 et 150 m² — ainsi que la cartographie des prix de terrain par bassin (Caen, périurbain, côte fleurie, Bessin, Sud-Calvados).",
  sections: [
    {
      h2: "Combien coûte une maison neuve dans le Calvados en 2026 ?",
      html: `<p>Sur la base de notre étude des ventes 2024-2025, le budget total moyen d'une maison neuve dans le Calvados se situe entre <strong>2 800 et 3 600 € / m² livré, terrain compris</strong>, selon la zone et le niveau de prestation. Pour une maison de 120 m² avec un terrain de 500 m², cela représente un budget réel de <strong>340 000 à 430 000 €</strong>, frais annexes inclus.</p><p>Ce chiffre regroupe : le foncier (40 à 55 % du budget selon la zone), la construction (40 à 50 %), les raccordements et taxes (3 à 5 %), et les honoraires de maîtrise d'œuvre (8 à 12 %). Dans la suite de cet article, nous détaillons chaque ligne sur la base de données réelles, pas d'estimations marketing.</p>`,
    },
    {
      h2: "Prix du terrain à bâtir par bassin (données DVF 2024-2025)",
      html: `<p>Le poste foncier est le plus volatile : à 15 km près, le prix au m² peut doubler. Les fourchettes ci-dessous sont issues des ventes réelles enregistrées dans la base DVF sur les deux dernières années, hors transactions atypiques (terrains &lt; 200 m² ou &gt; 2 000 m² exclus pour fiabilité).</p>
<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr><th class="text-left py-2 pr-4">Zone</th><th class="text-right py-2 pr-4">Médiane € / m²</th><th class="text-right py-2 pr-4">Fourchette courante</th><th class="text-right py-2">Terrain 500 m²</th></tr></thead><tbody>
<tr class="border-t"><td class="py-2 pr-4">Caen intra-périphérique</td><td class="text-right pr-4">295 €</td><td class="text-right pr-4">220 – 380 €</td><td class="text-right">≈ 147 500 €</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Périurbain Caen (Hérouville, Ifs, Bretteville-sur-Odon)</td><td class="text-right pr-4">185 €</td><td class="text-right pr-4">140 – 240 €</td><td class="text-right">≈ 92 500 €</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Couronne périurbaine (Verson, Carpiquet, Mondeville)</td><td class="text-right pr-4">135 €</td><td class="text-right pr-4">95 – 175 €</td><td class="text-right">≈ 67 500 €</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Côte de Nacre (Ouistreham, Douvres, Lion-sur-Mer)</td><td class="text-right pr-4">220 €</td><td class="text-right pr-4">160 – 310 €</td><td class="text-right">≈ 110 000 €</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Côte Fleurie (Cabourg, Houlgate, Dives)</td><td class="text-right pr-4">260 €</td><td class="text-right pr-4">180 – 380 €</td><td class="text-right">≈ 130 000 €</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Bessin (Bayeux, Tilly, Creully)</td><td class="text-right pr-4">95 €</td><td class="text-right pr-4">65 – 135 €</td><td class="text-right">≈ 47 500 €</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Pays d'Auge intérieur (Lisieux, Livarot)</td><td class="text-right pr-4">80 €</td><td class="text-right pr-4">50 – 115 €</td><td class="text-right">≈ 40 000 €</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Sud-Calvados (Falaise, Vire)</td><td class="text-right pr-4">55 €</td><td class="text-right pr-4">35 – 80 €</td><td class="text-right">≈ 27 500 €</td></tr>
</tbody></table></div>
<p class="mt-3 text-sm">Source : DVF — Demandes de valeurs foncières, ventes 2024-2025, traitement Maison de Nacre. Les fourchettes correspondent aux 1er et 3e quartiles observés.</p>`,
    },
    {
      h2: "Prix de construction au m² : ce que coûte la maison seule",
      html: `<p>Pour la partie construction (hors terrain, hors raccordements), le marché 2026 du Calvados se positionne dans une fourchette de <strong>1 650 à 2 300 € HT / m² de surface habitable</strong>, selon trois facteurs principaux : le niveau de prestation, le respect strict de la RE2020 (et non son contournement), et la compacité du plan.</p>
<ul class="list-disc pl-6 space-y-2 mt-3">
<li><strong>Entrée de gamme RE2020 (1 650 – 1 800 € / m²)</strong> : plan compact, façade simple, prestations standard, chauffage pompe à chaleur air/eau, finitions correctes mais sans recherche architecturale.</li>
<li><strong>Milieu de gamme (1 850 – 2 050 € / m²)</strong> : décrochés de façade, garage intégré, prestations supérieures (carrelage grand format, menuiseries alu, domotique), isolation renforcée.</li>
<li><strong>Haut de gamme sur-mesure (2 100 – 2 300 € / m²)</strong> : conception architecte, matériaux nobles, large vitrage, équipements RE2020 optimisés (PAC géothermique, panneaux photovoltaïques en autoconsommation, VMC double flux).</li>
</ul>
<p class="mt-4">Pour la méthodologie de calcul détaillée du prix au m² (TVA, prestations comptabilisées, surface habitable vs SHON), consultez notre <a href="/guides/prix-construction-maison-m2" class="text-primary underline">guide dédié au prix de construction au m²</a>.</p>`,
    },
    {
      h2: "Surcoût RE2020 : combien faut-il vraiment provisionner ?",
      html: `<p>La RE2020, entrée en vigueur en 2022 et durcie en 2025, impose des contraintes d'isolation, de production d'énergie bas-carbone et de matériaux à faible empreinte. Sur le terrain, le surcoût réel par rapport à la RT2012 (norme précédente) se situe entre <strong>5 et 9 % du budget construction</strong>, soit 8 000 à 18 000 € pour une maison de 120 m². Ce surcoût est compensé en 10 à 15 ans par les économies d'énergie, et conditionne désormais l'éligibilité au PTZ et à la valeur de revente.</p><p>Les postes qui montent : la pompe à chaleur (vs gaz interdit en neuf), l'isolation des combles et des murs (passage à 12-14 cm de laine), les menuiseries triple vitrage en exposition nord, et le recours au bois ou aux matériaux biosourcés.</p>`,
    },
    {
      h2: "Trois budgets types : 90, 120, 150 m² livrés en 2026",
      html: `<p>Pour donner des repères concrets, voici trois projets types calés sur des terrains réels du périurbain caennais (zone à 135 € / m²), prestations milieu de gamme RE2020, maîtrise d'œuvre incluse :</p>
<div class="overflow-x-auto mt-4"><table class="w-full text-sm"><thead><tr><th class="text-left py-2 pr-4">Poste</th><th class="text-right py-2 pr-4">Maison 90 m²</th><th class="text-right py-2 pr-4">Maison 120 m²</th><th class="text-right">Maison 150 m²</th></tr></thead><tbody>
<tr class="border-t"><td class="py-2 pr-4">Terrain (500 m²)</td><td class="text-right pr-4">67 500 €</td><td class="text-right pr-4">67 500 €</td><td class="text-right">67 500 €</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Construction RE2020</td><td class="text-right pr-4">171 000 €</td><td class="text-right pr-4">228 000 €</td><td class="text-right">285 000 €</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Raccordements + taxes</td><td class="text-right pr-4">12 000 €</td><td class="text-right pr-4">14 000 €</td><td class="text-right">16 000 €</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Honoraires maîtrise d'œuvre (12 %)</td><td class="text-right pr-4">20 500 €</td><td class="text-right pr-4">27 400 €</td><td class="text-right">34 200 €</td></tr>
<tr class="border-t font-semibold"><td class="py-2 pr-4">Total clé en main</td><td class="text-right pr-4">271 000 €</td><td class="text-right pr-4">336 900 €</td><td class="text-right">402 700 €</td></tr>
</tbody></table></div>
<p class="mt-3 text-sm">Ces chiffres excluent l'ameublement, la piscine et les aménagements extérieurs lourds (plus de 200 m² de terrasse, mur de soutènement).</p>`,
    },
    {
      h2: "Pourquoi passer par un maître d'œuvre plutôt qu'autrement",
      html: `<p>Sur les budgets ci-dessus, la ligne « honoraires maîtrise d'œuvre 12 % » fait souvent réagir. Elle se compare en réalité à la marge intégrée des opérateurs nationaux (15 à 25 % selon les contrats) et garantit trois choses : un interlocuteur unique sur toute la durée du chantier, des devis négociés avec des artisans locaux (pas un catalogue imposé), et un permis de construire conçu pour vous, pas pour optimiser la marge de l'opérateur.</p><p>La différence concrète entre les deux approches est détaillée dans notre comparatif <a href="/guides/maitre-doeuvre-ou-constructeur" class="text-primary underline">maître d'œuvre ou constructeur : que choisir</a>.</p>`,
    },
    {
      h2: "Prix par commune : nos pages locales",
      html: `<p>Pour les budgets détaillés par commune (prix médian du terrain local, ventes récentes, niveau de tension foncière), nous publions une page par commune du Calvados active sur le marché du neuf. Quelques exemples à venir : Caen, Hérouville-Saint-Clair, Ifs, Bretteville-sur-Odon, Verson, Douvres-la-Délivrande, Ouistreham, Cabourg, Bayeux, Lisieux. Ces pages seront mises en ligne progressivement.</p>`,
    },
    {
      h2: "Ce qu'il faut retenir",
      html: `<ul class="list-disc pl-6 space-y-2">
<li>Budget total moyen 2026 : <strong>2 800 à 3 600 € / m² livré</strong>, terrain compris.</li>
<li>Le terrain pèse 40 à 55 % du projet : c'est la variable d'ajustement principale.</li>
<li>Pour une maison de 120 m² en périurbain caennais : compter <strong>≈ 335 000 €</strong> clé en main, RE2020.</li>
<li>Surcoût RE2020 réel : 5 à 9 %, amorti en 10 à 15 ans.</li>
<li>Données issues de DVF, pas d'estimations marketing.</li>
</ul>`,
    },
  ],
  faq: [
    {
      question: "Quel est le prix moyen d'une maison neuve dans le Calvados en 2026 ?",
      answer:
        "Entre 2 800 et 3 600 € / m² livré, terrain compris. Pour une maison de 120 m² avec un terrain de 500 m² en zone périurbaine de Caen, le budget réel est d'environ 335 000 € clé en main, frais et maîtrise d'œuvre inclus.",
    },
    {
      question: "Combien coûte le terrain à bâtir dans le Calvados ?",
      answer:
        "Le prix médian observé sur les ventes DVF 2024-2025 va de 55 € / m² dans le Sud-Calvados à 295 € / m² dans Caen intra-périphérique. La couronne périurbaine de Caen se situe autour de 135 à 185 € / m².",
    },
    {
      question: "La RE2020 augmente-t-elle beaucoup le prix ?",
      answer:
        "Le surcoût réel se situe entre 5 et 9 % du budget construction, soit 8 000 à 18 000 € pour une maison de 120 m². Il est amorti en 10 à 15 ans par les économies d'énergie et conditionne l'éligibilité au PTZ.",
    },
    {
      question: "Faut-il acheter le terrain avant de chiffrer la maison ?",
      answer:
        "Idéalement, on chiffre les deux en parallèle. Une étude de faisabilité gratuite permet de valider qu'un terrain visé est compatible avec le projet (pente, viabilisation, PLU) avant l'achat — et d'éviter les mauvaises surprises post-acquisition.",
    },
    {
      question: "Le prix au m² baisse-t-il sur les grandes maisons ?",
      answer:
        "Oui, légèrement : les postes fixes (cuisine, salle de bain, équipements techniques) sont mutualisés sur plus de surface. On observe environ 100 à 150 € de moins par m² entre une 90 m² et une 150 m² à prestations égales.",
    },
  ],
  relatedGuideSlugs: ["prix-construction-maison-m2", "maitre-doeuvre-ou-constructeur"],
};

// ────────────────────────────────────────────────────────────────────────────────
// G6 — Maître d'œuvre ou constructeur (comparatif neutre, KD 7)
// ────────────────────────────────────────────────────────────────────────────────

const G6: Guide = {
  slug: "maitre-doeuvre-ou-constructeur",
  title: "Maître d'œuvre ou constructeur : que choisir | Maison de Nacre",
  metaDescription:
    "Différences réelles entre maître d'œuvre et constructeur en 2026 : prix, garanties, liberté de plan, choix des artisans. Comparatif sans langue de bois.",
  h1: "Maître d'œuvre ou constructeur : le vrai comparatif",
  primaryKeyword: "maître d'œuvre ou constructeur",
  searchVolume: 170,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "Quand on décide de faire construire, une question revient vite : faut-il passer par un maître d'œuvre ou par un constructeur ? Les deux mènent à une maison neuve, mais ce sont deux métiers différents, avec deux façons de fixer le prix, deux niveaux de liberté et deux répartitions du risque. Voici un comparatif sans langue de bois, y compris les cas où le constructeur reste le bon choix.",
  sections: [
    {
      h2: "Les deux modèles en une phrase",
      html: `<p>Le <strong>maître d'œuvre</strong> conçoit votre maison et assemble pour vous l'équipe qui va la construire. Il dessine le projet (ou travaille avec un architecte), met les artisans en concurrence, puis pilote le chantier. Vous restez maître d'ouvrage : les contrats sont à votre nom, et le maître d'œuvre est rémunéré par des honoraires affichés, sans marge sur les travaux.</p>
<p>Le <strong>constructeur</strong> vous vend une maison. Il propose le plus souvent des modèles, intègre sa marge dans un prix global, et signe avec vous un contrat unique qui l'engage sur un prix et un délai. Vous achetez un produit fini plutôt que vous ne pilotez un projet.</p>
<p>Un mot au passage sur l'architecte, souvent confondu avec le maître d'œuvre : l'architecte conçoit les plans, le maître d'œuvre conçoit <strong>et</strong> coordonne l'exécution jusqu'à la livraison. Beaucoup de maîtres d'œuvre travaillent main dans la main avec un architecte, ce qui vous donne le meilleur des deux.</p>`,
    },
    {
      h2: "Qu'est-ce qu'un maître d'œuvre, concrètement ?",
      html: `<p>Avant de comparer, posons le métier. Un maître d'œuvre est le chef d'orchestre de votre construction. Il traduit votre projet en plans, chiffre le coût réel de chaque corps de métier, consulte plusieurs artisans pour chaque lot, puis suit le chantier semaine après semaine : il vérifie la qualité, fait respecter le planning, valide les situations de paiement et règle les imprévus à votre place.</p>
<p>Concrètement, il porte trois casquettes. Concepteur : il dessine la maison, seul ou avec un architecte. Acheteur pour votre compte : il met les entreprises en concurrence et négocie, sans toucher de marge sur leurs devis. Pilote : il coordonne les interventions dans le bon ordre et contrôle l'exécution jusqu'à la réception. Vous gardez la décision sur tout, lui gère l'opérationnel et défend vos intérêts face aux entreprises.</p>
<p>C'est cette position d'intermédiaire transparent, payé par vous et non par les artisans, qui le distingue fondamentalement du constructeur, lequel se rémunère sur la vente de la maison elle-même.</p>`,
    },
    {
      h2: "Le comparatif sur 8 critères",
      html: `<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr><th class="text-left py-2 pr-4">Critère</th><th class="text-left py-2 pr-4">Maître d'œuvre</th><th class="text-left py-2">Constructeur</th></tr></thead><tbody>
<tr class="border-t"><td class="py-2 pr-4">Rémunération</td><td class="py-2 pr-4">Honoraires affichés (souvent 12 % du coût)</td><td class="py-2">Marge intégrée au prix global, peu visible</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Plan</td><td class="py-2 pr-4">Sur-mesure, libre</td><td class="py-2">Souvent un modèle du catalogue</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Choix des artisans</td><td class="py-2 pr-4">Vous choisissez avec lui</td><td class="py-2">Imposés par le constructeur</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Garantie décennale</td><td class="py-2 pr-4">Oui (chaque entreprise)</td><td class="py-2">Oui (chaque entreprise)</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Assurance dommage-ouvrage</td><td class="py-2 pr-4">À votre charge</td><td class="py-2">À votre charge</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Garantie de livraison à prix et délai</td><td class="py-2 pr-4">Non automatique</td><td class="py-2">Oui, incluse au contrat</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Gestion des avenants</td><td class="py-2 pr-4">Transparente, au cas par cas</td><td class="py-2">Cadrée par le contrat</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Liberté des matériaux</td><td class="py-2 pr-4">Totale</td><td class="py-2">Limitée aux gammes proposées</td></tr>
</tbody></table></div>
<p class="mt-4">Aucun modèle n'est « meilleur » dans l'absolu. Tout dépend de ce que vous cherchez : maîtrise et sur-mesure d'un côté, sécurité contractuelle et simplicité de l'autre.</p>`,
    },
    {
      h2: "Côté prix : ce que cache la marge intégrée",
      html: `<p>C'est le point le plus mal compris. Un constructeur n'affiche pas sa marge : elle est fondue dans le prix global de la maison. Selon les acteurs, elle représente souvent 15 à 25 % du coût réel des travaux. Vous payez un prix « tout compris », mais vous ne voyez ni le coût réel de chaque lot, ni la part qui revient au constructeur.</p>
<p>Un maître d'œuvre, lui, facture des honoraires affichés. Chez Maison de Nacre, c'est 12 % du coût de construction, et vous voyez les devis réels de chaque artisan. À projet équivalent, des honoraires transparents de 12 % pèsent généralement moins lourd qu'une marge opaque de 15 à 25 %.</p>
<p>Une nuance honnête : une partie de la marge du constructeur paie sa garantie de livraison (voir plus bas). Vous ne comparez donc pas seulement deux prix, mais deux niveaux de service. Pour les chiffres détaillés d'un projet dans le département, voir notre guide <a href="/guides/prix-maison-neuve-calvados" class="text-primary underline">prix d'une maison neuve dans le Calvados</a>.</p>`,
    },
    {
      h2: "Côté garanties : ce que vous gardez dans les deux cas",
      html: `<p>Bonne nouvelle : les protections essentielles existent quel que soit le modèle, parce qu'elles sont attachées aux entreprises qui interviennent, pas au mode de contrat.</p>
<p>Dans les deux cas, vous bénéficiez de la <strong>garantie décennale</strong> (dix ans sur les éléments structurels, portée par chaque entreprise), de la <strong>garantie de parfait achèvement</strong> (un an) et de la <strong>garantie biennale</strong> (deux ans sur les équipements). L'<strong>assurance dommage-ouvrage</strong>, obligatoire, est à votre charge dans les deux modèles : elle avance le financement des réparations couvertes par la décennale.</p>
<p>La vraie différence se joue sur la <strong>garantie de livraison à prix et délai convenus</strong>. Le constructeur l'inclut dans son contrat : si le chantier dérape, un assureur prend le relais pour livrer la maison au prix prévu. C'est un vrai filet de sécurité, et c'est l'argument le plus solide en faveur du constructeur. Avec un maître d'œuvre, vous signez des contrats séparés avec chaque artisan : pas de garantie de livraison unique, mais un pilotage rapproché qui réduit le risque, et une transparence totale sur chaque poste.</p>`,
    },
    {
      h2: "Côté liberté : pourquoi le sur-mesure passe par le maître d'œuvre",
      html: `<p>Si vous voulez une maison qui vous ressemble plutôt qu'un modèle, le maître d'œuvre est la voie naturelle. Le plan part d'une page blanche, pensé pour votre terrain, votre mode de vie et votre budget. Vous choisissez vos artisans, vos matériaux, vos équipements, sans être limité à un catalogue ou à des partenaires imposés.</p>
<p>Un constructeur peut personnaliser à la marge, mais sa logique reste celle du modèle reproductible : c'est ce qui lui permet de tenir ses prix et ses délais. Le sur-mesure, lui, demande la souplesse d'un projet piloté lot par lot.</p>`,
    },
    {
      h2: "Les cas où le constructeur reste pertinent",
      html: `<p>Jouons franc-jeu : le constructeur est parfois le meilleur choix. Si votre terrain est dans un lotissement qui impose un modèle ou un partenaire, si vous êtes pressé et que la simplicité d'un interlocuteur unique prime, ou si votre budget est très serré (sous 200 000 €) et que vous acceptez un modèle standard, le constructeur fait le travail. Sa garantie de livraison rassure aussi les personnes qui veulent zéro prise de risque sur le prix final.</p>
<p>À l'inverse, dès que vous avez un terrain libre, une envie de plan unique et le souhait de comprendre où va chaque euro, le maître d'œuvre prend l'avantage.</p>`,
    },
    {
      h2: "Comment choisir : 4 questions à se poser",
      html: `<ol class="list-decimal pl-6 space-y-2">
<li><strong>Votre terrain est-il libre ou contraint ?</strong> Un terrain libre ouvre le sur-mesure (maître d'œuvre). Un lotissement à modèle imposé oriente vers le constructeur.</li>
<li><strong>Voulez-vous un plan unique ou un modèle vous convient-il ?</strong> Plan unique : maître d'œuvre. Modèle éprouvé : constructeur.</li>
<li><strong>Quelle est votre tolérance à la marge opaque ?</strong> Si voir le coût réel de chaque lot compte pour vous, le maître d'œuvre est plus transparent.</li>
<li><strong>Privilégiez-vous la sécurité contractuelle ou la maîtrise ?</strong> La garantie de livraison du constructeur sécurise le prix. Le maître d'œuvre offre maîtrise et transparence, avec un pilotage rapproché.</li>
</ol>
<p class="mt-4">Si vous hésitez encore entre construire et acheter dans l'ancien avant même cette question, notre guide <a href="/guides/construire-ou-acheter-maison" class="text-primary underline">construire neuf ou acheter</a> vous aide à trancher en amont.</p>`,
    },
    {
      h2: "Le modèle Maison de Nacre",
      html: `<p>Maison de Nacre est un accompagnement en maîtrise d'œuvre dans la région de Caen : conception sur-mesure avec un architecte, mise en concurrence des artisans, gestion complète du chantier jusqu'à la remise des clés, et des honoraires clairs de 12 % du coût de construction. Notre parti pris : un projet unique, des comptes transparents, et un interlocuteur qui défend vos intérêts du premier plan à la dernière clé. Pour le détail, voir notre <a href="/services/maitre-d-oeuvre-construction-maison" class="text-primary underline">accompagnement en maîtrise d'œuvre</a>.</p>`,
    },
  ],
  faq: [
    {
      question: "Quelle est la différence juridique entre un maître d'œuvre et un constructeur ?",
      answer:
        "Le maître d'œuvre est un prestataire que vous mandatez : vous restez maître d'ouvrage et signez les contrats avec les artisans. Le constructeur vous vend une maison via un contrat unique qui l'engage sur un prix et un délai, avec une garantie de livraison incluse.",
    },
    {
      question: "Le maître d'œuvre est-il moins cher ?",
      answer:
        "Souvent, oui, à projet équivalent : des honoraires affichés de 12 % pèsent généralement moins qu'une marge intégrée de 15 à 25 %. Mais le constructeur inclut une garantie de livraison que le maître d'œuvre ne fournit pas automatiquement.",
    },
    {
      question: "Quelles garanties offre un maître d'œuvre ?",
      answer:
        "Vous conservez la garantie décennale, la garantie de parfait achèvement, la garantie biennale et l'assurance dommage-ouvrage, car elles sont portées par les entreprises et par vous, maître d'ouvrage. La garantie de livraison à prix convenu, elle, reste propre au modèle du constructeur.",
    },
    {
      question: "Peut-on choisir ses artisans avec un maître d'œuvre ?",
      answer:
        "Oui. C'est l'un de ses atouts : il met les artisans en concurrence et vous choisissez ensemble, sans partenaires imposés ni catalogue fermé.",
    },
    {
      question: "Combien coûtent les honoraires d'un maître d'œuvre dans le Calvados ?",
      answer:
        "Ils tournent généralement autour de 10 à 12 % du coût de construction. Chez Maison de Nacre, c'est 12 % tout compris, sans marge cachée sur les travaux.",
    },
  ],
  relatedGuideSlugs: ["prix-maison-neuve-calvados", "construire-ou-acheter-maison"],
};

// ────────────────────────────────────────────────────────────────────────────────
// G12 — Prix construction maison au m² (page trafic cluster prix, 1 900/mo, KD 31)
// ────────────────────────────────────────────────────────────────────────────────

const G12: Guide = {
  slug: "prix-construction-maison-m2",
  title: "Prix de construction d'une maison au m² | Maison de Nacre",
  metaDescription:
    "Combien coûte la construction d'une maison au m² en 2026 ? Fourchettes par standing, ce que comprend le prix, écart entrée et haut de gamme.",
  h1: "Prix de construction d'une maison au m² : le vrai coût en 2026",
  primaryKeyword: "prix construction maison au m²",
  searchVolume: 1900,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "« Combien coûte une maison au mètre carré ? » C'est la première question de tout projet de construction, et la réponse honnête commence par une mise au point : le prix au m² varie du simple au double selon le standing, la forme de la maison et ce que l'on inclut dedans. Voici les fourchettes 2026, ce qu'elles recouvrent, et comment lire un prix au m² sans se faire avoir.",
  sections: [
    {
      h2: "Quel est le prix de construction au m² en 2026 ?",
      html: `<p>Pour une maison neuve traditionnelle, hors terrain, le prix de construction au mètre carré se situe le plus souvent dans ces fourchettes selon le niveau de finition :</p>
<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr><th class="text-left py-2 pr-4">Standing</th><th class="text-left py-2">Prix de construction au m² (hors terrain)</th></tr></thead><tbody>
<tr class="border-t"><td class="py-2 pr-4">Entrée de gamme</td><td class="py-2">1 500 à 1 800 €/m²</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Milieu de gamme</td><td class="py-2">1 800 à 2 300 €/m²</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Haut de gamme</td><td class="py-2">2 300 à 3 000 €/m² et plus</td></tr>
</tbody></table></div>
<p class="mt-4">Ces montants correspondent au coût des travaux pour sortir une maison de terre, prête à habiter. Ils n'incluent ni le terrain, ni les frais annexes, ni la rémunération de l'accompagnement. C'est le point que la plupart des gens confondent, et il change tout sur le budget final.</p>`,
    },
    {
      h2: "Construction seule ou clé en main : ne pas confondre",
      html: `<p>Un prix de construction au m² n'est pas un prix « tout fait, tout géré ». Pour passer du coût des travaux à un projet clé en main, il faut ajouter la conception et le pilotage.</p>
<p>Avec un accompagnement en maîtrise d'œuvre, cela prend la forme d'honoraires affichés, souvent autour de 12 % du coût de construction. Une maison construite à 2 500 €/m² de travaux revient donc à environ 2 800 €/m² livré clé en main, honoraires inclus. C'est ce chiffre « livré » qu'il faut comparer d'un projet à l'autre, pas le seul coût des travaux. Pour comprendre ce que couvre cet accompagnement, voir notre comparatif <a href="/guides/maitre-doeuvre-ou-constructeur" class="text-primary underline">maître d'œuvre ou constructeur</a>.</p>`,
    },
    {
      h2: "Ce que comprend (et ne comprend pas) le prix au m²",
      html: `<p>Un prix au m² crédible doit recouvrir l'essentiel de ce qui rend la maison habitable : le gros œuvre (fondations, murs, toiture), l'isolation et l'étanchéité aux normes RE2020, la menuiserie extérieure, le chauffage et l'eau chaude, l'électricité, la plomberie, et les revêtements de sols et murs.</p>
<p>En revanche, plusieurs postes restent hors du prix au m² et doivent être budgétés à part : le terrain et ses frais de notaire, la viabilisation si le terrain n'est pas raccordé, l'étude de sol, l'assurance dommage-ouvrage, et les aménagements extérieurs (clôture, terrasse, allée). Méfiez-vous d'un prix au m² très bas : il omet souvent une partie de ces éléments, qui réapparaissent ensuite en surcoût.</p>`,
    },
    {
      h2: "Ce qui fait varier le prix au m²",
      html: `<p>À surface égale, deux maisons peuvent s'écarter de plusieurs centaines d'euros au mètre carré. Les principaux leviers :</p>
<p>Les <strong>finitions et équipements</strong> sont le premier facteur : cuisine, salle de bains, sols, domotique, menuiseries font glisser le prix de l'entrée vers le haut de gamme. La <strong>forme de la maison</strong> compte aussi : une maison compacte et carrée coûte moins cher au m² qu'une maison tout en longueur ou à décrochements multiples, car elle demande moins de murs et de toiture pour la même surface. Le <strong>terrain</strong> influe par sa nature : une pente, un sol argileux ou un accès difficile renchérissent les fondations et la mise en œuvre. Enfin, la <strong>performance énergétique</strong> ajoute sa part : la RE2020 représente de l'ordre de 5 à 10 % de surcoût, largement compensé à l'usage par des factures réduites.</p>`,
    },
    {
      h2: "Plain-pied ou étage : quel impact sur le m² ?",
      html: `<p>Le plain-pied est souvent perçu comme plus simple, mais il coûte généralement un peu plus cher au mètre carré qu'une maison à étage. La raison est mécanique : à surface habitable égale, un plain-pied demande une emprise au sol plus grande, donc plus de fondations et plus de toiture, les deux postes les plus lourds. Une maison à étage empile la surface sur une emprise réduite et amortit mieux ces postes. L'étage économise aussi du terrain, ce qui pèse dans les secteurs où le foncier est cher.</p>`,
    },
    {
      h2: "L'effet de la surface : pourquoi les petites maisons coûtent plus cher au m²",
      html: `<p>C'est contre-intuitif, mais une petite maison coûte plus cher au mètre carré qu'une grande. Les pièces les plus chères, la cuisine et la salle de bains, ont un coût quasi fixe quelle que soit la surface totale. Sur une maison de 80 m², ce coût se répartit sur peu de mètres carrés ; sur 150 m², il se dilue. C'est pourquoi un prix au m² doit toujours se lire en regard de la surface du projet. Pour un budget calibré sur une surface précise, voir notre guide <a href="/guides/prix-maison-120m2" class="text-primary underline">combien coûte une maison de 120 m²</a>.</p>`,
    },
    {
      h2: "Du prix au m² au budget de votre maison",
      html: `<p>Le prix au m² ne prend tout son sens qu'une fois multiplié par la surface de votre projet. Voici ce que représentent les fourchettes ci-dessus, en coût de construction clé en main (honoraires inclus, hors terrain), pour trois surfaces courantes.</p>
<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr><th class="text-left py-2 pr-4">Surface</th><th class="text-left py-2 pr-4">Entrée de gamme</th><th class="text-left py-2 pr-4">Milieu de gamme</th><th class="text-left py-2">Haut de gamme</th></tr></thead><tbody>
<tr class="border-t"><td class="py-2 pr-4">90 m²</td><td class="py-2 pr-4">150 000 à 180 000 €</td><td class="py-2 pr-4">180 000 à 230 000 €</td><td class="py-2">230 000 à 300 000 €</td></tr>
<tr class="border-t"><td class="py-2 pr-4">120 m²</td><td class="py-2 pr-4">200 000 à 240 000 €</td><td class="py-2 pr-4">240 000 à 310 000 €</td><td class="py-2">310 000 à 405 000 €</td></tr>
<tr class="border-t"><td class="py-2 pr-4">150 m²</td><td class="py-2 pr-4">250 000 à 300 000 €</td><td class="py-2 pr-4">300 000 à 385 000 €</td><td class="py-2">385 000 à 505 000 €</td></tr>
</tbody></table></div>
<p class="mt-4">Ces montants couvrent la construction livrée prête à habiter, honoraires de maîtrise d'œuvre compris, mais sans le terrain. Ils situent le standard du sur-mesure milieu à haut de gamme autour de 2 800 €/m² livré, l'ordre de grandeur que nous retenons pour un projet Maison de Nacre. Pour un budget complet incluant le terrain et les frais annexes, voir notre guide <a href="/guides/budget-construction-maison" class="text-primary underline">budget d'un projet de construction</a>.</p>`,
    },
    {
      h2: "Et dans le Calvados ?",
      html: `<p>Le coût de construction au m² varie peu d'une région à l'autre : ce sont surtout le terrain et la main-d'œuvre locale qui font la différence sur le budget total. Dans le département, c'est donc le prix du terrain qui creuse l'écart, pas le m² de construction. Nous avons détaillé les fourchettes locales, terrain compris, dans notre guide <a href="/guides/prix-maison-neuve-calvados" class="text-primary underline">prix d'une maison neuve dans le Calvados</a>.</p>`,
    },
    {
      h2: "Comment lire un prix au m² dans un devis",
      html: `<p>Pour comparer deux offres au m² sans se tromper, posez trois questions. D'abord, le prix inclut-il les honoraires de conception et de suivi, ou seulement les travaux ? Ensuite, quelle est la surface de référence : surface habitable, surface de plancher ou surface utile ? Le même prix au m² ne pèse pas pareil selon la base. Enfin, le niveau de finition est-il précisé, ou s'agit-il d'un prix d'appel « à partir de » qui grimpera au premier choix de matériaux ? Un prix au m² honnête s'accompagne toujours d'un descriptif clair de ce qu'il contient. Pour situer le coût de l'accompagnement, voir notre guide <a href="/guides/cout-maitre-doeuvre" class="text-primary underline">combien coûte un maître d'œuvre</a>.</p>`,
    },
  ],
  faq: [
    {
      question: "Quel est le prix de construction d'une maison au m² en 2026 ?",
      answer:
        "Comptez 1 500 à 1 800 €/m² en entrée de gamme, 1 800 à 2 300 €/m² en milieu de gamme et 2 300 à 3 000 €/m² ou plus en haut de gamme, hors terrain. Clé en main avec maîtrise d'œuvre, ajoutez les honoraires (environ 12 %), soit autour de 2 800 €/m² livré pour un standard milieu de gamme.",
    },
    {
      question: "Le prix au m² inclut-il le terrain ?",
      answer:
        "Non. Le prix de construction au m² ne comprend jamais le terrain ni ses frais de notaire, qui se budgétisent à part et varient fortement selon le secteur.",
    },
    {
      question: "Pourquoi une petite maison coûte-t-elle plus cher au m² ?",
      answer:
        "Parce que les pièces les plus coûteuses (cuisine, salle de bains) ont un coût quasi fixe qui se répartit sur moins de surface. Plus la maison est grande, plus ce coût se dilue.",
    },
    {
      question: "Une maison de plain-pied est-elle plus chère au m² ?",
      answer:
        "Généralement oui, car elle demande plus de fondations et de toiture qu'une maison à étage de surface équivalente, et consomme plus de terrain.",
    },
    {
      question: "Quel est le surcoût de la RE2020 au m² ?",
      answer:
        "De l'ordre de 5 à 10 % du coût de construction, compensé à l'usage par des factures d'énergie nettement plus basses.",
    },
  ],
  relatedGuideSlugs: ["prix-maison-neuve-calvados", "maitre-doeuvre-ou-constructeur"],
};

// ────────────────────────────────────────────────────────────────────────────────
// Registre
// ────────────────────────────────────────────────────────────────────────────────

export const GUIDES: Guide[] = [G11, G6, G12];

export const GUIDES_BY_SLUG: Record<string, Guide> = Object.fromEntries(
  GUIDES.map((g) => [g.slug, g]),
);

export function getGuide(slug: string): Guide | undefined {
  return GUIDES_BY_SLUG[slug];
}

export function getAllGuideSlugs(): string[] {
  return GUIDES.map((g) => g.slug);
}
