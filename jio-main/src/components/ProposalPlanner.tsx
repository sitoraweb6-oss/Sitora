import React, { useState, useMemo } from 'react';
import { Check, ArrowUpRight } from 'lucide-react';

interface ProposalPlannerProps {
  darkMode: boolean;
  showTitle?: boolean;
}

export const ProposalPlanner: React.FC<ProposalPlannerProps> = ({ 
  darkMode, 
  showTitle = true 
}) => {
  // Interactive proposal planner states
  const [plannerPages, setPlannerPages] = useState<number>(3);
  const [hasEcommerce, setHasEcommerce] = useState<boolean>(false);
  const [hasMetaPixel, setHasMetaPixel] = useState<boolean>(true);
  const [hasGA4, setHasGA4] = useState<boolean>(true);
  const [hasPerformance, setHasPerformance] = useState<boolean>(true);
  const [hasMonthlySupport, setHasMonthlySupport] = useState<boolean>(false);

  // Pricing formula business logic
const calculatedDraftTotal = useMemo(() => {
  let base = 99; // Base Price for 1 Custom High-Performance page ($99)

  if (plannerPages > 1) {
    base += (plannerPages - 1) * 99; // $99 per additional page
  }

  if (hasEcommerce) base += 350;       // $350 WooCommerce Integration
  if (hasMetaPixel) base += 100;        // $100 Meta Pixel & CAPI
  if (hasGA4) base += 50;              // $50 Google Analytics 4 Setup
  if (hasPerformance) base += 80;      // $80 Velocity Optimizer
  if (hasMonthlySupport) base += 180;  // $180 1-Month Marketing Support

  return base;
}, [
  plannerPages,
  hasEcommerce,
  hasMetaPixel,
  hasGA4,
  hasPerformance,
  hasMonthlySupport,
]);

  const handleLaunchProposalWhatsApp = () => {
    const lines = [
      `SITORA WEB PROPOSAL SPECIFICATIONS:`,
      `- Custom Pages: ${plannerPages}`,
      `- WooCommerce Checkout Integration: ${hasEcommerce ? 'YES (+$350)' : 'NO'}`,
      `- Meta Pixel & Conversions API (CAPI): ${hasMetaPixel ? 'YES (+$80)' : 'NO'}`,
      `- GA4 Tracking Stream: ${hasGA4 ? 'YES (+$50)' : 'NO'}`,
      `- Extreme Velocity Engine Compression: ${hasPerformance ? 'YES (+$80)' : 'NO'}`,
      `- 1-Month Marketing Assistance & Support: ${hasMonthlySupport ? 'YES (+$180)' : 'NO'}`,
      `💰 ESTIMATED QUOTE DRAFT: $${calculatedDraftTotal.toLocaleString()} USD`,
    ];
    const textMsg = `Hi Sitora Web, I configured a custom website proposal using your Interactive Proposal Planner:\n\n${lines.join('\n')}\n\nLet's connect this build!`;
    window.open(`https://wa.me/8801629586290?text=${encodeURIComponent(textMsg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-4xl mx-auto" id="interactive-pricing-planner-content">
      {showTitle && (
        <div className="text-center max-w-2xl mx-auto mb-12" id="planner-header">
          <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-[0.25em] block mb-3 font-semibold">
            Live Blueprint Sync Tool
          </span>
          <h2 className={`font-sans text-xl sm:text-3.5xl font-black tracking-tight leading-[1.2] sm:leading-none uppercase ${
            darkMode ? 'text-white' : 'text-[#111827]'
          }`}>
            Interactive Proposal Planner
          </h2>
          <p className="mt-2 text-xs text-neutral-455 font-sans leading-relaxed">
            Configure your digital parameters in real-time. Calculate instant transparent estimates matching Bengali enterprise standards, then sychronise your requirements natively with our engineering pipeline.
          </p>
        </div>
      )}

      <div className={`p-8 sm:p-10 rounded-2xl border transition-all duration-300 ${
        darkMode ? 'bg-[#0B1016]/80 border-neutral-900 shadow-2xl' : 'bg-white border-neutral-200 shadow-xl'
      }`} id="planner-main-container">
        <div className="space-y-8">
          
          {/* Pages Layout Parameter */}
          <div className="space-y-4" id="planner-param-pages">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A7B0BD] font-bold">
                SYSTEM LAYOUT CAPACITY
              </span>
              <span className="text-xs font-mono font-bold text-[#D6B16B] bg-[#D6B16B]/10 px-3 py-1 rounded border border-[#D6B16B]/20">
                {plannerPages} {plannerPages === 1 ? 'Page' : 'Pages'}
              </span>
            </div>
            
            <div className="py-2">
              <input
                type="range"
                min="1"
                max="15"
                step="1"
                value={plannerPages}
                onChange={(e) => setPlannerPages(parseInt(e.target.value))}
                aria-label="System layout capacity (number of pages)"
                className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#D6B16B] focus:outline-none focus:ring-2 focus:ring-[#D6B16B] focus:ring-offset-2 focus:ring-offset-neutral-950"
              />
              <div className="flex justify-between text-[9px] font-mono text-neutral-500 uppercase mt-2">
                <span>01 PAGE BASE ($99)</span>
                <span>15 PAGES MAX</span>
              </div>
            </div>
          </div>

          {/* Gold divider */}
          <div className="border-t border-neutral-900/40 dark:border-neutral-900" />

          {/* Scope parameters options column checkboxes */}
          <div className="space-y-4" id="planner-toggle-options">
            <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-[0.2em] block font-bold">
              INTEGRATIONS &amp; FUNCTIONAL MODULES
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* eCommerce (WooCommerce) */}
              <div 
                onClick={() => setHasEcommerce(!hasEcommerce)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setHasEcommerce(!hasEcommerce);
                  }
                }}
                role="checkbox"
                aria-checked={hasEcommerce}
                tabIndex={0}
                aria-label="WooCommerce Checkout Integration (+$350 USD)"
                className={`p-4 rounded-xl border transition-all duration-300 flex justify-between items-center gap-4 cursor-pointer outline-none focus:ring-2 focus:ring-[#D6B16B] ${
                  hasEcommerce 
                    ? 'border-[#D6B16B] bg-[#D6B16B]/5' 
                    : darkMode 
                    ? 'border-neutral-900 bg-neutral-950/40 hover:border-neutral-800'
                    : 'border-neutral-200 bg-neutral-50/50 hover:border-neutral-300'
                }`}
              >
                <div className="text-left">
                  <span className={`text-xs font-bold block ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                    WooCommerce Checkout Integration
                  </span>
                  <p className="text-[10px] text-neutral-450 mt-0.5">
                    Merchant checkout gate, product listing sync (+$350)
                  </p>
                </div>
                <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                  hasEcommerce ? 'bg-[#D6B16B] border-[#D6B16B] text-neutral-950' : darkMode ? 'border-neutral-700 bg-transparent' : 'border-neutral-300 bg-transparent'
                }`}>
                  {hasEcommerce && <Check size={10} strokeWidth={3} />}
                </div>
              </div>

              {/* Meta Conversions API (CAPI) */}
              <div 
                onClick={() => setHasMetaPixel(!hasMetaPixel)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setHasMetaPixel(!hasMetaPixel);
                  }
                }}
                role="checkbox"
                aria-checked={hasMetaPixel}
                tabIndex={0}
                aria-label="Meta Pixel &amp; Conversions API (+$80 USD)"
                className={`p-4 rounded-xl border transition-all duration-300 flex justify-between items-center gap-4 cursor-pointer outline-none focus:ring-2 focus:ring-[#D6B16B] ${
                  hasMetaPixel 
                    ? 'border-[#D6B16B] bg-[#D6B16B]/5' 
                    : darkMode 
                    ? 'border-neutral-900 bg-neutral-950/40 hover:border-neutral-800'
                    : 'border-neutral-200 bg-neutral-50/50 hover:border-neutral-300'
                }`}
              >
                <div className="text-left">
                  <span className={`text-xs font-bold block ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                    Meta Pixel &amp; Conversions API
                  </span>
                  <p className="text-[10px] text-neutral-450 mt-0.5">
                    Track customer events, bypass iOS blockages (+$100)
                  </p>
                </div>
                <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                  hasMetaPixel ? 'bg-[#D6B16B] border-[#D6B16B] text-neutral-950' : darkMode ? 'border-neutral-700 bg-transparent' : 'border-neutral-300 bg-transparent'
                }`}>
                  {hasMetaPixel && <Check size={10} strokeWidth={3} />}
                </div>
              </div>

              {/* Google Analytics 4 (GA4) */}
              <div 
                onClick={() => setHasGA4(!hasGA4)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setHasGA4(!hasGA4);
                  }
                }}
                role="checkbox"
                aria-checked={hasGA4}
                tabIndex={0}
                aria-label="Google Analytics 4 setup (+$50 USD)"
                className={`p-4 rounded-xl border transition-all duration-300 flex justify-between items-center gap-4 cursor-pointer outline-none focus:ring-2 focus:ring-[#D6B16B] ${
                  hasGA4 
                    ? 'border-[#D6B16B] bg-[#D6B16B]/5' 
                    : darkMode 
                    ? 'border-neutral-900 bg-neutral-950/40 hover:border-neutral-800'
                    : 'border-neutral-200 bg-neutral-50/50 hover:border-neutral-300'
                }`}
              >
                <div className="text-left">
                  <span className={`text-xs font-bold block ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                    Google Analytics 4 setup
                  </span>
                  <p className="text-[10px] text-neutral-450 mt-0.5">
                    Custom user tracking streams, behaviors (+$50)
                  </p>
                </div>
                <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                  hasGA4 ? 'bg-[#D6B16B] border-[#D6B16B] text-neutral-950' : darkMode ? 'border-neutral-700 bg-transparent' : 'border-neutral-300 bg-transparent'
                }`}>
                  {hasGA4 && <Check size={10} strokeWidth={3} />}
                </div>
              </div>

              {/* High Speed Performance compression */}
              <div 
                onClick={() => setHasPerformance(!hasPerformance)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setHasPerformance(!hasPerformance);
                  }
                }}
                role="checkbox"
                aria-checked={hasPerformance}
                tabIndex={0}
                aria-label="Velocity Optimizer (+$99 USD)"
                className={`p-4 rounded-xl border transition-all duration-300 flex justify-between items-center gap-4 cursor-pointer outline-none focus:ring-2 focus:ring-[#D6B16B] ${
                  hasPerformance 
                    ? 'border-[#D6B16B] bg-[#D6B16B]/5' 
                    : darkMode 
                    ? 'border-neutral-900 bg-neutral-950/40 hover:border-neutral-800'
                    : 'border-neutral-200 bg-neutral-50/50 hover:border-neutral-300'
                }`}
              >
                <div className="text-left">
                  <span className={`text-xs font-bold block ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                    Velocity Optimizer
                  </span>
                  <p className="text-[10px] text-neutral-450 mt-0.5">
                    Extreme file compression for 95+ Mobile Score (+$80)
                  </p>
                </div>
                <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                  hasPerformance ? 'bg-[#D6B16B] border-[#D6B16B] text-neutral-950' : darkMode ? 'border-neutral-700 bg-transparent' : 'border-neutral-300 bg-transparent'
                }`}>
                  {hasPerformance && <Check size={10} strokeWidth={3} />}
                </div>
              </div>

              {/* Support retainer - full width */}
              <div 
                onClick={() => setHasMonthlySupport(!hasMonthlySupport)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setHasMonthlySupport(!hasMonthlySupport);
                  }
                }}
                role="checkbox"
                aria-checked={hasMonthlySupport}
                tabIndex={0}
                aria-label="1-Month Direct Sitora Retainer Pack (+$180 USD)"
                className={`p-4 rounded-xl border transition-all duration-300 col-span-1 md:col-span-2 flex justify-between items-center gap-4 cursor-pointer outline-none focus:ring-2 focus:ring-[#D6B16B] ${
                  hasMonthlySupport 
                    ? 'border-[#D6B16B] bg-[#D6B16B]/5' 
                    : darkMode 
                    ? 'border-neutral-900 bg-neutral-950/40 hover:border-neutral-800'
                    : 'border-neutral-200 bg-neutral-50/50 hover:border-neutral-300'
                }`}
              >
                <div className="text-left">
                  <span className={`text-xs font-bold block ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                    1-Month Direct Sitora Retainer Pack
                  </span>
                  <p className="text-[10px] text-neutral-450 mt-0.5">
                    Active performance diagnostics, server logs analysis, minor design adjustments (+$180)
                  </p>
                </div>
                <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                  hasMonthlySupport ? 'bg-[#D6B16B] border-[#D6B16B] text-neutral-950' : darkMode ? 'border-neutral-700 bg-transparent' : 'border-neutral-300 bg-transparent'
                }`}>
                  {hasMonthlySupport && <Check size={10} strokeWidth={3} />}
                </div>
              </div>
            </div>
          </div>

          {/* Total Calculation Display */}
          <div className="mt-8 pt-8 border-t border-neutral-900/40 dark:border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-6" id="planner-total-row">
            <div className="text-center md:text-left">
              <span className="text-[10px] font-mono text-neutral-450 uppercase block tracking-wider mb-1">
                TOTAL INVESTMENT ESTIMATED RANGE
              </span>
              <div className="flex items-baseline justify-center md:justify-start gap-1.5">
                <span className="font-sans text-3xl sm:text-4xl font-extrabold text-[#D6B16B] tracking-tight animate-fade-in">
                  ${calculatedDraftTotal.toLocaleString()}
                </span>
                <span className="font-mono text-xs text-neutral-450">USD</span>
              </div>
            </div>

            <button
              onClick={handleLaunchProposalWhatsApp}
              className="w-full md:w-auto flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-sans text-xs font-bold uppercase tracking-wider text-neutral-950 bg-[#D6B16B] hover:bg-[#ebd5ad] shadow-lg hover:shadow-[#D6B16B]/15 active:scale-95 transition-all duration-300 cursor-pointer"
              id="proposal-sync-whatsapp-cta"
            >
              <span>Sync Proposal on WhatsApp</span>
              <ArrowUpRight size={13} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
