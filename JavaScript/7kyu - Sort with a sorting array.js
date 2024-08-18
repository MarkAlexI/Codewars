function sort(initialArray, sortingArray) {
  return initialArray
           .map((el, i) => [el, sortingArray[i]])
           .sort((a, b) => a[1] - b[1])
           .map(el => el[0]);
}
