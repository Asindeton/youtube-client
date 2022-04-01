import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { FilterComponent } from './filter/filter.component';
import { ShortNumberPipe } from './custom-pipe/short-number/short-number.pipe';
import { WordSortingPipe } from './custom-pipe/word-sorting/word-sorting.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    FilterComponent,
    ShortNumberPipe,
    WordSortingPipe,
  ],
  imports: [BrowserAnimationsModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
