function tops(msg) {
  let result = ``;
  for (let i = 1, j = 0; i < msg.length; i += 5 + 4 * j, j++) {
    result = msg[i] + result;
  }
  return result;
}
