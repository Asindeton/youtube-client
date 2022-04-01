import { Component, Input, OnChanges } from '@angular/core';
import * as data from 'src/assets/data/response.json';
import { ISearchItem } from 'src/app/search/models/search-item.model';
import { ISearchResponse } from 'src/app/search/models/search-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnChanges {
  @Input() public searchWord!: string;

  @Input() public sortBy!: string;

  @Input() public sortDirection: string = 'up';

  responseData: ISearchResponse = data;

  items: ISearchItem[] = this.responseData.items;

  ngOnChanges(): void {
    this.searchResultHandler();
    this.sortResultHandler();
  }

  searchResultHandler() {
    this.items = this.responseData.items;
    if (this.searchWord.trim() == '') {
      this.items = [];
    } else {
      this.items = this.items.filter((item) =>
        item.snippet.title.toLowerCase().includes(this.searchWord.toLowerCase()),
      );
    }
  }

  sortResultHandler() {
    if (this.sortBy == 'date') {
      this.items = this.items.sort(
        (a, b) =>
          new Date(a.snippet.publishedAt).getTime() - new Date(b.snippet.publishedAt).getTime(),
      );
    } else if (this.sortBy == 'count') {
      this.items = this.items.sort(
        (a, b) => parseInt(a.statistics.viewCount) - parseInt(b.statistics.viewCount),
      );
    }
    this.sortDirectionHelper(this.items, this.sortDirection);
  }

  sortDirectionHelper(array: ISearchItem[], direction: string): ISearchItem[] | null {
    if (direction == 'up') {
      return array;
    } else if (direction == 'down') {
      return array.reverse();
    }
    return null;
  }
}
