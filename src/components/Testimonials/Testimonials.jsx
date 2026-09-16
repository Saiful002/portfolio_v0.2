'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { testimonialsData } from '@/data/portfolioData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const active = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="relative p-6 sm:p-10 rounded-3xl bg-[#12141a]/90 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-8">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#b0e739]">
          <Sparkles className="w-4 h-4" />
          <span>Client Praise</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Client <span className="text-[#b0e739]">Testimonials</span>
        </h2>
        <div className="w-16 h-1 bg-[#b0e739] rounded-full mt-1" />
      </div>

      {/* Testimonial Box */}
      <div className="relative rounded-2xl p-6 sm:p-8 bg-zinc-900/80 border border-white/10 flex flex-col items-center text-center gap-6">
        <Quote className="w-10 h-10 text-[#b0e739]/40" />

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col items-center gap-4 max-w-2xl"
          >
            <div className="flex items-center gap-1">
              {Array.from({ length: active.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#b0e739] text-[#b0e739]" />
              ))}
            </div>

            <p className="text-base sm:text-lg font-medium text-zinc-200 leading-relaxed italic">
              &ldquo;{active.content}&rdquo;
            </p>

            <div className="flex flex-col items-center gap-0.5 pt-3 border-t border-white/10 w-full">
              <h4 className="text-base font-bold text-white">{active.name}</h4>
              <p className="text-xs font-mono text-[#b0e739]">
                {active.role} — <span className="text-[#8c9aa7]">{active.company}</span>
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Nav Controls */}
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={prevTestimonial}
            className="p-2.5 rounded-xl bg-zinc-950 border border-white/10 text-[#8c9aa7] hover:text-white hover:border-[#b0e739]/40 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-1.5">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === idx ? 'w-6 bg-[#b0e739]' : 'bg-zinc-700'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextTestimonial}
            className="p-2.5 rounded-xl bg-zinc-950 border border-white/10 text-[#8c9aa7] hover:text-white hover:border-[#b0e739]/40 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
