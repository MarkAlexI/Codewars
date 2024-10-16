function distanceBetweenPoints({x: xa, y: ya}, {x: xb, y: yb}) {
  return Math.sqrt(Math.pow(xa - xb, 2) + Math.pow(ya - yb, 2));
}
