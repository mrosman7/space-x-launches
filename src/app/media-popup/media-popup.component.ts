import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-media-popup',
  imports: [NgIf],
  template: `
    <div class="popup" *ngIf="showPopup">
      <h2>Placeholder</h2>
      <p>Testing</p>
      <button (click)="closePopup()">Close</button>
    </div>
  `,
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

  closePopup () {
    this.showPopup = false;
  }

}
