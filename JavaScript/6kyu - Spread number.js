Number.prototype[Symbol.iterator] = function* (i = 1) {
  while (i <= this) yield i++;
};
