import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppsmovilesPage } from './appsmoviles.page';

const routes: Routes = [
  {
    path: '',
    component: AppsmovilesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppsmovilesPageRoutingModule {}
