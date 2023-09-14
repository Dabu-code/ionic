import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationPushPage } from './notification-push.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationPushPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationPushPageRoutingModule {}
