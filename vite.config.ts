// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { copyFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";
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

// Deux workarounds pour pouvoir lancer le prerender via le preview-server
// de TanStack Start :
//
// 1) preview-server-plugin charge `dist/server/server.js`, alors que Nitro
//    émet `dist/server/index.mjs`. On dépose une copie sous le nom attendu.
//
// 2) Le wrapper cloudflare-module appelle `augmentReq` qui fait
//    `req.ip = …` sur un srvx NodeRequest où `ip` est un getter en lecture
//    seule → TypeError, toutes les routes remontent en 500. On enveloppe
//    cette assignation dans un try/catch pour neutraliser l'erreur en
//    preview (en prod sur Cloudflare, `ip` est writable, le try/catch n'a
//    aucun effet).
const aliasServerEntryPlugin: PluginOption = {
  name: "lovable:alias-server-entry-as-server-js",
  apply: "build",
  closeBundle: {
    sequential: true,
    handler() {
      const src = join(process.cwd(), "dist/server/index.mjs");
      const dst = join(process.cwd(), "dist/server/server.js");
      if (!existsSync(src)) return;

      let code = readFileSync(src, "utf8");
      const target = 'req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;';
      if (code.includes(target)) {
        code = code.replace(
          target,
          `try { ${target} } catch { /* srvx NodeRequest in preview server */ }`,
        );
        writeFileSync(src, code);
      }
      copyFileSync(src, dst);
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

