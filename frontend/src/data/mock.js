// Mock data for portfolio website

export const personalInfo = {
  name: "Ahmet Yilmaz",
  title: "Full Stack Developer",
  university: "Óbuda University",
  degree: "Computer Science Engineering",
  email: "hello@ahmetyilmaz.dev",
  location: "Budapest, Hungary",
  bio: "I'm a passionate Full Stack Developer studying Computer Science Engineering at Óbuda University. I specialize in building scalable web applications with clean architecture and exceptional user experiences. My approach combines technical excellence with a deep understanding of user needs, resulting in products that not only work flawlessly but feel intuitive and delightful to use.",
  shortBio: "Crafting digital experiences that merge elegant design with robust engineering.",
  resumeUrl: "#",
  socials: {
    github: "https://github.com/ahmetyilmaz",
    linkedin: "https://linkedin.com/in/ahmetyilmaz",
    twitter: "https://twitter.com/ahmetyilmaz",
    email: "mailto:hello@ahmetyilmaz.dev"
  }
};

export const skills = {
  frontend: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 88 },
    { name: "TailwindCSS", level: 92 },
    { name: "Vue.js", level: 75 },
    { name: "Framer Motion", level: 85 }
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Python", level: 85 },
    { name: "FastAPI", level: 82 },
    { name: "Express.js", level: 88 },
    { name: "GraphQL", level: 78 },
    { name: "REST APIs", level: 92 }
  ],
  databases: [
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 88 },
    { name: "Redis", level: 75 },
    { name: "MySQL", level: 80 },
    { name: "Prisma", level: 82 }
  ],
  tools: [
    { name: "Git & GitHub", level: 92 },
    { name: "Docker", level: 80 },
    { name: "AWS", level: 75 },
    { name: "CI/CD", level: 78 },
    { name: "Linux", level: 82 },
    { name: "Figma", level: 70 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "CloudSync Pro",
    description: "A real-time collaborative workspace platform enabling teams to sync documents, manage projects, and communicate seamlessly across devices.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets", "AWS"],
    category: "fullstack",
    github: "https://github.com",
    demo: "https://cloudsync.demo",
    featured: true
  },
  {
    id: 2,
    title: "Neural Dashboard",
    description: "An AI-powered analytics dashboard that visualizes complex data patterns and provides intelligent insights for business decisions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tech: ["React", "D3.js", "Python", "TensorFlow", "FastAPI"],
    category: "fullstack",
    github: "https://github.com",
    demo: "https://neural.demo",
    featured: true
  },
  {
    id: 3,
    title: "CryptoTrack",
    description: "A sleek cryptocurrency portfolio tracker with real-time price updates, portfolio analytics, and customizable alerts.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop",
    tech: ["React", "Node.js", "MongoDB", "WebSockets"],
    category: "fullstack",
    github: "https://github.com",
    demo: "https://crypto.demo",
    featured: false
  },
  {
    id: 4,
    title: "DevFlow UI",
    description: "A modern component library built with accessibility and customization in mind. Features 50+ production-ready components.",
    image: "https://images.unsplash.com/photo-1545670723-196ed0954986?w=800&h=600&fit=crop",
    tech: ["React", "TypeScript", "Storybook", "TailwindCSS"],
    category: "frontend",
    github: "https://github.com",
    demo: "https://devflow.demo",
    featured: true
  },
  {
    id: 5,
    title: "TaskMaster API",
    description: "A robust task management API with authentication, real-time updates, and comprehensive documentation using OpenAPI.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    tech: ["FastAPI", "Python", "PostgreSQL", "Redis", "Docker"],
    category: "backend",
    github: "https://github.com",
    demo: "https://taskmaster.demo",
    featured: false
  },
  {
    id: 6,
    title: "Artisan E-Commerce",
    description: "A premium e-commerce platform for artisan products featuring advanced filtering, wishlist functionality, and secure payments.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    category: "fullstack",
    github: "https://github.com",
    demo: "https://artisan.demo",
    featured: false
  }
];

export const experiences = [
  {
    id: 1,
    type: "education",
    title: "BSc Computer Science Engineering",
    organization: "Óbuda University",
    location: "Budapest, Hungary",
    period: "2022 - Present",
    description: "Focusing on software architecture, algorithms, and full-stack development. Maintaining a strong academic record while working on real-world projects.",
    highlights: ["Dean's List", "Software Engineering Club Lead", "Hackathon Winner 2023"]
  },
  {
    id: 2,
    type: "work",
    title: "Full Stack Developer Intern",
    organization: "TechHub Budapest",
    location: "Budapest, Hungary",
    period: "Jun 2024 - Present",
    description: "Building scalable web applications using React and Node.js. Collaborating with senior developers on architecture decisions and code reviews.",
    highlights: ["Reduced API response time by 40%", "Implemented CI/CD pipeline", "Led frontend refactoring"]
  },
  {
    id: 3,
    type: "work",
    title: "Freelance Web Developer",
    organization: "Self-Employed",
    location: "Remote",
    period: "2021 - 2024",
    description: "Delivered custom web solutions for diverse clients, from small businesses to startups. Focused on clean code and optimal user experience.",
    highlights: ["15+ completed projects", "100% client satisfaction", "Repeat business rate: 80%"]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Dr. Maria Kovács",
    role: "Professor, Óbuda University",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "Ahmet demonstrates exceptional problem-solving abilities and a genuine passion for software engineering. His projects consistently show attention to both technical excellence and user experience."
  },
  {
    id: 2,
    name: "Thomas Weber",
    role: "CTO, TechHub Budapest",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "Working with Ahmet has been a pleasure. His ability to quickly grasp complex systems and deliver high-quality code makes him stand out. He's not just a developer; he's a problem solver."
  },
  {
    id: 3,
    name: "Sarah Mitchell",
    role: "Startup Founder",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "Ahmet built our MVP from scratch, and the results exceeded our expectations. His communication was clear, deadlines were met, and the code quality was production-ready from day one."
  }
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];
