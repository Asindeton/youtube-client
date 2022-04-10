import { SortDirection } from './../../youtube/components/filter/model/filter.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CoreService {
  public count = 0;

  public sortBy: string = '';

  public searchWord: string = '';

  public sortDirection: SortDirection = SortDirection.up;

  public showFilter = false;

  setSearchWord(val: string) {
    this.searchWord = val;
    console.log(this.searchWord);
  }

  getSearchWord() {
    return this.searchWord;
  }

  check() {
    this.count++;
    console.log(this.count);
    console.log('isWork');
  }
}
