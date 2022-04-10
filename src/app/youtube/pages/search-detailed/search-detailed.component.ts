import { CardService } from './../../services/card.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ISearchItem } from 'src/models/search-item.model';
import { ISearchResponse } from 'src/models/search-response.model';
import * as data from 'src/assets/data/response.json';

@Component({
  selector: 'app-search-detailed',
  templateUrl: './search-detailed.component.html',
  styleUrls: ['./search-detailed.component.scss'],
})
export class SearchDetailedComponent implements OnInit {
  constructor(
    public route: ActivatedRoute,
    private router: Router,
    public location: Location,
    private cardService: CardService,
  ) {}

  //to-do remove to data service
  responseData: ISearchResponse = data;

  items: ISearchItem[] = this.responseData.items;

  itemInfo!: ISearchItem;

  public cardBorderColor = '';

  ngOnInit() {
    console.log(this.route.snapshot.params);
    const tempArr = this.items.find((elem) => elem.id == this.route.snapshot.params['id']);
    if (tempArr !== undefined) {
      this.itemInfo = tempArr;
      this.cardBorderColor = this.cardService.getBorderColor(this.itemInfo.snippet.publishedAt);
    } else {
      this.router.navigate(['error']);
    }
  }

  back() {
    this.location.back();
  }
}
