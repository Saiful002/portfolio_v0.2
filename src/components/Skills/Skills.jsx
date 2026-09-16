'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Sparkles } from 'lucide-react';
import { skillCategories } from '@/data/portfolioData';

const techSliderItems = [
  'React.js', 'Next.js 16', 'JavaScript', 'Tailwind CSS v4', 'Node.js', 
  'Express.js', 'Shopify Liquid', 'WordPress', 'MongoDB', 'PostgreSQL', 
  'Firebase', 'GSAP', 'Framer Motion', 'Three.js', 'Git & GitHub'
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="relative p-6 sm:p-10 rounded-3xl bg-[#12141a]/90 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-8">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#b0e739]">
          <Sparkles className="w-4 h-4" />
          <span>Technical Expertise</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          About <span className="text-[#b0e739]">My Skill</span>
        </h2>
        <div className="w-16 h-1 bg-[#b0e739] rounded-full mt-1" />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {skillCategories.map((cat, idx) => (
          <button
            key={cat.title}
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              activeTab === idx
                ? 'bg-[#b0e739] text-[#08090b] shadow-lg shadow-[#b0e739]/20 font-bold scale-105'
                : 'bg-zinc-900 border border-white/10 text-[#8c9aa7] hover:text-white'
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {skillCategories[activeTab].skills.map((skill, sIdx) => (
          <div
            key={skill.name}
            className="p-4 rounded-2xl bg-zinc-900/80 border border-white/10 flex flex-col gap-2.5 group hover:border-[#b0e739]/40 transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-white group-hover:text-[#b0e739] transition-colors">
                {skill.name}
              </span>
              <span className="text-[11px] font-mono font-semibold text-[#b0e739] bg-[#b0e739]/10 px-2 py-0.5 rounded-full border border-[#b0e739]/20">
                {skill.level}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-zinc-950 rounded-full overflow-hidden p-0.5 border border-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: sIdx * 0.04 }}
                className="h-full bg-[#b0e739] rounded-full shadow-[0_0_8px_#b0e739]"
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Technology Marquee Ticker */}
      <div className="relative py-4 bg-zinc-950/90 rounded-2xl border border-white/10 overflow-hidden">
        <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
          {[...techSliderItems, ...techSliderItems].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-1.5 rounded-xl bg-zinc-900 border border-white/10 text-[#8c9aa7] text-xs font-semibold uppercase tracking-wider"
            >
              <Cpu className="w-3.5 h-3.5 text-[#b0e739]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
