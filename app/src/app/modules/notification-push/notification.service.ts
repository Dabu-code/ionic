import { Injectable } from "@angular/core";
import { ActionPerformed, PushNotificationSchema, PushNotifications, Token } from '@capacitor/push-notifications';
import { Platform } from "@ionic/angular";

@Injectable({ providedIn: 'root' })
export class notificationService {

    constructor(
        public platform: Platform,
    ) {
        this.initializeApp();
    }


    initializeApp() {

        if (this.platform.is('capacitor')) {

            PushNotifications.requestPermissions().then(result => {
                if (result.receive === 'granted') {
                    // Register with Apple / Google to receive push via APNS/FCM
                    PushNotifications.register();
                    this.listen();
                } else {
                    // Show some error
                }
            });

        } else {
            console.log('PushNotifications.requestPermission() -> no es movil');
        }
    }

    listen() {
        PushNotifications.addListener('registration',
            (token: Token) => {
                console.log('The token is:', token);
                console.log(token.value);
            }
        );

        PushNotifications.addListener('registrationError',
            (error: any) => {
                console.log('Error on registration', error);
            }
        );
        PushNotifications.addListener('registrationError',
            (error: any) => {
                alert('Error on registration: ' + JSON.stringify(error));
            }
        );

        // Show us the notification payload if the app is open on our device
        PushNotifications.addListener('pushNotificationReceived',
            (notification: PushNotificationSchema) => {
                alert('Push received: ' + JSON.stringify(notification));
            }
        );

        // Method called when tapping on a notification
        PushNotifications.addListener('pushNotificationActionPerformed',
            (notification: ActionPerformed) => {
                alert('Push action performed: ' + JSON.stringify(notification));
            }
        );
    }

}