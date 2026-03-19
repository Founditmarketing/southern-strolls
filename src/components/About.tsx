import { ArrowRight } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-32 bg-mint/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
          <div className="w-full md:w-5/12">
            <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] bg-slate/5 shadow-xl">
              {/* Photo Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-slate/40 flex-col bg-slate/5">
                <span className="text-xl font-medium tracking-widest uppercase mb-2">Karlee Kitchen</span>
                <span className="text-sm font-light">(Photo coming soon)</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-7/12">
            <span className="text-blush tracking-widest uppercase text-sm font-medium mb-6 block">
              Meet Your Sitter
            </span>
            <h2 className="text-5xl md:text-6xl font-serif text-slate mb-10 leading-tight">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-slate/70 font-light leading-relaxed">
              <p>
                Hi, I'm Karlee Kitchen, the owner of Southern Strolls. Animals have always had a special place in my heart, and starting this business is a way for me to combine that love with dependable, personalized care for pets and the people who love them.
              </p>
              <p>
                I understand how important it is to find someone you can truly trust with your pets. They are family, and they deserve to be cared for with patience, kindness, and attention to their individual needs. That's why I focus on creating a safe, loving, and stress-free experience for every pet in my care, whether I'm providing in-home pet care, dog walking, transportation, or drop-in visits.
              </p>
              <p>
                I take pride in being reliable, communicative, and attentive to detail. My goal is for every client to feel confident knowing their pets are in good hands and being treated with the same love and care I would give my own. I also know how important it is to respect your home, your routine, and the trust you place in me each time you book a service.
              </p>
              <p>
                As part of my commitment to professionalism and high standards in pet care, I am proud to be a part of the International Boarding & Pet Services Association (IBPSA). Being associated with a respected professional organization reflects my dedication to continued learning, quality care, and providing services pet parents can feel good about.
              </p>
              <p>
                At Southern Strolls, this is more than just a job to me. It's something I'm truly passionate about. I love building relationships with both pets and their owners, and I am honored to be someone families can count on when they need loving, trustworthy care.
              </p>
            </div>
            
            <div className="mt-12">
              <a href="#consultation" className="group inline-flex items-center gap-4 text-sm tracking-widest uppercase text-slate font-medium">
                <span className="border-b border-slate pb-1 group-hover:border-blush group-hover:text-blush transition-colors">
                  Schedule a Meet & Greet
                </span>
                <ArrowRight className="w-4 h-4 group-hover:text-blush transition-colors group-hover:translate-x-1 transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
