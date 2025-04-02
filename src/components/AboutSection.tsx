
import { Card } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  LineChart, 
  Gem, 
  ShieldCheck, 
  Smartphone 
} from "lucide-react";

const skills = [
  {
    icon: <Code className="w-6 h-6 text-primary" />,
    title: "Frontend Development",
    description: "React, Vue, Angular, Responsive Design, UI/UX Implementation"
  },
  {
    icon: <Database className="w-6 h-6 text-primary" />,
    title: "Backend Development",
    description: "Node.js, Python, SQL/NoSQL Databases, API Design"
  },
  {
    icon: <LineChart className="w-6 h-6 text-primary" />,
    title: "Data Analytics",
    description: "Business Intelligence, Reporting, Data Visualization"
  },
  {
    icon: <Gem className="w-6 h-6 text-primary" />,
    title: "Industry Expertise",
    description: "Healthcare, Agriculture, Retail, Business Operations"
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: "Security & Compliance",
    description: "HIPAA, Data Protection, Secure Coding Practices"
  },
  {
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    title: "Mobile Development",
    description: "React Native, Progressive Web Apps, Mobile UI Design"
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
              I'm a seasoned full-stack developer specializing in creating domain-specific applications that solve real business challenges. With expertise across healthcare, agriculture, and retail sectors, I build solutions that streamline operations and enhance productivity.
            </p>
            <p className="text-foreground/80 mb-4">
              My approach combines technical excellence with deep industry knowledge, allowing me to understand the unique requirements of each sector. I pride myself on delivering clean, maintainable code that scales with your business needs.
            </p>
            <p className="text-foreground/80 mb-6">
              When I'm not coding, I'm continuously learning about new technologies and industry trends to ensure my solutions remain cutting-edge and forward-thinking.
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
                <span className="block text-3xl font-bold text-gradient-primary">3</span>
                <span className="text-sm text-foreground/70">Industries</span>
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
