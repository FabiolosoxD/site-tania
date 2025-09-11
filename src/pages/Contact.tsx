import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contacto consigo brevemente.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 text-background" style={{background: 'var(--hero-gradient)'}}>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Entre em Contacto</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto text-foreground">
              Pronto para simplificar a sua contabilidade e proteger o seu futuro com seguros adequados?
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Marque a Sua Consulta</CardTitle>
                    <CardDescription>
                      Preencha o formulário e entraremos em contacto para agendar uma reunião.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Nome</Label>
                          <Input id="firstName" placeholder="João" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Apelido</Label>
                          <Input id="lastName" placeholder="Silva" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="joao@example.com" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input id="phone" type="tel" placeholder="+351 XXX XXX XXX" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="service">Serviço de Interesse</Label>
                        <select 
                          id="service" 
                          className="w-full p-2 border border-input rounded-md bg-background"
                          required
                        >
                          <option value="">Selecione um serviço</option>
                          <option value="contabilidade">Contabilidade</option>
                          <option value="seguros">Seguros</option>
                          <option value="ambos">Contabilidade e Seguros</option>
                          <option value="outro">Outro</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Mensagem</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Descreva brevemente as suas necessidades..."
                          className="min-h-[100px]"
                        />
                      </div>
                      
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "A enviar..." : "Enviar Mensagem"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Informações de Contacto</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Morada</h3>
                        <p className="text-muted-foreground">
                          Quinta da Granja N.º13 1ºDrt<br />
                          6350-226 Almeida<br />
                          Portugal
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Telefone</h3>
                        <p className="text-muted-foreground">+351 271 571 234</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <div className="text-muted-foreground">
                          <p>Geral: taniamendo83692@gmail.com</p>
                          <p>Seguros: seguroscomalma@gmail.com</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Horário de Funcionamento</h3>
                        <div className="text-muted-foreground">
                          <p>Segunda a Sexta: 09:00 - 18:00</p>
                          <p>Sábado: 09:00 - 13:00</p>
                          <p>Domingo: Fechado</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">Porquê Escolher-nos?</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Mais de 10 anos de experiência</li>
                      <li>✓ Atendimento personalizado</li>
                      <li>✓ Consultoria especializada</li>
                      <li>✓ Primeira consulta gratuita</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;