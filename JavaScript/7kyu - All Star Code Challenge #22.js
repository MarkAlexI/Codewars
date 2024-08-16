function toTime(seconds) {
  const hours = ~~(seconds/3600);
  const minutes= ~~(seconds%3600/60);
  return `${hours} hour(s) and ${minutes} minute(s)`;
}
