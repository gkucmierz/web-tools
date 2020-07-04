import { Component, OnInit, OnDestroy } from '@angular/core';

const UNDEFINED = [][0];
const NEXT_TICK = 0;

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
  }

  spawnWorker(core: Core): void {
    // load after tick to avoid switch rendering block
    setTimeout(() => {
      core.worker = new Worker('./cpu-load.worker', { type: 'module' });
      core.worker.onmessage = ({ data }) => {
        core.cnt = data;
      };
    }, NEXT_TICK);
    core.cnt = 0;
  }

  terminateWorker(core: Core): void {
    core.worker.terminate();
    core.worker = UNDEFINED;
    core.cnt = UNDEFINED;
  }

  change(): void {
    // after tick, values are correct
    setTimeout(() => {
      this.cores.map((core: Core) => {
        if (core.value && !core.worker) {
          this.spawnWorker(core);
        }
        if (!core.value && core.worker) {
          this.terminateWorker(core);
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
    this.cores.map((core: Core) => core.worker && core.worker.terminate());
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
