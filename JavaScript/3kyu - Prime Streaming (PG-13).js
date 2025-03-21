class Primes {
  static * stream(limit = 2e+7) {
    if (limit < 2) return;

    let sieve = Array(limit + 1).fill(false);
    let sqrtLimit = Math.sqrt(limit);

    for (let x = 1; x <= sqrtLimit; x++) {
      for (let y = 1; y <= sqrtLimit; y++) {
        let n = 4 * x ** 2 + y ** 2;
        if (n <= limit && (n % 12 === 1 || n % 12 === 5)) {
          sieve[n] = !sieve[n];
        }

        n = 3 * x ** 2 + y ** 2;
        if (n <= limit && n % 12 === 7) {
          sieve[n] = !sieve[n];
        }

        n = 3 * x ** 2 - y ** 2;
        if (x > y && n <= limit && n % 12 === 11) {
          sieve[n] = !sieve[n];
        }
      }
    }

    for (let n = 5; n <= sqrtLimit; n++) {
      if (sieve[n]) {
        let k = n ** 2;
        for (let multiple = k; multiple <= limit; multiple += k) {
          sieve[multiple] = false;
        }
      }
    }

    yield 2;
    if (limit > 2) yield 3;
    for (let n = 5; n <= limit; n += 2) {
      if (sieve[n]) yield n;
    }
  }
}
