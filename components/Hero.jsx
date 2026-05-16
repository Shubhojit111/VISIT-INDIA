'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import PolaroidCard from './PolaroidCard';

const polaroids = [
  { image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=400&q=80', caption: '3 cultures<br/>in India' },
  { image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=400&q=80', caption: '10 days' },
  { image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80', caption: 'gigabytes<br/>of memories' },
  { image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80', caption: 'taste India' },
  { image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=80', caption: 'feel<br/>the soul' },
];

export default function Hero() {
  const containerRef = useRef(null);
  const hover = useMotionValue(0);
  const hoverSpring = useSpring(hover, { damping: 22, stiffness: 380, mass: 0.6 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const bgDown = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const bgUp = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const bgY = useTransform([bgDown, bgUp, hoverSpring], ([down, up, h]) => down + (up - down) * h);

  const textDown = useTransform(scrollYProgress, [0, 1], [0, 280]);
  const textUp = useTransform(scrollYProgress, [0, 1], [0, -280]);
  const textY = useTransform([textDown, textUp, hoverSpring], ([down, up, h]) => down + (up - down) * h);

  const cardsX = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const cardsOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 1, 0]);
  const cardsY = useTransform(scrollYProgress, [0, 0.5], [0, -18]);

  const figureDown = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const figureUp = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const figureY = useTransform([figureDown, figureUp, hoverSpring], ([down, up, h]) => down + (up - down) * h);

  const handleHeroMouseLeave = (event) => {
    // Navigation overlaps the hero visually, so crossing into it should not
    // reset the hero parallax state.
    if (event.relatedTarget instanceof Element && event.relatedTarget.closest('nav')) {
      return;
    }

    hover.set(0);
  };

  return (
    <section ref={containerRef} className="relative h-[200vh]">
      <div
        className="sticky top-0 h-screen w-full overflow-hidden"
        onMouseEnter={() => hover.set(1)}
        onMouseLeave={handleHeroMouseLeave}
      >
        {/* Background Plane */}
        <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
          <Image
            src="/images/hero-bg.png"
            alt="Indian sunrise over Rajasthan palaces"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/20 via-transparent to-midnight/60" />
        </motion.div>

        {/* INDIA Typography — Mid-ground, behind landscape silhouette */}
        <motion.div 
          className="absolute top-[16%] left-[12%] z-10 flex items-center justify-center pointer-events-none"
          style={{ y: textY }}
        >
          <h1 
            className="font-serif text-[18vw] md:text-[18vw] leading-none tracking-[0.05em] font-light select-none transform scale-y-[1.2]"
            style={{ 
              WebkitTextStroke: '2px rgba(245, 232, 211, 0.8)',
              color: 'transparent',
              textShadow: '0 0 120px rgba(217, 164, 65, 0.1)',
              maskImage: 'linear-gradient(to bottom, black 65%, transparent 85%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 85%)',
            }}
          >
            INDIA
          </h1>
        </motion.div>

        {/* Landscape Silhouette Overlay — crops bottom of typography and lady */}
        <div className="absolute bottom-0 left-0 right-0 h-[35%] z-[35] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        {/* Saree Figure — Foreground right */}
        <motion.div 
          className="absolute  bottom-0 right-[2%] md:right-[25%] z-30 pointer-events-none"
          style={{ y: figureY }}
        >
          <Image
            src="/images/hero-lady.png"
            alt="Elegant Indian woman in embroidered saree"
            width={550}
            height={1344}
            priority
            className="h-[75vh] w-auto max-w-none object-contain object-right object-bottom drop-shadow-[0_30px_80px_rgba(0,0,0,0.65)]"
            sizes="(max-width: 768px) 42vw, 34vw"
          />
        </motion.div>

        {/* Polaroid Cards — Lower left, drifting left on scroll */}
        <motion.div 
          className="absolute bottom-[12%] left-[5%] md:left-[8%] z-40 flex gap-3 md:gap-4"
          style={{ x: cardsX, opacity: cardsOpacity, y: cardsY }}
        >
          {polaroids.map((item, index) => (
            <PolaroidCard key={index} {...item} index={index} delay={1.2} />
          ))}
        </motion.div>

        {/* Book Button — Right of saree figure */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-[10%] md:bottom-[15%] right-[5%] md:right-[8%] z-40"
        >
          <a
            href="#contact"
            className="flex items-center justify-center w-48 md:w-64 h-14 md:h-16 bg-gradient-to-r from-[#FDF0D5] to-[#E3C598] text-midnight text-xl md:text-3xl font-serif rounded-[8px] hover:from-saffron hover:to-saffron hover:shadow-[0_0_50px_rgba(217,164,65,0.4)] transition-all duration-500"
            data-cursor-hover
          >
            Book
          </a>
        </motion.div>

        {/* Social Icons — Right edge, vertical */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-6"
        >
          {['instagram', 'facebook', 'telegram'].map((social) => (
            <a
              key={social}
              href={`#${social}`}
              className="text-ivory/50 hover:text-saffron transition-colors duration-300"
              data-cursor-hover
            >
              <span className="sr-only">{social}</span>
              <SocialIcon name={social} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({ name }) {
  const icons = {
    instagram: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    facebook: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    telegram: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13" />
        <path d="M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
    ),
  };
  return icons[name] || null;
}
