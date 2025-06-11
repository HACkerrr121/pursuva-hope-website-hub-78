import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, BookOpen, Users, GraduationCap } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTutoringClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSeODtgerfFvnWfWRJb_ulPg_hJTKpP3qfrkrMRas8Fm3ZFHYg/viewform?usp=preview", "_blank");
    setIsModalOpen(false);
  };

  const handleTeachingClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSez6GFk-JoWeD_WPGyGXTR2jwdhXV8C8U-dQQJVxu1bnDRZZg/viewform?usp=preview", "_blank");
    setIsModalOpen(false);
  };

  const stats = [
    {
      label: "Free Courses",
      number: "4",
      icon: <BookOpen className="text-pursuva-blue w-8 h-8" />,
    },
    {
      label: "Expert Tutors",
      number: "5+",
      icon: <Users className="text-pursuva-purple w-8 h-8" />,
    },
    {
      label: "Students Impacted",
      number: "100+",
      icon: <GraduationCap className="text-pursuva-teal w-8 h-8" />,
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pursuva-blue/20 to-pursuva-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pursuva-teal/20 to-pursuva-orange/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-pursuva-blue via-pursuva-purple to-pursuva-teal bg-clip-text text-transparent leading-tight">
            Empowering Education for All
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Free programming courses, tutoring, and test preparation led by passionate high school students. Quality education shouldn't cost anything.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-gradient text-white hover:opacity-90 transition-opacity">
                  Enroll Now - Free!
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Choose Your Learning Format</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <Button 
                    onClick={handleTutoringClick}
                    className="w-full bg-pursuva-blue hover:bg-pursuva-blue/90"
                  >
                    One-on-One Tutoring
                  </Button>
                  <Button 
                    onClick={handleTeachingClick}
                    variant="outline" 
                    className="w-full border-pursuva-blue text-pursuva-blue hover:bg-pursuva-blue hover:text-white"
                  >
                    Group Classes
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-pursuva-blue text-pursuva-blue hover:bg-pursuva-blue hover:text-white transition-colors"
              onClick={() => scrollToSection('programs')}
            >
              Explore Courses
            </Button>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                <div className="flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
