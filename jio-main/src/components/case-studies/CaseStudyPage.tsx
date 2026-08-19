import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../LanguageContext';
import { CASE_STUDIES_DATA } from '../../data/caseStudiesData';

interface CaseStudyPageProps {
  darkMode: boolean;
  onBackToHome: () => void;
  onNavigate: (view: any) => void;
  onOpenInquiry: () => void;
  activeCaseStudyId: string | null;
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ 
  darkMode, 
  onBackToHome, 
  onNavigate,
  onOpenInquiry,
  activeCaseStudyId
}) => {
  const { language, t } = useLanguage();
  const isBn = language === 'bn';
  
  const caseStudy = CASE_STUDIES_DATA.find(cs => cs.id === activeCaseStudyId || cs.slug === activeCaseStudyId) || CASE_STUDIES_DATA[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeCaseStudyId]);

  if (!caseStudy) {
    return <div className="min-h-screen flex items-center justify-center">Case study not found</div>;
  }

  return (
    <div className={`min-h-screen pt-24 pb-20 ${darkMode ? 'bg-[#05070A] text-[#F7F8FA]' : 'bg-[#FAFBFC] text-[#111827]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex text-sm font-sans mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href={isBn ? '/bn' : '/'} onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className={`inline-flex items-center ${darkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-neutral-900'}`}>
                {t('Home') || 'Home'}
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-neutral-400">→</span>
                <a href={isBn ? '/bn/crafted-experiences' : '/crafted-experiences'} onClick={(e) => { e.preventDefault(); onNavigate('portfolio'); }} className={`${darkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-neutral-900'}`}>
                  {t('Portfolio') || 'Portfolio'}
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-neutral-400">→</span>
                <span className={`${darkMode ? 'text-white' : 'text-neutral-900'} font-medium`}>
                  {caseStudy.title}
                </span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Section 01: Hero */}
        <section className="mb-20">
          <div className="max-w-4xl">
            <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-[0.25em] block mb-4">
              {caseStudy.eyebrow}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              {caseStudy.title}
            </h1>
            <p className={`text-lg md:text-xl leading-relaxed mb-10 max-w-3xl ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
              {caseStudy.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a 
                href={caseStudy.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold bg-[#D6B16B] text-neutral-900 hover:bg-opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(214,177,107,0.3)]"
              >
                VIEW REDESIGN DEMO →
              </a>
              <a 
                href={caseStudy.videoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold border transition-all duration-300 ${
                  darkMode 
                    ? 'border-neutral-700 hover:border-neutral-500 text-white bg-transparent hover:bg-white/5' 
                    : 'border-neutral-300 hover:border-neutral-500 text-neutral-900 bg-transparent hover:bg-black/5'
                }`}
              >
                WATCH PROJECT WALKTHROUGH →
              </a>
            </div>
          </div>
          
          <div className="relative w-full aspect-video md:aspect-[16/9] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-2xl">
            <img 
              src={caseStudy.images.hero} 
              alt={`${caseStudy.title} hero view`} 
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </section>

        {/* Section 02: Disclosure */}
        <section className={`mb-20 p-6 md:p-8 rounded-2xl border ${darkMode ? 'border-neutral-800 bg-neutral-900/50' : 'border-neutral-200 bg-white shadow-sm'}`}>
          <h2 className="text-xl font-bold mb-3">A Self-Initiated Concept</h2>
          <p className={`text-sm leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
            This project was independently created by Sitora Web as a website redevelopment concept for portfolio and demonstration purposes. It explores how a roofing business website could be restructured around clarity, trust, interaction and stronger enquiry paths.<br/><br/>
            <strong>North Shore Roofing & Gutters is not a Sitora Web client.</strong>
          </p>
        </section>

        {/* Section 03: Overview */}
        <section className="mb-24">
          <h2 className="text-3xl font-extrabold mb-10">The Project at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'Industry', value: caseStudy.industry },
              { label: 'Project', value: caseStudy.type },
              { label: 'Focus', value: caseStudy.scope },
              { label: 'Experience', value: 'Responsive Web Experience' },
              { label: 'Interactive Elements', value: 'Assessment Tools / Guided Experiences' },
              { label: 'Platform', value: 'Modern React-based frontend experience' },
            ].map((item, i) => (
              <div key={i} className={`p-6 rounded-2xl border ${darkMode ? 'border-neutral-800 bg-[#0A0F16]' : 'border-neutral-200 bg-white'}`}>
                <div className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-widest mb-2">{item.label}</div>
                <div className="font-bold text-lg">{item.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 04: Original Experience */}
        <section className="mb-24">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Where the Experience Started</h2>
            <h3 className="text-xl font-medium text-[#D6B16B] mb-6">Understanding the Original Website</h3>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
              The original experience already communicated the core services and business information. The redesign exploration focused on how the same type of information could be reorganized into a more structured, visually engaging and conversion-oriented journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-[rgba(255,255,255,0.1)]">
                <img src={caseStudy.images.original.homepage} alt="Original North Shore Roofing website homepage" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>
              <div className="text-sm font-mono text-center opacity-70">Original Homepage</div>
            </div>
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-[rgba(255,255,255,0.1)]">
                <img src={caseStudy.images.original.services} alt="Original roofing services website interface" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>
              <div className="text-sm font-mono text-center opacity-70">Original Services</div>
            </div>
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-[rgba(255,255,255,0.1)]">
                <img src={caseStudy.images.original.estimator} alt="Original roofing quote experience" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>
              <div className="text-sm font-mono text-center opacity-70">Original Quote Flow</div>
            </div>
          </div>
        </section>

        {/* Section 05: Redesign Opportunity */}
        <section className="mb-24">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">From Information to Experience</h2>
            <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
              These design decisions were intended to create a clearer path from discovery to enquiry by focusing on clearer hierarchy, stronger visual storytelling, interactive user journeys, and robust trust presentation.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 px-4 md:px-12 py-10 rounded-3xl border border-[rgba(255,255,255,0.05)] bg-[#101722]/30 dark:bg-[#101722]/10">
            {['DISCOVER', 'UNDERSTAND', 'TRUST', 'EXPLORE', 'ENQUIRE'].map((step, i, arr) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#D6B16B]/10 text-[#D6B16B] font-mono font-bold mb-3 border border-[#D6B16B]/20">
                    0{i + 1}
                  </div>
                  <div className="font-bold tracking-widest text-sm">{step}</div>
                </div>
                {i < arr.length - 1 && (
                  <div className="hidden md:block w-8 h-[1px] bg-neutral-700" />
                )}
                {i < arr.length - 1 && (
                  <div className="block md:hidden h-6 w-[1px] bg-neutral-700" />
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* Section 06: Original vs Concept */}
        <section className="mb-24">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Original vs Sitora Web Concept</h2>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
              A visual comparison between the original experience and the independent redesign concept.
            </p>
          </div>
          
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <div className="text-sm font-bold tracking-widest text-neutral-500 mb-2">ORIGINAL WEBSITE</div>
                <div className="rounded-xl overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-lg">
                  <img src={caseStudy.images.original.homepage} alt="Original Homepage" className="w-full h-auto" loading="lazy" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-sm font-bold tracking-widest text-[#D6B16B] mb-2 flex items-center">
                  SITORA WEB CONCEPT 
                  <span className="ml-2 inline-block px-2 py-0.5 rounded text-[10px] bg-[#D6B16B]/20 text-[#D6B16B]">NEW</span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#D6B16B]/30 shadow-2xl">
                  <img src={caseStudy.images.redesign.homepage} alt="Redesigned Homepage" className="w-full h-auto" loading="lazy" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <div className="text-sm font-bold tracking-widest text-neutral-500 mb-2">ORIGINAL WEBSITE</div>
                <div className="rounded-xl overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-lg">
                  <img src={caseStudy.images.original.services} alt="Original Services" className="w-full h-auto" loading="lazy" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-sm font-bold tracking-widest text-[#D6B16B] mb-2 flex items-center">
                  SITORA WEB CONCEPT 
                </div>
                <div className="rounded-xl overflow-hidden border border-[#D6B16B]/30 shadow-2xl">
                  <img src={caseStudy.images.redesign.services} alt="Redesigned Services" className="w-full h-auto" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 07: Homepage Redesign */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">A Clearer First Impression</h2>
          
          <div className="rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-2xl mb-12">
            <img src={caseStudy.images.redesign.homepage} alt="Redesigned homepage clear first impression" className="w-full h-auto" loading="lazy" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className={`p-6 rounded-2xl border ${darkMode ? 'border-neutral-800 bg-[#0A0F16]' : 'border-neutral-200 bg-white'}`}>
              <h3 className="font-bold text-lg mb-3">CLEAR POSITIONING</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>The visitor quickly understands what the business offers.</p>
            </div>
            <div className={`p-6 rounded-2xl border ${darkMode ? 'border-neutral-800 bg-[#0A0F16]' : 'border-neutral-200 bg-white'}`}>
              <h3 className="font-bold text-lg mb-3">TRUST SIGNALS</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>Licensing, experience, documentation and service assurances are surfaced strategically.</p>
            </div>
            <div className={`p-6 rounded-2xl border ${darkMode ? 'border-neutral-800 bg-[#0A0F16]' : 'border-neutral-200 bg-white'}`}>
              <h3 className="font-bold text-lg mb-3">ACTION-ORIENTED CTA</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>The primary journey is designed to make the next step obvious.</p>
            </div>
            <div className={`p-6 rounded-2xl border ${darkMode ? 'border-neutral-800 bg-[#0A0F16]' : 'border-neutral-200 bg-white'}`}>
              <h3 className="font-bold text-lg mb-3">VISUAL HIERARCHY</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>Important information is easier to scan without requiring the visitor to read everything.</p>
            </div>
          </div>
        </section>

        {/* Section 08: Interactive Experiences */}
        <section className="mb-24">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Turning a Website Into an Experience</h2>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
              Instead of presenting every service as static information, the concept introduces guided interactions that help visitors identify what they may need and move toward a relevant enquiry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-lg aspect-video">
                <img src={caseStudy.images.redesign.process} alt="Roof Assessment Experience" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">ROOF ASSESSMENT</h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  Interactive step-by-step assessment guiding users to articulate their specific roofing needs.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-lg aspect-video">
                <img src={caseStudy.images.redesign.about} alt="AI Roof Damage Concept" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">AI ROOF DAMAGE CONCEPT (COMING SOON)</h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  Exploring how artificial intelligence could assist homeowners in preliminary roof damage evaluation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 09: Conversion Experience */}
        <section className="mb-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Designed Around the Next Step</h2>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
              The concept introduces multiple clear enquiry paths without making the experience feel aggressive, focusing on low-friction interaction and a strong CTA hierarchy.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center max-w-4xl mx-auto">
            <div className={`p-4 w-full md:w-auto rounded-xl border ${darkMode ? 'border-neutral-800 bg-neutral-900/50' : 'border-neutral-200 bg-white'}`}>
              <span className="font-bold">VISITOR EXPLORES</span>
            </div>
            <span className="text-[#D6B16B]">↓</span>
            <div className={`p-4 w-full md:w-auto rounded-xl border ${darkMode ? 'border-neutral-800 bg-neutral-900/50' : 'border-neutral-200 bg-white'}`}>
              <span className="font-bold">UNDERSTANDS</span>
            </div>
            <span className="text-[#D6B16B]">↓</span>
            <div className={`p-4 w-full md:w-auto rounded-xl border ${darkMode ? 'border-neutral-800 bg-neutral-900/50' : 'border-neutral-200 bg-white'}`}>
              <span className="font-bold">BUILDS CONFIDENCE</span>
            </div>
            <span className="text-[#D6B16B]">↓</span>
            <div className={`p-4 w-full md:w-auto rounded-xl border border-[#D6B16B] bg-[#D6B16B]/10`}>
              <span className="font-bold text-[#D6B16B]">REQUESTS QUOTE</span>
            </div>
          </div>
        </section>

        {/* Section 10: Trust & Transparency */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Building Trust Before the Enquiry</h2>
              <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                For high-consideration home services, trust often needs to be established before a visitor is ready to enquire. The concept therefore makes process, documentation and reassurance part of the digital experience.
              </p>
              <ul className="space-y-4 font-medium">
                <li className="flex items-center gap-3">
                  <span className="text-[#D6B16B]">✓</span> Process transparency
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#D6B16B]">✓</span> Warranty presentation
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#D6B16B]">✓</span> Licensing and insurance details
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#D6B16B]">✓</span> Local coverage demonstration
                </li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-2xl">
              <img src={caseStudy.images.redesign.caseStudyOverview} alt="Trust and Transparency sections" className="w-full h-auto" loading="lazy" />
            </div>
          </div>
        </section>
        
        {/* Section 11: Mobile */}
        <section className="mb-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Built for the Way People Browse Today</h2>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
              The responsive layout prioritizes mobile CTA accessibility, touch-friendly controls, and readable typography, ensuring core service information and mobile enquiry paths are instantly available on any device.
            </p>
          </div>
        </section>

        {/* Section 12: Project Walkthrough */}
        <section className="mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">See the Redesign in Action</h2>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                Watch the complete walkthrough of the original experience, redesign direction and the final concept.
              </p>
            </div>
            
            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-2xl bg-black mb-6 relative">
              <iframe 
                width="100%" 
                height="100%" 
                src={caseStudy.videoUrl.replace('youtu.be/', 'www.youtube.com/embed/')} 
                title={`${caseStudy.title} Video Walkthrough`}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute inset-0"
                loading="lazy"
              ></iframe>
            </div>
            <div className="text-center">
              <a 
                href={caseStudy.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-bold tracking-widest text-[#D6B16B] hover:underline"
              >
                WATCH ON YOUTUBE →
              </a>
            </div>
          </div>
        </section>

        {/* Section 13: Live Experience */}
        <section className="mb-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10">Explore the Concept Yourself</h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href={caseStudy.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold border transition-all duration-300 ${
                darkMode 
                  ? 'border-neutral-700 hover:border-neutral-500 bg-neutral-900/50' 
                  : 'border-neutral-300 hover:border-neutral-500 bg-white'
              }`}
            >
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Original Site</div>
                <div>VIEW ORIGINAL WEBSITE →</div>
              </div>
            </a>
            
            <a 
              href={caseStudy.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold bg-[#D6B16B] text-neutral-900 hover:bg-opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(214,177,107,0.2)]"
            >
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-widest opacity-80 mb-1">Hosted by Sitora Web</div>
                <div>LIVE REDESIGN DEMO →</div>
              </div>
            </a>
          </div>
        </section>

        {/* Section 14: What This Project Demonstrates */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">What This Concept Demonstrates</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'STRATEGIC UX',
              'PREMIUM UI DESIGN',
              'CONVERSION-FOCUSED ARCHITECTURE',
              'INTERACTIVE WEB EXPERIENCES',
              'TRUST-CENTERED DESIGN',
              'RESPONSIVE FRONTEND DEVELOPMENT'
            ].map((skill, i) => (
              <div key={i} className={`p-8 rounded-2xl text-center border ${darkMode ? 'border-neutral-800 bg-[#0A0F16]' : 'border-neutral-200 bg-white'}`}>
                <div className="text-[#D6B16B] font-mono font-bold text-xl mb-4">0{i + 1}</div>
                <div className="font-bold tracking-widest text-sm uppercase">{skill}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 15: Takeaways */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10">The Thinking Behind the Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`p-8 rounded-2xl border ${darkMode ? 'border-neutral-800 bg-neutral-900/30' : 'border-neutral-200 bg-white'}`}>
              <h3 className="font-bold text-lg mb-3"><span className="text-[#D6B16B] mr-2">01 —</span> CLARITY BEFORE COMPLEXITY</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>A visitor should understand the business and the next step without working for it.</p>
            </div>
            <div className={`p-8 rounded-2xl border ${darkMode ? 'border-neutral-800 bg-neutral-900/30' : 'border-neutral-200 bg-white'}`}>
              <h3 className="font-bold text-lg mb-3"><span className="text-[#D6B16B] mr-2">02 —</span> TRUST SHOULD BE VISIBLE</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>Important reassurance should be presented where visitors need it.</p>
            </div>
            <div className={`p-8 rounded-2xl border ${darkMode ? 'border-neutral-800 bg-neutral-900/30' : 'border-neutral-200 bg-white'}`}>
              <h3 className="font-bold text-lg mb-3"><span className="text-[#D6B16B] mr-2">03 —</span> INTERACTION CAN REDUCE FRICTION</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>Guided experiences can help users move from uncertainty toward a relevant action.</p>
            </div>
            <div className={`p-8 rounded-2xl border ${darkMode ? 'border-neutral-800 bg-neutral-900/30' : 'border-neutral-200 bg-white'}`}>
              <h3 className="font-bold text-lg mb-3"><span className="text-[#D6B16B] mr-2">04 —</span> DESIGN SHOULD SERVE THE BUSINESS</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>Visual polish matters, but hierarchy, usability and conversion paths matter too.</p>
            </div>
          </div>
        </section>

        {/* Section 16: Final CTA */}
        <section className={`py-16 px-6 md:px-12 rounded-3xl text-center border ${darkMode ? 'border-neutral-800 bg-gradient-to-b from-[#0A0F16] to-transparent' : 'border-neutral-200 bg-gradient-to-b from-white to-transparent'}`}>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Your Website Should Do More Than Look Good.</h2>
          <p className={`text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
            We build premium websites and digital experiences designed to help businesses communicate clearly, earn trust and create stronger opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenInquiry}
              className="px-8 py-4 rounded-full font-bold bg-[#D6B16B] text-neutral-900 hover:bg-opacity-90 transition-colors shadow-[0_0_15px_rgba(214,177,107,0.2)]"
            >
              GET A FREE WEBSITE REVIEW →
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                onNavigate('portfolio');
              }}
              className={`px-8 py-4 rounded-full font-bold border transition-colors ${darkMode ? 'border-neutral-700 hover:border-neutral-500 text-white' : 'border-neutral-300 hover:border-neutral-500 text-neutral-900'}`}
            >
              VIEW OUR WORK →
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
