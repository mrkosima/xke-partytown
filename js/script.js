const start = Date.now();

setInterval(() => {
  document.getElementById('time').innerHTML = (Math.round((Date.now() - start) / 100) / 10).toFixed(1) + ' sec';
}, 100);