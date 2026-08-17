import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Packages } from '../components/Packages';
import { Benefits } from '../components/Benefits';
import { Policies } from '../components/Policies';
import { Testimonials } from '../components/Testimonials';
import { About } from '../components/About';
import { PageSEO } from '../components/PageSEO';

const localBusinessJsonLd = {
  '@type': 'LocalBusiness',
  name: 'Southern Strolls',
  url: 'https://southernstrolls.la',
  image: 'https://southernstrolls.la/images/southern-strolls-logo.png',
  telephone: '+13189555947',
  email: 'southernstrollsla@gmail.com',
  priceRange: '$17-$45',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lafayette',
    addressRegion: 'LA',
    addressCountry: 'US',
  },
  areaServed: ['Lafayette, LA', 'Youngsville, LA', 'Broussard, LA', 'Scott, LA'].map((name) => ({
    '@type': 'City',
    name,
  })),
  employee: {
    '@type': 'Person',
    name: 'Karlee Kitchen',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '16:00',
  },
  sameAs: [
    'https://www.instagram.com/southernstrollsla',
    'https://www.facebook.com/people/Southern-Strolls/61585024023710/',
  ],
};

export function Home() {
  return (
    <>
      <PageSEO
        title="Southern Strolls | Premium Dog Walking & Pet Care"
        description="Premium dog walking, concierge pet sitting, and overnight residency services in Lafayette, Youngsville, Broussard, and Scott, LA. Trusted, personalized care for your furry family members."
        canonicalPath="/"
        jsonLd={localBusinessJsonLd}
      />
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
