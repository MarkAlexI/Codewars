function solve(st, a, b) {
  return st.slice(0, a) +
         st.slice(a, b + 1).split('').reverse().join('') +
         st.slice(b + 1);
}
