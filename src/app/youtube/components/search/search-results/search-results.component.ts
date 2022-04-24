import { selectYoutube } from './../../../../redux/selectors/youtube.selector';
import { DataService } from './../../../../core/services/data.service';
import { CoreService } from './../../../../core/services/core.service';
import { SearchResultsService } from './../../../services/search-results.service';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  providers: [SearchResultsService],
})
export class SearchResultsComponent {
  constructor(
    public coreService: CoreService,
    public dataService: DataService,
    private store: Store,
  ) {}

  items$ = this.store.select(selectYoutube);
}
