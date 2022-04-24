import { SearchService } from './../../services/search.service';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { CoreService } from './../../services/core.service';
import { Component, ElementRef, ViewChild, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit, OnInit, OnDestroy {
  constructor(
    public coreService: CoreService,
    public router: Router,
    public authService: AuthService,
    public searchService: SearchService,
  ) {}

  public searchPlaceholder = 'What are you want to find out?';

  public isLogin!: boolean;

  private isLoginSubscribe: Subscription = new Subscription();

  @ViewChild('searchInput')
  searchInput!: ElementRef;

  ngOnInit(): void {
    this.isLoginSubscribe = this.authService
      .getIsLoginState()
      .subscribe((val) => (this.isLogin = val));
  }

  ngOnDestroy(): void {
    this.isLoginSubscribe.unsubscribe();
  }

  ngAfterViewInit() {
    this.searchService.searchWordSubscribe(this.searchInput);
  }
}
