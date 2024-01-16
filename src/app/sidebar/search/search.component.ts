import { Component } from '@angular/core';
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  localInput = 'Olinda';
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.weatherService.getWeather(this.localInput)
    .subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    })
  }
}
