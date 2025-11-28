import { HeroSection } from './components/sections/HeroSection';
import { StatsStrip } from './components/sections/StatsStrip';
import { FeatureCardsGrid } from './components/sections/FeatureCardsGrid';
import { MissionSection } from './components/sections/MissionSection';
import { MediaGrid } from './components/sections/MediaGrid';
import { Footer } from './components/sections/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsStrip />
      <FeatureCardsGrid />
      <MissionSection />
      <MediaGrid />
      <Footer />
    </main>
  );
}
