import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly _projects = signal<Project[]>([
    {
      title: 'OmniPlay - Multi-Platform Music Player',
      summary:
        'A multi-platform player experience that unifies YouTube and Spotify playback through a single interface.',
      challenge:
        'Bridge different platform SDK behavior while keeping playback predictable for users.',
      architecture:
        'Implemented adapter-based integration layers, OAuth sign-in, and coordinated player state handling.',
      value:
        'Delivered a cleaner listening workflow with fewer context switches between services.',
      tech: ['Angular', 'TypeScript', 'Signals', 'YouTube API', 'Spotify API', 'OAuth'],
      role: 'Solo Build',
      liveUrl: 'https://omniplay.netlify.app',
      repoUrl: 'https://github.com/BlueCollarGiant/music-player',
    },
    {
      title: 'Plumino - Biotechnology Operations Dashboard',
      summary:
        'A full-stack dashboard for biotech manufacturing visibility and real-time production monitoring.',
      challenge:
        'Translate complex fermentation and production inputs into clear operational signals.',
      architecture:
        'Built Angular frontend workflows with Node.js-backed data handling and Firebase integration.',
      value:
        'Improved decision visibility for process-focused teams operating under time-sensitive conditions.',
      tech: ['Angular', 'TypeScript', 'Node.js', 'Firebase'],
      role: 'Capstone',
      liveUrl: 'https://plumino.netlify.app/',
      repoUrl: 'https://github.com/BlueCollarGiant/Plumino',
    },
    {
      title: 'Sprinkle Sprite - Retro Storefront',
      summary:
        'A collaborative storefront project delivered in a shared Angular codebase with team workflows.',
      challenge:
        'Ship frontend features collaboratively while maintaining consistency across shared components.',
      architecture:
        'Used modular Angular feature work, branching workflows, and team review loops to coordinate delivery.',
      value:
        'Strengthened production-style collaboration habits across planning, code review, and integration.',
      tech: ['Angular', 'TypeScript', 'Signals', 'Forms'],
      role: 'Team Project',
      repoUrl: 'https://github.com/CodeLabs-Students/CL-Group-C/tree/main',
    },
  ]);

  projects = this._projects.asReadonly();
}
