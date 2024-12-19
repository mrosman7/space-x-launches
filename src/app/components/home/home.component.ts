import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { map, Observable } from 'rxjs';
import { StateService } from '../../services/state/state.service';
import { LaunchesGridComponent } from "../launches-grid/launches-grid.component";
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-home',
  imports: [LaunchesGridComponent, MatProgressSpinnerModule, CommonModule, HttpClientModule],
  template: `
  <div class="spinner-div">
    <!-- @ToDO: currently getting Expression Changed After Checked error due to state change of isLoading. -->
    <!-- For now, I will remove the spinner and try to resolve this issue if I have time or at a later date -->
    <!-- <mat-spinner *ngIf="isLoading$ | async; gridContent"></mat-spinner> -->
  </div>
    <section #gridContent>
      <app-launches-grid></app-launches-grid>
    </section>
  `,
  styleUrls: ['./home.component.css']
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
