import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { QrScannerComponent as QrScanner } from 'angular2-qrscanner';
import { waitProp } from 'wait-prop';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss'],
})
export class QrScannerComponent implements OnInit {
  @ViewChild(QrScanner) qrScanner: QrScanner;

  lastScan: string;
  scanned: string[] = [];
  outputType = 'list';
  cameras = [];
  cameraIdx: number;

  constructor() { }

  clear(): void {
    this.scanned = [];
    delete this.lastScan;
  }

  changeCamera(cameraIdx): void {
    this.cameraIdx = cameraIdx;
    this.qrScanner.chooseCamera.next(this.cameras[this.cameraIdx]);
  }

  ngOnInit(): void {
    waitProp(this, 'qrScanner').then(qrScanner => {
      this.qrScanner.getMediaDevices().then(devices => {
        const videoDevices: MediaDeviceInfo[] = [];

        for (const device of devices) {
          if (device.kind.toString() === 'videoinput') {
            videoDevices.push(device);
          }
        }

        if (videoDevices.length > 0) {
          for (const dev of videoDevices) {
            if (dev.label.includes('back')) {
              this.cameras.push(dev);
            }
          }
        }

        const choosenDev = this.cameras.slice(-1)[0] || videoDevices[0];
        this.changeCamera(this.cameras.indexOf(choosenDev));
      });

      this.qrScanner.capturedQr.subscribe(result => {
        if (this.lastScan !== result) {
          this.lastScan = result;
          this.scanned.push(result);
        }
      });
    });
  }

}
