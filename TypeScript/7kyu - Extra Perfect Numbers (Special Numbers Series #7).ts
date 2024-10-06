export function extraPerfect(n: number): Array<number> {
  let result: Array<number> = [];
  for (let i: number = 1; i <= n; i++) {
    if (/1$/.test(i.toString(2))) result.push(i);
  }
  return result;
}
