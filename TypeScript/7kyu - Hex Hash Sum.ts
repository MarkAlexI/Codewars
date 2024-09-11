export function hexHash(code: string): number {
  return code
             .split('')
             .map(el => el.charCodeAt(0).toString(16).split('').filter(x => /\d/.test(x)))
             .flat(1)
             .reduce((sum, curr) => sum + +curr, 0);
}
