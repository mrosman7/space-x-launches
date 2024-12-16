import { Component } from '@angular/core';
import { StateService } from '../services/state/state.service';

@Component({
  selector: 'app-image-page',
  imports: [],
  template: `
    <p>
      image-page works!
    </p>
  `,
  styleUrl: './image-page.component.css'
})
export class ImagePageComponent {

  constructor(private stateService: StateService) {}
  

}
