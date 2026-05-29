## Constat

Les deux fichiers existent déjà dans `public/` :

- `public/robots.txt` : conforme à la demande (User-agent + Allow + Sitemap).
- `public/sitemap.xml` : valide mais sans balise `<lastmod>`.

Aucune route `/sitemap.xml` ou `/robots.txt` n'existe sous `src/routes/` (pas de `sitemap[.]xml.ts`), donc les fichiers statiques de `public/` sont déjà servis bruts à la racine du domaine. Aucune redirection à neutraliser.

## Changements

### 1. `public/sitemap.xml`

Ajouter `<lastmod>` à la date du jour (2026-05-29) sur l'entrée d'accueil. Le reste du fichier reste identique.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://maison-de-nacre.fr/</loc>
    <lastmod>2026-05-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 2. `public/robots.txt`

Aucun changement nécessaire, le fichier est déjà conforme :

```
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://maison-de-nacre.fr/sitemap.xml
```

Note : la ligne `Disallow: /api/` existante est conservée (elle protège les endpoints internes sans bloquer la home ni le sitemap). Si tu préfères un robots.txt strictement minimal (sans `Disallow: /api/`), dis-le et je l'enlèverai.

## Vérification du routing

- Pas de fichier `src/routes/sitemap[.]xml.ts` ni `src/routes/robots[.]txt.ts` → aucune route serveur ne capture ces chemins.
- `src/routes/api/public/send-lead.ts` ne matche que `/api/public/send-lead`, pas la racine.
- Vite/TanStack Start sert `public/*` directement en statique avec priorité sur le SPA fallback : `https://maison-de-nacre.fr/sitemap.xml` et `/robots.txt` retourneront bien les fichiers bruts.

## Règle

Pas de tiret cadratin (`—`) dans le diff.
