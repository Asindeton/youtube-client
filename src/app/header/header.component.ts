import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public title = 'header';

  public userName = 'Your Name';

  public searchPlaceholder = 'What are you want to find out?';

  public showFilter = false;

  @Output() searchWordSetter = new EventEmitter<string>();

  @Output() sortingMethodSetter = new EventEmitter<string>();

  @Output() sortingDirectionSetter = new EventEmitter<string>();

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  searchValue(value: string) {
    this.searchWordSetter.emit(value);
  }

  handelSortMethod(val: string) {
    this.sortingMethodSetter.emit(val);
  }

  handlerSortDirection(val: string) {
    this.sortingDirectionSetter.emit(val);
  }
}
