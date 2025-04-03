
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface MainProjectImageProps {
  imageUrl: string;
  altText: string;
}

const MainProjectImage = ({ imageUrl, altText }: MainProjectImageProps) => {
  return (
    <Card className="overflow-hidden mb-12">
      <AspectRatio ratio={16/9}>
        <img 
          src={imageUrl} 
          alt={altText} 
          className="w-full h-full object-cover" 
        />
      </AspectRatio>
    </Card>
  );
};

export default MainProjectImage;
