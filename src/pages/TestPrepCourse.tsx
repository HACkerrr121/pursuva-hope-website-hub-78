
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { GraduationCap, Clock, Users, BookOpen, CheckCircle } from "lucide-react";
import { useState } from "react";

const TestPrepCourse = () => {
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
            <div className="w-16 h-16 bg-pursuva-orange/10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="text-pursuva-orange w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Test Preparation</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Excel in standardized tests and competitive exams. Get personalized coaching for SAT/ACT, coding olympiads, and physics competitions.
            </p>
          </div>

          {/* Course Details Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="text-pursuva-orange w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Duration</h3>
                <p className="text-gray-700">8-16 weeks</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="text-pursuva-orange w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Format</h3>
                <p className="text-gray-700">1-on-1 & Groups</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <BookOpen className="text-pursuva-orange w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Tests</h3>
                <p className="text-gray-700">Multiple exams</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <GraduationCap className="text-pursuva-orange w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Success Rate</h3>
                <p className="text-gray-700">95%+ improvement</p>
              </CardContent>
            </Card>
          </div>

          {/* Course Description */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">What We Cover</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-orange w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">SAT/ACT Preparation</h4>
                    <p className="text-gray-700">Comprehensive prep for math, reading, writing, and science sections</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-orange w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Coding Olympiads</h4>
                    <p className="text-gray-700">USACO, IOI, and other competitive programming contests</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-orange w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Physics Competitions</h4>
                    <p className="text-gray-700">Physics olympiad and advanced physics problem solving</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-orange w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">AP Course Preparation</h4>
                    <p className="text-gray-700">Advanced Placement exams in various subjects</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-orange w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Test Strategies</h4>
                    <p className="text-gray-700">Time management, question analysis, and optimal approaches</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Diagnostic Assessment</h4>
                    <p className="text-gray-700">Identify strengths and weaknesses with comprehensive initial testing.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Personalized Study Plan</h4>
                    <p className="text-gray-700">Custom curriculum tailored to your specific needs and timeline.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Practice & Review</h4>
                    <p className="text-gray-700">Regular practice tests with detailed analysis and improvement strategies.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Enrollment Section */}
          <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4">Ready to Ace Your Tests?</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Join our test preparation program and achieve your target scores with expert guidance and proven strategies.
            </p>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-pursuva-orange hover:bg-pursuva-orange/90">
                  Enroll Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Choose Your Learning Format</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <Button 
                    onClick={handleTutoringClick}
                    className="w-full bg-pursuva-orange hover:bg-pursuva-orange/90"
                  >
                    One-on-One Tutoring
                  </Button>
                  <Button 
                    onClick={handleTeachingClick}
                    variant="outline" 
                    className="w-full border-pursuva-orange text-pursuva-orange hover:bg-pursuva-orange hover:text-white"
                  >
                    Group Teaching
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

export default TestPrepCourse;
