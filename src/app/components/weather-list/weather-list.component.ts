import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { fromAppReducer, fromAppSelectors } from '../../state';
import { Weather } from '../../models/Weather';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {
  weathers$: Observable<Weather[]>;
  weathers: Weather[] = [];

  constructor(private store: Store<fromAppReducer.AppState>) {
    this.weathers$ = this.store.select(fromAppSelectors.getWeather);
  }

  ngOnInit(): void {
    this.weathers$.subscribe((res: Weather[]) => {
      this.weathers = res;
    });
  }

}
