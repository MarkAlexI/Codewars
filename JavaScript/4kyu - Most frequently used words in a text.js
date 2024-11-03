function topThreeWords(text) {
  return [...new Set(text
    .toLowerCase()
    .split(/(?:[^a-z'])+/)
    .filter(el => el.length > 0 && el[0] !== "\'")
    .map((el, i, arr) => [el, arr.filter(x => x === el).length])
    .sort((a, b) => b[1] - a[1])
    .map((el, i, arr) => arr.indexOf(el) === i ? el[0] : null))
  ].slice(0, 3);
}
