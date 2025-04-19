
import { Upload, Shield, Coins } from "lucide-react";

const steps = [
  {
    icon: <Upload className="w-8 h-8 text-accent-teal" />,
    title: "Upload your data",
    description: "Health, IoT, Behavioral, and more"
  },
  {
    icon: <Shield className="w-8 h-8 text-accent-purple" />,
    title: "Secure & Anonymous",
    description: "Vaultly anonymizes and secures your data"
  },
  {
    icon: <Coins className="w-8 h-8 text-accent-mint" />,
    title: "Start Earning",
    description: "Get paid by verified buyers using crypto"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-32 bg-background relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-text tracking-tighter mb-16">
          How Vaultly Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-muted/30 backdrop-blur-sm border border-accent-teal/10 hover:border-accent-teal/30 transition-colors"
            >
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-2xl font-semibold text-text tracking-tight mb-4">{step.title}</h3>
              <p className="text-text/70 text-lg leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
