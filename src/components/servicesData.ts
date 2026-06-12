import React from 'react';

export interface SubServiceContent {
  id: string;
  titleEn: string;
  titleBn: string;
  descEn: string;
  descBn: string;
  capabilitiesEn: string[];
  capabilitiesBn: string[];
  bestForEn: string;
  bestForBn: string;
  timelineEn: string;
  timelineBn: string;
  trustStatementEn: string;
  trustStatementBn: string;
  badge?: {
    en: string;
    bn: string;
  };
}

export interface CategoryContent {
  id: string;
  labelEn: string;
  labelBn: string;
  headingEn: string;
  headingBn: string;
  descEn: string;
  descBn: string;
  iconName: string;
  bestForEn: string;
  bestForBn: string;
  timelineEn: string;
  timelineBn: string;
  trustStatementEn: string;
  trustStatementBn: string;
  capabilitiesEn: string[];
  capabilitiesBn: string[];
  subServices: SubServiceContent[];
}

export const CATEGORIES_DATA: CategoryContent[] = [
  {
    id: 'web-dev',
    labelEn: 'Web Development',
    labelBn: 'ওয়েব ডেভেলপমেন্ট',
    headingEn: 'Bespoke Web Architectures',
    headingBn: 'কাস্টম ওয়েবসাইট ডেভেলপমেন্ট',
    descEn: 'Premium handcrafted web experiences designed to elevate authority, trust, and conversion.',
    descBn: 'ব্র্যান্ডের বিশ্বাসযোগ্যতা, গ্রাহকের আস্থা ও সেলস বৃদ্ধিতে বিশেষভাবে ডিজাইন করা আধুনিক ইন্টারেক্টিভ ওয়েবসাইট।',
    iconName: 'Globe',
    bestForEn: 'Brands requiring elite positioning, fast speed, and absolute design freedom.',
    bestForBn: 'যাঁদের প্রয়োজন বিশ্বমানের ব্র্যান্ড পজিশনিং, দ্রুততম পেজ স্পিড এবং সম্পূর্ণ কাস্টমাইজড কোড।',
    timelineEn: '2 - 4 Weeks',
    timelineBn: '২ - ৪ সপ্তাহ',
    trustStatementEn: '100% Performance Guarantee // No Page-builder Overhead',
    trustStatementBn: '১০০% অপ্টিমাইজড হ্যান্ড-কোড গ্যারান্টি // কোনো থার্ডপার্টি ভারী বিল্ডার বা থিম ছাড়াই',
    capabilitiesEn: [
      'Hand-coded React & Next.js',
      'Lighthouse Score optimization (99%+)',
      'Tailwind Fluid layouts',
      'Headless CMS integrations'
    ],
    capabilitiesBn: [
      'হ্যান্ড-কোডেড রিঅ্যাক্ট ও নেক্সট জেএস',
      'লাইটহাউস স্কোর সর্বোচ্চ অপ্টিমাইজেশন (৯৯%+)',
      'টেইলউইন্ড ফ্লুইড ডিজাইন লেআউট',
      'হেডলেস সিএমএস ইন্টিগ্রেশন'
    ],
    subServices: [
      {
        id: 'business-dev',
        titleEn: 'Business Website Development',
        titleBn: 'কর্পোরেট বিজনেস ওয়েবসাইট',
        descEn: 'Polished corporate platforms designed to capture leads and project true corporate authority.',
        descBn: 'কর্পোরেট ব্র্যান্ডের পরিচিতি ফুটিয়ে তোলার জন্য এবং প্রফেশনাল ক্লায়েন্ট আকর্ষণে আধুনিক পোর্টাল।',
        capabilitiesEn: ['Corporate Architecture', 'Interactive Lead Capture', 'Mobile Fluid Layouts'],
        capabilitiesBn: ['কর্পোরেট আর্কিটেকচার', 'ইন্টারেক্টিভ লিড ক্যাপচার', 'মোবাইল ফ্রেন্ডলি লেআউট'],
        bestForEn: 'Agencies, firms, and companies looking to establish solid digital credibility.',
        bestForBn: 'যেসব এজেন্সী বা প্রতিষ্ঠান নিজস্ব ক্যাটাগরিতে চমৎকার ডিজিটাল বিশ্বাসযোগ্যতা তৈরি করতে চান।',
        timelineEn: '7–14 Days',
        timelineBn: '৭–১৪ দিন',
        trustStatementEn: 'Fully secured and optimized for company firewalls.',
        trustStatementBn: 'শতভাগ নিরাপদ ও নির্ভরযোগ্য মডার্ন কোডিং স্ট্রাকচার।'
      },
      {
        id: 'ecommerce-dev',
        titleEn: 'E-Commerce Website Development',
        titleBn: 'প্রিমিয়াম ই-কমার্স ডেভেলপমেন্ট',
        descEn: 'High-end bespoke digital shops engineered with custom product finders and rapid cart speeds.',
        descBn: 'তাত্ক্ষণিক মোবাইল স্পিড ও কাস্টম প্রোডাক্ট অপশনসহ আকর্ষণীয় ডায়নামিক অনলাইন স্টোর।',
        capabilitiesEn: ['Bespoke Cart Optimization', 'bKash & Nagad Connectors', 'Frictionless Order Forms'],
        capabilitiesBn: ['কাস্টম কার্ট অপ্টিমাইজেশন', 'বিকাশ ও রকেট পেমেন্ট গেটওয়ে', 'সহজ অর্ডার ফরম ও ট্র্যাকিং'],
        bestForEn: 'Retail brands scaling fast in direct-to-consumer delivery.',
        bestForBn: 'যেসব রিটেইল ব্র্যান্ড সরাসরি কাস্টমারের কাছে দ্রুত প্রোডাক্ট সেল করতে চান।',
        timelineEn: '2–3 Weeks',
        timelineBn: '২–৩ সপ্তাহ',
        trustStatementEn: 'Built to process thousands of orders daily without delay.',
        trustStatementBn: 'দৈনিক হাজারো অর্ডার প্রসেস করার উপযোগী শক্তিশালী ফ্রেমওয়ার্ক।'
      },
      {
        id: 'landing-page-dev',
        titleEn: 'Landing Page Development',
        titleBn: 'হাই-কনভার্টিং ল্যান্ডিং পেজ',
        descEn: 'Single-view conversion engines crafted for high-performance marketing spend.',
        descBn: 'বিজ্ঞাপনের সঠিক বাজেট রিটার্ন ও সর্বোচ্চ সেলস নিশ্চিত করতে বিশেষভাবে তৈরি ল্যান্ডিং পেজ।',
        capabilitiesEn: ['Surgical Copy Placement', 'Sub-second Load Velocities', 'Direct Funnel Routing'],
        capabilitiesBn: ['সঠিক কপির লেআউট প্লেসমেন্ট', '১ সেকেন্ডেরও কম লোড স্পিড', 'সরাসরি সেলস ফানেল কানেকশন'],
        bestForEn: 'Product launches, lead acquisition campaigns, and conversion push.',
        bestForBn: 'নতুন প্রোডাক্ট লঞ্চ, কাস্টমার লিড কালেক্ট এবং বিজ্ঞাপনের বাজেট সঠিকভাবে কাজে লাগাতে।',
        timelineEn: '3–7 Days',
        timelineBn: '৩–৭ দিন',
        trustStatementEn: 'Delivering zero-bounce traffic performance standards.',
        trustStatementBn: 'স্পিড ও চমৎকার ভিজ্যুয়ালের সাহায্যে বাউন্স রেট হ্রাস।'
      },
      {
        id: 'portfolio-dev',
        titleEn: 'Portfolio Website Development',
        titleBn: 'পোর্টফোলিও ওয়েবসাইট',
        descEn: 'Showcase architectures focused on high-end typography and smooth transitions.',
        descBn: 'অভিজাত টাইপোগ্রাফি ও মনমুগ্ধকর ট্রানজিশনসহ কাজের প্রফেশনাল পোর্টফোলিও শোকেস।',
        capabilitiesEn: ['Editorial Presentation Layouts', 'Retina Asset Support', 'Interactive Showcase Layers'],
        capabilitiesBn: ['এডিটরিয়াল লেআউট প্রিপারেশন', 'রেটিনা কোয়ালিটি ইমেজ সাপোর্ট', 'ইন্টারেক্টিভ শোকেস লেয়ার'],
        bestForEn: 'Architects, premium designers, visual creators, and high-level professionals.',
        bestForBn: 'আর্কিটেক্ট, ডিজাইনার, ক্রিয়েটর এবং হাই-লেভেল প্রফেশনালদের জন্য উপযুক্ত।',
        timelineEn: '5–10 Days',
        timelineBn: '৫–১০ দিন',
        trustStatementEn: 'Coded to represent your craft flawlessly on any device screen.',
        trustStatementBn: 'স্মার্টফোন কিংবা ল্যাপটপে কাজের মান নিখুঁতভাবে উপস্থাপনের নিশ্চয়তা।'
      },
      {
        id: 'wordpress-woo',
        titleEn: 'WordPress & WooCommerce Solutions',
        titleBn: 'ওয়ার্ডপ্রেস ও উকমার্স সলিউশন',
        descEn: 'Secured custom-built themes that combine client friendliness with optimized core vitals.',
        descBn: 'ক্লায়েন্ট ফ্রেন্ডলি অ্যাডমিন প্যানেলের সাথে অপ্টিমাইজড সাইট স্পিডের নিখুঁত সমন্বয়।',
        capabilitiesEn: ['ACF Custom Code', 'Staged Redesigns', 'Vulnerability Auditing'],
        capabilitiesBn: ['এসিএফ কাস্টম কোডিং', 'নিরাপদ রিমডেল বা রিলঞ্চ', 'সিকিউরিটি ও স্পিড অপ্টিমাইজেশন'],
        bestForEn: 'Businesses craving dashboard control without sacrificing loading speed.',
        bestForBn: 'যাঁরা সহজে নিজে ড্যাশবোর্ড কন্ট্রোল চান কিন্তু স্পিড কমাতে রাজি নন।',
        timelineEn: '1–2 Weeks',
        timelineBn: '১–২ সপ্তাহ',
        trustStatementEn: 'Bypasses bloated themes for sub-second performance.',
        trustStatementBn: 'কোনো ভারী টেমপ্লেট ছাড়াই সাইট ফাস্ট রাখার চমৎকার মেথড।'
      }
    ]
  },
  {
    id: 'ecommerce-solutions',
    labelEn: 'E-Commerce Solutions',
    labelBn: 'ই-কমার্স সলিউশন',
    headingEn: 'Scalable Commerce Ecosystems',
    headingBn: 'শক্তিশালী কমার্স ইকোসিস্টেম',
    descEn: 'Scalable commerce ecosystems engineered for seamless retail operations.',
    descBn: 'অনলাইন বিক্রি বৃদ্ধি করার পাশাপাশি ব্যবসায়িক কার্যক্রমকে সহজ ও স্বয়ংক্রিয় করার আধুনিক সলিউশন।',
    iconName: 'ShoppingBag',
    bestForEn: 'D2C brands and retailers seeking maximum transaction conversion.',
    bestForBn: 'সহজে এবং নির্ভুল পেমেন্ট ট্রানজেকশন প্রসেস করতে ইচ্ছুক রিটেইল ব্যবসা।',
    timelineEn: '3 - 5 Weeks',
    timelineBn: '৩ - ৫ সপ্তাহ',
    trustStatementEn: 'Fully integrated inventory with automated notifications.',
    trustStatementBn: 'ইনভেন্টরি সিস্টেম এবং অটোমেটেড নোটিফিকেশন অ্যালার্ট সুবিধা।',
    capabilitiesEn: [
      'Custom product finders',
      'Automated checkout flows',
      'Multi-currency processing',
      'ERP & Courier connect APIs'
    ],
    capabilitiesBn: [
      'কাস্টম প্রোডাক্ট ফাইন্ডার',
      'অটোমেটেড চেকআউট ফানেল',
      'মাল্টি-কারেন্সি সেটআপ',
      'ইআরপি বা কুরিয়ার কানেকশন এপিআই'
    ],
    subServices: [
      {
        id: 'woo-setup',
        titleEn: 'WooCommerce Store Setup',
        titleBn: 'উকমার্সের সঠিক সেটআপ',
        descEn: 'Enterprise WooCommerce blueprints tuned for fast checkout and complex cart logic.',
        descBn: 'সহজ চেকআউট ও স্মুথ কার্ট লজিকসহ উকমার্সের কমপ্লিট সুরক্ষিত কনফিগারেশন।',
        capabilitiesEn: ['Modular Layout Design', 'High-speed Server Tuning', 'Multiple Gateway Integrations'],
        capabilitiesBn: ['মডুলার লেআউট ডিজাইন', 'হাই-স্পিড সার্ভার টিউনিং', 'একাধিক পেমেন্ট গেটওয়ে ইন্টিগ্রেশন'],
        bestForEn: 'WordPress owners extending boundaries to reliable dynamic commerce.',
        bestForBn: 'ওয়ার্ডপ্রেস সাইটকে উকমার্সের উন্নত কার্ট ও নিখুঁত স্পিডে রূপান্তর করতে ইচ্ছুক স্টোর ওনার।',
        timelineEn: '5–10 Days',
        timelineBn: '৫–১০ দিন',
        trustStatementEn: 'Guaranteed transaction success metrics.',
        trustStatementBn: 'প্রতিটি ট্রানজেকশনের সম্পূর্ণ নিরাপদ ও নিখুঁত নিশ্চয়তা।'
      },
      {
        id: 'product-research',
        titleEn: 'Product Research & Listing Support',
        titleBn: 'প্রোডাক্ট ডাটা লিস্টিং সাপোর্ট',
        descEn: 'Structuring catalog architecture with proper metadata, pricing setups, and categories.',
        descBn: 'প্রোডাক্টের সঠিক ডেসক্রিপশন এবং ক্যাটাগরি তৈরি করে আপনার স্টোর আকর্ষণীয়ভাবে সাজানো।',
        capabilitiesEn: ['Attributes Structuring', 'SEO Product Descriptions', 'Visual Standard Crops'],
        capabilitiesBn: ['প্রোডাক্ট অ্যাট্রিবিউট স্ট্রাকচার', 'এসইও অপ্টিমাইজড ডেসক্রিপশন', 'ভিজ্যুয়াল স্ট্যান্ডার্ড ক্রপ'],
        bestForEn: 'Brands launching with massive multi-variation product catalogs.',
        bestForBn: 'অধিক সংখ্যায় প্রোডাক্ট বা জটিল কাস্টম ভ্যারিয়েশন নিয়ে শুরু করা ব্র্যান্ড।',
        timelineEn: '2–4 Days',
        timelineBn: '২–৪ দিন',
        trustStatementEn: 'Clean catalog hierarchy ready for immediate search indexing.',
        trustStatementBn: 'সার্চ ইঞ্জিনের উপযুক্ত পরিচ্ছন্ন প্রোডাক্ট ক্যাটালগ।'
      },
      {
        id: 'inventory-control',
        titleEn: 'Inventory & Variation Configuration',
        titleBn: 'স্টক ও ভ্যারিয়েশন কন্ট্রোল',
        descEn: 'Structuring variables like custom colors, sizing tables, and personalized choices.',
        descBn: 'প্রোডাক্টের কাস্টম কালার, সাইজ চার্ট এবং গ্রাহকদের কাস্টম চয়েস কনফিগার করা।',
        capabilitiesEn: ['Dynamic Sizing Systems', 'Stock Threshold Alerts', 'Tiered Wholesaler Pricing'],
        capabilitiesBn: ['ডায়নামিক সাইজিং সিস্টেম', 'স্টক শর্টেজ অ্যালার্ট ট্রিগার', 'মাল্টি-টায়ার প্রাইসিং লেআউট'],
        bestForEn: 'Apparel, boutiques, and personalized gifting stores.',
        bestForBn: 'পোশাক, জুয়েলারী এবং কাস্টমাইজড খুচরা পণ্য বিক্রেতাদের জন্য উপযুক্ত।',
        timelineEn: '1–3 Days',
        timelineBn: '১–৩ দিন',
        trustStatementEn: 'Flawless selection workflow for buyers.',
        trustStatementBn: 'সহজে ভ্যারিয়েশন নির্বাচন করার ইন্টারেক্টিভ কাস্টমার ফ্লো।'
      },
      {
        id: 'checkout-automation',
        titleEn: 'Checkout & Order Systems',
        titleBn: 'চেকআউট ও অর্ডার অটোমেশন',
        descEn: 'Eliminating cart friction with elegant single-page buy forms and OTP validation.',
        descBn: '১-পেজ চমৎকার চেকআউট ফর্ম এবং মোবাইল ওটিপি কনফিগারেশনের মাধ্যমে কাস্টমার ড্রপ হ্রাস।',
        capabilitiesEn: ['OTP Phone Validation', 'One-Page Checkouts', 'Automated PDF Invoices'],
        capabilitiesBn: ['মোবাইল ওটিপি ভেরিফিকেশন', '১-পেজ কুইক চেকআউট', 'অটোমেটেড ইনভয়েস পিডিএফ জেনারেশন'],
        bestForEn: 'Bangladesh local stores processing rapid cash-on-delivery orders.',
        bestForBn: 'ক্যাশ-অন-ডেলিভারি অর্ডারে ড্রপআউট কমাতে ইচ্ছুক বাংলাদেশি অনলাইন শপ।',
        timelineEn: '2–5 Days',
        timelineBn: '২–৫ দিন',
        trustStatementEn: 'Proven to reduce checkout abandonment up to 35%.',
        trustStatementBn: 'অর্ডার কমপ্লিশন রেট ৩৫% পর্যন্ত বৃদ্ধির ট্র্যাক রেকর্ড।'
      },
      {
        id: 'dashboard-sync',
        titleEn: 'Admin Dashboard Integrations',
        titleBn: 'অ্যাডমিন ড্যাশবোর্ড ইন্টিগ্রেশন',
        descEn: 'Syncing your shop with accounting modules, local couriers, and live tracking sheets.',
        descBn: 'অনলাইন স্টোরের সাথে গুগল শিট এবং লোকাল কুরিয়ার সার্ভিসের অটোমেটেড ডেটা কানেকশন।',
        capabilitiesEn: ['Courier API Automated Sync', 'Live Sheets Data Export', 'Daily Stock Reports'],
        capabilitiesBn: ['কুরিয়ার কোড অটোমেটেড ট্র্যাকিং', 'লাইভ শিট ডেটা এক্সপোর্ট', 'দৈনিক স্টক রিপোর্ট জেনারেশন'],
        bestForEn: 'Operations looking to minimize repetitive physical data entries.',
        bestForBn: 'ম্যানুয়াল এন্ট্রি ও পেপার ওয়ার্কের ঝামেলা ছাড়াই ডেলিভারি নিশ্চিত করতে ইচ্ছুক উদ্যোক্তা।',
        timelineEn: '2–4 Days',
        timelineBn: '২–৪ দিন',
        trustStatementEn: 'Seamless automation with zero manual operations.',
        trustStatementBn: 'উন্নত অটোমেশন ও সম্পূর্ণ হ্যাসেল-ফ্রি অর্ডার ট্র্যাকিং।'
      }
    ]
  },
  {
    id: 'digital-marketing',
    labelEn: 'Digital Marketing',
    labelBn: 'ডিজিটাল মার্কেটিং',
    headingEn: 'Performance Campaign Engines',
    headingBn: 'পারফরম্যান্স ক্যাম্পেইন ইঞ্জিন',
    descEn: 'Performance-driven campaigns designed to generate measurable business growth.',
    descBn: 'বিজ্ঞাপনের প্রতিটি বাজেটের সঠিক ব্যবহার নিশ্চিত করে সেলস বাড়াতে টার্গেটেড মার্কেটিং ক্যাম্পেইন।',
    iconName: 'TrendingUp',
    bestForEn: 'Brands looking to scale customer acquisition and optimize conversion rates.',
    bestForBn: 'বিজ্ঞাপনের সঠিক ফানেল তৈরি করে সেলস এবং আরও কাস্টমার নিশ্চিত করতে ইচ্ছুক কোম্পানি।',
    timelineEn: 'Ongoing / Monthly Retainers',
    timelineBn: 'চলমান / মাসিক রিটেইনার',
    trustStatementEn: 'Surgically engineered target pipelines and custom conversion trackings.',
    trustStatementBn: 'অ্যাডভান্সড কাস্টমার ট্র্যাকিং এবং নিখুঁত রিটার্গেটিং সিস্টেম গ্যারান্টি।',
    capabilitiesEn: [
      'Meta Campaign Management',
      'Target Lead funnels',
      'WhatsApp API Marketing',
      'Surgical Sales Copywriting'
    ],
    capabilitiesBn: [
      'মেটা অ্যাডস ক্যাম্পেইন ডিরেকশন',
      'টার্গেটেড লিড ফানেল ডিজাইন',
      'হোয়াটসঅ্যাপ এপিআই মেসেজিং',
      'সেলস-ফোকাসড চমৎকার কপিরাইটিং'
    ],
    subServices: [
      {
        id: 'meta-ads',
        titleEn: 'Meta Ads Management',
        titleBn: 'মেটা ফেসবুক অ্যাডস ক্যাম্পেইন',
        descEn: 'A-Z Facebook & Instagram campaign design using custom product catalogs and testing models.',
        descBn: 'ফেসবুক ও ইনস্টাগ্রামে অ্যাড ক্রিয়েটিভ টেস্টিং মডেলসহ নিখুঁত ক্যাম্পেইন সেটআপ ও অপ্টিমাইজেশন।',
        capabilitiesEn: ['Catalog Sales Funnels', 'CBO Campaign Structures', 'Ad Variant Multi-Testing'],
        capabilitiesBn: ['ক্যাটালগ সেলস ফানেল', 'সিবিও ক্যাম্পেইন স্ট্রাকচার', 'অ্যাড ভ্যারিয়েন্ট মাল্টি-টেস্টিং'],
        bestForEn: 'E-commerce and B2B/B2C stores seeking highly predictable ROAS.',
        bestForBn: 'অনলাইন শপ এবং এজেন্সী যারা নিয়মিত ট্রাফিক ও ডাবল সেলস পেতে চান।',
        timelineEn: '2–5 Days',
        timelineBn: '২–৫ দিন',
        trustStatementEn: 'Backed by real-time Server CAPI conversion insights.',
        trustStatementBn: 'রিয়েল-টাইম কনভার্সন এপিআই এর নির্ভুল ট্র্যাকিং ডাটা।'
      },
      {
        id: 'message-marketing',
        titleEn: 'Facebook Message Marketing',
        titleBn: 'মেসেজ মার্কেটিং ও অটোমেশন',
        descEn: 'Deploying intelligent messaging systems triggered directly upon visual ad click milestones.',
        descBn: 'বিজ্ঞাপনে ক্লিক করা ক্রেতাদের কাস্টমার সাপোর্টে অটোমেটেড ডায়লগ ফ্লো সেটআপ।',
        capabilitiesEn: ['Ad Triggered Conversational Flows', 'ManyChat Loop Setup', 'Buyer Tags Segmentation'],
        capabilitiesBn: ['অ্যাড ট্রিগার্ড চ্যাটবট অ্যাক্টিভেশন', 'ম্যানিচ্যাট লুপ স্ট্রাকচার সেটআপ', 'গ্রাহক সেগমেন্টেশন ও ট্যাগিং'],
        bestForEn: 'Local businesses converting hot inquiries directly inside Messenger chats.',
        bestForBn: 'ফেসবুক পেজ চ্যাটবক্স থেকে সরাসরি কাস্টমার মেসেজ কনভার্ট করে যারা সেল করতে চান।',
        timelineEn: '2–4 Days',
        timelineBn: '২–৪ দিন',
        trustStatementEn: 'Maintains elite conversion responses.',
        trustStatementBn: 'মুহূর্তের মধ্যে চমৎকার রেসপন্স রেট ও কাস্টমার এনগেজমেন্ট।'
      },
      {
        id: 'email-campaigns',
        titleEn: 'Email Campaign Systems',
        titleBn: 'ইমেইল মার্কেটিং এবং ফানেল',
        descEn: 'Automated setups to recapture left baskets and design weekly loyalty emails.',
        descBn: 'ফেলে যাওয়া কার্ট রিকভার করতে এবং নিয়মিত অফার শেয়ারের জন্য অটোমেটেড ইমেইল ফ্লো।',
        capabilitiesEn: ['Abandoned Cart Mailers', 'Regular Editorial Newsletters', 'Contact CRM Cleansing'],
        capabilitiesBn: ['অ্যাবানডনড কার্ট ইমেইল নোটিফিকেশন', 'প্রফেশনাল নিউজলেটার ব্রডকাস্ট', 'লিস্ট ম্যানেজমেন্ট ও ফিল্টারিং'],
        bestForEn: 'Firms aiming to secure organic repeat-orders without ads costs.',
        bestForBn: 'গ্রাহকের সাথে দীর্ঘমেয়াদী সম্পর্ক গড়ে রি-পারচেজ বৃদ্ধি করতে ইচ্ছুক স্টোর।',
        timelineEn: '2–5 Days',
        timelineBn: '২–৫ দিন',
        trustStatementEn: 'Verified deliverability with optimal domain protections.',
        trustStatementBn: 'সরাসরি ইনবক্স ডেলিভারি নিশ্চিত করতে সঠিক ডোমেইন ডিএনএস কনফিগার।'
      },
      {
        id: 'whatsapp-campaigns',
        titleEn: 'WhatsApp Campaigns',
        titleBn: 'হোয়াটসঅ্যাপ মেসেজিং ফানেল',
        descEn: 'Broadcasting direct notification updates with ultra-high visual open percentages.',
        descBn: 'মোবাইল হোয়াটসঅ্যাপ কন্টাক্টে সরাসরি কাস্টমাইজড ডিসকাউন্ট নোটিফিকেশন।',
        capabilitiesEn: ['Bulk Broadcast Schedulers', 'Alert Message Workflows', 'Numbers Security Guards'],
        capabilitiesBn: ['বাল্ক ব্রডকাস্ট শিডিউলিং', 'অ্যালার্ট মেসেজ ওয়ার্কফ্লো', 'নম্বর বা পেজ সিকিউরিটি গার্ড'],
        bestForEn: 'Brands desiring instant open metrics up to 98%.',
        bestForBn: 'গ্রাহকদের নজরে যেতে ৯৮% ওপেন রেট নিয়ে ইনস্ট্যান্ট মেসেজিং ফোকাসকারী ব্র্যান্ড।',
        timelineEn: '1–3 Days',
        timelineBn: '১–৩ দিন',
        trustStatementEn: 'Meta-compliant procedures to maintain numbers hygiene.',
        trustStatementBn: 'হোয়াটসঅ্যাপ গাইডলাইন ও পলিসি মেনে সম্পূর্ণ নিরাপদ বাল্ক সিস্টেম।'
      },
      {
        id: 'lead-gen-funnels',
        titleEn: 'Lead Generation Funnels',
        titleBn: 'কোয়ালিফাইড লিড জেনারেটর',
        descEn: 'Gathering premium customer segments using targeted smart survey layouts.',
        descBn: 'ইন্টারেক্টিভ ডিজিটাল ফর্মের সাহায্যে আসল এবং ভেরিফায়েড ক্লায়েন্টের তথ্য সংগ্রহ।',
        capabilitiesEn: ['Survey-style Filtering Apps', 'Conditional Answer Nodes', 'Real-time CRM Synced Feed'],
        capabilitiesBn: ['স্মার্ট সার্ভে ফিল্টারিং অ্যাপ', 'কন্ডিশনাল লজিক ফর্ম ফ্লো', 'রিয়েল-টাইম সিআরএম ডেটা ফিড'],
        bestForEn: 'Consultants, academies, real estate agencies, and premium services.',
        bestForBn: 'রিয়েল এস্টেট, এডুকেশন, কনসাল্টিং এবং হাই-ভ্যালু বিজনেস প্রোভাইডার।',
        timelineEn: '3–7 Days',
        timelineBn: '৩–৭ দিন',
        trustStatementEn: 'Surgically designed to reject empty numbers bots.',
        trustStatementBn: 'বাজে কন্টাক্ট ফিল্টার করে রিয়েল বায়ার খুঁজে বের করার নিশ্চয়তা।'
      }
    ]
  },
  {
    id: 'social-media',
    labelEn: 'Social Media Management',
    labelBn: 'সোশ্যাল মিডিয়া ম্যানেজমেন্ট',
    headingEn: 'Boutique Social Authority',
    headingBn: 'সোশ্যাল মিডিয়া অথরিটি সিস্টেম',
    descEn: 'Authority-building content systems for long-term audience trust.',
    descBn: 'সোশ্যাল মিডিয়া পেজের আকর্ষণীয় ব্র্যান্ড ইমেজ ও ফলোয়ারদের সাথে বিশ্বস্ত সম্পর্ক গড়ার পরিচ্ছন্ন সার্ভিস।',
    iconName: 'Users',
    bestForEn: 'Brands aiming to construct deeply loyal and active digital communities.',
    bestForBn: 'সোশ্যাল পেজে নিয়মিত নান্দনিক পোস্ট ও অ্যাক্টিভিটি বজায় রেখে যারা বড় ফ্যানবেস গড়তে চান।',
    timelineEn: 'Monthly Business Retainers',
    timelineBn: 'মাসিক বিজনেস রিটেইনার',
    trustStatementEn: 'Cohesive editorial systems tailored to grab active scrolling feed glances instantly.',
    trustStatementBn: 'আপনার সোশ্যাল ব্র্যান্ড গাইডলাইন শতভাগ কঠোরভাবে মেনে কাজ করার নিশ্চয়তা।',
    capabilitiesEn: [
      'Facebook & Instagram layout lines',
      'Artistic feed grid standards',
      'Mobile-viral reel copywriting',
      'Supportive engagement setups'
    ],
    capabilitiesBn: [
      'ফেসবুক ও ইনস্টাগ্রাম কন্টেন্ট প্ল্যান',
      'নান্দনিক গ্রিড থিম ও লাক্সারি লুক',
      'মোবাইল-ভাইরাল রীলস ও ভিডিও কপি',
      'সার্বক্ষণিক কাস্টমার সাপোর্ট এনগেজমেন্ট'
    ],
    subServices: [
      {
        id: 'fb-mgmt',
        titleEn: 'Facebook Management',
        titleBn: 'ফেসবুক পেজ ম্যানেজমেন্ট',
        descEn: 'Administering timelinks, profile consistency, premium covers, and customer reviews tags.',
        descBn: 'আপনার ফেসবুক টাইমলাইন পোস্ট, কাস্টম কভার ইমেজ ডিজাইন ও রিভিউর উন্নত টিম সাপোর্ট।',
        capabilitiesEn: ['Polished Profile Design', 'Strategic Feed Schedulings', 'Engagement Monitor dashboards'],
        capabilitiesBn: ['প্রফেশনাল পেজ ইন্টিগ্রেশন', 'স্ট্র্যাটেজিক কন্টেন্ট শিডিউলিং', 'অ্যাক্টিভ এনগেজমেন্ট মনিটরিং'],
        bestForEn: 'Brands demanding clean, continuous authoritative timelines.',
        bestForBn: 'ফেসবুক পেজে একদম পরিচ্ছন্ন ও প্রফেশনাল আভিজাত্য বজায় রাখতে ইচ্ছুক যেকোনো কোম্পানি।',
        timelineEn: 'Ongoing Monthly',
        timelineBn: 'চলমান মাসিক',
        trustStatementEn: 'Overseen by skilled corporate page managers.',
        trustStatementBn: 'দক্ষ কন্টেন্ট স্ট্র্যাটেজিস্ট ও ডিজাইনার টিম দ্বারা পেজ পরিচালনা।'
      },
      {
        id: 'ig-mgmt',
        titleEn: 'Instagram Management',
        titleBn: 'ইনস্টাগ্রাম গ্রিড ম্যানেজমেন্ট',
        descEn: 'Developing an outstanding graphic grid language showcasing a high lifestyle aesthetic.',
        descBn: 'একটি পরিচ্ছন্ন ও দৃষ্টিনন্দন ভিজ্যুয়াল গ্রিড যা আপনার ব্র্যান্ডের লাক্সারি ইমেজ ফুটিয়ে তোলে।',
        capabilitiesEn: ['Aesthetic Grid Compositions', 'Optimal Hashtag Blueprints', 'Premium Interactive Stories'],
        capabilitiesBn: ['নান্দনিক গ্রিড কোলাজ থিম', 'হ্যাশট্যাগ ও ট্যাগস ব্লুপ্রিন্ট', 'নিয়মিত স্টোরি ও হাইলাইটস সাজানো'],
        bestForEn: 'Boutiques, luxury real-estate houses, apparel, and lifestyle creators.',
        bestForBn: 'ফ্যাশন হাউজ, জুয়েলারি, ইন্টেরিয়র, রিয়েল এস্টেট ও ক্রিয়েটিভ প্রজেক্টস।',
        timelineEn: 'Ongoing Monthly',
        timelineBn: 'চলমান মাসিক',
        trustStatementEn: 'Absolute devotion to high visual design standards.',
        trustStatementBn: 'ব্র্যান্ডের নিজস্ব কালার প্যালেট ও আভিজাত্য শতভাগ অনুসরণের নিশ্চয়তা।'
      },
      {
        id: 'content-planning',
        titleEn: 'Content Planning',
        titleBn: 'কৌশলগত কন্টেন্ট প্ল্যানিং',
        descEn: 'Mapping precise topical calendar layouts directly with your seasonal business sales cycles.',
        descBn: 'আপনার সেলস লক্ষ্য অর্জনে টপিক সিলেক্ট করে প্রফেশনাল ক্যালেন্ডার বা প্ল্যান সাজানো।',
        capabilitiesEn: ['Predefined Content Calendars', 'Funnel Topic Groupings', 'Seasonal Promos Calendars'],
        capabilitiesBn: ['প্রিমিয়াম কন্টেন্ট ক্যালেন্ডার', 'টপিক ফানেল ম্যাপিং', 'সেশনাল ক্যাম্পেইন প্ল্যানার্স'],
        bestForEn: 'Organizations requiring strategic coherence instead of random entries.',
        bestForBn: 'যাঁরা ধারাবাহিকভাবে সুপরিকল্পিত সেলস পোস্ট দিতে চান।',
        timelineEn: '2–4 Days',
        timelineBn: '২–৪ দিন',
        trustStatementEn: 'Tailored 100% to maximize your trade milestones.',
        trustStatementBn: '১০০% আপনার বিজনেসের জন্য কাস্টমাইজড সেলস কপি ও ভিজ্যুয়াল প্ল্যান।'
      },
      {
        id: 'posting-scheduling',
        titleEn: 'Posting & Scheduling',
        titleBn: 'পোস্টিং ও অটো শিডিউলিং',
        descEn: 'Timing posts according to active demographic heatmaps using robust automated tools.',
        descBn: 'আপনার অডিয়েন্স কখন সবচেয়ে বেশি একটিভ থাকে, তার ডাটা এনালাইসিসে পোস্টিং শিডিউল।',
        capabilitiesEn: ['Demographic Heatmaps', 'Meta Studio automations', 'Zero Queuing Interruptions'],
        capabilitiesBn: ['ডেমোগ্রাফিক অ্যাক্টিভিটি ট্র্যাকিং', 'মেটা বিজনেস সুইট অটোমেশন', 'নিয়মিত ধারাবাহিক পেজ আপলিঙ্ক'],
        bestForEn: 'Busy executives seeking premium hand-off social pipeline controls.',
        bestForBn: 'সময়াভাবে পেজের টাইমলাইনে নিয়মিত নতুন পোস্ট মেইনটেইন করতে না পারা উদ্যোক্তা।',
        timelineEn: '1–2 Days',
        timelineBn: '১–২ দিন',
        trustStatementEn: 'Constant timeline freshness guaranteed.',
        trustStatementBn: 'ধারাবাহিক ও নিয়মিত পোস্টিং রিলেশনশিপ গ্যারান্টি।'
      },
      {
        id: 'short-form-video',
        titleEn: 'Short-form Reels Strategy',
        titleBn: 'রীলস ও শর্ট কন্টেন্ট স্ট্র্যাটেজি',
        descEn: 'Writing hooking templates designed to lock attention inside mobile viral loops.',
        descBn: 'ফেসবুক ও ইনস্টাগ্রামের জন্য স্ক্রল-থামানো ৬০ সেকেন্ডের ইউনিক ভিডিও কন্টেন্ট স্ক্রিপ্ট।',
        capabilitiesEn: ['3-Second Hook Formulas', 'Visual Pace Guides', 'Viral background music sync'],
        capabilitiesBn: ['প্রথম ৩ সেকেন্ডের কাস্টমার হুক', 'ভিজ্যুয়াল ডিরেকশন ও পেস গাইড', 'ভাইরাল ব্যাকগ্রাউন্ড মিউজিক সিঙ্ক'],
        bestForEn: 'Retail businesses seeking huge organic video traffic explosions.',
        bestForBn: 'অরগানিক ট্রাফিক এবং লাখ লাখ ভিউ দ্রুত অর্জন করতে ইচ্ছুক কাস্টমার।',
        timelineEn: '3–5 Days',
        timelineBn: '৩–৫ দিন',
        trustStatementEn: 'Maximized layout formats for smooth mobile viewing.',
        trustStatementBn: 'মোবাইল স্ক্রিনে দেখার উপযোগী পরিচ্ছন্ন ভিডিও ওভারলে।'
      },
      {
        id: 'audience-engagement',
        titleEn: 'Audience Engagement',
        titleBn: 'কাস্টমার এনগেজমেন্ট ও সাপোর্ট',
        descEn: 'Monitoring commentaries and direct boxes to foster brand intimacy.',
        descBn: 'গ্রাহকদের কমেন্ট ও মেসেজের দ্রুত উত্তর প্রদান নিশ্চিত করে পেজের রিচ বাড়ানো।',
        capabilitiesEn: ['Polished Brand Voice Chat', 'Review Response Schemes', 'Daily Activity Alerts'],
        capabilitiesBn: ['ব্র্যান্ড ইমেজ বজায় রেখে প্রফেশনাল চ্যাট', 'রিভিউ ও ফিডব্যাক হ্যান্ডলিং', 'ডেইলি কমেন্টস ট্র্যাকিং নোটিস'],
        bestForEn: 'Pages with high response volumes demanding premium interactive standards.',
        bestForBn: 'যাঁদের পোস্টে প্রচুর কমেন্ট আসে কিন্তু সেলসে কনভার্ট হয় না।',
        timelineEn: 'Ongoing Monthly',
        timelineBn: 'চলমান মাসিক',
        trustStatementEn: 'Always courteous, professional branding tone.',
        trustStatementBn: 'অত্যন্ত নম্র ও ব্র্যান্ড বান্ধব চমৎকার প্রফেশনাল কমিউনিকেশন।'
      }
    ]
  },
  {
    id: 'seo-analytics',
    labelEn: 'SEO & Analytics',
    labelBn: 'এসইও ও অ্যানালিটিক্স',
    headingEn: 'Search Visibility Engines',
    headingBn: 'সার্চ ইঞ্জিন ভিজিবিলিটি',
    descEn: 'Advanced optimization systems built for search visibility and intelligent growth.',
    descBn: 'সার্চ র‍্যাঙ্কিং এ এগিয়ে থাকতে এবং দীর্ঘমেয়াদী অরগানিক ওয়েব ট্রাফিক বাড়াতে অ্যাডভান্সড এসইও সলিউশন।',
    iconName: 'BarChart3',
    bestForEn: 'Companies seeking highly targeted organic traffic and clean data intelligence trackers.',
    bestForBn: 'বিজ্ঞাপনে টাকা খরচ না করে গুগল সার্চ থেকে লাইফটাইম রিয়েল ক্লায়েন্ট পেতে ইচ্ছুক ব্যবসা।',
    timelineEn: '3 - 6 Months Focus',
    timelineBn: '৩ - ৬ মাস ফোকাস',
    trustStatementEn: 'Safe white-hat methodologies fully compliant with Google Core Updates.',
    trustStatementBn: 'গুগল সার্চ অ্যালগরিদম পলিসি মেনে শতভাগ অরগানিক ট্রাফিক গ্রোথ নিশ্চয়তা।',
    capabilitiesEn: [
      'On-page entity maps',
      'Advanced Page Speed compressions',
      'Google Search Console diagnostics',
      'Advanced AI Search Optimization (AEO)'
    ],
    capabilitiesBn: [
      'অন-পেজ এন্টিটি স্ট্রাকচার',
      'লাইটহাউস স্পিড সর্বোচ্চ অপ্টিমাইজেশন',
      'গুগল সার্চ কনসোল অপ্টিমাইজেশন',
      'এআই সার্চ ইঞ্জিন অপ্টিমাইজেশন (AEO)'
    ],
    subServices: [
      {
        id: 'onpage-seo',
        titleEn: 'On-Page SEO',
        titleBn: 'অন-পেজ এসইও অপ্টিমাইজড',
        descEn: 'Injecting schema markup and targeting keyword vectors inside headers and page structures.',
        descBn: 'আপনার ওয়েবসাইটের হেডার, কোড এবং কপির ভেতরে কীওয়ার্ড সঠিকভাবে বিন্যাস করা।',
        capabilitiesEn: ['H1-H4 Structural Cleanups', 'Alt Attribute Standardizations', 'Slightly shorter clean URLs'],
        capabilitiesBn: ['H1-H4 সিকোয়েনশিয়াল অডিট', 'ইমেজ অল্টার টেক্সট অপটিমাইজ', 'এসইও বান্ধব ক্লিন ইউআরএল'],
        bestForEn: 'Existing sites losing conversion weight on layout structures.',
        bestForBn: 'তৈরি করা ওয়েবসাইট যা গুগল সার্চে র‍্যাঙ্ক করতে সমস্যা হচ্ছে।',
        timelineEn: '3–5 Days',
        timelineBn: '৩–৫ দিন',
        trustStatementEn: 'Ensures absolute schema syntax correctness.',
        trustStatementBn: '১০০% নির্ভুল স্কিমা সিনট্যাক্স অপ্টিমাইজেশন।'
      },
      {
        id: 'tech-seo',
        titleEn: 'Technical SEO',
        titleBn: 'টেকনিক্যাল এসইও ইন্টিগ্রেশন',
        descEn: 'Structuring robots, canonical attributes, and XML maps for optimal crawler indexing behavior.',
        descBn: 'গুগল ক্রলার যাতে আপনার পেজ দ্রুত রিড করতে পারে তার জন্য টেকনিক্যাল অপ্টিমাইজেশন।',
        capabilitiesEn: ['Robots Sitemaps Auditing', 'Canonical Tag Integrations', 'Server Header Compression Setup'],
        capabilitiesBn: ['রোবটস ও সাইটম্যাপ ভ্যালিডেশন', 'ক্যানোনিকাল ইউআরএল সেটআপ', 'সার্ভার হেডার ক্যাশ টিউনিং'],
        bestForEn: 'Large multi-page portals with crawling indexation errors.',
        bestForBn: 'বড় ওয়েবসাইট যার অনেক পেজ গুগল সার্চে সঠিকভাবে ইনডেক্স হচ্ছে না।',
        timelineEn: '5–7 Days',
        timelineBn: '৫–৭ দিন',
        trustStatementEn: 'Definitive fixes for common indexation issues.',
        trustStatementBn: 'সার্চ কনসোলের ইনডেক্সিং এরর গুলোর স্থায়ী সমাধান।'
      },
      {
        id: 'speed-opt',
        titleEn: 'Website Speed Optimization',
        titleBn: 'ওয়েবসাইট স্পিড বুস্টিং',
        descEn: 'Cleaning bloat script tags and compressing heavy formats for top mobile benchmark ratings.',
        descBn: 'কোডের ফাইল সাইজ অপ্টিমাইজ করে গুগলের মোবাইল লাইটহাউস স্পিড স্কোর বৃদ্ধি।',
        capabilitiesEn: ['Next-Gen Visual compression presets', 'CSS/JS Code De-bloat', 'Delay Loading attributes'],
        capabilitiesBn: ['নেক্সট-জেন ফরম্যাটে ইমেজ কম্প্রেশন', 'অপ্রয়োজনীয় কোড স্ক্রিপ্ট রিমুভ', 'অটোমেটেড লেজি-লোডিং সেটআপ'],
        bestForEn: 'Websites displaying high latency metrics under 3G environments.',
        bestForBn: 'যেসকল ওয়েবসাইট মোবাইলে লোড হতে ৩ সেকেন্ডের বেশি সময় নিয়ে বায়ার হারায়।',
        timelineEn: '2–5 Days',
        timelineBn: '২–৫ দিন',
        trustStatementEn: 'Aims for top First Contentful Paint stats.',
        trustStatementBn: 'যেকোনো স্মার্টফোনে চোখের পলকে পেজ লোড হবার গ্যারান্টি।'
      },
      {
        id: 'ga4-setup',
        titleEn: 'Google Analytics Setup (GA4)',
        titleBn: 'গুগল অ্যানালিটিক্স ৪ (GA4) সেটআপ',
        descEn: 'Deploying robust GA4 property streams aligned with specific acquisition markers.',
        descBn: 'আপনার ওয়েবসাইটে কোন দেশ থেকে কোন বয়সের কাস্টমার আসছে তা ট্র্যাক করতে GA4 সেটআপ।',
        capabilitiesEn: ['GA4 property configurations', 'Target Conversion Trackings', 'Live demographic dashboard'],
        capabilitiesBn: ['GA4 এন্টারপ্রাইজ সেটআপ', 'কাস্টম ইভেন্ট কনভার্সন ট্র্যাকিং', 'রিয়েল-টাইম ডেমোগ্রাফিক ড্যাশবোর্ড'],
        bestForEn: 'Operations looking to monitor campaign conversions accurately.',
        bestForBn: 'ব্যবসা পরিচালনায় কত টাকা বিজ্ঞাপনে খরচ হয়ে কত সেলস এল তা ট্র্যাক করতে।',
        timelineEn: '1 Day',
        timelineBn: '১ দিন',
        trustStatementEn: 'Fully compliant with updated GDPR codes.',
        trustStatementBn: '১০০% নিরাপদ ও নির্ভুল ট্র্যাকিং আর্কিটেকচার।'
      },
      {
        id: 'gsc-setup',
        titleEn: 'Google Search Console Setup',
        titleBn: 'সার্চ কনসোল ও ইনডেক্স ট্র্যাকিং',
        descEn: 'Configuring direct search consoles to trace live organic keyword flows.',
        descBn: 'আপনার ওয়েবসাইটটি সরাসরি গুগলের সিস্টেমে লিঙ্ক করা যাতে ট্রাফিক ও কীওয়ার্ড ট্র্যাক করা যায়।',
        capabilitiesEn: ['XML index mapping', 'Keyword Query dashboards', 'Search Performance checks'],
        capabilitiesBn: ['XML সাইটম্যাপ সাবমিশন', 'কীওয়ার্ড র‍্যাঙ্কিং চার্ট মনিটরিং', 'ক্রলিং স্পিড ও এরর মনিটরিং'],
        bestForEn: 'Newly registered domains preparing optimized structural indices.',
        bestForBn: 'নতুন ডোমেইন নিয়ে শুরু করা বিজনেস যা গুগলে জলদি ইনডেক্স করাতে চায়।',
        timelineEn: '1 Day',
        timelineBn: '১ দিন',
        trustStatementEn: 'Instant verification by secure DNS configs.',
        trustStatementBn: 'ডিএনএস ম্যাপিংয়ের মাধ্যমে দ্রুত ও নিরাপদ ভেরিফিকেশন।'
      },
      {
        id: 'seo-structural',
        titleEn: 'SEO Structural Optimization',
        titleBn: 'এসইও স্ট্রাকচার অপ্টিমাইজেশন',
        descEn: 'Refining page links, folder depths, and visual navigation links for optimal crawling.',
        descBn: 'আপনার পেজের সাইডবার, ক্যাটাগরি এবং লিঙ্কগুলো গুগলের বট ও ভিজিটরের জন্য সাজানো।',
        capabilitiesEn: ['Crawl Depth Audits', 'Internal Linking Silo Models', 'Visual Navigation optimizations'],
        capabilitiesBn: ['ক্রল ডেপথ অডিটিং', 'অভ্যন্তরীণ ইন্টারলিঙ্কিং সাইলো', 'ভিজ্যুয়াল হায়ারার্কি অপ্টিমাইজেশন'],
        bestForEn: 'Highly saturated sites showing sparse keyword weight rankings.',
        bestForBn: 'অনেক কন্টেন্ট থাকা সত্ত্বেও সঠিক লিঙ্কিংয়ের অভাবে ট্রাফিক না পাওয়া ওয়েবসাইট।',
        timelineEn: '5–7 Days',
        timelineBn: '৫–৭ দিন',
        trustStatementEn: 'Directs crawl metrics onto core landing targets.',
        trustStatementBn: 'আপনার সবচেয়ে প্রয়োজনীয় সেলস ল্যান্ডিং পেজগুলোকে গুগলের কাছে গুরুত্বপূর্ণ করা।'
      },
      {
        id: 'local-seo',
        titleEn: 'Local SEO',
        titleBn: 'লোকাল এসইও ও গুগল ম্যাপস',
        descEn: 'Optimizing local business listings so geographic search buyers encounter your map.',
        descBn: 'আপনার অফলাইন বা অনলাইন বিজনেস গুগল ম্যাপসে যোগ করে স্থানভিত্তিক ক্রেতা আকর্ষণ।',
        capabilitiesEn: ['GMB Listing optimizations', 'Local Profile Backlinks', 'Review Collection templates'],
        capabilitiesBn: ['গুগল মাই বিজনেস অপ্টিমাইজেশন', 'লোকাল সাইটেশন ম্যাপিং', 'ম্যাপস রিভিউ বুস্টিং গাইডলাইন'],
        bestForEn: 'Stores, physical offices, localized consultancies, and visual boutique cafes.',
        bestForBn: 'শোরুম, রেস্টুরেন্ট, পার্লার, ডাক্তার এবং নির্দিষ্ট স্থানভিত্তিক বিজনেসের জন্য।',
        timelineEn: '3–5 Days',
        timelineBn: '৩–৫ দিন',
        trustStatementEn: 'Perfect GPS markers validation.',
        trustStatementBn: 'গুগল ম্যাপসে জিপিএস ট্র্যাকিং ও সরাসরি কল ফিচার সচল রাখার পরীক্ষা।'
      },
      {
        id: 'keyword-research',
        titleEn: 'Keyword Research',
        titleBn: 'হাই-ভ্যালু কীওয়ার্ড রিসার্চ',
        descEn: 'unveiling high-value targeted search phrases possessing moderate competitive stats.',
        descBn: 'কম প্রতিযোগিতাপূর্ণ কিন্তু প্রচুর কাস্টমার সার্চ করে এমন লাভজনক কীওয়ার্ড খোঁজা।',
        capabilitiesEn: ['Target query volume charts', 'Direct Competitor Matrix', 'Value index rankings'],
        capabilitiesBn: ['সার্চ ভলিউম অ্যানালিটিক্স', 'প্রতিদ্বন্দ্বী কোম্পানির কীওয়ার্ড ম্যাপিং', 'কীওয়ার্ড ডিফিকাল্টি লেভেল ম্যাট্রিক্স'],
        bestForEn: 'Businesses preparing to outline blog channels without writing blueprints.',
        bestForBn: 'যাঁরা নিয়মিত ব্লগ বা কন্টেন্ট লিখছেন কিন্তু কোন বিষয়ে লিখলে ভিউ পাবেন তা জানেন না।',
        timelineEn: '2–4 Days',
        timelineBn: '২–৪ দিন',
        trustStatementEn: 'Delivered in highly readable sheets layout.',
        trustStatementBn: 'অ্যাকশনেবল ও বিস্তারিত ডেটাসহ এক্সেল ও শিট ফাইল প্রদান।'
      },
      {
        id: 'content-opt',
        titleEn: 'Content Optimization',
        titleBn: 'কন্টেন্ট রাইটিং অপ্টিমাইজেশন',
        descEn: 'Polishing page copy and layout styles to increase visitor retention.',
        descBn: 'আপনার আগের লেখা আর্টিকেল বা ডেসক্রিপশন গুগলে র‍্যাঙ্ক করানোর জন্য অপ্টিমাইজ করা।',
        capabilitiesEn: ['NLP entity integrations', 'Readability enhancements', 'Structural tag split checks'],
        capabilitiesBn: ['এনএলপি কীওয়ার্ড ডেটা ইনজেকশন', 'রিডেবিলিটি ও রিড স্কোর আপডেট', 'হেডার এন্টিটি বিন্যাস অপ্টিমাইজ'],
        bestForEn: 'Firms showing high checkout bounces due to text bloat.',
        bestForBn: 'অনেক বড় প্যারাগ্রাফ সম্বলিত পেজ যা কাস্টমারের আসল প্রশ্নের উত্তর দেয় না।',
        timelineEn: '3–5 Days',
        timelineBn: '৩–৫ দিন',
        trustStatementEn: 'Ensures pristine corporate syntax matches.',
        trustStatementBn: 'সহজে পড়ার উপযোগী চমৎকার রিডেবল কন্টেন্ট লেআউট।'
      }
    ]
  },
  {
    id: 'integrations-tracking',
    labelEn: 'Integrations & Tracking',
    labelBn: 'ইনটিগ্রেশন ও ট্র্যাকিং',
    headingEn: 'Precision Event Attribution',
    headingBn: 'নিখুঁত পিক্সেল ও ট্র্যাকিং',
    descEn: 'Reliable tracking infrastructures powering smarter marketing decisions.',
    descBn: 'বিজ্ঞাপনের প্রতিটি ভিজিটর নিখুঁতভাবে ট্র্যাক করতে এন্টারপ্রাইজ লেভেল ট্র্যাকিং সিস্টেম।',
    iconName: 'Fingerprint',
    bestForEn: 'Advertisers experiencing sparse campaign conversion statistics after iOS modifications.',
    bestForBn: 'যাঁদের বিজ্ঞাপনের ডেটা সঠিকভাবে ট্র্যাকিং প্যানেলে দেখায় না এবং অপ্টিমাইজ করা মুশকিল হচ্ছে।',
    timelineEn: '4 - 7 Days Setup',
    timelineBn: '৪ - ৭ দিন সেটআপ',
    trustStatementEn: 'Bypasses standard client application blockades completely.',
    trustStatementBn: 'আইওএস আপডেট ও ব্রাউজার অ্যাড-ব্লকার এড়িয়ে সরাসরি সার্ভার-সাইডে নির্ভুল ট্র্যাকিং।',
    capabilitiesEn: [
      'Meta Pixel conversions',
      'CAPI Server-side pipelines',
      'Interactive form submissions tracker',
      'Click attribution mapping'
    ],
    capabilitiesBn: [
      'মেটা পিক্সেল কনফিগারেশন',
      'কনভার্সন এপিআই (CAPI) সার্ভার তৈরি',
      'কাস্টম ফর্ম সাবমিশন ইভেন্ট ট্র্যাকিং',
      'হোয়াটসঅ্যাপ ক্লিক ইভেন্ট ম্যাপিং'
    ],
    subServices: [
      {
        id: 'meta-pixel-setup',
        titleEn: 'Meta Pixel Setup',
        titleBn: 'মেটা পিক্সেল কনফিগারেশন',
        descEn: 'Injecting robust tracking tags inside header code layers to catalog browser actions.',
        descBn: 'ওয়েবসাইটের বিভিন্ন বাটন ও পেজের ভেতরে পিক্সেল কোড সেট করা যাতে বায়ারের আচরণ রেকর্ড করা যায়।',
        capabilitiesEn: ['Global Tag Injections', 'Custom Param settings', 'Trigger validation checks'],
        capabilitiesBn: ['বেস কোড ইনজেকশন', 'ইভেন্ট প্যারামিটার স্ট্যান্ডার্ডাইজেশন', 'পেজভিউ নির্ভুল ফায়ারিং'],
        bestForEn: 'Prestige organizations running direct Meta promotions.',
        bestForBn: 'নতুন ফেসবুক বিজ্ঞাপনের অ্যাকাউন্ট যা ক্যাম্পেইন রান করার উপযোগী করতে হবে।',
        timelineEn: 'Same Day – 1 Day',
        timelineBn: 'সেম ডে – ১ দিন',
        trustStatementEn: 'Pristine setup without duplicate data issues.',
        trustStatementBn: 'যেকোনো টাইপের কাস্টম ওয়েবসাইটে এরর-মুক্ত নিখুঁত পিক্সেল সেটআপ।'
      },
      {
        id: 'pixel-audits',
        titleEn: 'Pixel Audits',
        titleBn: 'পিক্সেল ট্র্যাকিং অডিট',
        descEn: 'Debugging duplicate trigger rings, catalog errors, and conversion mismatches.',
        descBn: 'ডুপ্লিকেট ইভেন্ট ফায়ার করা এবং ভুল কনভার্সন প্যারামিটার এরর গুলোর স্থায়ী সমাধান।',
        capabilitiesEn: ['Duplicate filter removal', 'De-duplication config audits', 'Catalog score enhancements'],
        capabilitiesBn: ['ডুপ্লিকেট ফায়ার রিমুভ', 'ডিডুপ্লিকেশন প্যারামিটার চেক', 'ক্যাটালগ ম্যাচ স্কোর ফিক্সিং'],
        bestForEn: 'Managers encountering warnings inside Meta dashboard settings.',
        bestForBn: 'যেসকল ফেসবুক অ্যাড পিক্সেল ড্যাশবোর্ডে "ডুপ্লিকেট" বা "মিসিং" ওয়ার্নিং দেখাচ্ছে।',
        timelineEn: '1–2 Days',
        timelineBn: '১–২ দিন',
        trustStatementEn: 'Ensures maximum pixel attribution scores.',
        trustStatementBn: 'মেটা ইভেন্ট ম্যানেজার ম্যাচ কোয়ালিটি স্কোর বৃদ্ধি গ্যারান্টি।'
      },
      {
        id: 'capi-setup',
        titleEn: 'Conversion API (CAPI)',
        titleBn: 'কনভার্সন এপিআই (CAPI)',
        descEn: 'Constructing robust server endpoints to bypass standard client blocks.',
        descBn: 'সার্ভার ব্যবহার করে সরাসরি কাস্টমারের কেনাকাটার সঠিক ডেটা ফেসবুকের কাছে পাঠানো।',
        capabilitiesEn: ['Cloud Server Tunnel bindings', 'De-duplication variables config', 'Secure API keys integration'],
        capabilitiesBn: ['ক্লাউড সার্ভার সেটআপ', 'সার্ভার-সাইড ডিডুপ্লিকেশন', 'নির্ভুল ডেটা রিলে ফ্লো'],
        bestForEn: 'Established retailers intending to retarget warm buyer lists.',
        bestForBn: 'যেসব ব্র্যান্ড প্রিসিসন ডেটাবাজারে কাস্টমার রিটার্গেটিং করতে চায়।',
        timelineEn: '1–3 Days',
        timelineBn: '১–৩ দিন',
        trustStatementEn: 'Fully circumvents high privacy browser blocks.',
        trustStatementBn: 'আইওএস ১৪.৫ ও পরবর্তী সমস্ত ব্রাউজার মেকানিজম এড়িয়ে ট্র্যাকিং সচল রাখা।'
      }
    ]
  },
  {
    id: 'creative-services',
    labelEn: 'Creative Services',
    labelBn: 'ক্রিয়েটিভ সার্ভিস',
    headingEn: 'Visual Authority Creative',
    headingBn: 'নান্দনিক ব্র্যান্ডিং ও ক্রিয়েটিভস',
    descEn: 'Conversion-focused creative assets crafted to elevate brand perception.',
    descBn: 'আপনার ব্র্যান্ডের ইমেজ ও সৌন্দর্য উন্নত করে কাস্টমারকে আকর্ষণ করতে প্রফেশনাল ডিজাইন কারুকাজ।',
    iconName: 'Palette',
    bestForEn: 'Organizations desiring world-class bespoke branding visual details.',
    bestForBn: 'অন্যান্য সাধারণ কোম্পানির তুলনায় সোশ্যাল পেইজে আভিজাত্য ও লাক্সারি থিম বজায় রাখতে ইচ্ছুক ব্যবসা।',
    timelineEn: '5 - 10 Days Focus',
    timelineBn: '৫ - ১০ দিন ফোকাস',
    trustStatementEn: 'High visual caliber mimicking global boutique benchmarks.',
    trustStatementBn: 'গ্লোবাল স্ট্যান্ডার্ড এবং নিখুঁত ডিজাইন আর্ট অনুসরণ করা নান্দনিকতা গ্যারান্টি।',
    capabilitiesEn: [
      'High-CTR banner designs',
      'Consistent social grid templates',
      'Exclusive vector layouts',
      'Pitch deck presentations'
    ],
    capabilitiesBn: [
      'কনভার্সন-ফোরসড অ্যাড ক্রিয়েটিভ',
      'সোশ্যাল মিডিয়া ভিজ্যুয়াল টেমপ্লেট',
      'ডিজিটাল ভেক্টর ব্র্যান্ড এসেট',
      'প্রিমিয়াম পিচ ডেক প্রেজেন্টেশন'
    ],
    subServices: [
      {
        id: 'ad-creatives',
        titleEn: 'Ad Creatives',
        titleBn: 'হাই-কনভার্টিং অ্যাড ডিজাইন',
        descEn: 'Design layouts with calculated spacing, modern hierarchy, and engaging copy.',
        descBn: 'ফেসবুক বিজ্ঞাপনের জন্য টেক্সট ও ডিজাইনের চমৎকার ব্যালেন্স রেখে তৈরি আকর্ষণীয় ব্যানার।',
        capabilitiesEn: ['CTR optimization techniques', 'Hook typeface formats', 'Multiple size crops'],
        capabilitiesBn: ['উচ্চ ক্লিক পাওয়ার উপযোগী কম্পোজিশন', 'টাইটেল হুক টাইপোগ্রাফি ডিজাইন', 'মাল্টি-সাইজ রেসপনসিভ ক্রপ'],
        bestForEn: 'Firms launching large promotional visual drives.',
        bestForBn: 'অনলাইন শপ বা বিজনেসের বিজ্ঞাপনে সঠিক ডিজাইনের কভার ও পেজ সাজাতে।',
        timelineEn: '2–4 Days',
        timelineBn: '২–৪ দিন',
        trustStatementEn: 'Guarantees zero-overlap layout compliance.',
        trustStatementBn: 'মেটা ফেসবুক ওভারলে পলিসি মেনে সম্পূর্ণ নিখুঁত রিডযোগ্য ডিজাইন।'
      },
      {
        id: 'social-designs',
        titleEn: 'Social Media Designs',
        titleBn: 'সোশ্যাল মিডিয়া কন্টেন্ট ডিজাইন',
        descEn: 'Creating stunning and reusable post templates representing unique brand palettes.',
        descBn: 'আপনার কোম্পানির নিজস্ব ফন্ট ও কালার স্কিম অনুযায়ী আকর্ষণীয় সোশ্যাল কন্টেন্ট ডিজাইন।',
        capabilitiesEn: ['Figma template design suites', 'Grid guideline boards', 'Typography hierarchies'],
        capabilitiesBn: ['থিম গ্রিড কলার ফর্মুলেশন', 'ক্লিন পোস্ট টেমপ্লেট মেকানিজম', 'উৎসবের ব্যানার ও ম্যাপিং'],
        bestForEn: 'Brands scaling regular profile assets without visual compromises.',
        bestForBn: 'সোশ্যাল মিডিয়ায় প্রোফাইল গ্রিড অত্যন্ত সুন্দর এবং পরিছন্ন দেখাতে ইচ্ছুক পেজ।',
        timelineEn: '2–3 Days',
        timelineBn: '২–৩ দিন',
        trustStatementEn: 'Pristine visual balance configurations.',
        trustStatementBn: 'ফিগার মাধ্যমে এডিটেবল কাস্টমাইজড প্রফেশনাল ফাইল ফরম্যাটে ডেলিভারি।'
      }
    ]
  },
  {
    id: 'ongoing-partnerships',
    labelEn: 'Ongoing Partnerships',
    labelBn: 'দীর্ঘমেয়াদী ওনারশিপ',
    headingEn: 'Bespoke Retainer Care',
    headingBn: 'দীর্ঘমেয়াদী মেইনটেনেন্স ও সাপোর্ট',
    descEn: 'Long-term support relationships for brands focused on sustainable growth.',
    descBn: 'কোনো রকম ঝামেলা ছাড়াই কোম্পানির নিয়মিত কোডিং ও বিজ্ঞাপন চ্যানেল সচল রাখার স্ট্র্যাটেজিক পার্টনারশিপ।',
    iconName: 'Handshake',
    bestForEn: 'Firms seeking the security of a permanent dedicated digital architecture team.',
    bestForBn: 'সার্বক্ষণিক আইটি সাপোর্ট, সাইট সিকিউরিটি এবং দীর্ঘমেয়াদী টেকনিক্যাল পার্টনারশিপ চাওয়া ব্যবসা।',
    timelineEn: 'Monthly Retainers / 6+ Months',
    timelineBn: 'মাসিক সাপোর্ট / ৬+ মাস চুক্তি',
    trustStatementEn: 'Priority response structures ensuring your brand operations stay fully online.',
    trustStatementBn: 'নিরাপত্তা ও আপডেট সহ প্রায়োরিটি ভিত্তিতে ইনস্ট্যান্ট সমাধান পাওয়ার নিশ্চয়তা।',
    capabilitiesEn: [
      'Continuous feature integrations',
      'Daily performance auditing',
      'Active server upkeep and monitoring',
      'Executive strategic advisory consults'
    ],
    capabilitiesBn: [
      'নিরাপদ কন্টেন্ট ও কোড আপডেট',
      'নিয়মিত স্পিড ও কোয়ালিটি যাচাই',
      'হোস্টিং ডোমেইন রক্ষণাবেক্ষণ',
      'গ্রোথ অ্যাডভাইজরি এবং পরামর্শ'
    ],
    subServices: [
      {
        id: 'monthly-maintenance',
        titleEn: 'Monthly Website Maintenance',
        titleBn: 'মাসিক ওয়েবসাইট মেইনটেনেন্স',
        descEn: 'Regular database sweepups, dependency upgrades, and active form validation audits.',
        descBn: 'নিয়মিত ওয়েবসাইটের প্লাগিন-থিম আপডেট, সিকিউরিটি প্যাচ ও ফর্ম সচল রাখানোর পরীক্ষা।',
        capabilitiesEn: ['Weekly Safe Updates', 'Active Form health checks', 'Database query optimizations'],
        capabilitiesBn: ['নিরাপদ প্লাগিন ও স্ক্রিপ্ট আপডেট', 'ফর্ম সাবমিশন সচল রাখার পরীক্ষা', 'অপ্রয়োজনীয় ক্যাশ ফাইল ও ডাটাবেস ক্লিন'],
        bestForEn: 'Highly ranked brands requiring zero operational interruption risks.',
        bestForBn: 'সার্বক্ষণিক ওয়েবসাইট সচল এবং বাউন্স-ফ্রি রাখতে ইচ্ছুক যেকোনো কোম্পানি।',
        timelineEn: 'Ongoing Monthly',
        timelineBn: 'চলমান মাসিক',
        trustStatementEn: 'Provides safe stg backups.',
        trustStatementBn: 'সাইট ডাউন বা হ্যাক হওয়া নিরোধক নিরাপত্তা মনিটরিং।'
      },
      {
        id: 'growth-partners',
        titleEn: 'Growth Partnerships',
        titleBn: 'কমপ্লিট গ্রোথ পার্টনারশিপ',
        descEn: 'An elite alliance combining visual layouts, server-side development, and campaign structures.',
        descBn: 'আইটি, কন্টেন্ট ডিরেকশন ও ফুল ডিজিটাল ব্র্যান্ড ডেভেলপমেন্ট সলিউশন কোলাবোর্ডেশন।',
        capabilitiesEn: ['Boutique Architect Allocation', 'Immediate priority support', 'Custom API integration guides'],
        capabilitiesBn: ['ডেডিকেটেড টিম ও লিড আর্কিটেক্ট বরাদ্দ', 'প্রায়োরিটি সিস্টেম ও আপডেট সাপোর্ট', 'অনলাইন মার্কেটিং ও ব্রান্ডিং এক ছাদের নিচে'],
        bestForEn: 'Established operations targeting massive scale without multi-agency friction.',
        bestForBn: 'ভিন্ন ভিন্ন এজেন্সিকে কাজ দেওয়ার ঝামেলা এড়িয়ে এক জায়গা থেকে প্রিমিয়াম সার্ভিস চাওয়া ব্র্যান্ড।',
        timelineEn: 'Ongoing Monthly',
        timelineBn: 'চলমান মাসিক',
        trustStatementEn: 'Our most premium collaborative retainers.',
        trustStatementBn: 'সিতোরার সবচেয়ে ভিআইপি ও প্রফেশনাল কোলাবোরেটিভ পার্টনারশিপ।'
      }
    ]
  }
];
