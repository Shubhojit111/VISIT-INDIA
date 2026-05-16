"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "ESSENTIAL",
    price: "$4,800",
    description:
      "Perfect for social travelers who enjoy shared luxury experiences.",
    perks: [
      "Twin-share 4-star boutique stays",
      "All group ground transfers",
      "Daily curated breakfasts & dinners",
      "Two dedicated group hosts",
      "Group heritage walks",
    ],
    button: "BOOK ESSENTIAL",
    recommended: false,
  },
  {
    name: "PREMIUM",
    price: "$6,400",
    description:
      "The definitive experience with private accommodation and extra perks.",
    perks: [
      "Private 5-star heritage room",
      "Priority airport transfers",
      "All meals + private tasting menu",
      "Full professional photo package",
      "Private Kathakali dance session",
    ],
    button: "BOOK PREMIUM",
    recommended: true,
  },
  {
    name: "ULTRA LUXE",
    price: "$9,200",
    description:
      "Absolute privacy and pinnacle luxury for the discerning traveler.",
    perks: [
      "Palace suite upgrades",
      "Private luxury car & driver 24/7",
      "Personal 1-on-1 expert guide",
      "Exclusive royal family dinner",
      "Spa & wellness package included",
    ],
    button: "BOOK ULTRA LUXE",
    recommended: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative bg-midnight py-16 md:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="h-px w-12 md:w-16 bg-ivory/40" />
            <span className="text-xs md:text-sm tracking-[0.3em] text-ivory/60 font-sans uppercase">
              07 — PRICING
            </span>
          </div>

          <h2 className="font-sans text-5xl md:text-7xl lg:text-8xl text-ivory tracking-wider font-light flex items-center gap-6 md:gap-8 flex-wrap uppercase">
            THREE WAYS{" "}
            <span className="font-serif italic text-saffron/80 lowercase tracking-[0.05em] text-[1.1em]">
              to
            </span>{" "}
            TRAVEL
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.05,
                margin: "0px 0px -50px 0px",
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-10 md:p-12 rounded-[2.5rem] border ${
                plan.recommended
                  ? "border-saffron bg-saffron/[0.03] shadow-[0_0_50px_rgba(217,164,65,0.1)]"
                  : "border-white/10 bg-white/[0.02]"
              } flex flex-col`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-saffron text-midnight text-[10px] tracking-[0.3em] font-sans font-bold px-6 py-2 rounded-full">
                  RECOMMENDED
                </div>
              )}

              <div className="mb-10">
                <h3 className="text-sm tracking-[0.4em] text-ivory/60 font-sans uppercase mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl md:text-6xl text-ivory font-sans font-light tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-ivory/40 text-sm tracking-widest uppercase">
                    / person
                  </span>
                </div>
              </div>

              <p className="text-lg text-ivory/70 font-serif italic mb-10 leading-relaxed tracking-wide">
                {plan.description}
              </p>

              <ul className="space-y-6 mb-12 flex-1">
                {plan.perks.map((perk, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-sm md:text-base text-ivory/80 font-sans tracking-wide"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={plan.recommended ? "#D9A441" : "#F5E8D3"}
                      strokeWidth="2"
                      className="mt-0.5 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {perk}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-5 rounded-full text-xs tracking-[0.3em] font-sans font-bold transition-all duration-500 ${
                  plan.recommended
                    ? "bg-saffron text-midnight hover:bg-ivory"
                    : "border border-ivory/20 text-ivory hover:bg-ivory hover:text-midnight"
                }`}
              >
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
