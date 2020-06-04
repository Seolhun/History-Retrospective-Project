let count = 0;

const renderCount = () => {
  document.getElementById("app").innerHTML = `
    <h1>Count: ${count}</h1>
  `;
};

const handleCount = () => {
  count = count + 1;
  renderCount();
  return count;
};

const countUp = (callback, limit = 10, ms = 50) => {
  if (callback) {
    const value = callback();
    if (value >= limit) {
      return;
    }
    console.error("@@", value);
    setTimeout(() => {
      countUp(callback, limit, ms);
    }, ms);
  }
};

countUp(handleCount, 1000, 50);
