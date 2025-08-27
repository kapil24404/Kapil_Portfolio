import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Users, 
  Target, 
  Lightbulb, 
  Palette, 
  Code, 
  TrendingUp, 
  ExternalLink 
} from "lucide-react";

const CaseStudySection = () => {
  const processSteps = [
    {
      icon: Search,
      title: "Research & Discovery",
      description: "Conducted user interviews with 50+ hostel students to understand pain points in food ordering",
      details: [
        "User surveys and interviews",
        "Competitive analysis of existing solutions",
        "Identified key problems: long wait times, limited options, poor tracking"
      ]
    },
    {
      icon: Target,
      title: "Problem Definition",
      description: "Defined core challenges: lack of real-time tracking, vendor coordination, and user engagement",
      details: [
        "Created user personas and journey maps",
        "Prioritized features based on user needs",
        "Established success metrics and KPIs"
      ]
    },
    {
      icon: Lightbulb,
      title: "Ideation & Wireframing",
      description: "Brainstormed solutions and created low-fidelity wireframes for key user flows",
      details: [
        "Sketched initial concepts and user flows",
        "Created paper prototypes for testing",
        "Iterated based on early user feedback"
      ]
    },
    {
      icon: Palette,
      title: "Design & Prototyping",
      description: "Developed high-fidelity mockups with focus on intuitive navigation and visual hierarchy",
      details: [
        "Designed consistent UI components",
        "Created interactive prototypes",
        "Established design system and guidelines"
      ]
    },
    {
      icon: Code,
      title: "Development & Testing",
      description: "Built full-stack application with React.js frontend and Node.js backend with Azure SQL",
      details: [
        "Implemented responsive design patterns",
        "Integrated real-time tracking features",
        "Conducted user acceptance testing"
      ]
    },
    {
      icon: TrendingUp,
      title: "Results & Impact",
      description: "Achieved 40% faster response times and support for 1,000+ concurrent users",
      details: [
        "Reduced average order time by 60%",
        "Improved user satisfaction by 85%",
        "Scaled to serve multiple hostel locations"
      ]
    }
  ];

  const insights = [
    "Real-time tracking increased user trust and reduced support queries by 70%",
    "Simplified checkout process improved conversion rate by 45%",
    "Vendor dashboard integration streamlined operations and reduced order errors",
    "Mobile-first design approach led to 90% mobile user adoption"
  ];

  return (
    <section id="case-study" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent-dark">Case Study</Badge>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Campus Food: Design Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A deep dive into how I approached designing and building a food delivery solution 
            for hostel students, from research to implementation
          </p>
        </div>

        {/* Challenge Overview */}
        <Card className="p-8 lg:p-12 glass-card mb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">The Challenge</h3>
              <p className="text-muted-foreground">
                Hostel students struggled with limited food delivery options, long wait times, 
                and lack of real-time order tracking, creating frustration during busy academic periods.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-accent mb-4">The Solution</h3>
              <p className="text-muted-foreground">
                A comprehensive food delivery platform designed specifically for hostel environments, 
                featuring real-time tracking, vendor management, and optimized user experience.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">The Impact</h3>
              <p className="text-muted-foreground">
                40% faster response times, support for 1,000+ concurrent users, and 85% user 
                satisfaction improvement with streamlined ordering process.
              </p>
            </div>
          </div>
        </Card>

        {/* Design Process */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            My Design Process
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <Card 
                key={index} 
                className="p-6 glass-card hover-lift group cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-sm font-medium text-accent">
                    Step {index + 1}
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {step.title}
                </h4>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {step.description}
                </p>
                
                <ul className="space-y-1">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-xs text-muted-foreground">
                      <div className="w-1 h-1 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <Card className="p-8 lg:p-12 glass-card mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Key Design Insights
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {insights.map((insight, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-primary/5">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent font-semibold text-sm">{index + 1}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{insight}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Technologies Used */}
        <Card className="p-8 glass-card mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Technologies & Tools
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-primary mb-3">Design & Research</h4>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Adobe XD", "User Interviews", "Wireframing", "Prototyping"].map((tool) => (
                  <Badge key={tool} variant="outline" className="text-xs">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-accent mb-3">Frontend Development</h4>
              <div className="flex flex-wrap gap-2">
                {["React.js", "JavaScript", "HTML5", "CSS3", "Responsive Design"].map((tool) => (
                  <Badge key={tool} variant="outline" className="text-xs">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary mb-3">Backend & Database</h4>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "Azure SQL", "REST APIs", "Authentication"].map((tool) => (
                  <Badge key={tool} variant="outline" className="text-xs">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="btn-gradient"
            asChild
          >
            <a href="https://github.com/kapil24404/Campus_Food" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              View Full Project on GitHub
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default CaseStudySection;