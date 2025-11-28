import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';

export function MissionSection() {
  return (
    <section className="py-16 sm:py-24 bg-bg-section-soft">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="mb-6">Our mission & vision</Badge>

          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
            Connecting AI builders, chapters, and ideas worldwide
          </h2>

          <p className="text-base md:text-lg text-text-primary/80 leading-relaxed">
            At Exposure, we believe in the power of <strong>connecting AI communities</strong> across
            the globe. Our mission is to <strong>share ideas</strong>, foster collaboration, and
            empower builders to <strong>build in public</strong>. Join thousands of AI developers,
            researchers, and enthusiasts who are shaping the future of artificial intelligence together.
          </p>
        </div>
      </Container>
    </section>
  );
}
