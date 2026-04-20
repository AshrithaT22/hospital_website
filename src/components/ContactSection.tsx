import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding bg-card">
    <div className="container max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">Contact Us</h2>
      <div className="w-16 h-1 bg-secondary mx-auto mb-12 rounded-full" />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {[
            { icon: Phone, label: "Hospital", value: "987456321", href: "tel:917022908079" },
            { icon: Phone, label: "Dr. Pothi Reddy", value: "9916579219", href: "tel:919916579219" },
            { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/917022908079" },
            { icon: Mail, label: "Email", value: "slvhospital06@gmail.com", href: "mailto:slvhospital06@gmail.com" },
            { icon: MapPin, label: "Address", value: "Andrahalli, Bengaluru, Karnataka 560091", href: "https://maps.google.com/?q=SLV+Hospital+Andrahalli+Bengaluru" },
          ].map((c) => (
            <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-start gap-4 group">
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <c.icon className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">{c.label}</p>
                <p className="text-foreground font-medium group-hover:text-primary transition-colors">{c.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="rounded-xl overflow-hidden shadow-card h-72 md:h-auto">
          <iframe
            title="SLV Hospital Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5!2d77.51!3d12.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzI0LjAiTiA3N8KwMzAnMzYuMCJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 288 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
