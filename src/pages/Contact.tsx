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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://taniamendo.pt/send-mail.php", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Mensagem enviada com sucesso!",
          description: "Entraremos em contacto consigo brevemente.",
        });
        e.currentTarget.reset();
      } else {
        toast({
          title: "Erro ao enviar mensagem",
          description: "Tente novamente mais tarde.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erro de ligação",
        description: "Não foi possível contactar o servidor.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 text-background" style={{ background: "var(--hero-gradient)" }}>
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
                    <CardTitle>Ma
