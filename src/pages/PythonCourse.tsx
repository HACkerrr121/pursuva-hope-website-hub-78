
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Clock, Users, BookOpen, CheckCircle } from "lucide-react";

const PythonCourse = () => {
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
              Master Python programming from fundamentals to advanced applications. Build real-world projects and develop the skills needed for modern software development.
            </p>
          </div>

          {/* Course Details Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="text-pursuva-blue w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Duration</h3>
                <p className="text-gray-700">12 weeks</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="text-pursuva-blue w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Class Size</h3>
                <p className="text-gray-700">Max 15 students</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <BookOpen className="text-pursuva-blue w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Level</h3>
                <p className="text-gray-700">Beginner to Intermediate</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Code className="text-pursuva-blue w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Projects</h3>
                <p className="text-gray-700">5+ hands-on projects</p>
              </CardContent>
            </Card>
          </div>

          {/* Course Description */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">What You'll Learn</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-blue w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Python Fundamentals</h4>
                    <p className="text-gray-700">Variables, data types, control structures, and functions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-blue w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Object-Oriented Programming</h4>
                    <p className="text-gray-700">Classes, inheritance, polymorphism, and encapsulation</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-blue w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Data Structures & Algorithms</h4>
                    <p className="text-gray-700">Lists, dictionaries, sets, and algorithm optimization</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-blue w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Web Development</h4>
                    <p className="text-gray-700">Flask/Django basics and API development</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-pursuva-blue w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Data Analysis</h4>
                    <p className="text-gray-700">NumPy, Pandas, and data visualization with Matplotlib</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Course Projects</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Calculator Application</h4>
                    <p className="text-gray-700">Build a GUI calculator using Tkinter with advanced mathematical functions.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Web Scraper</h4>
                    <p className="text-gray-700">Create a web scraping tool to collect and analyze data from websites.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Personal Finance Tracker</h4>
                    <p className="text-gray-700">Develop a complete application to track expenses and generate financial reports.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Enrollment Section */}
          <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Learning Python?</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Join our comprehensive Python programming course and gain the skills you need to build amazing applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-pursuva-blue hover:bg-pursuva-blue/90">
                Enroll Now
              </Button>
              <Button variant="outline" className="border-pursuva-blue text-pursuva-blue hover:bg-pursuva-blue hover:text-white">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PythonCourse;
