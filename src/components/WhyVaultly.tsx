
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
    <section className="py-20 bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-text mb-12">
          Why Choose Vaultly
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-background border border-accent-purple/10 hover:border-accent-purple/30 transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-text mb-2">{feature.title}</h3>
              <p className="text-text/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVaultly;
