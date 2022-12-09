import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeToMinSec'
})
export class TimeToMinutesandseconds implements PipeTransform {

  transform(value: number): string {
    let min = Math.floor(value / 60);
    let sec = value % 60;
    return min + "min " + sec + "sec.";
  }

}
