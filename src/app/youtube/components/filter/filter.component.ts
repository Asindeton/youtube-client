import { FilterService } from './../../services/filter.service';
import { CoreService } from './../../../core/services/core.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { SortType } from './model/filter.model';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  constructor(public coreService: CoreService, public filterService: FilterService) {}

  @ViewChild('wordInput')
  wordInput!: ElementRef;

  public SortType = SortType;

  filterHandler(event: string) {
    this.filterService.filterHandler(event, this.wordInput);
    this.setChanges();
  }

  searchByWord(event: string) {
    this.filterService.searchByWord(event);
    this.setChanges();
  }

  changeSortDirection() {
    this.filterService.changeSortDirection();
    this.setChanges();
  }

  setChanges() {
    this.coreService.sortBy = this.filterService.sortBy;
    this.coreService.sortDirection = this.filterService.sortDirection;
  }
}
