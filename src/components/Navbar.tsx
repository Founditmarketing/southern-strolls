import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    setIsMobileServicesOpen(false);
  }, [location]);

  const serviceLinks = [
    { name: "Drop-In Visit (30 min)", href: "/services/drop-in-30", desc: "Routine-based care at home" },
    { name: "Dog Walking", href: "/services/dog-walking", desc: "Private neighborhood strolls" },
    { name: "Quick Drop In Visits", href: "/services/quick-drop-in", desc: "15 min potty breaks & checks" },
    { name: "Pet Transportation", href: "/services/pet-transportation", desc: "Safe rides to local appointments" }
  ];

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150); // slight delay to prevent abrupt closing
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500",
      scrolled ? "bg-cream/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="/images/newSouthern Strolls logo 2026.JPG"
                alt="Southern Strolls"
                className={cn(
                  "transition-all duration-500 rounded-xl bg-white/90 p-1 object-contain",
                  scrolled ? "h-12 md:h-20" : "h-14 md:h-28"
                )}
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-10 items-center">
            {/* Services Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={cn(
                  "inline-flex items-center gap-1.5 text-sm tracking-widest uppercase font-semibold text-slate/75 hover:text-blush transition-colors cursor-pointer",
                  location.pathname.startsWith('/services') && "text-blush font-bold"
                )}
              >
                Services <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isDropdownOpen && "rotate-180")} />
              </button>

              {/* Services Dropdown Menu */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full -left-10 mt-3 w-80 bg-white border border-slate/5 rounded-2xl shadow-xl p-4 space-y-1"
                  >
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block px-4 py-3 rounded-xl hover:bg-cream transition-colors group"
                      >
                        <p className="text-sm font-serif text-slate font-semibold group-hover:text-blush transition-colors">
                          {service.name}
                        </p>
                        <p className="text-xs text-slate/50 font-light mt-0.5">
                          {service.desc}
                        </p>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/about"
              className={cn(
                "text-sm tracking-widest uppercase font-semibold text-slate/75 hover:text-blush transition-colors",
                location.pathname === '/about' && "text-blush font-bold"
              )}
            >
              About Us
            </Link>

            <Link
              to="/testimonials"
              className={cn(
                "text-sm tracking-widest uppercase font-semibold text-slate/75 hover:text-blush transition-colors",
                location.pathname === '/testimonials' && "text-blush font-bold"
              )}
            >
              Testimonials
            </Link>

            <a
              href="https://www.timetopet.com/portal/southernstrolls"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-widest uppercase font-semibold text-slate/75 hover:text-blush transition-colors"
            >
              Client Portal
            </a>

            <a
              href="https://www.timetopet.com/portal/southernstrolls/create-account"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate hover:bg-mint hover:text-slate text-cream px-6 py-2.5 rounded-full text-sm tracking-widest uppercase font-semibold transition-all shadow-sm"
            >
              Inquire
            </a>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-cream border-t border-slate/10 shadow-xl overflow-y-auto max-h-[85vh]"
          >
            <div className="px-6 py-8 space-y-5 flex flex-col">
              {/* Mobile Services Accordion */}
              <div className="border-b border-slate/5 pb-4">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex justify-between items-center w-full text-left text-lg tracking-widest uppercase font-semibold text-slate"
                >
                  Services
                  <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", isMobileServicesOpen && "rotate-185")} />
                </button>

                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 mt-3 space-y-4 border-l border-blush/35 overflow-hidden"
                    >
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-base text-slate/75 hover:text-blush transition-colors py-1"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-lg tracking-widest uppercase font-semibold text-slate hover:text-blush transition-colors border-b border-slate/5 pb-4"
              >
                About Us
              </Link>

              <Link
                to="/testimonials"
                onClick={() => setIsOpen(false)}
                className="text-lg tracking-widest uppercase font-semibold text-slate hover:text-blush transition-colors border-b border-slate/5 pb-4"
              >
                Testimonials
              </Link>

              <a
                href="https://www.timetopet.com/portal/southernstrolls"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="text-lg tracking-widest uppercase font-semibold text-slate hover:text-blush transition-colors border-b border-slate/5 pb-4"
              >
                Client Portal
              </a>

              <a
                href="https://www.timetopet.com/portal/southernstrolls/create-account"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-slate text-cream px-6 py-4 rounded-full text-sm tracking-widest uppercase font-semibold mt-4 hover:bg-mint hover:text-slate transition-colors shadow-md"
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
