import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';
import { useLanguage } from '../LanguageContext';

interface TestimonialsSectionProps {
  darkMode: boolean;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ darkMode }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { language, t } = useLanguage();

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[activeIndex];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" id="testimonials">
      {/* Subtle division */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-900 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center" id="testimonials-container">
        
        {/* Header Block */}
        <div className="mb-12 sm:mb-16" id="testimonials-header">
          <span className="text-[10px] font-mono text-[#FF8A00] uppercase tracking-[0.25em] block mb-3">
            {t('Corporate Alliances')}
          </span>
          <h2 className={`font-sans text-3xl sm:text-4xl font-black tracking-tight ${
            darkMode ? 'text-white' : 'text-neutral-950'
          }`} id="testimonials-title">
            {t('Verified Client Feedback')}
          </h2>
        </div>

        {/* Testimonial Active Display Card */}
        <div className="relative w-full max-w-3xl min-h-[300px] flex flex-col justify-between" id="testimonials-interactive-carousel">
          
          {/* Quote mark decorator */}
          <div className="absolute -top-10 left-12 opacity-5 select-none text-[#FF4E00]" id="quote-decorator-left">
            <Quote size={120} />
          </div>

          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className={`relative z-10 p-8 sm:p-12 rounded-3xl border flex flex-col justify-between ${
              darkMode 
                ? 'bg-neutral-950/40 border-neutral-900 shadow-2xl backdrop-blur-md' 
                : 'bg-white border-neutral-200 shadow-xl'
            }`}
            id={`active-testimonial-${current.id}`}
          >
            {/* Stars row */}
            <div className="flex items-center justify-center gap-1 mb-6 text-[#FF8A00]" id="star-ratings-row">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} size={13} className="fill-current" />
              ))}
            </div>

            {/* Testimonial Core Content text */}
            <p className={`font-serif text-sm sm:text-lg italic leading-relaxed text-center ${
              darkMode ? 'text-neutral-250' : 'text-neutral-750'
            }`} id={`testimonial-body-${current.id}`}>
              "{current.content}"
            </p>

            {/* Author Meta Details and Avatar Initials */}
            <div className="flex items-center justify-center gap-3 mt-8 pt-6 border-t border-neutral-900/10 dark:border-neutral-900/50" id="author-meta">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FF4E00] to-[#FF8A00] flex items-center justify-center text-white font-bold font-sans text-xs select-none">
                {current.avatarInitials}
              </div>
              <div className="text-left">
                <h3 className={`font-sans text-xs sm:text-sm font-bold tracking-tight ${
                  darkMode ? 'text-white' : 'text-neutral-950'
                }`}>
                  {current.author}
                </h3>
                <p className="text-[10px] text-neutral-500 font-mono mt-0.5 uppercase tracking-wider">
                  {current.role} • {current.company} {current.source && `• ${current.source}`}
                </p>
              </div>
            </div>

          </motion.div>

          {/* Controls button row */}
          <div className="flex items-center justify-center gap-4 mt-8" id="carousel-navigation-buttons">
            <button
              onClick={prevTestimonial}
              className="p-2.5 rounded-full border border-neutral-900/20 dark:border-neutral-900 bg-neutral-950/10 hover:bg-[#FF4E00]/15 hover:text-white transition-all cursor-pointer text-neutral-450"
              id="prev-testimonial-button"
            >
              <ChevronLeft size={16} />
            </button>
            
            {/* Carousel dots indicators */}
            <div className="flex gap-1.5" id="carousel-dots-indicator">
              {TESTIMONIALS_DATA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                    activeIndex === i ? 'bg-[#FF4E00] w-4' : 'bg-neutral-800'
                  }`}
                  id={`carousel-dot-${i}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2.5 rounded-full border border-neutral-900/20 dark:border-neutral-900 bg-neutral-950/10 hover:bg-[#FF4E00]/15 hover:text-white transition-all cursor-pointer text-neutral-450"
              id="next-testimonial-button"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Verified External Review Badges */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xs font-mono" id="testimonials-sources-panel">
            <span className={darkMode ? 'text-neutral-500' : 'text-neutral-500'}>
              {language === 'bn' ? 'রিভিউ ভেরিফাই করুন:' : 'Verify Official Reviews:'}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <a
                href="https://share.google/7e6lLr5R7aOMxmBSS"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 text-[10px] font-sans font-bold uppercase tracking-wider rounded-full cursor-pointer transition-all duration-300 border ${
                  darkMode
                    ? 'border-neutral-900 bg-neutral-950 hover:border-[#FF4E00]/45 text-neutral-400 hover:text-white'
                    : 'border-neutral-200 bg-white hover:border-[#FF4E00]/45 text-neutral-600 hover:text-black shadow-sm'
                }`}
                id="google-reviews-source-link"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Google Maps</span>
                <ExternalLink size={10} className="opacity-60" />
              </a>
              <a
                href="https://www.facebook.com/sitoraweb/reviews/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 text-[10px] font-sans font-bold uppercase tracking-wider rounded-full cursor-pointer transition-all duration-300 border ${
                  darkMode
                    ? 'border-neutral-900 bg-neutral-950 hover:border-[#FF4E00]/45 text-neutral-400 hover:text-white'
                    : 'border-neutral-200 bg-white hover:border-[#FF4E00]/45 text-neutral-600 hover:text-black shadow-sm'
                }`}
                id="facebook-reviews-source-link"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Facebook Pages</span>
                <ExternalLink size={10} className="opacity-60" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
