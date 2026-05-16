'use client';

import { motion } from 'framer-motion';

const handledItems = [
  {
    title: 'FLIGHTS & TRANSFERS',
    description: 'All domestic airfare and private chauffeured transfers in premium SUVs.',
    icon: '✈️',
    size: 'md:col-span-2 lg:col-span-2',
    bg: 'bg-ivory/5',
  },
  {
    title: 'LUXURY STAYS',
    description: 'Hand-picked 5-star heritage palaces and luxury boutique hotels.',
    icon: '🏨',
    size: 'md:col-span-1 lg:col-span-1 lg:row-span-2',
    bg: 'bg-saffron/10',
  },
  {
    title: 'EXPERT HOSTS',
    description: 'Two dedicated local experts with you for the entire journey.',
    icon: '🗺️',
    size: 'md:col-span-1 lg:col-span-1',
    bg: 'bg-ivory/5',
  },
  {
    title: 'CULINARY TOUR',
    description: 'All meals included: from secret street food to award-winning fine dining.',
    icon: '🥘',
    size: 'md:col-span-1 lg:col-span-1',
    bg: 'bg-ivory/5',
  },
  {
    title: 'PHOTO SESSIONS',
    description: 'A professional photographer capturing your most memorable moments.',
    icon: '📸',
    size: 'md:col-span-1 lg:col-span-1',
    bg: 'bg-ivory/5',
  },
  {
    title: 'ALL-ACCESS PASS',
    description: 'All entry fees, heritage walk costs, and private activity charges covered.',
    icon: '🎟️',
    size: 'md:col-span-2 lg:col-span-2',
    bg: 'bg-ivory/5',
  },
];

export default function Included() {
  return (
    <section id="included" className="relative bg-midnight py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="h-px w-12 md:w-16 bg-ivory/40" />
            <span className="text-xs md:text-sm tracking-[0.3em] text-ivory/60 font-sans uppercase">
              04 — THE DETAILS
            </span>
          </div>
          <h2 className="font-sans text-5xl md:text-7xl lg:text-8xl text-ivory tracking-wider font-light flex items-center gap-6 md:gap-8 flex-wrap uppercase">
            EVERYTHING <span className="font-serif italic text-saffron/80 lowercase tracking-[0.05em] text-[1.1em]">handled</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[220px]">
          {handledItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${item.size} ${item.bg} rounded-[2rem] p-10 border border-white/5 flex flex-col justify-between group hover:border-saffron/30 transition-all duration-500`}
            >
              <div className="text-5xl group-hover:scale-110 transition-transform duration-500 origin-left">
                {item.icon}
              </div>
              <div>
                <h3 className="font-sans text-lg md:text-xl tracking-[0.25em] text-ivory mb-3 uppercase">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-ivory/50 font-serif leading-relaxed tracking-wide italic">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
