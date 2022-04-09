import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumber',
})
export class ShortNumberPipe implements PipeTransform {
  transform(input: number | string, args: number = 2): string | null {
    let exp,
      suffixes = ['K', 'M', 'G', 'T', 'P', 'E'];
    let formattedInput: number = typeof input == 'string' ? Number.parseInt(input) : input;

    if (Number.isNaN(input)) {
      return null;
    }

    if (input < 1000) {
      return formattedInput.toString();
    }

    exp = Math.floor(Math.log(formattedInput) / Math.log(1000));

    // return (formattedInput / Math.pow(1000, exp)).toFixed(args) + suffixes[exp - 1];
    return (
      (formattedInput / Math.pow(1000, exp)).toFixed(args + 1).slice(0, args * -1) +
      suffixes[exp - 1]
    );
  }
}
