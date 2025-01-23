function sumOfN(n) {
  let result = [], term = 0, sign = Math.sign(n);
  for (let i = 0; i <= Math.abs(n); i++) {
    term += i * sign;
    result.push(term);
  }
  return result;
}
