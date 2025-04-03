
interface TechStackItemProps {
  name: string;
  icon: string;
}

interface TechStackProps {
  techItems: TechStackItemProps[];
}

const TechStack = ({ techItems }: TechStackProps) => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">Technologies Used</h2>
      
      <div className="flex flex-wrap gap-6 mb-12">
        {techItems.map((tech, index) => (
          <div key={index} className="flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full">
            <span className="font-medium text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default TechStack;
