import { Component, OnInit, OnDestroy } from '@angular/core';

const UNDEFINED = [][0];
const NEXT_TICK = 0;
const WHATEVER = 0;

type Core = {
  idx: number;
  value: boolean;
  worker?: Worker;
  cnt?: number;
};

@Component({
  selector: 'app-cpu-load',
  templateUrl: './cpu-load.component.html',
  styleUrls: ['./cpu-load.component.scss']
})
export class CpuLoadComponent implements OnInit, OnDestroy {
  cores: Core[];

  constructor() {
    this.cores = Array(navigator.hardwareConcurrency || 8)
      .fill(0)
      .map((_, i) => ({
        idx: i + 1,
        value: false
      }));
    this.cores.map(this.restartWorker);
  }

  restartWorker(core: Core): void {
    if (core.worker) {
      core.worker.terminate();
    }
    core.worker = new Worker('./cpu-load.worker', { type: 'module' });
    core.worker.onmessage = ({ data }) => core.cnt = data;
    core.cnt = 0;
  }

  runWorker(core: Core): void {
    core.worker.postMessage(WHATEVER);
  }

  terminateWorker(core: Core): void {
    core.worker.terminate();
  }

  change(): void {
    // after tick, values are correct
    setTimeout(() => {
      this.cores.map((core: Core) => {
        if (core.value) {
          this.runWorker(core);
        } else {
           this.restartWorker(core);
        }
      });

      // const values = this.cores.map((core: Core) => core.value);
      // const allTrue = values.every(value => value === true);
      // const allFalse = values.every(value => value === false);
      // allTrue && this.changeAll(true);
      // allFalse && this.changeAll(false);
    }, NEXT_TICK);
  }

  changeAll(newValue): void {
    this.cores.map((core: Core) => core.value = newValue);
    this.change();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.cores.map(this.terminateWorker);
  }

}

// if (typeof Worker !== 'undefined') {
//   // Create a new
//   const worker = new Worker('./cpu-load.worker', { type: 'module' });
//   worker.onmessage = ({ data }) => {
//     console.log(`page got message: ${data}`);
//   };
//   worker.postMessage('hello');
// } else {
//   // Web Workers are not supported in this environment.
//   // You should add a fallback so that your program still executes correctly.
// }
