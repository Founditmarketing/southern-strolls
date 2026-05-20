import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Check, HelpCircle, ArrowRight, Star } from 'lucide-react';
import { useState } from 'react';

const servicesData: Record<string, {
  title: string;
  tagline: string;
  price: string;
  image: string;
  desc: string[];
  included: string[];
  faqs: { q: string; a: string }[];
  testimonial: { quote: string; author: string; pet: string };
}> = {
  "drop-in-30": {
    title: "Drop-In Visit (30 min)",
    tagline: "Dedicated care that maintains your pet's exact daily routine.",
    price: "$23 / visit (+ $10 extra pet)",
    image: "/images/service_concierge_sitting_1772814744389.png",
    desc: [
      "Our 30-minute drop-in visits are designed to keep your pet's schedule consistent, happy, and stress-free while you are away. Perfect for dogs, cats, birds, or pocket pets, this service brings professional care directly to your doorstep, avoiding the anxiety of boarding facilities.",
      "During the visit, we focus entirely on your companion's physical and emotional needs. Whether they need a fresh potty break, a healthy meal, fresh water, or just a long cuddle session on the couch, we tailor every minute to their preferences.",
      "We believe that communication is the foundation of trust. That's why every single drop-in visit includes a detailed update sent straight to your phone, complete with cute photos of your pet, notes on their behavior, and confirmation of food, water, and potty status."
    ],
    included: [
      "Fresh food preparation and water bowl replenishment",
      "Outdoor potty break or litter box cleaning",
      "Bespoke play, socialization, and affection sessions",
      "Administration of oral medications or dietary supplements",
      "Basic home security checks (mail retrieval, light rotation)",
      "Real-time visit report with photos and GPS confirmation"
    ],
    faqs: [
      {
        q: "Can you administer medication during a drop-in visit?",
        a: "Yes, we can administer oral, topical, and certain pre-measured medications. Please provide detailed instructions during our initial meet & greet."
      },
      {
        q: "Do you offer drop-in visits on weekends and holidays?",
        a: "Yes, we operate 365 days a year. Holiday visits may carry a small surcharge and book up quickly, so we recommend reserving your slots early."
      },
      {
        q: "How do you access my home?",
        a: "We safely secure keys in lockboxes, use smart lock keypads, or access codes. All access credentials are encrypted and stored securely in our TimeToPet portal."
      }
    ],
    testimonial: {
      quote: "Karlee's drop-in visits have been a lifesaver. Bella gets to stay in her favorite window sill, and I get detailed reports and gorgeous pictures every single day. I couldn't ask for a better sitter.",
      author: "Michael & Bella",
      pet: "Persian Cat"
    }
  },
  "dog-walking": {
    title: "Dog Walking",
    tagline: "A refreshing, unhurried stroll tailored to your dog's pace.",
    price: "$25 (30 min) / $45 (60 min)",
    image: "/images/service_signature_stroll_1772814731135.png",
    desc: [
      "Our signature dog walking service is a refined, private experience for active dogs who appreciate the finer sniffs in life. We walk your dog individually (or with housemates) on a familiar, scenic route in your neighborhood to maintain consistency and comfort.",
      "We avoid group walks to ensure your dog receives 100% of our attention, ensuring safety and allowing them to set the pace—whether that means an energetic jog, a steady stroll, or plenty of time to explore new scents.",
      "At the end of every walk, we make sure paws are clean, fresh water is filled, and your dog is settled back in comfortably. You will receive a walk report card, tracking their route, potty breaks, and photos of their adventure."
    ],
    included: [
      "Private, individual walk (no mixing with other clients' dogs)",
      "Fresh water refill and clean up of paws upon return",
      "Treat administration (according to your guidelines)",
      "Waste pickup using biodegradable bags",
      "Detailed GPS route mapping and activity card",
      "Photo updates during their stroll"
    ],
    faqs: [
      {
        q: "Will my dog be walked with other dogs?",
        a: "No. All of our walks are completely private and focused solely on your household's dogs. This guarantees maximum safety, control, and personal affection."
      },
      {
        q: "What happens in case of extreme weather?",
        a: "In the event of heavy thunderstorms, extreme heat, or freeze alerts, we will convert the walk into a combination of a quick outdoor potty break and indoor playtime/enrichment to protect your dog's paws and health."
      },
      {
        q: "Can I schedule a recurring daily walk?",
        a: "Absolutely! Many of our clients book recurring Monday-through-Friday walks to keep their dogs happy and active during the workday. We offer package discounts for regular weekly walking services."
      }
    ],
    testimonial: {
      quote: "Southern Strolls provides a level of service I didn't know existed. Winston is always so excited when Karlee arrives, and the peace of mind knowing he's getting active exercise is invaluable.",
      author: "Eleanor & Winston",
      pet: "Golden Retriever"
    }
  },
  "quick-drop-in": {
    title: "Quick Drop In Visits",
    tagline: "A brief, efficient check-in perfect for active puppies or senior dogs.",
    price: "$17 (1 stop) / $30 (2 stops)",
    image: "/images/hero_dog_walking_1772814715743.png",
    desc: [
      "Our 15-minute quick drop-in visits are the perfect solution for pets who don't need a full walk but require a quick check-in. This service is ideal for house-training puppies, senior dogs needing mid-day relief, or cats who appreciate brief check-ins.",
      "These visits focus on efficiency and comfort. We let your dog out for a quick relief break in the yard, check their water, and give them a quick stretch of the legs and some cuddles.",
      "This service is highly stackable. For families who need extra flexibility, you can book multiple quick stops throughout the day to ensure your pets are never left waiting too long."
    ],
    included: [
      "Quick backyard potty break or indoor relief check",
      "Fresh water refreshment",
      "Quick health and comfort assessment",
      "Post-visit text update and photo",
      "Stackable booking options for morning/afternoon support"
    ],
    faqs: [
      {
        q: "Is 15 minutes enough time for my pet?",
        a: "For puppies in training, senior dogs who just need to empty their bladder, or independent cats, a 15-minute check-in is perfect. If your pet requires feeding, medication, or extended play, we recommend our 30-minute Drop-In Visit."
      },
      {
        q: "How does the '2 stops' pricing work?",
        a: "If you need two separate 15-minute check-ins in a single day (for example, one at 10:00 AM and one at 2:00 PM), we offer a discounted bundle price of $30 total."
      },
      {
        q: "Can we use this for cat sitting while we are out of town?",
        a: "Yes! Many cat owners prefer the quick check-ins to refresh water, scoop the litter box, and check on their feline companions without causing them stress."
      }
    ],
    testimonial: {
      quote: "Finding a service that offers quick 15-minute potty breaks has been fantastic for our senior dog. Karlee is extremely reliable and Tucker is always comfortable and well-cared for.",
      author: "David & Tucker",
      pet: "Senior German Shepherd"
    }
  },
  "pet-transportation": {
    title: "Pet Transportation",
    tagline: "Safe, secure, and stress-free rides to their local appointments.",
    price: "$25 (One-way) / $45 (Round-trip)",
    image: "/images/hero_elegant_dog_1772814698237.png",
    desc: [
      "Busy schedules can make it difficult to get your pet to the vet, groomer, or doggy daycare. Our professional pet transportation service provides a safe, comfortable, and air-conditioned ride for your pet within our Lafayette service area.",
      "We transport your pet in a clean, modern vehicle equipped with secure crating options or pet safety harnesses, depending on your preferences. Our priority is their physical safety and emotional comfort during the ride.",
      "We handle everything: picking your pet up from your home, keeping them calm during travel, checking them in at their destination, and bringing them safely back if you choose the round-trip option."
    ],
    included: [
      "Safe, climate-controlled transport (up to 30 mins per leg)",
      "Secure crating or crash-tested safety harness attachment",
      "Assistance with check-in/check-out at the vet or groomer",
      "Real-time status updates upon pickup and delivery",
      "Fresh water provided before and after transit"
    ],
    faqs: [
      {
        q: "What areas do you cover for transport?",
        a: "Our pet taxi service covers Youngsville, Lafayette, Broussard, and Scott. If your destination is outside these areas, please contact us for custom distance rates."
      },
      {
        q: "Do I need to be home for pickup or delivery?",
        a: "No. If you have provided us with home access (key, lockbox, keypad), we can enter, secure your pet, load them safely, and return them to their designated spot without you needing to take time off work."
      },
      {
        q: "What types of pets can you transport?",
        a: "We transport dogs, cats (who must be in a carrier), and other small domestic pets. We ensure all animals are securely fastened or crated for their safety and ours."
      }
    ],
    testimonial: {
      quote: "Oliver had his grooming appointment last Thursday and I couldn't leave the office. Southern Strolls picked him up, took him, and brought him back looking beautiful. Safe, reliable, and amazing service!",
      author: "Jessica & Oliver",
      pet: "French Bulldog"
    }
  }
};

export function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    return (
      <div className="bg-cream min-h-screen pt-40 px-8 text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif text-slate mb-6">Service Not Found</h1>
        <p className="text-slate/60 mb-8 max-w-md font-light">
          We couldn't find the service you are looking for. Please review our list of premium services.
        </p>
        <Link
          to="/"
          className="bg-slate hover:bg-mint text-cream hover:text-slate px-6 py-3 rounded-full text-sm tracking-widest uppercase font-semibold transition-all inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-cream pt-32 pb-24">
      {/* Back link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-slate/50 hover:text-blush transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>

      {/* Hero Split Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-12 gap-12 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 space-y-6"
          >
            <span className="text-blush tracking-widest uppercase text-sm font-semibold block">
              {service.price}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-slate leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-slate/60 font-light leading-relaxed">
              {service.tagline}
            </p>
            <div className="space-y-4 pt-4 text-slate/75 font-light leading-relaxed text-lg">
              {service.desc.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-slate/5 shadow-2xl">
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-mint/10 py-24 my-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-slate mb-12 text-center">
              What's Included in Every Visit
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {service.included.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="bg-white p-6 rounded-2xl flex gap-4 items-start shadow-sm border border-slate/5"
                >
                  <div className="w-8 h-8 rounded-full bg-mint flex items-center justify-center text-slate shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-slate/75 font-light text-base leading-snug">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-l-4 border-blush pl-6 md:pl-10 text-left max-w-2xl mx-auto"
        >
          <div className="flex gap-1 text-blush mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <p className="text-2xl font-serif text-slate italic mb-6 leading-relaxed">
            "{service.testimonial.quote}"
          </p>
          <p className="text-sm tracking-widest uppercase text-slate/50 font-medium">
            — {service.testimonial.author} ({service.testimonial.pet})
          </p>
        </motion.div>
      </section>

      {/* Service-Specific FAQs */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-slate mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {service.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate/5 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left px-8 py-6 flex justify-between items-center gap-4 focus:outline-none"
              >
                <span className="text-lg font-serif text-slate font-medium flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-blush shrink-0" />
                  {faq.q}
                </span>
                <span className="text-2xl text-slate/40 transition-transform duration-300 font-light select-none">
                  {openFaq === idx ? "−" : "+"}
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out px-8 overflow-hidden ${
                  openFaq === idx ? "pb-6 max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-slate/60 font-light leading-relaxed text-base border-t border-slate/5 pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate text-cream rounded-[3rem] p-12 md:p-20 max-w-5xl mx-auto relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(181,234,215,0.15),transparent_60%)]" />
          <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
            Schedule {service.title} Today
          </h2>
          <p className="text-lg text-cream/70 font-light max-w-2xl mx-auto mb-10">
            Create an account in our secure portal to select your schedule, manage instructions, and view detailed reports.
          </p>
          <a
            href="https://www.timetopet.com/portal/southernstrolls/create-account"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cream hover:bg-mint text-slate hover:text-slate px-8 py-4 rounded-full tracking-widest uppercase text-sm font-semibold transition-all duration-300 shadow-lg inline-flex items-center gap-3"
          >
            Inquire About Service <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>
    </div>
  );
}
