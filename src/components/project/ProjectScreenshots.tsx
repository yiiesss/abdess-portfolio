
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ScreenshotItem {
  img: string;
  description: string;
}

interface ProjectScreenshotsProps {
  screenshots: ScreenshotItem[];
}

const ProjectScreenshots = ({ screenshots }: ProjectScreenshotsProps) => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">Screenshots & Features</h2>
      
      <div className="grid grid-cols-1 gap-8 mb-16">
        {screenshots.map((screenshot, index) => (
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
    </>
  );
};

export default ProjectScreenshots;
