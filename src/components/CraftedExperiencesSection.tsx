import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Cpu, BarChart2, Laptop, ShoppingCart, Award } from 'lucide-react';
import { CRAFTED_EXPERIENCES } from '../data';

interface CraftedExperiencesProps {
  onOpenInquiry: (type?: string) => void;
  darkMode: boolean;
  onExplorePortfolio: () => void;
}

export const CraftedExperiencesSection: React.FC<CraftedExperiencesProps> = ({ 
  onOpenInquiry, 
  darkMode,
  onExplorePortfolio
}) => {
  
  // Render modern high-fidelity visual representations of product wireframes
  const renderMockupScreen = (type: 'saas' | 'ecommerce' | 'corporate' | 'creative' | 'analytics') => {
    switch (type) {
      case 'ecommerce':
        return (
          <div className="relative w-full h-full bg-[#05070A] flex flex-col justify-between p-6 overflow-hidden text-left" id="mock-screen-ecommerce">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(214,177,107,0.15)_0%,rgba(0,0,0)_0%)]" />
            
            {/* Header row */}
            <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] pb-3 z-10" id="m-ecom-header">
              <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">SHADHINDOMAIN STORE</span>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[8px] font-mono text-neutral-400">PAYMENTS SECURE</span>
              </div>
            </div>

            {/* Central visualizer */}
            <div className="grid grid-cols-12 gap-4 my-auto z-10" id="m-ecom-center">
              <div className="col-span-7 space-y-2">
                <span className="text-[8px] font-mono text-[#D6B16B] tracking-widest uppercase">Premium Curation</span>
                <h4 className="font-sans text-lg font-black text-[#F7F8FA] leading-none uppercase tracking-tight">
                  Sitora Special Blend
                </h4>
                <p className="text-[9px] text-neutral-400 leading-snug">
                  Unlocking premium organic local agricultural imports for global consumption.
                </p>
                <div className="flex gap-2 pt-1">
                  <span className="px-2 py-0.5 rounded bg-[#101722] border border-[rgba(255,255,255,0.08)] text-[8px] text-neutral-300 font-mono">100g bags</span>
                  <span className="px-2 py-0.5 rounded bg-[#101722] border border-[rgba(255,255,255,0.08)] text-[8px] text-neutral-300 font-mono">৳1,450 BDT</span>
                </div>
              </div>
              <div className="col-span-5 relative bg-[#0B1016] border border-[rgba(255,255,255,0.08)] rounded-xl p-3 flex flex-col justify-between" id="m-ecom-card">
                <div className="flex items-center justify-between">
                  <ShoppingCart size={12} className="text-[#D6B16B]" />
                  <span className="text-[8px] text-emerald-400 font-mono font-bold">+142%</span>
                </div>
                <div className="space-y-1 mt-4">
                  <div className="h-1 bg-emerald-400/40 rounded-full w-full" />
                  <div className="h-1 bg-emerald-500 rounded-full w-4/5" />
                </div>
                <span className="text-[7px] text-neutral-500 font-mono mt-1 block">Live metric boost</span>
              </div>
            </div>

            {/* Small checkout bar */}
            <div className="flex items-center justify-between pt-3 border-t border-[rgba(255,255,255,0.08)] z-10" id="m-ecom-footer">
              <span className="text-[8px] font-mono text-neutral-500">CONVERSION ASSISTANCE ACTIVE</span>
              <span className="px-2 py-0.5 text-[8px] rounded bg-[#D6B16B] text-neutral-950 font-bold uppercase tracking-wider font-sans">
                Checkout →
              </span>
            </div>
          </div>
        );

      case 'corporate':
        return (
          <div className="relative w-full h-full bg-[#05070A] flex flex-col justify-between p-6 overflow-hidden text-left" id="mock-screen-corporate">
            <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-[#7ED4FF]/5 blur-3xl pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] pb-3" id="m-corp-header">
              <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">APEX ADVISORY GROUP</span>
              <span className="text-[8px] font-mono px-2 py-0.5 bg-[#0B1016] border border-[rgba(255,255,255,0.08)] text-neutral-400 rounded-full">EST. 1994</span>
            </div>

            <div className="space-y-3 my-auto" id="m-corp-content">
              <div className="flex items-center gap-1.5" id="m-corp-title-tag">
                <Award size={10} className="text-[#D6B16B]" />
                <span className="text-[8px] text-[#D6B16B] font-mono tracking-widest uppercase">Institutional Ledger</span>
              </div>
              <h4 className="font-sans text-xl font-bold text-[#F7F8FA] tracking-tight leading-none uppercase">
                FINANCIAL TRANSLATION
              </h4>
              <p className="text-[10px] text-neutral-400 leading-normal max-w-sm">
                Structuring large-scale multi-family asset optimization and compliance frameworks inside Dhaka.
              </p>
              
              <div className="grid grid-cols-3 gap-2 pt-2" id="m-corp-stats flex">
                <div className="p-2 border border-[rgba(255,255,255,0.08)] bg-[#0B1016]/60 rounded">
                  <div className="text-[7px] text-neutral-500 font-mono">LATENCY</div>
                  <div className="text-xs font-bold text-emerald-400 font-mono">0.45s</div>
                </div>
                <div className="p-2 border border-[rgba(255,255,255,0.08)] bg-[#0B1016]/60 rounded">
                  <div className="text-[7px] text-neutral-500 font-mono">FID ACCURACY</div>
                  <div className="text-xs font-bold text-white font-mono">100%</div>
                </div>
                <div className="p-2 border border-[rgba(255,255,255,0.08)] bg-[#0B1016]/60 rounded">
                  <div className="text-[7px] text-neutral-500 font-mono">DENSITY</div>
                  <div className="text-xs font-bold text-white font-mono">9.8/10</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[rgba(255,255,255,0.08)]" id="m-corp-footer">
              <span className="text-[8px] font-mono text-neutral-500">AUTHORITATIVE CORE FRAMEWORK</span>
              <span className="text-[8px] font-mono text-neutral-400">SEO SECURE • GTM PRO</span>
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="relative w-full h-full bg-[#080808] flex flex-col justify-between p-6 overflow-hidden text-left" id="mock-screen-analytics">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-violet-600/5 blur-[80px]" />

            <div className="flex items-center justify-between border-b border-neutral-900 pb-3" id="m-anal-header">
              <span className="text-[9px] font-mono text-neutral-500 tracking-widest uppercase">ZAYN LEAD INTEGRATOR</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[8px] font-mono font-semibold">CAPI SYNCING</span>
            </div>

            {/* Central visual graphs */}
            <div className="grid grid-cols-2 gap-4 my-auto relative z-10" id="m-anal-mid">
              <div className="space-y-2">
                <div className="text-[8px] font-mono text-neutral-500 uppercase tracking-widest">ACTIVE FUNNEL CAPTURE</div>
                <div className="font-sans text-2xl font-black text-white leading-none">
                  4.8x <span className="text-xs font-medium text-emerald-400">BOOST</span>
                </div>
                <div className="h-1 bg-neutral-900 rounded-full w-full">
                  <div className="h-full bg-emerald-400 rounded-full w-[85%]" />
                </div>
                <span className="text-[8px] text-neutral-450 block leading-tight font-sans">
                  Attribution verified via independent server nodes.
                </span>
              </div>

              <div className="p-3 border border-neutral-900 bg-neutral-950/80 rounded-xl flex flex-col justify-between gap-2" id="m-anal-mini-grid">
                <div className="flex items-center justify-between">
                  <BarChart2 size={13} className="text-violet-500" />
                  <span className="text-[8px] font-mono text-neutral-500">99.9% ATTRIBUTE</span>
                </div>
                <div className="text-xs font-mono font-bold text-white">
                  +38.4% CLICKS
                </div>
                <span className="text-[7px] text-neutral-500 leading-none">Attributed Event Deduplication</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-neutral-900" id="m-anal-footer">
              <span className="text-[8px] font-mono text-neutral-500">META PIXEL API CONNECTED</span>
              <span className="text-[8px] font-mono text-neutral-500">STRICT PRIVACY COMPLIANT</span>
            </div>
          </div>
        );

      case 'creative':
      default:
        return (
          <div className="relative w-full h-full bg-[#101722] flex flex-col justify-between p-6 overflow-hidden text-left" id="mock-screen-creative">
            {/* Elegant luxury style */}
            <div className="absolute inset-0 bg-[#D6B16B]/[0.02] mix-blend-overlay" />
            
            <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] pb-3" id="m-cre-header">
              <span className="text-[9px] font-mono text-[#D6B16B] tracking-widest uppercase">ARANYA WEAVE LAB</span>
              <span className="text-[8px] font-sans text-neutral-400 font-medium">AWWWARDS NOMINEE • 2026</span>
            </div>

            <div className="space-y-4 my-auto relative z-10" id="m-cre-content">
              <span className="text-[8px] font-mono text-[#D6B16B] uppercase tracking-[0.3em] block">Sartorial Heritage</span>
              <h4 className="font-serif text-2xl font-normal italic text-[#F7F8FA] tracking-wide leading-none">
                The Heritage Thread
              </h4>
              <p className="font-sans text-[10px] text-neutral-400 leading-relaxed max-w-sm">
                A custom visual portfolio interface mapping physical artisan loom products into dynamic organic HTML layouts.
              </p>
              
              <div className="flex items-center gap-4" id="m-cre-action">
                <div className="w-8 h-8 rounded-full border border-[#D6B16B]/20 flex items-center justify-center text-[#D6B16B]">
                  <Laptop size={12} />
                </div>
                <span className="text-[8px] font-mono tracking-widest text-[#D6B16B] uppercase">FLUID MOTION ACTIVE //</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[rgba(255,255,255,0.08)]" id="m-cre-footer">
              <span className="text-[8px] font-mono text-neutral-500">LENIS SMOOTH SCROLLER LINKED</span>
              <span className="text-[8px] font-mono text-neutral-500">DESIGN INTEGRITY</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section className="py-24 sm:py-32 relative" id="crafted-experiences">
      {/* Light subtle divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-900 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="crafted-portfolio-container">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 sm:mb-24" id="portfolio-header">
          <span className="text-[10px] font-mono text-[#D6B16B] dark:text-[#D6B16B] md:text-[#B88A44] uppercase tracking-[0.25em] block mb-3" id="portfolio-eyebrow">
            Portfolio Curation
          </span>
          <h2 className={`font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight ${
            darkMode ? 'text-[#F7F8FA]' : 'text-[#111827]'
          }`} id="portfolio-title">
            Crafted Experiences
          </h2>
          <p className="mt-4 max-w-xl text-xs sm:text-sm text-neutral-400 leading-relaxed" id="portfolio-subtitle">
            A selection of highly customized digital experiences engineered to deliver instant institutional trust, immense user engagement, and stellar conversion results.
          </p>
        </div>

        {/* Editorial Layout Sequence (Alternative Left-Right-Left) */}
        <div className="space-y-24 sm:space-y-36" id="portfolio-editorial-stack">
          {CRAFTED_EXPERIENCES.slice(0, 4).map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center`}
                id={`portfolio-item-${project.id}`}
              >
                
                {/* Visual Representation (Left on Even, Right on Odd) */}
                <div 
                  className={`lg:col-span-7 relative group/mockup rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#0B1016] overflow-hidden shadow-2xl h-[300px] sm:h-[380px] ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                  id={`portfolio-mock-box-${project.id}`}
                >
                  {/* Subtle golden cursor hover glow */}
                  <div className="absolute inset-0 bg-transparent group-hover/mockup:bg-[#D6B16B]/[0.015] transition-colors duration-500 z-10 pointer-events-none" />
                  
                  {/* Browser Chrome Header bar */}
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-2.5 border-b border-[rgba(255,255,255,0.08)] bg-[#05070A]/60 backdrop-blur-sm group/bar cursor-pointer"
                    id={`p-mock-bar-${project.id}`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    </div>
                    <span className="text-[9px] text-neutral-500 font-mono tracking-wider group-hover/bar:text-[#D6B16B] transition-colors">{project.liveUrl}</span>
                    <Cpu size={11} className="text-neutral-500 group-hover/bar:text-[#D6B16B] transition-colors" />
                  </a>

                  {/* Dynamic Rendered Canvas */}
                  <div className="w-full h-full" id={`p-mock-canvas-${project.id}`}>
                    {renderMockupScreen(project.imageSvgType)}
                  </div>

                  {/* Absolute metric tag */}
                  <div 
                    className="absolute bottom-4 right-4 z-20 px-3.5 py-1.5 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#05070A]/90 shadow-xl backdrop-blur-md flex items-center gap-2 font-mono text-[10px] tracking-wide"
                    id={`p-mock-badge-${project.id}`}
                  >
                    <span className="font-bold text-[#D6B16B]">{project.metric}</span>
                    <span className="text-neutral-400">{project.metricLabel}</span>
                  </div>
                </div>

                {/* Text Content Description Column */}
                <div 
                  className={`lg:col-span-5 flex flex-col justify-center space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                  id={`portfolio-details-${project.id}`}
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-[0.2em] block">
                      {project.category}
                    </span>
                    <h3 className={`font-sans text-2xl sm:text-3xl font-black tracking-tight leading-tight ${
                      darkMode ? 'text-[#F7F8FA]' : 'text-[#111827]'
                    }`} id={`portfolio-title-text-${project.id}`}>
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-450 leading-relaxed font-sans" id={`portfolio-longdesc-${project.id}`}>
                    {project.description}
                  </p>

                  {/* Tools Row list tags */}
                  <div className="flex flex-wrap gap-2" id={`portfolio-tags-${project.id}`}>
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className={`font-mono text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                          darkMode 
                            ? 'bg-neutral-950 border-neutral-900 text-neutral-400' 
                            : 'bg-neutral-50 border-neutral-200 text-neutral-600'
                        }`}
                        id={`portfolio-tag-${project.id}-${tag.replace(/\s+/g, '-')}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link action */}
                  <div className="flex items-center gap-6 pt-2" id={`portfolio-actions-${project.id}`}>
                    <button
                      onClick={() => onOpenInquiry('web-dev')}
                      className={`group flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        darkMode ? 'text-white hover:text-[#D6B16B]' : 'text-[#111827] hover:text-[#B88A44]'
                      }`}
                      id={`portfolio-btn-${project.id}`}
                    >
                      <span>Inquire Blueprint</span>
                      <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        darkMode ? 'text-neutral-400 hover:text-[#D6B16B]' : 'text-neutral-500 hover:text-[#B88A44]'
                      }`}
                      id={`portfolio-live-link-${project.id}`}
                    >
                      <span className="font-mono">Explore Site</span>
                      <ArrowUpRight size={14} className="text-neutral-500 group-hover:text-[#D6B16B] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Explore Crafted Experiences Premium CTA */}
        <div className="mt-28 text-center" id="homepage-portfolio-explore-cta">
          <div className="inline-flex flex-col items-center space-y-5">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
              Curated Completeness • {CRAFTED_EXPERIENCES.length} total engineered blueprints
            </span>
            <button
              onClick={onExplorePortfolio}
              className={`group flex items-center gap-3 py-4 px-9 rounded-xl font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xl border cursor-pointer ${
                darkMode 
                  ? 'bg-neutral-950 border-neutral-900 text-[#D6B16B] hover:bg-[#D6B16B] hover:text-neutral-950 hover:shadow-[0_0_40px_rgba(214,177,107,0.25)] hover:border-transparent' 
                  : 'bg-white border-neutral-200 text-neutral-900 hover:bg-neutral-950 hover:text-white hover:border-transparent hover:shadow-lg'
              }`}
              id="homepage-portfolio-explore-btn"
            >
              <span>Explore Crafted Experiences</span>
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
