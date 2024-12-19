import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-media-popup',
  imports: [NgIf, RouterLink],
  templateUrl: './media-popup.component.html',
  styleUrls: ['./media-popup.component.css']
})
export class MediaPopupComponent {
  @Input() showPopup: boolean = false;
  @Input() eventData: any = [];
  @Input() imagesAvailable: boolean = true;

  // emit close even to parent when the close button is pressed
  @Output() close = new EventEmitter<void>()

  closePopup () {
    this.close.emit();
  }

}
