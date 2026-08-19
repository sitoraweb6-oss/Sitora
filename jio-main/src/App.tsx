/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Suspense } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from './LanguageContext';

// Data
import { ARTICLES_DATA } from './data';
import { CASE_STUDIES_DATA } from './data/caseStudiesData';

// Components
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustedBySection } from './components/TrustedBySection';
import { StatsSection } from './components/StatsSection';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer';
import { InquiryForm, FloatingWhatsApp } from './components/InquiryForm';

// Lazy-loaded sub-modules for extreme FCP/LCP and minimum main-thread work
const TestimonialsSection = React.lazy(() => import('./components/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const FAQSection = React.lazy(() => import('./components/FAQSection').then(m => ({ default: m.FAQSection })));
const BlogPage = React.lazy(() => import('./components/BlogPage').then(m => ({ default: m.BlogPage })));
const PortfolioPage = React.lazy(() => import('./components/PortfolioPage').then(m => ({ default: m.PortfolioPage })));
const AboutPage = React.lazy(() => import('./components/AboutPage').then(m => ({ default: m.AboutPage })));
const IndustriesPage = React.lazy(() => import('./components/IndustriesPage').then(m => ({ default: m.IndustriesPage })));
const ToolsPage = React.lazy(() => import('./components/ToolsPage').then(m => ({ default: m.ToolsPage })));
const CaseStudyPage = React.lazy(() => import('./components/case-studies/CaseStudyPage').then(m => ({ default: m.CaseStudyPage })));
const FeaturedCaseStudyPreview = React.lazy(() => import('./components/case-studies/FeaturedCaseStudyPreview').then(m => ({ default: m.FeaturedCaseStudyPreview })));

// SEO URL Slug Mappers
const SLUG_TO_ID_MAP: Record<string, string> = {
  'website-cost-bangladesh': 'art-01',
  'business-website-vs-landing-page': 'art-02',
  'why-every-business-needs-a-website': 'art-03',
  'how-to-start-an-ecommerce-business-in-bangladesh': 'art-04',
  'best-hosting-for-wordpress-websites': 'art-05',
  'facebook-marketing-tips-for-small-businesses': 'art-06',
  'what-is-meta-pixel': 'art-07',
  'how-to-choose-the-right-digital-marketing-agency': 'art-08',
  'landing-page-vs-ecommerce-website': 'art-09',
  'top-website-design-trends-in-2026': 'art-10',
};

const ID_TO_SLUG_MAP: Record<string, string> = {
  'art-01': 'website-cost-bangladesh',
  'art-02': 'business-website-vs-landing-page',
  'art-03': 'why-every-business-needs-a-website',
  'art-04': 'how-to-start-an-ecommerce-business-in-bangladesh',
  'art-05': 'best-hosting-for-wordpress-websites',
  'art-06': 'facebook-marketing-tips-for-small-businesses',
  'art-07': 'what-is-meta-pixel',
  'art-08': 'how-to-choose-the-right-digital-marketing-agency',
  'art-09': 'landing-page-vs-ecommerce-website',
  'art-10': 'top-website-design-trends-in-2026',
};

export default function App() {
  const { language, t } = useLanguage();

  // Dark mode by default
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('sitora_theme_preference');
    return saved !== 'light'; // Default is true (dark) if not set
  });

  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState('web-dev');
  
  // Controlled active article ID for SEO blog sub-linking
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(() => {
    let path = window.location.pathname;
    if (path.startsWith('/bn/')) path = path.substring(3);
    if (path.startsWith('/case-studies/')) {
      return path.replace('/case-studies/', '');
    }
    return null;
  });

  // Page Routing State based on pathname, hash, and parameters
  const [currentView, setCurrentView] = useState<'home' | 'blog' | 'portfolio' | 'about' | 'industries' | 'tools' | 'case-study'>(() => {
    let path = window.location.pathname;
    const params = new URLSearchParams(window.location.search);
    const view = params.get('view');

    // Strip the '/bn' route prefix for unified internal view matching
    if (path === '/bn' || path === '/bn/') {
      path = '/';
    } else if (path.startsWith('/bn/')) {
      path = path.substring(3);
    }

    if (path.startsWith('/case-studies/')) {
      return 'case-study';
    }
    if (path.startsWith('/blog/')) {
      return 'blog';
    }
    if (path === '/sitora-insights' || path === '/blog' || view === 'blog' || params.has('article')) {
      return 'blog';
    }
    if (path === '/crafted-experiences' || path === '/portfolio' || view === 'portfolio' || view === 'crafted-experiences') {
      return 'portfolio';
    }
    if (path === '/about') {
      return 'about';
    }
    if (path === '/industries') {
      return 'industries';
    }
    if (path === '/get-a-quote' || path === '/tools') {
      return 'tools';
    }
    return 'home';
  });

  // Sync theme to root class List for advanced dark utilities selection
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
      html.style.colorScheme = 'dark';
    } else {
      html.classList.remove('dark');
      html.style.colorScheme = 'light';
    }
    localStorage.setItem('sitora_theme_preference', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Initial path/routing sync and event listeners
  useEffect(() => {
    const parseCurrentLocation = () => {
      let path = window.location.pathname;
      const params = new URLSearchParams(window.location.search);
      const hash = window.location.hash;

      // Strip the '/bn' route prefix for unified internal view matching
      if (path === '/bn' || path === '/bn/') {
        path = '/';
      } else if (path.startsWith('/bn/')) {
        path = path.substring(3);
      }

      if (path === '/contact' || hash === '#contact') {
        setCurrentView('home');
        setInquiryOpen(true);
        return;
      }

      if (path.startsWith('/case-studies/')) {
        const slug = path.replace('/case-studies/', '');
        setCurrentView('case-study');
        setActiveCaseStudyId(slug);
        return;
      }

      if (path.startsWith('/blog/')) {
        const slug = path.replace('/blog/', '');
        const artId = SLUG_TO_ID_MAP[slug];
        if (artId) {
          setCurrentView('blog');
          setActiveArticleId(artId);
        } else {
          setCurrentView('blog');
          setActiveArticleId(null);
        }
        return;
      }

      if (path === '/sitora-insights' || path === '/blog' || params.get('view') === 'blog') {
        setCurrentView('blog');
        const queryArticleId = params.get('article');
        setActiveArticleId(queryArticleId || null);
        return;
      }

      if (path === '/crafted-experiences' || path === '/portfolio' || params.get('view') === 'portfolio') {
        setCurrentView('portfolio');
        return;
      }

      if (path === '/about') {
        setCurrentView('about');
        return;
      }
      if (path === '/industries') {
        setCurrentView('industries');
        return;
      }
      if (path === '/get-a-quote' || path === '/tools') {
        setCurrentView('tools');
        return;
      }

      // Default home sections
      setCurrentView('home');
      let targetSection = '';
      if (path === '/services' || hash === '#services') targetSection = 'services';
      else if (path === '/pricing' || hash === '#pricing') targetSection = 'pricing';
      else if (hash === '#about') targetSection = 'about';
      else if (path === '/faq' || hash === '#faq') targetSection = 'faq';

      if (targetSection) {
        setTimeout(() => {
          const target = document.getElementById(targetSection);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      }
    };

    parseCurrentLocation();

    const handlePopState = () => {
      parseCurrentLocation();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // SEO Dynamics - Title, meta tags, and schema markup injection
  useEffect(() => {
    let seoTitle = 'Sitora Web | Premium Website Development & Digital Marketing Agency in Bangladesh';
    let seoDesc = 'Sitora Web helps businesses grow through premium websites, e-commerce solutions, digital marketing, SEO, and social media management. Get a free consultation today.';
    let canonicalUrl = 'https://sitora.org' + window.location.pathname;
    let isArticle = false;
    let ogType = 'website';

    if (currentView === 'portfolio') {
      seoTitle = 'Portfolio | Crafted Digital Experiences by Sitora Web';
      seoDesc = 'See active live website blueprints built by Sitora Web. Fast mobile-optimized business systems, secure e-commerce portals, and modern interactive solutions.';
    } else if (currentView === 'case-study') {
      const caseStudy = CASE_STUDIES_DATA.find(cs => cs.id === activeCaseStudyId || cs.slug === activeCaseStudyId);
      if (caseStudy) {
        seoTitle = caseStudy.seoTitle;
        seoDesc = caseStudy.seoDesc;
        canonicalUrl = `https://sitora.org/case-studies/${caseStudy.slug}`;
        isArticle = true;
        ogType = 'article';
      }
    } else if (currentView === 'blog') {
      if (activeArticleId) {
        const article = ARTICLES_DATA.find(a => a.id === activeArticleId);
        if (article) {
          seoTitle = `${article.title} | Sitora Insights`;
          seoDesc = article.excerpt;
          isArticle = true;
          const slug = ID_TO_SLUG_MAP[article.id] || article.id;
          canonicalUrl = `https://sitora.org/blog/${slug}`;
        } else {
          seoTitle = 'Sitora Insights | Digital Growth Resources';
          seoDesc = 'Gain deep strategic insights, digital tactics, pricing guides, hosting setups, and e-commerce guidelines compiled specifically to scale modern commercial assets in Bangladesh.';
        }
      } else {
        seoTitle = 'Sitora Insights | Digital Growth Resources';
        seoDesc = 'Gain deep strategic insights, digital tactics, pricing guides, hosting setups, and e-commerce guidelines compiled specifically to scale modern commercial assets in Bangladesh.';
        canonicalUrl = 'https://sitora.org/sitora-insights';
      }
    } else if (currentView === 'about') {
      seoTitle = 'About Sitora Web | Premium Digital Agency';
      seoDesc = "About Sitora Web. Narayanganj's premium digital marketing agency. Hand-coding high-speed commercial websites and driving qualified inquiries for Bangladesh businesses.";
      canonicalUrl = 'https://sitora.org/about';
    } else if (currentView === 'industries') {
      seoTitle = 'Industry Solutions | Sitora Web';
      seoDesc = 'Discover how Sitora Web helps different industries grow with custom digital solutions. From real estate to e-commerce, we build websites that convert.';
      canonicalUrl = 'https://sitora.org/industries';
    } else if (currentView === 'tools') {
      seoTitle = 'Get a Quote | Sitora Web Planning Tools';
      seoDesc = 'Plan your next digital project with Sitora Web. Use our interactive tools to get a quote, audit your current website, and map out your digital growth journey.';
      canonicalUrl = 'https://sitora.org/get-a-quote';
    } else if (currentView === 'home') {
      const path = window.location.pathname;
      const normalizedPath = path.startsWith('/bn') ? (path === '/bn' ? '/' : path.substring(3)) : path;
      if (normalizedPath === '/services') {
        seoTitle = 'Website Development & Digital Marketing Services in Bangladesh | Sitora Web';
        seoDesc = 'Explore professional website development, high-converting landing pages, e-commerce storefronts, Meta pixel CAPI setup, SEO, and social media management by Sitora Web.';
        canonicalUrl = 'https://sitora.org/services';
      } else if (normalizedPath === '/pricing') {
        seoTitle = 'Website Pricing in Bangladesh | Sitora Web';
        seoDesc = 'Get clear, transparent website design and development cost in Bangladesh. Pricing plans starts from $99 to $699 for customized digital assets.';
        canonicalUrl = 'https://sitora.org/pricing';
      } else if (normalizedPath === '/contact') {
        seoTitle = 'Contact Sitora Web | Free Consultation';
        seoDesc = "Let's discuss your next digital project. Book your free consultation for custom website designs, landing pages, digital marketing, and Meta systems.";
        canonicalUrl = 'https://sitora.org/contact';
      }
    }

    // Adapt SEO for Bangla when active language is set to 'bn'
    if (language === 'bn') {
      if (currentView === 'portfolio') {
        seoTitle = 'পোর্টফোলিও | সিতোরা ওয়েব নির্মিত সফল ওয়েবসাইট সমূহ';
        seoDesc = 'সিতোরা ওয়েব দ্বারা নির্মিত গতিসম্পন্ন এবং প্রফেশনাল লাইভ ওয়েবসাইট পোর্টফোলিও দেখুন। হাই-কনভার্টিং ল্যান্ডিং পেজ এবং ই-কমার্স সলিউশনস।';
      } else if (currentView === 'about') {
        seoTitle = 'সিতোরা ওয়েব সম্পর্কে বিস্তারিত | প্রিমিয়াম ডিজিটাল এজেন্সি';
        seoDesc = 'সিতোরা ওয়েব সম্পর্কে জানুন। ঢাকার কাছে নারায়ণগঞ্জের প্রিমিয়াম আইটি এজেন্সি, যা হ্যান্ড-কোডেড সুপার-ফাস্ট ওয়েবসাইট এবং কার্যকর সেবা প্রদান করে থাকে।';
      } else if (currentView === 'industries') {
        seoTitle = 'ইন্ডাস্ট্রি সলিউশনস | সিতোরা ওয়েব';
        seoDesc = 'রিয়েল এস্টেট থেকে শুরু করে ই-কমার্স পর্যন্ত, জানুন কীভাবে সিতোরা ওয়েব বিভিন্ন ইন্ডাস্ট্রির জন্য কাস্টম ডিজিটাল সলিউশন তৈরি করে।';
      } else if (currentView === 'tools') {
        seoTitle = 'কোটেশন পান | সিতোরা ওয়েব প্ল্যানিং টুলস';
        seoDesc = 'সিতোরা ওয়েবের সাথে আপনার পরবর্তী ডিজিটাল প্রজেক্টের পরিকল্পনা করুন। আপনার ওয়েবসাইটের অডিট করতে এবং বৃদ্ধির যাত্রা ম্যাপ করতে আমাদের টুলস ব্যবহার করুন।';
      } else if (currentView === 'blog') {
        if (activeArticleId) {
          const article = ARTICLES_DATA.find(a => a.id === activeArticleId);
          if (article) {
            seoTitle = `${t(article.title)} | সিতোরা ইনসাইটস`;
            seoDesc = t(article.excerpt);
            isArticle = true;
          } else {
            seoTitle = 'সিতোরা ইনসাইটস | ব্যবসায়িক বৃদ্ধির কৌশল সমূহ';
            seoDesc = 'বাংলাদেশে আপনার ব্যবসার অনলাইন সেলস এবং গ্রোথ বাড়াতে সহায়ক এবং অত্যন্ত কার্যকর ডিজিটাল গাইডলাইন ও অন-পেজ SEO টিপস।';
          }
        } else {
          seoTitle = 'সিতোরা ইনসাইটস | ব্যবসায়িক বৃদ্ধির কৌশল সমূহ';
          seoDesc = 'বাংলাদেশে আপনার ব্যবসার অনলাইন সেলস এবং গ্রোথ বাড়াতে সহায়ক এবং অত্যন্ত কার্যকর ডিজিটাল গাইডলাইন ও অন-পেজ SEO টিপস।';
        }
      } else if (currentView === 'home') {
        const path = window.location.pathname;
        const normalizedPath = path.startsWith('/bn') ? (path === '/bn' ? '/' : path.substring(3)) : path;
        if (normalizedPath === '/services') {
          seoTitle = 'ওয়েবসাইট ডেভেলপমেন্ট ও ডিজিটাল মার্কেটিং সার্ভিসসমূহ | সিতোরা ওয়েব';
          seoDesc = 'প্রিমিয়াম ওয়েবসাইট ডেভেলপমেন্ট, হাই-কনভার্টিং ল্যান্ডিং পেজ ডিজাইন, ই-কমার্স ওয়েবসাইট ডেভেলপমেন্ট এবং ফেসবুক অ্যাডস ট্র্যাকিং সলিউশন।';
        } else if (normalizedPath === '/pricing') {
          seoTitle = 'ওয়েবসাইট তৈরির খরচ ও প্রাইসিং প্ল্যান | সিতোরা ওয়েব';
          seoDesc = 'বাংলাদেশে সিতোরা ওয়েবের স্বচ্ছ ও চমৎকার বাজেট প্ল্যানসমূহ দেখুন। যেকোনো হাই-কোয়ালিটি বিজনেসের জন্য প্রফেশনাল ডিজিটাল সলিউশন।';
        } else if (normalizedPath === '/contact') {
          seoTitle = 'যোগাযোগ করুন সিতোরা ওয়েবের সাথে';
          seoDesc = 'আপনার প্রজেক্ট আলোচনা করতে আমাদের সাথে যোগাযোগ করুন। আপনার ব্যবসার বৃদ্ধির জন্য আজই ফ্রি কনসালটেশন বুক করুন।';
        } else {
          seoTitle = 'সিতোরা ওয়েব | প্রিমিয়াম ওয়েবসাইট ডেভেলপমেন্ট এবং ডিজিটাল মার্কেটিং এজেন্সি';
          seoDesc = 'সিতোরা ওয়েব বাংলাদেশের শীর্ষস্থানীয় প্রিমিয়াম ওয়েবসাইট ডিজাইন ও ডিজিটাল মার্কেটিং এজেন্সি। ব্যবসা প্রসারে আমরা হ্যান্ড-কোডেড স্পিডি ওয়েবসাইট তৈরি করি।';
        }
      }
    }

    // Set alternate language hreflang links for multilingual crawlers
    const cleanPath = window.location.pathname.startsWith('/bn')
      ? (window.location.pathname === '/bn' ? '/' : window.location.pathname.substring(3))
      : window.location.pathname;

    let enHrefEl = document.querySelector('link[hreflang="en"]');
    if (!enHrefEl) {
      enHrefEl = document.createElement('link');
      enHrefEl.setAttribute('rel', 'alternate');
      enHrefEl.setAttribute('hreflang', 'en');
      document.head.appendChild(enHrefEl);
    }
    enHrefEl.setAttribute('href', `https://sitora.org${cleanPath}`);

    let bnHrefEl = document.querySelector('link[hreflang="bn"]');
    if (!bnHrefEl) {
      bnHrefEl = document.createElement('link');
      bnHrefEl.setAttribute('rel', 'alternate');
      bnHrefEl.setAttribute('hreflang', 'bn');
      document.head.appendChild(bnHrefEl);
    }
    bnHrefEl.setAttribute('href', `https://sitora.org${cleanPath === '/' ? '/bn' : `/bn${cleanPath}`}`);

    let xDefaultHrefEl = document.querySelector('link[hreflang="x-default"]');
    if (!xDefaultHrefEl) {
      xDefaultHrefEl = document.createElement('link');
      xDefaultHrefEl.setAttribute('rel', 'alternate');
      xDefaultHrefEl.setAttribute('hreflang', 'x-default');
      document.head.appendChild(xDefaultHrefEl);
    }
    xDefaultHrefEl.setAttribute('href', `https://sitora.org${cleanPath}`);

    // Set title
    document.title = seoTitle;

    // Set description
    let metaDescEl = document.querySelector('meta[name="description"]');
    if (!metaDescEl) {
      metaDescEl = document.createElement('meta');
      metaDescEl.setAttribute('name', 'description');
      document.head.appendChild(metaDescEl);
    }
    metaDescEl.setAttribute('content', seoDesc);

    // Set Canonical link
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonicalUrl);

    // Set Open Graph tags
    const setOgPlayload = (prop: string, content: string, isOG = true) => {
      const attr = isOG ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${prop}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, prop);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Resolve absolute domain origin for crawlers who strictly require absolute URLs
    const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'https://sitora.org';
    const resolvedOgImage = currentOrigin.includes('localhost') || currentOrigin.includes('127.0.0.1')
      ? 'https://sitora.org/og-image.jpg'
      : `${currentOrigin}/og-image.jpg`;

    setOgPlayload('og:title', seoTitle);
    setOgPlayload('og:description', seoDesc);
    setOgPlayload('og:url', canonicalUrl);
    setOgPlayload('og:type', isArticle ? 'article' : 'website');
    setOgPlayload('og:image', resolvedOgImage);
    setOgPlayload('og:site_name', 'Sitora Web');
    setOgPlayload('twitter:card', 'summary_large_image', false);
    setOgPlayload('twitter:title', seoTitle, false);
    setOgPlayload('twitter:description', seoDesc, false);
    setOgPlayload('twitter:image', resolvedOgImage, false);

    // Inject Search-Engine Schemas
    document.querySelectorAll('script[data-schema-engine]').forEach(el => el.remove());

    const addJsonLd = (type: string, schema: any) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema-engine', type);
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    // Organization Schema
    addJsonLd('organization', {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://sitora.org/#organization",
      "name": "Sitora Web",
      "url": "https://sitora.org",
      "logo": `${currentOrigin}/favicon.svg`,
      "sameAs": [
        "https://www.facebook.com/sitoraweb",
        "https://www.instagram.com/sitoraweb",
        "https://www.linkedin.com/company/sitoraweb",
        "https://twitter.com/sitoraweb",
        "https://youtube.com/@sitoraweb",
        "https://pinterest.com/sitoraweb",
        "https://tiktok.com/@sitoraweb"
      ]
    });

    // LocalBusiness Schema
    addJsonLd('localbusiness', {
      "@context": "https://schema.org",
      "@type": "DigitalMarketingAgency",
      "@id": "https://sitora.org/#localbusiness",
      "name": "Sitora Web",
      "image": resolvedOgImage,
      "telephone": "+8801629586290",
      "email": "hello@sitora.org",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Narayanganj City",
        "addressLocality": "Narayanganj",
        "addressRegion": "Dhaka",
        "addressCountry": "BD"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "23.6238",
        "longitude": "90.5000"
      },
      "url": "https://sitora.org",
      "priceRange": "$$",
      "areaServed": [
        { "@type": "Country", "name": "Bangladesh" },
        { "@type": "Country", "name": "Worldwide" }
      ]
    });

    // WebSite Schema
    addJsonLd('website', {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://sitora.org/#website",
      "url": "https://sitora.org",
      "name": "Sitora Web",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://sitora.org/sitora-insights?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    });

    // FAQ Schema
    if (currentView === 'home') {
      addJsonLd('faq', {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a website cost in Bangladesh?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost depends on requirements. Typically starts from $99 for landing pages, $99 for business websites, and $699 for custom catalog e-commerce solutions."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to complete a website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Landing pages takes 2 to 5 business days, standard business websites take 5 to 10 days, and e-commerce stores take 10 to 20 days."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide support after delivery?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide dedicated support. This ranges between 7 to 30 days depending on package size, with further maintenance retainer plans available."
            }
          }
        ]
      });
    }

    // Article Schema & Person Schema
    if (currentView === 'blog' && activeArticleId) {
      const art = ARTICLES_DATA.find(a => a.id === activeArticleId);
      if (art) {
        addJsonLd('blog-article', {
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": art.title,
          "description": art.excerpt,
          "image": `https://sitora.org/assets/blog/${ID_TO_SLUG_MAP[art.id] || art.id}.webp`,
          "datePublished": "2026-06-09T00:00:00Z",
          "dateModified": "2026-06-09T22:33:00Z",
          "author": {
            "@type": "Person",
            "name": "Ahsan Habib",
            "jobTitle": "Lead Strategist",
            "worksFor": {
              "@type": "Organization",
              "name": "Sitora Web"
            }
          },
          "publisher": {
            "@type": "Organization",
            "name": "Sitora Web",
            "logo": {
              "@type": "ImageObject",
              "url": "https://sitora.org/assets/logo.png"
            }
          },
          "mainEntityOfPage": `https://sitora.org/blog/${ID_TO_SLUG_MAP[art.id] || art.id}`
        });

        addJsonLd('breadcrumb-blog', {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://sitora.org"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://sitora.org/sitora-insights"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": art.title,
              "item": `https://sitora.org/blog/${ID_TO_SLUG_MAP[art.id] || art.id}`
            }
          ]
        });
      }
    }

    if (currentView === 'portfolio') {
      addJsonLd('breadcrumb-portfolio', {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sitora.org"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Portfolio",
            "item": "https://sitora.org/crafted-experiences"
          }
        ]
      });
    }

    if (currentView === 'about') {
      addJsonLd('breadcrumb-about', {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sitora.org"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item": "https://sitora.org/about"
          }
        ]
      });
    }

    if (currentView === 'industries') {
      addJsonLd('breadcrumb-industries', {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sitora.org"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Industries",
            "item": "https://sitora.org/industries"
          }
        ]
      });
    }

    if (currentView === 'tools') {
      addJsonLd('breadcrumb-tools', {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sitora.org"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Get a Quote",
            "item": "https://sitora.org/get-a-quote"
          }
        ]
      });
    }

    if (currentView === 'case-study') {
      const caseStudy = CASE_STUDIES_DATA.find(cs => cs.id === activeCaseStudyId || cs.slug === activeCaseStudyId);
      if (caseStudy) {
        addJsonLd('breadcrumb-case-study', {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://sitora.org"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Portfolio",
              "item": "https://sitora.org/crafted-experiences"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": caseStudy.title,
              "item": `https://sitora.org/case-studies/${caseStudy.slug}`
            }
          ]
        });

        addJsonLd('creative-work-case-study', {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": caseStudy.title,
          "description": caseStudy.description,
          "author": {
            "@type": "Organization",
            "name": "Sitora Web"
          },
          "url": `https://sitora.org/case-studies/${caseStudy.slug}`,
          "image": resolvedOgImage
        });

        if (caseStudy.videoUrl) {
          addJsonLd('video-case-study', {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": `${caseStudy.title} Video Walkthrough`,
            "description": caseStudy.description,
            "contentUrl": caseStudy.videoUrl,
            "uploadDate": "2026-08-19" // generic fallback or parsed if known
          });
        }
      }
    }

    // Google Analytics 4 page_view tracking
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'page_view', {
        page_path: window.location.pathname + window.location.search,
        page_title: seoTitle,
        page_location: window.location.href
      });
    }
  }, [currentView, activeArticleId, language]);

  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleOpenInquiry = (serviceId: string = 'web-dev') => {
    setInquiryType(serviceId);
    setInquiryOpen(true);
  };

  // Custom controlled set article handler for clean URL support
  const handleSetActiveArticleId = (id: string | null) => {
    setActiveArticleId(id);
    const isBn = language === 'bn';
    const langPrefix = isBn ? '/bn' : '';
    if (id) {
      const slug = ID_TO_SLUG_MAP[id] || id;
      window.history.pushState({}, '', `${langPrefix}/blog/${slug}`);
    } else {
      window.history.pushState({}, '', `${langPrefix}/sitora-insights`);
    }
  };

  // Upgraded navigate with browser history pushState
  const handleNavigate = (view: 'home' | 'blog' | 'portfolio' | 'about' | 'industries' | 'tools' | 'case-study', sectionId?: string) => {
    const isBn = language === 'bn';
    const langPrefix = isBn ? '/bn' : '';
    let targetPath = '/';
    if (view === 'case-study' && sectionId) {
      targetPath = `/case-studies/${sectionId}`;
    } else if (view === 'blog') {
      targetPath = '/sitora-insights';
    } else if (view === 'portfolio') {
      targetPath = '/crafted-experiences';
    } else if (view === 'about') {
      targetPath = '/about';
    } else if (view === 'industries') {
      targetPath = '/industries';
    } else if (view === 'tools') {
      targetPath = '/get-a-quote';
    } else if (view === 'home') {
      if (sectionId === 'services') targetPath = '/services';
      else if (sectionId === 'pricing') targetPath = '/pricing';
      else if (sectionId === 'faq') targetPath = '/faq';
    }

    // Prefix language router tag
    if (isBn) {
      if (targetPath === '/') targetPath = '/bn';
      else targetPath = `/bn${targetPath}`;
    }

    window.history.pushState({}, '', targetPath);
    setCurrentView(view);
    if (view === 'case-study' && sectionId) {
      setActiveCaseStudyId(sectionId);
    } else {
      setActiveCaseStudyId(null);
    }
    setActiveArticleId(null);

    if (view === 'home' || view === 'about') {
      if (sectionId) {
        setTimeout(() => {
          const target = document.getElementById(sectionId);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          } else if (sectionId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 150);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`relative min-h-screen transition-colors duration-700 ease-out font-sans ${
        darkMode ? 'bg-[#05070A] text-[#F7F8FA] dark' : 'bg-[#FAFBFC] text-[#111827]'
      }`}
      id="sitora-app-root"
    >
      <div
        className="flex flex-col min-h-screen relative"
        id="experience-wrapper"
      >
        {/* Immersive UI Radial Glow Effects */}
            {darkMode && (
              <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-90" id="immersive-glow-backdrops">
                {/* Elite Luxury Engineering Layered Gradients */}
                {/* Deep Navy Atmospheric base glow */}
                <div 
                  className="absolute top-[10%] left-[15%] w-[80%] h-[65%] blur-[180px] rounded-full" 
                  style={{ background: 'radial-gradient(circle, rgba(11,28,61,0.3) 0%, rgba(5,7,10,0) 80%)' }}
                />
                <div 
                  className="absolute bottom-[15%] right-[5%] w-[70%] h-[65%] blur-[170px] rounded-full" 
                  style={{ background: 'radial-gradient(circle, rgba(15,33,70,0.25) 0%, rgba(5,7,10,0) 75%)' }}
                />
                
                {/* Soft Gold Luxury ambient warmth around key structures */}
                <div className="absolute top-[-5%] left-[-10%] w-[55%] h-[55%] bg-[#D6B16B] opacity-[0.15] blur-[160px] rounded-full animate-glow-gold" />
                <div className="absolute bottom-[5%] right-[-5%] w-[40%] h-[50%] bg-[#D6B16B] opacity-[0.10] blur-[150px] rounded-full animate-glow-blue" />
                <div className="absolute top-[45%] right-[-10%] w-[45%] h-[45%] bg-[#D6B16B] opacity-[0.08] blur-[170px] rounded-full" />
                <div className="absolute bottom-[45%] left-[-10%] w-[45%] h-[45%] bg-[#0A1A35] opacity-[0.25] blur-[150px] rounded-full" />
              </div>
            )}
            
            {/* Header Sticky Navigation bar */}
            <Header
              darkMode={darkMode}
              onToggleTheme={handleToggleTheme}
              onOpenInquiry={handleOpenInquiry}
              currentView={currentView}
              onNavigate={handleNavigate}
            />

            {/* Core Body Sections */}
            <main className="flex-grow" id="primary-view-container">
              <AnimatePresence mode="wait">
                {currentView === 'home' ? (
                  <motion.div 
                    key="home-viewport"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Hero Experience */}
                    <HeroSection 
                      darkMode={darkMode}
                      onOpenInquiry={handleOpenInquiry} 
                      onNavigate={handleNavigate}
                    />
                    
                    {/* Trusted By / Clients Section */}
                    <TrustedBySection
                      darkMode={darkMode}
                      onOpenInquiry={handleOpenInquiry}
                    />
                    
                    {/* Trusted Statistics Section */}
                    <StatsSection />
                    
                    {/* Featured Case Study Preview */}
                    <Suspense fallback={<div className="min-h-[400px] w-full" />}>
                      <FeaturedCaseStudyPreview 
                        darkMode={darkMode}
                        onNavigate={handleNavigate}
                      />
                    </Suspense>

                    {/* Featured Services competent grid */}
                    <ServicesSection 
                      darkMode={darkMode}
                      onOpenInquiry={handleOpenInquiry} 
                    />
                    
                    {/* Apple inspired premium pricing cards */}
                    <PricingSection 
                      darkMode={darkMode}
                      onOpenInquiry={handleOpenInquiry} 
                    />
                    
                    {/* Client stories trust testimonials */}
                    <Suspense fallback={<div className="min-h-[440px] w-full border border-dashed border-neutral-900/10 dark:border-neutral-800/10 rounded-3xl" />}>
                      <TestimonialsSection 
                        darkMode={darkMode} 
                      />
                    </Suspense>
                    
                    {/* FAQ Accordions block */}
                    <Suspense fallback={<div className="min-h-[480px] w-full border border-dashed border-neutral-900/10 dark:border-neutral-800/10 rounded-3xl" />}>
                      <FAQSection 
                        darkMode={darkMode} 
                      />
                    </Suspense>
                  </motion.div>
                ) : currentView === 'portfolio' ? (
                  <motion.div
                    key="portfolio-viewport"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Suspense fallback={<div className="min-h-screen flex items-center justify-center" />}>
                      <PortfolioPage 
                        darkMode={darkMode}
                        onBackToHome={() => handleNavigate('home', 'home')}
                        onOpenInquiry={handleOpenInquiry}
                      />
                    </Suspense>
                  </motion.div>
                ) : currentView === 'about' ? (
                  <motion.div
                    key="about-viewport"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Suspense fallback={<div className="min-h-screen flex items-center justify-center" />}>
                      <AboutPage darkMode={darkMode} />
                    </Suspense>
                  </motion.div>
                ) : currentView === 'industries' ? (
                  <motion.div
                    key="industries-viewport"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Suspense fallback={<div className="min-h-screen flex items-center justify-center" />}>
                      <IndustriesPage darkMode={darkMode} onOpenInquiry={handleOpenInquiry} />
                    </Suspense>
                  </motion.div>
                ) : currentView === 'tools' ? (
                  <motion.div
                    key="tools-viewport"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Suspense fallback={<div className="min-h-screen flex items-center justify-center" />}>
                      <ToolsPage darkMode={darkMode} onOpenInquiry={handleOpenInquiry} />
                    </Suspense>
                  </motion.div>
                ) : currentView === 'case-study' ? (
                  <motion.div
                    key="case-study-viewport"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Suspense fallback={<div className="min-h-screen flex items-center justify-center" />}>
                      <CaseStudyPage 
                        darkMode={darkMode} 
                        onBackToHome={() => handleNavigate('home', 'home')}
                        onNavigate={handleNavigate}
                        onOpenInquiry={handleOpenInquiry}
                        activeCaseStudyId={activeCaseStudyId}
                      />
                    </Suspense>
                  </motion.div>
                ) : (
                  <Suspense fallback={<div className="min-h-screen flex items-center justify-center" />}>
                    <BlogPage 
                      key="blog-viewport"
                      darkMode={darkMode}
                      onBackToHome={() => handleNavigate('home', 'home')}
                      onOpenInquiry={handleOpenInquiry}
                      activeArticleId={activeArticleId}
                      setActiveArticleId={handleSetActiveArticleId}
                    />
                  </Suspense>
                )}
              </AnimatePresence>
            </main>

            {/* Final CTA and Sticky detailed Footer */}
            <Footer 
              darkMode={darkMode}
              onOpenInquiry={handleOpenInquiry} 
              onNavigate={handleNavigate}
            />

            {/* Consultation side drawer form */}
            <InquiryForm
              isOpen={inquiryOpen}
              onClose={() => setInquiryOpen(false)}
              initialType={inquiryType}
            />

            {/* Sticky Floating WhatsApp portal widget */}
            <FloatingWhatsApp />

          </div>
    </div>
  );
}
