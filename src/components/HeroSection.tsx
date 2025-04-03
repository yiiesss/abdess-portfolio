import { Button } from '@/components/ui/button';
import { ArrowRight, GitBranch, Code, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/i18n/LanguageContext';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const navigate = useNavigate();
  
  const handleExploreProjectsClick = () => {
    navigate('/projects');
  };

  const handleContactMeClick = () => {
    navigate('/contact');
  };

  return (
    <section className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full filter blur-[100px] opacity-60 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full filter blur-[100px] opacity-60 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm mb-6 animate-float">
          <span className="text-foreground/70">{t('hero.welcome')}</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-gradient-primary">{t('hero.title1')}</span>
          <br />
          <span>{t('hero.title2')}</span>
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mb-10">
          {t('hero.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button 
            size="lg" 
            className="animated-gradient font-medium"
            onClick={handleExploreProjectsClick}
          >
            {t('hero.exploreProjects')} 
            <ArrowRight className={`${isRTL ? 'mr-2 icon-flip' : 'ml-2'} h-4 w-4`} />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleContactMeClick}
          >
            {t('hero.contactMe')}
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          <div className="glassexploorepro-card p-6 rounded-xl text-left">
            <Code className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('features.cleanCode.title')}</h3>
            <p className="text-foreground/70">{t('features.cleanCode.description')}</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl text-left">
            <GitBranch className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('features.modernStack.title')}</h3>
            <p className="text-foreground/70">{t('features.modernStack.description')}</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl text-left">
            <Zap className="h-10 w-10 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('features.domainExpertise.title')}</h3>
            <p className="text-foreground/70">{t('features.domainExpertise.description')}</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="text-foreground/50 text-sm mb-2">{t('hero.scroll')}</span>
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
            <div className="w-1.5 h-1.5 bg-foreground/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
