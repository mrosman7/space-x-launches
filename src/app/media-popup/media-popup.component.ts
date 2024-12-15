import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Launch } from '../interfaces/launch-interface';
import { StateService } from '../services/state/state.service';
import { ImagePageComponent } from "../image-page/image-page.component";
import { RouterLink, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-media-popup',
  imports: [NgIf, RouterLink],
  template: `
    <div class="popup" *ngIf="showPopup">
      <h2>Media links for Flight: {{eventData.rocketName}}, flight #: {{eventData.flight_number}}</h2>
      <!-- some of these Presskit links are http and result in a Mixed Content warning -->
       <!-- TODO: add link validation or checks to make sure all links begin with https -->
      <a href="{{eventData.presskit}}" *ngIf="eventData.presskit">Press Kit</a> 
      <p></p>
      <a href="{{eventData.webcast}}" *ngIf="eventData.webcast">Youtube Webcast</a>
      <p></p>
      <a href="{{eventData.wikipedia}}" *ngIf="eventData.wikipedia">Wikipedia Article</a>
      <p></p>
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
  @Input() eventData: any = [];

  closePopup () {
    this.showPopup = false;
  }

}
