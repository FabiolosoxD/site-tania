import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calculator, Shield, Users, CheckCircle, Phone, Mail, TrendingUp, CreditCard } from "lucide-react";
import Header from "@/components/Header";
import heroBgImg from "@/assets/hero-bg.jpg";

const Index = () => {
  const services = [
    {
      icon: Calculator,
      title: "Contabilidade e Fiscalidade",
      description: "Gestão completa da contabilidade e fiscalidade da sua empresa.",
      features: [
        "Escrituração contabilística",
        "Declarações fiscais (IVA, IRC, IRS)",
        "Planeamento fiscal",
        "Gestão de tesouraria",
        "Contabilidade de custos / análises internas para melhoria de margens"
      ]
    },
    {
      icon: TrendingUp,
      title: "Gestão e Consultoria",
      description: "Apoio especializado na gestão operacional e financeira do seu negócio.",
      features: [
        "Apoio à gestão operacional e financeira",
        "Relatórios de desempenho, orçamentos, forecasting",
        "Controlo de gestão & KPI's",
        "Recursos Humanos: processamento salarial, segurança social, gestão de colaboradores"
      ]
    },
    {
      icon: Shield,
      title: "Seguros e Mediação de Risco",
      description: "Proteja o seu património com as melhores soluções de seguros e gestão de risco.",
      features: [
        "Mediação de seguros para empresas e particulares (multirriscos, saúde, vida risco, responsabilidade civil, acidentes de trabalho, etc.)",
        "Seguros de crédito, seguro de caução, seguro multirriscos empresariais",
        "Análise e consultoria de risco para minimizar perdas (ex: clientes que pagam com atraso, incumprimentos)",
        "Gestão de sinistros e acompanhamento de apólices"
      ]
    },
    {
      icon: CreditCard,
      title: "Crédito / Intermediação Financeira",
      description: "Facilitamos o acesso a crédito e soluções financeiras adaptadas às suas necessidades.",
      features: [
        "Crédito habitação, crédito ao consumo, crédito consolidado",
        "Intermediação de crédito: atuar como intermediário entre cliente e instituições financeiras",
        "Consultoria de crédito: avaliar as melhores opções de financiamento, custos, impacto no fluxo de caixa",
        "Facilitar o acesso a crédito e soluções financeiras para empresas (operacional, capital de giro, financiamento para expansão)"
      ]
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-foreground via-foreground to-muted-foreground text-background py-20 overflow-hidden" style={{background: 'var(--hero-gradient)'}}>
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Gestão & Contabilidade de <span style={{background: 'var(--gold-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}} className="font-bold">Excelência</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 text-foreground">
                Especialista em gestão, contabilidade, seguros e intermediação de crédito com autorização do Banco de Portugal
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/contacto">Marcar Consulta Gratuita</Link>
                </Button>
                <Button asChild size="lg" className="border border-primary/30 bg-transparent text-primary hover:bg-primary/10 hover:border-primary">
                  <a href="tel:+351271571234">
                    <Phone className="mr-2 h-5 w-5" />
                    +351 271 571 234
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Decorative geometric image */}
          <div className="absolute bottom-0 left-0 w-40 h-40 opacity-20 pointer-events-none z-0">
            <img 
              src={heroBgImg} 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20" style={{backgroundColor: 'hsl(var(--section-bg))'}}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Como Podemos Ajudar</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Exemplos práticos dos nossos serviços mais procurados
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1" style={{boxShadow: 'var(--shadow-elegant)'}}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Calculator className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Abertura de Empresa</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Criação completa da sua empresa, desde a constituição até à primeira declaração fiscal.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1" style={{boxShadow: 'var(--shadow-elegant)'}}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <CreditCard className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Simulação de Crédito</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Análise gratuita das melhores opções de crédito habitação, pessoal ou empresarial.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1" style={{boxShadow: 'var(--shadow-elegant)'}}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Simulação de Seguro</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Comparação de seguros auto, habitação, saúde e vida para encontrar a melhor proteção.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1" style={{boxShadow: 'var(--shadow-elegant)'}}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Relatórios Financeiros</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Análises mensais de desempenho e indicadores para melhorar a gestão da sua empresa.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1" style={{boxShadow: 'var(--shadow-elegant)'}}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Processamento Salarial</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Gestão completa de salários, segurança social e obrigações laborais.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1" style={{boxShadow: 'var(--shadow-elegant)'}}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Apoio Fiscal Urgente</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Resolução rápida de questões fiscais e apoio em inspeções da autoridade tributária.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">
                Estes são apenas alguns exemplos. Oferecemos soluções completas em todas as áreas.
              </p>
              <Button asChild size="lg">
                <Link to="/contacto">Ver Todos os Serviços</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Users className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-6">Sobre a Tânia Mendo Lda</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Intermediária de Crédito autorizada pelo Banco de Portugal nº 007771, a Tânia Mendo Lda é a sua 
                parceira de confiança para todas as necessidades de gestão contabilística e seguros. Oferecemos 
                um atendimento personalizado e especializado, garantindo que cada cliente recebe as melhores 
                soluções para o seu perfil específico.
              </p>
              <p className="text-sm text-muted-foreground mb-4 font-medium">
                Intermediária Crédito autorizada pelo Banco de Portugal n° 007771
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
        <section className="py-20 text-background" style={{background: 'var(--hero-gradient)'}}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Pronto para Começar?
            </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto text-foreground">
                Agende uma consulta gratuita e descubra como podemos ajudar a optimizar a sua gestão 
                contabilística e proteger o seu futuro com os melhores seguros.
              </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contacto">
                  <Mail className="mr-2 h-5 w-5" />
                  Marcar Consulta
                </Link>
              </Button>
                <Button asChild size="lg" className="border border-primary/30 bg-transparent text-primary hover:bg-primary/10 hover:border-primary">
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

export default Index;