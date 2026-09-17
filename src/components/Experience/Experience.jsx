'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { experiencesData } from '@/data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="relative p-5 sm:p-8 rounded-3xl bg-[#12141a]/90 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-6 sm:gap-8 w-full max-w-full box-border">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <div className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
          Professional History
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Work <span className="text-gradient-silver">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-accent rounded-full mt-1" />
      </div>

      {/* Timeline Container */}
      <div className="relative pl-7 sm:pl-9 border-l-2 border-zinc-800 space-y-6 sm:space-y-8">
        {experiencesData.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -8, scale: 1.015 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative group flex items-center"
          >
            {/* Horizontal Line Connecting Timeline to Card */}
            <div className="absolute -left-[29px] sm:-left-[37px] top-1/2 -translate-y-1/2 w-7 sm:w-9 h-[2px] bg-accent/30 group-hover:bg-accent transition-colors" />

            {/* Vertically Centered Timeline Dot */}
            <div className="absolute -left-[39px] sm:-left-[47px] top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-[#12141a] border-2 border-accent flex items-center justify-center group-hover:scale-125 transition-transform z-10">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-accent" />
            </div>

            {/* Experience Card */}
            <div className="w-full p-4 sm:p-6 rounded-2xl card-hover-effect flex flex-col gap-3 sm:gap-4 cursor-pointer">
              {/* Header Row: Responsive stacking on mobile */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 border-b border-white/5 pb-3">
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-accent transition-colors leading-tight">
                    {exp.role}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-accent flex items-center gap-1.5 mt-0.5">
                    <Briefcase className="w-3.5 h-3.5 shrink-0" />
                    <span>{exp.company}</span>
                  </p>
                </div>

                {/* Date & Location Badge */}
                <div className="flex flex-col sm:items-end text-[11px] text-[#8c9aa7] gap-1 shrink-0">
                  <span className="inline-flex items-center gap-1.5 font-mono font-semibold bg-zinc-950 px-2.5 py-1 rounded-full border border-white/10 text-white w-fit">
                    <Calendar className="w-3 h-3 text-accent shrink-0" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="flex items-center gap-1 text-[#8c9aa7] text-[11px] leading-snug">
                    <MapPin className="w-3 h-3 text-zinc-500 shrink-0" />
                    <span className="break-all">{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 pt-1">
                {exp.description.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#8c9aa7] leading-relaxed font-normal">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Badges */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-full bg-zinc-950 text-[10px] font-mono text-zinc-300 border border-white/5"
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
