/// <reference lib="webworker" />

const DELAY = 50;

let cnt = 0;
let lastDate = +new Date();
while (true) {
  const date = +new Date();
  if (date - lastDate >= DELAY) {
    postMessage(cnt);
    lastDate = date;
  }
  ++cnt;
}

