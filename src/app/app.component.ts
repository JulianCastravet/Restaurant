import { Component } from '@angular/core';
import { RestaurantLayoutComponent } from './components/restaurant-layout/restaurant-layout.component';

@Component({
  selector: 'app-root',
  imports: [RestaurantLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'restaurant';
}
