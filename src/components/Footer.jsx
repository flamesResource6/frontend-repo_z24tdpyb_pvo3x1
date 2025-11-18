import { MapPin, Mail, Clock, Phone } from "lucide-react";

const BUSINESS = {
  name: "Blacktop Shine Auto Detailing",
  phone: "+1 (555) 013-7729",
  phoneTel: "+15550137729",
  email: "hello@blacktopshine.com",
  address: "2240 Redline Ave, Suite B, Phoenix, AZ 85004",
  hours: [
    { days: "Mon–Fri", time: "8:00 AM – 6:00 PM" },
    { days: "Saturday", time: "9:00 AM – 4:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black border-t border-red-900/40">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-white font-semibold text-lg">{BUSINESS.name}</h3>
          <p className="text-zinc-400 mt-2">Premium mobile detailing. Red-level gloss, black-level depth.</p>

          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white font-medium shadow-lg shadow-red-900/30 hover:bg-red-500 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Contact</h4>
          <ul className="space-y-2 text-zinc-300">
            <li className="flex items-start gap-3"><Phone className="w-5 h-5 text-red-500 mt-0.5" /> {BUSINESS.phone}</li>
            <li className="flex items-start gap-3"><Mail className="w-5 h-5 text-red-500 mt-0.5" /> {BUSINESS.email}</li>
            <li className="flex items-start gap-3"><MapPin className="w-5 h-5 text-red-500 mt-0.5" /> {BUSINESS.address}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Hours</h4>
          <ul className="space-y-2 text-zinc-300">
            {BUSINESS.hours.map((h) => (
              <li key={h.days} className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-red-500" />
                <span className="w-24 text-zinc-400">{h.days}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-red-900/40 text-center py-4 text-zinc-500 text-sm">
        © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
      </div>
    </footer>
  );
}
