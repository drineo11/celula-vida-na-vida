import { MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-gradient-wine-dark text-primary-foreground mt-8">
      <div className="container py-8 sm:py-12">
        <div className="flex flex-col items-center text-center gap-6">
          <Logo variant="light" size="lg" />
          
          <div className="flex flex-col gap-2 text-sm opacity-90">
            <div className="flex items-center gap-2 justify-center">
              <MapPin size={16} />
              <span>Igreja Aliança – Vista Verde</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <MapPin size={16} />
              <span>São José dos Campos - SP</span>
            </div>
          </div>

          <div className="flex gap-4 pt-2">
            <a 
              href="#" 
              className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              aria-label="Telefone"
            >
              <Phone size={18} />
            </a>
          </div>

          <p className="text-xs opacity-60 pt-4">
            © {new Date().getFullYear()} Célula Vida na Vida. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
