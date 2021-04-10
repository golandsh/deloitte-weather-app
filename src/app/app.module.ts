import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { WeatherInputComponent } from './components/weather-input/weather-input.component';
import { WeatherShowComponent } from './components/weather-show/weather-show.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';

import { fromAppEffects, fromAppReducer } from './state';
import { environment } from 'src/environments/environment';
import {TemperaturePipe} from './pipes/temperature.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherInputComponent,
    WeatherShowComponent,
    WeatherListComponent,
    TemperaturePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    StoreModule.forRoot({ apps: fromAppReducer.reducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Weather App',
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production,
    }),
    EffectsModule.forFeature([fromAppEffects.AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
