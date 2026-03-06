import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Services', href: '#services' },
    { name: 'The Standard', href: '#testimonials' },
    { name: 'Consultation', href: '#consultation' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500",
      scrolled ? "bg-cream/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="font-serif italic font-semibold text-2xl text-slate tracking-tight">
              Southern Strolls
            </a>
          </div>

          <div className="hidden md:flex space-x-12 items-center">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm tracking-widest uppercase font-medium text-slate/70 hover:text-blush transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#consultation"
              className="bg-slate hover:bg-mint hover:text-slate text-cream px-6 py-2.5 rounded-full text-sm tracking-widest uppercase font-medium transition-all"
            >
              Inquire
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-cream border-t border-slate/10 shadow-xl"
          >
            <div className="px-6 py-8 space-y-6 flex flex-col items-center">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg tracking-widest uppercase font-medium text-slate hover:text-blush transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#consultation"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-slate text-cream px-6 py-4 rounded-full text-sm tracking-widest uppercase font-medium mt-4 hover:bg-mint hover:text-slate transition-colors"
              >
                Inquire Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
