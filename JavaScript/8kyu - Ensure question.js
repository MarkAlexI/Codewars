function ensureQuestion(s) {
  return /\?$/.test(s) ? s : s + '?';
}
