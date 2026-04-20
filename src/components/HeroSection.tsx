import { Phone, MapPin, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hospital-hero.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <img src={heroImg} alt="SLV Hospital Building" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
    <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

    <div className="relative z-10 container text-center text-primary-foreground py-32">
      <p className="text-sm md:text-base uppercase tracking-widest mb-4 opacity-90 font-medium">Welcome to</p>
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-extrabold mb-4 leading-tight">SLV Hospital</h1>
      <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10 font-body">
        Trusted Multispeciality Hospital in Bengaluru
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="tel:7022908079" className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg">
          <Phone size={18} /> Call Now
        </a>
        <a href="https://wa.me/919916579219" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg">
          <MessageCircle size={18} /> WhatsApp
        </a>
        <a href="https://maps.google.com/?q=SLV+Hospital+Andrahalli+Bengaluru" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
          <MapPin size={18} /> Get Directions
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
