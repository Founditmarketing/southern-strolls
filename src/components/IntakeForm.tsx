import { useState } from 'react';
import { motion } from 'motion/react';

export function IntakeForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="consultation" className="py-32 bg-mint text-slate">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif mb-6">Request a Consultation</h2>
          <p className="text-xl text-slate/70 font-light max-w-2xl mx-auto">
            Begin your journey with Southern Strolls. Tell us about your companion, and we will curate a care plan tailored to their needs.
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-24 border border-slate/20 rounded-[2rem] bg-white/40 backdrop-blur-sm"
          >
            <h3 className="text-4xl font-serif mb-4 text-slate italic">Inquiry Received</h3>
            <p className="text-slate/80 font-light text-lg">
              Our concierge team will contact you within 24 hours to get started.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-3">
                <label className="text-xs tracking-widest uppercase text-slate/60 font-medium">Your Name</label>
                <input
                  required
                  type="text"
                  className="w-full bg-transparent border-b border-slate/30 py-3 focus:outline-none focus:border-blush transition-colors text-xl text-slate"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs tracking-widest uppercase text-slate/60 font-medium">Email Address</label>
                <input
                  required
                  type="email"
                  className="w-full bg-transparent border-b border-slate/30 py-3 focus:outline-none focus:border-blush transition-colors text-xl text-slate"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs tracking-widest uppercase text-slate/60 font-medium">Pet's Name & Breed</label>
                <input
                  required
                  type="text"
                  className="w-full bg-transparent border-b border-slate/30 py-3 focus:outline-none focus:border-blush transition-colors text-xl text-slate"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs tracking-widest uppercase text-slate/60 font-medium">Service of Interest</label>
                <select
                  required
                  className="w-full bg-transparent border-b border-slate/30 py-3 focus:outline-none focus:border-blush transition-colors text-xl appearance-none rounded-none text-slate cursor-pointer"
                >
                  <option value="" className="text-slate">Select a service...</option>
                  <option value="drop-in" className="text-slate">Drop-In Visit (30 min)</option>
                  <option value="walk-30" className="text-slate">Dog Walk (30 min)</option>
                  <option value="walk-60" className="text-slate">Dog Walk (60 min)</option>
                  <option value="puppy" className="text-slate">Puppy Potty Break</option>
                  <option value="transport" className="text-slate">Pet Transportation</option>
                </select>
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-xs tracking-widest uppercase text-slate/60 font-medium">Additional Details</label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-slate/30 py-3 focus:outline-none focus:border-blush transition-colors text-xl resize-none text-slate"
                placeholder="Tell us about their personality, routine, or special needs..."
              ></textarea>
            </div>
            <div className="flex items-start gap-4 text-left">
              <input
                type="checkbox"
                required
                id="policy-ack"
                className="mt-1 w-5 h-5 accent-blush cursor-pointer"
              />
              <label htmlFor="policy-ack" className="text-sm text-slate/80 font-light leading-relaxed cursor-pointer">
                I understand that services are only available in <strong className="font-medium text-slate">Youngsville, Lafayette, Broussard, and Scott</strong>.
              </label>
            </div>
            <div className="text-center pt-8">
              <button
                type="submit"
                className="bg-blush text-slate px-14 py-5 rounded-full text-sm tracking-widest uppercase font-medium hover:bg-blush-hover transition-colors duration-300 shadow-xl"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
