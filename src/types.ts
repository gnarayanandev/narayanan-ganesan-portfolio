export interface SkillItem {
  name: string;
  level?: string;
  description?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  skills: string[];
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
  deliverables: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  clientType: string;
  resultMetric: string;
  metricLabel: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  toolsUsed: string[];
  category: string;
  isPlaceholder: boolean;
}

export interface TimelineItem {
  year: string;
  role: string;
  company: string;
  description: string;
  tags?: string[];
  highlights?: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  companyType: string;
  location: string;
  isPlaceholder: boolean;
}

export interface ToolBadge {
  name: string;
  category: 'AI' | 'Marketing' | 'Dev' | 'Automation';
  logoCode?: string;
  iconName?: string;
  description?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}
