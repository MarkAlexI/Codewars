function min(arr, toReturn) {
  const m = Math.min(...arr);
  return toReturn === 'value'
           ? m
           : arr.indexOf(m);
}
