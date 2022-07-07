self.onmessage = async function (e) {
  console.log('[WORKER] created');
  // postMessage("[WORKER] Web worker onmessage established", e);
  console.log('fetch', fetch);
  const scriptText = await fetch('../js/calculate.js').then(res => res.text());
  const newWorkerStr = `self.onmessage=function(){${scriptText};postMessage(calculate());}`;
  const newWorkerBlob = new Blob([newWorkerStr], { type: 'application/javascript' });
  const newWorker = new Worker(URL.createObjectURL(newWorkerBlob));
  newWorker.onmessage = function (e) {
    self.postMessage(e.data);
    newWorker.terminate();
  }
  newWorker.postMessage('');
}