import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('../app/auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../app/youtube/youtube.module').then((module) => module.YoutubeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
