export function dative (word: string): string | undefined {
  const front: string = 'eéiíöőüű';
  const back: string = 'aáoóuú';
  const before: string = word.split('').filter(el => front.includes(el) || back.includes(el)).pop()!;
  const suffix: string = front.includes(before)
                 ? 'nek'
                 : back?.includes(before)
                 ? 'nak'
                 : '';
  return word + suffix;
}
