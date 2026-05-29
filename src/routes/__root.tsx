import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import heroImg from "@/assets/hero-maison.webp";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Erreur 404</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">Page introuvable</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Cette page n'a pas pu se charger
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Une erreur est survenue. Vous pouvez réessayer ou revenir à l'accueil.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Réessayer
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Construction maison neuve près de Caen | Maison de Nacre" },
      { name: "description", content: "Faire construire votre maison neuve clé en main près de Caen. Un seul interlocuteur, de la conception à la remise des clés. Calvados (14)." },
      { name: "author", content: "Maison de Nacre" },
      { name: "language", content: "fr-FR" },
      { httpEquiv: "content-language", content: "fr-FR" },
      { name: "geo.region", content: "FR-14" },
      { name: "geo.placename", content: "Caen, Calvados, France" },
      { name: "geo.position", content: "49.1829;-0.3707" },
      { name: "ICBM", content: "49.1829, -0.3707" },
      { property: "og:title", content: "Construction maison neuve près de Caen | Maison de Nacre" },
      { property: "og:description", content: "Faire construire votre maison neuve clé en main près de Caen. Un seul interlocuteur, de la conception à la remise des clés. Calvados (14)." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:site_name", content: "Maison de Nacre" },
      { property: "og:url", content: "https://maison-de-nacre.fr/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Construction maison neuve près de Caen | Maison de Nacre" },
      { name: "twitter:description", content: "Faire construire votre maison neuve clé en main près de Caen. Un seul interlocuteur, de la conception à la remise des clés. Calvados (14)." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/89b1dbff-fd65-4152-b07b-f17fbfe75cd6/id-preview-1895e7d8--5b4883a1-2ba1-479a-976f-1c48421421fb.lovable.app-1780050663202.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/89b1dbff-fd65-4152-b07b-f17fbfe75cd6/id-preview-1895e7d8--5b4883a1-2ba1-479a-976f-1c48421421fb.lovable.app-1780050663202.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://maison-de-nacre.fr/" },
      { rel: "alternate", hreflang: "fr-FR", href: "https://maison-de-nacre.fr/" },
      { rel: "alternate", hreflang: "x-default", href: "https://maison-de-nacre.fr/" },
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Maison de Nacre",
          "description": "Accompagnement à la construction de maisons neuves clé en main dans la région de Caen.",
          "url": "https://maison-de-nacre.fr/",
          "telephone": "+33669260817",
          "email": "alexandre.duran@maison-de-nacre.fr",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Caen",
            "addressRegion": "Calvados",
            "postalCode": "14000",
            "addressCountry": "FR",
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 49.1829,
            "longitude": -0.3707,
          },
          "areaServed": [
            { "@type": "City", "name": "Caen" },
            { "@type": "City", "name": "Hérouville-Saint-Clair" },
            { "@type": "City", "name": "Ifs" },
            { "@type": "City", "name": "Bretteville-sur-Odon" },
            { "@type": "City", "name": "Verson" },
            { "@type": "City", "name": "Douvres-la-Délivrande" },
            { "@type": "City", "name": "Ouistreham" },
            { "@type": "City", "name": "Mondeville" },
            { "@type": "City", "name": "Carpiquet" },
            { "@type": "City", "name": "Bayeux" },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
        />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
