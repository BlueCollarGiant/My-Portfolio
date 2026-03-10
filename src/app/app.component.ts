import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { AboutComponent } from './sections/about/about.component';
import { ContactComponent } from './sections/contact/contact.component';
import { ResumeComponent } from './sections/resume/resume.component';
import { CurrentlyBuildingComponent } from './sections/currently-building/currently-building.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, ProjectsComponent, AboutComponent, ResumeComponent, ContactComponent, CurrentlyBuildingComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  year = new Date().getFullYear();
}
