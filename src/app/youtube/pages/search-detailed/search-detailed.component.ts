import { Subscription } from 'rxjs';
import { DataService } from './../../../core/services/data.service';
import { CardService } from './../../services/card.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import * as defaultResponse from 'src/assets/data/defaultResponse.json';
import { ISearchItem } from '../../components/search/models/search-item.model';
import { ISearchResponse } from '../../components/search/models/search-response.model';

@Component({
  selector: 'app-search-detailed',
  templateUrl: './search-detailed.component.html',
  styleUrls: ['./search-detailed.component.scss'],
})
export class SearchDetailedComponent implements OnInit, OnDestroy {
  constructor(
    public route: ActivatedRoute,
    private router: Router,
    public location: Location,
    private cardService: CardService,
    public dataService: DataService,
  ) {}

  public isLoaded = true;

  responseData: ISearchResponse = defaultResponse;

  items: ISearchItem[] = this.responseData.items;

  itemInfo!: ISearchItem;

  public cardBorderColor = '';

  private dataSubscription: Subscription = new Subscription();

  ngOnInit() {
    this.dataSubscription = this.dataService
      .getVideoDataRequest(this.route.snapshot.params['id'])
      .subscribe((data) => {
        this.responseData = data;
        this.items = data.items;

        const tempArr = this.items.find((elem) => elem.id == this.route.snapshot.params['id']);

        if (tempArr !== undefined) {
          this.itemInfo = tempArr;
          this.cardBorderColor = this.cardService.getBorderColor(this.itemInfo.snippet.publishedAt);
          this.isLoaded = false;
        } else {
          this.router.navigate(['error']);
        }
      });
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

  back() {
    this.location.back();
  }
}
