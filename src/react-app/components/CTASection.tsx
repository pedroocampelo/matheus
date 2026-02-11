import { useState } from "react";
import { Button } from "@/react-app/components/ui/button";
import { MessageCircle } from "lucide-react";
import ContactModal from "@/react-app/components/ContactModal";

export default function CTASection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-primary rounded-2xl p-8 lg:p-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Identificou alguma dessas situações?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Cada caso é único e merece atenção personalizada. 
            Entre em contato e receba orientação especializada para a sua situação.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 text-base font-semibold"
            onClick={() => setIsContactModalOpen(true)}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Iniciar conversa
          </Button>

          <ContactModal 
            open={isContactModalOpen} 
            onOpenChange={setIsContactModalOpen}
          />
        </div>
      </div>
    </section>
  );
}
