function squareSum(numbers){
  return numbers.reduce((sum, current) => {
    return sum + (current * current);
  }, 0);
}
