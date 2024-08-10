var summation = function (num) {
  return (new Array(num))
    .fill(1)
    .map((it, i) => it = ++i)
    .reduce((a, b) => a + b);
}
