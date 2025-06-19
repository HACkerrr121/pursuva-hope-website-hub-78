
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Code, Clock, BookOpen, CheckCircle, Trophy, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const JavaCourse = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleTutoringClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSeODtgerfFvnWfWRJb_ulPg_hJTKpP3qfrkrMRas8Fm3ZFHYg/viewform?usp=preview", "_blank");
    setIsModalOpen(false);
  };

  const handleTeachingClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSez6GFk-JoWeD_WPGyGXTR2jwdhXV8C8U-dQQJVxu1bnDRZZg/viewform?usp=preview", "_blank");
    setIsModalOpen(false);
  };

  const handleCompetitionRedirect = () => {
    navigate("/programs/competition");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-pursuva-teal/10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Code className="text-pursuva-teal w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Java Development</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Master Java programming through hands-on projects - completely free! Learn object-oriented design and build practical applications with guidance from dedicated high school instructors.
            </p>
          </div>

          {/* Competition Redirect Box */}
          <div className="mb-12">
            <Card className="bg-gradient-to-r from-pursuva-orange/10 to-pursuva-orange/5 border-pursuva-orange/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-pursuva-orange/20 rounded-lg flex items-center justify-center mr-4">
                      <Trophy className="text-pursuva-orange w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Looking for Competitive Programming Preparation?</h3>
                      <p className="text-gray-700">
                        For USACO, coding olympiads, and other competitive programming contests, visit our specialized Competition Tutoring page.
                      </p>
                    </div>
                  </div>
                  <Button 
                    onClick={handleCompetitionRedirect}
                    className="bg-pursuva-orange hover:bg-pursuva-orange/90 flex items-center gap-2"
                  >
                    Competition Tutoring
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Course Details Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="text-pursuva-teal w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Duration</h3>
                <p className="text-gray-700">8 weeks</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <BookOpen className="text-pursuva-teal w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Level</h3>
                <p className="text-gray-700">Beginner to Intermediate</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Code className="text-pursuva-teal w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Cost</h3>
                <p className="text-gray-700">100% Free</p>
              </CardContent>
            </Card>
          </div>

          {/* Course Description */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">What You'll Learn</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-teal w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Java Fundamentals</h4>
                    <p className="text-gray-700">Syntax, variables, loops, and basic programming concepts</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-teal w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Object-Oriented Programming</h4>
                    <p className="text-gray-700">Classes, objects, inheritance, and encapsulation principles</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-teal w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">String Manipulation</h4>
                    <p className="text-gray-700">Advanced string processing and text manipulation techniques</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-teal w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">GUI Development</h4>
                    <p className="text-gray-700">Creating interactive graphical user interfaces with Java Swing</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Course Projects</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">String Toolbox Lab</h4>
                    <p className="text-gray-700">Master string manipulation with hands-on exercises covering parsing, formatting, and text processing algorithms.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Calculator Project</h4>
                    <p className="text-gray-700">Build a fully functional calculator application implementing mathematical operations and user input handling.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Graphical Paint Application</h4>
                    <p className="text-gray-700">Create a Microsoft Paint-style drawing application with tools for shapes, colors, and image manipulation.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Enrollment Section */}
          <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4">Ready to Master Java Development?</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Join our free 8-week Java development course and build three exciting projects while mastering programming fundamentals!
            </p>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-pursuva-teal hover:bg-pursuva-teal/90">
                  Enroll Now - Free!
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Choose Your Learning Format</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <Button 
                    onClick={handleTutoringClick}
                    className="w-full bg-pursuva-teal hover:bg-pursuva-teal/90"
                  >
                    One-on-One Tutoring
                  </Button>
                  <Button 
                    onClick={handleTeachingClick}
                    variant="outline" 
                    className="w-full border-pursuva-teal text-pursuva-teal hover:bg-pursuva-teal hover:text-white"
                  >
                    Group Classes
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default JavaCourse;
