function createArrayOfTiers(num) {
  const stringNum = num.toString();
  const result = [];
  for (let i = 1; i <= stringNum.length; i++) {
    result.push(stringNum.slice(0, i));
  }
  return result;
}
