const specialities = [
  "Obstetrics & Gynecology", "Anaesthesiology", "General Medicine", "General Surgery",
  "ENT", "Skin & STD", "Pediatrics", "Urology", "Nephrology", "Orthopaedics",
  "Cardiology", "Neurology", "Neuro Surgery", "Ophthalmology", "Radiology",
  "Physiotherapy", "Paediatric Surgery", "Psychiatry", "Plastic Surgery",
  "Vascular Surgery", "Facio Maxillary Surgery",
];

const SpecialitiesSection = () => (
  <section id="specialities" className="section-padding bg-card">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">Our Specialities</h2>
      <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
        {specialities.map((s) => (
          <div key={s} className="bg-muted rounded-lg px-4 py-3 text-center font-medium text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
            {s}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SpecialitiesSection;
