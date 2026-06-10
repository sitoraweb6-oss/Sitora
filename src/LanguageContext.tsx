import React, { createContext, useContext, useState, useEffect } from 'react';
import { transDictionary } from './localization';

type LanguageType = 'en' | 'bn';

interface LanguageContextProps {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Read initial language from browser path or stored preferences, defaulting to 'en'
  const [language, setLanguageState] = useState<LanguageType>(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      if (pathname === '/bn' || pathname.startsWith('/bn/')) {
        return 'bn';
      }
      const saved = localStorage.getItem('sitora_language_preference');
      if (saved === 'bn') return 'bn';
    }
    return 'en';
  });

  // Handle switching language, synchronizing browser pathname for proper indexing & multilingual SEO
  const setLanguage = (newLang: LanguageType) => {
    setLanguageState(newLang);
    localStorage.setItem('sitora_language_preference', newLang);

    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      const currentSearch = window.location.search;
      const currentHash = window.location.hash;
      let targetPath = currentPath;

      if (newLang === 'bn') {
        if (!currentPath.startsWith('/bn')) {
          if (currentPath === '/') {
            targetPath = '/bn';
          } else {
            targetPath = `/bn${currentPath}`;
          }
        }
      } else {
        if (currentPath.startsWith('/bn')) {
          if (currentPath === '/bn') {
            targetPath = '/';
          } else {
            targetPath = currentPath.substring(3); // remove '/bn'
          }
        }
      }

      if (targetPath !== currentPath) {
        window.history.pushState({}, '', `${targetPath}${currentSearch}${currentHash}`);
        // Dispatch a custom popstate event so App routing parses the updated URL
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    }
  };

  // Keep track of direct window path mutations (e.g. browser back/forward buttons or initial load)
  useEffect(() => {
    const handleLocationChange = () => {
      const pathname = window.location.pathname;
      if (pathname === '/bn' || pathname.startsWith('/bn/')) {
        setLanguageState('bn');
      } else {
        setLanguageState('en');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Update HTML elements for accessibility, crawler indexing, and language descriptors
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Premium translation look-up with automatic fallback
  const t = (key: string): string => {
    const trimmedKey = key.trim();
    if (transDictionary[language]?.[trimmedKey] !== undefined) {
      return transDictionary[language][trimmedKey];
    }
    
    // Fall back to general dictionary lookup otherwise
    if (language === 'bn') {
      if (transDictionary['bn']?.[trimmedKey] !== undefined) {
        return transDictionary['bn'][trimmedKey];
      }
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
