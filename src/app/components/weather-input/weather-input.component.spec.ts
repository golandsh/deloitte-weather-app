import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInputComponent } from './weather-input.component';
import {By} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {fromAppReducer} from '../../state';

describe('WeatherInputComponent', () => {
  let component: WeatherInputComponent;
  let fixture: ComponentFixture<WeatherInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule,
        StoreModule.forRoot({ apps: fromAppReducer.reducer })],
      declarations: [ WeatherInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
