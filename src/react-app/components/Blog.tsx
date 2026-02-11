import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/react-app/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const posts = [
  {
    title: "Direitos Trabalhistas: O que você precisa saber",
    snippet: "Conheça seus principais direitos como trabalhador e entenda quando procurar orientação jurídica para garantir que sejam respeitados.",
    date: "15 de Dezembro, 2024",
    slug: "direitos-trabalhistas"
  },
  {
    title: "Defesa do Consumidor: Como agir em casos de cobrança indevida",
    snippet: "Saiba quais são seus direitos ao identificar cobranças indevidas e os passos para buscar reparação e restituição de valores.",
    date: "10 de Dezembro, 2024",
    slug: "defesa-do-consumidor"
  },
  {
    title: "Aposentadoria: Quando solicitar a revisão do benefício",
    snippet: "Entenda em quais situações é possível solicitar a revisão de aposentadoria e como isso pode aumentar o valor do seu benefício.",
    date: "5 de Dezembro, 2024",
    slug: "aposentadoria-revisao"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            O que a Lei diz?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Artigos e orientações para mantê-lo informado sobre seus direitos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.map((post, index) => (
             <Link key={index} to={`/blog/${post.slug}`} onClick={() => window.scrollTo(0, 0)}>
              <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-primary leading-tight">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.snippet}
                  </p>
                  <span className="text-primary font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all">
                    Ler artigo
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
