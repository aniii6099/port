import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  Calendar,
  Award,
  Target,
  Zap
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const About = ({ data }) => {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 px-4 relative">
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
                About Me
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {data.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Personal Info */}
            <motion.div variants={itemVariants}>
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <GraduationCap className="mr-3 text-cyan-400" size={28} />
                    Education & Background
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 p-3 rounded-lg">
                        <GraduationCap className="text-black" size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          {data.education.degree}
                        </h4>
                        <p className="text-cyan-400 font-medium">
                          {data.education.university}
                        </p>
                        <p className="text-gray-400">
                          Batch: {data.education.batch} • {data.education.status}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="text-emerald-400" size={20} />
                        <span className="text-gray-300">{data.contact.email}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="text-emerald-400" size={20} />
                        <span className="text-gray-300">{data.contact.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="text-emerald-400" size={20} />
                        <span className="text-gray-300">{data.contact.location}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="text-emerald-400" size={20} />
                        <span className="text-gray-300">{data.contact.dob}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Strengths & Internship */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Target className="mr-3 text-emerald-400" size={28} />
                    Core Strengths
                  </h3>
                  
                  <div className="space-y-4">
                    {data.strengths.map((strength, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex items-start space-x-3"
                      >
                        <Zap className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-300 leading-relaxed">{strength}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border-cyan-400/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Award className="mr-3 text-cyan-400" size={28} />
                    Professional Experience
                  </h3>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-cyan-400">
                      {data.internship.company}
                    </h4>
                    <p className="text-gray-300">
                      GenAI Intern • {data.internship.duration} • {data.internship.location}
                    </p>
                    <p className="text-gray-400 mt-3">
                      {data.internship.focus}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Achievement Badges */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "🏆 Hackathon Winner",
                "🎯 AI/ML Specialist", 
                "⚡ Full-Stack Developer",
                "🚀 GenAI Expert",
                "🔬 Research Enthusiast"
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge 
                    variant="outline" 
                    className="px-4 py-2 text-sm border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-200"
                  >
                    {badge}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;