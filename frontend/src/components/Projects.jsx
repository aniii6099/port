import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  Trophy,
  Star,
  ArrowRight,
  Code,
  Zap,
  Target
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const Projects = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(data.map(project => project.category))];

  const filteredProjects = filter === "All" 
    ? data 
    : data.filter(project => project.category === filter);

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

  const getStatusColor = (status) => {
    switch(status) {
      case "Production Ready": return "bg-emerald-500";
      case "Award Winning": return "bg-yellow-500";
      case "Research Project": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              A showcase of innovative AI/ML solutions and full-stack applications
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full transition-all duration-200 ${
                    filter === category
                      ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white"
                      : "border-gray-600 text-gray-400 hover:text-cyan-400 hover:border-cyan-400"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 h-full overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className={`${getStatusColor(project.status)} text-white border-0`}>
                          {project.status}
                        </Badge>
                      </div>

                      {/* Award Badge */}
                      {project.subtitle.includes("Winner") && (
                        <div className="absolute top-4 right-4">
                          <Trophy className="text-yellow-400" size={24} />
                        </div>
                      )}
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200 mb-1">
                            {project.title}
                          </h3>
                          <p className="text-sm text-emerald-400 font-medium">
                            {project.subtitle}
                          </p>
                        </div>
                        <ArrowRight className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-200 mt-1" size={20} />
                      </div>

                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 4).map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="outline"
                            className="text-xs border-gray-700 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 4 && (
                          <Badge variant="outline" className="text-xs border-gray-700 text-gray-400">
                            +{project.tech.length - 4}
                          </Badge>
                        )}
                      </div>

                      {/* Impact */}
                      <div className="flex items-center text-sm text-emerald-400">
                        <Target className="mr-2" size={16} />
                        {project.impact}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Project Modal/Detail View */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative">
                    <img 
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Button 
                      variant="ghost"
                      className="absolute top-4 right-4 text-white hover:bg-white/20"
                      onClick={() => setSelectedProject(null)}
                    >
                      ✕
                    </Button>
                  </div>

                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">
                          {selectedProject.title}
                        </h3>
                        <p className="text-lg text-emerald-400 font-medium">
                          {selectedProject.subtitle}
                        </p>
                      </div>
                      <div className="flex space-x-3">
                        <Button variant="outline" size="sm">
                          <Github className="mr-2" size={16} />
                          Code
                        </Button>
                        <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-emerald-500">
                          <ExternalLink className="mr-2" size={16} />
                          Demo
                        </Button>
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {selectedProject.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                          <Zap className="mr-2 text-cyan-400" size={20} />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {selectedProject.features.map((feature, index) => (
                            <li key={index} className="text-gray-300 flex items-start">
                              <Star className="mr-2 mt-1 text-emerald-400 flex-shrink-0" size={16} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                          <Code className="mr-2 text-cyan-400" size={20} />
                          Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tech.map((tech, index) => (
                            <Badge 
                              key={index}
                              className="bg-gradient-to-r from-gray-700 to-gray-600 text-white border-0"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="mt-6">
                          <h5 className="text-lg font-medium text-white mb-2">Project Impact</h5>
                          <p className="text-emerald-400 font-medium">{selectedProject.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;