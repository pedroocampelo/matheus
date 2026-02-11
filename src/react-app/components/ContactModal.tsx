import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/react-app/components/ui/dialog";
import { Button } from "@/react-app/components/ui/button";
import { Input } from "@/react-app/components/ui/input";
import { Label } from "@/react-app/components/ui/label";
import { MessageCircle, Loader2 } from "lucide-react";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !phone.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Google Sheets
      await fetch("https://script.google.com/macros/s/AKfycbzFGhb2L8ib66bdWPoUv4sVVVDkpKZb-Gcf0KBk2MR_M3Uo3bHNGRawKSSr9aK27RaXJA/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          timestamp: new Date().toISOString(),
        }),
      });

      // Open WhatsApp
      const whatsappNumber = "5585998017120";
      const message = encodeURIComponent(`Olá! Meu nome é ${name} e meu telefone é ${phone}. Gostaria de obter orientação jurídica.`);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
      
      window.open(whatsappUrl, "_blank");
      
      // Reset form and close modal
      setName("");
      setPhone("");
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

          <Button 
            type="submit" 
            className="w-full" 
            size="lg"
            disabled={isSubmitting || !name.trim() || !phone.trim()}
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
