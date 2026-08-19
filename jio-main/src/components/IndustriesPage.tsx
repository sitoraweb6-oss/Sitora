import React from 'react';
import { IndustrySolutionsExplorer } from './IndustrySolutionsExplorer';

interface IndustriesPageProps {
  darkMode: boolean;
  onOpenInquiry: (serviceId?: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ darkMode, onOpenInquiry }) => {
  return (
    <div className="pt-20 lg:pt-24 min-h-screen">
      <IndustrySolutionsExplorer darkMode={darkMode} onOpenInquiry={onOpenInquiry} />
    </div>
  );
};
