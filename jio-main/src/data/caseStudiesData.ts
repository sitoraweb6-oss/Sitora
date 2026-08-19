export interface CaseStudy {
  id: string;
  slug: string;
  type: string;
  industry: string;
  scope: string;
  status: string;
  createdBy: string;
  eyebrow: string;
  title: string;
  description: string;
  originalUrl: string;
  demoUrl: string;
  videoUrl: string;
  
  seoTitle: string;
  seoDesc: string;
  
  images: {
    hero: string;
    original: {
      homepage: string;
      services: string;
      estimator: string;
      emergencyAssessment: string;
      beforeAfter: string;
      process: string;
      aiRoofAnalysis: string;
      transparency: string;
      projects: string;
      localCoverage: string;
      contact: string;
    };
    redesign: {
      homepage: string;
      services: string;
      process: string;
      about: string;
      contact: string;
      caseStudyOverview: string;
    };
  }
}

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'cs-north-shore',
    slug: 'north-shore-roofing',
    type: 'Website Redesign Concept',
    industry: 'Roofing & Home Services',
    scope: 'UX / UI / Frontend / Conversion Experience',
    status: 'Independent Concept',
    createdBy: 'Sitora Web',
    eyebrow: 'CONCEPT CASE STUDY',
    title: 'Reimagining a Roofing Website for a Modern Digital Experience',
    description: 'An independent website redevelopment concept by Sitora Web, exploring how a traditional roofing website could evolve into a clearer, more engaging and conversion-focused digital experience.',
    originalUrl: 'https://northshoreroofinggutters.com.au/',
    demoUrl: 'https://north-shore.sitora.org/',
    videoUrl: 'https://youtu.be/24rzDcQXptU',
    
    seoTitle: 'North Shore Roofing Website Redesign Concept | Sitora Web',
    seoDesc: "Explore Sitora Web's independent North Shore roofing website redesign concept, featuring modern UX, interactive experiences, trust-focused design and conversion-oriented web development.",
    
    images: {
      hero: '/case-studies/north-shore-roofing/new-homepage.webp',
      original: {
        homepage: '/case-studies/north-shore-roofing/old-homepage.webp',
        services: '/case-studies/north-shore-roofing/old-services.webp',
        estimator: '/case-studies/north-shore-roofing/old-estimator.webp',
        emergencyAssessment: '/case-studies/north-shore-roofing/old-emergency-assessment.webp',
        beforeAfter: '/case-studies/north-shore-roofing/old-before-after.webp',
        process: '/case-studies/north-shore-roofing/old-process.webp',
        aiRoofAnalysis: '/case-studies/north-shore-roofing/old-ai-roof-analysis.webp',
        transparency: '/case-studies/north-shore-roofing/old-transparency.webp',
        projects: '/case-studies/north-shore-roofing/old-projects.webp',
        localCoverage: '/case-studies/north-shore-roofing/old-local-coverage.webp',
        contact: '/case-studies/north-shore-roofing/old-contact.webp'
      },
      redesign: {
        homepage: '/case-studies/north-shore-roofing/new-homepage.webp',
        services: '/case-studies/north-shore-roofing/new-services.webp',
        process: '/case-studies/north-shore-roofing/new-process.webp',
        about: '/case-studies/north-shore-roofing/new-about.webp',
        contact: '/case-studies/north-shore-roofing/new-contact.webp',
        caseStudyOverview: '/case-studies/north-shore-roofing/new-case-study-overview.webp'
      }
    }
  }
];
