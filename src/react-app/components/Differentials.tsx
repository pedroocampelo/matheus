import { MonitorSmartphone, Scale, Users, MessageSquare } from "lucide-react";

const differentials = [
  {
    icon: MonitorSmartphone,
    title: "Atendimento 100% online",
    description: "Praticidade e comodidade para resolver suas questões jurídicas de qualquer lugar, com segurança e eficiência."
  },
  {
    icon: Scale,
    title: "Atuação em diversas áreas",
    description: "Equipe multidisciplinar preparada para atender diferentes demandas do direito, oferecendo soluções completas."
  },
  {
    icon: MessageSquare,
    title: "Comunicação clara e transparente",
    description: "Mantemos você informado em todas as etapas, com linguagem acessível e respostas rápidas."
  },
  {
    icon: Users,
    title: "Equipe experiente & especializada",
    description: "Profissionais qualificados e atualizados com as melhores práticas do mercado jurídico."
  }
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-16 lg:py-20 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Por que você pode contar conosco?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nosso compromisso é oferecer o melhor atendimento jurídico com excelência e dedicação
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {differentials.map((item, index) => (
            <div key={index} className="flex gap-4 p-6 bg-card rounded-xl border border-border">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
