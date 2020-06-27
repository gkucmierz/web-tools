import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import {QrScannerComponent as QrScanner} from 'angular2-qrscanner';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss']
})
export class QrScannerComponent implements OnInit {
  @ViewChild(QrScanner) qrScannerComponent: QrScanner;

  lastScan: string;
  scanned: string[] = [];
  outputType = 'list';
  cameras = [];
  cameraIdx: number;

  constructor() { }

  clear() {
    this.scanned = [];
    delete this.lastScan;
  }

  changeCamera(cameraIdx) {
    this.cameraIdx = cameraIdx;
    this.qrScannerComponent.chooseCamera.next(this.cameras[this.cameraIdx]);
  }

  ngOnInit() {
    this.qrScannerComponent.getMediaDevices().then(devices => {
      const videoDevices: MediaDeviceInfo[] = [];
      let choosenDev;

      for (const device of devices) {
        if (device.kind.toString() === 'videoinput') {
          videoDevices.push(device);
        }
      }

      choosenDev = videoDevices[0];
      if (videoDevices.length > 0) {
        for (const dev of videoDevices) {
          if (dev.label.includes('front')) {
            choosenDev = dev;
            break;
          }
        }
      }

      this.changeCamera(this.cameras.indexOf(choosenDev));
    });

    this.qrScannerComponent.capturedQr.subscribe(result => {
      if (this.lastScan !== result) {
        this.lastScan = result;
        this.scanned.push(result);
      }
    });
  }

}
