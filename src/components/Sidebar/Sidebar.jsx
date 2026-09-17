'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, MapPin } from 'lucide-react';
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
    <aside className="w-full box-border">
      <div className="relative w-full rounded-3xl p-5 sm:p-7 bg-[#12141a]/95 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col items-center text-center gap-5 group hover:border-accent/40 transition-all duration-500 overflow-hidden box-border">

        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: 'var(--accent-neon)', opacity: 0.12 }} />

        {/* Profile Avatar Frame with Single Loop Circle Animation on Card Hover */}
        <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1 shadow-lg shadow-accent/20 flex items-center justify-center">
          {/* Base Static Border Ring */}
          <div className="absolute inset-0 rounded-full p-[2px]" style={{ background: 'linear-gradient(135deg, var(--accent-neon) 0%, #7a9bb9 100%)' }} />

          {/* Avatar Image (Sharp, Pristine Circular Clip) */}
          <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-900 z-10">
            <Image
              src="/images/dp.jpg"
              alt={personalDetails.name}
              fill
              sizes="(max-width: 768px) 160px, 160px"
              priority
              className="object-cover object-center"
            />
          </div>

          {/* SVG Single Loop Animated Circle Border on Card Hover (Positioned on top of border ring) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none -rotate-90 z-20 overflow-visible rounded-full" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="avatarCircleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--accent-neon)" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="100%" stopColor="var(--accent-neon)" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="48.5"
              fill="none"
              stroke="url(#avatarCircleGradient)"
              strokeWidth="3.5"
              strokeLinecap="round"
              className="avatar-border-sweep"
            />
          </svg>

          <span className="absolute bottom-1.5 right-1.5 flex h-4 w-4 z-30">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-accent border-2 border-[#12141a]"></span>
          </span>
        </div>

        {/* Name & Animated Title */}
        <div className="flex flex-col gap-1.5 items-center w-full">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Hi, I&apos;m <span className="text-gradient-silver">{personalDetails.name.split(' ')[0]}</span>
          </h1>

          <div className="h-7 flex items-center justify-center gap-1.5 text-sm sm:text-base font-bold text-[#8c9aa7]">
            <span className="text-white">A</span>
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35 }}
              className="text-accent"
            >
              {personalDetails.roles[roleIndex]}
            </motion.span>
          </div>
        </div>

        {/* Short Bio Summary */}
        <p className="text-[#8c9aa7] text-xs sm:text-sm leading-relaxed font-normal px-2">
          {personalDetails.bio}
        </p>

        {/* Location & Status Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-[#8c9aa7] py-2 border-y border-white/5 w-full">
          <span className="flex items-center gap-1 text-[#8c9aa7]">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            {personalDetails.location}
          </span>
          <span>•</span>
          <span className="text-zinc-300">Open for Hire</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full pt-1">
          <a
            href={personalDetails.resumeUrl}
            download
            className="w-full py-3 px-4 rounded-2xl bg-zinc-900 border border-white/10 text-white font-bold text-xs uppercase tracking-wider hover:border-accent hover:bg-zinc-800 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 text-accent shrink-0" />
            <span>Download My CV</span>
          </a>

          <a
            href="#contact"
            className="w-full py-3 px-4 rounded-2xl bg-zinc-900 border border-white/10 text-white font-bold text-xs uppercase tracking-wider hover:border-accent hover:bg-zinc-800 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4 text-accent shrink-0" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Social Links Bar */}
        <div className="flex items-center justify-center gap-2.5 pt-1">
          {socialLinks.map((social) => {
            const IconComponent = socialIconMap[social.iconName] || GithubIcon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900/90 border border-white/10 text-[#8c9aa7] hover:text-accent hover:border-accent hover:bg-accent/10 transition-all flex items-center justify-center"
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
