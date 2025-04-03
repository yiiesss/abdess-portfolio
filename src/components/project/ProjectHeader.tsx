
import { Badge } from "@/components/ui/badge";

interface ProjectHeaderProps {
  title: string;
  description: string;
  tags: string[];
}

const ProjectHeader = ({ title, description, tags }: ProjectHeaderProps) => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">
        {title}
      </h1>
      
      <div className="flex gap-2 flex-wrap mb-6">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="bg-secondary/50">
            {tag}
          </Badge>
        ))}
      </div>
      
      <p className="text-foreground/70 max-w-3xl mb-12">
        {description}
      </p>
    </>
  );
};

export default ProjectHeader;
