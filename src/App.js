import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import "./App.css"; // We'll create this for custom animations
// import logo from './logo.png';
function App() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
