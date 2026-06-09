import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Terminal, Globe, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenInquiry: (type?: string) => void;
  darkMode: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInquiry, darkMode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax mouse position tracking
  useEffect(() => {
    const handleMouseMoveGlobal = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const moveX = (clientX - innerWidth / 2) / 30;
      const moveY = (clientY - innerHeight / 2) / 30;
      setMousePosition({ x: moveX, y: moveY });
    };

    window.addEventListener('mousemove', handleMouseMoveGlobal);
    return () => window.removeEventListener('mousemove', handleMouseMoveGlobal);
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden select-none"
    >
      {/* Premium Elegant Soft Backdrop */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden bg-transparent" id="ambient-digital-backdrop">
        
        {/* Layer 0: Analog Grain Film Noise */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.015] dark:opacity-[0.025] mix-blend-overlay" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px',
          }}
        />

        {/* Layer 1: Parallax Soft Ambient Lighting (Opulent Luxury Studio Glows) */}
        <div 
          className="absolute inset-0 transition-transform duration-[1200ms] ease-out pointer-events-none"
          style={{
            transform: `translate(${mousePosition.x * -0.4}px, ${mousePosition.y * -0.4}px)`,
          }}
        >
          {/* Studio Warm Gold Ambient Light Core */}
          <motion.div
            animate={{
              x: [0, 40, -20, 0],
              y: [0, -20, 30, 0],
              scale: [1, 1.05, 0.95, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[-10%] left-[20%] w-[900px] h-[550px] rounded-full bg-[radial-gradient(circle,rgba(214,177,107,0.12)_0%,rgba(214,177,107,0.01)_50%,rgba(0,0,0,0)_70%)] dark:bg-[radial-gradient(circle,rgba(214,177,107,0.06)_0%,rgba(214,177,107,0.003)_50%,rgba(0,0,0,0)_70%)] blur-[50px]"
          />

          {/* Studio Deep Blue Slate Accent Shadow */}
          <motion.div
            animate={{
              x: [0, -40, 30, 0],
              y: [0, 30, -20, 0],
              scale: [1, 0.96, 1.04, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[-8%] right-[10%] w-[800px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(126,212,255,0.08)_0%,rgba(126,212,255,0.01)_45%,rgba(0,0,0,0)_65%)] dark:bg-[radial-gradient(circle,rgba(126,212,255,0.04)_0%,rgba(126,212,255,0.001)_45%,rgba(0,0,0,0)_65%)] blur-[55px]"
          />
        </div>

        {/* Layer 2: Slow Volumetric Ambient Studio Light Rays (Cinematic Atmosphere) */}
        <div 
          className="absolute inset-0 mix-blend-screen pointer-events-none"
          style={{
            transform: `translate(${mousePosition.x * 0.12}px, ${mousePosition.y * 0.12}px)`,
          }}
        >
          {/* Left Warm Lighting Ray */}
          <motion.div 
            animate={{
              opacity: [0.15, 0.35, 0.15],
              rotate: [-12, -8, -12],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: 'top left' }}
            className="absolute -top-[45%] left-[8%] w-[40%] h-[185%] bg-gradient-to-b from-[#D6B16B]/[0.035] via-[#D6B16B]/[0.008] to-transparent blur-[80px]" 
          />

          {/* Right Sapphire/Blue Lighting Ray */}
          <motion.div 
            animate={{
              opacity: [0.12, 0.28, 0.12],
              rotate: [10, 14, 10],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: 'top right' }}
            className="absolute -top-[45%] right-[6%] w-[38%] h-[195%] bg-gradient-to-b from-[#7ED4FF]/[0.025] via-[#7ED4FF]/[0.003] to-transparent blur-[85px]" 
          />
        </div>

        {/* Layer 3: Linear Dynamic Architectural Grid */}
        <div 
          className={`absolute inset-0 bg-[linear-gradient(rgba(214,177,107,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(214,177,107,0.01)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none ${
            darkMode ? 'opacity-[0.75]' : 'opacity-[0.1]'
          }`}
          id="hero-ambient-digital-grid"
        />
      </div>

      {/* Main Elements wrapped in motion stagger layouts */}
      <div className="relative z-10 w-full max-w-5xl text-center flex flex-col items-center" id="hero-middle-stack">
        
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-8 ${
            darkMode 
              ? 'bg-neutral-950/80 border-neutral-800/80 text-neutral-300' 
              : 'bg-neutral-100/80 border-neutral-300/80 text-neutral-700'
          }`}
          id="hero-audience-eyebrow"
        >
          <span className="flex h-1.5 w-1.5 relative" id="badge-pulsing-glow">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono leading-none">
            Trusted by 150+ Clients & Organizations
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.98, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={`font-sans text-3.5xl sm:text-5.5xl md:text-[62px] font-black tracking-tight leading-[1.05] uppercase ${
            darkMode ? 'text-white' : 'text-[#111827]'
          }`}
          id="hero-brand-statement"
        >
          Premium <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D6B16B] via-[#E4C78A] to-[#D6B16B]">Website Development</span> &amp; Digital Marketing Agency in Bangladesh
        </motion.h1>

        {/* Secondary Headline */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className={`font-sans text-xl sm:text-3xl md:text-[36px] font-extrabold tracking-tight mt-6 leading-tight ${
            darkMode ? 'text-neutral-200' : 'text-neutral-800'
          }`}
        >
          Premium <span className="font-serif italic font-light">Websites.</span> Powerful Marketing. <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D6B16B] via-[#E4C78A] to-[#7ED4FF]">Measurable Growth.</span>
        </motion.h2>

        {/* Subheadline description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed font-sans"
          id="hero-subdescription"
        >
          We help businesses build, grow, and scale through independent, high-performance web systems and bulletproof digital acquisition models. No lazy templates. Just highly tailored digital solutions engineered for scale.
        </motion.p>

        {/* CTA Button Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap gap-4 justify-center animate-ambient z-20"
          id="hero-cta-button-block"
        >
          <button
            onClick={() => onOpenInquiry('web-dev')}
            className={`group flex items-center gap-2 py-4 px-8 rounded-xl font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xl cursor-pointer ${
              darkMode 
                ? 'bg-[#D6B16B] text-neutral-950 hover:bg-[#E4C78A] hover:scale-105 shadow-[0_0_40px_rgba(214,177,107,0.25)]' 
                : 'bg-[#B88A44] text-white hover:bg-[#D6B16B] hover:scale-105 shadow-md'
            }`}
            id="hero-primary-consult-cta"
          >
            <span>Get a Free Consultation</span>
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => onOpenInquiry('custom')}
            className={`group flex items-center gap-2 py-4 px-8 rounded-xl font-sans text-xs font-bold uppercase tracking-wider border transition-all duration-300 cursor-pointer ${
              darkMode
                ? 'bg-white/[0.04] border-[#D6B16B]/30 text-white hover:bg-[#7ED4FF]/5 hover:border-[#7ED4FF]/50 hover:shadow-[0_0_25px_rgba(126,212,255,0.18)]'
                : 'bg-white border-[#B88A44]/30 text-[#4B5563] hover:text-[#111827] hover:border-[#4FAFE8] hover:bg-[#4FAFE8]/5'
            }`}
            id="hero-secondary-quote-cta"
          >
            <span>Request a Custom Quote</span>
            <ChevronRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Premium Floating Browser Mockup (Cinematic 3D Tilt Effect) */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * -0.4}deg) rotateY(${mousePosition.x * 0.4}deg)`,
            transition: 'transform 0.15s ease-out'
          }}
          className="relative w-full max-w-4xl mt-16 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#0B1016]/95 shadow-2xl shadow-black/80 overflow-hidden"
          id="hero-browser-mockup"
        >
          {/* Dynamic gloss reflection overlay (Chameleon Glass reflection) */}
          <div 
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10 opacity-30 mix-blend-overlay"
            style={{
              background: `radial-gradient(circle 280px at ${50 + mousePosition.x * 1.5}% ${50 + mousePosition.y * 1.5}%, rgba(255, 255, 255, 0.18) 0%, transparent 100%)`
            }}
          />

          {/* Browser Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[rgba(255,255,255,0.08)] bg-[#05070A]/85 bg-opacity-70 backdrop-blur-md relative z-20" id="browser-bar-header">
            <div className="flex items-center gap-1.5" id="browser-dots">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            
            {/* Safe Domain Address Bar */}
            <div className="text-[10px] text-neutral-500 font-mono px-6 py-1 rounded-full bg-neutral-900 tracking-wide flex items-center gap-1 w-full max-w-sm justify-center" id="browser-address-field">
              <Globe size={10} className="text-neutral-500" />
              <span>sitoraweb.com/solutions</span>
            </div>

            <div className="flex items-center gap-2 text-neutral-500" id="browser-decor">
              <Terminal size={12} />
              <span className="text-[9px] font-mono tracking-widest uppercase hidden sm:inline">Active Build</span>
            </div>
          </div>

          {/* Interactive UI Screen inside browser */}
          <div className="relative p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[350px] bg-[#0B1016] text-left overflow-hidden relative z-0" id="browser-screengrid">
            {/* Background elements inside mockup */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#D6B16B]/8 blur-[70px] pointer-events-none" />

            {/* Left Column code simulation */}
            <div className="md:col-span-5 flex flex-col justify-between border-r border-neutral-900/60 pr-6 space-y-4" id="browser-mockup-left">
              <div>
                <div className="flex items-center gap-2 mb-2" id="live-analytics-label">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] uppercase tracking-widest font-mono text-emerald-400 font-semibold">CAPI Active Stream</span>
                </div>
                <h4 className="font-sans text-sm font-bold text-white tracking-tight leading-snug">
                  Enterprise Tracking Architecture
                </h4>
                <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                  Real-time server validation matching client actions with absolute precision.
                </p>
              </div>

              {/* Graphical Visualizer */}
              <div className="p-3 border border-neutral-900 bg-neutral-950/80 rounded-xl space-y-2" id="mockup-linechart-card">
                <div className="flex items-center justify-between text-[9px] font-mono text-neutral-500">
                  <span>Conversions Rate</span>
                  <span className="text-emerald-400">+382%</span>
                </div>
                <div className="h-12 flex items-end gap-1.5" id="mock-graph-bars">
                  <span className="w-full bg-neutral-900 rounded-sm h-[30%]" />
                  <span className="w-full bg-neutral-900 rounded-sm h-[45%]" />
                  <span className="w-full bg-neutral-800 rounded-sm h-[60%]" />
                  <span className="w-full bg-neutral-800 rounded-sm h-[50%]" />
                  <span className="w-full bg-[#D6B16B]/20 rounded-sm h-[75%]" />
                  <span className="w-full bg-[#D6B16B] rounded-sm h-[100%]" />
                </div>
              </div>
            </div>

            {/* Right Column visual preview resemble Image 01/02 */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-6" id="browser-mockup-right">
              <div className="flex items-center justify-between border-b border-neutral-900 pb-3" id="mockup-header-stats">
                <span className="text-[10px] font-mono text-[#D6B16B] tracking-widest uppercase">Apex Corporation Limited</span>
                <span className="text-[9px] text-neutral-500 font-mono">0.32s LATENCY</span>
              </div>

              {/* Big bold representation */}
              <div className="space-y-2" id="mockup-hero-typo">
                <div className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase mb-1">FEATURED PROJECT</div>
                <div className="font-sans font-black text-2xl sm:text-3.5xl text-white tracking-tighter leading-none uppercase">
                  OCEAN ODYSSEY
                </div>
                <p className="text-[11px] text-neutral-400 leading-snug max-w-md">
                  Converting traditional deep marine tourism agency systems into an elegant dynamic web visual layout.
                </p>
              </div>

              {/* Interactive buttons */}
              <div className="flex items-center gap-3 pt-2" id="mockup-footer-action">
                <span className="text-[10px] font-mono text-neutral-500">ENGAGEMENT INDEX:</span>
                <span className="px-2 py-0.5 rounded-full border border-[rgba(255,255,255,0.08)] bg-[#101722] font-mono text-[9px] text-[#7ED4FF]">
                  9.82 // AWWWARDS IDEAL
                </span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
