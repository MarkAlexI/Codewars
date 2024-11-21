const strCount = (obj, result = 0) => {
  for (let i in obj) result += typeof(obj[i]) === 'object' ? strCount(obj[i]) : typeof(obj[i]) === 'string' ? 1 : 0;
  return result;
}
