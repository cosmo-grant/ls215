function totalArea(rectangles) {
  return rectangles
    .map(([width, length]) => width * length)
    .reduce((total, current) => total + current);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));  // 141

function totalSquareArea(rectangles) {
  let squares = rectangles.filter(([width, length]) => width === length);
  return totalArea(squares);
}

console.log(totalSquareArea(rectangles));    // 121