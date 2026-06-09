// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import type { PluginOption } from "vite";
import { getPrerenderPages } from "./src/lib/prerender-routes";

// Prerender SSG : chaque route ci-dessous est figée en HTML au build,
// avec contenu + JSON-LD présents dans la source. Objectif : pouvoir
// héberger le site en 100 % statique (Netlify, OVH, S3…) sans Worker
// runtime à la fin de l'abonnement Lovable.
//
// La liste vient de src/lib/prerender-routes.ts qui agrège la home et
// les slugs des guides (et plus tard des communes / services).

// Workaround : TanStack Start preview-server-plugin (utilisé par le
// prerender) charge `dist/server/server.js`, alors que Nitro émet
// `dist/server/index.mjs`. On dépose une copie sous le nom attendu
// après l'écriture du bundle serveur, sinon le prerender se mange un
// "Cannot find module …/dist/server/server.js" et toutes les routes
// remontent en 500.
const aliasServerEntryPlugin: PluginOption = {
  name: "lovable:alias-server-entry-as-server-js",
  apply: "build",
  closeBundle: {
    sequential: true,
    handler() {
      const src = join(process.cwd(), "dist/server/index.mjs");
      const dst = join(process.cwd(), "dist/server/server.js");
      if (existsSync(src)) {
        copyFileSync(src, dst);
      }
    },
  },
};

export default defineConfig({
  plugins: [aliasServerEntryPlugin],
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

