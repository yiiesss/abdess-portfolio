
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  // Project data
  const projects = t('projects.projects', { returnObjects: true }) as {
    title: string;
    description: string;
    tags: string[];
  }[];
  
  const projectIndex = parseInt(id || '1') - 1;
  const project = projects[projectIndex];
  
  if (!project) {
    return navigate('/projects');
  }
  
  // Project thumbnail images (same as in ProjectsSection)
  const projectImages = [
    "/lovable-uploads/79970cd7-29c4-4c1c-8592-4cbf0c864572.png", // Medical Cabinet
    "/lovable-uploads/820a8a3c-6704-45ab-ab2f-d293a8931031.png", // Poultry Management
    "/lovable-uploads/6b7d5c59-5241-4d1c-8a20-3d595bcf0da2.png", // Jewelry Shop
  ];
  
  // Project screenshot details
  const screenshotDescriptions = [
    [
      "Dashboard view showing patient appointments and clinical metrics",
      "Financial reporting with expense tracking and revenue analysis",
      "Patient records management with document templates"
    ],
    [
      "Operator dashboard with inventory utilization and production metrics",
      "Financial tracking with supplier management and payment history",
      "Stock management with alerts and inventory tracking"
    ],
    [
      "Sales analysis with revenue tracking and category performance",
      "Expenses tracker with detailed categorization and reporting",
      "Inventory valuation with profit margins and recent transactions"
    ]
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="mb-6 flex items-center gap-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Button>
          
          <h1 className="text-4xl font-bold mb-4">
            {project.title}
          </h1>
          
          <div className="flex gap-2 flex-wrap mb-6">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-secondary/50">
                {tag}
              </Badge>
            ))}
          </div>
          
          <p className="text-foreground/70 max-w-3xl mb-12">
            {project.description}
          </p>
          
          {/* Main project image */}
          <Card className="overflow-hidden mb-12">
            <AspectRatio ratio={16/9}>
              <img 
                src={projectImages[projectIndex]} 
                alt={project.title} 
                className="w-full h-full object-cover" 
              />
            </AspectRatio>
          </Card>
          
          <h2 className="text-2xl font-semibold mb-6">Features & Screenshots</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {screenshotDescriptions[projectIndex].map((description, index) => (
              <Card key={index} className="overflow-hidden">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={index === 0 ? projectImages[projectIndex] : `/placeholder.svg`} 
                    alt={`Screenshot ${index + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                </AspectRatio>
                <CardContent className="p-4">
                  <p className="text-sm text-foreground/70">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
