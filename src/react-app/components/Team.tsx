import { Card, CardContent } from "@/react-app/components/ui/card";
import { Instagram } from "lucide-react";

const team = [
  {
    name: "Bruno Romero",
    oab: "OAB/CE 44.829",
     image: "/bruno romero.png",
    instagram: "https://www.instagram.com/bruno_rcl/"
  },
  {
    name: "Lorenzo Marcello",
    oab: "OAB/CE 48.638",
     image: "/lorenzo marcello.png",
    instagram: "https://www.instagram.com/lorenzofmarcello/"
  },
  {
    name: "Matheus Lucena",
    oab: "OAB/CE 44.968",
    image: "/matheus lucena.png",
    instagram: "https://www.instagram.com/matheuslucenaadv/"
  }
];

export default function Team() {
  return (
    <section id="equipe" className="py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Conheça a equipe que irá te orientar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Profissionais experientes e comprometidos com a defesa dos seus direitos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="border-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {member.oab}
                </p>
                <div className="flex items-center justify-center gap-2">
                  <a 
                     href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                    aria-label={`Instagram de ${member.name}`}
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
