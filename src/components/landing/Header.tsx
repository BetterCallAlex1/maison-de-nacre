import { Phone } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#top" className="font-display text-xl font-semibold text-deep" aria-label="Maison de Nacre, retour en haut">
          Maison de Nacre
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
          <a href="#methode" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Notre méthode</a>
          <a href="#pourquoi" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Pourquoi nous</a>
          <a href="#faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Questions</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="tel:+33669260817"
            className="hidden items-center gap-2 text-sm font-medium text-deep transition-colors hover:text-primary sm:inline-flex"
            aria-label="Appeler Maison de Nacre"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            06 69 26 08 17
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent/90"
          >
            Demander un échange
          </a>
        </div>
      </div>
    </header>
  );
}
