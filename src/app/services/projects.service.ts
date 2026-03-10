import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly _projects = signal<Project[]>([
    {
      title: 'OmniPlay - Multi-Platform Music Player',
      blurb: 'A multi-platform music player that unifies YouTube and Spotify playback behind a clean interface. Built with adapter-based architecture to isolate platform-specific SDK logic, with OAuth sign-in, lazy loading, and coordinated playback across services.',
      tech: ['Angular', 'TypeScript', 'Signals', 'YouTube API', 'Spotify API', 'OAuth'],
      role: 'Solo Build',
      liveUrl: 'https://omniplay.netlify.app',
      repoUrl: 'https://github.com/BlueCollarGiant/music-player'
    },
    {
      title: 'Plumino - Biotechnology Operations Dashboard',
      blurb: 'A full-stack operations dashboard for biotech manufacturing. Monitors fermentation and production data in real time, drawing on my background in production environments and process-focused thinking.',
      tech: ['Angular', 'TypeScript', 'Node.js', 'Firebase'],
      role: 'Capstone',
      liveUrl: 'https://plumino.netlify.app/',
      repoUrl: 'https://github.com/BlueCollarGiant/Plumino'
    },
    {
      title: 'Sprinkle Sprite - Retro Storefront',
      blurb: 'A collaborative team project building a retro-styled storefront experience. Focused on working within a shared codebase, using Git branching workflows, code review, and Angular-based feature delivery.',
      tech: ['Angular', 'TypeScript', 'Signals', 'Forms'],
      role: 'Team Project',
      repoUrl: 'https://github.com/CodeLabs-Students/CL-Group-C/tree/main'
    }
  ]);

  projects = this._projects.asReadonly();
}
