const steps = [
  {
    n: "01",
    title: "Échange et cadrage",
    body: "Nous écoutons votre projet, votre terrain, votre budget et vos contraintes. Nous validons ensemble la faisabilité.",
  },
  {
    n: "02",
    title: "Conception avec l'architecte",
    body: "Nous travaillons les plans avec un architecte partenaire jusqu'à un projet qui vous correspond vraiment.",
  },
  {
    n: "03",
    title: "Devis consultés et négociés",
    body: "Nous consultons et négocions les devis auprès de nos artisans partenaires, et vous restituons une offre claire.",
  },
  {
    n: "04",
    title: "Chantier et livraison clé en main",
    body: "Nous coordonnons les artisans, suivons le chantier chaque semaine et vous remettons les clés d'une maison finie.",
  },
];

export function HowItWorks() {
  return (
    <section id="methode" className="py-20 lg:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Notre méthode</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-deep md:text-4xl text-balance">
            Quatre étapes, un seul interlocuteur
          </h2>
          <p className="mt-4 text-muted-foreground">
            Nous prenons en charge la coordination du projet pour que vous gardiez le plaisir de décider, sans la charge mentale.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-border lg:block" aria-hidden="true" />
          {steps.map((s) => (
            <li key={s.n} className="relative rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary font-display text-lg font-semibold text-primary-foreground">
                {s.n}
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-deep">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent/90"
          >
            Parler de mon projet
          </a>
        </div>
      </div>
    </section>
  );
}
