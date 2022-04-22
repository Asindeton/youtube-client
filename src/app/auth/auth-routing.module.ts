import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthPageComponent } from './pages/user-auth-page/user-auth-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserAuthPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
