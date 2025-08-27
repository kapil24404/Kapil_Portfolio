import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="UI/UX Design Workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
      <div className="absolute bottom-40 right-20 w-16 h-16 bg-primary-light/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-accent-light/30 rounded-full animate-float" style={{animationDelay: '4s'}}></div>

      {/* Main Content */}
      <div className={`relative z-10 text-center max-w-4xl mx-auto px-6 transition-all duration-1000 ${
        isVisible ? 'animate-fade-up opacity-100' : 'opacity-0'
      }`}>
        
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
          Hi, I'm <span className="gradient-text bg-gradient-to-r from-white via-accent-light to-white bg-clip-text">Kapil</span>
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
          Aspiring UI/UX Designer & Developer
        </p>
        
        {/* Description */}
        <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting beautiful, user-centered digital experiences through innovative design and clean code. 
          Currently pursuing B.Tech in CSE at Chandigarh University.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-12">
          <Button 
            size="lg" 
            className="btn-gradient group"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
            <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
         <a 
  href="https://drive.google.com/uc?export=download&id=1hAIgZvztpVtDUp3WVVQpxMCcD3p2M9wv" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Button 
    variant="outline" 
    size="lg"
    className="bg-white/10 border-white/30 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/50"
  >
    <Download className="mr-2 h-5 w-5" />
    Download Resume
  </Button>
</a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a 
            href="https://github.com/kapil24404" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Github className="h-6 w-6 text-white" />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/kapil-332517249/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="h-6 w-6 text-white" />
          </a>
          
          <a 
            href="mailto:gargkapilgarg1@gmail.com"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Mail className="h-6 w-6 text-white" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;