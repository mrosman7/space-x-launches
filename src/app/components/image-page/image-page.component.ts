import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '../../services/state/state.service';

/* 
@TODO: when image page is refreshed we see a blank page rather than the same image-page we were just on. 
This is something we would need to update before going to prod (introduce caches)
*/

@Component({
  selector: 'app-image-page',
  imports: [NgFor, NgIf, CommonModule],
  templateUrl: './image-page.component.html',
  styleUrls: ['./image-page.component.css']
})
export class ImagePageComponent {
  images$!: Observable<{ [key: string]: string; }>;

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.images$ = this.stateService.imagesState$;
  }

  /* We need to cast ths images to a list because the response from the API
  is an Object. For example {0: "imageUR"}
  */
  objectValues(obj: { [key: number]: string }): string[] {
    return Object.values(obj);
  }
}

