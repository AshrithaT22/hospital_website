import { Phone, Ambulance } from "lucide-react";

const EmergencySection = () => (
  <section className="py-16 bg-destructive">
    <div className="container text-center">
      <Ambulance className="text-destructive-foreground mx-auto mb-4" size={48} />
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-destructive-foreground mb-2">Emergency?</h2>
      <p className="text-destructive-foreground/80 mb-8 text-lg">Available 24/7 — Don't hesitate to call us</p>
      <a
        href="tel:7022908079"
        className="inline-flex items-center gap-3 bg-destructive-foreground text-destructive px-8 py-4 rounded-xl text-xl font-bold animate-pulse-emergency"
      >
        <Phone size={24} /> 7022908079
      </a>
    </div>
  </section>
);

export default EmergencySection;
