export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-display text-lg font-semibold text-deep">Maison de Nacre</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Accompagnement à la construction de maisons neuves, région de Caen.
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>Téléphone : <a href="tel:+33669260817" className="font-medium text-deep hover:text-primary">06 69 26 08 17</a></p>
            <p className="mt-1">Email : <a href="mailto:contact@maison-de-nacre.fr" className="font-medium text-deep hover:text-primary">contact@maison-de-nacre.fr</a></p>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-xs text-muted-foreground">
          © {year} Maison de Nacre. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
