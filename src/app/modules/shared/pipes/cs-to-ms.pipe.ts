import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'csToMs'
})
export class CsToMsPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return value * 10;
  }

}
