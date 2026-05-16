'use client';

import { motion } from 'framer-motion';

export default function Pricing() {
  return (
    <section className="relative bg-midnight py-24 md:py-32 overflow-hidden">
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
              07 — PRICING
            </span>
          </div>
          
          <h2 className="font-sans text-5xl md:text-7xl lg:text-8xl text-ivory tracking-wider font-light flex items-center gap-6 md:gap-8 flex-wrap">
            THREE <span className="font-serif italic text-saffron/80 lowercase tracking-normal">ways</span> TO TRAVEL
          </h2>
          
          <p className="mt-8 text-lg text-ivory/60 font-serif font-light tracking-wide max-w-2xl leading-relaxed">
            Same trip, different rhythm. All prices include flights, hotels, transfers, and the dinners listed in the itinerary.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Standard Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#141414] rounded-2xl p-8 md:p-10 flex flex-col border border-white/5"
          >
            <h3 className="font-sans text-3xl text-ivory tracking-wide uppercase mb-4">
              STANDARD
            </h3>
            <p className="text-ivory/70 font-serif font-light leading-relaxed tracking-wide mb-8">
              The classic experience. Everything you need for an unforgettable journey.
            </p>

            <ul className="space-y-4 mb-12 flex-grow">
              <li className="flex items-center gap-3 text-ivory/80 font-sans text-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-saffron">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Group of 14 max
              </li>
              <li className="flex items-center gap-3 text-ivory/80 font-sans text-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-saffron">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Twin-share 4-star hotels
              </li>
              <li className="flex items-center gap-3 text-ivory/80 font-sans text-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-saffron">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                All meals listed in itinerary
              </li>
              <li className="flex items-center gap-3 text-ivory/80 font-sans text-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-saffron">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Two local guides
              </li>
              <li className="flex items-center gap-3 text-ivory/80 font-sans text-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-saffron">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Group photo session
              </li>
            </ul>

            <button className="w-full py-4 bg-ivory/10 text-ivory text-sm tracking-[0.25em] font-sans font-medium rounded-sm hover:bg-ivory/20 transition-colors duration-300 uppercase" data-cursor-hover>
              RESERVE A SEAT
            </button>
          </motion.div>

          {/* Suite Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#141414] rounded-2xl p-8 md:p-10 flex flex-col border border-saffron/5"
          >
            <h3 className="font-sans text-3xl text-saffron tracking-wide uppercase mb-4">
              SUITE
            </h3>
            <p className="text-ivory/70 font-serif font-light leading-relaxed tracking-wide mb-8">
              Upgrade your journey with enhanced comfort and exclusive perks.
            </p>

            <ul className="space-y-4 mb-12 flex-grow">
              <li className="flex items-center gap-3 text-ivory/80 font-sans text-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-saffron">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Same group, your own room
              </li>
              <li className="flex items-center gap-3 text-ivory/80 font-sans text-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-saffron">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Upgraded room category
              </li>
              <li className="flex items-center gap-3 text-ivory/80 font-sans text-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-saffron">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Private Kyoto tea ceremony
              </li>
              <li className="flex items-center gap-3 text-ivory/80 font-sans text-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-saffron">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Solo airport transfer
              </li>
              <li className="flex items-center gap-3 text-ivory/80 font-sans text-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-saffron">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Full photo gallery delivered
              </li>
              <li className="flex items-center gap-3 text-ivory/80 font-sans text-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-saffron">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Priority restaurant booking
              </li>
            </ul>

            <button className="w-full py-4 bg-saffron text-midnight text-sm tracking-[0.25em] font-sans font-medium rounded-sm hover:bg-saffron/80 transition-colors duration-300 uppercase" data-cursor-hover>
              BOOK THE SUITE
            </button>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-ivory/50 text-xs font-serif italic text-center mt-16 max-w-xl mx-auto leading-relaxed"
        >
          Deposit: 20% to hold a seat. Balance due 60 days before departure. Full refund up to 90 days out.
        </motion.p>
      </div>
    </section>
  );
}