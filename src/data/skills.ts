export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  name: string;
  items: Skill[];
}

export const skills: SkillCategory[] = [
  {
    name: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 95 }
    ]
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Python", level: 75 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "REST APIs", level: 85 }
    ]
  },
  {
    name: "Ferramentas & Outros",
    items: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Figma", level: 75 },
      { name: "Jest", level: 70 },
      { name: "Webpack", level: 65 }
    ]
  }
];
