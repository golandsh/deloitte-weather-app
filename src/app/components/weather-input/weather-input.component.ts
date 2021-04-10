import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { fromAppReducer, fromAppActions } from '../../state';
import { unitsValidation } from '../../validators/units.validators';

@Component({
  selector: 'app-weather-input',
  templateUrl: './weather-input.component.html',
  styleUrls: ['./weather-input.component.scss']
})
export class WeatherInputComponent implements OnInit {
  @Input() cityName = '';
  @Input() unitName = '';
  enabled = true;

  form: FormGroup = this.formBuilder.group({
    city: new FormControl(this.cityName, [Validators.required]),
    units: new FormControl(this.unitName, [Validators.required, unitsValidation])
  });

  cities = ['Kiev', 'Tel Aviv', 'London', 'New York', 'Amsterdam'];
  city = '';

  constructor(private formBuilder: FormBuilder, private store: Store<fromAppReducer.AppState>) {}

  ngOnInit(): void {}

  submit(): void {
    if (this.form.valid) {
      this.store.dispatch(
        fromAppActions.getWeather({city: this.form.value.city, units: this.form.value.units})
      );
      this.city = this.form.value.city;
      this.enabled = false;
    }
  }
}
