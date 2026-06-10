import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  ArrowUpRight, 
  MessageSquare, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  Award,
  Compass,
  Zap,
  Target,
  ArrowDown,
  ChevronDown
} from 'lucide-react';

interface GrowthJourneyEngineProps {
  darkMode: boolean;
  onOpenInquiry: (type: string) => void;
}

type StageType = 'starting' | 'growing' | 'established' | 'scaling';

interface StageCard {
  id: StageType;
  title: string;
  subtitle: string;
  emoji: string;
  icon: any;
}

interface TimelineMilestone {
  title: string;
  description: string;
  timeframe: string;
}

interface StageJourney {
  id: StageType;
  steps: string[];
  timeline: TimelineMilestone[];
  recommendedFocus: string;
  whyText: string;
  suggestedServices: string[];
  futureHighlights: string[];
}

const STAGE_CARDS: StageCard[] = [
  {
    id: 'starting',
    title: 'Starting Out',
    subtitle: 'We rely mostly on Facebook and referrals.',
    emoji: '🌱',
    icon: Compass
  },
  {
    id: 'growing',
    title: 'Growing',
    subtitle: 'We already have some systems but need consistency.',
    emoji: '⚙',
    icon: Zap
  },
  {
    id: 'established',
    title: 'Established',
    subtitle: 'We want to improve performance and authority.',
    emoji: '📈',
    icon: TrendingUp
  },
  {
    id: 'scaling',
    title: 'Scaling',
    subtitle: "We're ready to optimize, automate, and expand.",
    emoji: '👑',
    icon: Award
  }
];

const STAGE_JOURNEYS: StageJourney[] = [
  {
    id: 'starting',
    steps: ['Facebook Presence', 'Professional Website', 'WhatsApp Lead Capture', 'Google Visibility', 'Structured Growth'],
    timeline: [
      { timeframe: 'Today', title: 'Facebook reliance', description: 'Relying mostly on raw social feed pages and standard client direct referrals.' },
      { timeframe: 'Next 90 Days', title: 'Interactive Web Base', description: 'Bespoke domain hosting setup loaded with instant direct WhatsApp reservation triggers.' },
      { timeframe: 'Next 6 Months', title: 'Local Search Discoverability', description: 'Attracting high-intent organic local Google queries natively without high ad spends.' },
      { timeframe: 'Next 12 Months', title: 'Structured Expansion', description: 'Reinvesting verified traffic leads to expand operational teams and reach new markets.' }
    ],
    recommendedFocus: 'Professional Website Foundation',
    whyText: 'A stronger digital foundation improves trust, captures opportunities, and creates the systems required for future growth.',
    suggestedServices: ['Website Development', 'SEO Setup', 'Meta Pixel Integration', 'Lead Generation Setup'],
    futureHighlights: [
      'You have a professional digital presence that matches your work quality.',
      'Incoming visitors find simple clear routes to direct communication channels.',
      'Your client systems are structured to capture premium value demands.',
      'You make decisions with greater confidence to execute future scaling steps.'
    ]
  },
  {
    id: 'growing',
    steps: ['Website Optimization', 'Meta Pixel', 'Analytics Setup', 'Lead Funnels', 'Conversion Systems'],
    timeline: [
      { timeframe: 'Today', title: 'Fluctuating Inquiries', description: 'Possessing a basic website with legacy layout guidelines and unmonitored tracking.' },
      { timeframe: 'Next 90 Days', title: 'Conversion Overhauls', description: 'Fine-tuning responsive web components to unlock sub-second load times.' },
      { timeframe: 'Next 6 Months', title: 'Data Telemetry Active', description: 'Setting up clean Meta Pixel tracking, Google Analytics loops and custom event indicators.' },
      { timeframe: 'Next 12 Months', title: 'Auto Lead Routing', description: 'Deploying structured business workflows to guide users effortlessly through conversion pipelines.' }
    ],
    recommendedFocus: 'System Optimization & Analytics Active',
    whyText: 'Plugging conversion leaks and structuring behavioral tracking allows you to make calculated digital spend decisions.',
    suggestedServices: ['Meta Pixel Config', 'Conversion Rate Optimization', 'Google Analytics Setup', 'Frictionless Funnel Engineering'],
    futureHighlights: [
      'Traffic to your website is consistently converted into high-priority hot leads.',
      'Your marketing team possesses real-time performance analytics.',
      'Campaign conversion tracking is perfectly tied directly to business results.',
      'You grow with confidence, backed by verifiable visitor behavior metrics.'
    ]
  },
  {
    id: 'established',
    steps: ['Authority Building', 'SEO Expansion', 'Content Systems', 'Automation', 'Data-Driven Decisions'],
    timeline: [
      { timeframe: 'Today', title: 'Market Positioning Cap', description: 'Competing on pricing charts despite superior services due to template look-alikes.' },
      { timeframe: 'Next 90 Days', title: 'Bespoke Brand Presence', description: 'Adopting high-contrast, minimalist editorial systems to signal elite market authority.' },
      { timeframe: 'Next 6 Months', title: 'Domain Index Domination', description: 'Consistently publishing strategic expert perspectives to capture B2B interest.' },
      { timeframe: 'Next 12 Months', title: 'Automation Core Workflows', description: 'Automating customer inquiry hand-offs, email answers and client record lists.' }
    ],
    recommendedFocus: 'Editorial Authority & Organic SEO Expansion',
    whyText: 'Establishing high-authority digital assets defends premium price positions and attracts corporate-scale accounts naturally.',
    suggestedServices: ['B2B Website Redesign', 'Enterprise Organic SEO', 'Insights & Editorial Systems', 'Lead Nurturing Automation'],
    futureHighlights: [
      'Your digital presence commands elite professional prestige in your market.',
      'Inbound queries consist of sophisticated, pre-qualified B2B high-ticket leads.',
      'Content publishing loops create perpetual long-term SEO visibility.',
      'Your executive team is recognized for sector guidance and thought leadership.'
    ]
  },
  {
    id: 'scaling',
    steps: ['Advanced Optimization', 'Conversion Science', 'Retention Systems', 'Expansion Strategy', 'Digital Leadership'],
    timeline: [
      { timeframe: 'Today', title: 'Scaling Friction Limits', description: 'Underutilizing digital client retention strategies while experiencing scaling bottlenecks.' },
      { timeframe: 'Next 90 Days', title: 'UX Conversion Science', description: 'Running precision micro-interaction tests to squeeze extra value from every visitor.' },
      { timeframe: 'Next 6 Months', title: 'Client Loyalty Engines', description: 'Deploying custom client satisfaction matrices and proactive WhatsApp client circles.' },
      { timeframe: 'Next 12 Months', title: 'Omnichannel Command', description: 'Scaling unified B2B systems across secondary business branches or digital product lines.' }
    ],
    recommendedFocus: 'Conversion Science & Advanced Experience Design',
    whyText: 'Applying analytical conversion design maximizes direct returns while laying infrastructure for national expansion.',
    suggestedServices: ['A/B Testing Systems', 'Custom Portal Development', 'Scalable Cloud Integrations', 'Client Success Orchestration'],
    futureHighlights: [
      'Highly optimized micro-interactions maximize value capture across channels.',
      'Dynamic backend applications automate client onboarding and logistics.',
      'Your platform supports multi-region operations with absolute performance.',
      'Your enterprise establishes undisputed digital leadership in its industry.'
    ]
  }
];

export const GrowthJourneyEngine: React.FC<GrowthJourneyEngineProps> = ({ 
  darkMode, 
  onOpenInquiry 
}) => {
  const [activeStageId, setActiveStageId] = useState<StageType>('starting');
  const [expandedMobileStage, setExpandedMobileStage] = useState<StageType | null>(null);

  const activeJourney = STAGE_JOURNEYS.find(j => j.id === activeStageId) || STAGE_JOURNEYS[0];

  // WhatsApp context click
  const handleWhatsAppConsult = () => {
    const formattedStage = STAGE_CARDS.find(c => c.id === activeStageId)?.title || "Starting Out";
    const textMsg = `Assalamu Alaikum. I explored the Sitora Growth Journey, selected my stage as "${formattedStage}", and would like guidance on my next steps toward the future.`;
    const waUrl = `https://wa.me/8801740924192?text=${encodeURIComponent(textMsg)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      className="py-24 sm:py-32 relative overflow-hidden border-t border-neutral-900/10 dark:border-neutral-900/50 bg-[#060A0F]"
      id="growth-journey-section"
    >
      {/* Decorative Gold & Tech Glow Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D6B16B]/5 rounded-full filter blur-[180px] pointer-events-none select-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#7ED4FF]/3 rounded-full filter blur-[140px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="growth-journey-container">
        
        {/* Title metadata block */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20" id="growth-journey-header">
          <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-[0.25em] block mb-3 font-semibold">
            Growth Journey
          </span>
          <h2 className="font-sans text-2xl sm:text-4.5xl font-black tracking-tight leading-[1.1] uppercase text-white">
            From Where You Are to Where You Want to Be
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-450 font-sans leading-relaxed max-w-2xl mx-auto">
            Every successful business evolves through stages. Discover the next chapter of your digital growth journey.
          </p>
        </div>

        {/* STEP 1: SELECT YOUR CURRENT STAGE - Massive Luxury Cards Grid */}
        <div className="mb-16" id="growth-journey-stage-step font-sans">
          <div className="text-center mb-10">
            <span className="font-mono text-[9px] text-neutral-450 uppercase tracking-[0.15em] font-semibold">
              Step 1: Select Your Current Stage
            </span>
          </div>

          {/* DESKTOP VIEW: Stage Grid Selectors */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-5" id="stage-selectors-grid">
            {STAGE_CARDS.map((card) => {
              const isActive = card.id === activeStageId;
              const CardIcon = card.icon;
              return (
                <button
                  key={card.id}
                  onClick={() => setActiveStageId(card.id)}
                  className={`p-6 rounded-2xl text-left border transition-all duration-300 relative group overflow-hidden cursor-pointer outline-none ${
                    isActive 
                      ? 'border-[#D6B16B] bg-[#0E1520] shadow-[0_4px_20px_rgba(214,177,107,0.15)] scale-[1.02]' 
                      : 'border-neutral-900 bg-neutral-950/40 hover:border-neutral-800 hover:bg-neutral-950/80 hover:translate-y-[-2px]'
                  }`}
                  id={`stage-card-${card.id}`}
                  aria-pressed={isActive}
                >
                  {/* Subtle Top corner Glow active block */}
                  {isActive && (
                    <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-br from-[#D6B16B]/15 to-transparent blur-md pointer-events-none" />
                  )}

                  <div className="flex items-center justify-between mb-4" id={`stage-card-icon-row-${card.id}`}>
                    <div className={`h-11 w-11 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-[#D6B16B]/10 text-[#D6B16B]' : 'bg-neutral-900/50 text-neutral-400 group-hover:text-white'
                    }`} id={`stage-card-icon-box-${card.id}`}>
                      <CardIcon className="h-5 w-5 pointer-events-none" />
                    </div>
                    <span className="text-lg leading-none" id={`stage-card-emoji-${card.id}`}>
                      {card.emoji}
                    </span>
                  </div>

                  <h3 className={`font-sans text-[13px] sm:text-[14px] font-bold uppercase tracking-tight transition-colors ${
                    isActive ? 'text-white' : 'text-neutral-300 group-hover:text-white'
                  }`}>
                    {card.title}
                  </h3>
                  <p className="text-[11px] sm:text-[12px] text-neutral-450 leading-relaxed mt-2.5 font-sans font-medium">
                    {card.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* MOBILE VIEW: Luxury Accordion experience (Collapsed by default, only one expanded at a time) */}
          <div className="sm:hidden space-y-3" id="stage-selectors-accordion-mobile">
            {STAGE_CARDS.map((card) => {
              const isExpanded = expandedMobileStage === card.id;
              const CardIcon = card.icon;
              const currentJourney = STAGE_JOURNEYS.find(j => j.id === card.id) || STAGE_JOURNEYS[0];
              return (
                <div 
                  key={card.id}
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                    isExpanded 
                      ? 'border-[#D6B16B] bg-[#0E1520] shadow-[0_4px_15px_rgba(214,177,107,0.12)]' 
                      : 'border-neutral-900 bg-neutral-950/40'
                  }`}
                >
                  <button
                    onClick={() => {
                      if (isExpanded) {
                        setExpandedMobileStage(null);
                      } else {
                        setExpandedMobileStage(card.id);
                        setActiveStageId(card.id);
                      }
                    }}
                    className="w-full flex items-center justify-between p-4 text-left outline-none min-h-[48px]"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`h-9 w-9 rounded-lg flex items-center justify-center ${
                        isExpanded ? 'bg-[#D6B16B]/10 text-[#D6B16B]' : 'bg-neutral-900/50 text-neutral-400'
                      }`}>
                        <CardIcon className="h-4.5 w-4.5 pointer-events-none" />
                      </div>
                      <div>
                        <h3 className="font-sans text-xs font-bold uppercase tracking-tight text-white flex items-center gap-1.5 leading-none">
                          {card.title} <span className="text-sm">{card.emoji}</span>
                        </h3>
                        <span className="text-[9.5px] text-neutral-500 font-sans font-medium block mt-0.5">{card.subtitle}</span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-neutral-400 shrink-0 ml-2"
                    >
                      <ChevronDown size={14} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: 'easeInOut' }}
                      >
                        <div className="px-4 pb-5 pt-2 border-t border-neutral-900/40 text-left space-y-4 font-sans">
                          
                          {/* Inner contents */}
                          <div className="space-y-1">
                            <span className="text-[8.5px] font-mono text-[#D6B16B] uppercase tracking-wider block">Recommended Focus</span>
                            <div className="text-[11px] font-bold text-white uppercase">{currentJourney.recommendedFocus}</div>
                            <p className="text-[10.5px] text-neutral-400 leading-relaxed font-sans">{currentJourney.whyText}</p>
                          </div>

                          <div className="space-y-1.5 pt-1">
                            <span className="text-[8.5px] font-mono text-[#D6B16B] uppercase tracking-wider block">Timeline Goals</span>
                            <div className="grid grid-cols-2 gap-2 text-[9.5px]">
                              {currentJourney.timeline.map((item, idx) => (
                                <div key={idx} className="bg-[#0B1016]/80 border border-neutral-900 p-2 rounded-lg">
                                  <span className="text-neutral-500 uppercase text-[7.5px] block font-mono">{item.timeframe}</span>
                                  <span className="font-sans text-white font-extrabold block mt-0.5 leading-tight">{item.title}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Quick Inquiry / WhatsApp action inside Accordion on Mobile */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleWhatsAppConsult();
                            }}
                            className="w-full py-2.5 px-4 bg-[#D6B16B] hover:bg-[#ebd5ad] text-neutral-950 font-bold uppercase tracking-wider rounded-lg text-[9.5px] font-sans flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                          >
                            <span>Analyze My Stage on WhatsApp</span>
                            <ArrowUpRight size={10} />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* STEP 2: JOURNEY VISUALIZATION - Animated Premium Roadmap & Steps indicator */}
        <div className="mb-16" id="growth-journey-visualization-step">
          <div className="text-center mb-8">
            <span className="font-mono text-[9px] text-neutral-450 uppercase tracking-[0.15em] font-semibold">
              Step 2: Custom Milestone Roadmap
            </span>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl border border-neutral-900 bg-[#0B1016]/40 relative overflow-hidden" id="roadmap-canvas">
            {/* Horizontal flow line of steps for desktop, vertical for mobile */}
            <div className="relative z-10" id="roadmap-steps-flow">
              
              {/* Desktop view flow list */}
              <div className="hidden md:flex items-center justify-between relative mt-4 pb-8" id="roadmap-flow-desktop">
                {/* Horizontal progress back line */}
                <div className="absolute top-[18px] left-[5%] right-[5%] h-0.5 bg-neutral-900 z-0" />
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '90%' }}
                  transition={{ duration: 0.8 }}
                  className="absolute top-[18px] left-[5%] h-0.5 bg-gradient-to-r from-[#D6B16B] to-neutral-800 z-0"
                />

                {activeJourney.steps.map((st, sIdx) => {
                  const isEnd = sIdx === activeJourney.steps.length - 1;
                  return (
                    <motion.div 
                      key={st}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: sIdx * 0.1 }}
                      className="flex flex-col items-center text-center relative z-10 w-40"
                    >
                      <div className={`h-[36px] w-[36px] rounded-full border-2 flex items-center justify-center font-mono text-[10px] font-black transition-all ${
                        sIdx === 0 
                          ? 'border-[#D6B16B] bg-[#D6B16B] text-neutral-950 shadow-[0_0_12px_rgba(214,177,107,0.3)] scale-110' 
                          : isEnd
                          ? 'border-neutral-800 bg-[#060A0F] text-[#D6B16B]'
                          : 'border-neutral-800 bg-neutral-950 text-neutral-400'
                      }`}>
                        {sIdx + 1}
                      </div>
                      <span className="mt-3.5 font-sans text-[11px] font-bold uppercase tracking-tight text-neutral-200">
                        {st}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile view horizontal swipeable timeline with snap-scroll */}
              <div 
                className="md:hidden flex overflow-x-auto gap-4 snap-x snap-mandatory pb-4 px-1 select-none scrollbar-none" 
                id="roadmap-flow-mobile"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                {activeJourney.timeline.map((item, sIdx) => {
                  const isActive = sIdx === 1 || (sIdx === 0 && activeStageId === 'starting'); // highlight primary milestone phase
                  return (
                    <motion.div 
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: sIdx * 0.08 }}
                      className={`snap-center shrink-0 w-[270px] p-5 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between ${
                        isActive 
                          ? 'border-[#D6B16B] bg-[#0E1520] shadow-[0_4px_15px_rgba(214,177,107,0.1)]' 
                          : 'border-neutral-900 bg-[#070C12]/90'
                      }`}
                    >
                      {/* Highlight active badge */}
                      {isActive && (
                        <div className="absolute top-3 right-3 bg-[#D6B16B]/15 text-[#D6B16B] text-[8px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full font-bold animate-pulse">
                          Active Target
                        </div>
                      )}

                      <div className="space-y-3">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#D6B16B] font-bold block">
                          Phase {sIdx + 1} // {item.timeframe}
                        </span>
                        
                        <h4 className="font-sans text-xs font-extrabold uppercase text-white tracking-tight leading-snug">
                          {item.title}
                        </h4>
                        
                        <p className="text-[11px] text-neutral-400 leading-relaxed font-sans font-medium">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-neutral-900/40 flex flex-col space-y-1">
                        <span className="text-[8px] font-mono text-neutral-500 uppercase">Recommendation</span>
                        <span className="text-[10px] text-[#D6B16B] font-sans font-bold uppercase tracking-tight">
                          {sIdx === 0 ? "Initial Setup Audit" : sIdx === 1 ? "Implement Core Systems" : "Scale Campaign Reach"}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>

        {/* STEP 3: SITORA RECOMMENDED NEXT MOVE & TIME TIMELINE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch" id="roadmap-analytics-grid">
          
          {/* Left Column: Recommendations Panel */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8" id="roadmap-recommendations-col">
            <div className={`p-8 rounded-2xl border border-neutral-950 bg-[#0B1016]/40 flex-1 flex flex-col justify-between`} id="recommendation-focus-panel">
              
              <div className="space-y-6" id="rec-focus-body">
                <div className="flex items-center gap-2 border-b border-neutral-900 pb-4" id="rec-focus-title-row">
                  <Target className="text-[#D6B16B]" size={14} />
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#D6B16B] font-bold">
                    Sitora Recommended Focus
                  </span>
                </div>

                <div className="space-y-3" id="rec-focus-text">
                  <h4 className="font-sans text-lg font-black text-white uppercase tracking-tight leading-snug">
                    {activeJourney.recommendedFocus}
                  </h4>
                  <p className="text-[12px] sm:text-[13px] text-neutral-450 leading-relaxed font-sans font-medium">
                    {activeJourney.whyText}
                  </p>
                </div>

                {/* Suggested services sub block */}
                <div className="space-y-3.5 pt-2" id="suggested-services-box">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-450 block font-bold">
                    Suggested Conversion Services
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="suggested-services-chips">
                    {activeJourney.suggestedServices.map((srv, sIdx) => (
                      <div 
                        key={sIdx} 
                        className="flex items-center gap-2.5 text-[11px] sm:text-[12px] text-neutral-300 font-sans font-medium"
                        id={`srv-line-item-${sIdx}`}
                      >
                        <div className="h-4 w-4 rounded bg-[#D6B16B]/10 flex items-center justify-center shrink-0">
                          <Check className="text-[#D6B16B]" size={10} strokeWidth={3} />
                        </div>
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Emotional Insight Quote Block */}
              <div className="mt-8 border-t border-neutral-900/80 pt-6" id="emotional-insight-quote">
                <blockquote className="border-l-2 border-[#D6B16B]/50 pl-4 py-0.5">
                  <p className="font-sans italic text-[11px] sm:text-[12px] text-neutral-420 leading-relaxed">
                    "Growth rarely happens all at once. The businesses that thrive are the ones that consistently take the next right step."
                  </p>
                </blockquote>
              </div>

            </div>
          </div>

          {/* Right Column: Timeline and Future Snapshot */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8" id="roadmap-timeline-col">
            <div className={`p-8 rounded-2xl border border-neutral-950 bg-neutral-950/40 flex-1 flex flex-col justify-between`} id="roadmap-timeline-panel">
              
              <div className="space-y-6" id="timeline-body">
                <div className="flex items-center gap-2 border-b border-neutral-900/80 pb-4" id="timeline-title-row">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#D6B16B] font-bold">
                    Today → Future Progress Track
                  </span>
                </div>

                {/* Vertical Timeline Stepper */}
                <div className="space-y-6 relative" id="vertical-timeline-stepper">
                  <div className="absolute top-[8px] bottom-[8px] left-[7px] w-0.5 bg-neutral-900/80" />
                  
                  {activeJourney.timeline.map((mile, mIdx) => (
                    <div key={mIdx} className="flex gap-4 items-start relative z-10" id={`timeline-step-${mIdx}`}>
                      <div className={`h-4 w-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                        mIdx === 0 
                          ? 'border-[#D6B16B] bg-[#D6B16B]' 
                          : 'border-neutral-800 bg-[#060A0F]'
                      }`} id={`timeline-dot-${mIdx}`}>
                        {mIdx === 0 && <span className="h-1 w-1 rounded-full bg-neutral-950" />}
                      </div>

                      <div className="space-y-1" id={`timeline-step-text-${mIdx}`}>
                        <div className="flex items-center gap-2" id={`timeline-step-meta-${mIdx}`}>
                          <span className="font-mono text-[9px] uppercase tracking-wider text-[#D6B16B] bg-[#D6B16B]/10 py-0.5 px-2 rounded">
                            {mile.timeframe}
                          </span>
                          <span className="font-sans text-[11px] font-bold text-white uppercase tracking-tight">
                            {mile.title}
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-450 leading-relaxed font-sans">
                          {mile.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Visualization indicator slide */}
              <div className="mt-8 pt-5 border-t border-neutral-900/80 flex items-center justify-between" id="progress-visual-track-bar">
                <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-450">Today</span>
                <div className="flex-1 mx-4 h-0.5 bg-neutral-900 relative rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 bottom-0 w-1/3 bg-[#D6B16B]" />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#D6B16B]">Future</span>
              </div>

            </div>
          </div>

        </div>

        {/* Future Snapshot Bento Block */}
        <div className="mt-12 p-8 sm:p-10 rounded-2xl border border-neutral-900 bg-gradient-to-br from-[#0B1016]/20 to-neutral-950/40 relative overflow-hidden" id="future-snapshot-block">
          <div className="absolute top-0 right-0 h-40 w-40 bg-[#D6B16B]/5 rounded-full filter blur-xl select-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center" id="future-snapshot-inner-grid">
            <div className="md:col-span-5 space-y-2" id="snapshot-title-row">
              <span className="text-[9px] font-mono text-[#D6B16B] uppercase tracking-[0.2em] block font-bold">
                Future Snapshot
              </span>
              <h3 className="font-sans text-lg font-black uppercase text-white tracking-tight">
                Imagine 12 Months From Now
              </h3>
              <p className="text-[11px] text-neutral-450 leading-relaxed font-sans">
                Aligning your digital presence today structures a steady pipeline, unlocking strategic growth trajectories naturally.
              </p>
            </div>

            <div className="md:col-span-7" id="snapshot-highlights-col">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="snapshot-highlights-subgrid">
                {activeJourney.futureHighlights.map((high, hIdx) => (
                  <div key={hIdx} className="flex gap-2.5 items-start" id={`high-item-${hIdx}`}>
                    <Check className="text-[#D6B16B] mt-0.5 shrink-0" size={12} strokeWidth={3} />
                    <span className="text-[11px] sm:text-[12px] text-neutral-300 font-sans leading-relaxed font-medium">
                      {high}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA BUTTONS ROW */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-4" id="journey-cta-flow">
          <button
            onClick={() => onOpenInquiry('custom')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-7 rounded-xl font-sans text-xs font-bold uppercase tracking-wider text-neutral-950 bg-[#D6B16B] hover:bg-[#ebd5ad] shadow-lg hover:shadow-[#D6B16B]/10 active:scale-[0.98] transition-all duration-300 cursor-pointer"
            id="journey-primary-consult-btn"
          >
            <span>Get a Free Consultation</span>
            <ArrowUpRight size={13} />
          </button>
          
          <button
            onClick={handleWhatsAppConsult}
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-7 rounded-xl font-sans text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-lg hover:shadow-[#25D366]/10 active:scale-[0.98] transition-all duration-300 cursor-pointer"
            id="journey-secondary-whatsapp-btn"
          >
            <span>Discuss My Growth Journey</span>
            <MessageSquare size={13} />
          </button>
        </div>

      </div>
    </section>
  );
};
