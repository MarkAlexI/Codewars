function vaporcode(string) {
  return string
               .toUpperCase()
               .split``
               .filter(el => el != ' ')
               .join`  `;
}
