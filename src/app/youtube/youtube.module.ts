import { CardService } from './services/card.service';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/filter/filter.component';
import { SharedModule } from '../shared/shared.module';
import { SearchResultPageComponent } from './pages/search-result-page/search-result-page.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { FilterService } from './services/filter.service';
import { SearchDetailedComponent } from './pages/search-detailed/search-detailed.component';

@NgModule({
  declarations: [
    FilterComponent,
    SearchResultsComponent,
    SearchItemComponent,
    SearchResultPageComponent,
    SearchDetailedComponent,
  ],
  imports: [CommonModule, SharedModule, YoutubeRoutingModule],
  providers: [FilterService, CardService],
})
export class YoutubeModule {}
