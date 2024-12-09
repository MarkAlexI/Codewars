function operate(n1: bigint, n2: bigint) : bigint | never {
  if (n2 === 0n) throw new Error('None');
  return n1 + n1 + n1 * n2 + n1 / n2;
}

export function evaluate(equation: string) : bigint | null {
  let equArr: string[] = equation.replace(/\s+/g, '').split('@');
  let numbers: bigint[] = equArr.map(BigInt);
  let result: bigint = numbers[0];

  try {
    for (let i = 0; i < numbers.length - 1; i++) {
      result = operate(result, numbers[i + 1]);
    }
  } catch(e) {
    return null;
  }
  return result;
}
