import { Component, Input } from '@angular/core';
import { ISearchItem } from 'src/models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() public post!: ISearchItem;
}
