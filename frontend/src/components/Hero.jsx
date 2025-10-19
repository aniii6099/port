import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";

const Hero = ({ data }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const roles = [
    "AI/ML Developer",
    "GenAI Specialist", 
    "Full-Stack Engineer",
    "Agentic AI Builder",
    "Innovation Explorer"
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;
    
    const typeWriter = () => {
      if (charIndex < currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        charIndex++;
        setTimeout(typeWriter, 100);
      } else {
        setTimeout(() => {
          const eraseTimer = () => {
            if (charIndex > 0) {
              setDisplayText(currentRole.substring(0, charIndex - 1));
              charIndex--;
              setTimeout(eraseTimer, 50);
            } else {
              setCurrentIndex((prev) => (prev + 1) % roles.length);
            }
          };
          setTimeout(eraseTimer, 2000);
        }, 1000);
      }
    };

    typeWriter();
  }, [currentIndex]);

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
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
              TVLS ANIRUDH
            </span>
          </motion.h1>
          
          <motion.div 
            className="h-16 flex items-center justify-center"
            variants={itemVariants}
          >
            <span className="text-2xl md:text-3xl text-gray-300 font-light">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-cyan-400"
              >
                |
              </motion.span>
            </span>
          </motion.div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto"
        >
          Final-year CS student at GITAM University, building AI systems that think, learn, and adapt. 
          Specializing in <span className="text-emerald-400 font-semibold">Agentic AI</span>, 
          <span className="text-cyan-400 font-semibold"> RAG systems</span>, and 
          <span className="text-blue-400 font-semibold"> multimodal interfaces</span>.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white px-8 py-3 text-lg font-semibold"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/CV.pdf';
                link.download = 'Anirudh_TVLS_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 text-lg font-semibold"
              onClick={() => document.querySelector("#projects").scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex items-center justify-center space-x-6"
        >
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/anirudh-tvls-593752278", label: "LinkedIn" },
            { icon: Mail, href: "mailto:ch4random@gmail.com", label: "Email" }
          ].map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                aria-label={social.label}
              >
                <IconComponent size={28} />
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="text-cyan-400" size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;