import { Clock, MapPin, Key, XCircle, Sparkles } from 'lucide-react';

const policies = [
    {
        icon: MapPin,
        title: "Service Area & Booking",
        desc: "We serve Youngsville, Lafayette, Broussard, and Scott. Visits are booked in specific service windows (Morning 8-11, Midday 11-2, Afternoon 2-4) to allow for efficient routing."
    },
    {
        icon: Clock,
        title: "Hours & Boundaries",
        desc: "Regular Care Hours are Monday–Friday 8:00 AM–4:00 PM. Pet Transportation Hours are Monday–Friday 6:30 AM–6:30 PM (Available by request and based on availability). We do not offer overnight services or late-night visits to ensure our team operates at peak reliability."
    },
    {
        icon: Key,
        title: "Home Access",
        desc: "Clients must provide reliable home access (door codes, lockboxes, etc.). If entry is not possible due to faulty codes, locked doors, or loose pets, the visit will be charged in full."
    },
    {
        icon: XCircle,
        title: "Cancellations",
        desc: "Drop-ins and walks canceled with 24+ hours' notice incur no charge. Same-day cancellations are billed at 50%. No-shows are billed at the full rate."
    },
    {
        icon: Sparkles,
        title: "Extended Cleanup",
        desc: "Basic accident cleanup is included. However, if a pet creates a large mess requiring significant time (extensive feces, diarrhea, or vomit), an Extended Cleanup Fee of $15 may apply."
    }
];

export function Policies() {
    return (
        <section id="policies" className="py-32 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-serif text-slate mb-6">Our Operating Standards</h2>
                    <p className="text-xl text-slate/70 font-light leading-relaxed">
                        Clear boundaries ensure reliable, consistent care for all pets and families. By booking with Southern Strolls, clients agree to these operational guidelines.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {policies.map((policy, idx) => {
                        const Icon = policy.icon;
                        return (
                            <div key={idx} className="group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate/5 group-hover:bg-mint/30 transition-colors duration-300">
                                    <Icon className="w-6 h-6 text-slate/70 group-hover:text-slate transition-colors" />
                                </div>
                                <h3 className="text-xl font-serif text-slate mb-4">{policy.title}</h3>
                                <p className="text-slate/70 font-light leading-relaxed">
                                    {policy.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-24 pt-16 border-t border-slate/10 max-w-4xl mx-auto text-center">
                    <div className="inline-block bg-slate text-cream px-6 py-2 rounded-full text-sm tracking-widest uppercase font-medium mb-8">
                        Safety First
                    </div>
                    <p className="text-lg text-slate/80 font-light leading-relaxed italic">
                        "Southern Strolls reserves the right to refuse or discontinue service if a pet shows aggressive behavior, the environment is unsafe, or a situation poses a risk to pets or people. Safety is always our top priority."
                    </p>
                </div>
            </div>
        </section>
    );
}
