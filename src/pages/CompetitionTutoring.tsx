
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Trophy, Clock, Users, BookOpen, CheckCircle, Code, Calculator, Atom } from "lucide-react";
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
              Excel in academic competitions with expert guidance. From USACO and programming olympiads to AMC/AIME math competitions and Physics Olympiad preparation.
            </p>
          </div>

          {/* Competition Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Code className="text-pursuva-orange w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Programming</h3>
                <p className="text-gray-700 mb-4">USACO, IOI, ICPC, and other coding competitions</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• USACO Bronze to Platinum</li>
                  <li>• International Olympiad in Informatics</li>
                  <li>• ACM-ICPC Programming Contest</li>
                  <li>• Google Code Jam & Kickstart</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Calculator className="text-pursuva-orange w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Mathematics</h3>
                <p className="text-gray-700 mb-4">AMC, AIME, USAMO, and international math olympiads</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• AMC 8, AMC 10, AMC 12</li>
                  <li>• AIME (American Invitational Math Exam)</li>
                  <li>• USAMO/USAJMO</li>
                  <li>• International Mathematical Olympiad</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Atom className="text-pursuva-orange w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Physics</h3>
                <p className="text-gray-700 mb-4">F=ma, Physics Olympiad, and international competitions</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• F=ma Exam (Mechanics)</li>
                  <li>• USPhO (US Physics Olympiad)</li>
                  <li>• International Physics Olympiad</li>
                  <li>• Physics Bowl</li>
                </ul>
              </CardContent>
            </Card>
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
                <p className="text-gray-700">All major contests</p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Training Sections */}
          <div className="space-y-12 mb-12">
            {/* Programming Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center">Programming Competition Training</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">What You'll Learn</h3>
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
                        <h4 className="font-semibold">Contest Simulation</h4>
                        <p className="text-gray-700">Timed practice sessions mimicking real competition environments</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Programming Competitions</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-bold mb-2">USACO Training</h4>
                        <p className="text-gray-700">Comprehensive preparation for USA Computing Olympiad with division-specific training.</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-bold mb-2">International Olympiads</h4>
                        <p className="text-gray-700">Training for IOI, ICPC, and other international competitive programming contests.</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            {/* Mathematics Section */}
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-center">Mathematics Competition Training</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">What You'll Master</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-pursuva-orange w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Contest Problem Solving</h4>
                        <p className="text-gray-700">Advanced techniques for AMC, AIME, and olympiad-style problems</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="text-pursuva-orange w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Proof Writing</h4>
                        <p className="text-gray-700">Rigorous mathematical proofs for USAMO and international competitions</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="text-pursuva-orange w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Advanced Topics</h4>
                        <p className="text-gray-700">Number theory, combinatorics, geometry, and algebra at competition level</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Math Competitions</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-bold mb-2">AMC Series</h4>
                        <p className="text-gray-700">AMC 8/10/12 preparation with focus on problem-solving strategies and time management.</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-bold mb-2">AIME & Olympiads</h4>
                        <p className="text-gray-700">Advanced preparation for AIME, USAMO/USAJMO, and international math olympiads.</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            {/* Physics Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center">Physics Competition Training</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">What You'll Develop</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-pursuva-orange w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Advanced Mechanics</h4>
                        <p className="text-gray-700">Classical mechanics at the level required for F=ma and Physics Olympiad</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="text-pursuva-orange w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Electromagnetism & Waves</h4>
                        <p className="text-gray-700">Advanced E&M concepts and wave physics for olympiad competitions</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="text-pursuva-orange w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Modern Physics</h4>
                        <p className="text-gray-700">Quantum mechanics, relativity, and thermodynamics for advanced competitions</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Physics Competitions</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-bold mb-2">F=ma & USPhO</h4>
                        <p className="text-gray-700">Targeted preparation for the F=ma qualifying exam and US Physics Olympiad.</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-bold mb-2">International Physics Olympiad</h4>
                        <p className="text-gray-700">Advanced training for IPhO with experimental and theoretical components.</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enrollment Section */}
          <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4">Ready to Compete at the Highest Level?</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Join our competition tutoring program and excel in programming, mathematics, and physics competitions.
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
