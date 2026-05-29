import { Sparkles, HeartHandshake, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Sparkles,
    title: "Du sur-mesure, à votre image",
    body: "Chaque mètre carré pensé pour votre terrain, votre vie, votre budget. Pas de modèle catalogue.",
  },
  {
    icon: HeartHandshake,
    title: "Le savoir-faire d'une famille",
    body: "Quinze ans à construire en Normandie. Notre nom sur chaque chantier, notre exigence avec.",
  },
  {
    icon: ShieldCheck,
    title: "Zéro charge mentale",
    body: "Vous prenez les décisions importantes. On gère le reste : architecte, artisans, administratif, chantier.",
  },
];

export function WhyUs() {
  return (
    <section id="pourquoi" className="bg-deep py-20 text-deep-foreground lg:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-soft">Pourquoi nous choisir</p>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl text-balance">
            Trois engagements, une exigence.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-soft">{p.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
