'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, Copy, Sparkles } from 'lucide-react';
import { personalDetails, socialLinks } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon } from '../SocialIcons/SocialIcons';

const socialIconMap = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
};

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative p-6 sm:p-10 rounded-3xl bg-[#12141a]/90 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-8">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#b0e739]">
          <Sparkles className="w-4 h-4" />
          <span>Get In Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Contact <span className="text-[#b0e739]">Me</span>
        </h2>
        <div className="w-16 h-1 bg-[#b0e739] rounded-full mt-1" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Info Column */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="p-5 rounded-2xl bg-zinc-900/80 border border-white/10 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#b0e739]/10 border border-[#b0e739]/30 flex items-center justify-center text-[#b0e739]">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-[#8c9aa7]">Direct Email</p>
              <h3 className="text-sm font-bold text-white mt-0.5 break-all">{personalDetails.email}</h3>
            </div>
            <button
              onClick={handleCopyEmail}
              className="w-full py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-white hover:border-[#b0e739]/40 transition-all flex items-center justify-center gap-1.5"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#b0e739]" />
                  <span className="text-[#b0e739]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#b0e739]" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/80 border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-[#8c9aa7]">Location</p>
              <h3 className="text-sm font-bold text-white mt-0.5">{personalDetails.location}</h3>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="md:col-span-7 p-6 rounded-2xl bg-zinc-900/80 border border-white/10">
          <h3 className="text-lg font-bold text-white mb-4">Send a Message</h3>

          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-[#b0e739]/20 border border-[#b0e739] flex items-center justify-center text-[#b0e739]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Thank You!</h4>
              <p className="text-[#8c9aa7] text-xs">Your message has been sent successfully.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-[#8c9aa7] mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#b0e739] transition-colors text-xs"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-[#8c9aa7] mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Your email address"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#b0e739] transition-colors text-xs"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-[#8c9aa7] mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your project inquiry..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#b0e739] transition-colors text-xs resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#b0e739] text-[#08090b] font-bold text-xs tracking-wider uppercase shadow-md hover:bg-[#a0d628] hover:scale-[1.01] transition-all flex items-center justify-center gap-1.5 mt-1"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
