import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Packages } from './components/Packages';
import { Policies } from './components/Policies';
import { Testimonials } from './components/Testimonials';
import { Benefits } from './components/Benefits';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-sans text-slate selection:bg-blush selection:text-cream">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Packages />
        <Benefits />
        <Policies />
        <Testimonials />
        <About />
      </main>

      <Footer />
    </div>
  );
}
