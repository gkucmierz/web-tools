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
  outputType:string = 'list';

  constructor() { }

  clear() {
    this.scanned = [];
    delete this.lastScan;
  }

  ngOnInit() {
    this.qrScannerComponent.getMediaDevices().then(devices => {
      const videoDevices: MediaDeviceInfo[] = [];
      
      for (const device of devices) {
        if (device.kind.toString() === 'videoinput') {
          videoDevices.push(device);
        }
      }
      
      if (videoDevices.length > 0) {
        let choosenDev;
        for (const dev of videoDevices){
          if (dev.label.includes('front')){
            choosenDev = dev;
            break;
          }
        }
        if (choosenDev) {
          this.qrScannerComponent.chooseCamera.next(choosenDev);
        } else {
          this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
        }
      }

    });

    this.qrScannerComponent.capturedQr.subscribe(result => {
      if (this.lastScan !== result) {
        this.lastScan = result;
        this.scanned.push(result);  
      }
    });
  }

}
