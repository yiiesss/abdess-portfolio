import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChartBarIncreasingIcon, ChartBarStackedIcon, GlobeIcon, PanelTopIcon, SunIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
  SiReact,
  SiTypescript,
  SiVite,
  SiTailwindcss,
  SiRadixui,
  SiFramer,
  SiLucide,
  SiShadcnui,
  SiReacthookform,
  SiZod,
  SiReactrouter,
  SiSupabase,
  SiDatefns,
  SiMui,
  SiFastify,
  SiEslint,
  SiPrettier,
  SiElectron,
  SiElectronbuilder,
  SiTestinglibrary,
  SiJest,
  SiSqlite,
  SiAdobeacrobatreader
} from "react-icons/si";

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
    // Medical Cabinet (from cabinet.txt)
    [
      { name: "React", icon: <SiReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Radix UI", icon: <SiRadixui /> },
      { name: "Framer Motion", icon: <SiFramer /> },
      { name: "Lucide React", icon: <SiLucide /> },
      { name: "Shadcn", icon: <SiShadcnui /> },
      { name: "Recharts", icon: <ChartBarStackedIcon /> },
      { name: "Zod", icon: <SiZod /> },
      { name: "React Router", icon: <SiReactrouter /> },
      { name: "PDF", icon: <SiAdobeacrobatreader /> },
      { name: "i18next", icon: <GlobeIcon /> },
      { name: "date-fns", icon: <SiDatefns /> },
      { name: "SunEditor", icon: <SunIcon /> },
      { name: "React Resizable Panels", icon: <PanelTopIcon /> },
    ],
    // Poultry Management (from poultry.txt)
    [
      { name: "React", icon: <SiReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "React Router", icon: <SiReactrouter /> },
      { name: "Material UI", icon: <SiMui /> },
      { name: "date-fns", icon: <SiDatefns /> },
      { name: "Fastify", icon: <SiFastify /> },
      { name: "i18next", icon: <GlobeIcon /> },
      { name: "ESLint", icon: <SiEslint /> },
      { name: "Prettier", icon: <SiPrettier /> },
      { name: "ESLint", icon:  <SiEslint /> },
      { name: "Recharts",  icon:<ChartBarStackedIcon />},
      { name: "Zustand", icon: "" },
     ],
    // Jewelry Shop (from jewelry.txt)
    [
      { name: "React", icon: <SiReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "Electron", icon: <SiElectron /> },
      { name: "Material UI", icon: <SiMui /> },
      { name: "Recharts", icon: <ChartBarStackedIcon /> },
      { name: "Zustand", icon: "" },
      { name: "React Router v6", icon: <SiReactrouter /> },
      { name: "SQLite", icon: <SiSqlite /> },
      { name: "i18next", icon: <GlobeIcon /> },
      { name: "Electron Builder", icon:  <SiElectronbuilder /> },
      { name: "Jest", icon: <SiJest /> },
      { name: "React Testing Library", icon: <SiTestinglibrary /> },
      { name: "ESLint", icon: <SiEslint /> },
      { name: "Prettier", icon:  <SiPrettier /> },
    ],
  ];
  
  // Project screenshot images and descriptions
  const projectScreenshots = [
    // Medical Cabinet
    [
      {
        img: "/lovable-uploads/cabinet-financial-overview.png",
        description: t('projectDetail.cabinet.financialOverview')
      },
      {
        img: "/lovable-uploads/cabinet-expenses-tracker.png",
        description: t('projectDetail.cabinet.expensesTracker')
      },
      {
        img: "/lovable-uploads/cabinet-daily-appointments.png",
        description: t('projectDetail.cabinet.dailyAppointments')
      },
      {
        img: "/lovable-uploads/cabinet-document-editor.png",
        description: t('projectDetail.cabinet.documentEditor')
      }
    ],
    // Poultry Management
    [
      {
        img: "/lovable-uploads/poultry-supplier-detail.png",
        description: t('projectDetail.poultry.supplierDetail')
      },
      {
        img: "/lovable-uploads/poultry-financial-timeline.png",
        description: t('projectDetail.poultry.financialTimeline')
      },
      {
        img: "/lovable-uploads/poultry-transaction-listing.png",
        description: t('projectDetail.poultry.transactionListing')
      },
      {
        img: "/lovable-uploads/poultry-risk-distribution.png",
        description: t('projectDetail.poultry.riskDistribution')
      },
      {
        img: "/lovable-uploads/poultry-inventory-utilization.png",
        description: t('projectDetail.poultry.inventoryUtilization')
      }
    ],
    // Jewelry Shop
    [
      {
        img: "/lovable-uploads/jewelry-category-summary.png",
        description: t('projectDetail.jewelry.categorySummary')
      },
      {
        img: "/lovable-uploads/jewelry-dashboard-overview.png",
        description: t('projectDetail.jewelry.dashboardOverview')
      },
      {
        img: "/lovable-uploads/jewelry-sales-analysis.png",
        description: t('projectDetail.jewelry.salesAnalysis')
      },
      {
        img: "/lovable-uploads/jewelry-inventory-valuation.png",
        description: t('projectDetail.jewelry.inventoryValuation')
      }
    ]
  ];

  // Project thumbnail images (same as in ProjectsSection)
  const projectThumbnails = [
    "/lovable-uploads/cabinet-thumb.png", // Medical Cabinet
    "/lovable-uploads/poultry-thumb.png", // Poultry Management
    "/lovable-uploads/jewelry-thumb.png", // Jewelry Shop
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
                    {/* Tech Stack Section */}
                    <h2 className="text-2xl font-semibold mb-6">Technologies Used</h2>
          
          <div className="flex flex-wrap gap-6 mb-12">
            {techStacks[projectIndex].map((tech, index) => (
              <div key={index} className="flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full">
                {tech.icon}
                <span className="font-medium text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
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
          {/* <Card className="overflow-hidden mb-12">
            <AspectRatio ratio={16/9}>
              <img 
                src={projectThumbnails[projectIndex]} 
                alt={project.title} 
                className="w-full h-full object-cover" 
              />
            </AspectRatio>
          </Card>
           */}
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
