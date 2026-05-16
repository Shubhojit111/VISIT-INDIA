'use client';

import Image from 'next/image';
import FadeIn from './FadeIn';

const cities = [
  {
    days: 'DAYS 1 — 3',
    name: 'DELHI',
    subtitle: 'Where history breathes',
    bullets: ['Old Delhi street food', 'Majestic Red Fort', 'Rickshaw in Chandni Chowk'],
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    days: 'DAYS 4 — 6',
    name: 'JAIPUR',
    subtitle: 'Where color lives',
    bullets: ['Hawa Mahal at dawn', 'Sprawling Amber Fort', 'Royal City Palace'],
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80',
  },
  {
    days: 'DAYS 7 — 10',
    name: 'KERALA',
    subtitle: 'Where nature dreams',
    bullets: ['Houseboat backwaters', 'Munnar tea hills', 'Fort Kochi heritage'],
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
  },
  {
    days: 'DAYS 11 — 12',
    name: 'KOLKATA',
    subtitle: 'Where culture stays',
    bullets: ['Victoria Memorial', 'Hooghly River walks', 'Authentic Bengali sweets'],
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function CitiesGrid() {
  return (
    <section id="detailed-route" className="relative bg-midnight py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Section Header */}
        <FadeIn className="mb-12 md:mb-16">
          <div className="flex items-center gap-6 mb-8">
            <div className="h-px w-12 md:w-16 bg-ivory/40" />
            <span className="text-xs md:text-sm tracking-[0.3em] text-ivory/60 font-sans uppercase">
              02 — THE PATH
            </span>
          </div>
          
          <h2 className="font-sans text-5xl md:text-7xl lg:text-8xl text-ivory tracking-wider font-light flex items-center gap-6 md:gap-8 flex-wrap uppercase">
            FOUR CITIES <span className="font-serif italic text-saffron/80 lowercase tracking-[0.05em] text-[1.1em]">one</span> JOURNEY
          </h2>
        </FadeIn>

        {/* Cities Cards Grid — 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {cities.map((city, index) => (
            <FadeIn
              key={city.name}
              delay={index * 0.1}
              duration={0.6}
              className="bg-[#141414] rounded-3xl overflow-hidden flex flex-col group border border-white/5 hover:border-saffron/20 transition-colors duration-500"
            >
              {/* Image Area */}
              <div className="relative h-80 md:h-[400px] overflow-hidden">
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content Area */}
              <div className="p-10 md:p-12 flex-1 flex flex-col">
                <span className="text-xs tracking-[0.3em] text-ivory/40 font-sans uppercase mb-4">
                  {city.days}
                </span>
                <h3 className="text-4xl md:text-5xl text-ivory font-sans tracking-widest mb-3">
                  {city.name}
                </h3>
                <p className="text-lg md:text-xl text-ivory/60 font-serif italic mb-10 tracking-wide">
                  {city.subtitle}
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-auto">
                  {city.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-4 text-base text-ivory/70 font-sans tracking-wide">
                      <div className="w-1.5 h-1.5 rounded-full bg-saffron/60" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}