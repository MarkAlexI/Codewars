function chessBoard(rows, columns) {
  return Array(rows).
    fill(Array(columns).fill("#")).
    map((el, i) => el.map((_, j) =>
      i%2 == 0 ? j%2 == 0 ? "O": "X": j%2 == 0 ? "X" : "O"));
}
