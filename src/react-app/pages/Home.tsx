import Header from "@/react-app/components/Header";
import Hero from "@/react-app/components/Hero";
import WhySection from "@/react-app/components/WhySection";
import PracticeAreas from "@/react-app/components/PracticeAreas";
import CTASection from "@/react-app/components/CTASection";
import Team from "@/react-app/components/Team";
import Differentials from "@/react-app/components/Differentials";
import Blog from "@/react-app/components/Blog";
import Footer from "@/react-app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhySection />
        <PracticeAreas />
        <CTASection />
        <Team />
        <Differentials />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
