'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Sparkles, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="relative p-5 sm:p-8 rounded-3xl bg-[#12141a]/90 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-6 sm:gap-8 w-full max-w-full box-border">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <div className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
          Academic Qualification
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Education & <span className="text-gradient-silver">Degrees</span>
        </h2>
        <div className="w-16 h-1 bg-accent rounded-full mt-1" />
      </div>

      {/* Education Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8, scale: 1.015 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="group relative rounded-2xl p-5 sm:p-7 card-hover-effect flex flex-col gap-4 cursor-pointer"
      >
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3.5 border-b border-white/5 pb-4">
          <div className="flex items-start gap-3 sm:gap-3.5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-zinc-950 border border-white/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-[#08090b] transition-all duration-300">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
            </div>
            <div>
              <h3 className="text-base sm:text-2xl font-bold text-white group-hover:text-accent transition-colors leading-tight">
                Green University Of Bangladesh
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#8c9aa7] mt-1 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent shrink-0" />
                <span>Bachelor Of Science In Computer Science And Engineering</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:items-end text-xs text-[#8c9aa7] gap-1 shrink-0">
            <span className="inline-flex items-center gap-1.5 font-mono font-semibold bg-zinc-950 px-3 py-1 rounded-full border border-white/10 text-white w-fit">
              <Calendar className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>Feb 2022 – Feb 2026</span>
            </span>
            <span className="flex items-center gap-1 text-[#8c9aa7] text-xs">
              <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
              <span>Rupganj, Narayanganj, Bangladesh</span>
            </span>
          </div>
        </div>

        <p className="text-[#8c9aa7] text-xs sm:text-sm leading-relaxed font-normal">
          Comprehensive curriculum focused on Data Structures, Algorithms, Software Engineering Principles, Web Technologies, Database Systems, and Object-Oriented Programming.
        </p>
      </motion.div>
    </section>
  );
}
