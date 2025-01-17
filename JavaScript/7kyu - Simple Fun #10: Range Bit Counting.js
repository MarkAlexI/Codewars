function rangeBitCount(a, b) {
  let result = 0;
  for (let i = a; i <= b; i++) {
    result += i.toString(2).split``.filter(el => el === '1').length;
  }
  return result;
}
