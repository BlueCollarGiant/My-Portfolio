import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { AboutComponent } from './sections/about/about.component';
import { ContactComponent } from './sections/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, ProjectsComponent, AboutComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  year = new Date().getFullYear();
}

