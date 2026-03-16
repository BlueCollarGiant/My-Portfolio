export interface Project {
  title: string;
  summary: string;
  challenge: string;
  architecture: string;
  value: string;
  tech: string[];
  role: 'Solo Build' | 'Team Project' | 'Capstone';
  liveUrl?: string;
  repoUrl?: string;
}
