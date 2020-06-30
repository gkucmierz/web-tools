import { Component, OnInit } from '@angular/core';

const LOWER_CASE = 'abcdefghijklmnopqrstuvwxyz';
const UPPER_CASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS = '0123456789';
const SPECIAL_CHARS = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

@Component({
  selector: 'app-passwords',
  templateUrl: './passwords.component.html',
  styleUrls: ['./passwords.component.scss']
})
export class PasswordsComponent implements OnInit {
  lowerCase = true;
  upperCase = true;
  digits = true;
  specialChars = false;
  other = false;
  otherChars = '';
  passwordLength = 16;
  passwordsNumber = 20;

  passwords = '';

  constructor() { }

  ngOnInit(): void {
  }

  generate(): void {
    const array = size => new Array(size || 0).fill(0);
    const str = [
      ...(this.lowerCase ? [LOWER_CASE] : []),
      ...(this.upperCase ? [UPPER_CASE] : []),
      ...(this.digits ? [DIGITS] : []),
      ...(this.specialChars ? [SPECIAL_CHARS] : []),
      ...(this.other ? [this.otherChars] : []),
    ].join('');

    this.passwords = array(this.passwordsNumber).map(() => {
      return array(this.passwordLength).map(() => {
        return str[Math.round(Math.random() * str.length) % str.length];
      }).join('');
    }).join('\n');
  }

}
