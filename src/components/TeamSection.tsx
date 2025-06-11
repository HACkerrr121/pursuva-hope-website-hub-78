
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
      bio: "A passionate high school student dedicated to making quality education accessible to everyone. Akshay helps lead Pursuva's mission to provide free tutoring and courses.",
      image: "/lovable-uploads/7c10b8de-3b0c-418f-9e25-20cc7c4acc79.png"
    },
    {
      name: "Anand Kashyap",
      position: "Co-Founder",
      bio: "High school student committed to educational equity. Anand works on curriculum development and ensuring our free programs reach students who need them most.",
      image: "/lovable-uploads/c4ac9ada-e7c0-45cc-97d3-01d33bdb6c09.png"
    },
    {
      name: "Yu Zheng",
      position: "Lead Marketer",
      bio: "High school student passionate about connecting students with free educational opportunities. Yu helps spread awareness about our programs and tutoring services.",
      image: "/lovable-uploads/676188ce-142b-4d6b-9fa5-4ba5613d91e0.png"
    },
    {
      name: "Madhav Harikrishnan",
      position: "Lead Teacher",
      bio: "A dedicated high school student who specializes in mathematics and computer science. Madhav leads our teaching team and helps develop our free course content.",
      image: "/lovable-uploads/3004350f-f616-4c31-ae32-a9bd92561e95.png"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <div className="w-20 h-1 bg-gradient mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Meet the dedicated high school students who founded and lead our organization, committed to providing free education for all.
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
