import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly _projects = signal<Project[]>([
    {
      title: 'OmniPlay - Multi-Platform Music Player',
      summary:
        'A music integration platform that pulls Spotify and YouTube into a single unified playlist, letting users play songs from both services in one continuous queue.',
      challenge:
        'Each platform has its own API and playback behavior. Getting them to operate together in a single song list required handling them independently while keeping the user experience seamless.',
      architecture:
        'Built platform-specific integration layers for the YouTube and Spotify APIs with OAuth sign-in, coordinating playback state so songs from either service play in sequence.',
      value:
        'Users can mix Spotify and YouTube tracks in one playlist without switching apps or losing their place.',
      tech: ['Angular', 'TypeScript', 'Signals', 'YouTube API', 'Spotify API', 'OAuth'],
      role: 'Solo Build',
      liveUrl: 'https://omniplay.netlify.app',
      repoUrl: 'https://github.com/BlueCollarGiant/music-player',
    },
    {
      title: 'Plumino - Employee Operations Portal',
      summary:
        'A capstone project built in collaboration with a real developer from Plumino. An employee portal for a biotech company using realistic company data provided by the client.',
      challenge:
        'Work with actual industry expectations and real data structures to build something close to what a professional environment requires, not just a class exercise.',
      architecture:
        'Role-based employee portal with data editing permissions tied to employee roles. Charts and data visualizations update in real time as data is entered.',
      value:
        'Gave hands-on experience working under real-world guidance, shipping features against actual client expectations rather than academic requirements.',
      tech: ['Angular', 'TypeScript', 'Node.js', 'Firebase'],
      role: 'Capstone',
      liveUrl: 'https://plumino.netlify.app/',
      repoUrl: 'https://github.com/BlueCollarGiant/Plumino',
    },
    {
      title: 'Sprinkle Sprite - 8-Bit Ice Cream Shop',
      summary:
        'My first team project. A retro 8-bit themed ice cream shop storefront built collaboratively with a group of developers.',
      challenge:
        'Coordinate with teammates in a shared codebase for the first time, managing conflicting changes and keeping the project moving.',
      architecture:
        'Angular application built across a team using shared component structure and Git-based collaboration.',
      value:
        'First real experience working in a team development environment, practicing the habits that carry into every project since.',
      tech: ['Angular', 'TypeScript', 'Signals', 'Forms'],
      role: 'Team Project',
      repoUrl: 'https://github.com/CodeLabs-Students/CL-Group-C/tree/main',
    },
  ]);

  projects = this._projects.asReadonly();
}
