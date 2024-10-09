function sameCase(a, b) {
  if (!/[a-z]/i.test(a) || !/[a-z]/i.test(b)) return -1;
  if (/[a-z]/.test(a) === /[a-z]/.test(b)) return 1;
  return 0;
}
