'use client';

import { personalDetails } from '@/data/portfolioData';

export default function Footer() {
  return (
    <footer className="relative py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-[#8c9aa7] w-full max-w-full box-border">
      <p>© 2026 {personalDetails.name}. All Rights Reserved.</p>

    </footer>
  );
}
