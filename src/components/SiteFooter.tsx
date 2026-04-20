import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";

const SiteFooter = () => (
  <footer className="bg-foreground text-primary-foreground py-12">
    <div className="container">
      <div className="grid sm:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-heading font-bold mb-2">SLV Hospital</h3>
          <p className="text-primary-foreground/70 text-sm">Trusted Multispeciality Hospital in Bengaluru providing advanced medical care.</p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
          <div className="space-y-2 text-sm text-primary-foreground/70">
            {["Home", "About", "Facilities", "Specialities", "Doctors", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="block hover:text-primary-foreground transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Contact</h4>
          <div className="space-y-1 text-sm text-primary-foreground/70">
            <p>Phone: +917022908079</p>
            <p>Email: slvhospital06@gmail.com</p>
            <p>#71/5 Andrahalli, Bengaluru 560091</p>
          </div>
          <div className="flex gap-3 mt-4">
            {[
              { icon: Facebook, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Youtube, href: "#" },
              { icon: MessageCircle, href: "https://wa.me/917022908079" },
            ].map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} SLV Hospital. All rights reserved.
      </div>
    </div>
  </footer>
);

export default SiteFooter;
