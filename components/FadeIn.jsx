'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Stable scroll-triggered fade-in using useInView.
 * Compatible with Lenis smooth scroll — fires once and never re-triggers.
 */
export default function FadeIn({
  children,
  className,
  style,
  delay = 0,
  duration = 0.8,
  y = 30,
  x = 0,
  as = 'div',
  ...props
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -60px 0px',
  });

  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y, x }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
