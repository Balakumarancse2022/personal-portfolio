import { Trophy, Award, FileText, Heart, Lightbulb, Users } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "framer-motion";

const achievements = [
  {
    icon: Trophy,
    title: "1st Place",
    description: "National Level Technical Symposium",
    color: "text-yellow-400"
  },
  {
    icon: Award,
    title: "3rd Place",
    description: "TANSOM Hackathon",
    color: "text-amber-400"
  },
  {
    icon: FileText,
    title: "5+ Technical Papers",
    description: "Presented at various events",
    color: "text-primary"
  },
  {
    icon: Heart,
    title: "NSS Volunteer",
    description: "Regular Blood Donor",
    color: "text-rose-400"
  },
  {
    icon: Lightbulb,
    title: "Patent Drafting",
    description: "Participated in innovation workshop",
    color: "text-accent"
  },
  {
    icon: Users,
    title: "Google Student Ambassador",
    description: "Selected campus representative",
    color: "text-emerald-400"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Awards & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognition for academic excellence, technical innovation, and community service
          </p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <StaggerItem key={index}>
              <motion.div 
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                whileHover={{ y: -4 }}
              >
                <motion.div 
                  className={`mb-4 ${achievement.color}`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <achievement.icon className="w-10 h-10" />
                </motion.div>
                <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Achievements;
