function outed(meet, boss) {
  let scores = 0, count = 0, happyLevel = 0;
  for (let person in meet) {
    scores += meet[person] * ((person === boss) ? 2 : 1);
    count++;
  }
  happyLevel = Math.ceil(scores/count);
  return happyLevel < 6 ? 'Get Out Now!' : 'Nice Work Champ!';
}
