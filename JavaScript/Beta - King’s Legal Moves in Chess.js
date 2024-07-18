function kingAllPossibleMoves(startingPos, occupiedPos) {
  occupiedPos.push(startingPos);
  const columns = '#ABCDEFGH', allPos = [];
  const getCoords = (pos) => [+columns.indexOf(pos[0]), +pos[1]];
  const toCMCoords = ([x, y]) => columns[x] + '' + y;
  const kingCoords = getCoords(startingPos);
  const occupiedCoords = occupiedPos.map(el => getCoords(el));
  const isLegalPos = ([x, y]) => x > 0 && y > 0 && x <= 8 && y <= 8;
  const isFreePos = ([x, y]) => !occupiedCoords.some(([a, b]) => a === x && b === y);

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      let newPos = [kingCoords[0] + i, kingCoords[1] + j];
      if (isLegalPos(newPos) && isFreePos(newPos)) allPos.push(newPos);
    }
  }

  return allPos.map(toCMCoords);
}
