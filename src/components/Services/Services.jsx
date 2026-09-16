'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Code2, Globe, Layout, Zap, Search, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { servicesData } from '@/data/portfolioData';

const iconMap = {
  ShoppingBag,
  Code2,
  Globe,
  Layout,
  Zap,
  Search,
};

export default function Services() {
  return (
    <section id="services" className="relative p-6 sm:p-10 rounded-3xl bg-[#12141a]/90 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-8">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#b0e739]">
          <Sparkles className="w-4 h-4" />
          <span>Tailored Offerings</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          My <span className="text-[#b0e739]">Services</span>
        </h2>
        <div className="w-16 h-1 bg-[#b0e739] rounded-full mt-1" />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servicesData.map((service, index) => {
          const IconComponent = iconMap[service.iconName] || Code2;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative group rounded-2xl p-6 bg-zinc-900/80 border border-white/10 flex flex-col justify-between hover:border-[#b0e739]/50 hover:shadow-xl hover:shadow-[#b0e739]/5 transition-all duration-300"
            >
              {service.popular && (
                <span className="absolute top-5 right-5 px-2.5 py-0.5 rounded-full bg-[#b0e739] text-[#08090b] text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                  Featured
                </span>
              )}

              <div>
                <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center text-[#b0e739] group-hover:bg-[#b0e739] group-hover:text-[#08090b] transition-all duration-300 mb-4 shadow-inner">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#b0e739] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#8c9aa7] text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-[#b0e739] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#b0e739] group-hover:translate-x-1 transition-transform"
              >
                <span>Request Service</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
