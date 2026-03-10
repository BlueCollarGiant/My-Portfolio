export interface Project {
  title: string;
  blurb: string;
  tech: string[];
  role: 'Solo Build' | 'Team Project' | 'Capstone';
  liveUrl?: string;
  repoUrl?: string;
}

