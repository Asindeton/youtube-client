import { DataService } from './data.service';
import { SortDirection } from './../../youtube/components/filter/model/filter.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CoreService {
  constructor(private dataService: DataService) {}

  public sortBy: string = '';

  public searchWord: string = '';

  public sortDirection: SortDirection = SortDirection.Up;

  public showFilter = false;

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  async setSearchWord(val: string) {
    this.searchWord = val;
    this.dataService.loadData(val);
  }

  getSearchWord() {
    return this.searchWord;
  }
}
