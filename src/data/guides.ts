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
<p class="mt-4">Pour la méthodologie de calcul détaillée du prix au m² (TVA, prestations comptabilisées, surface habitable vs SHON), consultez notre <a href="/guides/prix-construction-maison-au-m2" class="text-primary underline">guide dédié au prix de construction au m²</a>.</p>`,
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
  relatedGuideSlugs: ["prix-construction-maison-au-m2", "maitre-doeuvre-ou-constructeur"],
};

// ────────────────────────────────────────────────────────────────────────────────
// Registre
// ────────────────────────────────────────────────────────────────────────────────

export const GUIDES: Guide[] = [G11];

export const GUIDES_BY_SLUG: Record<string, Guide> = Object.fromEntries(
  GUIDES.map((g) => [g.slug, g]),
);

export function getGuide(slug: string): Guide | undefined {
  return GUIDES_BY_SLUG[slug];
}

export function getAllGuideSlugs(): string[] {
  return GUIDES.map((g) => g.slug);
}
