'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { personalDetails, socialLinks } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon } from '../SocialIcons/SocialIcons';

const socialIconMap = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
};

export default function Sidebar() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalDetails.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside className="w-full lg:sticky lg:top-8 h-fit z-30">
      <div className="relative rounded-3xl p-6 sm:p-8 bg-[#12141a]/90 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col items-center text-center gap-6 overflow-hidden group hover:border-[#b0e739]/40 transition-all duration-500">
        
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#b0e739]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Profile Avatar Frame */}
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-gradient-to-tr from-[#b0e739] via-emerald-400 to-cyan-400 shadow-lg shadow-[#b0e739]/20">
          <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-900">
            <Image
              src="/images/profile.jpg"
              alt={personalDetails.name}
              fill
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          {/* Online Indicator */}
          <span className="absolute bottom-2 right-2 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b0e739] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#b0e739] border-2 border-[#12141a]"></span>
          </span>
        </div>

        {/* Name & Animated Title */}
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Hi, I&apos;m <span className="text-[#b0e739]">{personalDetails.name.split(' ')[0]}</span>
          </h1>

          <div className="h-8 flex items-center justify-center gap-1.5 text-base sm:text-lg font-bold text-[#8c9aa7]">
            <span className="text-white">A</span>
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="text-[#b0e739]"
            >
              {personalDetails.roles[roleIndex]}
            </motion.span>
          </div>
        </div>

        {/* Short Bio Summary */}
        <p className="text-[#8c9aa7] text-xs sm:text-sm leading-relaxed max-w-xs font-normal">
          {personalDetails.bio}
        </p>

        {/* Location & Status Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-[#8c9aa7] py-1 border-y border-white/5 w-full">
          <span className="flex items-center gap-1 text-[#b0e739]">
            <MapPin className="w-3.5 h-3.5" />
            {personalDetails.location}
          </span>
          <span>•</span>
          <span className="text-zinc-300">Open for Hire</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full pt-1">
          <a
            href={personalDetails.resumeUrl}
            download
            className="w-full py-3.5 px-5 rounded-2xl bg-[#b0e739] text-[#08090b] font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#b0e739]/25 hover:bg-[#a0d628] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download My CV</span>
          </a>

          <a
            href="#contact"
            className="w-full py-3.5 px-5 rounded-2xl bg-zinc-900 border border-white/10 text-white font-bold text-xs uppercase tracking-wider hover:border-[#b0e739]/50 hover:bg-zinc-800 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4 text-[#b0e739]" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Social Links Bar */}
        <div className="flex items-center justify-center gap-3 pt-2">
          {socialLinks.map((social) => {
            const IconComponent = socialIconMap[social.iconName] || GithubIcon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900/90 border border-white/10 text-[#8c9aa7] hover:text-[#b0e739] hover:border-[#b0e739]/40 hover:bg-[#b0e739]/10 transition-all flex items-center justify-center"
                aria-label={social.name}
              >
                <IconComponent className="w-4 h-4" />
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
