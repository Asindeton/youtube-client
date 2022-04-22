import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { CoreService } from './../../services/core.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private coreService: CoreService,
    public router: Router,
    public authService: AuthService,
  ) {}

  public title = 'header';

  public searchPlaceholder = 'What are you want to find out?';

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
