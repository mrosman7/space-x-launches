import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
  <main>
    <app-header></app-header>
    <div>
      <router-outlet></router-outlet>
    </div>
</main>
`
})
export class AppComponent {
  title = 'space-x-launches';
}
