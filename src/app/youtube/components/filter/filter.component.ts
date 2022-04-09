import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { SortDirection } from './model/filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  public sortBy: string = '';

  public sortDirection: SortDirection = SortDirection.up;

  @ViewChild('wordInput')
  wordInput!: ElementRef;

  @Output()
  sortBySetter = new EventEmitter<string>();

  @Output()
  sortDirectionSetter = new EventEmitter<SortDirection>();

  filterHandler(event: string) {
    if (this.sortBy == event) {
      this.changeSortDirection();
    } else {
      this.sortBy = event;
    }
    if (this.sortBy.includes('word')) {
      this.sortBy = 'word-' + this.wordInput.nativeElement.value;
      if (this.wordInput.nativeElement.value) {
        this.changeSortDirection();
      }
    }
    this.sortBySetter.emit(this.sortBy);
  }

  searchByWord(event: string) {
    if (this.sortBy.includes('word')) {
      this.sortBy = 'word-' + event;
      this.sortBySetter.emit(this.sortBy);
    }
  }

  changeSortDirection() {
    this.sortDirection =
      this.sortDirection == SortDirection.up ? SortDirection.down : SortDirection.up;
    this.sortDirectionSetter.emit(this.sortDirection);
  }
}
