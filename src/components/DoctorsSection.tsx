import { User } from "lucide-react";

interface Doctor { name: string; qualification: string }

const departments: { dept: string; doctors: Doctor[] }[] = [
  { dept: "General Medicine", doctors: [
    { name: "Dr. Mayank S P", qualification: "MBBS, MD" },
    { name: "Dr. MK Boss", qualification: "MBBS, MD" },
  ]},
  { dept: "Orthopaedics", doctors: [
    { name: "Dr. Sri Sai B", qualification: "MBBS, MS" },
    { name: "Dr. M Sharan", qualification: "MBBS, MS Ortho" },
    { name: "Dr. Durgi", qualification: "MS Ortho" },
  ]},
  { dept: "Obstetrics & Gynaecology", doctors: [
    { name: "Dr. Deepika K", qualification: "MBBS, MS, DNB" },
    { name: "Dr. Chitra K", qualification: "MBBS, MS" },
  ]},
  { dept: "General Surgeon", doctors: [{ name: "Dr. Kumar", qualification: "MBBS, MS" }]},
  { dept: "Physiotherapist", doctors: [{ name: "Dr. P", qualification: "BPT MIAP" }]},
  { dept: "Surgical Gastroenterology", doctors: [{ name: "Dr. M", qualification: "MBBS, MS, MCH" }]},
  { dept: "Pediatrician", doctors: [{ name: "Dr. Loka R", qualification: "MBBS, DCH" }]},
  { dept: "ENT", doctors: [{ name: "Dr. Dia", qualification: "MBBS, MS" }]},
  { dept: "Casualty Medical Officer", doctors: [
    { name: "Dr. Varma", qualification: "" },
    { name: "Dr. Sai", qualification: "" },
  ]},
  { dept: "Urologist", doctors: [{ name: "Dr. Babu", qualification: "MBBS, MS, MCH" }]},
  { dept: "Pulmonologist", doctors: [{ name: "Dr. Sai", qualification: "MBBS" }]},
  { dept: "Neurosurgeon", doctors: [{ name: "Dr. S", qualification: "MBBS, MS, MCH" }]},
  { dept: "Plastic Surgeon", doctors: [{ name: "Dr. Suman", qualification: "MBBS, MS, MCH" }]},
];

const DoctorsSection = () => (
  <section id="doctors" className="section-padding section-gradient">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">Our Doctors</h2>
      <div className="w-16 h-1 bg-secondary mx-auto mb-12 rounded-full" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {departments.map((d) => (
          <div key={d.dept} className="bg-card rounded-xl p-6 shadow-card">
            <h3 className="font-heading font-semibold text-primary text-sm uppercase tracking-wide mb-4">{d.dept}</h3>
            <div className="space-y-3">
              {d.doctors.map((doc) => (
                <div key={doc.name} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="text-primary" size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{doc.name}</p>
                    {doc.qualification && <p className="text-xs text-muted-foreground">{doc.qualification}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DoctorsSection;
