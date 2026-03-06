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
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif leading-[0.95] tracking-tight mb-6 sm:mb-8 text-slate relative z-20">
                Southern <br />
                <span className="italic text-mint">Hospitality</span>
              </h1>
              <p className="text-xl text-slate/70 max-w-md font-light leading-relaxed mb-10 mx-auto lg:mx-0 relative z-20">
                Reliable, professional in-home pet care for busy professionals and families in Youngsville, Lafayette, Broussard, and Scott.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-6 sm:mt-8 mb-8 sm:mb-0 relative z-20">
                <a href="#consultation" className="bg-mint text-slate px-8 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-blush hover:text-white transition-colors duration-300 w-full sm:w-auto text-center font-medium shadow-md">
                  Request a Consultation
                </a>
                <a href="#services" className="text-slate text-center text-sm tracking-widest uppercase border-b border-transparent pb-1 hover:text-blush hover:border-blush transition-colors duration-300 w-full sm:w-auto">
                  Explore Services
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative mt-12 md:mt-0 h-[450px] sm:h-[550px] md:h-[700px] w-full max-w-md sm:max-w-lg mx-auto md:max-w-none">
            {/* Primary Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 w-[85%] h-[90%] md:w-4/5 md:h-full z-10"
            >
              <img
                src="/images/hero_elegant_dog_1772814698237.png"
                alt="Elegant Weimaraner"
                className="w-full h-full object-cover rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-xl rounded-bl-xl md:rounded-t-[1000px] md:rounded-b-[1000px] shadow-2xl"
              />
            </motion.div>

            {/* Secondary Overlapping Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 left-0 w-[55%] md:bottom-12 md:-left-8 md:w-64 z-20"
            >
              <img
                src="/images/hero_dog_walking_1772814715743.png"
                alt="Dog walking in nature"
                className="w-full aspect-square object-cover rounded-[2rem] md:rounded-full border-8 border-cream shadow-xl"
              />
            </motion.div>

            {/* Floating Glassmorphism Badge */}
            <motion.div
              initial={{ opacity: 0, rotate: -10, y: 20 }}
              animate={{ opacity: 1, rotate: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[10%] -left-2 md:-left-12 z-30 bg-white/80 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-xl border border-white/40 flex items-center gap-3"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-mint/30 flex items-center justify-center text-xl md:text-2xl shadow-inner">
                ✨
              </div>
              <div className="pr-2">
                <p className="text-[10px] md:text-xs text-slate/50 tracking-widest uppercase font-bold mb-0.5">World Class</p>
                <p className="text-sm md:text-base text-slate font-serif font-semibold leading-none">Pet Care</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
