function unusedDigits(...arr) {
  const allDigits = new Set('0123456789');
  const presentDigits = new Set(arr.join(''));
  const missing = [...allDigits].filter(d => !presentDigits.has(d));
  return missing.sort().join('');
}
