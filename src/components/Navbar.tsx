
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-sm py-2" : "bg-transparent py-4"
    )}>
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/802db8de-7a0a-4d81-887c-b28d6e701edb.png" 
            alt="Pursuva Logo" 
            className="h-9 w-auto"
          />
          <span className={cn(
            "ml-2 text-xl font-semibold transition-colors",
            isScrolled ? "text-gray-800" : "text-gray-800"
          )}>
            Pursuva
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/about" className={cn(
            "transition-colors hover:text-pursuva-blue font-medium",
            "text-gray-700"
          )}>
            About
          </Link>
          <Link to="/programs" className={cn(
            "transition-colors hover:text-pursuva-blue font-medium",
            "text-gray-700"
          )}>
            Courses
          </Link>
          <Link to="/impact" className={cn(
            "transition-colors hover:text-pursuva-blue font-medium",
            "text-gray-700"
          )}>
            Approach
          </Link>
          <Link to="/team" className={cn(
            "transition-colors hover:text-pursuva-blue font-medium",
            "text-gray-700"
          )}>
            Team
          </Link>
          <Link to="/contact" className={cn(
            "transition-colors hover:text-pursuva-blue font-medium",
            "text-gray-700"
          )}>
            Contact
          </Link>
          <Button className="bg-pursuva-blue hover:bg-pursuva-blue/90 text-white">
            Enroll Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          className="md:hidden" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="text-gray-800" />
          ) : (
            <Menu className="text-gray-800" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container px-4 mx-auto py-4">
            <nav className="flex flex-col space-y-3">
              <Link to="/about" className="text-gray-700 hover:text-pursuva-blue transition-colors" onClick={toggleMobileMenu}>
                About
              </Link>
              <Link to="/programs" className="text-gray-700 hover:text-pursuva-blue transition-colors" onClick={toggleMobileMenu}>
                Courses
              </Link>
              <Link to="/impact" className="text-gray-700 hover:text-pursuva-blue transition-colors" onClick={toggleMobileMenu}>
                Approach
              </Link>
              <Link to="/team" className="text-gray-700 hover:text-pursuva-blue transition-colors" onClick={toggleMobileMenu}>
                Team
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-pursuva-blue transition-colors" onClick={toggleMobileMenu}>
                Contact
              </Link>
              <Button className="bg-pursuva-blue hover:bg-pursuva-blue/90 text-white w-full">
                Enroll Now
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
