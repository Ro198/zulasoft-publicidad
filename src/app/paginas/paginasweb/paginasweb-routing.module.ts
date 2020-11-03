import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaswebPage } from './paginasweb.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaswebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaswebPageRoutingModule {}
