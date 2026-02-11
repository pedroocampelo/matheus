import { Briefcase, ShoppingCart, Home, Scale, Building2, Coins } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/react-app/components/ui/card";

const areas = [
  {
    icon: Scale,
    title: "Direito Cível",
    description: "Fez um contrato ruim ou está sendo cobrado errado? Sofreu prejuízo por danos? Saiba como ter respaldo legal."
  },
  {
    icon: ShoppingCart,
    title: "Direito do Consumidor",
    description: "Passou por cobrança indevida ou comprou algo que não funciona como prometido? Você pode agir para reconquistar seus direitos."
  },
  {
    icon: Building2,
    title: "Direito Empresarial",
    description: "Tem empresa ou vai abrir negócio? Evite problemas societários, contratos mal feitos ou riscos legais que podem comprometer seu crescimento."
  },
  {
    icon: Home,
    title: "Direito Imobiliário",
    description: "Comprou imóvel com documentação irregular ou tem conflito de locação? Conte com orientação especializada para evitar prejuízos."
  },
  {
    icon: Coins,
    title: "Direito Previdenciário",
    description: "Precisa solicitar aposentadoria ou benefício do INSS? Se afastou por doença ou tem dúvidas sobre pensão ou LOAS? Tenha o amparo necessário para garantir seus benefícios com segurança."
  },
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    description: "Foi demitido e não recebeu tudo? Trabalha sem registro ou com abusos de jornada? Assegure o cumprimento da lei e garanta o que é seu por direito."
  }
];

export default function PracticeAreas() {
  return (
    <section id="areas" className="py-16 lg:py-20 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos suporte jurídico completo em diversas áreas do Direito
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {areas.map((area, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {area.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
