import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import MarqueeBanner from '@/components/MarqueeBanner';
import About from '@/components/About';
import CitiesGrid from '@/components/CitiesGrid';
import PlacesGrid from '@/components/PlacesGrid';
import Included from '@/components/Included';
import Hosts from '@/components/Hosts';
import Pricing from '@/components/Pricing';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import CustomCursor from '@/components/CustomCursor';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navigation />
      
      <main>
        <Hero />
        <MarqueeBanner />
        <About />
        <CitiesGrid />
        <Included />
        <PlacesGrid />
        <Testimonials />
        <Hosts />
        <Pricing />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </SmoothScroll>
  );
}
