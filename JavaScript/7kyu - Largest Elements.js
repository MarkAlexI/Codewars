const largest = (n, array, l = array.length) => array
  .sort((a, b) => a - b)
  .slice(l - n, l);
