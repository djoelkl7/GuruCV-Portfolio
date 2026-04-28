export type SectionId = 'about' | 'resume' | 'works' | 'blog' | 'contact';

export interface NavItem {
  id: SectionId;
  label: string;
  icon: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Work {
  id: string;
  title: string;
  category: string;
  image: string;
  link?: string;
}
