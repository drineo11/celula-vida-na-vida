import { Link } from "react-router-dom";
import { Home, CalendarDays } from "lucide-react";
import { Logo } from "./Logo";

export function Header() {
  const navLinkClass = "flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-primary-foreground/90 hover:text-primary-foreground hover:bg-white/10 transition-all duration-200 cursor-pointer";

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-wine shadow-wine">
      <div className="container flex h-14 sm:h-16 items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo variant="light" size="md" />
        </Link>
        <nav className="flex items-center gap-1">
          <Link to="/oikos" className={navLinkClass} aria-label="Ir para Oikós">
            <Home className="w-4 h-4" />
            <span>Oikós</span>
          </Link>
          <Link to="/escala" className={navLinkClass} aria-label="Ir para Escala">
            <CalendarDays className="w-4 h-4" />
            <span>Escala</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
