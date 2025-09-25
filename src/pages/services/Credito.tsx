import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CreditCard, CheckCircle, Phone, Mail, Home, DollarSign, TrendingUp, Calculator } from "lucide-react";
import Header from "@/components/Header";

const Credito = () => {
  return (
    <>
      <Header />
      <main>

        {/* Authorization Badge */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center space-x-3 bg-background px-6 py-3 rounded-full shadow-lg">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-sm font-medium">Intermediária de Crédito autorizada pelo Banco de Portugal nº 007771</span>
            </div>
          </div>
        </section>

        {/* Services Details */}
        <section className="py-20" style={{backgroundColor: 'hsl(var(--section-bg))'}}>
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Soluções de Crédito Personalizadas</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Como intermediários autorizados, facilitamos o acesso a crédito e 
                  encontramos as melhores soluções financeiras para si.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Crédito habitação, consumo e consolidado</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Intermediação com instituições financeiras</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Consultoria especializada em financiamento</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Crédito empresarial e operacional</span>
                  </li>
                </ul>
              </div>
              <div className="bg-background rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Home className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Habitação</h3>
                    <p className="text-sm text-muted-foreground">Crédito casa</p>
                  </div>
                  <div className="text-center">
                    <DollarSign className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Consumo</h3>
                    <p className="text-sm text-muted-foreground">Pessoal</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Empresarial</h3>
                    <p className="text-sm text-muted-foreground">Negócios</p>
                  </div>
                  <div className="text-center">
                    <Calculator className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Consolidado</h3>
                    <p className="text-sm text-muted-foreground">Reestruturação</p>
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
                    <span>Crédito Habitação</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Primeira habitação</li>
                    <li>• Segunda habitação</li>
                    <li>• Construção e remodelação</li>
                    <li>• Transferência de crédito</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <span>Crédito Pessoal</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Crédito ao consumo</li>
                    <li>• Crédito automóvel</li>
                    <li>• Crédito consolidado</li>
                    <li>• Cartões de crédito</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span>Crédito Empresarial</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Capital de giro</li>
                    <li>• Financiamento expansão</li>
                    <li>• Crédito operacional</li>
                    <li>• Leasing e renting</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Como Funciona o Processo</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Simplificamos todo o processo de obtenção de crédito para si.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-semibold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Consulta Inicial</h3>
                <p className="text-sm text-muted-foreground">Analisamos as suas necessidades</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-semibold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Simulação</h3>
                <p className="text-sm text-muted-foreground">Calculamos as melhores opções</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-semibold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Intermediação</h3>
                <p className="text-sm text-muted-foreground">Negociamos com os bancos</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-semibold">
                  4
                </div>
                <h3 className="font-semibold mb-2">Aprovação</h3>
                <p className="text-sm text-muted-foreground">Acompanhamos até ao final</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20" style={{backgroundColor: 'hsl(var(--section-bg))'}}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Vantagens de Trabalhar Connosco</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sem Custos</h3>
                <p className="text-muted-foreground">
                  O nosso serviço não tem qualquer custo para si.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Melhores Condições</h3>
                <p className="text-muted-foreground">
                  Negociamos as melhores taxas e condições do mercado.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Acompanhamento Total</h3>
                <p className="text-muted-foreground">
                  Estamos consigo em todo o processo até à aprovação.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Precisa de Financiamento?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contacte-nos hoje mesmo para uma simulação gratuita e sem compromisso.
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

export default Credito;