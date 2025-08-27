import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border/20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand & Description */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Kapil</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Aspiring UI/UX Designer & Developer crafting beautiful digital experiences. 
              Always learning, always creating.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/kapil24404"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
              >
                <Github className="h-4 w-4 text-primary" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/kapil-332517249/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="h-4 w-4 text-primary" />
              </a>
              
              <a
                href="mailto:gargkapilgarg1@gmail.com"
                className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
              >
                <Mail className="h-4 w-4 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Case Study', href: '#case-study' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a 
                  href="mailto:gargkapilgarg1@gmail.com" 
                  className="hover:text-primary transition-colors"
                >
                  gargkapilgarg1@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+918437047547" 
                  className="hover:text-primary transition-colors"
                >
                  +91 8437047547
                </a>
              </li>
              <li>Chandigarh University, Mohali</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Kapil. All rights reserved.
          </p>
          
         
        </div>

      </div>
    </footer>
  );
};

export default Footer;