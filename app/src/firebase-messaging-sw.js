importScripts("https://www.gstatic.com/firebasejs/10.3.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.3.1/firebase-messaging-compat.js");
firebase.initializeApp({
    projectId: 'testdb-d82cc',
    appId: '1:342285708146:web:043a0993b8011292490beb',
    storageBucket: 'testdb-d82cc.appspot.com',
    apiKey: 'AIzaSyAImgK9z4PcXfmALLoSUUSx3eT9iYzgeTE',
    authDomain: 'testdb-d82cc.firebaseapp.com',
    messagingSenderId: '342285708146',
    measurementId: 'G-F3BV0LJHW6',
});
const messaging = firebase.messaging();