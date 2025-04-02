
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const ProjectsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">
            {t('pages.projects.title')} <span className="text-gradient-primary">{t('pages.projects.highlight')}</span>
          </h1>
          <p className="text-foreground/70 max-w-2xl mb-12">
            {t('pages.projects.description')}
          </p>
        </div>
      </div>
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
