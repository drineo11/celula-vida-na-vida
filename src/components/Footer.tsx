import { Logo } from "./Logo";
import aliancaLogo from "@/assets/alianca-logo-white.png";

export function Footer() {
  return (
    <footer className="bg-gradient-wine-dark text-primary-foreground mt-8">
      <div className="container py-4 sm:py-6">
        {/* Mobile: stacked layout */}
        <div className="flex flex-col items-center text-center gap-4 md:hidden">
          <img 
            src={aliancaLogo} 
            alt="Igreja Aliança Cristã & Missionária - Vista Verde" 
            className="h-14 w-auto"
          />
          <Logo variant="light" size="lg" />
          <p className="text-xs opacity-60">
            © {new Date().getFullYear()} Célula Vida na Vida. Todos os direitos reservados.
          </p>
        </div>

        {/* Desktop: logos on corners */}
        <div className="hidden md:flex items-center justify-between">
          <img 
            src={aliancaLogo} 
            alt="Igreja Aliança Cristã & Missionária - Vista Verde" 
            className="h-16 w-auto"
          />
          <p className="text-xs opacity-60">
            © {new Date().getFullYear()} Célula Vida na Vida. Todos os direitos reservados.
          </p>
          <Logo variant="light" size="lg" />
        </div>
      </div>
    </footer>
  );
}
