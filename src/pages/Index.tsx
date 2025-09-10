import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calculator, Shield, Users, CheckCircle, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";

const Index = () => {
  const services = [
    {
      icon: Calculator,
      title: "Contabilidade",
      description: "Gestão completa da contabilidade da sua empresa com rigor e transparência.",
      features: ["Escrituração contabilística", "Declarações fiscais", "Relatórios mensais", "Consultoria fiscal"]
    },
    {
      icon: Shield,
      title: "Seguros",
      description: "Proteja o seu património e futuro com as melhores soluções de seguros.",
      features: ["Seguros de vida", "Seguros automóveis", "Seguros de habitação", "Seguros empresariais"]
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-light text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Consultoria de <span className="text-primary-foreground/90">Excelência</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Simplificamos a sua contabilidade e protegemos o seu futuro com soluções de seguros personalizadas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/contacto">Marcar Consulta Gratuita</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  <a href="tel:+351XXXXXXX">
                    <Phone className="mr-2 h-5 w-5" />
                    Ligar Agora
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Os Nossos Serviços</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Oferecemos soluções completas e personalizadas para particulares e empresas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                        <CardDescription className="text-base">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Users className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-6">Sobre a Adão Consultoria</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Com mais de 10 anos de experiência no mercado, a Adão Consultoria é a sua parceira de confiança 
                para todas as necessidades de contabilidade e seguros. A nossa equipa especializada oferece um 
                atendimento personalizado, garantindo que cada cliente recebe as melhores soluções para o seu 
                perfil específico.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-muted-foreground">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Clientes Satisfeitos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24h</div>
                  <div className="text-muted-foreground">Tempo de Resposta</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Agende uma consulta gratuita e descubra como podemos ajudar a optimizar as suas finanças 
              e proteger o seu futuro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contacto">
                  <Mail className="mr-2 h-5 w-5" />
                  Marcar Consulta
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="tel:+351XXXXXXX">
                  <Phone className="mr-2 h-5 w-5" />
                  +351 XXX XXX XXX
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;