import { useState } from "react";

type Project = {
  id: number;
  image: string;
  commune: string;
  surface: string;
};

const projects: Project[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80",
    commune: "Commune",
    surface: "000 m²",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    commune: "Commune",
    surface: "000 m²",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
    commune: "Commune",
    surface: "000 m²",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    commune: "Commune",
    surface: "000 m²",
  },
];

export function Realisations() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 3);
  const hasMore = projects.length > 3 && !showAll;

  return (
    <section
      id="realisations"
      aria-labelledby="realisations-title"
      className="py-20 lg:py-28"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Nos dernières réalisations
          </p>
          <h2
            id="realisations-title"
            className="mt-3 font-display text-3xl font-semibold text-deep md:text-4xl text-balance"
          >
            Nos projets, près de chez vous
          </h2>
          <p className="mt-4 text-muted-foreground">
            Découvrez quelques-unes des maisons individuelles que nous avons
            accompagnées de la conception à la remise des clés.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <article
              key={p.id}
              className="relative overflow-hidden rounded-2xl border border-border shadow-sm aspect-[4/5] bg-secondary"
            >
              <img
                src={p.image}
                alt={`Maison neuve réalisée à ${p.commune}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-black/30 p-4 backdrop-blur-md">
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {p.commune}
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {p.surface}
                </span>
              </div>
            </article>
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              aria-expanded={showAll}
              className="inline-flex items-center justify-center rounded-md border border-border bg-card px-6 py-3 text-base font-semibold text-deep shadow-sm transition-colors hover:bg-secondary"
            >
              Voir plus de réalisations
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
