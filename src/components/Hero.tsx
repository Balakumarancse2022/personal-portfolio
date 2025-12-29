import { Github, Linkedin, Mail, Phone, FileDown, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import TypewriterText from "./TypewriterText";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(195_100%_50%_/_0.15)_0%,transparent_50%)]" />
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [1, 0.6, 1] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2 
        }}
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(222_30%_18%_/_0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(222_30%_18%_/_0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">

          {/* Name with Typewriter Effect */}
          <motion.h1 
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <TypewriterText 
              text="Bala" 
              className="text-foreground" 
              delay={0.5} 
              speed={0.1}
            />{" "}
            <TypewriterText 
              text="Kumaran M" 
              className="gradient-text" 
              delay={1.2} 
              speed={0.1}
            />
          </motion.h1>

          {/* Title with Typewriter */}
          <motion.div 
            className="text-xl md:text-2xl text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TypewriterText 
              text="Software Engineer | Full Stack Developer" 
              delay={2.5} 
              speed={0.03}
            />
          </motion.div>
          
          {/* Description */}
          <motion.p 
            className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4 }}
          >
            B.E. Computer Science graduate specializing in Java, React, Spring Boot, and Blockchain technologies. 
            Building scalable web applications with a passion for clean code and innovative solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4.2 }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#projects">
                View Projects
              </a>
            </Button>
            <Button variant="gradient" size="lg" asChild>
              <a href="/Bala_Kumaran_Resume.pdf" download="Bala_Kumaran_Resume.pdf">
                <FileDown className="w-5 h-5" />
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div 
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4.4 }}
          >
            {[
              { href: "https://github.com/Balakumarancse2022", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/balakumaran008", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:balakumarancse2022@gmail.com", icon: Mail, label: "Email" },
              { href: "tel:+917695980064", icon: Phone, label: "Phone" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-3 rounded-xl bg-secondary/50 border border-border hover:border-primary hover:bg-secondary transition-all duration-300 hover:shadow-[0_0_20px_hsl(195_100%_50%_/_0.3)]"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 4.6 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
