import { Service, CraftedExperience, StatItem, PricingPlan, Testimonial, Article, FAQItem } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'web-dev',
    title: 'Premium Website Development',
    shortDesc: 'Stunning, blazing-fast, and fluid web systems tailored to establish institutional authority and seamless high-end branding.',
    iconName: 'Globe',
    features: [
      'Business Website Development',
      'E-commerce Website Development',
      'Landing Page Development',
      'Portfolio Website Development',
      'Website Redesign & WP/WooCommerce'
    ],
    color: 'text-amber-500',
    bgGlow: 'from-amber-500/10 to-transparent'
  },
  {
    id: 'landing-pages',
    title: 'High-Converting Landing Pages',
    shortDesc: 'Surgically engineered campaigns designed with one ultimate purpose: turning high-intent traffic into qualified clients and sales.',
    iconName: 'Target',
    features: [
      'Conversion-focused layouts',
      'Frictionless lead-capture',
      'Sub-second load times',
      'Adaptive mobile architectures',
      'Persuasive copy alignment'
    ],
    color: 'text-emerald-500',
    bgGlow: 'from-emerald-500/10 to-transparent'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Solutions',
    shortDesc: 'Dynamic online store layouts built for seamless catalog discoverability, robust cart conversion, and frictionless payment checkouts.',
    iconName: 'ShoppingBag',
    features: [
      'WooCommerce Store Setup',
      'Product Research & Listing Support',
      'Inventory & Variation Configurations',
      'Checkout & Order Systems',
      'Admin Dashboard Integrations'
    ],
    color: 'text-blue-500',
    bgGlow: 'from-blue-500/10 to-transparent'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Ads',
    shortDesc: 'Strategic customer acquisition across Search, Display, and Social, optimized for high ROAS and scalable brand growth.',
    iconName: 'TrendingUp',
    features: [
      'Meta Ads Management',
      'Facebook Message Marketing',
      'Email & WhatsApp Campaigns',
      'Content Strategy Curation',
      'Lead Generation Pipelines'
    ],
    color: 'text-violet-500',
    bgGlow: 'from-violet-500/10 to-transparent'
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    shortDesc: 'High-end visual storytelling and community engagement profiles that establish regular, authoritative, and trend-aware trust.',
    iconName: 'MessageSquare',
    features: [
      'Facebook & Instagram Management',
      'Content Planning & Scheduling',
      'Short-form vertical reels strategy',
      'Audience Engagement & Retainers'
    ],
    color: 'text-rose-500',
    bgGlow: 'from-rose-500/10 to-transparent'
  },
  {
    id: 'seo-analytics',
    title: 'SEO & Analytics',
    shortDesc: 'Advanced organic optimization and data setup. Climb search engine ranks with clean, high-authority content and flawless semantic markup.',
    iconName: 'BarChart3',
    features: [
      'Basic & On-Page SEO Optimization',
      'Website Speed Optimization',
      'Google Analytics Setup',
      'Google Search Console Setup',
      'SEO-Friendly structural frameworks'
    ],
    color: 'text-cyan-500',
    bgGlow: 'from-cyan-500/10 to-transparent'
  },
  {
    id: 'pixel-capi',
    title: 'Meta Pixel & Conversions API',
    shortDesc: 'Bypass ad-blockers and iOS privacy restrictions with server-side tracking that maximizes visual attribution accuracy and ad efficiency.',
    iconName: 'Fingerprint',
    features: [
      'Meta Pixel Setup & Audits',
      'Pixel Event Tracking Code',
      'Server-side Conversions API (CAPI)',
      'WhatsApp & Contact Forms Tracker'
    ],
    color: 'text-fuchsia-500',
    bgGlow: 'from-fuchsia-500/10 to-transparent'
  },
  {
    id: 'lead-generation',
    title: 'Precision Lead Generation',
    shortDesc: 'Multi-channel systems using target surveys, premium lead-magnets, and automated nurturing to build constant warm pipelines.',
    iconName: 'Users',
    features: [
      'Interactive survey & quiz screens',
      'Lead collection forms integration',
      'Automated CRM sync',
      'Dedicated marketing pipelines'
    ],
    color: 'text-orange-500',
    bgGlow: 'from-orange-500/10 to-transparent'
  }
];

export const CRAFTED_EXPERIENCES: CraftedExperience[] = [
  {
    id: 'experience-01',
    title: 'Future Bicycle Space',
    category: 'future-bicycle',
    shortDesc: 'Visually arresting 3D layout tracking next-gen physical performance products with responsive dynamics.',
    description: 'We engineered a highly stylized presentation experience showcasing futuristic concepts. Integrating ultra-sleek layout lines, responsive motion transitions, and high-fidelity product cards for outstanding retention metrics.',
    imageSvgType: 'creative',
    image: '/images/portfolio-1.webp',
    liveUrl: 'https://sitora-future-bicycle.vercel.app/',
    tags: ['React & Vite', 'Tailwind CSS', 'Cinematic Motion', 'High Spec Preview'],
    metric: '99% Score',
    metricLabel: 'Performance Lighthouse'
  },
  {
    id: 'experience-02',
    title: 'Ocean Odyssey',
    category: 'underwater adventure',
    shortDesc: 'An immersive aquatic experience featuring pristine dark ocean vistas and smooth scroll mechanics.',
    description: 'We built a beautiful content portal dedicated to deep ocean tracking and travel expeditions. Features fluid content blocks, glassmorphous cards, custom sound toggle hooks, and optimal load velocities.',
    imageSvgType: 'analytics',
    image: '/images/portfolio-2.webp',
    liveUrl: 'https://ocean-odyssey-pi.vercel.app/',
    tags: ['Next.js', 'Framer Motion', 'Reflective Glass', 'On-Page SEO'],
    metric: '0.45s',
    metricLabel: 'First Contentful Paint'
  },
  {
    id: 'experience-03',
    title: 'Sitora Collectible Hub',
    category: 'collectible',
    shortDesc: 'Premium collector showcase platform with optimized transactional checkouts and catalog indexing.',
    description: 'A luxurious interactive catalog for rare premium collector assets. Configured high-impact dark cards, precise filtering controls, and optimized Meta Conversions CAPI pipelines to drive buyer intent.',
    imageSvgType: 'ecommerce',
    image: '/images/portfolio-3.webp',
    liveUrl: 'https://sitora-collectible.vercel.app/',
    tags: ['Vue Storefront', 'WooCommerce API', 'Tailwind', 'Pixel Custom Events'],
    metric: '+184%',
    metricLabel: "Checkout Flow Rate"
  },
  {
    id: 'experience-04',
    title: 'Gander Futuristic',
    category: 'gander-futuristic',
    shortDesc: 'Bold modern sci-fi portal layout designed for institutional gaming and asset tracking.',
    description: 'Bespoke web experience highlighting cutting-edge software paradigms. Leveraging clean Inter display fonts paired with robust JetBrains Mono counters for instant high-budget design authority.',
    imageSvgType: 'saas',
    image: '/images/portfolio-4.webp',
    liveUrl: 'https://gander-futuristic.vercel.app/',
    tags: ['Next.js 15', 'Volumetric Shaders', 'Tailwind CSS v4', 'Domain Host Routing'],
    metric: '60 FPS',
    metricLabel: 'Fluid Navigation Rate'
  },
  {
    id: 'experience-05',
    title: 'Hayaa Fashion Studio',
    category: 'fasshion',
    shortDesc: 'A beautiful modest wear digital store engineered for supreme discoverability and catalog luxury.',
    description: 'Bespoke, conversion-focused virtual storefront for a modern fashion wear brand. Built with modular quick-checkout drawers, detailed size variation calculators, and seamless WhatsApp chat triggers.',
    imageSvgType: 'ecommerce',
    image: '/images/portfolio-5.webp',
    liveUrl: 'https://hayaa-fashion-kappa.vercel.app/',
    tags: ['React Store', 'WooCommerce Config', 'WhatsApp Integrator', 'Mobile Flow'],
    metric: '5.2x',
    metricLabel: 'Lead Conversion Boost'
  },
  {
    id: 'experience-06',
    title: 'Style & Decor',
    category: 'INTERIOR & DECOR',
    shortDesc: 'A minimal, high-contrast, beautiful layout displaying high-end architectural and design solutions.',
    description: 'We replaced their legacy templates with an elegant React portal emphasizing typographic rhythm, vast negative spaces, soft white themes, and premium slide galleries.',
    imageSvgType: 'creative',
    image: '/images/portfolio-6.webp',
    liveUrl: 'https://style-decor-milon.netlify.app/',
    tags: ['Premium Design', 'Responsive Grids', 'Animate Scroll', 'Clean Gallery'],
    metric: '100% Core',
    metricLabel: 'SEO Friendliness'
  },
  {
    id: 'experience-07',
    title: 'Warm Paws Boutique',
    category: 'PET CARE & ACCESSORIES',
    shortDesc: 'Frictionless micro-commerce interface optimized for local home delivery and accessory setups.',
    description: 'Delightful visual store layout engineered for premium pet care products. Incorporates Meta pixel event tracking and speedy client checkouts to maximize promotional campaign metrics.',
    imageSvgType: 'ecommerce',
    image: '/images/portfolio-7.webp',
    liveUrl: 'https://warmpaws-milon.netlify.app/',
    tags: ['E-com Support', 'Facebook API Link', 'Canva Creative Layouts', 'Quick Shop'],
    metric: '< 1.2s',
    metricLabel: 'Mobile Interaction Latency'
  },
  {
    id: 'experience-08',
    title: 'Paw Haven Portal',
    category: 'PET SERVICES & STORE',
    shortDesc: 'A high-converting localized veterinary portal with smart appointment bookings.',
    description: 'All-in-one veterinary service portal providing instant call and WhatsApp appointment slots. Hand-tailored to provide localized SEO presence for pet parents in nearby cities.',
    imageSvgType: 'creative',
    image: '/images/portfolio-8.webp',
    liveUrl: 'https://paw-haven-client.vercel.app/',
    tags: ['Google Maps Platform', 'On-Page SEO', 'Contact Form Config', 'Schema Markup'],
    metric: '4.9/5',
    metricLabel: 'User Interaction Score'
  },
  {
    id: 'experience-09',
    title: 'Movie Master Pro',
    category: 'MOVIES & ENTERTAINMENT',
    shortDesc: 'Dynamic catalog layout and filter suite for streaming media indexing.',
    description: 'A futuristic black media catalog layout supporting high-contrast previews, interactive movie information arrays, and client-side database listings.',
    imageSvgType: 'analytics',
    image: '/images/portfolio-9.webp',
    liveUrl: 'https://movie-master-pro-milon.netlify.app/',
    tags: ['Dynamic Caching', 'Interactive Sliders', 'Glassmorphism Panels', 'Tailwind'],
    metric: '500k+',
    metricLabel: 'Monthly Asset Queries'
  },
  {
    id: 'experience-10',
    title: 'Appverse Platform',
    category: 'APPS & TECHNOLOGY',
    shortDesc: 'High-concept technological landing page engineered to capture software test registrations.',
    description: 'Full-screen cinematic application landing page detailing app benefits, featuring futuristic launch animations, Google Search structured data, and high-contrast email capture cards.',
    imageSvgType: 'saas',
    image: '/images/portfolio-10.webp',
    liveUrl: 'https://appverse-milon.netlify.app/',
    tags: ['React 18', 'Apple Style Visuals', 'GTM Integration', 'Meta Pixel Event'],
    metric: '42.8%',
    metricLabel: 'Opt-in Conversion Ratio'
  },
  {
    id: 'experience-11',
    title: 'Al-Ishaq Academy',
    category: 'WRITING&ACADEMY',
    shortDesc: 'A prestigious institutional portal providing high-end lesson plans and class schedules.',
    description: 'A completely customized educational portal supporting multiple structural departments, clean course registries, and responsive academic timelines for students and faculty.',
    imageSvgType: 'corporate',
    image: '/images/portfolio-11.webp',
    liveUrl: 'https://alishaqacademy.com/',
    tags: ['WordPress Core Design', 'SEO Optimization', 'Secure Portal', 'Responsive Tables'],
    metric: '10k+',
    metricLabel: 'Active Student Registrations'
  }
];

export const STATISTICS_DATA: StatItem[] = [
  { id: 'stat-01', value: 150, suffix: '+', label: 'Marketing Projects Assisted', subtext: 'Successfully launched digital ad networks, targeted campaigns, and scaling systems.' },
  { id: 'stat-02', value: 100, suffix: '+', label: 'Website Projects Worked On', subtext: 'Transitioning offline institutions into high-fidelity web architectural portals.' },
  { id: 'stat-03', value: 15, suffix: '+', label: 'Social Media Accounts Managed', subtext: 'Spearheading viral content, custom curation loops, and high-growth retail streams.' },
  { id: 'stat-04', value: 30, suffix: '+', label: 'Business Operations Supported', subtext: 'Executing deep internal automation pipelines and multi-family coordination hubs.' },
  { id: 'stat-05', value: 50, suffix: '+', label: 'Client Recommendations Received', subtext: 'Nurtured relationships based on absolute visual and technical excellence.' }
];

export const PRICING_DATA: PricingPlan[] = [
  {
    id: 'plan-landing',
    name: 'Landing Page',
    price: '$99',
    period: 'starting from',
    description: 'Surgically designed single-screen masterpiece tailored to turn clicks into active, high-intent client conversions.',
    features: [
      { text: 'Premium Responsive Design', included: true },
      { text: 'Conversion-Focused Layout', included: true },
      { text: 'Mobile Optimization', included: true },
      { text: 'WhatsApp Integration', included: true },
      { text: 'Basic SEO Setup & Search Console', included: true },
      { text: 'Meta Pixel Setup & Event Tracking', included: true },
      { text: '7 Days Dedicated Post-Launch Support', included: true },
      { text: 'WordPress or Custom React Code', included: true }
    ],
    isRecommended: false,
    deliveryTime: '2-5 business days'
  },
  {
    id: 'plan-business',
    name: 'Business Website',
    price: '$299',
    period: 'starting from',
    description: 'The definitive institutional choice. A comprehensive structural multi-page presence crafted to generate absolute authority.',
    features: [
      { text: 'Up to 5 Pages Premium Design Layout', included: true },
      { text: 'Secure Contact Forms & Captcha Control', included: true },
      { text: 'WhatsApp Interaction Triggers', included: true },
      { text: 'Google Analytics & Google Search Console Setup', included: true },
      { text: 'Basic On-Page SEO Optimization', included: true },
      { text: 'Domain-Host Setup & Server Configurations', included: true },
      { text: 'Website Speed & Core Web Vitals Optimization', included: true },
      { text: '15 Days Support Retainer Protection', included: true }
    ],
    isRecommended: true,
    deliveryTime: '5-10 business days'
  },
  {
    id: 'plan-[#D6B16B]',
    name: 'E-Commerce Website',
    price: '$699',
    period: 'starting from',
    description: 'A full-scale transactional powerhouse featuring deep inventory setups, instant search suggestions, and seamless checkouts.',
    features: [
      { text: 'WooCommerce Complete Setup', included: true },
      { text: 'Product Research & Initial Listing Management', included: true },
      { text: 'Admin Revenue & Order Management Dashboard', included: true },
      { text: 'Multiple Product Color/Size Variations Support', included: true },
      { text: 'Meta Pixel & Conversion API (CAPI) Integration', included: true },
      { text: 'Checkout System & Local Bangladeshi Payment Gateways', included: true },
      { text: 'E-Commerce Schema Markup & Speed Optimization', included: true },
      { text: '30 Days Extended Post-Launch Technical Support', included: true }
    ],
    isRecommended: false,
    deliveryTime: '10-20 business days'
  },
  {
    id: 'plan-retainer2',
    name: 'Marketing Retainer',
    price: '$199',
    period: 'starting from / Month',
    description: 'Your growth wing. Spearheading social media posts, designing Canva graphics, scaling Meta campaigns, and driving cold traffic into active buyers.',
    features: [
      { text: 'Social Media Management (Facebook, Instagram)', included: true },
      { text: 'Content Planning & Creative Scheduling', included: true },
      { text: 'Target Lead Generation Funnel Scaling', included: true },
      { text: 'Facebook message marketing & campaigns support', included: true },
      { text: 'Canva Social Design & Video Curation Support', included: true },
      { text: 'Monthly Performance reporting & analytics audit', included: true },
      { text: 'Dedicated Slack or WhatsApp Account Manager', included: true }
    ],
    isRecommended: false,
    deliveryTime: 'Ongoing (No setup wait)'
  },
  {
    id: 'plan-custom-sol',
    name: 'Custom Solutions',
    price: 'Quote Based',
    period: 'personalized scale',
    description: 'Every business is unique. Contact us for a personalized quotation tailored exactly to your goals, workflows, and specifications.',
    features: [
      { text: 'One-on-One Business Consultation & Audit sessions', included: true },
      { text: 'Custom Engineered Web App Architecture', included: true },
      { text: 'Meta Pixel event + Conversion API (CAPI) tracking', included: true },
      { text: 'Speed & Conversion optimizations modeled to scale', included: true },
      { text: 'XML Sitemap, Robots.txt & Secure Backups', included: true },
      { text: 'Dedicated Account Liaison support', included: true }
    ],
    isRecommended: false,
    deliveryTime: 'Scope-defined delivery timeline'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-01',
    author: 'Fatima Tabassum',
    role: 'Business Owner',
    company: 'Local Boutique',
    content: 'Highly recommended for business owners. Fast response, clean design, and smooth communication throughout the project.',
    rating: 5,
    avatarBlurHash: 'L78h-@_3~q4T00%M%MD%D*Rj9F%M',
    avatarInitials: 'FT',
    source: 'Verified Google Review'
  },
  {
    id: 't-02',
    author: 'Arif Hosen',
    role: 'Business Owner',
    company: 'Digital Venture',
    content: 'Trusted and responsible agency. Highly recommended. They delivered everything properly without any hassle.',
    rating: 5,
    avatarBlurHash: 'LKN8v_~qD%-;9FD%IUxu_3RjD*?b',
    avatarInitials: 'AH',
    source: 'Verified Google Review'
  },
  {
    id: 't-03',
    author: 'Wajiha Amatullah',
    role: 'E-Commerce Seller',
    company: 'Apparel Boutique',
    content: 'They built an exceptionally beautiful website for us. The design was remarkably clean and professional.',
    rating: 5,
    avatarBlurHash: 'L69jP._300~q_39F9F-;_3D%RjM{',
    avatarInitials: 'WA',
    source: 'Verified Facebook Recommendation'
  },
  {
    id: 't-04',
    author: 'Al-Balag Academy Representative',
    role: 'Director of Education',
    company: 'Al-Balag Academy',
    content: 'We have been partnering with Sitora Web since the very inception of our academy. We are highly satisfied with their exceptional website development and digital marketing support.',
    rating: 5,
    avatarBlurHash: 'L69jP._300~q_39F9F-;_3D%RjXX',
    avatarInitials: 'AA',
    source: 'Verified Google Review'
  },
  {
    id: 't-05',
    author: 'HSS IT Partner',
    role: 'B2B Client Partner',
    company: 'HSS IT Solution',
    content: 'We have been partnering with Sitora Web for a long time for our website support and social media marketing workflows. Highly recommended.',
    rating: 5,
    avatarBlurHash: 'L69jP._300~q_39F9F-;_3D%RjYY',
    avatarInitials: 'HI',
    source: 'Verified Facebook Recommendation'
  },
  {
    id: 't-06',
    author: 'Umaima Tasnim',
    role: 'Local Brand Owner',
    company: 'E-Commerce Retailer',
    content: 'Professional and reliable service. Domain, hosting, and launch elements were set up properly without any hassle.',
    rating: 5,
    avatarBlurHash: 'L69jP._300~q_39F9F-;_3D%RjZZ',
    avatarInitials: 'UT',
    source: 'Verified Google Review'
  }
];

export const ARTICLES_DATA: Article[] = [
  {
    id: 'art-01',
    title: 'How Much Does a Website Cost in Bangladesh? (Ultimate Budget Breakdown)',
    excerpt: 'Avoid cheap template traps. Learn what determines high-converting custom assets from sluggish preset themes, and how to budget accurately for serious return on investment.',
    category: 'Agency Playbook',
    readTime: '7 min read',
    date: 'June 09, 2026',
    imageAlt: 'Website Cost Breakdown Bangladesh Sitora Web Design',
    content: `Developing a modern web presence in Bangladesh varies fundamentally based on design complexity, mobile performance under local networks, and long-term marketing readiness. Why do some templates cost $50, while premium custom solutions reach $699 and beyond? Let’s examine the exact structural factors driving digital pricing.

### The True Cost Breakdown in Bangladesh:
1. **Landing Pages ($99 - $199):** A surgically focused single-screen mastermind layout. It houses zero distractions and centers a direct purchase or booking goal on WhatsApp or a form. Excellent for fast Facebook campaign launches.
2. **Business Corporate Portals ($299 - $600):** Designed to establish institutional voice. Includes up to 5-10 core pages (Services, About, Contact, Gallery) equipped with speed optimization, secure CDN setups, and on-page SEO schema indexing.
3. **E-Commerce Powerhouses ($699 - $1,499+):** Transactional systems capable of managing thousands of catalog iterations, product variation logic (colors, sizes), real-time order tracking, localized bKash/Nagad gateway checkouts, and crucial server-side tracking pixels.

### Why Cheap Templates Cost More Long-Term:
Generic pre-made themes are bloated with unused tracking scripts and heavy visual structures. They hold mobile loading latencies of 5 to 8 seconds under typical local 4G conditions. Because 40% of visitors bounce if a site takes over 3 seconds, cheap sites serve as traffic drains. Custom hand-coded solutions preserve your ad money, maintaining sub-second loads and doubling checkout rates.`
  },
  {
    id: 'art-02',
    title: 'Business Website vs Landing Page: When to Deploy Which Asset',
    excerpt: 'Discover why routing cold social media marketing spend to a multi-page institutional interface is draining budgets, and when clean action-focused pages win.',
    category: 'Sitora Insights',
    readTime: '6 min read',
    date: 'June 05, 2026',
    imageAlt: 'Business Website comparison with Landing Page conversions',
    content: `A frequent operational error in Bangladesh is routing paid Facebook or Instagram marketing clicks directly to a complex corporate homepage. Visitors get overwhelmed, browse aimlessly, and exit without completing a conversion. Knowing whether to build a standard Business Website or a single Landing Page is essential for high campaign efficiency.

### Landing Pages: Engineered for Instant Capture
A landing page is built with one focused goal: capturing immediate leads or orders.
- **Structural boundaries:** It has no header navigation bar, no sidebar links, and zero external routes. Its flow is linear.
- **Copy alignment:** Every paragraph, review, and button works collectively to explain one single product variation or service package.
- **When to deploy:** Whenever you spend money on paid traffic (Meta Ads, Google Search campaigns, TikTok Ads).

### Business Websites: Engineered for Trust and Search Query SEO
A corporate website is your absolute digital anchor, established to build brand reputation.
- **Structural boundaries:** Supports rich multi-page navigation including an "About Us" deep dive, complete "Services portfolio", client recommendations, and contact forms.
- **Search Advantage:** It hosts blog folders, structural metadata, and custom content blocks to capture high-volume search queries from Google.
- **When to deploy:** To establish long-term institutional authority, hire employees, gather remote client inquiries, and capture search intent organically.`
  },
  {
    id: 'art-03',
    title: 'Why Every Business Needs a Website (Stop Relying Only on Facebook)',
    excerpt: 'An in-depth study of local Bangladeshi search behaviors, and why relying solely on Facebook Pages creates critical, systemic risks for modern brands.',
    category: 'Market Strategy',
    readTime: '6 min read',
    date: 'June 02, 2026',
    imageAlt: 'Why Businesses Need Websites Bangladesh Search Trends',
    content: `Running your entire retail business in Bangladesh exclusively on an active Facebook page is equivalent to building your home on rented land. If Meta updates its recommendation algorithms, restricts your ad account without warning, or if competitors aggressively bid on your feed space, your business distribution can collapse overnight.

### Own Your Visual Legacy & Data:
With a dedicated website, you are in absolute command of your customer experience. No third-party guidelines can suppress your checkout buttons, alter your display styles, or place competitor banner ads below your items. It provides permanent ownership of your analytical data.

### Dominate Search Intent (Google SEO):
When Bangladeshi customers look for reliable products or professional services, they search on Google first. By having a mobile-optimized website equipped with local structured schemas, your brand appears directly at the peak of search rankings. This yields high-converting organic leads without draining daily advertisement budgets.`
  },
  {
    id: 'art-04',
    title: 'How to Start an E-Commerce Business in Bangladesh (Calculated Roadmap)',
    excerpt: 'A comprehensive step-by-step master plan detailing product variations, courier integration, frictionless checkouts, and local payment pathways.',
    category: 'E-Commerce Tips',
    readTime: '8 min read',
    date: 'May 28, 2026',
    imageAlt: 'Launch E-Commerce Storefront Bangladesh Guide',
    content: `The e-commerce landscape in Bangladesh is expanding rapidly. Yet, 75% of local digital startups close within their first year due to fragmented checkout experiences, slow catalog speeds, and manual shipping coordination. Scaling requires moving away from manual group messages and establishing an automated storefront.

### The 4 Step Operational Architecture:
1. **Optimize for Mobile Interaction:** More than 92% of local online shoppers complete checkouts using their smartphones. Your store interface must load in under 1.5 seconds, utilizing responsive catalog cards and frictionless sliding menus.
2. **Enable Seamless Variations:** Make checking out simple. Customers must be able to select specific colors, sizes, and pricing classes directly from the screen with immediate pricing updates.
3. **Offer High-Velocity Checkout Forms:** Force-registering accounts is a major cause of cart abandonment. Keep checkout forms extremely short—only ask for their Name, Phone number, and Shipping Address. Support bKash, Nagad, and Cash-on-Delivery right out of the box.
4. **Link Logistics and Analytics:** Connect courier shipping systems (like Pathao or Steadfast API) to speed up order fulfillment, and set up Meta Conversions API to accurately track user sessions and optimize return on ad spend.`
  },
  {
    id: 'art-05',
    title: 'Best Hosting for WordPress Websites in Bangladesh (Transparent Review)',
    excerpt: 'Maximize speed and avoid frequent downtime. A transparent, local-friendly comparison of cloud hosting solutions for Bangladeshi business operations.',
    category: 'Technical Setup',
    readTime: '7 min read',
    date: 'May 20, 2026',
    imageAlt: 'Best Hosting WordPress Websites Bangladesh Comparisons',
    content: `Your web performance is directly tied to your cloud hosting setup. Running a beautifully coded website on cheap, oversold global servers results in sluggish performance for local customers. To keep your bounce rates low and conversions high, you need to know how to select premium hosting.

### The Top Regional Choices Analyzed:
1. **Hostinger Cloud (Highly Recommended):** Offers excellent Asiatic speed nodes (Singapore, Mumbai servers) with built-in LiteSpeed cache engines. Keeps local latencies under 90ms. Perfect for e-commerce catalog stores and scaling landing pages.
2. **Namecheap Stellar (Budget-Friendly):** Reliable for quiet corporate sites with low concurrent traffic, but page load speeds can lag during high-volume ad campaigns.
3. **Dedicated Cloud (DigitalOcean/Vultr):** The ultimate choice for peak authority. Requires solid server setup experience but delivers absolute speed and dedicated database resources.

### Crucial Selection Checklist:
- **Server Proximity:** Always select server nodes located in Singapore, India, or Bangladesh. Western nodes (London, Ohio) double latency, which slows down mobile rendering.
- **SSL Certificate:** Free Let’s Encrypt certificates are mandatory for secure checkout trust indicators.
- **Daily Automated Backups:** Protect your business data against bad theme updates or accidental catalog deletions.`
  },
  {
    id: 'art-06',
    title: '5 Facebook Marketing Tips for Scalable Small Business Growth',
    excerpt: 'Accelerate your client capture rate using conversation loops, target messaging filters, automated lead systems, and conversion-optimized budgets.',
    category: 'Traffic Scaling',
    readTime: '6 min read',
    date: 'May 15, 2026',
    imageAlt: 'Facebook Marketing Scaling Tips Small Business',
    content: `Running basic page boosts in Bangladesh is no longer a viable way to grow. Meta’s advertising costs are rising, and broad targeting returns noisy, non-buying comments. Small businesses must adopt structured, precise ad strategies to maintain strong profit margins.

### The 5 Most Effective Tactics:
1. **Use Advantage+ Budget Optimization (ABO):** Instead of manually dividing small budgets across many ad sets, let Meta’s machine learning allocate funds in real time to the highest-converting visual sets.
2. **Retarget Cart Abandoners:** Create custom Facebook audiences targeting website visitors who added products to their cart but did not complete checkout. Run a retargeting ad offering a small incentive like "Free Shipping across Bangladesh."
3. **Prioritize Raw, Authentic Video Reels:** Highly structured corporate graphics often look too commercial and get scrolled past. Raw, genuine 15-second mobile recordings showing product variations build stronger trust and drive higher click-through rates.
4. **Deploy Direct WhatsApp Funnels:** Tap into local messaging preferences. Create "Send Message to WhatsApp" ads linked to clear introductory prompts. This allows your team to answer questions and close sales directly.
5. **Sync Your Offline Conversion Data:** Regular pixels match fewer events over time due to cookie limitations. Use server-side Conversions API mapping to send transaction updates directly back to your ad manager, helping lower your visual cost-per-lead.`
  },
  {
    id: 'art-07',
    title: 'What is Meta Pixel and Why Does It Matter for Small Businesses?',
    excerpt: 'Understand how server-to-server Conversions API configurations stabilize ad feedback loops despite modern cookie constraints and tracking filters.',
    category: 'Technical Marketing',
    readTime: '8 min read',
    date: 'May 08, 2026',
    imageAlt: 'Meta Pixel Conversions API Server Integration Guide',
    content: `If you run paid campaigns on Facebook or Instagram without a Pixel, you are essentially flying blind. You are spending your hard-earned budget without knowing which specific ad, video, or headline actually generated your sales.

### How Meta Pixel Works:
It is an analytical script embedded in your website that tracks client interactions (e.g., viewing a product page, adding to cart, completing checkout). This tracking sends signals back to Meta, helping your system identify exactly what is bringing sales.

### Why Server-Side Conversions API (CAPI) is Crucial:
Ordinary browser cookies are fading. Modern iOS updates, Safari track block lists, and browser extensions (like AdBlock) hide up to 40% of standard checkout metrics. Sitora Web custom configures a solid server-to-server connection. When a customer pays, your web server passes the conversion event directly to Meta. This ensures 100% accurate visual tracking records, allowing you to scale budgets efficiently based on real ROI.`
  },
  {
    id: 'art-08',
    title: 'How to Choose the Right Digital Marketing Agency in Bangladesh',
    excerpt: 'Avoid smooth-talking amateurs. Look for key performance metrics, solid technical credentials, and clear attribution systems before signing contracts.',
    category: 'Agency Playbook',
    readTime: '7 min read',
    date: 'May 01, 2026',
    imageAlt: 'How to Choose Digital Marketing Agency Dhaka Bangladesh',
    content: `Dozens of agencies in Dhaka promise huge organic reach and "guaranteed viral campaigns." However, real business growth is built on predictable customer acquisition channels and measurable sales receipts, not just likes and comments. Here is how to evaluate digital marketing partners.

### Common Pitfalls to Dodge:
- **Focusing on Vanity Metrics:** Be skeptical of pitches centered around "Brand Impressions" or "Page Likes." If an agency cannot explain their Cost-per-Acquisition metrics or Return on Ad Spend (ROAS) tracking, they may just be high-priced graphic designers.
- **No Hand-On Code Auditing:** Paid ads perform best when your landing page loads fast and contains accurate schema markup. If your agency does not run speed tests or check your Meta pixel health, they are ignoring half of your customer journey.

### Important Green Flags:
- **Emphasis on Server Analytics:** Professional agencies ask about your Conversions API setup and help you configure first-party cookies.
- **Clear Copywriting and Design Testing:** They constantly test variations of ad angles, copywriting hooks, and mobile interfaces.`
  },
  {
    id: 'art-09',
    title: 'Landing Page vs E-Commerce Website (Choose Your Growth Weapon)',
    excerpt: 'A rigorous structural comparison to identify when to deploy a focused single-product layout versus a multi-category store catalog.',
    category: 'Sitora Insights',
    readTime: '6 min read',
    date: 'April 22, 2026',
    imageAlt: 'Landing page vs ecommerce catalog stores differences',
    content: `Should you invest your capital in an extensive, multi-category online store or a focused, single-item landing page? Making the right strategic choice depends entirely on how your product catalog is structured and your preferred digital marketing strategy.

### The Focused Landing Page: High-Velocity Conversion
Landing pages are built to sell a specific product or service with maximum efficiency.
- **Advantages:** Quick to design, incredibly fast page speeds, and highly focused visitor attention. They often achieve conversion rates of 10% to 22% on social ads.
- **Drawbacks:** Only supports one primary item or catalog series. Does not include multi-category filtering systems.
- **Best suited for:** Dedicated product launches, specialized single-service packages, and direct-response advertising.

### The E-Commerce Storefront: Rich Catalog Discovery
An e-commerce website is designed to house a complete product lineup under one digital roof.
- **Advantages:** Encourages discovery and search filtering, enables shoppers to add multiple items to a cart, supports upselling (like matching accessories), and creates higher average order values.
- **Drawbacks:** Requires a more complex setup, needs detailed database management, and demands continuous performance optimization to prevent high mobile checkout abandonment.
- **Best suited for:** Established clothing brands, department stores, and businesses offering a wide range of products.`
  },
  {
    id: 'art-10',
    title: 'Top Website Design Trends in 2026 (Creating Pure Visual Authority)',
    excerpt: 'Stay ahead of the curve. Explore the luxury aesthetics, typographic hierarchies, and animations defining the internet\'s look in 2026.',
    category: 'Market Strategy',
    readTime: '6 min read',
    date: 'April 10, 2026',
    imageAlt: 'Web Design Trends Bangladesh 2026',
    content: `In 2026, standard flat bootstrap designs look dated and uninspired. Modern businesses in competitive industries are adopting premium, highly interactive aesthetic concepts to stand out. Here are the core visual design trends that establish high-end brand authority in 2026.

### The Core Aesthetics of 2026:
1. **Sophisticated Color Palettes:** Vibrant neon colors are giving way to refined, professional tones. Warm grays, rich slate backdrops, champagne accents, and classic off-whites create a clean, eye-friendly experience.
2. **Bold Typographic Contrast:** Combining striking display headlines (like Space Grotesk or Outfits) with clean, technical mono subtext fonts (like JetBrains Mono) instantly conveys a modern, high-quality feel.
3. **Tactile Micro-Animations:** Modern web designs use subtle, interactive micro-animations. Scroll-guided fade-ins, glassmorphic floating elements, and responsive hover cursor glows make users feel like they are interacting with a premium, custom-crafted digital object.
4. **Immersive Grid Layouts:** Moving beyond traditional column templates, asymmetrical bento box grids highlight services and case studies in a clean, visually interesting format.`
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-01',
    question: 'How much does a website cost?',
    answer: 'The cost depends on your requirements, features, and project scope. Our website projects typically start from $99 for high-converting landing pages, $299 for standard business websites, and $699 for full features e-commerce databases. Custom quotations are available for unique requirements.'
  },
  {
    id: 'faq-02',
    question: 'How long does it take to complete a website?',
    answer: 'Project timelines vary depending on design complexity and required backend features. A high-converting landing page is completed in 2 to 5 business days, standard business websites take 5 to 10 days, and e-commerce projects require 10 to 20 days. Exact timelines are established before beginning.'
  },
  {
    id: 'faq-03',
    question: 'Do I need to purchase domain and hosting separately?',
    answer: 'Yes. Clients usually purchase their own domain and hosting for full legal ownership. Sitora Web provides complete free guidance and setup support throughout the configurations to ensure everything is mounted smoothly.'
  },
  {
    id: 'faq-04',
    question: 'Do you provide support after delivery?',
    answer: 'Yes. We provide dedicated post-delivery support based on the package: 7 days for landing pages, 15 days for business websites, and 30 days for e-commerce stores. Additional monthly maintenance retentions and support plans are also available.'
  },
  {
    id: 'faq-05',
    question: 'Do you require advance payment?',
    answer: 'Yes. We require a partial advance payment before commencing design blueprinting and development. The remaining percentage is settled according to agreed progress milestones or before final file deployment.'
  },
  {
    id: 'faq-06',
    question: 'Can I request changes during the project?',
    answer: 'Absolutely. Minor structural modifications and copy edits are included during development to guarantee results match your brand vision perfectly. Extra features outside original scope are discussed transparently.'
  },
  {
    id: 'faq-07',
    question: 'Will I get full access to my website?',
    answer: 'Yes. Upon successful project completion and milestone handovers, you will receive full access details for your web hosting platform, domain registry, database consoles, and administrative backend dashboards.'
  },
  {
    id: 'faq-08',
    question: 'Do you only work with businesses in Bangladesh?',
    answer: 'No. While we are based in Bangladesh, Sitora Web collaborates with growth-focused businesses, e-commerce stores, and organizations globally through optimized remote processes and communication platforms.'
  }
];
