
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Code, Clock, BookOpen, CheckCircle } from "lucide-react";
import { useState } from "react";

const JavaCourse = () => {
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
            <div className="w-16 h-16 bg-pursuva-teal/10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Code className="text-pursuva-teal w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Java Development</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Learn Java programming from the ground up - completely free! Master object-oriented design and build robust applications with guidance from dedicated high school instructors.
            </p>
          </div>

          {/* Course Details Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="text-pursuva-teal w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Duration</h3>
                <p className="text-gray-700">16 weeks</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <BookOpen className="text-pursuva-teal w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Level</h3>
                <p className="text-gray-700">Beginner to Advanced</p>
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
                    <p className="text-gray-700">Advanced OOP concepts, design patterns, and SOLID principles</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-teal w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Spring Framework</h4>
                    <p className="text-gray-700">Spring Boot, dependency injection, and RESTful APIs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-teal w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Database Integration</h4>
                    <p className="text-gray-700">JDBC, JPA/Hibernate, and database design</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-teal w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Testing & Deployment</h4>
                    <p className="text-gray-700">JUnit testing, Maven/Gradle, and application deployment</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Course Projects</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Banking System</h4>
                    <p className="text-gray-700">Build a complete banking application with account management and transaction processing.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">E-commerce Platform</h4>
                    <p className="text-gray-700">Develop a full-stack e-commerce solution with Spring Boot and database integration.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Task Management System</h4>
                    <p className="text-gray-700">Create a collaborative project management tool with user authentication and real-time updates.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Enrollment Section */}
          <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4">Ready to Master Java Development?</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Join our free comprehensive Java development course and learn to build enterprise-grade applications with us!
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
