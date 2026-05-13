import { motion } from 'motion/react';
import { Heart, Activity, Brain } from 'lucide-react';

const benefits = [
    {
        icon: Brain,
        title: "Mental Stimulation",
        description: "Our interactive sitters provide essential cognitive enrichment, preventing the boredom and destructive behaviors that often stem from isolation."
    },
    {
        icon: Activity,
        title: "Physical Wellness",
        description: "Consistent, tailored physical activity maintains your dog's cardiovascular health and joint mobility, ensuring they remain vibrant and energetic."
    },
    {
        icon: Heart,
        title: "Anxiety Reduction",
        description: "The continuous presence of a caring professional significantly suppresses separation anxiety, keeping your dog's stress hormone levels balanced."
    }
];

export function Benefits() {
    return (
        <section className="py-32 bg-mint text-slate relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-slate rounded-full blur-[120px] mix-blend-multiply"></div>
                <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-slate rounded-full blur-[120px] mix-blend-multiply"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif mb-6 text-slate-800 leading-tight drop-shadow-sm font-bold">
                        The Case for <span className="italic text-blush-hover">Companionship</span>
                    </h2>
                    <p className="text-xl text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed">
                        Leaving a dog alone for extended periods is an outdated standard. Professional pet sitting provides critical interventions that elevate your companion's quality of life.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {benefits.map((benefit, idx) => {
                        const Icon = benefit.icon;
                        return (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="bg-cream p-10 rounded-3xl shadow-lg border border-slate/5 transition-all duration-300 hover:shadow-xl group"
                            >
                                <div className="w-14 h-14 bg-blush/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blush transition-colors duration-300">
                                    <Icon className="w-7 h-7 text-blush group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-2xl font-serif text-slate mb-4">{benefit.title}</h3>
                                <p className="text-slate/70 font-light leading-relaxed">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
