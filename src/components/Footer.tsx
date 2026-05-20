import { Link } from 'react-router-dom';

export function Footer() {
  const serviceLinks = [
    { name: "Drop-In Visit (30 min)", href: "/services/drop-in-30" },
    { name: "Dog Walking", href: "/services/dog-walking" },
    { name: "Quick Drop In Visits", href: "/services/quick-drop-in" },
    { name: "Pet Transportation", href: "/services/pet-transportation" }
  ];

  return (
    <footer className="bg-slate text-cream py-20 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          {/* Logo & Info */}
          <div className="md:col-span-4">
            <Link to="/" className="mb-6 inline-block">
              <img
                src="/images/newSouthern Strolls logo 2026.JPG"
                alt="Southern Strolls"
                className="h-20 rounded-xl bg-white/90 p-1"
              />
            </Link>
            <p className="text-cream/60 font-light leading-relaxed max-w-sm mb-6 text-sm">
              Reliable, professional in-home pet care and transportation.
            </p>
            <div className="text-xs text-cream/70 font-light space-y-1">
              <p><span className="font-semibold text-cream/90">Regular Care:</span> Mon–Fri 8am–4pm</p>
              <p><span className="font-semibold text-cream/90">Pet Transport:</span> Mon–Fri 6:30am–6:30pm</p>
              <p><span className="font-semibold text-cream/90">Service Area:</span> Youngsville, Lafayette, Broussard, Scott</p>
            </div>
          </div>

          {/* Navigation Link Column */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-xs tracking-widest uppercase text-cream/40 font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm font-light text-cream/80">
              <li><Link to="/" className="hover:text-blush transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blush transition-colors">About Us</Link></li>
              <li><Link to="/testimonials" className="hover:text-blush transition-colors">Testimonials</Link></li>
              <li><a href="https://www.timetopet.com/portal/southernstrolls" target="_blank" rel="noopener noreferrer" className="hover:text-blush transition-colors">Client Portal</a></li>
            </ul>
          </div>

          {/* Services Link Column */}
          <div className="md:col-span-3">
            <h4 className="text-xs tracking-widest uppercase text-cream/40 font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-sm font-light text-cream/80">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link to={service.href} className="hover:text-blush transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Inquiries & Social */}
          <div className="md:col-span-3">
            <h4 className="text-xs tracking-widest uppercase text-cream/40 font-semibold mb-6">Inquiries</h4>
            <ul className="space-y-3 text-sm font-light text-cream/80 mb-6">
              <li><a href="mailto:southernstrollsla@gmail.com" className="hover:text-blush transition-colors block break-all">southernstrollsla@gmail.com</a></li>
              <li><a href="tel:+13189555947" className="hover:text-blush transition-colors">(318) 955-5947</a></li>
            </ul>

            <h4 className="text-xs tracking-widest uppercase text-cream/40 font-semibold mb-4">Social</h4>
            <ul className="flex gap-4 text-sm font-light text-cream/80">
              <li><a href="https://www.instagram.com/southernstrollsla" target="_blank" rel="noopener noreferrer" className="hover:text-blush transition-colors">Instagram</a></li>
              <li><span className="text-cream/20">|</span></li>
              <li><a href="https://www.facebook.com/people/Southern-Strolls/61585024023710/" target="_blank" rel="noopener noreferrer" className="hover:text-blush transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="border-t border-cream/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-widest uppercase text-cream/40 font-medium">
          <p>© {new Date().getFullYear()} Southern Strolls. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-cream transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-cream transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
