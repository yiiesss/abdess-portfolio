
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const JewelryProjectPage = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const screenshots = [
    {
      id: 1,
      title: "Inventory Valuation",
      description: "Track the total cost, retail value, and potential profit of your jewelry inventory with detailed breakdowns by category.",
      image: "/lovable-uploads/f4852bae-55e6-45b8-baa6-78cfb39f927b.png"
    },
    {
      id: 2,
      title: "Sales Analysis",
      description: "Analyze sales trends over time with detailed charts showing revenue, profit, units sold, and category performance.",
      image: "/lovable-uploads/c48b4a9c-ef2c-436a-9c05-a9f7a804c10d.png"
    },
    {
      id: 3,
      title: "Dashboard Overview",
      description: "Get a quick overview of your jewelry business with key metrics including total products, low stock alerts, inventory value, and recent transactions.",
      image: "/lovable-uploads/d2842c4d-f27f-4fd8-8190-778b459149d2.png"
    },
    {
      id: 4,
      title: "Category Summary",
      description: "Compare performance across different jewelry categories with detailed margin analysis and inventory distribution.",
      image: "/lovable-uploads/a726d75d-db12-4ad3-b0db-500cf1cd4605.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Link to="/projects">
            <Button variant="ghost" size="sm" className="mb-6 group">
              <ArrowLeft className={`${isRTL ? 'ml-1 icon-flip' : 'mr-1'} w-4 h-4 transition-transform group-hover:-translate-x-1`} />
              {t('projects.backToProjects')}
            </Button>
          </Link>
          
          <h1 className="text-4xl font-bold mb-4">
            Jewelry Shop <span className="text-gradient-primary">Inventory & CRM</span>
          </h1>
          
          <div className="flex gap-2 flex-wrap mb-6">
            <Badge variant="secondary" className="bg-secondary/50">Retail</Badge>
            <Badge variant="secondary" className="bg-secondary/50">CRM</Badge>
            <Badge variant="secondary" className="bg-secondary/50">Inventory Management</Badge>
          </div>
          
          <p className="text-foreground/70 max-w-3xl mb-12">
            Integrated solution for jewelry retailers to manage inventory, customer relationships, and sales through an intuitive interface.
            This system helps jewelry shop owners track their inventory, analyze sales patterns, manage categories, and monitor business performance.
          </p>
          
          <div className="space-y-12 mb-20">
            <h2 className="text-2xl font-semibold mb-8">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {screenshots.map((screenshot) => (
                <Card key={screenshot.id} className="overflow-hidden glass-card">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={screenshot.image} 
                      alt={screenshot.title} 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{screenshot.title}</h3>
                    <p className="text-foreground/70">{screenshot.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-muted/50 p-6 rounded-lg border border-border mt-12">
              <h3 className="text-xl font-semibold mb-4">Technical Details</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/70">
                <li>Frontend built with React and Tailwind CSS for a responsive design</li>
                <li>Backend using Node.js with Express for RESTful API endpoints</li>
                <li>MongoDB database for flexible schema and document storage</li>
                <li>Real-time analytics using Recharts for visualization</li>
                <li>Responsive design that works on desktop and tablets for store use</li>
                <li>Multi-language support for international jewelry businesses</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JewelryProjectPage;
