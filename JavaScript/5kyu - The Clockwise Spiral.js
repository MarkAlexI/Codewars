function createSpiral(N) {
  if (N < 1 || Math.floor(N) !== N) return [];
  const spiral = Array(N).fill(0).map(el => Array(N).fill(1));
  let startCol = 0, startRow = 0, endCol = N - 1, endRow = N - 1, curr = 1;

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) spiral[startRow][i] = curr++;
    startRow++;

    for (let i = startRow; i <= endRow; i++) spiral[i][endCol] = curr++;
    endCol--;

    for (let i = endCol; i >= startCol; i--) spiral[endRow][i] = curr++;
    endRow--;

    for (let i = endRow; i >= startRow; i--) spiral[i][startCol] = curr++;
    startCol++;
  }
  return spiral;
}
