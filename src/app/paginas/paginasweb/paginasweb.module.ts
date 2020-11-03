import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaswebPageRoutingModule } from './paginasweb-routing.module';

import { PaginaswebPage } from './paginasweb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaswebPageRoutingModule
  ],
  declarations: [PaginaswebPage]
})
export class PaginaswebPageModule {}
