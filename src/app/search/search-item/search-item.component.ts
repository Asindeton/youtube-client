import { Component, Input, OnInit } from '@angular/core';
import { ISearchItem } from 'src/models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() public post!: ISearchItem;

  public cardBorderColor = '';

  private colors = {
    red: '#EB5757',
    green: '#27AE60',
    blue: '#2F80ED',
    yellow: '#F2C94C',
  };

  ngOnInit(): void {
    this.getBorderColor();
  }

  private getBorderColor() {
    const date1 = new Date(this.post.snippet.publishedAt).getTime();
    const date2 = new Date().getTime();
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // If a publication date is less than a month, set border background to green
    // If a publication date is less than 7 days, set border background to blue
    // If a publication date is more than 6 months, set border background to red
    if (diffDays / 30 > 6) {
      this.cardBorderColor = this.colors.red;
    } else if (diffDays / 30 < 6 && diffDays / 30 > 1) {
      this.cardBorderColor = this.colors.yellow;
    } else if (diffDays > 7 && diffDays / 30 <= 1) {
      this.cardBorderColor = this.colors.green;
    } else if (diffDays <= 7) {
      this.cardBorderColor = this.colors.blue;
    }
  }
}
