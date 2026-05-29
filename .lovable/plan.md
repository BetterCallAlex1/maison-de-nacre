## Objectif

Afficher publiquement `contact@maison-de-nacre.fr` partout sur la landing (au lieu de `alexandre.duran@maison-de-nacre.fr`), tout en gardant la livraison réelle des leads vers la boîte personnelle.

## Changements code (3 fichiers)

1. **`src/components/landing/Footer.tsx`** (ligne 15)
   - Texte affiché + `mailto:` → `contact@maison-de-nacre.fr`

2. **`src/routes/__root.tsx`** (ligne 114, JSON-LD LocalBusiness)
   - Champ `email` → `contact@maison-de-nacre.fr` (email public de l'entité)

3. **`public/llms.txt`** (ligne 28)
   - `Email : contact@maison-de-nacre.fr`

## Fichiers NON touchés

- **`src/routes/api/public/send-lead.ts`** : on garde `to: ["alexandre.duran@maison-de-nacre.fr"]` (livraison directe à ta boîte, indépendante du forwarding) et `from: "Maison de Nacre <contact@maison-de-nacre.fr>"` (déjà en place).
- Toutes les meta `og:`, canonical, hreflang, sitemap, robots : intactes.

## Point critique : le forwarding contact@ → boîte réelle

Le "renvoi automatique" de `contact@maison-de-nacre.fr` vers ta boîte n'est **pas géré par le code** : il dépend de la config MX/alias chez ton registrar ou ton hébergeur mail. Trois cas possibles :

- **Tu as déjà configuré un alias/forwarding** `contact@` → `alexandre.duran@` (ou autre boîte) chez ton fournisseur : rien à faire, ça marchera quand un visiteur cliquera sur le `mailto:` ou répondra à un mail Resend.
- **Pas encore configuré** : les mails envoyés à `contact@` partiront dans le vide. À configurer manuellement chez ton registrar (OVH, Gandi, Cloudflare Email Routing, Google Workspace, etc.).
- **Cas Resend uniquement** : Resend peut *envoyer* depuis `contact@` (domaine vérifié) sans qu'il existe de vraie boîte. Mais pour *recevoir* (visiteur qui clique sur `mailto:` ou répond à un lead), il faut un MX + alias.

**Action recommandée** : confirme-moi que le forwarding `contact@maison-de-nacre.fr` est bien actif (et où il est configuré). Si non, je peux te guider sur la mise en place (Cloudflare Email Routing est gratuit et rapide si ton DNS est chez Cloudflare).

## Règle absolue

Pas de tiret cadratin `—` dans le diff final.