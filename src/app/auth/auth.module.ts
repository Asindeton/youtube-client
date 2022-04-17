import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { UserAuthPageComponent } from './pages/user-auth-page/user-auth-page.component';
import { SharedModule } from '../shared/shared.module';
import { AdminPageComponent } from './pages/admin-page/admin-page/admin-page.component';
import { AddCardComponent } from './components/add-card/add-card.component';
import { LoginService } from './services/login.service';
import { AddCardService } from './services/add-card.service';

@NgModule({
  declarations: [UserAuthComponent, UserAuthPageComponent, AdminPageComponent, AddCardComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule, FormsModule, ReactiveFormsModule],
  providers: [LoginService, AddCardService],
})
export class AuthModule {}
