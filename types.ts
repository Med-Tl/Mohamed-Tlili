export interface Project {
  title: string;
  company: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface Skill {
  name: string;
  percentage: number;
  logo?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  status: 'Earned' | 'In Progress';
  description?: string;
  credentialUrl?: string;
  duration?: string;
}

export interface NavItem {
  label: string;
  href: string;
}