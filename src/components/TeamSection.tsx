
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
      name: "Akshay Giri",
      position: "Co-Founder",
      bio: "Passionate about education and technology, Akshay leads the vision and strategic direction of Pursuva's educational initiatives.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500"
    },
    {
      name: "Anand Kashyap",
      position: "Co-Founder",
      bio: "With expertise in curriculum development and educational technology, Anand oversees program design and implementation.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"
    },
    {
      name: "Yu Zheng",
      position: "Lead Marketer",
      bio: "Yu drives our outreach efforts and helps connect students with the educational opportunities that best fit their needs.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500"
    },
    {
      name: "Madhav Harikrishnan",
      position: "Lead Teacher",
      bio: "An experienced educator specializing in mathematics and computer science, Madhav leads our teaching team and curriculum development.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500"
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
      </div>
    </section>
  );
};

export default TeamSection;
