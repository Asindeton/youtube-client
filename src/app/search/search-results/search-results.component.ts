import { Component, Input, OnInit } from '@angular/core';
import * as data from 'src/assets/data/response.json';
import { ISearchItem } from 'src/models/search-item.model';
import { ISearchResponse } from 'src/models/search-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  @Input() public searchWord!: string;

  responseData: ISearchResponse = data;

  items: ISearchItem[] = this.responseData.items;

  ngOnInit(): void {
    if (this.searchWord.trim() == '') {
      this.items = [];
    } else {
      this.items = this.items.filter((item) =>
        item.snippet.title.toLowerCase().includes(this.searchWord.toLowerCase()),
      );
    }
  }
}
