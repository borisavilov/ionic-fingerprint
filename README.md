# Ionic Fingerprint AIO Authentication
Ionic 5|4 Fingerprint AIO Authentication for Android & iOS Example Application

## Description
In this Ionic 5/4 tutorial, we are going to implement Fingerprint Authentication Biometric Scanner in Ionic Angular application for Android and iOS platforms with an example application.

Most of the modern Android and iOS devices come with Fingerprint sensors to secure the device and its application using biometric credentials. These biometric details can be used by other applications in Android and iOS to provide an extra layer of security.

## Setup a new Ionic 5 Application

    $ ionic start ionic-fingerprint blank --type=angular

    $ cd ionic-fingerprint
    
    $ ionic cordova plugin add cordova-plugin-fingerprint-aio
    
    $ npm install @ionic-native/fingerprint-aio
    
    $ npm install @ionic-native/core

###  Import Plugin Class in App Module
- app.module.ts
// app.module.ts
```
...
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@NgModule({
 ...
  providers: [
    StatusBar,
    SplashScreen,
    FingerprintAIO,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Adding Fingerprint Scanner in Ionic App
- home.page.ts
```
// home.page.ts
import { Component } from '@angular/core';

import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private faio: FingerprintAIO
  ) {
  }

  public showFingerprintAuthDlg() {

    this.faio.isAvailable().then((result: any) => {
      console.log(result)

      this.faio.show({
        cancelButtonTitle: 'Cancel',
        description: "Some biometric description",
        disableBackup: true,
        title: 'Scanner Title',
        fallbackButtonTitle: 'FB Back Button',
        subtitle: 'This SubTitle'
      })
        .then((result: any) => {
          console.log(result)
          alert("Successfully Authenticated!")
        })
        .catch((error: any) => {
          console.log(error)
          alert("Match not found!")
        });

    })
      .catch((error: any) => {
        console.log(error)
      });
  }

}
```

### Add a Button in Home Template
- home.page.html
```
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title>
      Fingerprint AIO
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true" class="ion-padding">

  <h4>Tap the button to Authenticate</h4>
  <ion-button expand="full" fill="outline" (click)="showFingeerprintAuthentication()">Fingerprint Authenticate
  </ion-button>

</ion-content>
```

## Build android

    $ ionic cordova platform add android

    $ ionic cordova build android

    $ ionic cordova run android -l

## Reference

https://www.freakyjolly.com/ionic-fingerprint-aio-biometric-authentication-scanner-example-application/#Configuration_Options_Available





