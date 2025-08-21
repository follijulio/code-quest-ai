/**
 * @param {Array} array
 */

function flatten(array) {
  let flattened = [];
  for (element of array) {
    if (Array.isArray(element)) {
      supposed_array = element;
      for (element of supposed_array) {
        flattened.push(element);
      }
    } else {
      flattened.push(element);
    }
  }

  return flattened;
}

function main() {
  console.log(flatten([1, [2, 3], 4]));
  console.log(
    flatten([
      [1, 2],
      [3, 4],
    ])
  );
  console.log(flatten([1, 2, 3]));
  console.log(flatten([[]]));
  console.log(flatten([1, [2, [3]]]));
}
main();
