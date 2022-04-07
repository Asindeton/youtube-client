
import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import * as data from 'src/assets/data/response.json';
import { ISearchItem } from 'src/app/search/models/search-item.model';
import { ISearchResponse } from 'src/app/search/models/search-response.model';
import { SortDirection } from 'src/app/filter/model/filter.model';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent implements OnChanges {
  @Input() public searchWord!: string;

  @Input() public sortBy!: string;

  @Input() public sortDirection: SortDirection = SortDirection.up;

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

  sortDirectionHelper(array: ISearchItem[], direction: SortDirection): ISearchItem[] | null {
    if (direction == SortDirection.up) {
      return array;
    } else if (direction == SortDirection.down) {
      return array.reverse();
    }
    return null;
  }

}
