import { Sparkles, Droplets, Shield, Wind, Phone } from "lucide-react";

const PHONE_TEL = "+15550137729";

const services = [
  {
    icon: Sparkles,
    title: "Exterior Wash & Wax",
    desc: "Thorough hand wash, decontamination, and premium wax for deep gloss and protection.",
    price: "From $99",
  },
  {
    icon: Droplets,
    title: "Interior Deep Clean",
    desc: "Steam clean, leather conditioning, stain removal, and meticulous interior refresh.",
    price: "From $149",
  },
  {
    icon: Shield,
    title: "Paint Correction",
    desc: "Multi-stage machine polishing to remove swirls and restore true mirror finish.",
    price: "From $399",
  },
  {
    icon: Wind,
    title: "Ceramic Coating",
    desc: "2–5 year ceramic options for unmatched gloss, hydrophobicity, and easy maintenance.",
    price: "From $699",
  },
];

export default function Services() {
  return (
    <section className="bg-black py-20" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Services</h2>
          <p className="text-zinc-400 mt-2">High-gloss results. Red-carpet treatment.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc, price }) => (
            <div key={title} className="group relative rounded-2xl border border-red-900/40 bg-zinc-950 p-6 hover:border-red-600/60 transition-colors">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-red-600 text-white mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-zinc-400 text-sm mb-4">{desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-red-400 font-medium">{price}</span>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-500 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
