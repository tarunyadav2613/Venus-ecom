import React, { useState, useEffect } from 'react';
import { Package, Users, FileText, Megaphone, RotateCcw, Headphones, GraduationCap } from 'lucide-react';

const servicesData = [
    { icon: Package, title: "Product Listing & Cataloging", description: "Professional product catalog management with optimized listings across all major e-commerce platforms.", color: "from-green-500 to-emerald-600" },
    { icon: Users, title: "Account Management", description: "Complete seller account setup, optimization and maintenance services for seamless operations.", color: "from-emerald-500 to-green-600" },
    { icon: FileText, title: "GST Invoice Support", description: "Comprehensive GST compliance and invoice management solutions for your business.", color: "from-green-600 to-teal-600" },
    { icon: Megaphone, title: "Ad Campaigns & Promotion", description: "Strategic advertising campaigns to boost your product visibility and maximize sales.", color: "from-teal-500 to-green-600" },
    { icon: RotateCcw, title: "Returns & Claims Handling", description: "Efficient return and refund processing to maintain customer satisfaction and trust.", color: "from-green-500 to-emerald-500" },
    { icon: Headphones, title: "Customer Support Services", description: "24/7 dedicated customer service to handle all your buyer queries professionally.", color: "from-emerald-600 to-green-500" },
    { icon: GraduationCap, title: "Training & Consultancy", description: "Expert training sessions to help you master e-commerce selling strategies and best practices.", color: "from-green-600 to-emerald-600" }
];

const Services = () => {
    const [animatedCards, setAnimatedCards] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            const cards = document.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100 && !animatedCards.includes(index)) {
                    setAnimatedCards(prev => [...prev, index]);
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [animatedCards]);

    return (
        <section id="services" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive e-commerce solutions to grow your business across all major platforms.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className={`service-card group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer border border-gray-100 ${
                                animatedCards.includes(index) ? 'animate-slide-in-up' : 'opacity-0 translate-y-8'
                            }`}
                            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                        >
                            <div className={`w-16 h-16 mb-6 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                <service.icon className="text-white" size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
