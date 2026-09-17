'use client';

import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, Users, Code } from 'lucide-react';
import { personalDetails, statItems } from '@/data/portfolioData';

const statIcons = [Briefcase, CheckCircle2, Users, Code];

export default function About() {
  return (
    <section id="about" className="relative p-5 sm:p-8 rounded-3xl bg-[#12141a]/90 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-6 sm:gap-8 w-full max-w-full box-border">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <div className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
          Biography & Vision
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          About <span className="text-gradient-silver">Me</span>
        </h2>
        <div className="w-16 h-1 bg-accent rounded-full mt-1" />
      </div>

      {/* Main About Text */}
      <div className="flex flex-col gap-4 text-[#8c9aa7] text-sm sm:text-base leading-relaxed font-normal">
        <p>{personalDetails.longAbout}</p>
      </div>

      {/* Highlights Grid (4 Clean Items) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        {[
          'Shopify Theme & Custom Liquid Specialist',
          'Full Stack Web Application Architecture',
          'Next.js 16 App Router & React 19',
          'Custom Shopify App & Storefront Integration'
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-zinc-200 p-3 rounded-xl card-hover-effect cursor-pointer">
            <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* Animated Counter Statistics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/5">
        {statItems.map((stat, idx) => {
          const Icon = statIcons[idx % statIcons.length];
          return (
            <div
              key={stat.label}
              className="p-3.5 rounded-2xl card-hover-effect flex flex-col items-center text-center gap-1 group cursor-pointer"
            >
              <Icon className="w-5 h-5 text-accent mb-1 group-hover:scale-125 transition-transform" />
              <span className="text-xl sm:text-3xl font-extrabold text-white">
                {stat.prefix}{stat.value}{stat.suffix}
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8c9aa7] font-medium">
                {stat.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
