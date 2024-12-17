import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { map, Observable } from 'rxjs';
import { StateService } from '../../services/state/state.service';
import { LaunchesGridComponent } from "../launches-grid/launches-grid.component";


@Component({
  selector: 'app-home',
  imports: [LaunchesGridComponent, MatProgressSpinnerModule, CommonModule],
  template: `
  <div class="spinner-div">
    <mat-spinner *ngIf="isLoading$ | async; gridContent"></mat-spinner>
  </div>
    <section #gridContent>
      <app-launches-grid></app-launches-grid>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  isLoading$!: Observable<boolean>;

  constructor( private stateService: StateService) {}

  ngOnInit(any: void) {
    this.isLoading$ = this.stateService.state$.pipe(
      map(state => state.isLoading)
    );
  }

}
