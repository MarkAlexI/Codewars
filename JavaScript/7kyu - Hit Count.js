function counterEffect(hitCount) {
  return hitCount
            .split``
            .map(el => {
              let range = [], to = +el;
              for (let i = 0; i <= to; i++) range.push(i);
              return range;
            });
}
