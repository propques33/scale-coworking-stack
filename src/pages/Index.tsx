
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";

const Index = () => {
  const services = [
    {
      icon: "🧠",
      number: "1.",
      title: "GTM Strategy Kit",
      description: "Launch your space like a brand, not a listing.",
      features: [
        "Micro-market analysis",
        "Competitor benchmarking", 
        "Audience targeting (freelancers, remote teams)",
        "Tiered pricing + value prop",
        "Channel plan: Meta, Google, LinkedIn, OTAs"
      ],
      output: "GTM strategy PDF + Ad copy bank + Loom walkthrough",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "⚙️",
      number: "2.",
      title: "CRM Setup & Automation",
      description: "Stop leaking leads. Automate your follow-ups.",
      features: [
        "Salesmate / Zoho / HubSpot setup",
        "WhatsApp + email drip flows",
        "Lead scoring + visit reminders",
        "Smart dashboards & reporting"
      ],
      output: "CRM live in 10 days with SOPs + 4 workflows",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "🎯",
      number: "3.", 
      title: "Conversion Optimization",
      description: "Turn visits into leads—before the tour.",
      features: [
        "Mobile-first landing page",
        "Live chat + callback widget",
        "Exit intent popups & retargeting",
        "Lead magnets: day pass, ROI calculator"
      ],
      output: "High-converting microsite + CRO dashboard",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: "📞",
      number: "4.",
      title: "Sales Training (CloseMax15™)",
      description: "Your team knows the leads. We show them how to close.",
      features: [
        "Sales SOP + objection playbook",
        "WhatsApp + call follow-up scripts", 
        "CRM-based nurture flows",
        "Tour reactivation system"
      ],
      output: "15-hour coaching + SOPs + recordings",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Proven 4-Step Growth System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each solution builds on the last, creating a complete growth engine 
              that turns your coworking space into a predictable revenue machine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Coworking Space?</h3>
            <p className="text-gray-400 mb-6">
              Join the growing community of profitable coworking operators.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <span>© 2024 Coworking Growth System</span>
              <span>•</span>
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
