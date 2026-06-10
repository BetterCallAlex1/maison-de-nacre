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

const G16: Guide = {
  slug: "choisir-terrain-constructible",
  title: "Comment choisir son terrain constructible | Maison de Nacre",
  metaDescription:
    "Comment choisir son terrain constructible : PLU, viabilisation, nature du sol, orientation, voisinage. Les critères et les pièges pour bien acheter.",
  h1: "Comment choisir son terrain constructible",
  primaryKeyword: "choisir terrain constructible",
  searchVolume: null,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "Le terrain est la fondation de tout projet de construction, au sens propre comme au figuré. Un bon terrain rend le projet fluide ; un mauvais choix peut renchérir la construction de plusieurs dizaines de milliers d'euros ou compliquer la vie pendant des années. Voici les critères à vérifier et les pièges à éviter pour bien choisir.",
  sections: [
    {
      h2: "Vérifier la constructibilité avant tout",
      html: `<p>Premier réflexe absolu : s'assurer que le terrain est réellement constructible. Constructible ne va pas de soi : c'est le plan local d'urbanisme (PLU) de la commune qui le détermine, ainsi que les règles applicables (hauteur, emprise au sol, distances aux limites, aspect). Demandez un <strong>certificat d'urbanisme</strong> à la mairie : il renseigne sur la constructibilité, les règles et la desserte par les réseaux. Ne signez jamais un compromis sans cette vérification, idéalement assortie d'une condition suspensive d'obtention du permis.</p>`,
    },
    {
      h2: "Terrain en lotissement ou terrain isolé ?",
      html: `<p>C'est un choix structurant. Un <strong>terrain en lotissement</strong> est aménagé, borné et presque toujours viabilisé : tout est prêt, mais il est plus cher et soumis à un règlement de lotissement qui encadre les constructions. Un <strong>terrain isolé en secteur diffus</strong> est souvent moins cher et plus libre, mais la viabilisation est à votre charge et peut réserver des écarts importants selon la distance aux réseaux. À budget égal, le lotissement offre la tranquillité, le diffus offre la liberté et parfois le caractère.</p>`,
    },
    {
      h2: "La viabilisation et les réseaux",
      html: `<p>Un terrain non viabilisé n'est qu'un bout de terre. Vérifiez la présence et la distance des réseaux (eau, électricité, assainissement, télécom) : plus ils passent loin, plus le raccordement coûte cher. C'est l'un des postes les plus sous-estimés. Notre guide <a href="/guides/viabilisation-terrain" class="text-primary underline">la viabilisation d'un terrain</a> détaille les coûts et les étapes à anticiper.</p>`,
    },
    {
      h2: "La nature du sol",
      html: `<p>Le sol détermine le type de fondations, donc une part du coût. Un sol argileux, fréquent dans certaines zones du Calvados et sur le littoral, gonfle et se rétracte avec l'humidité, et impose des fondations adaptées. Une <strong>étude de sol</strong> est d'ailleurs obligatoire dans de nombreux cas avant de construire. Mieux vaut connaître la nature du sol avant d'acheter que de découvrir un surcoût de fondations après.</p>`,
    },
    {
      h2: "L'orientation et la topographie",
      html: `<p>L'orientation du terrain influe directement sur le confort et la performance de la future maison. Un terrain bien exposé permet de profiter de la lumière et de la chaleur du sud, un atout pour la RE2020. La <strong>topographie</strong> compte aussi : un terrain plat se construit facilement, un terrain en pente peut offrir du caractère et des vues, mais renchérit le terrassement et les fondations. Ces éléments se pensent dès le choix du terrain, en lien avec le projet de maison.</p>`,
    },
    {
      h2: "L'environnement et le voisinage",
      html: `<p>Au-delà des critères techniques, le cadre de vie compte. Regardez le <strong>vis-à-vis</strong> (un point souvent décisif), les vues, l'ensoleillement réel, mais aussi les nuisances possibles : route passante, voie ferrée, zone inondable, exploitation agricole, projet d'urbanisme à proximité. Une visite à différents moments de la journée et la consultation du PLU et des servitudes évitent les mauvaises surprises.</p>`,
    },
    {
      h2: "Le budget terrain",
      html: `<p>Le prix du terrain est le premier poste qui fait varier le budget total. Dans le Calvados, il va d'environ 150 €/m² dans l'arrière-pays à 250 €/m² en première couronne caennaise, et davantage dans Caen et sur le littoral prisé. À l'achat s'ajoutent les frais de notaire (7 à 8 %). Pour les fourchettes par secteur, voir notre guide <a href="/guides/prix-maison-neuve-calvados" class="text-primary underline">prix d'une maison neuve dans le Calvados</a>.</p>`,
    },
    {
      h2: "Les pièges à éviter",
      html: `<p>Quelques erreurs reviennent souvent. Acheter sans vérifier la constructibilité ni le PLU. Négliger la viabilisation sur un terrain isolé. Ignorer la nature du sol et son impact sur les fondations. Sous-estimer le vis-à-vis ou les nuisances. Et signer sans condition suspensive d'obtention du permis. Chacune de ces erreurs peut coûter cher ou bloquer le projet : une vérification méthodique avant l'achat est le meilleur investissement.</p>`,
    },
    {
      h2: "Les documents à demander avant d'acheter",
      html: `<p>Avant de signer, réunissez quelques documents qui révèlent l'essentiel sur le terrain. Le <strong>certificat d'urbanisme</strong> d'abord, qui précise la constructibilité, les règles et la desserte par les réseaux. L'<strong>extrait du plan local d'urbanisme</strong> ensuite, pour connaître la zone et ses contraintes (hauteur, emprise, aspect). Le <strong>plan de bornage</strong>, qui définit précisément les limites de la parcelle et sa surface réelle. L'<strong>état des servitudes</strong> (passages, réseaux, droits de voisinage) qui peuvent peser sur le projet. L'<strong>état des risques</strong> (ERP), qui signale les zones inondables, argileuses ou exposées à d'autres aléas. Et, sur un terrain isolé, un <strong>devis de viabilisation</strong> pour chiffrer le raccordement.</p>
<p class="mt-4">Ces documents se demandent à la mairie, au vendeur ou au notaire, et se lisent avec attention. Une incohérence ou une contrainte lourde repérée à ce stade vaut bien mieux qu'une mauvaise surprise une fois le terrain acheté. En cas de doute, faire relire le dossier par un professionnel évite des erreurs coûteuses.</p>`,
    },
    {
      h2: "Notre accompagnement dans le choix du terrain",
      html: `<p>Choisir un terrain demande un œil technique. Chez Maison de Nacre, nous vous aidons à évaluer la faisabilité d'un terrain avant l'achat : constructibilité, viabilisation, sol, orientation et budget, pour éviter les mauvaises surprises et caler le projet sur le bon terrain. Pour la suite du parcours, voir notre guide <a href="/guides/etapes-construction-maison" class="text-primary underline">les étapes d'une construction</a>.</p>`,
    },
    {
      h2: "Trouvez le bon terrain pour votre projet",
      html: `<p>Vous hésitez sur un terrain ou vous cherchez encore ? Nous vous aidons à évaluer sa faisabilité et à éviter les pièges. Parlons de votre projet. Première estimation gratuite et sans engagement.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Discuter de mon projet</a></p>`,
    },
  ],
  faq: [
    {
      question: "Comment savoir si un terrain est constructible ?",
      answer:
        "En consultant le plan local d'urbanisme de la commune et en demandant un certificat d'urbanisme, qui précise la constructibilité, les règles et la desserte par les réseaux.",
    },
    {
      question: "Vaut-il mieux un terrain en lotissement ou isolé ?",
      answer:
        "Le lotissement est viabilisé et tranquille mais plus cher et encadré. Le terrain isolé est plus libre et souvent moins cher, mais la viabilisation est à votre charge.",
    },
    {
      question: "Pourquoi vérifier la nature du sol ?",
      answer:
        "Parce qu'elle détermine le type de fondations et donc une partie du coût. Un sol argileux impose des fondations adaptées. Une étude de sol est souvent obligatoire.",
    },
    {
      question: "Quel budget prévoir pour un terrain dans le Calvados ?",
      answer:
        "De l'ordre de 150 €/m² dans l'arrière-pays à 250 €/m² en première couronne caennaise, davantage dans Caen et sur le littoral, plus les frais de notaire.",
    },
    {
      question: "Quelles précautions avant d'acheter un terrain ?",
      answer:
        "Vérifier le PLU, la viabilisation, le sol, l'orientation et le voisinage, et signer avec une condition suspensive d'obtention du permis de construire.",
    },
  ],
  relatedGuideSlugs: ["viabilisation-terrain", "prix-maison-neuve-calvados", "etapes-construction-maison"],
};

const G13: Guide = {
  slug: "prix-maison-120m2",
  title: "Combien coûte une maison de 120 m² ? | Maison de Nacre",
  metaDescription:
    "Combien coûte une maison de 120 m² ? Budget clé en main, décomposition des postes, prix par standing et exemple chiffré, de 240 000 à 400 000 € selon les finitions.",
  h1: "Combien coûte une maison de 120 m² ?",
  primaryKeyword: "prix maison 120m2",
  searchVolume: 110,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "Le 120 m² est l'une des surfaces les plus demandées pour une maison familiale : assez d'espace pour quatre personnes, sans excès. Mais son prix varie fortement selon le niveau de finition et le secteur. Voici un budget clair pour une maison de 120 m², la décomposition des postes et ce qui fait bouger l'addition.",
  sections: [
    {
      h2: "Le budget d'une maison de 120 m²",
      html: `<p>Pour la construction seule, clé en main et conforme à la RE2020, hors terrain, une maison de 120 m² revient en moyenne à environ <strong>336 000 €</strong>, soit autour de 2 800 €/m² livré, honoraires de maîtrise d'œuvre inclus. Selon le niveau de finition, la fourchette s'étend d'environ <strong>240 000 € en entrée de gamme à 400 000 € en haut de gamme</strong>. À ce montant, il faut ajouter le terrain et les frais annexes pour obtenir le budget total du projet.</p>`,
    },
    {
      h2: "Pourquoi 120 m² est une surface populaire",
      html: `<p>Le 120 m² s'impose comme un standard pour une bonne raison : il permet un séjour confortable, une cuisine ouverte, trois à quatre chambres et deux salles d'eau, sans pousser le budget vers des sommets. C'est le bon compromis entre confort de vie et coût maîtrisé pour une famille, ce qui en fait la surface de référence d'une grande partie des projets de construction neuve.</p>`,
    },
    {
      h2: "La décomposition du budget",
      html: `<p>Un budget de construction se répartit grossièrement entre trois grandes phases. Le <strong>gros œuvre</strong> (terrassement, fondations, murs, charpente, couverture) représente souvent un peu moins de la moitié du coût. Le <strong>second œuvre</strong> (isolation, cloisons, électricité, plomberie, chauffage, menuiseries) en représente une part comparable. Les <strong>finitions</strong> (sols, peintures, cuisine, salle de bains) complètent l'ensemble. À cela s'ajoutent les honoraires de maîtrise d'œuvre, qui rémunèrent la conception et le pilotage. Comprendre cette répartition aide à voir où se jouent les arbitrages de prix.</p>`,
    },
    {
      h2: "Le prix d'une maison de 120 m² selon le standing",
      html: `<p>Le niveau de finition fait l'essentiel de l'écart. Voici les fourchettes pour une maison de 120 m² clé en main, hors terrain.</p>
<div class="overflow-x-auto mt-3"><table class="w-full text-sm"><thead><tr><th class="text-left py-2 pr-4">Standing</th><th class="text-left py-2">Budget construction (120 m²)</th></tr></thead><tbody>
<tr class="border-t"><td class="py-2 pr-4">Entrée de gamme</td><td class="py-2">240 000 à 280 000 €</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Milieu de gamme</td><td class="py-2">280 000 à 340 000 €</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Haut de gamme</td><td class="py-2">340 000 à 400 000 €</td></tr>
</tbody></table></div>
<p class="mt-3">L'entrée de gamme correspond à des finitions standard, le milieu de gamme à des prestations soignées, et le haut de gamme à des matériaux et équipements premium. Pour la méthode de calcul au mètre carré, voir notre guide <a href="/guides/prix-construction-maison-m2" class="text-primary underline">prix de construction au m²</a>.</p>`,
    },
    {
      h2: "N'oubliez pas le terrain",
      html: `<p>Le budget ci-dessus ne comprend que la construction. Le terrain s'ajoute, et c'est lui qui creuse l'écart d'un secteur à l'autre. Dans le Calvados, comptez de l'ordre de 55 000 à 80 000 € dans l'arrière-pays, et 120 000 à 180 000 € en première couronne caennaise, plus les frais de notaire. Notre guide <a href="/guides/prix-maison-neuve-calvados" class="text-primary underline">prix d'une maison neuve dans le Calvados</a> détaille ces fourchettes par zone, et notre guide <a href="/guides/budget-construction-maison" class="text-primary underline">budget d'un projet de construction</a> couvre l'ensemble des postes, terrain et frais annexes compris.</p>`,
    },
    {
      h2: "Plain-pied ou étage en 120 m²",
      html: `<p>Le choix influe légèrement sur le coût. Un 120 m² de plain-pied demande une emprise au sol plus grande, donc davantage de fondations et de toiture, et coûte généralement un peu plus cher au mètre carré qu'un 120 m² à étage. L'étage, lui, économise du terrain en empilant la surface. Le choix dépend autant du mode de vie et du terrain que du budget.</p>`,
    },
    {
      h2: "Ce qui fait varier le prix d'une maison de 120 m²",
      html: `<p>À surface égale, plusieurs facteurs déplacent le curseur : le niveau de finition et d'équipement en premier lieu, la forme de la maison (une maison compacte coûte moins cher qu'une maison à décrochements), la nature du terrain (pente, sol argileux), et le niveau de performance énergétique. La RE2020 ajoute de l'ordre de 5 à 10 %, compensé à l'usage par des factures réduites.</p>`,
    },
    {
      h2: "Comment réduire le coût d'une maison de 120 m² sans rogner la qualité",
      html: `<p>Maîtriser le budget d'une 120 m² ne veut pas dire construire au rabais. Plusieurs leviers permettent d'optimiser sans sacrifier l'essentiel. Privilégier une <strong>forme compacte</strong> (proche du carré, sans décrochements) réduit la longueur de murs et de toiture à surface égale, donc le coût. <strong>Concentrer les pièces d'eau</strong> (cuisine, salles de bains à proximité) limite les réseaux de plomberie. Choisir un <strong>étage plutôt qu'un plain-pied</strong> économise fondations, toiture et terrain. Et arbitrer les <strong>finitions par priorité</strong> : investir dans ce qui dure et ce qui se voit au quotidien, rester sobre sur le reste, quitte à faire évoluer plus tard.</p>
<p class="mt-4">Le meilleur levier reste un <strong>plan bien conçu</strong> : un mètre carré bien pensé vaut mieux que deux mètres carrés mal utilisés. C'est tout l'intérêt d'une conception sur-mesure, qui ajuste la maison à votre budget réel plutôt que de partir d'un modèle figé. La mise en concurrence des artisans par un maître d'œuvre permet aussi d'obtenir des prix justes, sans rogner sur la qualité d'exécution.</p>`,
    },
    {
      h2: "Exemple d'aménagement d'une maison de 120 m²",
      html: `<p>Concrètement, 120 m² permettent d'aménager un séjour-cuisine d'environ 40 à 45 m², trois à quatre chambres, une à deux salles d'eau, et les rangements et circulations nécessaires. C'est une surface qui laisse de la souplesse pour adapter le plan à votre famille, ce qui est tout l'intérêt d'une conception sur-mesure plutôt que d'un modèle figé.</p>`,
    },
    {
      h2: "Estimez votre maison de 120 m²",
      html: `<p>Vous avez un projet de maison de 120 m² ? Pour une estimation précise adaptée à votre terrain et à vos envies, parlons-en. Maison de Nacre conçoit et réalise votre maison sur-mesure, de A à Z. Estimation gratuite et sans engagement.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Demander mon estimation gratuite</a></p>`,
    },
  ],
  faq: [
    {
      question: "Combien coûte une maison de 120 m² ?",
      answer:
        "En moyenne environ 336 000 € clé en main, hors terrain, soit 2 800 €/m² livré. La fourchette va de 240 000 € en entrée de gamme à 400 000 € en haut de gamme.",
    },
    {
      question: "Le prix inclut-il le terrain ?",
      answer:
        "Non. Le terrain et ses frais de notaire s'ajoutent à la construction, et varient fortement selon le secteur.",
    },
    {
      question: "Un 120 m² de plain-pied est-il plus cher ?",
      answer:
        "Légèrement, car il demande plus de fondations et de toiture qu'un 120 m² à étage, et consomme plus de terrain.",
    },
    {
      question: "Combien de chambres dans une maison de 120 m² ?",
      answer:
        "Généralement trois à quatre chambres, avec un grand séjour-cuisine et une à deux salles d'eau, selon l'agencement.",
    },
    {
      question: "Quel budget total pour une maison de 120 m² dans le Calvados ?",
      answer:
        "En ajoutant le terrain et les frais annexes, comptez souvent 450 000 à 550 000 € en région caennaise, selon le secteur et les finitions.",
    },
  ],
  relatedGuideSlugs: ["prix-construction-maison-m2", "prix-maison-neuve-calvados", "budget-construction-maison"],
};

const G30: Guide = {
  slug: "reception-travaux-maison-neuve",
  title: "Réception de chantier et levée des réserves | Maison de Nacre",
  metaDescription:
    "Réception de chantier d'une maison neuve : déroulé, procès-verbal, réserves et levée des réserves. Le point de départ de vos garanties, bien réussi.",
  h1: "Réception de chantier et levée des réserves",
  primaryKeyword: "réception travaux maison neuve",
  searchVolume: 320,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "La réception des travaux est le grand moment d'un projet de construction : c'est là que vous prenez officiellement possession de votre maison. C'est aussi une étape juridique majeure, qui déclenche vos garanties. Bien la préparer évite des litiges et protège vos droits. Voici comment elle se déroule, comment émettre des réserves et comment les faire lever.",
  sections: [
    {
      h2: "Qu'est-ce que la réception des travaux ?",
      html: `<p>La réception est l'acte par lequel vous, maître d'ouvrage, déclarez accepter la maison telle qu'elle a été construite, avec ou sans réserves. Elle se matérialise par une visite et la signature d'un procès-verbal. C'est un moment officiel, pas une simple formalité : à partir de la réception, la maison est juridiquement considérée comme livrée, et plusieurs compteurs juridiques se déclenchent.</p>`,
    },
    {
      h2: "Pourquoi la réception est une étape clé",
      html: `<p>La réception est le point de départ des garanties qui protègent votre maison. Tant qu'elle n'a pas eu lieu, ces garanties ne courent pas. C'est aussi le moment où vous pouvez exiger la correction des défauts visibles, avant de prendre possession des lieux. Bâcler la réception, c'est risquer de passer à côté de défauts qu'il sera ensuite plus difficile de faire reprendre. D'où l'importance de la préparer sérieusement.</p>`,
    },
    {
      h2: "Comment se déroule la réception",
      html: `<p>La réception prend la forme d'une visite complète de la maison, idéalement en bonnes conditions de lumière et sans précipitation. Vous parcourez chaque pièce, vous testez les équipements (ouvertures, robinets, prises, chauffage), vous vérifiez les finitions et la conformité au projet. Tout ce qui ne va pas est noté. À l'issue de la visite, un procès-verbal de réception est rédigé et signé.</p>`,
    },
    {
      h2: "Le procès-verbal de réception",
      html: `<p>Le procès-verbal est le document clé. Il peut être signé <strong>sans réserves</strong>, si tout est conforme, ou <strong>avec réserves</strong>, si des défauts ou des malfaçons sont constatés. Dans ce second cas, les réserves y sont listées précisément. Le procès-verbal date la réception, ce qui fixe le point de départ des garanties. Conservez-le soigneusement : c'est une pièce essentielle en cas de litige ultérieur.</p>`,
    },
    {
      h2: "Émettre des réserves : comment et pourquoi",
      html: `<p>Une réserve est la mention écrite d'un défaut constaté lors de la réception : finition bâclée, équipement défectueux, non-conformité au projet, malfaçon visible. Mieux vaut être méticuleux et tout noter, même les détails : ce qui n'est pas réservé sera plus difficile à faire corriger ensuite. Décrivez chaque réserve précisément (localisation, nature du défaut) pour qu'il n'y ait pas d'ambiguïté sur ce qui doit être repris.</p>`,
    },
    {
      h2: "La levée des réserves",
      html: `<p>Une fois les réserves notées, l'entreprise doit corriger les défauts dans un délai convenu. La <strong>levée des réserves</strong> est constatée lorsque chaque point a été repris à votre satisfaction, par un document écrit. Tant que les réserves ne sont pas levées, vous pouvez généralement retenir une partie du paiement (retenue de garantie) en garantie de la bonne exécution des reprises. C'est un levier important pour s'assurer que les corrections sont bien faites.</p>`,
    },
    {
      h2: "Les garanties qui démarrent à la réception",
      html: `<p>La réception déclenche trois garanties protectrices. La <strong>garantie de parfait achèvement</strong> couvre, pendant un an, la reprise de tous les désordres signalés à la réception ou apparus dans l'année. La <strong>garantie biennale</strong> couvre pendant deux ans le bon fonctionnement des équipements dissociables (volets, robinetterie, chauffage). La <strong>garantie décennale</strong> couvre pendant dix ans les dommages graves affectant la solidité de l'ouvrage ou le rendant impropre à sa destination. Ces protections font de la réception un moment juridiquement décisif. Notre comparatif <a href="/guides/maitre-doeuvre-ou-constructeur" class="text-primary underline">maître d'œuvre ou constructeur</a> détaille ces garanties.</p>`,
    },
    {
      h2: "La check-list de la réception, point par point",
      html: `<p>Le jour de la réception, mieux vaut une méthode qu'un coup d'œil rapide. Vérifiez les <strong>ouvertures</strong> : portes et fenêtres qui ferment bien, sans jeu ni frottement, joints en place. Les <strong>sols et murs</strong> : pas de fissure, de carrelage fêlé, de défaut de peinture ou de raccord visible. La <strong>plomberie</strong> : eau chaude et froide à chaque point d'eau, pas de fuite sous les éviers, évacuations qui s'écoulent. L'<strong>électricité</strong> : chaque prise et interrupteur fonctionne, le tableau est conforme et étiqueté. Le <strong>chauffage et la ventilation</strong> : mise en route, fonctionnement de la pompe à chaleur, grilles de ventilation en place. Les <strong>équipements</strong> : cuisine, salle de bains, volets, conformes au descriptif.</p>
<p class="mt-4">Au-delà des pièces, contrôlez la <strong>conformité au projet</strong> : surfaces, agencement, prestations prévues au contrat. Et n'oubliez pas l'<strong>extérieur</strong> : enduits, raccordements, écoulement des eaux. Munissez-vous du descriptif et des plans pour comparer point par point. Prenez le temps, notez tout, photographiez les défauts : un procès-verbal précis vaut bien mieux qu'une réserve vague que l'entreprise pourra contester.</p>`,
    },
    {
      h2: "Réceptionner seul ou accompagné",
      html: `<p>Réceptionner une maison demande un œil exercé : un particulier non averti passe facilement à côté de défauts qu'un professionnel repère immédiatement. Se faire accompagner par un maître d'œuvre, qui a suivi le chantier et connaît le projet, permet une réception rigoureuse, des réserves bien formulées et un suivi des reprises. C'est ce que nous faisons chez Maison de Nacre, jusqu'à la levée complète des réserves. Pour situer cette étape dans le parcours, voir notre guide <a href="/guides/etapes-construction-maison" class="text-primary underline">les étapes d'une construction</a>.</p>`,
    },
    {
      h2: "Réussissez la réception de votre maison",
      html: `<p>Une réception bien menée, c'est une maison livrée sans défaut et des garanties bien enclenchées. Maison de Nacre suit votre chantier et vous accompagne jusqu'à la levée des réserves. Parlons de votre projet.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Discuter de mon projet</a></p>`,
    },
  ],
  faq: [
    {
      question: "Qu'est-ce que la réception des travaux ?",
      answer:
        "L'acte par lequel vous acceptez officiellement la maison, avec ou sans réserves, matérialisé par un procès-verbal. Elle déclenche vos garanties.",
    },
    {
      question: "Que sont les réserves à la réception ?",
      answer:
        "Les défauts ou malfaçons constatés lors de la visite, notés précisément dans le procès-verbal, que l'entreprise doit corriger.",
    },
    {
      question: "Combien de temps pour lever les réserves ?",
      answer:
        "Les réserves doivent être levées dans un délai convenu après la réception. Une retenue de garantie peut être conservée jusqu'à la reprise complète.",
    },
    {
      question: "Quelles garanties démarrent à la réception ?",
      answer:
        "La garantie de parfait achèvement (un an), la garantie biennale (deux ans) et la garantie décennale (dix ans).",
    },
    {
      question: "Faut-il se faire accompagner pour la réception ?",
      answer:
        "C'est fortement recommandé. Un maître d'œuvre repère les défauts, formule les réserves et suit les reprises, là où un particulier risque de passer à côté.",
    },
  ],
  relatedGuideSlugs: ["etapes-construction-maison", "maitre-doeuvre-ou-constructeur"],
};

const G7: Guide = {
  slug: "construire-ou-acheter-maison",
  title: "Construire neuf ou acheter dans l'ancien | Maison de Nacre",
  metaDescription:
    "Construire neuf ou acheter dans l'ancien ? Prix, énergie, travaux, frais, délais : le comparatif honnête pour bien choisir, surtout dans la région de Caen.",
  h1: "Construire neuf ou acheter dans l'ancien : comment choisir",
  primaryKeyword: "construire ou acheter maison",
  searchVolume: 90,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "C'est l'une des premières grandes décisions d'un projet immobilier : faut-il acheter une maison existante ou en faire construire une neuve ? Les deux ont leurs atouts, et la réponse dépend de votre budget, de vos priorités et de la commune visée. Voici un comparatif honnête, sans parti pris, pour décider en connaissance de cause.",
  sections: [
    {
      h2: "Les deux options en bref",
      html: `<p>Acheter dans l'<strong>ancien</strong>, c'est emménager vite dans une maison existante, souvent bien située, avec parfois du charme, mais à rénover et à remettre aux normes énergétiques. Faire construire <strong>neuf</strong>, c'est concevoir une maison sur-mesure, performante et sans travaux, mais avec un délai et la nécessité de trouver un terrain. Deux logiques différentes, pour deux profils de projet.</p>`,
    },
    {
      h2: "Le prix : neuf ou ancien",
      html: `<p>Au premier regard, l'ancien affiche souvent un prix au mètre carré plus bas. Mais la comparaison brute est trompeuse : à l'ancien, il faut presque toujours ajouter des travaux (rénovation énergétique, mise aux normes, rafraîchissement), parfois lourds. Le neuf, lui, part au meilleur niveau, sans travaux à prévoir. Dans les communes recherchées du Calvados, où l'ancien dépasse souvent le coût d'une construction neuve clé en main, le neuf devient très compétitif. Notre guide <a href="/guides/prix-maison-neuve-calvados" class="text-primary underline">prix d'une maison neuve dans le Calvados</a> donne les chiffres réels par secteur.</p>`,
    },
    {
      h2: "L'énergie et la performance",
      html: `<p>C'est l'un des écarts les plus nets. Une maison neuve respecte la RE2020 : isolation renforcée, chauffage décarboné, confort d'été, et donc des factures d'énergie faibles. Une maison ancienne, surtout si elle est mal classée au DPE, peut imposer de gros travaux d'amélioration, et sa valeur se déprécie à mesure que les exigences se durcissent. Sur la durée, l'écart de coût énergétique est considérable. Notre guide <a href="/guides/re2020" class="text-primary underline">la RE2020 expliquée</a> détaille ces bénéfices.</p>`,
    },
    {
      h2: "Les travaux : zéro contre à prévoir",
      html: `<p>Dans le neuf, vous emménagez dans une maison terminée, sans travaux pendant des années, et couverte par les garanties (décennale, parfait achèvement). Dans l'ancien, les travaux sont fréquents, parfois imprévus une fois le chantier ouvert, et leur coût final dépasse souvent l'estimation initiale. C'est un facteur de stress et d'incertitude budgétaire à intégrer.</p>`,
    },
    {
      h2: "Le sur-mesure contre l'existant",
      html: `<p>Le neuf permet une maison pensée pour vous : plan, orientation, volumes, nombre de chambres, le tout adapté à votre mode de vie et à votre terrain. L'ancien, lui, impose son agencement : vous adaptez votre vie à la maison, ou vous engagez des travaux pour la transformer. Pour qui a une idée précise de la maison qu'il veut, le neuf offre une liberté que l'ancien n'a pas.</p>`,
    },
    {
      h2: "Les frais et les taxes",
      html: `<p>Un point souvent ignoré : dans le neuf en faisant construire, les frais de notaire ne portent que sur le <strong>terrain</strong>, pas sur la construction, alors que dans l'ancien ils portent sur la <strong>totalité</strong> du prix (7 à 8 %). Le neuf bénéficie aussi parfois d'avantages (exonérations temporaires de taxe foncière selon les communes, éligibilité au prêt à taux zéro pour un primo-accédant). Ces éléments réduisent l'écart de coût avec l'ancien.</p>`,
    },
    {
      h2: "Le délai et la disponibilité",
      html: `<p>C'est l'avantage clé de l'ancien : on emménage vite, une fois l'achat signé. Le neuf demande du temps : trouver le terrain, concevoir, obtenir le permis, construire, soit douze à dix-huit mois. Si vous êtes pressé, l'ancien a une longueur d'avance. Si vous pouvez anticiper, le neuf vous offre une maison taillée pour vous.</p>`,
    },
    {
      h2: "Comparatif neuf et ancien",
      html: `<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr><th class="text-left py-2 pr-4">Critère</th><th class="text-left py-2 pr-4">Neuf (faire construire)</th><th class="text-left py-2">Ancien</th></tr></thead><tbody>
<tr class="border-t"><td class="py-2 pr-4">Prix au m² affiché</td><td class="py-2 pr-4">Plus élevé</td><td class="py-2">Souvent plus bas</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Travaux à prévoir</td><td class="py-2 pr-4">Aucun</td><td class="py-2">Fréquents, parfois lourds</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Performance énergétique</td><td class="py-2 pr-4">RE2020, faibles factures</td><td class="py-2">Variable, souvent à améliorer</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Sur-mesure</td><td class="py-2 pr-4">Total</td><td class="py-2">Limité à l'existant</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Frais de notaire</td><td class="py-2 pr-4">Sur le terrain seulement</td><td class="py-2">Sur la totalité (7 à 8 %)</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Garanties</td><td class="py-2 pr-4">Décennale, parfait achèvement</td><td class="py-2">Aucune sur l'existant</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Délai d'emménagement</td><td class="py-2 pr-4">12 à 18 mois</td><td class="py-2">Rapide</td></tr>
<tr class="border-t"><td class="py-2 pr-4">Emplacement</td><td class="py-2 pr-4">Selon terrain disponible</td><td class="py-2">Souvent plus central</td></tr>
</tbody></table></div>`,
    },
    {
      h2: "Dans quel cas choisir l'un ou l'autre",
      html: `<p>Soyons honnêtes : l'ancien reste le bon choix si vous êtes pressé, si vous visez un emplacement central introuvable en neuf, ou si vous aimez le cachet d'une maison de caractère et acceptez des travaux. Le neuf prend l'avantage dès que vous voulez une maison sur-mesure, performante, sans travaux ni mauvaise surprise, et que vous pouvez attendre le temps d'un projet. Dans les communes recherchées, où l'ancien est cher, le calcul penche souvent en faveur du neuf une fois tout intégré.</p>`,
    },
    {
      h2: "Et dans la région de Caen ?",
      html: `<p>Le Calvados illustre bien ce raisonnement : dans les communes où l'ancien dépasse le coût d'une construction neuve clé en main, le neuf devient le choix le plus rationnel à confort égal. Ailleurs, l'arbitrage se fait au cas par cas. Pour explorer secteur par secteur, voir notre page <a href="/construire-dans-le-calvados" class="text-primary underline">faire construire dans le Calvados</a>.</p>`,
    },
    {
      h2: "Faites le bon choix pour votre projet",
      html: `<p>Vous hésitez entre construire et acheter dans la région de Caen ? Parlons de votre situation : nous vous aidons à comparer objectivement et, si vous choisissez le neuf, à le mener de A à Z. Estimation gratuite et sans engagement.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Discuter de mon projet</a></p>`,
    },
  ],
  faq: [
    {
      question: "Est-il moins cher de construire ou d'acheter dans l'ancien ?",
      answer:
        "L'ancien affiche souvent un prix plus bas, mais il faut y ajouter les travaux et la rénovation énergétique. Une fois tout intégré, le neuf devient compétitif, surtout dans les communes recherchées.",
    },
    {
      question: "Quels sont les avantages du neuf ?",
      answer:
        "Maison sur-mesure, performance RE2020, zéro travaux, garanties, frais de notaire limités au terrain, et parfois exonérations fiscales.",
    },
    {
      question: "Quels sont les avantages de l'ancien ?",
      answer:
        "Emménagement rapide, emplacements souvent plus centraux, et parfois du cachet. En contrepartie, des travaux et une performance énergétique à vérifier.",
    },
    {
      question: "Les frais de notaire sont-ils plus élevés dans l'ancien ?",
      answer:
        "Oui. Dans l'ancien, ils portent sur la totalité du prix (7 à 8 %). En faisant construire, ils ne portent que sur le terrain.",
    },
    {
      question: "Combien de temps pour faire construire ?",
      answer:
        "En général douze à dix-huit mois entre l'achat du terrain et la remise des clés, contre un emménagement rapide dans l'ancien.",
    },
  ],
  relatedGuideSlugs: ["prix-maison-neuve-calvados", "re2020", "budget-construction-maison"],
};

const G22: Guide = {
  slug: "faire-construire-sa-maison",
  title: "Faire construire sa maison : guide complet | Maison de Nacre",
  metaDescription:
    "Comment faire construire sa maison, de A à Z : budget, terrain, conception, permis, financement, chantier, réception. Le guide complet pour réussir son projet.",
  h1: "Comment faire construire sa maison : le guide complet",
  primaryKeyword: "faire construire sa maison",
  searchVolume: 2400,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "Faire construire sa maison est un projet enthousiasmant, mais qui peut sembler complexe quand on débute. Entre le terrain, la conception, le permis, le financement et le chantier, beaucoup de décisions s'enchaînent. Ce guide vous donne la vue d'ensemble, étape par étape, pour aborder votre projet sereinement et savoir quoi faire à chaque moment.",
  sections: [
    {
      h2: "Faire construire : par où commencer ?",
      html: `<p>Avant tout, deux questions structurent le projet : qu'est-ce que je veux, et avec quel budget ? Définir vos besoins (surface, nombre de chambres, plain-pied ou étage, style) et une enveloppe budgétaire réaliste, terrain compris, oriente toutes les décisions suivantes. C'est le socle du projet, et c'est là que tout commence. Nos guides <a href="/guides/prix-maison-neuve-calvados" class="text-primary underline">prix d'une maison neuve dans le Calvados</a> et <a href="/guides/budget-construction-maison" class="text-primary underline">budget d'un projet de construction</a> aident à poser ces premiers chiffres.</p>`,
    },
    {
      h2: "Étape 1 : définir son projet et son budget",
      html: `<p>Commencez par lister vos besoins et vos priorités, puis confrontez-les à un budget global incluant le terrain, la construction et les frais annexes. Mieux vaut un budget honnête dès le départ qu'une enveloppe trop juste qui bloque le projet en cours de route. Cette étape détermine la surface, le secteur et le niveau de finition accessibles.</p>`,
    },
    {
      h2: "Étape 2 : trouver et sécuriser le terrain",
      html: `<p>Sans terrain, pas de projet. Cherchez une parcelle constructible adaptée à votre budget, puis vérifiez avant de signer sa constructibilité (plan local d'urbanisme) et l'état des réseaux. Deux points décisifs à ne pas négliger : le choix du terrain et sa viabilisation. Nos guides <a href="/guides/choisir-terrain-constructible" class="text-primary underline">comment choisir son terrain constructible</a> et <a href="/guides/viabilisation-terrain" class="text-primary underline">la viabilisation d'un terrain</a> détaillent ces vérifications.</p>`,
    },
    {
      h2: "Étape 3 : choisir comment faire construire",
      html: `<p>C'est une décision clé. Vous pouvez faire construire avec un maître d'œuvre, qui conçoit et coordonne tout pour vous, ou par d'autres formules plus standardisées. Ce choix détermine votre liberté de plan, la transparence des prix et le niveau d'accompagnement. Notre comparatif <a href="/guides/maitre-doeuvre-ou-constructeur" class="text-primary underline">maître d'œuvre ou constructeur</a> vous aide à trancher selon votre projet.</p>`,
    },
    {
      h2: "Étape 4 : concevoir la maison",
      html: `<p>Vient ensuite la conception : plans, implantation sur le terrain, orientation, choix techniques. Travailler avec un architecte garantit une maison sur-mesure, optimisée pour votre parcelle et conforme à la RE2020 dès le départ. Nos guides <a href="/services/maison-architecte" class="text-primary underline">maison d'architecte</a> et <a href="/guides/re2020" class="text-primary underline">la RE2020 expliquée</a> éclairent cette étape, où se joue une grande part de la qualité finale.</p>`,
    },
    {
      h2: "Étape 5 : obtenir le permis de construire",
      html: `<p>Le projet conçu, on dépose le permis de construire en mairie. L'instruction dure environ deux mois pour une maison individuelle. C'est une étape incompressible à anticiper. Nos guides <a href="/guides/permis-de-construire-maison" class="text-primary underline">le permis de construire</a> et <a href="/guides/delai-permis-de-construire" class="text-primary underline">délai d'obtention d'un permis</a> expliquent le dossier et les durées.</p>`,
    },
    {
      h2: "Étape 6 : financer le projet",
      html: `<p>En parallèle, on boucle le financement : prêt immobilier, apport, et éventuellement prêt à taux zéro pour un primo-accédant. C'est aussi le moment de souscrire l'assurance dommage-ouvrage, obligatoire. Mieux vaut avoir l'accord de prêt avant de signer les devis et de lancer les travaux.</p>`,
    },
    {
      h2: "Étape 7 : le chantier",
      html: `<p>Le permis obtenu et le financement en place, on consulte les artisans, on signe les devis, puis le chantier démarre : terrassement, gros œuvre, mise hors d'eau et hors d'air, second œuvre, finitions. La coordination des corps de métier est la clé pour tenir les délais. Le détail de cet enchaînement figure dans notre guide <a href="/guides/etapes-construction-maison" class="text-primary underline">les étapes d'une construction</a>, et les durées dans <a href="/guides/delai-construction-maison" class="text-primary underline">combien de temps pour construire</a>.</p>`,
    },
    {
      h2: "Étape 8 : la réception et la remise des clés",
      html: `<p>Le chantier terminé, vous réceptionnez la maison : vous vérifiez la conformité, consignez d'éventuelles réserves, puis recevez les clés une fois les reprises faites. Cette étape déclenche vos garanties. Notre guide <a href="/guides/reception-travaux-maison-neuve" class="text-primary underline">réception de chantier et levée des réserves</a> explique comment bien la mener.</p>`,
    },
    {
      h2: "Combien ça coûte et combien de temps ?",
      html: `<p>Deux questions reviennent toujours. Côté budget, une maison neuve sur-mesure clé en main revient à environ 2 800 €/m² livré, hors terrain, soit de l'ordre de 336 000 € pour 120 m². Côté délai, comptez douze à dix-huit mois entre l'achat du terrain et la remise des clés, dont six à dix mois de chantier. Nos guides <a href="/guides/prix-construction-maison-m2" class="text-primary underline">prix de construction au m²</a> et <a href="/guides/delai-construction-maison" class="text-primary underline">combien de temps pour construire</a> donnent tous les repères.</p>`,
    },
    {
      h2: "Faire construire quand on est primo-accédant",
      html: `<p>Faire construire son premier logement est tout à fait accessible, et même encouragé. Le prêt à taux zéro (PTZ) peut compléter votre financement sous conditions de ressources et de zone, et certaines communes offrent des exonérations temporaires de taxe foncière sur les constructions neuves. L'essentiel est de bâtir un plan de financement solide : un apport, souvent autour de 10 % du projet, et un accord de prêt obtenu avant de signer les devis. Un primo-accédant a tout intérêt à se faire accompagner dès le départ, pour calibrer un budget réaliste et éviter les faux pas qui coûtent cher quand on découvre le processus.</p>`,
    },
    {
      h2: "Pourquoi faire construire plutôt qu'acheter ?",
      html: `<p>Beaucoup hésitent entre faire construire et acheter une maison existante. Faire construire offre une maison sur-mesure, performante selon la RE2020, sans travaux à prévoir, et couverte par les garanties de la construction neuve. À l'inverse, l'ancien permet d'emménager plus vite, mais impose souvent des travaux et une performance énergétique à améliorer. Dans les communes recherchées, où l'ancien est cher, le neuf devient très compétitif une fois tout intégré. Notre guide <a href="/guides/construire-ou-acheter-maison" class="text-primary underline">construire neuf ou acheter dans l'ancien</a> compare les deux options en détail.</p>`,
    },
    {
      h2: "Les erreurs fréquentes à éviter",
      html: `<p>Quelques pièges reviennent souvent. Acheter un terrain sans vérifier sa constructibilité ni sa viabilisation. Bâtir un budget trop juste en oubliant les frais annexes. Enchaîner les démarches en série au lieu de les mener en parallèle, ce qui rallonge le projet. Signer des devis sans mise en concurrence. Et bâcler la réception. Anticiper ces points, ou se faire accompagner, fait toute la différence entre un projet serein et un parcours du combattant.</p>`,
    },
    {
      h2: "Se faire accompagner de A à Z",
      html: `<p>Faire construire seul est possible, mais demande du temps, des compétences et une grande disponibilité. Un maître d'œuvre pilote l'ensemble pour vous : conception, permis, consultation des artisans, suivi du chantier et réception. Vous gardez la décision, il gère l'opérationnel et défend vos intérêts. C'est le métier de Maison de Nacre, dans la région de Caen, de la première esquisse à la remise des clés.</p>`,
    },
    {
      h2: "Lancez votre projet de construction",
      html: `<p>Vous voulez faire construire dans la région de Caen, sereinement et sans surprise ? Parlons de votre projet. Maison de Nacre vous accompagne de la conception à la remise des clés. Première estimation gratuite et sans engagement.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Demander mon estimation gratuite</a></p>`,
    },
  ],
  faq: [
    {
      question: "Par où commencer pour faire construire sa maison ?",
      answer:
        "Par la définition de vos besoins et d'un budget global réaliste, terrain compris. Ce cadrage oriente ensuite la recherche de terrain et la conception.",
    },
    {
      question: "Quelles sont les étapes pour faire construire ?",
      answer:
        "Définir le projet et le budget, trouver le terrain, choisir comment construire, concevoir la maison, obtenir le permis, financer, réaliser le chantier, puis réceptionner et recevoir les clés.",
    },
    {
      question: "Combien de temps pour faire construire une maison ?",
      answer:
        "En général douze à dix-huit mois entre l'achat du terrain et la remise des clés, dont six à dix mois de chantier.",
    },
    {
      question: "Combien coûte la construction d'une maison ?",
      answer:
        "Environ 2 800 €/m² livré clé en main, hors terrain, soit de l'ordre de 336 000 € pour une maison de 120 m², auquel s'ajoutent terrain et frais annexes.",
    },
    {
      question: "Faut-il se faire accompagner pour faire construire ?",
      answer:
        "Ce n'est pas obligatoire, mais un maître d'œuvre fait gagner du temps, sécurise le budget et le chantier, et évite les erreurs coûteuses à chaque étape.",
    },
  ],
  relatedGuideSlugs: [
    "prix-maison-neuve-calvados",
    "budget-construction-maison",
    "choisir-terrain-constructible",
    "maitre-doeuvre-ou-constructeur",
    "etapes-construction-maison",
    "permis-de-construire-maison",
    "reception-travaux-maison-neuve",
    "construire-ou-acheter-maison",
  ],
};

const G25: Guide = {
  slug: "garantie-decennale",
  title: "La garantie décennale expliquée | Maison de Nacre",
  metaDescription:
    "La garantie décennale expliquée : ce qu'elle couvre, sa durée, qui est concerné et comment la faire jouer. Tout savoir pour protéger votre maison neuve.",
  h1: "La garantie décennale expliquée",
  primaryKeyword: "garantie décennale",
  searchVolume: 1900,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "La garantie décennale est l'une des protections les plus importantes quand on fait construire. Elle vous couvre pendant dix ans contre les dommages graves qui pourraient affecter votre maison. Mais que couvre-t-elle exactement, qui est concerné, et comment la faire jouer en cas de problème ? Voici l'essentiel, expliqué simplement.",
  sections: [
    {
      h2: "Qu'est-ce que la garantie décennale ?",
      html: `<p>La garantie décennale est une garantie légale obligatoire qui engage, pendant dix ans, les professionnels ayant participé à la construction. Tout artisan ou entreprise qui réalise des travaux de construction doit être couvert par une assurance de responsabilité décennale. Cette garantie protège le propriétaire contre les désordres graves qui apparaîtraient après la réception des travaux, sans avoir à prouver une faute de l'entreprise.</p>`,
    },
    {
      h2: "Ce que couvre la garantie décennale",
      html: `<p>La décennale couvre les <strong>dommages graves</strong> : ceux qui compromettent la solidité de l'ouvrage (fissures structurelles, affaissement de fondations, effondrement) et ceux qui rendent la maison impropre à sa destination, c'est-à-dire inhabitable ou inutilisable normalement (infiltrations importantes, défaut d'étanchéité majeur, problème de toiture rendant la maison inhabitable). Elle couvre aussi certains éléments d'équipement indissociables du bâti. En clair, elle vous protège contre les sinistres lourds qui touchent à la structure ou à l'usage de votre maison.</p>`,
    },
    {
      h2: "Ce qu'elle ne couvre pas",
      html: `<p>La décennale ne couvre pas tout. Sont exclus les <strong>défauts esthétiques</strong> (une finition imparfaite sans gravité), l'<strong>usure normale</strong> et le défaut d'entretien, ainsi que les <strong>équipements dissociables</strong> (volets, robinetterie, chauffage), qui relèvent eux de la garantie biennale, valable deux ans. Les petits désordres signalés à la réception relèvent, eux, de la garantie de parfait achèvement, valable un an. Chaque garantie a son périmètre.</p>`,
    },
    {
      h2: "Qui est concerné par la garantie décennale ?",
      html: `<p>Tous les <strong>professionnels de la construction</strong> sont tenus à la décennale : entreprises de gros œuvre, artisans, et selon sa mission, le maître d'œuvre qui a conçu et suivi le chantier. Chaque intervenant doit pouvoir présenter une attestation d'assurance décennale en cours de validité. C'est un point à vérifier avant de signer un devis : un artisan sans décennale valable vous laisserait sans recours en cas de sinistre grave.</p>`,
    },
    {
      h2: "La durée et le point de départ",
      html: `<p>La garantie décennale dure <strong>dix ans</strong>, à compter de la <strong>réception des travaux</strong>. C'est la réception, matérialisée par le procès-verbal, qui déclenche le décompte. D'où l'importance de bien réceptionner sa maison et de conserver le procès-verbal. Notre guide <a href="/guides/reception-travaux-maison-neuve" class="text-primary underline">réception de chantier et levée des réserves</a> explique cette étape clé.</p>`,
    },
    {
      h2: "Décennale et assurance dommage-ouvrage",
      html: `<p>Les deux sont complémentaires. La décennale engage la responsabilité des professionnels. L'<strong>assurance dommage-ouvrage</strong>, que vous souscrivez en tant que maître d'ouvrage, sert à <strong>préfinancer</strong> rapidement les réparations couvertes par la décennale, sans attendre qu'un tribunal détermine les responsabilités. Sans elle, faire jouer la décennale peut être long. Notre guide <a href="/guides/assurance-dommage-ouvrage" class="text-primary underline">les assurances obligatoires pour construire</a> détaille ce mécanisme.</p>`,
    },
    {
      h2: "Comment faire jouer la garantie décennale",
      html: `<p>En cas de sinistre relevant de la décennale, vous déclarez le dommage à votre assurance dommage-ouvrage, qui mandate un expert et préfinance les travaux de réparation si le sinistre est couvert. L'assureur se retourne ensuite vers les responsables et leurs assurances décennales. C'est ce circuit qui rend la dommage-ouvrage si précieuse : elle vous évite d'avancer les frais et d'attendre l'issue des recours.</p>`,
    },
    {
      h2: "Décennale et maison neuve : les bons réflexes",
      html: `<p>Pour être bien protégé, quelques réflexes s'imposent. Vérifiez que chaque artisan dispose d'une <strong>attestation de décennale valable</strong> avant le début des travaux. Conservez soigneusement le <strong>procès-verbal de réception</strong> et toutes les attestations d'assurance. Souscrivez la <strong>dommage-ouvrage</strong> avant l'ouverture du chantier. Faire appel à un maître d'œuvre facilite ces vérifications, puisqu'il s'assure que les entreprises sont bien assurées avant de les engager.</p>`,
    },
    {
      h2: "Comment vérifier l'attestation décennale d'un artisan",
      html: `<p>Avant d'engager un artisan, demandez-lui son <strong>attestation d'assurance décennale</strong> et lisez-la attentivement. Trois points à contrôler. La <strong>validité</strong> d'abord : l'attestation doit couvrir la période du chantier, pas une année passée. Les <strong>activités garanties</strong> ensuite : l'attestation liste les travaux couverts (maçonnerie, charpente, plomberie…), et l'artisan doit être assuré précisément pour ce qu'il va réaliser chez vous, sinon la garantie ne jouera pas. Le <strong>nom et les coordonnées de l'assureur</strong> enfin, pour pouvoir le contacter en cas de besoin. En cas de doute, rien n'empêche d'appeler l'assureur pour confirmer que le contrat est bien en cours. Cette vérification, fastidieuse pour un particulier, fait partie du travail d'un maître d'œuvre.</p>`,
    },
    {
      h2: "Garantie décennale et revente de la maison",
      html: `<p>Bonne nouvelle si vous vendez avant les dix ans : la garantie décennale <strong>suit la maison</strong>, pas le propriétaire. Le nouvel acquéreur bénéficie donc de la garantie pour la durée restante, à compter de la réception initiale. De même, l'assurance dommage-ouvrage est transférée à l'acheteur. C'est un argument de vente non négligeable : une maison récente encore couverte par la décennale rassure l'acquéreur. Pensez à transmettre au nouveau propriétaire le procès-verbal de réception et les attestations d'assurance, qui prouvent l'existence et la date de départ des garanties.</p>`,
    },
    {
      h2: "Construisez en toute sérénité",
      html: `<p>Une maison bien construite et bien assurée, c'est dix ans de tranquillité. Maison de Nacre vérifie les assurances des artisans, suit le chantier et vous accompagne jusqu'à la réception. Parlons de votre projet.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Discuter de mon projet</a></p>`,
    },
  ],
  faq: [
    {
      question: "Qu'est-ce que la garantie décennale ?",
      answer:
        "Une garantie légale obligatoire qui engage pendant dix ans les professionnels de la construction contre les dommages graves affectant la solidité de la maison ou la rendant impropre à l'habitation.",
    },
    {
      question: "Que couvre exactement la décennale ?",
      answer:
        "Les dommages compromettant la solidité de l'ouvrage (fissures structurelles, fondations) et ceux rendant la maison inhabitable (infiltrations majeures, défauts d'étanchéité). Pas les défauts esthétiques ni l'usure.",
    },
    {
      question: "Combien de temps dure la garantie décennale ?",
      answer:
        "Dix ans à compter de la réception des travaux, matérialisée par le procès-verbal.",
    },
    {
      question: "Qui doit avoir une assurance décennale ?",
      answer:
        "Tous les professionnels intervenant sur la construction : entreprises, artisans, et selon sa mission le maître d'œuvre. Chacun doit présenter une attestation valable.",
    },
    {
      question: "Quelle différence avec la dommage-ouvrage ?",
      answer:
        "La décennale engage la responsabilité des professionnels. La dommage-ouvrage, souscrite par le propriétaire, préfinance rapidement les réparations sans attendre la détermination des responsabilités.",
    },
  ],
  relatedGuideSlugs: ["assurance-dommage-ouvrage", "reception-travaux-maison-neuve", "maitre-doeuvre-ou-constructeur"],
};

const G27: Guide = {
  slug: "assurance-dommage-ouvrage",
  title: "L'assurance dommage-ouvrage expliquée | Maison de Nacre",
  metaDescription:
    "L'assurance dommage-ouvrage expliquée : à quoi elle sert, ce qu'elle couvre, son coût et pourquoi elle est obligatoire pour construire. Le guide complet.",
  h1: "L'assurance dommage-ouvrage : à quoi elle sert",
  primaryKeyword: "assurance dommage-ouvrage",
  searchVolume: 6600,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "Quand on fait construire, l'assurance dommage-ouvrage revient vite dans les démarches. Obligatoire et parfois mal comprise, elle est pourtant l'une de vos meilleures protections : elle vous permet d'être indemnisé rapidement en cas de gros sinistre, sans attendre des années de procédure. Voici à quoi elle sert, ce qu'elle couvre, ce qu'elle coûte et pourquoi vous ne devriez pas vous en passer.",
  sections: [
    {
      h2: "Qu'est-ce que l'assurance dommage-ouvrage ?",
      html: `<p>L'assurance dommage-ouvrage est une assurance que vous souscrivez en tant que maître d'ouvrage, c'est-à-dire la personne qui fait construire, avant l'ouverture du chantier. Son rôle est de <strong>préfinancer rapidement</strong> les réparations des dommages relevant de la garantie décennale, sans attendre qu'un tribunal détermine quel professionnel est responsable. Elle est le pendant pratique de la décennale : là où la décennale engage la responsabilité des professionnels, la dommage-ouvrage vous fait avancer l'argent des réparations.</p>`,
    },
    {
      h2: "Pourquoi elle est obligatoire et à quoi elle sert",
      html: `<p>La dommage-ouvrage est <strong>légalement obligatoire</strong> pour toute personne qui fait construire. Son utilité est concrète : en cas de sinistre grave (fissures structurelles, infiltrations majeures, défaut rendant la maison inhabitable), elle déclenche rapidement une expertise et le financement des travaux, sans que vous ayez à prouver une faute ni à attendre l'issue des recours entre assureurs. C'est la garantie d'être réparé vite, ce qui change tout face à un sinistre lourd.</p>`,
    },
    {
      h2: "Ce que couvre la dommage-ouvrage",
      html: `<p>La dommage-ouvrage couvre les mêmes dommages que la garantie décennale : ceux qui <strong>compromettent la solidité</strong> de la maison ou la <strong>rendent impropre à l'habitation</strong>. Elle prend en charge le coût des réparations de ces désordres pendant la durée de la décennale, soit dix ans à compter de la réception. Elle ne couvre pas les défauts esthétiques, l'usure normale ou les petits désordres relevant des garanties de parfait achèvement et biennale. Notre guide <a href="/guides/garantie-decennale" class="text-primary underline">la garantie décennale expliquée</a> détaille ce périmètre commun.</p>`,
    },
    {
      h2: "Quand et comment la souscrire",
      html: `<p>La dommage-ouvrage se souscrit <strong>avant l'ouverture du chantier</strong>. C'est à vous, maître d'ouvrage, de la prendre, même si vous pouvez en déléguer la souscription. Pour l'obtenir, l'assureur examine le projet et les assurances des entreprises intervenantes. C'est l'une des raisons de vérifier que tous les artisans disposent d'une décennale valable : sans cela, la dommage-ouvrage est plus difficile à obtenir.</p>`,
    },
    {
      h2: "Combien coûte l'assurance dommage-ouvrage ?",
      html: `<p>Son coût représente généralement de l'ordre de <strong>2 à 4 % du coût de construction</strong>. Pour une construction de 300 000 €, comptez donc souvent entre 6 000 et 12 000 €. C'est un poste à intégrer dans le budget global du projet, au même titre que les frais de notaire et la viabilisation. Notre guide <a href="/guides/budget-construction-maison" class="text-primary underline">budget d'un projet de construction</a> recense tous ces postes.</p>`,
    },
    {
      h2: "Dommage-ouvrage et garantie décennale",
      html: `<p>Les deux fonctionnent ensemble. La <strong>décennale</strong> est l'assurance de responsabilité des professionnels : elle dit qui paie en cas de faute. La <strong>dommage-ouvrage</strong> est votre assurance : elle paie d'abord, vite, puis se retourne vers les responsables et leurs décennales. Sans dommage-ouvrage, vous devriez engager vous-même les recours et avancer les frais, parfois pendant des années. C'est cette rapidité d'indemnisation qui justifie son obligation.</p>`,
    },
    {
      h2: "Les autres assurances de la construction",
      html: `<p>Au-delà de la dommage-ouvrage, plusieurs assurances entourent un projet. La <strong>responsabilité décennale</strong> de chaque entreprise et artisan, obligatoire, couvre les dommages graves pendant dix ans. La <strong>responsabilité civile</strong> des professionnels couvre les dommages causés pendant le chantier. Et dès la réception, votre <strong>assurance habitation</strong> prend le relais pour la vie courante de la maison. Bien vérifier ces couvertures avant et pendant le chantier protège votre projet.</p>`,
    },
    {
      h2: "Que risque-t-on sans dommage-ouvrage ?",
      html: `<p>Construire sans dommage-ouvrage est une prise de risque réelle. En cas de sinistre grave, vous devriez avancer le coût des réparations et engager seul les recours, ce qui peut prendre des années. À la revente, l'absence de dommage-ouvrage inquiète les acquéreurs et peut faire échouer une vente, car la garantie suit la maison. Bref, s'en passer expose à des conséquences lourdes, pour une économie qui n'en vaut pas le risque.</p>`,
    },
    {
      h2: "La déclaration de sinistre : comment ça se passe",
      html: `<p>Si un dommage grave apparaît dans les dix ans, la dommage-ouvrage suit un circuit balisé. Vous <strong>déclarez le sinistre</strong> à votre assureur dommage-ouvrage, par écrit, en décrivant les désordres constatés. L'assureur <strong>mandate un expert</strong> qui vient constater les dommages et déterminer s'ils relèvent bien de la garantie. S'ils sont couverts, l'assureur vous fait une <strong>proposition d'indemnisation</strong> dans des délais encadrés par la loi, puis <strong>finance les réparations</strong>. Il se retourne ensuite, de son côté, vers les entreprises responsables et leurs assurances décennales, sans que cela vous concerne.</p>
<p>L'intérêt majeur de ce mécanisme est sa rapidité : la loi impose à l'assureur des délais pour se prononcer et indemniser, ce qui vous évite d'attendre l'issue, souvent longue, des litiges entre professionnels. Conservez précieusement votre contrat de dommage-ouvrage, le procès-verbal de réception et toutes les attestations : ce sont les pièces qui permettront de faire jouer la garantie sans accroc le jour où vous en aurez besoin.</p>`,
    },
    {
      h2: "Construisez bien assuré",
      html: `<p>Une maison bien assurée, c'est dix ans de tranquillité. Maison de Nacre vérifie les assurances des artisans, vous guide sur la dommage-ouvrage et sécurise votre projet jusqu'à la réception. Parlons-en.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Discuter de mon projet</a></p>`,
    },
  ],
  faq: [
    {
      question: "Qu'est-ce que l'assurance dommage-ouvrage ?",
      answer:
        "Une assurance souscrite par celui qui fait construire, avant le chantier, qui préfinance rapidement les réparations des dommages relevant de la décennale, sans attendre la détermination des responsabilités.",
    },
    {
      question: "L'assurance dommage-ouvrage est-elle obligatoire ?",
      answer:
        "Oui, pour toute personne qui fait construire une maison. Elle protège aussi les futurs acquéreurs en cas de revente.",
    },
    {
      question: "Combien coûte la dommage-ouvrage ?",
      answer:
        "En général de 2 à 4 % du coût de construction, soit souvent 6 000 à 12 000 € pour une construction de 300 000 €.",
    },
    {
      question: "Quelle différence avec la garantie décennale ?",
      answer:
        "La décennale engage la responsabilité des professionnels. La dommage-ouvrage, souscrite par le propriétaire, préfinance les réparations rapidement, puis se retourne vers les responsables.",
    },
    {
      question: "Que risque-t-on sans dommage-ouvrage ?",
      answer:
        "Devoir avancer les frais de réparation et engager seul les recours en cas de sinistre, et compliquer une éventuelle revente, la garantie suivant la maison.",
    },
  ],
  relatedGuideSlugs: ["garantie-decennale", "reception-travaux-maison-neuve", "budget-construction-maison"],
};

const G15: Guide = {
  slug: "role-maitre-doeuvre",
  title: "Le rôle du maître d'œuvre | Maison de Nacre",
  metaDescription:
    "Quel est le rôle du maître d'œuvre dans la construction d'une maison ? Ses missions étape par étape, ce qu'il fait pour vous et ce qui le distingue.",
  h1: "Le rôle du maître d'œuvre dans un projet de construction",
  primaryKeyword: "rôle maître d'œuvre",
  searchVolume: 50,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "Le maître d'œuvre est souvent présenté comme le chef d'orchestre de la construction. Mais que fait-il concrètement, à chaque étape ? Comprendre son rôle aide à savoir ce que vous pouvez attendre de lui, et pourquoi son accompagnement change la conduite d'un projet de maison.",
  sections: [
    {
      h2: "Maître d'œuvre et maître d'ouvrage : deux rôles à distinguer",
      html: `<p>Premier point pour ne pas confondre : le <strong>maître d'ouvrage</strong>, c'est vous, le propriétaire qui décide et finance le projet. Le <strong>maître d'œuvre</strong> est le professionnel que vous mandatez pour concevoir la maison et piloter sa réalisation. Vous gardez la décision sur tout ; lui met son expertise au service de votre projet et coordonne les intervenants. C'est une relation de confiance, où le maître d'œuvre travaille pour vous et défend vos intérêts.</p>`,
    },
    {
      h2: "Le rôle du maître d'œuvre, étape par étape",
      html: `<p>Son intervention couvre tout le parcours. En phase de <strong>conception</strong>, il traduit vos besoins en plans, seul ou avec un architecte, et veille à la cohérence avec votre terrain et votre budget. En phase de <strong>consultation</strong>, il chiffre le coût réel des travaux, consulte plusieurs artisans par corps de métier et compare les devis pour votre compte. Au moment du <strong>permis</strong>, il monte le dossier et suit son instruction. Pendant le <strong>chantier</strong>, il coordonne les artisans dans le bon ordre, contrôle la qualité, fait respecter le planning et valide les paiements. À la <strong>réception</strong>, il vous accompagne pour vérifier la conformité et faire lever les réserves.</p>`,
    },
    {
      h2: "Ce que le maître d'œuvre fait pour vous",
      html: `<p>Au quotidien, le maître d'œuvre vous décharge de la gestion sans vous retirer la décision. Il règle les imprévus de chantier, arbitre les questions techniques, fait l'interface avec les artisans et l'administration, et vous tient informé à chaque étape. Là où un particulier seul devrait coordonner une dizaine d'entreprises, suivre un planning et gérer les aléas, le maître d'œuvre s'en charge, avec l'expérience qui évite les erreurs coûteuses.</p>`,
    },
    {
      h2: "Ce qui distingue le maître d'œuvre",
      html: `<p>Sa particularité tient à sa position : il est rémunéré par des <strong>honoraires transparents</strong>, payés par vous, et ne prend pas de marge sur les travaux des artisans. Son intérêt rejoint donc le vôtre, à savoir un projet bien mené au juste prix. C'est ce qui le distingue d'autres modèles où la rémunération est fondue dans un prix global. Notre comparatif <a href="/guides/maitre-doeuvre-ou-constructeur" class="text-primary underline">maître d'œuvre ou constructeur</a> détaille ces différences.</p>`,
    },
    {
      h2: "Maître d'œuvre et architecte : qui fait quoi ?",
      html: `<p>Les deux interviennent en conception, mais leur périmètre diffère. L'architecte est avant tout concepteur : il dessine la maison. Le maître d'œuvre conçoit et surtout <strong>coordonne l'exécution</strong> jusqu'à la livraison. Beaucoup de projets associent les deux, l'architecte pour le plan, le maître d'œuvre pour le pilotage, ce qui offre le meilleur des deux mondes.</p>`,
    },
    {
      h2: "Pourquoi faire appel à un maître d'œuvre",
      html: `<p>Faire appel à un maître d'œuvre, c'est gagner du temps, de la sérénité et souvent de l'argent. Du temps, car vous n'avez pas à coordonner vous-même les intervenants. De la sérénité, car un professionnel veille à la qualité et aux délais. De l'argent, car la mise en concurrence des artisans permet d'obtenir des prix justes. C'est le métier de Maison de Nacre dans la région de Caen, de la conception à la remise des clés. Voir notre <a href="/services/maitre-doeuvre-construction-maison" class="text-primary underline">accompagnement en maîtrise d'œuvre</a>.</p>`,
    },
    {
      h2: "Parlons de votre projet",
      html: `<p>Vous voulez un projet piloté de bout en bout, sans stress ? Maison de Nacre joue ce rôle de chef d'orchestre, de la première esquisse à la remise des clés. Parlons-en, première estimation gratuite et sans engagement.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Discuter de mon projet</a></p>`,
    },
  ],
  faq: [
    {
      question: "Quel est le rôle du maître d'œuvre ?",
      answer:
        "Concevoir la maison, consulter et coordonner les artisans, monter le permis, piloter le chantier et accompagner jusqu'à la réception. Il gère l'opérationnel, vous gardez la décision.",
    },
    {
      question: "Quelle différence entre maître d'œuvre et maître d'ouvrage ?",
      answer:
        "Le maître d'ouvrage est le propriétaire qui décide et finance. Le maître d'œuvre est le professionnel mandaté pour concevoir et piloter le projet.",
    },
    {
      question: "Le maître d'œuvre prend-il une marge sur les travaux ?",
      answer:
        "Non. Il est rémunéré par des honoraires affichés et ne se paie pas sur les devis des artisans, que vous réglez à leur prix réel.",
    },
    {
      question: "Maître d'œuvre ou architecte ?",
      answer:
        "L'architecte conçoit, le maître d'œuvre conçoit et coordonne l'exécution. Les deux peuvent travailler ensemble sur un même projet.",
    },
    {
      question: "Pourquoi faire appel à un maître d'œuvre ?",
      answer:
        "Pour gagner du temps, sécuriser la qualité et les délais, et obtenir des prix justes grâce à la mise en concurrence des artisans.",
    },
  ],
  relatedGuideSlugs: ["maitre-doeuvre-ou-constructeur", "cout-maitre-doeuvre"],
};

const GArchi: Guide = {
  slug: "difference-architecte-maitre-doeuvre",
  title: "Architecte ou maître d'œuvre : différence | Maison de Nacre",
  metaDescription:
    "Quelle différence entre un architecte et un maître d'œuvre ? Rôles, missions, coûts et quand faire appel à l'un ou à l'autre pour construire sa maison.",
  h1: "Architecte ou maître d'œuvre : quelle différence ?",
  primaryKeyword: "différence architecte maître d'œuvre",
  searchVolume: 50,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "Architecte et maître d'œuvre sont souvent confondus, et pour cause : tous deux interviennent dans la conception d'une maison. Pourtant, leurs métiers, leurs missions et leur périmètre diffèrent. Voici ce qui les distingue, pour savoir à qui faire appel selon votre projet.",
  sections: [
    {
      h2: "L'architecte : le concepteur",
      html: `<p>L'architecte est un professionnel diplômé, inscrit à l'Ordre des architectes, dont le cœur de métier est la <strong>conception</strong>. Il dessine la maison, imagine les volumes, la lumière, l'implantation sur le terrain, et garantit la qualité architecturale du projet. Il peut aussi assurer le suivi du chantier, mais sa valeur première est la création d'un projet unique et abouti. Au-delà d'un certain seuil de surface, le recours à un architecte est d'ailleurs obligatoire.</p>`,
    },
    {
      h2: "Le maître d'œuvre : le concepteur-coordinateur",
      html: `<p>Le maître d'œuvre conçoit lui aussi, seul ou avec un architecte, mais son rôle s'étend à la <strong>coordination complète de la réalisation</strong>. Il consulte les artisans, compare les devis, pilote le chantier, contrôle la qualité et les délais, et accompagne jusqu'à la réception. Là où l'architecte se concentre sur le projet, le maître d'œuvre prend en charge l'ensemble du processus jusqu'à la maison livrée. Notre guide <a href="/guides/role-maitre-doeuvre" class="text-primary underline">le rôle du maître d'œuvre</a> détaille ses missions.</p>`,
    },
    {
      h2: "Les principales différences",
      html: `<p>L'architecte est avant tout un concepteur, avec un titre protégé et une obligation d'assurance spécifique. Le maître d'œuvre est un coordinateur de projet, qui conçoit et pilote l'exécution. L'architecte apporte une signature architecturale forte ; le maître d'œuvre apporte une prise en charge opérationnelle de bout en bout. Leurs honoraires se calculent dans les deux cas en pourcentage du coût des travaux, dans des fourchettes comparables, mais le périmètre couvert n'est pas le même.</p>`,
    },
    {
      h2: "Faut-il choisir l'un ou l'autre ?",
      html: `<p>En réalité, les deux ne s'opposent pas toujours : ils se complètent. Le scénario idéal pour une maison sur-mesure est souvent d'associer un <strong>architecte pour la conception</strong> et un <strong>maître d'œuvre pour le pilotage</strong>, ou de faire appel à un maître d'œuvre qui travaille main dans la main avec un architecte. Vous obtenez ainsi une maison à la fois bien dessinée et bien construite, sans avoir à coordonner vous-même les intervenants.</p>`,
    },
    {
      h2: "Quand l'architecte est-il obligatoire ?",
      html: `<p>Le recours à un architecte est imposé par la loi au-delà d'un certain seuil de surface de plancher pour les particuliers. En dessous, il reste vivement conseillé pour un projet sur-mesure, mais n'est pas obligatoire : un maître d'œuvre peut alors concevoir et piloter le projet. Ce seuil est un repère utile pour savoir quelle configuration s'impose à vous.</p>`,
    },
    {
      h2: "L'approche de Maison de Nacre",
      html: `<p>Nous réunissons les deux compétences : la conception sur-mesure avec un architecte et le pilotage complet en maîtrise d'œuvre. Vous bénéficiez d'une maison bien pensée et d'un chantier bien tenu, avec un interlocuteur unique du premier plan à la remise des clés. Voir notre page <a href="/services/maison-architecte" class="text-primary underline">maison d'architecte</a>.</p>`,
    },
    {
      h2: "Parlons de votre projet",
      html: `<p>Architecte, maître d'œuvre, ou les deux : nous vous aidons à y voir clair et à monter le bon dispositif pour votre maison. Parlons-en, estimation gratuite et sans engagement.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Discuter de mon projet</a></p>`,
    },
  ],
  faq: [
    {
      question: "Quelle différence entre un architecte et un maître d'œuvre ?",
      answer:
        "L'architecte est avant tout concepteur, avec un titre protégé. Le maître d'œuvre conçoit et coordonne en plus la réalisation jusqu'à la livraison.",
    },
    {
      question: "Lequel est le plus cher ?",
      answer:
        "Leurs honoraires se calculent de façon comparable, en pourcentage des travaux. La différence tient au périmètre couvert, le maître d'œuvre incluant le suivi de chantier.",
    },
    {
      question: "Peut-on faire appel aux deux ?",
      answer:
        "Oui, et c'est souvent l'idéal : un architecte pour la conception, un maître d'œuvre pour le pilotage, ou un maître d'œuvre travaillant avec un architecte.",
    },
    {
      question: "Quand l'architecte est-il obligatoire ?",
      answer:
        "Au-delà d'un certain seuil de surface de plancher pour les particuliers. En dessous, il est conseillé mais non obligatoire.",
    },
    {
      question: "Qui suit le chantier ?",
      answer:
        "Le maître d'œuvre, par définition. Un architecte peut aussi le faire, selon la mission convenue.",
    },
  ],
  relatedGuideSlugs: ["role-maitre-doeuvre", "maitre-doeuvre-ou-constructeur"],
};

const G10: Guide = {
  slug: "maison-ossature-bois-ou-traditionnelle",
  title: "Maison ossature bois ou traditionnelle | Maison de Nacre",
  metaDescription:
    "Maison ossature bois ou maçonnerie traditionnelle : avantages, coûts, performance et idées reçues. Le comparatif pour choisir le bon mode de construction.",
  h1: "Maison ossature bois ou traditionnelle : comment choisir ?",
  primaryKeyword: "maison ossature bois ou traditionnelle",
  searchVolume: 50,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "Faut-il construire en ossature bois ou en maçonnerie traditionnelle ? Les deux modes de construction permettent des maisons de qualité, conformes à la RE2020, mais ils n'ont pas les mêmes atouts. Voici un comparatif clair, sans idée reçue, pour choisir en connaissance de cause.",
  sections: [
    {
      h2: "Les deux modes de construction en bref",
      html: `<p>La <strong>maison traditionnelle</strong> est construite en maçonnerie : parpaing, brique ou béton, avec une isolation rapportée. C'est le mode le plus répandu en France, robuste et éprouvé. La <strong>maison à ossature bois</strong> repose sur une structure en bois, garnie d'isolant, et habillée selon le rendu souhaité. Plus légère et rapide à monter, elle séduit par sa performance et son caractère naturel.</p>`,
    },
    {
      h2: "Les avantages de la maison traditionnelle",
      html: `<p>La maçonnerie traditionnelle offre une grande <strong>inertie thermique</strong> : les murs lourds emmagasinent la chaleur et la restituent, un atout pour le confort d'été. Elle rassure par sa <strong>solidité</strong> perçue et sa longévité, et bénéficie d'un large vivier d'artisans maîtrisant ce savoir-faire. C'est aussi souvent le choix le plus économique à surface égale, selon les régions.</p>`,
    },
    {
      h2: "Les avantages de la maison ossature bois",
      html: `<p>L'ossature bois brille par sa <strong>performance thermique</strong> : à épaisseur de mur égale, elle isole mieux, ce qui sert la RE2020. Le chantier est <strong>plus rapide</strong> et plus sec, car la structure peut être préfabriquée. Le bois est un matériau <strong>bas carbone</strong> et renouvelable, valorisé par la RE2020. Enfin, l'ossature bois offre une grande <strong>liberté architecturale</strong> et des murs plus fins à performance égale, donc un peu plus de surface habitable.</p>`,
    },
    {
      h2: "Les idées reçues à dépasser",
      html: `<p>Plusieurs croyances ont la vie dure. « Le bois brûle plus vite » : en réalité, une structure bois bien dimensionnée résiste très bien au feu, car elle se consume lentement et de façon prévisible. « Le bois ne dure pas » : correctement conçue et protégée de l'humidité, une maison ossature bois traverse les décennies. « Le bois, c'est forcément un chalet » : l'ossature bois se prête à tous les styles, du contemporain au traditionnel, son habillage étant libre.</p>`,
    },
    {
      h2: "Le coût : ossature bois ou traditionnelle",
      html: `<p>À surface et finition équivalentes, les deux modes se tiennent souvent dans des fourchettes proches. La traditionnelle peut être un peu moins chère sur le gros œuvre selon les régions ; l'ossature bois compense par la rapidité de chantier et la performance. Le coût final dépend surtout des finitions, de la complexité du plan et du terrain, plus que du seul mode constructif. Notre guide <a href="/guides/prix-construction-maison-m2" class="text-primary underline">prix de construction au m²</a> donne les repères.</p>`,
    },
    {
      h2: "Performance énergétique et RE2020",
      html: `<p>Les deux modes permettent d'atteindre la RE2020. L'ossature bois part avec un avantage sur l'isolation et le bilan carbone des matériaux ; la traditionnelle compense par son inertie, précieuse pour le confort d'été. Dans les deux cas, c'est la qualité de conception qui fait la performance réelle. Notre guide <a href="/guides/re2020" class="text-primary underline">la RE2020 expliquée</a> détaille ces critères.</p>`,
    },
    {
      h2: "Comment trancher ?",
      html: `<p>Le choix dépend de vos priorités : performance et rapidité penchent vers l'ossature bois, inertie et budget gros œuvre vers la traditionnelle. Le terrain, le style recherché et les artisans disponibles localement entrent aussi en jeu. L'essentiel est d'arbitrer en fonction de votre projet, pas d'un a priori. Un maître d'œuvre vous aide à choisir le mode le plus adapté, puis le met en œuvre.</p>`,
    },
    {
      h2: "Parlons de votre projet",
      html: `<p>Ossature bois ou traditionnelle, nous concevons et réalisons votre maison sur-mesure dans le mode le plus adapté à votre projet. Parlons-en, estimation gratuite et sans engagement.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Discuter de mon projet</a></p>`,
    },
  ],
  faq: [
    {
      question: "Ossature bois ou traditionnelle : laquelle est la moins chère ?",
      answer:
        "Les deux sont souvent proches à finition équivalente. La traditionnelle peut être un peu moins chère sur le gros œuvre, l'ossature bois compense par la rapidité et la performance.",
    },
    {
      question: "La maison ossature bois est-elle aussi solide ?",
      answer:
        "Oui, une structure bois bien conçue est durable et résistante, y compris au feu, car elle se consume lentement et de façon prévisible.",
    },
    {
      question: "Laquelle est la plus performante en énergie ?",
      answer:
        "L'ossature bois isole mieux à épaisseur égale et affiche un meilleur bilan carbone ; la traditionnelle offre plus d'inertie pour le confort d'été. Les deux atteignent la RE2020.",
    },
    {
      question: "L'ossature bois convient-elle à tous les styles ?",
      answer:
        "Oui. Son habillage étant libre, elle se prête au contemporain comme au traditionnel, bien au-delà du chalet.",
    },
    {
      question: "Comment choisir entre les deux ?",
      answer:
        "Selon vos priorités (performance, budget, inertie, rapidité), votre terrain et le style voulu. Un maître d'œuvre vous aide à arbitrer.",
    },
  ],
  relatedGuideSlugs: ["prix-construction-maison-m2", "re2020"],
};

const GPassive: Guide = {
  slug: "maison-passive",
  title: "La maison passive expliquée | Maison de Nacre",
  metaDescription:
    "La maison passive : principe, critères, différence avec la RE2020, coût et confort. Faut-il viser le passif pour sa maison neuve ? Le guide complet.",
  h1: "La maison passive : principe, intérêt et différence avec la RE2020",
  primaryKeyword: "maison passive",
  searchVolume: 3600,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "La maison passive est souvent citée comme le summum de la performance énergétique. Mais qu'est-ce qu'une maison passive exactement, en quoi diffère-t-elle d'une maison RE2020, et vaut-il la peine de viser ce niveau ? Voici un guide clair pour comprendre et décider.",
  sections: [
    {
      h2: "Qu'est-ce qu'une maison passive ?",
      html: `<p>Une maison passive est une maison dont les besoins en chauffage sont si faibles qu'elle se passe presque d'un système de chauffage classique. Elle tire l'essentiel de sa chaleur de sources « passives » : le soleil, les occupants, les appareils électroménagers. Pour y parvenir, elle mise sur une isolation extrême, une étanchéité à l'air poussée, une ventilation double flux performante et une conception bioclimatique très soignée.</p>`,
    },
    {
      h2: "Les critères d'une maison passive",
      html: `<p>Le standard passif repose sur des seuils exigeants : un besoin de chauffage très bas, une excellente étanchéité à l'air vérifiée par test, une consommation d'énergie globale limitée, et une absence de surchauffe en été. Ces critères, plus stricts que la réglementation courante, imposent une conception et une mise en œuvre irréprochables, où le moindre pont thermique compte.</p>`,
    },
    {
      h2: "Maison passive ou RE2020 : la différence",
      html: `<p>La <strong>RE2020</strong> est la réglementation obligatoire de toute maison neuve : elle fixe un bon niveau de performance, déjà élevé. La <strong>maison passive</strong> est un standard volontaire, qui va nettement plus loin sur la sobriété énergétique. En clair, toute maison passive respecte largement la RE2020, mais l'inverse n'est pas vrai : une maison RE2020 n'est pas forcément passive. Notre guide <a href="/guides/re2020" class="text-primary underline">la RE2020 expliquée</a> détaille la norme de référence.</p>`,
    },
    {
      h2: "Les avantages d'une maison passive",
      html: `<p>Les bénéfices sont réels. Des <strong>factures de chauffage quasi nulles</strong>, ce qui protège durablement du coût de l'énergie. Un <strong>confort élevé et stable</strong>, été comme hiver, sans variations brutales de température. Une <strong>qualité de l'air</strong> excellente grâce à la ventilation double flux. Et une <strong>valeur patrimoniale</strong> renforcée, à l'heure où la performance énergétique pèse de plus en plus sur le prix des biens.</p>`,
    },
    {
      h2: "Les points d'attention",
      html: `<p>Le passif a un coût et des exigences. Le <strong>surcoût de construction</strong> est plus élevé qu'une maison RE2020 standard, du fait de l'isolation renforcée, des menuiseries très performantes et de la ventilation double flux. La <strong>conception et la mise en œuvre</strong> doivent être rigoureuses, ce qui suppose des professionnels expérimentés. Enfin, le retour sur investissement se mesure sur le long terme, par les économies d'énergie. C'est un choix d'engagement, à peser selon ses priorités et son budget.</p>`,
    },
    {
      h2: "Faut-il viser le passif pour sa maison ?",
      html: `<p>Tout dépend de vos objectifs. Si la sobriété énergétique maximale et l'indépendance vis-à-vis du coût de l'énergie sont une priorité, le passif a du sens. Si vous cherchez un excellent rapport performance/budget, une maison RE2020 bien conçue offre déjà un très bon niveau, à un coût plus mesuré, avec la possibilité de tendre vers le passif sur certains postes. L'important est de définir le bon niveau d'ambition pour votre projet, plutôt que de viser un label par principe.</p>`,
    },
    {
      h2: "Bien concevoir une maison très performante",
      html: `<p>Qu'on vise le passif ou une RE2020 optimisée, la performance se joue à la conception : orientation, compacité, isolation, étanchéité, ventilation. C'est le travail d'un architecte et d'un maître d'œuvre qui pensent l'énergie dès les premiers plans. Maison de Nacre conçoit votre maison performante sur-mesure dans la région de Caen. Voir notre page <a href="/services/maison-re2020" class="text-primary underline">construire une maison RE2020</a>.</p>`,
    },
    {
      h2: "Parlons de votre projet",
      html: `<p>Vous visez une maison très performante, passive ou RE2020 optimisée ? Maison de Nacre la conçoit sur-mesure et la réalise clé en main. Parlons-en, estimation gratuite et sans engagement.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Demander mon estimation gratuite</a></p>`,
    },
  ],
  faq: [
    {
      question: "Qu'est-ce qu'une maison passive ?",
      answer:
        "Une maison aux besoins de chauffage si faibles qu'elle se passe presque de chauffage classique, grâce à une isolation extrême, une étanchéité poussée et une ventilation double flux.",
    },
    {
      question: "Quelle différence entre maison passive et RE2020 ?",
      answer:
        "La RE2020 est obligatoire et fixe déjà un bon niveau. La maison passive est un standard volontaire qui va beaucoup plus loin sur la sobriété énergétique.",
    },
    {
      question: "Une maison passive coûte-t-elle plus cher ?",
      answer:
        "Oui, son surcoût de construction est plus élevé qu'une RE2020 standard, compensé sur le long terme par des factures de chauffage quasi nulles.",
    },
    {
      question: "Faut-il viser le passif ?",
      answer:
        "Selon vos priorités. Le passif maximise la sobriété ; une RE2020 bien conçue offre déjà un excellent rapport performance/budget.",
    },
    {
      question: "Une maison RE2020 est-elle passive ?",
      answer:
        "Pas forcément. Toute maison passive dépasse la RE2020, mais une maison RE2020 n'atteint pas nécessairement le niveau passif.",
    },
  ],
  relatedGuideSlugs: ["re2020"],
};

const G9: Guide = {
  slug: "faire-construire-ou-acheter-neuf",
  title: "Faire construire ou acheter dans le neuf | Maison de Nacre",
  metaDescription:
    "Faire construire sa maison ou acheter un logement neuf chez un promoteur ? Sur-mesure, prix, délais, personnalisation : le comparatif pour bien choisir.",
  h1: "Faire construire ou acheter dans le neuf : que choisir ?",
  primaryKeyword: "faire construire ou acheter neuf",
  searchVolume: 50,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "Vouloir du neuf ne règle pas tout : encore faut-il choisir entre faire construire sa maison sur-mesure et acheter un logement neuf déjà conçu, souvent vendu par un promoteur. Les deux donnent accès aux avantages du neuf, mais avec des libertés et des compromis très différents. Voici le comparatif.",
  sections: [
    {
      h2: "Les deux options en bref",
      html: `<p><strong>Faire construire</strong>, c'est concevoir une maison sur-mesure, sur un terrain que vous choisissez, avec les plans, les matériaux et l'agencement qui vous conviennent. <strong>Acheter dans le neuf</strong> chez un promoteur (souvent en VEFA, vente en l'état futur d'achèvement), c'est acquérir un logement déjà conçu, dans un programme standardisé, avec peu de marge de personnalisation. Deux logiques opposées : le sur-mesure d'un côté, le clé en main standardisé de l'autre.</p>`,
    },
    {
      h2: "La personnalisation : sur-mesure contre standard",
      html: `<p>C'est l'écart le plus net. En faisant construire, votre maison est unique, pensée pour votre terrain et votre mode de vie. Dans le neuf promoteur, le logement est conçu en série : vous choisissez parfois quelques finitions, mais l'agencement, les volumes et l'implantation sont figés. Pour qui a une idée précise de sa maison, faire construire offre une liberté incomparable.</p>`,
    },
    {
      h2: "Le terrain et l'emplacement",
      html: `<p>Faire construire suppose de <strong>trouver un terrain</strong>, ce qui demande du temps mais vous laisse choisir le secteur et la parcelle. Le neuf promoteur se situe là où le programme est lancé, souvent en zone urbaine ou en lotissement, sans choix du terrain. Selon que vous privilégiez la liberté d'implantation ou la simplicité, l'un ou l'autre prend l'avantage.</p>`,
    },
    {
      h2: "Le prix et les frais",
      html: `<p>Les deux relèvent de la fiscalité du neuf, avec des frais de notaire réduits par rapport à l'ancien. Le neuf promoteur affiche un prix global « clé en main » sans surprise apparente, mais intègre la marge du promoteur. Faire construire permet de maîtriser chaque poste et d'adapter le budget à ses choix, terrain compris. Notre guide <a href="/guides/prix-maison-neuve-calvados" class="text-primary underline">prix d'une maison neuve dans le Calvados</a> donne les repères.</p>`,
    },
    {
      h2: "Les délais",
      html: `<p>Le neuf promoteur peut être plus rapide si le programme est avancé, voire déjà construit. Faire construire demande le temps d'un projet, de la recherche de terrain à la livraison. Si la rapidité prime, le promoteur a une longueur d'avance ; si vous pouvez anticiper, le sur-mesure récompense l'attente.</p>`,
    },
    {
      h2: "Maison individuelle ou logement en programme",
      html: `<p>Un point souvent décisif : faire construire vous donne une <strong>maison individuelle</strong> avec terrain et indépendance. Le neuf promoteur propose fréquemment des appartements ou des maisons mitoyennes en programme, avec parfois des charges de copropriété. Si vous tenez à une maison indépendante avec jardin, faire construire est la voie naturelle.</p>`,
    },
    {
      h2: "Comment choisir ?",
      html: `<p>Faites construire si vous voulez une maison unique, un terrain choisi, une maison individuelle et la maîtrise de votre projet. Optez pour le neuf promoteur si vous privilégiez la rapidité, la simplicité et acceptez un logement standardisé. Pour une maison sur-mesure dans la région de Caen, voir notre page <a href="/services/maison-architecte" class="text-primary underline">maison d'architecte</a> et notre comparatif <a href="/guides/construire-ou-acheter-maison" class="text-primary underline">construire neuf ou acheter dans l'ancien</a>.</p>`,
    },
    {
      h2: "Parlons de votre projet",
      html: `<p>Vous voulez du neuf, mais sur-mesure et indépendant ? Maison de Nacre conçoit et réalise votre maison, du terrain à la remise des clés. Parlons-en, estimation gratuite et sans engagement.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Discuter de mon projet</a></p>`,
    },
  ],
  faq: [
    {
      question: "Quelle différence entre faire construire et acheter dans le neuf ?",
      answer:
        "Faire construire donne une maison sur-mesure sur un terrain choisi. Acheter dans le neuf chez un promoteur donne un logement déjà conçu, standardisé, avec peu de personnalisation.",
    },
    {
      question: "Lequel est le plus rapide ?",
      answer:
        "Le neuf promoteur peut être plus rapide si le programme est avancé. Faire construire demande le temps d'un projet complet.",
    },
    {
      question: "Les frais de notaire sont-ils réduits dans les deux cas ?",
      answer:
        "Oui, les deux relèvent de la fiscalité du neuf, avec des frais de notaire réduits par rapport à l'ancien.",
    },
    {
      question: "Peut-on personnaliser un logement neuf de promoteur ?",
      answer:
        "Très peu : quelques finitions parfois, mais l'agencement et les volumes sont figés. Faire construire offre une personnalisation totale.",
    },
    {
      question: "Faire construire revient-il plus cher ?",
      answer:
        "Pas nécessairement. Vous maîtrisez chaque poste et adaptez le budget à vos choix, là où le promoteur intègre sa marge dans un prix global.",
    },
  ],
  relatedGuideSlugs: ["construire-ou-acheter-maison", "prix-maison-neuve-calvados"],
};

const G31: Guide = {
  slug: "dpe-maison-neuve",
  title: "DPE et maison neuve | Maison de Nacre",
  metaDescription:
    "DPE d'une maison neuve : quelle classe attendre, pourquoi la RE2020 garantit un bon diagnostic, et ce que cela change pour le confort et la revente.",
  h1: "DPE et maison neuve : à quoi s'attendre",
  primaryKeyword: "dpe maison neuve",
  searchVolume: 170,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "Le diagnostic de performance énergétique (DPE) est devenu un critère majeur pour les logements. Quand on fait construire neuf, une bonne nouvelle s'impose : une maison RE2020 vise par construction les meilleures classes. Voici ce qu'il faut savoir sur le DPE d'une maison neuve.",
  sections: [
    {
      h2: "Qu'est-ce que le DPE ?",
      html: `<p>Le DPE évalue la performance énergétique d'un logement et le classe de A (très performant) à G (très énergivore). Il prend en compte la consommation d'énergie et les émissions de gaz à effet de serre. Devenu incontournable lors d'une vente ou d'une location, il pèse de plus en plus sur la valeur des biens : les logements mal classés se vendent moins bien et subissent des restrictions croissantes.</p>`,
    },
    {
      h2: "Quelle classe DPE pour une maison neuve ?",
      html: `<p>Une maison neuve construite selon la RE2020 vise les <strong>meilleures classes</strong>, typiquement A ou B. C'est logique : la RE2020 impose une isolation renforcée, une étanchéité soignée et un chauffage décarboné, exactement ce que le DPE récompense. Construire neuf, c'est donc partir directement au sommet du classement, là où l'ancien doit souvent engager de lourds travaux pour s'en approcher.</p>`,
    },
    {
      h2: "Pourquoi la RE2020 garantit un bon DPE",
      html: `<p>La RE2020 et le DPE évaluent des choses proches : la sobriété énergétique et l'empreinte carbone. Une maison conçue pour la RE2020 coche par avance les critères d'un bon DPE. La conception bioclimatique, l'isolation, la pompe à chaleur et la ventilation performante se traduisent directement par une excellente note. Notre guide <a href="/guides/re2020" class="text-primary underline">la RE2020 expliquée</a> détaille ces exigences.</p>`,
    },
    {
      h2: "Ce que le DPE change pour vous",
      html: `<p>Un bon DPE a des effets très concrets. Des <strong>factures d'énergie basses</strong>, puisque la maison consomme peu. Un <strong>confort élevé</strong>, été comme hiver. Une <strong>valeur préservée</strong>, voire valorisée, à la revente : à l'heure où les passoires énergétiques se déprécient, une maison classée A ou B est un atout. Et l'absence des contraintes (interdictions de location, obligations de travaux) qui pèsent sur les logements mal classés.</p>`,
    },
    {
      h2: "DPE neuf et revente",
      html: `<p>Si vous revendez votre maison neuve, son excellent DPE devient un argument de vente fort. Les acquéreurs, de plus en plus attentifs à la performance énergétique et au coût d'usage, valorisent une maison économe et bien classée. C'est l'un des avantages durables du neuf face à l'ancien à rénover. Notre comparatif <a href="/guides/construire-ou-acheter-maison" class="text-primary underline">construire neuf ou acheter dans l'ancien</a> développe ce point.</p>`,
    },
    {
      h2: "Parlons de votre projet",
      html: `<p>Vous voulez une maison neuve performante et bien classée, économe et valorisée ? Maison de Nacre la conçoit sur-mesure et la réalise clé en main. Parlons-en, estimation gratuite et sans engagement.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Demander mon estimation gratuite</a></p>`,
    },
  ],
  faq: [
    {
      question: "Quelle classe DPE pour une maison neuve ?",
      answer:
        "Généralement A ou B, car la RE2020 impose une isolation, une étanchéité et un chauffage décarboné qui correspondent aux meilleures notes.",
    },
    {
      question: "Une maison neuve a-t-elle besoin d'un DPE ?",
      answer:
        "Le DPE devient utile lors d'une vente ou d'une location. Une maison neuve RE2020 affiche par construction un excellent diagnostic.",
    },
    {
      question: "Pourquoi le DPE est-il important ?",
      answer:
        "Il classe la performance énergétique du logement, pèse sur sa valeur et conditionne certaines obligations. Les logements mal classés se déprécient.",
    },
    {
      question: "La RE2020 garantit-elle un bon DPE ?",
      answer:
        "Oui, car les deux évaluent la sobriété énergétique et le carbone. Une maison RE2020 vise par construction les meilleures classes.",
    },
    {
      question: "Un bon DPE aide-t-il à la revente ?",
      answer:
        "Oui. Une maison économe et bien classée se vend mieux, à l'heure où les passoires énergétiques subissent une forte décote.",
    },
  ],
  relatedGuideSlugs: ["re2020", "construire-ou-acheter-maison"],
};

const G33: Guide = {
  slug: "maison-basse-consommation",
  title: "Maison basse consommation : le guide | Maison de Nacre",
  metaDescription:
    "Maison basse consommation : principes, isolation, chauffage et ventilation pour réduire ses factures. Comment concevoir une maison neuve économe en énergie.",
  h1: "Maison basse consommation : comment construire économe",
  primaryKeyword: "maison basse consommation",
  searchVolume: 260,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "Une maison basse consommation, c'est une maison qui consomme très peu d'énergie pour le chauffage, l'eau chaude et le confort. Avec la RE2020, le neuf part déjà à un bon niveau, mais quelques principes permettent d'aller plus loin. Voici comment concevoir une maison réellement économe.",
  sections: [
    {
      h2: "Qu'est-ce qu'une maison basse consommation ?",
      html: `<p>Une maison basse consommation limite au maximum ses besoins en énergie, par une conception et des équipements performants. L'objectif est double : réduire les factures et améliorer le confort, tout en limitant l'empreinte environnementale. Aujourd'hui, toute maison neuve RE2020 est déjà une maison basse consommation par rapport à l'ancien ; il s'agit ensuite d'optimiser chaque levier.</p>`,
    },
    {
      h2: "Les piliers d'une maison économe",
      html: `<p>Quatre leviers font la performance. L'<strong>isolation</strong>, d'abord : murs, toiture et sol bien isolés limitent les déperditions. L'<strong>étanchéité à l'air</strong>, ensuite, pour éviter les fuites de chaleur. La <strong>conception bioclimatique</strong> : orientation, ouvertures et protections solaires pour capter la chaleur l'hiver et s'en protéger l'été. Et des <strong>équipements performants</strong> : pompe à chaleur, ventilation maîtrisée, eau chaude efficace. Bien combinés, ces leviers réduisent fortement la consommation.</p>`,
    },
    {
      h2: "Le rôle de l'isolation et de l'étanchéité",
      html: `<p>L'isolation est le premier poste d'économie : une maison bien isolée garde la chaleur en hiver et la fraîcheur en été. L'étanchéité à l'air complète l'isolation en supprimant les fuites, souvent sous-estimées. Ensemble, elles réduisent les besoins de chauffage avant même de parler d'équipements. C'est pourquoi la performance se joue d'abord sur l'enveloppe de la maison.</p>`,
    },
    {
      h2: "Le chauffage et la ventilation",
      html: `<p>Une maison basse consommation privilégie un <strong>chauffage décarboné et efficace</strong>, le plus souvent une pompe à chaleur, dimensionnée au plus juste puisque les besoins sont faibles. La <strong>ventilation</strong> joue aussi un rôle clé : une ventilation maîtrisée, voire double flux, renouvelle l'air sans gaspiller la chaleur. Notre guide <a href="/guides/chauffage-maison-re2020" class="text-primary underline">quel chauffage pour une maison RE2020</a> approfondit ce point.</p>`,
    },
    {
      h2: "Basse consommation, RE2020 et passif",
      html: `<p>Ces notions se recoupent. La <strong>RE2020</strong> est la base obligatoire et garantit déjà une maison économe. Aller plus loin mène vers la <strong>maison passive</strong>, le standard le plus exigeant. Entre les deux, on peut optimiser une maison RE2020 pour tendre vers le passif sur certains postes, selon le budget et les priorités. Nos guides <a href="/guides/re2020" class="text-primary underline">la RE2020 expliquée</a> et <a href="/guides/maison-passive" class="text-primary underline">la maison passive</a> situent ces niveaux.</p>`,
    },
    {
      h2: "Bien concevoir dès le départ",
      html: `<p>La sobriété énergétique se décide à la conception, pas après. Orientation, compacité, isolation, équipements : tout se pense ensemble, dès les premiers plans. C'est le travail d'un architecte et d'un maître d'œuvre qui intègrent la performance comme un objectif, pas une contrainte. Maison de Nacre conçoit votre maison économe sur-mesure. Voir notre page <a href="/services/maison-re2020" class="text-primary underline">construire une maison RE2020</a>.</p>`,
    },
    {
      h2: "Parlons de votre projet",
      html: `<p>Vous voulez une maison économe, confortable et tournée vers l'avenir ? Maison de Nacre la conçoit sur-mesure et la réalise clé en main. Parlons-en, estimation gratuite et sans engagement.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Demander mon estimation gratuite</a></p>`,
    },
  ],
  faq: [
    {
      question: "Qu'est-ce qu'une maison basse consommation ?",
      answer:
        "Une maison qui consomme très peu d'énergie grâce à une bonne isolation, une étanchéité soignée, une conception bioclimatique et des équipements performants.",
    },
    {
      question: "Une maison neuve est-elle basse consommation ?",
      answer:
        "Oui, par rapport à l'ancien : la RE2020 impose déjà un haut niveau de performance. On peut ensuite optimiser chaque levier.",
    },
    {
      question: "Comment réduire la consommation d'une maison ?",
      answer:
        "En agissant d'abord sur l'enveloppe (isolation, étanchéité), puis sur les équipements (pompe à chaleur, ventilation maîtrisée) et la conception bioclimatique.",
    },
    {
      question: "Quel chauffage pour une maison économe ?",
      answer:
        "Le plus souvent une pompe à chaleur, dimensionnée au plus juste car les besoins sont faibles, associée à une ventilation performante.",
    },
    {
      question: "Quelle différence avec une maison passive ?",
      answer:
        "La maison passive est le niveau le plus exigeant. Une maison basse consommation peut s'en approcher selon le budget, en partant de la base RE2020.",
    },
  ],
  relatedGuideSlugs: ["re2020", "maison-passive"],
};

const GEtudeSol: Guide = {
  slug: "etude-de-sol-construction",
  title: "L'étude de sol pour construire | Maison de Nacre",
  metaDescription:
    "L'étude de sol avant de construire : à quoi elle sert, quand elle est obligatoire (loi ELAN), son coût et ce qu'elle change pour vos fondations.",
  h1: "L'étude de sol : obligation et utilité avant de construire",
  primaryKeyword: "étude de sol construction",
  searchVolume: 50,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "Avant de construire, connaître la nature de son sol évite de coûteuses mauvaises surprises. L'étude de sol, désormais souvent obligatoire, détermine le type de fondations adapté à votre terrain. Voici à quoi elle sert, quand elle s'impose et ce qu'elle coûte.",
  sections: [
    {
      h2: "Qu'est-ce qu'une étude de sol ?",
      html: `<p>Une étude de sol, ou étude géotechnique, analyse la composition et le comportement du terrain sur lequel vous allez construire. Elle révèle la nature du sol (argileux, sableux, rocheux), sa stabilité, la présence d'eau, et le risque de mouvements de terrain. À partir de ces données, elle préconise le type de fondations adapté pour que la maison repose sur une base sûre.</p>`,
    },
    {
      h2: "Pourquoi est-elle importante ?",
      html: `<p>Le sol détermine la stabilité de votre maison. Un sol argileux, par exemple, gonfle et se rétracte avec l'humidité, ce qui peut provoquer des fissures si les fondations ne sont pas adaptées. L'étude de sol permet d'anticiper ces risques et de dimensionner les fondations en conséquence, plutôt que de découvrir un problème une fois le chantier engagé, quand les corrections coûtent très cher.</p>`,
    },
    {
      h2: "Quand l'étude de sol est-elle obligatoire ?",
      html: `<p>Depuis la loi ELAN, une étude de sol est <strong>obligatoire</strong> dans les zones exposées au phénomène de retrait-gonflement des argiles, qui couvrent une large partie du territoire, dont des secteurs du Calvados. Concrètement, dans ces zones, l'étude est exigée lors de la vente d'un terrain constructible et avant la construction. Même hors zone obligatoire, elle reste vivement recommandée : son coût est sans commune mesure avec celui d'un sinistre de fondations.</p>`,
    },
    {
      h2: "Ce qu'elle change pour vos fondations",
      html: `<p>Selon les résultats, l'étude préconise des fondations standard ou renforcées (semelles plus profondes, pieux, radier). Cela a un impact direct sur le budget : un sol difficile renchérit les fondations. Mieux vaut le savoir avant d'acheter le terrain, pour intégrer ce poste au budget global. Nos guides <a href="/guides/choisir-terrain-constructible" class="text-primary underline">comment choisir son terrain</a> et <a href="/guides/budget-construction-maison" class="text-primary underline">budget d'un projet</a> en tiennent compte.</p>`,
    },
    {
      h2: "Combien coûte une étude de sol ?",
      html: `<p>Le coût d'une étude de sol pour une maison individuelle reste modéré au regard de l'enjeu, de l'ordre de quelques centaines à un peu plus de mille euros selon le niveau d'étude. C'est un investissement de précaution : il sécurise tout le reste du projet et évite des réparations qui se chiffrent en dizaines de milliers d'euros.</p>`,
    },
    {
      h2: "L'étude de sol dans votre projet",
      html: `<p>L'étude de sol s'intègre tôt dans le parcours, idéalement avant ou juste après l'achat du terrain, pour caler la conception et le budget. Un maître d'œuvre coordonne cette étape et adapte le projet à ses conclusions. Maison de Nacre intègre cette vérification dans l'accompagnement, pour bâtir sur des bases sûres. Voir notre guide <a href="/guides/etapes-construction-maison" class="text-primary underline">les étapes d'une construction</a>.</p>`,
    },
    {
      h2: "Parlons de votre projet",
      html: `<p>Vous avez un terrain ou un projet en vue ? Maison de Nacre coordonne l'étude de sol et adapte votre maison à votre terrain, pour bâtir sereinement. Parlons-en, estimation gratuite et sans engagement.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Discuter de mon projet</a></p>`,
    },
  ],
  faq: [
    {
      question: "À quoi sert une étude de sol ?",
      answer:
        "À connaître la nature et la stabilité du terrain, et à déterminer le type de fondations adapté pour éviter fissures et désordres.",
    },
    {
      question: "L'étude de sol est-elle obligatoire ?",
      answer:
        "Oui, depuis la loi ELAN, dans les zones exposées au retrait-gonflement des argiles, fréquentes en France. Elle est recommandée partout ailleurs.",
    },
    {
      question: "Combien coûte une étude de sol ?",
      answer:
        "De quelques centaines à un peu plus de mille euros selon le niveau d'étude, un coût modéré au regard du risque évité.",
    },
    {
      question: "Que se passe-t-il si le sol est difficile ?",
      answer:
        "L'étude préconise des fondations renforcées, ce qui augmente le budget. D'où l'intérêt de connaître le sol avant d'acheter le terrain.",
    },
    {
      question: "Quand faire l'étude de sol ?",
      answer:
        "Idéalement avant ou juste après l'achat du terrain, pour caler la conception et le budget sur des données fiables.",
    },
  ],
  relatedGuideSlugs: ["choisir-terrain-constructible", "viabilisation-terrain"],
};

const GChauffage: Guide = {
  slug: "chauffage-maison-re2020",
  title: "Quel chauffage pour une maison RE2020 | Maison de Nacre",
  metaDescription:
    "Quel chauffage choisir pour une maison RE2020 ? Pompe à chaleur, solutions décarbonées, pourquoi le gaz disparaît : le guide pour bien s'équiper.",
  h1: "Quel chauffage pour une maison RE2020 ?",
  primaryKeyword: "chauffage maison RE2020",
  searchVolume: 50,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "La RE2020 a rebattu les cartes du chauffage dans le neuf : exit les énergies fossiles, place aux solutions décarbonées et performantes. Mais quelle solution choisir concrètement pour sa maison neuve ? Voici les options et les critères pour bien s'équiper.",
  sections: [
    {
      h2: "Ce que la RE2020 change pour le chauffage",
      html: `<p>La RE2020 vise à réduire l'empreinte carbone des maisons, ce qui se traduit par la <strong>fin progressive des énergies fossiles</strong> pour le chauffage. Le gaz, en particulier, devient très difficile à justifier dans une maison neuve. La norme favorise les énergies décarbonées et les équipements efficaces, dans une maison déjà peu gourmande grâce à l'isolation et à l'étanchéité.</p>`,
    },
    {
      h2: "La pompe à chaleur, solution de référence",
      html: `<p>Dans une maison RE2020, la <strong>pompe à chaleur</strong> s'impose comme la solution la plus courante. Elle puise les calories dans l'air ou le sol pour chauffer la maison et souvent l'eau chaude, avec une excellente efficacité : elle restitue plusieurs fois l'énergie qu'elle consomme. Décarbonée et performante, elle coche les cases de la RE2020 tout en limitant les factures. Selon le modèle (air-air, air-eau, géothermique), elle s'adapte à la maison et au terrain.</p>`,
    },
    {
      h2: "Les autres solutions décarbonées",
      html: `<p>Au-delà de la pompe à chaleur, d'autres options existent selon les cas. Le <strong>chauffage au bois</strong> (poêle, chaudière granulés) est une énergie renouvelable, parfois en complément. Le <strong>solaire thermique</strong> peut soutenir la production d'eau chaude. Dans une maison très bien conçue, les besoins sont si faibles que des solutions simples suffisent. Le choix se fait selon la maison, le budget et le mode de vie. Notre guide <a href="/guides/maison-basse-consommation" class="text-primary underline">maison basse consommation</a> replace le chauffage dans l'ensemble des leviers.</p>`,
    },
    {
      h2: "Le rôle de la conception",
      html: `<p>Le meilleur chauffage est d'abord celui dont on a le moins besoin. Une maison RE2020 bien isolée, étanche et bien orientée réduit fortement ses besoins de chauffage, ce qui permet de dimensionner l'équipement au plus juste et d'économiser à l'installation comme à l'usage. La conception bioclimatique est donc le premier levier, avant même le choix de l'appareil. Notre guide <a href="/guides/re2020" class="text-primary underline">la RE2020 expliquée</a> détaille ces principes.</p>`,
    },
    {
      h2: "Chauffage et confort d'été",
      html: `<p>La RE2020 impose aussi le confort d'été. Certaines pompes à chaleur réversibles peuvent rafraîchir la maison en période de chaleur, en complément des protections solaires et de la ventilation. Mais le rafraîchissement passif, gagné à la conception, reste prioritaire sur la climatisation. L'équilibre se pense globalement, été comme hiver.</p>`,
    },
    {
      h2: "Parlons de votre projet",
      html: `<p>Vous voulez une maison neuve bien chauffée, économe et confortable toute l'année ? Maison de Nacre conçoit l'enveloppe et les équipements ensemble, pour le meilleur résultat. Parlons-en, estimation gratuite et sans engagement.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Demander mon estimation gratuite</a></p>`,
    },
  ],
  faq: [
    {
      question: "Quel chauffage pour une maison RE2020 ?",
      answer:
        "Le plus souvent une pompe à chaleur, décarbonée et performante. Le gaz devient difficile à justifier dans une maison neuve.",
    },
    {
      question: "Le gaz est-il interdit en maison neuve ?",
      answer:
        "La RE2020 le rend très difficile à intégrer dans une maison individuelle neuve, au profit des solutions décarbonées.",
    },
    {
      question: "La pompe à chaleur est-elle suffisante ?",
      answer:
        "Oui, dans une maison RE2020 bien isolée, les besoins sont faibles et une pompe à chaleur bien dimensionnée suffit, parfois complétée par un poêle à bois.",
    },
    {
      question: "Peut-on chauffer au bois dans une maison RE2020 ?",
      answer:
        "Oui, le bois est une énergie renouvelable, souvent utilisée en appoint (poêle, chaudière granulés).",
    },
    {
      question: "Comment réduire ses besoins de chauffage ?",
      answer:
        "Par la conception : isolation, étanchéité, orientation. Moins la maison a besoin de chauffage, plus l'équipement peut être modeste et économe.",
    },
  ],
  relatedGuideSlugs: ["re2020", "maison-basse-consommation"],
};

const G20: Guide = {
  slug: "re2020-prix-maison",
  title: "RE2020 : quel impact sur le prix | Maison de Nacre",
  metaDescription:
    "RE2020 et prix d'une maison : quel surcoût réel, pourquoi il se rentabilise à l'usage, et comment l'optimiser. Le point sur le coût de la norme.",
  h1: "RE2020 : quel impact sur le prix de votre maison ?",
  primaryKeyword: "re2020 prix maison",
  searchVolume: 50,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "La RE2020 a-t-elle renchéri la construction ? Oui, mais moins qu'on ne le craint, et pour de bonnes raisons. Voici le point honnête sur le surcoût de la norme, pourquoi il se rentabilise, et comment le maîtriser.",
  sections: [
    {
      h2: "Un surcoût réel mais mesuré",
      html: `<p>Par rapport aux anciennes normes, la RE2020 ajoute de l'ordre de <strong>5 à 10 %</strong> au coût de construction. Ce surcoût provient de l'isolation renforcée, de l'étanchéité soignée, des menuiseries performantes, du chauffage décarboné et de la ventilation maîtrisée. C'est un investissement supplémentaire à la construction, qu'il faut intégrer au budget, mais qui reste mesuré au regard de ses bénéfices.</p>`,
    },
    {
      h2: "Pourquoi ce surcoût se rentabilise",
      html: `<p>Le surcoût de la RE2020 n'est pas une dépense perdue : il se rattrape à l'usage. Une maison RE2020 consomme <strong>bien moins d'énergie</strong> qu'une maison ancienne, ce qui réduit fortement les factures de chauffage et d'eau chaude, année après année. Sur la durée de vie de la maison, ces économies compensent largement le surcoût initial. À cela s'ajoute une <strong>valeur préservée</strong> : une maison performante, bien classée au DPE, se revend mieux. Notre guide <a href="/guides/dpe-maison-neuve" class="text-primary underline">DPE et maison neuve</a> développe ce point.</p>`,
    },
    {
      h2: "Ce qui fait varier le surcoût",
      html: `<p>L'ampleur du surcoût dépend du niveau d'ambition. Respecter la RE2020 a un coût ; viser au-delà (vers le passif) en a un plus élevé. Le terrain, la forme de la maison et les choix d'équipement jouent aussi. Une conception intelligente permet d'atteindre la performance sans surenchère, en jouant d'abord sur l'orientation et la compacité, gratuites, avant les équipements coûteux.</p>`,
    },
    {
      h2: "Comment maîtriser le coût de la RE2020",
      html: `<p>Le meilleur levier est la <strong>conception</strong>. Une maison bien orientée, compacte et bien pensée atteint la performance à moindre coût qu'une maison mal conçue qu'on rattrape à coups d'équipements. Investir dans une bonne conception dès le départ, avec un architecte et un maître d'œuvre, optimise le rapport performance/prix. Nos guides <a href="/guides/prix-construction-maison-m2" class="text-primary underline">prix de construction au m²</a> et <a href="/guides/re2020" class="text-primary underline">la RE2020 expliquée</a> complètent ce point.</p>`,
    },
    {
      h2: "Le bon raisonnement : coût global",
      html: `<p>Plutôt que de regarder le seul prix de construction, raisonnez en <strong>coût global</strong> : prix d'achat plus coût d'usage sur des années. Sous cet angle, une maison RE2020 légèrement plus chère à construire mais bien moins coûteuse à habiter est gagnante. C'est le calcul qui compte vraiment quand on s'installe pour longtemps.</p>`,
    },
    {
      h2: "Parlons de votre projet",
      html: `<p>Vous voulez une maison performante au juste prix, pensée en coût global ? Maison de Nacre optimise la conception pour le meilleur rapport performance/budget. Parlons-en, estimation gratuite et sans engagement.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Demander mon estimation gratuite</a></p>`,
    },
  ],
  faq: [
    {
      question: "Quel est le surcoût de la RE2020 ?",
      answer:
        "De l'ordre de 5 à 10 % du coût de construction, lié à l'isolation, l'étanchéité, les équipements et la ventilation.",
    },
    {
      question: "Ce surcoût se rentabilise-t-il ?",
      answer:
        "Oui, par des factures d'énergie nettement plus basses et une meilleure valeur à la revente, qui compensent l'investissement initial.",
    },
    {
      question: "Comment réduire le coût d'une maison RE2020 ?",
      answer:
        "Par une bonne conception (orientation, compacité) qui atteint la performance avant de recourir aux équipements coûteux.",
    },
    {
      question: "Une maison RE2020 est-elle rentable ?",
      answer:
        "En coût global (achat plus usage sur des années), oui : le léger surcoût de construction est compensé par les économies d'usage.",
    },
    {
      question: "La RE2020 va-t-elle encore renchérir le neuf ?",
      answer:
        "La norme se durcit par paliers. Une maison bien conçue aujourd'hui anticipe ces évolutions et garde de la valeur.",
    },
  ],
  relatedGuideSlugs: ["re2020", "prix-construction-maison-m2"],
};

const G26: Guide = {
  slug: "ccmi-c-est-quoi",
  title: "Qu'est-ce que le CCMI ? | Maison de Nacre",
  metaDescription:
    "Le CCMI (contrat de construction de maison individuelle) expliqué : définition, garanties, à qui il s'adresse et ses différences avec la maîtrise d'œuvre.",
  h1: "Qu'est-ce que le CCMI ?",
  primaryKeyword: "ccmi c'est quoi",
  searchVolume: 30,
  publishedAt: "2026-06-09",
  updatedAt: "2026-06-09",
  intro:
    "Le CCMI, ou contrat de construction de maison individuelle, revient souvent quand on se renseigne pour faire construire. C'est un contrat très encadré par la loi, propre à un mode de construction précis. Voici ce qu'il est, ce qu'il garantit, et en quoi il diffère d'un accompagnement en maîtrise d'œuvre.",
  sections: [
    {
      h2: "Définition du CCMI",
      html: `<p>Le CCMI est un contrat réglementé par la loi de 1990, conçu pour protéger les particuliers qui font construire. Il lie le client à un constructeur de maison individuelle qui s'engage sur un prix et un délai fermes, pour la réalisation d'une maison souvent issue d'un catalogue ou d'un modèle. C'est le cadre juridique du modèle « constructeur » au sens strict.</p>`,
    },
    {
      h2: "Les garanties du CCMI",
      html: `<p>Le CCMI offre des garanties fortes, c'est son grand atout. La principale est la <strong>garantie de livraison à prix et délais convenus</strong> : si le chantier dérape, un assureur prend le relais pour livrer la maison au prix prévu. S'y ajoutent la garantie de remboursement d'acompte, l'encadrement des paiements, et bien sûr les garanties légales de la construction (parfait achèvement, biennale, décennale). Ce cadre sécurise fortement le client sur le prix final.</p>`,
    },
    {
      h2: "À qui s'adresse le CCMI ?",
      html: `<p>Le CCMI convient particulièrement à ceux qui veulent la <strong>sécurité d'un prix ferme</strong> et la simplicité d'un interlocuteur unique, sur un modèle de maison défini. C'est rassurant pour qui craint les dépassements de budget et accepte un projet moins personnalisé. En contrepartie, la liberté de conception et le choix des artisans sont limités, et la marge du constructeur est intégrée dans le prix global.</p>`,
    },
    {
      h2: "CCMI et maîtrise d'œuvre : la différence",
      html: `<p>Le CCMI et la maîtrise d'œuvre répondent à deux logiques. Le CCMI est un <strong>contrat de vente d'une maison</strong> avec garantie de livraison, sur un modèle. La <strong>maîtrise d'œuvre</strong> est un accompagnement sur-mesure : le maître d'œuvre conçoit votre maison, consulte les artisans que vous choisissez et pilote le chantier, pour des honoraires affichés, sans marge sur les travaux. L'un privilégie la sécurité contractuelle et le standard, l'autre la liberté, le sur-mesure et la transparence. Notre comparatif <a href="/guides/maitre-doeuvre-ou-constructeur" class="text-primary underline">maître d'œuvre ou constructeur</a> détaille ce choix.</p>`,
    },
    {
      h2: "Faut-il choisir le CCMI ?",
      html: `<p>Tout dépend de vos priorités. Le CCMI est pertinent si la garantie de prix ferme et la simplicité priment, sur un modèle qui vous convient. La maîtrise d'œuvre l'emporte dès que vous voulez une maison unique, choisir vos artisans et comprendre où va chaque euro. Il n'y a pas de mauvaise réponse, seulement celle qui correspond à votre projet.</p>`,
    },
    {
      h2: "Parlons de votre projet",
      html: `<p>Vous hésitez sur le bon cadre pour faire construire ? Maison de Nacre vous éclaire et vous accompagne en maîtrise d'œuvre, sur-mesure et transparent. Parlons-en, estimation gratuite et sans engagement.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Discuter de mon projet</a></p>`,
    },
  ],
  faq: [
    {
      question: "Que signifie CCMI ?",
      answer:
        "Contrat de construction de maison individuelle, un contrat réglementé par la loi de 1990 qui encadre la construction par un constructeur.",
    },
    {
      question: "Quelle est la principale garantie du CCMI ?",
      answer:
        "La garantie de livraison à prix et délais convenus : un assureur livre la maison au prix prévu si le chantier dérape.",
    },
    {
      question: "Le CCMI est-il obligatoire pour construire ?",
      answer:
        "Non. Il s'applique quand on passe par un constructeur sur ce contrat. Faire construire avec un maître d'œuvre relève d'un autre cadre.",
    },
    {
      question: "Quelle différence entre CCMI et maîtrise d'œuvre ?",
      answer:
        "Le CCMI vend une maison avec garantie de prix ferme, souvent sur modèle. La maîtrise d'œuvre est un accompagnement sur-mesure aux honoraires affichés.",
    },
    {
      question: "Quel cadre choisir ?",
      answer:
        "Le CCMI pour la sécurité d'un prix ferme sur un modèle ; la maîtrise d'œuvre pour le sur-mesure, le choix des artisans et la transparence.",
    },
  ],
  relatedGuideSlugs: ["maitre-doeuvre-ou-constructeur", "role-maitre-doeuvre"],
};

const GDemarches: Guide = {
  slug: "demarches-apres-achat-terrain",
  title: "Démarches après l'achat d'un terrain | Maison de Nacre",
  metaDescription:
    "Vous avez acheté un terrain : quelles démarches pour construire ? Étude de sol, conception, permis, viabilisation, financement. L'ordre des étapes à suivre.",
  h1: "Les démarches après l'achat d'un terrain à bâtir",
  primaryKeyword: "démarches après achat terrain",
  searchVolume: 40,
  publishedAt: "2026-06-10",
  updatedAt: "2026-06-10",
  intro:
    "Vous venez d'acheter un terrain, et maintenant ? Entre l'acte chez le notaire et le premier coup de pelle, plusieurs démarches s'enchaînent dans un ordre logique. Voici la marche à suivre pour construire sereinement, sans perdre de temps ni oublier d'étape.",
  sections: [
    {
      h2: "Étape 1 : faire l'étude de sol",
      html: `<p>Si elle n'a pas été réalisée à l'achat, l'étude de sol est la première démarche utile. Elle détermine la nature du terrain et le type de fondations adapté, ce qui conditionne la conception et le budget. Dans de nombreuses zones, elle est obligatoire. Notre guide <a href="/guides/etude-de-sol-construction" class="text-primary underline">l'étude de sol</a> en détaille l'enjeu.</p>`,
    },
    {
      h2: "Étape 2 : concevoir la maison",
      html: `<p>Vient la conception : plans, implantation sur la parcelle, orientation, en tenant compte du terrain et des règles d'urbanisme. C'est l'étape où la maison prend forme, idéalement avec un architecte et un maître d'œuvre, pour un projet sur-mesure et conforme à la RE2020.</p>`,
    },
    {
      h2: "Étape 3 : déposer le permis de construire",
      html: `<p>Le projet conçu, on dépose la demande de permis en mairie. L'instruction dure environ deux mois pour une maison individuelle. Un dossier complet et conforme évite les retards. Notre guide <a href="/guides/permis-de-construire-maison" class="text-primary underline">le permis de construire</a> explique le dossier et la procédure.</p>`,
    },
    {
      h2: "Étape 4 : viabiliser le terrain",
      html: `<p>Si le terrain n'est pas viabilisé, il faut engager les raccordements aux réseaux (eau, électricité, assainissement, télécom). Ces démarches se mènent en parallèle du permis pour ne pas perdre de mois. Notre guide <a href="/guides/viabilisation-terrain" class="text-primary underline">la viabilisation d'un terrain</a> détaille les étapes et les coûts.</p>`,
    },
    {
      h2: "Étape 5 : boucler le financement et les assurances",
      html: `<p>En parallèle, finalisez votre financement (prêt, apport, éventuel PTZ) et souscrivez l'assurance dommage-ouvrage, obligatoire avant l'ouverture du chantier. Mieux vaut avoir l'accord de prêt avant de signer les devis.</p>`,
    },
    {
      h2: "Étape 6 : consulter les artisans et lancer le chantier",
      html: `<p>Le permis obtenu et le financement en place, on consulte les artisans, on compare et signe les devis, puis le chantier démarre. La coordination des corps de métier est la clé pour tenir les délais. Notre guide <a href="/guides/etapes-construction-maison" class="text-primary underline">les étapes d'une construction</a> détaille la suite jusqu'aux clés.</p>`,
    },
    {
      h2: "Mener les démarches en parallèle",
      html: `<p>Le secret pour ne pas rallonger le projet : ne pas tout faire en série. Conception, permis, financement et viabilisation se chevauchent en partie. Un maître d'œuvre orchestre ces démarches simultanément, ce qui fait gagner plusieurs mois par rapport à un enchaînement linéaire.</p>`,
    },
    {
      h2: "Parlons de votre projet",
      html: `<p>Vous avez un terrain et vous voulez avancer sans fausse note ? Maison de Nacre orchestre toutes les démarches, de l'étude de sol à la remise des clés. Parlons-en, estimation gratuite et sans engagement.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Discuter de mon projet</a></p>`,
    },
  ],
  faq: [
    {
      question: "Que faire juste après avoir acheté un terrain ?",
      answer:
        "Réaliser l'étude de sol si ce n'est pas fait, puis lancer la conception de la maison, en vue du dépôt de permis.",
    },
    {
      question: "Dans quel ordre se font les démarches ?",
      answer:
        "Étude de sol, conception, permis de construire, viabilisation et financement en parallèle, puis consultation des artisans et chantier.",
    },
    {
      question: "Faut-il viabiliser avant ou après le permis ?",
      answer:
        "Les deux se mènent souvent en parallèle. Certaines demandes de raccordement se finalisent une fois le permis obtenu.",
    },
    {
      question: "Quand souscrire l'assurance dommage-ouvrage ?",
      answer:
        "Avant l'ouverture du chantier. Elle est obligatoire et protège votre maison pendant dix ans.",
    },
    {
      question: "Comment éviter de perdre du temps ?",
      answer:
        "En menant conception, permis, financement et viabilisation en parallèle plutôt qu'en série. Un maître d'œuvre coordonne le tout.",
    },
  ],
  relatedGuideSlugs: ["permis-de-construire-maison", "viabilisation-terrain", "etapes-construction-maison"],
};

const GPtz: Guide = {
  slug: "ptz-construction-maison",
  title: "Le PTZ pour faire construire | Maison de Nacre",
  metaDescription:
    "Le prêt à taux zéro (PTZ) pour faire construire : principe, conditions, qui peut en bénéficier et comment il complète votre financement de maison neuve.",
  h1: "Le PTZ pour faire construire sa maison",
  primaryKeyword: "ptz construction maison",
  searchVolume: 320,
  publishedAt: "2026-06-10",
  updatedAt: "2026-06-10",
  intro:
    "Le prêt à taux zéro (PTZ) est un coup de pouce précieux pour les primo-accédants qui font construire. Sans intérêts, il complète le financement et allège la charge mensuelle. Voici son principe, ses conditions générales et comment il s'intègre à votre projet. Les règles évoluant régulièrement, vérifiez toujours les conditions en vigueur au moment de votre projet.",
  sections: [
    {
      h2: "Qu'est-ce que le PTZ ?",
      html: `<p>Le PTZ est un prêt aidé par l'État, <strong>sans intérêts ni frais de dossier</strong>, destiné à faciliter l'accession à la propriété. Il ne finance qu'une partie du projet et vient en complément d'un prêt principal. Son montant et ses conditions dépendent de plusieurs critères, notamment les revenus, la composition du foyer et la localisation du bien.</p>`,
    },
    {
      h2: "Qui peut en bénéficier ?",
      html: `<p>Le PTZ s'adresse en priorité aux <strong>primo-accédants</strong>, c'est-à-dire aux personnes qui n'ont pas été propriétaires de leur résidence principale au cours des dernières années. Son obtention dépend de <strong>conditions de ressources</strong> : les revenus du foyer ne doivent pas dépasser certains plafonds, qui varient selon la zone géographique et le nombre de personnes. Le bien doit constituer la résidence principale.</p>`,
    },
    {
      h2: "PTZ et construction neuve",
      html: `<p>Le PTZ est particulièrement adapté à la construction neuve, qu'il encourage. Faire construire sa maison neuve, performante et conforme à la RE2020, entre dans les projets éligibles, sous réserve des conditions en vigueur et de la zone. C'est l'un des avantages du neuf pour un premier achat, à intégrer dans le plan de financement.</p>`,
    },
    {
      h2: "Comment le PTZ complète votre financement",
      html: `<p>Le PTZ ne finance jamais la totalité du projet : il s'ajoute à un <strong>prêt immobilier principal</strong> et à votre apport. Son grand intérêt est de réduire le coût total du crédit, puisqu'une partie de l'emprunt ne porte pas d'intérêts, et parfois de différer son remboursement. Bien monté, un plan de financement combinant prêt principal, apport et PTZ optimise votre capacité d'achat. Notre guide <a href="/guides/budget-construction-maison" class="text-primary underline">budget d'un projet de construction</a> replace le financement dans l'ensemble.</p>`,
    },
    {
      h2: "Bien préparer sa demande",
      html: `<p>Le PTZ se demande auprès de la banque qui accorde le prêt principal, au moment du montage du financement. Anticipez : rassemblez vos justificatifs de revenus, clarifiez votre statut de primo-accédant et faites simuler votre éligibilité. Comme les règles évoluent (zones, plafonds, quotités), vérifiez les conditions à jour avec votre banque ou un courtier au moment de votre projet.</p>`,
    },
    {
      h2: "Parlons de votre projet",
      html: `<p>Vous êtes primo-accédant et vous voulez faire construire ? Maison de Nacre vous accompagne sur le projet, pendant que vous montez votre financement avec votre banque. Parlons-en, estimation gratuite et sans engagement.</p>
<p class="mt-4"><a href="/#contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90">Discuter de mon projet</a></p>`,
    },
  ],
  faq: [
    {
      question: "Qu'est-ce que le PTZ ?",
      answer:
        "Un prêt à taux zéro aidé par l'État, sans intérêts, qui complète le financement d'une résidence principale pour les primo-accédants.",
    },
    {
      question: "Peut-on avoir le PTZ pour faire construire ?",
      answer:
        "Oui, la construction neuve fait partie des projets pouvant être éligibles, sous réserve des conditions de ressources et de zone en vigueur.",
    },
    {
      question: "Qui peut bénéficier du PTZ ?",
      answer:
        "Principalement les primo-accédants, sous conditions de ressources, pour l'achat de leur résidence principale.",
    },
    {
      question: "Le PTZ finance-t-il tout le projet ?",
      answer:
        "Non, il ne finance qu'une partie et complète un prêt principal et votre apport.",
    },
    {
      question: "Où demander le PTZ ?",
      answer:
        "Auprès de la banque qui accorde votre prêt principal, au moment du montage du financement. Vérifiez les conditions à jour.",
    },
  ],
  relatedGuideSlugs: ["budget-construction-maison", "pret-construction-maison"],
};

export const GUIDES: Guide[] = [G22, G11, G6, G12, G17, G23, G24, G29, G14, G5, G19, G28, G16, G13, G30, G7, G25, G27, G15, GArchi, G10, GPassive, G9, G31, G33, GEtudeSol, GChauffage, G20, G26, GDemarches, GPtz];

export const GUIDES_BY_SLUG: Record<string, Guide> = Object.fromEntries(
  GUIDES.map((g) => [g.slug, g]),
);

export function getGuide(slug: string): Guide | undefined {
  return GUIDES_BY_SLUG[slug];
}

export function getAllGuideSlugs(): string[] {
  return GUIDES.map((g) => g.slug);
}
