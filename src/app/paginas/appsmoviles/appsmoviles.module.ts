import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppsmovilesPageRoutingModule } from './appsmoviles-routing.module';

import { AppsmovilesPage } from './appsmoviles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppsmovilesPageRoutingModule
  ],
  declarations: [AppsmovilesPage]
})
export class AppsmovilesPageModule {}
