'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { projectsData } from '@/data/portfolioData';
import { GithubIcon } from '../SocialIcons/SocialIcons';

const categories = ['All', 'Full Stack', 'Shopify'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="portfolio" className="relative p-5 sm:p-8 rounded-3xl bg-[#12141a]/90 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-6 sm:gap-8 w-full max-w-full box-border">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent">
          <Sparkles className="w-4 h-4" />
          <span>Case Studies & Work</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Featured <span className="text-accent">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-accent rounded-full mt-1" />
      </div>

      {/* Filter Buttons */}
      <div className="flex items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              selectedCategory === cat
                ? 'bg-accent text-[#08090b] shadow-lg font-bold scale-105'
                : 'bg-zinc-900 border border-white/10 text-[#8c9aa7] hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Creative Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="group relative rounded-2xl p-4 bg-zinc-900/80 border border-white/10 flex flex-col justify-between hover:border-accent transition-all duration-300 overflow-hidden"
            >
              {/* Media Preview with sizes prop */}
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-zinc-950 mb-3.5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-transparent to-transparent opacity-60" />

                <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono font-semibold uppercase tracking-wider text-accent">
                  {project.category}
                </span>
              </div>

              {/* Card Details */}
              <div className="flex flex-col gap-2 flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#8c9aa7] text-xs leading-relaxed font-normal">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 pt-1.5 mb-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full bg-zinc-950 border border-white/10 text-[10px] font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8c9aa7] hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-accent" />
                    <span>Source Code</span>
                  </a>
                ) : <div />}

                {project.liveUrl && project.liveUrl !== '#' ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-accent text-[#08090b] text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-all"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : null}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
