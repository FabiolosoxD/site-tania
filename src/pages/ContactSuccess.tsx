import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, Home, Phone } from "lucide-react";
import Header from "@/components/Header";

const ContactSuccess = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-green-700">Mensagem Enviada!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              A sua mensagem foi enviada com sucesso. Entraremos em contacto consigo brevemente.
            </p>
            <p className="text-sm text-muted-foreground">
              Tempo de resposta: <strong>até 24 horas</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button asChild className="flex-1">
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Voltar ao Início
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href="tel:+351271571234">
                  <Phone className="mr-2 h-4 w-4" />
                  Ligar Agora
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
};

export default ContactSuccess;