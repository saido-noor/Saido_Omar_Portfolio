
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Full-Stack Developer
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Building robust, scalable applications with modern technologies. 
            Specialized in JavaScript, React, Node.js, and Python development.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <span className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              🚀 Available for New Projects
            </span>
            <span className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              💼 Upwork Ready
            </span>
          </div>
          <div className="animate-bounce">
            <ArrowDown className="mx-auto w-8 h-8 text-blue-200" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
