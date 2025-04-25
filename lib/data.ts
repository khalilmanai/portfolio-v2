import { Experience, Education, Project, Skill, SocialLink } from "./types";

export const experiences: Experience[] = [
  {
    title: "Software Development Intern",
    company: "PSC France",
    date: "Feb 2023 – Jun 2023",
    description:
      "Developed and executed cross-platform tests using React, React Native, and Spring Boot. Analyzed specifications to extract business tasks, resolved bugs, and optimized code.",
    skills: [
      "React",
      "React Native",
      "Spring Boot",
      "Testing",
      "Bug Fixing",
      "Code Optimization",
    ],
  },
  {
    title: "Head of Mobile Dev Department",
    company: "ESEN Android Club",
    date: "2022 – 2023",
    description:
      "Led mobile app development initiatives, mentored team members, and oversaw several mobile-based projects using Flutter and React Native.",
    skills: ["Flutter", "React Native", "Team Leadership", "Mentorship"],
  },
  {
    title: "Head of Logistics Department",
    company: "ESEN Android Club",
    date: "2021 – 2022",
    description:
      "Coordinated logistics and team organization for club events and activities related to mobile and software development.",
    skills: ["Teamwork", "Logistics", "Leadership"],
  },
];

export const education: Education[] = [
  {
    degree: "Computer Engineering Degree",
    school: "Higher School of Engineering and Technologies (ESPRIT)",
    date: "2023 – 2026",
    description:
      "Currently pursuing an engineering degree with a focus on mobile and full-stack software development, AI, and system architecture.",
  },
  {
    degree: "Bachelor’s in Applied Computer Science for Management",
    school: "Higher School of Digital Economy (ESEN)",
    date: "2019 – 2023",
    description:
      "Focused on practical software development, project management, and information systems with hands-on web/mobile projects.",
  },
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "EcoPlast",
    description:
      "A mobile app promoting recycling and sustainability. Users can schedule pickups or drop-offs for recyclable waste. Built using React Native and MongoDB.",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    tags: ["React Native", "Expo", "MongoDB", "Express"],
    link: "https://github.com/khalilmanai/EcoPlast_app",
    github: "https://github.com/khalilmanai/EcoPlast_app",
  },
  {
    id: "project-2",
    title: "Servimi",
    description:
      "A mobile and web solution to automate table service in Tunisia. Lets users order food without server interaction via QR codes.",
    image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
    tags: ["React Native", "ReactJS", "Spring Boot", "PhpMyAdmin"],
    link: "https://github.com/khalilmanai/servimi-app",
    github: "https://github.com/khalilmanai/servimi-app",
  },
  {
    id: "project-3",
    title: "Image Generator",
    description:
      "A web app using OpenAI APIs to generate images based on text prompts, exploring AI in creative design workflows.",
    image: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg",
    tags: ["OpenAI", "Next.js", "Tailwind", "API"],
    link: "https://github.com/khalilmanai/image_generator",
    github: "https://github.com/khalilmanai/image_generator",
  },

  {
    id: "project-4",
    title: "RoadGuard",
    description:
      "A real-time road surveillance system using AI (YOLOv8 + OCR) to detect traffic infractions and extract Tunisian license plates. Integrates blockchain and NestJS backend with a Flutter mobile app for managing fines and data securely.",
    image: "https://images.pexels.com/photos/1383834/pexels-photo-1383834.jpeg",
    tags: ["YOLOv8", "OCR", "Flutter", "NestJS", "Blockchain", "AI"],
    link: "https://github.com/khalilmanai/pim_backend", // Replace with actual repo if different
    github: "https://github.com/khalilmanai/pim_backend",
  },
];

export const skills: Skill[] = [
  { name: "Flutter", level: 92, category: "Mobile" },
  { name: "React Native", level: 90, category: "Mobile" },
  { name: "ReactJS", level: 88, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "NestJS", level: 82, category: "Backend" },
  { name: "Symfony", level: 78, category: "Backend" },
  { name: "Spring Boot", level: 75, category: "Backend" },
  { name: "MongoDB", level: 80, category: "Database" },
  { name: "MySQL", level: 78, category: "Database" },
  { name: "Git", level: 90, category: "Tools" },
  { name: "Docker", level: 70, category: "Tools" },
  { name: "Python", level: 70, category: "AI" },
  { name: "YOLOv8", level: 75, category: "AI" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/khalilmanai",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/manai-khalil",
    icon: "Linkedin",
  },
  {
    name: "Email",
    url: "mailto:medkhalilmannai@gmail.com",
    icon: "Mail",
  },
];

export const navItems = [
  { name: "Home", path: "home" },
  { name: "About", path: "about" },
  { name: "Experience", path: "experience" },
  { name: "Skills", path: "skills" },
  { name: "Projects", path: "projects" },
  { name: "Contact", path: "contact" },
];
