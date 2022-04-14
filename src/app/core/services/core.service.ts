import { SortDirection } from './../../youtube/components/filter/model/filter.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CoreService {
  public sortBy: string = '';

  public searchWord: string = '';

  public sortDirection: SortDirection = SortDirection.up;

  public showFilter = false;

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  setSearchWord(val: string) {
    this.searchWord = val;
    console.log(this.searchWord);
  }

  getSearchWord() {
    return this.searchWord;
  }
}
