'use client';

import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, Users, Code, Sparkles } from 'lucide-react';
import { personalDetails, statItems } from '@/data/portfolioData';

const statIcons = [Briefcase, CheckCircle2, Users, Code];

export default function About() {
  return (
    <section id="about" className="relative p-6 sm:p-10 rounded-3xl bg-[#12141a]/90 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-8">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#b0e739]">
          <Sparkles className="w-4 h-4" />
          <span>Biography & Vision</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          About <span className="text-[#b0e739]">Me</span>
        </h2>
        <div className="w-16 h-1 bg-[#b0e739] rounded-full mt-1" />
      </div>

      {/* Main About Text */}
      <div className="flex flex-col gap-4 text-[#8c9aa7] text-base leading-relaxed font-normal">
        <p>{personalDetails.longAbout}</p>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        {[
          'Next.js 16 App Router & React 19',
          'Custom Shopify Theme & Liquid Specialist',
          'JavaScript & Full Stack Web Architecture',
          'WordPress WooCommerce & Theme Dev',
          'GSAP & Framer Motion Smooth Animations',
          'Core Web Vitals & 90+ Lighthouse Performance'
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-zinc-200 p-2.5 rounded-xl bg-zinc-900/60 border border-white/5">
            <CheckCircle2 className="w-4 h-4 text-[#b0e739] shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* Animated Counter Statistics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/5">
        {statItems.map((stat, idx) => {
          const Icon = statIcons[idx % statIcons.length];
          return (
            <div
              key={stat.label}
              className="p-4 rounded-2xl bg-zinc-900/80 border border-white/10 flex flex-col items-center text-center gap-1 group hover:border-[#b0e739]/40 transition-all"
            >
              <Icon className="w-5 h-5 text-[#b0e739] mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-2xl sm:text-3xl font-extrabold text-white">
                {stat.prefix}{stat.value}{stat.suffix}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[#8c9aa7] font-medium">
                {stat.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
