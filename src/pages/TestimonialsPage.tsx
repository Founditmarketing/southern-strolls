import { motion } from 'motion/react';
import { Quote, Star, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Southern Strolls provides a level of service I didn't know existed. The peace of mind is truly invaluable. Winston is always so happy when Karlee arrives, and the photos I get of him on his walks make my day.",
    author: "Eleanor & Winston",
    pet: "Golden Retriever",
    service: "Dog Walking",
    rating: 5
  },
  {
    quote: "Karlee is a godsend! Cooper has some separation anxiety, but she knows exactly how to make him feel comfortable and safe. The updates she sends are incredibly detailed, and I can tell she genuinely loves what she does.",
    author: "Sarah & Cooper",
    pet: "Labradoodle",
    service: "Drop-In Visits",
    rating: 5
  },
  {
    quote: "I travel frequently for business and was always stressed about leaving Bella. Finding Southern Strolls changed everything. The level of care, the feeding routine, and the daily photo updates are absolutely outstanding.",
    author: "Michael & Bella",
    pet: "Persian Cat",
    service: "30 Min Drop-In",
    rating: 5
  },
  {
    quote: "Stacking the quick drop-in visits has been perfect for my schedule. Karlee handles both of my large dogs with ease and professionalism. She's incredibly reliable and respects our home completely.",
    author: "David & Tucker & Sadie",
    pet: "German Shepherds",
    service: "Quick Drop In Visits",
    rating: 5
  },
  {
    quote: "Used the pet transport service to get Oliver to his vet and grooming appointments while I was stuck at work. The service is safe, punctual, and highly professional. It's a lifesaver for working professionals.",
    author: "Jessica & Oliver",
    pet: "French Bulldog",
    service: "Pet Transportation",
    rating: 5
  },
  {
    quote: "Finding trustworthy pet care is difficult, but Karlee exceeded all expectations. She spent quality time playing with Nala and made sure everything was clean and tidy. The best pet service in Louisiana, by far.",
    author: "Christopher & Nala",
    pet: "Calico Cat",
    service: "Drop-In Visits",
    rating: 5
  }
];

export function TestimonialsPage() {
  return (
    <div className="bg-cream pt-32 pb-24">
      {/* Page Header */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-blush tracking-widest uppercase text-sm font-semibold mb-4 block">
            Client Stories
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-slate mb-8 leading-tight">
            The <span className="italic text-blush">Southern Standard</span> of Care
          </h1>
          <p className="text-xl text-slate/60 font-light leading-relaxed">
            Read stories from pet owners who trust Southern Strolls with their most cherished companions. We pride ourselves on reliability, love, and professional standards.
          </p>
        </motion.div>
      </section>

      {/* Testimonials Masonry/Grid Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-slate/5 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Quote Mark Decoration */}
              <div className="absolute top-6 right-8 text-mint/20 group-hover:text-mint/40 transition-colors duration-500">
                <Quote className="w-12 h-12 rotate-180" />
              </div>

              <div>
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6 text-blush">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-slate/75 font-light leading-relaxed mb-8 italic relative z-10">
                  "{t.quote}"
                </p>
              </div>

              <div className="border-t border-slate/5 pt-6 mt-auto">
                <p className="text-lg font-serif text-slate font-medium">
                  {t.author}
                </p>
                <div className="flex justify-between items-center text-xs tracking-widest uppercase text-slate/40 mt-1 font-medium">
                  <span>{t.pet}</span>
                  <span className="bg-mint/30 text-slate px-2 py-0.5 rounded text-[10px]">
                    {t.service}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Showcase Image Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[450px] rounded-[3rem] overflow-hidden shadow-xl"
        >
          <img
            src="/images/testimonial_happy_dog_1772814775314.png"
            alt="Happy dog enjoying pet sitting"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate/20" />
          <div className="absolute bottom-12 left-12 right-12 text-cream max-w-xl">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Every Pet Deserves Exceptional Care</h2>
            <p className="text-cream/80 font-light leading-relaxed">
              We treat every walk, check-in, and transport with the attention and love that your pet experiences when they are with you.
            </p>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <h2 className="text-4xl font-serif text-slate">Join Our Happy Family</h2>
          <p className="text-lg text-slate/60 font-light leading-relaxed">
            See for yourself why dog parents and cat parents across the Lafayette area love Southern Strolls. Set up your client account today!
          </p>
          <a
            href="https://www.timetopet.com/portal/southernstrolls/create-account"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate hover:bg-mint text-cream hover:text-slate px-8 py-4 rounded-full tracking-widest uppercase text-sm font-semibold transition-all duration-300 shadow-lg inline-flex items-center gap-3"
          >
            Inquire Now <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>
    </div>
  );
}
