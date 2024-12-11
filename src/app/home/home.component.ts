import { Component } from '@angular/core';
import { LaunchesGridComponent } from "../launches-grid/launches-grid.component";

@Component({
  selector: 'app-home',
  imports: [LaunchesGridComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Search by flight number, launch or rocket number">
        <button type="button">Search</button>
      </form>
    </section>
    <section>
      <app-launches-grid></app-launches-grid>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
