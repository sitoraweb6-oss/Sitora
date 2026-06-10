import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Utensils, 
  ShoppingBag, 
  Activity, 
  BookOpen, 
  Moon, 
  Building2, 
  ShoppingCart, 
  Home, 
  Briefcase,
  Check,
  ArrowUpRight,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface IndustrySolutionsExplorerProps {
  darkMode: boolean;
  onOpenInquiry: (type: string) => void;
}

interface Enhancement {
  id: string;
  title: string;
  description: string;
  cost: number;
  timelineDays: number;
}

interface Industry {
  id: string;
  name: string;
  iconName: string;
  tagline: string;
  solutionTitle: string;
  basePriceMin: number;
  basePriceMax: number;
  baseDaysMin: number;
  baseDaysMax: number;
  features: string[];
  whyWorks: string;
  suggestedServices: string[];
  whatsAppMsg: string;
  enhancements: Enhancement[];
}

const INDUSTRIES_DATA: Industry[] = [
  {
    id: 'restaurant',
    name: 'Restaurant & Food',
    iconName: 'Utensils',
    tagline: 'Food ordering, table bookings & digital revenue.',
    solutionTitle: 'Restaurant Growth Package',
    basePriceMin: 18000,
    basePriceMax: 30000,
    baseDaysMin: 5,
    baseDaysMax: 7,
    features: ['WhatsApp Ordering', 'Online Reservations', 'Menu Showcase', 'Google Maps Native', 'Facebook Reviews Sync', 'Speed Optimization'],
    whyWorks: 'Empower your restaurant or cloud kitchen with a high-performance menu showcase and direct WhatsApp ordering pipeline to bypass expensive delivery platform commissions.',
    suggestedServices: ['Website Development', 'Meta Pixel Setup', 'Lead Generation', 'SEO Optimization'],
    whatsAppMsg: "Hi Sitora Web, I'm interested in the Restaurant Growth Package to setup digital ordering and drive native local orders!",
    enhancements: [
      { id: 'rest_qr', title: 'QR Menu Customization', description: 'Direct dynamic QR codes for in-estate digital scanning and offline discovery.', cost: 2000, timelineDays: 0 },
      { id: 'rest_booking', title: 'Table Booking Dashboard', description: 'Manage table registers and seat allocation through a secure online panel.', cost: 4000, timelineDays: 1 },
      { id: 'rest_loyalty', title: 'Loyalty Program Engine', description: 'Retain local diners with digital stamp cards and customizable coupon tiers.', cost: 3000, timelineDays: 1 },
      { id: 'rest_delivery', title: 'Delivery Zone Mapping', description: 'Custom radius limits and automated shipping tariff calculator setup.', cost: 3500, timelineDays: 1 }
    ]
  },
  {
    id: 'fashion',
    name: 'Fashion & Boutique',
    iconName: 'ShoppingBag',
    tagline: 'High-aesthetic collection showcases & boutique retail growth.',
    solutionTitle: 'High-Identity Fashion Store',
    basePriceMin: 20000,
    basePriceMax: 35000,
    baseDaysMin: 6,
    baseDaysMax: 8,
    features: ['Product Showcase', 'Visual Boutique Catalog', 'Instagram Feed Aggregation', 'Direct WhatsApp Sales', 'Local Storefront SEO', 'High-Res Portfolios'],
    whyWorks: 'Showcase collections in breathtaking detail with premium catalogs, integrated social validation, and native checkout funnels optimized for high boutique margins and retail discovery.',
    suggestedServices: ['Website Development', 'Meta Pixel Setup', 'SEO Optimization', 'Lead Generation'],
    whatsAppMsg: "Hi Sitora Web, we want to launch a High-Identity Fashion web storefront for our boutique brand!",
    enhancements: [
      { id: 'fash_payout', title: 'Online Payment Integration', description: 'Secure credit card and local mobile banking gateways (bKash, Nagad).', cost: 5000, timelineDays: 1 },
      { id: 'fash_inventory', title: 'Inventory Dashboard', description: 'Track stock units across variations, size guides, and dynamic product catalogs.', cost: 4000, timelineDays: 1 },
      { id: 'fash_loyalty', title: 'Loyalty Rewards Program', description: 'Build recurring shoppers with custom customer account tiers.', cost: 3000, timelineDays: 1 },
      { id: 'fash_email', title: 'Email Marketing Automations', description: 'Custom abandoned checkout recovery sequences to increase sales.', cost: 2000, timelineDays: 0 },
      { id: 'fash_variants', title: 'Product Variation Filters', description: 'Taxonomy filtration by fast size, color, or special collections.', cost: 2500, timelineDays: 0 }
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Clinics',
    iconName: 'Activity',
    tagline: 'Appointment onboarding & trusted specialist portfolios.',
    solutionTitle: 'Smart Clinic System',
    basePriceMin: 22000,
    basePriceMax: 40000,
    baseDaysMin: 7,
    baseDaysMax: 10,
    features: ['Appointment Requests', 'Doctor Credentials Directory', 'Interactive Clinic Maps', 'Verified Patient Reviews', 'Instant WhatsApp Channel', 'HIPAA-Aligned Intake Basics'],
    whyWorks: 'Streamline medical consultations with a clear patient onboarding pipeline, secure appointment forms, and search engine visibility helping local patients find specialized care instantly.',
    suggestedServices: ['Website Development', 'Lead Generation', 'SEO Optimization', 'Analytics Setup'],
    whatsAppMsg: "Hi Sitora Web, I'm interest in a Smart Clinic System website for our medical clinic and specialists booking!",
    enhancements: [
      { id: 'hlth_doctor', title: 'Multi-Doctor Directory', description: 'Individual credentials, medical timetables, and booking slots for multiple professionals.', cost: 4000, timelineDays: 1 },
      { id: 'hlth_prescription', title: 'Downloadable Prescriptions', description: 'Secure user dashboard allowing patients to download digital health summaries.', cost: 3000, timelineDays: 1 },
      { id: 'hlth_blog', title: 'Medical Blog Module', description: 'Search-optimized articles to increase organic local traffic and clinic authority.', cost: 2500, timelineDays: 0 },
      { id: 'hlth_calendar', title: 'Appointment Calendar Sync', description: 'Synchronize clinic slots seamlessly with Doctor calendar agendas.', cost: 3500, timelineDays: 1 }
    ]
  },
  {
    id: 'education',
    name: 'Educational Institutions',
    iconName: 'BookOpen',
    tagline: 'Admission portfolios, programs catalog & resource downloads.',
    solutionTitle: 'Unified Educational Portal',
    basePriceMin: 25000,
    basePriceMax: 45000,
    baseDaysMin: 8,
    baseDaysMax: 12,
    features: ['Courses & Programs Catalog', 'Online Admissions Funnels', 'Institutional Events Log', 'Direct Contact Portal', 'Academic SEO Blueprint', 'Resource Downloads Section'],
    whyWorks: 'Coordinate student admissions, course programs, and community updates with structured academic directories and lightning-fast portal speeds.',
    suggestedServices: ['Website Development', 'SEO Optimization', 'Custom App Development', 'Analytics Setup'],
    whatsAppMsg: "Hi Sitora Web, we are looking for a Premium Educational Portal for our institution to drive registrations and program catalog!",
    enhancements: [
      { id: 'edu_dl', title: 'Resource Download Center', description: 'Organize dynamic folders for prospectus, schedules, and application sheets.', cost: 2000, timelineDays: 0 },
      { id: 'edu_gallery', title: 'Campus Student Gallery', description: 'High-res grid showcasing infrastructure, campus facilities, and events.', cost: 2000, timelineDays: 0 },
      { id: 'edu_faculty', title: 'Faculty & Admin Directory', description: 'Interactive profiles of department advisors, administration, and support staff.', cost: 3000, timelineDays: 1 },
      { id: 'edu_notice', title: 'Live Digital Notice Board', description: 'Priority custom announcements and schedules carousel for immediate updates.', cost: 2500, timelineDays: 0 }
    ]
  },
  {
    id: 'islamic',
    name: 'Islamic Organizations',
    iconName: 'Moon',
    tagline: 'Sadaqah donation drives, Islamic lectures & community events.',
    solutionTitle: 'Sadaqah & Community Platform',
    basePriceMin: 15000,
    basePriceMax: 28000,
    baseDaysMin: 5,
    baseDaysMax: 7,
    features: ['Activity & Lecture Programs', 'Direct Donation Portal', 'Religious Events Calendar', 'Publications & Blogs', 'Instant WhatsApp Support', 'Prayer Times Sync API'],
    whyWorks: 'Unify local activities, Islamic programs, and direct secure Sadaqah donation channels through a respectful, clean, and highly trusted community interface.',
    suggestedServices: ['Website Development', 'SEO Optimization', 'Lead Generation', 'Social Media Strategy'],
    whatsAppMsg: "Hi Sitora Web, we would like to build an Islamic Community and Donation Platform to capture Sadaqah and announce programs!",
    enhancements: [
      { id: 'isl_ramadan', title: 'Ramadan Campaign Board', description: 'Urgent custom campaign structures designed for fast Zakat and Sadaqah appeals.', cost: 2000, timelineDays: 0 },
      { id: 'isl_tracker', title: 'Donation Progress Tracker', description: 'Visual fundraising metrics representing active charity goals and project costs.', cost: 3000, timelineDays: 1 },
      { id: 'isl_volunteer', title: 'Volunteer Registration Form', description: 'Targeted intake forms to index and contact local volunteers easily.', cost: 2000, timelineDays: 0 },
      { id: 'isl_media', title: 'Islamic Media Library', description: 'Clean archive optimized for daily Quran logs, video lectures, and schedules.', cost: 2500, timelineDays: 0 }
    ]
  },
  {
    id: 'corporate',
    name: 'Corporate Businesses',
    iconName: 'Building2',
    tagline: 'Premium B2B authorities, team showcases & case studies.',
    solutionTitle: 'Enterprise Brand Engine',
    basePriceMin: 25000,
    basePriceMax: 50000,
    baseDaysMin: 7,
    baseDaysMax: 10,
    features: ['B2B Services Showcase', 'Interactive Team Profiles', 'Secure Corporate Intake', 'Server Analytics Integration', 'Institutional SEO Blueprint', 'Detailed Case Studies'],
    whyWorks: 'Command industrial authority and attract B2B partnerships with pixel-perfect modern spacing, speed-optimized corporate profiles, and deep server-side analytics.',
    suggestedServices: ['Website Development', 'Analytics Setup', 'SEO Optimization', 'Lead Generation'],
    whatsAppMsg: "Hi Sitora Web, we want to establish our B2B corporate authority with a high-end Enterprise Brand Engine!",
    enhancements: [
      { id: 'corp_cases', title: 'Case Study Engine', description: 'Premium visual layouts highlighting industrial successes, metrics, and outcomes.', cost: 3000, timelineDays: 1 },
      { id: 'corp_careers', title: 'Careers & Recruitment Hub', description: 'Dynamic listing module with bespoke resume intake and application filters.', cost: 2500, timelineDays: 0 },
      { id: 'corp_download', title: 'Secure Download Lounge', description: 'Protected library hosting brochures, investor relations sheets, and files.', cost: 2000, timelineDays: 0 },
      { id: 'corp_invest', title: 'Investor Relations Dashboard', description: 'Consolidation of company timeline logs, news wires, and announcements.', cost: 4000, timelineDays: 1 }
    ]
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Storefronts',
    iconName: 'ShoppingCart',
    tagline: 'High-velocity WooCommerce systems with local gateway payments.',
    solutionTitle: 'Hyper-Performance Storefront',
    basePriceMin: 35000,
    basePriceMax: 60000,
    baseDaysMin: 10,
    baseDaysMax: 14,
    features: ['WooCommerce Checkout Sync', 'SSLCommerz (bKash/Nagad) Core', 'Meta Pixel & Conversions API (CAPI)', 'Server Logs Event Attribution', 'Admin Order Dashboard', 'Lightning Fast Mobile Layouts'],
    whyWorks: 'Drive high sales volumes with fully optimized WooCommerce storefronts, seamless local payment gateway integrations (bKash, Nagad), and bulletproof Meta Pixel attribution.',
    suggestedServices: ['Website Development', 'Meta Pixel Setup', 'Analytics Setup', 'Lead Generation'],
    whatsAppMsg: "Hi Sitora Web, we want to scale our sales with a high-performance WooCommerce custom E-commerce website!",
    enhancements: [
      { id: 'ecom_filters', title: 'Advanced Live Filtering', description: 'Elastic-like lightning filtering systems supporting immediate checkout discovery.', cost: 3000, timelineDays: 1 },
      { id: 'ecom_cart', title: 'Abandoned Cart Emails', description: 'Triggers customer recovery email flows automatically to scale transactions.', cost: 3000, timelineDays: 0 },
      { id: 'ecom_rewards', title: 'Loyalty Rewards Hub', description: 'Retain buyers, unlock discount milestones, and increase order frequency.', cost: 4000, timelineDays: 1 },
      { id: 'ecom_sale', title: 'Flash Sale Engine', description: 'Targeted visual timers, banner counters, and direct stock discount triggers.', cost: 2500, timelineDays: 0 }
    ]
  },
  {
    id: 'realestate',
    name: 'Real Estate Developer',
    iconName: 'Home',
    tagline: 'Premium property listings with lead capture funnels & maps.',
    solutionTitle: 'Premium Listing Engine',
    basePriceMin: 22000,
    basePriceMax: 42000,
    baseDaysMin: 7,
    baseDaysMax: 10,
    features: ['Advanced Property Listings', 'High-Response Property Forms', 'Direct WhatsApp Assignment', 'Interactive Location Maps', 'Custom Google SEO Snippets', 'High-Res Presentation Galleries'],
    whyWorks: 'Capture premium high-intent leads for developers or brokers with visual property sliders, advanced location maps, and instant WhatsApp brokers assignation.',
    suggestedServices: ['Website Development', 'Lead Generation', 'SEO Optimization', 'Custom App Development'],
    whatsAppMsg: "Hi Sitora Web, I'm looking for a premium Real Estate Listing Engine website for our residential development properties!",
    enhancements: [
      { id: 'real_mortgage', title: 'Mortgage Calculator Widget', description: 'Interactive amortization schedules assisting buyers inside listings.', cost: 3000, timelineDays: 1 },
      { id: 'real_tour', title: '360° Virtual Tour Embeds', description: 'Immersive panorama integrations and aesthetic presentation slides.', cost: 4000, timelineDays: 1 },
      { id: 'real_compare', title: 'Property Comparison Grid', description: 'Bespoke comparisons based on location, square feet, pricing, and units.', cost: 3500, timelineDays: 1 },
      { id: 'real_featured', title: 'Featured Units Showcase', description: 'Highly optimized architectural listings block designed for peak visibility.', cost: 2500, timelineDays: 0 }
    ]
  },
  {
    id: 'agencies',
    name: 'Agencies & Professionals',
    iconName: 'Briefcase',
    tagline: 'Creative portfolio showcases & high-velocity intake funnels.',
    solutionTitle: 'High-Velocity Capture Funnel',
    basePriceMin: 20000,
    basePriceMax: 38000,
    baseDaysMin: 5,
    baseDaysMax: 8,
    features: ['High-Conversion Portfolios', 'Interactive Proposal Tool', 'Bespoke Inquiries Funnel', 'Deep Marketing GA4 Analytics', 'Automated SEO Indexing', 'Review Validation Carousel'],
    whyWorks: 'Establish immense creative authority. Convert high-value clients using interactive agency portfolios, robust proposal planners, and automated tracking.',
    suggestedServices: ['Website Development', 'Analytics Setup', 'SEO Optimization', 'Lead Generation'],
    whatsAppMsg: "Hi Sitora Web, we need a high-conversion Agency Portfolio website to automate our lead intake!",
    enhancements: [
      { id: 'ag_carousel', title: 'Social Proof Carousel', description: 'Custom dynamic sliding sliders highlighting validated client feedback and reviews.', cost: 2000, timelineDays: 0 },
      { id: 'ag_case', title: 'Case Study Engine', description: 'Beautiful narrative layout blueprints highlighting client ROI metrics.', cost: 3000, timelineDays: 1 },
      { id: 'ag_team', title: 'Aesthetic Team Showcases', description: 'Grid layouts illustrating creative staff background accomplishments.', cost: 2000, timelineDays: 0 },
      { id: 'ag_news', title: 'Newsletter Capture Flow', description: 'Interactive captures to segment custom updates to prospective leads.', cost: 2000, timelineDays: 0 }
    ]
  }
];

export const IndustrySolutionsExplorer: React.FC<IndustrySolutionsExplorerProps> = ({ 
  darkMode, 
  onOpenInquiry 
}) => {
  const [selectedId, setSelectedId] = useState<string>('restaurant');
  const [selectedEnhancements, setSelectedEnhancements] = useState<Record<string, string[]>>({});

  const selectedIndustry = INDUSTRIES_DATA.find(ind => ind.id === selectedId) || INDUSTRIES_DATA[0];

  const currentSelections = selectedEnhancements[selectedId] || [];

  const toggleEnhancement = (industryId: string, enhancementId: string) => {
    setSelectedEnhancements(prev => {
      const current = prev[industryId] || [];
      const updated = current.includes(enhancementId)
        ? current.filter(id => id !== enhancementId)
        : [...current, enhancementId];
      return { ...prev, [industryId]: updated };
    });
  };

  // Live total calculations
  const addedCost = selectedIndustry.enhancements
    .filter(enh => currentSelections.includes(enh.id))
    .reduce((sum, enh) => sum + enh.cost, 0);

  const addedDays = selectedIndustry.enhancements
    .filter(enh => currentSelections.includes(enh.id))
    .reduce((sum, enh) => sum + enh.timelineDays, 0);

  const computedPriceMin = selectedIndustry.basePriceMin + addedCost;
  const computedPriceMax = selectedIndustry.basePriceMax + addedCost;
  const computedDaysMin = selectedIndustry.baseDaysMin + addedDays;
  const computedDaysMax = selectedIndustry.baseDaysMax + addedDays;

  const renderIndustryIcon = (name: string, className: string) => {
    switch (name) {
      case 'Utensils': return <Utensils className={className} size={18} />;
      case 'ShoppingBag': return <ShoppingBag className={className} size={18} />;
      case 'Activity': return <Activity className={className} size={18} />;
      case 'BookOpen': return <BookOpen className={className} size={18} />;
      case 'Moon': return <Moon className={className} size={18} />;
      case 'Building2': return <Building2 className={className} size={18} />;
      case 'ShoppingCart': return <ShoppingCart className={className} size={18} />;
      case 'Home': return <Home className={className} size={18} />;
      case 'Briefcase': return <Briefcase className={className} size={18} />;
      default: return <Briefcase className={className} size={18} />;
    }
  };

  const handleWhatsAppConsult = (msg: string) => {
    // Inject active customization details into the WhatsApp message naturally
    let finalMsg = msg;
    if (currentSelections.length > 0) {
      const selectedTitles = selectedIndustry.enhancements
        .filter(enh => currentSelections.includes(enh.id))
        .map(enh => enh.title)
        .join(', ');
      finalMsg += ` I also customized this with: ${selectedTitles}.`;
    }
    window.open(`https://wa.me/8801629586290?text=${encodeURIComponent(finalMsg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      className="py-24 sm:py-32 relative overflow-hidden border-t border-neutral-900/10 dark:border-neutral-900/50 animate-fade-in" 
      id="industry-solutions"
    >
      {/* Decorative Glow elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#D6B16B]/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#7ED4FF]/5 rounded-full filter blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="industry-solutions-container">
        
        {/* Title area */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="industry-solutions-header">
          <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-[0.25em] block mb-3 font-semibold">
            Industry Solutions
          </span>
          <h2 className={`font-sans text-2xl sm:text-4.5xl font-black tracking-tight leading-[1.1] uppercase ${
            darkMode ? 'text-white' : 'text-[#111827]'
          }`}>
            Solutions Tailored to Your Industry
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-450 font-sans leading-relaxed max-w-2xl mx-auto">
            Explore how Sitora Web helps different industries build stronger digital experiences, attract more customers, and grow with confidence.
          </p>
        </div>

        {/* Master layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch" id="industry-explorer-grid">
          
          {/* Left Column: Industry Selector Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between" id="industry-selector-column">
            {/* Horizontal scroll container for mobile, standard list for desktop */}
            <div 
              className="flex lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 scrollbar-none snap-x snap-mandatory" 
              id="industry-tabs-container"
            >
              {INDUSTRIES_DATA.map((ind) => {
                const isActive = ind.id === selectedId;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedId(ind.id)}
                    className={`w-[260px] lg:w-full shrink-0 snap-start text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer outline-none ${
                      isActive 
                        ? 'border-[#D6B16B] bg-[#D6B16B]/5 shadow-[0_0_15px_rgba(214,177,107,0.1)]' 
                        : darkMode 
                        ? 'border-neutral-900 bg-neutral-950/40 hover:border-neutral-800'
                        : 'border-neutral-200 bg-white hover:border-neutral-300 shadow-sm'
                    }`}
                    role="tab"
                    aria-selected={isActive}
                    id={`industry-tab-${ind.id}`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div className={`p-2 rounded-lg shrink-0 mt-0.5 transition-colors ${
                        isActive 
                          ? 'bg-[#D6B16B]/20 text-[#D6B16B]' 
                          : darkMode 
                          ? 'bg-neutral-900 text-[#A7B0BD]' 
                          : 'bg-neutral-100 text-neutral-600'
                      }`}>
                        {renderIndustryIcon(ind.iconName, 'transition-transform duration-300')}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className={`font-sans text-xs sm:text-[13px] font-bold leading-normal tracking-tight uppercase ${
                          isActive 
                            ? 'text-[#D6B16B]' 
                            : darkMode 
                            ? 'text-[#F7F8FA]' 
                            : 'text-[#111827]'
                        }`}>
                          {ind.name}
                        </h3>
                        <p className="text-[10px] text-neutral-450 leading-relaxed mt-1 truncate">
                          {ind.tagline}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            
            {/* Visual aesthetic trust helper on left column bottom, visible on desktop */}
            <div className={`hidden lg:flex items-center gap-3.5 p-4 rounded-xl border mt-4 ${
              darkMode ? 'bg-neutral-950/20 border-neutral-900/60' : 'bg-neutral-50/50 border-neutral-100'
            }`} id="industry-selector-hint">
              <Sparkles className="text-[#D6B16B] shrink-0" size={16} />
              <p className="text-[10px] font-mono text-neutral-450 uppercase tracking-wider leading-relaxed">
                Need more custom parameters? Sitora Web can engineer bespoke micro-services matching your enterprise guidelines.
              </p>
            </div>
          </div>

          {/* Right Column: Dynamic Content Detail Panel */}
          <div className="lg:col-span-7 flex flex-col" id="industry-details-column">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndustry.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={`flex-1 h-full p-6 sm:p-10 rounded-[32px] border flex flex-col justify-between transition-all duration-300 ${
                  darkMode 
                    ? 'bg-[#0B1016]/90 border-neutral-900 shadow-2xl' 
                    : 'bg-white border-neutral-200 shadow-xl'
                }`}
                id={`industry-panel-${selectedIndustry.id}`}
              >
                <div className="space-y-6">
                  {/* Dynamic Heading Tag */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-900/10 dark:border-neutral-900/50">
                    <div>
                      <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-[0.2em] block mb-1">
                        Recommended Enterprise Solution
                      </span>
                      <h3 className={`font-sans text-lg sm:text-2xl font-black uppercase tracking-tight leading-none ${
                        darkMode ? 'text-[#F7F8FA]' : 'text-[#111827]'
                      }`}>
                        {selectedIndustry.solutionTitle}
                      </h3>
                    </div>
                    {/* Visual metadata badge */}
                    <div className="shrink-0 flex items-center gap-2 font-mono text-[10px] uppercase text-[#A7B0BD] bg-neutral-900/40 border border-neutral-800 px-3 py-1.5 rounded-full w-fit">
                      <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full inline-block animate-pulse" />
                      <span>Ready to Deploy</span>
                    </div>
                  </div>

                  {/* Why This Works Section */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-[0.2em] block font-bold">
                      Why This Solution Works
                    </span>
                    <p className={`text-[12px] sm:text-xs leading-relaxed font-sans ${
                      darkMode ? 'text-neutral-300' : 'text-neutral-600'
                    }`}>
                      {selectedIndustry.whyWorks}
                    </p>
                  </div>

                  {/* Recommended Features Chips */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-[0.2em] block font-bold">
                      Included Premium Features
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="industry-features-container">
                      {selectedIndustry.features.map((feat, idx) => (
                        <div 
                          key={idx}
                          className={`flex items-center gap-2.5 p-2 rounded-lg border text-[11px] font-sans ${
                            darkMode 
                            ? 'bg-neutral-950/45 border-neutral-900/60 text-neutral-350' 
                            : 'bg-neutral-50/70 border-neutral-150 text-neutral-700'
                          }`}
                        >
                          <Check className="text-[#D6B16B] shrink-0" size={13} strokeWidth={2.5} />
                          <span className="font-medium truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Optional Enhancements Customization Module */}
                  <div className="py-4 border-t border-neutral-900/10 dark:border-neutral-900/50 space-y-4">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-[0.25em] font-bold">
                          Optional Enhancements
                        </span>
                        <span className="font-mono text-[8px] uppercase tracking-wider bg-[#D6B16B]/10 text-[#D6B16B] border border-[#D6B16B]/20 px-1.5 py-0.5 rounded">
                          Interactive
                        </span>
                      </div>
                      <p className="text-[10px] text-neutral-450 leading-normal mt-1">
                        Sitora's core recommendations are already included. Add optional enhancements if they align with your goals.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-2.5" id="optional-enhancements-container">
                      {selectedIndustry.enhancements.map((enh) => {
                        const isChecked = currentSelections.includes(enh.id);
                        return (
                          <div
                            key={enh.id}
                            onClick={() => toggleEnhancement(selectedId, enh.id)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                toggleEnhancement(selectedId, enh.id);
                              }
                            }}
                            role="checkbox"
                            aria-checked={isChecked}
                            tabIndex={0}
                            className={`p-3 rounded-xl border transition-all duration-300 flex justify-between items-center gap-4 cursor-pointer outline-none focus:ring-2 focus:ring-[#D6B16B] ${
                              isChecked 
                                ? 'border-[#D6B16B] bg-[#D6B16B]/5 shadow-[0_0_12px_rgba(214,177,107,0.06)]' 
                                : darkMode 
                                ? 'border-neutral-900 bg-neutral-950/40 hover:border-neutral-800' 
                                : 'border-neutral-100 bg-neutral-50/40 hover:border-neutral-200'
                            }`}
                          >
                            <div className="flex items-start gap-3 min-w-0 flex-1">
                              <div className={`mt-0.5 shrink-0 h-4 w-4 rounded border flex items-center justify-center transition-all ${
                                isChecked 
                                  ? 'border-[#D6B16B] bg-[#D6B16B] text-neutral-950' 
                                  : 'border-neutral-700'
                              }`}>
                                {isChecked && <Check size={11} strokeWidth={3} />}
                              </div>
                              <div className="min-w-0 flex-1">
                                <span className={`block font-sans text-xs font-bold uppercase tracking-tight leading-tight ${
                                  isChecked 
                                    ? 'text-[#D6B16B]' 
                                    : darkMode 
                                    ? 'text-neutral-200' 
                                    : 'text-neutral-800'
                                }`}>
                                  {enh.title}
                                </span>
                                <p className="text-[10px] text-neutral-450 leading-tight mt-0.5 truncate">
                                  {enh.description}
                                </p>
                              </div>
                            </div>
                            <div className="text-right shrink-0">
                              <span className="block font-sans text-xs font-black text-[#D6B16B] leading-none">
                                +৳{enh.cost.toLocaleString()}
                              </span>
                              <span className="block font-mono text-[8px] text-neutral-450 uppercase mt-0.5">
                                +{enh.timelineDays} {enh.timelineDays === 1 ? 'Day' : 'Days'}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Suggested Services */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono text-[#D6B16B] uppercase tracking-[0.2em] block font-bold">
                      Suggested Sitora Capabilities
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedIndustry.suggestedServices.map((srv, idx) => (
                        <span 
                          key={idx}
                          className="font-mono text-[9px] uppercase tracking-wider px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-450"
                        >
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Investment metadata, timeline block & CTAs row */}
                <div className="pt-6 border-t border-neutral-900/10 dark:border-neutral-900/50 space-y-6 mt-6">
                  
                  {/* Delivery Timeline / Estimate Pricing Row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono text-neutral-450 uppercase tracking-widest block font-semibold">
                        ESTIMATED INVESTMENT
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-sans text-lg sm:text-2xl font-black text-[#D6B16B] tracking-tight">
                          ৳{computedPriceMin.toLocaleString()} – ৳{computedPriceMax.toLocaleString()}
                        </span>
                        <span className="font-mono text-[9px] text-neutral-450 uppercase">BDT</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono text-neutral-450 uppercase tracking-widest block font-semibold">
                        ESTIMATED TIMELINE
                      </span>
                      <div className="flex items-center gap-2">
                        <Clock className="text-[#7ED4FF]" size={14} />
                        <span className={`font-sans text-xs sm:text-sm font-bold uppercase tracking-tight ${
                          darkMode ? 'text-white' : 'text-neutral-900'
                        }`}>
                          {computedDaysMin}–{computedDaysMax} Working Days
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Dual Action CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      onClick={() => onOpenInquiry('custom')}
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-sans text-xs font-bold uppercase tracking-wider text-neutral-950 bg-[#D6B16B] hover:bg-[#ebd5ad] shadow-lg hover:shadow-[#D6B16B]/10 active:scale-[0.98] transition-all duration-300 cursor-pointer"
                    >
                      <span>Get a Free Consultation</span>
                      <ArrowUpRight size={13} />
                    </button>
                    <button
                      onClick={() => handleWhatsAppConsult(selectedIndustry.whatsAppMsg)}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-sans text-xs font-bold uppercase tracking-wider border transition-all duration-300 cursor-pointer hover:bg-emerald-500/5 active:scale-[0.98] ${
                        darkMode 
                        ? 'border-neutral-800 text-neutral-200 hover:border-emerald-500/50 hover:text-emerald-400' 
                        : 'border-neutral-200 text-neutral-700 hover:border-emerald-500/50 hover:text-emerald-600'
                      }`}
                    >
                      <span>Discuss on WhatsApp</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
