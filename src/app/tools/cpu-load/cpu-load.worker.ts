/// <reference lib="webworker" />

const DELAY = 50;
const getTime = () => +new Date();

addEventListener('message', () => {
  let cnt = 0;
  let lastTime = getTime();
  while (true) {
    const time = getTime();
    if (time - lastTime >= DELAY) {
      postMessage(cnt);
      lastTime = time;
    }
    ++cnt;
  }
});

