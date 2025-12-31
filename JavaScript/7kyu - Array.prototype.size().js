Array.prototype.size = function() {
  delete this.length;
  return this.reduce((_, ) => 1 + _, 0);
};
