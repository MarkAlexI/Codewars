function solution(n) {
  return `Value is ${'0'.repeat(5 - ('' + n).length) + n}`;
}
