function octalToDecimal(numberString) {
  let length = numberString.length;
  return Array.from(numberString)
    .map((numeral, index) => Number(numeral) * Math.pow(8, length - 1 - index))
    .reduce((sum, current) => sum + current);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9