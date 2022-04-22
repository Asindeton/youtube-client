import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CoreService } from './services/core.service';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
@NgModule({
  declarations: [HeaderComponent, ErrorPageComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent],
  providers: [CoreService, AuthService],
})
export class CoreModule {}
