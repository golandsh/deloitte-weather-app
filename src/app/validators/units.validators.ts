import { FormControl, ValidationErrors } from '@angular/forms';

export function unitsValidation(control: FormControl): ValidationErrors | null {
  if (control.value) {
    const correctValues = ['metric', 'standard', 'imperial'];
    if (correctValues.indexOf(control.value) === -1) {
      return {unitsValidation: true};
    }
  }
  return null;
}
