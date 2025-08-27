import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Code2, Palette } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "React.js", "JavaScript", "TypeScript", "HTML/CSS", 
    "Node.js", "Express.js", "MySQL", "Azure SQL",
    "Figma", "Adobe XD", "UI/UX Design", "Prototyping",
    "Git", "Docker", "Jenkins", "VS Code"
  ];

  const certifications = [
    {
      title: "NPTEL Computer Organization & Architecture",
      status: "Elite Gold - Top 1%",
      date: "Oct 2023",
      icon: Award
    },
    {
      title: "Web Development Certification", 
      status: "Teachnook x IIT Bhubaneswar",
      date: "Mar 2023",
      icon: Code2
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating meaningful digital experiences that solve real problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Bio & Education */}
          <div className="space-y-8">
            
            {/* Bio */}
            <Card className="p-8 glass-card hover-lift">
              <div className="flex items-center mb-6">
                <Palette className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">My Story</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a Computer Science Engineering student at Chandigarh University with a passion for 
                creating intuitive user experiences. My journey began with development but evolved into 
                a love for design thinking and user-centered solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe great design happens at the intersection of aesthetics and functionality. 
                Whether I'm coding a full-stack application or wireframing a mobile interface, 
                I focus on creating experiences that delight users and solve real problems.
              </p>
            </Card>

            {/* Education */}
            <Card className="p-8 glass-card hover-lift">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div>
                <h4 className="text-xl font-medium text-foreground">
                  B.Tech in Computer Science & Engineering
                </h4>
                <p className="text-primary font-medium">Chandigarh University, Mohali</p>
                <p className="text-muted-foreground">2022 - 2026 • CGPA: 8.27/10</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Relevant Coursework: Data Structures, Software Engineering, Database Management, 
                  UI/UX Design Principles, DevOps & Cloud Native
                </p>
              </div>
            </Card>

          </div>

          {/* Right Column - Skills & Certifications */}
          <div className="space-y-8">
            
            {/* Skills */}
            <Card className="p-8 glass-card hover-lift">
              <div className="flex items-center mb-6">
                <Code2 className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Technical Skills</h3>
              </div>
              <div className="space-y-4">
                
                <div>
                  <h4 className="font-medium text-accent mb-2">Frontend & Design</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.slice(0, 8).map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-accent mb-2">Design & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.slice(8).map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="bg-accent/10 text-accent-dark hover:bg-accent/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

              </div>
            </Card>

            {/* Certifications */}
            <Card className="p-8 glass-card hover-lift">
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <cert.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{cert.title}</h4>
                      <p className="text-accent font-medium text-sm">{cert.status}</p>
                      <p className="text-muted-foreground text-sm">{cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;