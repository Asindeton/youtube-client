import { ElementRef, Injectable } from '@angular/core';
import { SortDirection } from '../components/filter/model/filter.model';

@Injectable()
export class FilterService {
  public sortBy: string = '';

  public sortDirection: SortDirection = SortDirection.up;

  filterHandler(event: string, wordInput: ElementRef) {
    if (this.sortBy == event) {
      this.changeSortDirection();
    } else {
      this.sortBy = event;
    }
    if (this.sortBy.includes('word')) {
      this.sortBy = 'word-' + wordInput.nativeElement.value;
      if (wordInput.nativeElement.value) {
        this.changeSortDirection();
      }
    }
  }

  searchByWord(event: string) {
    if (this.sortBy.includes('word')) {
      this.sortBy = 'word-' + event;
    }
  }

  changeSortDirection() {
    this.sortDirection =
      this.sortDirection == SortDirection.up ? SortDirection.down : SortDirection.up;
  }
}
