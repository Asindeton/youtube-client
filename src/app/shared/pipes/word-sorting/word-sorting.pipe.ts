import { SortDirection } from './../../../youtube/components/filter/model/filter.model';
import { ISearchItem } from './../../../youtube/components/search/models/search-item.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordSorting',
})
export class WordSortingPipe implements PipeTransform {
  transform(value: ISearchItem[], ...args: string[]): ISearchItem[] {
    if (args[0] !== '') {
      let returnedValue = value.filter((elem) =>
        elem.snippet.title.toLowerCase().includes(args[0].toLowerCase()),
      );
      console.log(args);

      if (args[2] == 'date') {
        returnedValue = returnedValue.sort(
          (a, b) =>
            new Date(a.snippet.publishedAt).getTime() - new Date(b.snippet.publishedAt).getTime(),
        );
      } else if (args[2] == 'count') {
        returnedValue = returnedValue.sort(
          (a, b) => parseInt(a.statistics.viewCount) - parseInt(b.statistics.viewCount),
        );
      } else if (args[2].includes('word')) {
        const searchedValue = args[2].split('-')[1];
        returnedValue = value.filter((elem) =>
          elem.snippet.title.toLowerCase().includes(searchedValue.toLowerCase()),
        );
      }
      if (args[1] == SortDirection.up) {
        returnedValue = returnedValue;
      } else if (args[1] == SortDirection.down) {
        returnedValue = returnedValue.reverse();
      }

      return returnedValue;
    }
    return [];
  }
}
