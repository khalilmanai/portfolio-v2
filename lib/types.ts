export interface NavItem {
  name: string;
  path: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
  category: string;
}

export interface Experience {
  title: string;
  company: string;
  date: string;
  description: string;
  skills: string[];
}

export interface Education {
  degree: string;
  school: string;
  date: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}