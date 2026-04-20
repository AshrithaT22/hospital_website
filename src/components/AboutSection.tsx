import { ShieldCheck, HeartPulse, Users } from "lucide-react";

const highlights = [
  { icon: HeartPulse, title: "Advanced Care", desc: "Modern facilities with latest medical technology" },
  { icon: ShieldCheck, title: "Trusted Experts", desc: "Experienced doctors and skilled medical staff" },
  { icon: Users, title: "Patient First", desc: "Compassionate care for every patient" },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-card">
    <div className="container max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">About SLV Hospital</h2>
      <div className="w-16 h-1 bg-secondary mx-auto mb-8 rounded-full" />

      <p className="text-center text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-12">
        SLV Hospital is a multispeciality hospital run by <span className="font-semibold text-foreground">Dr. Pothi Reddy M MD</span>. The hospital is located in Andrahalli, Bengaluru and provides advanced medical care with modern facilities and experienced doctors.
      </p>

      <div className="grid sm:grid-cols-3 gap-6">
        {highlights.map((h) => (
          <div key={h.title} className="bg-muted rounded-xl p-6 text-center shadow-card hover:shadow-card-hover transition-shadow">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <h.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-1">{h.title}</h3>
            <p className="text-sm text-muted-foreground">{h.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
