import { createAction, props } from '@ngrx/store';
import { Weather } from '../models/Weather';

export const getWeather = createAction('[Weather] Get Weather', props<{ city: string; units: string }>());
export const getWeatherSuccess = createAction('[Weather] Get Weather Success', props<{ weather: Weather }>());
export const getWeatherFailure = createAction('[Weather] Get Weather Failure', props<{ error: string }>());
