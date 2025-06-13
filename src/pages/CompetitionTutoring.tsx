
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Trophy, Clock, Users, BookOpen, CheckCircle } from "lucide-react";
import { useState } from "react";

const CompetitionTutoring = () => {
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
              <Trophy className="text-pursuva-orange w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Competition Tutoring</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Excel in competitive programming with expert guidance. From USACO to coding olympiads, develop advanced algorithm skills and problem-solving techniques.
            </p>
          </div>

          {/* Course Details Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="text-pursuva-orange w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Duration</h3>
                <p className="text-gray-700">Flexible</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="text-pursuva-orange w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Format</h3>
                <p className="text-gray-700">One-on-one</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <BookOpen className="text-pursuva-orange w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Level</h3>
                <p className="text-gray-700">All levels</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Trophy className="text-pursuva-orange w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Competitions</h3>
                <p className="text-gray-700">USACO & more</p>
              </CardContent>
            </Card>
          </div>

          {/* Course Description */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">What You'll Learn</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-orange w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Advanced Algorithms</h4>
                    <p className="text-gray-700">Dynamic programming, graph algorithms, and advanced data structures</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-orange w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">USACO Preparation</h4>
                    <p className="text-gray-700">Targeted training for Bronze, Silver, Gold, and Platinum divisions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-orange w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Problem-Solving Strategies</h4>
                    <p className="text-gray-700">Systematic approaches to competitive programming challenges</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-orange w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Contest Simulation</h4>
                    <p className="text-gray-700">Timed practice sessions mimicking real competition environments</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-orange w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Code Optimization</h4>
                    <p className="text-gray-700">Writing efficient, fast code for competitive programming</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Competition Focus</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">USACO Training</h4>
                    <p className="text-gray-700">Comprehensive preparation for USA Computing Olympiad with division-specific training.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">International Olympiads</h4>
                    <p className="text-gray-700">Training for IOI, ICPC, and other international competitive programming contests.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Algorithm Mastery</h4>
                    <p className="text-gray-700">Deep understanding of advanced algorithms and their applications in competitions.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Enrollment Section */}
          <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4">Ready to Compete at the Highest Level?</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Join our competitive programming tutoring and excel in contests like USACO and coding olympiads.
            </p>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-pursuva-orange hover:bg-pursuva-orange/90">
                  Start Training
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

export default CompetitionTutoring;
