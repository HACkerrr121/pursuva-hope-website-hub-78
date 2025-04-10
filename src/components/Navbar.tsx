
import { useState, useEffect } from 'react';
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
      isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
    )}>
      <div className="container px-4 mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img 
            src="/lovable-uploads/4038fe81-8fa7-47c8-9461-c7da735e5ca2.png" 
            alt="Pursuva Logo" 
            className="h-10 w-auto"
          />
          <span className={cn(
            "ml-2 text-xl font-semibold transition-colors",
            isScrolled ? "text-gray-800" : "text-white"
          )}>
            Pursuva
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className={cn(
            "transition-colors hover:text-pursuva-blue font-medium",
            isScrolled ? "text-gray-700" : "text-white"
          )}>
            About
          </a>
          <a href="#programs" className={cn(
            "transition-colors hover:text-pursuva-blue font-medium",
            isScrolled ? "text-gray-700" : "text-white"
          )}>
            Programs
          </a>
          <a href="#impact" className={cn(
            "transition-colors hover:text-pursuva-blue font-medium",
            isScrolled ? "text-gray-700" : "text-white"
          )}>
            Impact
          </a>
          <a href="#team" className={cn(
            "transition-colors hover:text-pursuva-blue font-medium",
            isScrolled ? "text-gray-700" : "text-white"
          )}>
            Team
          </a>
          <a href="#contact" className={cn(
            "transition-colors hover:text-pursuva-blue font-medium",
            isScrolled ? "text-gray-700" : "text-white"
          )}>
            Contact
          </a>
          <Button className="bg-gradient hover:opacity-90 transition-opacity">
            Donate
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
            <X className={isScrolled ? "text-gray-800" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-gray-800" : "text-white"} />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container px-4 mx-auto py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-700 hover:text-pursuva-blue transition-colors" onClick={toggleMobileMenu}>
                About
              </a>
              <a href="#programs" className="text-gray-700 hover:text-pursuva-blue transition-colors" onClick={toggleMobileMenu}>
                Programs
              </a>
              <a href="#impact" className="text-gray-700 hover:text-pursuva-blue transition-colors" onClick={toggleMobileMenu}>
                Impact
              </a>
              <a href="#team" className="text-gray-700 hover:text-pursuva-blue transition-colors" onClick={toggleMobileMenu}>
                Team
              </a>
              <a href="#contact" className="text-gray-700 hover:text-pursuva-blue transition-colors" onClick={toggleMobileMenu}>
                Contact
              </a>
              <Button className="bg-gradient hover:opacity-90 transition-opacity w-full">
                Donate
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
