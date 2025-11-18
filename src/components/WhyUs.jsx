import { Award, ShieldCheck, Clock, Sparkles } from "lucide-react";

export default function WhyUs() {
  const items = [
    { icon: Award, title: "5-Star Reputation", desc: "Hundreds of happy clients and pristine rides." },
    { icon: ShieldCheck, title: "Fully Insured", desc: "Professional, dependable, and protected." },
    { icon: Clock, title: "Mobile & On-Time", desc: "We come to you and finish when we say we will." },
    { icon: Sparkles, title: "Detail-Obsessed", desc: "We treat every car like it's our own." },
  ];

  return (
    <section className="bg-gradient-to-b from-black to-zinc-950 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Why Choose Us</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-red-900/40 bg-zinc-950 p-6">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-red-600 text-white mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-white font-semibold mb-1">{title}</h3>
              <p className="text-zinc-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
