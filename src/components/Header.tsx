import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">AC</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Adão Consultoria</h1>
            <p className="text-xs text-muted-foreground">Contabilidade & Seguros</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`font-medium transition-colors hover:text-primary ${
              location.pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Início
          </Link>
          <Link
            to="/contacto"
            className={`font-medium transition-colors hover:text-primary ${
              location.pathname === "/contacto" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Contacto
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+351 XXX XXX XXX</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>geral@adaoconsultoria.pt</span>
            </div>
          </div>
          <Button asChild>
            <Link to="/contacto">Marcar Reunião</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;