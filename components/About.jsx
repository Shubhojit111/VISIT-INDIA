"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function AnimatedText({ text, className, delay = 0 }) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay + 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{
        overflow: "hidden",
        display: "inline-flex",
        flexWrap: "wrap",
        gap: "0.25em",
      }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index}>
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-midnight py-16 md:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Section Number & Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 md:mb-32"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="h-px w-12 md:w-16 bg-ivory/40" />
            <span className="text-xs md:text-sm tracking-[0.3em] text-ivory/60 font-sans uppercase">
              01 — THE STORY
            </span>
          </div>

          <h2 className="font-sans text-5xl md:text-7xl lg:text-8xl text-ivory tracking-wider font-light flex items-center gap-6 md:gap-8">
            ABOUT{" "}
            <span className="font-serif italic text-saffron/80 lowercase tracking-normal">
              the
            </span>{" "}
            TOUR
          </h2>
          <div className="h-px w-full max-w-2xl bg-ivory/20 mt-12 ml-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column — Editorial Text */}
          <div className="space-y-8 lg:pr-12">
            <AnimatedText
              text="We've spent years walking these streets, eating in these alleys, and watching saffron sunsets drift past these temples. This isn't a tour — it's the trip we'd take ourselves, with a few of you along for the ride."
              className="text-lg md:text-xl text-ivory/70 leading-relaxed font-serif font-light tracking-wide"
              delay={0}
            />
            <br />
            <AnimatedText
              text="Twelve days, four cities — Delhi, Jaipur, Kerala, and Kolkata. Logistics, transfers, restaurants, sights, and a few hidden corners — all already handled. You bring curiosity. We bring the rest."
              className="text-lg md:text-xl text-ivory/70 leading-relaxed font-serif font-light tracking-wide"
              delay={0.8}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.05,
                margin: "0px 0px -50px 0px",
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-8 flex items-center gap-6"
            >
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-midnight relative z-20">
                  <Image
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80"
                    alt="Host"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-midnight relative z-10">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                    alt="Host"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-sm tracking-[0.2em] text-ivory font-sans uppercase mb-1">
                  Sameer & Anjali
                </h4>
                <p className="text-base text-ivory/50 font-serif italic tracking-wide">
                  your hosts on the ground
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column — Staggered Images */}
          <div className="relative h-[500px] md:h-[600px] flex justify-center lg:justify-end items-center mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.05,
                margin: "0px 0px -50px 0px",
              }}
              transition={{ duration: 0.8 }}
              className="absolute left-0 md:left-10 z-20 w-[55%] md:w-[280px] aspect-[3/4] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=600&q=80"
                alt="India temple"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.05,
                margin: "0px 0px -50px 0px",
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute right-0 md:right-10 top-0 md:top-10 z-10 w-[50%] md:w-[260px] aspect-[3/4] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80"
                alt="India street"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
