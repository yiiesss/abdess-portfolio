
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import LanguageSelector from '@/components/LanguageSelector';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/i18n/LanguageContext';

const Navbar = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: t('navbar.home'), to: '/' },
    { name: t('navbar.projects'), to: '/projects' },
    { name: t('navbar.about'), to: '/about' },
    { name: t('navbar.contact'), to: '/contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-card py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-gradient-primary">DevPortfolio</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors
                after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary 
                after:transition-all hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-3">
          <LanguageSelector />
          <ThemeToggle />
          <Button variant="ghost" className="items-center gap-2 border border-primary/20 hover:bg-primary/10">
            <span>{t('navbar.resume')}</span>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSelector />
          <ThemeToggle />
          <button
            className="text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden neo-blur absolute top-full left-0 w-full p-4 ${isRTL ? 'text-right' : 'text-left'}`}>
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-foreground/90 hover:text-foreground py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="default" className="w-full mt-2">
              {t('navbar.resume')}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
