import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Search, 
  Layers, 
  Filter, 
  Cpu, 
  ShoppingCart, 
  Award, 
  BarChart2, 
  Laptop, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { CRAFTED_EXPERIENCES } from '../data';
import { CraftedExperience } from '../types';

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

  // Modern categories listing
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

  // Filtering + Searching logic
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

  // Render high-fidelity client-side browser/bento previews
  const renderMockupScreen = (type: 'saas' | 'ecommerce' | 'corporate' | 'creative' | 'analytics') => {
    switch (type) {
      case 'ecommerce':
        return (
          <div className="relative w-full h-full bg-[#080808] flex flex-col justify-between p-5 overflow-hidden text-left" id="p-mock-screen-ecommerce">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(214,177,107,0.12)_0%,rgba(0,0,0,0)_60%)]" />
            
            <div className="flex items-center justify-between border-b border-neutral-900 pb-2.5 z-10">
              <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-widest">SITORA LUXURY DISCOVERY</span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[7px] font-mono text-neutral-400">TRANSACTION SECURE</span>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-3 my-auto z-10">
              <div className="col-span-8 space-y-1.5">
                <span className="text-[7px] font-mono text-[#D6B16B] tracking-widest uppercase font-semibold">Bespoke Curation</span>
                <h4 className="font-sans text-sm font-bold text-white leading-none uppercase tracking-tight">
                  High-End Inventory
                </h4>
                <p className="text-[8px] text-neutral-400 leading-tight">
                  Bespoke e-commerce engines designed for fluid checkouts.
                </p>
                <div className="flex gap-1.5 pt-0.5">
                  <span className="px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[6.5px] text-neutral-300 font-mono">Premium Hub</span>
                  <span className="px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[6.5px] text-neutral-300 font-mono">BDT Optimized</span>
                </div>
              </div>
              <div className="col-span-4 relative bg-neutral-950 border border-neutral-900 rounded-lg p-2.5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <ShoppingCart size={10} className="text-[#D6B16B]" />
                  <span className="text-[7.5px] text-emerald-400 font-mono font-bold">+142%</span>
                </div>
                <div className="space-y-0.5 mt-2">
                  <div className="h-0.5 bg-emerald-400/30 rounded-full w-full" />
                  <div className="h-0.5 bg-emerald-500 rounded-full w-4/5" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2.5 border-t border-neutral-900 z-10">
              <span className="text-[7px] font-mono text-neutral-500">CAPI ENGINE ACTIVE</span>
              <span className="px-1.5 py-0.5 text-[7px] rounded bg-[#D6B16B] text-neutral-950 font-bold uppercase tracking-wider">
                Direct Buy →
              </span>
            </div>
          </div>
        );

      case 'corporate':
        return (
          <div className="relative w-full h-full bg-[#0a0a0a] flex flex-col justify-between p-5 overflow-hidden text-left" id="p-mock-screen-corporate">
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-blue-500/5 blur-2xl pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-neutral-900 pb-2.5">
              <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-widest font-semibold">INSTITUTIONAL DIRECTORY</span>
              <span className="text-[7px] font-mono px-1.5 py-0.5 bg-neutral-950 border border-neutral-900 text-neutral-400 rounded-full">EST. 2026</span>
            </div>

            <div className="space-y-2 my-auto">
              <div className="flex items-center gap-1">
                <Award size={9} className="text-[#D6B16B]" />
                <span className="text-[7px] text-[#D6B16B] font-mono tracking-widest uppercase font-bold">Trusted Authority Portfolio</span>
              </div>
              <h4 className="font-sans text-sm font-black text-white tracking-tight leading-none uppercase">
                Enterprise Architectures
              </h4>
              <p className="text-[8.5px] text-neutral-400 leading-snug">
                Engineered lesson registries, high-impact portals, and local search superiority.
              </p>
              
              <div className="grid grid-cols-3 gap-1.5 pt-1">
                <div className="p-1 px-1.5 border border-neutral-900 bg-neutral-950 rounded">
                  <div className="text-[5.5px] text-neutral-500 font-mono">SEO RETENT</div>
                  <div className="text-[8px] font-bold text-emerald-400 font-mono">99%</div>
                </div>
                <div className="p-1 px-1.5 border border-neutral-900 bg-neutral-950 rounded">
                  <div className="text-[5.5px] text-neutral-500 font-mono">FID SECURE</div>
                  <div className="text-[8px] font-bold text-white font-mono">100%</div>
                </div>
                <div className="p-1 px-1.5 border border-neutral-900 bg-neutral-950 rounded">
                  <div className="text-[5.5px] text-neutral-500 font-mono">RESPONSIVE</div>
                  <div className="text-[8px] font-bold text-white font-mono">A+</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2.5 border-t border-neutral-900">
              <span className="text-[7px] font-mono text-neutral-500">OPTIMIZED SCHEMA INTEGRATION</span>
              <span className="text-[7px] font-mono text-neutral-400">GTM LINKED</span>
            </div>
          </div>
        );

      case 'analytics':
      case 'saas':
        return (
          <div className="relative w-full h-full bg-[#060606] flex flex-col justify-between p-5 overflow-hidden text-left" id="p-mock-screen-saas">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-violet-600/5 blur-[50px]" />

            <div className="flex items-center justify-between border-b border-neutral-900 pb-2.5">
              <span className="text-[8px] font-mono text-neutral-500 tracking-widest uppercase">PERFORMANCE INTEGRATOR</span>
              <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[6.5px] font-mono font-bold">CAPI SYNCED</span>
            </div>

            <div className="grid grid-cols-2 gap-3 my-auto relative z-10">
              <div className="space-y-1.5">
                <div className="text-[7px] font-mono text-neutral-500 uppercase tracking-widest">FUNNEL TRACKER</div>
                <div className="font-sans text-lg font-black text-white leading-none">
                  5.2x <span className="text-[9px] font-normal text-emerald-400">BOOST</span>
                </div>
                <div className="h-0.5 bg-neutral-900 rounded-full w-full">
                  <div className="h-full bg-emerald-400 rounded-full w-[90%]" />
                </div>
              </div>

              <div className="p-2 border border-neutral-900 bg-neutral-950 rounded-lg flex flex-col justify-between gap-1">
                <div className="flex items-center justify-between">
                  <BarChart2 size={9} className="text-violet-500" />
                  <span className="text-[5.5px] font-mono text-neutral-500">99.9% DEP</span>
                </div>
                <div className="text-[8px] font-mono font-bold text-white leading-none">
                  +184% PERFORMANCE
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2.5 border-t border-neutral-900">
              <span className="text-[7px] font-mono text-neutral-500">PIXEL & CLOUDFLARE LINKED</span>
              <span className="text-[7px] font-mono text-neutral-500">SECURE SHELL</span>
            </div>
          </div>
        );

      case 'creative':
      default:
        return (
          <div className="relative w-full h-full bg-[#0c0b0a] flex flex-col justify-between p-5 overflow-hidden text-left" id="p-mock-screen-creative">
            <div className="absolute inset-0 bg-[#D6B16B]/[0.015] pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-neutral-900 pb-2.5">
              <span className="text-[8px] font-mono text-[#D6B16B] tracking-widest uppercase">ARTISANAL WEBBING CORP</span>
              <span className="text-[7px] font-sans text-neutral-400">PORTFOLIO EXCELLENCE</span>
            </div>

            <div className="space-y-2 my-auto relative z-10">
              <span className="text-[7px] font-mono text-[#D6B16B] uppercase tracking-[0.25em] block font-semibold">Premium Aesthetics</span>
              <h4 className="font-serif text-base font-normal italic text-white tracking-wide leading-none">
                The Heritage Canvas
              </h4>
              <p className="font-sans text-[8px] text-neutral-400 leading-normal">
                Bespoke layout mapping physical crafts into immersive digital experiences.
              </p>
              
              <div className="flex items-center gap-2 pt-0.5">
                <div className="w-5 h-5 rounded-full border border-[#D6B16B]/30 flex items-center justify-center text-[#D6B16B]">
                  <Laptop size={9} />
                </div>
                <span className="text-[7px] font-mono tracking-widest text-[#D6B16B] uppercase">FLUID LOOM ACTIVE</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2.5 border-t border-neutral-900">
              <span className="text-[7px] font-mono text-neutral-500">SMOOTH MOTION SCROLLING</span>
              <span className="text-[7px] font-mono text-neutral-500">PRECISE PAIRINGS</span>
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
        <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] bg-[#7ED4FF] opacity-[0.03] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Link Row button */}
        <div className="mb-12" id="portfolio-back-row">
          <button
            onClick={onBackToHome}
            className={`group inline-flex items-center gap-2 text-xs font-mono font-medium tracking-wider uppercase transition-colors cursor-pointer py-2 px-4 rounded-full border ${
              darkMode 
                ? 'border-neutral-900 bg-neutral-950 text-neutral-400 hover:text-white hover:border-neutral-800' 
                : 'border-neutral-200 bg-white text-neutral-600 hover:text-black hover:border-neutral-300'
            }`}
            id="portfolio-back-home-btn"
          >
            <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Storytelling Title + Overview */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20" id="portfolio-headline-box">
          <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-[0.3em] block mb-3">
            Digital Architecture Archive
          </span>
          <h1 className={`font-sans text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none uppercase ${
            darkMode ? 'text-[#F7F8FA]' : 'text-[#111827]'
          }`} id="portfolio-main-headline">
            Explore Crafted Experiences
          </h1>
          <p className="mt-5 text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed font-sans">
            Every digital asset we construct is a customized masterpiece. No cookie-cutter templates, no compromised load speeds. Explore the full index of our engineered websites and systems designed to deliver instant institutional trust and maximized conversion metrics.
          </p>
        </div>

        {/* Search & Advanced Filters Panel */}
        <div className={`p-4 rounded-2xl border mb-12 flex flex-col md:flex-row gap-4 items-center justify-between ${
          darkMode ? 'bg-neutral-950/80 border-neutral-900/80' : 'bg-neutral-50 border-neutral-200 shadow-sm'
        }`} id="portfolio-filters-panel">
          {/* Categories Switchers */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto" id="portfolio-filters-tabs">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-sans font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? darkMode
                        ? 'text-[#05070A] bg-[#D6B16B] font-semibold shadow-md border border-[#D6B16B]'
                        : 'text-white bg-neutral-950 font-semibold'
                      : darkMode
                      ? 'text-neutral-400 bg-[#0B1016]/60 border border-[rgba(255,255,255,0.08)] hover:text-white hover:bg-neutral-900/80'
                      : 'text-neutral-600 bg-white border border-neutral-200 hover:text-neutral-950'
                  }`}
                  id={`cat-filter-${cat.value}`}
                >
                  <span className="flex items-center gap-1.5">
                    <span>{cat.label}</span>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
                      isActive 
                        ? darkMode ? 'bg-neutral-950/20 text-[#0e0e0e]' : 'bg-white/20 text-white' 
                        : darkMode ? 'bg-neutral-900 text-neutral-500' : 'bg-neutral-100 text-neutral-500'
                    }`}>
                      {cat.count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search box search field */}
          <div className="relative w-full md:w-[280px]" id="portfolio-search-box">
            <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-neutral-500">
              <Search size={14} />
            </span>
            <input
              type="text"
              placeholder="Search specs, tags, or builds..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-9 pr-4 py-2 text-xs rounded-xl border focus:outline-none focus:ring-1 focus:ring-[#D6B16B] font-sans ${
                darkMode 
                  ? 'bg-neutral-900 border-neutral-800 text-white placeholder-neutral-500' 
                  : 'bg-white border-neutral-250 text-neutral-950 placeholder-neutral-400'
              }`}
              id="portfolio-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-3 flex items-center text-[10px] font-mono text-neutral-500 hover:text-neutral-300"
                id="search-clear-btn"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Complete Results Count Row */}
        <div className="mb-6 flex items-center justify-between font-mono text-[10px] text-neutral-500 uppercase tracking-widest px-1" id="portfolio-results-metric">
          <span>Displaying {filteredProjects.length} of {CRAFTED_EXPERIENCES.length} engineered blueprints</span>
          {selectedCategory !== 'all' && (
            <span className="text-[#D6B16B]">Filtered Collection Active</span>
          )}
        </div>

        {/* Grid List matching products */}
        {filteredProjects.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`p-16 text-center rounded-2xl border ${
              darkMode ? 'border-neutral-900 bg-neutral-950/40' : 'border-neutral-200 bg-neutral-50'
            }`}
            id="portfolio-no-results"
          >
            <HelpCircle size={32} className="mx-auto text-neutral-600 mb-4" />
            <span className="block font-sans text-sm text-neutral-400 font-semibold mb-1">No Matching Blueprints Found</span>
            <span className="block text-xs text-neutral-500 font-sans max-w-md mx-auto">Try clearing your filters or refining your search term to view Sitora's core digital designs.</span>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 text-xs font-mono font-bold text-[#D6B16B] underline underline-offset-4 cursor-pointer hover:text-[#bf9b59]"
            >
              Reset Search & Filters
            </button>
          </motion.div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" 
            id="portfolio-cards-grid"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                  className={`group rounded-2xl border relative flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                    darkMode 
                      ? 'bg-neutral-950 border-neutral-900/80 hover:border-neutral-800' 
                      : 'bg-white border-neutral-200 hover:border-neutral-300'
                  }`}
                  id={`p-card-outer-${project.id}`}
                >
                  {/* Top Block: Glass Browser Mockup */}
                  <div className="h-[210px] relative overflow-hidden bg-neutral-950 border-b border-neutral-900/60" id={`p-card-mock-box-${project.id}`}>
                    <div className="absolute inset-0 bg-transparent group-hover:bg-[#D6B16B]/[0.015] transition-colors duration-500 z-10 pointer-events-none" />
                    
                    {/* Fake Browser Headers bar */}
                    <div className="flex items-center justify-between px-3.5 py-2 border-b border-neutral-900 bg-neutral-950 relative z-20">
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
                      </div>
                      <span className="text-[7.5px] text-neutral-500 font-mono tracking-wider max-w-[150px] truncate">{project.liveUrl}</span>
                      <Cpu size={9} className="text-neutral-600" />
                    </div>

                    {/* Graphics Render */}
                    <div className="w-full h-full scale-[0.98] origin-top transition-transform duration-700 group-hover:scale-100" id={`p-card-canvas-${project.id}`}>
                      {renderMockupScreen(project.imageSvgType)}
                    </div>

                    {/* Floating Success metric tag */}
                    <div className="absolute bottom-3 right-3 z-20 px-2 py-1 rounded bg-[#0B1016]/95 border border-[rgba(255,255,255,0.08)] text-[8.5px] font-mono shadow-md flex items-center gap-1.5">
                      <span className="font-bold text-[#D6B16B]">{project.metric}</span>
                      <span className="text-neutral-400 text-[8px]">{project.metricLabel}</span>
                    </div>
                  </div>

                  {/* Bottom Block Details Column */}
                  <div className="p-5 flex-grow flex flex-col justify-between" id={`p-card-info-${project.id}`}>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2" id={`p-card-meta-row-${project.id}`}>
                        <span className="text-[9px] font-mono text-[#D6B16B] uppercase tracking-widest font-bold">
                          {project.category}
                        </span>
                        <span className={`text-[8.5px] font-mono px-2 py-0.5 rounded border uppercase text-neutral-500 ${
                          darkMode ? 'border-neutral-900 bg-neutral-900/30' : 'border-neutral-200 bg-neutral-50'
                        }`}>
                          {project.imageSvgType}
                        </span>
                      </div>

                      <h3 className={`font-sans text-lg font-extrabold tracking-tight leading-snug group-hover:text-[#D6B16B] dark:group-hover:text-[#D6B16B] group-hover:text-[#B88A44] transition-colors ${
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
                                ? 'bg-neutral-900 text-neutral-400 border border-neutral-900/60' 
                                : 'bg-neutral-100 text-neutral-600'
                            }`}
                            id={`p-card-tag-${project.id}-${tag.replace(/\s+/g, '-')}`}
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="font-mono text-[8px] text-neutral-500 uppercase px-1 py-0.5" id={`p-card-tag-more-${project.id}`}>
                            +{project.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions button strip */}
                    <div className="mt-5 pt-4 border-t border-neutral-900/10 dark:border-neutral-900/60 flex items-center justify-between" id={`p-card-actions-${project.id}`}>
                      <button
                        onClick={() => onOpenInquiry('web-dev')}
                        className={`group inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                          darkMode ? 'text-[#F7F8FA] hover:text-[#D6B16B]' : 'text-[#111827] hover:text-[#B88A44]'
                        }`}
                        id={`p-card-inquire-${project.id}`}
                      >
                        <span>Blueprint INQUIRY</span>
                        <ArrowUpRight size={11} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg border border-neutral-900/10 dark:border-[rgba(255,255,255,0.08)] text-neutral-500 hover:text-[#D6B16B] dark:hover:border-[#D6B16B]/30 transition-colors flex items-center justify-center cursor-pointer"
                        title="Explore Live Web Site"
                        id={`p-card-live-btn-${project.id}`}
                      >
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                  {/* Story details drawer overlay onClick card trigger */}
                  <div 
                    className="absolute inset-x-0 top-0 h-[210px] cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                    title="Click to read full project storytelling"
                    id={`p-card-trigger-overlay-${project.id}`}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

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
                  className="absolute top-4 right-4 text-xs font-mono text-neutral-500 hover:text-[#D6B16B] p-1 uppercase"
                  id="portfolio-story-close-btn"
                >
                  ✕ Close
                </button>

                {/* Categories and Metrics */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-widest font-bold">
                    {selectedProject.category}
                  </span>
                  <span className="text-neutral-500 font-mono text-xs">•</span>
                  <span className="text-[9px] font-mono bg-[#D6B16B]/15 text-[#D6B16B] px-2.5 py-0.5 rounded-full font-bold">
                    {selectedProject.metric} {selectedProject.metricLabel}
                  </span>
                </div>

                {/* Project Title */}
                <h2 className="font-sans text-2xl md:text-3.5xl font-black tracking-tight leading-tight uppercase mb-4" id="story-title">
                  {selectedProject.title}
                </h2>

                {/* High Fidelity Technical Specs */}
                <div className={`p-4 rounded-xl border mb-6 text-xs font-sans ${
                  darkMode ? 'bg-[#0B1016]/80 border-[rgba(255,255,255,0.08)] font-sans' : 'bg-[#0B1016]/5 border-[rgba(0,0,0,0.06)] font-sans'
                }`} id="story-specs">
                  <span className="font-semibold block mb-2 text-[#D6B16B] uppercase font-mono tracking-widest text-[9.5px]">Technical Implementation & Storytelling</span>
                  <p className="text-neutral-400 leading-relaxed text-[11.5px]">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block font-bold">Blueprint Specs & Tech Stack</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className={`font-mono text-[9px] uppercase px-3 py-1 rounded-full border ${
                          darkMode ? 'bg-neutral-900/40 border-neutral-900 text-neutral-300' : 'bg-neutral-100 border-neutral-200 text-neutral-700'
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
                      onOpenInquiry('web-dev');
                    }}
                    className={`flex items-center gap-2 py-3 px-6 rounded-xl font-sans text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      darkMode ? 'bg-white text-black hover:bg-neutral-200' : 'bg-neutral-900 text-white hover:bg-neutral-800'
                    }`}
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
                      darkMode ? 'text-neutral-400 hover:text-[#D6B16B]' : 'text-neutral-600 hover:text-[#B88A44]'
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
        <div className={`mt-20 p-8 sm:p-12 rounded-3xl border text-center space-y-5 relative overflow-hidden ${
          darkMode ? 'bg-neutral-950 border-neutral-900' : 'bg-neutral-50 border-neutral-200 shadow-sm'
        }`} id="portfolio-promotional-banner">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D6B16B]/5 blur-xl rounded-full" />
          <span className="text-[9px] font-mono text-[#D6B16B] uppercase tracking-[0.3em] block font-bold">Exclusive Tech Architecture</span>
          <h2 className={`font-sans text-2xl sm:text-3.5xl font-extrabold tracking-tight leading-tight uppercase ${
            darkMode ? 'text-[#F7F8FA]' : 'text-[#111827]'
          }`} id="promo-headline">
            Ready to secure your custom sitora blueprint?
          </h2>
          <p className="text-xs text-neutral-400 max-w-lg mx-auto leading-relaxed">
            Get absolute visual premium superiority, extreme load rates, and tailored conversion tracking tools natively connected. Schedule a private consultation setup.
          </p>
          <div className="pt-2" id="promo-cta-box">
            <button
              onClick={() => onOpenInquiry('web-dev')}
              className={`group inline-flex items-center gap-2 py-3.5 px-7 rounded-xl font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                darkMode ? 'bg-[#D6B16B] text-neutral-950 hover:bg-[#bf9b59]' : 'bg-neutral-950 text-white hover:bg-neutral-900'
              }`}
              id="promo-cta-button"
            >
              <span>Build A Masterpiece Website</span>
              <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
