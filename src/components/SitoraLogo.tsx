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
  const brandGold = isLight ? "#B88A44" : "#D6B16B";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-all duration-300`}
      id="sitora-icon-svg"
    >
      {/* 2x2 Grid Layout with solid brand color from design */}
      {/* Top-Left: Subtle rounded corners */}
      <rect
        x="10"
        y="10"
        width="38"
        height="38"
        rx="6"
        fill={brandGold}
      />
      {/* Top-Right: Elegantly rounded outer corner and small rounded inner corners */}
      <path
        d="M 58 10 H 70 A 20 20 0 0 1 90 30 V 42 A 6 6 0 0 1 84 48 H 58 A 6 6 0 0 1 52 42 V 16 A 6 6 0 0 1 58 10 Z"
        fill={brandGold}
      />
      {/* Bottom-Left: Rounded bottom-left and curved side to match bento layout */}
      <path
        d="M 16 52 H 42 A 6 6 0 0 1 48 58 V 84 A 6 6 0 0 1 42 90 H 30 A 20 20 0 0 1 10 70 V 58 A 6 6 0 0 1 16 52 Z"
        fill={brandGold}
      />
      {/* Bottom-Right: Standard rounded corner on bottom right */}
      <rect
        x="52"
        y="52"
        width="38"
        height="38"
        rx="6"
        fill={brandGold}
      />

      <defs>
        <linearGradient id="sitora-grad-1" x1="10" y1="10" x2="48" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF4E00" />
          <stop offset="1" stopColor="#FF8A00" />
        </linearGradient>
        <linearGradient id="sitora-grad-2" x1="52" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF8A00" />
          <stop offset="1" stopColor="#FFB800" />
        </linearGradient>
      </defs>

      {/* Stylized Capital S overlapping the center.
          White bold, custom cuts. Fits the exact official layout without outline. */}
      <path
        d="M32 32H75C75 32 75 42 62 44C49 46 32 48 32 58C32 68 45 70 54 70H75V60H48C48 60 46 54 58 52C70 50 75 48 75 38C75 28 62 26 50 26H32V32Z"
        fill="#FFFFFF"
      />

      {/* Creases to create the beautifully folded origami/ribbon effect */}
      <path
        d="M48 32 L32 26"
        stroke={isLight ? "#ffffff" : "#0d0d0d"}
        className="stroke-white dark:stroke-black"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M48 60 L75 70"
        stroke={isLight ? "#ffffff" : "#0d0d0d"}
        className="stroke-white dark:stroke-black"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
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
