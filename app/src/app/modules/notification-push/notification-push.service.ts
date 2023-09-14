import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { getMessaging, getToken, onMessage, Messaging, MessagePayload } from '@angular/fire/messaging';



@Injectable({ providedIn: 'root' })
export class notificationWebService {
    current_message = new BehaviorSubject<any>(null);

    constructor() { }
    ngOnInit(): void {
        this.listen();
    }

    requestPermission() {
        const messaging = getMessaging();
        getToken(messaging).then(
            (currentToken) => {
                if (currentToken) {
                    console.log("Hurraaa!!! we got the token.....");
                    console.log(currentToken);
                } else {
                    console.log('No registration token available. Request permission to generate one.');
                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
            });

    }

    listen() {
        const messaging = getMessaging();
        onMessage(messaging, (payload) => {
            console.log('Message received. ', payload);
            this.current_message.next(payload)
        });
    }
    private messageObservable = new Observable(obs => {
        const messaging = getMessaging();
        onMessage(messaging, (payload) => {
            console.log('Message received. ', payload);
            obs.next(payload)
        });
    })

    recibeMessage() {
        return this.messageObservable;
    }
}