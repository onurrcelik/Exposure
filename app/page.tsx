import { HeroSection } from './components/sections/HeroSection';
import { StatsStrip } from './components/sections/StatsStrip';
import { FeatureCardsGrid } from './components/sections/FeatureCardsGrid';
import { MissionSection } from './components/sections/MissionSection';
import { MediaGrid } from './components/sections/MediaGrid';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsStrip />
      <MissionSection />
      <FeatureCardsGrid />
      <ContactSection />
      <Footer />
    </main>
  );
}
