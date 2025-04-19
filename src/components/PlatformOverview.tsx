
import { Brain, Shield, Users, CreditCard, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <Brain className="w-8 h-8 text-accent-purple" />,
    title: "AI Valuation Engine",
    description: "Fair price estimates for your data using machine learning."
  },
  {
    icon: <Shield className="w-8 h-8 text-accent-teal" />,
    title: "ZK-Powered Privacy",
    description: "Your data is anonymized with zero-knowledge proofs."
  },
  {
    icon: <Users className="w-8 h-8 text-accent-mint" />,
    title: "Decentralized Marketplace",
    description: "Sell your data peer-to-peer, with full control."
  },
  {
    icon: <CreditCard className="w-8 h-8 text-accent-purple" />,
    title: "Crypto Payments",
    description: "Earn in USDC, ETH, or $VAULT token instantly."
  },
  {
    icon: <FileText className="w-8 h-8 text-accent-teal" />,
    title: "Consent Management",
    description: "Full audit trail and permission revoking on-chain."
  }
];

const PlatformOverview = () => {
  return (
    <section className="py-32 bg-background relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-text tracking-tighter mb-4">
          Platform Overview
        </h2>
        <p className="text-lg text-text/70 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
          The complete data management solution built for the Web3 era
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-muted/30 backdrop-blur-sm border border-accent-purple/10 hover:border-accent-purple/30 transition-colors"
            >
              <CardContent className="p-8">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-text mb-4">{feature.title}</h3>
                <p className="text-text/70 text-lg leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;
