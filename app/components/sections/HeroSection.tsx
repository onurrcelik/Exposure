import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function HeroSection() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-text-primary mb-6 animate-fade-in">
            Exposure — the world&apos;s largest AI developer community
          </h1>

          <p className="text-base md:text-lg text-text-primary/80 max-w-xl mx-auto mb-8 animate-slide-up">
            Join a global network of AI builders, share your work, and get discovered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Button variant="primary" size="lg">
              Find a chapter
            </Button>
            <Button variant="secondary" size="lg">
              Upcoming events
            </Button>
          </div>

          <p className="text-sm text-text-primary/60">
            Free to join. Events in 70+ cities.
          </p>
        </div>
      </Container>

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-blue-500/5 to-transparent pointer-events-none" />
    </section>
  );
}
