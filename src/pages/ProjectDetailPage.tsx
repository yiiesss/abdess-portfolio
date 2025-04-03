
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

  // Define tech stacks for each project
  const techStacks = [
    // Medical Cabinet
    [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "javascript" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Tailwind CSS", icon: "css" }
    ],
    // Poultry Management
    [
      { name: "Vue.js", icon: "javascript" },
      { name: "Express", icon: "nodejs" },
      { name: "MySQL", icon: "mysql" },
      { name: "Chart.js", icon: "javascript" },
      { name: "Bootstrap", icon: "css" }
    ],
    // Jewelry Shop
    [
      { name: "React", icon: "react" },
      { name: "Firebase", icon: "firebase" },
      { name: "Material UI", icon: "css" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Node.js", icon: "nodejs" }
    ]
  ];
  
  // Project screenshot images and descriptions - properly organized by project names
  const projectScreenshots = [
    // Medical Cabinet
    [
      {
        img: "/lovable-uploads/17cfa2b2-86f3-4cf4-b282-365e8fcd46bb.png",
        description: "Financial overview dashboard showing income vs expenses with detailed revenue breakdowns by payment method"
      },
      {
        img: "/lovable-uploads/095fd0a1-5fb0-43e7-ab20-39cf67e9aeaf.png",
        description: "Expenses tracker with categorized spending, visualized with an interactive pie chart for easy analysis"
      },
      {
        img: "/lovable-uploads/cb986a60-aede-41fe-9ec0-67a6a463eb41.png",
        description: "Daily appointment scheduler with patient records and payment status tracking"
      },
      {
        img: "/lovable-uploads/4472ab42-8cfa-416a-a038-6b8f1f0cdd42.png",
        description: "Document template editor for creating prescriptions and medical reports with patient variable insertion"
      }
    ],
    // Poultry Management
    [
      {
        img: "/lovable-uploads/f4c02b4b-d6a3-4ff0-bd25-83768cbbc027.png",
        description: "Supplier detail view showing balance, transactions, and financial analytics with risk threshold monitoring"
      },
      {
        img: "/lovable-uploads/7977e095-6768-4dbc-8f1d-2703eefb2fe0.png",
        description: "Financial timeline and transaction history with multi-category visualization for trend analysis"
      },
      {
        img: "/lovable-uploads/1b884259-ec09-4ec6-83ff-3fb9f8bc3190.png",
        description: "Transaction listing with detailed payment history and action controls for supplier management"
      },
      {
        img: "/lovable-uploads/5037c9fa-4e47-464f-9f2e-8108ec1e0398.png",
        description: "Administrative dashboard with risk distribution analysis and critical status monitoring"
      },
      {
        img: "/lovable-uploads/cb758fdf-ac16-4a27-8c56-3b1a4c2521e9.png",
        description: "Operator dashboard showing inventory utilization and production metrics with automated stock alerts"
      }
    ],
    // Jewelry Shop
    [
      {
        img: "/lovable-uploads/34b554d2-73e5-4d57-9f12-3556ff2c0ec3.png",
        description: "Category summary view with margin comparison and product performance analysis"
      },
      {
        img: "/lovable-uploads/70c90f1f-cac5-495a-bf2d-4bd5ba39a938.png",
        description: "Dashboard overview with key metrics including inventory value, stock status, and recent transactions"
      },
      {
        img: "/lovable-uploads/21744730-27be-4a88-84fd-2fdb819c134e.png",
        description: "Sales analysis with revenue tracking and category performance visualization"
      },
      {
        img: "/lovable-uploads/86fc0372-4c34-40da-a082-a1603cbe8258.png",
        description: "Inventory valuation report with cost analysis, retail values, and profit margin calculations"
      }
    ]
  ];

  // Project thumbnail images (same as in ProjectsSection)
  const projectThumbnails = [
    "/lovable-uploads/79970cd7-29c4-4c1c-8592-4cbf0c864572.png", // Medical Cabinet
    "/lovable-uploads/820a8a3c-6704-45ab-ab2f-d293a8931031.png", // Poultry Management
    "/lovable-uploads/6b7d5c59-5241-4d1c-8a20-3d595bcf0da2.png", // Jewelry Shop
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
                src={projectThumbnails[projectIndex]} 
                alt={project.title} 
                className="w-full h-full object-cover" 
              />
            </AspectRatio>
          </Card>
          
          {/* Tech Stack Section */}
          <h2 className="text-2xl font-semibold mb-6">Technologies Used</h2>
          
          <div className="flex flex-wrap gap-6 mb-12">
            {techStacks[projectIndex].map((tech, index) => (
              <div key={index} className="flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full">
                <span className="font-medium text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
          
          <h2 className="text-2xl font-semibold mb-6">Screenshots & Features</h2>
          
          <div className="grid grid-cols-1 gap-8 mb-16">
            {projectScreenshots[projectIndex].map((screenshot, index) => (
              <Card key={index} className="overflow-hidden">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={screenshot.img} 
                    alt={`Screenshot ${index + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                </AspectRatio>
                <CardContent className="p-6">
                  <p className="text-foreground/80">{screenshot.description}</p>
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
