import React from "react";
import { motion } from "framer-motion";
import { 
  Brain, 
  Code, 
  Cloud, 
  Cpu,
  ChevronRight
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const Skills = ({ data }) => {
  const iconMap = {
    Brain: Brain,
    Code: Code, 
    Cloud: Cloud,
    Cpu: Cpu
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Technical Arsenal
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive toolkit spanning AI/ML, full-stack development, and cutting-edge technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.categories.map((category, categoryIndex) => {
              const IconComponent = iconMap[category.icon];
              return (
                <motion.div
                  key={categoryIndex}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className={`bg-gradient-to-r ${category.color} p-3 rounded-xl mr-4`}>
                          <IconComponent className="text-black" size={32} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {category.name}
                          </h3>
                          <ChevronRight className="text-gray-400 mt-1" size={20} />
                        </div>
                      </div>

                      <motion.div 
                        className="space-y-3"
                        variants={containerVariants}
                      >
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            variants={skillVariants}
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="group/skill"
                          >
                            <Badge 
                              variant="outline"
                              className="w-full justify-start p-3 text-left border-gray-700 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all duration-200 group-hover/skill:shadow-lg"
                            >
                              <span className="text-cyan-400 mr-2">•</span>
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Skill Count Indicator */}
                      <div className="mt-6 text-center">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${category.color} text-black`}>
                          {category.skills.length} Technologies
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Animated Tech Flow */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="flex flex-wrap justify-center items-center gap-4 text-gray-400 text-sm">
              <span>Specialized in:</span>
              {["Python", "AI/ML", "RAG", "LLMs", "React", "FastAPI", "Azure"].map((tech, index) => (
                <motion.span
                  key={index}
                  animate={{ 
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    delay: index * 0.2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="px-2 py-1 bg-gray-800 rounded-lg text-cyan-400"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;