import { ElementRef, Injectable } from '@angular/core';
import { SortDirection, SortType } from '../components/filter/model/filter.model';

@Injectable()
export class FilterService {
  public sortBy: string = '';

  public sortDirection: SortDirection = SortDirection.Up;

  filterHandler(event: string, wordInput: ElementRef) {
    if (this.sortBy == event) {
      this.changeSortDirection();
    } else {
      this.sortBy = event;
    }
    if (this.sortBy.includes(SortType.Word)) {
      this.sortBy = `${SortType.Word}-${wordInput.nativeElement.value}`;
      if (wordInput.nativeElement.value) {
        this.changeSortDirection();
      }
    }
  }

  searchByWord(event: string) {
    if (this.sortBy.includes(SortType.Word)) {
      this.sortBy = `${SortType.Word}-${event}`;
    }
  }

  changeSortDirection() {
    this.sortDirection =
      this.sortDirection == SortDirection.Up ? SortDirection.Down : SortDirection.Up;
  }
}
