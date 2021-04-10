import {Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { fromAppReducer, fromAppSelectors } from '../../state';
import { Weather } from '../../models/Weather';

@Component({
  selector: 'app-weather-show',
  templateUrl: './weather-show.component.html',
  styleUrls: ['./weather-show.component.scss']
})
export class WeatherShowComponent implements OnInit {
  @Input() searchName = '';
  iconUrl = 'https://openweathermap.org/img/w/';
  url = '';
  weathers$: Observable<Weather[]>;
  weather: Weather | undefined;

  constructor(private store: Store<fromAppReducer.AppState>) {
    this.weathers$ = this.store.select(fromAppSelectors.getWeather);
  }

  ngOnInit(): void {
    this.weathers$.subscribe((res: Weather[]) => {
      this.weather = res.find(w => w.searchName === this.searchName);
      this.url = `${this.iconUrl}${this.weather?.icon}.png`;
    });
  }

}
