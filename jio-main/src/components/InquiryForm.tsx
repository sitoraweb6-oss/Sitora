import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, ArrowUpRight, Check, X, Send } from 'lucide-react';

interface InquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({ isOpen, onClose, initialType = 'web-dev' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    projectType: 'web-dev',
    budget: '$99 - $299',
    brief: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const projectTypes = [
    { value: 'web-dev', label: 'Premium Website' },
    { value: 'landing-pages', label: 'High-Converting Landing Page' },
    { value: 'ecommerce', label: 'E-Commerce Solution' },
    { value: 'marketing', label: 'Digital Marketing / Retainer' },
    { value: 'custom', label: 'Custom Engineered App' },
  ];

  const budgetsBdt = [
    '$99 - $299',
    '$299 - $699',
    '$699  - $1,499',
    '$1,499+',
  ];

  // Normalizer to align any incoming service/plan string to a primary project focus category
  const normalizeProjectType = (type: string | undefined): { projectType: string; budget: string; brief: string } => {
    if (!type) {
      return {
        projectType: 'web-dev',
        budget: '$99 - $299',
        brief: 'We want to inquire about custom solutions with Sitora Web.'
      };
    }

    const normalized = type.toLowerCase();

    // 1. Landing Pages
    if (
      normalized.includes('landing') || 
      normalized === 'landing-pages' || 
      normalized.includes('single-page')
    ) {
      return {
        projectType: 'landing-pages',
        budget: '$99 - $299',
        brief: 'Interested in a premium high-converting landing page to launch targeted marketing campaigns.'
      };
    }

    // 2. Ecommerce
    if (
      normalized.includes('ecommerce') || 
      normalized.includes('e-commerce') || 
      normalized === 'ecommerce' || 
      normalized.includes('woocommerce') || 
      normalized.includes('shop')
    ) {
      return {
        projectType: 'ecommerce',
        budget: '$699 - $1,499',
        brief: 'Looking to set up a robust, scalable e-commerce catalog website to process orders in Bangladesh.'
      };
    }

    // 3. Marketing / Retainers / Socials
    if (
      normalized.includes('marketing') || 
      normalized.includes('social') || 
      normalized.includes('seo') || 
      normalized.includes('pixel') || 
      normalized.includes('capi') || 
      normalized.includes('analytics') || 
      normalized.includes('ad') || 
      normalized.includes('retainer') ||
      normalized === 'digital-marketing' ||
      normalized === 'social-media' ||
      normalized === 'seo-analytics' ||
      normalized === 'pixel-capi' ||
      normalized === 'lead-generation'
    ) {
      return {
        projectType: 'marketing',
        budget: '$299 - $699',
        brief: `Hello, we would like to enquire about Sitora's "${type}" solutions to assist our marketing expansion.`
      };
    }

    // 4. Custom solutions
    if (
      normalized.includes('custom') || 
      normalized.includes('enterprise') || 
      normalized.includes('sol-') ||
      normalized === 'custom'
    ) {
      return {
        projectType: 'custom',
        budget: '$1,499+',
        brief: 'Seeking customized full-stack platform setups tailored specifically to optimize our internal and client-facing digital systems.'
      };
    }

    // 5. Default Website Development
    let defaultBrief = 'We want to inquire about setting up a premium commercial website with Sitora Web.';
    let defaultBudget = '$299 - $699';
    if (normalized.includes('business') || normalized.includes('pack')) {
      defaultBrief = 'Interested in a robust multi-page business presentation website.';
      defaultBudget = '$299 - $699';
    }

    return {
      projectType: 'web-dev',
      budget: defaultBudget,
      brief: defaultBrief
    };
  };

  React.useEffect(() => {
    if (isOpen) {
      const normalized = normalizeProjectType(initialType);
      setFormData(prev => ({
        ...prev,
        projectType: normalized.projectType,
        budget: normalized.budget,
        brief: normalized.brief
      }));
    }
  }, [isOpen, initialType]);

  const getStructuredMessage = () => {
    const serviceLabel = projectTypes.find(t => t.value === formData.projectType)?.label || formData.projectType;
    return `🌟 *NEW CONSULTATION REQUEST* 🌟

👤 *Name:* ${formData.name}
🏢 *Business:* ${formData.businessName || 'Not specified'}
📧 *Email:* ${formData.email}
📞 *Contact:* ${formData.phone}
🛠️ *Service Focus:* ${serviceLabel}
💰 *Estimated Budget:* ${formData.budget}

📝 *Project Brief & Goals:*
${formData.brief || 'No brief provided.'}

---
Inquiry submitted via *Sitora Web* platform.`;
  };

  const getWhatsAppUrl = () => {
    const textMsg = getStructuredMessage();
    return `https://wa.me/8801629586290?text=${encodeURIComponent(textMsg)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const waUrl = getWhatsAppUrl();

    // Store in localStorage for durable state retention
    const currentInquiries = JSON.parse(localStorage.getItem('sitora_inquiries') || '[]');
    currentInquiries.push({
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('sitora_inquiries', JSON.stringify(currentInquiries));

    // Open WhatsApp URL in a new tab immediately
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.warn("Autoplay block / Popup blocker intercepted window.open redirection", err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md cursor-pointer"
            id="inquiry-backdrop"
          />

          {/* Drawer / Modal container */}
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-lg bg-[#0B1016] border-l border-[rgba(255,255,255,0.08)] p-6 sm:p-8 overflow-y-auto"
            id="inquiry-drawer-panel"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-neutral-900" id="inquiry-header">
              <div>
                <h3 className="font-sans text-lg font-bold text-white tracking-tight" id="inquiry-title">
                  Initiate Strategic Growth
                </h3>
                <p className="text-xs text-neutral-400 mt-1" id="inquiry-subtitle">
                  We respond to detailed proposals within 12 hours.
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-neutral-950 border border-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-800 transition-colors"
                id="inquiry-close-button"
              >
                <X size={16} />
              </button>
            </div>

            {/* Success state */}
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-8 px-2"
                id="inquiry-success-block"
              >
                <div 
                  className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 shadow-lg shadow-emerald-500/5 select-none animate-bounce"
                  id="inquiry-success-checkmark"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    fill="currentColor"
                    className="text-emerald-400"
                    id="whatsapp-success-icon-svg"
                  >
                    <path d="M12.031 2C6.49 2 2 6.47 2 12.01c0 1.91.53 3.69 1.45 5.23L2 22l4.91-1.39c1.47.8 3.14 1.26 4.9 1.26 5.54 0 10.03-4.47 10.03-10.01C21.84 6.47 17.57 2 12.03 2zm5.72 13.91c-.24.68-1.21 1.24-1.68 1.29-.46.06-.9.23-2.91-.59-2.58-1.05-4.22-3.66-4.35-3.83-.13-.17-1.02-1.36-1.02-2.59 0-1.23.64-1.83.87-2.07.23-.24.51-.3.68-.3.17 0 .34.01.49.02.16.01.37-.06.58.44.22.52.75 1.83.82 1.97.07.14.12.31.02.51-.1.2-.15.31-.3.49-.15.18-.32.4-.46.54-.16.16-.33.34-.14.67.19.32.84 1.39 1.81 2.25.97.86 1.79 1.12 2.05 1.25.26.13.41.11.56-.06.15-.17.65-.76.82-.96.17-.2.34-.17.58-.09.24.08 1.54.73 1.8.86.26.13.43.19.49.3.06.11.06.63-.18 1.31z" />
                  </svg>
                </div>
                <h4 className="font-sans text-xl font-bold text-white tracking-tight mb-2" id="inquiry-success-headline">
                  WhatsApp Inquiry Ready!
                </h4>
                <p className="text-neutral-400 text-xs sm:text-sm max-w-sm mb-6" id="inquiry-success-text">
                  Your custom blueprint details have been processed. Please send the pre-filled message on WhatsApp. If WhatsApp did not open automatically, click the link below:
                </p>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-sans text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/25 mb-5 cursor-pointer text-center"
                  id="inquiry-manual-whatsapp-btn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path d="M12.031 2C6.49 2 2 6.47 2 12.01c0 1.91.53 3.69 1.45 5.23L2 22l4.91-1.39c1.47.8 3.14 1.26 4.9 1.26 5.54 0 10.03-4.47 10.03-10.01C21.84 6.47 17.57 2 12.03 2zm5.72 13.91c-.24.68-1.21 1.24-1.68 1.29-.46.06-.9.23-2.91-.59-2.58-1.05-4.22-3.66-4.35-3.83-.13-.17-1.02-1.36-1.02-2.59 0-1.23.64-1.83.87-2.07.23-.24.51-.3.68-.3.17 0 .34.01.49.02.16.01.37-.06.58.44.22.52.75 1.83.82 1.97.07.14.12.31.02.51-.1.2-.15.31-.3.49-.15.18-.32.4-.46.54-.16.16-.33.34-.14.67.19.32.84 1.39 1.81 2.25.97.86 1.79 1.12 2.05 1.25.26.13.41.11.56-.06.15-.17.65-.76.82-.96.17-.2.34-.17.58-.09.24.08 1.54.73 1.8.86.26.13.43.19.49.3.06.11.06.63-.18 1.31z" />
                  </svg>
                  <span>Open WhatsApp & Send</span>
                </a>

                <div className="p-4 border border-neutral-900 bg-neutral-950/80 rounded-xl w-full text-left" id="inquiry-success-recaps">
                  <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">Receipt Blueprint</span>
                  <div className="mt-2 text-xs text-neutral-400 space-y-1.5">
                    <div><span className="text-neutral-500">Service:</span> <strong className="text-white">{projectTypes.find(t => t.value === formData.projectType)?.label}</strong></div>
                    <div><span className="text-neutral-500">Contact Phone:</span> <strong className="text-white">{formData.phone}</strong></div>
                    <div><span className="text-neutral-500">Budget:</span> <strong className="text-white">{formData.budget}</strong></div>
                  </div>
                </div>

                <div className="flex w-full gap-3 mt-6">
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                    }}
                    className="flex-1 py-2.5 px-4 rounded-xl border border-neutral-800 hover:border-neutral-700 bg-neutral-950 text-neutral-400 hover:text-white text-[11px] font-mono uppercase tracking-wider transition-colors cursor-pointer"
                    id="inquiry-success-retry"
                  >
                    Edit Details
                  </button>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ name: '', email: '', phone: '', businessName: '', projectType: initialType, budget: '$99 - $299', brief: '' });
                      onClose();
                    }}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-white hover:bg-neutral-200 text-black text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    id="inquiry-success-dismiss"
                  >
                    Return to home
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Request form */
              <form onSubmit={handleSubmit} className="space-y-5 text-neutral-200" id="inquiry-submission-form">
                
                {/* Name */}
                <div id="field-name-container">
                  <label className="block text-[11px] uppercase tracking-widest text-neutral-400 font-mono mb-2" htmlFor="client-name">
                    Full Name <span className="text-amber-500">*</span>
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-[#05070A]/85 border border-[rgba(255,255,255,0.08)] focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 focus:outline-none rounded-xl px-4 py-3 text-sm transition-all text-[#F7F8FA]"
                    placeholder="e.g., Ahsan Habib"
                  />
                </div>

                {/* business Name */}
                <div id="field-business-container">
                  <label className="block text-[11px] uppercase tracking-widest text-neutral-400 font-mono mb-2" htmlFor="client-business">
                    Business Name
                  </label>
                  <input
                    id="client-business"
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                    className="w-full bg-[#05070A]/85 border border-[rgba(255,255,255,0.08)] focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 focus:outline-none rounded-xl px-4 py-3 text-sm transition-all text-[#F7F8FA]"
                    placeholder="e.g., Zenith Clothing Bangladesh"
                  />
                </div>

                {/* Email */}
                <div id="field-email-container">
                  <label className="block text-[11px] uppercase tracking-widest text-neutral-400 font-mono mb-2" htmlFor="client-email">
                    Corporate Email <span className="text-amber-500">*</span>
                  </label>
                  <input
                    id="client-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-[#05070A]/85 border border-[rgba(255,255,255,0.08)] focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 focus:outline-none rounded-xl px-4 py-3 text-sm transition-all text-[#F7F8FA]"
                    placeholder="e.g., habib@zenith.com"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div id="field-phone-container">
                  <label className="block text-[11px] uppercase tracking-widest text-neutral-400 font-mono mb-2" htmlFor="client-phone">
                    WhatsApp or Primary Contact <span className="text-amber-500">*</span>
                  </label>
                  <input
                    id="client-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full bg-[#05070A]/85 border border-[rgba(255,255,255,0.08)] focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 focus:outline-none rounded-xl px-4 py-3 text-sm transition-all text-[#F7F8FA]"
                    placeholder="e.g., +880 1712-XXXXXX"
                  />
                </div>

                {/* Project Type */}
                <div id="field-type-container">
                  <label className="block text-[11px] uppercase tracking-widest text-neutral-400 font-mono mb-2">
                    Primary Service Focus
                  </label>
                  <div className="grid grid-cols-2 gap-2" id="inquiry-project-type-selector">
                    {projectTypes.map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, projectType: type.value }))}
                        className={`px-3 py-2 text-xs rounded-lg border text-left transition-all cursor-pointer ${
                          formData.projectType === type.value
                            ? 'bg-blue-600/10 border-blue-500 text-white'
                            : 'bg-neutral-950 border-neutral-900 text-neutral-400 hover:border-neutral-800'
                        }`}
                        id={`inquiry-type-option-${type.value}`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Estimated Budget */}
                <div id="field-budget-container">
                  <label className="block text-[11px] uppercase tracking-widest text-neutral-400 font-mono mb-2">
                    Estimated Strategic Budget
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" id="inquiry-budget-selector">
                    {budgetsBdt.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, budget: b }))}
                        className={`py-2 text-xs rounded-lg border text-center transition-all cursor-pointer ${
                          formData.budget === b
                            ? 'bg-blue-600 border-blue-500 text-white font-medium'
                            : 'bg-neutral-950 border-neutral-900 text-neutral-400 hover:border-neutral-800'
                        }`}
                        id={`inquiry-bdt-option-${b.replace(/\s+/g, '-')}`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Brief */}
                <div id="field-brief-container">
                  <label className="block text-[11px] uppercase tracking-widest text-neutral-400 font-mono mb-2" htmlFor="client-brief">
                    Project Brief & Goals
                  </label>
                  <textarea
                    id="client-brief"
                    rows={3}
                    value={formData.brief}
                    onChange={(e) => setFormData(prev => ({ ...prev, brief: e.target.value }))}
                    className="w-full bg-[#05070A]/85 border border-[rgba(255,255,255,0.08)] focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 focus:outline-none rounded-xl px-4 py-3 text-sm transition-all text-[#F7F8FA] resize-none"
                    placeholder="Briefly describe what goals you wish to achieve with Sitora Web..."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 mt-6 py-3.5 px-6 rounded-xl bg-blue-600 text-white hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all font-sans text-xs font-bold uppercase tracking-wider disabled:opacity-50 cursor-pointer shadow-lg shadow-blue-500/10"
                  id="submit-inquiry-button"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                      <span>Opening WhatsApp App...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Request Free Consultation</span>
                    </>
                  )}
                </button>

                <div className="mt-4 p-3 rounded-xl bg-neutral-950/60 border border-neutral-900/60 text-center space-y-1" id="inquiry-hotline-banner">
                  <p className="text-[10px] font-mono font-bold text-blue-500 uppercase tracking-wider">
                    WhatsApp Business Hotline & Support
                  </p>
                  <p className="text-[11px] font-bold text-white">
                    <a href="https://wa.me/8801629586290" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                      +880 1629-586290
                    </a>
                  </p>
                  <p className="text-[9px] text-neutral-400 leading-relaxed max-w-sm mx-auto">
                    Available for project discussions, quotations, and support inquiries.
                  </p>
                  <p className="text-[8.5px] text-neutral-500 font-sans pt-1 border-t border-neutral-900 border-dashed">
                    👉 Form submissions instantly compile structured specs and open WhatsApp directly.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// WhatsApp floating overlay button
export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = 'https://wa.me/8801629586290?text=Hi%20Sitora%20Web%2C%20I%20am%20interested%20in%20building%20a%20premium%20digital%20experience%20with%20your%20team%21';
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 100) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // scrolling down -> hide
        setVisible(false);
      } else {
        // scrolling up -> show
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center justify-center w-14 h-14 bg-emerald-500 text-white rounded-full shadow-2xl shadow-emerald-500/20 hover:bg-emerald-400 transition-colors cursor-pointer"
          id="whatsapp-floating-trigger"
          aria-label="Connect via WhatsApp"
        >
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="currentColor"
            id="whatsapp-icon-svg"
          >
            <path d="M12.031 2C6.49 2 2 6.47 2 12.01c0 1.91.53 3.69 1.45 5.23L2 22l4.91-1.39c1.47.8 3.14 1.26 4.9 1.26 5.54 0 10.03-4.47 10.03-10.01C21.84 6.47 17.57 2 12.03 2zm5.72 13.91c-.24.68-1.21 1.24-1.68 1.29-.46.06-.9.23-2.91-.59-2.58-1.05-4.22-3.66-4.35-3.83-.13-.17-1.02-1.36-1.02-2.59 0-1.23.64-1.83.87-2.07.23-.24.51-.3.68-.3.17 0 .34.01.49.02.16.01.37-.06.58.44.22.52.75 1.83.82 1.97.07.14.12.31.02.51-.1.2-.15.31-.3.49-.15.18-.32.4-.46.54-.16.16-.33.34-.14.67.19.32.84 1.39 1.81 2.25.97.86 1.79 1.12 2.05 1.25.26.13.41.11.56-.06.15-.17.65-.76.82-.96.17-.2.34-.17.58-.09.24.08 1.54.73 1.8.86.26.13.43.19.49.3.06.11.06.63-.18 1.31z" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
};
