
import { Card } from "@/components/ui/card";
import { 
  Code, 
  CheckCircle, 
  Target, 
  Sparkles, 
  ShieldCheck, 
  Rocket 
} from "lucide-react";

const skills = [
  {
    icon: <Code className="w-6 h-6 text-primary" />,
    title: "Full-Stack Development",
    description: "Comprehensive solutions spanning frontend, backend, and database technologies"
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-primary" />,
    title: "Quality Assurance",
    description: "Rigorous testing methodologies ensuring bug-free, reliable applications"
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Client-Focused Approach",
    description: "Solutions tailored to your specific business requirements and goals"
  },
  {
    icon: <Sparkles className="w-6 h-6 text-primary" />,
    title: "Innovative Solutions",
    description: "Leveraging cutting-edge technologies to deliver modern, efficient applications"
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: "Security & Performance",
    description: "Applications built with security best practices and optimized for performance"
  },
  {
    icon: <Rocket className="w-6 h-6 text-primary" />,
    title: "End-to-End Delivery",
    description: "Complete project management from concept to deployment and maintenance"
  }
];

const AboutSection = () => {
  return (
    <section className="py-20 relative" id="about">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full filter blur-[120px] opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-gradient-primary">Me</span>
            </h2>
            <p className="text-foreground/80 mb-4">
              I specialize in creating turnkey solutions that perfectly align with clients' business objectives. My focus is on delivering complete, high-quality applications that work flawlessly from day one.
            </p>
            <p className="text-foreground/80 mb-4">
              With a commitment to understanding your unique requirements, I build custom software that solves real business challenges while maintaining exceptional code quality and user experience.
            </p>
            <p className="text-foreground/80 mb-6">
              My approach combines technical excellence with a strong emphasis on reliability and performance, ensuring that every solution I deliver is robust, scalable, and truly bug-free.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <span className="block text-3xl font-bold text-gradient-primary">5+</span>
                <span className="text-sm text-foreground/70">Years Experience</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-gradient-primary">20+</span>
                <span className="text-sm text-foreground/70">Projects</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-gradient-primary">15+</span>
                <span className="text-sm text-foreground/70">Clients</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-gradient-primary">100%</span>
                <span className="text-sm text-foreground/70">Satisfaction</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="glass-card p-6">
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-foreground/70">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
