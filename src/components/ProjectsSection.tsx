
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProjectsSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const projects = t('projects.projects', { returnObjects: true }) as {
    title: string;
    description: string;
    tags: string[];
  }[];

  // Find the jewelry project index
  const jewelryProjectIndex = projects.findIndex(project => 
    project.title.toLowerCase().includes("jewelry") || 
    project.tags.some(tag => tag.toLowerCase().includes("retail"))
  );

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
            <Card 
              key={index} 
              className={`overflow-hidden glass-card hover:border-primary/50 transition-all duration-300 group ${index === jewelryProjectIndex ? 'md:col-span-2 lg:col-span-3' : ''}`}
            >
              <div className={`${index === jewelryProjectIndex ? 'h-64' : 'h-48'} bg-secondary relative overflow-hidden`}>
                {index === jewelryProjectIndex ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-1 h-full">
                    <div className="col-span-2 md:col-span-2 h-full">
                      <AspectRatio ratio={16/9} className="h-full">
                        <img 
                          src="/lovable-uploads/f4852bae-55e6-45b8-baa6-78cfb39f927b.png" 
                          alt="Jewelry Inventory Valuation" 
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                    </div>
                    <div className="h-full">
                      <AspectRatio ratio={1/1} className="h-1/2">
                        <img 
                          src="/lovable-uploads/c48b4a9c-ef2c-436a-9c05-a9f7a804c10d.png" 
                          alt="Jewelry Sales Analysis" 
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                      <AspectRatio ratio={1/1} className="h-1/2">
                        <img 
                          src="/lovable-uploads/d2842c4d-f27f-4fd8-8190-778b459149d2.png" 
                          alt="Jewelry Dashboard" 
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                    </div>
                    <div className="h-full">
                      <AspectRatio ratio={1/1} className="h-full">
                        <img 
                          src="/lovable-uploads/a726d75d-db12-4ad3-b0db-500cf1cd4605.png" 
                          alt="Jewelry Category Summary" 
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                    </div>
                  </div>
                ) : (
                  <img 
                    src="/placeholder.svg" 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                {false && ( // Placeholder for coming soon logic
                  <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                    <span className="text-sm font-medium text-foreground/90 px-3 py-1 rounded-full border border-foreground/20">
                      {t('projects.comingSoon')}
                    </span>
                  </div>
                )}
              </div>

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
                {index === jewelryProjectIndex ? (
                  <Link to="/project/jewelry">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-primary hover:text-primary/80 p-0 h-auto font-medium group"
                    >
                      {t('projects.viewProject')} 
                      <ArrowUpRight className={`${isRTL ? 'mr-1 icon-flip' : 'ml-1'} w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1`} />
                    </Button>
                  </Link>
                ) : (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-primary hover:text-primary/80 p-0 h-auto font-medium group"
                  >
                    {t('projects.viewProject')} 
                    <ArrowUpRight className={`${isRTL ? 'mr-1 icon-flip' : 'ml-1'} w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1`} />
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
