import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly _projects = signal<Project[]>([
    {
      title: 'OmniPlay — Multi-Platform Music Player',
      blurb: 'Aggregated playback with platform adapters, OAuth sign-in, and playlist coordination.',
      tech: ['Angular', 'TypeScript', 'Signals', 'YouTube API', 'Spotify API'],
      liveUrl: 'https://omniplay.netlify.app'
    },
    {
      title: 'Future Project — Coming Soon',
      blurb: 'Reserved slot for an upcoming build. Check back shortly.',
      tech: ['Angular', 'TypeScript'],
      liveUrl: 'https://example.com'
    },
    {
      title: 'Sprinkle Sprite — Team Project',
      blurb: '8-bit styled ice-cream shop built collaboratively. This card links to the team GitHub repository.',
      tech: ['Angular 20', 'Signals', 'Forms'],
      liveUrl: 'https://github.com/CodeLabs-Students/CL-Group-C',
      repoUrl: 'https://github.com/CodeLabs-Students/CL-Group-C/tree/main'
    }
  ]);

  projects = this._projects.asReadonly();
}
