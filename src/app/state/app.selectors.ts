import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from './app.reducer';

// Selector functions
const appState = createFeatureSelector<AppState>('apps');

export const getWeather = createSelector(appState, (state) => state.weathers);
