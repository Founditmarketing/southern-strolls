import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-blush font-medium tracking-widest uppercase text-sm mb-6">
                Premium Pet Concierge
              </p>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif leading-[0.95] tracking-tight mb-8 text-slate">
                Southern <br />
                <span className="italic text-mint">Hospitality</span>
              </h1>
              <p className="text-xl text-slate/70 max-w-md font-light leading-relaxed mb-10">
                Reliable, professional in-home pet care for busy professionals and families in Youngsville, Lafayette, Broussard, and Scott.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <a href="#consultation" className="bg-mint text-slate px-8 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-blush hover:text-white transition-colors duration-300 w-full sm:w-auto text-center font-medium">
                  Request a Consultation
                </a>
                <a href="#services" className="text-slate text-sm tracking-widest uppercase border-b border-slate pb-1 hover:text-blush hover:border-blush transition-colors duration-300">
                  Explore Services
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative hidden md:block h-[700px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 w-4/5 h-full z-10"
            >
              <img
                src="/images/hero_elegant_dog_1772814698237.png"
                alt="Elegant Weimaraner"
                className="w-full h-full object-cover rounded-t-[1000px] rounded-b-[1000px] shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-12 left-0 w-64 z-20"
            >
              <img
                src="/images/hero_dog_walking_1772814715743.png"
                alt="Dog walking in nature"
                className="w-full aspect-square object-cover rounded-full border-8 border-cream shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
