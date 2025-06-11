
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Code, Clock, BookOpen, CheckCircle } from "lucide-react";
import { useState } from "react";

const PythonCourse = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTutoringClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSeODtgerfFvnWfWRJb_ulPg_hJTKpP3qfrkrMRas8Fm3ZFHYg/viewform?usp=preview", "_blank");
    setIsModalOpen(false);
  };

  const handleTeachingClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSez6GFk-JoWeD_WPGyGXTR2jwdhXV8C8U-dQQJVxu1bnDRZZg/viewform?usp=preview", "_blank");
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-pursuva-blue/10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Code className="text-pursuva-blue w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Python Programming</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Learn Python programming fundamentals completely free! Our high school instructors will guide you through essential concepts and hands-on projects.
            </p>
          </div>

          {/* Course Details Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="text-pursuva-blue w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Duration</h3>
                <p className="text-gray-700">10 weeks</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <BookOpen className="text-pursuva-blue w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Level</h3>
                <p className="text-gray-700">Beginner Friendly</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Code className="text-pursuva-blue w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Cost</h3>
                <p className="text-gray-700">100% Free</p>
              </CardContent>
            </Card>
          </div>

          {/* Course Description */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Course Curriculum</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-blue w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Input / Output</h4>
                    <p className="text-gray-700">Printing to console and getting user input</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-blue w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Variable Types & Arithmetic</h4>
                    <p className="text-gray-700">Assignment, int, float, bool, printing variables, casting</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-blue w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">If Conditions and Loops</h4>
                    <p className="text-gray-700">If statements, if-else conditions, and control flow</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-blue w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Lists & For Loops</h4>
                    <p className="text-gray-700">Working with lists and iterating through them using for loops</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-blue w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Functions & Modules</h4>
                    <p className="text-gray-700">Creating functions and using modules like NumPy and Matplotlib</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-blue w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Project Work</h4>
                    <p className="text-gray-700">Hands-on project development and final presentations</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Course?</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Completely Free</h4>
                    <p className="text-gray-700">High-quality programming education at no cost - we believe learning should be accessible to everyone.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Peer Learning</h4>
                    <p className="text-gray-700">Learn from dedicated high school students who understand the challenges of learning programming.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Hands-on Projects</h4>
                    <p className="text-gray-700">Build real projects and present your work to develop both coding and presentation skills.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Enrollment Section */}
          <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Learning Python?</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Join our free Python programming course and start your coding journey with us today!
            </p>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-pursuva-blue hover:bg-pursuva-blue/90">
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
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PythonCourse;
