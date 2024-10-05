const helper = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const RomanNumerals = {
  fromRoman: (roman) => {
      let latin = 0;
      for (let i = 0; i < roman.length; i++) {
        latin += helper[roman[i] + roman[i + 1]]
                 ? helper[roman[i] + roman[i++ + 1]]
                 : helper[roman[i]]
                 ? helper[roman[i]]
                 : 0;
      }
      return latin;
    },
  toRoman: (latin) => {
      let roman = '';
        while (latin) {
        for (let i in helper) {
          if (helper[i] <= latin) {
            roman += i;
            latin -= helper[i];
            break;
          }
        }
      }
      return roman;
    },
};
