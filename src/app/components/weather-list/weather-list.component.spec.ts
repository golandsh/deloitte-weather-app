import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherListComponent } from './weather-list.component';
import {StoreModule} from '@ngrx/store';
import {fromAppReducer} from '../../state';

describe('WeatherListComponent', () => {
  let component: WeatherListComponent;
  let fixture: ComponentFixture<WeatherListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({ apps: fromAppReducer.reducer })],
      declarations: [ WeatherListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
