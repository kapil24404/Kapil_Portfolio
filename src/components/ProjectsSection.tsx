import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Users, TrendingUp, Database } from "lucide-react";
import campusFoodImage from "@/assets/campus-food-mockup.jpg";
import digitalHubImage from "@/assets/digital-hub-mockup.jpg";
import employeeSystemImage from "@/assets/employee-system-mockup.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Campus Food - Hostel Food Delivery App",
      description: "A comprehensive food delivery web application tailored for hostel environments, featuring real-time order tracking and vendor management.",
      image: campusFoodImage,
      technologies: ["React.js", "Node.js", "Express.js", "Azure SQL", "JavaScript"],
      highlights: [
        "Supports 1,000+ concurrent users",
        "40% faster response times",
        "Real-time order tracking",
        "Vendor management system"
      ],
      github: "https://github.com/kapil24404/Campus_Food",
      demo: "#",
      period: "Oct 2024 – Apr 2025",
      icon: Users,
      featured: true
    },
    {
      title: "E-Digital Hub",
      description: "A comprehensive web application with Firebase backend integration, focusing on real-time data management and user engagement.",
      image: digitalHubImage,
      technologies: ["React.js", "Firebase", "JavaScript", "HTML", "CSS"],
      highlights: [
        "30% increase in user engagement",
        "20% faster page load times",
        "Real-time data synchronization",
        "Cross-platform optimization"
      ],
      github: "https://github.com/kapil24404/EDigitalHub",
      demo: "#",
      period: "Jan 2024 – Jun 2024",
      icon: TrendingUp
    },
    {
      title: "Employee Management System",
      description: "Desktop-based HR management system built with Java, handling organizational data with optimized database operations.",
      image: employeeSystemImage,
      technologies: ["Java", "MySQL", "AWT", "Swing", "SQL"],
      highlights: [
        "Manages 5,000+ employee records",
        "50% faster data retrieval",
        "Complete CRUD operations",
        "Optimized database schema"
      ],
      github: "https://github.com/kapil24404/Employee-Management-System",
      demo: "#",
      period: "Jul 2023 – Nov 2023",
      icon: Database
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my journey through full-stack development and UI/UX design
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden hover-lift transition-all duration-500 ${
                project.featured 
                  ? 'glass-card ring-2 ring-primary/20' 
                  : 'glass-card'
              }`}
            >
              <div className={`grid ${
                index % 2 === 0 ? 'lg:grid-cols-5' : 'lg:grid-cols-5'
              } gap-0`}>
                
                {/* Project Image */}
                <div className={`lg:col-span-2 ${
                  index % 2 === 0 ? 'order-1' : 'order-2 lg:order-2'
                } relative overflow-hidden`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className={`lg:col-span-3 ${
                  index % 2 === 0 ? 'order-2' : 'order-1 lg:order-1'
                } p-8 lg:p-12 flex flex-col justify-between`}>
                  
                  {/* Project Header */}
                  <div>
                    <div className="flex items-center mb-4">
                      <project.icon className="h-6 w-6 text-primary mr-3" />
                      <span className="text-sm text-muted-foreground">{project.period}</span>
                      {project.featured && (
                        <Badge className="ml-auto bg-primary text-primary-foreground">
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-accent mb-3">Key Achievements:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-accent mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="outline"
                            className="border-primary/30 text-primary hover:bg-primary/10"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      asChild
                      className="btn-gradient flex-1"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                    
                    
                  </div>

                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Projects CTA */}
        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 text-primary hover:bg-primary/10"
            asChild
          >
            <a href="https://github.com/kapil24404" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;