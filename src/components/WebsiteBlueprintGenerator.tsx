import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  ArrowUpRight, 
  ArrowRight,
  Sparkles, 
  HelpCircle, 
  Layers, 
  DollarSign, 
  Sliders, 
  Zap, 
  Clock, 
  ShieldCheck, 
  Smartphone,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface WebsiteBlueprintGeneratorProps {
  darkMode: boolean;
  onOpenInquiry: (type: string) => void;
}

type BusinessType = 'business' | 'ecommerce' | 'educational' | 'healthcare' | 'islamic' | 'agency' | 'portfolio';
type BudgetRange = '10-20' | '20-40' | '40plus';
type PriorityType = 'fast' | 'premium' | 'conversion' | 'budget';

interface FeatureOption {
  id: string;
  label: string;
  cost: number;
}

const BUSINESS_KEYS: Record<BusinessType, { name: string; label: string; defaultPages: number; explanation: string }> = {
  business: { 
    name: 'Conversion-Focused Business Website', 
    label: 'Business Website', 
    defaultPages: 6,
    explanation: 'A robust corporate showcase engineered to build instant market credibility, describe B2B capabilities, and nurture inbound customer inquiry pipelines.'
  },
  ecommerce: { 
    name: 'High-Velocity Multi-Vendor Storefront', 
    label: 'E-Commerce', 
    defaultPages: 10,
    explanation: 'A fully integrated shopping ecosystem optimized for frictionless checkout operations, secure payment gateways, and highly precise ad-event tracking.'
  },
  educational: { 
    name: 'Unified Institutional Portal', 
    label: 'Educational', 
    defaultPages: 12,
    explanation: 'Comprehensive portal structured specifically for academic catalogs, resource hubs, admission registrations, and community notices.'
  },
  healthcare: { 
    name: 'Patient-First Healthcare Network', 
    label: 'Healthcare', 
    defaultPages: 7,
    explanation: 'Clinically clean, lightning-fast setup offering secure booking forms, dedicated specialist directories, and local SEO anchors.'
  },
  islamic: { 
    name: 'Respectful Sadaqah & Community Hub', 
    label: 'Islamic Organization', 
    defaultPages: 6,
    explanation: 'Dignified showcase designed to publish local lecture programs, live salah schedules, and capture secure donation campaigns.'
  },
  agency: { 
    name: 'High-Conversion Agency Funnel', 
    label: 'Agency', 
    defaultPages: 5,
    explanation: 'Designed specifically for creative freelancers or consulting firms looking to demonstrate authority via stunning case studies and automated intake.'
  },
  portfolio: { 
    name: 'High-Impact Editorial Portfolio', 
    label: 'Portfolio Website', 
    defaultPages: 4,
    explanation: 'A highly polished display maximizing creative impact for photographers, visual artists, or executive leaders.'
  }
};

const FEATURE_OPTIONS: FeatureOption[] = [
  { id: 'whatsapp', label: 'WhatsApp Integration', cost: 1500 },
  { id: 'seo', label: 'SEO Setup', cost: 2500 },
  { id: 'blog', label: 'Blog', cost: 3000 },
  { id: 'booking', label: 'Booking System', cost: 4000 },
  { id: 'pixel', label: 'Meta Pixel', cost: 3500 },
  { id: 'payment', label: 'Payment Gateway', cost: 5000 }
];

export const WebsiteBlueprintGenerator: React.FC<WebsiteBlueprintGeneratorProps> = ({ 
  darkMode, 
  onOpenInquiry 
}) => {
  // Steps state
  const [businessType, setBusinessType] = useState<BusinessType>('business');
  const [budgetRange, setBudgetRange] = useState<BudgetRange>('20-40');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['whatsapp', 'seo']);
  const [priority, setPriority] = useState<PriorityType>('conversion');

  // Interactive Feature selector (max 4 selections)
  const handleToggleFeature = (id: string) => {
    setSelectedFeatures(prev => {
      if (prev.includes(id)) {
        return prev.filter(f => f !== id);
      }
      if (prev.length >= 4) {
        return prev; // Enforce maximum 4 selections limit
      }
      return [...prev, id];
    });
  };

  // Live Blueprint calculations
  const blueprintResult = useMemo(() => {
    const busDetail = BUSINESS_KEYS[businessType];
    
    // Page calculations
    let pages = busDetail.defaultPages;
    if (budgetRange === '10-20') {
      pages = Math.max(3, Math.min(pages - 2, 5));
    } else if (budgetRange === '40plus') {
      pages = Math.max(pages + 3, 11);
    }

    if (priority === 'fast') {
      pages = Math.max(3, pages - 1);
    } else if (priority === 'premium') {
      pages = pages + 1;
    }

    // Cost calculations
    let baseCost = 25000;
    if (budgetRange === '10-20') {
      baseCost = 15000;
    } else if (budgetRange === '40plus') {
      baseCost = 45000;
    }

    // Add selected features cost
    const featuresCost = FEATURE_OPTIONS
      .filter(f => selectedFeatures.includes(f.id))
      .reduce((sum, f) => sum + f.cost, 0);

    let finalInvestment = baseCost + featuresCost;

    // Adjust based on priority
    if (priority === 'premium') {
      finalInvestment += 4000;
    } else if (priority === 'budget') {
      finalInvestment -= 3000;
    } else if (priority === 'conversion') {
      finalInvestment += 2000;
    }

    // Ensure within loose guardrails for credibility matching selected bracket
    if (budgetRange === '10-20' && finalInvestment > 20000) {
      finalInvestment = 19500;
    } else if (budgetRange === '10-20' && finalInvestment < 10000) {
      finalInvestment = 12000;
    } else if (budgetRange === '20-40') {
      finalInvestment = Math.max(22000, Math.min(finalInvestment, 39000));
    } else if (budgetRange === '40plus') {
      finalInvestment = Math.max(42000, finalInvestment);
    }

    // Timeline calculation (days)
    let daysMin = 6;
    let daysMax = 9;

    if (priority === 'fast') {
      daysMin = 4;
      daysMax = 6;
    } else if (priority === 'premium') {
      daysMin = 8;
      daysMax = 12;
    }

    // Add days for selected features
    const extraDays = Math.ceil(selectedFeatures.length / 2);
    daysMin += extraDays;
    daysMax += extraDays;

    // Build recommended services aligned with their business goals
    const services = ['Extreme Velocity Compression', 'Responsive Layout Quality Assurance'];
    if (selectedFeatures.includes('seo')) {
      services.push('Structured Schema Vocabulary');
    }
    if (selectedFeatures.includes('pixel')) {
      services.push('Meta CAPI Server Integration');
    }
    if (priority === 'conversion') {
      services.push('Cognitive UX Layout Optimizations');
    } else if (priority === 'premium') {
      services.push('Fine Typography Branding Setup');
    }

    return {
      title: busDetail.name,
      pages,
      investment: finalInvestment,
      daysMin,
      daysMax,
      services,
      explanation: busDetail.explanation
    };
  }, [businessType, budgetRange, selectedFeatures, priority]);

  const handleLaunchBlueprintWhatsApp = () => {
    const featuresText = selectedFeatures.length > 0 
      ? selectedFeatures.map(f => FEATURE_OPTIONS.find(opt => opt.id === f)?.label).join(', ')
      : 'Core recommended structure';

    const priorityLabel = priority === 'fast' ? 'Fast Delivery' 
      : priority === 'premium' ? 'Premium Design' 
      : priority === 'conversion' ? 'Maximum Conversion' 
      : 'Budget Friendly';

    const textMsg = `Hi Sitora Web, I designed a tailored Website Blueprint:\n\n` + 
      `🏛️ RECOMMENDED: ${blueprintResult.title}\n` +
      `📄 LAYOUT SIZE: ${blueprintResult.pages} Custom Pages\n` +
      `📦 ADDONS: ${featuresText}\n` +
      `🎯 PRIORITY: ${priorityLabel}\n` +
      `🕒 TIMELINE: ${blueprintResult.daysMin}-${blueprintResult.daysMax} Working Days\n` +
      `💰 ESTIMATED PRICE: ৳${blueprintResult.investment.toLocaleString()} BDT\n\n` +
      `Let's discuss this blueprint for our brand launch!`;

    window.open(`https://wa.me/8801629586290?text=${encodeURIComponent(textMsg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      className="py-24 sm:py-32 relative overflow-hidden border-t border-neutral-900/10 dark:border-neutral-900/50"
      id="website-blueprint-generator"
    >
      {/* Visual Ambient Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] dark:opacity-[0.08]" />
      
      {/* Soft Sitora color splashes */}
      <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-[450px] h-[450px] bg-[#D6B16B]/5 rounded-full filter blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="blueprint-container">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20" id="blueprint-generator-header">
          <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-[0.25em] block mb-3 font-semibold">
            Website Blueprint
          </span>
          <h2 className={`font-sans text-2xl sm:text-4.5xl font-black tracking-tight leading-[1.1] uppercase ${
            darkMode ? 'text-white' : 'text-[#111827]'
          }`}>
            Build Your Recommended Website Blueprint
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-450 font-sans leading-relaxed max-w-2xl mx-auto">
            Answer a few questions and discover the ideal website structure, features, timeline, and estimated investment for your business.
          </p>
        </div>

        {/* Master Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start" id="blueprint-interactive-grid">
          
          {/* Left Column: Questionnaire Interactive Area */}
          <div className="lg:col-span-7 space-y-8" id="blueprint-questions-panel">
            
            {/* Step 1: Business Category Selection */}
            <div className={`p-6 sm:p-8 rounded-[24px] border ${
              darkMode ? 'bg-neutral-950/40 border-neutral-900' : 'bg-white border-neutral-150 shadow-sm'
            }`} id="blueprint-step-1">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-6 w-6 rounded-full bg-[#D6B16B]/10 text-[#D6B16B] border border-[#D6B16B]/20 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  1
                </span>
                <span className="text-xs font-mono uppercase tracking-[0.15em] text-[#A7B0BD] font-bold">
                  Identify Your Business Frame
                </span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {Object.entries(BUSINESS_KEYS).map(([key, details]) => {
                  const isSelected = businessType === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setBusinessType(key as BusinessType)}
                      className={`py-3 px-4 rounded-xl text-left border transition-all duration-300 cursor-pointer outline-none ${
                        isSelected 
                          ? 'border-[#D6B16B] bg-[#D6B16B]/5 text-[#D6B16B]' 
                          : darkMode 
                          ? 'border-neutral-900 bg-neutral-950/60 hover:border-neutral-800 text-neutral-300' 
                          : 'border-neutral-200 bg-neutral-50/50 hover:border-neutral-300 text-neutral-700'
                      }`}
                      id={`btn-biz-${key}`}
                    >
                      <span className="block text-xs font-sans font-bold uppercase tracking-tight truncate">
                        {details.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Target Budget Frame */}
            <div className={`p-6 sm:p-8 rounded-[24px] border ${
              darkMode ? 'bg-neutral-950/40 border-neutral-900' : 'bg-white border-neutral-150 shadow-sm'
            }`} id="blueprint-step-2">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-6 w-6 rounded-full bg-[#D6B16B]/10 text-[#D6B16B] border border-[#D6B16B]/20 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  2
                </span>
                <span className="text-xs font-mono uppercase tracking-[0.15em] text-[#A7B0BD] font-bold">
                  Select Budget Range (BDT)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: '10-20', label: '৳10,000 – ৳20,000', tier: 'Standard Start' },
                  { id: '20-40', label: '৳20,000 – ৳40,000', tier: 'Enterprise Standard' },
                  { id: '40plus', label: '৳40,000+', tier: 'Premium Custom Scale' }
                ].map((item) => {
                  const isSelected = budgetRange === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setBudgetRange(item.id as BudgetRange)}
                      className={`p-4 rounded-xl border cursor-pointer select-none transition-all duration-300 text-left outline-none ${
                        isSelected 
                          ? 'border-[#D6B16B] bg-[#D6B16B]/5 shadow-[0_0_12px_rgba(214,177,107,0.06)]' 
                          : darkMode 
                          ? 'border-neutral-900 bg-neutral-950/60 hover:border-neutral-800' 
                          : 'border-neutral-200 bg-neutral-50/50 hover:border-neutral-300'
                      }`}
                      role="radio"
                      aria-checked={isSelected}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setBudgetRange(item.id as BudgetRange);
                        }
                      }}
                      id={`btn-budget-${item.id}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`h-3.5 w-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected ? 'border-[#D6B16B]' : 'border-neutral-700'
                        }`}>
                          {isSelected && <div className="h-1.5 w-1.5 bg-[#D6B16B] rounded-full" />}
                        </div>
                        <div>
                          <span className={`block text-xs font-sans font-bold ${
                            isSelected ? 'text-[#D6B16B]' : darkMode ? 'text-white' : 'text-neutral-900'
                          }`}>
                            {item.label}
                          </span>
                          <span className="block text-[9px] font-mono uppercase text-neutral-450 mt-0.5">
                            {item.tier}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Required Strategic Capabilities */}
            <div className={`p-6 sm:p-8 rounded-[24px] border ${
              darkMode ? 'bg-neutral-950/40 border-neutral-900' : 'bg-white border-neutral-150 shadow-sm'
            }`} id="blueprint-step-3">
              <div className="flex items-center justify-between gap-4 mb-2">
                <div className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-full bg-[#D6B16B]/10 text-[#D6B16B] border border-[#D6B16B]/20 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    3
                  </span>
                  <span className="text-xs font-mono uppercase tracking-[0.15em] text-[#A7B0BD] font-bold">
                    Select Required Features
                  </span>
                </div>
                <span className="text-[9px] font-mono text-[#D6B16B] uppercase tracking-wider bg-[#D6B16B]/10 border border-[#D6B16B]/20 px-2.5 py-1 rounded-md">
                  {selectedFeatures.length}/4 Selected
                </span>
              </div>
              <p className="text-[10px] text-neutral-450 leading-normal mb-5">
                Optimize your blueprint framework with advanced modules. Selective integrations expand your system potential.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {FEATURE_OPTIONS.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  const isMaxReached = selectedFeatures.length >= 4 && !isChecked;
                  return (
                    <button
                      key={feat.id}
                      onClick={() => handleToggleFeature(feat.id)}
                      disabled={isMaxReached}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between gap-2.5 transition-all duration-300 select-none outline-none ${
                        isChecked 
                          ? 'border-[#D6B16B] bg-[#D6B16B]/5 text-[#D6B16B]' 
                          : isMaxReached
                          ? 'border-neutral-900 bg-neutral-950/20 text-neutral-600 opacity-40 cursor-not-allowed'
                          : darkMode 
                          ? 'border-neutral-900 bg-neutral-950/60 hover:border-neutral-800 text-neutral-300' 
                          : 'border-neutral-200 bg-neutral-50/50 hover:border-neutral-300 text-neutral-700'
                      }`}
                      id={`btn-feature-${feat.id}`}
                    >
                      <span className="font-sans text-xs font-bold uppercase tracking-tight truncate">
                        {feat.label}
                      </span>
                      <div className={`h-4 w-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                        isChecked 
                          ? 'border-[#D6B16B] bg-[#D6B16B] text-neutral-950' 
                          : 'border-neutral-700'
                      }`}>
                        {isChecked && <Check size={11} strokeWidth={3} />}
                      </div>
                    </button>
                  );
                })}
              </div>
              {selectedFeatures.length >= 4 && (
                <div className="flex items-center gap-2 mt-4 text-[10px] text-[#A7B0BD] bg-neutral-900/40 p-2.5 rounded-lg border border-neutral-800 animate-fade-in">
                  <AlertCircle size={12} className="text-[#D6B16B]" />
                  <span>Maximum limit of 4 premium integrations reached. Upgrade to custom corporate frameworks to release restrictions.</span>
                </div>
              )}
            </div>

            {/* Step 4: Strategic Delivery Priority */}
            <div className={`p-6 sm:p-8 rounded-[24px] border ${
              darkMode ? 'bg-neutral-950/40 border-neutral-900' : 'bg-white border-neutral-150 shadow-sm'
            }`} id="blueprint-step-4">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-6 w-6 rounded-full bg-[#D6B16B]/10 text-[#D6B16B] border border-[#D6B16B]/20 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  4
                </span>
                <span className="text-xs font-mono uppercase tracking-[0.15em] text-[#A7B0BD] font-bold">
                  Choose Strategic Priority
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'fast', label: 'Fast Delivery', desc: 'Optimize timeline and deploy standard system layers rapidly.' },
                  { id: 'premium', label: 'Premium Design', desc: 'Prioritize bespoke vector animations and custom styles.' },
                  { id: 'conversion', label: 'Maximum Conversion', desc: 'Ensure precise user callout routing and funnel layout optimization.' },
                  { id: 'budget', label: 'Budget Friendly', desc: 'Keep systems streamlined focusing entirely on primary core deliverables.' }
                ].map((item) => {
                  const isSelected = priority === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setPriority(item.id as PriorityType)}
                      className={`p-4 rounded-xl border cursor-pointer select-none transition-all duration-300 text-left outline-none ${
                        isSelected 
                          ? 'border-[#D6B16B] bg-[#D6B16B]/5 shadow-[0_0_12px_rgba(214,177,107,0.06)]' 
                          : darkMode 
                          ? 'border-neutral-900 bg-neutral-950/60 hover:border-neutral-800' 
                          : 'border-neutral-200 bg-neutral-50/50 hover:border-neutral-300'
                      }`}
                      role="radio"
                      aria-checked={isSelected}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setPriority(item.id as PriorityType);
                        }
                      }}
                      id={`btn-priority-${item.id}`}
                    >
                      <span className={`block font-sans text-xs font-bold uppercase tracking-tight ${
                        isSelected ? 'text-[#D6B16B]' : darkMode ? 'text-white' : 'text-neutral-900'
                      }`}>
                        {item.label}
                      </span>
                      <p className="text-[10px] text-neutral-450 leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Recommendation Panel (Sticky in desktop viewport) */}
          <div className="lg:col-span-5 lg:sticky lg:top-8" id="blueprint-result-panel">
            <div className={`p-6 sm:p-8 rounded-[32px] border ${
              darkMode 
                ? 'bg-[#0B1016]/90 border-neutral-900 shadow-2xl' 
                : 'bg-white border-neutral-200 shadow-xl'
            }`} id="blueprint-live-result">
              
              <div className="flex items-center justify-between pb-4 border-b border-neutral-900/10 dark:border-neutral-900/50">
                <div>
                  <span className="text-[9px] font-mono text-[#D6B16B] uppercase tracking-[0.2em] block">
                    Your Sitora Blueprint
                  </span>
                  <h3 className={`font-sans text-sm sm:text-base font-bold uppercase tracking-tight leading-none mt-1 ${
                    darkMode ? 'text-neutral-200' : 'text-neutral-800'
                  }`}>
                    Tailored Proposal Core
                  </h3>
                </div>
                {/* Visual authenticity tag */}
                <span className="font-mono text-[9px] uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">
                  Live Sync
                </span>
              </div>

              {/* Dynamic Outcomes List */}
              <div className="py-6 space-y-6">
                
                {/* Recommended Blueprint System Title */}
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-[#D6B16B] uppercase tracking-wider block font-bold">
                    RECOMMENDED ARCHITECTURE
                  </span>
                  <h4 className={`text-base sm:text-lg font-black uppercase leading-tight font-sans ${
                    darkMode ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {blueprintResult.title}
                  </h4>
                  <p className="text-[10px] text-neutral-450 leading-relaxed mt-1">
                    {blueprintResult.explanation}
                  </p>
                </div>

                {/* Structured metrics grid */}
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-neutral-900/10 dark:border-neutral-900/50">
                  <div className="space-y-1.5">
                    <span className="text-[8px] font-mono text-neutral-450 uppercase tracking-widest block">
                      LAYOUT FRAME SIZE
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Layers className="text-[#D6B16B]" size={13} />
                      <span className={`text-xs font-bold font-sans ${
                        darkMode ? 'text-white' : 'text-neutral-900'
                      }`}>
                        {blueprintResult.pages} Custom Pages
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <span className="text-[8px] font-mono text-neutral-450 uppercase tracking-widest block">
                      SUGGESTED TIMELINE
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="text-[#7ED4FF]" size={13} />
                      <span className={`text-xs font-bold font-sans ${
                        darkMode ? 'text-white' : 'text-neutral-900'
                      }`}>
                        {blueprintResult.daysMin}–{blueprintResult.daysMax} Working Days
                      </span>
                    </div>
                  </div>
                </div>

                {/* Selected features included list */}
                <div className="space-y-2">
                  <span className="text-[9px] font-mono text-[#D6B16B] uppercase tracking-wider block font-bold">
                    INCLUDED FEATURES
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedFeatures.length === 0 ? (
                      <span className="text-[10px] text-neutral-450">No additional features selected. Core platform components will be deployed.</span>
                    ) : (
                      selectedFeatures.map((featId) => {
                        const opt = FEATURE_OPTIONS.find(o => o.id === featId);
                        return (
                          <span 
                            key={featId}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[9px] font-sans font-medium text-neutral-300 uppercase tracking-tight"
                          >
                            <Check size={10} className="text-[#D6B16B]" strokeWidth={3} />
                            <span>{opt?.label}</span>
                          </span>
                        );
                      })
                    )}
                  </div>
                </div>

                {/* Sitora Suggested engineering specialties */}
                <div className="space-y-2">
                  <span className="text-[9px] font-mono text-[#D6B16B] uppercase tracking-wider block font-bold">
                    RECOMMENDED WEB SERVICES
                  </span>
                  <div className="space-y-1.5">
                    {blueprintResult.services.map((srv, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[10px] text-neutral-400">
                        <span className="h-1 w-1 bg-[#D6B16B] rounded-full shrink-0" />
                        <span className="font-mono uppercase tracking-wide">{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Live Estimate Tracker */}
                <div className={`p-4 rounded-xl border ${
                  darkMode ? 'bg-neutral-950/60 border-neutral-900' : 'bg-neutral-50/50 border-neutral-200'
                }`} id="blueprint-estimated-investment">
                  <span className="text-[8px] font-mono text-neutral-450 uppercase tracking-widest block font-bold">
                    ESTIMATED SYSTEM INVESTMENT
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-sans text-xl sm:text-2xl font-black text-[#D6B16B] tracking-tight">
                      ৳{blueprintResult.investment.toLocaleString()}
                    </span>
                    <span className="font-mono text-[9px] text-neutral-450 uppercase font-semibold">
                      BDT TOTAL
                    </span>
                  </div>
                  <p className="text-[9px] text-neutral-450 leading-normal mt-1 flex items-center gap-1">
                    <ShieldCheck size={11} className="text-[#D6B16B]" />
                    <span>Calculated with transparent Bengali developer guidelines.</span>
                  </p>
                </div>

              </div>

              {/* Dynamic Call Actions */}
              <div className="space-y-2.5" id="blueprint-actions">
                <button
                  onClick={() => onOpenInquiry('custom')}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-sans text-xs font-bold uppercase tracking-wider text-neutral-950 bg-[#D6B16B] hover:bg-[#ebd5ad] shadow-lg hover:shadow-[#D6B16B]/10 active:scale-[0.98] transition-all duration-300 cursor-pointer"
                >
                  <span>Get a Free Consultation</span>
                  <CheckCircle2 size={13} />
                </button>
                <button
                  onClick={handleLaunchBlueprintWhatsApp}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-sans text-xs font-bold uppercase tracking-wider border transition-all duration-300 cursor-pointer hover:bg-emerald-500/5 active:scale-[0.98] ${
                    darkMode 
                    ? 'border-neutral-800 text-neutral-200 hover:border-emerald-500/50 hover:text-emerald-400' 
                    : 'border-neutral-200 text-neutral-700 hover:border-emerald-500/50 hover:text-emerald-600'
                  }`}
                >
                  <span>Discuss on WhatsApp</span>
                  <ArrowRight size={13} />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
