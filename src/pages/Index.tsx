import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import SpecialitiesSection from "@/components/SpecialitiesSection";
import DoctorsSection from "@/components/DoctorsSection";
import EmergencySection from "@/components/EmergencySection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <FacilitiesSection />
    <SpecialitiesSection />
    <DoctorsSection />
    <EmergencySection />
    <ContactSection />
    <SiteFooter />
    <WhatsAppButton />
  </>
);

export default Index;
