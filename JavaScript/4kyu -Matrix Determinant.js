function determinant(m) {
  return m.length === 1 ?
         m[0][0] :
         m.length === 2 ?
         m[0][0] * m[1][1] - m[0][1] * m[1][0] :
         m[0].reduce((dt, curr, i) => {
           return dt + (-1) ** (i + 2) * curr * determinant(m.slice(1).map(row => row.filter((el, j) => i !== j)));
         }, 0);
}
