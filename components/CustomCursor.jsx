'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover], input, textarea')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover], input, textarea')) {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.body.classList.add('cursor-none');

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.classList.remove('cursor-none');
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style={{ x: cursorXSpring, y: cursorYSpring }}
    >
      <motion.div
        className="rounded-full bg-ivory"
        animate={{
          width: isHovering ? 48 : 10,
          height: isHovering ? 48 : 10,
          x: isHovering ? -24 : -5,
          y: isHovering ? -24 : -5,
          opacity: 0.85,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 400 }}
      />
    </motion.div>
  );
}
