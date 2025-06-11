
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, Video, Calendar } from "lucide-react";

interface ServiceCardProps {
  icon: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  output: string;
  gradient: string;
}

const ServiceCard = ({ icon, number, title, description, features, output, gradient }: ServiceCardProps) => {
  return (
    <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
      <CardContent className="relative p-8">
        <div className="flex items-center mb-6">
          <div className="text-4xl mr-4">{icon}</div>
          <div>
            <div className="text-sm font-semibold text-gray-500 mb-1">{number}</div>
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6 text-lg leading-relaxed">{description}</p>
        
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex items-center mb-2">
            <FileText className="h-5 w-5 text-blue-600 mr-2" />
            <span className="font-semibold text-gray-900">Output:</span>
          </div>
          <p className="text-gray-700">{output}</p>
        </div>
        
        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg py-3 font-semibold transition-all duration-300 transform hover:scale-105">
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
