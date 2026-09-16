'use client';

import { ArrowUp } from 'lucide-react';
import { personalDetails } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8c9aa7]">
      <p>© 2026 {personalDetails.name}. All Rights Reserved.</p>

      <button
        onClick={scrollToTop}
        className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-[#8c9aa7] hover:text-[#b0e739] hover:border-[#b0e739]/40 transition-all flex items-center gap-1.5 font-semibold uppercase tracking-wider text-[10px]"
      >
        <span>Back to Top</span>
        <ArrowUp className="w-3.5 h-3.5 text-[#b0e739]" />
      </button>
    </footer>
  );
}
