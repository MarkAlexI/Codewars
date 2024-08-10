Math.cuberoot = function(x) {
  if (x === 0 || x === +1 / 0 || x === -1 / 0 || x !== x) {
    return x;
  }
  const a = Math.abs(x);
  const y = Math.exp(Math.log(a) / 3);
  return (x / a) * (y + (a / (y * y) - y) / 3);
};

function youAreACube (value) {
  return Math.cuberoot(value) === ~~Math.cuberoot(value);
}
