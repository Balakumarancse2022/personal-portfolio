import { FadeIn, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "Python", "Solidity", "HTML", "CSS"]
  },
  {
    title: "Frontend",
    skills: ["React", "Vite", "Progressive Web Apps (PWA)"]
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "Node.js", "Express.js", "REST APIs"]
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL", "Firebase"]
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "Google Cloud (GCP)", "Git", "GitHub"]
  },
  {
    title: "Blockchain",
    skills: ["Ethereum", "Web3.js", "Ethers.js", "Smart Contracts"]
  },
  {
    title: "Tools",
    skills: ["Power BI", "MS Office Suite"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,hsl(280_100%_65%_/_0.05)_0%,transparent_50%)]" />
      
      <div className="container px-6 relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <StaggerItem key={category.title}>
              <motion.div 
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full"
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 40px -15px hsl(195 100% 50% / 0.2)",
                  scale: 1.02
                }}
              >
                <motion.h3 
                  className="font-heading text-lg font-semibold text-primary mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >
                  {category.title}
                </motion.h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span 
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Skills;
