
import { ArrowRight, Wallet, Link } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-accent-purple rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-accent-teal rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-accent-mint rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6">
          Your data. Your vault. Your value.
        </h1>
        <p className="text-lg sm:text-xl text-text/80 max-w-2xl mx-auto mb-8">
          Reclaim ownership of your data, set your terms, and earn securely.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-accent-mint text-background hover:bg-accent-mint/90 inline-flex items-center gap-2">
            <Wallet size={20} />
            Connect Wallet
            <ArrowRight size={16} className="ml-1" />
          </Button>
          <Button variant="outline" className="border-accent-teal text-accent-teal hover:bg-accent-teal/10 inline-flex items-center gap-2">
            <Link size={20} />
            Explore Marketplace
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
