/**
 * @param {Array} array
 */

function mapByTwo(array) {
  let arrayByTwo = [];
  for (const element of array) {
    arrayByTwo.push(element * 2);
  }
  return arrayByTwo;
}

function main() {
  console.log(mapByTwo([1, 2, 3]));
  console.log(mapByTwo([0, -1, 5]));
  console.log(mapByTwo([]));
  console.log(mapByTwo([10]));
  console.log(mapByTwo([-3, 3]));
}

main();
