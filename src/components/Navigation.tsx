
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LogIn, ArrowRight, FileText } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-muted/20' : ''
    }`}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/a996f9fb-95a6-4429-971b-0822c6604be7.png" 
              alt="Vaultly Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex gap-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-text/70 hover:text-text">Use Cases</NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-text/70 hover:text-text">Platform</NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-text/70 hover:text-text">Resources</NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-text/70 hover:text-text">Company</NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            className="hidden sm:flex items-center gap-2 text-text/70 hover:text-text"
          >
            <LogIn size={18} />
            Log in
          </Button>
          <Button 
            className="bg-white text-background hover:bg-white/90 font-medium"
          >
            Book demo
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
