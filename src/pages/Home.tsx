import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Packages } from '../components/Packages';
import { Benefits } from '../components/Benefits';
import { Policies } from '../components/Policies';
import { Testimonials } from '../components/Testimonials';
import { About } from '../components/About';

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Packages />
      <Benefits />
      <Policies />
      <Testimonials />
      <About />
    </>
  );
}
