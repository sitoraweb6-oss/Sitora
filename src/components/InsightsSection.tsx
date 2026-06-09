import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, ArrowRight, X, ArrowUpRight } from 'lucide-react';
import { ARTICLES_DATA } from '../data';
import { Article } from '../types';

interface InsightsSectionProps {
  darkMode: boolean;
  onNavigateToBlog: () => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ darkMode, onNavigateToBlog }) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section className="py-24 sm:py-32 relative" id="insights">
      {/* Separation line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-900 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="insights-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20" id="insights-header">
          <div className="max-w-xl" id="insights-heading-block">
            <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-[0.25em] block mb-3">
              Strategic Playbook
            </span>
            <h2 className={`font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight ${
              darkMode ? 'text-[#F7F8FA]' : 'text-[#111827]'
            }`} id="insights-title">
              Sitora Insights
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-sm text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed" id="insights-subtitle">
            Insights, strategies, and practical guides to help premium businesses build authority, understand market costs, and grow in the digital world.
          </p>
        </div>

        {/* Articles Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="insights-grid">
          {ARTICLES_DATA.slice(0, 4).map((article, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              key={article.id}
              className={`group relative p-6 sm:p-8 rounded-2xl border flex flex-col justify-between transition-all duration-500 overflow-hidden ${
                darkMode 
                  ? 'bg-[#0B1016]/50 border-[rgba(255,255,255,0.08)] hover:border-[#D6B16B]/30 shadow-2xl' 
                  : 'bg-white border-[rgba(0,0,0,0.06)] hover:border-[#B88A44]/40 hover:shadow-xl'
              }`}
              id={`insight-card-${article.id}`}
            >
              <div id={`insight-meta-block-${article.id}`}>
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-4" id={`insight-meta-${article.id}`}>
                  <span className="text-[#D6B16B] dark:text-[#D6B16B] md:text-[#B88A44] border border-[#D6B16B]/25 px-2 py-0.5 rounded-md text-[9px]">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={11} /> {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} /> {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`font-sans text-lg sm:text-xl font-bold tracking-tight mb-3 leading-snug group-hover:text-[#D6B16B] dark:group-hover:text-[#D6B16B] hover:text-[#B88A44] transition-colors ${
                  darkMode ? 'text-white' : 'text-neutral-950'
                }`} id={`insight-title-link-${article.id}`}>
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-neutral-450 leading-relaxed font-sans" id={`insight-excerpt-${article.id}`}>
                  {article.excerpt}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-[rgba(255,255,255,0.08)]" id={`insight-action-${article.id}`}>
                <button
                  onClick={() => setSelectedArticle(article)}
                  className={`group/btn flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                    darkMode ? 'text-[#F7F8FA] hover:text-[#D6B16B]' : 'text-[#111827] hover:text-[#B88A44]'
                  }`}
                  id={`insight-btn-${article.id}`}
                >
                  <span>Expand Research Article</span>
                  <ArrowRight size={13} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* View All Blog Posts CTA */}
        <div className="mt-14 text-center" id="insights-cta-block">
          <button
            onClick={onNavigateToBlog}
            className={`group inline-flex items-center gap-3 py-3.5 px-8 rounded-full border text-xs font-bold uppercase tracking-widest cursor-pointer transition-all duration-300 ${
              darkMode 
                ? 'border-neutral-800 bg-neutral-950 text-[#F7F8FA] hover:border-[#D6B16B]/40 hover:shadow-[0_0_20px_rgba(214,177,107,0.2)] hover:text-[#D6B16B]' 
                : 'border-neutral-200 bg-white text-neutral-950 hover:border-[#B88A44]/50 hover:text-[#B88A44] shadow-md'
            }`}
            id="insights-cta-btn"
          >
            <span>Explore All 10 Strategic Playbooks</span>
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Dynamic Reader Modal overlay for premium discovery */}
        <AnimatePresence>
          {selectedArticle && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedArticle(null)}
                className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md cursor-pointer"
                id="article-backdrop"
              />

              {/* Content Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className={`fixed inset-x-4 top-10 bottom-10 md:inset-x-20 md:top-20 md:bottom-20 z-55 max-w-4xl mx-auto rounded-3xl p-6 sm:p-10 border overflow-y-auto ${
                  darkMode ? 'bg-[#05070A] border-[rgba(255,255,255,0.08)]' : 'bg-white border-[rgba(0,0,0,0.06)]'
                }`}
                id="article-modal-content"
              >
                {/* Header controls */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[rgba(255,255,255,0.08)]" id="article-modal-header">
                  <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-widest px-2.5 py-1 rounded bg-[#D6B16B]/10 border border-[#D6B16B]/20">
                    Sitora Strategic Ledger
                  </span>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="p-1.5 rounded-full border border-neutral-900/20 dark:border-neutral-900 bg-neutral-950/20 text-neutral-400 hover:text-white transition-colors"
                    id="article-modal-close"
                  >
                    <X size={15} />
                  </button>
                </div>

                {/* Article detail main text */}
                <div className="space-y-6" id="article-body">
                  <div className="flex items-center gap-3 text-[10px] font-mono text-neutral-550 uppercase tracking-wider" id="article-body-meta">
                    <span>{selectedArticle.date}</span>
                    <span>•</span>
                    <span>{selectedArticle.readTime}</span>
                  </div>

                  <h2 className={`font-sans text-2xl sm:text-4xl font-extrabold tracking-tight leading-snug ${
                    darkMode ? 'text-[#F7F8FA]' : 'text-[#111827]'
                  }`} id="article-body-title">
                    {selectedArticle.title}
                  </h2>

                  <p className="text-sm font-semibold italic text-[#D6B16B] leading-relaxed font-sans" id="article-body-excerpt">
                    {selectedArticle.excerpt}
                  </p>

                  <div className={`mt-8 text-xs sm:text-sm leading-relaxed space-y-4 border-t border-neutral-900/10 dark:border-neutral-900/50 pt-6 ${
                    darkMode ? 'text-neutral-300' : 'text-neutral-700'
                  }`} id="article-body-paragraphs">
                    <p>{selectedArticle.content}</p>
                    
                    <p className="font-bold text-white pt-4">Strategic Operational Takeaways:</p>
                    <ul className="list-disc pl-5 space-y-2 text-neutral-400">
                      <li>Bypass standard template layout defaults to enhance first paint times under 0.5s.</li>
                      <li>Double search authority indexes by implementing clean, human-scoped structural metadata schemas.</li>
                      <li>Sync conversion attributions securely using solid server-side APIs to protect marketing spends.</li>
                    </ul>

                    <p className="text-xs text-neutral-500 pt-6">Written by Sitora Web Strategic Operations Division Team in Dhaka. Dedicated to excellence.</p>
                  </div>
                </div>

              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
