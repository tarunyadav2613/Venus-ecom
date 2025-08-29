import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img 
              src="/venuslogo.png" 
              alt="Venus Logo" 
              className="w-12 h-12 rounded-xl shadow-lg border border-gray-200"
            />
            <div>
              <span className="text-2xl font-bold text-gray-800">VENUS</span>
              <div className="text-sm text-green-600 font-medium tracking-wider">E-COM CARE</div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Home</a>
            <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Contact</a>
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-medium">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-4">
            <a href="#home" className="block py-2 text-gray-700 font-medium" onClick={closeMobileMenu}>Home</a>
            <a href="#services" className="block py-2 text-gray-700 font-medium" onClick={closeMobileMenu}>Services</a>
            <a href="#contact" className="block py-2 text-gray-700 font-medium" onClick={closeMobileMenu}>Contact</a>
            <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-full font-medium">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
