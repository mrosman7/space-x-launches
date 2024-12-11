import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  styleUrl: './app.component.css',
  template: `
  <main>
    <header>
        <p>Nav bar placeholder</p>
    </header>
    <section>
        <app-home></app-home>
    </section>
    <footer>
      <p>created by Mariah Rosman</p>
      <p>LinkedIn: https://www.linkedin.com/in/mariahrosman/</p>
      <p>BlueSky: https://bsky.app/profile/mariahsdevdiary.bsky.social</p>
    </footer>
</main>
`
})
export class AppComponent {
  title = 'space-x-launches';
}
