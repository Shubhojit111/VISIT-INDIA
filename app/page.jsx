import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import MarqueeBanner from '@/components/MarqueeBanner';
import About from '@/components/About';
import DetailedRoute from '@/components/DetailedRoute';
import PlacesGrid from '@/components/PlacesGrid';
import Included from '@/components/Included';
import Hosts from '@/components/Hosts';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Faq from '@/components/Faq';
import Cta from '@/components/Cta';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <MarqueeBanner />
        <About />
        <DetailedRoute />
        <PlacesGrid />
        <Included />
        <Hosts />
        <Testimonials />
        <Pricing />
        <Faq />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
