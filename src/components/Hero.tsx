import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 md:pt-20 md:pb-0 overflow-hidden bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center text-center lg:text-left">
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-blush font-medium tracking-widest uppercase text-sm mb-6">
                Premium Pet Concierge
              </p>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif leading-[0.95] tracking-tight mb-6 sm:mb-8 text-slate">
                Southern <br />
                <span className="italic text-mint">Hospitality</span>
              </h1>
              <p className="text-xl text-slate/70 max-w-md font-light leading-relaxed mb-10">
                Reliable, professional in-home pet care for busy professionals and families in Youngsville, Lafayette, Broussard, and Scott.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mt-6 sm:mt-8 mb-8 sm:mb-0">
                <a href="#consultation" className="bg-mint text-slate px-8 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-blush hover:text-white transition-colors duration-300 w-full sm:w-auto text-center font-medium shadow-md">
                  Request a Consultation
                </a>
                <a href="#services" className="text-slate text-center text-sm tracking-widest uppercase border-b border-transparent pb-1 hover:text-blush hover:border-blush transition-colors duration-300 w-full sm:w-auto">
                  Explore Services
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative mt-16 md:mt-0 h-[500px] md:h-[700px] w-full max-w-lg mx-auto md:max-w-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 w-4/5 md:w-4/5 h-full z-10"
            >
              <img
                src="/images/hero_elegant_dog_1772814698237.png"
                alt="Elegant Weimaraner"
                className="w-full h-full object-cover rounded-[3rem] md:rounded-t-[1000px] md:rounded-b-[1000px] shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-8 left-4 md:bottom-12 md:left-0 w-48 md:w-64 z-20"
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
