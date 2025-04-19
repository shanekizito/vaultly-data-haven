
import { ArrowRight, Wallet, Link } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-background overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-accent-purple rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-accent-teal rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-accent-mint rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <h1 className="flex flex-col gap-2 text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] font-bold text-text tracking-tighter leading-[1.1] mb-6">
          <span className="animate-fade-in [animation-delay:200ms]">
            YOUR DATA.
          </span>
          <span className="text-accent-teal animate-fade-in [animation-delay:400ms]">
            YOUR VAULT.
          </span>
          <span className="animate-fade-in [animation-delay:600ms]">
            YOUR VALUE.
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-text/80 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in [animation-delay:800ms]">
          Vaultly is a decentralized platform that lets you anonymize, price, and sell your personal data on your terms.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in [animation-delay:1000ms]">
          <Button 
            size="lg" 
            className="bg-accent-mint text-background hover:bg-accent-mint/90 inline-flex items-center gap-2 h-14 px-8 text-base group"
          >
            <Wallet size={20} />
            Connect Wallet
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-accent-teal text-accent-teal hover:bg-accent-teal/10 inline-flex items-center gap-2 h-14 px-8 text-base group"
          >
            <Link size={20} />
            Explore Platform
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
