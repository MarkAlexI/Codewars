function whatNumberIsIt(n){
  let x = n;
  if (n === Number.MAX_VALUE) x = 'Number.MAX_VALUE';
  if (n === Number.MIN_VALUE) x = 'Number.MIN_VALUE';
  if (n === Number.POSITIVE_INFINITY) x = 'Number.POSITIVE_INFINITY';
  if (n === Number.NEGATIVE_INFINITY) x = 'Number.NEGATIVE_INFINITY';
  if (Number.isNaN(n)) x = 'Number.NaN';
  return 'Input number is ' + x;
}
