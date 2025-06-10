
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-800 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/802db8de-7a0a-4d81-887c-b28d6e701edb.png" 
                alt="Pursuva Logo" 
                className="h-10 w-auto mr-2"
              />
              <span className="text-xl font-bold">Pursuva</span>
            </div>
            <p className="text-gray-600 mb-4">
              An educational non-profit providing quality courses and tutoring in programming, mathematics, and test preparation.
            </p>
            <div className="mb-4">
              <p className="text-gray-600">
                Email: <a href="mailto:pursuvaedu@gmail.com" className="text-pursuva-blue hover:underline">pursuvaedu@gmail.com</a>
              </p>
            </div>
            <div className="flex space-x-3">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform) => (
                <a 
                  key={platform} 
                  href={`#${platform}`} 
                  className="w-8 h-8 rounded-md bg-gray-200 flex items-center justify-center hover:bg-pursuva-blue hover:text-white transition-colors"
                  aria-label={`Follow us on ${platform}`}
                >
                  <img 
                    src={`https://api.iconify.design/lucide/${platform}.svg`} 
                    alt={platform} 
                    width="16" 
                    height="16" 
                    className="text-current"
                  />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/programs/python" className="text-gray-600 hover:text-pursuva-blue transition-colors">
                  Python Programming
                </Link>
              </li>
              <li>
                <Link to="/programs/java" className="text-gray-600 hover:text-pursuva-blue transition-colors">
                  Java Development
                </Link>
              </li>
              <li>
                <Link to="/programs/mathematics" className="text-gray-600 hover:text-pursuva-blue transition-colors">
                  Mathematics
                </Link>
              </li>
              <li>
                <Link to="/programs/test-prep" className="text-gray-600 hover:text-pursuva-blue transition-colors">
                  Test Preparation
                </Link>
              </li>
              <li>
                <a href="#data-structures" className="text-gray-600 hover:text-pursuva-blue transition-colors">
                  Data Structures
                </a>
              </li>
              <li>
                <a href="#algorithms" className="text-gray-600 hover:text-pursuva-blue transition-colors">
                  Algorithms
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Tutoring</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeODtgerfFvnWfWRJb_ulPg_hJTKpP3qfrkrMRas8Fm3ZFHYg/viewform?usp=preview" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pursuva-blue transition-colors"
                >
                  Python Tutoring
                </a>
              </li>
              <li>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeODtgerfFvnWfWRJb_ulPg_hJTKpP3qfrkrMRas8Fm3ZFHYg/viewform?usp=preview" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pursuva-blue transition-colors"
                >
                  Java Tutoring
                </a>
              </li>
              <li>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeODtgerfFvnWfWRJb_ulPg_hJTKpP3qfrkrMRas8Fm3ZFHYg/viewform?usp=preview" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pursuva-blue transition-colors"
                >
                  SAT/ACT Prep
                </a>
              </li>
              <li>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeODtgerfFvnWfWRJb_ulPg_hJTKpP3qfrkrMRas8Fm3ZFHYg/viewform?usp=preview" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pursuva-blue transition-colors"
                >
                  Coding Olympiads
                </a>
              </li>
              <li>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeODtgerfFvnWfWRJb_ulPg_hJTKpP3qfrkrMRas8Fm3ZFHYg/viewform?usp=preview" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pursuva-blue transition-colors"
                >
                  Physics
                </a>
              </li>
              <li>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeODtgerfFvnWfWRJb_ulPg_hJTKpP3qfrkrMRas8Fm3ZFHYg/viewform?usp=preview" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pursuva-blue transition-colors"
                >
                  AP Courses
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-pursuva-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-600 hover:text-pursuva-blue transition-colors">
                  All Programs
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-600 hover:text-pursuva-blue transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-gray-600 hover:text-pursuva-blue transition-colors">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-pursuva-blue transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#faqs" className="text-gray-600 hover:text-pursuva-blue transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-200 text-center text-gray-600 text-sm">
          <p>© {currentYear} Pursuva Educational Non-Profit. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#privacy-policy" className="hover:text-pursuva-blue transition-colors">Privacy Policy</a>
            <a href="#terms-of-service" className="hover:text-pursuva-blue transition-colors">Terms of Service</a>
            <a href="#accessibility" className="hover:text-pursuva-blue transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
