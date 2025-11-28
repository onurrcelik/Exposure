import { Container } from '../ui/Container';

const features = [
  {
    title: 'AI Chapter Spotlight: San Francisco',
    excerpt: 'Discover how our San Francisco chapter is pushing the boundaries of AI innovation with weekly meetups and hackathons.',
    tag: 'Chapter Spotlight',
    date: 'Nov 25, 2025',
    image: '/images/placeholder-1.jpg',
  },
  {
    title: 'Upcoming: AI & Machine Learning Summit',
    excerpt: 'Join us for the biggest AI conference of the year featuring keynotes from industry leaders and hands-on workshops.',
    tag: 'Event',
    date: 'Dec 10, 2025',
    image: '/images/placeholder-2.jpg',
  },
  {
    title: 'Community Highlight: Building with GPT-4',
    excerpt: 'Learn how community members are leveraging GPT-4 to create innovative applications and solutions.',
    tag: 'News',
    date: 'Nov 20, 2025',
    image: '/images/placeholder-3.jpg',
  },
  {
    title: 'New Chapter Launch: Tokyo',
    excerpt: 'We are excited to announce the launch of our Tokyo chapter, bringing AI innovation to Japan.',
    tag: 'Chapter Spotlight',
    date: 'Nov 15, 2025',
    image: '/images/placeholder-4.jpg',
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-bg-card rounded-2xl overflow-hidden border border-border-light hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-video w-full bg-gradient-to-br from-brand-blue-400/20 to-accent-peach/20 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-text-primary/20 text-sm">
                  Image
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block px-3 py-1 bg-accent-peach rounded-full text-xs font-semibold text-text-primary">
                    {feature.tag}
                  </span>
                  <span className="text-xs text-text-primary/50">{feature.date}</span>
                </div>

                <h3 className="text-sm md:text-base font-semibold text-text-primary mb-2 line-clamp-2">
                  {feature.title}
                </h3>

                <p className="text-sm text-text-primary/70 line-clamp-3">
                  {feature.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
