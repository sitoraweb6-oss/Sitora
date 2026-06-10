import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowRight, ChevronDown } from 'lucide-react';
import { SitoraLogoWithText } from './SitoraLogo';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';

interface HeaderProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenInquiry: (type?: string) => void;
  currentView: 'home' | 'blog' | 'portfolio';
  onNavigate: (view: 'home' | 'blog' | 'portfolio', id?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  darkMode, 
  onToggleTheme, 
  onOpenInquiry,
  currentView,
  onNavigate
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    if (currentView === 'blog') {
      setActiveSection('blog');
      setScrolled(true); // Always keep scrolled style on blog page for reading safety
      return;
    }
    if (currentView === 'portfolio') {
      setActiveSection('portfolio');
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Detect current visible section for active design highlighting
      const sections = ['home', 'services', 'crafted-experiences', 'pricing', 'about', 'insights', 'testimonials', 'faq'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const navItems = [
    { label: 'Home', view: 'home', href: '#home', id: 'home' },
    { label: 'Services', view: 'home', href: '#services', id: 'services' },
    { label: 'Experiences', view: 'portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'Pricing', view: 'home', href: '#pricing', id: 'pricing' },
    { label: 'Blog', view: 'blog', href: '#blog', id: 'blog' },
    { label: 'About', view: 'home', href: '#about', id: 'about' },
    { label: 'FAQ', view: 'home', href: '#faq', id: 'faq' },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setIsOpen(false);
    onNavigate(item.view as 'home' | 'blog' | 'portfolio', item.id);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 border-b ${
        scrolled
          ? darkMode
            ? 'bg-[#05070A]/85 border-[rgba(255,255,255,0.08)] shadow-2xl backdrop-blur-2xl py-3'
            : 'bg-[#FAFBFC]/85 border-[rgba(0,0,0,0.06)] shadow-md backdrop-blur-2xl py-3'
          : 'bg-transparent border-transparent py-5'
      }`}
      id="sitora-navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="navbar-container">
        <div className="flex items-center justify-between" id="navbar-inner-row">
          
          {/* Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home', 'home'); }} className="block" id="sitora-brand-link">
            <SitoraLogoWithText isLight={!darkMode} iconSize={36} showTagline={!scrolled} />
          </a>

          {/* Core Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#101722]/40 dark:bg-white/[0.02] p-1.5 rounded-full border border-[rgba(255,255,255,0.06)] dark:border-white/[0.02]" id="navbar-desktop-nav">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`relative px-4 py-1.5 rounded-full text-xs transition-all duration-300 font-sans font-medium cursor-pointer ${
                    isActive
                      ? darkMode
                        ? 'text-[#D6B16B] bg-[#101722]/80 border border-[#D6B16B]/30'
                        : 'text-[#B88A44] bg-[#F3F5F7] border border-[#B88A44]/30 font-bold'
                      : darkMode
                      ? 'text-[#A7B0BD] hover:text-[#F7F8FA]'
                      : 'text-[#4B5563] hover:text-[#111827]'
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  {t(item.label)}
                </button>
              );
            })}
          </nav>

          {/* Action Tools */}
          <div className="hidden lg:flex items-center gap-4" id="navbar-action-panel">
            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className={`w-11 h-11 flex items-center justify-center rounded-full border cursor-pointer transition-all duration-300 ${
                darkMode
                  ? 'border-[rgba(255,255,255,0.08)] bg-[#0B1016] text-[#D6B16B] hover:border-[#D6B16B]/50 hover:text-[#E4C78A] hover:shadow-[0_0_15px_rgba(214,177,107,0.15)]'
                  : 'border-[rgba(0,0,0,0.06)] bg-[#FFFFFF] text-[#B88A44] hover:border-[#B88A44]/50 hover:text-[#D6B16B]'
              }`}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label={darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              id="desktop-theme-toggle"
            >
              {darkMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Language dropdown switcher */}
            <div className="relative" id="desktop-language-selector">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-1.5 h-11 px-4 rounded-full border text-xs cursor-pointer font-sans font-medium transition-all duration-300 ${
                  darkMode
                    ? 'border-[rgba(255,255,255,0.08)] bg-[#0B1016] text-[#D6B16B] hover:border-[#D6B16B]/50'
                    : 'border-[rgba(0,0,0,0.06)] bg-[#FFFFFF] text-[#B88A44] hover:border-[#B88A44]/50'
                }`}
                aria-label="Change Language"
                id="lang-selector-trigger"
              >
                <span>🌐 {language === 'bn' ? 'বাং' : 'EN'}</span>
                <ChevronDown size={11} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setDropdownOpen(false)} 
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.15 }}
                      className={`absolute right-0 mt-2 w-32 rounded-xl border p-1 shadow-2xl backdrop-blur-2xl z-50 ${
                        darkMode
                          ? 'bg-[#05070A]/95 border-[rgba(255,255,255,0.12)] text-[#F7F8FA]'
                          : 'bg-white border-[rgba(0,0,0,0.08)] text-[#111827]'
                      }`}
                      id="lang-dropdown-menu"
                    >
                      <button
                        onClick={() => {
                          setLanguage('en');
                          setDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs font-sans font-semibold transition-colors flex items-center justify-between cursor-pointer min-h-11 ${
                          language === 'en'
                            ? 'text-[#D6B16B] bg-[#101722]/50 font-bold'
                            : darkMode ? 'hover:bg-[#101722]/50 text-neutral-400 hover:text-white' : 'hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900'
                        }`}
                        aria-label="Set language to English"
                      >
                        <span>English</span>
                        {language === 'en' && <span className="text-[#D6B16B]">✓</span>}
                      </button>
                      <button
                        onClick={() => {
                          setLanguage('bn');
                          setDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs font-sans font-semibold transition-colors flex items-center justify-between cursor-pointer min-h-11 ${
                          language === 'bn'
                            ? 'text-[#D6B16B] bg-[#101722]/50 font-bold'
                            : darkMode ? 'hover:bg-[#101722]/50 text-neutral-400 hover:text-white' : 'hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900'
                        }`}
                        aria-label="Set language to Bangla"
                      >
                        <span>বাংলা</span>
                        {language === 'bn' && <span className="text-[#D6B16B]">✓</span>}
                      </button>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Consultation CTA */}
            <button
              onClick={() => onOpenInquiry()}
              className={`group flex items-center gap-1.5 h-11 px-5 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer ${
                darkMode
                  ? 'bg-[#D6B16B] text-neutral-950 hover:bg-[#E4C78A] hover:shadow-[0_0_20px_rgba(214,177,107,0.3)] shadow-[#D6B16B]/15'
                  : 'bg-[#B88A44] text-white hover:bg-[#D6B16B]'
              }`}
              aria-label="Open Consultation Portal"
              id="desktop-get-started-cta"
            >
              <span>{t('Get in Touch')}</span>
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Tablet & Mobile Menu Toggle Buttons */}
          <div className="flex items-center gap-2 lg:hidden" id="navbar-mobile-controls">
            {/* Small screen theme toggle */}
            <button
              onClick={onToggleTheme}
              className={`w-11 h-11 flex items-center justify-center rounded-full border cursor-pointer transition-all duration-300 ${
                darkMode
                  ? 'border-[rgba(255,255,255,0.08)] bg-[#0B1016] text-[#D6B16B]'
                  : 'border-[rgba(0,0,0,0.06)] bg-[#FFFFFF] text-[#B88A44]'
              }`}
              id="mobile-theme-toggle"
              aria-label={darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              {darkMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Menu Open/Close */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`w-11 h-11 flex items-center justify-center rounded-full border cursor-pointer transition-all duration-300 ${
                darkMode
                  ? 'border-[rgba(255,255,255,0.08)] bg-[#0B1016] text-[#A7B0BD] hover:text-[#F7F8FA]'
                  : 'border-[rgba(0,0,0,0.06)] bg-[#FFFFFF] text-[#4B5563] hover:text-[#111827]'
              }`}
              id="mobile-menu-trigger"
              aria-label={isOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Glass Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className={`fixed inset-x-0 top-[60px] bottom-0 z-30 flex flex-col justify-between p-6 border-t backdrop-blur-3xl ${
              darkMode 
                ? 'bg-[#05070A]/95 border-[rgba(255,255,255,0.08)] text-[#F7F8FA]' 
                : 'bg-[#FAFBFC]/95 border-[rgba(0,0,0,0.06)] text-[#111827]'
            }`}
            id="mobile-nav-panel"
          >
            {/* Navigation links nested items */}
            <div className="flex flex-col gap-4 mt-4" id="mobile-nav-items">
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">Index Directory</span>
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className={`text-left font-sans text-lg font-bold tracking-tight py-1 hover:translate-x-1 transition-all cursor-pointer ${
                      isActive
                        ? 'text-[#D6B16B]'
                        : darkMode
                        ? 'text-[#A7B0BD] hover:text-[#F7F8FA]'
                        : 'text-[#4B5563] hover:text-[#111827]'
                    }`}
                    id={`mobile-nav-item-${item.id}`}
                  >
                    {t(item.label)}
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile Footer CTA */}
            <div className="space-y-4 mb-8" id="mobile-nav-footer">
              {/* Mobile Language Switcher Buttons */}
              <div className="flex items-center gap-2 p-1 bg-neutral-900/40 border border-neutral-900 rounded-xl mb-2" id="mobile-language-toggler">
                <button
                  onClick={() => {
                    setLanguage('en');
                    setIsOpen(false);
                  }}
                  className={`flex-1 py-2 rounded-lg text-center font-sans text-xs font-bold transition-all cursor-pointer ${
                    language === 'en'
                      ? 'bg-[#D6B16B] text-neutral-950 shadow-md font-extrabold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  id="mobile-lang-en-btn"
                >
                  🌐 English
                </button>
                <button
                  onClick={() => {
                    setLanguage('bn');
                    setIsOpen(false);
                  }}
                  className={`flex-1 py-2 rounded-lg text-center font-sans text-xs font-bold transition-all cursor-pointer ${
                    language === 'bn'
                      ? 'bg-[#D6B16B] text-neutral-950 shadow-md font-extrabold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  id="mobile-lang-bn-btn"
                >
                  🌐 বাংলা
                </button>
              </div>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenInquiry();
                }}
                className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-sans text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  darkMode 
                    ? 'bg-[#D6B16B] text-neutral-950 hover:bg-[#E4C78A] shadow-[0_0_20px_rgba(214,177,107,0.25)]' 
                    : 'bg-[#B88A44] text-white hover:bg-[#D6B16B]'
                }`}
                id="mobile-nav-cta-button"
              >
                <span>{t('Request Free Consultation')}</span>
                <ArrowRight size={14} />
              </button>

              <div className="text-center font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
                Sitora Web • Dhaka, Bangladesh
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
