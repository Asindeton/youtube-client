import { Component } from '@angular/core';
import * as data from 'src/assets/data/response.json';
import { ISearchItem } from 'src/models/search-item.model';
import { ISearchResponse } from 'src/models/search-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  responseData: ISearchResponse = data;

  items: ISearchItem[] = this.responseData.items;
}
