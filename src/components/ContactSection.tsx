
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/i18n/LanguageContext';

const ContactSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending the message
    setTimeout(() => {
      toast({
        title: t('contact.success'),
        description: t('contact.successDescription'),
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-20 relative" id="contact">
      {/* Background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full filter blur-[120px] opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('contact.title')} <span className="text-gradient-primary">{t('contact.highlight')}</span>
          </h2>
          <p className="text-foreground/70">
            {t('contact.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className={`lg:col-span-2 space-y-8 ${isRTL ? 'order-2' : 'order-1'}`}>
            <div className="glass-card p-6 rounded-xl">
              <div className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''} space-x-4`}>
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className={isRTL ? 'text-right mr-4' : ''}>
                  <h3 className="font-medium text-lg mb-1">{t('contact.email.title')}</h3>
                  <p className="text-foreground/70">linasio.com@gmail.com</p>
                  <a href="mailto:linasio.com@gmail.com" className="text-primary text-sm hover:underline mt-1 inline-block">
                    {t('contact.email.action')}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''} space-x-4`}>
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className={isRTL ? 'text-right mr-4' : ''}>
                  <h3 className="font-medium text-lg mb-1">{t('contact.phone.title')}</h3>
                  <p className="text-foreground/70">+212 661 141 101</p>
                  <a href="tel:+212661141101" className="text-primary text-sm hover:underline mt-1 inline-block">
                    {t('contact.phone.action')}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''} space-x-4`}>
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className={isRTL ? 'text-right mr-4' : ''}>
                  <h3 className="font-medium text-lg mb-1">{t('contact.location.title')}</h3>
                  <p className="text-foreground/70">Casablanca, Morocco</p>
                  <span className="text-primary text-sm mt-1 inline-block">
                    {t('contact.location.remote')}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`lg:col-span-3 ${isRTL ? 'order-1' : 'order-2'}`}>
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t('contact.form.name')}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-secondary/50 border-secondary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t('contact.form.email')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-secondary/50 border-secondary"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  {t('contact.form.subject')}
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-secondary/50 border-secondary"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t('contact.form.message')}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="h-32 bg-secondary/50 border-secondary"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full animated-gradient"
                disabled={isSubmitting}
              >
                {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                <Send className={`${isRTL ? 'mr-2 icon-flip' : 'ml-2'} h-4 w-4`} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
