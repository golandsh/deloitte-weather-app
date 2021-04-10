import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import { catchError, map, mergeMap } from 'rxjs/operators';
import { WeatherService } from '../services/weather.service';

import * as appActions from './app.actions';
import {Weather} from '../models/Weather';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private weather: WeatherService) {}

  getWeather = createEffect(() => {
    return this.actions$.pipe(
      ofType(appActions.getWeather),
      mergeMap((action) => this.weather.getWeather(action.city, action.units).pipe(
        map((response: any) => appActions.getWeatherSuccess({weather: {
            searchName: action.city,
            city: response.name,
            unit: action.units,
            temperature: response.main.temp,
            description: response.weather[0].description,
            icon: response.weather[0].icon
          }})),
        catchError((error) => of(appActions.getWeatherFailure(error)))
      ))
    );
  });
}
