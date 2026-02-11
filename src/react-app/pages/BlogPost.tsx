import { useParams, Link } from "react-router";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import { Button } from "@/react-app/components/ui/button";
import { ArrowLeft } from "lucide-react";

const blogPosts: Record<string, { title: string; date: string; content: string; image?: string; imageCaption?: string }> = {
  "direitos-trabalhistas": {
    title: "Direitos Trabalhistas: O que você precisa saber",
    date: "15 de Dezembro, 2024",
    content: "Conteúdo do artigo sobre direitos trabalhistas será adicionado aqui.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&auto=format&fit=crop",
    imageCaption: "Orientação jurídica especializada garante que seus direitos trabalhistas sejam respeitados"
  },
  "defesa-do-consumidor": {
    title: "Defesa do Consumidor: Como agir em casos de cobrança indevida",
    date: "10 de Dezembro, 2024",
    content: "Conteúdo do artigo sobre defesa do consumidor será adicionado aqui."
  },
  "aposentadoria-revisao": {
    title: "Aposentadoria: Quando solicitar a revisão do benefício",
    date: "5 de Dezembro, 2024",
    content: "Conteúdo do artigo sobre aposentadoria será adicionado aqui."
  }
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-primary mb-4">Artigo não encontrado</h1>
            <Link to="/">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <Link to="/#blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para o blog
            </Button>
          </Link>
          
          <article className="prose prose-lg max-w-none">
            <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
            <h1 className="text-4xl font-bold text-primary mb-8">{post.title}</h1>
            
            {post.image && (
              <figure className="mb-8">
                <img 
                  src={post.image} 
                  alt={post.imageCaption || post.title}
                  className="w-full rounded-lg shadow-lg"
                />
                {post.imageCaption && (
                  <figcaption className="text-sm text-muted-foreground mt-3 text-center italic">
                    {post.imageCaption}
                  </figcaption>
                )}
              </figure>
            )}
            
            <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
