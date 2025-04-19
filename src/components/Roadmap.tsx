
const roadmapItems = [
  {
    quarter: "Q2 2025",
    title: "MVP Launch",
    description: "Data upload, ZK privacy, AI valuation, ETH payments"
  },
  {
    quarter: "Q3 2025",
    title: "Marketplace & Pilots",
    description: "Marketplace opens, Health & behavioral data pilots"
  },
  {
    quarter: "Q4 2025",
    title: "Token & Features",
    description: "$VAULT Token Launch, Reputation System, Bundled Datasets"
  },
  {
    quarter: "Q1 2026",
    title: "Expansion",
    description: "Governance DAO v1, Mobile App, Academic data partnerships"
  }
];

const Roadmap = () => {
  return (
    <section className="py-32 bg-muted/10 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-text tracking-tighter mb-4">
          Vaultly Roadmap
        </h2>
        <p className="text-lg text-text/70 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
          Our path to building the future of personal data ownership
        </p>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent-purple/30 hidden md:block"></div>
          
          <div className="space-y-16 relative z-10">
            {roadmapItems.map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center gap-8`}>
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="bg-muted/30 backdrop-blur-sm border-2 border-accent-teal/20 p-8 rounded-2xl max-w-md w-full">
                    <h3 className="text-xl font-semibold text-accent-teal mb-2">{item.quarter}</h3>
                    <h4 className="text-2xl font-bold text-text mb-4">{item.title}</h4>
                    <p className="text-text/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                
                <div className="md:w-0 flex justify-center items-center">
                  <div className="w-12 h-12 rounded-full bg-background border-4 border-accent-purple flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-accent-purple"></div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
