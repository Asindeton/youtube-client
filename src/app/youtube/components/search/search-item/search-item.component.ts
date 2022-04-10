import { Router } from '@angular/router';
import { CardService } from './../../../services/card.service';
import { Component, Input, OnInit } from '@angular/core';
import { ISearchItem } from '../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  constructor(private cardService: CardService, public router: Router) {}

  @Input() public post!: ISearchItem;

  public cardBorderColor = '';

  ngOnInit(): void {
    this.cardBorderColor = this.cardService.getBorderColor(this.post.snippet.publishedAt);
  }
}
