// Liste centrale des routes à prerender en HTML statique au build.
// Importée par vite.config.ts (via tanstackStart.pages) et — plus tard —
// par la route /sitemap.xml.
//
// Règle : toute route qui doit rester accessible sans Worker runtime
// (objectif : hébergement 100 % statique post-abonnement) DOIT figurer ici.

import { getAllGuideSlugs } from "../data/guides";
import { getAllServiceSlugs } from "../data/services";

export type PrerenderPage = {
  path: string;
  sitemap?: {
    priority?: number;
    changefreq?: "daily" | "weekly" | "monthly" | "yearly";
  };
};

export function getPrerenderPages(): PrerenderPage[] {
  const pages: PrerenderPage[] = [
    { path: "/", sitemap: { priority: 1.0, changefreq: "weekly" } },
  ];

  for (const slug of getAllGuideSlugs()) {
    pages.push({
      path: `/guides/${slug}`,
      sitemap: { priority: 0.8, changefreq: "monthly" },
    });
  }

  for (const slug of getAllServiceSlugs()) {
    pages.push({
      path: `/services/${slug}`,
      sitemap: { priority: 0.8, changefreq: "monthly" },
    });
  }

  // Quand communes.ts arrive, on ajoute leurs slugs ici.

  return pages;
}
