import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/react-app/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

type BlogMeta = {
  title: string;
  snippet: string;
  date: string; // ex: "19 de fevereiro de 2026"
  slug: string; // precisa bater com o BlogPost.tsx
};

/**
 * Para adicionar um novo post:
 * 1) Adicione um item aqui (metadados: title/snippet/date/slug)
 * 2) Adicione o conteúdo completo no BlogPost.tsx com o MESMO slug
 */
const posts: BlogMeta[] = [
  {
    title: "Seja bem-vindo ao nosso Blog Jurídico",
    snippet:
      "Este blog nasce para conversar sobre Direito de forma clara, acessível e honesta — sem juridiquês desnecessário.",
    date: "19 de fevereiro de 2026",
    slug: "seja-bem-vindo-ao-nosso-blog-juridico",
  },
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

        {/* Mantém seu layout escalável (grid). Com 1 post fica centralizado. */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} onClick={() => window.scrollTo(0, 0)}>
              <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-primary leading-tight">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm">{post.date}</CardDescription>
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
