
import { Activity, Users, BarChart, Smartphone, Cpu, GraduationCap, ArrowRight } from "lucide-react";

const useCases = [
  {
    icon: <Activity className="w-8 h-8 text-accent-teal" />,
    title: "Health Data Donors",
    description: "Share anonymized health metrics and earn while advancing research"
  },
  {
    icon: <Smartphone className="w-8 h-8 text-accent-purple" />,
    title: "Smart Device Owners",
    description: "Monetize your IoT and smart home data with guaranteed privacy"
  },
  {
    icon: <BarChart className="w-8 h-8 text-accent-mint" />,
    title: "AI Researchers",
    description: "Access high-quality, ethically sourced datasets for model training"
  },
  {
    icon: <Users className="w-8 h-8 text-accent-teal" />,
    title: "Urban Planners",
    description: "Leverage community data insights for smarter city planning"
  },
  {
    icon: <Cpu className="w-8 h-8 text-accent-purple" />,
    title: "IoT Enthusiasts",
    description: "Create passive income from your connected devices and sensors"
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-accent-mint" />,
    title: "Ethical Tech Investors",
    description: "Support privacy-first data infrastructure and governance"
  }
];

const UseCase = () => {
  return (
    <section className="py-32 bg-muted/10 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-text tracking-tighter mb-4">
          Use Cases
        </h2>
        <p className="text-lg text-text/70 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
          Who's it for? Discover how different users benefit from Vaultly
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-background border border-accent-purple/10 hover:border-accent-purple/30 transition-colors"
            >
              <div className="mb-6">{useCase.icon}</div>
              <h3 className="text-2xl font-semibold text-text tracking-tight mb-4">{useCase.title}</h3>
              <p className="text-text/70 text-lg leading-relaxed">{useCase.description}</p>
              <button className="mt-6 text-accent-teal font-semibold text-sm flex items-center">
                See Example
                <ArrowRight size={14} className="ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCase;
