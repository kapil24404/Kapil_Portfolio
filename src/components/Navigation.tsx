import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Case Study', href: '#case-study' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-soft' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#')}
            className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'gradient-text' : 'text-white'
            }`}
          >
            Kapil
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-foreground' : 'text-white hover:text-accent'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Social Links & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            
            {/* Social Links - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="https://github.com/kapil24404"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all hover:scale-110 ${
                  isScrolled 
                    ? 'text-muted-foreground hover:text-primary' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <Github className="h-5 w-5" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/kapil-332517249/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all hover:scale-110 ${
                  isScrolled 
                    ? 'text-muted-foreground hover:text-primary' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              
              <a
                href="mailto:gargkapilgarg1@gmail.com"
                className={`p-2 rounded-full transition-all hover:scale-110 ${
                  isScrolled 
                    ? 'text-muted-foreground hover:text-primary' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-soft">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
              >
                {link.name}
              </button>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex items-center justify-center space-x-6 pt-4 border-t border-border/20">
              <a
                href="https://github.com/kapil24404"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/kapil-332517249/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              
              <a
                href="mailto:gargkapilgarg1@gmail.com"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navigation;