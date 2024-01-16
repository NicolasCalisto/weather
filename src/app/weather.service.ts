import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'ab19d928ad6f4d12ab013014222408';
  private apiUrl = 'http://api.weatherapi.com/v1/current.json';

  constructor(private http: HttpClient) { }

  getWeather(localInput: string): Observable<any> {
    const url = `${this.apiUrl}?key=${this.apiKey}&q=${localInput}`;
    return this.http.get(url);
  }
}
