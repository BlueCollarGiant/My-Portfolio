import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly _projects = signal<Project[]>([
    {
      title: 'OmniPlay — Multi-Platform Music Player',
      blurb: 'Aggregated playback with platform adapters, OAuth sign-in, and playlist coordination.',
      tech: ['Angular', 'TypeScript', 'Signals', 'YouTube API', 'Spotify API'],
      liveUrl: 'https://omniplay.netlify.app',
      repoUrl: 'https://github.com/BlueCollarGiant/music-player'
    },
    {
      title: 'Plumino — Biotechnology Operations Dashboard',
      blurb: 'Capstone project simulating an advanced manufacturing operations dashboard for amino acid production. Features real-time monitoring and analytics for fermentation technology processes.',
      tech: ['TypeScript', 'Angular', 'Node.js', 'Full-Stack'],
      liveUrl: 'https://plumino.netlify.app/',
      repoUrl: 'https://github.com/BlueCollarGiant/Plumino'
    },
    {
      title: 'Sprinkle Sprite — Team Project',
      blurb: '8-bit styled ice-cream shop built collaboratively. This card links to the team GitHub repository.',
      tech: ['Angular 20', 'Signals', 'Forms'],
      repoUrl: 'https://github.com/CodeLabs-Students/CL-Group-C/tree/main'
    }
  ]);

  projects = this._projects.asReadonly();
}
