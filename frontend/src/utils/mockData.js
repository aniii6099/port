export const mockData = {
  hero: {
    name: "TVLS ANIRUDH",
    roles: [
      "AI/ML Developer",
      "GenAI Specialist", 
      "Full-Stack Engineer",
      "Agentic AI Builder",
      "Innovation Explorer"
    ],
    description: "Final-year CS student at GITAM University, building AI systems that think, learn, and adapt. Specializing in Agentic AI, RAG systems, and multimodal interfaces.",
    resumeUrl: "#",
    social: {
      github: "https://github.com",
      linkedin: "https://www.linkedin.com/in/anirudh-tvls-593752278",
      email: "ch4random@gmail.com"
    }
  },
  
  about: {
    name: "TVLS ANIRUDH",
    title: "AI/ML Developer & GenAI Specialist",
    education: {
      degree: "B.Tech Computer Science",
      university: "GITAM University, Hyderabad",
      batch: "2022-2026",
      status: "Final Year"
    },
    contact: {
      email: "ch4random@gmail.com",
      phone: "9059831983",
      location: "Hyderabad, India",
      dob: "22-12-2004"
    },
    description: "I'm a passionate developer who doesn't just write code but understands the flow of systems across frameworks. My expertise lies in building AI systems that think, speak, and act like humans safely and powerfully.",
    strengths: [
      "System-level thinking with RAG + LLM + Retrieval",
      "Fast prototyping & multimodal interfaces", 
      "Passion for open-source collaboration",
      "Solving real human problems with AI"
    ],
    internship: {
      company: "V-Soft Consulting Corporation Inc",
      duration: "6 months",
      location: "Hyderabad",
      focus: "GenAI development with 2 POC projects"
    }
  },

  skills: {
    categories: [
      {
        name: "AI/ML & GenAI",
        icon: "Brain",
        color: "from-cyan-400 to-blue-500",
        skills: [
          "Large Language Models (LLMs)",
          "Retrieval Augmented Generation (RAG)",
          "Advanced RAG Systems",
          "Agentic AI Frameworks",
          "LangChain & CrewAI",
          "AutoGen & Ollama",
          "ChromaDB & Pinecone",
          "Whisper (STT/TTS)",
          "Machine Learning & Deep Learning"
        ]
      },
      {
        name: "Development",
        icon: "Code",
        color: "from-emerald-400 to-green-500", 
        skills: [
          "Python (Primary)",
          "FastAPI & Flask",
          "React & TypeScript",
          "Next.js & Node.js",
          "SQL & NoSQL Databases",
          "PostgreSQL & MongoDB",
          "Vector Databases",
          "RESTful APIs & GraphQL"
        ]
      },
      {
        name: "Cloud & DevOps",
        icon: "Cloud",
        color: "from-purple-400 to-indigo-500",
        skills: [
          "Microsoft Azure",
          "Docker & Containerization", 
          "ARM Templates",
          "Cloud Deployments",
          "CI/CD Pipelines",
          "Monitoring & Logging",
          "Scalable Architectures"
        ]
      },
      {
        name: "Specialized",
        icon: "Cpu",
        color: "from-orange-400 to-red-500",
        skills: [
          "IoT & Embedded Systems",
          "Playwright Automation",
          "OAuth & Authentication",
          "Wireless Sensor Networks",
          "Multimodal AI Interfaces",
          "Real-time Data Processing",
          "Performance Optimization"
        ]
      }
    ]
  },

  projects: [
    {
      id: 1,
      title: "QueryGenius AI",
      subtitle: "Intelligent Database Performance Optimization Platform",
      description: "Comprehensive AI-powered solution for database performance monitoring and optimization using ML technologies. Reduces query times by up to 80%.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      category: "AI/ML Platform",
      tech: ["Python", "FastAPI", "React", "ML", "PostgreSQL", "Redis"],
      features: [
        "Real-time performance monitoring with live dashboards",
        "AI-powered query analysis with ML models",
        "Intelligent index recommendations",
        "Query rewriting engine for optimization",
        "Multi-database support (PostgreSQL, MySQL, Oracle)",
        "Background processing with Celery workers"
      ],
      impact: "80% reduction in query execution times",
      status: "Production Ready",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Smart AI Farming Assistant", 
      subtitle: "🏆 Hackathon Winner - ₹20,000 Prize",
      description: "End-to-end AI + IoT solution for sustainable agriculture with local-first approach. Won first place at GITAM University Hackathon.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
      category: "IoT + AI",
      tech: ["Python", "Flask", "ESP32", "Mistral", "ChromaDB", "IoT"],
      features: [
        "Real & background modes with ESP32 sensor integration", 
        "On-device Mistral LLM via Ollama for privacy",
        "RAG system with agricultural knowledge base",
        "Multilingual support (English, Hindi, Telugu)",
        "Real-time irrigation monitoring & control",
        "Voice-enabled chatbot with multimodal inputs"
      ],
      impact: "Hackathon Winner with ₹20,000 prize",
      status: "Award Winning",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "NetworkWatch AI",
      subtitle: "Autonomous Network Monitoring & Optimization",
      description: "Full-stack platform for network discovery, device classification, and real-time monitoring with WebSocket-driven live dashboards.",
      image: "https://images.unsplash.com/photo-1558618666-7bd0c90d7fd1?w=800&h=600&fit=crop",
      category: "Network Security",
      tech: ["Python", "FastAPI", "React", "WebSocket", "SQLite", "JWT"],
      features: [
        "Complete network discovery with IP sweep",
        "Auto-classification via vendor/OUI detection", 
        "Live monitoring with WebSocket updates",
        "Modern responsive UI with dark mode",
        "JWT-based authentication system",
        "Real-time alerting and notifications"
      ],
      impact: "Real-time network visibility solution",
      status: "Production Ready", 
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "LSTM Time-Series Forecasting",
      subtitle: "Advanced Forecasting with Drift Detection",
      description: "Intelligent time-series forecasting system using LSTM networks with automatic drift detection and model retraining capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: "Machine Learning",
      tech: ["Python", "TensorFlow", "LSTM", "Pandas", "React", "FastAPI"],
      features: [
        "Advanced LSTM neural network architecture",
        "Automatic drift detection algorithms",
        "Dynamic model retraining pipeline",
        "Interactive visualization dashboard",
        "Real-time prediction capabilities",
        "Performance monitoring & alerts"
      ],
      impact: "Accurate time-series predictions with adaptive learning",
      status: "Research Project",
      github: "#",
      demo: "#"
    },
    {
      id: 5,
      title: "Anomaly Detection System",
      subtitle: "Isolation Forest Algorithm Implementation",
      description: "Robust anomaly detection system for high-dimensional datasets, effective for fraud detection and system monitoring.",
      image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=800&h=600&fit=crop",
      category: "Security AI",
      tech: ["Python", "Scikit-learn", "Pandas", "Flask", "NumPy"],
      features: [
        "Isolation Forest algorithm implementation",
        "High-dimensional data processing",
        "Precision-recall optimization",
        "Scalable anomaly detection",
        "Real-time processing capabilities", 
        "Fraud detection & system monitoring"
      ],
      impact: "Effective detection of rare events and system failures",
      status: "Production Ready",
      github: "#",
      demo: "#"
    }
  ],

  experience: [
    {
      id: 1,
      title: "GenAI Developer Intern",
      company: "V-Soft Consulting Corporation Inc",
      location: "Hyderabad, India",
      duration: "6 months",
      period: "2024",
      type: "Internship",
      description: "Specialized in Generative AI development, working on cutting-edge AI solutions and proof-of-concept projects.",
      achievements: [
        "Developed 2 major GenAI proof-of-concept projects",
        "Trained on advanced GenAI technologies and frameworks",
        "Implemented LLM-based solutions for business problems",
        "Collaborated with senior developers on AI research"
      ],
      tech: ["GenAI", "LLMs", "Python", "AI/ML", "Research"]
    },
    {
      id: 2, 
      title: "Technical Intern",
      company: "BHEL (Bharat Heavy Electricals Limited)",
      location: "India",
      period: "2024",
      type: "Internship",
      description: "Gained hands-on experience in industrial automation and technical systems development.",
      achievements: [
        "Worked on industrial automation projects",
        "Learned about large-scale system architectures",
        "Contributed to technical documentation",
        "Collaborated with engineering teams"
      ],
      tech: ["Industrial Automation", "Technical Systems", "Engineering"]
    },
    {
      id: 3,
      title: "Hackathon Winner",
      company: "GITAM University",
      location: "Hyderabad, India", 
      duration: "August 2025",
      period: "2025",
      type: "Achievement",
      description: "Won first place in university hackathon with Smart AI Farming Assistant project, earning ₹20,000 prize.",
      achievements: [
        "🏆 First Place Winner - ₹20,000 Prize",
        "Built complete AI + IoT solution in 48 hours",
        "Led team of 3 developers to victory",
        "Demonstrated end-to-end technical expertise"
      ],
      tech: ["AI", "IoT", "Team Leadership", "Innovation"]
    }
  ],

  contact: {
    email: "ch4random@gmail.com",
    phone: "9059831983",
    location: "Hyderabad, India",
    social: {
      github: "https://github.com",
      linkedin: "https://www.linkedin.com/in/anirudh-tvls-593752278",
      twitter: "#"
    }
  }
};