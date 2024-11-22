function parseMolecule(formula) {
  const removeBrackets = (a) =>
 	  /\d/.test(a[a.length - 1])
    ? a.slice(1,-2).repeat(+a[a.length-1])
    : a.slice(1,-1);
  const removeIndex = (a) => {
    const n = /\d\d/.test(a) ? -2 : -1;
    return a.slice(0, n).repeat(+a.slice(n));
  };
  let struct = {};
  const moleculaToAtoms = (a) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] === '') continue;
      struct[a[i]] ? struct[a[i]]++ : struct[a[i]] = 1;
    }
  };
  let x = /([A-Z][a-z]?[0-9][0-9]?)/g;
  let y = /(\([^\(\)]*\))(\d*)|(\[[^\[\]]*\])(\d*)|(\{[^\{\}]*\})(\d*)/g;
  while (/[\{\[\(]/.test(formula))
    formula = formula.replace(y, removeBrackets);
  formula = formula.replace(x, removeIndex);
  moleculaToAtoms(formula.split(/([A-Z][a-z]?)/));
  return struct;
}
