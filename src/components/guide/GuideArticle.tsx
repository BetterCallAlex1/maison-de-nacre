import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import type { Guide } from "@/data/guides";

type Props = { guide: Guide; kind?: "guide" | "service" };

export function GuideArticle({ guide, kind = "guide" }: Props) {
  const breadcrumbLabel = kind === "service" ? "Services" : "Guides";
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <article className="bg-soft-fade py-12 lg:py-16">
          <div className="container mx-auto max-w-3xl px-4">
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Accueil</Link>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <span>{breadcrumbLabel}</span>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <span className="text-deep">{guide.h1}</span>
            </nav>
            <h1 className="mt-4 font-display text-3xl font-semibold text-deep md:text-4xl text-balance">
              {guide.h1}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {guide.intro}
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Publié le {formatDate(guide.publishedAt)}
              {guide.updatedAt !== guide.publishedAt && ` · Mis à jour le ${formatDate(guide.updatedAt)}`}
            </p>
          </div>
        </article>

        <section className="py-12 lg:py-16">
          <div className="container mx-auto max-w-3xl px-4">
            {guide.sections.map((section) => (
              <div key={section.h2} className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-deep md:text-3xl">
                  {section.h2}
                </h2>
                <div
                  className="mt-4 space-y-4 text-base leading-relaxed text-foreground [&_a]:text-primary [&_a]:underline [&_strong]:font-semibold [&_strong]:text-deep [&_table]:border-collapse [&_th]:font-medium [&_th]:text-deep"
                  dangerouslySetInnerHTML={{ __html: section.html }}
                />
              </div>
            ))}
          </div>
        </section>

        {guide.faq.length > 0 && (
          <section className="bg-soft-fade py-12 lg:py-16">
            <div className="container mx-auto max-w-3xl px-4">
              <h2 className="font-display text-2xl font-semibold text-deep md:text-3xl">
                Questions fréquentes
              </h2>
              <dl className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card">
                {guide.faq.map((item) => (
                  <div key={item.question} className="p-5 md:p-6">
                    <dt className="font-medium text-deep">{item.question}</dt>
                    <dd
                      className="mt-2 text-sm leading-relaxed text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  </div>
                ))}
              </dl>
            </div>
          </section>
        )}

        <section className="bg-background py-12 lg:py-16">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <h2 className="font-display text-2xl font-semibold text-deep md:text-3xl">
              Une question sur votre projet ?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Un premier échange gratuit pour cadrer votre budget et votre planning.
            </p>
            <Link
              to="/"
              hash="contact"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent/90"
            >
              Demander un échange
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}
