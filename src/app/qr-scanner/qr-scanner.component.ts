import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { QrScannerComponent as QrScanner } from 'angular2-qrscanner';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class QrScannerComponent implements OnInit {
  @ViewChild(QrScanner) qrScanner: QrScanner;

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
    this.qrScanner.chooseCamera.next(this.cameras[this.cameraIdx]);
  }

  wait(prop, cb) {
    const DELAY = 50;
    const loop = () => {
      if (prop in this) {
        cb(this[prop]);
      } else {
        setTimeout(loop, DELAY);
      }
    };
    loop();
  }

  ngOnInit() {
    this.wait('qrScanner', qrScanner => {
      this.qrScanner.getMediaDevices().then(devices => {
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

      this.qrScanner.capturedQr.subscribe(result => {
        if (this.lastScan !== result) {
          this.lastScan = result;
          this.scanned.push(result);
        }
      });
    });
      
  }

}
