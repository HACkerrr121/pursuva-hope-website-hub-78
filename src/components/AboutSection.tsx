
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Pursuva</h2>
          <div className="w-20 h-1 bg-gradient mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Pursuva is an educational non-profit organization dedicated to making quality education accessible to all through courses and personalized tutoring.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-pursuva-teal/10 rounded-md flex items-center justify-center group-hover:bg-pursuva-teal/20 transition-colors">
                  <BookOpen className="text-pursuva-teal w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To provide high-quality educational resources and mentorship in technology and academics, making learning accessible to students of all backgrounds.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-pursuva-blue/10 rounded-md flex items-center justify-center group-hover:bg-pursuva-blue/20 transition-colors">
                  <GraduationCap className="text-pursuva-blue w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-gray-700">
                A world where every student has the support and resources they need to excel in STEM fields and pursue their educational goals without barriers.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-pursuva-purple/10 rounded-md flex items-center justify-center group-hover:bg-pursuva-purple/20 transition-colors">
                  <Users className="text-pursuva-purple w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Our Values</h3>
              <p className="text-gray-700">
                Accessibility, quality education, mentorship, innovation in teaching methodologies, and building a supportive learning community.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 bg-gray-50 p-6 rounded-lg shadow-md">
          <div className="lg:flex items-center gap-8">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Student using laptop" 
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Our Story</h3>
              <p className="text-gray-700 mb-4">
                Founded by passionate educators and tech professionals, Pursuva began with a simple goal: to bridge the gap between traditional education and the fast-evolving skills needed in today's technology-driven world.
              </p>
              <p className="text-gray-700 mb-4">
                Our name "Pursuva" represents our commitment to helping students pursue their educational goals.
              </p>
              <p className="text-gray-700">
                Today, we offer comprehensive courses in Python, Java, and Mathematics, along with specialized tutoring in programming, SAT/ACT preparation, coding competitions, and Physics. Our curriculum is continuously updated to reflect industry standards and academic requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
