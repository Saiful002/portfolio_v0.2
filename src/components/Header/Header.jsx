'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full py-4 bg-[#08090b]/80 backdrop-blur-xl border-b border-white/10 mb-8 rounded-2xl">
      <div className="px-6 flex items-center justify-between">
        {/* Navigation Tabs */}
        <nav className="hidden sm:flex items-center gap-1 bg-zinc-900/80 p-1.5 rounded-full border border-white/10">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${
                  isActive ? 'text-[#08090b]' : 'text-[#8c9aa7] hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#b0e739] rounded-full shadow-[0_0_15px_rgba(176,231,57,0.4)]"
                    transition={{ type: 'spring', duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Brand Tag for Mobile */}
        <div className="sm:hidden font-bold text-white text-sm">
          Saiful Kabir <span className="text-[#b0e739]">Chowdhury</span>
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#b0e739] text-[#08090b] text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#a0d628] hover:scale-105 transition-all"
        >
          <span>Let&apos;s Talk</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden p-2 rounded-xl bg-zinc-900 border border-white/10 text-[#8c9aa7] hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden bg-zinc-950 border-t border-white/10 mt-3 p-4 flex flex-col gap-3 rounded-b-xl"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-[#8c9aa7] hover:text-[#b0e739] py-1.5 flex items-center justify-between"
              >
                <span>{item.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600" />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
