import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = [
  {
    question: "Are you insured and bonded?",
    answer: "Yes, absolutely. We carry comprehensive liability insurance and bonding to ensure your home and pets are fully protected. We can provide proof of insurance upon request."
  },
  {
    question: "Do you administer medication?",
    answer: "Yes, our team is trained to administer oral and topical medications. We can also handle insulin injections for diabetic pets. Please provide detailed instructions in the intake form."
  },
  {
    question: "Will I meet the sitter beforehand?",
    answer: "Of course! We require a complimentary 'Meet & Greet' before any service begins. This allows us to meet you and your pet, learn their routine, and pick up a key."
  },
  {
    question: "What happens in an emergency?",
    answer: "We will immediately contact you and your designated emergency contact. If veterinary care is needed, we will transport your pet to your preferred vet or the nearest emergency animal hospital."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate mb-4">Common Questions</h2>
          <p className="text-xl text-slate/80">
            Everything you need to know about our service.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate/20 rounded-2xl overflow-hidden transition-all hover:border-blush"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-cream/50 transition-colors"
              >
                <span className="text-xl font-semibold text-slate">{faq.question}</span>
                <ChevronDown
                  className={cn("text-slate/50 transition-transform duration-300", openIndex === index && "rotate-180 text-blush")}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-lg text-slate/80 leading-relaxed bg-white/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
