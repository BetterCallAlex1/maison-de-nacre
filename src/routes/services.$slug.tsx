import { createFileRoute, notFound } from "@tanstack/react-router";
import { GuideArticle } from "@/components/guide/GuideArticle";
import { getService, type Service } from "@/data/services";

const SITE_URL = "https://maison-de-nacre.fr";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { service } = loaderData;
    const url = `${SITE_URL}/services/${service.slug}`;
    return {
      meta: [
        { title: service.title },
        { name: "description", content: service.metaDescription },
        { name: "language", content: "fr-FR" },
        { property: "og:title", content: service.title },
        { property: "og:description", content: service.metaDescription },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "fr_FR" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "Maison de Nacre" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: service.title },
        { name: "twitter:description", content: service.metaDescription },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(buildServiceSchema(service, url)),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(buildFaqSchema(service)),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(buildBreadcrumbSchema(service, url)),
        },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  return <GuideArticle guide={service} kind="service" />;
}

function buildServiceSchema(service: Service, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    description: service.metaDescription,
    provider: { "@type": "Organization", name: "Maison de Nacre", url: SITE_URL },
    areaServed: { "@type": "AdministrativeArea", name: "Calvados" },
    inLanguage: "fr-FR",
    url,
  };
}

function buildFaqSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: stripHtml(f.answer) },
    })),
  };
}

function buildBreadcrumbSchema(service: Service, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL + "/" },
      { "@type": "ListItem", position: 2, name: "Services", item: SITE_URL + "/services/" + service.slug },
      { "@type": "ListItem", position: 3, name: service.h1, item: url },
    ],
  };
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, "").trim();
}
