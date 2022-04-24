import { DataService } from './../../../../core/services/data.service';
import { CoreService } from './../../../../core/services/core.service';
import { SearchResultsService } from './../../../services/search-results.service';
import { ISearchItem } from './../models/search-item.model';
import { Component, OnInit } from '@angular/core';
import * as defaultResponse from 'src/assets/data/defaultResponse.json';
import { ISearchResponse } from './../models/search-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  providers: [SearchResultsService],
})
export class SearchResultsComponent implements OnInit {
  constructor(public coreService: CoreService, public dataService: DataService) {}

  //to-do remove to data service
  responseData: ISearchResponse = defaultResponse;

  items: ISearchItem[] = this.responseData.items;

  ngOnInit(): void {
    this.dataService.data.subscribe((response) => {
      this.responseData = response;
      this.items = response.items;
    });
  }
}
