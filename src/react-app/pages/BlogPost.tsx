import { useParams, Link, useNavigate } from "react-router";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import { Button } from "@/react-app/components/ui/button";
import { ArrowLeft } from "lucide-react";

type BlogPostData = {
  title: string;
  date: string;
  content: string;
  image?: string;
  imageCaption?: string;
};

/**
 * Para adicionar um novo post:
 * 1) Crie uma nova chave aqui com o slug (ex: "meu-novo-post")
 * 2) Preencha title/date/content (e image opcional)
 * 3) Adicione o MESMO slug no array `posts` do Blog.tsx
 */
const blogPosts: Record<string, BlogPostData> = {
  "seja-bem-vindo-ao-nosso-blog-juridico": {
    title: "Seja bem-vindo ao nosso Blog Jurídico",
    date: "19 de fevereiro de 2026",
    content: `Se você já se sentiu perdido ao tentar entender um contrato, uma decisão judicial ou até mesmo uma notícia sobre uma nova lei, saiba que isso é comum. O Direito está presente no nosso dia a dia, mas muitas vezes é tratado de forma distante e cheio de termos complicados. Este blog nasce para simplificar essa realidade e aproximar o Direito das pessoas.

Aqui vamos falar, de forma clara e direta, sobre temas jurídicos que fazem parte da vida cotidiana e sobre dúvidas recorrentes, como: o que é o BPC/LOAS e quem tem direito? Trabalhei sem carteira assinada, posso exigir meus direitos? Quais são os direitos trabalhistas e como identificar possíveis violações? Entre outros assuntos que impactam decisões importantes da vida pessoal e profissional.

A proposta é traduzir o que a lei diz para a prática, sem juridiquês desnecessário. Este é um espaço de informação e orientação, pensado para quem quer entender melhor seus direitos.

Seja bem-vindo(a).`,
  },
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? blogPosts[slug] : null;

  const handleBackToBlog = () => {
    navigate("/#blog");
    setTimeout(() => {
      const blogSection = document.getElementById("blog");
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

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
          <Button variant="ghost" className="mb-8" onClick={handleBackToBlog}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o blog
          </Button>

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
