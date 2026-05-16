'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const navItems = [
    { label: 'ABOUT', href: '#about' },
    { label: 'ROUTE', href: '#detailed-route' },
    { label: 'GALLERY', href: '#places-grid' },
    { label: 'GUIDES', href: '#hosts' },
    { label: 'PRICING', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <footer className="bg-midnight border-t border-ivory/10 py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -50px 0px" }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Left Nav */}
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs tracking-[0.2em] text-ivory/50 hover:text-saffron transition-colors duration-300 font-sans"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <div className="flex items-center gap-2">
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
              className="text-ivory/50"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span className="text-xs tracking-[0.3em] text-ivory/50 font-sans">
              VISIT INDIA
            </span>
          </div>

          {/* Right Social */}
          <div className="flex items-center gap-4">
            {['instagram', 'facebook', 'telegram'].map((social) => (
              <a
                key={social}
                href={`#${social}`}
                className="text-ivory/40 hover:text-saffron transition-colors duration-300"
              >
                <span className="sr-only">{social}</span>
                <SocialIcon name={social} />
              </a>
            ))}
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -50px 0px" }}
          className="text-center text-ivory/30 text-xs mt-8 font-serif italic"
        >
          &copy; {new Date().getFullYear()} Visit India. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}

function SocialIcon({ name }) {
  const icons = {
    instagram: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    facebook: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    telegram: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13" />
        <path d="M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
    ),
  };
  return icons[name] || null;
}
