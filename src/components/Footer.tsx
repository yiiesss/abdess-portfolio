
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/i18n/LanguageContext';

const Footer = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-bold text-gradient-primary mb-4 inline-block">
              Abdess's Portfolio
            </Link>
            <p className="text-foreground/70 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary/80 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary/80 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary/80 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-foreground/70 hover:text-foreground transition-colors">
                  {t('navbar.home')}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-foreground/70 hover:text-foreground transition-colors">
                  {t('navbar.projects')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-foreground transition-colors">
                  {t('navbar.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-foreground transition-colors">
                  {t('navbar.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">{t('footer.services')}</h3>
            <ul className="space-y-3">
              <li className="text-foreground/70">{t('footer.servicesList.healthcare')}</li>
              <li className="text-foreground/70">{t('footer.servicesList.agriculture')}</li>
              <li className="text-foreground/70">{t('footer.servicesList.retail')}</li>
              <li className="text-foreground/70">{t('footer.servicesList.custom')}</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/50 text-sm">
            © {currentYear} Abdess's Portfolio. {t('footer.rights')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-foreground/50 hover:text-foreground/80 transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-sm text-foreground/50 hover:text-foreground/80 transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
