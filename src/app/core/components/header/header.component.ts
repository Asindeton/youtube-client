import { CoreService } from './../../services/core.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public title = 'header';

  public userName = 'Your Name';

  public searchPlaceholder = 'What are you want to find out?';

  constructor(private coreService: CoreService) {}

  ngOnInit(): void {
    this.coreService.check();
  }

  toggleFilter() {
    this.coreService.showFilter = !this.coreService.showFilter;
  }

  searchValue(value: string) {
    // this.coreService.searchWord = value;
    this.coreService.setSearchWord(value);
  }
}
