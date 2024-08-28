function barTriang([p1x, p1y], [p2x, p2y], [p3x, p3y]) {
  return [
          +((p1x + p2x + p3x)/3).toFixed(4),
          +((p1y + p2y + p3y)/3).toFixed(4)
         ];
}
