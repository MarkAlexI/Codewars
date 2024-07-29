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
