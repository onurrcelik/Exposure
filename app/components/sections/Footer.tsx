import { Container } from '../ui/Container';
import { Youtube, Linkedin, Twitter, Instagram } from 'lucide-react';
import Image from 'next/image';

const socialLinks = [
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'X (Twitter)' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-border-light relative overflow-hidden">
      <Container className="py-12 md:py-16">
        <div className="relative z-10">
          {/* Logo and Description */}
          <div className="max-w-xl mb-8">
            <div className="mb-4">
              <Image
                src="/logos/exposure-logo-transparent.png"
                alt="Exposure Logo"
                width={1185}
                height={239}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-text-primary/60 mb-6 leading-relaxed">
            Exclusive Network for Global Turkish AI Talent

            </p>

            
          </div>

          {/* Divider */}
          <div className="border-t border-border-light my-8"></div>

          {/* Copyright */}
          <div>
            <p className="text-sm text-text-primary/50">
              © 2025 Exposure. All rights reserved.
            </p>
          </div>
        </div>

      </Container>
    </footer>
  );
}
