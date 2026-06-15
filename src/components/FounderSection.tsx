import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { Award, Zap, Compass, CheckCircle } from 'lucide-react';

interface FounderSectionProps {
  darkMode: boolean;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ darkMode }) => {
  const { t } = useLanguage();

  const badges = [
    { key: 'Web Strategy', icon: <Compass size={14} className="text-[#D6B16B]" /> },
    { key: 'Growth Systems', icon: <Zap size={14} className="text-[#FF8A00]" /> },
    { key: 'Conversion Experience', icon: <Award size={14} className="text-emerald-400" /> },
    { key: 'Analytics & Tracking', icon: <CheckCircle size={14} className="text-[#7ED4FF]" /> },
  ];

  return (
    <section 
      className="py-24 sm:py-32 relative overflow-hidden" 
      id="founder"
    >
      {/* Separator line top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-900/40 dark:via-neutral-800/40 to-transparent" />

      {/* Elegant behind glow */}
      <div className="absolute right-0 top-1/4 w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(214,177,107,0.035)_0%,rgba(0,0,0,0)_65%)] pointer-events-none" />
      <div className="absolute left-[-100px] bottom-1/4 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,138,0,0.015)_0%,rgba(0,0,0,0)_60%)] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="founder-container">
        
        {/* Header Block */}
        <div className="text-center mb-16 sm:mb-20 flex flex-col items-center" id="founder-header">
          <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-[0.25em] block mb-3">
            {t('THE MIND BEHIND SITORA')}
          </span>
          <h2 className={`font-sans text-3xl sm:text-4xl font-black tracking-tight ${
            darkMode ? 'text-white' : 'text-neutral-950'
          }`} id="founder-title">
            {t('Built with strategy, not templates.')}
          </h2>
          <p className="mt-3 max-w-2xl text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed" id="founder-subtitle">
            {t('Sitora was founded with a simple belief: businesses deserve digital experiences engineered for measurable growth, not generic solutions assembled from shortcuts.')}
          </p>
        </div>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center" id="founder-grid">
          
          {/* L: Founder Portrait with Premium Frame and glows */}
          <div className="lg:col-span-5 flex justify-center" id="founder-img-col">
            <div className="relative group w-full max-w-[360px] sm:max-w-[380px]" id="founder-portrait-frame">
              
              {/* Opulent outer ambient blur shadows */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D6B16B] to-[#FF8A00] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none" />
              
              {/* Subtle architectural card grid layout overlay */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-[#D6B16B]/60 pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-[#FF8A00]/40 pointer-events-none" />

              {/* Portrait Container with deep borders */}
              <div className={`relative overflow-hidden rounded-2xl border ${
                darkMode ? 'bg-neutral-950 border-neutral-900' : 'bg-white border-neutral-200'
              } p-2.5 shadow-2xl`} id="portrait-shadow-box">
                
                {/* Real-time status watermark tag */}
                <div className="absolute top-5 right-5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-950/80 border border-white/10 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D6B16B] animate-pulse" />
                  <span className="text-[8px] font-mono font-bold tracking-widest text-[#D6B16B] uppercase">STRATEGIST</span>
                </div>

                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&h=800&q=80"
                  alt="Sayed Ahmad - Sitora Founder"
                  referrerPolicy="no-referrer"
                  width={600}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[3/4] object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-[1.01]"
                  id="founder-official-img"
                />
              </div>

              {/* Bottom tag identifier decoration line */}
              <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-[85%] h-[3px] bg-gradient-to-r from-transparent via-[#D6B16B]/50 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* R: Premium Founder story, quotes and certifications */}
          <div className="lg:col-span-7 space-y-7 text-left" id="founder-details-col">
            
            {/* Business Card Heading details */}
            <div id="founder-introducing-titles">
              <h3 className={`font-sans text-2xl sm:text-3xl font-black tracking-tight ${
                darkMode ? 'text-white' : 'text-neutral-950'
              }`} id="founder-lead-name">
                {t('Sayed Ahmad')}
              </h3>
              <p className="text-[11px] sm:text-xs font-mono font-bold text-[#D6B16B] uppercase tracking-widest mt-1.5">
                {t('Founder & Digital Growth Strategist')}
              </p>
            </div>

            {/* Main story narration paragraphs */}
            <div className={`space-y-4 font-sans text-xs sm:text-sm leading-relaxed ${
              darkMode ? 'text-neutral-400' : 'text-neutral-600'
            }`} id="founder-narrative-copy">
              <p>
                {t('I started Sitora to bridge the gap between beautiful design and business performance.')}
              </p>
              <p>
                {t('Too many businesses invest in websites and marketing systems that look impressive but fail to generate meaningful results.')}
              </p>
              <p>
                {t('Sitora exists to build digital ecosystems that combine aesthetics, speed, conversion psychology, and measurable growth. Every project is approached with long-term partnership in mind, ensuring that each client receives thoughtful execution rather than one-size-fits-all solutions.')}
              </p>
            </div>

            {/* Highlighted elegant luxury quote block */}
            <blockquote className="border-l-2 border-[#D6B16B] pl-4 italic text-neutral-300 font-serif text-sm leading-relaxed py-1" id="founder-highlighted-quote">
              <p className="text-[#E5E7EB]">
                {t('"Technology should never exist just to impress people. It should create clarity, trust, and opportunities for businesses to grow."')}
              </p>
            </blockquote>

            {/* Premium expertise tags of Sitora */}
            <div className="space-y-3.5" id="founder-expertise-block">
              <span className={`text-[10px] uppercase tracking-wider font-mono font-bold ${
                darkMode ? 'text-[#D6B16B]/85' : 'text-neutral-500'
              }`}>
                Core Competencies
              </span>
              <div className="flex flex-wrap gap-2.5" id="founder-badges-row">
                {badges.map((badge, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider ${
                      darkMode 
                        ? 'border-neutral-900 bg-neutral-950/40 text-neutral-300' 
                        : 'border-neutral-200 bg-neutral-50/50 text-neutral-700'
                    }`}
                    id={`founder-badge-${idx}`}
                  >
                    {badge.icon}
                    <span>{t(badge.key)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro commitment/trust tagline footer elements */}
            <div className="flex items-center gap-3 pt-2 text-[11px] text-neutral-400 font-sans border-t border-neutral-900/35 dark:border-neutral-800/35" id="founder-partnership-footer">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D6B16B] shrink-0" />
              <p className="leading-snug">
                {t('Focused on building meaningful partnerships with businesses that value quality, transparency, and sustainable growth.')}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
