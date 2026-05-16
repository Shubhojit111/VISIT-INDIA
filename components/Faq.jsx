'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqItems = [
  {
    question: 'What is included in the tour price?',
    answer: 'Our tour price is all-inclusive, covering international flights, 4-star accommodations (twin-share), all ground transfers, meals listed in the itinerary, two local guides, and a professional photo session. We aim for a hassle-free experience!',
  },
  {
    question: 'What is the group size?',
    answer: 'We believe in intimate and personalized experiences, so our group size is limited to a maximum of 14 travelers.',
  },
  {
    question: 'What kind of accommodation can I expect?',
    answer: 'You\'ll stay in carefully selected 4-star hotels that reflect the local culture and provide comfort. In some locations, we also include unique experiences like a heritage palace stay.',
  },
  {
    question: 'Are meals included?',
    answer: 'Yes, all meals listed in the detailed itinerary are included. We curate dining experiences from award-winning restaurants to authentic local eateries.',
  },
  {
    question: 'What if I need to cancel my trip?',
    answer: 'We offer full travel insurance that covers medical emergencies, baggage loss, and trip cancellation from day one. Please refer to our terms and conditions for detailed refund policies.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-midnight py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="h-px w-12 md:w-16 bg-ivory/40" />
            <span className="text-xs md:text-sm tracking-[0.3em] text-ivory/60 font-sans uppercase">
              08 — FAQ
            </span>
          </div>
          
          <h2 className="font-sans text-5xl md:text-7xl lg:text-8xl text-ivory tracking-wider font-light flex items-center gap-6 md:gap-8 flex-wrap">
            FREQUENTLY <span className="font-serif italic text-saffron/80 lowercase tracking-[0.05em] text-[1.1em]">asked</span> QUESTIONS
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-6">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-ivory/10 rounded-xl overflow-hidden bg-white/[0.02] backdrop-blur-sm"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors hover:bg-white/[0.02]"
              >
                <span className="font-serif text-xl md:text-2xl text-ivory tracking-wide">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-ivory/10 text-ivory flex-shrink-0 ml-4"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
                      <p className="text-ivory/70 font-sans font-light leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}