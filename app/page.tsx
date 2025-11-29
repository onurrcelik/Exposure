import { HeroSection } from './components/sections/HeroSection';
import { FeatureCardsGrid } from './components/sections/FeatureCardsGrid';
import { MissionSection } from './components/sections/MissionSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MissionSection />
      <FeatureCardsGrid />
      <ContactSection />
      <Footer />
    </main>
  );
}
