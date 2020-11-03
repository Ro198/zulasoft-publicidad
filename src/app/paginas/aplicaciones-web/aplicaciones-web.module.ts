import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AplicacionesWebPageRoutingModule } from './aplicaciones-web-routing.module';

import { AplicacionesWebPage } from './aplicaciones-web.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AplicacionesWebPageRoutingModule
  ],
  declarations: [AplicacionesWebPage]
})
export class AplicacionesWebPageModule {}
