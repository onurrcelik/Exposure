'use client';

import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { href: '#manifesto', label: 'Our Manifesto' },
  { href: '#events', label: 'Events & Masterclasses' },
  { href: '#contact', label: 'Contact Us' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border-light backdrop-blur-md bg-white/90">
      <Container>
        <div className="flex items-center justify-between h-20">
          
          {/* 1. Logo Section */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logos/exposure-logo-transparent.png"
              alt="Exposure Logo"
              width={180} // Adjusted width for better aspect ratio control
              height={40}
              className="h-10 sm:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* 2. Right Side: Links + Button Grouped Together */}
          {/* This div groups them so they sit next to each other */}
          <div className="hidden md:flex items-center gap-8">
            
            {/* Navigation Links */}
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-text-primary hover:text-brand-blue-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Separator Line (Optional - adds a premium touch) */}
            <div className="h-6 w-px bg-gray-200"></div>

            {/* CTA Button */}
            <Link href="/apply">
              <Button variant="primary" size="md">
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button (unchanged) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-text-primary hover:text-brand-blue-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu (unchanged) */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border-light animate-fade-in bg-white">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-text-primary hover:text-brand-blue-600 transition-colors px-2 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* LinkedIn Button Mobile */}
              <div className="px-2">
                <a
                  href="https://www.linkedin.com/company/exposureai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-blue-500 hover:text-brand-blue-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>Follow us on LinkedIn</span>
                </a>
              </div>

              <div className="pt-2">
                <Link href="/apply" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="primary" size="md" className="w-full">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}