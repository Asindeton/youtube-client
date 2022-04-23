import { DataService } from './services/data.service';
import { SearchService } from './services/search.service';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CoreService } from './services/core.service';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptorService } from './services/api-interceptor.service';
@NgModule({
  declarations: [HeaderComponent, ErrorPageComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [HeaderComponent],
  providers: [
    CoreService,
    AuthService,
    SearchService,
    DataService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorService, multi: true },
  ],
})
export class CoreModule {}
