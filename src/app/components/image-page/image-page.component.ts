import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '../../services/state/state.service';

// TODO: when image page is refreshed we see a blank page. This is something we would need to update before going to prod

@Component({
  selector: 'app-image-page',
  imports: [NgFor, NgIf, CommonModule],
  templateUrl: './image-page.component.html',
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
