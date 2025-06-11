
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            🚀 Growth System for Coworking Spaces
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Launch Your Space Like a{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Brand
            </span>
            , Not a Listing
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Stop leaking leads. Start scaling smart. Our proven 4-step system helps coworking operators 
            build predictable growth engines that convert visitors into members.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Free Audit Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 px-8 py-4 text-lg rounded-full hover:bg-gray-50 transition-all duration-300">
            View Case Studies
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">300%</div>
            <div className="text-gray-600">Average Lead Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">15 Days</div>
            <div className="text-gray-600">Average Setup Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">ROI 5x</div>
            <div className="text-gray-600">Within 90 Days</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
