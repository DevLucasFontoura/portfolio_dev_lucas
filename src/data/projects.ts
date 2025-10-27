export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "E-commerce Platform",
    description: "Complete e-commerce platform with shopping cart, payments and admin panel.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/lucasfontoura/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app"
  },
  {
    id: 2,
    name: "Task Management App",
    description: "Task management application with drag-and-drop, categories and team collaboration.",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/lucasfontoura/task-manager",
    liveUrl: "https://taskmanager-demo.netlify.app"
  },
  {
    id: 3,
    name: "Weather Dashboard",
    description: "Interactive dashboard for weather data visualization with charts and maps.",
    technologies: ["React", "Chart.js", "OpenWeather API", "Leaflet"],
    githubUrl: "https://github.com/lucasfontoura/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.herokuapp.com"
  },
  {
    id: 4,
    name: "Social Media Analytics",
    description: "Social media analytics tool with real-time metrics and custom reports.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Chart.js"],
    githubUrl: "https://github.com/lucasfontoura/social-analytics",
  },
  {
    id: 5,
    name: "Portfolio Website",
    description: "Responsive personal website with animations and modern design for project showcase.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/lucasfontoura/portfolio",
    liveUrl: "https://lucasfontoura.dev"
  },
  {
    id: 6,
    name: "Chat Application",
    description: "Real-time chat application with private rooms, notifications and message history.",
    technologies: ["React", "Socket.io", "Express", "Redis"],
    githubUrl: "https://github.com/lucasfontoura/chat-app",
  }
];
