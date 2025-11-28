import { Container } from '../ui/Container';
import Image from 'next/image';

const features = [
  {
    title: 'The Architecture & Scaling Laws of LLMs',
    excerpt: 'A structural analysis of transformer attention mechanisms, inference optimization, and the mathematical principles defining the next generation of models.',
    tag: 'Technical Deep Dive',
    date: 'June, 2025',
    image: '/images/LLM.png',
  },
  {
    title: 'The Connectivity Layer: Model Context Protocol (MCP)',
    excerpt: 'Analyzing how MCP is standardizing the interface between AI models and data systems, and why it is becoming the new "USB-C" for AI infrastructure.',
    tag: 'Emerging Standards',
    date: 'July, 2025',
    image: '/images/mcp.png',
  },
  {
    title: 'Building Production-Grade RAG',
    excerpt: 'Strategies for high-accuracy retrieval. Moving from basic vector search to advanced re-ranking, hybrid search, and hallucination control in enterprise applications.',
    tag: 'System Engineering',
    date: 'August, 2025',
    image: '/images/RAG.png',
  },
  {
    title: 'Algorithmic Acquisition: Optimizing CAC via Meta Ads',
    excerpt: 'Moving beyond creative testing. A data-driven approach to signal resilience, campaign structure, and scaling user acquisition for early-stage tech products.',
    tag: 'Growth & Scale',
    date: 'September, 2025',
    image: '/images/Meta.png',
  },
  {
    title: 'Signal vs. Noise: What Top-Tier Capital is Hunting',
    excerpt: 'A closed-door session with e2VC, with a principal-level breakdown of the specific metrics and narratives driving the biggest deals in the Turkish diaspora ecosystem right now.',
    tag: 'Closed Door: e2VC',
    date: 'October, 2025',
    image: '/images/e2vc.png',
    isHighlighted: true,
  },
];

export function FeatureCardsGrid() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Latest News & Events
          </h2>
          <p className="text-base md:text-lg text-text-primary/70 max-w-2xl mx-auto">
            Stay updated with the latest happenings in the AI community
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 max-w-5xl mx-auto">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="group bg-bg-card rounded-lg overflow-hidden border border-border-light hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer max-w-xs"
              >
              <div className="aspect-video w-full bg-gradient-to-br from-brand-blue-400/20 to-accent-peach/20 overflow-hidden relative">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                    feature.isHighlighted
                      ? 'bg-gradient-to-r from-brand-blue-500 to-brand-blue-600 text-white'
                      : 'bg-accent-peach text-text-primary'
                  }`}>
                    {feature.tag}
                  </span>
                  <span className="text-xs text-text-primary/50">{feature.date}</span>
                </div>

                <h3 className="text-sm font-semibold text-text-primary mb-1.5 line-clamp-2">
                  {feature.title}
                </h3>

                <p className="text-xs text-text-primary/70 line-clamp-3">
                  {feature.excerpt}
                </p>
              </div>
            </div>
            ))}
          </div>

          {/* Second row - 2 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            {features.slice(3).map((feature, index) => (
              <div
                key={index + 3}
                className="group bg-bg-card rounded-lg overflow-hidden border border-border-light hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer max-w-xs"
              >
                <div className="aspect-video w-full bg-gradient-to-br from-brand-blue-400/20 to-accent-peach/20 overflow-hidden relative">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                      feature.isHighlighted
                        ? 'bg-gradient-to-r from-brand-blue-500 to-brand-blue-600 text-white'
                        : 'bg-accent-peach text-text-primary'
                    }`}>
                      {feature.tag}
                    </span>
                    <span className="text-xs text-text-primary/50">{feature.date}</span>
                  </div>

                  <h3 className="text-sm font-semibold text-text-primary mb-1.5 line-clamp-2">
                    {feature.title}
                  </h3>

                  <p className="text-xs text-text-primary/70 line-clamp-3">
                    {feature.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
