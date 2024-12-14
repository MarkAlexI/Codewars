function mineLocation(field) {
  for (let i = 0; i < field.length; i++) {
    if (field[i].includes(1)) return [i, field[i].indexOf(1)];
  }
}
