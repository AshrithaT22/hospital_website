import {
  Siren, Pill, FlaskConical, ScanLine, Radio, Stethoscope,
  Scissors, Minimize2, Ambulance, HeartPulse, Users, BedDouble,
  Activity, Dumbbell, Wind, Droplets
} from "lucide-react";

const facilities = [
  { icon: Siren, name: "24x7 Emergency Services" },
  { icon: Pill, name: "24x7 Pharmacy" },
  { icon: FlaskConical, name: "24x7 High Tech Laboratory" },
  { icon: ScanLine, name: "Digital X-Ray" },
  { icon: Radio, name: "Ultrasound Scanning" },
  { icon: Stethoscope, name: "Endoscopy" },
  { icon: Scissors, name: "Modern Operation Theater" },
  { icon: Minimize2, name: "Minimal Access Laparoscopy Surgery" },
  { icon: Ambulance, name: "24x7 ACLS Ambulance Service" },
  { icon: HeartPulse, name: "Intensive Care Unit" },
  { icon: Users, name: "Skilled Nursing & Paramedical Staff" },
  { icon: BedDouble, name: "Private & Semi Private Wards" },
  { icon: Activity, name: "ECG" },
  { icon: Dumbbell, name: "Physiotherapy" },
  { icon: Wind, name: "Centralized Medical Gas System" },
  { icon: Droplets, name: "Dialysis" },
];

const FacilitiesSection = () => (
  <section id="facilities" className="section-padding section-gradient">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">Our Facilities</h2>
      <div className="w-16 h-1 bg-secondary mx-auto mb-12 rounded-full" />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {facilities.map((f) => (
          <div key={f.name} className="bg-card rounded-xl p-5 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
              <f.icon className="text-secondary" size={22} />
            </div>
            <p className="text-sm font-medium text-foreground leading-snug">{f.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FacilitiesSection;
