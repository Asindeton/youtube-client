import { Store } from '@ngrx/store';
import { SearchService } from './../../services/search.service';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { CoreService } from './../../services/core.service';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { selectLogin } from 'src/app/redux/selectors/login.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  constructor(
    public coreService: CoreService,
    public router: Router,
    public authService: AuthService,
    public searchService: SearchService,
    private store: Store,
  ) {}

  public searchPlaceholder = 'What are you want to find out?';

  public isLogin$ = this.store.select(selectLogin);

  @ViewChild('searchInput')
  searchInput!: ElementRef;

  ngAfterViewInit() {
    this.searchService.searchWordSubscribe(this.searchInput);
  }
}
