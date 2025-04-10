
import { Button } from "@/components/ui/button";
import DonateButton from "./DonateButton";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pursuva-purple/90 via-pursuva-blue/80 to-pursuva-teal/70 z-10"></div>
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
          alt="Beautiful landscape" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-20 text-white">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <img 
            src="/lovable-uploads/4038fe81-8fa7-47c8-9461-c7da735e5ca2.png" 
            alt="Pursuva Logo" 
            className="w-32 h-32 mx-auto mb-6 animate-float"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Creating Hope Through Action
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            At Pursuva, we believe in the power of community action to transform lives and create lasting positive change around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <DonateButton size="lg" />
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-pursuva-purple transition-all">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20 animate-bounce">
        <a href="#about" className="text-white">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="lucide lucide-chevron-down"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
