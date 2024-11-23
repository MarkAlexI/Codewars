function translateToAlienLanguage(string) {
  return string
           .toLowerCase()
           .split(" ")
           .reduce((acc, curr) => {
             return acc + " " + curr.split("").reduceRight((a, c) => {
               return a + c + ("euioa".includes(c) ? c : "");
             }, "");
           }, "")
           .trim();
}
