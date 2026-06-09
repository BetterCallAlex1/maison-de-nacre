import { createFileRoute, notFound } from "@tanstack/react-router";
import { GuideArticle } from "@/components/guide/GuideArticle";
import { getGuide, type Guide } from "@/data/guides";

const SITE_URL = "https://maison-de-nacre.fr";

export const Route = createFileRoute("/guides/$slug")({
  loader: ({ params }) => {
    const guide = getGuide(params.slug);
    if (!guide) throw notFound();
    return { guide };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { guide } = loaderData;
    const url = `${SITE_URL}/guides/${guide.slug}`;
    return {
      meta: [
        { title: guide.title },
        { name: "description", content: guide.metaDescription },
        { name: "language", content: "fr-FR" },
        { property: "og:title", content: guide.title },
        { property: "og:description", content: guide.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:locale", content: "fr_FR" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "Maison de Nacre" },
        { property: "article:published_time", content: guide.publishedAt },
        { property: "article:modified_time", content: guide.updatedAt },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: guide.title },
        { name: "twitter:description", content: guide.metaDescription },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(buildArticleSchema(guide, url)),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(buildFaqSchema(guide)),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(buildBreadcrumbSchema(guide, url)),
        },
      ],
    };
  },
  component: GuidePage,
});

function GuidePage() {
  const { guide } = Route.useLoaderData();
  return <GuideArticle guide={guide} />;
}

function buildArticleSchema(guide: Guide, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.h1,
    description: guide.metaDescription,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    inLanguage: "fr-FR",
    author: { "@type": "Organization", name: "Maison de Nacre", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Maison de Nacre", url: SITE_URL },
    mainEntityOfPage: url,
  };
}

function buildFaqSchema(guide: Guide) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: stripHtml(f.answer) },
    })),
  };
}

function buildBreadcrumbSchema(guide: Guide, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL + "/" },
      { "@type": "ListItem", position: 2, name: "Guides", item: SITE_URL + "/guides/" + guide.slug },
      { "@type": "ListItem", position: 3, name: guide.h1, item: url },
    ],
  };
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, "").trim();
}
