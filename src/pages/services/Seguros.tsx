import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, CheckCircle, Phone, Mail, Home, Car, Heart, Building } from "lucide-react";
import Header from "@/components/Header";

const Seguros = () => {
  return (
    <>
      <Header />
      <main>

        {/* Services Details */}
        <section className="py-20" style={{backgroundColor: 'hsl(var(--section-bg))'}}>
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Proteção Completa para Si e Sua Empresa</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Oferecemos uma gama completa de seguros para empresas e particulares, 
                  com análise de risco personalizada.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Mediação de seguros para empresas e particulares</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Seguros de crédito e caução empresarial</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Análise e consultoria de risco</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Gestão de sinistros e acompanhamento</span>
                  </li>
                </ul>
              </div>
              <div className="bg-background rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Home className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Habitação</h3>
                    <p className="text-sm text-muted-foreground">Multirriscos</p>
                  </div>
                  <div className="text-center">
                    <Car className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Automóvel</h3>
                    <p className="text-sm text-muted-foreground">Proteção total</p>
                  </div>
                  <div className="text-center">
                    <Heart className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Saúde</h3>
                    <p className="text-sm text-muted-foreground">Vida e risco</p>
                  </div>
                  <div className="text-center">
                    <Building className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Empresarial</h3>
                    <p className="text-sm text-muted-foreground">Multirriscos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Services Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Home className="h-5 w-5 text-primary" />
                    <span>Seguros Particulares</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Multirriscos habitação</li>
                    <li>• Seguro automóvel</li>
                    <li>• Seguro de saúde</li>
                    <li>• Seguro de vida</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building className="h-5 w-5 text-primary" />
                    <span>Seguros Empresariais</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Multirriscos empresariais</li>
                    <li>• Responsabilidade civil</li>
                    <li>• Acidentes de trabalho</li>
                    <li>• Seguro de crédito</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>Gestão de Risco</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Análise de risco</li>
                    <li>• Consultoria especializada</li>
                    <li>• Gestão de sinistros</li>
                    <li>• Acompanhamento de apólices</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Types of Insurance */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Tipos de Seguro Disponíveis</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Encontre a proteção ideal para as suas necessidades específicas.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-background rounded-xl shadow-sm">
                <Home className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Multirriscos Habitação</h3>
                <p className="text-sm text-muted-foreground">Proteja a sua casa e bens pessoais</p>
              </div>
              <div className="text-center p-6 bg-background rounded-xl shadow-sm">
                <Car className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Seguro Automóvel</h3>
                <p className="text-sm text-muted-foreground">Cobertura completa para o seu veículo</p>
              </div>
              <div className="text-center p-6 bg-background rounded-xl shadow-sm">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Seguro de Saúde</h3>
                <p className="text-sm text-muted-foreground">Cuidados médicos de qualidade</p>
              </div>
              <div className="text-center p-6 bg-background rounded-xl shadow-sm">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Seguro Empresarial</h3>
                <p className="text-sm text-muted-foreground">Proteção para o seu negócio</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Precisa de Proteção Personalizada?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contacte-nos para uma simulação gratuita e encontre o seguro ideal para si.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contacto">
                  <Mail className="mr-2 h-5 w-5" />
                  Solicitar Simulação
                </Link>
              </Button>
              <Button asChild size="lg" variant="white-outline">
                <a href="tel:+351271571234">
                  <Phone className="mr-2 h-5 w-5" />
                  +351 271 571 234
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Seguros;