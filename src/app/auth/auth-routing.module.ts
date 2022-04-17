import { AuthGuard } from './../core/guards/auth.guard';
import { AdminPageComponent } from './pages/admin-page/admin-page/admin-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthPageComponent } from './pages/user-auth-page/user-auth-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserAuthPageComponent,
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
