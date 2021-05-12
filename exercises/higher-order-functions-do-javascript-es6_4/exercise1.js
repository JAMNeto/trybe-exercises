
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten(accumulator, array) {
  const newArray = [];
  for (let index = 0; index < accumulator.length; index +=1) {
    newArray.push(accumulator[index]);
  }
  return newArray;
}
console.log(arrays.reduce(flatten));

// assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);