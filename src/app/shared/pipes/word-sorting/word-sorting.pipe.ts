import { ISearchItem } from './../../../youtube/components/search/models/search-item.model';
import { Pipe, PipeTransform } from '@angular/core';

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
