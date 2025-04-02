
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProjectPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  
  // Jewelry Inventory CRM project data
  const jewelryProject = {
    id: "jewelry-inventory",
    title: "Jewelry Inventory & CRM",
    description: "A comprehensive jewelry inventory management system with CRM capabilities, designed for jewelry retailers to track inventory, analyze sales, and manage customer relationships.",
    tags: ["React", "TypeScript", "Chart.js", "Material UI"],
    images: [
      {
        src: "/lovable-uploads/0f2d170a-1135-4baf-b9a7-944b9fdabe51.png",
        alt: "Inventory Valuation",
        description: "Inventory Valuation dashboard showing the total cost, retail value, and potential profit of jewelry items along with detailed breakdown by category."
      },
      {
        src: "/lovable-uploads/30c62e27-9d4f-41c5-8085-543654195e59.png",
        alt: "Sales Analysis",
        description: "Sales Analysis dashboard with sales trend graphs, units sold metrics, and category performance visualization to help track revenue and profit over time."
      },
      {
        src: "/lovable-uploads/8a45a4ff-c723-407f-af2c-a1d2ba731ffc.png",
        alt: "Dashboard Overview",
        description: "Main dashboard showing key metrics including total products, low stock alerts, inventory value, and category counts, along with recent transactions."
      },
      {
        src: "/lovable-uploads/ab9f2492-8ad9-4094-af14-4d27a625e2cf.png",
        alt: "Category Summary",
        description: "Category Summary report displaying detailed breakdown of product counts, costs, and margin comparison across different jewelry categories."
      }
    ],
    features: [
      "Real-time inventory tracking and valuation",
      "Sales analysis with visual reporting",
      "Category-based inventory organization",
      "Low stock alerts",
      "Transaction history tracking",
      "Margin and profit analysis",
      "Multi-language support"
    ],
    technologies: [
      "Frontend: React, TypeScript, Material UI",
      "Data Visualization: Chart.js, Recharts",
      "State Management: Redux",
      "Backend: Node.js, Express",
      "Database: MongoDB"
    ]
  };

  // For demo purposes, we're just showing the jewelry project
  const project = jewelryProject;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">
              {project.title} <span className="text-gradient-primary">Project</span>
            </h1>
            <p className="text-foreground/70 max-w-3xl mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-primary/10">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Image Carousel */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Project Screenshots</h2>
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {project.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <Card className="glass-card border-primary/20">
                      <CardContent className="p-1">
                        <AspectRatio ratio={16/9} className="bg-secondary/20">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="rounded-md object-cover w-full h-full"
                          />
                        </AspectRatio>
                        <div className="p-4">
                          <h3 className="text-xl font-medium mb-2">{image.alt}</h3>
                          <p className="text-foreground/70">{image.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
              <ul className="space-y-2">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
