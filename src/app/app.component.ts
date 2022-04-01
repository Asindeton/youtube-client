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

  public sortDirection = '';

  public handleSearchWord(value: string) {
    this.searchWord = value;
  }

  public handlerSortResult(value: string) {
    this.sortBy = value;
  }

  public handlerSortDirection(value: string) {
    this.sortDirection = value;
  }
}
