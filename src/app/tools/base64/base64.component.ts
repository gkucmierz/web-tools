import { Component, OnInit } from '@angular/core';

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
      this.text = btoa(this.text);
    } catch (e) { }
  }

  decode(): void {
    try {
      this.text = atob(this.text);
    } catch (e) { }
  }

  ngOnInit(): void {
  }

}
