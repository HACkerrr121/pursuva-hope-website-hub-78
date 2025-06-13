
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Code, GraduationCap, Calculator, Zap, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  navigateTo?: string;
}

const CourseCard = ({ title, description, icon, color, bgColor, navigateTo }: CourseCardProps) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden group h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-start mb-4">
          <div className={cn(
            "w-12 h-12 rounded-md flex items-center justify-center",
            bgColor
          )}>
            {icon}
          </div>
          <h3 className="text-xl font-bold ml-4 pt-2">{title}</h3>
        </div>
        <p className="text-gray-700 mb-6 flex-grow">
          {description}
        </p>
        <Button 
          variant="ghost" 
          className={cn(
            "mt-auto border",
            color
          )}
          onClick={handleLearnMore}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Courses & Tutoring</h2>
          <div className="w-20 h-1 bg-gradient mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We offer free programming courses and specialized tutoring services in physics and competitive programming.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CourseCard 
            title="Python Programming Course" 
            description="Learn the fundamentals of Python programming, data structures, and algorithms. Perfect for beginners looking to build practical applications through our structured course."
            icon={<Code className="text-pursuva-blue w-6 h-6" />}
            color="text-pursuva-blue border-pursuva-blue hover:bg-pursuva-blue hover:text-white transition-colors"
            bgColor="bg-pursuva-blue/10"
            navigateTo="/programs/python"
          />
          
          <CourseCard 
            title="Java Development Course" 
            description="Master Java programming fundamentals and object-oriented design through our comprehensive course. Build desktop apps and learn software engineering principles."
            icon={<Code className="text-pursuva-teal w-6 h-6" />}
            color="text-pursuva-teal border-pursuva-teal hover:bg-pursuva-teal hover:text-white transition-colors"
            bgColor="bg-pursuva-teal/10"
            navigateTo="/programs/java"
          />
          
          <CourseCard 
            title="Physics Tutoring" 
            description="Get personalized tutoring in physics concepts, problem-solving techniques, and exam preparation. Perfect for high school and AP physics students."
            icon={<Zap className="text-pursuva-purple w-6 h-6" />}
            color="text-pursuva-purple border-pursuva-purple hover:bg-pursuva-purple hover:text-white transition-colors"
            bgColor="bg-pursuva-purple/10"
            navigateTo="/programs/mathematics"
          />
          
          <CourseCard 
            title="Competition Tutoring" 
            description="USACO, coding olympiads, and other competitive programming contests. Develop advanced algorithm skills and excel in programming competitions."
            icon={<Trophy className="text-pursuva-orange w-6 h-6" />}
            color="text-pursuva-orange border-pursuva-orange hover:bg-pursuva-orange hover:text-white transition-colors"
            bgColor="bg-pursuva-orange/10"
            navigateTo="/programs/test-prep"
          />
        </div>
        
        <div className="mt-12 p-6 bg-white rounded-lg shadow-md text-center border border-gray-100">
          <h3 className="text-2xl font-bold mb-4">Looking for personalized learning?</h3>
          <p className="mb-6 max-w-2xl mx-auto text-gray-700">
            Our tutoring services offer one-on-one guidance in Python, Java, Physics, and Competitive Programming (USACO).
            Contact us to schedule a session with our expert tutors.
          </p>
          <Button 
            variant="outline" 
            className="text-pursuva-blue border-pursuva-blue hover:bg-pursuva-blue hover:text-white transition-colors"
            onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSeODtgerfFvnWfWRJb_ulPg_hJTKpP3qfrkrMRas8Fm3ZFHYg/viewform?usp=preview", "_blank")}
          >
            Schedule Tutoring
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
