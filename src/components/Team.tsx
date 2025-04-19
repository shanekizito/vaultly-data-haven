
import { Linkedin, Github } from "lucide-react";

const teamMembers = [
  {
    name: "Alexia Chen",
    role: "Founder & CEO",
    bio: "Former data privacy lead at Ethereum Foundation with 8+ years in blockchain.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Marcus Bailey",
    role: "CTO",
    bio: "Zero-knowledge proof researcher and former lead engineer at Polygon.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Sophia Wang",
    role: "Head of AI",
    bio: "PhD in machine learning with specialization in data valuation algorithms.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "David Park",
    role: "Lead Developer",
    bio: "Full-stack engineer with expertise in Solidity and React. Former Consensys.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const Team = () => {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-text tracking-tighter mb-4">
          Meet the Team
        </h2>
        <p className="text-lg text-text/70 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
          The visionaries building the future of personal data ownership
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="rounded-2xl bg-muted/20 backdrop-blur-sm overflow-hidden group relative"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text">{member.name}</h3>
                <p className="text-accent-teal font-medium text-sm mb-3">{member.role}</p>
                <p className="text-text/70 text-sm leading-relaxed">{member.bio}</p>
                <div className="mt-4 flex space-x-3">
                  <a href="#" className="text-text/50 hover:text-accent-purple transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-text/50 hover:text-accent-purple transition-colors">
                    <Github size={18} />
                  </a>
                </div>
              </div>
              <div className="absolute top-0 right-0 p-2 bg-background/80 rounded-bl-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-accent-mint rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
