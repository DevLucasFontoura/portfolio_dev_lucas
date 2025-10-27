export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Hora Certa",
    description: "Time control system.",
    technologies: ["React", "Next.js", "Typescript", "Firebase"],
    githubUrl: "https://github.com/lucasfontoura/horacertaweb",
    liveUrl: "https://horacertaweb.web.app/Home/",
    image: "/images/horacerta.jpg"
  },
  {
    id: 2,
    name: "Balancium",
    description: "Financial control.",
    technologies: ["React", "Next.js", "Typescript", "Firebase"],
    githubUrl: "https://github.com/lucasfontoura/horacertaweb",
    liveUrl: "https://balanciumapp.web.app/",
    image: "/images/balancium.jpg"
  },
  {
    id: 3,
    name: "SGI - Sistema de Gestão Interno",
    description: "Internal management system.",
    technologies: ["React", "Next.js", "Typescript", "Firebase"],
    githubUrl: "https://github.com/lucasfontoura/horacertaweb",
    liveUrl: "https://sisecmds.web.app/",
    image: "/images/sgi.jpg"
  }
];
