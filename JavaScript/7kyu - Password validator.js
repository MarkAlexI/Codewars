function password(str) {
  return /.{8,}/.test(str) && /\p{Lu}/u.test(str) &&
         /\p{Ll}/u.test(str) && /\p{Nd}/u.test(str);
}
