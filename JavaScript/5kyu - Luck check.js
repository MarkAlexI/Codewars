function luckCheck(ticket) {
  const valid = (str) => /^[0-9]*$/.test(str);
  const errorLike = () => 42;

  if (!valid(ticket)) throw new errorLike();

  const tic = ticket.slice(0, ticket.length/2);
  const ket = ticket.slice(ticket.length/2 + .5);
  const sum = (str) => str.split``.reduce((a, b) => a + +b, 0);

  return sum(tic) === sum(ket);
}
