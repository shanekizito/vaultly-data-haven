
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

const ProductPreview = () => {
  return (
    <section className="py-32 bg-background relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-text tracking-tighter mb-4">
          Product Preview
        </h2>
        <p className="text-lg text-text/70 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
          A glimpse of the Vaultly dashboard and marketplace
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="rounded-2xl bg-muted/30 backdrop-blur-sm border-2 border-accent-purple/20 overflow-hidden h-[400px] relative group">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="space-y-4 w-full max-w-[80%]">
                <Skeleton className="h-8 w-3/4 mx-auto bg-accent-purple/10" />
                <Skeleton className="h-40 w-full bg-accent-purple/10" />
                <div className="grid grid-cols-2 gap-4">
                  <Skeleton className="h-24 bg-accent-purple/10" />
                  <Skeleton className="h-24 bg-accent-purple/10" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-20 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-sm font-semibold text-accent-teal">Dataset Upload Interface</span>
            </div>
          </div>
          
          <div className="rounded-2xl bg-muted/30 backdrop-blur-sm border-2 border-accent-teal/20 overflow-hidden h-[400px] relative group">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="space-y-4 w-full max-w-[80%]">
                <Skeleton className="h-8 w-2/4 mx-auto bg-accent-teal/10" />
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <Skeleton className="h-16 bg-accent-teal/10" />
                  <Skeleton className="h-16 bg-accent-teal/10" />
                </div>
                <Skeleton className="h-40 w-full bg-accent-teal/10" />
                <Skeleton className="h-12 w-1/2 mx-auto bg-accent-teal/10" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-20 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-sm font-semibold text-accent-mint">Marketplace Listing</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-2 border-accent-teal text-accent-teal hover:bg-accent-teal/10">
            Request Early Access
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
