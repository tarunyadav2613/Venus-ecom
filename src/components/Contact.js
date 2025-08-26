import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">
            Ready to start your e-commerce journey? Contact us today!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl hover:shadow-lg transition-all border border-green-100">
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg">Phone</h3>
                <p className="text-green-600 font-semibold text-lg">9069201013</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl hover:shadow-lg transition-all border border-green-100">
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg">Email</h3>
                <p className="text-green-600 font-semibold">venusecomcare@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl hover:shadow-lg transition-all border border-green-100">
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <Globe className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg">Website</h3>
                <a href="https://www.venusecomecare.in" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                  www.venusecomecare.in
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl hover:shadow-lg transition-all border border-green-100">
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 mt-1">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg">Address</h3>
                <p className="text-gray-600 leading-relaxed">
                  RZ-38 Bajaj Enclave Ext<br />
                  Sector-15 Dwarka<br />
                  New Delhi - 110078
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 text-center">Send us a message</h3>
            <form className="space-y-6">
              <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm" />
              <input type="email" placeholder="Your Email" className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm" />
              <textarea placeholder="Your Message" rows="4" className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none backdrop-blur-sm"></textarea>
              <button type="submit" className="w-full bg-white text-green-600 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
