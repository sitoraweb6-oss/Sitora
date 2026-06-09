import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, Calendar, Clock, ArrowLeft, ArrowRight, BookOpen, 
  Share2, ChevronRight, Hash, Sparkles, AlertCircle 
} from 'lucide-react';
import { ARTICLES_DATA } from '../data';
import { Article } from '../types';

interface BlogPageProps {
  darkMode: boolean;
  onBackToHome: () => void;
  onOpenInquiry: (type?: string) => void;
  activeArticleId?: string | null;
  setActiveArticleId?: (id: string | null) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ 
  darkMode, 
  onBackToHome, 
  onOpenInquiry,
  activeArticleId: controlledActiveArticleId,
  setActiveArticleId: controlledSetActiveArticleId
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [internalActiveArticleId, setInternalActiveArticleId] = useState<string | null>(null);
  
  const activeArticleId = controlledActiveArticleId !== undefined ? controlledActiveArticleId : internalActiveArticleId;
  const setActiveArticleId = controlledSetActiveArticleId !== undefined ? controlledSetActiveArticleId : setInternalActiveArticleId;

  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Categories list derived dynamically
  const categories = useMemo(() => {
    const cats = new Set(ARTICLES_DATA.map(a => a.category));
    return ['All', ...Array.from(cats)];
  }, []);

  // Filtered articles list
  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      const matchesSearch = 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const activeArticle = useMemo(() => {
    return ARTICLES_DATA.find(a => a.id === activeArticleId) || null;
  }, [activeArticleId]);

  const handleShare = (article: Article, e: React.MouseEvent) => {
    e.stopPropagation();
    const shareUrl = `${window.location.origin}?article=${article.id}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopiedId(article.id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  // Helper to format body content (paragraphs, headings) elegantly
  const renderFormattedContent = (content: string) => {
    const blocks = content.split('\n\n');
    return blocks.map((block, i) => {
      // Heading check
      if (block.startsWith('### ')) {
        return (
          <h3 
            key={i} 
            className={`font-sans text-lg sm:text-xl font-bold tracking-tight mt-8 mb-4 ${
              darkMode ? 'text-[#D6B16B]' : 'text-[#B88A44]'
            }`}
          >
            {block.replace('### ', '')}
          </h3>
        );
      }
      
      // List item check
      if (block.startsWith('- ') || block.match(/^\d+\. /)) {
        const lines = block.split('\n');
        return (
          <ul key={i} className="my-4 pl-5 list-disc space-y-2 text-neutral-400">
            {lines.map((line, li) => {
              const cleanedLine = line.replace(/^(- |\d+\. )/, '');
              // Extract bold tags within line
              const boldMatch = cleanedLine.match(/\*\*(.*?)\*\*(.*)/);
              if (boldMatch) {
                return (
                  <li key={li} className="leading-relaxed">
                    <strong className={darkMode ? 'text-white' : 'text-neutral-900'}>{boldMatch[1]}</strong>
                    {boldMatch[2]}
                  </li>
                );
              }
              return <li key={li} className="leading-relaxed">{cleanedLine}</li>;
            })}
          </ul>
        );
      }

      // Normal paragraph
      return (
        <p key={i} className="leading-relaxed mb-4 text-sm sm:text-base">
          {block}
        </p>
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen pt-28 pb-20 font-sans relative ${
        darkMode ? 'bg-[#05070A] text-[#F7F8FA]' : 'bg-[#fafaf9] text-neutral-900'
      }`}
      id="blog-page-root"
    >
      {/* Background radial overlays */}
      {darkMode && (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" id="blog-glow-overlays">
          <div className="absolute top-[15%] left-[20%] w-[50%] h-[50%] bg-[#D6B16B] opacity-[0.04] blur-[150px] rounded-full" />
          <div className="absolute bottom-[20%] right-[10%] w-[45%] h-[45%] bg-[#7ED4FF] opacity-[0.02] blur-[130px] rounded-full" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="blog-container">
        
        <AnimatePresence mode="wait">
          {!activeArticle ? (
            /* ========================================================================= */
            /*                         ARTICLE INDEX VIEW                                */
            /* ========================================================================= */
            <motion.div
              key="index-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              id="blog-index-view"
            >
              {/* Back Link */}
              <button
                onClick={onBackToHome}
                className={`group inline-flex items-center gap-2 mb-8 text-xs font-mono uppercase tracking-widest cursor-pointer transition-colors ${
                  darkMode ? 'text-[#A7B0BD] hover:text-[#D6B16B]' : 'text-neutral-600 hover:text-[#B88A44]'
                }`}
                id="blog-back-btn"
              >
                <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" />
                <span>Return to Engineering Hub</span>
              </button>

              {/* Page header banner */}
              <div className="mb-14 text-center md:text-left" id="blog-header-block">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-4 border-[#D6B16B]/20 bg-[#D6B16B]/5">
                  <Sparkles size={11} className="text-[#D6B16B]" />
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#D6B16B]">
                    The Strategic Ledger
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none mb-4 font-sans uppercase">
                  Sitora Web <span className="text-[#D6B16B]">Insights</span>
                </h1>
                <p className="max-w-2xl text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                  Deep technical strategies, analytical breakdowns, local market insights, and digital tactics compiled specifically to scale modern commercial assets in Bangladesh.
                </p>
              </div>

              {/* Filtering / Search panel */}
              <div className="flex flex-col md:flex-row gap-6 items-stretch md:items-center justify-between mb-12" id="blog-filter-section">
                
                {/* Categories badges */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-3 md:pb-0 scrollbar-none scroll-smooth -mx-4 px-4 md:mx-0 md:px-0" id="blog-categories-scroller">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-full text-xs font-medium cursor-pointer shrink-0 transition-all duration-300 border ${
                        selectedCategory === cat
                          ? darkMode
                            ? 'bg-[#D6B16B] text-[#05070A] shadow-[0_0_15px_rgba(214,177,107,0.25)] font-semibold border-[#D6B16B]'
                            : 'bg-[#D6B16B] text-[#05070A] font-semibold shadow-md border-[#D6B16B]'
                          : darkMode
                          ? 'bg-[#0B1016]/80 border-[rgba(255,255,255,0.08)] text-neutral-400 hover:text-[#F7F8FA]'
                          : 'bg-white border-neutral-200 text-neutral-600 hover:text-neutral-900'
                      }`}
                      id={`blog-category-${cat.replace(/\s+/g, '-')}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Search Input Box */}
                <div className="relative max-w-sm w-full" id="blog-search-container">
                  <span className="absolute inset-y-0 left-3.5 flex items-center text-neutral-500 pointer-events-none">
                    <Search size={14} />
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search strategic guidance..."
                    className={`w-full py-2.5 pl-10 pr-4 rounded-xl text-xs border transition-all duration-300 outline-none ${
                      darkMode 
                        ? 'border-[#101722] bg-[#0B1016]/60 text-[#F7F8FA] placeholder-neutral-500 focus:border-[#D6B16B]/50 focus:bg-[#0B1016]' 
                        : 'border-neutral-200 bg-white text-neutral-950 placeholder-neutral-400 focus:border-[#D6B16B]/60 focus:ring-1 focus:ring-[#D6B16B]/30'
                    }`}
                    id="blog-search-input"
                  />
                </div>

              </div>

              {/* Articles dynamic Grid list */}
              {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-articles-grid">
                  {filteredArticles.map((article, index) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      onClick={() => setActiveArticleId(article.id)}
                      className={`group cursor-pointer p-6 sm:p-7 rounded-2xl border flex flex-col justify-between transition-all duration-500 relative overflow-hidden h-full ${
                        darkMode 
                          ? 'bg-[#0B1016]/40 border-[rgba(255,255,255,0.08)] hover:border-[#D6B16B]/30 hover:shadow-2xl hover:shadow-[#D6B16B]/5' 
                          : 'bg-white border-[rgba(0,0,0,0.06)] hover:border-[#D6B16B]/30 hover:shadow-xl'
                      }`}
                      id={`blog-card-${article.id}`}
                    >
                      {/* Interactive glow border corner */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#D6B16B]/15 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <div id={`blog-card-meta-${article.id}`}>
                        {/* Eyebrow details */}
                        <div className="flex flex-wrap items-center gap-2.5 text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-4">
                          <span className="text-[#D6B16B] border border-[#D6B16B]/20 px-2 py-0.5 rounded-md text-[9px] font-bold">
                            {article.category}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Calendar size={11} /> {article.date}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className={`font-sans text-lg sm:text-xl font-bold tracking-tight mb-3 leading-snug group-hover:text-[#D6B16B] dark:group-hover:text-[#D6B16B] group-hover:text-[#B88A44] transition-colors duration-400 ${
                          darkMode ? 'text-[#F7F8FA]' : 'text-[#111827]'
                        }`}>
                          {article.title}
                        </h3>

                        {/* Excerpt description */}
                        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans line-clamp-3">
                          {article.excerpt}
                        </p>
                      </div>

                      {/* Footer Actions */}
                      <div className="mt-8 pt-4 border-t border-neutral-900/10 dark:border-neutral-900/50 flex items-center justify-between">
                        <div className="flex items-center gap-1 text-[11px] font-mono text-neutral-550 uppercase">
                          <Clock size={11} /> {article.readTime}
                        </div>

                        <div className="flex items-center gap-3">
                          {/* Copied visual notification hook */}
                          <button
                            onClick={(e) => handleShare(article, e)}
                            className="p-1.5 rounded-md text-neutral-500 hover:text-white transition-colors"
                            title="Copy link to clipboard"
                          >
                            <span className="text-[9px] font-mono text-[#D6B16B]">
                              {copiedId === article.id ? 'Copied!' : <Share2 size={13} />}
                            </span>
                          </button>

                          <div className="flex items-center gap-1 text-xs font-semibold text-[#D6B16B] dark:text-[#D6B16B] text-[#B88A44]">
                            <span>Read</span>
                            <ChevronRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                          </div>
                        </div>
                      </div>

                    </motion.div>
                  ))}
                </div>
              ) : (
                /* Empty results diagnostic call */
                <div className="py-20 text-center border border-dashed rounded-3xl border-neutral-900 bg-neutral-950/20 max-w-md mx-auto space-y-4">
                  <AlertCircle size={32} className="text-[#D6B16B] mx-auto opacity-70" />
                  <h3 className="font-sans text-base font-bold">No Guidelines Match Your Search</h3>
                  <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                    Try adjusting your filters or typing different search phrases to find active engineering articles.
                  </p>
                  <button
                    onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                    className="px-4 py-2 border rounded-full border-neutral-800 text-[10px] font-mono tracking-widest uppercase hover:bg-neutral-900 text-neutral-450 hover:text-white transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              )}

            </motion.div>
          ) : (
            /* ========================================================================= */
            /*                         ARTICLE DETAILED READ VIEW                        */
            /* ========================================================================= */
            <motion.div
              key="detail-view"
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl mx-auto"
              id="blog-detail-view"
            >
              {/* Navigation Back button */}
              <button
                onClick={() => { setActiveArticleId(null); window.scrollTo(0, 0); }}
                className={`group inline-flex items-center gap-2 mb-10 text-xs font-mono uppercase tracking-widest cursor-pointer transition-all ${
                  darkMode ? 'text-neutral-400 hover:text-[#D6B16B]' : 'text-neutral-650 hover:text-[#B88A44]'
                }`}
                id="blog-back-to-index"
              >
                <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" />
                <span>Return to Strategic Directory</span>
              </button>

              {/* Article Top Section */}
              <div className="space-y-6 pb-8 border-b border-neutral-900/20 dark:border-neutral-900" id="blog-detail-header">
                
                <div className="flex flex-wrap items-center gap-3 text-[10.5px] font-mono text-neutral-500 uppercase tracking-widest">
                  <span className="text-[#D6B16B] border border-[#D6B16B]/25 px-2.5 py-0.5 rounded-md font-bold text-[9px] bg-[#D6B16B]/5">
                    {activeArticle.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Calendar size={11} /> {activeArticle.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock size={11} /> {activeArticle.readTime}</span>
                </div>

                <h1 className={`font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight ${
                  darkMode ? 'text-white' : 'text-neutral-950'
                }`}>
                  {activeArticle.title}
                </h1>

                <p className="text-sm sm:text-base text-[#D6B16B] italic leading-relaxed font-sans max-w-3xl">
                  {activeArticle.excerpt}
                </p>

                {/* Optional copy of the current URL for absolute citation */}
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#D6B16B]/15 border border-[#D6B16B]/30 flex items-center justify-center font-mono text-xs text-[#D6B16B] font-bold">
                      S
                    </div>
                    <div className="text-[10px] sm:text-xs">
                      <p className="font-bold">Sitora Web Operations</p>
                      <p className="text-neutral-500 text-[10px]">Dhaka Strategic Division Team</p>
                    </div>
                  </div>

                  <button
                    onClick={(e) => handleShare(activeArticle, e)}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-neutral-900 text-xs font-mono tracking-wider transition-colors ${
                      darkMode ? 'bg-neutral-950/50 hover:bg-neutral-900' : 'bg-white hover:bg-neutral-100'
                    }`}
                  >
                    <Share2 size={12} />
                    <span>{copiedId === activeArticle.id ? 'Copied Link!' : 'Share Insight'}</span>
                  </button>
                </div>

              </div>

              {/* Article Main Text Section */}
              <div 
                className={`mt-10 leading-relaxed font-sans space-y-6 ${
                  darkMode ? 'text-neutral-300' : 'text-neutral-700'
                }`}
                id="blog-detail-content"
              >
                {renderFormattedContent(activeArticle.content)}

                {/* Elegant takeaways block */}
                <div className="bg-[#D6B16B]/5 border border-[#D6B16B]/20 p-6 sm:p-8 rounded-2xl my-10 space-y-4">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-[#D6B16B]" />
                    <h4 className="font-sans text-sm font-black uppercase tracking-wider text-[#D6B16B]">
                      Strategic Sitora Audit Key Takeaway:
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-neutral-400">
                    To scale your business inside Bangladesh or globally, avoid relying on unstable channels. Owning a speed-optimized, independent, custom website coupled with accurate client matching metrics guarantees high marketing sustainability.
                  </p>
                  <button
                    onClick={() => onOpenInquiry('web-dev')}
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D6B16B] dark:text-[#D6B16B] text-[#B88A44] hover:underline"
                  >
                    <span>Request Diagnostic Web Check</span>
                    <ArrowRight size={13} />
                  </button>
                </div>

                {/* Sub-footer signature */}
                <div className="pt-8 border-t border-neutral-900/10 dark:border-neutral-900/40 text-[11px] font-mono text-neutral-500 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    Written by Sitora Web Editorial and Research Division.
                  </div>
                  <div className="flex items-center gap-1 text-[#D6B16B] dark:text-[#D6B16B] text-[#B88A44] font-semibold hover:underline cursor-pointer" onClick={() => { setActiveArticleId(null); window.scrollTo(0,0); }}>
                    Back to Index <ArrowRight size={12} />
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
};
