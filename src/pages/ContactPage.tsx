
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">
            {t('pages.contact.title')} <span className="text-gradient-primary">{t('pages.contact.highlight')}</span>
          </h1>
          <p className="text-foreground/70 max-w-2xl mb-12">
            {t('pages.contact.description')}
          </p>
        </div>
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default ContactPage;
