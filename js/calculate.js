const calculate = () => {
  let i = 0;
  console.log('>>> Calculate start');
  const DURATION = 3000;
  const startTime = Date.now();
  while (Date.now() - startTime < DURATION) {
    i++
  }
  console.log('<<< Calculate complete', i.toLocaleString());

  if (typeof document !== "undefined") {
    const result = document.getElementById('result');
    if (result) {
      result.innerHTML = `Result: ${i.toLocaleString()} ops.`;
    }
  }
  return i;
}

if (typeof window !== "undefined") {
  window.calculate = calculate;
}