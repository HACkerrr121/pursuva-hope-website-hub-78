
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Globe, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Pursuva</h2>
          <div className="w-20 h-1 bg-gradient mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Pursuva is a global non-profit organization dedicated to empowering communities through sustainable development, education, and humanitarian initiatives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-pursuva-teal/10 rounded-full flex items-center justify-center group-hover:bg-pursuva-teal/20 transition-colors">
                  <Heart className="text-pursuva-teal w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To create sustainable solutions that address critical social, environmental, and economic challenges faced by communities worldwide.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-pursuva-blue/10 rounded-full flex items-center justify-center group-hover:bg-pursuva-blue/20 transition-colors">
                  <Globe className="text-pursuva-blue w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                A world where every individual has access to the resources, opportunities, and support needed to reach their full potential.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-pursuva-purple/10 rounded-full flex items-center justify-center group-hover:bg-pursuva-purple/20 transition-colors">
                  <Users className="text-pursuva-purple w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <p className="text-gray-700">
                Compassion, integrity, innovation, collaboration, and sustainability guide every aspect of our work and decision-making process.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <div className="lg:flex items-center gap-8">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Pursuva Team Working" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Our Story</h3>
              <p className="text-gray-700 mb-4">
                Founded in 2010, Pursuva began with a simple idea: positive change comes from empowered communities. What started as a small group of dedicated volunteers has grown into a global organization with projects spanning multiple continents.
              </p>
              <p className="text-gray-700 mb-4">
                Our name "Pursuva" represents our commitment to pursuing a better future for all. The colorful leaf in our logo symbolizes growth, renewal, and hope—core themes in everything we do.
              </p>
              <p className="text-gray-700">
                Today, we work with local partners and communities to design and implement programs that address the most pressing challenges facing our world, from education and healthcare to environmental sustainability and economic empowerment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
