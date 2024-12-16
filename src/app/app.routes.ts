import { Routes } from '@angular/router';
import { ImagePageComponent } from './image-page/image-page.component';
import { HomeComponent } from './home/home.component';
import { MediaPopupComponent } from './media-popup/media-popup.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home Page' },
    { path: 'image-page', component: ImagePageComponent, title: 'Image Page' }
];
