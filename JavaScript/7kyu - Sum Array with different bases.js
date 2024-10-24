function sumItUp(numbersWithBases){
  return numbersWithBases
           .reduce((sum, curr) => sum + parseInt(curr[0], curr[1]), 0);
}
