import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherShowComponent } from './weather-show.component';
import {StoreModule} from '@ngrx/store';
import {fromAppReducer} from '../../state';

describe('WeatherShowComponent', () => {
  let component: WeatherShowComponent;
  let fixture: ComponentFixture<WeatherShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({ apps: fromAppReducer.reducer })],
      declarations: [ WeatherShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
