import { CoreService } from './../../../../core/services/core.service';
import { SearchResultsService } from './../../../services/search-results.service';
import { ISearchItem } from './../models/search-item.model';
import { Component } from '@angular/core';
import * as data from 'src/assets/data/response.json';
import { ISearchResponse } from './../models/search-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  providers: [SearchResultsService],
})
export class SearchResultsComponent {
  constructor(public coreService: CoreService) {}

  //to-do remove to data service
  responseData: ISearchResponse = data;

  items: ISearchItem[] = this.responseData.items;
}
