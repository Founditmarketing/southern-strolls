import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Heart, Award, CheckCircle } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Uncompromising Safety",
      desc: "We respect your home, your routine, and the safety of your pets above all. Every visit is covered by professional pet care insurance and backed by IBPSA standard training."
    },
    {
      icon: Heart,
      title: "Personalized Affection",
      desc: "No two pets are alike. We design our care around your companion's specific needs, dietary habits, quirks, and energy levels to make their time with us stress-free."
    },
    {
      icon: Award,
      title: "Professional Association",
      desc: "As an IBPSA member, we stay up-to-date with industry-best practices, continuing education, and high-quality pet care regulations."
    }
  ];

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
            The Story Behind the Strolls
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-slate mb-8 leading-tight">
            About Southern Strolls
          </h1>
          <p className="text-xl text-slate/60 font-light leading-relaxed">
            Founded with a passion for exceptional pet care, we bring high standards, clear communication, and personalized attention to families across Southern Louisiana.
          </p>
        </motion.div>
      </section>

      {/* Main Biography Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-slate/5 shadow-2xl">
              <img
                src="/RenderedImage.jpeg"
                alt="Karlee Kitchen - Owner of Southern Strolls"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate/30 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7 space-y-8"
          >
            <div className="space-y-6 text-lg text-slate/75 font-light leading-relaxed">
              <span className="text-blush tracking-widest uppercase text-sm font-medium block">
                Meet Your Sitter
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-slate leading-tight">
                Hi, I'm Karlee Kitchen
              </h2>
              <p>
                Animals have always had a special place in my heart, and starting Southern Strolls is a way for me to combine that lifelong love with dependable, personalized care for pets and the people who love them.
              </p>
              <p>
                I understand how important it is to find someone you can truly trust with your pets. They are family, and they deserve to be cared for with patience, kindness, and attention to their individual needs. That's why I focus on creating a safe, loving, and stress-free experience for every pet in my care.
              </p>
              <p>
                I take pride in being reliable, communicative, and attentive to detail. My goal is for every client to feel confident knowing their pets are in good hands and being treated with the same love and care I would give my own. I also know how important it is to respect your home, your routine, and the trust you place in me each time you book a service.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Standards / Credentials */}
      <section className="bg-mint/10 py-24 my-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-blush tracking-widest uppercase text-sm font-semibold mb-4 block">
                Our Commitment
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-slate mb-6 leading-tight">
                Professional Standards You Can Trust
              </h2>
              <p className="text-lg text-slate/70 font-light leading-relaxed mb-8">
                At Southern Strolls, this is more than just a job to me. It's something I'm truly passionate about. As part of my commitment to professionalism and high standards in pet care, I am proud to be a part of the International Boarding & Pet Services Association (IBPSA).
              </p>
              <div className="space-y-4">
                {[
                  "Active IBPSA Member representing quality and safety standards",
                  "Dedicated continuing education in animal behavior and pet safety",
                  "Fully insured and bonded for maximum protection",
                  "Real-time updates and transparent GPS tracking during visits"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-blush shrink-0 mt-0.5" />
                    <p className="text-slate/85 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-mint/20 rounded-bl-full -mr-8 -mt-8" />
              <h3 className="text-3xl font-serif text-slate mb-6">Why IBPSA Membership Matters</h3>
              <p className="text-slate/70 font-light leading-relaxed mb-6">
                The International Boarding & Pet Services Association (IBPSA) provides business resources, training, and legislative support for the pet care services industry.
              </p>
              <p className="text-slate/70 font-light leading-relaxed">
                By choosing a provider associated with a respected professional organization, you ensure your pet is receiving care based on current industry standards, scientific research, and an ethical code of conduct.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-slate mb-6">
            The Southern Standard
          </h2>
          <p className="text-lg text-slate/60 font-light">
            We operate under a simple set of principles that place the happiness of your pets and your peace of mind first.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {values.map((val, idx) => {
            const IconComponent = val.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white p-10 rounded-[2rem] border border-slate/5 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center text-blush mb-8 group-hover:bg-blush group-hover:text-white transition-colors duration-500">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif text-slate mb-4">{val.title}</h3>
                <p className="text-slate/60 font-light leading-relaxed">{val.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate text-cream rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(181,234,215,0.15),transparent_60%)]" />
          <h2 className="text-4xl md:text-6xl font-serif mb-8 max-w-3xl mx-auto leading-tight">
            Ready to give your pet the care they deserve?
          </h2>
          <p className="text-lg md:text-xl text-cream/70 font-light max-w-2xl mx-auto mb-12">
            Contact us today to schedule a meet & greet, or create your account in our secure client portal.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://www.timetopet.com/portal/southernstrolls/create-account"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cream hover:bg-mint text-slate hover:text-slate px-8 py-4 rounded-full tracking-widest uppercase text-sm font-semibold transition-all duration-300 shadow-lg inline-flex items-center gap-3"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+13189555947"
              className="border border-cream/20 hover:border-cream/80 text-cream px-8 py-4 rounded-full tracking-widest uppercase text-sm font-semibold transition-all duration-300"
            >
              Call (318) 955-5947
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
