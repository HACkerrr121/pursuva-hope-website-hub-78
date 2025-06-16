import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Zap, Clock, Users, BookOpen, CheckCircle, Trophy, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PhysicsTutoring = () => {
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
            <div className="w-16 h-16 bg-pursuva-purple/10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Zap className="text-pursuva-purple w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Physics Tutoring</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Master physics concepts with personalized tutoring. From mechanics to electromagnetism, we'll help you excel in high school and AP physics.
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
                      <h3 className="font-bold text-lg mb-1">Looking for Physics Competition Preparation?</h3>
                      <p className="text-gray-700">
                        For F=ma, Physics Olympiad, and other physics competitions, visit our specialized Competition Tutoring page.
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
                <Clock className="text-pursuva-purple w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Duration</h3>
                <p className="text-gray-700">Flexible</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="text-pursuva-purple w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Format</h3>
                <p className="text-gray-700">One-on-one</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <BookOpen className="text-pursuva-purple w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Level</h3>
                <p className="text-gray-700">High School & AP</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Zap className="text-pursuva-purple w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Topics</h3>
                <p className="text-gray-700">All physics areas</p>
              </CardContent>
            </Card>
          </div>

          {/* Course Description */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">What You'll Learn</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-purple w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Mechanics</h4>
                    <p className="text-gray-700">Motion, forces, energy, momentum, and rotational dynamics</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-purple w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Electricity & Magnetism</h4>
                    <p className="text-gray-700">Electric fields, circuits, magnetic fields, and electromagnetic induction</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-purple w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Waves & Optics</h4>
                    <p className="text-gray-700">Sound waves, light, interference, and geometric optics</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-purple w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Thermodynamics</h4>
                    <p className="text-gray-700">Heat, temperature, gas laws, and thermal processes</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-purple w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Problem Solving</h4>
                    <p className="text-gray-700">Analytical thinking and physics problem-solving strategies</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Tutoring Focus</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">AP Physics Prep</h4>
                    <p className="text-gray-700">Comprehensive preparation for AP Physics 1, 2, C: Mechanics, and C: Electricity & Magnetism.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Conceptual Understanding</h4>
                    <p className="text-gray-700">Deep dive into physics concepts with visual explanations and real-world applications.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Problem-Solving Skills</h4>
                    <p className="text-gray-700">Step-by-step approach to tackling complex physics problems and exam questions.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Enrollment Section */}
          <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4">Ready to Master Physics?</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Get personalized physics tutoring from qualified high school tutors who understand your challenges.
            </p>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-pursuva-purple hover:bg-pursuva-purple/90">
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
                    className="w-full bg-pursuva-purple hover:bg-pursuva-purple/90"
                  >
                    One-on-One Tutoring
                  </Button>
                  <Button 
                    onClick={handleTeachingClick}
                    variant="outline" 
                    className="w-full border-pursuva-purple text-pursuva-purple hover:bg-pursuva-purple hover:text-white"
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

export default PhysicsTutoring;
