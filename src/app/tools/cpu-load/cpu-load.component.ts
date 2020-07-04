import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpu-load',
  templateUrl: './cpu-load.component.html',
  styleUrls: ['./cpu-load.component.scss']
})
export class CpuLoadComponent implements OnInit {
  cores: any[];

  constructor() {
    this.cores = Array(navigator['hardwareConcurrency'] || 8)
      .fill(0)
      .map((_, i) => ({
        idx: i + 1,
        value: false,
      }));
  }

  change(): void {
  }

  changeAll(newValue): void {
    this.cores.map(core => core.value = newValue);
  }

  ngOnInit(): void {
  }

}
