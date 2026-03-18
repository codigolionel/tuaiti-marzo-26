import ExpertiseSection from "@/components/ExpertiseSection";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import CtaBannerSection from "@/components/CtaBannerSection";
import Footer from "@/components/Footer";
import ComoTrabajamos from "@/components/ComoTrabajamos";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <ComoTrabajamos />
      <ContactSection />
      <CtaBannerSection />
      <Footer />
    </div>
  );
};

export default Index;
