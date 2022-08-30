function myMap(array, func) {
  let transformedArr = [];
  array.forEach((item, index, array) => transformedArr.push(func(item, index, array)));
  return transformedArr;
}

let plusOne = n => n + 1;
console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]