String.prototype.trim = function() {
  return this.replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};