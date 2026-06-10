import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Search, 
  Cpu, 
  ShoppingCart, 
  Award, 
  BarChart2, 
  HelpCircle,
  ExternalLink,
  Check
} from 'lucide-react';
import { CRAFTED_EXPERIENCES } from '../data';
import { CraftedExperience } from '../types';
import { ProposalPlanner } from './ProposalPlanner';

interface PortfolioPageProps {
  darkMode: boolean;
  onBackToHome: () => void;
  onOpenInquiry: (serviceId?: string) => void;
}

type ProjectType = 'all' | 'ecommerce' | 'saas' | 'creative' | 'corporate';

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ 
  darkMode, 
  onBackToHome, 
  onOpenInquiry 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<CraftedExperience | null>(null);

  // Pagination count state
  const [visibleCount, setVisibleCount] = useState<number>(6);

  // Reset pagination when filter or search changes
  useEffect(() => {
    setVisibleCount(6);
  }, [selectedCategory, searchQuery]);

  // Categories mapping identical to Homepage
  const categories: { value: ProjectType; label: string; count: number }[] = useMemo(() => {
    return [
      { 
        value: 'all', 
        label: 'All Masterpieces', 
        count: CRAFTED_EXPERIENCES.length 
      },
      { 
        value: 'ecommerce', 
        label: 'E-Commerce & Retail', 
        count: CRAFTED_EXPERIENCES.filter(p => p.imageSvgType === 'ecommerce').length 
      },
      { 
        value: 'saas', 
        label: 'SaaS & Web Apps', 
        count: CRAFTED_EXPERIENCES.filter(p => p.imageSvgType === 'saas' || p.imageSvgType === 'analytics').length 
      },
      { 
        value: 'creative', 
        label: 'Creative & Showcase', 
        count: CRAFTED_EXPERIENCES.filter(p => p.imageSvgType === 'creative').length 
      },
      { 
        value: 'corporate', 
        label: 'Corporate & Portals', 
        count: CRAFTED_EXPERIENCES.filter(p => p.imageSvgType === 'corporate').length 
      },
    ];
  }, []);

  // Filtering + Searching logic identical to Homepage
  const filteredProjects = useMemo(() => {
    return CRAFTED_EXPERIENCES.filter((project) => {
      // Category Match
      const matchesCategory = 
        selectedCategory === 'all' ||
        (selectedCategory === 'ecommerce' && project.imageSvgType === 'ecommerce') ||
        (selectedCategory === 'saas' && (project.imageSvgType === 'saas' || project.imageSvgType === 'analytics')) ||
        (selectedCategory === 'creative' && project.imageSvgType === 'creative') ||
        (selectedCategory === 'corporate' && project.imageSvgType === 'corporate');

      // Search Query Match
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Sliced items for Pagination
  const slicedProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  // Render high-fidelity client-side browser interior views
  const renderMockupScreen = (type: 'saas' | 'ecommerce' | 'corporate' | 'creative' | 'analytics') => {
    switch (type) {
      case 'ecommerce':
        return (
          <div className="relative w-full h-full bg-[#030508] flex flex-col justify-between p-4 overflow-hidden text-left" id="mock-desktop-ecommerce">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D6B16B]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between border-b border-neutral-900 pb-1.5">
              <span className="text-[7.5px] font-mono text-neutral-400 uppercase tracking-widest font-bold">SITORALUX.CO</span>
              <div className="flex items-center gap-1.5 text-[6.5px] font-mono text-[#D6B16B]">
                <ShoppingCart size={9} />
                <span>BAG(3)</span>
                <span className="bg-emerald-500 text-black px-1 py-[1px] rounded font-black text-[5.5px]">৳1,450 BDT</span>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-3 my-auto items-center">
              <div className="col-span-8 space-y-1">
                <span className="text-[6.5px] font-mono text-[#D6B16B] uppercase tracking-widest block font-bold">Limited Drop</span>
                <h4 className="font-sans text-[11.5px] font-black text-white leading-tight uppercase tracking-tight">
                  Organic Blend V2
                </h4>
                <p className="text-[7.5px] text-neutral-400 leading-snug">
                  Premium fluid e-commerce store with high conversions tracking.
                </p>
                <div className="flex items-center gap-1.5 pt-0.5">
                  <span className="px-1.5 py-0.5 bg-neutral-950 border border-neutral-900 text-[6.5px] text-neutral-440 font-mono">100g</span>
                  <span className="px-1.5 py-0.5 bg-[#D6B16B]/10 text-[#D6B16B] text-[6.5px] font-mono font-bold border border-[#D6B16B]/20 rounded">৳1,450 BDT</span>
                </div>
              </div>
              <div className="col-span-4 flex justify-center">
                <div className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-neutral-950 to-[#D6B16B]/10 border border-neutral-800 flex items-center justify-center shadow-lg">
                  <ShoppingCart size={15} className="text-[#D6B16B] opacity-85" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 text-neutral-950 text-[6px] rounded-full flex items-center justify-center font-bold font-mono">✓</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-1.5 border-t border-neutral-900/60">
              <span className="text-[6.5px] font-mono text-neutral-500">CAPI ENGINE INTUITIVE</span>
              <span className="px-2 py-0.5 text-[6.5px] rounded bg-[#D6B16B] text-neutral-950 font-black uppercase tracking-wider font-sans">
                Checkout →
              </span>
            </div>
          </div>
        );

      case 'corporate':
        return (
          <div className="relative w-full h-full bg-[#030508] flex flex-col justify-between p-4 overflow-hidden text-left" id="mock-desktop-corporate">
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-[#3b82f6]/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between border-b border-neutral-900 pb-1.5">
              <span className="text-[7.5px] font-mono text-neutral-500 uppercase tracking-widest font-semibold">APEX BLUEPRINT</span>
              <span className="text-[6px] font-mono px-1.5 py-0.5 bg-neutral-950 border border-neutral-900 text-neutral-400 rounded-full">EST. 2026</span>
            </div>
            <div className="my-auto space-y-1.5">
              <div className="flex items-center gap-1">
                <Award size={8} className="text-[#D6B16B]" />
                <span className="text-[6px] text-[#D6B16B] font-mono tracking-widest uppercase font-bold">AUTHORITY DIRECTORY</span>
              </div>
              <h4 className="font-sans text-[11.5px] font-black text-white leading-tight uppercase tracking-tight">
                Institutional Authority
              </h4>
              <p className="text-[7.5px] text-neutral-400 leading-snug">
                Engineered for maximum speed and absolute business trust index.
              </p>
              <div className="flex gap-1.5 pt-0.5" id="card-corp-pills-desktop">
                <div className="px-1.5 py-0.5 border border-neutral-900 bg-neutral-950 rounded text-[6px] font-mono text-emerald-400 font-bold">
                  SEO 99%
                </div>
                <div className="px-1.5 py-0.5 border border-neutral-900 bg-neutral-950 rounded text-[6px] font-mono text-[#D6B16B] font-semibold">
                  FID 100%
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-1.5 border-t border-neutral-900/60 text-[6px] font-mono text-neutral-500">
              <span>SCHEMAS INJECTED</span>
              <span>GTM_ACTIVE // V2</span>
            </div>
          </div>
        );

      case 'analytics':
      case 'saas':
        return (
          <div className="relative w-full h-full bg-[#030508] flex flex-col justify-between p-4 overflow-hidden text-left" id="mock-desktop-saas">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-[#D6B16B]/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between border-b border-neutral-900 pb-1.5">
              <span className="text-[7.5px] font-mono text-neutral-450 tracking-widest uppercase font-bold">FUNNEL ANALYTICS</span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[5.5px] font-mono font-bold animate-pulse">CAPI LIVE</span>
            </div>
            <div className="grid grid-cols-2 gap-3 my-auto items-center">
              <div className="space-y-1">
                <div className="text-[5.5px] font-mono text-neutral-500 uppercase tracking-widest">Ctr Conversion Boost</div>
                <div className="font-sans text-[15px] font-black text-white leading-none">
                  5.2x <span className="text-[7px] font-bold text-emerald-450 uppercase font-mono ml-1">Active</span>
                </div>
              </div>
              <div className="flex items-end gap-[1.5px] h-8 justify-end">
                <span className="w-1.5 h-2 bg-neutral-900 rounded-sm" />
                <span className="w-1.5 h-4 bg-neutral-850 rounded-sm" />
                <span className="w-1.5 h-3 bg-neutral-700 rounded-sm" />
                <span className="w-1.5 h-6 bg-[#D6B16B]/40 rounded-sm animate-pulse" />
                <span className="w-1.5 h-8 bg-[#D6B16B] rounded-sm" />
              </div>
            </div>
            <div className="flex items-center justify-between pt-1.5 border-t border-neutral-900/60 text-[6px] font-mono text-neutral-500">
              <span>PIXEL &amp; CLOUDFLARE LINKED</span>
              <span>OK // V2</span>
            </div>
          </div>
        );

      case 'creative':
      default:
        return (
          <div className="relative w-full h-full bg-[#030508] flex flex-col justify-between p-4 overflow-hidden text-left" id="mock-desktop-creative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D6B16B]/[0.02] to-transparent pointer-events-none" />
            <div className="flex items-center justify-between border-b border-neutral-900 pb-1.5">
              <span className="text-[7px] font-mono text-[#D6B16B] tracking-widest uppercase font-bold">WEAVERS LAB</span>
              <span className="text-[6px] font-sans text-neutral-450 font-bold">AWWWARDS WINNER</span>
            </div>
            <div className="space-y-1 my-auto">
              <span className="text-[5.5px] font-mono text-[#D6B16B] uppercase tracking-[0.25em] block animate-pulse">Sartorial Heritage</span>
              <h4 className="font-serif text-[13px] font-normal italic text-white leading-none">
                The Loom Portfolio
              </h4>
              <p className="font-sans text-[7.5px] text-neutral-400 leading-normal max-w-[200px]">
                Immersive smooth-scroll showcase of legendary master weaver workshops.
              </p>
            </div>
            <div className="flex items-center justify-between pt-1.5 border-t border-neutral-900/60 text-[6px] font-mono text-neutral-500">
              <span>LENIS SMOOTH ACCEL</span>
              <span>98 FPS SPEED</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="py-24 sm:py-32 relative min-h-screen" id="dedicated-portfolio-viewport">
      {/* Absolute glow grids backing */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" id="portfolio-back-glows">
        <div className="absolute top-[10%] left-[5%] w-[50%] h-[35%] bg-[#D6B16B] opacity-[0.035] blur-[130px] rounded-full" />
        <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] bg-[#D6B16B] opacity-[0.02] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Link Row button */}
        <div className="mb-12" id="portfolio-back-row">
          <button
            onClick={onBackToHome}
            className={`group inline-flex items-center gap-2 text-xs font-mono font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer py-2 px-4 rounded-full border ${
              darkMode 
            ? 'border-neutral-950 bg-neutral-950 text-neutral-400 hover:text-white hover:border-[#D6B16B]/60 hover:shadow-[0_0_15px_rgba(214,177,107,0.1)]' 
            : 'border-neutral-200 bg-white text-neutral-600 hover:text-black hover:border-neutral-300 shadow-sm'
            }`}
            id="portfolio-back-home-btn"
          >
            <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-1 text-[#D6B16B]" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Storytelling Title + Overview */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20" id="portfolio-headline-box">
          <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-[0.3em] block mb-3 font-semibold">
            Digital Architecture Archive
          </span>
          <h1 className={`font-sans text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] sm:leading-none uppercase ${
            darkMode ? 'text-[#F7F8FA]' : 'text-[#111827]'
          }`} id="portfolio-main-headline">
            Portfolio Projects
          </h1>
          <p className="mt-5 text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
            Every digital asset we construct is a customized masterpiece. No cookie-cutter templates, no compromised load speeds. Explore the full index of our engineered websites and systems designed to deliver instant institutional trust and maximized conversion metrics.
          </p>
        </div>

        {/* =========================================================================
            INTERACTIVE PROPOSAL PLANNER
           ========================================================================= */}
        <div className="mb-24 pt-8 max-w-4xl mx-auto" id="interactive-pricing-planner-container">
          <ProposalPlanner darkMode={darkMode} />
        </div>

        {/* =========================================================================
            PORTFOLIO FILTER SECTION (Standard Elegant Portfolio Filter)
           ========================================================================= */}
        <div className="pt-16 border-t border-neutral-900" id="portfolio-filter-section-root">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4" id="portfolio-filter-header">
            <div>
              <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-[0.25em] block mb-2 font-bold font-mono">
                Dynamic Archive Search
              </span>
              <h2 className={`font-sans text-xl sm:text-2xl font-black uppercase tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                Archive Directory Filter
              </h2>
            </div>
            
            {/* Search box style optimized */}
            <div className="relative w-full md:w-[320px]" id="portfolio-search-box">
              <span className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-neutral-500">
                <Search size={14} />
              </span>
              <input
                type="text"
                placeholder="Search tags, specs, or modules..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-1 focus:ring-[#D6B16B] font-sans ${
                  darkMode 
                    ? 'bg-neutral-900 border-neutral-800 text-white placeholder-neutral-500 focus:border-[#D6B16B]/80' 
                    : 'bg-white border-neutral-200 text-neutral-950 placeholder-neutral-400 focus:border-[#D6B16B]'
                }`}
                id="portfolio-search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-3 flex items-center text-[10px] font-mono text-neutral-500 hover:text-white"
                  id="search-clear-btn"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Categories switcher tabs */}
          <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-neutral-900/40" id="portfolio-filters-tabs">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-3.5 py-1.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#D6B16B] text-neutral-950 font-bold shadow-[0_0_15px_rgba(214,177,107,0.2)] border-transparent'
                      : 'bg-neutral-900/40 border border-neutral-900/60 hover:border-[#D6B16B]/30 text-neutral-400 hover:text-white'
                  }`}
                  id={`cat-filter-${cat.value}`}
                >
                  <span>{cat.value === 'all' ? 'All Builds' : cat.label}</span>
                  <span className={`text-[8.5px] px-1.5 py-0.5 rounded font-black ${
                    isActive ? 'bg-neutral-950/20 text-neutral-950' : 'bg-neutral-950/60 text-neutral-500'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mb-6 flex items-center justify-between font-mono text-[9px] text-[#A7B0BD] uppercase tracking-wider px-1">
            <span>Query output: Sitora filtered directory contains {filteredProjects.length} blueprints</span>
            {selectedCategory !== 'all' && (
              <span className="text-[#D6B16B] font-bold">Category isolation active</span>
            )}
          </div>

          {/* 3 cards per row grid */}
          {filteredProjects.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-16 text-center rounded-2xl border border-neutral-900 bg-neutral-950/40"
              id="portfolio-no-results"
            >
              <HelpCircle size={32} className="mx-auto text-neutral-600 mb-4" />
              <span className="block font-sans text-sm text-neutral-400 font-semibold mb-1">No Matching Blueprints Found</span>
              <span className="block text-xs text-neutral-500 font-sans max-w-md mx-auto">Try clearing your filters or refining your search term to view Sitora's core digital designs.</span>
              <button
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="mt-4 text-xs font-mono font-extrabold text-[#D6B16B] underline underline-offset-4 cursor-pointer hover:text-[#ebd5ad]"
              >
                Reset Search &amp; Filters
              </button>
            </motion.div>
          ) : (
            <div id="portfolio-cards-grid-outer">
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" 
                id="portfolio-cards-grid"
              >
                <AnimatePresence mode="popLayout">
                  {slicedProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.04 }}
                      className={`group rounded-2xl border relative flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                        darkMode 
                          ? 'bg-neutral-955 border-[#D6B16B]/15 hover:border-[#D6B16B]/50 hover:-translate-y-1.5 hover:shadow-[0_0_35px_rgba(214,177,107,0.065)]' 
                          : 'bg-white border-neutral-200 hover:border-[#D6B16B]/50 hover:-translate-y-1.5'
                      }`}
                      id={`p-card-outer-${project.id}`}
                    >
                      {/* Top Block: Glass Browser Mockup */}
                      <div className="h-[210px] relative overflow-hidden bg-neutral-100 dark:bg-neutral-950 border-b border-neutral-900/60" id={`p-card-mock-box-${project.id}`}>
                        <div className="absolute inset-0 bg-transparent group-hover:bg-[#D6B16B]/[0.012] transition-colors duration-500 z-10 pointer-events-none" />
                        
                        {/* Fake Browser Headers bar */}
                        <div className="flex items-center justify-between px-3.5 py-2 border-b border-neutral-900 bg-neutral-950 relative z-20">
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
                          </div>
                          <span className="text-[7.5px] text-neutral-500 font-mono tracking-wider max-w-[150px] truncate">{project.liveUrl}</span>
                          <Cpu size={9} className="text-neutral-600" />
                        </div>

                        {/* Graphics Render with scale transition */}
                        <div className="w-full h-full scale-[0.98] origin-top transition-transform duration-700 group-hover:scale-100" id={`p-card-canvas-${project.id}`}>
                          {renderMockupScreen(project.imageSvgType)}
                        </div>

                        {/* Floating Success metrics tag */}
                        <div className="absolute bottom-3 right-3 z-20 px-2 py-0.5 rounded bg-neutral-950/95 border border-neutral-900 text-[8.5px] font-mono shadow-md flex items-center gap-1.5">
                          <span className="font-bold text-[#D6B16B]">{project.metric}</span>
                          <span className="text-neutral-555 text-[8px]">{project.metricLabel}</span>
                        </div>
                      </div>

                      {/* Bottom Block Details Column */}
                      <div className="p-5 flex-grow flex flex-col justify-between" id={`p-card-info-${project.id}`}>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between gap-2" id={`p-card-meta-row-${project.id}`}>
                            <span className="text-[9.5px] font-mono text-[#D6B16B] uppercase tracking-widest font-black">
                              {project.category}
                            </span>
                            <span className={`text-[8px] font-mono px-2 py-0.5 rounded border uppercase text-neutral-500 ${
                              darkMode ? 'border-neutral-900 bg-neutral-900/30' : 'border-neutral-200 bg-neutral-50'
                            }`} id={`p-card-ref-${project.id}`}>
                              REF_{project.id.toUpperCase()}
                            </span>
                          </div>

                          <h3 className={`font-sans text-base font-black tracking-tight leading-snug uppercase ${
                            darkMode ? 'text-[#F7F8FA]' : 'text-[#111827]'
                          }`} id={`p-card-title-${project.id}`}>
                            {project.title}
                          </h3>

                          <p className="text-[11.5px] text-neutral-400 leading-snug font-sans min-h-[50px] line-clamp-3" id={`p-card-desc-${project.id}`}>
                            {project.shortDesc}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 pt-1" id={`p-card-tags-${project.id}`}>
                            {project.tags.slice(0, 3).map((tag) => (
                              <span 
                                key={tag} 
                                className={`font-mono text-[8px] uppercase px-1.5 py-0.5 rounded ${
                                  darkMode 
                                    ? 'bg-neutral-900 text-neutral-400 border border-neutral-900/60 font-bold' 
                                    : 'bg-neutral-100 text-neutral-600'
                                }`}
                                id={`p-card-tag-${project.id}-${tag.replace(/\s+/g, '-')}`}
                              >
                                {tag}
                              </span>
                            ))}
                            {project.tags.length > 3 && (
                              <span className="font-mono text-[8px] text-neutral-500 uppercase px-1 py-0.5 font-bold" id={`p-card-tag-more-${project.id}`}>
                                +{project.tags.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Action buttons strip */}
                        <div className="mt-5 pt-4 border-t border-neutral-900/10 dark:border-neutral-900/60 flex flex-col gap-2" id={`p-card-actions-${project.id}`}>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl text-[10px] font-bold uppercase tracking-wider text-neutral-950 bg-[#D6B16B] hover:bg-[#ebd5ad] hover:shadow-[0_0_15px_rgba(214,177,107,0.15)] transition-all cursor-pointer"
                            id={`p-card-cta-${project.id}`}
                          >
                            <span>Launch Live Experience</span>
                            <ArrowUpRight size={12} />
                          </a>

                          <button
                            onClick={() => onOpenInquiry?.('web-dev')}
                            className="w-full py-2.5 rounded-xl font-mono text-[9px] uppercase tracking-wider border border-neutral-900 hover:border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white"
                            id={`p-card-inquire-${project.id}`}
                          >
                            Request Copy Blueprint Schema
                          </button>
                        </div>
                      </div>

                      {/* Story details drawer overlay onClick card trigger */}
                      <div 
                        className="absolute inset-x-0 top-0 h-[210px] cursor-pointer z-30"
                        onClick={() => setSelectedProject(project)}
                        title="Click to read full project storytelling"
                        id={`p-card-trigger-overlay-${project.id}`}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* Pagination / Load More */}
              {filteredProjects.length > visibleCount && (
                <div className="mt-12 text-center" id="portfolio-load-more-container">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 6)}
                    className="px-6 py-3.5 rounded-xl border border-neutral-950 hover:border-[#D6B16B] bg-neutral-900/60 hover:bg-[#D6B16B]/5 text-neutral-300 hover:text-[#D6B16B] font-mono text-xs uppercase tracking-wider transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
                    id="portfolio-load-more-btn"
                  >
                    Load More Blueprints
                  </button>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Interactive Storyteller Details Drawer modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
              id="portfolio-details-modal"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full max-w-2xl rounded-2xl border shadow-2xl p-6 md:p-8 relative ${
                  darkMode ? 'bg-[#0B1016] border-[rgba(255,255,255,0.08)] text-[#F7F8FA]' : 'bg-white border-[rgba(0,0,0,0.06)] text-neutral-900'
                }`}
                id="portfolio-story-panel"
              >
                {/* Close Button tag */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-xs font-mono text-neutral-500 hover:text-[#D6B16B] p-1 uppercase font-bold"
                  id="portfolio-story-close-btn"
                >
                  ✕ Close
                </button>

                {/* Categories and Metrics */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-widest font-bold">
                    {selectedProject.category}
                  </span>
                  <span className="text-neutral-550 font-mono text-xs">•</span>
                  <span className="text-[9px] font-mono bg-[#D6B16B]/15 text-[#D6B16B] px-2.5 py-1 rounded-full font-bold">
                    {selectedProject.metric} {selectedProject.metricLabel}
                  </span>
                </div>

                {/* Project Title */}
                <h2 className="font-sans text-2xl md:text-3.5xl font-black tracking-tight leading-tight uppercase mb-4" id="story-title">
                  {selectedProject.title}
                </h2>

                {/* High Fidelity Technical Specs */}
                <div className={`p-4 rounded-xl border mb-6 text-xs font-sans ${
                  darkMode ? 'bg-neutral-955 border-[#D6B16B]/15' : 'bg-neutral-50 border-[rgba(0,0,0,0.06)] font-sans'
                }`} id="story-specs">
                  <span className="font-semibold block mb-2 text-[#D6B16B] uppercase font-mono tracking-widest text-[9.5px]">Technical Implementation &amp; Storytelling</span>
                  <p className="text-neutral-400 leading-relaxed text-[11.5px]">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block font-bold">Blueprint Specs &amp; Tech Stack</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className={`font-mono text-[9px] uppercase px-3 py-1 rounded-full border ${
                          darkMode ? 'bg-neutral-900/40 border-neutral-900 text-neutral-300 font-bold' : 'bg-neutral-100 border-neutral-200 text-neutral-700'
                        }`}
                        id={`story-tech-tag-${tag.replace(/\s+/g, '-')}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons CTA */}
                <div className="mt-8 pt-6 border-t border-neutral-900/10 dark:border-neutral-900/60 flex flex-wrap gap-4 items-center justify-between" id="story-actions">
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenInquiry?.('web-dev');
                    }}
                    className="flex items-center gap-2 py-3 px-6 rounded-xl font-sans text-xs font-black uppercase tracking-widest transition-all cursor-pointer bg-[#D6B16B] text-neutral-950 hover:bg-[#ebd5ad]"
                    id="story-inquiry-cta"
                  >
                    <span>Inquire Asset Blueprint</span>
                    <ArrowUpRight size={12} />
                  </button>

                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-mono text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 transition-colors ${
                      darkMode ? 'text-neutral-400 hover:text-[#D6B16B]' : 'text-neutral-600 hover:text-[#D6B16B]'
                    }`}
                    id="story-live-nav"
                  >
                    <span>Explore Live Site</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Luxury Banner Footer Call To Action specifically for high-intent visitors and conversion */}
        <div className={`mt-24 p-8 sm:p-12 rounded-3xl border text-center space-y-5 relative overflow-hidden ${
          darkMode ? 'bg-neutral-950 border-neutral-900' : 'bg-neutral-50 border-neutral-200 shadow-sm'
        }`} id="portfolio-promotional-banner">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D6B16B]/5 blur-xl rounded-full" />
          <span className="text-[9px] font-mono text-[#D6B16B] uppercase tracking-[0.3em] block font-bold">Exclusive Tech Architecture</span>
          <h2 className={`font-sans text-2xl sm:text-3.5xl font-extrabold tracking-tight leading-tight uppercase ${
            darkMode ? 'text-[#F7F8FA]' : 'text-[#111827]'
          }`} id="promo-headline">
            Ready to secure your custom sitora blueprint?
          </h2>
          <p className="text-xs text-neutral-450 max-w-lg mx-auto leading-relaxed">
            Get absolute visual premium superiority, extreme load rates, and tailored conversion tracking tools natively connected. Schedule a private consultation setup.
          </p>
          <div className="pt-2" id="promo-cta-box">
            <button
              onClick={() => onOpenInquiry?.('web-dev')}
              className="group inline-flex items-center gap-2 py-3.5 px-7 rounded-xl font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer bg-[#D6B16B] text-neutral-950 hover:bg-[#ebd5ad] hover:scale-105 shadow-[0_0_40px_rgba(214,177,107,0.22)]"
              id="promo-cta-button"
            >
              <span>Build A Masterpiece Website</span>
              <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-neutral-950" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
