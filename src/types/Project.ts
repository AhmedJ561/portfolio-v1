export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    technologies: string[];
    category: string;
    demoUrl?: string;
    githubUrl?: string;
    features?: string[];
  }
  