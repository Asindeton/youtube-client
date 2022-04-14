import { SearchService } from './../../services/search.service';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { CoreService } from './../../services/core.service';
import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit, OnInit {
  constructor(
    public coreService: CoreService,
    public router: Router,
    public authService: AuthService,
    public searchService: SearchService,
  ) {}

  public title = 'header';

  public searchPlaceholder = 'What are you want to find out?';

  public isLogin!: boolean;

  @ViewChild('searchInput')
  searchInput!: ElementRef;

  ngOnInit(): void {
    this.authService.getIsLoginState().subscribe((val) => (this.isLogin = val));
  }

  ngAfterViewInit() {
    this.searchService.searchWordSubscribe(this.searchInput);
  }
}
