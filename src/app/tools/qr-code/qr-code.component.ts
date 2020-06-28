import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements OnInit {
  value = 'Hello World!';
  size = 300;
  errorCorrectionLevel = 'M';

  constructor() { }

  ngOnInit(): void {
  }

}
