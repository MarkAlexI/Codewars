function makeSentence(parts) {console.log(parts);
  return parts.reduce((sum, curr, i) => {
      return sum + (curr === '.' ? '' : curr === ',' || i === 0 ? curr : ' ' + curr);
    }, '') + '.';
}
