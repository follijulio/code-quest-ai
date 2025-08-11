/**
 * @param {Array} array
 */

function removeDuplicates(array) {
  let arrayNoDuplicates = [];

  const map = new Map();

  for (element of array) {
    if (!map.get(element)) {
      map.set(element, 1);
      arrayNoDuplicates.push(i);
    }
  }

  return arrayNoDuplicates;
}

function main() {
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
  console.log(removeDuplicates(["a", "b", "a", "c"]));
  console.log(removeDuplicates([5, 5, 5, 5]));
  console.log(removeDuplicates([1, 2, 3, 1, 2]));
}

main();
