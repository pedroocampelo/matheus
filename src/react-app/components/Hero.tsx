import { useState } from "react";
import { Button } from "@/react-app/components/ui/button";
import { MessageCircle, Zap, Shield } from "lucide-react";
import ContactModal from "@/react-app/components/ContactModal";

export default function Hero() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <section id="inicio" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary leading-tight">
                Orientação jurídica completa & personalizada
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Atuamos com ética e excelência técnica em diversas áreas do Direito, oferecendo soluções personalizadas para pessoas e empresas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base" onClick={() => setIsContactModalOpen(true)}>
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </Button>
            </div>

            <ContactModal 
              open={isContactModalOpen} 
              onOpenChange={setIsContactModalOpen}
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">100% online</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">Atendimento ágil</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">Comunicação clara</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
