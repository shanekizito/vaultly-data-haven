
import { Wallet, Link, ArrowRight, Globe, Shield, Activity, CreditCard, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyVaultly from "@/components/WhyVaultly";
import PlatformOverview from "@/components/PlatformOverview";
import ProductPreview from "@/components/ProductPreview";
import UseCase from "@/components/UseCase";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-text">
      <Hero />
      <PlatformOverview />
      <HowItWorks />
      <ProductPreview />
      <UseCase />
      <WhyVaultly />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
