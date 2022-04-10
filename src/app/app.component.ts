import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SortDirection } from './youtube/components/filter/model/filter.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public router: Router) {}

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
