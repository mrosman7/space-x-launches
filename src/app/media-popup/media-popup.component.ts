import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImagePageComponent } from "../image-page/image-page.component";



@Component({
  selector: 'app-media-popup',
  imports: [NgIf, RouterLink],
  templateUrl: './media-popup.component.html',
   styles: [
    `.popup {
      position: absolute;
      background-color: white;
      border: 1px solid #ccc;
      padding: 20px;
    }`
  ]
})
export class MediaPopupComponent {
  @Input() showPopup!: boolean;
  @Input() eventData: any = [];
  @Input() imagesAvailable: boolean = true;

  closePopup () {
    this.showPopup = false;
  }

}
