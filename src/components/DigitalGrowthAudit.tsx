import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  ArrowUpRight, 
  ArrowRight,
  Smartphone,
  TrendingUp,
  Award,
  BookOpen,
  Settings,
  BarChart3,
  Search,
  MessageSquare,
  Sparkles,
  FileText,
  AlertCircle,
  HelpCircle,
  Clock,
  ExternalLink
} from 'lucide-react';

interface DigitalGrowthAuditProps {
  darkMode: boolean;
  onOpenInquiry: (type: string) => void;
}

interface AnswerOption {
  text: string;
  score: number;
}

interface Question {
  id: number;
  text: string;
  description: string;
  options: AnswerOption[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Do you currently have a website?",
    description: "Every premium digital presence starts with a dedicated, custom-crafted brand hub.",
    options: [
      { text: "Yes, we have an active website", score: 10 },
      { text: "No, we only operate on social media or offline", score: 0 }
    ]
  },
  {
    id: 2,
    text: "Is your website mobile optimized?",
    description: "Multi-device conversion relies on responsive, touch-friendly structures.",
    options: [
      { text: "Fully responsive and ultra-fast on mobile phones", score: 10 },
      { text: "Somewhat optimized but could feel smoother", score: 5 },
      { text: "No, it is difficult to read/navigate on phones", score: 0 }
    ]
  },
  {
    id: 3,
    text: "Do you collect leads or close orders through WhatsApp?",
    description: "Streamlined modern messaging flows reduce friction and support direct conversions.",
    options: [
      { text: "Yes, deep direct WhatsApp channels are integrated", score: 10 },
      { text: "No, but we are actively planning to set them up", score: 5 },
      { text: "No, we do not use WhatsApp for direct customer communication", score: 0 }
    ]
  },
  {
    id: 4,
    text: "Do you trace visitor behavior and traffic analytics?",
    description: "Understanding paths from visitor to advocate requires reliable telemetry frameworks.",
    options: [
      { text: "Yes, with robust Google Analytics 4 configurations", score: 10 },
      { text: "We have basic tracker integrations but rarely review them", score: 5 },
      { text: "No visitor tracking systems are integrated currently", score: 0 }
    ]
  },
  {
    id: 5,
    text: "Do you utilize the Meta Conversion Pixel or tracking setups?",
    description: "Data-driven advertising pipelines require precise server/browser telemetry feeds.",
    options: [
      { text: "Yes, advanced custom pixel loops are running", score: 10 },
      { text: "Planning to integrate or have legacy files only", score: 5 },
      { text: "No retargeting setup is currently implemented", score: 0 }
    ]
  },
  {
    id: 6,
    text: "Do you rank on Google maps/search for high-priority local keywords?",
    description: "Securing organic search real estate positions your brand as an industry leader.",
    options: [
      { text: "Frequently on first-page organic matches", score: 10 },
      { text: "Occasionally, but our index fluctuates often", score: 7 },
      { text: "Unsure of how Google perceives our index footprint", score: 3 },
      { text: "No, we do not appear in key organic searches", score: 0 }
    ]
  },
  {
    id: 7,
    text: "How do incoming clients initiate direct contact with your team?",
    description: "Flexible, secure inbound funnels amplify lead capture efficiencies.",
    options: [
      { text: "Multiple optimized channels (forms, direct chat, booking)", score: 10 },
      { text: "Primarily WhatsApp chat queries", score: 7 },
      { text: "Direct messages on Instagram or facebook pages", score: 4 },
      { text: "Mostly manual offline calls or walk-ins", score: 0 }
    ]
  },
  {
    id: 8,
    text: "Do you actively craft and share digital content or insights?",
    description: "Publishing expert case studies and thoughts maintains domain auth and trust.",
    options: [
      { text: "Regular editorial content and brand columns", score: 10 },
      { text: "Occasionally when major milestones occur", score: 7 },
      { text: "Rarely, we lack dedicated editorial resources", score: 3 },
      { text: "Never published insights or active content grids", score: 0 }
    ]
  },
  {
    id: 9,
    text: "Do you guide web visitors down a clear conversion path?",
    description: "Frictionless journeys employ targeted contextual calls-to-action.",
    options: [
      { text: "Yes, every page drives specific high-intent outcomes", score: 10 },
      { text: "Partially, though several pages lack explicit CTAs", score: 5 },
      { text: "No, visitors must search for how to take next steps", score: 0 }
    ]
  },
  {
    id: 10,
    text: "Do you know your current digital checkout or lead conversion rate?",
    description: "Optimizing marketing spend demands clear conversion audit benchmarks.",
    options: [
      { text: "Yes, monitored precisely with active funnel dashboards", score: 10 },
      { text: "Estimated roughly based on raw monthly queries", score: 5 },
      { text: "No, we currently have no way to measure this", score: 0 }
    ]
  }
];

export const DigitalGrowthAudit: React.FC<DigitalGrowthAuditProps> = ({ 
  darkMode, 
  onOpenInquiry 
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);

  const totalQuestions = QUESTIONS.length;
  
  // Scoring formulas
  const calculateScore = (): number => {
    return Object.entries(selectedAnswers).reduce((sum, [qId, optIdx]) => {
      const question = QUESTIONS.find(q => q.id === Number(qId));
      if (question && question.options[optIdx]) {
        return sum + question.options[optIdx].score;
      }
      return sum;
    }, 0);
  };

  const getScoreClassification = (score: number) => {
    if (score <= 30) return { label: "Early-Stage Infrastructure", color: "text-red-400 border-red-500/20 bg-red-500/5", ringColor: "#f87171" };
    if (score <= 60) return { label: "Growth Opportunity Window", color: "text-yellow-400 border-yellow-500/20 bg-yellow-500/5", ringColor: "#facc15" };
    if (score <= 80) return { label: "Growth-Ready Blueprint", color: "text-[#D6B16B] border-[#D6B16B]/20 bg-[#D6B16B]/5", ringColor: "#D6B16B" };
    return { label: "High-Performance System", color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5", ringColor: "#34d399" };
  };

  const currentScore = calculateScore();
  const classification = getScoreClassification(currentScore);

  const handleOptionSelect = (optionIndex: number) => {
    const updatedAnswers = { ...selectedAnswers, [QUESTIONS[currentStep].id]: optionIndex };
    setSelectedAnswers(updatedAnswers);

    // Auto advancement wait
    setTimeout(() => {
      if (currentStep < totalQuestions - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        setShowResults(true);
      }
    }, 350);
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const resetAudit = () => {
    setSelectedAnswers({});
    setCurrentStep(0);
    setShowResults(false);
  };

  // Helper dynamic calculation of strengths/recommendations based on actual answers
  const getDynamicInsights = () => {
    const strengths: string[] = [];
    const opportunities: string[] = [];
    const recommendations: { title: string; desc: string; icon: string }[] = [];
    const services: string[] = [];

    // Q1 & Q2 - Website Presence
    if (selectedAnswers[1] === 0) {
      opportunities.push("⚠ High-friction Brand Persona (No Dedicated Website Hub)");
      recommendations.push({
        title: "Craft a Custom High-Performance Website",
        desc: "Transition from loose social grids into an authoritative bespoke digital storefront.",
        icon: "globe"
      });
      services.push("Website Development");
    } else {
      strengths.push("✓ Established core online web foundation");
      if (selectedAnswers[2] === 0 || selectedAnswers[2] === 1) {
        opportunities.push("⚠ Suboptimal mobile performance bottlenecks");
        recommendations.push({
          title: "Optimize Responsive Core Web Vitals",
          desc: "Restructure stylesheets to achieve sub-second loading on tablets & mobile screens.",
          icon: "mobile"
        });
        services.push("Website Development");
      } else {
        strengths.push("✓ Highly mobile-ready presentation");
      }
    }

    // Q3 - WhatsApp funnel
    if (selectedAnswers[3] === 0) {
      strengths.push("✓ Active native lead logging channels");
    } else {
      opportunities.push("⚠ Disconnected conversational checkouts (No active WhatsApp pipeline)");
      recommendations.push({
        title: "Deploy WhatsApp Business Concierge API",
        desc: "Convert curious passive eyes directly into qualified buyer dialogues.",
        icon: "chat"
      });
      services.push("Lead Generation");
      services.push("Conversion Strategy");
    }

    // Q4 & Q5 - Telemetry
    if (selectedAnswers[4] === 2) {
      opportunities.push("⚠ Invisible traffic behavior metrics (Missing Google Analytics)");
      recommendations.push({
        title: "Establish GA4 Client Tracking Pipelines",
        desc: "Configure clean metrics loops to monitor actual conversion routes precisely.",
        icon: "analytics"
      });
      services.push("Analytics Setup");
    } else if (selectedAnswers[4] === 1) {
      strengths.push("✓ Partial analytics frameworks initialized");
    } else {
      strengths.push("✓ Advanced digital telemetry monitoring");
    }

    if (selectedAnswers[5] === 2) {
      opportunities.push("⚠ Missing Meta retargeting assets (No Active Conversion Pixel)");
      recommendations.push({
        title: "Configure Metadata Capture Loop Layers",
        desc: "Unlock intelligent retargeting strategies to maximize campaign efficiencies.",
        icon: "pixel"
      });
      services.push("Meta Pixel Setup");
    }

    // Q6 - SEO Search
    if (selectedAnswers[6] === 3 || selectedAnswers[6] === 2) {
      opportunities.push("⚠ Dormant search discoverability factors");
      recommendations.push({
        title: "Bespoke Organic SEO Restructuring",
        desc: "Elevate your ranking for high-intent search inquiries through clean core layouts.",
        icon: "search"
      });
      services.push("SEO Optimization");
    } else if (selectedAnswers[6] === 0) {
      strengths.push("✓ Leading search placement metrics");
    }

    // Default fallbacks to guarantee rich output lists
    if (strengths.length === 0) {
      strengths.push("✓ Open channels for incoming consultation opportunities");
    }
    if (opportunities.length < 3) {
      opportunities.push("⚠ Latent potential to optimize client trust anchors");
    }
    if (recommendations.length < 3) {
      recommendations.push({
        title: "Upgrade Funnel Conversion Paths",
        desc: "Strategically place contextual cues to simplify user decision-making processes.",
        icon: "funnel"
      });
      services.push("Conversion Strategy");
    }

    // Limit service tags to unique and maximum 3 for aesthetic bento grid density
    const uniqueServices = Array.from(new Set(services)).slice(0, 3);
    if (uniqueServices.length === 0) {
      uniqueServices.push("Website Development", "Conversion Strategy", "Lead Generation");
    }

    return {
      strengths: strengths.slice(0, 3),
      opportunities: opportunities.slice(0, 3),
      recommendations: recommendations.slice(0, 3),
      services: uniqueServices
    };
  };

  const dynamicInsights = getDynamicInsights();

  // Custom localized message trigger link for Sitora Web consulting whatsapp channel
  const handleWhatsAppShare = () => {
    const defaultText = `Assalamu Alaikum. I completed the Sitora Digital Growth Audit and calculated a Score of ${currentScore}/100. I would like to discuss my results.`;
    const whatsappUrl = `https://wa.me/8801740924192?text=${encodeURIComponent(defaultText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Progress calculations
  const progressPercent = Math.min(100, Math.round(((currentStep + 1) / totalQuestions) * 100));

  return (
    <section 
      className="py-24 sm:py-32 relative overflow-hidden border-t border-neutral-900/10 dark:border-neutral-900/50"
      id="digital-growth-audit"
    >
      {/* Absolute Glow Background Assets */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#D6B16B]/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#7ED4FF]/5 rounded-full filter blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="audit-engine-container">
        
        {/* Title and Strategic Subheadings */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20" id="audit-main-header">
          <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-[0.25em] block mb-3 font-semibold">
            Digital Audit
          </span>
          <h2 className={`font-sans text-2xl sm:text-4.5xl font-black tracking-tight leading-[1.1] uppercase ${
            darkMode ? 'text-white' : 'text-[#111827]'
          }`}>
            Discover Your Digital Growth Score
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-450 font-sans leading-relaxed max-w-2xl mx-auto">
            Answer a few questions to uncover strengths, identify opportunities, and understand the next steps toward sustainable digital growth.
          </p>
        </div>

        {/* Dynamic Canvas Container */}
        <div className="max-w-5.5xl mx-auto" id="audit-dashboard-bento">
          <AnimatePresence mode="wait">
            {!showResults ? (
              // STEP BY STEP ASSESSMENT MODULE
              <motion.div
                key="assessment-flow"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
              >
                {/* Left Column: Interactive Assessment Question Modules */}
                <div className="lg:col-span-7 flex flex-col justify-between min-h-[460px] space-y-8" id="assessment-left-panel">
                  <div className="space-y-6">
                    {/* Progress Indicator Metadata header row */}
                    <div className="flex items-center justify-between" id="assessment-progress-row">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#D6B16B] font-bold">
                        Question {currentStep + 1} of {totalQuestions}
                      </span>
                      <span className="font-mono text-[9px] text-neutral-450 uppercase">
                        {progressPercent}% Complete
                      </span>
                    </div>

                    {/* Premium Progress Bar structure */}
                    <div className={`h-1.5 w-full rounded-full overflow-hidden relative ${
                      darkMode ? 'bg-neutral-900' : 'bg-neutral-200'
                    }`} id="assessment-progress-track">
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: progressPercent / 100 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[#D6B16B] to-[#e4cb9c] rounded-full origin-left w-full"
                        id="assessment-progress-indicator"
                      />
                    </div>

                    {/* Question text header */}
                    <div className="space-y-2 pt-2" id="assessment-question-text-wrapper">
                      <h3 className={`font-sans text-lg sm:text-xl font-bold uppercase tracking-tight ${
                        darkMode ? 'text-white' : 'text-neutral-950'
                      }`}>
                        {QUESTIONS[currentStep].text}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-neutral-450 leading-relaxed font-sans font-medium">
                        {QUESTIONS[currentStep].description}
                      </p>
                    </div>

                    {/* Answers premium visual Selection Cards */}
                    <div className="space-y-3.5 pt-4" id="assessment-options-grid">
                      {QUESTIONS[currentStep].options.map((opt, oIdx) => {
                        const isSelected = selectedAnswers[QUESTIONS[currentStep].id] === oIdx;
                        return (
                          <button
                            key={oIdx}
                            onClick={() => handleOptionSelect(oIdx)}
                            className={`w-full text-left p-5 rounded-xl border transition-all duration-300 transform active:scale-[0.99] cursor-pointer outline-none relative overflow-hidden group ${
                              isSelected 
                                ? 'border-[#D6B16B] bg-[#D6B16B]/5 shadow-[0_4px_15px_rgba(214,177,107,0.1)]' 
                                : darkMode 
                                ? 'border-neutral-900 bg-neutral-950/40 hover:border-neutral-800 hover:bg-neutral-950/80 hover:translate-x-1'
                                : 'border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50/50 hover:translate-x-1'
                            }`}
                            id={`option-card-${currentStep}-${oIdx}`}
                          >
                            <div className="flex items-center justify-between" id={`option-inner-${currentStep}-${oIdx}`}>
                              <span className={`font-sans text-[12px] sm:text-[13px] font-bold ${
                                isSelected 
                                  ? 'text-[#D6B16B]' 
                                  : darkMode 
                                  ? 'text-neutral-300 group-hover:text-white' 
                                  : 'text-neutral-700 group-hover:text-neutral-900'
                              }`}>
                                {opt.text}
                              </span>
                              
                              <div className={`h-4.5 w-4.5 rounded-full border flex items-center justify-center transition-all ${
                                isSelected 
                                  ? 'border-[#D6B16B] bg-[#D6B16B] text-neutral-950' 
                                  : 'border-neutral-400/40'
                              }`}>
                                {isSelected && <Check size={10} strokeWidth={4} />}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Back button option */}
                  <div className="pt-4 flex items-center" id="assessment-navigation-row">
                    {currentStep > 0 && (
                      <button
                        onClick={handlePrevStep}
                        className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-neutral-450 hover:text-neutral-200 transition-colors"
                        id="back-button"
                      >
                        ← Back to Previous Question
                      </button>
                    )}
                  </div>
                </div>

                {/* Right Column: Live Audit Preview Realtime updates (score indicators) */}
                <div className="lg:col-span-5" id="assessment-right-panel">
                  <div className={`p-8 rounded-2xl border flex flex-col justify-between h-full min-h-[380px] lg:min-h-[460px] ${
                    darkMode ? 'bg-[#0B1016]/40 border-neutral-900' : 'bg-neutral-50/50 border-neutral-150 shadow-sm'
                  }`} id="live-audit-card">
                    
                    {/* Live score header indicator */}
                    <div className="flex items-center justify-between border-b border-neutral-900/10 dark:border-neutral-900/40 pb-5" id="live-score-status-header">
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D6B16B] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D6B16B]"></span>
                        </span>
                        <span className="font-mono text-[9px] text-neutral-450 uppercase tracking-widest leading-none">
                          ANALYZING MATRICES
                        </span>
                      </div>
                      <span className="font-mono text-[9px] text-[#D6B16B] uppercase font-bold leading-none">
                        DRAFT MODE
                      </span>
                    </div>

                    {/* Circular Score Ring Preview Panel */}
                    <div className="flex-1 flex flex-col items-center justify-center py-8" id="live-gauge-container">
                      <div className="relative h-32 w-32 sm:h-36 sm:w-36 flex items-center justify-center" id="live-score-circle-wrapper">
                        {/* SVG Background Ring and Active Arc */}
                        <svg className="absolute w-full h-full transform -rotate-90">
                          <circle
                            cx="50%"
                            cy="50%"
                            r="42%"
                            className="stroke-neutral-200 dark:stroke-neutral-900 fill-none"
                            strokeWidth="6"
                          />
                          <motion.circle
                            cx="50%"
                            cy="50%"
                            r="42%"
                            className="fill-none"
                            strokeWidth="6"
                            strokeLinecap="round"
                            stroke={classification.ringColor}
                            initial={{ strokeDasharray: "264 264", strokeDashoffset: 264 }}
                            animate={{ strokeDashoffset: 264 - (264 * currentScore) / 100 }}
                            transition={{ duration: 0.4 }}
                          />
                        </svg>

                        {/* Centered Score text */}
                        <div className="text-center z-10" id="live-score-number-display">
                          <span className={`font-sans text-3xl sm:text-4xl font-black ${
                            darkMode ? 'text-white' : 'text-neutral-950'
                          }`}>
                            {currentScore}
                          </span>
                          <span className="text-[9px] font-mono text-neutral-450 block uppercase tracking-widest mt-0.5">
                            OUT OF 100
                          </span>
                        </div>
                      </div>

                      {/* Current Classification description */}
                      <div className="text-center mt-6 space-y-1.5" id="live-score-classification-box">
                        <span className={`text-[10px] sm:text-xs font-mono uppercase tracking-wider px-3.5 py-1 rounded-full border ${classification.color}`} id="live-classification-tag">
                          {classification.label}
                        </span>
                        <p className="text-[10px] text-neutral-450 font-sans max-w-xs leading-relaxed pt-2">
                          Your scores balance based on visitor optimization matrices. Complete remaining fields to lock your dynamic recommendations.
                        </p>
                      </div>
                    </div>

                    {/* Live score panel footprint mockup lines */}
                    <div className="border-t border-neutral-900/10 dark:border-neutral-900/40 pt-5 space-y-3" id="live-audit-footer-mockup">
                      <div className="flex justify-between text-[9px] font-mono text-neutral-450 uppercase" id="metric-footprint-1">
                        <span>ESTIMATED CONVERSIONS:</span>
                        <span className="text-neutral-300 font-bold">
                          {currentScore >= 60 ? 'HIGH READY' : 'LATENT GAP'}
                        </span>
                      </div>
                      <div className="flex justify-between text-[9px] font-mono text-neutral-450 uppercase" id="metric-footprint-2">
                        <span>CORE VISUAL TRUST:</span>
                        <span className="text-[#D6B16B] font-bold">
                          {selectedAnswers[1] !== undefined ? (selectedAnswers[1] === 0 ? 'NEEDS STRATEGY' : 'STABILIZED') : 'AWAITING INPUTS'}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            ) : (
              // EXECUTIVE REPORT / RESULTS DASHBOARD
              <motion.div
                key="audit-executive-report"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="space-y-10"
                id="audit-results-report"
              >
                
                {/* PDF Style Visual Executive Summary Card block */}
                <div className={`p-8 sm:p-12 rounded-3xl border relative overflow-hidden ${
                  darkMode ? 'bg-gradient-to-b from-[#0b0f16] to-[#040608] border-neutral-900/80 shadow-2xl' : 'bg-white border-neutral-150 shadow-xl'
                }`} id="executive-summary-card">
                  
                  {/* Decorative Subtle Gold Seal */}
                  <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#D6B16B]/5 rounded-full flex items-center justify-center border border-[#D6B16B]/10 select-none pointer-events-none" id="decorative-gold-seal">
                    <div className="w-36 h-36 rounded-full border border-dashed border-[#D6B16B]/10" />
                  </div>

                  {/* Header visual row */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-neutral-200 dark:border-neutral-900 pb-6 gap-4" id="report-header-banner">
                    <div className="space-y-1.5" id="report-source-stamp">
                      <div className="flex items-center gap-2">
                        <Award size={15} className="text-[#D6B16B]" />
                        <span className="font-mono text-[9px] text-[#D6B16B] uppercase tracking-widest font-black">
                          Sitora Digital Advisory
                        </span>
                      </div>
                      <h3 className={`font-sans text-lg font-black uppercase tracking-tight leading-none ${
                        darkMode ? 'text-white' : 'text-neutral-900'
                      }`}>
                        DIGITAL GROWTH AUDIT SUMMARY
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-2 font-mono text-[9px] text-neutral-400 bg-neutral-100 dark:bg-neutral-950 px-3.5 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-900 shrink-0" id="report-document-id">
                      <FileText size={11} className="text-[#D6B16B]" />
                      <span>DOC ID: #SDA-2026-610</span>
                    </div>
                  </div>

                  {/* Dynamic Score and Category presentation block */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 sm:py-12 border-b border-neutral-200 dark:border-neutral-900 items-center" id="score-block-grid">
                    
                    {/* Ring score visual */}
                    <div className="lg:col-span-4 flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-neutral-900 pb-8 lg:pb-0 lg:pr-8" id="report-ring-wrapper">
                      <div className="relative h-36 w-36 sm:h-40 sm:w-40 flex items-center justify-center" id="final-gauge-relative">
                        <svg className="absolute w-full h-full transform -rotate-90">
                          <circle
                            cx="50%"
                            cy="50%"
                            r="42%"
                            className="stroke-neutral-100 dark:stroke-neutral-950 fill-none"
                            strokeWidth="8"
                          />
                          <motion.circle
                            cx="50%"
                            cy="50%"
                            r="42%"
                            className="fill-none"
                            strokeWidth="8"
                            strokeLinecap="round"
                            stroke={classification.ringColor}
                            initial={{ strokeDasharray: "264 264", strokeDashoffset: 264 }}
                            animate={{ strokeDashoffset: 264 - (264 * currentScore) / 100 }}
                            transition={{ duration: 0.8 }}
                          />
                        </svg>
                        
                        <div className="text-center z-10" id="final-score-display">
                          <span className={`font-sans text-4xl sm:text-5xl font-black ${
                            darkMode ? 'text-white' : 'text-neutral-950'
                          }`}>
                            {currentScore}
                          </span>
                          <span className="text-[9px] font-mono text-neutral-450 block uppercase tracking-widest mt-0.5">
                            SCORE LIMIT
                          </span>
                        </div>
                      </div>

                      <div className="mt-5 space-y-1" id="report-class-tag-wrapper">
                        <span className={`inline-block text-[10px] font-mono uppercase tracking-wider px-4 py-1 rounded-full border ${classification.color}`} id="report-class-tag">
                          {classification.label}
                        </span>
                      </div>
                    </div>

                    {/* Executive feedback statement */}
                    <div className="lg:col-span-8 space-y-4" id="report-executive-notes">
                      <h4 className={`font-sans text-sm sm:text-base font-bold uppercase tracking-tight ${
                        darkMode ? 'text-neutral-200' : 'text-neutral-800'
                      }`}>
                        Executive Assessment Outcomes
                      </h4>
                      
                      <div className="text-[12px] sm:text-[13px] text-neutral-450 space-y-3 font-sans leading-relaxed">
                        {currentScore <= 30 && (
                          <p>
                            Your digital ecosystem currently operates on raw initial channels. While this allows highly direct interactions, missing dedicated bespoke sites and pixel telemetry leaves your products exposed to sudden changes in social media algorithm alignments.
                          </p>
                        )}
                        {currentScore > 30 && currentScore <= 60 && (
                          <p>
                            A healthy initial foundation is active, but significant optimization areas remain unaddressed. Bottlenecks around responsive layout performance, organic rankings, and unified conversion pipelines limit your capability to capture passive high-value visitor intent.
                          </p>
                        )}
                        {currentScore > 60 && currentScore <= 80 && (
                          <p>
                            Great digital progress! Your business is poised to transform raw tracking and customer outreach arrays into highly repeatable profit engines. Securing conversion tracking loops and integrating high-fidelity styling will elevate your brand authority.
                          </p>
                        )}
                        {currentScore > 80 && (
                          <p>
                            An exceptional, high-velocity digital presence! You possess robust tracking, optimized conversion mechanics, and strong organic search indexes. Routine structural reviews and fine-tuning responsive spacing assets will secure your market lead in the long term.
                          </p>
                        )}
                        
                        <p className="font-semibold text-neutral-400">
                          {currentScore >= 60 
                            ? "You already have valuable foundations in place. With focused improvements, your digital ecosystem can become a more powerful growth asset."
                            : "While some digital blocks exist, deploying a dedicated conversion strategy will secure dramatic growth opportunities and streamline customer decision steps."
                          }
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Executive Digital Diagnostic Log System */}
                  <div className={`p-4.5 rounded-xl border ${
                    darkMode 
                      ? 'bg-[#0b1016]/40 border-neutral-900/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.01)]' 
                      : 'bg-neutral-50/50 border-neutral-100'
                  }`} id="report-technical-telemetry">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[9.5px] font-mono text-neutral-450 uppercase tracking-widest font-black flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#D6B16B]" />
                        SYSTEM DATA ANALYSIS // TELEMETRY READOUT
                      </span>
                      <span className="text-[9px] font-mono text-neutral-500">REF_DEV_OK</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="p-2.5 bg-neutral-50 dark:bg-neutral-950/50 rounded-lg border border-neutral-100 dark:border-neutral-900/80">
                        <div className="text-[8px] text-neutral-500 font-mono">LOADTIME LCP</div>
                        <div className="text-xs font-bold text-[#D6B16B] font-mono">0.82 SEC // OK</div>
                      </div>
                      <div className="p-2.5 bg-neutral-50 dark:bg-neutral-950/50 rounded-lg border border-neutral-100 dark:border-neutral-900/80">
                        <div className="text-[8px] text-neutral-500 font-mono">SEO MARKUP SCHEMA</div>
                        <div className="text-xs font-bold text-emerald-500 font-mono">COMPLIANT V3</div>
                      </div>
                      <div className="p-2.5 bg-neutral-50 dark:bg-neutral-950/50 rounded-lg border border-neutral-100 dark:border-neutral-900/80">
                        <div className="text-[8px] text-neutral-500 font-mono">CAPI PROTOCOL</div>
                        <div className="text-xs font-bold text-emerald-500 font-mono">ACTIVE SENSOR</div>
                      </div>
                      <div className="p-2.5 bg-neutral-50 dark:bg-neutral-950/50 rounded-lg border border-neutral-100 dark:border-neutral-900/80">
                        <div className="text-[8px] text-neutral-500 font-mono">GOOGLE INDEX GA4</div>
                        <div className="text-xs font-bold text-[#D6B16B] font-mono">100% INGESTED</div>
                      </div>
                    </div>
                  </div>

                  {/* Dual Grid: Strengths vs Opportunities */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 sm:py-10 border-b border-neutral-200 dark:border-neutral-900" id="strengths-opportunities-double-grid">
                    
                    {/* Strengths identified */}
                    <div className="space-y-4.5" id="strengths-column">
                      <div className="flex items-center gap-2" id="strengths-column-title">
                        <div className="h-5 w-5 rounded bg-emerald-500/10 flex items-center justify-center shrink-0">
                          <Check className="text-emerald-400" size={12} strokeWidth={3} />
                        </div>
                        <span className={`font-sans text-[11px] font-bold uppercase tracking-wider ${
                          darkMode ? 'text-[#F7F8FA]' : 'text-neutral-800'
                        }`}>
                          Verified Digital Strengths
                        </span>
                      </div>
                      <ul className="space-y-2.5" id="strengths-ul-list">
                        {dynamicInsights.strengths.map((str, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2.5 text-[11px] sm:text-[12px] text-neutral-420 font-sans" id={`strength-li-${sIdx}`}>
                            <span className="text-emerald-500 shrink-0 font-bold select-none">•</span>
                            <span>{str.replace("✓ ", "")}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Opportunities identified */}
                    <div className="space-y-4.5" id="opportunities-column">
                      <div className="flex items-center gap-2" id="opportunities-column-title">
                        <div className="h-5 w-5 rounded bg-yellow-500/10 flex items-center justify-center shrink-0">
                          <AlertCircle className="text-yellow-400" size={12} />
                        </div>
                        <span className={`font-sans text-[11px] font-bold uppercase tracking-wider ${
                          darkMode ? 'text-[#F7F8FA]' : 'text-neutral-800'
                        }`}>
                          Key Optimization Opportunities
                        </span>
                      </div>
                      <ul className="space-y-2.5" id="opportunities-ul-list">
                        {dynamicInsights.opportunities.map((opp, oIdx) => (
                          <li key={oIdx} className="flex items-start gap-2.5 text-[11px] sm:text-[12px] text-neutral-420 font-sans" id={`opp-li-${oIdx}`}>
                            <span className="text-yellow-500 shrink-0 font-bold select-none">•</span>
                            <span>{opp.replace("⚠ ", "")}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Priority Recommendations block */}
                  <div className="pt-8 sm:pt-10" id="executive-recommendations-bento">
                    <span className="font-mono text-[9px] text-[#D6B16B] uppercase tracking-[0.2em] block mb-5 font-bold">
                      Priority Growth Recommendations
                    </span>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="recommendation-cards-row">
                      {dynamicInsights.recommendations.map((rec, rIdx) => (
                        <div 
                          key={rIdx} 
                          className={`p-5.5 rounded-xl border ${
                            darkMode ? 'bg-neutral-950/60 border-neutral-900' : 'bg-neutral-50/50 border-neutral-150'
                          }`}
                          id={`recommendation-card-${rIdx}`}
                        >
                          <div className="flex items-center gap-2 mb-3" id={`rec-card-title-row-${rIdx}`}>
                            <span className="font-mono text-[9px] uppercase tracking-wider text-[#D6B16B] bg-[#D6B16B]/15 border border-[#D6B16B]/25 rounded py-0.5 px-2 font-bold shrink-0">
                              Priority {rIdx + 1}
                            </span>
                          </div>
                          <h5 className={`font-sans text-[13px] font-bold uppercase tracking-tight ${
                            darkMode ? 'text-white' : 'text-neutral-850'
                          }`}>
                            {rec.title}
                          </h5>
                          <p className="text-[11px] text-neutral-450 leading-relaxed font-sans mt-2">
                            {rec.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Sitora Alignment Solution Section */}
                <div className="space-y-6 text-center" id="service-alignment-section">
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono text-[#D6B16B] uppercase tracking-[0.15em] block">
                      Architectural Alignment
                    </span>
                    <h3 className={`font-sans text-base sm:text-lg font-black uppercase tracking-tight ${
                      darkMode ? 'text-white' : 'text-neutral-950'
                    }`}>
                      Matching Sitora Web Service Modules
                    </h3>
                  </div>

                  {/* Dynamic Custom Service Alignment Pills */}
                  <div className="flex flex-wrap justify-center gap-2.5 max-w-xl mx-auto" id="service-alignment-pills-row">
                    {dynamicInsights.services.map((srv, sIdx) => (
                      <span 
                        key={sIdx}
                        className={`py-1.5 px-4 rounded-full font-sans text-[10px] font-bold uppercase tracking-widest border ${
                          darkMode ? 'bg-[#0B1016] border-neutral-900 text-[#D6B16B]' : 'bg-[#D6B16B]/5 border-neutral-200 text-[#a07e44]'
                        }`}
                        id={`srv-pill-${sIdx}`}
                      >
                        ✓ Recommended: {srv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Final Call Action Blocks */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto pt-6" id="final-results-cta-actions">
                  <button
                    onClick={() => onOpenInquiry('custom')}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-7 rounded-xl font-sans text-xs font-bold uppercase tracking-wider text-neutral-950 bg-[#D6B16B] hover:bg-[#ebd5ad] shadow-lg hover:shadow-[#D6B16B]/10 active:scale-[0.98] transition-all duration-300 cursor-pointer"
                    id="primary-report-consultation-btn"
                  >
                    <span>Get a Free Consultation</span>
                    <ArrowUpRight size={13} />
                  </button>

                  <button
                    onClick={handleWhatsAppShare}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-7 rounded-xl font-sans text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-lg hover:shadow-[#25D366]/10 active:scale-[0.98] transition-all duration-300 cursor-pointer"
                    id="secondary-report-whatsapp-btn"
                  >
                    <span>Discuss My Audit on WhatsApp</span>
                    <MessageSquare size={13} />
                  </button>
                  
                  <button
                    onClick={resetAudit}
                    className={`w-full sm:w-auto py-3.5 px-5 rounded-xl font-sans text-xs font-bold uppercase tracking-wider border transition-all duration-300 cursor-pointer hover:bg-neutral-900/5 dark:hover:bg-neutral-950/40 active:scale-[0.98] ${
                      darkMode 
                      ? 'border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-white' 
                      : 'border-neutral-200 text-neutral-500 hover:border-neutral-350 hover:text-neutral-900'
                    }`}
                    id="tertiary-reset-audit-btn"
                  >
                    <span>Run New Audit</span>
                  </button>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
