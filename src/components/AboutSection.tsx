import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, HelpingHand, ShieldCheck, Milestone } from 'lucide-react';

interface AboutSectionProps {
  darkMode: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ darkMode }) => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" id="about">
      {/* Gentle horizontal separator line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-900 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="about-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" id="about-split-row">
          
          {/* Left Column Text Storytelling */}
          <div className="lg:col-span-6 space-y-6" id="about-storytell-left">
            <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-[0.25em] block">
              Core Genesis
            </span>
            <h2 className={`font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight ${
              darkMode ? 'text-[#F7F8FA]' : 'text-[#111827]'
            }`} id="about-story-headline">
              We build digital systems that bridge the gap between premium design & real business growth.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed" id="about-genesis-p1">
              Sitora Web started with a simple, direct mission: helping modern businesses establish a powerful, conversion-ready digital presence through elegant web structures and strategic digital campaigns.
            </p>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed" id="about-genesis-p2">
              Built deliberately to address the gap between low-quality generic templates and multi-million dollar creative agency prices, Sitora Web brings world-class digital design, high-end React/Next.js infrastructure, and robust server-side analytics tracking directly to growth-focused enterprises in Bangladesh and beyond.
            </p>

            <blockquote className="border-l-2 border-[#D6B16B] pl-4 italic text-xs text-neutral-300 font-serif leading-relaxed py-1" id="about-quote">
              "We focus deeply on transparent communication, delivering neat code architectures, and creating durable partner alliances that produce compounding value."
            </blockquote>
          </div>

          {/* Right Column Core Values list */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6" id="about-pillars-grid">
            
            {/* Pillar 1 */}
            <div className={`p-6 rounded-2xl border ${
              darkMode ? 'bg-[#0B1016]/50 border-[rgba(255,255,255,0.08)] shadow-xl' : 'bg-white border-[rgba(0,0,0,0.06)]'
            }`} id="pillar-card-01">
              <Sparkles className="text-[#D6B16B] mb-4" size={20} />
              <h4 className={`font-sans text-sm font-bold tracking-tight mb-2 ${
                darkMode ? 'text-[#F7F8FA]' : 'text-[#111827]'
              }`}>
                Aesthetic Nobility
              </h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed font-sans">
                Borrowing composition parameters from Framer, Apple, and Awwwards to deliver experiences that command authority instantly.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className={`p-6 rounded-2xl border ${
              darkMode ? 'bg-[#0B1016]/50 border-[rgba(255,255,255,0.08)]' : 'bg-white border-[rgba(0,0,0,0.06)]'
            }`} id="pillar-card-02">
              <Milestone className="text-emerald-500 mb-4" size={20} />
              <h4 className={`font-sans text-sm font-bold tracking-tight mb-2 ${
                darkMode ? 'text-[#F7F8FA]' : 'text-[#111827]'
              }`}>
                Performant Integrity
              </h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed font-sans">
                Every line of code is compiled to load instantly, preventing high traffic decay and converting ad spend with maximum effectiveness.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className={`p-6 rounded-2xl border ${
              darkMode ? 'bg-[#0B1016]/50 border-[rgba(255,255,255,0.08)]' : 'bg-white border-[rgba(0,0,0,0.06)]'
            }`} id="pillar-card-03">
              <ShieldCheck className="text-[#7ED4FF] mb-4" size={20} />
              <h4 className={`font-sans text-sm font-bold tracking-tight mb-2 ${
                darkMode ? 'text-[#F7F8FA]' : 'text-[#111827]'
              }`}>
                Accurate Attributions
              </h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed font-sans">
                Bypassing iOS privacy restrictions using modern Meta Conversions API (CAPI) servers, guaranteeing perfect marketing metrics.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className={`p-6 rounded-2xl border ${
              darkMode ? 'bg-[#0B1016]/50 border-[rgba(255,255,255,0.08)]' : 'bg-white border-[rgba(0,0,0,0.06)]'
            }`} id="pillar-card-04">
              <HelpingHand className="text-violet-400 mb-4" size={20} />
              <h4 className={`font-sans text-sm font-bold tracking-tight mb-2 ${
                darkMode ? 'text-[#F7F8FA]' : 'text-[#111827]'
              }`}>
                Long-Term Loyalty
              </h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed font-sans">
                We do not abandon our clients after launch. We nurture campaigns, run monthly updates, and consult with transparency regularly.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
