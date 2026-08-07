import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream font-sans text-slate selection:bg-blush selection:text-cream">
        <ScrollToTop />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
          </Routes>
        </main>

        <Footer />
        <Analytics />
      </div>
    </BrowserRouter>
  );
}
