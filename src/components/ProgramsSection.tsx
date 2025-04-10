
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Code, GraduationCap, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

const CourseCard = ({ title, description, icon, color, bgColor }: CourseCardProps) => {
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
        <Button variant="ghost" className={cn(
          "mt-auto border",
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
    <section id="programs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Courses & Tutoring</h2>
          <div className="w-20 h-1 bg-gradient mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We offer a variety of courses and tutoring services designed to help students excel in technology and academics.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CourseCard 
            title="Python Programming" 
            description="Learn the fundamentals of Python programming, data structures, and algorithms. Perfect for beginners and intermediate coders looking to build practical applications."
            icon={<Code className="text-pursuva-blue w-6 h-6" />}
            color="text-pursuva-blue border-pursuva-blue hover:bg-pursuva-blue hover:text-white transition-colors"
            bgColor="bg-pursuva-blue/10"
          />
          
          <CourseCard 
            title="Java Development" 
            description="Master Java programming fundamentals, object-oriented design, and application development. Build desktop apps and learn software engineering principles."
            icon={<Code className="text-pursuva-teal w-6 h-6" />}
            color="text-pursuva-teal border-pursuva-teal hover:bg-pursuva-teal hover:text-white transition-colors"
            bgColor="bg-pursuva-teal/10"
          />
          
          <CourseCard 
            title="Mathematics" 
            description="Comprehensive math courses covering algebra, calculus, statistics, and more. Develop strong problem-solving skills and prepare for advanced studies."
            icon={<Calculator className="text-pursuva-purple w-6 h-6" />}
            color="text-pursuva-purple border-pursuva-purple hover:bg-pursuva-purple hover:text-white transition-colors"
            bgColor="bg-pursuva-purple/10"
          />
          
          <CourseCard 
            title="Test Preparation" 
            description="SAT/ACT prep, coding olympiad training, and physics tutoring to help students achieve their academic goals and excel in competitive exams."
            icon={<GraduationCap className="text-pursuva-orange w-6 h-6" />}
            color="text-pursuva-orange border-pursuva-orange hover:bg-pursuva-orange hover:text-white transition-colors"
            bgColor="bg-pursuva-orange/10"
          />
        </div>
        
        <div className="mt-12 p-6 bg-white rounded-lg shadow-md text-center border border-gray-100">
          <h3 className="text-2xl font-bold mb-4">Looking for personalized learning?</h3>
          <p className="mb-6 max-w-2xl mx-auto text-gray-700">
            Our tutoring services offer one-on-one guidance in Python, Java, SAT/ACT preparation, Coding Olympiads, and Physics.
            Contact us to schedule a session with our expert tutors.
          </p>
          <Button variant="outline" className="text-pursuva-blue border-pursuva-blue hover:bg-pursuva-blue hover:text-white transition-colors">
            Schedule Tutoring
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
