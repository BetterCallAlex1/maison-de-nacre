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
// G17 — Viabilisation terrain (quick win, 1 900/mo, KD 26)
// ────────────────────────────────────────────────────────────────────────────────

const G17: Guide = {
  slug: "viabilisation-terrain",
  title: "Viabilisation terrain : coûts et étapes | Maison de Nacre",
  metaDescription:
    "Viabiliser un terrain à bâtir : raccordements eau, électricité, assainissement, coûts réels et étapes. Comptez 5 000 à 15 000 € selon la distance aux réseaux.",
  h1: "Viabilisation d'un terrain : étapes, coûts et délais",
  primaryKeyword: "viabilisation terrain",
  searchVolume: 1900,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "Vous avez repéré un terrain, ou vous venez d'en acheter un, et la question tombe : est-il viabilisé, et sinon, combien va coûter le raccordement ? La viabilisation est l'un des postes les plus souvent sous-estimés d'un projet de construction. Voici, sans jargon, ce qu'elle recouvre, ce qu'elle coûte vraiment et dans quel ordre s'y prendre.",
  sections: [
    {
      h2: "Qu'est-ce que la viabilisation d'un terrain ?",
      html: `<p>Viabiliser un terrain, c'est le raccorder aux réseaux indispensables pour y construire et y vivre : l'eau potable, l'électricité, l'assainissement (les eaux usées), et selon les cas le gaz, le téléphone et la fibre. Un terrain viabilisé dispose de ces raccordements amenés en limite de parcelle ou à proximité immédiate. Un terrain non viabilisé, lui, n'est qu'un bout de terre : tant qu'il n'est pas raccordé, on ne peut pas y habiter.</p>
<p>Attention à une confusion fréquente : un terrain constructible n'est pas forcément viabilisé. Constructible veut dire que le plan local d'urbanisme (PLU) autorise à bâtir. Viabilisé veut dire que les réseaux sont là. Les deux sont nécessaires, et ils ne vont pas toujours ensemble.</p>`,
    },
    {
      h2: "Terrain viabilisé ou non : comment le savoir",
      html: `<p>Avant d'acheter, c'est une vérification à ne jamais sauter. Trois réflexes : demandez au vendeur l'état des raccordements par écrit, consultez le certificat d'urbanisme (CU) qui renseigne sur la desserte par les réseaux, et interrogez la mairie sur la présence des réseaux dans la rue. Plus les réseaux passent loin de votre parcelle, plus la facture grimpe : un terrain en plein bourg, réseaux devant le portail, coûtera bien moins cher à raccorder qu'un terrain isolé à plusieurs dizaines de mètres du premier branchement.</p>`,
    },
    {
      h2: "Les raccordements à prévoir",
      html: `<p>La viabilisation regroupe plusieurs raccordements, à demander chacun à son gestionnaire de réseau :</p>
<p>L'<strong>eau potable</strong> se raccorde au réseau public via le service des eaux de la commune. L'<strong>électricité</strong> passe par Enedis, qui réalise le branchement et, si besoin, l'extension du réseau jusqu'à la parcelle. Le <strong>gaz</strong> est optionnel : il ne se justifie que si le réseau est présent et que vous prévoyez un usage au gaz, ce qui devient rare avec les maisons RE2020 chauffées par pompe à chaleur. Le <strong>téléphone et la fibre</strong> se raccordent en général à faible coût quand l'infrastructure existe.</p>
<p>Reste l'<strong>assainissement</strong>, souvent le poste le plus lourd. Deux cas : si la rue est desservie par le tout-à-l'égout (assainissement collectif), vous vous y raccordez, avec parfois une taxe de raccordement à la charge de la commune. Si le réseau collectif n'existe pas, vous devez installer un assainissement individuel (fosse toutes eaux ou microstation), plus coûteux, et soumis à une étude et à la validation du service public d'assainissement (SPANC).</p>
<p>Enfin, n'oubliez pas l'<strong>accès</strong> : création d'un bateau (abaissé de trottoir), parfois une voirie ou un chemin si le terrain est en retrait.</p>`,
    },
    {
      h2: "Combien coûte la viabilisation d'un terrain ?",
      html: `<p>C'est la vraie question, et la réponse honnête est : cela dépend surtout de la distance aux réseaux. Voici des fourchettes indicatives par poste, pour un terrain raisonnablement proche des branchements.</p>
<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr><th class="text-left py-2 pr-4">Poste</th><th class="text-left py-2">Coût indicatif</th></tr></thead><tbody>
<tr class="border-t"><td class="py-2 pr-4">Raccordement eau potable</td><td class="py-2">800 à 2 500 €</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Raccordement électricité (Enedis)</td><td class="py-2">1 000 à 4 000 €</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Raccordement au tout-à-l'égout</td><td class="py-2">1 500 à 5 000 €</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Assainissement individuel (si pas de réseau)</td><td class="py-2">4 000 à 10 000 €</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Gaz (optionnel)</td><td class="py-2">400 à 1 200 €</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Téléphone et fibre</td><td class="py-2">0 à 500 €</td></tr>
</tbody></table></div>
<p class="mt-4">Au total, comptez le plus souvent <strong>5 000 à 15 000 €</strong> pour un terrain proche des réseaux, et davantage (parfois 20 000 € et plus) pour un terrain isolé ou nécessitant une extension de réseau. Ces montants s'ajoutent au prix du terrain et à celui de la construction. Pour situer la viabilisation dans le budget global d'un projet, voir notre guide <a href="/guides/prix-maison-neuve-calvados" class="text-primary underline">prix d'une maison neuve dans le Calvados</a>.</p>`,
    },
    {
      h2: "Les étapes de la viabilisation",
      html: `<p>La viabilisation suit un ordre logique qu'il vaut mieux respecter :</p>
<ol class="list-decimal pl-6 space-y-2">
<li><strong>Demander le certificat d'urbanisme</strong> auprès de la mairie : il précise la desserte par les réseaux et les règles applicables.</li>
<li><strong>Faire une demande de raccordement à chaque gestionnaire</strong> : service des eaux, Enedis, gestionnaire d'assainissement, et opérateurs télécom. Chacun établit un devis.</li>
<li><strong>Comparer et valider les devis</strong>, en tenant compte des délais annoncés.</li>
<li><strong>Réaliser les travaux de raccordement</strong>, souvent en coordination avec le chantier de construction.</li>
<li><strong>Obtenir les attestations de raccordement</strong>, utiles pour la suite et pour la revente.</li>
</ol>
<p class="mt-4">Cette coordination, lot par lot, fait partie du travail d'un maître d'œuvre, qui pilote les demandes et le calendrier pour que rien ne bloque le chantier.</p>`,
    },
    {
      h2: "Combien de temps prend la viabilisation ?",
      html: `<p>Là encore, tout dépend des gestionnaires de réseau et de l'éloignement. Comptez en général de 2 à 6 mois entre les premières demandes et la fin des raccordements. Le branchement électrique est souvent le plus long à obtenir, surtout s'il impose une extension de réseau. D'où l'intérêt de lancer les démarches tôt, idéalement en parallèle de l'instruction du permis de construire.</p>`,
    },
    {
      h2: "Viabilisation et permis de construire",
      html: `<p>Les deux sujets sont liés. Le permis de construire peut exiger la preuve que le terrain est raccordable, et certaines demandes de raccordement ne se finalisent qu'une fois le permis obtenu. Le bon réflexe est de mener les deux de front : déposer le permis et engager les demandes de raccordement en même temps pour ne pas perdre de mois. Notre guide sur le <a href="/guides/permis-de-construire-maison" class="text-primary underline">permis de construire</a> détaille cette procédure.</p>`,
    },
    {
      h2: "Terrain en lotissement ou terrain isolé : une grosse différence",
      html: `<p>Un terrain en lotissement est presque toujours vendu <strong>déjà viabilisé</strong> : l'aménageur a amené les réseaux en limite de chaque lot, et le coût est intégré au prix de vente. C'est plus cher à l'achat, mais sans surprise de raccordement. Un terrain isolé en secteur diffus est souvent moins cher, mais la viabilisation est à votre charge et peut réserver des écarts importants selon la distance aux réseaux. C'est un critère à intégrer dès le choix du terrain, comme nous l'expliquons dans notre guide <a href="/guides/choisir-terrain-constructible" class="text-primary underline">comment choisir son terrain constructible</a>.</p>`,
    },
    {
      h2: "La taxe d'aménagement, à ne pas confondre avec la viabilisation",
      html: `<p>Beaucoup de futurs propriétaires mélangent la viabilisation (les travaux de raccordement) et la taxe d'aménagement (un impôt). Ce sont deux choses différentes, mais toutes deux à budgéter. La taxe d'aménagement est due une fois, après l'obtention du permis de construire, et finance les équipements publics de la commune. Son montant dépend de la surface de la construction, d'une valeur forfaitaire au mètre carré fixée chaque année, et des taux votés par la commune et le département.</p>
<p>Concrètement, pour une maison individuelle, elle représente souvent de l'ordre de quelques milliers d'euros, payables en une ou deux échéances après le démarrage. Elle s'ajoute donc, comme la viabilisation, aux frais à anticiper au-delà du prix de la maison. La distinguer dès le départ évite de croire que tout est compris dans le devis de construction.</p>`,
    },
    {
      h2: "Faire estimer la viabilisation de votre projet",
      html: `<p>La viabilisation est typiquement le poste où l'on découvre de mauvaises surprises quand on ne l'a pas anticipée. Chez Maison de Nacre, nous vérifions l'état des réseaux et estimons ce poste dès l'étude de votre terrain, pour que votre budget tienne du premier jour à la remise des clés.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Faire le point sur mon terrain</a></p>`,
    },
  ],
  faq: [
    {
      question: "Quelle est la différence entre un terrain constructible et un terrain viabilisé ?",
      answer:
        "Constructible signifie que le PLU autorise à bâtir. Viabilisé signifie que les réseaux (eau, électricité, assainissement) sont raccordés. Un terrain peut être constructible sans être viabilisé.",
    },
    {
      question: "Combien coûte la viabilisation d'un terrain ?",
      answer:
        "Le plus souvent 5 000 à 15 000 € pour un terrain proche des réseaux, davantage pour un terrain isolé. Le poste le plus variable est l'assainissement, surtout en l'absence de tout-à-l'égout.",
    },
    {
      question: "Combien de temps prend la viabilisation ?",
      answer:
        "Généralement 2 à 6 mois selon les gestionnaires de réseau. Le raccordement électrique est souvent le plus long, en particulier s'il faut étendre le réseau.",
    },
    {
      question: "Un terrain en lotissement est-il viabilisé ?",
      answer:
        "Oui, presque toujours. L'aménageur amène les réseaux en limite de lot et intègre le coût au prix de vente. C'est l'un des avantages du lotissement.",
    },
    {
      question: "Qui s'occupe des démarches de viabilisation ?",
      answer:
        "Vous pouvez les mener vous-même auprès de chaque gestionnaire de réseau, ou les confier à un maître d'œuvre qui coordonne les demandes, les devis et le calendrier avec le chantier.",
    },
  ],
  relatedGuideSlugs: ["prix-maison-neuve-calvados", "choisir-terrain-constructible"],
};

// ────────────────────────────────────────────────────────────────────────────────
// Registre
// ────────────────────────────────────────────────────────────────────────────────

// ────────────────────────────────────────────────────────────────────────────────
// G23 — Étapes construction maison (pilier "déroulé du projet", 480/mo, KD 17)
// ────────────────────────────────────────────────────────────────────────────────

const G23: Guide = {
  slug: "etapes-construction-maison",
  title: "Les étapes d'une construction de maison | Maison de Nacre",
  metaDescription:
    "Les étapes pour faire construire sa maison, de l'idée à la remise des clés : terrain, conception, permis, financement, chantier, réception. Le guide complet.",
  h1: "Les étapes d'une construction de maison, de l'idée aux clés",
  primaryKeyword: "étapes construction maison",
  searchVolume: 480,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "Faire construire sa maison est un parcours en plusieurs étapes, qui s'étale sur un à deux ans entre les premières envies et l'emménagement. Bien connaître l'enchaînement évite les mauvaises surprises et les pertes de temps. Voici les grandes étapes, dans l'ordre, avec ce qui se joue à chacune.",
  sections: [
    {
      h2: "Vue d'ensemble : les grandes phases",
      html: `<p>Un projet de construction se découpe en trois temps. D'abord la <strong>préparation</strong> : définir le projet, trouver le terrain, concevoir la maison et obtenir le permis. Ensuite le <strong>montage</strong> : financer le projet, souscrire les assurances et signer les devis des artisans. Enfin la <strong>réalisation</strong> : le chantier, puis la réception et la remise des clés. Chacune de ces phases compte, et c'est leur bon enchaînement qui fait un projet sans accroc.</p>`,
    },
    {
      h2: "Étape 1 : Définir le projet et le budget",
      html: `<p>Tout commence par vos besoins : surface, nombre de chambres, plain-pied ou étage, style, et surtout enveloppe budgétaire. C'est le moment de calibrer un budget réaliste, terrain compris, pour orienter toutes les décisions suivantes. Notre guide <a href="/guides/prix-maison-neuve-calvados" class="text-primary underline">prix d'une maison neuve dans le Calvados</a> aide à poser ces premiers chiffres.</p>`,
    },
    {
      h2: "Étape 2 : Trouver et sécuriser le terrain",
      html: `<p>Sans terrain, pas de projet. Cette étape consiste à trouver une parcelle constructible adaptée à votre budget et à vos envies, puis à la sécuriser par un compromis. Vérifiez bien deux points avant de signer : la constructibilité au regard du plan local d'urbanisme, et l'état des raccordements. Nos guides <a href="/guides/choisir-terrain-constructible" class="text-primary underline">comment choisir son terrain constructible</a> et <a href="/guides/viabilisation-terrain" class="text-primary underline">la viabilisation d'un terrain</a> détaillent ces vérifications essentielles.</p>`,
    },
    {
      h2: "Étape 3 : La conception avec l'architecte ou le maître d'œuvre",
      html: `<p>Une fois le terrain en vue, on passe à la conception. C'est ici que la maison prend forme : plans, implantation sur la parcelle, orientation, choix techniques et premiers chiffrages. Travailler avec un architecte ou un maître d'œuvre garantit un plan sur-mesure, pensé pour votre terrain et conforme aux règles d'urbanisme. C'est aussi l'étape où l'on intègre les exigences de la RE2020 dès le départ, plutôt que de les subir.</p>`,
    },
    {
      h2: "Étape 4 : Le permis de construire",
      html: `<p>Le projet conçu, on dépose la demande de permis de construire en mairie. L'instruction dure en général deux à trois mois pour une maison individuelle. C'est une étape incompressible qu'il faut anticiper dans le calendrier. Notre guide <a href="/guides/permis-de-construire-maison" class="text-primary underline">le permis de construire</a> explique le dossier et la procédure, et le <a href="/guides/delai-permis-de-construire" class="text-primary underline">délai d'obtention d'un permis</a> donne les durées à prévoir.</p>`,
    },
    {
      h2: "Étape 5 : Le financement et les assurances",
      html: `<p>En parallèle de la conception et du permis, on boucle le financement : prêt immobilier, mobilisation de l'apport, et éventuellement prêt à taux zéro pour un primo-accédant. C'est aussi le moment de souscrire l'assurance dommage-ouvrage, obligatoire, qui protège votre bien pendant dix ans. Mieux vaut avoir l'accord de prêt avant de lancer les travaux.</p>`,
    },
    {
      h2: "Étape 6 : Consultation des artisans et signature des devis",
      html: `<p>Le permis obtenu et le financement en place, on consulte les artisans pour chaque corps de métier : terrassement, gros œuvre, charpente, couverture, menuiseries, plomberie, électricité, finitions. Les devis sont comparés, négociés, puis signés. Avec un maître d'œuvre, cette mise en concurrence se fait pour votre compte, sans marge sur les travaux, ce qui assure des prix justes et transparents.</p>`,
    },
    {
      h2: "Étape 7 : Le chantier",
      html: `<p>C'est la phase la plus visible. Elle s'enchaîne dans un ordre précis : le terrassement et les fondations, puis le gros œuvre (murs, planchers), la charpente et la couverture pour mettre la maison hors d'eau, les menuiseries extérieures pour la mettre hors d'air, puis le second œuvre (cloisons, isolation, électricité, plomberie, chauffage) et enfin les finitions (sols, peintures, cuisine, salle de bains). Chaque corps de métier intervient au bon moment, et la coordination est la clé pour tenir les délais. C'est précisément le travail d'un maître d'œuvre, qui suit le chantier semaine après semaine.</p>`,
    },
    {
      h2: "Étape 8 : La réception et la remise des clés",
      html: `<p>Le chantier terminé, vient la réception : vous visitez la maison avec le professionnel, vous vérifiez la conformité et vous consignez d'éventuelles réserves (défauts à corriger). Une fois les réserves levées, c'est la remise des clés, et vous pouvez emménager. Notre guide <a href="/guides/reception-travaux-maison-neuve" class="text-primary underline">réception de chantier et levée des réserves</a> explique comment bien réceptionner votre maison.</p>`,
    },
    {
      h2: "Combien de temps dure une construction ?",
      html: `<p>De la signature du terrain à la remise des clés, comptez en général douze à dix-huit mois, dont environ six à dix mois de chantier effectif. Le reste se joue sur la conception, le permis et le montage financier, qui se déroulent en partie en parallèle. Notre guide <a href="/guides/delai-construction-maison" class="text-primary underline">combien de temps pour construire une maison</a> détaille chaque durée.</p>`,
    },
    {
      h2: "Récapitulatif : les étapes et leur durée",
      html: `<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr><th class="text-left py-2 pr-4">Étape</th><th class="text-left py-2 pr-4">Ce qui se passe</th><th class="text-left py-2">Durée indicative</th></tr></thead><tbody>
<tr class="border-t"><td class="py-2 pr-4">1. Définir le projet et le budget</td><td class="py-2 pr-4">Besoins, surface, enveloppe budgétaire</td><td class="py-2">2 à 4 semaines</td></tr>
<tr class="border-t"><td class="py-2 pr-4">2. Trouver et sécuriser le terrain</td><td class="py-2 pr-4">Recherche, compromis, vérifications</td><td class="py-2">1 à 6 mois</td></tr>
<tr class="border-t"><td class="py-2 pr-4">3. Conception des plans</td><td class="py-2 pr-4">Plans, implantation, chiffrage</td><td class="py-2">1 à 3 mois</td></tr>
<tr class="border-t"><td class="py-2 pr-4">4. Permis de construire</td><td class="py-2 pr-4">Dépôt et instruction en mairie</td><td class="py-2">2 à 3 mois</td></tr>
<tr class="border-t"><td class="py-2 pr-4">5. Financement et assurances</td><td class="py-2 pr-4">Prêt, apport, dommage-ouvrage</td><td class="py-2">1 à 2 mois (en parallèle)</td></tr>
<tr class="border-t"><td class="py-2 pr-4">6. Consultation des artisans</td><td class="py-2 pr-4">Devis, comparaison, signature</td><td class="py-2">3 à 6 semaines</td></tr>
<tr class="border-t"><td class="py-2 pr-4">7. Chantier</td><td class="py-2 pr-4">Du terrassement aux finitions</td><td class="py-2">6 à 10 mois</td></tr>
<tr class="border-t"><td class="py-2 pr-4">8. Réception et remise des clés</td><td class="py-2 pr-4">Visite, réserves, emménagement</td><td class="py-2">Quelques jours à semaines</td></tr>
</tbody></table></div>
<p class="mt-4">Attention : ces durées ne s'additionnent pas. Plusieurs étapes se chevauchent, notamment la conception, le permis et le financement, qui avancent en partie en même temps. C'est cette gestion en parallèle qui permet de tenir un délai total de douze à dix-huit mois.</p>`,
    },
    {
      h2: "Les erreurs fréquentes à éviter",
      html: `<p>Quelques pièges reviennent souvent et coûtent cher en temps ou en argent. Le premier : acheter un terrain sans vérifier sa viabilisation ni sa constructibilité réelle, et découvrir ensuite des milliers d'euros de raccordement. Le deuxième : sous-estimer les frais annexes (notaire sur le terrain, viabilisation, assurance, aménagements extérieurs) et bâtir un budget trop juste. Le troisième : lancer les démarches en série plutôt qu'en parallèle, et allonger inutilement le projet de plusieurs mois. Le dernier : signer des devis sans mise en concurrence, et payer plus cher faute de comparaison. Un accompagnement par un maître d'œuvre fait justement office de garde-fou sur chacun de ces points.</p>`,
    },
    {
      h2: "Le rôle du maître d'œuvre dans ce parcours",
      html: `<p>À chaque étape, un maître d'œuvre vous fait gagner du temps et de la sérénité : il conçoit le projet, monte le dossier de permis, consulte et coordonne les artisans, suit le chantier et vous accompagne jusqu'à la réception. Vous gardez la décision, il gère l'opérationnel et défend vos intérêts. C'est le modèle de Maison de Nacre, de la première esquisse à la remise des clés. Pour comprendre ce métier, voir notre comparatif <a href="/guides/maitre-doeuvre-ou-constructeur" class="text-primary underline">maître d'œuvre ou constructeur</a>.</p>`,
    },
    {
      h2: "Lancez votre projet",
      html: `<p>Vous envisagez de faire construire et vous voulez un parcours clair, sans surprise ? Parlons-en. Maison de Nacre vous accompagne à chaque étape, de la conception à la remise des clés.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Discuter de mon projet</a></p>`,
    },
  ],
  faq: [
    {
      question: "Quelles sont les grandes étapes pour faire construire une maison ?",
      answer:
        "Définir le projet et le budget, trouver le terrain, concevoir la maison, obtenir le permis de construire, boucler le financement, consulter les artisans, réaliser le chantier, puis réceptionner et recevoir les clés.",
    },
    {
      question: "Quelle est la première étape d'un projet de construction ?",
      answer:
        "Définir précisément ses besoins et son budget global, terrain compris. C'est ce cadrage qui oriente toutes les décisions suivantes.",
    },
    {
      question: "Combien de temps entre l'achat du terrain et l'emménagement ?",
      answer:
        "En général douze à dix-huit mois, dont six à dix mois de chantier, le reste se partageant entre conception, permis et financement.",
    },
    {
      question: "Faut-il le permis de construire avant de financer ?",
      answer:
        "Les deux avancent souvent en parallèle, mais il est prudent d'avoir l'accord de prêt avant de signer les devis et de lancer les travaux.",
    },
    {
      question: "Qui coordonne les différentes étapes ?",
      answer:
        "Vous pouvez tout piloter vous-même, ou confier la coordination à un maître d'œuvre qui enchaîne conception, permis, consultation des artisans et suivi de chantier jusqu'à la réception.",
    },
  ],
  relatedGuideSlugs: ["delai-construction-maison", "prix-maison-neuve-calvados", "maitre-doeuvre-ou-constructeur"],
};

// ────────────────────────────────────────────────────────────────────────────────
// G24 — Délai construction maison (paire G23, 390/mo, KD 19)
// ────────────────────────────────────────────────────────────────────────────────

const G24: Guide = {
  slug: "delai-construction-maison",
  title: "Combien de temps pour construire une maison | Maison de Nacre",
  metaDescription:
    "Combien de temps pour construire une maison ? De 12 à 18 mois selon les étapes : terrain, permis, chantier. Le détail des délais et comment les tenir.",
  h1: "Combien de temps pour construire une maison ?",
  primaryKeyword: "délai construction maison",
  searchVolume: 390,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "C'est l'une des premières questions que l'on se pose : combien de temps entre la décision de faire construire et l'emménagement ? La réponse honnête est de douze à dix-huit mois en moyenne, mais ce délai recouvre des étapes très différentes, dont certaines se chevauchent. Voici le détail, phase par phase, et les leviers pour ne pas perdre de mois inutilement.",
  sections: [
    {
      h2: "La réponse courte : 12 à 18 mois au total",
      html: `<p>Pour un projet classique, comptez entre un an et un an et demi entre la signature du terrain et la remise des clés. Le chantier lui-même représente six à dix mois ; le reste se joue sur la conception, le permis de construire et le montage financier, qui se déroulent en partie en parallèle. Un projet bien préparé tend vers le bas de la fourchette, un projet semé d'imprévus vers le haut.</p>`,
    },
    {
      h2: "Le détail phase par phase",
      html: `<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr><th class="text-left py-2 pr-4">Phase</th><th class="text-left py-2">Durée indicative</th></tr></thead><tbody>
<tr class="border-t"><td class="py-2 pr-4">Recherche et achat du terrain</td><td class="py-2">1 à 6 mois</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Conception des plans</td><td class="py-2">1 à 3 mois</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Instruction du permis de construire</td><td class="py-2">2 à 3 mois</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Financement et assurances</td><td class="py-2">1 à 2 mois (en parallèle)</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Consultation et signature des artisans</td><td class="py-2">3 à 6 semaines</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Chantier</td><td class="py-2">6 à 10 mois</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Réception et levée des réserves</td><td class="py-2">Quelques jours à semaines</td></tr>
</tbody></table></div>
<p class="mt-4">Ces durées ne s'additionnent pas bêtement : la conception, le permis et le financement avancent souvent en même temps. C'est justement cette gestion en parallèle qui permet de comprimer le délai total. Pour le détail de chaque étape, voir notre guide <a href="/guides/etapes-construction-maison" class="text-primary underline">les étapes d'une construction de maison</a>.</p>`,
    },
    {
      h2: "Zoom sur la durée du chantier",
      html: `<p>Le chantier est la phase la plus visible, et la plus régulière dans sa durée : six à dix mois pour une maison individuelle. Il s'enchaîne dans un ordre précis. Le terrassement et les fondations prennent quelques semaines. Le gros œuvre (murs et planchers) occupe ensuite deux à trois mois. La charpente et la couverture mettent la maison hors d'eau, les menuiseries extérieures la mettent hors d'air. Vient enfin le second œuvre (cloisons, isolation, électricité, plomberie, chauffage) puis les finitions (sols, peintures, cuisine, salle de bains), qui s'étalent sur plusieurs mois. La coordination des corps de métier est ce qui fait tenir ou déraper ce calendrier.</p>`,
    },
    {
      h2: "Ce qui rallonge un projet de construction",
      html: `<p>Plusieurs facteurs allongent les délais, et la plupart s'anticipent. L'<strong>instruction du permis</strong> peut s'étirer en cas de demande de pièces complémentaires, et un recours de tiers suspend le démarrage. Le <strong>financement</strong> retarde tout si l'accord de prêt tarde. La <strong>viabilisation</strong> d'un terrain isolé, surtout le raccordement électrique, prend parfois plusieurs mois. La <strong>disponibilité des artisans</strong> joue beaucoup selon la période et la tension du marché local. Les <strong>modifications en cours de route</strong> (changer un plan, ajouter une option) génèrent des avenants et décalent le planning. Enfin, la <strong>météo</strong> peut suspendre le gros œuvre en cas de gel ou de fortes pluies.</p>`,
    },
    {
      h2: "La météo et la saison de démarrage",
      html: `<p>La saison de démarrage influe sur le confort du chantier plus que sur sa durée totale. Lancer le gros œuvre à l'automne expose au risque d'intempéries hivernales (gel, pluie) qui ralentissent le terrassement et la maçonnerie. Démarrer au printemps permet souvent d'enchaîner le gros œuvre dans de bonnes conditions et de finir le second œuvre, protégé des intempéries, pendant l'hiver suivant. Ce n'est pas une règle absolue, mais un bon maître d'œuvre cale le démarrage en tenant compte de ce paramètre.</p>`,
    },
    {
      h2: "Plain-pied ou maison à étage : un impact limité sur le délai",
      html: `<p>Contrairement à une idée reçue, le choix entre plain-pied et étage ne change pas fondamentalement la durée du chantier. Une maison à étage ajoute un plancher intermédiaire et un escalier, mais réduit l'emprise des fondations et de la toiture. Au final, les deux se construisent dans des délais comparables. Ce qui pèse davantage, c'est la surface totale et le niveau de finition.</p>`,
    },
    {
      h2: "Exemple de calendrier type sur 14 mois",
      html: `<p>Pour rendre les choses concrètes, voici à quoi peut ressembler un projet bien mené, terrain déjà trouvé au départ.</p>
<p>Les mois 1 à 3 sont consacrés à la conception des plans, en parallèle des premières démarches de financement. Au mois 3, on dépose le permis de construire. Pendant son instruction (mois 3 à 5), on finalise l'accord de prêt et on consulte les artisans. Le permis obtenu au mois 5, on signe les devis et on souscrit l'assurance dommage-ouvrage. Le chantier démarre vers le mois 6 : terrassement et fondations, puis gros œuvre jusqu'au mois 9, mise hors d'eau et hors d'air, second œuvre du mois 9 au mois 12, et finitions jusqu'au mois 13. La réception intervient au mois 14, suivie de la remise des clés.</p>
<p>Ce séquencement montre l'intérêt de la parallélisation : sans elle, en enchaînant chaque étape l'une après l'autre, le même projet dépasserait facilement dix-huit mois. Si le terrain reste à trouver, ajoutez la durée de recherche en amont.</p>`,
    },
    {
      h2: "Comment tenir les délais",
      html: `<p>Trois leviers permettent de rester dans le bas de la fourchette. D'abord, <strong>anticiper</strong> : lancer la conception, le permis et la recherche de financement le plus tôt possible, sans attendre que l'étape précédente soit totalement bouclée. Ensuite, <strong>paralléliser</strong> ce qui peut l'être, plutôt que d'enchaîner les démarches en série. Enfin, <strong>coordonner</strong> rigoureusement le chantier pour que chaque artisan intervienne au bon moment, sans temps mort entre les lots. C'est précisément le rôle d'un maître d'œuvre, qui pilote le calendrier de bout en bout. Pour comprendre ce métier, voir notre comparatif <a href="/guides/maitre-doeuvre-ou-constructeur" class="text-primary underline">maître d'œuvre ou constructeur</a>.</p>`,
    },
    {
      h2: "Et après la remise des clés ?",
      html: `<p>La remise des clés ne clôt pas tout. Pendant l'année qui suit, la garantie de parfait achèvement vous permet de faire corriger les désordres signalés. Les équipements sont couverts deux ans, et la structure dix ans par la garantie décennale. Vous emménagez donc dans une maison protégée, même si quelques finitions se règlent dans les semaines suivant la réception.</p>`,
    },
    {
      h2: "Estimez le calendrier de votre projet",
      html: `<p>Chaque projet a son propre rythme, selon le terrain, le permis et vos choix. Pour un calendrier réaliste adapté à votre situation, parlons-en. Maison de Nacre pilote votre projet de la conception à la remise des clés, en tenant les délais.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Discuter de mon projet</a></p>`,
    },
  ],
  faq: [
    {
      question: "Combien de temps faut-il pour construire une maison ?",
      answer:
        "En moyenne douze à dix-huit mois entre la signature du terrain et la remise des clés, dont six à dix mois de chantier. Le reste se partage entre conception, permis et financement, en partie menés en parallèle.",
    },
    {
      question: "Combien de temps dure le chantier d'une maison ?",
      answer:
        "Six à dix mois pour une maison individuelle, du terrassement aux finitions, selon la surface, le niveau de finition et la coordination des artisans.",
    },
    {
      question: "Quelle est l'étape la plus longue ?",
      answer:
        "Le chantier en valeur absolue, mais l'instruction du permis (deux à trois mois) et la recherche de terrain (jusqu'à six mois) pèsent aussi lourd dans le délai total.",
    },
    {
      question: "La météo peut-elle retarder la construction ?",
      answer:
        "Oui, surtout le gros œuvre : gel et fortes pluies suspendent le terrassement et la maçonnerie. D'où l'intérêt de bien choisir la saison de démarrage.",
    },
    {
      question: "Comment réduire le délai de construction ?",
      answer:
        "En anticipant les démarches, en menant conception, permis et financement en parallèle, et en coordonnant le chantier sans temps mort entre les corps de métier.",
    },
  ],
  relatedGuideSlugs: ["etapes-construction-maison", "maitre-doeuvre-ou-constructeur"],
};

// ────────────────────────────────────────────────────────────────────────────────
// G29 — Délai permis de construire (cluster timeline, 1 900/mo, KD 35)
// ────────────────────────────────────────────────────────────────────────────────

const G29: Guide = {
  slug: "delai-permis-de-construire",
  title: "Délai d'obtention d'un permis de construire | Maison de Nacre",
  metaDescription:
    "Quel délai pour obtenir un permis de construire ? 2 mois d'instruction pour une maison, plus le délai de recours. Ce qui peut rallonger et comment l'éviter.",
  h1: "Délai d'obtention d'un permis de construire : combien de temps ?",
  primaryKeyword: "délai permis de construire",
  searchVolume: 1900,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "Le permis de construire est une étape incompressible de tout projet de construction, et son délai pèse directement sur votre calendrier. Pour une maison individuelle, comptez deux mois d'instruction, auxquels s'ajoutent un délai de recours et quelques cas qui peuvent rallonger la procédure. Voici tout ce qu'il faut savoir pour ne pas perdre de temps.",
  sections: [
    {
      h2: "Le délai légal d'instruction",
      html: `<p>Le délai d'instruction de droit commun est de <strong>deux mois pour une maison individuelle</strong> et ses annexes. Pour les autres constructions, il passe à trois mois. Ce délai court à compter du dépôt d'un dossier complet en mairie. À l'issue, la mairie notifie sa décision : accord, accord avec prescriptions, ou refus motivé.</p>`,
    },
    {
      h2: "Le point de départ du délai",
      html: `<p>Le délai démarre à la date de dépôt du dossier complet, matérialisée par un récépissé que la mairie vous remet. Ce récépissé indique la date à partir de laquelle le délai court et la date limite de réponse. C'est un document à conserver : il fait foi pour calculer le délai et, le cas échéant, constater un permis tacite.</p>`,
    },
    {
      h2: "Les cas qui allongent le délai",
      html: `<p>Plusieurs situations majorent le délai d'instruction, et la mairie doit vous en informer dans le premier mois. Le cas le plus fréquent : un terrain situé dans le périmètre d'un monument historique ou d'un site protégé, qui impose l'avis de l'Architecte des Bâtiments de France et ajoute généralement <strong>un mois</strong> au délai. D'autres consultations (sécurité, accessibilité, sites classés) peuvent aussi rallonger la procédure. Dans tous les cas, la majoration doit vous être notifiée au début de l'instruction, sinon le délai de droit commun s'applique.</p>`,
    },
    {
      h2: "La demande de pièces complémentaires",
      html: `<p>Si votre dossier est incomplet, la mairie vous réclame des pièces manquantes, en principe dans le premier mois suivant le dépôt. Vous disposez alors de <strong>trois mois pour les fournir</strong>, et le délai d'instruction ne reprend qu'une fois le dossier complété. C'est l'une des principales causes d'allongement, et elle est entièrement évitable : un dossier complet et bien monté dès le dépôt évite ce mois perdu. C'est l'un des intérêts de confier le montage à un professionnel, comme nous le détaillons dans notre guide <a href="/guides/permis-de-construire-maison" class="text-primary underline">le permis de construire</a>.</p>`,
    },
    {
      h2: "Le permis tacite",
      html: `<p>Si la mairie ne vous répond pas avant la fin du délai d'instruction, vous bénéficiez en principe d'un <strong>permis tacite</strong> : le silence vaut accord. Il est prudent de demander à la mairie un certificat attestant ce permis tacite, utile notamment pour le financement et pour la revente. Attention, certaines situations (secteur protégé, par exemple) peuvent écarter le permis tacite : vérifiez votre cas.</p>`,
    },
    {
      h2: "Et après l'obtention : affichage et délai de recours",
      html: `<p>Obtenir le permis ne signifie pas pouvoir démarrer immédiatement en toute sécurité. Une fois le permis accordé, vous devez l'<strong>afficher sur le terrain</strong>, de façon visible depuis la voie publique, pendant toute la durée du chantier. Cet affichage fait courir un <strong>délai de recours des tiers de deux mois</strong> : un voisin peut contester le permis durant cette période. Par ailleurs, l'administration dispose d'un délai pour retirer un permis illégal. La pratique prudente est donc d'attendre la fin du délai de recours avant de lancer les gros travaux, pour ne pas bâtir sur un permis fragile.</p>`,
    },
    {
      h2: "La durée de validité du permis",
      html: `<p>Une fois obtenu, le permis de construire est valable <strong>trois ans</strong>. Si vous ne commencez pas les travaux dans ce délai, il devient caduc. Cette validité peut être prorogée deux fois d'un an, ce qui porte la durée maximale à cinq ans, sous réserve d'en faire la demande avant l'échéance et que les règles d'urbanisme n'aient pas changé.</p>`,
    },
    {
      h2: "Les délais à retenir",
      html: `<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr><th class="text-left py-2 pr-4">Étape</th><th class="text-left py-2">Délai</th></tr></thead><tbody>
<tr class="border-t"><td class="py-2 pr-4">Instruction, maison individuelle</td><td class="py-2">2 mois</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Instruction, autres constructions</td><td class="py-2">3 mois</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Majoration en secteur protégé (ABF)</td><td class="py-2">+ 1 mois</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Délai pour compléter un dossier incomplet</td><td class="py-2">3 mois (suspend l'instruction)</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Recours des tiers après affichage</td><td class="py-2">2 mois</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Validité du permis</td><td class="py-2">3 ans (prorogeable jusqu'à 5 ans)</td></tr>
</tbody></table></div>
<p class="mt-4">Ce tableau résume les durées de droit commun. Votre cas précis peut varier selon la commune et la localisation du terrain : le service urbanisme de la mairie reste la source de référence.</p>`,
    },
    {
      h2: "Permis de construire ou déclaration préalable : des délais différents",
      html: `<p>Tous les projets ne relèvent pas du permis de construire. Les travaux de moindre ampleur (petite extension, abri de jardin, modification de façade, selon les surfaces) relèvent d'une simple <strong>déclaration préalable de travaux</strong>, dont le délai d'instruction n'est que d'<strong>un mois</strong> en règle générale. La construction d'une maison neuve, elle, exige toujours un permis de construire, avec son délai de deux mois. Bien identifier la nature de l'autorisation dès le départ évite de se tromper de procédure et de perdre du temps. En cas de doute, le service urbanisme de la mairie vous oriente vers la bonne demande.</p>`,
    },
    {
      h2: "Comment éviter les retards",
      html: `<p>Le meilleur levier est un <strong>dossier complet et conforme dès le dépôt</strong>, qui évite la demande de pièces et son mois de perdu. Ensuite, déposer tôt et mener le permis en parallèle des autres démarches (financement, viabilisation) plutôt qu'en série. Enfin, anticiper le délai de recours dans le calendrier global, plutôt que de le découvrir au dernier moment. Un maître d'œuvre monte le dossier, suit l'instruction et cale ces délais dans le planning d'ensemble, comme nous l'expliquons dans notre guide <a href="/guides/etapes-construction-maison" class="text-primary underline">les étapes d'une construction</a>.</p>`,
    },
    {
      h2: "Sécurisez le calendrier de votre projet",
      html: `<p>Un permis bien monté et bien suivi, c'est des mois de gagnés. Maison de Nacre prépare votre dossier, suit l'instruction et intègre les délais dans le calendrier de votre construction. Parlons-en.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Discuter de mon projet</a></p>`,
    },
  ],
  faq: [
    {
      question: "Quel est le délai pour obtenir un permis de construire ?",
      answer:
        "Deux mois d'instruction pour une maison individuelle, trois mois pour les autres constructions, à compter du dépôt d'un dossier complet.",
    },
    {
      question: "Le délai peut-il être plus long ?",
      answer:
        "Oui. Un terrain en secteur protégé (avis de l'Architecte des Bâtiments de France) ajoute généralement un mois. Une demande de pièces complémentaires suspend aussi le délai.",
    },
    {
      question: "Qu'est-ce qu'un permis tacite ?",
      answer:
        "Si la mairie ne répond pas avant la fin du délai d'instruction, le silence vaut accord. Il est conseillé de demander un certificat attestant ce permis tacite.",
    },
    {
      question: "Peut-on commencer les travaux dès l'obtention du permis ?",
      answer:
        "Techniquement oui, mais il est prudent d'attendre la fin du délai de recours des tiers (deux mois après l'affichage) pour ne pas construire sur un permis contestable.",
    },
    {
      question: "Combien de temps un permis de construire est-il valable ?",
      answer:
        "Trois ans, prorogeables deux fois d'un an, soit cinq ans au maximum, si la demande est faite avant l'échéance.",
    },
  ],
  relatedGuideSlugs: ["permis-de-construire-maison", "etapes-construction-maison", "delai-construction-maison"],
};

// ────────────────────────────────────────────────────────────────────────────────
// G14 — Budget construction maison (vue d'ensemble, 720/mo, KD 34)
// ────────────────────────────────────────────────────────────────────────────────

const G14: Guide = {
  slug: "budget-construction-maison",
  title: "Budget construction maison : tous les postes | Maison de Nacre",
  metaDescription:
    "Quel budget pour faire construire ? Terrain, construction, frais de notaire, viabilisation, taxes : tous les postes détaillés, avec un exemple chiffré complet.",
  h1: "Quel budget pour faire construire sa maison ?",
  primaryKeyword: "budget construction maison",
  searchVolume: 720,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "Beaucoup de projets de construction démarrent sur un budget trop juste, parce qu'on a chiffré la maison en oubliant tout le reste. Or le prix de la maison ne représente qu'une partie de l'enveloppe : il faut y ajouter le terrain, les frais de notaire, la viabilisation, les taxes, les assurances et les aménagements extérieurs. Voici tous les postes à prévoir, avec un exemple complet chiffré, pour bâtir un budget réaliste dès le départ.",
  sections: [
    {
      h2: "Les grands postes d'un budget de construction",
      html: `<p>Un budget de construction se compose de quatre grandes familles : le <strong>terrain</strong> et ses frais d'acquisition, la <strong>construction</strong> de la maison elle-même, les <strong>frais annexes</strong> (viabilisation, étude de sol, taxes, assurances), et les <strong>aménagements extérieurs</strong>. Chacune pèse, et c'est leur somme qui détermine le budget réel à présenter à la banque. Les oublier expose à de mauvaises surprises en cours de projet.</p>`,
    },
    {
      h2: "Poste 1 : le terrain",
      html: `<p>C'est souvent le premier poste, et le plus variable selon le secteur. Dans le Calvados, le prix médian du terrain à bâtir va d'environ 150 €/m² dans l'arrière-pays à 250 €/m² en première couronne caennaise, et davantage dans Caen même. À l'achat s'ajoutent les frais de notaire, de l'ordre de 7 à 8 % du prix du terrain. Pour les fourchettes détaillées par secteur, voir notre guide <a href="/guides/prix-maison-neuve-calvados" class="text-primary underline">prix d'une maison neuve dans le Calvados</a>.</p>`,
    },
    {
      h2: "Poste 2 : la construction de la maison",
      html: `<p>C'est le cœur du budget. Une maison neuve sur-mesure, clé en main et conforme à la RE2020 revient à environ 2 800 €/m² livré, honoraires de maîtrise d'œuvre inclus, hors terrain. Pour une maison de 120 m², comptez donc de l'ordre de 310 000 à 370 000 € selon le niveau de finition. La méthode de calcul au mètre carré est détaillée dans notre guide <a href="/guides/prix-construction-maison-m2" class="text-primary underline">prix de construction au m²</a>.</p>`,
    },
    {
      h2: "Poste 3 : les frais annexes",
      html: `<p>Ce sont les grands oubliés des budgets trop justes. Plusieurs postes s'ajoutent systématiquement :</p>
<ul class="list-disc pl-6 space-y-2 mt-2">
<li><strong>Frais de notaire sur le terrain</strong> : environ 7 à 8 % du prix du terrain.</li>
<li><strong>Viabilisation</strong> : raccordement aux réseaux, souvent 5 000 à 15 000 € selon la distance, davantage pour un terrain isolé. Voir notre guide <a href="/guides/viabilisation-terrain" class="text-primary underline">la viabilisation d'un terrain</a>.</li>
<li><strong>Étude de sol</strong> : obligatoire dans de nombreux cas, de l'ordre de 1 000 à 2 000 €.</li>
<li><strong>Assurance dommage-ouvrage</strong> : obligatoire, généralement 2 à 4 % du coût de construction.</li>
<li><strong>Taxe d'aménagement</strong> : due après le permis, souvent quelques milliers d'euros selon la surface et la commune.</li>
</ul>`,
    },
    {
      h2: "Poste 4 : les aménagements extérieurs",
      html: `<p>Une fois la maison livrée, le terrain est rarement fini. Clôture, portail, allée, terrasse, plantations et parfois assainissement de surface représentent un budget réel, souvent de 10 000 à 20 000 €. Mieux vaut le prévoir dès le départ que le découvrir le jour de l'emménagement.</p>`,
    },
    {
      h2: "Exemple de budget complet chiffré",
      html: `<p>Voici un exemple réaliste pour une maison de 120 m² milieu de gamme, sur un terrain de 500 m² en première couronne caennaise.</p>
<div class="overflow-x-auto mt-4"><table class="w-full text-sm"><thead><tr><th class="text-left py-2 pr-4">Poste</th><th class="text-right py-2">Montant indicatif</th></tr></thead><tbody>
<tr><td class="py-2 pr-4">Terrain (500 m² à 250 €/m²)</td><td class="text-right py-2">125 000 €</td></tr>
<tr><td class="py-2 pr-4">Frais de notaire sur le terrain</td><td class="text-right py-2">9 400 €</td></tr>
<tr><td class="py-2 pr-4">Construction clé en main (120 m²)</td><td class="text-right py-2">336 000 €</td></tr>
<tr><td class="py-2 pr-4">Viabilisation</td><td class="text-right py-2">8 000 €</td></tr>
<tr><td class="py-2 pr-4">Étude de sol</td><td class="text-right py-2">1 500 €</td></tr>
<tr><td class="py-2 pr-4">Assurance dommage-ouvrage</td><td class="text-right py-2">7 500 €</td></tr>
<tr><td class="py-2 pr-4">Taxe d'aménagement</td><td class="text-right py-2">3 000 €</td></tr>
<tr><td class="py-2 pr-4">Aménagements extérieurs</td><td class="text-right py-2">15 000 €</td></tr>
<tr class="font-semibold border-t"><td class="py-2 pr-4">Budget total</td><td class="text-right py-2">environ 505 000 €</td></tr>
</tbody></table></div>
<p class="mt-4">Ce total illustre l'écart entre le seul prix de la maison (336 000 €) et le budget réel du projet (environ 505 000 €). Selon le secteur et le niveau de finition, ce budget peut descendre vers 350 000 € dans l'arrière-pays ou dépasser 600 000 € sur le littoral prisé.</p>`,
    },
    {
      h2: "Le budget total selon votre profil de projet",
      html: `<p>Le budget complet, terrain et frais annexes compris, dépend surtout du secteur et de la surface. Voici trois profils repères dans le Calvados.</p>
<div class="overflow-x-auto mt-4"><table class="w-full text-sm"><thead><tr><th class="text-left py-2 pr-4">Profil</th><th class="text-left py-2 pr-4">Secteur et surface</th><th class="text-right py-2">Budget total indicatif</th></tr></thead><tbody>
<tr><td class="py-2 pr-4">Budget maîtrisé</td><td class="py-2 pr-4">Arrière-pays, 90 à 100 m²</td><td class="text-right py-2">320 000 à 380 000 €</td></tr>
<tr><td class="py-2 pr-4">Milieu de gamme</td><td class="py-2 pr-4">Première couronne ou Côte de Nacre, 110 à 120 m²</td><td class="text-right py-2">450 000 à 550 000 €</td></tr>
<tr><td class="py-2 pr-4">Haut de gamme</td><td class="py-2 pr-4">Littoral prisé ou Caen, 140 à 160 m²</td><td class="text-right py-2">600 000 € et plus</td></tr>
</tbody></table></div>
<p class="mt-4">Ces fourchettes incluent le terrain, la construction et les frais annexes. Elles montrent que le secteur pèse autant que la surface : un même 120 m² coûte bien plus cher à construire sur le littoral qu'en plaine, à cause du foncier.</p>`,
    },
    {
      h2: "Les postes que l'on sous-estime le plus",
      html: `<p>Trois postes reviennent systématiquement dans les budgets dépassés. La <strong>viabilisation</strong> d'abord, quand on achète un terrain isolé sans vérifier la distance aux réseaux. Les <strong>aménagements extérieurs</strong> ensuite, repoussés à plus tard puis chiffrés en urgence une fois la maison livrée. Et les <strong>options de finition</strong>, accumulées au fil des choix (cuisine, sols, domotique) jusqu'à faire glisser le budget de plusieurs dizaines de milliers d'euros. Les anticiper dès le départ évite l'effet boule de neige.</p>`,
    },
    {
      h2: "L'apport et le financement",
      html: `<p>Les banques demandent généralement un apport, souvent de l'ordre de 10 % du projet, et au minimum de quoi couvrir les frais de notaire et de garantie. Un primo-accédant peut compléter son financement avec le prêt à taux zéro, sous conditions de ressources et de zone. L'accord de prêt doit être obtenu avant de signer les devis et de lancer les travaux. Nous détaillerons le financement et le PTZ dans des guides dédiés.</p>`,
    },
    {
      h2: "Comment maîtriser son budget",
      html: `<p>Trois leviers permettent de tenir l'enveloppe. D'abord, <strong>chiffrer tous les postes dès le départ</strong>, terrain et frais annexes compris, plutôt que de raisonner sur le seul prix de la maison. Ensuite, <strong>mettre les artisans en concurrence</strong> pour obtenir des devis justes, sans marge cachée. Enfin, <strong>se faire accompagner</strong> par un maître d'œuvre, qui anticipe les frais annexes, pilote les coûts et évite les dépassements en cours de chantier. Pour comprendre ce métier, voir notre comparatif <a href="/guides/maitre-doeuvre-ou-constructeur" class="text-primary underline">maître d'œuvre ou constructeur</a>.</p>`,
    },
    {
      h2: "Estimez le budget de votre projet",
      html: `<p>Un budget bien posé dès le départ, c'est un projet serein. Pour une estimation complète et gratuite, terrain et frais annexes compris, parlons de votre projet. Maison de Nacre vous accompagne de la conception à la remise des clés.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Demander mon estimation gratuite</a></p>`,
    },
  ],
  faq: [
    {
      question: "Quel budget pour faire construire une maison ?",
      answer:
        "Au-delà du prix de la maison (environ 2 800 €/m² livré), il faut compter le terrain, les frais de notaire, la viabilisation, l'étude de sol, l'assurance, les taxes et les aménagements extérieurs. Pour une maison de 120 m² en région caennaise, le budget total tourne souvent autour de 450 000 à 550 000 €, terrain compris.",
    },
    {
      question: "Quels frais annexes prévoir en plus de la maison ?",
      answer:
        "Frais de notaire sur le terrain (7 à 8 %), viabilisation (5 000 à 15 000 €), étude de sol, assurance dommage-ouvrage, taxe d'aménagement et aménagements extérieurs.",
    },
    {
      question: "Le prix de la maison inclut-il le terrain ?",
      answer:
        "Non. Le coût de construction au m² ne comprend jamais le terrain ni ses frais d'acquisition, qui se budgétisent à part.",
    },
    {
      question: "Quel apport pour faire construire ?",
      answer:
        "Souvent autour de 10 % du projet, et au minimum de quoi couvrir les frais de notaire et de garantie. Le PTZ peut compléter pour un primo-accédant.",
    },
    {
      question: "Comment éviter de dépasser son budget ?",
      answer:
        "En chiffrant tous les postes dès le départ, en mettant les artisans en concurrence et en se faisant accompagner par un maître d'œuvre qui pilote les coûts.",
    },
  ],
  relatedGuideSlugs: ["prix-maison-neuve-calvados", "prix-construction-maison-m2", "viabilisation-terrain"],
};

// ────────────────────────────────────────────────────────────────────────────────
// G5 — Combien coûte un maître d'œuvre (110/mo, KD 20)
// ────────────────────────────────────────────────────────────────────────────────

const G5: Guide = {
  slug: "cout-maitre-doeuvre",
  title: "Combien coûte un maître d'œuvre ? | Maison de Nacre",
  metaDescription:
    "Combien coûte un maître d'œuvre pour construire sa maison ? Honoraires, fourchettes, ce qu'ils comprennent et pourquoi ils peuvent vous faire économiser.",
  h1: "Combien coûte un maître d'œuvre ?",
  primaryKeyword: "coût maître d'œuvre",
  searchVolume: 110,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "Faire appel à un maître d'œuvre a un coût, mais celui-ci est souvent mal compris, et parfois confondu avec un surcoût alors qu'il peut au contraire vous faire économiser. Voici comment se calcule sa rémunération, les fourchettes à connaître, ce qu'elles comprennent, et comment situer ce coût face aux autres façons de faire construire.",
  sections: [
    {
      h2: "Comment se calcule le coût d'un maître d'œuvre",
      html: `<p>La rémunération d'un maître d'œuvre se calcule en général en <strong>pourcentage du coût des travaux</strong>, c'est-à-dire du montant total de la construction hors terrain. Ce pourcentage rémunère son travail de conception, de consultation des artisans et de suivi du chantier. Il ne s'agit pas d'une marge sur les matériaux ou la main-d'œuvre : le maître d'œuvre ne se paie pas sur le dos des artisans, mais par des honoraires affichés, payés par vous, le maître d'ouvrage.</p>`,
    },
    {
      h2: "Les fourchettes : de la mission partielle à la mission complète",
      html: `<p>Le pourcentage varie selon l'étendue de la mission. Pour une <strong>mission complète</strong>, qui couvre la conception, la consultation des artisans et le suivi du chantier jusqu'à la réception, les honoraires se situent le plus souvent entre <strong>8 et 15 % du coût des travaux</strong>. Pour une mission partielle (par exemple la seule conception, ou le seul suivi), le pourcentage est plus faible, mais vous reprenez à votre charge les tâches non couvertes. Plus la mission est complète, plus le pourcentage est élevé, mais plus vous êtes déchargé et accompagné.</p>`,
    },
    {
      h2: "Ce que comprend la rémunération du maître d'œuvre",
      html: `<p>Sur une mission complète, les honoraires couvrent un travail dense et continu : la conception des plans (seul ou avec un architecte), le chiffrage du coût réel de chaque lot, la consultation et la mise en concurrence des artisans, le montage du dossier de permis, la coordination du chantier semaine après semaine, le contrôle de la qualité et des délais, la gestion des imprévus, et l'accompagnement jusqu'à la réception. C'est un accompagnement de bout en bout, pas une simple prestation ponctuelle.</p>`,
    },
    {
      h2: "Mission complète ou partielle : ce que vous payez",
      html: `<p>Le coût dépend directement de ce que vous confiez au maître d'œuvre. Deux grandes options existent. La <strong>mission complète</strong> couvre tout, de la conception jusqu'à la réception du chantier : c'est l'option la plus chère en pourcentage, mais celle qui vous décharge entièrement et sécurise le projet de bout en bout. La <strong>mission partielle</strong> ne couvre qu'une partie du parcours, par exemple la seule conception des plans, ou le seul suivi de chantier : le pourcentage est plus faible, mais vous reprenez à votre charge les tâches non couvertes, avec le temps et les risques que cela suppose.</p>
<p class="mt-4">Pour un particulier qui n'a ni le temps ni l'expérience de piloter un chantier, la mission complète est presque toujours le meilleur calcul : le surcoût apparent par rapport à une mission partielle est compensé par la tranquillité, la mise en concurrence des artisans et l'absence de mauvaises surprises. C'est le format que nous privilégions chez Maison de Nacre, parce que c'est là que l'accompagnement apporte le plus de valeur. Pour visualiser tout ce qu'il recouvre, voir notre guide <a href="/guides/etapes-construction-maison" class="text-primary underline">les étapes d'une construction</a>.</p>`,
    },
    {
      h2: "Honoraires du maître d'œuvre ou marge du constructeur",
      html: `<p>C'est la comparaison à comprendre pour juger le coût. Un maître d'œuvre facture des honoraires affichés, et vous voyez les devis réels des artisans. Un autre modèle, celui où l'on vous vend une maison à prix global, intègre une marge non visible, souvent de 15 à 25 % du coût réel des travaux. Dans ce cas, vous ne payez pas « moins cher » parce qu'il n'y a pas d'honoraires affichés : la rémunération est simplement fondue dans le prix. À projet équivalent, des honoraires transparents pèsent souvent moins lourd qu'une marge opaque. Notre comparatif <a href="/guides/maitre-doeuvre-ou-constructeur" class="text-primary underline">maître d'œuvre ou constructeur</a> détaille cette différence.</p>`,
    },
    {
      h2: "Un surcoût ou une économie ?",
      html: `<p>Beaucoup voient les honoraires comme une dépense en plus. C'est une lecture incomplète. Le maître d'œuvre met les artisans en concurrence pour votre compte et négocie les devis : cette mise en concurrence permet souvent d'obtenir des prix plus justes que ceux qu'un particulier seul aurait obtenus. L'économie réalisée sur les travaux peut compenser tout ou partie des honoraires. À cela s'ajoute la valeur d'un chantier bien piloté, sans dépassement ni malfaçon, qui évite des surcoûts cachés. Le coût d'un maître d'œuvre doit donc se juger au regard de ce qu'il fait économiser et sécuriser, pas seulement de la ligne d'honoraires.</p>`,
    },
    {
      h2: "Exemple chiffré",
      html: `<p>Prenons une maison de 120 m² dont le coût de construction (les travaux, hors terrain) s'élève à 300 000 €. Des honoraires de maîtrise d'œuvre à 12 % représentent <strong>36 000 €</strong>. Pour ce montant, vous bénéficiez de la conception sur-mesure, de la mise en concurrence des artisans, du suivi complet du chantier et de l'accompagnement jusqu'aux clés. Rapporté à l'ampleur d'un projet de construction et aux économies réalisées sur les devis, ce montant prend tout son sens. Pour situer ce poste dans le budget global, voir notre guide <a href="/guides/prix-maison-neuve-calvados" class="text-primary underline">prix d'une maison neuve dans le Calvados</a>.</p>`,
    },
    {
      h2: "Maître d'œuvre ou architecte : quel coût ?",
      html: `<p>Les honoraires d'un architecte se calculent aussi en pourcentage du coût des travaux, dans des fourchettes comparables. La différence tient au périmètre : un architecte est avant tout concepteur, tandis qu'un maître d'œuvre conçoit et coordonne l'exécution jusqu'à la livraison. Pour un projet clé en main, le maître d'œuvre couvre un champ plus large, ce qui explique que sa mission complète englobe le suivi de chantier.</p>`,
    },
    {
      h2: "Notre tarif chez Maison de Nacre",
      html: `<p>Nous appliquons un tarif clair et unique : <strong>12 % du coût de construction, tout compris, sans marge cachée sur les matériaux ou la main-d'œuvre</strong>. Vous savez exactement combien coûte notre accompagnement et ce qu'il couvre, du premier plan à la remise des clés. Pour le détail de notre prestation, voir notre <a href="/services/maitre-doeuvre-construction-maison" class="text-primary underline">accompagnement en maîtrise d'œuvre</a>.</p>`,
    },
    {
      h2: "Estimez le coût de votre projet",
      html: `<p>Vous voulez savoir ce que coûterait l'accompagnement de votre projet ? Parlons-en. Maison de Nacre vous propose un tarif clair et une estimation gratuite, de la conception à la remise des clés.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Demander mon estimation gratuite</a></p>`,
    },
  ],
  faq: [
    {
      question: "Combien coûte un maître d'œuvre pour une maison ?",
      answer:
        "En général entre 8 et 15 % du coût des travaux pour une mission complète. Chez Maison de Nacre, c'est 12 % tout compris. Pour une construction de 300 000 €, cela représente 36 000 €.",
    },
    {
      question: "Les honoraires du maître d'œuvre sont-ils un surcoût ?",
      answer:
        "Pas nécessairement. La mise en concurrence des artisans permet souvent d'obtenir des prix plus justes, dont l'économie peut compenser tout ou partie des honoraires.",
    },
    {
      question: "Sur quoi se calculent les honoraires ?",
      answer:
        "Sur le coût des travaux (la construction hors terrain), en pourcentage. Le maître d'œuvre ne prend pas de marge sur les devis des artisans.",
    },
    {
      question: "Quelle différence de coût avec un constructeur ?",
      answer:
        "Le maître d'œuvre facture des honoraires affichés ; l'autre modèle intègre une marge non visible, souvent de 15 à 25 %. À projet équivalent, les honoraires transparents pèsent souvent moins lourd.",
    },
    {
      question: "Le maître d'œuvre coûte-t-il plus cher qu'un architecte ?",
      answer:
        "Les pourcentages sont comparables, mais le maître d'œuvre couvre un périmètre plus large en intégrant le suivi de chantier jusqu'à la livraison.",
    },
  ],
  relatedGuideSlugs: ["maitre-doeuvre-ou-constructeur", "prix-maison-neuve-calvados"],
};

// ────────────────────────────────────────────────────────────────────────────────
// G19 — La RE2020 expliquée simplement (guide de fond, 8 100/mo KD 44)
// ────────────────────────────────────────────────────────────────────────────────

const G19: Guide = {
  slug: "re2020",
  title: "La RE2020 expliquée simplement | Maison de Nacre",
  metaDescription:
    "La RE2020 expliquée simplement : objectifs, indicateurs, ce qui change pour votre maison neuve, surcoût et confort d'été. Le guide clair de la norme.",
  h1: "La RE2020 expliquée simplement",
  primaryKeyword: "RE2020",
  searchVolume: 8100,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "La RE2020 est la réglementation qui encadre toutes les maisons neuves depuis 2022. Derrière ce sigle un peu technique se cache une idée simple : construire des maisons qui consomment moins, émettent moins de carbone et restent confortables, y compris pendant les fortes chaleurs. Voici l'essentiel à comprendre, sans jargon inutile.",
  sections: [
    {
      h2: "Qu'est-ce que la RE2020 ?",
      html: `<p>RE2020 signifie « réglementation environnementale 2020 ». Elle remplace l'ancienne réglementation thermique (la RT2012) et s'applique à toutes les constructions neuves, dont les maisons individuelles. Sa nouveauté principale : elle ne regarde plus seulement la consommation d'énergie, mais aussi l'empreinte carbone de la maison sur tout son cycle de vie, et le confort en été. C'est une approche plus large, qui vise des maisons sobres et durables.</p>`,
    },
    {
      h2: "Les trois grands objectifs de la RE2020",
      html: `<p>La norme poursuit trois buts complémentaires. Le premier est la <strong>sobriété énergétique</strong> : réduire les besoins en chauffage, en eau chaude et en refroidissement grâce à une meilleure conception et une isolation renforcée. Le deuxième est la <strong>réduction de l'empreinte carbone</strong> : limiter les émissions liées à la fabrication des matériaux et à l'usage de la maison, en favorisant les énergies décarbonées et les matériaux plus vertueux. Le troisième est le <strong>confort d'été</strong> : garantir que la maison reste vivable pendant les canicules, sans recourir systématiquement à la climatisation.</p>`,
    },
    {
      h2: "Ce que la RE2020 change concrètement pour votre maison",
      html: `<p>Pour respecter ces objectifs, une maison RE2020 repose sur plusieurs principes. La <strong>conception bioclimatique</strong> d'abord : on oriente la maison et on dimensionne les ouvertures pour profiter du soleil l'hiver et s'en protéger l'été. L'<strong>isolation et l'étanchéité à l'air</strong> ensuite, nettement renforcées par rapport à l'ancien. Le <strong>chauffage décarboné</strong>, le plus souvent une pompe à chaleur, qui remplace les énergies fossiles. Et des <strong>matériaux à plus faible impact carbone</strong>, choisis pour leur empreinte sur tout le cycle de vie. Ces choix se font dès la conception, pas après coup.</p>`,
    },
    {
      h2: "Les indicateurs de la RE2020, sans jargon",
      html: `<p>La norme s'appuie sur quelques indicateurs chiffrés. Inutile d'en être expert, mais les connaître aide à comprendre. Le <strong>Bbio</strong> mesure le besoin bioclimatique, c'est-à-dire la qualité de conception de la maison avant même les équipements. Le <strong>Cep</strong> mesure la consommation d'énergie primaire. Les indicateurs <strong>carbone</strong> évaluent les émissions liées à la construction et à l'usage. Enfin, le <strong>DH</strong> (degrés-heures) mesure l'inconfort en été : plus il est bas, mieux la maison résiste à la chaleur. En clair, la RE2020 note à la fois la conception, la consommation, le carbone et le confort estival.</p>`,
    },
    {
      h2: "Le confort d'été, la vraie nouveauté",
      html: `<p>C'est l'apport le plus concret de la RE2020. Les réglementations précédentes se concentraient sur l'hiver et le chauffage. La RE2020 impose désormais que la maison reste vivable en été, mesuré par les degrés-heures d'inconfort. Avec des étés de plus en plus chauds, y compris en Normandie, c'est un vrai gain. Ce confort se gagne à la conception, par l'orientation, les protections solaires (débords de toit, volets, brise-soleil), une inertie suffisante et une ventilation pensée pour rafraîchir la nuit, plutôt que par un climatiseur ajouté ensuite.</p>`,
    },
    {
      h2: "RE2020 ou RT2012 : ce qui a changé",
      html: `<p>Par rapport à la RT2012, la RE2020 va plus loin sur trois plans. Elle renforce les exigences d'isolation et de performance énergétique. Elle ajoute une dimension carbone, absente de l'ancienne norme, qui pèse sur le choix des matériaux et des énergies. Et elle introduit l'exigence de confort d'été. C'est donc une marche en avant nette vers des maisons plus sobres et mieux adaptées au climat.</p>`,
    },
    {
      h2: "Le surcoût de la RE2020",
      html: `<p>Soyons clairs : la RE2020 augmente le coût de construction de l'ordre de 5 à 10 % par rapport aux anciennes normes, du fait de l'isolation, de l'étanchéité et des équipements décarbonés. Mais ce surcoût se rattrape à l'usage, par des factures d'énergie nettement plus basses, et par une maison plus confortable et mieux valorisée. C'est un investissement, pas une dépense perdue. Pour situer ce surcoût dans le budget global, voir notre guide <a href="/guides/prix-maison-neuve-calvados" class="text-primary underline">prix d'une maison neuve dans le Calvados</a>.</p>`,
    },
    {
      h2: "RE2020 et chauffage : la fin des énergies fossiles",
      html: `<p>L'un des effets les plus visibles de la RE2020 est la sortie progressive des énergies fossiles pour le chauffage. Le gaz, en particulier, devient difficile à justifier dans une maison neuve, au profit de solutions décarbonées comme la pompe à chaleur, qui combine bonne performance et faibles émissions. Le choix précis dépend de la maison et du terrain, mais la logique est claire : chauffer propre et efficace.</p>`,
    },
    {
      h2: "Les bénéfices concrets d'une maison RE2020 au quotidien",
      html: `<p>Au-delà de la conformité, vivre dans une maison RE2020 change le quotidien. Les <strong>factures d'énergie</strong> sont nettement plus basses qu'en maison ancienne, parfois divisées par deux ou trois, grâce à l'isolation et à une pompe à chaleur efficace. Le <strong>confort thermique</strong> est stable toute l'année : pas de murs froids l'hiver, pas de surchauffe l'été dans une maison bien conçue. La <strong>qualité de l'air</strong> s'améliore aussi, grâce à une ventilation maîtrisée qui renouvelle l'air sans déperdition. Et la <strong>valeur du bien</strong> progresse : une maison performante, bien classée au DPE, se revend plus facilement et plus cher qu'une passoire énergétique, dont la décote ne cesse d'augmenter.</p>
<p class="mt-4">À l'inverse de l'ancien, où les travaux d'amélioration énergétique s'étalent sur des années et coûtent cher, une maison RE2020 part directement au meilleur niveau, sans rénovation à prévoir. C'est l'un des arguments forts du neuf face à l'achat dans l'ancien, surtout dans un contexte où les exigences sur les logements ne cessent de se durcir.</p>`,
    },
    {
      h2: "Comment bien concevoir une maison RE2020",
      html: `<p>Respecter la norme est une obligation ; en tirer le meilleur est un art. Une maison RE2020 réussie se conçoit dès les premiers plans, en intégrant l'orientation, l'isolation, les protections solaires et les équipements de façon cohérente. C'est tout l'intérêt de travailler avec un architecte et un maître d'œuvre qui pensent la performance dès le départ, plutôt que de la subir. Pour notre approche, voir notre page <a href="/services/maison-re2020" class="text-primary underline">construire une maison RE2020</a>.</p>`,
    },
    {
      h2: "Construisez une maison performante",
      html: `<p>Vous voulez une maison neuve sobre, confortable et durable, qui tire le meilleur de la RE2020 ? Parlons-en. Maison de Nacre conçoit et réalise votre maison performante, de A à Z. Estimation gratuite et sans engagement.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Demander mon estimation gratuite</a></p>`,
    },
  ],
  faq: [
    {
      question: "Qu'est-ce que la RE2020 ?",
      answer:
        "La réglementation environnementale 2020, qui encadre toutes les constructions neuves. Elle vise à réduire la consommation d'énergie, l'empreinte carbone et à garantir le confort d'été.",
    },
    {
      question: "Quelle différence avec la RT2012 ?",
      answer:
        "La RE2020 renforce les exigences énergétiques, ajoute une dimension carbone (matériaux et usage) et introduit le confort d'été, absents de la RT2012.",
    },
    {
      question: "Quel est le surcoût de la RE2020 ?",
      answer:
        "De l'ordre de 5 à 10 % du coût de construction, compensé à l'usage par des factures d'énergie nettement plus basses.",
    },
    {
      question: "Quel chauffage pour une maison RE2020 ?",
      answer:
        "Le plus souvent une pompe à chaleur. Les énergies fossiles comme le gaz deviennent difficiles à justifier dans une maison neuve.",
    },
    {
      question: "La RE2020 est-elle obligatoire ?",
      answer:
        "Oui, pour toutes les constructions neuves de maison individuelle. La question n'est donc pas de la respecter, mais de bien la concevoir.",
    },
  ],
  relatedGuideSlugs: ["prix-maison-neuve-calvados", "maitre-doeuvre-ou-constructeur"],
};

// ────────────────────────────────────────────────────────────────────────────────
// G28 — Le permis de construire pour une maison (90/mo, KD 36)
// ────────────────────────────────────────────────────────────────────────────────

const G28: Guide = {
  slug: "permis-de-construire-maison",
  title: "Permis de construire pour une maison | Maison de Nacre",
  metaDescription:
    "Le permis de construire pour une maison : dossier, pièces, dépôt, délai d'instruction, décision et recours. Le guide complet pour réussir votre demande.",
  h1: "Le permis de construire pour une maison : le guide complet",
  primaryKeyword: "permis de construire maison",
  searchVolume: 90,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "Construire une maison neuve impose presque toujours un permis de construire. C'est une étape administrative incontournable, qui conditionne le démarrage du chantier. Bien la préparer évite les retards et les refus. Voici tout ce qu'il faut savoir : quand le permis est obligatoire, quelles pièces fournir, comment déposer la demande, et ce qui se passe après.",
  sections: [
    {
      h2: "Qu'est-ce que le permis de construire et quand est-il obligatoire ?",
      html: `<p>Le permis de construire est une autorisation d'urbanisme délivrée par la mairie, qui vérifie que votre projet respecte les règles locales (plan local d'urbanisme, règles de hauteur, d'implantation, d'aspect). Pour la construction d'une maison individuelle neuve, il est en principe toujours obligatoire. Les travaux de moindre ampleur relèvent, eux, d'une simple déclaration préalable. Construire sans permis expose à de lourdes sanctions, jusqu'à la démolition.</p>`,
    },
    {
      h2: "Permis de construire ou déclaration préalable ?",
      html: `<p>Tous les projets ne relèvent pas du permis. La <strong>déclaration préalable</strong> suffit pour des travaux limités (petite extension, abri, modification de façade, selon les surfaces), avec un délai d'instruction d'un mois seulement. La construction d'une maison neuve, elle, exige un <strong>permis de construire</strong>, avec un délai de deux mois. Bien identifier la bonne autorisation dès le départ évite de se tromper de procédure. Notre guide <a href="/guides/delai-permis-de-construire" class="text-primary underline">délai d'obtention d'un permis de construire</a> détaille les durées.</p>`,
    },
    {
      h2: "Le dossier de demande de permis",
      html: `<p>Le dossier de permis comprend un formulaire (Cerfa) et un ensemble de pièces qui permettent à la mairie de comprendre et d'évaluer le projet :</p>
<ul class="list-disc pl-6 space-y-2 mt-2">
<li>Un <strong>plan de situation</strong> du terrain, qui le localise dans la commune.</li>
<li>Un <strong>plan de masse</strong>, qui montre l'implantation de la maison sur la parcelle, avec les réseaux.</li>
<li>Un <strong>plan en coupe</strong> du terrain et de la construction.</li>
<li>Les <strong>plans des façades et des toitures</strong>.</li>
<li>Une <strong>notice</strong> décrivant le terrain et le projet.</li>
<li>Un <strong>document graphique</strong> d'insertion (la maison dans son environnement).</li>
<li>Des <strong>photographies</strong> situant le terrain dans le paysage proche et lointain.</li>
</ul>
<p class="mt-4">Un dossier complet et soigné est la clé d'une instruction rapide : la moindre pièce manquante déclenche une demande de complément et fait perdre du temps.</p>`,
    },
    {
      h2: "Où et comment déposer la demande",
      html: `<p>La demande se dépose à la mairie de la commune où se situe le terrain, en plusieurs exemplaires, ou en ligne lorsque la commune propose le dépôt dématérialisé. La mairie vous remet un récépissé indiquant la date de dépôt et le délai d'instruction. Ce récépissé est important : il fait courir le délai et sert de référence pour la suite.</p>`,
    },
    {
      h2: "Le délai d'instruction",
      html: `<p>Pour une maison individuelle, le délai d'instruction est de <strong>deux mois</strong> à compter du dépôt d'un dossier complet. Il peut être majoré d'un mois si le terrain se situe en secteur protégé (avis de l'Architecte des Bâtiments de France). Une demande de pièces complémentaires suspend ce délai. Le détail figure dans notre guide <a href="/guides/delai-permis-de-construire" class="text-primary underline">délai d'obtention d'un permis de construire</a>.</p>`,
    },
    {
      h2: "La décision de la mairie",
      html: `<p>À l'issue de l'instruction, trois réponses sont possibles : l'<strong>accord</strong>, l'<strong>accord assorti de prescriptions</strong> (des conditions à respecter), ou le <strong>refus</strong>, qui doit être motivé. En l'absence de réponse à la fin du délai, vous bénéficiez en principe d'un permis tacite. En cas de refus, vous pouvez demander à la mairie de revoir sa position, puis, si besoin, exercer un recours.</p>`,
    },
    {
      h2: "Après l'obtention du permis",
      html: `<p>Obtenir le permis ne suffit pas pour démarrer sereinement. Vous devez l'<strong>afficher sur le terrain</strong>, visible depuis la voie publique, pendant toute la durée du chantier. Cet affichage fait courir un <strong>délai de recours des tiers de deux mois</strong> : un voisin peut contester le permis. Au démarrage des travaux, vous adressez une déclaration d'ouverture de chantier à la mairie ; à la fin, une déclaration attestant l'achèvement et la conformité des travaux. La pratique prudente est d'attendre la fin du délai de recours avant de lancer les gros travaux.</p>`,
    },
    {
      h2: "La durée de validité du permis",
      html: `<p>Une fois obtenu, le permis est valable <strong>trois ans</strong>. Si les travaux ne commencent pas dans ce délai, il devient caduc. Il peut être prorogé deux fois d'un an, sous réserve d'en faire la demande avant l'échéance et que les règles d'urbanisme n'aient pas changé.</p>`,
    },
    {
      h2: "Les motifs fréquents de refus et comment les éviter",
      html: `<p>Un permis se refuse rarement par hasard : la plupart des refus tiennent à quelques causes récurrentes, toutes évitables. La première est la <strong>non-conformité au plan local d'urbanisme</strong> : hauteur, implantation, emprise au sol, distance aux limites ou aspect extérieur non respectés. La deuxième est un <strong>dossier incomplet ou imprécis</strong>, qui empêche la mairie d'évaluer le projet. La troisième concerne les <strong>règles d'aspect</strong> dans certaines zones (couleurs, matériaux, pente de toit imposés), souvent sous-estimées. La quatrième touche les <strong>secteurs protégés</strong>, où l'avis de l'Architecte des Bâtiments de France impose des contraintes spécifiques.</p>
<p class="mt-4">La parade est simple : consulter le PLU et, en cas de doute, le service urbanisme de la mairie avant de finaliser le projet, puis monter un dossier rigoureux et conforme. C'est précisément le travail d'un maître d'œuvre ou d'un architecte, qui connaît les règles locales et conçoit le projet pour qu'il passe du premier coup. Un refus, c'est plusieurs mois perdus : autant mettre toutes les chances de son côté dès le dépôt.</p>`,
    },
    {
      h2: "Qui peut monter le dossier de permis ?",
      html: `<p>Vous pouvez préparer le dossier vous-même, mais c'est un exercice technique où une erreur coûte des semaines. Le recours à un <strong>architecte est obligatoire</strong> au-delà d'un certain seuil de surface de plancher pour les particuliers. En dessous, un <strong>maître d'œuvre</strong> peut monter et suivre le dossier dans le cadre de son accompagnement, ce qui sécurise la demande et évite les allers-retours avec la mairie. C'est ce que nous faisons chez Maison de Nacre, comme le détaille notre guide <a href="/guides/etapes-construction-maison" class="text-primary underline">les étapes d'une construction</a>.</p>`,
    },
    {
      h2: "Sécurisez votre permis de construire",
      html: `<p>Un dossier bien préparé, c'est un permis obtenu sans accroc et des semaines gagnées. Maison de Nacre monte votre dossier, suit l'instruction et intègre cette étape dans votre projet. Parlons-en.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Discuter de mon projet</a></p>`,
    },
  ],
  faq: [
    {
      question: "Le permis de construire est-il obligatoire pour une maison ?",
      answer:
        "Oui, la construction d'une maison individuelle neuve nécessite en principe toujours un permis de construire. Les petits travaux relèvent d'une déclaration préalable.",
    },
    {
      question: "Quelles pièces composent le dossier de permis ?",
      answer:
        "Le formulaire Cerfa, un plan de situation, un plan de masse, un plan en coupe, les plans de façades et toitures, une notice, un document d'insertion et des photographies.",
    },
    {
      question: "Combien de temps pour obtenir un permis de construire ?",
      answer:
        "Deux mois d'instruction pour une maison individuelle, à compter du dépôt d'un dossier complet, parfois un mois de plus en secteur protégé.",
    },
    {
      question: "Que faire en cas de refus de permis ?",
      answer:
        "Vous pouvez demander à la mairie de revoir sa décision, corriger le projet, puis exercer un recours si nécessaire. Un dossier bien monté limite ce risque.",
    },
    {
      question: "Faut-il un architecte pour le permis ?",
      answer:
        "Le recours à un architecte est obligatoire au-delà d'un certain seuil de surface. En dessous, un maître d'œuvre peut monter le dossier.",
    },
  ],
  relatedGuideSlugs: ["delai-permis-de-construire", "etapes-construction-maison"],
};

export const GUIDES: Guide[] = [G11, G6, G12, G17, G23, G24, G29, G14, G5, G19, G28];

export const GUIDES_BY_SLUG: Record<string, Guide> = Object.fromEntries(
  GUIDES.map((g) => [g.slug, g]),
);

export function getGuide(slug: string): Guide | undefined {
  return GUIDES_BY_SLUG[slug];
}

export function getAllGuideSlugs(): string[] {
  return GUIDES.map((g) => g.slug);
}
