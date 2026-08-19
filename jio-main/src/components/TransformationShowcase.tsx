import React, { useState, useRef, useEffect, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent, KeyboardEvent as ReactKeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  ArrowUpRight, 
  ArrowRight,
  Sparkles, 
  Smartphone,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  UserCheck,
  ShieldCheck,
  Eye,
  Instagram,
  Utensils,
  BookOpen,
  Building2,
  Calendar,
  MapPin,
  Clock,
  Layers,
  ArrowLeftRight
} from 'lucide-react';

interface TransformationShowcaseProps {
  darkMode: boolean;
  onOpenInquiry: (type: string) => void;
  onExplorePortfolio: () => void;
}

type ScenarioType = 'fashion' | 'restaurant' | 'education' | 'corporate';

interface Scenario {
  id: ScenarioType;
  name: string;
  beforeTitle: string;
  beforeSub: string;
  afterTitle: string;
  afterSub: string;
  whyText: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: 'fashion',
    name: 'Fashion Retail',
    beforeTitle: 'Insta-Only Sophie Store',
    beforeSub: 'A scattered social page relying entirely on manual direct-message order logging.',
    afterTitle: 'SOPHIE Web Storefront',
    afterSub: 'A beautiful shopping platform driven by customer-directed sales & Meta Capi tracking.',
    whyText: 'Moving from raw social streams into a structured direct WhatsApp conversion channel builds immediate authority and accelerates order velocities.'
  },
  {
    id: 'restaurant',
    name: 'Fine Restaurant',
    beforeTitle: 'Bella Vista Static PDF',
    beforeSub: 'Static restaurant listings with buried menus and a phone-only booking reservation system.',
    afterTitle: 'Bella Vista Digital Menu',
    afterSub: 'Real-time order menus, digital booking dashboards, and Google Maps localized reach.',
    whyText: 'Frictionless booking flows and WhatsApp ordering routes empower patrons to order directly, bypassing aggressive third-party commission models.'
  },
  {
    id: 'education',
    name: 'Education Hub',
    beforeTitle: 'Academy Crowded Lists',
    beforeSub: 'Outdated directories with cluttered files, physical notices, and manual application charts.',
    afterTitle: 'Academy Unified Portal',
    afterSub: 'Clear responsive student registries, admission funnels, and real-time live notice boards.',
    whyText: 'Consolidating institutional knowledge builds secure digital trust with prospective students and streamlines the registrations pipeline.'
  },
  {
    id: 'corporate',
    name: 'B2B Corporate',
    beforeTitle: 'Global Industries Legacy',
    beforeSub: 'Pre-baked generic stock template designs with zero storytelling and poor mobile experience.',
    afterTitle: 'Global Brand Architecture',
    afterSub: 'High-authority positioning systems with visual case study grids and secure leads logs.',
    whyText: 'Polished minimal corporate showcases elevate market credibility, explaining specialized capabilities to secure premium enterprise contracts.'
  }
];

export const TransformationShowcase: React.FC<TransformationShowcaseProps> = ({ 
  darkMode, 
  onOpenInquiry,
  onExplorePortfolio
}) => {
  const [activeScenarioId, setActiveScenarioId] = useState<ScenarioType>('fashion');
  const [splitPercent, setSplitPercent] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeScenario = SCENARIOS.find(s => s.id === activeScenarioId) || SCENARIOS[0];

  // Drag interaction handler
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSplitPercent(percentage);
  };

  const handleMouseDown = (e: ReactMouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleTouchStart = (e: ReactTouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      if (e.touches[0]) {
        handleMove(e.touches[0].clientX);
      }
    };

    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleGlobalMouseMove);
      window.addEventListener('mouseup', handleGlobalMouseUp);
      window.addEventListener('touchmove', handleGlobalTouchMove, { passive: true });
      window.addEventListener('touchend', handleGlobalMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchmove', handleGlobalTouchMove);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, [isDragging]);

  // Keyboard accessibility
  const handleKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSplitPercent(prev => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSplitPercent(prev => Math.min(100, prev + 5));
    }
  };

  return (
    <section 
      className="py-24 sm:py-32 relative overflow-hidden border-t border-neutral-900/10 dark:border-neutral-900/50"
      id="transformation-showcase"
    >
      {/* Background visual graphics */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#D6B16B]/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-[#7ED4FF]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="showcase-container">
        
        {/* Title area */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="showcase-header">
          <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-[0.25em] block mb-3 font-semibold">
            Transformation Showcase
          </span>
          <h2 className={`font-sans text-2xl sm:text-4.5xl font-black tracking-tight leading-[1.1] uppercase ${
            darkMode ? 'text-white' : 'text-[#111827]'
          }`}>
            See the Difference Great Experiences Make
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-450 font-sans leading-relaxed max-w-2xl mx-auto">
            Explore how thoughtful design, conversion-focused systems, and strategic execution can transform ordinary digital experiences into powerful business assets.
          </p>
        </div>

        {/* Dynamic Scenario Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2.5 mb-11" id="scenario-selector-tabs">
          {SCENARIOS.map((sc) => {
            const isActive = sc.id === activeScenarioId;
            return (
              <button
                key={sc.id}
                onClick={() => setActiveScenarioId(sc.id)}
                className={`relative py-2 px-5 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer outline-none ${
                  !isActive && (darkMode 
                    ? 'border border-neutral-900 bg-neutral-950/20 text-neutral-400 hover:border-neutral-800 hover:text-white' 
                    : 'border border-neutral-100 bg-[#FAFBFC]/60 text-neutral-600 hover:border-neutral-250 hover:text-neutral-900')
                }`}
                aria-pressed={isActive}
                id={`scenario-tab-${sc.id}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-scenario-bg"
                    className="absolute inset-x-0 inset-y-0 bg-[#D6B16B] rounded-full z-0 shadow-[0_3px_10px_rgba(214,177,107,0.15)]"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
                <span className={`relative z-10 transition-colors duration-250 ${
                  isActive 
                    ? 'text-neutral-950 font-black' 
                    : 'text-inherit'
                }`}>
                  {sc.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Comparison Core Canvas Area */}
        <div className="max-w-5.5xl mx-auto" id="showcase-slider-wrapper">
          
          <div 
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            className={`relative h-[340px] sm:h-[480px] w-full rounded-2xl overflow-hidden cursor-ew-resize select-none border shadow-2xl focus:ring-2 focus:ring-[#D6B16B] focus:outline-none ${
              darkMode ? 'border-neutral-900 bg-neutral-950' : 'border-neutral-200 bg-neutral-100'
            }`}
            id="showcase-slider-container"
            aria-label={`${activeScenario.name} Before and After slider comparison`}
          >
            
            {/* Split Panel 1: AFTER (Renders on Right panel, uncovered from right side) */}
            <div className="absolute inset-0 w-full h-full" id="showcase-after-panel">
              <div className="absolute inset-0 bg-neutral-950 p-4 sm:p-8 flex flex-col justify-between h-full w-full">
                {/* Simulated Premium Browser Chrome */}
                <div className="flex items-center justify-between border-b border-neutral-900 pb-3" id="after-safari-chrome">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="h-2 w-2 rounded-full bg-red-500/80" />
                    <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
                    <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="bg-neutral-900 px-6 py-1.5 rounded-md text-[9px] font-mono text-neutral-450 uppercase tracking-widest truncate w-40 sm:w-64 text-center">
                    sitora.org/aura-store
                  </div>
                  <div className="text-[#D6B16B]" id="after-chrome-indicator">
                    <Sparkles size={13} />
                  </div>
                </div>

                {/* Simulated High-Fidelity Website mockup (AFTER state) */}
                <div className="flex-1 py-4 sm:py-8 flex flex-col justify-center max-w-xl mx-auto w-full" id="after-mockup-content">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeScenarioId}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4 sm:space-y-6 text-left"
                    >
                      {activeScenarioId === 'fashion' && (
                        <>
                          <div className="space-y-1">
                            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#D6B16B] block">
                              Summer Aura Edition
                            </span>
                            <h3 className="font-sans text-2xl sm:text-3.5xl font-black text-white leading-none uppercase tracking-tight">
                              S O P H I E
                            </h3>
                          </div>
                          <p className="text-[11px] sm:text-xs text-neutral-400 font-sans leading-relaxed max-w-sm">
                            Showcasing luxury artisanal linen collections, integrated dynamic WhatsApp client profiles, and offline event registers.
                          </p>
                          <div className="flex flex-wrap gap-2 pt-1">
                            <span className="font-mono text-[8px] uppercase tracking-wider bg-[#D6B16B]/10 text-[#D6B16B] border border-[#D6B16B]/20 py-1 px-2.5 rounded">
                              ✓ 0.8s Total Loading Speed
                            </span>
                            <span className="font-mono text-[8px] uppercase tracking-wider bg-neutral-900 border border-neutral-800 text-neutral-300 py-1 px-2.5 rounded">
                              ✓ Instagram Feed Sync
                            </span>
                          </div>
                          <div className="h-10 w-fit px-4 rounded-lg bg-[#D6B16B] text-neutral-950 font-sans text-[10px] font-bold uppercase tracking-wider flex items-center gap-2">
                            <span>Explore Collection</span>
                            <ArrowRight size={11} strokeWidth={3} />
                          </div>
                        </>
                      )}

                      {activeScenarioId === 'restaurant' && (
                        <>
                          <div className="space-y-1">
                            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#D6B16B] block">
                              AUTHENTIC ITALIAN COUTURE
                            </span>
                            <h3 className="font-sans text-2xl sm:text-3.5xl font-black text-white leading-none uppercase tracking-tight">
                              BELLA VISTA
                            </h3>
                          </div>
                          <p className="text-[11px] sm:text-xs text-neutral-400 font-sans leading-relaxed max-w-sm">
                            Browse freshly prepared hand-tossed artisan delicacies with direct table booking alerts and mapped pickup limits.
                          </p>
                          <div className="flex flex-wrap gap-2 pt-1">
                            <span className="font-mono text-[8px] uppercase tracking-wider bg-[#D6B16B]/10 text-[#D6B16B] border border-[#D6B16B]/20 py-1 px-2.5 rounded">
                              ✓ Real-Time WhatsApp Booking
                            </span>
                            <span className="font-mono text-[8px] uppercase tracking-wider bg-neutral-900 border border-neutral-800 text-neutral-300 py-1 px-2.5 rounded">
                              ✓ Mapped Delivery Tariff
                            </span>
                          </div>
                          <div className="h-10 w-fit px-4 rounded-lg bg-[#D6B16B] text-neutral-950 font-sans text-[10px] font-bold uppercase tracking-wider flex items-center gap-2">
                            <span>Secure Table Reservation</span>
                            <Calendar size={11} />
                          </div>
                        </>
                      )}

                      {activeScenarioId === 'education' && (
                        <>
                          <div className="space-y-1">
                            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#D6B16B] block">
                              KNOWLEDGE RE-ENGINES
                            </span>
                            <h3 className="font-sans text-2xl sm:text-3.5xl font-black text-white leading-none uppercase tracking-tight">
                              ST. JOSEPH PORTAL
                            </h3>
                          </div>
                          <p className="text-[11px] sm:text-xs text-neutral-400 font-sans leading-relaxed max-w-sm">
                            Providing structured pathways for academic registers, admissions forms intakes, and real-time community boards.
                          </p>
                          <div className="flex flex-wrap gap-2 pt-1">
                            <span className="font-mono text-[8px] uppercase tracking-wider bg-[#D6B16B]/10 text-[#D6B16B] border border-[#D6B16B]/20 py-1 px-2.5 rounded">
                              ✓ Dynamic Admission Pipeline
                            </span>
                            <span className="font-mono text-[8px] uppercase tracking-wider bg-neutral-900 border border-neutral-800 text-neutral-300 py-1 px-2.5 rounded">
                              ✓ Notice Announcements Sync
                            </span>
                          </div>
                          <div className="h-10 w-fit px-4 rounded-lg bg-[#D6B16B] text-neutral-950 font-sans text-[10px] font-bold uppercase tracking-wider flex items-center gap-2">
                            <span>Online Enrollment Desk</span>
                            <BookOpen size={11} />
                          </div>
                        </>
                      )}

                      {activeScenarioId === 'corporate' && (
                        <>
                          <div className="space-y-1">
                            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#D6B16B] block">
                              SECURE B2B SOLUTIONS
                            </span>
                            <h3 className="font-sans text-2xl sm:text-3.5xl font-black text-white leading-none uppercase tracking-tight">
                              GLOBAL CAPABILITIES
                            </h3>
                          </div>
                          <p className="text-[11px] sm:text-xs text-neutral-400 font-sans leading-relaxed max-w-sm">
                            Command authority across regional pipelines with industrial proof charts and responsive layout quality assurance.
                          </p>
                          <div className="flex flex-wrap gap-2 pt-1">
                            <span className="font-mono text-[8px] uppercase tracking-wider bg-[#D6B16B]/10 text-[#D6B16B] border border-[#D6B16B]/20 py-1 px-2.5 rounded">
                              ✓ Industrial Credibility Engine
                            </span>
                            <span className="font-mono text-[8px] uppercase tracking-wider bg-neutral-900 border border-neutral-800 text-neutral-300 py-1 px-2.5 rounded">
                              ✓ Clean Minimal Spacing
                            </span>
                          </div>
                          <div className="h-10 w-fit px-4 rounded-lg bg-[#D6B16B] text-neutral-950 font-sans text-[10px] font-bold uppercase tracking-wider flex items-center gap-2">
                            <span>Request Enterprise Briefing</span>
                            <Building2 size={11} />
                          </div>
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* After Visual Label Footer */}
                <div className="flex items-center justify-between border-t border-neutral-900 pt-3" id="after-panel-footer">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span className="font-mono text-[8px] text-neutral-450 uppercase tracking-widest hidden sm:inline">
                      99% Page Speed Matrix
                    </span>
                  </div>
                  <span className="font-mono text-[10px] font-black text-[#D6B16B] uppercase tracking-widest">
                    SITORA AFTER
                  </span>
                </div>
              </div>
            </div>

            {/* Split Panel 2: BEFORE (Renders on Left panel, clipped dynamically based on percent) */}
            <div 
              className="absolute inset-top inset-left bottom-0 left-0 h-full overflow-hidden z-20" 
              style={{ width: `${splitPercent}%` }}
              id="showcase-before-panel"
            >
              <div 
                className="absolute inset-0 bg-[#e5e7eb] dark:bg-[#1a1f26] p-4 sm:p-8 flex flex-col justify-between h-full grayscale select-none"
                style={{ width: containerRef.current?.getBoundingClientRect().width || '100%' }}
              >
                {/* Simulated Ordinary Legacy Browser Chrome */}
                <div className="flex items-center justify-between border-b border-neutral-300 dark:border-neutral-800 pb-3" id="before-legacy-chrome">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="h-2 w-2 rounded-full bg-neutral-400" />
                    <span className="h-2 w-2 rounded-full bg-neutral-400" />
                    <span className="h-2 w-2 rounded-full bg-neutral-400" />
                  </div>
                  <div className="bg-neutral-200 dark:bg-neutral-900 px-6 py-1.5 rounded-md text-[9px] font-mono text-neutral-400 truncate w-40 sm:w-64 text-center">
                    unsecured-site-redirect.info
                  </div>
                  <div className="text-neutral-400" id="before-chrome-indicator">
                    <Clock size={13} />
                  </div>
                </div>

                {/* Simulated Legacy Website mockup (BEFORE state) */}
                <div className="flex-1 py-4 sm:py-8 flex flex-col justify-center max-w-xl mx-auto w-full text-neutral-500" id="before-mockup-content">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeScenarioId}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4 sm:space-y-5 text-left opacity-60"
                    >
                      {activeScenarioId === 'fashion' && (
                        <>
                          <div className="space-y-1">
                            <span className="text-[10px] uppercase font-serif tracking-tight text-neutral-400 block">
                              My Sophie Store Blog
                            </span>
                            <h3 className="font-sans text-xl sm:text-2.5xl font-bold leading-none text-neutral-700 dark:text-neutral-200">
                              Sophie-Store18
                            </h3>
                          </div>
                          <p className="text-[11px] sm:text-xs text-neutral-400 leading-normal max-w-sm">
                            DM us catalog photo on Instagram to order. Manual response might take 2-3 hours. Delivery via third party post context.
                          </p>
                          <div className="space-y-1">
                            <div className="h-1.5 w-32 bg-neutral-300 dark:bg-neutral-700 rounded" />
                            <div className="h-1.5 w-48 bg-neutral-300 dark:bg-neutral-700 rounded" />
                          </div>
                          <div className="font-mono text-[9px] border border-dashed border-neutral-400 dark:border-neutral-700 p-2 text-center rounded">
                            ⚠️ Insecure Checkout Process
                          </div>
                        </>
                      )}

                      {activeScenarioId === 'restaurant' && (
                        <>
                          <div className="space-y-1">
                            <span className="text-[10px] uppercase tracking-tight text-neutral-400 block">
                              Bella Vista Italian PDF
                            </span>
                            <h3 className="font-sans text-xl sm:text-2.5xl font-bold leading-none text-neutral-700 dark:text-neutral-200">
                              BELLA VISTA CO.*
                            </h3>
                          </div>
                          <p className="text-[11px] sm:text-xs text-neutral-400 leading-normal max-w-sm">
                            Telephone orders only during standard opening hours. Standard USD charges apply. PDF menu download link is listed below.
                          </p>
                          <div className="space-y-1">
                            <div className="h-1.5 w-40 bg-neutral-300 dark:bg-neutral-700 rounded" />
                            <div className="h-1.5 w-24 bg-neutral-300 dark:bg-neutral-700 rounded" />
                          </div>
                          <div className="font-mono text-[9px] border border-dashed border-neutral-400 dark:border-neutral-700 p-2 text-center rounded">
                            ⚠️ Manual Phone Registry Limits
                          </div>
                        </>
                      )}

                      {activeScenarioId === 'education' && (
                        <>
                          <div className="space-y-1">
                            <span className="text-[10px] uppercase tracking-tight text-neutral-400 block">
                              Academy Notice Board Lists
                            </span>
                            <h3 className="font-sans text-xl sm:text-2.5xl font-bold leading-none text-neutral-700 dark:text-neutral-200">
                              ST JOSEPHS INDEX
                            </h3>
                          </div>
                          <p className="text-[11px] sm:text-xs text-neutral-400 leading-normal max-w-sm">
                            Download Prospectus 2021.pdf (Notice 134). Dynamic application form available physically at central administration registers.
                          </p>
                          <div className="space-y-1">
                            <div className="h-1.5 w-32 bg-neutral-300 dark:bg-neutral-700 rounded" />
                            <div className="h-1.5 w-40 bg-neutral-300 dark:bg-neutral-700 rounded" />
                          </div>
                          <div className="font-mono text-[9px] border border-dashed border-neutral-400 dark:border-neutral-700 p-2 text-center rounded">
                            ⚠️ Cluttered PDF Links Clutter
                          </div>
                        </>
                      )}

                      {activeScenarioId === 'corporate' && (
                        <>
                          <div className="space-y-1">
                            <span className="text-[10px] uppercase tracking-tight text-neutral-400 block">
                              Generic Business Template
                            </span>
                            <h3 className="font-sans text-xl sm:text-2.5xl font-bold leading-none text-neutral-700 dark:text-neutral-200">
                              GLOBAL CONSULTING
                            </h3>
                          </div>
                          <p className="text-[11px] sm:text-xs text-neutral-400 leading-normal max-w-sm">
                            We provide corporate solutions to streamline synergy outcomes. Fill the 12-field blank form below to request a physical briefing brochure.
                          </p>
                          <div className="space-y-1">
                            <div className="h-1.5 w-24 bg-neutral-300 dark:bg-neutral-700 rounded" />
                            <div className="h-1.5 w-32 bg-neutral-300 dark:bg-neutral-700 rounded" />
                          </div>
                          <div className="font-mono text-[9px] border border-dashed border-neutral-400 dark:border-neutral-700 p-2 text-center rounded">
                            ⚠️ Low Engagement Form Core
                          </div>
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Before Visual Label Footer */}
                <div className="flex items-center justify-between border-t border-neutral-300 dark:border-neutral-800 pt-3" id="before-panel-footer">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[8px] text-neutral-450 uppercase tracking-widest hidden sm:inline">
                      Loaded in 5.4 seconds
                    </span>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                    ORDINARY BEFORE
                  </span>
                </div>
              </div>
            </div>

            {/* Floating satisfiying drag Handle divider line */}
            <div 
              className="absolute top-0 bottom-0 w-0.5 bg-[#D6B16B] z-30 pointer-events-none"
              style={{ left: `${splitPercent}%` }}
              id="slider-divider-line"
            >
              {/* Central glowing grab handle button */}
              <div 
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-neutral-950 border-2 border-[#D6B16B] shadow-[0_0_15px_rgba(214,177,107,0.3)] flex items-center justify-center cursor-ew-resize transition-transform duration-250 active:scale-110 active:shadow-[0_0_20px_rgba(214,177,107,0.5)]"
                id="slider-grab-handle"
              >
                <ArrowLeftRight size={14} className="text-[#D6B16B]" />
              </div>
            </div>

          </div>

          {/* Quick Scenario Metadata helper */}
          <div className="mt-4 flex items-center justify-between gap-4 px-1" id="slider-split-helpers">
            <span className="font-mono text-[9px] text-neutral-450 uppercase tracking-wider">
              ← Drag left to review the conversion architecture
            </span>
            <span className="font-mono text-[9px] text-[#D6B16B] uppercase tracking-wider text-right">
              Drag right to see legacy contrast →
            </span>
          </div>

        </div>

        {/* Structured Impact Outcome Highlight Cards block */}
        <div className="mt-20 space-y-4" id="showcase-impact-section">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[9px] font-mono text-[#D6B16B] uppercase tracking-[0.2em] block font-semibold">
              Strategic Value Alignment
            </span>
            <h3 className={`font-sans text-sm sm:text-base font-bold uppercase tracking-tight ${
              darkMode ? 'text-white' : 'text-neutral-900'
            }`}>
              Engineered Digital Transformation Outcomes
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5" id="transformation-outcome-cards">
            {[
              {
                title: 'Stronger Brand Perception',
                desc: 'Command industrial authority immediately with elegant typography pairing and premium visual layouts.',
                id: 'impact-brand'
              },
              {
                title: 'Improved Customer Experience',
                desc: 'Provide seamless, lightning-fast digital pipelines that keep prospective clients satisfied and engaged.',
                id: 'impact-experience'
              },
              {
                title: 'Better Lead Capture',
                desc: 'Capture high-value conversions with tailored secure checkout forms and targeted WhatsApp integration.',
                id: 'impact-leads'
              }
            ].map((card) => (
              <div 
                key={card.id}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:translate-y-[-2px] ${
                  darkMode 
                    ? 'bg-[#0B1016]/60 border-neutral-900/60 hover:border-neutral-800' 
                    : 'bg-white border-neutral-150 shadow-sm hover:border-neutral-250'
                }`}
                id={card.id}
              >
                <div className="h-8 w-8 rounded-lg bg-[#D6B16B]/10 border border-[#D6B16B]/20 flex items-center justify-center mb-4 shrink-0">
                  <Check className="text-[#D6B16B]" size={14} strokeWidth={2.5} />
                </div>
                <h4 className={`font-sans text-[13px] font-bold uppercase tracking-tight ${
                  darkMode ? 'text-[#F7F8FA]' : 'text-neutral-800'
                }`}>
                  {card.title}
                </h4>
                <p className="text-[11px] sm:text-[12px] text-neutral-450 leading-relaxed mt-2 font-sans">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Under outcomes visual luxury caption */}
          <p className="text-center text-[11px] text-neutral-450 leading-relaxed max-w-xl mx-auto pt-8">
            Transformation isn't just about appearance. It's about creating digital experiences that build trust, simplify decisions, and support long-term growth.
          </p>
        </div>

        {/* Home page call actions row */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-3" id="transformation-showcase-actions">
          <button
            onClick={() => onOpenInquiry('custom')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-sans text-xs font-bold uppercase tracking-wider text-neutral-950 bg-[#D6B16B] hover:bg-[#ebd5ad] shadow-lg hover:shadow-[#D6B16B]/10 active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            <span>Get a Free Consultation</span>
            <ArrowUpRight size={13} />
          </button>
          
          <button
            onClick={onExplorePortfolio}
            className={`w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-sans text-xs font-bold uppercase tracking-wider border transition-all duration-300 cursor-pointer hover:bg-neutral-900/5 dark:hover:bg-neutral-950/40 active:scale-[0.98] ${
              darkMode 
              ? 'border-neutral-800 text-neutral-200 hover:border-neutral-750 hover:text-white' 
              : 'border-neutral-200 text-neutral-700 hover:border-neutral-300 hover:text-neutral-900'
            }`}
          >
            <span>Explore Our Projects</span>
            <ArrowRight size={13} />
          </button>
        </div>

      </div>
    </section>
  );
};
