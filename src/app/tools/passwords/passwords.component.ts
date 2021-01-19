import { Component, OnInit } from '@angular/core';

const LOWER_CASE = 'abcdefghijklmnopqrstuvwxyz';
const UPPER_CASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS = '0123456789';
const SPECIAL_CHARS = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
const SIMILAR_CHARS = new Set([...'iIl10oO8B3Evu![]{}']);

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
  skipSimilar = true;
  other = false;
  otherChars = '😄🤖';
  passwordLength = 16;
  passwordsNumber = 20;

  passwords = '';

  constructor() { }

  ngOnInit(): void {
  }

  generate(): void {
    const array = size => new Array(size || 0).fill(0);
    const chars = [...[
      ...(this.lowerCase ? [LOWER_CASE] : []),
      ...(this.upperCase ? [UPPER_CASE] : []),
      ...(this.digits ? [DIGITS] : []),
      ...(this.specialChars ? [SPECIAL_CHARS] : []),
      ...(this.other ? [this.otherChars] : []),
    ].join('')];

    const skipSimilar = this.skipSimilar ? [...chars].filter(char => !SIMILAR_CHARS.has(char)) : chars;
    const size = this.passwordsNumber * this.passwordLength;
    const rand = new Uint32Array(size);

    crypto.getRandomValues(rand);
    let pointer = 0;
    this.passwords = array(this.passwordsNumber).map(() => {
      return array(this.passwordLength).map(() => {
        return skipSimilar[rand[pointer++] % skipSimilar.length];
      }).join('');
    }).join('\n');
  }

}
