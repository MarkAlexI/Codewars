function arrayPacking(a) {
  const x = a.reduceRight((sum, curr) => {
    return sum + curr.toString(2).padStart(8, '0');
  }, '');
  return parseInt(x, 2);
}
