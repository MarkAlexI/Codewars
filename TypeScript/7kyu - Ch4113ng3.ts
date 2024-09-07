export function nerdify(txt: string): string {
  return txt.replace(/([ael])/gi, function(a) {
    if (a === 'a' || a === 'A') return '4';
    if (a.toLowerCase() === 'e') return '3';
    if ('l'.includes(a)) return '1';
    return a;
  });
}
