import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ExternalLink, ArrowRight, Github, Facebook, Instagram, Linkedin, Twitter, Youtube, Anchor } from 'lucide-react';
import { SitoraLogoWithText } from './SitoraLogo';

interface FooterProps {
  onOpenInquiry: (planName?: string) => void;
  darkMode: boolean;
  onNavigate?: (view: 'home' | 'blog' | 'portfolio', id?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry, darkMode, onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/sitoraweb', icon: <Facebook size={14} /> },
    { name: 'Instagram', href: 'https://www.instagram.com/sitora_web/', icon: <Instagram size={14} /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sitora-web-4971b4408', icon: <Linkedin size={14} /> },
    { name: 'X (Twitter)', href: 'https://x.com/SitoraWeb', icon: <Twitter size={14} /> },
    { name: 'YouTube', href: 'https://www.youtube.com/@SitoraWeb', icon: <Youtube size={14} /> },
    // Custom mock SVG for aesthetic pins or tags
    { name: 'Pinterest', href: 'https://www.pinterest.com/sitora_web/', icon: <span className="text-[10px] font-bold font-sans">P</span> },
    { name: 'TikTok', href: 'https://www.tiktok.com/@sitoraweb', icon: <span className="text-[10px] font-bold font-sans">T</span> }
  ];

  const quickLinksColumn1 = [
    { label: 'Featured Web Design', href: '#services' },
    { label: 'E-Commerce Portals', href: '#services' },
    { label: 'Landing Engineering', href: '#services' },
    { label: 'CAPI Server Linkings', href: '#services' }
  ];

  const quickLinksColumn2 = [
    { label: 'Crafted Experiences', href: '#crafted-experiences' },
    { label: 'Agency Genesis', href: '#about' },
    { label: 'Strategic Insights', href: '#insights' },
    { label: 'FAQ Accordions', href: '#faq' }
  ];

  const handleNavClick = (href: string, label?: string) => {
    if (onNavigate) {
      if (label === 'Crafted Experiences' || href === '#crafted-experiences') {
        onNavigate('portfolio');
        return;
      }
      if (label === 'Strategic Insights' || href === '#insights') {
        onNavigate('blog');
        return;
      }
      onNavigate('home', href.replace('#', ''));
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative mt-20" id="sitora-footer">
      
      {/* ─────────────────────────── FINAL CTA SECTION ─────────────────────────── */}
      <div className="relative py-20 border-t border-neutral-900/60 overflow-hidden" id="final-cta">
        {/* Glow element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#D6B16B]/5 blur-[90px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6 relative z-10" id="final-cta-container">
          <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-[0.3em] block">
            Initiate Partnership
          </span>
          <h2 className={`font-sans text-3xl sm:text-5xl font-extrabold tracking-tight leading-none ${
            darkMode ? 'text-[#F7F8FA]' : 'text-[#111827]'
          }`} id="final-cta-headline">
            Build Your Digital Presence With Confidence
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto leading-relaxed" id="final-cta-text">
            From premium websites to digital marketing solutions, Sitora Web helps businesses grow online with practical strategies and dedicated support.
          </p>

          <div className="pt-4 flex flex-wrap gap-4 justify-center" id="final-cta-actions">
            <button
              onClick={() => onOpenInquiry('web-dev')}
              className={`group flex items-center gap-2 py-4 px-8 rounded-xl font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xl cursor-pointer ${
                darkMode 
                  ? 'bg-[#D6B16B] text-neutral-950 hover:bg-[#bf9b59] shadow-[0_0_40px_rgba(214,177,107,0.2)]' 
                  : 'bg-[#B88A44] text-white hover:bg-[#9d7232]'
              }`}
              id="final-cta-btn-primary"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* ─────────────────────────── CORE FOOTER BLOCK ─────────────────────────── */}
      <div className={`border-t border-neutral-900/15 dark:border-neutral-900 pt-16 pb-8 ${
        darkMode ? 'bg-black text-neutral-400' : 'bg-neutral-50 text-neutral-600'
      }`} id="footer-core-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="footer-inner-grid">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-neutral-900/10 dark:border-neutral-900/80" id="footer-main-row">
            
            {/* Column 1: Sitora Brand details */}
            <div className="md:col-span-4 space-y-6" id="footer-col-brand">
              <a 
                href="#home" 
                onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('home', 'home'); }} 
                className="block cursor-pointer" 
                id="footer-logo-link"
              >
                <SitoraLogoWithText isLight={!darkMode} iconSize={40} showTagline={true} />
              </a>
              
              <p className="text-[11px] leading-relaxed max-w-sm" id="footer-brand-p">
                Sitora Web is Bangladesh's premier independent boutique digital agency. We hand-sketch, hand-code, and operationally maintain performance web ecosystems and customer acquisition channels for luxury brands, local champions, and fast-scaling enterprises.
              </p>

              {/* Physical details + WhatsApp Hotline */}
              <div className="space-y-3.5 text-[10.5px] font-sans" id="footer-address-block">
                <div className="flex items-center gap-2">
                  <MapPin size={12} className="text-[#D6B16B]" />
                  <span>Narayanganj, Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={12} className="text-[#D6B16B]" />
                  <a href="mailto:hello@sitora.org" className="hover:text-white transition-colors">hello@sitora.org</a>
                </div>
                
                {/* WhatsApp Business Hotline */}
                <div className="pt-2 border-t border-neutral-900/10 dark:border-neutral-900/30 space-y-1.5" id="footer-whatsapp-block">
                  <span className="text-[9px] font-mono tracking-widest text-[#D6B16B] uppercase block">
                    WhatsApp Business Hotline
                  </span>
                  <div className="flex items-start gap-2">
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" className="text-emerald-500 mt-0.5 shrink-0">
                      <path d="M12.031 2C6.49 2 2 6.47 2 12.01c0 1.91.53 3.69 1.45 5.23L2 22l4.91-1.39c1.47.8 3.14 1.26 4.9 1.26 5.54 0 10.03-4.47 10.03-10.01C21.84 6.47 17.57 2 12.03 2zm5.72 13.91c-.24.68-1.21 1.24-1.68 1.29-.46.06-.9.23-2.91-.59-2.58-1.05-4.22-3.66-4.35-3.83-.13-.17-1.02-1.36-1.02-2.59 0-1.23.64-1.83.87-2.07.23-.24.51-.3.68-.3.17 0 .34.01.49.02.16.01.37-.06.58.44.22.52.75 1.83.82 1.97.07.14.12.31.02.51-.1.2-.15.31-.3.49-.15.18-.32.4-.46.54-.16.16-.33.34-.14.67.19.32.84 1.39 1.81 2.25.97.86 1.79 1.12 2.05 1.25.26.13.41.11.56-.06.15-.17.65-.76.82-.96.17-.2.34-.17.58-.09.24.08 1.54.73 1.8.86.26.13.43.19.49.3.06.11.06.63-.18 1.31z" />
                    </svg>
                    <div className="space-y-0.5">
                      <a 
                        href="https://wa.me/8801629586290" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-bold text-[11px] hover:text-emerald-400 transition-colors block text-white"
                        id="footer-whatsapp-anchor-link"
                      >
                        +880 1629-586290
                      </a>
                      <p className="text-[10px] text-neutral-450 leading-relaxed">
                        Available for project discussions, quotations, and support inquiries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Services directories */}
            <div className="md:col-span-2.5 space-y-4" id="footer-col-services">
              <h3 className={`text-[10px] uppercase tracking-widest font-mono font-bold ${
                darkMode ? 'text-[#F7F8FA]' : 'text-[#111827]'
              }`}>
                Competency Guilds
              </h3>
              <ul className="space-y-2.5 text-[11px]" id="footer-list-services">
                {quickLinksColumn1.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.href} 
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href, link.label); }}
                      className="hover:text-[#D6B16B] dark:hover:text-[#D6B16B] hover:text-[#B88A44] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Corporate structures */}
            <div className="md:col-span-2.5 space-y-4" id="footer-col-corp">
              <h3 className={`text-[10px] uppercase tracking-widest font-mono font-bold ${
                darkMode ? 'text-[#F7F8FA]' : 'text-[#111827]'
              }`}>
                Institutional Index
              </h3>
              <ul className="space-y-2.5 text-[11px]" id="footer-list-corp">
                {quickLinksColumn2.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.href} 
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href, link.label); }}
                      className="hover:text-[#D6B16B] dark:hover:text-[#D6B16B] hover:text-[#B88A44] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Social linkages channels */}
            <div className="md:col-span-3 space-y-4" id="footer-col-socials">
              <h3 className={`text-[10px] uppercase tracking-widest font-mono font-bold ${
                darkMode ? 'text-[#F7F8FA]' : 'text-[#111827]'
              }`}>
                Global Social Nodes
              </h3>
              <div className="grid grid-cols-2 gap-2" id="footer-socials-grid">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 p-2.5 px-3.5 rounded-lg border text-[10px] font-sans transition-all duration-300 min-h-11 ${
                      darkMode 
                        ? 'border-neutral-900 bg-neutral-950 hover:border-neutral-800 hover:bg-neutral-900 text-neutral-400 hover:text-white' 
                        : 'border-neutral-200 bg-white hover:border-neutral-300 text-neutral-600 hover:text-black hover:shadow-sm'
                    }`}
                    aria-label={`Visit our ${social.name} profile`}
                    id={`footer-social-link-${social.name.replace(/\s+/g, '-')}`}
                  >
                    <span className="text-[#D6B16B]">{social.icon}</span>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Underlay legal footnotes */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-neutral-900/40 text-[10px] font-mono text-neutral-500" id="footer-legal-bar">
            
            <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-start" id="footer-legal-meta">
              <span>© {currentYear} Sitora Web Limited. All rights reserved.</span>
              <span>•</span>
              <a 
                href="https://docs.google.com/document/d/1O_kNuEx3a1ho0hmOypcMKnbhMwbDE2ZHY0i3cE02xqU/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#D6B16B] dark:hover:text-[#D6B16B] hover:text-[#B88A44] transition-all flex items-center gap-1 font-semibold underline decoration-neutral-850 underline-offset-2"
                id="privacy-policy-anchor"
              >
                Privacy Policy <ExternalLink size={10} />
              </a>
              <span>•</span>
              <a 
                href="https://docs.google.com/document/d/1f3GoK9hmRxKQPcS6ziy2VIiOiR2dFxVSy6RE3k6YnIQ/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#D6B16B] dark:hover:text-[#D6B16B] hover:text-[#B88A44] transition-all flex items-center gap-1 font-semibold underline decoration-neutral-850 underline-offset-2"
                id="terms-conditions-anchor"
              >
                শর্তাবলী (Terms) <ExternalLink size={10} />
              </a>
              <span>•</span>
              <a href="#about" onClick={() => handleNavClick('#about')} className="hover:text-[#D6B16B] dark:hover:text-[#D6B16B] hover:text-[#B88A44]">Dhaka, Bangladesh HQ</a>
            </div>

            <div className="flex gap-4 items-center" id="footer-analytics-indicators">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D6B16B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#D6B16B]"></span>
              </span>
              <span>GA4 ID: UA-SITORA-SECURE</span>
              <span>•</span>
              <span>ROBOTS.TXT VALID</span>
            </div>

          </div>

        </div>
      </div>

    </footer>
  );
};
