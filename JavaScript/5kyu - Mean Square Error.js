const solution = function(firstArray, secondArray) {
  return firstArray.reduce((sum, curr, i) => Math.abs(curr - secondArray[i]) ** 2 + sum, 0)/firstArray.length;
}
