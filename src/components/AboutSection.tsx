
import { Card } from "@/components/ui/card";
import { 
  Code, 
  CheckCircle, 
  Target, 
  Sparkles, 
  ShieldCheck, 
  Rocket 
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const skills = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: t('about.skills.fullstack.title'),
      description: t('about.skills.fullstack.description')
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      title: t('about.skills.qa.title'),
      description: t('about.skills.qa.description')
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: t('about.skills.clientFocused.title'),
      description: t('about.skills.clientFocused.description')
    },
    {
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      title: t('about.skills.innovation.title'),
      description: t('about.skills.innovation.description')
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: t('about.skills.security.title'),
      description: t('about.skills.security.description')
    },
    {
      icon: <Rocket className="w-6 h-6 text-primary" />,
      title: t('about.skills.delivery.title'),
      description: t('about.skills.delivery.description')
    }
  ];

  return (
    <section className="py-20 relative" id="about">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full filter blur-[120px] opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={isRTL ? "order-2" : ""}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('about.title')} <span className="text-gradient-primary">{t('about.me')}</span>
            </h2>
            <p className="text-foreground/80 mb-4">
              {t('about.description1')}
            </p>
            <p className="text-foreground/80 mb-4">
              {t('about.description2')}
            </p>
            <p className="text-foreground/80 mb-6">
              {t('about.description3')}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <span className="block text-3xl font-bold text-gradient-primary">5+</span>
                <span className="text-sm text-foreground/70">{t('about.stats.experience')}</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-gradient-primary">20+</span>
                <span className="text-sm text-foreground/70">{t('about.stats.projects')}</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-gradient-primary">15+</span>
                <span className="text-sm text-foreground/70">{t('about.stats.clients')}</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-gradient-primary">100%</span>
                <span className="text-sm text-foreground/70">{t('about.stats.satisfaction')}</span>
              </div>
            </div>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${isRTL ? "order-1" : ""}`}>
            {skills.map((skill, index) => (
              <Card key={index} className="glass-card p-6">
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-foreground/70">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
