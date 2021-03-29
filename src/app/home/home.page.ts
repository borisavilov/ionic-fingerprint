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
  
  public registerBiometricSecret() {
    this.faio.registerBiometricSecret({
         description: "Some biometric description", // optional | Default: null
         secret: "my-super-secret", // mandatory
         invalidateOnEnrollment: true, // optional | Default: false
         disableBackup: true, // (Android Only) | optional | always `true` on Android
    })
    .then((result: any) => {
      console.log(result)
      alert("Authentication successful");
    })
    .catch((error: any) => {
      console.log(error)
      alert("Authentication invalid " + error.message);
    });
  }
  
  public loadBiometricSecret() {
    this.faio.loadBiometricSecret({
         description: "Some biometric description", // optional | Default: null
         disableBackup: true, // always disabled on Android
    })
    .then((secret: string) => {
      console.log(secret)
      alert("Authentication successful, secret: " + secret);
    })
    .catch((error: any) => {
      console.log(error)
      alert("Authentication invalid " + error.message);
    });
  }
}
