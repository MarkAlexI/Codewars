function Hex(value) {
  this.value = value;
  this.hexValue = '0x' + value.toString(16).toUpperCase();

  this.valueOf = function() {
    return this.value;
  }

  this.toString = function() {
    return this.hexValue;
  }

  this.toJSON = function() {
    return this.hexValue;
  };

  this.plus = function(num) {
    return new Hex(this.value + num);
  };

  this.minus = function(num) {
    return new Hex(this.value - num);
  }
}

Hex.parse = function(string) {
  return parseInt(string, 16);
}
