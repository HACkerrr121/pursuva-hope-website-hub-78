
import { cn } from "@/lib/utils";

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
              {['Python Programming', 'Java Development', 'Mathematics', 'Data Structures', 'Algorithms', 'Web Development'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-600 hover:text-pursuva-blue transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Tutoring</h3>
            <ul className="space-y-2">
              {['Python', 'Java', 'SAT/ACT Prep', 'Coding Olympiads', 'Physics', 'AP Courses', 'College Applications'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-600 hover:text-pursuva-blue transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Blog', 'Tutorials', 'Practice Problems', 'Learning Paths', 'FAQs', 'Student Portal', 'Career Guidance'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-600 hover:text-pursuva-blue transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
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
