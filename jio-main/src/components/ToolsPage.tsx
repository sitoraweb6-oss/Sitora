import React, { Suspense } from 'react';

const ProposalPlanner = React.lazy(() => import('./ProposalPlanner').then(m => ({ default: m.ProposalPlanner })));
const WebsiteBlueprintGenerator = React.lazy(() => import('./WebsiteBlueprintGenerator').then(m => ({ default: m.WebsiteBlueprintGenerator })));
const DigitalGrowthAudit = React.lazy(() => import('./DigitalGrowthAudit').then(m => ({ default: m.DigitalGrowthAudit })));
const GrowthJourneyEngine = React.lazy(() => import('./GrowthJourneyEngine').then(m => ({ default: m.GrowthJourneyEngine })));

interface ToolsPageProps {
  darkMode: boolean;
  onOpenInquiry: (serviceId?: string) => void;
}

export const ToolsPage: React.FC<ToolsPageProps> = ({ darkMode, onOpenInquiry }) => {
  return (
    <div className="pt-20 lg:pt-24 min-h-screen pb-24 space-y-24">
      {/* Interactive Proposal Planner section */}
      <section className="relative px-4 sm:px-6 lg:px-8 border-t border-neutral-900/10 dark:border-neutral-900/50" id="tools-proposal-planner-section">
        <Suspense fallback={<div className="min-h-[500px] w-full border border-dashed border-neutral-900/10 dark:border-neutral-800/10 rounded-3xl" />}>
          <ProposalPlanner darkMode={darkMode} />
        </Suspense>
      </section>
      
      {/* Sitora Web tailored Website Blueprint Generator */}
      <Suspense fallback={<div className="min-h-[620px] w-full border border-dashed border-neutral-900/10 dark:border-neutral-800/10 rounded-3xl" />}>
        <WebsiteBlueprintGenerator 
          darkMode={darkMode}
          onOpenInquiry={onOpenInquiry}
        />
      </Suspense>

      {/* Sitora Web interactive Digital Growth Audit Engine */}
      <Suspense fallback={<div className="min-h-[720px] sm:min-h-[820px] w-full border border-dashed border-neutral-900/10 dark:border-neutral-800/10 rounded-3xl" />}>
        <DigitalGrowthAudit 
          darkMode={darkMode}
          onOpenInquiry={onOpenInquiry}
        />
      </Suspense>
      
      {/* Sitora Web tailored luxury Growth Journey Engine */}
      <Suspense fallback={<div className="min-h-[600px] sm:min-h-[680px] w-full border border-dashed border-neutral-900/10 dark:border-neutral-800/10 rounded-3xl" />}>
        <GrowthJourneyEngine 
          darkMode={darkMode}
          onOpenInquiry={onOpenInquiry}
        />
      </Suspense>
    </div>
  );
};
