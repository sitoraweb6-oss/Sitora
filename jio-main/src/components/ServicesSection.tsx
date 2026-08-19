import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  ShoppingBag, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Fingerprint, 
  Palette, 
  Handshake, 
  Check, 
  ArrowUpRight,
  Activity,
  Zap,
  Clock,
  Briefcase,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { CATEGORIES_DATA, CategoryContent, SubServiceContent } from './servicesData';
import { useLanguage } from '../LanguageContext';

interface ServicesSectionProps {
  onOpenInquiry: (type: string) => void;
  darkMode: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenInquiry, darkMode }) => {
  const { language, t } = useLanguage();
  const isEn = language === 'en';

  const [activeCategory, setActiveCategory] = useState<CategoryContent>(CATEGORIES_DATA[0]);
  const [selectedSubService, setSelectedSubService] = useState<SubServiceContent | null>(null);

  const isFirstRender = React.useRef(true);

  // Bring active category pill into view automatically inside the horizontal scroll container
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (activeCategory?.id) {
      const scrollContainer = document.getElementById('services-categories-scroll');
      const activeElement = document.getElementById(`services-tab-${activeCategory.id}`);
      if (scrollContainer && activeElement) {
        const containerRect = scrollContainer.getBoundingClientRect();
        const elementRect = activeElement.getBoundingClientRect();
        const offset = (elementRect.left - containerRect.left) - (containerRect.width / 2) + (elementRect.width / 2);
        scrollContainer.scrollTo({
          left: scrollContainer.scrollLeft + offset,
          behavior: 'smooth'
        });
      }
    }
  }, [activeCategory.id]);

  // When active category changes, reset selected sub-service
  const handleCategoryChange = (category: CategoryContent) => {
    setActiveCategory(category);
    setSelectedSubService(null);
  };

  // Render Category Icon dynamically
  const renderIcon = (iconName: string, className: string = 'text-[#D6B16B]') => {
    switch (iconName) {
      case 'Globe': return <Globe className={className} size={28} strokeWidth={1.5} id="icon-globe-svg" />;
      case 'ShoppingBag': return <ShoppingBag className={className} size={28} strokeWidth={1.5} id="icon-shopping-svg" />;
      case 'TrendingUp': return <TrendingUp className={className} size={28} strokeWidth={1.5} id="icon-trending-svg" />;
      case 'Users': return <Users className={className} size={28} strokeWidth={1.5} id="icon-users-svg" />;
      case 'BarChart3': return <BarChart3 className={className} size={28} strokeWidth={1.5} id="icon-barchart-svg" />;
      case 'Fingerprint': return <Fingerprint className={className} size={28} strokeWidth={1.5} id="icon-fingerprint-svg" />;
      case 'Palette': return <Palette className={className} size={28} strokeWidth={1.5} id="icon-palette-svg" />;
      case 'Handshake': return <Handshake className={className} size={28} strokeWidth={1.5} id="icon-handshake-svg" />;
      case 'Sparkles': return <Sparkles className={className} size={28} strokeWidth={1.5} id="icon-sparkles-svg" />;
      case 'Zap': return <Zap className={className} size={28} strokeWidth={1.5} id="icon-zap-svg" />;
      default: return <Globe className={className} size={28} strokeWidth={1.5} id="icon-default-svg" />;
    }
  };

  // Determine current active item displays (either selected sub-service or the category overview itself)
  const isSubActive = selectedSubService !== null;
  
  const displayTitle = isSubActive 
    ? (isEn ? selectedSubService.titleEn : selectedSubService.titleBn)
    : (isEn ? activeCategory.headingEn : activeCategory.headingBn);

  const displayDesc = isSubActive
    ? (isEn ? selectedSubService.descEn : selectedSubService.descBn)
    : (isEn ? activeCategory.descEn : activeCategory.descBn);

  const displayBestFor = isSubActive
    ? (isEn ? selectedSubService.bestForEn : selectedSubService.bestForBn)
    : (isEn ? activeCategory.bestForEn : activeCategory.bestForBn);

  const displayTimeline = isSubActive
    ? (isEn ? selectedSubService.timelineEn : selectedSubService.timelineBn)
    : (isEn ? activeCategory.timelineEn : activeCategory.timelineBn);

  const displayCapabilities = isSubActive
    ? (isEn ? selectedSubService.capabilitiesEn : selectedSubService.capabilitiesBn)
    : (isEn ? activeCategory.capabilitiesEn : activeCategory.capabilitiesBn);

  const displayTrustStatement = isSubActive
    ? (isEn ? selectedSubService.trustStatementEn : selectedSubService.trustStatementBn)
    : (isEn ? activeCategory.trustStatementEn : activeCategory.trustStatementBn);

  const currentLabel = isEn ? activeCategory.labelEn : activeCategory.labelBn;

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" id="services">
      {/* Decorative top grid divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-900/40 dark:via-neutral-900 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="services-main-container">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6" id="services-header-box">
          <div className="max-w-2xl" id="services-title-wrapper">
            <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-[0.25em] block mb-3" id="services-eyebrow">
              {t('Expert Competencies // Sitora Tech')}
            </span>
            <h2 className={`font-sans text-3xl sm:text-4.5xl md:text-5xl font-black tracking-tight uppercase leading-[1.1] sm:leading-none ${
              darkMode ? 'text-[#F7F8FA]' : 'text-[#111827]'
            }`} id="services-section-title">
              {t('Services We Provide')}
            </h2>
            <p className="mt-4 max-w-xl text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed" id="services-header-desc">
              {t('We operate fully hand-coded architectures that bypass slow templates, protecting page performance metrics and optimizing click-attributions.')}
            </p>
          </div>
          
          {/* Vertical mini dashboard indicator */}
          <div className="hidden lg:flex items-center gap-4 text-left font-mono text-[9px] text-neutral-500 bg-neutral-950/40 border border-neutral-900/80 p-3 rounded-lg" id="services-latency-dashboard">
            <Activity size={12} className="text-[#D6B16B]" />
            <div>
              <p className="text-neutral-400 font-bold uppercase">{t('SITORA CORE V4 ENGINE // ENHANCED')}</p>
              <p>{t('LATENCY MEASURABLE REDUCTION // 0.24s AVG')}</p>
            </div>
          </div>
        </div>

        {/* Category Navigation Pills (Horizontal scroll on all devices) */}
        <div className="mb-12 pb-4 border-b border-neutral-900/10 dark:border-neutral-900" id="services-pills-bar">
          <div 
            className="flex flex-nowrap overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none gap-2 w-full select-none" 
            style={{ 
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            id="services-categories-scroll"
          >
            {CATEGORIES_DATA.map((category) => {
              const isActive = activeCategory.id === category.id;
              const categoryLabel = isEn ? category.labelEn : category.labelBn;
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2.5 rounded-full font-mono text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shrink-0 cursor-pointer min-h-[44px] ${
                    isActive
                      ? 'bg-[#D6B16B] text-neutral-950 font-bold shadow-[0_0_20px_rgba(214,177,107,0.25)] border-transparent'
                      : 'bg-neutral-900/35 border border-neutral-900 hover:border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                  id={`services-tab-${category.id}`}
                  aria-label={`Select ${categoryLabel} category`}
                >
                  <span className="shrink-0 scale-75">{renderIcon(category.iconName, isActive ? 'text-neutral-950' : 'text-[#D6B16B]')}</span>
                  <span>{categoryLabel}</span>
                  {category.badge && (
                    <span className={`px-1.5 py-0.5 rounded text-[7px] font-sans font-black tracking-wide uppercase max-h-[16px] flex items-center leading-none scale-90 ${
                      isActive 
                        ? 'bg-neutral-950/20 text-neutral-950 border border-neutral-950/10' 
                        : 'bg-[#D6B16B]/20 text-[#D6B16B] border border-[#D6B16B]/30'
                    }`}>
                      {isEn ? category.badge.en : category.badge.bn}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Adaptive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="services-restructured-grid">
          
          {/* LEFT COLUMN: Large Featured Service Panel (35–40% width) */}
          <div className="lg:col-span-5 w-full sticky top-28" id="services-column-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory.id}-${selectedSubService?.id || 'default'}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between overflow-hidden relative ${
                  darkMode 
                    ? 'bg-[#0B1016]/80 border-[rgba(255,255,255,0.08)] shadow-2xl backdrop-blur-md' 
                    : 'bg-white border-[rgba(0,0,0,0.06)] shadow-xl'
                }`}
                id="services-featured-panel"
              >
                {/* Background organic glow circle */}
                <div className="absolute -top-[15%] -right-[15%] w-48 h-48 rounded-full bg-gradient-to-br from-[#D6B16B]/10 to-transparent blur-3xl pointer-events-none" />

                <div>
                  {/* Category Pill Tag + Category Icon */}
                  <div className="flex items-center justify-between mb-6" id="featured-panel-header">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#D6B16B] bg-[#D6B16B]/10 px-3 py-1.5 rounded-md border border-[#D6B16B]/20">
                      {currentLabel}
                    </span>
                    <div className="p-2 ml-auto rounded-lg bg-neutral-950/20 border border-neutral-900/60 text-[#D6B16B]">
                      {renderIcon(activeCategory.iconName, 'w-5 h-5')}
                    </div>
                  </div>

                  {/* Header or Active Sub-service tag if selected */}
                  {isSubActive && (
                    <span className="text-[9px] uppercase font-mono text-neutral-500 tracking-[0.2em] block mb-1">
                      {isEn ? '// ACTIVE SUB-SECTOR DETAILS' : '// সক্রিয় সাব-সার্ভিস বিবরণ'}
                    </span>
                  )}

                  {/* Main Title Head */}
                  <h3 className={`font-sans text-xl sm:text-2xl font-black uppercase tracking-tight mb-4 ${
                    darkMode ? 'text-[#F7F8FA]' : 'text-[#111827]'
                  }`} id="featured-panel-title">
                    {displayTitle}
                  </h3>

                  {/* Premium Description Content */}
                  <p className="text-xs sm:text-[13px] text-neutral-400 font-sans leading-relaxed mb-6" id="featured-panel-desc">
                    {displayDesc}
                  </p>

                  {/* Best For Section Box */}
                  <div className="mb-6 p-4 rounded-xl bg-neutral-950/15 border border-dashed border-neutral-900/60" id="featured-panel-bestfor">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Briefcase size={12} className="text-[#D6B16B]" />
                      <span className="text-[9.5px] uppercase font-mono text-neutral-400 tracking-wider font-bold">
                        {isEn ? 'Who This Is Best For' : 'যাঁদের জন্য আদর্শ'}
                      </span>
                    </div>
                    <p className={`text-[11px] sm:text-[11.5px] leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      {displayBestFor}
                    </p>
                  </div>

                  {/* Timeline parameters */}
                  <div className="mb-6 flex items-center justify-between py-2.5 px-4 rounded-xl bg-neutral-950/30 border border-neutral-900/60" id="featured-panel-timeline">
                    <div className="flex items-center gap-2">
                      <Clock size={12} className="text-[#D6B16B]" />
                      <span className="text-[10px] uppercase font-mono text-neutral-400 tracking-wider">
                        {isEn ? 'Typical Delivery Timeline' : 'ডেলিভারি সময়সীমা'}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#D6B16B]" id="featured-timeline-val">
                      {displayTimeline}
                    </span>
                  </div>

                  {/* Capabilities Bullet Highlights */}
                  <div className="mb-8" id="featured-panel-caps">
                    <span className="text-[10px] uppercase font-mono text-[#D6B16B] tracking-[0.2em] block mb-3 font-bold">
                      {isEn ? 'TECHNICAL CAPABILITY SCOPE' : 'টেকনিক্যাল ইমপ্লিমেন্টেশন স্কোপ'}
                    </span>
                    <div className="space-y-2.5" id="featured-caps-list">
                      {displayCapabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-[11px] text-neutral-400 font-sans" id={`featured-cap-row-${i}`}>
                          <div className="inline-flex mt-0.5 p-0.5 rounded-full bg-[#D6B16B]/10 border border-[#D6B16B]/25 shrink-0">
                            <Check size={9} className="text-[#D6B16B]" />
                          </div>
                          <span className={`leading-tight font-sans text-xs ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                            {cap}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Left Panel Footer: One conversion Button, and a tiny Trust Statement */}
                <div className="mt-auto pt-6 border-t border-neutral-900/40 dark:border-neutral-900/85" id="featured-panel-footer">
                  <div className="flex items-center justify-between gap-4 mb-4" id="trust-statement-row">
                    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider block">
                      {displayTrustStatement}
                    </span>
                  </div>
                  
                  {/* ONE PRIMARY CTA ONLY */}
                  <button
                    onClick={() => {
                      const inquiryRef = selectedSubService ? selectedSubService.id : activeCategory.id;
                      onOpenInquiry(inquiryRef);
                    }}
                    className={`group/btn w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-xs font-mono font-black uppercase tracking-widest transition-all duration-300 transform cursor-pointer min-h-[44px] ${
                      darkMode 
                        ? 'bg-[#D6B16B] text-neutral-950 hover:bg-[#ffe6af] shadow-[0_0_24px_rgba(214,177,107,0.15)] hover:shadow-[0_0_30px_rgba(214,177,107,0.30)]' 
                        : 'bg-neutral-950 text-white hover:bg-neutral-800 shadow-md'
                    }`}
                    id="featured-primary-cta"
                    aria-label={isEn ? "Request Free Consultation" : "ফ্রি কনসালটেশন বুক করুন"}
                  >
                    <span>{isEn ? t('Request Free Consultation') : 'ফ্রি কনসালটেশন বুক করুন'}</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT COLUMN: Grid of Sub-Service Cards (60–65% width) */}
          <div className="lg:col-span-7 w-full space-y-6 animate-fade-in" id="services-column-right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="subservices-grid">
              <AnimatePresence mode="popLayout">
                {activeCategory.subServices.map((sub, idx) => {
                  const isSelected = selectedSubService?.id === sub.id;
                  const title = isEn ? sub.titleEn : sub.titleBn;
                  const desc = isEn ? sub.descEn : sub.descBn;
                  const capabilitiesList = isEn ? sub.capabilitiesEn : sub.capabilitiesBn;
                  
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      key={sub.id}
                      onClick={() => {
                        setSelectedSubService(sub);
                        const featuredPanel = document.getElementById('services-featured-panel');
                        if (featuredPanel) {
                          featuredPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      className={`group relative p-5 rounded-xl border cursor-pointer transition-all duration-400 select-none min-h-[180px] flex flex-col justify-between overflow-hidden ${
                        isSelected 
                          ? 'border-[#D6B16B] bg-[#101722]/60 ring-1 ring-[#D6B16B]/30 shadow-[0_0_25px_rgba(214,177,107,0.06)]' 
                          : darkMode
                            ? 'bg-[#0B1016]/30 border-neutral-900/60 hover:border-[#D6B16B]/35 hover:bg-[#101722]/50 hover:shadow-[0_0_30px_rgba(214,177,107,0.04)] shadow-sm'
                            : 'bg-[#FCFDFF] border-[rgba(0,0,0,0.06)] hover:border-[#D6B16B]/40 hover:bg-[#FAFBFC]'
                      }`}
                      id={`sub-service-card-${sub.id}`}
                    >
                      {/* NEW / AI BADGE for AI Search Optimization (AEO) card */}
                      {sub.badge && (
                        <div className="absolute top-3 right-3 flex items-center gap-1" id={`aeo-badge-container`}>
                          <span className="p-1 px-2 rounded-md bg-[#D6B16B]/25 text-[#D6B16B] text-[8px] font-mono leading-none tracking-wider font-extrabold shadow-sm border border-[#D6B16B]/30 animate-pulse">
                            {isEn ? sub.badge.en : sub.badge.bn}
                          </span>
                        </div>
                      )}

                      <div>
                        {/* Subservice Title */}
                        <div className="flex items-start justify-between gap-4 mb-2 pr-12" id={`sub-card-title-box-${sub.id}`}>
                          <h4 className={`font-sans text-xs sm:text-sm font-extrabold uppercase tracking-tight transition-colors ${
                            isSelected ? 'text-[#D6B16B]' : (darkMode ? 'text-[#F7F8FA] group-hover:text-white' : 'text-[#111827]')
                          }`} id={`sub-title-${sub.id}`}>
                            {title}
                          </h4>
                        </div>

                        {/* Subservice Description */}
                        <p className={`text-[11px] leading-relaxed mb-4 line-clamp-2 ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`} id={`sub-desc-${sub.id}`}>
                          {desc}
                        </p>

                        {/* Core features listing (3-5 bullets) */}
                        <div className="space-y-1.5 border-t border-neutral-900/5 dark:border-neutral-900/40 pt-3" id={`sub-features-box-${sub.id}`}>
                          {capabilitiesList.slice(0, 3).map((cap, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-2 text-[9.5px] text-neutral-400" id={`sub-f-${sub.id}-${fIdx}`}>
                              <Check size={9} className="text-[#D6B16B] shrink-0" />
                              <span className="truncate max-w-[170px] text-neutral-400">{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Card Footer Interaction Line (Arrow indicator) */}
                      <div className="flex items-center justify-end mt-4 pt-2 border-t border-neutral-900/5 dark:border-neutral-900/10" id={`sub-card-footer-${sub.id}`}>
                        <span className={`text-[9px] font-mono tracking-widest uppercase flex items-center gap-1 ${
                          isSelected ? 'text-[#D6B16B]' : 'text-neutral-500 group-hover:text-neutral-300'
                        }`}>
                          <span>{isEn ? 'DETAILS' : 'বিস্তারিত'}</span>
                          <ArrowUpRight size={12} className={`transition-all ${
                            isSelected ? 'translate-x-0.5 -translate-y-0.5 rotate-45 text-[#D6B16B]' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-neutral-500 group-hover:text-[#D6B16B]'
                          }`} />
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
