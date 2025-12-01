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