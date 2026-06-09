export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  features: string[];
  color: string;
  bgGlow: string;
}

export interface CraftedExperience {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  description: string;
  imageSvgType: 'saas' | 'ecommerce' | 'corporate' | 'creative' | 'analytics';
  liveUrl: string;
  tags: string[];
  metric: string;
  metricLabel: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  subtext: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: { text: string; included: boolean }[];
  isRecommended: boolean;
  deliveryTime: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatarBlurHash: string;
  avatarInitials: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  imageAlt: string;
  content: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
