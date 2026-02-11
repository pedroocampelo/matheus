import { Button } from "@/react-app/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import ContactModal from "@/react-app/components/ContactModal";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    // If we're on the home page, scroll to the section
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    } else {
      // If we're on another page, navigate to home with the section hash
      navigate(`/#${id}`);
      setMobileMenuOpen(false);
      // After navigation, scroll to the section
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <div className="flex items-center">
            <img 
              src="https://019c4cff-51cf-7818-9314-08f1860804e4.mochausercontent.com/LMR-Logo.png" 
              alt="LMR Advogados" 
              className="h-12 lg:h-16"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection("inicio")} className="text-sm font-medium hover:text-primary transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection("areas")} className="text-sm font-medium hover:text-primary transition-colors">
              Áreas
            </button>
            <button onClick={() => scrollToSection("equipe")} className="text-sm font-medium hover:text-primary transition-colors">
              Equipe
            </button>
            <button onClick={() => scrollToSection("diferenciais")} className="text-sm font-medium hover:text-primary transition-colors">
              Diferenciais
            </button>
            <button onClick={() => scrollToSection("blog")} className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </button>
            <Button size="sm" className="ml-4" onClick={() => setIsContactModalOpen(true)}>
              Fale Conosco
            </Button>
          </nav>

          <button 
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection("inicio")} className="text-sm font-medium hover:text-primary transition-colors text-left">
                Início
              </button>
              <button onClick={() => scrollToSection("areas")} className="text-sm font-medium hover:text-primary transition-colors text-left">
                Áreas
              </button>
              <button onClick={() => scrollToSection("equipe")} className="text-sm font-medium hover:text-primary transition-colors text-left">
                Equipe
              </button>
              <button onClick={() => scrollToSection("diferenciais")} className="text-sm font-medium hover:text-primary transition-colors text-left">
                Diferenciais
              </button>
              <button onClick={() => scrollToSection("blog")} className="text-sm font-medium hover:text-primary transition-colors text-left">
                Blog
              </button>
              <Button size="sm" className="w-full mt-4" onClick={() => setIsContactModalOpen(true)}>
                Fale Conosco
              </Button>
            </nav>
          </div>
        )}
      </div>

      <ContactModal 
        open={isContactModalOpen} 
        onOpenChange={setIsContactModalOpen}
      />
    </header>
  );
}
