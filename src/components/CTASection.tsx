
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            🧩 One System. Four Solutions.
          </h2>
          <p className="text-xl sm:text-2xl text-blue-100 mb-8">
            No fluff. Just a tight growth stack made for coworking operators.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-6">📅 Ready to Scale?</h3>
          <p className="text-lg text-blue-100 mb-6">
            Book your strategy call → We'll audit your funnel & share what to fix first.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center justify-center sm:justify-start">
              <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
              <span>Free 45-minute audit</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
              <span>Custom growth roadmap</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
              <span>No-obligation consultation</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
              <span>Industry benchmarks</span>
            </div>
          </div>
          
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold">
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Free Audit Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="text-center">
          <p className="text-blue-200 text-sm">
            Join 200+ coworking spaces already scaling with our system
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
