import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const packages = [
    {
        title: "The Frequent Stroll",
        subtitle: "4 Drop-In Visits/Week (30 min)",
        price: "$87",
        period: "/week",
        savings: "$5 savings (5% off)",
        desc: "Great for hybrid workers.",
        features: [
            "Flexible active days",
            "Potty break & feeding",
            "Playtime & interaction",
            "Daily photo update"
        ]
    },
    {
        title: "The Workweek Stroll",
        subtitle: "5 Drop-In Visits/Week (30 min)",
        price: "$109",
        period: "/week",
        savings: "$6 savings (5% off)",
        desc: "Great for full-time workers, commuters, routine clients",
        features: [
            "Consistent daily schedule",
            "Potty break & feeding",
            "Playtime & interaction",
            "Daily photo update"
        ]
    },
    {
        title: "Puppy Plus Plan",
        subtitle: "2 Stops/Day, 5 Days/Week (15m each)",
        price: "$143",
        period: "/week",
        savings: "$7 savings (5% off)",
        desc: "Perfect for establishing a new puppy's routine.",
        features: [
            "Morning & Afternoon stops",
            "Accelerates potty training",
            "Prevents destructive chewing",
            "Early socialization"
        ]
    }
];

export function Packages() {
    return (
        <section id="packages" className="py-32 bg-mint/20 text-slate">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif mb-6 text-slate leading-tight drop-shadow-sm font-bold">
                        Weekly <span className="italic text-blush-hover">Packages</span>
                    </h2>
                    <p className="text-xl text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed">
                        Consistent care yields the best results. Lock in your weekly schedule and receive a 5% discount on all bundled services.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {packages.map((pkg, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="bg-white p-10 rounded-3xl shadow-sm border border-slate/5 transition-all duration-300 hover:shadow-xl relative flex flex-col h-full"
                        >
                            <div className="mb-8">
                                <h3 className="text-2xl font-serif text-slate mb-2">{pkg.title}</h3>
                                <p className="text-sm tracking-widest uppercase text-blush font-medium mb-6">{pkg.subtitle}</p>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-5xl font-serif text-slate tracking-tight">{pkg.price}</span>
                                    <span className="text-slate/60 font-light">{pkg.period}</span>
                                </div>
                                <p className="text-sm text-mint-700 font-medium bg-mint/20 inline-block px-3 py-1 rounded-full">{pkg.savings}</p>
                            </div>

                            <p className="text-slate/70 font-light leading-relaxed mb-8 flex-grow">
                                {pkg.desc}
                            </p>

                            <ul className="space-y-4 mb-8">
                                {pkg.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center gap-3 text-slate/80">
                                        <Check className="w-5 h-5 text-blush flex-shrink-0" />
                                        <span className="font-light">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a href="#consultation" className="block w-full text-center bg-cream text-slate border border-slate/10 hover:bg-slate hover:text-white px-6 py-4 rounded-full text-sm tracking-widest uppercase transition-colors duration-300 font-medium mt-auto">
                                Select Package
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
