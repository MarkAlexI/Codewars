function getCellAdresses(range) {
  let adresses = [];
  const [from, to] = range.split`:`;
  let fromCol = from[0].charCodeAt(), fromRow = +from.slice(1);
  let toCol = to[0].charCodeAt(), toRow = +to.slice(1);

  if (from === to) return adresses;

  for (let i = fromRow; i <= toRow; i++) {
    for (let j = fromCol; j <= toCol; j++) {
      adresses.push(String.fromCharCode(j) + i);
    }
  }
  return adresses;
}
