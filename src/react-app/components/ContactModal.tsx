import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/react-app/components/ui/dialog";
import { Button } from "@/react-app/components/ui/button";
import { Input } from "@/react-app/components/ui/input";
import { Label } from "@/react-app/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/react-app/components/ui/select";
import { MessageCircle, Loader2 } from "lucide-react";

const practiceAreas = [
  "Direito Trabalhista",
  "Direito do Consumidor",
  "Direito Imobiliário",
  "Direito Cível",
  "Direito Empresarial",
  "Direito Previdenciário"
];

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [areaOfInterest, setAreaOfInterest] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !phone.trim() || !areaOfInterest) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Google Sheets
      await fetch("https://script.google.com/macros/s/AKfycbz32vwxlIgC6WEJRn-CN5MtwJ6R-AczVU-1WCKgjM7SOT-ItrNuvgQnf-4wo0AsXUYTpg/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          areaOfInterest,
          timestamp: new Date().toISOString(),
        }),
      });

      // Open WhatsApp
      const whatsappNumber = "5585998017120";
      const message = encodeURIComponent(`Olá! Meu nome é ${name} e meu telefone é ${phone}. Tenho interesse em ${areaOfInterest}.`);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
      
      window.open(whatsappUrl, "_blank");
      
      // Reset form and close modal
      setName("");
      setPhone("");
      setAreaOfInterest("");
      onOpenChange(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Entre em contato</DialogTitle>
          <DialogDescription>
            Preencha seus dados para iniciar uma conversa no WhatsApp
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone com DDD</Label>
            <Input
              id="phone"
              placeholder="(85) 99999-9999"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="area">Qual sua área de interesse?</Label>
            <Select 
              value={areaOfInterest} 
              onValueChange={setAreaOfInterest}
              disabled={isSubmitting}
              required
            >
              <SelectTrigger id="area">
                <SelectValue placeholder="Selecione uma área" />
              </SelectTrigger>
              <SelectContent>
                {practiceAreas.map((area) => (
                  <SelectItem key={area} value={area}>
                    {area}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            size="lg"
            disabled={isSubmitting || !name.trim() || !phone.trim() || !areaOfInterest}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <MessageCircle className="w-5 h-5 mr-2" />
                Continuar no WhatsApp
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
