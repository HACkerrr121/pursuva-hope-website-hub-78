
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Globe, ShieldHeart, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProgramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

const ProgramCard = ({ title, description, icon, color, bgColor }: ProgramCardProps) => {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group h-full">
      <CardContent className="p-8 flex flex-col h-full">
        <div className="flex items-start mb-6">
          <div className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center",
            bgColor
          )}>
            {icon}
          </div>
          <h3 className="text-xl font-bold ml-4 pt-2">{title}</h3>
        </div>
        <p className="text-gray-700 mb-6 flex-grow">
          {description}
        </p>
        <Button variant="outline" className={cn(
          "mt-auto",
          color
        )}>
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs</h2>
          <div className="w-20 h-1 bg-gradient mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We run a variety of programs designed to address the most pressing needs of the communities we serve.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProgramCard 
            title="Education Initiatives" 
            description="Providing quality education and learning opportunities to underserved communities, with a focus on technology skills, literacy, and vocational training."
            icon={<BookOpen className="text-pursuva-teal w-6 h-6" />}
            color="text-pursuva-teal border-pursuva-teal hover:bg-pursuva-teal hover:text-white transition-colors"
            bgColor="bg-pursuva-teal/10"
          />
          
          <ProgramCard 
            title="Environmental Sustainability" 
            description="Working on conservation projects, sustainable agriculture, clean water initiatives, and renewable energy programs to protect our planet."
            icon={<Globe className="text-pursuva-blue w-6 h-6" />}
            color="text-pursuva-blue border-pursuva-blue hover:bg-pursuva-blue hover:text-white transition-colors"
            bgColor="bg-pursuva-blue/10"
          />
          
          <ProgramCard 
            title="Humanitarian Relief" 
            description="Providing emergency assistance, healthcare services, and long-term recovery support to communities affected by natural disasters and conflicts."
            icon={<ShieldHeart className="text-pursuva-purple w-6 h-6" />}
            color="text-pursuva-purple border-pursuva-purple hover:bg-pursuva-purple hover:text-white transition-colors"
            bgColor="bg-pursuva-purple/10"
          />
          
          <ProgramCard 
            title="Community Development" 
            description="Supporting local initiatives, entrepreneurship, and infrastructure projects that strengthen community resilience and economic opportunity."
            icon={<Lightbulb className="text-pursuva-orange w-6 h-6" />}
            color="text-pursuva-orange border-pursuva-orange hover:bg-pursuva-orange hover:text-white transition-colors"
            bgColor="bg-pursuva-orange/10"
          />
        </div>
        
        <div className="mt-16 p-8 bg-gradient rounded-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Want to get involved?</h3>
          <p className="mb-8 max-w-2xl mx-auto">
            Whether you'd like to volunteer, partner with us, or support our programs, we'd love to hear from you. Together, we can create lasting positive change.
          </p>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-pursuva-blue transition-colors">
            Join Our Efforts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
