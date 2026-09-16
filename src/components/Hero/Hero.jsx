'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Sparkles, Terminal, Mail } from 'lucide-react';
import Image from 'next/image';
import { personalDetails, socialLinks } from '@/data/portfolioData';
import Background3D from '../Background3D/Background3D';
import { GithubIcon, LinkedinIcon } from '../SocialIcons/SocialIcons';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalDetails.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#070709]">
      <Background3D />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card border border-purple-500/20 w-fit"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium tracking-wide text-zinc-300">
              Available for New Projects & Hiring
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col gap-2"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Hello, I&apos;m <br />
              <span className="text-gradient-primary">{personalDetails.name}</span>
            </h1>

            <div className="h-12 flex items-center gap-3 text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-300">
              <Code2 className="w-7 h-7 text-cyan-400" />
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-gradient-gold"
              >
                {personalDetails.roles[roleIndex]}
              </motion.span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed font-normal"
          >
            {personalDetails.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#portfolio"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-semibold text-sm tracking-wide shadow-xl shadow-purple-600/20 hover:shadow-purple-600/40 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Explore My Work</span>
            </a>

            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full glass-card border border-white/10 text-zinc-200 hover:text-white font-semibold text-sm tracking-wide hover:border-purple-500/40 transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-purple-400" />
              <span>Let&apos;s Connect</span>
            </a>

            <div className="flex items-center gap-2 ml-2 pl-4 border-l border-zinc-800">
              <a
                href="https://github.com/Saiful002"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-zinc-900/80 border border-white/10 text-zinc-400 hover:text-white hover:border-purple-500/40 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/saiful-kabir-chowdhury-a58a57353/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-zinc-900/80 border border-white/10 text-zinc-400 hover:text-white hover:border-cyan-500/40 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-cyan-500/30 rounded-3xl blur-2xl transform rotate-3 scale-95" />

          <div className="relative w-full max-w-sm rounded-3xl p-3 glass-panel border border-white/15 shadow-2xl overflow-hidden group">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-zinc-900">
              <Image
                src="/images/profile.jpg"
                alt={personalDetails.name}
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-80" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">Specialization</p>
                <p className="text-sm font-bold text-white">Full Stack & Shopify</p>
              </div>
              <div className="w-9 h-9 rounded-lg bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-purple-300">
                <Terminal className="w-5 h-5" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 text-xs tracking-widest uppercase">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown className="w-4 h-4 text-purple-400" />
        </motion.div>
      </div>
    </section>
  );
}
