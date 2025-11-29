import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';

export function MissionSection() {
  return (
    <section id="manifesto" className="py-16 sm:py-24 bg-bg-section-soft">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="mb-6">Our Manifesto</Badge>

          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
          The Signal Before the Noise: Where Top Talent Builds in Stealth
          </h2>

          <p className="text-base md:text-lg text-text-primary/80 leading-relaxed">
  Exposure was born from a realization: the path of a founder is often walked alone. We found that trying to explain the relentless drive to build to those seeking stability was exhausting. So, we stopped trying to convince the world and started searching for our tribe.
  <br /><br />
  Today, Exposure serves as a launchpad for the Turkish diaspora's top 1%. We have watched our own members grow from ideation into <span className="font-bold text-text-primary">Y Combinator backed founders</span>, validating that the next generation of tech giants is already sitting in our meetings. This success isn't accidental; it’s driven by <span className="font-bold text-text-primary"> strong cooperation</span>. We act as a closed-loop economy where researchers, engineers, and founders elevate each other, ensuring that everyone inside is on a trajectory to build something massive.
</p>
        </div>
      </Container>
    </section>
  );
}
