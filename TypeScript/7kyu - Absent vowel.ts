export function absentVowel(x: string) {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
  const lowerStr: string = x.toLowerCase();
  
  for (let i = 0; i < vowels.length; i++) {
    if (!lowerStr.includes(vowels[i])) {
         return i;
    }
  }
}
