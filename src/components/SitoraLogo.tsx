import React from 'react';

interface LogoProps {
  className?: string;
  iconSize?: number;
  showText?: boolean;
  showTagline?: boolean;
  isLight?: boolean;
}

export const SitoraIcon: React.FC<{ size?: number; className?: string; isLight?: boolean }> = ({ 
  size = 48, 
  className = '',
  isLight = false
}) => {
  return (
    <img
      src="/images/logo (1).svg"
      alt="Sitora Web Logo"
      width={size}
      height={size}
      className={`object-contain transition-all duration-300 ${className}`}
      fetchPriority="high"
      decoding="async"
    />
  );
};

export const SitoraLogoWithText: React.FC<LogoProps> = ({
  className = '',
  iconSize = 44,
  showText = true,
  showTagline = true,
  isLight = false,
}) => {
  const textPrimary = isLight ? 'text-[#111827]' : 'text-[#F7F8FA]';
  const textSecondary = isLight ? '#B88A44' : '#D6B16B'; // Gold hex

  return (
    <div className={`flex items-center gap-3 select-none ${className}`} id="sitora-logo-container">
      <SitoraIcon size={iconSize} isLight={isLight} />
      
      {showText && (
        <div className="flex flex-col justify-center" id="sitora-logo-brand-details">
          <span 
            className={`font-sans text-xl font-bold tracking-tight leading-none ${textPrimary}`}
            id="sitora-logo-title"
          >
            Sitora Web
          </span>
          {showTagline && (
            <span 
              className="font-mono text-[9px] uppercase tracking-[0.2em] font-medium leading-none mt-1.5"
              style={{ color: textSecondary }}
              id="sitora-logo-tagline"
            >
              We Bring Your Business Online
            </span>
          )}
        </div>
      )}
    </div>
  );
};
