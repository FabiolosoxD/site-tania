import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calculator, CheckCircle, Phone, Mail, FileText, PieChart, Receipt, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import bgAccounting from "@/assets/bg-accounting.jpg";

const Contabilidade = () => {
  return (
    <>
      <Header />
      <main>

        {/* Services Details */}
        <section className="py-20 relative" style={{backgroundColor: 'hsl(var(--section-bg))'}}>
          {/* Background Image */}
          <div 
            className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
            style={{backgroundImage: `url(${bgAccounting})`}}
          ></div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Serviços Completos de Contabilidade</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Oferecemos uma gama completa de serviços contabilísticos e fiscais, 
                  adaptados às necessidades específicas da sua empresa.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Escrituração contabilística rigorosa e atualizada</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Declarações fiscais (IVA, IRC, IRS) dentro dos prazos</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Planeamento fiscal estratégico</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Gestão de tesouraria e fluxos de caixa</span>
                  </li>
                </ul>
              </div>
              <div className="bg-background rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <FileText className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Documentação</h3>
                    <p className="text-sm text-muted-foreground">Organização completa</p>
                  </div>
                  <div className="text-center">
                    <PieChart className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Análises</h3>
                    <p className="text-sm text-muted-foreground">Relatórios detalhados</p>
                  </div>
                  <div className="text-center">
                    <Receipt className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Fiscalidade</h3>
                    <p className="text-sm text-muted-foreground">Cumprimento legal</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Otimização</h3>
                    <p className="text-sm text-muted-foreground">Melhores resultados</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Services Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <span>Escrituração</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Lançamentos contabilísticos</li>
                    <li>• Balancetes mensais</li>
                    <li>• Reconciliação bancária</li>
                    <li>• Controlo de inventários</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Receipt className="h-5 w-5 text-primary" />
                    <span>Declarações Fiscais</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Declaração periódica de IVA</li>
                    <li>• Declaração anual de IRC</li>
                    <li>• Modelo 22 e anexos</li>
                    <li>• Informação empresarial simplificada</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <PieChart className="h-5 w-5 text-primary" />
                    <span>Análise de Custos</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Contabilidade analítica</li>
                    <li>• Análise de margens</li>
                    <li>• Centros de custo</li>
                    <li>• Rentabilidade por produto</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Precisa de Apoio Contabilístico?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contacte-nos hoje mesmo e descubra como podemos simplificar a gestão contabilística da sua empresa.
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

export default Contabilidade;