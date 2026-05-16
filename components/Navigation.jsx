"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "ROUTE", href: "#detailed-route" },
    { label: "GALLERY", href: "#places-grid" },
    { label: "GUIDES", href: "#hosts" },
    { label: "PRICING", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Trigger solid background when we've scrolled past the hero header
      // The hero is h-[200vh], but the sticky content is h-screen.
      // We want to turn black as soon as the first section (About) starts coming up.
      const threshold = window.innerHeight * 1.1;
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between transition-all duration-700 ${
          scrolled ? "bg-black shadow-2xl py-4" : "bg-transparent"
        }`}
      >
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 group z-50"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-ivory group-hover:text-saffron transition-colors duration-500"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <span className="text-xs tracking-[0.3em] text-ivory font-sans font-medium group-hover:text-saffron transition-colors duration-500">
            INDIA
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="text-[10px] tracking-[0.25em] text-ivory/60 hover:text-saffron transition-all duration-300 font-sans"
            >
              {item.label}
            </a>
          ))}
          <Link
            href="/register"
            className="px-7 py-3 border border-saffron rounded-full text-[10px] tracking-[0.25em] text-saffron hover:bg-saffron hover:text-midnight transition-all duration-500 font-sans font-bold"
          >
            JOIN
          </Link>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="px-7 py-3 border border-ivory/20 rounded-full text-[10px] tracking-[0.25em] text-ivory hover:bg-saffron hover:border-saffron hover:text-midnight transition-all duration-500 font-sans font-bold"
          >
            BOOK THE TRIP
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="flex flex-col gap-1.5 md:hidden z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
            className="w-6 h-0.5 bg-ivory origin-center"
          />
          <motion.div
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="w-6 h-0.5 bg-ivory"
          />
          <motion.div
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
            className="w-6 h-0.5 bg-ivory origin-center"
          />
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[45] bg-black flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="text-2xl tracking-[0.3em] text-ivory/80 hover:text-saffron transition-colors font-sans"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="block px-12 py-5 border border-saffron rounded-full text-sm tracking-[0.25em] text-saffron hover:bg-saffron hover:text-midnight transition-all font-sans font-bold"
              >
                JOIN
              </Link>
            </motion.div>
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="mt-8 px-12 py-5 border border-saffron rounded-full text-sm tracking-[0.25em] text-saffron hover:bg-saffron hover:text-midnight transition-all font-sans font-bold"
            >
              BOOK THE TRIP
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
