export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-serif text-slate mb-8 leading-tight">
              The <span className="italic text-mint">Southern Standard</span> of Care
            </h2>
            <p className="text-xl text-slate/70 font-light leading-relaxed mb-12">
              We believe that pet care should be as refined and reliable as the finest hospitality. Our clients trust us with their most cherished companions because we never compromise on quality, safety, or affection.
            </p>

            <div className="space-y-8">
              <div className="border-l-2 border-blush pl-6">
                <p className="text-2xl font-serif text-slate italic mb-4">
                  "Southern Strolls provides a level of service I didn't know existed. The peace of mind is truly invaluable."
                </p>
                <p className="text-sm tracking-widest uppercase text-slate/50 font-medium">— Eleanor & Winston (Golden Retriever)</p>
              </div>
            </div>
          </div>

          <div className="relative h-[600px] rounded-[2rem] overflow-hidden">
            <img
              src="/images/testimonial_happy_dog_1772814775314.png"
              alt="Happy dog resting"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
