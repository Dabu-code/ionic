import { Component, OnInit } from '@angular/core';
import { notificationService } from './notification.service';


@Component({
  selector: 'app-notification-push',
  templateUrl: './notification-push.page.html',
  styleUrls: ['./notification-push.page.scss'],
})
export class NotificationPushPage implements OnInit {

  constructor(private notification_service: notificationService) {
  
  }

  ngOnInit(): void {
    
  }


 /* 
 web---------------
 
 message: any;
  mesaggeReceived = '';
  constructor(private notification_service: notificationWebService) {
    this.notification_service.requestPermission()

  }

  ngOnInit() {
    this.notification_service.listen();
    this.notification_service.current_message.subscribe(res => {
      this.message = res
      console.log(this.message)
    });

    this.notification_service.recibeMessage().subscribe(res => {
      console.log(res)
    })

  } */



}
