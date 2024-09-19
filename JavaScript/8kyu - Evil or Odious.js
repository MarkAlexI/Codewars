function evil(n) {
  const number = n
                  .toString(2)
                  .split``
                  .filter(el => el === '1')
                  .length;
  return number % 2 !== 0
         ? `It's Odious!`
         : `It's Evil!`;
}
