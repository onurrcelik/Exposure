import { Container } from '../ui/Container';
import { Youtube, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const footerLinks = {
  explore: [
    { label: 'About Exposure', href: '#' },
    { label: 'Contact us', href: '#' },
  ],
  community: [
    { label: 'Chapters', href: '#' },
    { label: 'AI News', href: '#' },
    { label: 'Events', href: '#' },
  ],
  legal: [
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ],
};

const socialLinks = [
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'X (Twitter)' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export function Footer() {
  return (
    <footer className="bg-bg-page border-t border-border-light">
      <Container className="py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                E
              </div>
              <span className="text-text-primary font-semibold text-lg">Exposure</span>
            </div>
            <p className="text-sm text-text-primary/70 mb-4">
              Connecting AI builders worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-text-primary font-semibold mb-4 text-sm">Explore</h3>
            <ul className="space-y-2">
              {footerLinks.explore.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-text-primary/70 hover:text-brand-blue-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-text-primary font-semibold mb-4 text-sm">Community</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-text-primary/70 hover:text-brand-blue-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-text-primary font-semibold mb-4 text-sm">Social</h3>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-text-primary/70 hover:text-brand-blue-500 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-text-primary font-semibold mb-4 text-sm">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-text-primary/70 hover:text-brand-blue-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border-light text-center">
          <p className="text-sm text-text-primary/60">
            © 2018–2025 Exposure Community. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
