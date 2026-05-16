'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navigation() {
  const navItems = [
    { label: 'ABOUT', href: '#about' },
    { label: 'ROUTE', href: '#detailed-route' },
    { label: 'GALLERY', href: '#places-grid' },
    { label: 'GUIDES', href: '#hosts' },
    { label: 'PRICING', href: '#pricing' },
    { label: 'FAQ', href: '#faq' }, // Assuming FAQ will be a new section or part of contact
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between pointer-events-none"
    >
      <Link href="/" className="flex items-center gap-3 group pointer-events-auto">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
          className="text-ivory group-hover:text-saffron transition-colors duration-500"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span className="text-xs tracking-[0.3em] text-ivory font-sans font-medium group-hover:text-saffron transition-colors duration-500">
          VISIT INDIA
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-12 pointer-events-auto">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-xs tracking-[0.2em] text-ivory/80 hover:text-saffron transition-colors duration-300 font-sans"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <Link
        href="#contact"
        className="px-6 py-2.5 border border-ivory/40 rounded-full text-xs tracking-[0.2em] text-ivory hover:bg-saffron hover:border-saffron hover:text-midnight transition-all duration-500 font-sans pointer-events-auto"
      >
        BOOK THE TRIP
      </Link>
    </motion.nav>
  );
}
