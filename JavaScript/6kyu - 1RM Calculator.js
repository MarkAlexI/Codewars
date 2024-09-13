function calculate1RM(w, r) {
  if (r === 0) return 0;
  if (r === 1) return w;
  const { round, max } = Math;
  const epley = w * (1 + r/30);
  const mcGlothin = 100 * w / (101.3 - 2.67123 * r);
  const lombardi = w * r ** .1;
  return round(max(epley, mcGlothin, lombardi));
}
