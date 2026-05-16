'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen overflow-hidden">
      {/* Background — Cinematic Indian postcard */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1595433306946-233f47e4af3a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Tea plantations across the hills of Munnar, Kerala"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-midnight/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-20 min-h-screen flex flex-col justify-center">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-px w-12 md:w-16 bg-ivory/40" />
            <span className="text-xs md:text-sm tracking-[0.3em] text-ivory/60 font-sans uppercase">
              10 — INQUIRE
            </span>
            <div className="h-px w-12 md:w-16 bg-ivory/40" />
          </div>
          
          <h2 className="font-sans text-5xl md:text-7xl lg:text-8xl text-ivory tracking-wider font-light flex items-center justify-center gap-4 flex-wrap uppercase">
            READY WHEN <span className="font-serif italic text-saffron/80 lowercase tracking-normal">you</span> ARE
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel p-8 md:p-12 rounded-lg"
          >
            <h3 className="font-serif text-2xl md:text-3xl text-ivory mb-2 leading-tight">
              Tell us a little, we'll write back the same day.
            </h3>
            <p className="text-sm text-ivory/50 font-serif italic mb-10">
              No deposits, no commitments — just a real conversation.
            </p>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs tracking-[0.15em] text-ivory/50 mb-2 font-sans uppercase">Your Name</label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full bg-transparent border-b border-ivory/20 py-2 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-saffron transition-colors duration-300 font-sans text-sm"
                />
              </div>

              <div>
                <label className="block text-xs tracking-[0.15em] text-ivory/50 mb-2 font-sans uppercase">Email</label>
                <input
                  type="email"
                  placeholder="your@example.com"
                  className="w-full bg-transparent border-b border-ivory/20 py-2 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-saffron transition-colors duration-300 font-sans text-sm"
                />
              </div>

              <div>
                <label className="block text-xs tracking-[0.15em] text-ivory/50 mb-2 font-sans uppercase">Phone (Optional)</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full bg-transparent border-b border-ivory/20 py-2 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-saffron transition-colors duration-300 font-sans text-sm"
                />
              </div>

              <div>
                <label className="block text-xs tracking-[0.15em] text-ivory/50 mb-2 font-sans uppercase">Tell us about your trip</label>
                <textarea
                  rows={3}
                  placeholder="Travel dates, group size, anything you're curious about."
                  className="w-full bg-transparent border-b border-ivory/20 py-2 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-saffron transition-colors duration-300 font-sans text-sm resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full rounded-sm bg-saffron py-4 font-sans text-sm font-medium tracking-[0.25em] text-midnight transition-all duration-300 hover:bg-saffron/80 hover:tracking-[0.3em]"
                data-cursor-hover
              >
                SEND THE MESSAGE
              </motion.button>
            </form>
          </motion.div>

          {/* Right Column - Contact Info & Cohort */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-between space-y-12 lg:space-y-0"
          >
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-ivory mb-6 leading-tight">
                Or reach out directly — we read every message ourselves and reply within a day.
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-saffron">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <div>
                    <span className="text-xs tracking-[0.15em] text-ivory/50 font-sans uppercase block">Email Us</span>
                    <a href="mailto:hello@visitindia.travel" className="text-lg text-ivory font-serif italic tracking-wide hover:text-saffron transition-colors duration-300">hello@visitindia.travel</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-saffron">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <span className="text-xs tracking-[0.15em] text-ivory/50 font-sans uppercase block">Call or Whatsapp</span>
                    <a href="tel:+919876543210" className="text-lg text-ivory font-serif italic tracking-wide hover:text-saffron transition-colors duration-300">+91 98765 43210</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-saffron">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <span className="text-xs tracking-[0.15em] text-ivory/50 font-sans uppercase block">Office</span>
                    <p className="text-lg text-ivory font-serif italic tracking-wide leading-relaxed">Connaught Place, Delhi • Fort Kochi, Kerala</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="text-xs tracking-[0.15em] text-ivory/50 font-sans uppercase block mb-2">Spring 2028 Cohort</span>
              <p className="text-ivory font-serif italic">9 of 14 seats remaining, departing March 2028</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
