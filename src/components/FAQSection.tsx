import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data';
import { useLanguage } from '../LanguageContext';

interface FAQSectionProps {
  darkMode: boolean;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ darkMode }) => {
  const [openId, setOpenId] = useState<string | null>('faq-01'); // First accordion open by default
  const { t } = useLanguage();

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-24 sm:py-32 relative" id="faq">
      {/* Separator line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-900 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="faq-container">
        
        {/* Header Block */}
        <div className="text-center mb-16 sm:mb-20 flex flex-col items-center" id="faq-header">
          <span className="text-[10px] font-mono text-[#FF8A00] uppercase tracking-[0.25em] block mb-3">
            {t('Pre-Flight Clarifications')}
          </span>
          <h2 className={`font-sans text-3xl sm:text-4xl font-black tracking-tight ${
            darkMode ? 'text-white' : 'text-neutral-950'
          }`} id="faq-title">
            {t('Frequently Asked Queries')}
          </h2>
          <p className="mt-3 max-w-lg text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed" id="faq-subtitle">
            {t('Answering functional and operational metrics so we can coordinate with absolute project transparency straight away.')}
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4" id="faq-accordion-stack">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen 
                    ? darkMode
                      ? 'bg-neutral-950/60 border-neutral-800'
                      : 'bg-neutral-50/80 border-neutral-300'
                    : darkMode
                    ? 'bg-neutral-950/20 border-neutral-900/40 hover:border-neutral-800'
                    : 'bg-white border-neutral-200 hover:border-neutral-300'
                }`}
                id={`faq-item-row-${faq.id}`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                  id={`faq-trigger-${faq.id}`}
                >
                  <div className="flex gap-3 items-start pr-4" id={`faq-trigger-content-${faq.id}`}>
                    <HelpCircle size={15} className="mt-1 shrink-0 text-[#FF4E00]" />
                    <span className={`font-sans text-xs sm:text-sm font-bold tracking-tight ${
                      darkMode ? 'text-white' : 'text-neutral-950'
                    }`}>
                      {t(faq.question)}
                    </span>
                  </div>

                  {/* Icon switcher */}
                  <span 
                    className={`p-1 rounded-full border shrink-0 transition-transform duration-300 ${
                      darkMode ? 'border-neutral-800 bg-neutral-950 text-neutral-400' : 'border-neutral-300 bg-white text-neutral-600'
                    }`}
                    id={`faq-icon-wrapper-${faq.id}`}
                  >
                    {isOpen ? <Minus size={11} /> : <Plus size={11} />}
                  </span>
                </button>

                {/* Animated content expansion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                      id={`faq-expandable-${faq.id}`}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-neutral-900/5 dark:border-neutral-950" id={`faq-answer-block-${faq.id}`}>
                        <p className={`font-sans text-[11px] sm:text-xs leading-relaxed ${
                          darkMode ? 'text-neutral-305' : 'text-neutral-650'
                        }`} id={`faq-text-content-${faq.id}`}>
                          {t(faq.answer)}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
