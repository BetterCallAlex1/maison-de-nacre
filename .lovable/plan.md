# Plan — Mise à jour SEO meta (title + description)

## Décisions actées
- **Title** : `Maison neuve à Caen, clé en main (14) | Maison de Nacre` (53 car.)
- **Description retenue** : variante « Maître d'œuvre dédié »

> **Votre maison neuve clé en main à Caen et dans le Calvados. Maître d'œuvre dédié, architecte inclus, devis négociés, norme RE2020. 1er rendez-vous offert.**
> (152 car., cumul ~580 recherches/mois sur *maison neuve Caen* + *Calvados* + *clé en main* + *maître d'œuvre Caen* + *RE2020*)

## 2 confirmations avant build
Avant de coller le code, j'ai besoin d'un oui/non rapide sur :

1. **« 1er rendez-vous offert »** — est-ce bien vrai dans votre offre commerciale ?
   - ✅ Oui → on garde (meilleur trigger CTR)
   - ❌ Non → on remplace par *« Accompagnement de A à Z. »* (description = 156 car.)

2. **« Maître d'œuvre dédié » assumé publiquement** — OK avec votre cadre juridique / positionnement ?
   - ✅ Oui → on garde (capte le mot-clé n°1 du tableau : 170/mo)
   - ❌ Non → fallback sans cette mention (on perd ~170/mo de volume capté)

## Fichiers modifiés (une fois confirmé)
- `src/routes/__root.tsx` — `head().meta` :
  - `title`
  - `description`
  - `og:title`, `og:description`
  - `twitter:title`, `twitter:description`

Aucun autre changement (canonical, og:url, JSON-LD, H1 du Hero restent inchangés sur ce passage).

## Mémoire projet
Je consigne aussi la stratégie de mots-clés (cibles principales, secondaires, termes à éviter type « constructeur ») dans `mem://seo/keyword-strategy` + entrée dans `mem://index.md`, pour que les prochaines pages (Services, Réalisations, Contact…) restent cohérentes.

---

**Répondez simplement : `1=oui/non, 2=oui/non`** et je passe en build.
