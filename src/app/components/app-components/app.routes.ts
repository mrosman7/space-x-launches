import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ImagePageComponent } from '../image-page/image-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home Page' },
    { path: 'image-page', component: ImagePageComponent, title: 'Image Page' }
];
