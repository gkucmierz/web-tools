import { Component, OnInit } from '@angular/core';

/**
 * ASCII to Unicode (decode Base64 to original data)
 * @param {string} b64
 * @return {string}
 */
const atou = (b64: string): string => decodeURIComponent(escape(atob(b64)));

/**
 * Unicode to ASCII (encode data to Base64)
 * @param {string} data
 * @return {string}
 */
const utoa = (data: string): string => btoa(unescape(encodeURIComponent(data)));

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.scss']
})
export class Base64Component implements OnInit {
  text = '';

  constructor() { }

  encode(): void {
    try {
      this.text = utoa(this.text);
    } catch (e) { }
  }

  decode(): void {
    try {
      this.text = atou(this.text);
    } catch (e) { }
  }

  ngOnInit(): void {
  }

}
