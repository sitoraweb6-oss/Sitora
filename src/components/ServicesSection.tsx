import React from 'react';
import { motion } from 'motion/react';
import { Globe, Target, ShoppingBag, TrendingUp, MessageSquare, BarChart3, Fingerprint, Users, Check, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data';

interface ServicesSectionProps {
  onOpenInquiry: (type: string) => void;
  darkMode: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenInquiry, darkMode }) => {
  // Map strings to Lucide icon components dynamically
  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className={className} size={22} />;
      case 'Target': return <Target className={className} size={22} />;
      case 'ShoppingBag': return <ShoppingBag className={className} size={22} />;
      case 'TrendingUp': return <TrendingUp className={className} size={22} />;
      case 'MessageSquare': return <MessageSquare className={className} size={22} />;
      case 'BarChart3': return <BarChart3 className={className} size={22} />;
      case 'Fingerprint': return <Fingerprint className={className} size={22} />;
      case 'Users': return <Users className={className} size={22} />;
      default: return <Globe className={className} size={22} />;
    }
  };

  return (
    <section className="py-24 sm:py-32 relative" id="services">
      {/* Light subtle dark-mode gradient dividers */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-900 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="services-container">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20" id="services-header">
          <div className="max-w-xl" id="services-heading-block">
            <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-[0.25em] block mb-3" id="services-eyebrow">
              Expert Competencies
            </span>
            <h2 className={`font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight ${
              darkMode ? 'text-[#F7F8FA]' : 'text-[#111827]'
            }`} id="services-title">
              Engineered for absolute aesthetic authority & conversion scaling.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-sm text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed" id="services-sub">
            We operate fully hand-coded architectures that bypass slow templates, protecting page performance metrics and optimizing click-attributions.
          </p>
        </div>

        {/* Feature Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="services-grid">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              key={service.id}
              onClick={() => onOpenInquiry(service.id)}
              className={`group relative flex flex-col justify-between p-6 rounded-2xl border transition-all duration-500 overflow-hidden cursor-pointer hover:scale-[1.015] ${
                darkMode 
                  ? 'bg-[#0B1016]/50 border-[rgba(255,255,255,0.08)] hover:border-[#D6B16B]/30 hover:bg-[#101722]/90 shadow-2xl shadow-black/30' 
                  : 'bg-white border-[rgba(0,0,0,0.06)] hover:border-[#B88A44]/40 hover:bg-[#FAFBFC]/50 hover:shadow-xl'
              }`}
              id={`service-card-${service.id}`}
            >
              {/* Radial Ambient Glow */}
              <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${service.bgGlow} blur-2xl opacity-10 group-hover:opacity-30 transition-all duration-700 pointer-events-none`} />

              {/* Card Main Header details */}
              <div id={`service-main-${service.id}`}>
                {/* Icon wrapper */}
                <div className={`inline-flex p-3 rounded-xl mb-6 ${
                  darkMode ? 'bg-[#101722] border border-[rgba(255,255,255,0.08)]' : 'bg-[#FAFBFC] border border-[rgba(0,0,0,0.06)]'
                }`} id={`service-icon-box-${service.id}`}>
                  {renderIcon(service.iconName, service.color)}
                </div>

                {/* Service title */}
                <h3 className={`font-sans text-base sm:text-lg font-bold tracking-tight mb-2 ${
                  darkMode ? 'text-[#F7F8FA]' : 'text-[#111827]'
                }`} id={`service-title-${service.id}`}>
                  {service.title}
                </h3>

                {/* Short desc */}
                <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-6" id={`service-desc-${service.id}`}>
                  {service.shortDesc}
                </p>

                {/* Dynamic bullets */}
                <div className="space-y-2 border-t border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] pt-4 mb-8" id={`service-features-${service.id}`}>
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">Scope parameters</span>
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-[11px] text-neutral-400 font-sans" id={`service-f-${service.id}-${fIdx}`}>
                      <Check size={12} className="text-[#D6B16B] mt-0.5 shrink-0" />
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenInquiry(service.id)}
                className={`group/btn w-full mt-auto flex items-center justify-between py-2 px-3.5 rounded-xl text-[11px] uppercase tracking-wider font-semibold border transition-all duration-300 cursor-pointer ${
                  darkMode 
                    ? 'border-[rgba(255,255,255,0.08)] bg-[#0B1016] hover:border-[#D6B16B]/30 hover:bg-[#D6B16B]/10 text-[#A7B0BD] hover:text-[#F7F8FA]' 
                    : 'border-[rgba(0,0,0,0.06)] bg-white hover:border-[#B88A44]/45 hover:bg-[#FAFBFC] text-neutral-700 hover:text-black'
                }`}
                id={`service-cta-${service.id}`}
              >
                <span>Request Core Quote</span>
                <ArrowUpRight size={13} className="text-neutral-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:text-white transition-all" />
              </button>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
