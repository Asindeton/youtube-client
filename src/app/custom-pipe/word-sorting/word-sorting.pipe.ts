import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from 'src/app/search/models/search-item.model';

@Pipe({
  name: 'wordSorting',
})
export class WordSortingPipe implements PipeTransform {
  transform(value: ISearchItem[], ...args: string[]): ISearchItem[] {
    if (args[0].includes('word')) {
      const searchedValue = args[0].split('-')[1];
      const returnedValue = value.filter((elem) =>
        elem.snippet.title.toLowerCase().includes(searchedValue.toLowerCase()),
      );
      return returnedValue;
    }
    return value;
  }
}
