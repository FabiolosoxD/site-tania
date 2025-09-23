import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { TrendingUp, CheckCircle, Phone, Mail, BarChart3, Target, Users, Briefcase } from "lucide-react";
import Header from "@/components/Header";

const Gestao = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-2xl mb-6" style={{boxShadow: 'var(--shadow-gold)'}}>
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Gestão e <span style={{background: 'var(--gold-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Consultoria</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Apoio especializado na gestão operacional e financeira do seu negócio para maximizar resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/contacto">Solicitar Consultoria</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="tel:+351271571234">
                    <Phone className="mr-2 h-5 w-5" />
                    +351 271 571 234
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Details */}
        <section className="py-20" style={{backgroundColor: 'hsl(var(--section-bg))'}}>
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Consultoria Empresarial Especializada</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Oferecemos soluções de gestão personalizadas que ajudam a sua empresa 
                  a crescer de forma sustentável e eficiente.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Apoio à gestão operacional e financeira</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Relatórios de desempenho e orçamentos</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Controlo de gestão & KPI's</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Gestão de recursos humanos completa</span>
                  </li>
                </ul>
              </div>
              <div className="bg-background rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Relatórios</h3>
                    <p className="text-sm text-muted-foreground">Análise detalhada</p>
                  </div>
                  <div className="text-center">
                    <Target className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Objetivos</h3>
                    <p className="text-sm text-muted-foreground">Metas claras</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">RH</h3>
                    <p className="text-sm text-muted-foreground">Gestão de pessoas</p>
                  </div>
                  <div className="text-center">
                    <Briefcase className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Estratégia</h3>
                    <p className="text-sm text-muted-foreground">Planeamento</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Services Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <span>Análise Financeira</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Relatórios de desempenho</li>
                    <li>• Análise de rentabilidade</li>
                    <li>• Forecasting financeiro</li>
                    <li>• Orçamentos anuais</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-primary" />
                    <span>Controlo de Gestão</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Definição de KPI's</li>
                    <li>• Dashboards executivos</li>
                    <li>• Análise de desvios</li>
                    <li>• Planos de ação</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Recursos Humanos</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Processamento salarial</li>
                    <li>• Segurança social</li>
                    <li>• Gestão de colaboradores</li>
                    <li>• Contratos de trabalho</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Benefícios da Nossa Consultoria</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Descubra como podemos ajudar a sua empresa a alcançar novos patamares de sucesso.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Crescimento Sustentável</h3>
                <p className="text-muted-foreground">
                  Estratégias personalizadas para um crescimento sólido e duradouro.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Objetivos Claros</h3>
                <p className="text-muted-foreground">
                  Definição de metas realistas e planos de ação eficazes.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expertise Especializada</h3>
                <p className="text-muted-foreground">
                  Conhecimento profundo em gestão empresarial e financeira.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Pronto para Transformar o Seu Negócio?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Agende uma consulta gratuita e descubra como podemos ajudar a sua empresa a crescer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contacto">
                  <Mail className="mr-2 h-5 w-5" />
                  Marcar Consulta
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
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

export default Gestao;