import { 
  Code2, 
  Cpu, 
  BarChart3, 
  Workflow, 
  Database, 
  Languages
} from 'lucide-react';

export const portfolioData = {
  name: "Aniket Kote",
  firstName: "Aniket",
  lastName: "Kote",
  role: "Data Analyst & Automation Engineer",
  email: "aniket.kote080799@gmail.com",
  phone: "+91-9405492147",
  phoneAlt: "+44-7823704335",
  linkedin: "https://linkedin.com/in/aniket-kote-a14826169",
  github: "https://github.com/Aniket-Kote",
  resumeLink: "https://drive.google.com/file/d/1XyREWrKKXJ4ploehYCm9pJ4UOM357T0e/view?usp=sharing",
  location: "London, UK",
  
  hero: {
    greeting: "Hey, I'm",
    mantras: "Automate. Analyze. Implement.",
    availability: "Available for New Projects"
  },

  about: {
    subtitle: "Data Analyst and Automation Engineer with 3+ years of experience delivering data-driven solutions.",
    description: [
      "I am a Data Analyst and Automation Engineer specializing in Generative AI systems, including RAG pipelines, LLM-powered applications, and agentic AI workflows for enterprise use cases.",
      "With over 3 years of experience, I excel in prompt engineering, context management, and building scalable AI microservices that integrate structured and unstructured data for high-impact business outcomes."
    ],
    stats: [
      { label: "Years Exp", value: "3+" },
      { label: "Projects", value: "20+" },
      { label: "Tools", value: "12+" },
      { label: "Specialist", value: "AI" }
    ]
  },

  skills: [
    { name: "Python", icon: Code2, description: "Expert in Pandas, NumPy, scikit-learn for data science and automation." },
    { name: "Generative AI", icon: Cpu, description: "Specializing in RAG pipelines, LLM-powered apps, and Agentic AI workflows." },
    { name: "RPA", icon: Workflow, description: "UiPath, Electroneek, and Selenium for intelligent process optimization." },
    { name: "Data Analytics", icon: BarChart3, description: "Advanced Power BI, Google Looker, and Excel for business insights." },
    { name: "SQL", icon: Database, description: "Advanced SQL, PostgreSQL, MongoDB, Oracle, and NoSQL database management." },
    { name: "Automation", icon: Workflow, description: "n8n, custom Python scripts, and AI agents for workflow efficiency." },
    { name: "Prompt Engineering", icon: Languages, description: "Expert in context management and building scalable AI microservices." },
    { name: "Fullstack AI", icon: Code2, description: "Integrating structured and unstructured data for high-impact outcomes." },
  ],

  projects: [
    {
      title: "NutriTag (Master's Project)",
      description: "AI/ML based nutrition system to act as Nutritionist. Integrated Gemini and built/trained models to increase efficiency and provide accurate data.",
      tags: ["AI/ML", "Gemini API", "Python", "Data Science"],
      link: "#",
      demoLink: "#"
    },
    {
      title: "Cleani-lyzer",
      description: "Python-based AI data cleaning web app for EDA and automated report summaries. Streamlines data preparation for analytics.",
      tags: ["Python", "GenAI", "EDA", "Automation"],
      link: "https://github.com/Aniket-Kote/data-cleaner_analyzer",
      demoLink: "https://drive.google.com/file/d/1wwq6OwX9pyhfD31eBkmhOt6KnP5CZBrB/view?usp=sharing"
    },
    {
      title: "EBITDA & Employee Allocation",
      description: "Built a Power BI dashboard to track financial and workforce KPIs, improving decision-making efficiency for enterprise clients.",
      tags: ["Power BI", "Data Analytics", "Finance", "BI"],
      link: "#",
      demoLink: "#"
    },
    {
      title: "Data Extractor for CA",
      description: "Designed an intelligent extractor to gather required data from invoices to reduce 90% of manual effort for Chartered Accountants.",
      tags: ["Python", "OCR", "Automation", "Efficiency"],
      link: "#",
      demoLink: "#"
    }
  ],

  experience: [
    {
      title: "Consultant (Fullstack, Ai & Automation)",
      company: "Dextra Labs, Mumbai",
      period: "Dec 2025 - Present",
      role: "AI Architect & Technical Lead",
      description: [
        "Architected and implemented enterprise-grade Retrieval-Augmented Generation (RAG) pipelines for knowledge assistants.",
        "Designed and deployed agentic AI systems capable of multi-step reasoning and autonomous workflow execution.",
        "Led PoC initiatives to evaluate GenAI feasibility and demonstrate business value to clients.",
        "Acted as client-facing technical lead, translating business needs into production-ready AI systems.",
        "Automated workflows and built AI agents to increase user engagement and decision-making efficiency."
      ]
    },
    {
      title: "Freelancer",
      company: "Automan Solutions",
      period: "May 2025 - Present",
      role: "AI Solutions Developer",
      description: [
        "Built custom AI-powered applications for small businesses, improving workflow efficiency.",
        "Developed multiple AI agents for automation, customer support, and operational insights.",
        "Collaborated with business owners to deliver tailored AI-driven solutions to streamline operations."
      ]
    },
    {
      title: "GenAI Intern",
      company: "IGT Solutions, Remote",
      period: "Jan 2025 - Apr 2025",
      role: "AI Research & Development",
      description: [
        "Built a Generative AI chatbot with integrated vector database for intelligent automation.",
        "Designed intent recognition and sentiment tagging features to enhance customer response automation.",
        "Worked with engineering teams to improve AI model accuracy and process efficiency."
      ]
    },
    {
      title: "Data Analyst & RPA Developer",
      company: "Freelance (CreoNexTech, Remote)",
      period: "Oct 2023 - Apr 2025",
      role: "Data Analytics & Automation",
      description: [
        "Developed SQL-based dashboards and Power BI reports for operational and performance analytics.",
        "Implemented automation pipelines to optimize data ingestion, reducing data latency by 40%.",
        "Conducted data pattern and trend analysis using Python to identify improvement opportunities.",
        "Presented insights to clients, driving improved reporting accuracy and process efficiency."
      ]
    },
    {
      title: "Data Analyst & RPA Developer",
      company: "Neebal Technologies, Mumbai",
      period: "Jan 2022 - Sep 2023",
      role: "Data Analytics & Process Automation",
      description: [
        "Designed data dashboards and performance metrics in Power BI, improving visibility across departments.",
        "Created ETL workflows using Python and SQL to automate data cleaning and reporting tasks.",
        "Built automation scripts for email alerts, data transformation, and reporting, reducing manual work by 70%.",
        "Delivered real-time KPI dashboards for operational and business insights.",
        "Automated multiple business processes for internal teams as well as clients."
      ]
    }
  ],

  education: [
    {
      degree: "MSc. Data Science",
      institution: "University of Greenwich, UK",
      period: "2024 - 2025",
      focus: "Machine Learning, Data Engineering, Business Intelligence"
    },
    {
      degree: "B.E. Computer Science",
      institution: "Savitribai Phule Pune University",
      period: "2018 - 2022",
      focus: "CGPA: 8.67"
    }
  ]
};
