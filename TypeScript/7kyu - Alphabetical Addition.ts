export function addLetters(...letters: string[]) {
  const sum: number = letters.reduce((sum, curr) => sum + curr.charCodeAt(0) - 96, 0) || 26;
  const newLetter: string = String.fromCharCode((sum%26 || 26) + 96);
  return newLetter;
}
