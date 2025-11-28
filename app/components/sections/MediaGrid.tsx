import { Container } from '../ui/Container';
import { Play } from 'lucide-react';

const mediaItems = [
  {
    title: 'Building AI Agents: A Workshop Series',
    speaker: 'Dr. Sarah Chen',
    duration: '14 videos',
    category: 'Workshop',
    isLive: false,
  },
  {
    title: 'AI Community Fireside Chat',
    speaker: 'Live with Industry Leaders',
    duration: 'Live Now',
    category: 'Live Event',
    isLive: true,
  },
  {
    title: 'Getting Started with LLMs',
    speaker: 'Alex Rodriguez',
    duration: '8 videos',
    category: 'Tutorial',
    isLive: false,
  },
];

export function MediaGrid() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Talks, Workshops & Series
          </h2>
          <p className="text-base md:text-lg text-text-primary/70 max-w-2xl mx-auto">
            Learn from experts and grow your AI skills with our curated content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-video bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {item.isLive && (
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue-500 text-white rounded-full text-xs font-semibold uppercase">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    Live
                  </span>
                </div>
              )}

              <div className="absolute bottom-3 left-3 z-10">
                <span className="inline-block px-3 py-1 bg-black/70 text-white rounded-full text-xs">
                  {item.duration}
                </span>
              </div>

              <div className="absolute bottom-3 right-3 z-10 text-right max-w-[60%]">
                <div className="text-white font-semibold text-sm mb-1">
                  {item.title}
                </div>
                <div className="text-white/80 text-xs">
                  {item.speaker}
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Play className="w-8 h-8 text-brand-blue-500 ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
