
import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/4038fe81-8fa7-47c8-9461-c7da735e5ca2.png" 
                alt="Pursuva Logo" 
                className="h-12 w-auto mr-3"
              />
              <span className="text-2xl font-bold">Pursuva</span>
            </div>
            <p className="text-gray-400 mb-6">
              Creating hope through action. We work to empower communities and create sustainable solutions to global challenges.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform) => (
                <a 
                  key={platform} 
                  href={`#${platform}`} 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-pursuva-blue transition-colors"
                  aria-label={`Follow us on ${platform}`}
                >
                  <img 
                    src={`https://api.iconify.design/lucide/${platform}.svg`} 
                    alt={platform} 
                    width="18" 
                    height="18" 
                    className="text-current"
                  />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Our Programs', 'Impact Stories', 'Our Team', 'News & Events', 'Careers'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Get Involved</h3>
            <ul className="space-y-3">
              {['Donate', 'Volunteer', 'Partner With Us', 'Fundraise', 'Corporate Giving', 'Planned Giving'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates on our work and impact.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-gray-800 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pursuva-blue flex-grow"
              />
              <button 
                type="submit" 
                className={cn(
                  "px-4 py-2 bg-gradient rounded-r-md",
                  "hover:opacity-90 transition-opacity"
                )}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {currentYear} Pursuva. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#accessibility" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
