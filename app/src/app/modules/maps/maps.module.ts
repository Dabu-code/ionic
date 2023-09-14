import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapsPageRoutingModule } from './maps-routing.module';

import { MapsPage } from './maps.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapsPageRoutingModule,
    GoogleMapsModule
  ],
  declarations: [MapsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MapsPageModule {}
