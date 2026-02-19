export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  company: string;
  domain: string;
  role: string;
  description: string;
  responsibilities: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  github: string;
  location: string;
}

export interface ContentPost {
  id: string;
  type: 'achievement' | 'article' | 'insight' | 'milestone';
  title: string;
  description: string;
  content?: string;
  date: Date;
  tags?: string[];
  readTime?: number;
  icon?: string;
  link?: string;
  featured?: boolean;
}
