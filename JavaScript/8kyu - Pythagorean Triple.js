function isPythagoreanTriple(integers) {
  const hypothenuse = Math.max(...integers);
  const legs = integers.filter(el => el !== hypothenuse);
  return hypothenuse ** 2 === legs[0] **2 + legs[1] ** 2;
}
