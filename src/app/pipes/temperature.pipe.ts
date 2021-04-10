import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'temperature'})
export class TemperaturePipe implements PipeTransform {
  transform(value: any): any {
    if (value > 0) {
      return `+${value}`;
    }
    return value;
  }
}
