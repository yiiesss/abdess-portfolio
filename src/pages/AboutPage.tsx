
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">
            About <span className="text-gradient-primary">Me</span>
          </h1>
          <p className="text-foreground/70 max-w-2xl mb-12">
            Learn more about my background, skills, and experience in developing
            specialized applications for various industries.
          </p>
        </div>
      </div>
      <AboutSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
