function modifyMultiply (str, loc, num) {
  return Array.from({ length: num }, () => str.split` `[loc]).join`-`;
}
