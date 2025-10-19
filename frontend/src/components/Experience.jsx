import React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  Calendar, 
  MapPin,
  Trophy,
  Code,
  Star,
  CheckCircle
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const Experience = ({ data }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case "Internship": return Briefcase;
      case "Achievement": return Trophy;
      default: return Code;
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case "Internship": return "from-blue-400 to-indigo-500";
      case "Achievement": return "from-yellow-400 to-orange-500";
      default: return "from-cyan-400 to-emerald-500";
    }
  };

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional journey and achievements in AI/ML development
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-emerald-400 to-transparent hidden md:block" />

            <div className="space-y-8">
              {data.map((item, index) => {
                const IconComponent = getTypeIcon(item.type);
                const colorGradient = getTypeColor(item.type);
                
                return (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full border-4 border-black hidden md:block" />

                    <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 ml-0 md:ml-16">
                      <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <div className={`bg-gradient-to-r ${colorGradient} p-2 rounded-lg mr-3`}>
                                <IconComponent className="text-black" size={20} />
                              </div>
                              <Badge className={`bg-gradient-to-r ${colorGradient} text-black border-0`}>
                                {item.type}
                              </Badge>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-white mb-1">
                              {item.title}
                            </h3>
                            <p className="text-lg text-cyan-400 font-medium mb-2">
                              {item.company}
                            </p>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                              <div className="flex items-center">
                                <Calendar className="mr-1" size={16} />
                                {item.duration ? item.duration : item.period}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="mr-1" size={16} />
                                {item.location}
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Star className="mr-2 text-emerald-400" size={18} />
                            Key Achievements
                          </h4>
                          <div className="space-y-2">
                            {item.achievements.map((achievement, achIndex) => (
                              <motion.div
                                key={achIndex}
                                whileHover={{ x: 5 }}
                                className="flex items-start space-x-3"
                              >
                                <CheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" size={16} />
                                <span className="text-gray-300 text-sm leading-relaxed">
                                  {achievement}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Code className="mr-2 text-cyan-400" size={18} />
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.tech.map((tech, techIndex) => (
                              <motion.div
                                key={techIndex}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Badge 
                                  variant="outline"
                                  className="border-gray-700 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-200"
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Career Stats */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { label: "Professional Internships", value: "2+", icon: Briefcase },
              { label: "Hackathon Wins", value: "1", icon: Trophy },
              { label: "AI/ML Projects", value: "5+", icon: Code }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card 
                  key={index}
                  className="bg-gray-900/50 border-gray-800 backdrop-blur-sm text-center"
                >
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 p-3 rounded-xl w-fit mx-auto mb-3">
                      <IconComponent className="text-black" size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;