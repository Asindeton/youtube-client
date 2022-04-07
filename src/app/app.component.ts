import { SortDirection } from './filter/model/filter.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';

  public searchWord = '';

  public sortBy = '';

  public sortDirection: SortDirection = SortDirection.up;

  public handleSearchWord(value: string) {
    this.searchWord = value;
  }

  public handlerSortResult(value: string) {
    this.sortBy = value;
  }

  public handlerSortDirection(value: SortDirection) {
    this.sortDirection = value;
  }
}
