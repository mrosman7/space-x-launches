import { Component, Input } from '@angular/core';
import { StateService } from '../services/state/state.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { map, Observable } from 'rxjs';

// TODO: when image page is refreshed we see a blank page. This is something we would need to update before going to prod

@Component({
  selector: 'app-image-page',
  imports: [NgFor, NgIf, CommonModule],
  template: `
  <div *ngIf="images$ | async as images">
    <div *ngFor="let image of objectValues(images)">
      <img [src]="image" />
    </div>
  </div>
  `,
  styleUrl: './image-page.component.css'
})
export class ImagePageComponent {
  images$!: Observable<{ [key: string]: string; }>;
  hasImages: boolean = false;

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.images$ = this.stateService.imagesState$;
  }

  objectValues(obj: { [key: string]: string }): string[] {
    return Object.values(obj);
  }


}
