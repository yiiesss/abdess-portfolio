
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">
            My <span className="text-gradient-primary">Projects</span>
          </h1>
          <p className="text-foreground/70 max-w-2xl mb-12">
            Explore my portfolio of specialized business applications designed for healthcare, 
            agriculture, and retail industries. Each project represents a unique solution to 
            complex business challenges.
          </p>
        </div>
      </div>
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
