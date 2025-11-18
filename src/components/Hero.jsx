import { Phone } from "lucide-react";

const PHONE_TEL = "+15550137729";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black">
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(600px_200px_at_20%_0%,#ef4444,transparent_60%),radial-gradient(600px_200px_at_80%_0%,#ef4444,transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-4 py-24 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
              Premium Red & Black Detailing
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-8">
              Blacktop Shine Auto Detailing brings showroom-quality finishes to your driveway.
              From deep interior cleans to ceramic coatings, we obsess over every detail.
            </p>

            <div className="flex items-center gap-4">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-semibold shadow-lg shadow-red-900/40 hover:bg-red-500 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <div className="text-zinc-400 text-sm">
                Mobile service • Fully insured • Satisfaction guaranteed
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-red-600/30 blur-2xl rounded-3xl" />
            <img
              src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1400&auto=format&fit=crop"
              alt="Glossy detailed car"
              className="relative rounded-3xl border border-red-900/40 shadow-2xl shadow-red-900/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
