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
    description: "Plataforma completa de e-commerce com carrinho de compras, pagamentos e painel administrativo.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/lucasfontoura/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app"
  },
  {
    id: 2,
    name: "Task Management App",
    description: "Aplicação para gerenciamento de tarefas com drag-and-drop, categorias e colaboração em equipe.",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/lucasfontoura/task-manager",
    liveUrl: "https://taskmanager-demo.netlify.app"
  },
  {
    id: 3,
    name: "Weather Dashboard",
    description: "Dashboard interativo para visualização de dados meteorológicos com gráficos e mapas.",
    technologies: ["React", "Chart.js", "OpenWeather API", "Leaflet"],
    githubUrl: "https://github.com/lucasfontoura/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.herokuapp.com"
  },
  {
    id: 4,
    name: "Social Media Analytics",
    description: "Ferramenta de análise de redes sociais com métricas em tempo real e relatórios personalizados.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Chart.js"],
    githubUrl: "https://github.com/lucasfontoura/social-analytics",
  },
  {
    id: 5,
    name: "Portfolio Website",
    description: "Website pessoal responsivo com animações e design moderno para showcase de projetos.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/lucasfontoura/portfolio",
    liveUrl: "https://lucasfontoura.dev"
  },
  {
    id: 6,
    name: "Chat Application",
    description: "Aplicação de chat em tempo real com salas privadas, notificações e histórico de mensagens.",
    technologies: ["React", "Socket.io", "Express", "Redis"],
    githubUrl: "https://github.com/lucasfontoura/chat-app",
  }
];
