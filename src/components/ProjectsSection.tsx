import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const ProjectsSection = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 'jewelry',
      title: 'Jewelry Shop Inventory & CRM',
      description: t('projects.jewelry.description'),
      image: '/lovable-uploads/6f051906-635f-4141-9329-3833267b88ce.png',
      badges: ['Retail', 'CRM', 'Inventory Management'],
      link: '/project/jewelry'
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden glass-card group">
            <AspectRatio ratio={16/9}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </AspectRatio>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <div className="flex gap-2 flex-wrap mb-4">
                {project.badges.map((badge) => (
                  <Badge key={badge} variant="secondary" className="bg-secondary/50">
                    {badge}
                  </Badge>
                ))}
              </div>
              <p className="text-foreground/70 mb-4">{project.description}</p>
              <Link to={project.link}>
                <Button variant="outline" className="w-full">
                  {t('projects.viewProject')}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
