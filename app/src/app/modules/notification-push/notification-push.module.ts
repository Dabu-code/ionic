import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationPushPageRoutingModule } from './notification-push-routing.module';

import { NotificationPushPage } from './notification-push.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationPushPageRoutingModule
  ],
  declarations: [NotificationPushPage]
})
export class NotificationPushPageModule {}
