import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { fromAppReducer, fromAppSelectors } from './state';
import { Weather } from './models/Weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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
