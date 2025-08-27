import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Phone, 
  Send,
  ExternalLink 
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gargkapilgarg1@gmail.com",
      link: "mailto:gargkapilgarg1@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "+91 8437047547",
      link: "tel:+918437047547"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chandigarh University, Mohali",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "@kapil24404",
      link: "https://github.com/kapil24404"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      value: "Kapil",
      link: "https://www.linkedin.com/in/kapil-332517249/"
    },
    {
      icon: ExternalLink,
      label: "LeetCode",
      value: "@kapil2440",
      link: "https://leetcode.com/u/kapil2440/"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent/5 rounded-full animate-float" style={{animationDelay: '3s'}}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, creative projects, or just having a chat about design and technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="p-8 glass-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="bg-muted/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gradient w-full group"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              
              {/* Contact Details */}
              <Card className="p-6 glass-card">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Get in touch
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <info.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="text-foreground">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-6 glass-card">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Connect with me
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                          <social.icon className="h-4 w-4 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">
                            {social.label}
                          </p>
                          <p className="text-foreground">{social.value}</p>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                    </a>
                  ))}
                </div>
              </Card>

              {/* Availability Status */}
              <Card className="p-6 glass-card border-l-4 border-l-green-500">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Available for work
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  I'm currently looking for UI/UX design internships and freelance projects. 
                  Let's create something amazing together!
                </p>
              </Card>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;