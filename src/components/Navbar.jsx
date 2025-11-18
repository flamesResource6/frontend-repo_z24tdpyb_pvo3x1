import { Phone, Car } from "lucide-react";

const PHONE_TEL = "+15550137729";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-black/60 border-b border-red-900/30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2">
          <div className="p-2 rounded-lg bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.5)]">
            <Car className="w-5 h-5" />
          </div>
          <span className="text-white font-semibold tracking-wide">Redline Detailing Co.</span>
        </a>

        <a
          href={`tel:${PHONE_TEL}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white font-medium shadow-lg shadow-red-900/30 hover:bg-red-500 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
      </div>
    </header>
  );
}
