export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1536520002442-39764a41e987?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541447271487-09612b3f49f9?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1400&auto=format&fit=crop",
  ];

  return (
    <section className="bg-zinc-950 py-16" id="gallery">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Results That Speak</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl border border-red-900/40">
              <img src={src} alt="Detailing work" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
