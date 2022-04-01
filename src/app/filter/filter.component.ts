import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements AfterViewInit {
  public sortBy: string = '';

  public sortDirection: string = 'up';

  @ViewChild('wordInput')
  wordInput!: ElementRef;

  @Output()
  sortBySetter = new EventEmitter<string>();

  @Output()
  sortDirectionSetter = new EventEmitter<string>();

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.sortDirectionSetter.emit(this.sortDirection);
    }, 0);
  }

  filterHandler(event: string) {
    this.sortBy = event;
    if (this.sortBy.includes('word')) {
      this.sortBy = 'word-' + this.wordInput.nativeElement.value;
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
    this.sortDirection = this.sortDirection == 'up' ? 'down' : 'up';
    this.sortDirectionSetter.emit(this.sortDirection);
  }
}
