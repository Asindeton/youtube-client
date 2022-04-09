import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/filter/filter.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FilterComponent, SearchResultsComponent, SearchItemComponent],
  imports: [CommonModule, SharedModule],
  exports: [FilterComponent, SearchResultsComponent],
})
export class YoutubeModule {}
