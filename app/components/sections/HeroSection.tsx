import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { LogoCarousel } from '../ui/LogoCarousel';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-6xl font-extrabold text-text-primary mb-6 animate-fade-in leading-tight">
            <span className="block md:inline">Exclusive Network for</span>{' '}
            <span className="block md:inline">Global Turkish AI Talent</span>
          </h1>

          <p className="text-xs md:text-lg text-text-primary/80 max-w-xl mx-auto mb-8 animate-slide-up">
            Elite engineers and founders of the Turkish diaspora
          </p>

          <div className="flex flex-row gap-2 md:gap-4 justify-center mb-4">
            <Link href="/apply">
              <Button variant="primary" size="md" className="md:px-8 md:py-4 md:text-lg">
                Apply Now
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="secondary" size="md" className="md:px-8 md:py-4 md:text-lg">
                Contact Us
              </Button>
            </Link>
          </div>

          <p className="text-sm text-text-primary/60 mb-8">
            San Francisco • New York • Chicago • London • Amsterdam • Milan • Munich • Berlin • Helsinki • Istanbul
          </p>
        </div>

        {/* Backed by Y Combinator Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
            <div className="w-5 h-5 bg-orange-500 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-xs">Y</span>
            </div>
            <span className="text-sm font-medium text-gray-700">Y Combinator Backed Founders</span>
          </div>
        </div>
      </Container>

      <LogoCarousel />

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-blue-500/5 to-transparent pointer-events-none" />
    </section>
  );
}
