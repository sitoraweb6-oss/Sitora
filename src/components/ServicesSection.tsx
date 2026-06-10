import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  Target, 
  ShoppingBag, 
  TrendingUp, 
  MessageSquare, 
  BarChart3, 
  Fingerprint, 
  Users, 
  Check, 
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Activity,
  Cpu
} from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { Service } from '../types';

interface ServicesSectionProps {
  onOpenInquiry: (type: string) => void;
  darkMode: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenInquiry, darkMode }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'growth'>('all');

  // Map strings to Lucide icon components dynamically
  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className={className} size={32} strokeWidth={1.5} />;
      case 'Target': return <Target className={className} size={32} strokeWidth={1.5} />;
      case 'ShoppingBag': return <ShoppingBag className={className} size={32} strokeWidth={1.5} />;
      case 'TrendingUp': return <TrendingUp className={className} size={32} strokeWidth={1.5} />;
      case 'MessageSquare': return <MessageSquare className={className} size={32} strokeWidth={1.5} />;
      case 'BarChart3': return <BarChart3 className={className} size={32} strokeWidth={1.5} />;
      case 'Fingerprint': return <Fingerprint className={className} size={32} strokeWidth={1.5} />;
      case 'Users': return <Users className={className} size={32} strokeWidth={1.5} />;
      default: return <Globe className={className} size={32} strokeWidth={1.5} />;
    }
  };

  // Group services based on tabs
  const filteredServices = SERVICES_DATA.filter(service => {
    if (activeTab === 'all') return true;
    if (activeTab === 'web') {
      return ['web-dev', 'landing-pages', 'ecommerce', 'seo-analytics'].includes(service.id);
    }
    if (activeTab === 'growth') {
      return ['digital-marketing', 'social-media', 'pixel-capi', 'lead-generation'].includes(service.id);
    }
    return true;
  });

  const tabPills: { id: 'all' | 'web' | 'growth'; label: string; count: number }[] = [
    { id: 'all', label: 'All Services', count: SERVICES_DATA.length },
    { id: 'web', label: 'Web Engineering', count: 4 },
    { id: 'growth', label: 'Growth & Attribution', count: 4 }
  ];

  const bottomHighlightChips = [
    { label: "WordPress Redesigns", icon: <Cpu size={10} className="text-[#D6B16B]" /> },
    { label: "WooCommerce APIs", icon: <ShoppingBag size={10} className="text-[#D6B16B]" /> },
    { label: "Server-side CAPI", icon: <Fingerprint size={10} className="text-[#D6B16B]" /> },
    { label: "High ROAS Ads Setup", icon: <TrendingUp size={10} className="text-[#D6B16B]" /> },
    { label: "Lighthouse Speed Compressing", icon: <Zap size={10} className="text-[#D6B16B]" /> },
    { label: "On-Page Schema Injection", icon: <ShieldCheck size={10} className="text-[#D6B16B]" /> },
    { label: "bKash & Nagad Integration", icon: <Globe size={10} className="text-[#D6B16B]" /> }
  ];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" id="services">
      {/* Visual Architectural Grid divider lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-900 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="services-container">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-20 gap-6" id="services-header">
          <div className="max-w-2xl animate-fade-in" id="services-heading-block">
            <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-[0.25em] block mb-3" id="services-eyebrow">
              Expert Competencies // Sitora Tech
            </span>
            <h2 className={`font-sans text-3xl sm:text-4.5xl md:text-5xl font-black tracking-tight uppercase leading-[1.1] sm:leading-none ${
              darkMode ? 'text-[#F7F8FA]' : 'text-[#111827]'
            }`} id="services-title">
              Services We Provide
            </h2>
            <p className="mt-4 max-w-xl text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed" id="services-sub">
              We operate fully hand-coded architectures that bypass slow templates, protecting page performance metrics and optimizing click-attributions.
            </p>
          </div>
          
          {/* Vertical mini dashboard indicator */}
          <div className="hidden lg:flex items-center gap-4 text-left font-mono text-[9px] text-neutral-500 bg-neutral-950/40 border border-neutral-900 p-3 rounded-lg">
            <Activity size={12} className="text-[#D6B16B]" />
            <div>
              <p className="text-neutral-400 font-bold uppercase">SITORA CORE V4 ENGINE // ENHANCED</p>
              <p>LATENCY MEASURABLE REDUCTION // 0.24s AVG</p>
            </div>
          </div>
        </div>

        {/* Tab Filter Slider Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-neutral-900/10 dark:border-neutral-900" id="services-filter-tabs">
          {tabPills.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-mono text-xs uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#D6B16B] text-neutral-950 font-bold shadow-[0_0_20px_rgba(214,177,107,0.25)]'
                    : 'bg-neutral-900/40 border border-neutral-900/60 hover:border-neutral-800 text-neutral-400 hover:text-white'
                }`}
                id={`services-tab-btn-${tab.id}`}
              >
                <span>{tab.label}</span>
                <span className={`text-[9px] px-1.5 py-0.5 rounded ${
                  isActive ? 'bg-neutral-950/20 text-neutral-950' : 'bg-neutral-950/60 text-neutral-500'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Service Grid (3 Columns or 3 Columns-Layout adaptation) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-grid">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                key={service.id}
                onClick={() => onOpenInquiry(service.id)}
                className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                  darkMode 
                    ? 'bg-[#0B1016]/50 border-[rgba(255,255,255,0.08)] hover:border-[#D6B16B]/35 hover:bg-[#101722]/90 hover:shadow-[0_0_35px_rgba(214,177,107,0.06)] shadow-2xl shadow-black/30' 
                    : 'bg-white border-[rgba(0,0,0,0.06)] hover:border-[#D6B16B]/50 hover:bg-[#FAFBFC]/50 hover:shadow-xl'
                }`}
                id={`service-card-${service.id}`}
              >
                {/* Visual Glow Ambient Background */}
                <div className={`absolute -top-[10%] -right-[10%] w-36 h-36 rounded-full bg-gradient-to-br ${service.bgGlow} blur-2xl opacity-10 group-hover:opacity-30 transition-all duration-700 pointer-events-none`} />

                <div>
                  {/* High Quality Large Icon Header */}
                  <div className="flex items-start justify-between mb-8" id={`service-card-header-${service.id}`}>
                    <div className={`inline-flex p-3 rounded-2xl ${
                      darkMode ? 'bg-[#101722] border border-[rgba(255,255,255,0.08)] text-[#D6B16B]' : 'bg-[#FAFBFC] border border-[rgba(0,0,0,0.06)] text-[#B88A44]'
                    }`} id={`service-icon-box-${service.id}`}>
                      {renderIcon(service.iconName, '')}
                    </div>
                    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest font-black">
                      CODE_REF // {service.id.toUpperCase()}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className={`font-sans text-lg sm:text-xl font-bold uppercase tracking-tight mb-3 ${
                    darkMode ? 'text-[#F7F8FA]' : 'text-[#111827]'
                  }`} id={`service-title-${service.id}`}>
                    {service.title}
                  </h3>

                  {/* Dense, High Fidelity Copy */}
                  <p className="text-xs sm:text-[12.5px] text-neutral-400 font-sans leading-relaxed mb-6" id={`service-desc-${service.id}`}>
                    {service.shortDesc}
                  </p>

                  {/* Sub-Feature Multi Lists */}
                  <div className="space-y-2 border-t border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] pt-5 mb-8" id={`service-features-${service.id}`}>
                    <span className="text-[9.5px] font-mono text-[#D6B16B] uppercase tracking-widest block mb-2 font-black">
                      SITORA CAPABILITIES SCOPE
                    </span>
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-[11px] text-neutral-400 font-sans" id={`service-f-${service.id}-${fIdx}`}>
                        <Check size={11} className="text-[#D6B16B] mt-0.5 shrink-0" />
                        <span className="leading-snug text-neutral-300 group-hover:text-white transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Wide Action Trigger Button */}
                <button
                  onClick={() => onOpenInquiry(service.id)}
                  className={`group/btn w-full mt-auto flex items-center justify-between py-3 px-4 rounded-xl text-[10px] font-bold uppercase tracking-wider border transition-all duration-300 transform cursor-pointer ${
                    darkMode 
                      ? 'border-[rgba(255,255,255,0.08)] bg-[#0B1016] text-[#A7B0BD] hover:border-[#D6B16B]/60 hover:bg-[#D6B16B]/10 hover:text-white' 
                      : 'border-[rgba(0,0,0,0.06)] bg-white text-neutral-700 hover:border-[#D6B16B]/80 hover:bg-[#FAFBFC] hover:text-[#111827]'
                  }`}
                  id={`service-cta-${service.id}`}
                >
                  <span>Request Core Quote</span>
                  <ArrowUpRight size={13} className="text-neutral-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:text-[#D6B16B] transition-all" />
                </button>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Featured Services Chips Row */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-neutral-900/10 dark:border-neutral-900 flex flex-col items-center text-center gap-4" id="services-featured-chips-container">
          <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-[0.25em] font-bold">
            Guaranteed Technical Implementation Standard Core
          </span>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl" id="services-chips-flex">
            {bottomHighlightChips.map((chip, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-900/30 bg-neutral-950/50 dark:bg-neutral-950/40 dark:border-neutral-900 font-mono text-[9px] text-neutral-400"
              >
                {chip.icon}
                <span>{chip.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
