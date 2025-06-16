
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calculator, Clock, Users, BookOpen, CheckCircle, Trophy, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MathTutoring = () => {
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
            <div className="w-16 h-16 bg-pursuva-green/10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Calculator className="text-pursuva-green w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Math Tutoring</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Master mathematical concepts from algebra to calculus. Build strong problem-solving skills and prepare for advanced studies in STEM fields.
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
                      <h3 className="font-bold text-lg mb-1">Looking for Math Competition Preparation?</h3>
                      <p className="text-gray-700">
                        For AMC, AIME, Math Olympiad, and other math competitions, visit our specialized Competition Tutoring page.
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="text-pursuva-green w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Duration</h3>
                <p className="text-gray-700">Flexible</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="text-pursuva-green w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Format</h3>
                <p className="text-gray-700">One-on-one</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <BookOpen className="text-pursuva-green w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Level</h3>
                <p className="text-gray-700">All levels</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Calculator className="text-pursuva-green w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Topics</h3>
                <p className="text-gray-700">10+ subject areas</p>
              </CardContent>
            </Card>
          </div>

          {/* Course Description */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">What You'll Learn</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-green w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Algebra & Pre-Calculus</h4>
                    <p className="text-gray-700">Linear equations, quadratics, polynomials, and functions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-green w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Calculus</h4>
                    <p className="text-gray-700">Limits, derivatives, integrals, and applications</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-green w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Statistics & Probability</h4>
                    <p className="text-gray-700">Data analysis, distributions, and statistical inference</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-green w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Geometry & Trigonometry</h4>
                    <p className="text-gray-700">Shapes, angles, trigonometric functions, and proofs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-green w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Problem Solving</h4>
                    <p className="text-gray-700">Critical thinking and mathematical reasoning skills</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Tutoring Applications</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">SAT/ACT Math Prep</h4>
                    <p className="text-gray-700">Targeted preparation for standardized test mathematics sections.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">AP Mathematics</h4>
                    <p className="text-gray-700">Advanced Placement Calculus AB/BC and Statistics preparation.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Competition Math</h4>
                    <p className="text-gray-700">Training for math competitions like AMC, AIME, and USAMO.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Enrollment Section */}
          <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4">Ready to Excel in Mathematics?</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Get personalized math tutoring from qualified high school tutors who make complex concepts accessible.
            </p>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-pursuva-green hover:bg-pursuva-green/90">
                  Start Tutoring
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Choose Your Learning Format</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <Button 
                    onClick={handleTutoringClick}
                    className="w-full bg-pursuva-green hover:bg-pursuva-green/90"
                  >
                    One-on-One Tutoring
                  </Button>
                  <Button 
                    onClick={handleTeachingClick}
                    variant="outline" 
                    className="w-full border-pursuva-green text-pursuva-green hover:bg-pursuva-green hover:text-white"
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

export default MathTutoring;
