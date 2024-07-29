function hexStringToRGB(hexString) {
  const isHexStr = (str) => /^#[A-F0-9]{6}$/i.test(str);
  if (!isHexStr(hexString)) throw "Incorrect input!";
  const hexStrToDecInt = (str) => parseInt(str, 16);
  const [r, g, b] = hexString
    .substr(1)
    .match(/.{1,2}/g)
    .map(hexStrToDecInt);
  return { r, g, b };
}

//Another version
function hexStringToRGB(hexString) {
  const conv = (hexColor) => +parseInt(hexColor, 16).toString(10);
  [r, g, b] = [conv(hexString.slice(1, 3)), conv(hexString.slice(3, 5)), conv(hexString.slice(5))];
  return { 'r': r, 'g': g, 'b': b };
}
