import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, HelpCircle, Flame } from 'lucide-react';
import { PRICING_DATA } from '../data';

interface PricingSectionProps {
  onOpenInquiry: (planName: string) => void;
  darkMode: boolean;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenInquiry, darkMode }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-24 sm:py-32 relative" id="pricing">
      {/* Subtle division */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-900 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="pricing-container">
        
        {/* Header Column */}
        <div className="text-center mb-16 sm:mb-24 flex flex-col items-center" id="pricing-header">
          <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-[0.25em] block mb-3">
            Financial Transparency
          </span>
          <h2 className={`font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-2xl ${
            darkMode ? 'text-[#F7F8FA]' : 'text-[#111827]'
          }`} id="pricing-title">
            Simple, honest pricing. Engineered for extreme return-on-investment.
          </h2>
          <p className="mt-4 max-w-lg text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans" id="pricing-subtitle">
            Apple-inspired premium tiers. No surprise licensing overheads. No lock-ins. Every asset is completely handed over upon launch.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch" id="pricing-grid">
          {PRICING_DATA.map((plan) => {
            const isRecommended = plan.isRecommended;
            const isHovered = hoveredCard === plan.id;

            return (
              <motion.div
                key={plan.id}
                onMouseEnter={() => setHoveredCard(plan.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => onOpenInquiry(plan.name)}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between border transition-all duration-500 overflow-hidden lg:col-span-1 min-h-[460px] cursor-pointer hover:scale-[1.015] ${
                  isRecommended 
                    ? darkMode
                      ? 'border-[#D6B16B] bg-[#D6B16B]/[0.05] ring-1 ring-[#D6B16B]/30 shadow-2xl lg:scale-[1.03] lg:-translate-y-2'
                      : 'border-[#B88A44] bg-[#B88A44]/5 shadow-2xl lg:scale-[1.03] lg:-translate-y-2'
                    : darkMode
                    ? 'border-[rgba(255,255,255,0.08)] bg-[#0B1016]/45 hover:border-[#D6B16B]/35'
                    : 'border-[rgba(0,0,0,0.06)] bg-white hover:border-[#B88A44]'
                }`}
                id={`pricing-card-${plan.id}`}
              >
                {/* Accent highlights */}
                {isRecommended && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D6B16B] text-neutral-950 text-[9px] font-bold uppercase tracking-widest leading-none shadow-lg" id="recommended-badge">
                    <Flame size={10} className="fill-current animate-pulse" />
                    <span>POPULAR CHANNELS</span>
                  </div>
                )}

                {/* Top Section metadata */}
                <div id={`pricing-top-${plan.id}`}>
                  {/* Name */}
                  <h3 className={`font-sans text-xs sm:text-sm font-bold tracking-tight uppercase ${
                    darkMode ? 'text-white' : 'text-neutral-950'
                  }`} id={`plan-name-${plan.id}`}>
                    {plan.name}
                  </h3>

                  {/* Pricing line */}
                  <div className="mt-4 flex items-baseline gap-1" id={`plan-price-block-${plan.id}`}>
                    <span 
                      className={`font-sans text-2xl sm:text-3.5xl font-extrabold tracking-tight ${
                        darkMode ? 'text-white' : 'text-neutral-950'
                      }`}
                      id={`plan-price-value-${plan.id}`}
                    >
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="text-[10px] text-neutral-500 font-mono" id={`plan-price-period-${plan.id}`}>
                        / {plan.period}
                      </span>
                    )}
                  </div>

                  {/* Short Description */}
                  <p className="text-[11px] text-neutral-450 leading-relaxed font-sans mt-3 border-b border-neutral-900/10 dark:border-neutral-900 pb-4" id={`plan-desc-${plan.id}`}>
                    {plan.description}
                  </p>

                  {/* Delivery Timeline info */}
                  <div className="py-3 flex items-center gap-1.5 text-[10px] tracking-wide font-mono text-neutral-500 border-b border-neutral-900/10 dark:border-neutral-900/50" id={`plan-timeline-${plan.id}`}>
                    <span>EST. DISPATCH:</span>
                    <span className="text-neutral-300 font-semibold uppercase">{plan.deliveryTime}</span>
                  </div>

                  {/* Features list */}
                  <div className="mt-5 space-y-2.5" id={`plan-features-${plan.id}`}>
                    <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-widest block">Core blueprints</span>
                    {plan.features.slice(0, 6).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-[10.5px]" id={`plan-feat-${plan.id}-${fIdx}`}>
                        <Check 
                          size={11} 
                          className={`mt-0.5 shrink-0 ${
                            feat.included 
                              ? 'text-[#D6B16B]' 
                              : 'text-neutral-700 dark:text-neutral-800'
                          }`} 
                        />
                        <span className={`leading-tight ${
                          feat.included 
                            ? darkMode ? 'text-neutral-300' : 'text-neutral-700' 
                            : 'text-neutral-550 dark:text-neutral-700 line-through'
                        }`}>
                          {feat.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer and CTA Actions */}
                <div className="mt-8 pt-4 border-t border-neutral-900/10 dark:border-neutral-900" id={`pricing-bottom-${plan.id}`}>
                  <button
                    onClick={() => onOpenInquiry(plan.name)}
                    className={`w-full flex items-center justify-center gap-1.5 py-3.5 px-4 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      isRecommended
                        ? 'bg-[#D6B16B] text-neutral-950 font-bold hover:bg-[#D6B16B]/85 shadow-[0_0_20px_rgba(214,177,107,0.25)]'
                        : darkMode
                        ? 'bg-neutral-950 border border-neutral-800 text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900'
                        : 'bg-[#D6B16B] text-neutral-950 hover:bg-[#D6B16B]/85'
                    }`}
                    id={`plan-cta-button-${plan.id}`}
                  >
                    <span>Request Blueprint</span>
                    <ArrowRight size={12} />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
