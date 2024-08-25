function gridMap(fn, a) {
  return a.map(el => el.map(x => fn(x)));
}
