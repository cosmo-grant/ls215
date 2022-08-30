function myReduce(array, func, initial) {
  array = array.slice();

  if (initial === undefined) {
    initial = array.shift();
  }

  array.forEach((item, index, array) => {
    initial = func(initial, item, index, array)
  })

  return initial;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49