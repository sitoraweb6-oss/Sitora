import React from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { CASE_STUDIES_DATA } from '../../data/caseStudiesData';
import { useLanguage } from '../../LanguageContext';

interface FeaturedCaseStudyPreviewProps {
  darkMode: boolean;
  onNavigate: (view: any, id?: string) => void;
}

export const FeaturedCaseStudyPreview: React.FC<FeaturedCaseStudyPreviewProps> = ({ darkMode, onNavigate }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { language } = useLanguage();
  const isBn = language === 'bn';
  const caseStudy = CASE_STUDIES_DATA[0];

  const handleViewCaseStudy = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('case-study', caseStudy.slug);
  };

  return (
    <section className="py-24 border-y border-[rgba(255,255,255,0.05)] relative overflow-hidden bg-[#020408]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[#D6B16B] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`rounded-3xl border overflow-hidden flex flex-col-reverse lg:flex-row ${
            darkMode ? 'border-[rgba(255,255,255,0.08)] bg-[#0A0F16]' : 'border-neutral-200 bg-white shadow-xl'
          }`}
        >
          {/* Content Side */}
          <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
            <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-[0.25em] block mb-4">
              FEATURED CONCEPT
            </span>
            
            <h3 className={`text-3xl md:text-4xl font-extrabold mb-2 tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
              {caseStudy.slug === 'north-shore-roofing' ? 'North Shore Roofing' : caseStudy.title}
            </h3>
            
            <p className={`text-lg font-medium mb-6 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
              A Website Redesign Concept for a Modern Roofing Business
            </p>
            
            <p className={`text-sm leading-relaxed mb-10 max-w-md ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              A self-initiated redesign exploring how a traditional roofing website could evolve into a clearer, more engaging and conversion-focused digital experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button
                onClick={handleViewCaseStudy}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold bg-[#D6B16B] text-neutral-900 hover:bg-opacity-90 transition-all duration-300 shadow-[0_0_15px_rgba(214,177,107,0.2)] w-full sm:w-auto"
              >
                VIEW FULL CASE STUDY →
              </button>
              <a
                href="https://north-shore.sitora.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold border transition-all duration-300 w-full sm:w-auto ${
                  darkMode 
                    ? 'border-neutral-700 hover:border-neutral-500 text-white' 
                    : 'border-neutral-300 hover:border-neutral-500 text-neutral-900'
                }`}
              >
                EXPLORE LIVE WEBSITE →
              </a>
            </div>
          </div>
          
          {/* Media Side */}
          <div className="w-full lg:w-1/2 relative bg-[#101722] flex flex-col justify-center">
            <div className="relative w-full aspect-video min-h-[250px] lg:min-h-full lg:aspect-auto">
              <iframe
                src="https://www.youtube.com/embed/24rzDcQXptU?rel=0"
                title="North Shore Roofing website redesign walkthrough by Sitora Web"
                className="absolute top-0 left-0 w-full h-full object-cover"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            {/* Optional Small original -> redesigned visual treatment hint */}
            <div className="absolute top-6 right-6 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 flex items-center gap-2 shadow-xl pointer-events-none">
              <div className="w-2 h-2 rounded-full bg-[#D6B16B] animate-pulse"></div>
              <span className="text-[10px] font-bold text-white tracking-widest uppercase">Project Walkthrough</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
