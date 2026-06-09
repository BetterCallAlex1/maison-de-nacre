// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { getPrerenderPages } from "./src/lib/prerender-routes";

// Prerender SSG : chaque route ci-dessous est figée en HTML au build,
// avec contenu + JSON-LD présents dans la source. Objectif : pouvoir
// héberger le site en 100 % statique (Netlify, OVH, S3…) sans Worker
// runtime à la fin de l'abonnement Lovable.
//
// La liste vient de src/lib/prerender-routes.ts qui agrège la home et
// les slugs des guides (et plus tard des communes / services).

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    pages: getPrerenderPages(),
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
});
