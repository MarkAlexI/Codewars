reverse = function(array) {
  return [...array].map(array.pop, array);
}
