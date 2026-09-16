'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { experiencesData } from '@/data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="relative p-6 sm:p-10 rounded-3xl bg-[#12141a]/90 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-8">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#b0e739]">
          <Sparkles className="w-4 h-4" />
          <span>Professional History</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Work <span className="text-[#b0e739]">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-[#b0e739] rounded-full mt-1" />
      </div>

      {/* Timeline List */}
      <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-8">
        {experiencesData.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            {/* Timeline Marker Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-[#12141a] border-2 border-[#b0e739] flex items-center justify-center group-hover:scale-125 transition-all">
              <div className="w-2 h-2 rounded-full bg-[#b0e739]" />
            </div>

            {/* Experience Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/80 border border-white/10 flex flex-col gap-3 hover:border-[#b0e739]/40 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#b0e739] transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-xs font-semibold text-[#b0e739] flex items-center gap-1.5 mt-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.company}</span>
                  </p>
                </div>
                <div className="flex flex-col sm:items-end text-[11px] text-[#8c9aa7] gap-1">
                  <span className="flex items-center gap-1 font-mono font-semibold bg-zinc-950 px-2.5 py-0.5 rounded-full border border-white/10 text-white">
                    <Calendar className="w-3 h-3 text-[#b0e739]" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-zinc-500" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 pt-1">
                {exp.description.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#8c9aa7] leading-relaxed font-normal">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b0e739] mt-1 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-full bg-zinc-950 text-[10px] font-mono text-zinc-400 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
