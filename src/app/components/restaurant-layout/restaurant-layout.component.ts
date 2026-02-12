import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SecondLayoutComponent } from '../second-layout/second-layout.component';
import { TerraceLayoutComponent } from '../terrace-layout/terrace-layout.component';
import { FloorLayoutComponent } from '../floor-layout/floor-layout.component';

@Component({
  selector: 'app-restaurant-layout',
  templateUrl: './restaurant-layout.component.html',
  styleUrls: ['./restaurant-layout.component.scss'],
  imports: [
    MatTabsModule,
    TerraceLayoutComponent,
    FloorLayoutComponent,
    SecondLayoutComponent,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantLayoutComponent {}
