
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
  image: string;
}

const TeamMember = ({ name, position, bio, image }: TeamMemberProps) => {
  return (
    <Card className="border-none shadow-lg group overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full flex justify-center space-x-2">
            <a href="#" className="bg-white rounded-full p-2 hover:bg-pursuva-blue hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="bg-white rounded-full p-2 hover:bg-pursuva-blue hover:text-white transition-colors">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-gray-600 font-medium mb-3">{position}</p>
        <p className="text-gray-700 text-sm">{bio}</p>
      </CardContent>
    </Card>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "Executive Director",
      bio: "With over 15 years of experience in international development, Sarah leads Pursuva's global strategy and operations.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500"
    },
    {
      name: "David Chen",
      position: "Director of Programs",
      bio: "David oversees the development and implementation of our programs across all regions, ensuring maximum impact.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"
    },
    {
      name: "Aisha Patel",
      position: "Chief Financial Officer",
      bio: "Aisha manages Pursuva's financial health and ensures that resources are allocated where they can do the most good.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500"
    },
    {
      name: "Miguel Rodriguez",
      position: "Director of Partnerships",
      bio: "Miguel builds and maintains relationships with our partners, donors, and collaborators around the world.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <div className="w-20 h-1 bg-gradient mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Meet the dedicated professionals who lead our organization and drive our mission forward.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            We're always looking for passionate, talented individuals to join our team of staff and volunteers. Check out our current opportunities.
          </p>
          <a 
            href="#careers" 
            className="text-pursuva-blue hover:text-pursuva-purple transition-colors font-semibold inline-flex items-center"
          >
            View Open Positions
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="ml-1"
            >
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
