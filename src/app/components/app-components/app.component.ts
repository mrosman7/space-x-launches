import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { ApiService } from '../../services/api/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HttpClientModule],
  providers: [ApiService],
  template: `
  <main>
    <app-header></app-header>
    <div>
      <router-outlet></router-outlet>
    </div>
</main>
`
})
export class AppComponent {
  title = 'space-x-launches';
}
