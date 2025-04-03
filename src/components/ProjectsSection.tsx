
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/i18n/LanguageContext";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const projects = t('projects.projects', { returnObjects: true }) as {
    title: string;
    description: string;
    tags: string[];
  }[];

  // Project thumbnail images
  const projectImages = [
    "/lovable-uploads/79970cd7-29c4-4c1c-8592-4cbf0c864572.png", // Medical Cabinet
    "/lovable-uploads/820a8a3c-6704-45ab-ab2f-d293a8931031.png", // Poultry Management
    "/lovable-uploads/6b7d5c59-5241-4d1c-8a20-3d595bcf0da2.png", // Jewelry Shop
  ];

  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">{t('projects.subtitle')}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('projects.title')}</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden glass-card hover:border-primary/50 transition-all duration-300 group">
              <AspectRatio ratio={16 / 9} className="bg-secondary relative overflow-hidden">
                <img 
                  src={projectImages[index] || "/placeholder.svg"} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {false && ( // Placeholder for coming soon logic
                  <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                    <span className="text-sm font-medium text-foreground/90 px-3 py-1 rounded-full border border-foreground/20">
                      {t('projects.comingSoon')}
                    </span>
                  </div>
                )}
              </AspectRatio>

              <CardContent className="p-6">
                <div className="flex gap-2 flex-wrap mb-3">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/50">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <Link to={`/projects/${index + 1}`}>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-primary hover:text-primary/80 p-0 h-auto font-medium group"
                  >
                    {t('projects.viewProject')} 
                    <ArrowUpRight className={`${isRTL ? 'mr-1 icon-flip' : 'ml-1'} w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1`} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
