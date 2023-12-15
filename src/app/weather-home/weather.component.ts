import { Component } from '@angular/core';
import { DetailsComponent } from './details/details.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [SidebarComponent, DetailsComponent, CurrentWeatherComponent, SidebarComponent],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {

}
