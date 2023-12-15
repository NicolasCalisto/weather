import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { DefaultCitiesComponent } from './default-cities/default-cities.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SearchComponent, DefaultCitiesComponent, WeatherDetailsComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
