import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-media-popup',
  imports: [NgIf, RouterLink],
  templateUrl: './media-popup.component.html',
  styleUrl: './media-popup.component.css'
})
export class MediaPopupComponent {
  @Input() showPopup!: boolean;
  @Input() eventData: any = [];
  @Input() imagesAvailable: boolean = true;

  closePopup () {
    this.showPopup = false;
  }

}
