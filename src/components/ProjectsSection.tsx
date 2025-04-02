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

  const jewelryProject = {
    id: "jewelry-inventory",
    title: "Jewelry Inventory & CRM",
    description: "A comprehensive jewelry inventory management system with CRM capabilities for jewelry retailers.",
    images: [
      "/lovable-uploads/0f2d170a-1135-4baf-b9a7-944b9fdabe51.png",
      "/lovable-uploads/30c62e27-9d4f-41c5-8085-543654195e59.png",
      "/lovable-uploads/8a45a4ff-c723-407f-af2c-a1d2ba731ffc.png",
      "/lovable-uploads/ab9f2492-8ad9-4094-af14-4d27a625e2cf.png"
    ],
    tags: ["Inventory", "CRM", "Analytics", "Dashboard"]
  };

  const projects = t('projects.projects', { returnObjects: true }) as {
    title: string;
    description: string;
    tags: string[];
  }[];

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
          <Card className="overflow-hidden glass-card hover:border-primary/50 transition-all duration-300 group col-span-1 lg:col-span-3 mb-8">
            <div className="p-6">
              <div className="flex gap-2 flex-wrap mb-3">
                {jewelryProject.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-secondary/50">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{jewelryProject.title}</h3>
              <p className="text-foreground/70 mb-4">{jewelryProject.description}</p>
            </div>
            
            <div className="grid grid-cols-6 grid-rows-2 gap-2 p-6 pt-0 h-[400px]">
              <div className="col-span-4 row-span-2 overflow-hidden rounded-md">
                <img 
                  src={jewelryProject.images[0]} 
                  alt="Jewelry CRM Main Dashboard"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="col-span-2 row-span-1 overflow-hidden rounded-md">
                <img 
                  src={jewelryProject.images[1]} 
                  alt="Jewelry CRM Sales Analysis"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="col-span-2 row-span-1 overflow-hidden rounded-md">
                <img 
                  src={jewelryProject.images[2]} 
                  alt="Jewelry CRM Inventory"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            
            <div className="p-6 pt-2 flex justify-end">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-primary hover:text-primary/80 p-0 h-auto font-medium group"
                asChild
              >
                <Link to={`/project/${jewelryProject.id}`}>
                  {t('projects.viewProject')} 
                  <ArrowUpRight className={`${isRTL ? 'mr-1 icon-flip' : 'ml-1'} w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1`} />
                </Link>
              </Button>
            </div>
          </Card>

          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden glass-card hover:border-primary/50 transition-all duration-300 group">
              <div className="h-48 bg-secondary relative overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {false && (
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
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-primary hover:text-primary/80 p-0 h-auto font-medium group"
                >
                  {t('projects.viewProject')} 
                  <ArrowUpRight className={`${isRTL ? 'mr-1 icon-flip' : 'ml-1'} w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1`} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
