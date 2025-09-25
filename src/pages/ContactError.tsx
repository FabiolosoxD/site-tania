import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { XCircle, ArrowLeft, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";

const ContactError = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <XCircle className="h-8 w-8 text-red-600" />
            </div>
            <CardTitle className="text-2xl text-red-700">Erro no Envio</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Ocorreu um erro ao enviar a sua mensagem. Por favor, tente novamente ou contacte-nos diretamente.
            </p>
            <div className="bg-muted p-4 rounded-lg text-sm text-left">
              <h4 className="font-semibold mb-2">Contactos Diretos:</h4>
              <div className="space-y-1">
                <p><Phone className="inline h-4 w-4 mr-1" /> +351 271 571 234</p>
                <p><Mail className="inline h-4 w-4 mr-1" /> geral@taniamendo.pt</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button asChild className="flex-1">
                <Link to="/contacto">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Tentar Novamente
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

export default ContactError;