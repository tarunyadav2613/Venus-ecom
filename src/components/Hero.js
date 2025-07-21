import React from 'react';

const platforms = ['Amazon', 'Flipkart', 'Meesho', 'Myntra'];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden pt-20">
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-green-100 opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <div className="mb-12">
            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-400 rounded-2xl shadow-2xl flex items-center justify-center border-2 border-gray-200">
              <span className="text-gray-700 font-bold text-4xl" style={{ fontFamily: 'serif', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>V</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold text-gray-800 mb-6 leading-tight">
              VENUS
            </h1>
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-6 tracking-widest">
              E-COM CARE
            </div>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              E-commerce Solutions & Services
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Your trusted partner for complete e-commerce success across all major platforms.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Start Your Journey
            </button>
            <button className="border-2 border-green-600 text-green-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform) => (
              <div 
                key={platform}
                className="bg-white text-gray-700 px-6 py-3 rounded-full shadow-lg border border-gray-200 hover:shadow-xl hover:border-green-300 transition-all duration-300"
              >
                <span className="font-medium">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;