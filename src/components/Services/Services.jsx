'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Code2, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { servicesData } from '@/data/portfolioData';

const iconMap = {
  ShoppingBag,
  Code2,
};

export default function Services() {
  return (
    <section id="services" className="relative p-5 sm:p-8 rounded-3xl bg-[#12141a]/90 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-6 sm:gap-8 w-full max-w-full box-border">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent">
          <Sparkles className="w-4 h-4" />
          <span>Core Specializations</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          My <span className="text-accent">Expertise</span>
        </h2>
        <div className="w-16 h-1 bg-accent rounded-full mt-1" />
      </div>

      {/* Services Grid (Shopify & Full Stack Only) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {servicesData.map((service, index) => {
          const IconComponent = iconMap[service.iconName] || Code2;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group rounded-2xl p-5 sm:p-6 bg-zinc-900/80 border border-white/10 flex flex-col justify-between hover:border-accent transition-all duration-300"
            >
              <span className="absolute top-5 right-5 px-2.5 py-0.5 rounded-full bg-accent text-[#08090b] text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                Primary Specialty
              </span>

              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-[#08090b] transition-all duration-300 mb-4 shadow-inner">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#8c9aa7] text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent group-hover:translate-x-1 transition-transform"
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
