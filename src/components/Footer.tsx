export function Footer() {
  return (
    <footer className="bg-slate text-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <a href="#" className="font-serif italic font-semibold text-3xl tracking-tight mb-6 block">
              Southern Strolls
            </a>
            <p className="text-cream/60 font-light leading-relaxed max-w-sm mb-6">
              Reliable, professional in-home pet care and transportation.
            </p>
            <div className="text-sm text-cream/80 font-light space-y-1">
              <p><span className="font-medium text-cream">Hours:</span> Mon–Thu 8am–4pm | Fri 8am–1pm</p>
              <p><span className="font-medium text-cream">Service Area:</span> Youngsville, Lafayette, Broussard, Scott</p>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-xs tracking-widest uppercase text-cream/40 font-medium mb-6">Inquiries</h4>
            <ul className="space-y-4 font-light text-cream/80">
              <li><a href="mailto:hello@acadianapet.com" className="hover:text-blush transition-colors">hello@acadianapet.com</a></li>
              <li><a href="tel:+13375551234" className="hover:text-blush transition-colors">(337) 555-1234</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs tracking-widest uppercase text-cream/40 font-medium mb-6">Social</h4>
            <ul className="space-y-4 font-light text-cream/80">
              <li><a href="#" className="hover:text-blush transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-blush transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest uppercase text-cream/40 font-medium">
          <p>© {new Date().getFullYear()} Southern Strolls. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
