
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (lang: string) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en');
  const [isRTL, setIsRTL] = useState(currentLanguage === 'ar');

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
    setIsRTL(lang === 'ar');
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('i18nextLng', lang);
      
      // Update document direction
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      
      // Add or remove RTL class on body
      if (lang === 'ar') {
        document.body.classList.add('rtl');
      } else {
        document.body.classList.remove('rtl');
      }
    }
  };

  useEffect(() => {
    // Initialize RTL setting based on saved language
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('i18nextLng')?.split('-')[0] || 'en';
      setIsRTL(savedLanguage === 'ar');
      document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
      
      if (savedLanguage === 'ar') {
        document.body.classList.add('rtl');
      }
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
