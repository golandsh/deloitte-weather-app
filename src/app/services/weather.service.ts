import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private readonly appId = '0d7303c17ee3d3482cd82a2ad273a90d';

  constructor(private http: HttpClient) { }

  getWeather(city: string, unit: string = 'standard'): Observable<object> {
    return this.http.get(`${this.baseUrl}?q=${city}&units=${unit}&appid=${this.appId}`);
  }
}
