import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly _projects = signal<Project[]>([
    {
      title: 'OmniPlay — Multi-Platform Music Player',
      blurb: 'Aggregated playback with platform adapters, OAuth sign-in, and playlist coordination.',
      tech: ['Angular', 'TypeScript', 'Signals', 'YouTube API', 'Spotify API'],
      liveUrl: 'https://your-live-omniplay-demo.example.com'
    },
    {
      title: 'Future Project — Coming Soon',
      blurb: 'Reserved slot for an upcoming build. Check back shortly.',
      tech: ['Angular', 'TypeScript'],
      liveUrl: 'https://example.com'
    },
    {
      title: 'Sprinkle Sprite — Team CRUD App',
      blurb: '8-bit styled ice-cream shop with Angular signals and forms.',
      tech: ['Angular 19+', 'Signals', 'Forms'],
      liveUrl: 'https://your-live-sprinkle-sprite.example.com'
    }
  ]);

  projects = this._projects.asReadonly();
}
