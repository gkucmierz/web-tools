import { Component, OnInit } from '@angular/core';

const TO = 0;
const FROM = 1;

const conv = {
  fahrenheit: [
    k => k * 9 / 5 - 459.67,
    f => (f + 459.67) * 5 / 9,
  ],
  rankine: [
    k => k * 9 / 5,
    r => r * 5 / 9,
  ],
  celsius: [
    k => k - 273.15,
    c => c + 273.15,
  ],
  centigrade: [
    k => k - 273.15,
    c => c + 273.15,
  ],
  kelvin: [
    k => k,
    k => k,
  ],
};

@Component({
  selector: 'app-temperature-converter',
  templateUrl: './temperature-converter.component.html',
  styleUrls: ['./temperature-converter.component.scss']
})
export class TemperatureConverterComponent implements OnInit {
  fahrenheit: string;
  rankine: string;
  celsius: string;
  centigrade: string;
  kelvin: string;

  constructor() { }

  onSearchChange(value, type): void {
    const kelvin = conv[type][FROM](+value);

    Object.keys(conv).map(key => {
      if (key === type) return;
      this[key] = conv[key][TO](kelvin).toFixed(2);
    });
  }

  ngOnInit(): void { }
}
