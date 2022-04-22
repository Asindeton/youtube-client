import { SearchDetailedComponent } from './pages/search-detailed/search-detailed.component';
import { SearchResultPageComponent } from './pages/search-result-page/search-result-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SearchResultPageComponent,
  },
  {
    path: 'detailed/:id',
    component: SearchDetailedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
