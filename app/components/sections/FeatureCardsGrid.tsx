'use client';

import { Container } from '../ui/Container';
import Image from 'next/image';
import { useState } from 'react';

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
  // Mobile carousel state - start with Signal vs. Noise and Algorithmic Acquisition
  const [currentIndex, setCurrentIndex] = useState(0);

  // Organize features in pairs for mobile carousel
  const mobilePairs = [
    [features[4], features[3]], // Signal vs. Noise, Algorithmic Acquisition
    [features[0], features[1]], // LLM Architecture, MCP
    [features[2]], // RAG (single card)
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mobilePairs.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + mobilePairs.length) % mobilePairs.length);
  };

  const renderCard = (feature: typeof features[0], index: number) => (
    <div
      key={index}
      className="group bg-bg-card rounded-lg overflow-hidden border border-border-light hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer w-full max-w-[280px] sm:max-w-xs"
    >
      <div className="aspect-video w-full bg-gradient-to-br from-brand-blue-400/20 to-accent-peach/20 overflow-hidden relative">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className="object-contain"
        />
      </div>

      <div className="p-2.5 sm:p-3">
        <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
          <span className={`inline-block px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold ${
            feature.isHighlighted
              ? 'bg-gradient-to-r from-brand-blue-500 to-brand-blue-600 text-white'
              : 'bg-accent-peach text-text-primary'
          }`}>
            {feature.tag}
          </span>
          <span className="text-[10px] sm:text-xs text-text-primary/50">{feature.date}</span>
        </div>

        <h3 className="text-xs sm:text-sm font-semibold text-text-primary mb-1 sm:mb-1.5 line-clamp-2">
          {feature.title}
        </h3>

        <p className="text-[10px] sm:text-xs text-text-primary/70 line-clamp-3">
          {feature.excerpt}
        </p>
      </div>
    </div>
  );

  return (
    <section id="events" className="py-16 sm:py-24">
      <Container>
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          Events & Masterclasses
          </h2>
          <p className="text-base md:text-lg text-text-primary/70 max-w-2xl mx-auto">
          Technical deep dives, founder playbooks, and private investor briefings. We gather weekly to dissect what's working now.
          </p>
        </div>

        {/* Mobile view - carousel with 2 cards */}
        <div className="sm:hidden flex flex-col items-center gap-4 px-4">
          {/* Cards */}
          <div className="flex flex-col items-center gap-4 w-full">
            {mobilePairs[currentIndex].map((feature, index) => renderCard(feature, index))}
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 mt-4">
            {/* Left arrow */}
            <button
              onClick={handlePrev}
              className="p-2 sm:p-3 rounded-full border-2 border-brand-blue-500 text-brand-blue-500 hover:bg-brand-blue-500 hover:text-white transition-all duration-300"
              aria-label="Previous events"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots indicator */}
            <div className="flex gap-1.5 sm:gap-2">
              {mobilePairs.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-brand-blue-500 w-4 sm:w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Right arrow */}
            <button
              onClick={handleNext}
              className="p-2 sm:p-3 rounded-full border-2 border-brand-blue-500 text-brand-blue-500 hover:bg-brand-blue-500 hover:text-white transition-all duration-300"
              aria-label="Next events"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop view - all cards */}
        <div className="hidden sm:flex flex-col items-center gap-5 max-w-5xl mx-auto px-4">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full justify-items-center">
            {features.slice(0, 3).map((feature, index) => renderCard(feature, index))}
          </div>

          {/* Second row - 2 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl justify-items-center">
            {features.slice(3).map((feature, index) => renderCard(feature, index + 3))}
          </div>
        </div>
      </Container>
    </section>
  );
}
