import React from 'react';
import { Shield, Zap, Star } from 'lucide-react';

const featuresData = [
  {
    icon: Shield,
    title: "Trusted Partner",
    description: "Years of experience in e-commerce management with a proven track record of success."
  },
  {
    icon: Zap,
    title: "Fast Results",
    description: "Quick setup and optimization to get your business running smoothly within days."
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "High-quality service delivery that exceeds client expectations every time."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose VENUS?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine expertise, technology, and dedication to deliver exceptional e-commerce solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
