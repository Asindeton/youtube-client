import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { UserAuthPageComponent } from './pages/user-auth-page/user-auth-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserAuthComponent, UserAuthPageComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
  providers: [],
})
export class AuthModule {}
