import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import logoImg from "@/assets/logo.jpg";

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm" style={{backgroundColor: 'hsl(var(--nav-bg))', borderBottom: '1px solid hsl(var(--primary) / 0.2)'}}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-background rounded-lg p-1 shadow-sm">
            <img src={logoImg} alt="Tânia Mendo Lda" className="w-full h-full object-contain rounded" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Tânia Mendo Lda</h1>
            <p className="text-xs text-white/80">Gestão & Contabilidade | Seguros</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`font-medium transition-colors hover:text-white/80 ${
              location.pathname === "/" ? "text-white" : "text-white/70"
            }`}
          >
            Início
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button className="font-medium text-white/70 hover:text-white/80 transition-colors cursor-pointer">
              Serviços
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <Link
                  to="/servicos/contabilidade"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Contabilidade e Fiscalidade
                </Link>
                <Link
                  to="/servicos/gestao"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Gestão e Consultoria
                </Link>
                <Link
                  to="/servicos/seguros"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Seguros e Mediação
                </Link>
                <Link
                  to="/servicos/credito"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Crédito e Financiamento
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/contacto"
            className={`font-medium transition-colors hover:text-white/80 ${
              location.pathname === "/contacto" ? "text-white" : "text-white/70"
            }`}
          >
            Contacto
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-4 text-sm text-white/70">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+351 271 571 234</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>geral@taniamendo.pt</span>
            </div>
          </div>
          <Button asChild variant="secondary">
            <Link to="/contacto">Marcar Reunião</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;