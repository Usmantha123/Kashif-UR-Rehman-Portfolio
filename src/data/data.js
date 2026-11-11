/**
 * Central Content Repository for Kashif Ur Rehman's Portfolio
 * All content rendered across components is managed here.
 * Strictly derived from Kashif's authentic CV.
 */

export const personalData = {
  name: "Kashif Ur Rehman",
  initials: "KUR",
  headline: "Backend & Full Stack Developer | Node.js · NestJS · React",
  role: "Full Stack Developer",
  experienceYears: "2.5+",
  tagline: "I build scalable, secure, production-ready web applications.",
  typingRoles: [
    "Backend Systems Engineer",
    "NestJS & Node.js Developer",
    "AI Backend Integration Specialist",
    "Full Stack Developer"
  ],
  location: "Peshawar, Pakistan",
  availabilityStatus: "Available for new opportunities",
  openTo: "Open to remote / on-site roles",
  email: "kashifkhankk799872@gmail.com",
  phone: "+92 302 9119254",
  phoneRaw: "+923029119254",
  whatsappUrl: "https://wa.me/923029119254?text=Hi%20Kashif%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.",
  bookingUrl: import.meta.env.VITE_BOOKING_URL || "",
  cvUpdatedDate: "Nov 2024",
  resumePath: "/resume.pdf",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/kashif-ur-rehman-39238b244/",
    github: "", // Kept clean; shows if populated
    email: "mailto:kashifkhankk799872@gmail.com",
    whatsapp: "https://wa.me/923029119254?text=Hi%20Kashif%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity."
  },
};

export const quickFacts = [
  {
    id: "exp",
    title: "2.5+ Years",
    subtitle: "Professional Experience",
    highlight: "Veroke Pvt Ltd"
  },
  {
    id: "projects",
    title: "10+ Projects",
    subtitle: "Production Deployed",
    highlight: "Scalable Systems"
  },
  {
    id: "payments",
    title: "3 Gateways",
    subtitle: "Stripe · TESS · CyberSource",
    highlight: "Subscriptions & Webhooks"
  },
  {
    id: "cloud",
    title: "Multi-Cloud",
    subtitle: "AWS · Azure · Google Cloud",
    highlight: "Storage & Microservices"
  },
  {
    id: "stack",
    title: "Core Stack",
    subtitle: "NestJS · Node.js · React",
    highlight: "MongoDB & MySQL"
  }
];

export const whyHireMeData = [
  {
    id: "backend-architecture",
    title: "Production-Ready Backends",
    subtitle: "Microservices & Monolithic Architecture",
    description: "Architected complete backend systems in Node.js, Express.js, and NestJS, optimizing high-throughput RESTful APIs and database schemas across MongoDB and MySQL.",
    icon: "Server",
    badge: "10+ Production Deployments"
  },
  {
    id: "security-compliance",
    title: "Secure by Design",
    subtitle: "Hardened Auth & Vulnerability Remediation",
    description: "Expert implementation of JWT authentication, fine-grained RBAC authorization, password hashing, and active remediation of issues flagged by SonarQube & Mend Bolt.",
    icon: "ShieldCheck",
    badge: "SonarQube & Mend Bolt Clean"
  },
  {
    id: "payments-fintech",
    title: "Payments & Webhooks Expert",
    subtitle: "Stripe, TESS Payment & CyberSource",
    description: "Hands-on experience deploying subscription billing, localized payment workflows for the Qatar market, and fault-tolerant transaction webhook reconciliations.",
    icon: "CreditCard",
    badge: "Stripe · TESS · CyberSource"
  },
  {
    id: "ai-cloud",
    title: "AI & Cloud Integrations",
    subtitle: "AI Backend Features & Multi-Cloud Storage",
    description: "Engineered automated AI generation workflows, third-party API integrations, and asset pipelines backed by AWS (S3, SES), Azure Blob, and Google Cloud Storage.",
    icon: "Sparkles",
    badge: "AWS · Azure · Google Cloud"
  }
];

export const techMarqueeData = [
  { name: "Node.js", category: "Runtime", highlight: true },
  { name: "NestJS", category: "Framework", highlight: true },
  { name: "Express.js", category: "Framework" },
  { name: "React", category: "Frontend", highlight: true },
  { name: "MongoDB", category: "NoSQL DB" },
  { name: "MySQL", category: "SQL DB" },
  { name: "Stripe", category: "Fintech", highlight: true },
  { name: "AWS (S3/SES)", category: "Cloud" },
  { name: "Azure Blob", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "SonarQube", category: "Security", highlight: true },
  { name: "Mend Bolt", category: "Security" },
  { name: "GitHub & ADO", category: "CI/CD" },
  { name: "RESTful APIs", category: "Architecture" },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Why Hire Me", href: "#why-hire-me" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const aboutData = {
  bio: "Full Stack Developer with 2.5+ years of professional experience building scalable, secure, and production-ready web applications across React, Node.js, Express.js, and NestJS. Skilled in designing both microservices and monolithic architectures, relational and NoSQL database design (MongoDB, MySQL), and cloud infrastructure (AWS, Azure, Google Cloud). Hands-on experience integrating payment gateways (Stripe, TESS Payment, CyberSource), AI-powered backend features, and third-party APIs. Delivered 10+ production projects spanning AI automation platforms, multi-role enterprise systems, and blockchain-enabled applications, with a strong focus on code quality, application security, and performance. Experienced with version control and CI/CD workflows across GitHub and Azure DevOps (ADO), and proactive in resolving vulnerabilities flagged by SonarQube and Mend Bolt.",
  stats: [
    {
      id: "exp",
      value: 2.5,
      suffix: "+",
      label: "Years Experience",
      decimals: 1,
    },
    {
      id: "projects",
      value: 10,
      suffix: "+",
      label: "Production Projects",
      decimals: 0,
    },
    {
      id: "clouds",
      value: 3,
      suffix: "",
      label: "Cloud Platforms",
      decimals: 0,
    },
    {
      id: "payments",
      value: 3,
      suffix: "",
      label: "Payment Gateways",
      decimals: 0,
    },
  ],
};

export const skillsData = [
  {
    category: "Backend Development",
    icon: "Server",
    skills: ["Node.js", "Express.js", "NestJS", "RESTful API Design"]
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3"]
  },
  {
    category: "Databases & Storage",
    icon: "Database",
    skills: ["MongoDB (Mongoose)", "MySQL (Sequelize)", "Schema Design", "Query Optimization", "Indexing"]
  },
  {
    category: "System Architecture",
    icon: "Layers",
    skills: ["Microservices", "Monolithic Architecture", "API Design Patterns"]
  },
  {
    category: "Cloud & Storage",
    icon: "Cloud",
    skills: ["AWS (S3, SES)", "Azure Blob Storage", "Google Cloud Storage"]
  },
  {
    category: "Payment Integration",
    icon: "CreditCard",
    skills: ["Stripe", "TESS Payment", "CyberSource", "Subscriptions", "Transactions", "Webhook Handling"]
  },
  {
    category: "Application Security",
    icon: "ShieldCheck",
    skills: ["JWT Authentication", "Authorization", "RBAC", "Password Hashing", "API Security Best Practices"]
  },
  {
    category: "Code Quality & DevOps",
    icon: "GitBranch",
    skills: ["Git", "GitHub", "Azure DevOps (ADO)", "SonarQube", "Mend Bolt", "CI/CD"]
  },
  {
    category: "Engineering & Integrations",
    icon: "Cpu",
    skills: [
      "AI Backend Integration",
      "Email Services (SES/SMTP)",
      "Third-Party API Integration",
      "Clean Code Practices",
      "Performance Optimization",
      "API Documentation"
    ]
  }
];

export const experienceData = [
  {
    id: "veroke",
    role: "Backend Developer",
    company: "Veroke Pvt Ltd",
    period: "October 2024 – Present",
    type: "Full-time",
    location: "Peshawar, Pakistan",
    highlights: [
      "Design and develop scalable backend systems using Node.js, Express.js, and NestJS for production applications",
      "Architect complete backend solutions across microservices and monolithic architectures, ensuring high performance, reliability, and security",
      "Optimize RESTful APIs and database schemas using MongoDB and MySQL",
      "Implement secure authentication, authorization, and role-based access control (RBAC)",
      "Integrate payment gateways including Stripe, TESS Payment, and CyberSource",
      "Work with AWS S3, Azure Blob Storage, Google Cloud Storage, and AWS SES",
      "Develop AI-related backend features, including API integrations and data processing for AI services",
      "Manage source control and CI/CD workflows using GitHub and Azure DevOps (ADO)",
      "Identify and remediate code quality and security vulnerabilities flagged by SonarQube and Mend Bolt",
      "Collaborate with cross-functional teams to deliver maintainable, production-ready solutions"
    ]
  }
];

export const projectsData = [
  {
    id: "viral-flicks",
    title: "ViralFlicks",
    category: "AI Platform",
    clientLocation: "Global",
    role: "Lead Backend Developer",
    subtitle: "AI-Based Short Video Generation & Auto-Posting Platform",
    tagline: "High-volume AI content generation pipeline with automated multi-channel scheduling.",
    whatIBuilt: "Designed the full Node.js backend pipeline powering automated AI video creation, auto-posting to TikTok & YouTube, and Stripe subscription billing.",
    description: "Designed and developed the complete backend infrastructure using Node.js with state-of-the-art AI model integrations. Built an automated pipeline that turns prompts into rendered short videos, dispatches them across TikTok, YouTube, and email campaigns, and coordinates subscription renewals via Stripe webhooks.",
    keyPoints: [
      "Designed and developed the complete backend using Node.js with AI integrations",
      "Automated short-video generation workflows and auto-posting to TikTok, YouTube, and email platforms",
      "Stripe subscription billing with webhook handling for renewals and payment lifecycle",
      "Admin Panel built with AdminJS for monitoring, analytics, and platform management",
      "Scalable MongoDB schemas for high-volume content generation and user activity"
    ],
    tags: ["Node.js", "MongoDB", "Stripe", "AdminJS", "AI Integration"],
    liveUrl: "",   // Kept empty; card button stays hidden unless link provided
    githubUrl: "", // Kept empty; card button stays hidden unless link provided
  },
  {
    id: "q-mobility",
    title: "Q Mobility",
    category: "Enterprise Mobility",
    clientLocation: "Qatar Client",
    role: "Backend Architect",
    subtitle: "Rent-A-Car Platform (Qatar-Based Client)",
    tagline: "Comprehensive car rental ecosystem powering fleets, bookings, and regional payments.",
    whatIBuilt: "End-to-end backend architecture with 4-tier RBAC, real-time driver dispatching, and dual Qatar payment gateways (TESS Payment & CyberSource).",
    description: "Architected the complete end-to-end backend for a premier rent-a-car service in Qatar. Engineered multi-role authorization for administrators, fleet managers, drivers, and customers, and integrated local Qatar payment gateways alongside driver dispatch mechanics.",
    keyPoints: [
      "End-to-end backend architecture using Node.js and Express.js",
      "Multi-role system (Admin, Fleet Manager, Driver, Customer)",
      "Vehicle booking and driver assignment system with availability management",
      "Dual payment gateways (TESS Payment & CyberSource) for the Qatar market",
      "Optimized database structures for vehicles, drivers, customers, bookings, and fleet operations"
    ],
    tags: ["Node.js", "Express.js", "TESS Payment", "CyberSource", "RBAC"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "barzah",
    title: "Barzah",
    category: "Blockchain / PropTech",
    clientLocation: "Qatar Client",
    role: "NestJS Backend Engineer",
    subtitle: "Property Investment & Purchase Platform (Qatar-Based Client)",
    tagline: "Enterprise real estate investment system backed by cryptographic blockchain audit trails.",
    whatIBuilt: "Enterprise NestJS backend with MySQL and Sequelize ORM featuring blockchain transaction verification and secure purchase workflows.",
    description: "Developed the production backend for Barzah using NestJS, MySQL, and Sequelize ORM. Incorporates blockchain transaction verification for high-value real estate acquisitions, strict RBAC authorization, and optimized API throughput with rigorous data validation.",
    keyPoints: [
      "Complete backend using NestJS, MySQL, and Sequelize ORM",
      "Blockchain integration for secure property transaction verification",
      "Property investment and purchase workflows with secure authentication and RBAC",
      "RESTful APIs with strong validation, error handling, and performance optimization",
      "Enterprise-level architecture patterns for scalability and maintainability"
    ],
    tags: ["NestJS", "MySQL", "Sequelize", "Blockchain", "RBAC"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "wareed-labs",
    title: "Wareed Labs",
    category: "Healthcare System",
    clientLocation: "Healthcare Client",
    role: "Backend Developer (3 Months)",
    subtitle: "Medical Lab Management System (3 Months)",
    tagline: "Streamlined diagnostic and laboratory operations with automated alert dispatch.",
    whatIBuilt: "Promo code algorithmic validation and automated email dispatch engine coupled with patient notification infrastructure for lab results.",
    description: "Engineered critical backend micro-features for a medical lab system, including custom promo code generation, algorithmic validation, and email dispatch pipelines, coupled with real-time patient notification infrastructure for lab test results and appointments.",
    keyPoints: [
      "Promo code management system: generation, validation, and email distribution",
      "Notification systems for appointments, lab results, and user communications",
      "RESTful APIs using Node.js and Express.js",
      "Optimized database queries and clean, maintainable backend code"
    ],
    tags: ["Node.js", "Express.js", "Notifications", "Email"],
    liveUrl: "",
    githubUrl: "",
  }
];

export const educationData = [
  {
    id: "bs-se",
    degree: "Bachelor of Software Engineering",
    institution: "Islamia College and University, Peshawar, Pakistan",
    period: "2020 – 2024",
    grade: "CGPA: 3.40",
    description: "Rigorous 4-year degree focusing on Software Architecture, Distributed Systems, Data Structures & Algorithms, Database Management Systems, and Object-Oriented Software Design."
  }
];

export const contactData = {
  heading: "Get In Touch",
  subheading: "Open to new opportunities and interesting projects. Let's talk.",
  email: "kashifkhankk799872@gmail.com",
  phone: "+92 302 9119254",
  phoneRaw: "+923029119254",
  location: "Peshawar, Pakistan",
  linkedin: "https://www.linkedin.com/in/kashif-ur-rehman-39238b244/",
  whatsappUrl: "https://wa.me/923029119254?text=Hi%20Kashif%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.",
};
