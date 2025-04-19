
import { Users, ShieldCheck, Activity, CreditCard } from "lucide-react";

const features = [
  {
    icon: <Users className="w-8 h-8 text-accent-purple" />,
    title: "Decentralized",
    description: "No centralized control or data brokers"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent-teal" />,
    title: "ZK Privacy",
    description: "Zero-knowledge proof based privacy layer"
  },
  {
    icon: <Activity className="w-8 h-8 text-accent-mint" />,
    title: "AI Valuation",
    description: "Get real-time, fair price estimates"
  },
  {
    icon: <CreditCard className="w-8 h-8 text-accent-purple" />,
    title: "Crypto Payments",
    description: "Earn in USDC or $VAULT token"
  }
];

const WhyVaultly = () => {
  return (
    <section className="py-32 bg-muted/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-text tracking-tighter mb-16">
          Why Choose Vaultly
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-background border-2 border-accent-purple/10 hover:border-accent-purple/30 transition-all"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-text tracking-tight mb-4">{feature.title}</h3>
              <p className="text-text/70 text-lg leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVaultly;
