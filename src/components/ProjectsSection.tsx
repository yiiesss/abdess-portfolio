
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Medical Cabinet Management System",
    description: "A comprehensive solution for hospitals and clinics to manage medications, equipment, and supplies with real-time tracking and analytics.",
    image: "/placeholder.svg",
    tags: ["Healthcare", "Inventory", "Analytics"],
    comingSoon: false
  },
  {
    id: 2,
    title: "Poultry Management System",
    description: "End-to-end platform for poultry farms to track feed consumption, health metrics, and production yields with predictive analytics.",
    image: "/placeholder.svg",
    tags: ["Agriculture", "IoT", "Dashboard"],
    comingSoon: false
  },
  {
    id: 3,
    title: "Jewelry Shop Inventory & CRM",
    description: "Integrated solution for jewelry retailers to manage inventory, customer relationships, and sales through an intuitive interface.",
    image: "/placeholder.svg",
    tags: ["Retail", "CRM", "E-commerce"],
    comingSoon: false
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Portfolio</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Discover my portfolio of specialized business applications designed to streamline operations
            and enhance productivity across different industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden glass-card hover:border-primary/50 transition-all duration-300 group">
              <div className="h-48 bg-secondary relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {project.comingSoon && (
                  <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                    <span className="text-sm font-medium text-foreground/90 px-3 py-1 rounded-full border border-foreground/20">
                      Coming Soon
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
                  disabled={project.comingSoon}
                >
                  View Project 
                  <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
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
