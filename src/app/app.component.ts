import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  styleUrl: './app.component.css',
  template: `
  <main>
    <header>
        <p>Nav bar placeholder</p>
    </header>
    <div>
      <router-outlet></router-outlet>
    </div>
    <footer>
      <p>created by Mariah Rosman</p>
      <a href="https://www.linkedin.com/in/mariahrosman/">LinkedIn | </a>
      <a href="https://bsky.app/profile/mariahsdevdiary.bsky.social"> BlueSky</a>
    </footer>
</main>
`
})
export class AppComponent {
  title = 'space-x-launches';
}
