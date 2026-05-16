'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const hostsData = [
  {
    role: 'LEAD GUIDE • KERALA',
    name: 'ANJALI SHARMA',
    description: 'Kerala-born, fourth-generation tea-farming family. Spent her twenties studying art history in London before coming home to do this. Knows every hidden viewpoint in the Munnar hills.',
    languages: 'Malayalam • English • Hindi',
    favoriteSpot: 'Pre-dawn tea plantations, before the gates have anyone in front of them.',
    inTheirWords: '"The trick is to slow down, even when the city asks you not to."',
    coverImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80',
    tags: ['MUNNAR', 'KOCHI', 'ALLEPPEY'],
  },
  {
    role: 'CO-HOST • DELHI',
    name: 'SAMEER ROY',
    description: 'Mumbai-born, Delhi-resident for ten years. Former food writer for Time Out Delhi. Will fight you about which neighborhood does the best chaat — politely, but he will.',
    languages: 'English • Hindi • Marathi',
    favoriteSpot: 'A six-seat street food stall in Old Delhi that has no sign and refuses to take photos.',
    inTheirWords: '"Every great trip is really just a series of very good meals stitched together."',
    coverImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    tags: ['CHANDNI CHOWK', 'HAUZ KHAS', 'CONNAUGHT'],
  },
];

export default function Hosts() {
  return (
    <section id="hosts" className="relative bg-midnight py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Section Header */}
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
              06 — YOUR HOSTS
            </span>
          </div>
          
          <h2 className="font-sans text-5xl md:text-7xl lg:text-8xl text-ivory tracking-wider font-light flex items-center gap-6 md:gap-8 flex-wrap">
            MEET THE <span className="font-serif italic text-saffron/80 lowercase tracking-normal">two</span> PEOPLE
          </h2>
          
          <p className="mt-8 text-lg text-ivory/60 font-serif font-light tracking-wide max-w-2xl leading-relaxed">
            We don&apos;t subcontract guides. Every trip is run by the two of us, end to end. You&apos;ll know us by name within an hour of landing.
          </p>
        </motion.div>

        {/* Host Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {hostsData.map((host, index) => (
            <motion.div
              key={host.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#141414] rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Card Image Area */}
              <div className="relative h-[250px] md:h-[300px] w-full p-6 flex flex-col justify-end">
                <Image 
                  src={host.coverImage} 
                  alt={`${host.name} coverage`} 
                  fill 
                  className="object-cover z-0 opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent z-10" />
                
                <div className="relative z-20 flex items-end justify-between w-full">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#141414] relative">
                    <Image src={host.avatar} alt={host.name} fill className="object-cover" />
                  </div>
                  
                  {/* Tags */}
                  <div className="flex gap-2">
                    {host.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] tracking-[0.15em] text-ivory/80 uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <div className="mb-6">
                  <span className="text-xs tracking-[0.2em] text-ivory/50 font-sans uppercase mb-2 block">
                    {host.role}
                  </span>
                  <h3 className="font-sans text-3xl text-ivory tracking-wide uppercase">
                    {host.name}
                  </h3>
                </div>
                
                <p className="text-ivory/70 font-serif font-light leading-relaxed tracking-wide mb-10 text-[15px] md:text-base">
                  {host.description}
                </p>

                <div className="space-y-6 mt-auto border-t border-white/5 pt-8">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ivory/40">
                        <path d="m5 8 6 6" />
                        <path d="m4 14 6-6 2-3" />
                        <path d="M2 5h12" />
                        <path d="M7 2h1" />
                        <path d="m22 22-5-10-5 10" />
                        <path d="M14 18h6" />
                      </svg>
                      <span className="text-[10px] tracking-[0.2em] text-ivory/40 uppercase">Languages</span>
                    </div>
                    <p className="text-base text-ivory/80 font-serif italic pl-6 tracking-wide">{host.languages}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ivory/40">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span className="text-[10px] tracking-[0.2em] text-ivory/40 uppercase">Favorite Spot</span>
                    </div>
                    <p className="text-base text-ivory/80 font-serif italic pl-6 tracking-wide">{host.favoriteSpot}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ivory/40">
                        <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                        <line x1="6" x2="6" y1="2" y2="4" />
                        <line x1="10" x2="10" y1="2" y2="4" />
                        <line x1="14" x2="14" y1="2" y2="4" />
                      </svg>
                      <span className="text-[10px] tracking-[0.2em] text-ivory/40 uppercase">In Their Words</span>
                    </div>
                    <p className="text-base text-ivory/80 font-serif italic pl-6 tracking-wide">{host.inTheirWords}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
