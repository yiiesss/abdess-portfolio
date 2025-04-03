
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackToProjectsButton = () => {
  const navigate = useNavigate();
  
  return (
    <Button 
      variant="ghost" 
      className="mb-6 flex items-center gap-2"
      onClick={() => navigate(-1)}
    >
      <ArrowLeft className="w-4 h-4" />
      Back to Projects
    </Button>
  );
};

export default BackToProjectsButton;
