import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-scanner-qr',
  templateUrl: './scanner-qr.page.html',
  styleUrls: ['./scanner-qr.page.scss'],
})
export class ScannerQRPage implements OnInit {
  isSupported = false;
  barcodes: Barcode[] = [];


  constructor(
    private alertController: AlertController,
  ) { }

  ngOnInit() {
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }



  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
    const ress = await BarcodeScanner.isGoogleBarcodeScannerModuleAvailable();
    console.log(ress);
    if (!ress.available) {
      await BarcodeScanner.installGoogleBarcodeScannerModule()
    }
    const { barcodes } = await BarcodeScanner.scan();
    this.barcodes.push(...barcodes);
    console.log("******* LO QUE ME REGRESA *******this.barcodes")
    console.log(this.barcodes)
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }

}