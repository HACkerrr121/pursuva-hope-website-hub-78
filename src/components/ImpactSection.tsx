
import { Card, CardContent } from "@/components/ui/card";
import { Code, BookOpen, GraduationCap, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  iconBg 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  iconBg: string;
}) => {
  return (
    <Card className="border-none shadow-md overflow-hidden h-full">
      <CardContent className="p-6">
        <div className="flex items-start mb-4">
          <div className={cn("w-12 h-12 rounded-md flex items-center justify-center", iconBg)}>
            {icon}
          </div>
          <h3 className="text-xl font-semibold ml-4 pt-2">{title}</h3>
        </div>
        <p className="text-gray-700">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

const ImpactSection = () => {
  return (
    <section id="impact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
          <div className="w-20 h-1 bg-gradient mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We combine innovative teaching methods with personalized attention to ensure every student succeeds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <FeatureCard
            title="Hands-On Learning"
            description="Our courses emphasize practical application through projects and exercises that reinforce concepts and build real-world skills."
            icon={<Code className="text-white w-6 h-6" />}
            iconBg="bg-pursuva-blue"
          />
          
          <FeatureCard
            title="Expert Instructors"
            description="Learn from qualified high schoolers who bring passion and fresh perspectives to their teaching, making complex concepts accessible and engaging."
            icon={<GraduationCap className="text-white w-6 h-6" />}
            iconBg="bg-pursuva-teal"
          />
          
          <FeatureCard
            title="Personalized Approach"
            description="Our tutoring sessions are tailored to individual learning styles and academic goals, providing targeted support where it's needed most."
            icon={<BookOpen className="text-white w-6 h-6" />}
            iconBg="bg-pursuva-purple"
          />
          
          <FeatureCard
            title="Comprehensive Curriculum"
            description="From programming fundamentals to advanced mathematics, our curriculum is designed to build a strong foundation and develop critical thinking skills."
            icon={<Brain className="text-white w-6 h-6" />}
            iconBg="bg-pursuva-orange"
          />
        </div>

        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
          <div className="lg:flex">
            <div className="lg:w-1/2 flex items-center justify-center p-8">
              <img 
                src="/lovable-uploads/3b475287-c758-4331-9fd2-9d99007620f8.png" 
                alt="Pursuva Logo" 
                className="h-72 w-auto"
              />
            </div>
            <div className="lg:w-1/2 p-6">
              <h3 className="text-2xl font-bold mb-4">Student Success Stories</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="italic text-gray-700 mb-2">
                    "The Python course at Pursuva made programming accessible and fun. The instructors took time to explain complex concepts in simple terms, and the hands-on projects helped me build confidence in my coding abilities."
                  </p>
                  <p className="font-medium text-sm">- Alex, Python Course Student</p>
                </div>
                
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="italic text-gray-700 mb-2">
                    "My SAT scores improved significantly after just one month of tutoring with Pursuva. The personalized study plan and practice tests were exactly what I needed to succeed."
                  </p>
                  <p className="font-medium text-sm">- Morgan, SAT Prep Student</p>
                </div>
                
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="italic text-gray-700 mb-2">
                    "The Coding Olympiad preparation was rigorous but incredibly rewarding. My tutor's guidance helped me develop advanced algorithm skills and I placed in the top 10 in my regional competition."
                  </p>
                  <p className="font-medium text-sm">- Jamie, Coding Olympiad Participant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
