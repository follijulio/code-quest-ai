/**
 * @param {Array} array
 */

function biggestNumber(array) {
  let bigger = 0;

  for (index in array) {
    if (array[index] > bigger || index == 0) {
      bigger = array[index];
    }
  }
  return bigger || undefined;
}

function main() {
  console.log(biggestNumber([1, 2, 3, 5, 5]));
  console.log(biggestNumber([-10, -5, -3]));
  console.log(biggestNumber([100]));
  console.log(biggestNumber([]));
  console.log(biggestNumber([7, 7, 7, 7]));
}

main();
