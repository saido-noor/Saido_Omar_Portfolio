
import React from 'react';
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300/15 rounded-full blur-lg animate-bounce delay-500"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center md:text-left space-y-6">
              <div className="inline-block px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 text-sm font-medium mb-4">
                🚀 Available for New Projects
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
                Full-Stack
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                  Developer
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-lg">
                Building robust, scalable applications with modern technologies. 
                Specialized in JavaScript, React, Node.js, and Python development.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <span className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 text-sm">
                  💼 Upwork Ready
                </span>
                <span className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 text-sm">
                  🌍 Remote Available
                </span>
              </div>
              
              {/* Social links */}
              <div className="flex gap-4 justify-center md:justify-start pt-4">
  <a 
    href="saidoomarnoor@gmail.com" 
    className="p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Mail className="w-5 h-5" />
  </a>
  <a 
    href="https://github.com/saido-noor" 
    className="p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Github className="w-5 h-5" />
  </a>
  <a 
    href="https://ke.linkedin.com/in/saido-omar-b5b6b6216" 
    className="p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin className="w-5 h-5" />
  </a>
</div>
              {/* <div className="flex gap-4 justify-center md:justify-start pt-4">
                <button className="p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110">
                  <a href="#"></a>
                  <Mail className="w-5 h-5" />
                </button>
                <button className="p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110">
                  <a 
                  href="https://github.com/saido-noor" 
                  className="p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
                  <Github className="w-5 h-5" />
                </button>
                <button className="p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110">
                  <a href="https://ke.linkedin.com/in/saido-omar-b5b6b6216"></a>
                  <Linkedin className="w-5 h-5" />
                </button>
              </div> */}
            </div>
            
            {/* Right side - Profile image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full blur-3xl opacity-40 animate-pulse delay-1000"></div>
                
                {/* Main image container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 rounded-full blur-sm opacity-75 animate-pulse"></div>
                  <div className="relative w-full h-full bg-white/10 rounded-full backdrop-blur-sm border-4 border-white/30 overflow-hidden shadow-2xl">
                    <img 
                      src="/public/images/saido.png" 
                      alt="Professional Profile"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="text-center mt-16 animate-bounce">
            <ArrowDown className="mx-auto w-8 h-8 text-blue-200" />
            <p className="text-sm text-blue-200 mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
