import React, { Suspense } from 'react';
import { AboutSection } from './AboutSection';

const FounderSection = React.lazy(() => import('./FounderSection').then(m => ({ default: m.FounderSection })));

interface AboutPageProps {
  darkMode: boolean;
}

export const AboutPage: React.FC<AboutPageProps> = ({ darkMode }) => {
  return (
    <div className="pt-20 lg:pt-24 min-h-screen">
      <AboutSection darkMode={darkMode} />
      <Suspense fallback={<div className="min-h-[440px] w-full border border-dashed border-neutral-900/10 dark:border-neutral-800/10 rounded-3xl" />}>
        <FounderSection darkMode={darkMode} />
      </Suspense>
    </div>
  );
};
