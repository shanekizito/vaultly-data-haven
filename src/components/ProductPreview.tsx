
import { Button } from "./ui/button";
import { ArrowRight, FileText } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import { motion } from "framer-motion";

const ProductPreview = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text tracking-tighter mb-4">
            Product Preview
          </h2>
          <p className="text-lg text-text/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            A glimpse of the Vaultly dashboard and marketplace
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-accent-teal text-accent-teal hover:bg-accent-teal/10 inline-flex items-center gap-2"
          >
            <FileText size={20} />
            Download Whitepaper
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-muted/30 backdrop-blur-sm border-2 border-accent-purple/20 overflow-hidden h-[400px] relative group hover:border-accent-purple/40 transition-all duration-300"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="space-y-4 w-full max-w-[80%]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-accent-purple/20 flex items-center justify-center">
                    <Skeleton className="h-6 w-6 bg-accent-purple/30" />
                  </div>
                  <div className="flex-1">
                    <Skeleton className="h-4 w-1/2 bg-accent-purple/20 mb-2" />
                    <Skeleton className="h-3 w-1/3 bg-accent-purple/10" />
                  </div>
                </div>
                <Skeleton className="h-40 w-full bg-accent-purple/10 rounded-xl" />
                <div className="grid grid-cols-3 gap-4">
                  <Skeleton className="h-16 bg-accent-purple/10 rounded-lg" />
                  <Skeleton className="h-16 bg-accent-purple/10 rounded-lg" />
                  <Skeleton className="h-16 bg-accent-purple/10 rounded-lg" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-20 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-sm font-semibold text-accent-teal">AI Valuation Dashboard</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-muted/30 backdrop-blur-sm border-2 border-accent-teal/20 overflow-hidden h-[400px] relative group hover:border-accent-teal/40 transition-all duration-300"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="space-y-4 w-full max-w-[80%]">
                <div className="flex items-center justify-between mb-6">
                  <Skeleton className="h-8 w-2/4 bg-accent-teal/20" />
                  <Skeleton className="h-8 w-16 bg-accent-teal/30 rounded-full" />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <Skeleton className="h-24 bg-accent-teal/10 rounded-xl" />
                  <Skeleton className="h-24 bg-accent-teal/10 rounded-xl" />
                </div>
                <Skeleton className="h-32 w-full bg-accent-teal/10 rounded-xl" />
                <div className="flex justify-end">
                  <Skeleton className="h-10 w-32 bg-accent-teal/20 rounded-lg" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-20 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-sm font-semibold text-accent-mint">Data Marketplace</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
