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
</main>
`
})
export class AppComponent {
  title = 'space-x-launches';
}
