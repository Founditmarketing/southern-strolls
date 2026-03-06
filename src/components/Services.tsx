import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Drop-In Visit (30 min)",
    desc: "Comprehensive drop-in care that maintains your pet's exact routine. Includes potty break, water, feeding if needed, playtime, and a photo update.",
    price: "$23 / visit (+ $10 extra pet)",
    image: "/images/service_signature_stroll_1772814731135.png"
  },
  {
    title: "Dog Walking",
    desc: "A leisurely, unhurried walk through your neighborhood's most scenic routes. Perfect for active dogs who appreciate the finer sniffs in life.",
    price: "$25 (30m) / $45 (60m)",
    image: "/images/service_concierge_sitting_1772814744389.png"
  },
  {
    title: "Puppy Potty Breaks",
    desc: "Quick 15-minute stops perfect for stacking visits close together to help your new puppy establish a consistent routine.",
    price: "$17 (1 stop) / $30 (2 stops)",
    image: "/images/hero_dog_walking_1772814715743.png"
  },
  {
    title: "Pet Transportation",
    desc: "Safe and reliable transport for vet visits, grooming appointments, daycare drop-offs, and other local pet needs (up to 30 mins).",
    price: "$25 (One-way) / $45 (Round-trip)",
    image: "/images/hero_elegant_dog_1772814698237.png"
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-serif text-slate mb-6">Core Services</h2>
            <p className="text-xl text-slate/60 font-light">Reliable daytime care, tailored for busy professionals.</p>
          </div>
        </div>

        <div className="space-y-32">
          {services.map((service, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}>
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] md:aspect-[3/4]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-blush tracking-widest uppercase text-sm font-medium mb-6 block">
                  {service.price}
                </span>
                <h3 className="text-4xl md:text-5xl font-serif text-slate mb-6 leading-tight">
                  {service.title}
                </h3>
                <p className="text-lg text-slate/70 font-light leading-relaxed mb-10">
                  {service.desc}
                </p>
                <a href="#consultation" className="group inline-flex items-center gap-4 text-sm tracking-widest uppercase text-slate font-medium">
                  <span className="border-b border-slate pb-1 group-hover:border-blush group-hover:text-blush transition-colors">
                    Inquire About Service
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:text-blush transition-colors group-hover:translate-x-1 transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
