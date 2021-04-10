import { createReducer, on } from '@ngrx/store';
import { Weather } from '../models/Weather';

import * as appActions from './app.actions';

export const appFeatureKey = 'app';

export interface AppState {
  weathers: Weather[];
}

export const initialState: AppState = {
  weathers: []
};

export const reducer = createReducer(
  initialState,
  on(
    appActions.getWeatherSuccess,
    (state, action): AppState => {
      return {...state, weathers: [...state.weathers, action.weather]};
    }
  )
);

