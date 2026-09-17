'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiShopify,
  SiWordpress,
  SiFirebase,
  SiGit,
  SiFigma,
  SiPostgresql
} from 'react-icons/si';
import { skillCategories } from '@/data/portfolioData';

const techLogos = [
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#ffffff' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
  { name: 'Express.js', Icon: SiExpress, color: '#ffffff' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'Shopify', Icon: SiShopify, color: '#96BF48' },
  { name: 'WordPress', Icon: SiWordpress, color: '#21759B' },
  { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="relative p-5 sm:p-8 rounded-3xl bg-[#12141a]/90 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-6 sm:gap-8 w-full max-w-full box-border overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <div className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
          Technical Expertise
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          About <span className="text-gradient-silver">My Skill</span>
        </h2>
        <div className="w-16 h-1 bg-accent rounded-full mt-1" />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {skillCategories.map((cat, idx) => (
          <button
            key={cat.title}
            onClick={() => setActiveTab(idx)}
            className={`px-3.5 py-2 rounded-xl text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              activeTab === idx
                ? 'bg-zinc-800 text-white border border-accent/60 font-bold shadow-md scale-105'
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5"
      >
        {skillCategories[activeTab].skills.map((skill, sIdx) => (
          <div
            key={skill.name}
            className="p-3.5 rounded-2xl card-hover-effect flex flex-col gap-2 group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs sm:text-sm text-white group-hover:text-accent transition-colors">
                {skill.name}
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full border border-accent">
                {skill.level}%
              </span>
            </div>

            {/* Brightly Filled Progress Bar using CSS variable */}
            <div className="w-full h-2 bg-zinc-950 rounded-full overflow-hidden p-0.5 border border-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: sIdx * 0.04 }}
                className="h-full bg-accent rounded-full glow-accent"
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Official Technology Logo Marquee Slider with Strict Container Overflow Control */}
      <div className="relative py-4 sm:py-5 bg-zinc-950/90 rounded-2xl border border-white/10 overflow-hidden w-full max-w-full">
        <div className="animate-marquee flex items-center gap-6 sm:gap-8 whitespace-nowrap">
          {[...techLogos, ...techLogos].map((tech, idx) => {
            const Icon = tech.Icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-3.5 py-1.5 sm:py-2 rounded-xl bg-zinc-900/90 border border-white/10 text-zinc-200 text-xs font-semibold tracking-wider uppercase hover:border-accent transition-all"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: tech.color }} />
                <span className="text-zinc-200 font-mono text-xs">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
