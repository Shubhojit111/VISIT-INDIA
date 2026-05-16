'use client';

import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const includedItems = [
  {
    title: 'TWO LOCAL GUIDES',
    description: 'Yuki (Kyoto-born) and Sameer (10 years in Tokyo) lead the trip — fluent, opinionated, and they know the back streets.',
    span: 'lg:col-span-6', // Wider card
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'INTERNATIONAL FLIGHTS',
    description: 'Round-trip economy from your nearest hub. We fly together so the trip starts at the gate.',
    span: 'lg:col-span-3', // Smaller card
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h20" />
        <path d="M14 2l4 4" />
        <path d="M14 22l4-4" />
        <path d="M2 12l5-5" />
        <path d="M2 12l5 5" />
      </svg>
    ),
  },
  {
    title: 'ALL GROUND TRANSFERS',
    description: 'Airport pickups, Shinkansen reservations, hotel transfers. You never lift a bag in a station.',
    span: 'lg:col-span-3', // Smaller card
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M7 20h10" />
        <path d="M9 16v4" />
        <path d="M15 16v4" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    title: '4-STAR HOTELS & A RYOKAN',
    description: 'Twin rooms with breakfast in Osaka and Tokyo, plus one night in a traditional Kyoto ryokan with onsen.',
    span: 'lg:col-span-4', // Medium card
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: 'SIX CURATED DINNERS',
    description: 'From a Michelin kaiseki in Kyoto to a back-alley izakaya in Osaka. The meals you would not find on your own.',
    span: 'lg:col-span-4', // Medium card
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <path d="M7 2v20" />
        <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
      </svg>
    ),
  },
  {
    title: 'ALL ENTRIES & PASSES',
    description: 'Temple tickets, teamLab Planets, JR Pass, Tokyo SkyTree fast track — everything pre-booked.',
    span: 'lg:col-span-4', // Medium card
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 10h18" />
        <path d="M8 14h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
      </svg>
    ),
  },
  {
    title: 'PRO PHOTO SESSION',
    description: 'A half-day shoot with a Kyoto-based photographer in Gion. Gallery delivered after the trip.',
    span: 'lg:col-span-6', // Wider card
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    title: 'FULL TRAVEL INSURANCE',
    description: 'Medical, baggage, and trip-cancellation cover from day one to last flight home. No fine print.',
    span: 'lg:col-span-6', // Wider card
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export default function Included() {
  return (
    <section id="included" className="relative bg-midnight py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="h-px w-12 md:w-16 bg-ivory/40" />
            <span className="text-xs md:text-sm tracking-[0.3em] text-ivory/60 font-sans uppercase">
              04 — THE EXPERIENCE
            </span>
          </div>
          
          <h2 className="font-sans text-5xl md:text-7xl lg:text-8xl text-ivory tracking-wider font-light flex items-center gap-6 md:gap-8 flex-wrap uppercase">
            EVERYTHING <span className="font-serif italic text-saffron/80 lowercase tracking-normal">already</span> HANDLED
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6 auto-rows-fr">
          {includedItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${item.span || 'col-span-1'} bg-[#141414] border border-white/5 p-8 md:p-10 rounded-2xl flex flex-col items-start hover:border-saffron/30 transition-colors duration-500`}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-ivory/5 text-saffron mb-8">
                {item.icon}
              </div>
              <h3 className="text-sm tracking-[0.2em] text-ivory font-sans uppercase mb-4">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-ivory/50 font-serif leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
