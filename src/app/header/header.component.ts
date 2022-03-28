import { Component } from '@angular/core';

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

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }
}
