function validPass(password) {
  return /^[A-Za-z0-9]{4,19}$/g.test(password) &&
         /[A-Za-z]/.test(password) &&
         /\d/.test(password)
           ? 'VALID'
           : 'INVALID';
}
