import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LaunchesGridComponent } from "../launches-grid/launches-grid.component";


@Component({
  selector: 'app-home',
  imports: [LaunchesGridComponent, MatProgressSpinnerModule, CommonModule, HttpClientModule],
  template: `
    <section>
      <app-launches-grid></app-launches-grid>
    </section>
  `
})
export class HomeComponent {

  constructor() {}

}
