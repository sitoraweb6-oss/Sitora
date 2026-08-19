import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { 
  ArrowRight, 
  Terminal, 
  Globe, 
  ChevronRight, 
  CheckCircle2, 
  Activity, 
  Zap, 
  Fingerprint, 
  ShieldCheck,
  TrendingUp,
  Cpu
} from 'lucide-react';

interface HeroSectionProps {
  onOpenInquiry: (type?: string) => void;
  darkMode: boolean;
  onNavigate: (view: 'home' | 'blog' | 'portfolio' | 'about' | 'industries' | 'tools' | 'case-study', id?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInquiry, darkMode, onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { language, t } = useLanguage();

  // Parallax mouse position tracking for visual dynamic effects
  useEffect(() => {
    const handleMouseMoveGlobal = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const moveX = (clientX - innerWidth / 2) / 40;
      const moveY = (clientY - innerHeight / 2) / 40;
      setMousePosition({ x: moveX, y: moveY });
    };

    window.addEventListener('mousemove', handleMouseMoveGlobal);
    return () => window.removeEventListener('mousemove', handleMouseMoveGlobal);
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none"
    >
      {/* Premium elegant gold/black ambient lighting backdrop */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden bg-transparent" id="ambient-digital-backdrop">
        
        {/* Analog Grain Film Noise */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.015] dark:opacity-[0.025] mix-blend-overlay" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px',
          }}
        />

        {/* Dynamic Studio Gold Lighting Core */}
        <div 
          className="absolute inset-0 transition-transform duration-[1200ms] ease-out pointer-events-none"
          style={{
            transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px)`,
          }}
        >
          {/* Opulent Warm Gold Ambient Glow */}
          <div
            className="absolute top-[-15%] left-[10%] w-[950px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(214,177,107,0.11)_0%,rgba(214,177,107,0.01)_50%,rgba(0,0,0,0)_70%)] dark:bg-[radial-gradient(circle,rgba(214,177,107,0.05)_0%,rgba(214,177,107,0.002)_50%,rgba(0,0,0,0)_70%)] blur-[60px]"
          />

          <div
            className="absolute bottom-[-10%] right-[15%] w-[850px] h-[550px] rounded-full bg-[radial-gradient(circle,rgba(214,177,107,0.08)_0%,rgba(214,177,107,0.008)_45%,rgba(0,0,0,0)_65%)] dark:bg-[radial-gradient(circle,rgba(214,177,107,0.03)_0%,rgba(214,177,107,0.001)_45%,rgba(0,0,0,0)_65%)] blur-[65px]"
          />
        </div>

        {/* Slow Volumetric Light Rays (Warm Gold Ambient) */}
        <div 
          className="absolute inset-0 mix-blend-screen pointer-events-none"
          style={{
            transform: `translate(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.15}px)`,
          }}
        >
          {/* Main Gold Light Ray */}
          <div 
            style={{ transformOrigin: 'top left', transform: 'rotate(-8deg)' }}
            className="absolute -top-[40%] left-[10%] w-[45%] h-[180%] bg-gradient-to-b from-[#D6B16B]/[0.035] via-[#D6B16B]/[0.008] to-transparent blur-[75px]" 
          />
        </div>

        {/* Linear Dynamic Architectural Grid */}
        <div 
          className={`absolute inset-0 bg-[linear-gradient(rgba(214,177,107,0.006)_1px,transparent_1px),linear-gradient(90deg,rgba(214,177,107,0.006)_1px,transparent_1px)] bg-[size:45px_45px] pointer-events-none ${
            darkMode ? 'opacity-100' : 'opacity-[0.12]'
          }`}
          id="hero-ambient-digital-grid"
        />
      </div>

      {/* Main Elements Split-Grid Layout: LEFT (Typography) vs RIGHT (Dashboard UI Cards) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center text-left" id="hero-middle-stack">
        
        {/* Left Side: Dense, Oversized Typography and Copywriting */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center space-y-7" id="hero-left-contents">
          
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`inline-flex items-center gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border self-start ${
              darkMode 
                ? 'bg-neutral-950/80 border-neutral-800/80 text-neutral-300' 
                : 'bg-neutral-100/80 border-neutral-300/80 text-neutral-700'
            }`}
            id="hero-audience-eyebrow"
          >
            <span className="flex h-1.5 w-1.5 relative" id="badge-pulsing-glow">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D6B16B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#D6B16B]"></span>
            </span>
            <span className="text-[9px] sm:text-xs uppercase tracking-[0.2em] font-mono leading-none">
              {t('DIGITAL EXPERIENCES FOR GROWING BUSINESSES')}
            </span>
          </motion.div>

          {/* Headline - Large Oversized & Two Tone */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`font-sans text-2xl sm:text-5xl md:text-[54px] font-black tracking-tight leading-[1.2] sm:leading-[1.05] uppercase max-w-[430px] sm:max-w-none ${
                darkMode ? 'text-white' : 'text-[#111827]'
              }`}
              id="hero-brand-statement"
            >
              {language === 'bn' ? (
                <>প্রিমিয়াম ওয়েবসাইট<br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D6B16B] via-[#eed8ac] to-[#bf9b59]">বিজনেস গ্রোথ</span><br />নিশ্চিত করতে তৈরি</>
              ) : (
                <>PREMIUM WEBSITES<br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D6B16B] via-[#eed8ac] to-[#bf9b59]">BUILT TO DRIVE</span><br />BUSINESS GROWTH</>
              )}
            </motion.h1>
          </div>

          {/* Subheadline description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={`text-xs sm:text-sm md:text-[14.5px] leading-relaxed font-sans ${
              darkMode ? 'text-neutral-400' : 'text-neutral-600'
            }`}
            id="hero-subdescription"
          >
            {language === 'bn' ? (
              <>আমরা হাই-পারফরম্যান্স ওয়েবসাইট তৈরি করি যা ব্যবসাকে কাস্টমার আকর্ষণ করতে, লিড তৈরি করতে এবং বেশি ভিজিটরকে রিয়েল কাস্টমারে রূপান্তর করতে সাহায্য করে।</>
            ) : (
              <>We build high-performance websites that help businesses attract customers, generate leads, and turn more visitors into real opportunities.</>
            )}
          </motion.p>

          {/* Dynamic Supporting Business Positioning details */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-x-5 gap-y-3 pb-2 pt-2 text-left"
            id="hero-business-positioning"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 size={13} className="text-[#D6B16B] shrink-0" />
              <span className={`text-[10.5px] font-bold tracking-wider font-mono uppercase ${darkMode ? 'text-neutral-300' : 'text-neutral-800'}`}>{language === 'bn' ? 'কাস্টম-বিল্ট' : 'CUSTOM-BUILT'}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={13} className="text-[#D6B16B] shrink-0" />
              <span className={`text-[10.5px] font-bold tracking-wider font-mono uppercase ${darkMode ? 'text-neutral-300' : 'text-neutral-800'}`}>{language === 'bn' ? 'পারফরম্যান্স-ফোকাসড' : 'PERFORMANCE-FOCUSED'}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={13} className="text-[#D6B16B] shrink-0" />
              <span className={`text-[10.5px] font-bold tracking-wider font-mono uppercase ${darkMode ? 'text-neutral-300' : 'text-neutral-800'}`}>{language === 'bn' ? 'কনভার্সন-ফোকাসড' : 'CONVERSION-FOCUSED'}</span>
            </div>
          </motion.div>

          {/* CTA Area precisely aligned with blue mockup */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto"
            id="hero-cta-button-block"
          >
            <button
              onClick={() => onOpenInquiry('web-dev')}
              className="group flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-sans text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-[#D6B16B] via-[#eed8ac] to-[#D6B16B] bg-[size:200%_auto] hover:bg-right hover:scale-[1.02] active:scale-[0.97] transition-all duration-150 shadow-[0_0_20px_rgba(214,177,107,0.15)] hover:shadow-[0_0_35px_rgba(214,177,107,0.3)] cursor-pointer w-full sm:w-auto"
              id="hero-primary-consult-cta"
            >
              <span>{language === 'bn' ? 'ফ্রি ওয়েবসাইট রিভিউ নিন' : 'GET YOUR FREE WEBSITE REVIEW'}</span>
              <ArrowRight size={13} className="transition-transform duration-150 group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onNavigate('portfolio')}
              className={`group flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-sans text-xs font-bold uppercase tracking-wider border active:scale-[0.97] transition-all duration-150 cursor-pointer w-full sm:w-auto ${
                darkMode
                  ? 'bg-neutral-900/60 border-neutral-800 text-neutral-300 hover:border-[#D6B16B]/60 hover:text-[#D6B16B] hover:bg-neutral-900'
                  : 'bg-white border-neutral-200 text-neutral-700 hover:border-[#D6B16B] hover:text-[#D6B16B] hover:bg-neutral-50'
              }`}
              id="hero-secondary-quote-cta"
            >
              <span>{language === 'bn' ? 'আমাদের কাজ দেখুন' : 'VIEW OUR WORK'}</span>
              <ChevronRight size={14} className="transition-transform duration-150 group-hover:translate-x-0.5" />
            </button>
          </motion.div>

          <div className="flex flex-col gap-3">
            {/* Secondary, completely non-competing anchor link to the Founder Spotlight */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.48 }}
              className="flex items-center gap-2.5 pt-1.5 self-start"
              id="hero-founder-anchor-block"
            >
              <span className="flex h-1.5 w-1.5 relative">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#D6B16B]/50 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#D6B16B]/80"></span>
              </span>
              <button
                onClick={() => onNavigate('about')}
                className={`group/founder font-mono text-[10px] uppercase tracking-widest font-bold cursor-pointer flex items-center gap-1.5 transition-all duration-300 ${
                  darkMode ? 'text-neutral-300 hover:text-[#D6B16B]' : 'text-neutral-700 hover:text-[#D6B16B]'
                }`}
                id="hero-founder-smooth-scroll"
              >
                <span className="underline underline-offset-4 decoration-[#D6B16B]/20 group-hover/founder:decoration-[#D6B16B]/70 transition-colors duration-300">
                  {t('Meet the Founder')}
                </span>
                <span className="transition-transform duration-300 group-hover/founder:translate-x-0.5" aria-hidden="true">→</span>
              </button>
            </motion.div>

            {/* Micro-line supporting details */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.52 }}
              className={`text-[9px] font-sans font-medium uppercase tracking-[0.15em] self-start ${
                darkMode ? 'text-neutral-600' : 'text-neutral-400'
              }`}
            >
              {language === 'bn' ? 'ওয়েব ডেভেলপমেন্ট · ই-কমার্স · ডিজিটাল গ্রোথ' : 'Web Development · E-Commerce · Digital Growth'}
            </motion.div>
          </div>
        </div>

        {/* Right Side: Dense, Premium Floating Operational Dashboard Cards */}
        <div className="col-span-1 lg:col-span-5 relative min-h-[auto] lg:min-h-[500px] flex flex-col items-center justify-center lg:mt-0 mt-10" id="hero-right-contents">
          
          {/* DESKTOP ONLY: 3D Parallax & Floating Layered Widgets */}
          <div 
            className="hidden lg:block relative w-full h-full min-h-[460px]"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * -0.2}deg) rotateY(${mousePosition.x * 0.2}deg)`,
              transition: 'transform 0.2s ease-out'
            }}
          >
            {/* Background glowing rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#D6B16B]/5 blur-3xl pointer-events-none" />

            {/* Widget 1: Recent Launch Card (Centered, Floating high authority) */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`absolute top-0 left-[2%] w-[94%] p-5 rounded-2xl border ${
                darkMode ? 'bg-[#0B1016]/95 border-neutral-900 shadow-2xl shadow-black/80' : 'bg-white border-neutral-200 shadow-xl'
              }`}
            >
              <div className="flex items-center justify-between border-b border-neutral-900/10 dark:border-neutral-900 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-mono text-emerald-500 uppercase tracking-widest font-black">
                    PROJECT LAUNCH // LIVE
                  </span>
                </div>
              </div>
              
              <div className="space-y-1 mb-4">
                <h3 className="font-sans text-sm font-black uppercase text-white tracking-tight">
                  ZENITH CLOTHING BANGLADESH
                </h3>
                <p className="text-[10.5px] text-neutral-400 font-sans leading-relaxed">
                  High-performance eCommerce experience built for modern fashion retail.
                </p>
              </div>

              {/* Mini specs details bar */}
              <div className="grid grid-cols-3 gap-2 text-center pt-2">
                <div className="bg-neutral-950/40 border border-neutral-900/30 p-2 rounded-xl">
                  <span className="text-[8px] font-mono text-neutral-500 uppercase block mb-0.5">PERFORMANCE</span>
                  <span className="text-[9px] font-mono font-bold text-[#D6B16B] leading-tight">FAST & RESPONSIVE</span>
                </div>
                <div className="bg-neutral-950/40 border border-neutral-900/30 p-2 rounded-xl">
                  <span className="text-[8px] font-mono text-neutral-500 uppercase block mb-0.5">SHOPPING EXPERIENCE</span>
                  <span className="text-[9px] font-mono font-bold text-emerald-400 leading-tight">MOBILE-FIRST</span>
                </div>
                <div className="bg-neutral-950/40 border border-[#D6B16B]/20 bg-[#D6B16B]/[0.02] p-2 rounded-xl flex flex-col justify-center">
                  <span className="text-[8px] font-mono text-neutral-500 uppercase block mb-0.5">CONVERSION</span>
                  <span className="text-[9px] font-mono font-bold text-[#D6B16B] leading-tight">TRACKING READY</span>
                </div>
              </div>
            </motion.div>

            {/* Widget 2: Services & Tech stack (Overlapped left, bottom) */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 180 }}
              animate={{ opacity: 1, x: 0, y: 195 }}
              transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className={`absolute left-0 w-[52%] p-4 rounded-xl border z-20 ${
                darkMode ? 'bg-[#05070A]/95 border-neutral-900/80 shadow-2xl' : 'bg-[#FAFBFC] border-neutral-200 shadow-lg'
              }`}
            >
              <span className="text-[8px] font-mono text-[#D6B16B] uppercase tracking-widest block mb-2 font-bold flex items-center gap-1">
                <Cpu size={10} /> DIGITAL STACK // V4
              </span>
              <div className="space-y-1.5 text-[10px] font-sans">
                <div className="flex items-center gap-1.5 text-neutral-300">
                  <CheckCircle2 size={9} className="text-[#D6B16B]" />
                  <span>React + Next.js</span>
                </div>
                <div className="flex items-center gap-1.5 text-neutral-300">
                  <CheckCircle2 size={9} className="text-[#D6B16B]" />
                  <span>Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-1.5 text-neutral-300">
                  <CheckCircle2 size={9} className="text-[#D6B16B]" />
                  <span>Responsive UI</span>
                </div>
                <div className="flex items-center gap-1.5 text-neutral-300">
                  <CheckCircle2 size={9} className="text-[#D6B16B]" />
                  <span>WooCommerce</span>
                </div>
                <div className="flex items-center gap-1.5 text-neutral-300">
                  <CheckCircle2 size={9} className="text-emerald-500" />
                  <span className="text-[#D6B16B] font-bold">Conversion Tracking</span>
                </div>
              </div>
            </motion.div>

            {/* Widget 3: Tracking card (Overlapped right, bottom) */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 190 }}
              animate={{ opacity: 1, x: 0, y: 210 }}
              transition={{ duration: 1.1, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
              className={`absolute right-0 w-[44%] p-4 rounded-xl border z-10 ${
                darkMode ? 'bg-[#05070A]/95 border-neutral-900/80 shadow-2xl' : 'bg-[#FAFBFC] border-neutral-200 shadow-lg'
              }`}
            >
              <span className="text-[8px] font-mono text-[#D6B16B] uppercase block mb-1 font-bold flex items-center gap-1">
                <Activity size={10} /> TRACKING // ACTIVE
              </span>
              <div className="space-y-1 text-[9.5px]">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Meta Pixel:</span>
                  <span className="font-mono text-emerald-400 font-bold">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Conversion API:</span>
                  <span className="font-mono text-white font-bold">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Purchase Events:</span>
                  <span className="font-mono text-[#D6B16B] font-bold">Active</span>
                </div>
              </div>
              <div className="mt-3.5 h-[3px] bg-neutral-900 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#D6B16B] to-emerald-400 w-[95%] rounded-full animate-pulse" />
              </div>
            </motion.div>

            {/* Minor operational dashboard chip (Overlapped bottom most) */}
            <motion.div
              initial={{ opacity: 0, y: 350 }}
              animate={{ opacity: 1, y: 360 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="absolute left-[8%] w-[84%] bg-neutral-950/80 border border-neutral-900 p-2.5 rounded-lg flex items-center justify-between text-[8px] font-mono text-neutral-500 z-30"
            >
              <span className="flex items-center gap-1 text-[#D6B16B] font-bold"><Activity size={8} className="text-[#D6B16B]" /> SYSTEM STATUS</span>
              <span className="text-white">WEBSITE • LIVE</span>
              <span className="text-white">CHECKOUT • READY</span>
              <span className="text-white">ANALYTICS • CONNECTED</span>
            </motion.div>

          </div>

          {/* MOBILE ONLY: Optimized, Clean, High-Contrast Stacked Modules to avoid overlapping & clipping */}
          <div className="block lg:hidden w-full space-y-4" id="hero-mobile-stacked-showcase">
            
            {/* Module 1: Project Launch */}
            <div className={`p-5 rounded-xl border ${darkMode ? 'bg-[#0B1016]/95 border-neutral-900 shadow-2xl' : 'bg-white border-neutral-200 shadow-sm'} space-y-3`}>
              <div className="flex items-center justify-between border-b pb-2 mb-2 border-neutral-905" id="perf-metrics-header">
                <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-wider font-extrabold flex items-center gap-1.5">
                  <Zap size={11} /> PROJECT LAUNCH // LIVE
                </span>
              </div>
              
              <div className="space-y-1 mb-4 text-left">
                <h3 className="font-sans text-sm font-black uppercase text-white tracking-tight">
                  ZENITH CLOTHING BANGLADESH
                </h3>
                <p className="text-[10.5px] text-neutral-400 font-sans leading-relaxed">
                  High-performance eCommerce experience built for modern fashion retail.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-neutral-950/40 border border-neutral-900/30 p-2.5 rounded-xl">
                  <span className="text-[8px] font-mono text-neutral-500 uppercase block mb-0.5">PERFORMANCE</span>
                  <span className="text-[9px] font-mono font-bold text-[#D6B16B] leading-tight">FAST & RESPONSIVE</span>
                </div>
                <div className="bg-neutral-950/40 border border-neutral-900/30 p-2.5 rounded-xl flex flex-col justify-center">
                  <span className="text-[8px] font-mono text-neutral-500 uppercase block mb-0.5 leading-tight">SHOPPING EXPERIENCE</span>
                  <span className="text-[9px] font-mono font-bold text-emerald-400 leading-tight">MOBILE-FIRST</span>
                </div>
                <div className="bg-neutral-950/40 border border-[#D6B16B]/20 bg-[#D6B16B]/[0.02] p-2.5 rounded-xl flex flex-col justify-center">
                  <span className="text-[8px] font-mono text-neutral-500 uppercase block mb-0.5">CONVERSION</span>
                  <span className="text-[9px] font-mono font-bold text-[#D6B16B] leading-tight">TRACKING READY</span>
                </div>
              </div>
            </div>

            {/* Module 2: Technical Stack */}
            <div className={`p-5 rounded-xl border ${darkMode ? 'bg-[#0B1016]/95 border-neutral-900' : 'bg-white border-neutral-200'} space-y-3`}>
              <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-wider block font-extrabold flex items-center gap-1.5">
                <Cpu size={12} /> DIGITAL STACK // V4
              </span>
              <div className="grid grid-cols-2 gap-2 text-[10px] sm:text-[11px] font-sans text-neutral-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={10} className="text-[#D6B16B]" />
                  <span>React + Next.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={10} className="text-[#D6B16B]" />
                  <span>Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={10} className="text-[#D6B16B]" />
                  <span>Responsive UI</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={10} className="text-[#D6B16B]" />
                  <span>WooCommerce</span>
                </div>
                <div className="flex items-center gap-1.5 col-span-2">
                  <CheckCircle2 size={10} className="text-emerald-500" />
                  <span className="text-[#D6B16B] font-bold">Conversion Tracking</span>
                </div>
              </div>
            </div>

            {/* Module 3: Tracking Stream */}
            <div className={`p-5 rounded-xl border ${darkMode ? 'bg-[#0B1016]/95 border-neutral-900' : 'bg-white border-neutral-200'} space-y-3`}>
              <span className="text-[10px] font-mono text-[#D6B16B] uppercase block font-extrabold flex items-center gap-1.5">
                <Activity size={12} /> TRACKING // ACTIVE
              </span>
              <div className="grid grid-cols-3 gap-2 text-[10px]">
                <div className="flex flex-col">
                  <span className="text-neutral-500 text-[8px] uppercase">Meta Pixel</span>
                  <span className="font-mono text-emerald-400 font-black text-[11px] sm:text-sm mt-0.5">Active</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-neutral-500 text-[8px] uppercase">Conversion API</span>
                  <span className="font-mono text-white font-black text-[11px] sm:text-sm mt-0.5">Active</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-neutral-500 text-[8px] uppercase">Purchase Events</span>
                  <span className="font-mono text-[#D6B16B] font-black text-[11px] sm:text-sm mt-0.5">Active</span>
                </div>
              </div>
              <div className="h-1 bg-neutral-900 rounded-full overflow-hidden mt-1">
                <div className="h-full bg-gradient-to-r from-[#D6B16B] to-emerald-400 w-[95%] rounded-full" />
              </div>
            </div>

            {/* Module 4: Server Status */}
            <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-neutral-950/80 border-neutral-900' : 'bg-[#FAFBFC] border-neutral-200'} flex flex-col items-start gap-1.5 text-[9px] font-mono text-neutral-500`}>
              <span className="flex items-center gap-1.5 font-bold text-[#D6B16B] w-full border-b border-neutral-900/50 pb-1.5 mb-1"><Activity size={10} className="text-[#D6B16B]" /> SYSTEM STATUS</span>
              <div className="flex w-full justify-between">
                 <span className="text-white">WEBSITE • LIVE</span>
                 <span className="text-white">CHECKOUT • READY</span>
                 <span className="text-white">ANALYTICS • CONNECTED</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
